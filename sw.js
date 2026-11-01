const CACHE_NAME = 'practica-v1';
// 音声はシェルと別キャッシュにする（アプリ更新のたびに音声を消さないため）
const AUDIO_CACHE_NAME = 'practica-audio-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './audio/silence.m4a',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/apple-touch-icon-180.png'
];

// 音声URLの判定（audio/< setId >/ja|en-XX.m4a）。詳細は generate_audio.mjs参照
function isAudioRequest(request) {
  const pathname = new URL(request.url).pathname;
  return pathname.includes('/audio/') && !pathname.includes('silence');
}

// インストール時にシェル（HTML/CSS/JSやアイコン）をキャッシュ。
// ※ 学習セットの音声は件数・内容が変わるため、事前キャッシュではなく
//   「ランタイムキャッシュ（取得時に保存）＋アプリからの先行キャッシュ依頼」で扱う
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 新しいService Workerがアクティブ化されたら古いキャッシュを削除
// ※ 音声キャッシュはアプリからの sync-audio メッセージで掃除するため、ここでは触らない
self.addEventListener('activate', (event) => {
  const validCaches = [CACHE_NAME, AUDIO_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!validCaches.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 音声URLを順次取得して音声キャッシュに保存（キャッシュ済みならスキップ）
function precacheAudio(urls) {
  return caches.open(AUDIO_CACHE_NAME).then((cache) =>
    Promise.all(
      urls.map((url) =>
        cache.match(url).then((hit) => {
          if (hit) return;
          return fetch(url)
            .then((response) => {
              if (response && response.ok) return cache.put(url, response);
            })
            .catch(() => {});
        })
      )
    )
  );
}

// アプリから届く現行URL一覧に無い音声キャッシュを削除（データ更新後の古い音声の掃除）
function pruneAudioCache(urls) {
  const keep = new Set(
    urls.map((url) => {
      let href = url;
      try {
        href = new URL(url, self.registration.scope).href;
      } catch (_) {}
      return href;
    })
  );
  return caches.open(AUDIO_CACHE_NAME).then((cache) =>
    cache.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (!keep.has(key.href)) return cache.delete(key);
        })
      )
    )
  );
}

// アプリからの依頼（postMessage）: 先行キャッシュと旧音声の掃除
self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'precache-audio' && Array.isArray(data.urls)) {
    if (typeof event.waitUntil === 'function') event.waitUntil(precacheAudio(data.urls));
    else precacheAudio(data.urls);
  } else if (data.type === 'sync-audio' && Array.isArray(data.urls)) {
    if (typeof event.waitUntil === 'function') event.waitUntil(pruneAudioCache(data.urls));
    else pruneAudioCache(data.urls);
  }
});

// ネットワーク優先 / キャッシュフォールバック (オフライン対応)
self.addEventListener('fetch', (event) => {
  // GETリクエストのみキャッシュ対象
  if (event.request.method !== 'GET') {
    return;
  }

  // http/https 以外のスキームは無視
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // 音声ファイルはキャッシュ優先（ロック中の連続再生で間延びしないため）
  // ※ 音声URLは ?v=<ハッシュ> 付きのため、データ更新時は新しいURLを取りに来る
  if (isAudioRequest(event.request)) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(AUDIO_CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
            return response;
          });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // レスポンスが正常ならキャッシュを更新
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // オフライン時はキャッシュから返す
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // HTMLリクエストでキャッシュが見つからない場合はindex.htmlを返す
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
