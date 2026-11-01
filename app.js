// デフォルトで出題する27個の英語問題データです。
const SETS = [
    {
      "id": "daily",
      "name": "Set 1",
      "audioVersion": "5b0b56eb",
      "chunks": [
      {
      "keyPhrase": "We'll know by tomorrow"
,
      "japanese": "明日になれば分かるよ。"
,
      "fullQuote": "We'll know by tomorrow."
,
      "situation": "宇宙兄弟：選考・結果が翌日には判明すると、仲間を落ち着かせる場面（英語版ファン字幕）。"
,
      "explanation": "will を使い、将来の時点までに答えが分かることを伝える。by tomorrow は「遅くとも明日までに」。"
,
      "blankWord": "by"
      },
      {
      "keyPhrase": "Can't complain"
,
      "japanese": "悪くないよ／文句はないね。"
,
      "fullQuote": "Can't complain."
,
      "situation": "ワンピース：仲間に近況を聞かれ、悪くないと軽く返す日常的な受け答え（英語吹替）。"
,
      "explanation": "How are you? への控えめにポジティブな返答。Everything is great. ほど大げさではない。"
,
      "blankWord": "Can't"
      },
      {
      "keyPhrase": "Hey stranger"
,
      "japanese": "やあ、久しぶり。"
,
      "fullQuote": "Hey, stranger."
,
      "situation": "ワンピース（二次創作）：久しぶりに会ったUsoppがSanjiへ挨拶する場面。"
,
      "explanation": "久々に会う親しい相手への冗談めいた挨拶。「知らない人」という字義ではない。"
,
      "blankWord": "stranger"
      },
      {
      "keyPhrase": "I feel you"
,
      "japanese": "分かるよ／その気持ち分かる。"
,
      "fullQuote": "I feel you."
,
      "situation": "呪術廻戦（ファン会話・二次創作）：相手の気持ちに共感するくだけた返答。"
,
      "explanation": "I understand. より口語的。相手の感情や置かれた状況への共感を示す。"
,
      "blankWord": "feel"
      },
      {
      "keyPhrase": "Fingers crossed"
,
      "japanese": "うまくいくといいね。"
,
      "fullQuote": "Fingers crossed."
,
      "situation": "僕のヒーローアカデミア（二次創作）：試験や作戦の成功を願う場面。"
,
      "explanation": "幸運を祈る決まり文句。Good luck. に近い。"
,
      "blankWord": "crossed"
      },
      {
      "keyPhrase": "After you"
,
      "japanese": "どうぞお先に。"
,
      "fullQuote": "After you."
,
      "situation": "名探偵コナン：相手を先に部屋や会場へ通す場面（英語吹替）。"
,
      "explanation": "順番を譲る丁寧な一言。ドアやエレベーターの前でよく使う。"
,
      "blankWord": "After"
      },
      {
      "keyPhrase": "Thanks for having me"
,
      "japanese": "招いてくれてありがとう。"
,
      "fullQuote": "Thanks for having me."
,
      "situation": "ワンピースのファン・コミュニティ会話：歓迎された場で別れ際にお礼を言う例。"
,
      "explanation": "訪問先・会合・番組などへ招いてくれた人に使う。Thank you for inviting me. より自然な言い方。"
,
      "blankWord": "having"
      },
      {
      "keyPhrase": "Anytime"
,
      "japanese": "いつでもどうぞ。"
,
      "fullQuote": "Anytime."
,
      "situation": "NARUTO：頼まれごとへの返答として使われる英語表記の台詞。"
,
      "explanation": "Thank you. への返答で「気にしないで、いつでも頼って」の気持ちを表す。"
,
      "blankWord": "Anytime"
      },
      {
      "keyPhrase": "Works for me"
,
      "japanese": "私はそれで大丈夫です。"
,
      "fullQuote": "That works for me."
,
      "situation": "ワンピースの字幕制作フォーラム：提案された訳文に同意する文脈。"
,
      "explanation": "予定・案・条件への賛成を伝える表現。That sounds good. とほぼ同じように使える。"
,
      "blankWord": "works"
      },
      {
      "keyPhrase": "I'd love to"
,
      "japanese": "ぜひそうしたいです。"
,
      "fullQuote": "I'd love to."
,
      "situation": "映像研には手を出すな！：誘いや提案に喜んで応じる場面（英語字幕）。"
,
      "explanation": "I'd like to. より積極的で温かい「ぜひ」の返答。後ろに動詞を続けられる。"
,
      "blankWord": "love"
      },
      {
      "keyPhrase": "Take your time"
,
      "japanese": "ゆっくりでいいよ。"
,
      "fullQuote": "There's plenty, so take your time."
,
      "situation": "進撃の巨人：Nicoloの料理を食べるSashaたちに、慌てなくてよいと声をかける場面（英語字幕）。"
,
      "explanation": "相手に急ぐ必要がないと伝える表現。急かす意味の Take your time! とは文脈・口調で区別する。"
,
      "blankWord": "time"
      },
      {
      "keyPhrase": "I lost track of time"
,
      "japanese": "時間を忘れていた。"
,
      "fullQuote": "I lost track of time a little."
,
      "situation": "葬送のフリーレン（二次創作）：Frierenが長く会いに来なかったことを説明する場面。"
,
      "explanation": "何時なのか、どれほど時間がたったのか意識しなくなったときに使う。"
,
      "blankWord": "track"
      },
      {
      "keyPhrase": "Have fun"
,
      "japanese": "楽しんでね。"
,
      "fullQuote": "It's your turn anyway. Have fun!"
,
      "situation": "ドラゴンボールZ 復活の「F」：戦闘の順番を譲り、皮肉まじりに楽しめと言う場面（英語字幕）。"
,
      "explanation": "別れ際や活動を始める相手に使う気軽な励まし。皮肉にも使えるので口調に注意。"
,
      "blankWord": "fun"
      },
      {
      "keyPhrase": "Talk to you soon"
,
      "japanese": "またすぐ話そう。"
,
      "fullQuote": "I'll see you soon."
,
      "situation": "ワンピース：Luffyとの再会を予告する別れ際の場面（英語字幕）。"
,
      "explanation": "電話・チャットを終える際の挨拶。See you soon は対面での再会にも使える近い表現。"
,
      "blankWord": "soon"
      },
      {
      "keyPhrase": "Get home safe"
,
      "japanese": "気をつけて帰ってね。"
,
      "fullQuote": "Text me when you get home safe."
,
      "situation": "僕のヒーローアカデミア：帰宅後に連絡するよう伝える、別れ際の気遣い。"
,
      "explanation": "get home safely と同じ意味で、会話では safe を補語として使うことが多い。"
,
      "blankWord": "safe"
      },
      {
      "keyPhrase": "Catch you later"
,
      "japanese": "またね。"
,
      "fullQuote": "Catch you later."
,
      "situation": "NARUTO：祭りでNarutoが店を離れようとする場面のカジュアルな別れ（英語字幕）。"
,
      "explanation": "See you later よりくだけた表現。友人・同僚など親しい相手向け。"
,
      "blankWord": "Catch"
      },
      {
      "keyPhrase": "Drive safe"
,
      "japanese": "運転気をつけてね。"
,
      "fullQuote": "Fine. Drive safe."
,
      "situation": "名探偵コナン（二次創作）：Kaitoが車で去るShinichiに安全運転を促す場面。"
,
      "explanation": "運転する人への別れの言葉。Drive safely も正しいが、会話では safe が一般的。"
,
      "blankWord": "safe"
      },
      {
      "keyPhrase": "Have a good one"
,
      "japanese": "よい一日を／じゃあね。"
,
      "fullQuote": "Have a good one."
,
      "situation": "宇宙兄弟：会話を終えて別れる際のくだけた挨拶（英語版ファン字幕）。"
,
      "explanation": "one は day・weekend・evening など、その時点に合うものを幅広く指す便利な言い方。"
,
      "blankWord": "one"
      },
      {
      "keyPhrase": "Sleep well"
,
      "japanese": "よく眠ってね。"
,
      "fullQuote": "Sleep well."
,
      "situation": "葬送のフリーレン：夜の宿で仲間に休息を促して別れる場面（英語字幕）。"
,
      "explanation": "Good night. に、心地よくよく眠れるよう願う気持ちを加えた表現。"
,
      "blankWord": "well"
      },
      {
      "keyPhrase": "Don't work too hard"
,
      "japanese": "無理して働きすぎないでね。"
,
      "fullQuote": "Don't work too hard."
,
      "situation": "映像研には手を出すな！：制作を続ける仲間への軽い気遣い（英語字幕）。"
,
      "explanation": "働きすぎ・頑張りすぎを心配してかける言葉。仕事終わりやメールの結びにも使える。"
,
      "blankWord": "hard"
      },
      {
      "keyPhrase": "Let me know how it goes"
,
      "japanese": "どうだったか教えてね。"
,
      "fullQuote": "Let me know how it goes."
,
      "situation": "僕のヒーローアカデミア：試験や用事の後、結果を知らせるよう頼む場面（英語吹替）。"
,
      "explanation": "物事の結果・進み具合を後で知らせてほしいときの定番表現。"
,
      "blankWord": "goes"
      },
      {
      "keyPhrase": "I'm out"
,
      "japanese": "俺は抜ける／もう行くよ。"
,
      "fullQuote": "I'm out!"
,
      "situation": "ドラゴンボール：戦いまたは会話から退出することを短く告げる場面（英語吹替）。"
,
      "explanation": "「退出する」「もう残っていない」「参加しない」などの意味があり、場面で解釈が変わる。"
,
      "blankWord": "out"
      },
      {
      "keyPhrase": "shirt in a smaller size"
,
      "japanese": "このシャツ、もっと小さいサイズはありますか？"
,
      "fullQuote": "Do you have this shirt in a smaller size?"
,
      "situation": "名探偵コナン（二次創作）：衣服を選ぶ買い物場面の学習用例。"
,
      "explanation": "Do you have ... in a smaller size? で、同じ品のより小さいサイズがあるかを店員に尋ねられる。"
,
      "blankWord": "in"
      },
      {
      "keyPhrase": "Is there a charge?"
,
      "japanese": "料金はかかりますか？"
,
      "fullQuote": "Is there a charge?"
,
      "situation": "ワンピース：サービスや施設の利用料金を確認する場面（英語字幕）。"
,
      "explanation": "無料か有料かを短く尋ねる表現。Is there a fee? も同じ意味で使える。"
,
      "blankWord": "charge"
      },
      {
      "keyPhrase": "Can I get by?"
,
      "japanese": "通ってもいいですか？"
,
      "fullQuote": "Can I get by?"
,
      "situation": "進撃の巨人：人混みや通路で通してもらえるか尋ねる場面（英語字幕）。"
,
      "explanation": "人や物のそばをすり抜けるときの丁寧な一言。Excuse me. を添えるとさらに自然。"
,
      "blankWord": "by"
      },
      {
      "keyPhrase": "Where did you last see it?"
,
      "japanese": "最後にそれを見たのはどこですか？"
,
      "fullQuote": "Where did you last see it?"
,
      "situation": "名探偵コナン：失くした物や証拠品について、最後に見た場所を確認する捜査の問い。"
,
      "explanation": "紛失物を探すときの重要な質問。it は物、him/her は人に置き換えられる。"
,
      "blankWord": "last"
      },
      {
      "keyPhrase": "We are running out of time"
,
      "japanese": "時間がなくなってきている。"
,
      "fullQuote": "We're short on time."
,
      "situation": "進撃の巨人：Zekeの残り時間を踏まえ、急ぐ必要があると議論する場面（英語字幕）。"
,
      "explanation": "run out of は「使い果たす」。時間以外にも、食料・資金などに使える。"
,
      "blankWord": "out"
      },
      {
      "keyPhrase": "I'm not in charge of that."
,
      "japanese": "それは私の担当ではありません。"
,
      "fullQuote": "I'm not in charge of that."
,
      "situation": "ワンピース：担当外のことは決められないと、責任範囲を明確にする場面（英語吹替）。"
,
      "explanation": "be in charge of で「〜を担当している」。断るだけでなく、適切な担当者へ案内すると丁寧。"
,
      "blankWord": "charge"
      },
      {
      "keyPhrase": "Formal attire"
,
      "japanese": "正装だね。"
,
      "fullQuote": "A white tie, so it was formal attire."
,
      "situation": "名探偵コナン：遺体の白いネクタイから、正装だったと判断する捜査場面（英語字幕）。"
,
      "explanation": "attire は clothing よりややフォーマルな「服装」。formal attire は式典・結婚式などの正装。"
,
      "blankWord": "attire"
      },
      {
      "keyPhrase": "I’m working on my English."
,
      "japanese": "英語を勉強しているところです。"
,
      "fullQuote": "I'm working on my English."
,
      "situation": "宇宙兄弟：海外任務や訓練に向け、英語を勉強中だと伝える場面（英語版ファン字幕）。"
,
      "explanation": "work on は「取り組む・改善する」。I'm studying English. より、上達のため継続中という響きがある。"
,
      "blankWord": "on"
      },
      {
      "keyPhrase": "Right away."
,
      "japanese": "すぐにやります。"
,
      "fullQuote": "Right away."
,
      "situation": "天空の城ラピュタ：命令を受けてすぐ行動すると返事をする場面（英語吹替）。"
,
      "explanation": "「ただちに」「すぐに」。命令への返答だけでなく、依頼を引き受けるときにも使える。"
,
      "blankWord": "away"
      },
      {
      "keyPhrase": "What's your availability for"
,
      "japanese": "〜について、いつ都合がつきますか？"
,
      "fullQuote": "What's your availability for next week?"
,
      "situation": "僕のヒーローアカデミア：面談や予定のため、来週の都合を尋ねる場面（英語吹替）。"
,
      "explanation": "availability は「空いている時間・都合」。for の後ろに日程・会議・作業などを続ける。"
,
      "blankWord": "availability"
      },
      {
      "keyPhrase": "I'll get back to you later."
,
      "japanese": "あとで返事します。"
,
      "fullQuote": "I'll get back to you later."
,
      "situation": "名探偵コナン：情報を調べてから返答すると、いったん会話を保留する場面（英語吹替）。"
,
      "explanation": "get back to someone は「改めて連絡・返答する」。必ず相手に返す含みがある。"
,
      "blankWord": "get"
      },
      {
      "keyPhrase": "We are running low on"
,
      "japanese": "〜が少なくなってきている。"
,
      "fullQuote": "We're running low on supplies."
,
      "situation": "風の谷のナウシカ：長旅または避難の最中に、物資が少なくなっていると知らせる場面（英語字幕）。"
,
      "explanation": "run low on は「残りが少ない」。run out of より、まだ少し残っている段階で使う。"
,
      "blankWord": "low"
      }
      ]
    },
    {
      "id": "business",
      "name": "Set 2",
      "audioVersion": "df9f613c",
      "chunks": [
      {
      "keyPhrase": "ought to"
,
      "japanese": "それならしばらくの間はあなたを忙しくさせておけるはずだ。"
,
      "fullQuote": "That ought to keep you busy for a while."
,
      "situation": "『ONE PIECE』サボ：相手をしばらく足止めできると考えて話す場面"
,
      "explanation": "should に近い「～するはずだ／～するべきだ」。ここでは「きっと～の役に立つだろう」という予測。"
,
      "blankWord": "ought"
      },
      {
      "keyPhrase": "be obliged to"
,
      "japanese": "そうしたら、あなたは私を起こさなければならなくなる。"
,
      "fullQuote": "Then you'll be obliged to wake me up."
,
      "situation": "『夏目友人帳』：勝負の結果によって相手に自分を起こす役目を負わせる場面"
,
      "explanation": "「～する義務がある／～せざるを得ない」。be forced to よりフォーマルな響き。"
,
      "blankWord": "obliged"
      },
      {
      "keyPhrase": "mean any harm"
,
      "japanese": "悪気はなかったんだ！"
,
      "fullQuote": "I didn't mean any harm!"
,
      "situation": "『銀魂』／作中人物。自分の行為について弁解する場面。"
,
      "explanation": "mean harmは「害を与えるつもりである」。didn't mean any harmで「悪意はなかった」「傷つけるつもりはなかった」という意味になる。"
,
      "blankWord": "harm"
      },
      {
      "keyPhrase": "He settled with a ridiculously standard pose."
,
      "japanese": "彼はものすごく普通のポーズに落ち着いた。"
,
      "fullQuote": "In the end, he settled with a ridiculously standard pose."
,
      "situation": "『葬送のフリーレン』／フリーレン。ヒンメルの銅像を建てる際、ポーズを決めるのに長い時間をかけたものの、最終的にはごく普通のポーズに決めたという場面。"
,
      "explanation": "settle は「落ち着く」だけでなく、「最終的に決める・～に決める」という意味でも使われる。settled with ～ で「最終的に～に決めた／～で落ち着いた」というニュアンス。"
,
      "blankWord": "settled"
      },
      {
      "keyPhrase": "be willing to"
,
      "japanese": "いい子にしていたら、時々会いに行ってもいいかもしれない。"
,
      "fullQuote": "If you're a good girl, then I might be willing to visit you sometimes."
,
      "situation": "『葬送のフリーレン』ハイター：良い子にしていれば時々会いに行ってもいいとフェルンに話す場面"
,
      "explanation": "「～する意思がある／～してもいい」。条件次第で応じる意思を表す。"
,
      "blankWord": "willing"
      },
      {
      "keyPhrase": "might as well"
,
      "japanese": "もう単刀直入に言っちゃった方が良いですね"
,
      "fullQuote": "Might as well ask him straight out."
,
      "situation": "『葬送のフリーレン』フェルン：あれこれ考えるより、本人に直接聞いてしまおうとする場面"
,
      "explanation": "「いろいろ考えても仕方ないので、いっそ～しよう」というニュアンス。ask someone straight out は「人に単刀直入に聞く」。消極的な提案。"
,
      "blankWord": "well"
      },
      {
      "keyPhrase": "be allowed to"
,
      "japanese": "私たちは客を連れてきてもいいことになっている。"
,
      "fullQuote": "We're allowed to bring guests."
,
      "situation": "『葬送のフリーレン』フェルン：一級魔法使いとして招待客を連れていけることについて話す場面"
,
      "explanation": "「～することを許可されている」。allow + 人 + to do の受け身。"
,
      "blankWord": "allowed"
      },
      {
      "keyPhrase": "be forced to"
,
      "japanese": "もしパーティーメンバーが足りなくて合格できなければ、撤退せざるを得なくなる。"
,
      "fullQuote": "If we can't pass because we're lacking a party member, we'll be forced to back off."
,
      "situation": "『葬送のフリーレン』リヒター：メンバー不足によって試験を諦め、撤退せざるを得なくなる可能性を話す場面"
,
      "explanation": "自分の意思ではなく、状況や他者の力によって「～せざるを得ない」。"
,
      "blankWord": "forced"
      },
      {
      "keyPhrase": "be set to"
,
      "japanese": "一行は夜明けに出発する予定だ。"
,
      "fullQuote": "The party is set to leave at dawn."
,
      "situation": "創作例：一行が翌朝出発する予定について話す場面"
,
      "explanation": "「～する予定だ／～することになっている」。予定されているだけでなく、準備が整っているニュアンスもある。"
,
      "blankWord": "set"
      },
      {
      "keyPhrase": "be due to"
,
      "japanese": "列車は正午に到着する予定です。"
,
      "fullQuote": "The train is due to arrive at noon."
,
      "situation": "創作例：駅で列車の到着予定時刻を確認する場面"
,
      "explanation": "「～する予定である」。時刻表や公式スケジュールなどに基づく予定を表す。"
,
      "blankWord": "due"
      },
      {
      "keyPhrase": "be expected to"
,
      "japanese": "従業員はシフトの10分前に到着するのが当然とされている／求められている。"
,
      "fullQuote": "Employees are expected to arrive 10 minutes before their shift."
,
      "situation": "創作例：そうするのが当然だと周囲から思われている」「〜すると見込まれている」というニュアンスです。「義務」というよりは、「その立場や状況なら、そうするのが当たり前・期待されている行動だ」という客観的な視点が入ります。"
,
      "explanation": "「～することを期待されている／～することになっている」。周囲からの期待や当然の行動を表す。"
,
      "blankWord": "expected"
      },
      {
      "keyPhrase": "be required to"
,
      "japanese": "すべての受験者は最初の試験に合格する必要があります。"
,
      "fullQuote": "All applicants are required to pass the first test."
,
      "situation": "創作例：試験を受けるための正式な条件を説明する場面。法律や厳格なルールに使う"
,
      "explanation": "規則や制度によって「～することを義務づけられている」。must より公式・事務的な響き。"
,
      "blankWord": "required"
      },
      {
      "keyPhrase": "be eager to"
,
      "japanese": "君が何ができるのか、ぜひ見てみたい。"
,
      "fullQuote": "I'm eager to see what you can do."
,
      "situation": "創作例：相手の実力を見ることを楽しみにしている人物のセリフ"
,
      "explanation": "「ぜひ～したい／～したくてたまらない」。want to よりも強い熱意や期待を表す。"
,
      "blankWord": "eager"
      },
      {
      "keyPhrase": "be meant to"
,
      "japanese": "それはあなたを守るためのものだ。"
,
      "fullQuote": "It's meant to protect you."
,
      "situation": "創作例：魔法道具の本来の目的について説明する場面"
,
      "explanation": "「～するためのものだ／～するよう意図されている」。本来の目的や意図を表す。創作者や神視点。supposedとの違い注意。"
,
      "blankWord": "meant"
      },
      {
      "keyPhrase": "Almost there"
,
      "japanese": "もう少しだ／もうすぐ着く"
,
      "fullQuote": "We're almost there. I can tell it's close."
,
      "situation": "葬送のフリーレン・ザインが目的地が近いことを感じ取る場面"
,
      "explanation": "目的地・完成・ゴールなどが「あと少し」というときに使う。"
,
      "blankWord": "almost"
      },
      {
      "keyPhrase": "Are you serious"
,
      "japanese": "シュタルク、あなた本気なの？"
,
      "fullQuote": "Mr. Stark, are you serious?"
,
      "situation": "葬送のフリーレン・フェルンがシュタルクの発言に驚いて確認する場面"
,
      "explanation": "「本気なの？」「本気で言ってるの？」。驚きや呆れを込めて使うことも多い。"
,
      "blankWord": "serious"
      },
      {
      "keyPhrase": "Don't mention it"
,
      "japanese": "どういたしまして！"
,
      "fullQuote": "Thanks, mister! Bye! — Don't mention it!"
,
      "situation": "魔女の宅急便・キキが町の男性に礼を言い、男性が返す場面"
,
      "explanation": "「どういたしまして」「礼には及ばない」。Thank you.への返答として使える。日常会話での「いえいえ」に近い"
,
      "blankWord": "mention"
      },
      {
      "keyPhrase": "Fair enough"
,
      "japanese": "なるほど、それなら納得だ。ただしアニメ制作の話はしないでくれ。"
,
      "fullQuote": "Fair enough. Just don't bring up anime production."
,
      "situation": "映像研には手を出すな！・金森が浅草たちの案を認めつつ条件を付ける場面"
,
      "explanation": "相手の主張を認めたうえで、自分の条件や意見を続けるときにも使える。"
,
      "blankWord": "Fair"
      },
      {
      "keyPhrase": "Give me a hand"
,
      "japanese": "手を貸してくれ！"
,
      "fullQuote": "Guys, give me a hand!"
,
      "situation": "ONE PIECE・ルフィがエースやサボに助けを求める場面"
,
      "explanation": "「手を貸して」「手伝って」という口語表現。Help me. よりも「ちょっと手を貸す」という感じ。"
,
      "blankWord": "hand"
      },
      {
      "keyPhrase": "Good point"
,
      "japanese": "なるほど。それはその通りだ。"
,
      "fullQuote": "Good point. My name is Nami."
,
      "situation": "ONE PIECE・相手から「質問するなら先に自分の名前を言うべき」と指摘され、ナミが納得する場面"
,
      "explanation": "相手の指摘や意見を認める「いいところを突いている」「それはその通り」という表現。"
,
      "blankWord": "point"
      },
      {
      "keyPhrase": "Hang on"
,
      "japanese": "しっかりつかまって"
,
      "fullQuote": "Hang on!"
,
      "situation": "もののけ姫・危険な状況で相手にしっかりつかまるよう促す場面"
,
      "explanation": "危険な移動中などに「つかまって」「離すな」という意味で使われる。"
,
      "blankWord": "Hang"
      },
      {
      "keyPhrase": "Hang on"
,
      "japanese": "ちょっと待って！"
,
      "fullQuote": "Hang on!"
,
      "situation": "映像研には手を出すな！・浅草が金森の話を途中で止める場面"
,
      "explanation": "「ちょっと待って」「待ってよ」。会話を止めたり、相手の発言に異議を差し挟むときに使う。"
,
      "blankWord": "Hang"
      },
      {
      "keyPhrase": "Here you go"
,
      "japanese": "はい、どうぞ。"
,
      "fullQuote": "Here you go."
,
      "situation": "魔女の宅急便・キキがパン屋に残されたおしゃぶりを届けて相手に渡す場面"
,
      "explanation": "物を手渡すときの定番表現。「はい、どうぞ」に相当する。"
,
      "blankWord": "Here"
      },
      {
      "keyPhrase": "I appreciate it"
,
      "japanese": "ありがとう／感謝するよ"
,
      "fullQuote": "I appreciate it!"
,
      "situation": "ONE PIECE・助けてもらったことに対して礼を言う場面"
,
      "explanation": "Thank you. よりも「助かった、感謝するよ」という気持ちを表しやすい。"
,
      "blankWord": "appreciate"
      },
      {
      "keyPhrase": "I know right"
,
      "japanese": "そうだよね！"
,
      "fullQuote": "I know, right?"
,
      "situation": "ONE PIECE・相手の意見に強く同意する場面"
,
      "explanation": "くだけた「だよね」「そう思うよね」。I know. と right? を合わせた会話表現。それな！に近いニュアンス"
,
      "blankWord": "right"
      },
      {
      "keyPhrase": "I owe you one"
,
      "japanese": "恩に着るよ。"
,
      "fullQuote": "I owe you one."
,
      "situation": "ONE PIECE・助けてもらった人物が相手に礼を言う場面"
,
      "explanation": "「借りができた」「恩に着る」。今度何かで返すというニュアンスを含む。"
,
      "blankWord": "owe"
      },
      {
      "keyPhrase": "I should get going"
,
      "japanese": "私もそろそろ行かなきゃ。"
,
      "fullQuote": "I should get going, too."
,
      "situation": "葬送のフリーレン・フリーレンが別れ際にその場を離れようとする場面"
,
      "explanation": "「そろそろ行かなきゃ」「もう行くね」。別れ際に自然に使える。I've gotta goより穏やかで大人な表現"
,
      "blankWord": "get"
      },
      {
      "keyPhrase": "I'll be right back"
,
      "japanese": "すぐ戻るよ"
,
      "fullQuote": "I'm sorry, folks. But could you wait just a minute? I'll be right back."
,
      "situation": "魔女の宅急便・おそのがパン屋を離れて赤ちゃんのための品物を届けようとする場面"
,
      "explanation": "短時間だけその場を離れるときの「すぐ戻るよ」。"
,
      "blankWord": "right"
      },
      {
      "keyPhrase": "I'm on it"
,
      "japanese": "任せて！ すぐやるよ！"
,
      "fullQuote": "I'm on it!"
,
      "situation": "ONE PIECE・ナミが船を動かすよう頼まれ、すぐ行動に移る場面"
,
      "explanation": "「今やる」「任せて」「すぐ取りかかる」という意味。依頼への素早い返答として便利。"
,
      "blankWord": "on"
      },
      {
      "keyPhrase": "I'm out"
,
      "japanese": "俺は抜ける／俺はもういい。"
,
      "fullQuote": "I'm out!"
,
      "situation": "ONE PIECE・ブルックが戦闘中にその場から離れることを宣言する場面"
,
      "explanation": "I'm out. は文脈によって「抜ける」「降りる」「もう終わりだ」などの意味になる。短く言える口語表現。I'm outta hereも。かなりカジュアル表現"
,
      "blankWord": "out"
      },
      {
      "keyPhrase": "Leave it to me"
,
      "japanese": "私に任せて"
,
      "fullQuote": "Leave this to me!"
,
      "situation": "映像研には手を出すな！・浅草が自分に任せるよう申し出る場面"
,
      "explanation": "「私に任せて」「ここは任せて」。頼まれた仕事を引き受けるときに使う。"
,
      "blankWord": "to"
      },
      {
      "keyPhrase": "Let's get going"
,
      "japanese": "さあ行こう"
,
      "fullQuote": "Let's get going."
,
      "situation": "もののけ姫・負傷者を連れて移動を続ける場面"
,
      "explanation": "「さあ行こう」「そろそろ出発しよう」。Let's go. より「行動を始めよう」という感じ。"
,
      "blankWord": "get"
      },
      {
      "keyPhrase": "Likewise"
,
      "japanese": "こちらこそ。"
,
      "fullQuote": "Likewise."
,
      "situation": "葬送のフリーレン・ハイターがヒンメルの「一緒に冒険できてよかった」という言葉に返す場面"
,
      "explanation": "相手の発言や気持ちに対して「こちらも同じです」「こちらこそ」と返す表現。協力し合った後の双方の感謝。same to youも。"
,
      "blankWord": "Likewise"
      },
      {
      "keyPhrase": "Look who's here!"
,
      "japanese": "おや、誰かと思えば！"
,
      "fullQuote": "Look who's here!"
,
      "situation": "NARUTO 疾風伝・久しぶりに現れた人物を見つける場面"
,
      "explanation": "久しぶりの相手や意外な人物を見つけたときの、親しみ・驚きを含む表現。"
,
      "blankWord": "who's"
      },
      {
      "keyPhrase": "My pleasure"
,
      "japanese": "どういたしまして。"
,
      "fullQuote": "Thank you very much. — My pleasure."
,
      "situation": "魔女の宅急便・キキがおしゃぶりを届けたことに礼を言われて返す場面"
,
      "explanation": "Thank you. に対する「どういたしまして」「喜んで」。You're welcome. より少し丁寧。ビジネスやカスタマーサービスでよく使う。with pleasureも。"
,
      "blankWord": "pleasure"
      },
      {
      "keyPhrase": "No way"
,
      "japanese": "まさか！ ルフィ殿！"
,
      "fullQuote": "No way! Luffy-dono!"
,
      "situation": "ONE PIECE・ルフィたちの登場に驚く場面"
,
      "explanation": "驚き・不信・拒絶などを表す非常に口語的な表現。「ありえない」「そんな！」など。"
,
      "blankWord": "way"
      },
      {
      "keyPhrase": "No wonder"
,
      "japanese": "どうりで複数人を相手に使わないわけだ"
,
      "fullQuote": "No wonder you don't use it against multiple people."
,
      "situation": "葬送のフリーレン・魔法を複数人に使わない理由を理解する場面(ユーベルの拘束魔法は視界に入れないと使えないため)"
,
      "explanation": "理由を知って納得するときの表現。「どうりで～なわけだ」。"
,
      "blankWord": "wonder"
      },
      {
      "keyPhrase": "No worries"
,
      "japanese": "心配いらないよ／大丈夫だよ。"
,
      "fullQuote": "Then we got no worries!"
,
      "situation": "ONE PIECE STAMPEDE・状況について心配する仲間を安心させる場面"
,
      "explanation": "No worries は「心配ない」「大丈夫」「気にしないで」というくだけた表現。"
,
      "blankWord": "worries"
      },
      {
      "keyPhrase": "Not much"
,
      "japanese": "たいしたことではないけれど、水には魔力が込められている。"
,
      "fullQuote": "It's not much, but the water is infused with mana."
,
      "situation": "葬送のフリーレン・２次試験で湖の水に魔力が込められていることをデンケンが説明する場面"
,
      "explanation": "Not much...,but は「たいしたものではないが、、」「あまり多くない」という控えめな表現。"
,
      "blankWord": "much"
      },
      {
      "keyPhrase": "You saved me"
,
      "japanese": "あなたに助けてもらったよ。"
,
      "fullQuote": "Ya saved me..."
,
      "situation": "メイドインアビス・危険な状況で助けてもらった人物が礼を言う場面"
,
      "explanation": "You saved me. は「助けてくれた」「命を救ってくれた」という意味。Ya は You のくだけた発音。"
,
      "blankWord": "saved"
      }
      ]
    },
    {
      "id": "travel",
      "name": "Set 3",
      "audioVersion": "dec933a9",
      "chunks": [
      {
      "japanese": "1981年7月3日に横浜で生まれた。"
,
      "english": "I was born in Yokohama on July 3, 1981."
      },
      {
      "japanese": "姉が2人いる。"
,
      "english": "I have two older sisters."
      },
      {
      "japanese": "私は末っ子だ。"
,
      "english": "I'm the youngest in my family."
      },
      {
      "japanese": "横浜は人口300万人ほどの都市だ。"
,
      "english": "Yokohama has about three million people."
      },
      {
      "japanese": "横浜には大きな港がある。"
,
      "english": "Yokohama has a large port."
      },
      {
      "japanese": "横浜の大学で物理を学んだ。"
,
      "english": "I studied physics at a university in Yokohama."
      },
      {
      "japanese": "大学を卒業した。"
,
      "english": "I graduated from university."
      },
      {
      "japanese": "大学時代は実家から通っていた。"
,
      "english": "I lived with my family during university."
      },
      {
      "japanese": "卒業後、東京で働いた。"
,
      "english": "After university, I worked in Tokyo."
      },
      {
      "japanese": "最初の仕事はシステム開発だった。"
,
      "english": "My first job was system development."
      },
      {
      "japanese": "携帯電話のメールソフトを開発した。"
,
      "english": "I developed email software for mobile phones."
      },
      {
      "japanese": "仕事は面白かった。"
,
      "english": "The work was interesting."
      },
      {
      "japanese": "でも、とても忙しかった。"
,
      "english": "But it was very demanding."
      },
      {
      "japanese": "月100時間以上残業することも普通だった。"
,
      "english": "Over 100 hours of overtime was normal."
      },
      {
      "japanese": "2年働いて会社を辞めた。"
,
      "english": "I quit after two years."
      },
      {
      "japanese": "ドイツにワーキングホリデーに行った。"
,
      "english": "I went to Germany on a working holiday."
      },
      {
      "japanese": "ドイツに1年間滞在した。"
,
      "english": "I stayed in Germany for a year."
      },
      {
      "japanese": "ヨーロッパをバックパックで旅した。"
,
      "english": "I traveled around Europe with a backpack."
      },
      {
      "japanese": "海外の文化を学ぶのが好きだった。"
,
      "english": "I enjoyed learning about other cultures."
      },
      {
      "japanese": "帰国後、鍼灸師を目指した。"
,
      "english": "After I came back, I decided to become an acupuncturist."
      },
      {
      "japanese": "働きながら勉強した。"
,
      "english": "I studied while working."
      },
      {
      "japanese": "鍼灸の学校に3年間通った。"
,
      "english": "I went to acupuncture school for three years."
      },
      {
      "japanese": "昼間は働いていた。"
,
      "english": "I worked during the day."
      },
      {
      "japanese": "夜は3時間授業を受けた。"
,
      "english": "I had three hours of classes at night."
      },
      {
      "japanese": "鍼灸師の資格を取った。"
,
      "english": "I got my acupuncture license."
      },
      {
      "japanese": "その後、ニカラグアに行った。"
,
      "english": "Then I went to Nicaragua."
      },
      {
      "japanese": "ニカラグアに1年半滞在した。"
,
      "english": "I stayed in Nicaragua for a year and a half."
      },
      {
      "japanese": "ニカラグアで鍼灸の仕事をした。"
,
      "english": "I worked as an acupuncturist in Nicaragua."
      },
      {
      "japanese": "東洋医学も教えた。"
,
      "english": "I also taught traditional Asian medicine."
      },
      {
      "japanese": "その後、アルメニアに行った。"
,
      "english": "Then I went to Armenia."
      },
      {
      "japanese": "アルメニアに1年間滞在した。"
,
      "english": "I stayed in Armenia for a year."
      },
      {
      "japanese": "アルメニアでも鍼灸の仕事をした。"
,
      "english": "I also worked as an acupuncturist in Armenia."
      },
      {
      "japanese": "インドにも行った。"
,
      "english": "I also went to India."
      },
      {
      "japanese": "インドのグルガオンに4ヶ月滞在した。"
,
      "english": "I stayed in Gurgaon, India, for four months."
      },
      {
      "japanese": "帰国後、旅行会社に入った。"
,
      "english": "After I came back to Japan, I joined a travel company."
      },
      {
      "japanese": "今はガイドをしている。"
,
      "english": "Now I work as a guide."
      },
      {
      "japanese": "去年までは国内ツアーの添乗員だった。"
,
      "english": "Until last year, I mainly worked as a tour escort."
      },
      {
      "japanese": "登山ツアーも多かった。"
,
      "english": "I also worked on many hiking tours."
      },
      {
      "japanese": "富士山には3回登った。"
,
      "english": "I have climbed Mount Fuji three times."
      },
      {
      "japanese": "今はインバウンドのガイドもしている。"
,
      "english": "Now I also work as an inbound guide."
      },
      {
      "japanese": "クルーズ船でも働いている。"
,
      "english": "I also work on cruise ships."
      },
      {
      "japanese": "人生では自分の頭で考えることを大切にしている。"
,
      "english": "I value thinking for myself."
      },
      {
      "japanese": "少しずつ前に進みたい。"
,
      "english": "I want to move forward little by little."
      },
      {
      "japanese": "自分が納得できる人生にしたい。"
,
      "english": "I want to live a life that feels right to me."
      },
      {
      "japanese": "これからも旅を続けたい。"
,
      "english": "I want to keep traveling."
      },
      {
      "japanese": "年を取っても人と関わり続けたい。"
,
      "english": "I want to keep meeting people as I get older."
      },
      {
      "japanese": "英語で困らずに話せるようになりたい。"
,
      "english": "I want to communicate in English comfortably."
      },
      {
      "japanese": "趣味は一人旅だ。"
,
      "english": "My hobby is solo travel."
      },
      {
      "japanese": "将棋も好きだ。"
,
      "english": "I also like playing shogi."
      },
      {
      "japanese": "テクノロジーのニュースを見るのも好きだ。"
,
      "english": "I also like following technology news."
      },
      {
      "japanese": "旅と登山が好きだ。"
,
      "english": "I like traveling and hiking."
      },
      {
      "japanese": "でも、計画を立てるのは苦手だ。"
,
      "english": "But I'm not good at making plans."
      },
      {
      "japanese": "気を抜くと家にこもってしまう。"
,
      "english": "If I'm not careful, I tend to stay home."
      },
      {
      "japanese": "変わった食べ物に興味がある。"
,
      "english": "I'm interested in unusual food."
      },
      {
      "japanese": "新しい価値観を与えてくれる食べ物が好きだ。"
,
      "english": "I like food that gives me new ideas."
      },
      {
      "japanese": "たくさん食べたいとは思わない。"
,
      "english": "I don't want to eat a lot."
      },
      {
      "japanese": "ドーナツのような普通の食べ物にはあまり興味がない。"
,
      "english": "I'm not very interested in familiar foods like donuts."
      },
      {
      "japanese": "大学卒業まで横浜で暮らした。"
,
      "english": "I lived in Yokohama until I graduated from university."
      },
      {
      "japanese": "東京の立川で一人暮らしをした。"
,
      "english": "I lived by myself in Tachikawa, Tokyo."
      },
      {
      "japanese": "現在は神奈川県に住んでいる。"
,
      "english": "I currently live in Kanagawa."
      },
      {
      "japanese": "独身だ。"
,
      "english": "I'm single."
      },
      {
      "japanese": "叔母と暮らしている。"
,
      "english": "I live with my aunt."
      },
      {
      "japanese": "結婚には興味がある。"
,
      "english": "I'm interested in getting married."
      },
      {
      "japanese": "でも、積極的には相手を探していない。"
,
      "english": "But I'm not actively looking for a partner."
      },
      {
      "japanese": "旅で知り合った友達とよく遊ぶ。"
,
      "english": "I often spend time with friends I met while traveling."
      },
      {
      "japanese": "東京から行ける山はたくさんある。"
,
      "english": "There are many mountains you can visit from Tokyo."
      },
      {
      "japanese": "日帰りで行ける山も多い。"
,
      "english": "Many can be visited on a day trip."
      },
      {
      "japanese": "八ヶ岳はおすすめだ。"
,
      "english": "I recommend Yatsugatake."
      },
      {
      "japanese": "八ヶ岳は一年中楽しめる。"
,
      "english": "You can enjoy Yatsugatake all year round."
      },
      {
      "japanese": "冬でもバスで山の近くまで行ける。"
,
      "english": "You can take a bus near the mountain even in winter."
      },
      {
      "japanese": "ロープウェイで山の中腹まで行ける。"
,
      "english": "You can take a ropeway to the middle of the mountain."
      },
      {
      "japanese": "そこでスノーハイクを楽しめる。"
,
      "english": "You can enjoy snow hiking there."
      },
      {
      "japanese": "日本では公共交通機関が便利だ。"
,
      "english": "Public transportation is convenient in Japan."
      },
      {
      "japanese": "田舎以外なら電車やバスで行ける。"
,
      "english": "You can get around by train or bus almost everywhere."
      },
      {
      "japanese": "日本はとても安全だ。"
,
      "english": "Japan is very safe."
      },
      {
      "japanese": "日本には地域ごとの特徴がある。"
,
      "english": "Each region of Japan is different."
      },
      {
      "japanese": "日本には自然も多い。"
,
      "english": "Japan also has a lot of nature."
      },
      {
      "japanese": "地図を見て行き先を決めるのもいい。"
,
      "english": "You can choose a place by looking at a map."
      },
      {
      "japanese": "日本では英語が通じないことも多い。"
,
      "english": "English is still not widely spoken in Japan."
      },
      {
      "japanese": "でも、少し日本語を話すだけで印象が変わる。"
,
      "english": "But speaking a little Japanese can make a big difference."
      },
      {
      "japanese": "日本人は親切にしてくれると思う。"
,
      "english": "I think Japanese people will be kind to you."
      },
      {
      "japanese": "旅行中、もっと英語を使いたいと思う。"
,
      "english": "When I travel, I want to use English more."
      },
      {
      "japanese": "だから英語を勉強している。"
,
      "english": "That's why I'm studying English."
      }
      ]
    }
];

// 旧機能（マイ学習データの貼り付け）で保存されたデータのlocalStorageキー。
// ※ この機能は削除済み。既存端末に残ったデータは init() で破棄する
const CUSTOM_DATA_KEY_OLD = "english_trainer_custom_data";
const CURRENT_SET_KEY = "english_trainer_current_set";
const SET_NAMES_KEY = "english_trainer_set_names";
const FONT_SCALE_KEY = "english_trainer_font_scale";
const TIMER_KEY = "english_trainer_timer_duration";
const ORDER_MODE_KEY = "english_trainer_order_mode";
const MASK_MODE_KEY = "english_trainer_mask_mode";

// 選択中の学習セットを取得（保存がなければ、または削除済みなら先頭にフォールバック）
// ※ セット選択UIは後続フェーズで追加するため、現時点は常に先頭セットが使われる
function getCurrentSet() {
  const savedId = localStorage.getItem(CURRENT_SET_KEY);
  return SETS.find((set) => set.id === savedId) || SETS[0];
}

// 出題用データ
let allChunks = [...getCurrentSet().chunks];
let activeChunks = [...allChunks];
let currentIndex = 0;
let pointerStartX = 0;
let pointerStartY = 0;
let isDragging = false;
let currentFontScale = parseFloat(localStorage.getItem(FONT_SCALE_KEY)) || 1.0;
let orderMode = localStorage.getItem(ORDER_MODE_KEY) || "sequential"; // "sequential" | "random"
let maskMode = localStorage.getItem(MASK_MODE_KEY) || "blank"; // "blank" | "hidden"

// タイマー状態（デフォルト15秒）
let timerDuration = parseInt(localStorage.getItem(TIMER_KEY), 10);
if (isNaN(timerDuration)) timerDuration = 15; // デフォルト15秒
let remainingTime = timerDuration;
let timerInterval = null;

// 画面上の要素を取得します。
const questionArea = document.querySelector("#question-area");
const questionTranslation = document.querySelector("#question-translation");
const questionQuote = document.querySelector("#question-quote");
const questionSituation = document.querySelector("#question-situation");

const meaningArea = document.querySelector("#meaning-area");
const answerMain = document.querySelector("#answer-main");
const answerEnglish = document.querySelector("#answer-english");
const answerExplanation = document.querySelector("#answer-explanation");

const progressCount = document.querySelector("#progress-count");
const maskToggleButton = document.querySelector("#mask-toggle-button");
const maskIcon = document.querySelector("#mask-icon");
const maskText = document.querySelector("#mask-text");
const orderToggleButton = document.querySelector("#order-toggle-button");
const orderIcon = document.querySelector("#order-icon");
const orderText = document.querySelector("#order-text");
const chunkCard = document.querySelector(".chunk-card");
const completeArea = document.querySelector("#complete-area");
const restartButton = document.querySelector("#restart-button");
const instructionGuide = document.querySelector("#instruction-guide");
const swipeActionBadge = document.querySelector("#swipe-action-badge");
const swipeActionIcon = document.querySelector("#swipe-action-icon");
const swipeActionText = document.querySelector("#swipe-action-text");

// タイマー要素
const timerContainer = document.querySelector("#timer-container");
const timerBar = document.querySelector("#timer-bar");
const timerBadge = document.querySelector("#timer-badge");
const timerCount = document.querySelector("#timer-count");
const timerSelect = document.querySelector("#timer-select");

// ナビゲーション・文字サイズ調整要素
const prevButton = document.querySelector("#prev-button");
const fontDecreaseButton = document.querySelector("#font-decrease-button");
const fontIncreaseButton = document.querySelector("#font-increase-button");

// 学習セット選択UI要素
const setSelect = document.querySelector("#set-select");
const renameSetButton = document.querySelector("#rename-set-button");

function escapeRegExp(string) {
  return string.replace(/[.*+?^$\{}()|[\]\\]/g, "\\$&");
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 英文テキストの取得（セリフ → keyPhrase → english の優先順位）
function getChunkQuoteText(chunk) {
  if (!chunk) return "";
  return chunk.fullQuote || chunk.keyPhrase || chunk.english || "";
}

// 穴埋め単語の取得。指定がない場合は英文の中で最も長い単語を自動補完する
//（2列データでも穴埋めモードが動くようにするため。ガイド上は任意列）
function getEffectiveBlankWord(chunk) {
  if (!chunk) return "";
  if (chunk.blankWord) return chunk.blankWord;
  const quote = getChunkQuoteText(chunk);
  if (!quote) return "";
  const words = quote.split(/[^A-Za-z'-]+/).filter(Boolean);
  if (words.length === 0) return "";
  return words.reduce((a, b) => (b.length > a.length ? b : a));
}

// 穴埋め用の下線HTMLを生成
function formatBlankQuoteHtml(fullQuote, blankWord) {
  if (!fullQuote) return "";
  if (!blankWord) return escapeHtml(fullQuote);

  const blankHtml = '<span class="blank-underline" aria-label="空欄"></span>';
  const escaped = escapeRegExp(blankWord);

  // 単語境界での置換を試みる
  const regex = new RegExp(`\\b${escaped}\\b`, "i");
  const match = fullQuote.match(regex);
  if (match) {
    const idx = fullQuote.search(regex);
    const before = fullQuote.slice(0, idx);
    const after = fullQuote.slice(idx + match[0].length);
    return `${escapeHtml(before)}${blankHtml}${escapeHtml(after)}`;
  }

  // 境界で見つからない場合（記号や省略形等）の単純置換
  const regexSimple = new RegExp(escaped, "i");
  const matchSimple = fullQuote.match(regexSimple);
  if (matchSimple) {
    const idx = fullQuote.search(regexSimple);
    const before = fullQuote.slice(0, idx);
    const after = fullQuote.slice(idx + matchSimple[0].length);
    return `${escapeHtml(before)}${blankHtml}${escapeHtml(after)}`;
  }

  return escapeHtml(fullQuote);
}

function applyFontScale(scale) {
  currentFontScale = Math.min(1.5, Math.max(0.55, scale));
  document.documentElement.style.setProperty("--card-font-scale", currentFontScale);
  localStorage.setItem(FONT_SCALE_KEY, currentFontScale);
}

function updateProgress() {
  if (allChunks.length === 0) {
    progressCount.textContent = "0 / 0";
    return;
  }
  if (activeChunks.length === 0) {
    progressCount.textContent = `完了：${allChunks.length} / ${allChunks.length}問`;
    return;
  }
  progressCount.textContent = `Left: ${activeChunks.length} / ${allChunks.length}`;
}

// タイマー表示の更新
function updateTimerDisplay() {
  if (timerDuration <= 0) {
    timerCount.textContent = "OFF";
    timerContainer.classList.add("timer-off");
    timerContainer.classList.remove("timer-warning");
    timerBar.style.width = "0%";
    return;
  }

  timerContainer.classList.remove("timer-off");
  timerCount.textContent = `${remainingTime}s`;
  const percentage = (remainingTime / timerDuration) * 100;
  timerBar.style.width = `${percentage}%`;

  if (remainingTime <= 3 && remainingTime > 0) {
    timerContainer.classList.add("timer-warning");
  } else {
    timerContainer.classList.remove("timer-warning");
  }
}

// タイマー開始
function startTimer() {
  stopTimer();

  // 問題がない場合は非表示
  if (activeChunks.length === 0 || allChunks.length === 0) {
    timerContainer.hidden = true;
    return;
  }

  timerContainer.hidden = false;
  timerContainer.classList.remove("timer-warning");

  if (timerDuration <= 0) {
    updateTimerDisplay();
    return;
  }

  remainingTime = timerDuration;
  updateTimerDisplay();

  // バーを瞬時に100%にし、次のフレームからwidth遷移を再適用
  timerBar.style.transition = "none";
  timerBar.style.width = "100%";
  void timerBar.offsetWidth; // 強制リフロー
  timerBar.style.transition = "width 1s linear, background-color 0.3s ease";

  timerInterval = setInterval(() => {
    remainingTime--;
    updateTimerDisplay();

    if (remainingTime <= 0) {
      stopTimer();
      // 0秒になったら自動で意味を表示
      if (meaningArea.hidden) {
        meaningArea.hidden = false;
      }
    }
  }, 1000);
}

// タイマー停止
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function showCurrentChunk(resetTimerState = true) {
  if (allChunks.length === 0) {
    stopTimer();
    chunkCard.hidden = false;
    completeArea.hidden = true;
    instructionGuide.hidden = false;
    timerContainer.hidden = true;
    questionTranslation.textContent = "No data available";
    questionQuote.textContent = "";
    questionSituation.textContent = "Check the learning set data";
    meaningArea.hidden = false;
    answerMain.textContent = "";
    answerEnglish.hidden = true;
    answerEnglish.textContent = "";
    answerExplanation.textContent = "";
    updateProgress();
    return;
  }

  // 全問覚えた場合（完了画面を表示）
  if (activeChunks.length === 0) {
    stopTimer();
    chunkCard.hidden = true;
    completeArea.hidden = false;
    instructionGuide.hidden = true;
    updateProgress();
    return;
  }

  chunkCard.hidden = false;
  completeArea.hidden = true;
  instructionGuide.hidden = false;

  const currentChunk = activeChunks[currentIndex];

  // クイズ表示用: 英文（セリフ/フレーズ/英語）と穴埋め語（不足時は自動補完）
  const quoteText = getChunkQuoteText(currentChunk);
  const effectiveBlankWord = getEffectiveBlankWord(currentChunk);

  // 6列データ形式（新形式）または2列データ（従来形式）の判定
  // ※ 英文が取れる問題は2列データでも穴埋め表示できたほうが便利なため新形式扱いにする
  const isFullFormat = !!(quoteText || currentChunk.situation);

  if (isFullFormat) {
    // 1行目: 日本語訳（2列目）
    questionTranslation.textContent = currentChunk.japanese || "";

    // 2行目: 実際のセリフ／使用例（3列目）
    if (maskMode === "blank") {
      questionQuote.innerHTML = formatBlankQuoteHtml(quoteText, effectiveBlankWord);
      questionQuote.hidden = false;
    } else {
      // セリフ全て隠すモード
      questionQuote.innerHTML = "";
      questionQuote.hidden = true;
    }

    // 3行目: 作品・キャラクター・状況（4列目）
    questionSituation.textContent = currentChunk.situation || "";

    // 答えエリア
    if (maskMode === "blank") {
      answerMain.textContent = effectiveBlankWord || quoteText;
    } else {
      answerMain.textContent = currentChunk.fullQuote || currentChunk.keyPhrase || "";
    }

    // 補足: 英語訳（セリフの英語訳列）。スペイン語の正解の下に参考として表示
    const englishSupplement = getEnglishAnswer(currentChunk);
    if (englishSupplement && englishSupplement !== answerMain.textContent) {
      answerEnglish.textContent = `🇬🇧 ${englishSupplement}`;
      answerEnglish.hidden = false;
    } else {
      answerEnglish.textContent = "";
      answerEnglish.hidden = true;
    }

    if (currentChunk.explanation) {
      answerExplanation.textContent = currentChunk.explanation;
      answerExplanation.hidden = false;
    } else {
      answerExplanation.textContent = "";
      answerExplanation.hidden = true;
    }
  } else {
    // 従来の2列データ
    questionTranslation.textContent = currentChunk.japanese || "";
    if (maskMode === "blank") {
      questionQuote.textContent = currentChunk.english || "";
      questionQuote.hidden = false;
    } else {
      questionQuote.textContent = "";
      questionQuote.hidden = true;
    }
    questionSituation.textContent = "";
    answerMain.textContent = currentChunk.english || "";
    const englishSupplement = getEnglishAnswer(currentChunk);
    if (englishSupplement && englishSupplement !== answerMain.textContent) {
      answerEnglish.textContent = `🇬🇧 ${englishSupplement}`;
      answerEnglish.hidden = false;
    } else {
      answerEnglish.textContent = "";
      answerEnglish.hidden = true;
    }
    answerExplanation.textContent = "";
    answerExplanation.hidden = true;
  }

  if (resetTimerState) {
    meaningArea.hidden = true;
    updateProgress();
    startTimer();
  }
}

function goToNextChunk() {
  if (activeChunks.length === 0) return;
  currentIndex = (currentIndex + 1) % activeChunks.length;
  showCurrentChunk();
}

function goToPrevChunk() {
  if (activeChunks.length === 0) return;
  currentIndex = (currentIndex - 1 + activeChunks.length) % activeChunks.length;
  showCurrentChunk();
}

// 上スワイプ／↑キー：覚えた問題として除外する
function markAsLearned() {
  if (activeChunks.length === 0) return;

  activeChunks.splice(currentIndex, 1);

  if (activeChunks.length === 0) {
    currentIndex = 0;
    showCurrentChunk();
    return;
  }

  if (currentIndex >= activeChunks.length) {
    currentIndex = 0;
  }
  showCurrentChunk();
}

// 配列のシャッフル（Fisher-Yates法）
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// allChunks の初期出現順でソート（順番通りに戻す時）
function sortChunksByOriginalOrder(chunks) {
  return [...chunks].sort((a, b) => {
    const indexA = allChunks.indexOf(a);
    const indexB = allChunks.indexOf(b);
    return indexA - indexB;
  });
}

// モード切替（穴埋め ⇔ セリフ全文）ボタンのUI表示を更新
function updateMaskButtonDisplay() {
  if (!maskToggleButton) return;
  if (maskMode === "hidden") {
    maskToggleButton.classList.add("mode-hidden");
    maskIcon.textContent = "⬛";
    maskText.textContent = "Hidden";
    maskToggleButton.setAttribute("aria-label", "Current mode: sentence hidden (click to switch to fill-in)");
  } else {
    maskToggleButton.classList.remove("mode-hidden");
    maskIcon.textContent = "🔲";
    maskText.textContent = "Fill-in";
    maskToggleButton.setAttribute("aria-label", "Current mode: fill-in (click to hide the whole sentence)");
  }
}

// モード切り替え（穴埋め ⇔ セリフ全文）
function toggleMaskMode() {
  maskMode = maskMode === "blank" ? "hidden" : "blank";
  localStorage.setItem(MASK_MODE_KEY, maskMode);
  updateMaskButtonDisplay();
  showCurrentChunk(false);
}

// 出題順ボタンのUI表示を更新
function updateOrderButtonDisplay() {
  if (!orderToggleButton) return;
  if (orderMode === "random") {
    orderToggleButton.classList.add("mode-random");
    orderIcon.textContent = "🔀";
    orderText.textContent = "Random";
    orderToggleButton.setAttribute("aria-label", "Current order: random (click to switch to sequential)");
  } else {
    orderToggleButton.classList.remove("mode-random");
    orderIcon.textContent = "🔢";
    orderText.textContent = "In order";
    orderToggleButton.setAttribute("aria-label", "Current order: sequential (click to switch to random)");
  }
}

// 出題順の切り替え（順番通り ⇔ ランダム）
function toggleOrderMode() {
  if (orderMode === "sequential") {
    orderMode = "random";
    activeChunks = shuffleArray(activeChunks);
  } else {
    orderMode = "sequential";
    activeChunks = sortChunksByOriginalOrder(activeChunks);
  }
  localStorage.setItem(ORDER_MODE_KEY, orderMode);
  updateOrderButtonDisplay();
  currentIndex = 0;
  showCurrentChunk();
}

// 最初から学習し直す
function restartLearning() {
  activeChunks = orderMode === "random" ? shuffleArray(allChunks) : [...allChunks];
  currentIndex = 0;
  showCurrentChunk();
}

function toggleMeaning() {
  if (activeChunks.length === 0) return;
  meaningArea.hidden = !meaningArea.hidden;
  if (!meaningArea.hidden) {
    // 意味を表示したらタイマー停止
    stopTimer();
  }
}

// iOSで使えるセット表示名（iPhone側で編集した名前が常に優先）
function loadSetNames() {
  try {
    const names = JSON.parse(localStorage.getItem(SET_NAMES_KEY));
    return names && typeof names === "object" ? names : {};
  } catch (_) {
    return {};
  }
}

function getSetDisplayName(set) {
  return loadSetNames()[set.id] || set.name;
}

// セット選択セレクトを構成
function populateSetSelect() {
  if (!setSelect) return;
  setSelect.innerHTML = "";
  SETS.forEach((set) => {
    const option = document.createElement("option");
    option.value = set.id;
    option.textContent = `${getSetDisplayName(set)}（${set.chunks.length}問）`;
    setSelect.appendChild(option);
  });
  setSelect.value = getCurrentSet().id;
}

// セットの切り替え（選択中の学習内容はリセットする）
function switchToSet(set) {
  const current = getCurrentSet();
  if (!set || set.id === current.id) {
    populateSetSelect();
    return;
  }

  if (!confirm(`Switch to "${getSetDisplayName(set)}"?\n\nYour current session will be reset.`)) {
    populateSetSelect();
    return;
  }

  stopSpeech();
  stopTimer();
  localStorage.setItem(CURRENT_SET_KEY, set.id);

  allChunks = [...set.chunks];
  activeChunks = orderMode === "random" ? shuffleArray(allChunks) : [...allChunks];
  currentIndex = 0;
  showCurrentChunk();
  if (currentAppMode === "instant") {
    restartAllInstant();
  }

  // 切り替え先の音声を先行キャッシュ（オフラインでも動くように）
  precacheSetAudio(set);
}

// 学習セットの切り替え
setSelect.addEventListener("change", () => {
  const target = SETS.find((set) => set.id === setSelect.value);
  switchToSet(target);
});

// セット名の編集（iPhone側の編集が常に優先される）
renameSetButton.addEventListener("click", () => {
  const set = getCurrentSet();
  if (!set) return;
  const name = prompt(
    `Rename "${getSetDisplayName(set)}".\n\nLeave empty to restore the original name.`,
    getSetDisplayName(set)
  );
  if (name === null) return;

  const names = loadSetNames();
  const trimmed = name.trim();
  if (trimmed === "" || trimmed === set.name) {
    delete names[set.id];
  } else {
    names[set.id] = trimmed;
  }
  localStorage.setItem(SET_NAMES_KEY, JSON.stringify(names));
  populateSetSelect();
});

// タイマー設定変更イベント
timerSelect.addEventListener("change", (event) => {
  timerDuration = parseInt(event.target.value, 10);
  localStorage.setItem(TIMER_KEY, timerDuration);
  if (meaningArea.hidden && activeChunks.length > 0) {
    startTimer();
  } else {
    updateTimerDisplay();
  }
});

restartButton.addEventListener("click", restartLearning);

// 前へボタンのクリックイベント
prevButton.addEventListener("click", (event) => {
  event.stopPropagation();
  goToPrevChunk();
});

// タイマーバッジおよびセレクトのクリック時にカードのめくり動作を防ぐ
timerBadge.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
timerBadge.addEventListener("click", (event) => {
  event.stopPropagation();
});
timerSelect.addEventListener("pointerdown", (event) => {
  event.stopPropagation();
});
timerSelect.addEventListener("click", (event) => {
  event.stopPropagation();
});

// 文字サイズ調整イベント
fontDecreaseButton.addEventListener("click", (event) => {
  event.stopPropagation();
  applyFontScale(+(currentFontScale - 0.1).toFixed(2));
});

fontIncreaseButton.addEventListener("click", (event) => {
  event.stopPropagation();
  applyFontScale(+(currentFontScale + 0.1).toFixed(2));
});

// モード切り替え（穴埋め ⇔ セリフ全文）イベント
maskToggleButton.addEventListener("click", () => {
  toggleMaskMode();
});

// 出題順切り替えイベント
orderToggleButton.addEventListener("click", () => {
  toggleOrderMode();
});

// スワイプ状態のリセット
function resetSwipeUI() {
  isDragging = false;
  chunkCard.classList.remove("dragging");
  chunkCard.classList.add("snap-back");
  chunkCard.style.transform = "";
  if (swipeActionBadge) {
    swipeActionBadge.hidden = true;
    swipeActionBadge.className = "swipe-action-badge";
  }
}

// カードのタッチ・マウスクリック＆スワイプ処理
const MINIMUM_SWIPE_DISTANCE = 45;
const TAP_THRESHOLD = 10;

chunkCard.addEventListener("pointerdown", (event) => {
  // タイマー設定セレクト等の操作時はスワイプ判定を行わない
  if (event.target.closest("#timer-badge") || event.target.tagName === "SELECT") {
    return;
  }
  isDragging = true;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
  chunkCard.classList.remove("snap-back");
  chunkCard.classList.add("dragging");
  if (chunkCard.setPointerCapture) {
    try {
      chunkCard.setPointerCapture(event.pointerId);
    } catch (_) {}
  }
});

chunkCard.addEventListener("pointermove", (event) => {
  if (!isDragging) return;

  const currentDeltaX = event.clientX - pointerStartX;
  const currentDeltaY = event.clientY - pointerStartY;
  const absH = Math.abs(currentDeltaX);
  const absV = Math.abs(currentDeltaY);

  // 指の動きに合わせたカードの微小な追従（操作感を向上）
  const dampFactor = 0.4;
  const moveX = currentDeltaX * dampFactor;
  const moveY = currentDeltaY * dampFactor;
  const rotateDeg = Math.max(-8, Math.min(8, currentDeltaX * 0.04));
  chunkCard.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotateDeg}deg)`;

  // 微小な移動の場合はバッジを非表示
  if (absH < TAP_THRESHOLD && absV < TAP_THRESHOLD) {
    swipeActionBadge.hidden = true;
    swipeActionBadge.className = "swipe-action-badge";
    return;
  }

  // 上スワイプ判定（垂直方向かつ上向き）：覚えた
  if (absV >= absH && currentDeltaY < 0) {
    const isReady = absV >= MINIMUM_SWIPE_DISTANCE;
    swipeActionBadge.hidden = false;
    swipeActionBadge.className = `swipe-action-badge visible badge-learned ${isReady ? "ready" : ""}`;
    swipeActionIcon.textContent = isReady ? "✅" : "☝️";
    swipeActionText.textContent = isReady ? "Memorized! (release to confirm)" : "Memorized";
  }
  // 左スワイプ判定（水平方向かつ左向き）：次の問題へ
  else if (absH >= absV && currentDeltaX < 0) {
    const isReady = absH >= MINIMUM_SWIPE_DISTANCE;
    swipeActionBadge.hidden = false;
    swipeActionBadge.className = `swipe-action-badge visible badge-next ${isReady ? "ready" : ""}`;
    swipeActionIcon.textContent = isReady ? "➡️" : "👈";
    swipeActionText.textContent = isReady ? "Next (release to confirm)" : "Next";
  }
  // 右スワイプ判定（水平方向かつ右向き）：前の問題へ
  else if (absH >= absV && currentDeltaX > 0) {
    const isReady = absH >= MINIMUM_SWIPE_DISTANCE;
    swipeActionBadge.hidden = false;
    swipeActionBadge.className = `swipe-action-badge visible badge-prev ${isReady ? "ready" : ""}`;
    swipeActionIcon.textContent = isReady ? "⬅️" : "👉";
    swipeActionText.textContent = isReady ? "Previous (release to confirm)" : "Previous";
  }
  // 下スワイプなどその他
  else {
    swipeActionBadge.hidden = true;
    swipeActionBadge.className = "swipe-action-badge";
  }
});

chunkCard.addEventListener("pointerup", (event) => {
  if (!isDragging) return;

  const horizontalDistance = event.clientX - pointerStartX;
  const verticalDistance = event.clientY - pointerStartY;
  const absH = Math.abs(horizontalDistance);
  const absV = Math.abs(verticalDistance);

  if (chunkCard.releasePointerCapture) {
    try {
      chunkCard.releasePointerCapture(event.pointerId);
    } catch (_) {}
  }

  resetSwipeUI();

  // タップ（クリック）：意味の表示／非表示を切り替え
  if (absH < TAP_THRESHOLD && absV < TAP_THRESHOLD) {
    toggleMeaning();
    return;
  }

  // 上スワイプ：覚えた問題として除外
  if (absV >= MINIMUM_SWIPE_DISTANCE && absV >= absH && verticalDistance < 0) {
    markAsLearned();
    return;
  }

  // 左スワイプ：次の問題へ進む（保留）
  if (absH >= MINIMUM_SWIPE_DISTANCE && absH >= absV && horizontalDistance < 0) {
    goToNextChunk();
    return;
  }

  // 右スワイプ：前の問題に戻る
  if (absH >= MINIMUM_SWIPE_DISTANCE && absH >= absV && horizontalDistance > 0) {
    goToPrevChunk();
    return;
  }
});

chunkCard.addEventListener("pointercancel", () => {
  resetSwipeUI();
});

// キーボード操作
document.addEventListener("keydown", (event) => {
  // 入力フィールド・セレクト操作中はショートカットを無効化
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.tagName === "SELECT") {
    return;
  }

  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    toggleMeaning();
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToNextChunk();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToPrevChunk();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    markAsLearned();
  }
});

// 初期化処理
function init() {
  applyFontScale(currentFontScale);
  updateMaskButtonDisplay();
  updateOrderButtonDisplay();

  timerSelect.value = String(timerDuration);

  // 旧「マイ学習データ」(貼り付け)機能の保存データが残っていれば破棄する
  localStorage.removeItem(CUSTOM_DATA_KEY_OLD);

  // 学習セットの選択肢を構成して表示
  populateSetSelect();
  showCurrentChunk();
  initInstantMode();

  // 音声キャッシュ: まず選択中セット → アイドル時に全セット分を先行取得
  const currentSet = getCurrentSet();
  precacheSetAudio(currentSet);
  scheduleIdle(() => {
    SETS.forEach((set) => {
      if (set !== currentSet) precacheSetAudio(set);
    });
    syncAudioCache();
  });
}

/* ==========================================================================
   瞬間英作文モード (Instant Composition Mode)
   ========================================================================== */

const INSTANT_THINK_KEY = "english_trainer_instant_think";
const INSTANT_ORDER_KEY = "english_trainer_instant_order";
const INSTANT_SEQ_KEY = "english_trainer_instant_seq";

// 瞬間英作文用のDOM要素
const modeQuizBtn = document.querySelector("#mode-quiz-btn");
const modeInstantBtn = document.querySelector("#mode-instant-btn");
const quizModeContainer = document.querySelector("#quiz-mode-container");
const instantModeContainer = document.querySelector("#instant-mode-container");

const instantPlayView = document.querySelector("#instant-play-view");
const instantReviewView = document.querySelector("#instant-review-view");
const instantCompleteView = document.querySelector("#instant-complete-view");

const instantProgressCount = document.querySelector("#instant-progress-count");
const instantThinkSelect = document.querySelector("#instant-think-select");
const instantThinkCount = document.querySelector("#instant-think-count");
const instantTimerBar = document.querySelector("#instant-timer-bar");

const instantStatusBadge = document.querySelector(".instant-status-badge");
const instantStatusIcon = document.querySelector("#instant-status-icon");
const instantStatusText = document.querySelector("#instant-status-text");

const instantJapanese = document.querySelector("#instant-japanese");
const instantJapaneseBox = document.querySelector("#instant-japanese-box");
const instantOrderBtn = document.querySelector("#instant-order-btn");
const instantSeqBtn = document.querySelector("#instant-seq-btn");
const instantAnswerBox = document.querySelector("#instant-answer-box");
const instantEnglish = document.querySelector("#instant-english");

const instantPrevBtn = document.querySelector("#instant-prev-btn");
const instantPlayPauseBtn = document.querySelector("#instant-play-pause-btn");
const instantNextBtn = document.querySelector("#instant-next-btn");
const instantReplayBtn = document.querySelector("#instant-replay-btn");
const instantRevealBtn = document.querySelector("#instant-reveal-btn");

const reviewRemainingCount = document.querySelector("#review-remaining-count");
const retryCountLabel = document.querySelector("#retry-count-label");
const reviewList = document.querySelector("#review-list");
const instantRetryRemainBtn = document.querySelector("#instant-retry-remain-btn");
const instantRestartAllBtn = document.querySelector("#instant-restart-all-btn");
const instantCompleteRestartBtn = document.querySelector("#instant-complete-restart-btn");

// 瞬間英作文の状態変数
let currentAppMode = "quiz"; // "quiz" | "instant"
let instantQueue = []; // 出題キュー
let instantCurrentIndex = 0;
let instantThinkSeconds = parseInt(localStorage.getItem(INSTANT_THINK_KEY), 10) || 3;
let instantOrder = localStorage.getItem(INSTANT_ORDER_KEY) === "en-first" ? "en-first" : "ja-first"; // "ja-first" | "en-first"
// 出題順モード（従来の挙動に合わせてデフォルトはランダム）
let instantSeqMode = localStorage.getItem(INSTANT_SEQ_KEY) === "sequential" ? "sequential" : "random"; // "sequential" | "random"
let isInstantPlaying = false; // 自動進行中フラグ
let instantStepTimer = null;
let instantThinkProgressInterval = null;
let currentUtterance = null;
let currentInstantAudio = null; // 瞬間英作文の音声ファイル再生中のAudio要素
let questionAudioEl = null; // 音声ファイル再生で使い回すAudio要素
let instantReviewQueue = []; // 復習画面で残っている問題リスト

// サイレントオーディオ要素（iOSのバックグラウンドオーディオセッション維持用）
let silentAudioEl = null;

// Screen Wake Lock API（再生中の画面自動スリープ防止）
let wakeLockSentinel = null;

async function requestWakeLock() {
  if ("wakeLock" in navigator && !wakeLockSentinel) {
    try {
      wakeLockSentinel = await navigator.wakeLock.request("screen");
      wakeLockSentinel.addEventListener("release", () => {
        wakeLockSentinel = null;
      });
    } catch (_) {}
  }
}

function releaseWakeLock() {
  if (wakeLockSentinel) {
    wakeLockSentinel.release().catch(() => {});
    wakeLockSentinel = null;
  }
}

// タブ表示状態が復帰した際に再生中であればスリープ防止を再要求
document.addEventListener("visibilitychange", async () => {
  if (document.visibilityState === "visible" && isInstantPlaying && currentAppMode === "instant") {
    await requestWakeLock();
  }
});

// 音声ボイスのキャッシュ
let cachedVoices = [];
function loadVoices() {
  if ("speechSynthesis" in window) {
    cachedVoices = window.speechSynthesis.getVoices() || [];
  }
}
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// iOS Safari / iOS 18 に最適化された高品質ボイスの選択
function getBestVoice(lang = "es-MX") {
  if (!cachedVoices || cachedVoices.length === 0) {
    loadVoices();
  }

  const isEs = lang.startsWith("es");
  const matchingVoices = cachedVoices.filter((v) => {
    const vLang = (v.lang || "").replace("_", "-").toLowerCase();
    return isEs
      ? vLang.startsWith("es")
      : (vLang.startsWith("en-us") || vLang.startsWith("en"));
  });

  if (matchingVoices.length === 0) return null;

  // iOSの高品質ボイス（Enhanced / Premium / Siri / Paulina / Samantha）をスコアリング
  const scoreVoice = (voice) => {
    let score = 0;
    const name = (voice.name || "").toLowerCase();
    
    // Enhanced / Premiumボイスは最優先
    if (name.includes("enhanced")) score += 100;
    if (name.includes("premium")) score += 90;
    if (name.includes("siri")) score += 80;

    if (isEs) {
      if (name.includes("paulina")) score += 50;
      if (name.includes("paloma")) score += 40;
      if (name.includes("eulalia")) score += 38;
      if (name.includes("mónica") || name.includes("monica")) score += 30;
      if (voice.lang === "es-MX") score += 10;
    } else {
      if (name.includes("samantha")) score += 50;
      if (name.includes("ava")) score += 45;
      if (name.includes("allison")) score += 40;
      if (name.includes("daniel")) score += 35;
      if (name.includes("alex")) score += 30;
      if (voice.lang === "en-US") score += 10;
    }

    if (voice.localService) score += 5;
    return score;
  };

  matchingVoices.sort((a, b) => scoreVoice(b) - scoreVoice(a));
  return matchingVoices[0];
}

// 発話テキストの整形（スラッシュや記号の誤読を防ぎ自然にする）
function sanitizeTextForSpeech(text, lang = "es-MX") {
  if (!text) return "";
  let cleaned = String(text).trim();

  // スラッシュ（／, /）で区切られた選択肢は、最初の自然な表現のみを読み上げる
  if (cleaned.includes("／") || cleaned.includes("/")) {
    cleaned = cleaned.split(/[／\/]/)[0].trim();
  }

  // スペイン語・英語の余分な記号を整理
  if (!lang.startsWith("ja")) {
    cleaned = cleaned.replace(/[「」『』]/g, "");
  }

  return cleaned;
}

// 音声合成 (TTS)
function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;

  // 瞬間英作文の音声ファイル再生も止める
  if (currentInstantAudio) {
    currentInstantAudio.onended = null;
    currentInstantAudio.onerror = null;
    currentInstantAudio.pause();
    currentInstantAudio = null;
  }
}

// セットごとの問題と音声ファイル（audio/<setId>/<lang>-XX.m4a）の対応
// ※ チャンクオブジェクト → {セット, セット内の番号} を記憶する。
//   貼り付けデータなど音声の無い問題は Map に載らず、null（音声合成フォールバック）になる
const AUDIO_REF = new Map();
SETS.forEach((set) => {
  set.chunks.forEach((chunk, i) => {
    AUDIO_REF.set(chunk, { set, index: i + 1 });
  });
});

// 対応する音声ファイルのURL。 ?v=<セット内容のハッシュ> で、
// データ更新時にサービスワーカーの音声キャッシュが更新されるようにする
function getDefaultAudioFile(chunk, lang) {
  const ref = AUDIO_REF.get(chunk);
  if (!ref) return null;
  const num = String(ref.index).padStart(2, "0");
  return `audio/${ref.set.id}/${lang}-${num}.m4a?v=${ref.set.audioVersion}`;
}

/* --------------------------------------------------------------------------
 * Service Workerの音声キャッシュ管理（オフライン／ロック再生用の先行読み込み）
 * -------------------------------------------------------------------------- */

// セットの全音声URL（es/en × 問題数）
function getAudioUrlsOfSet(set) {
  return set.chunks.flatMap((_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return [
      `audio/${set.id}/es-${num}.m4a?v=${set.audioVersion}`,
      `audio/${set.id}/en-${num}.m4a?v=${set.audioVersion}`,
    ];
  });
}

// Service Workerが準備できてからメッセージを送る
// ※ 初回インストール直後は controller が未登録のため ready を必ず待つ
function postToServiceWorker(message) {
  navigator.serviceWorker.ready.then((reg) => {
    const target = navigator.serviceWorker.controller || reg.active;
    if (target) target.postMessage(message);
  }).catch(() => {});
}

// セット音声の先行キャッシュ（選択中セットを優先し、その後全セットをバックグラウンドで）
function precacheSetAudio(set) {
  if (!set) return;
  postToServiceWorker({ type: "precache-audio", urls: getAudioUrlsOfSet(set) });
}

// 現行URL一覧を送り、サービスワーカー側で不要になった旧音声キャッシュを掃除する
function syncAudioCache() {
  postToServiceWorker({ type: "sync-audio", urls: SETS.flatMap((set) => getAudioUrlsOfSet(set)) });
}

// requestIdleCallback が無い環境向けのフォールバック
function scheduleIdle(fn) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(fn);
  } else {
    setTimeout(fn, 2000);
  }
}

// 瞬間英作文の音声ファイル再生用の使い回しAudio要素。
// ※ iOSではバックグラウンド（ロック中）に new Audio() で新規要素を play() すると
//   再生が弾かれることがあるため、既存要素の src を差し替えて再生する方式を使う。
//   （ストリーミング系PWAで定石の手法）
function getQuestionAudio() {
  if (!questionAudioEl) {
    questionAudioEl = new Audio();
    questionAudioEl.preload = "auto";
    questionAudioEl.setAttribute("playsinline", "true");
    questionAudioEl.setAttribute("webkit-playsinline", "true");
  }
  return questionAudioEl;
}

// 音声ファイルの再生。失敗した場合はリトライ後rejectしてフォールバックに任せる
function playInstantAudioFile(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject(new Error("no audio file"));
      return;
    }
    const audio = getQuestionAudio();
    audio.onended = null;
    audio.onerror = null;
    currentInstantAudio = audio;

    let settled = false;
    let retried = false;
    const finish = (callback) => {
      if (settled) return;
      settled = true;
      currentInstantAudio = null;
      audio.onended = null;
      audio.onerror = null;
      callback();
    };

    audio.onended = () => {
      // src差し替え再生の待ち時間を最小化するため、終了時に次へ進める
      finish(resolve);
    };
    audio.onerror = () => finish(() => reject(new Error("audio load error")));

    const startPlayback = (isRetry) => {
      audio.play().catch(() => {
        if (isRetry) {
          finish(() => reject(new Error("audio play error")));
        } else {
          // ロック直後などで稀に失敗するケースに備えて1回だけリトライ
          setTimeout(() => startPlayback(true), isInstantPlaying ? 250 : 0);
        }
      });
    };

    audio.src = url;
    audio.load();
    startPlayback(false);
  });
}

// 瞬間英作文の1文の読み上げ。音声ファイルがあればそれを再生し、
// なければ従来のspeechSynthesisにフォールバックする
async function playInstantSpeech(chunk, text, lang, customRate, audioLang) {
  const url = getDefaultAudioFile(chunk, audioLang);
  if (url) {
    try {
      await playInstantAudioFile(url);
      return;
    } catch (_) {
      // 音声ファイルが利用できない場合は音声合成にフォールバック
    }
  }
  await speakText(text, lang, customRate);
}

function speakText(rawText, lang = "es-MX", customRate = null) {
  return new Promise((resolve) => {
    const text = sanitizeTextForSpeech(rawText, lang);
    if (!("speechSynthesis" in window) || !text) {
      setTimeout(resolve, 600);
      return;
    }

    stopSpeech();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    // 発話レート（速度）を設定
    if (customRate !== null) {
      utterance.rate = customRate;
    } else {
      // スペイン語・英語は標準スピード
      utterance.rate = customRate || 1.0;
    }

    utterance.pitch = 1.0;

    const bestVoice = getBestVoice(lang);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    let isResolved = false;
    const finish = () => {
      if (!isResolved) {
        isResolved = true;
        resolve();
      }
    };

    utterance.onend = finish;
    utterance.onerror = finish;

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);

    // iOSでonendが発火しない場合の安全タイムアウト
    const approxDuration = Math.max(1400, (text.length / 4) * 1000 + 1200);
    setTimeout(finish, approxDuration);
  });
}

// バックグラウンド再生維持用のサイレントオーディオ管理
// ※ 実在する30秒の無音ファイルを小音量でループさせること。
//   長さ0のdata URIではiOSが「再生中のオーディオ」と認識せず、
//   ロック時にオーディオセッションが停止してしまう。
function startSilentAudioLoop() {
  if (!silentAudioEl) {
    silentAudioEl = new Audio("audio/silence.m4a");
    silentAudioEl.loop = true;
    // mutedはNG（ミュートされた音声ではセッションが維持されない）。
    // 聞こえない程度の小音量で再生する。
    silentAudioEl.volume = 0.01;
    silentAudioEl.preload = "auto";
    silentAudioEl.setAttribute("playsinline", "true");
    silentAudioEl.setAttribute("webkit-playsinline", "true");
  }

  silentAudioEl.play().catch(() => {
    // ユーザーインタラクション制限時はスルー
  });
}

function stopSilentAudioLoop() {
  if (silentAudioEl) {
    silentAudioEl.pause();
  }
}

// MediaSession API（ロック画面・コントロールセンター連携）
function updateMediaSession(chunk) {
  if (!("mediaSession" in navigator) || !chunk) return;

  const english = getEnglishAnswer(chunk);
  const japanese = chunk.japanese || "";

  navigator.mediaSession.metadata = new MediaMetadata({
    title: japanese,
    artist: english || "Práctica",
    album: "Spanish ⇄ English Practice",
    artwork: [
      { src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'><rect width='128' height='128' fill='%23c97b4a'/><text x='50%25' y='55%25' font-size='56' text-anchor='middle' dominant-baseline='middle' fill='%23ffffff'>☀️</text></svg>", sizes: "128x128", type: "image/svg+xml" }
    ]
  });

  navigator.mediaSession.playbackState = isInstantPlaying ? "playing" : "paused";
}

// MediaSession アクションハンドラーの登録
function setupMediaSessionHandlers() {
  if (!("mediaSession" in navigator)) return;

  try {
    navigator.mediaSession.setActionHandler("play", () => {
      if (!isInstantPlaying) toggleInstantPlayPause();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      if (isInstantPlaying) toggleInstantPlayPause();
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      prevInstantQuestion();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      nextInstantQuestion();
    });
  } catch (_) {}
}

// 思考時間の変更
function setInstantThinkTime(seconds) {
  instantThinkSeconds = seconds;
  localStorage.setItem(INSTANT_THINK_KEY, seconds);
  instantThinkCount.textContent = `${seconds}s`;
  instantThinkSelect.value = String(seconds);
}

// 読み上げ順序（スペイン語→英語 / 英語→スペイン語）の切替・UI反映
// ※ 内部キーはEnglish版と同じ "ja-first" / "en-first" を使い回す
//   （ja-first = スペイン語→英語 のデフォルト、en-first = 英語→スペイン語）
function updateInstantOrderUI() {
  const isEnFirst = instantOrder === "en-first";
  instantOrderBtn.textContent = isEnFirst ? "🇬🇧→🇪🇸" : "🇪🇸→🇬🇧";
  instantOrderBtn.title = isEnFirst
    ? "Playback order: English → Spanish (click to return to Spanish → English)"
    : "Playback order: Spanish → English (click to switch to English → Spanish)";
  instantOrderBtn.classList.toggle("order-en-first", isEnFirst);
}

function setInstantOrder(order) {
  if (instantOrder === order) return;
  instantOrder = order;
  localStorage.setItem(INSTANT_ORDER_KEY, order);
  updateInstantOrderUI();
}

// 出題順モード（順番通り / ランダム）のUI反映
function updateInstantSeqUI() {
  const isRandom = instantSeqMode === "random";
  instantSeqBtn.textContent = isRandom ? "🔀" : "🔢";
  instantSeqBtn.title = isRandom
    ? "Question order: random (click to switch to sequential)"
    : "Question order: sequential (click to switch to random)";
  // クイズモードのorder-toggle-btnと同じ見た目を適用
  instantSeqBtn.classList.toggle("mode-random", isRandom);
}

// 出題順の切替。再生中の問題は中断せず、残りの問題だけ新順序に並べ替える
function setInstantSeqMode(mode) {
  if (instantSeqMode === mode) return;
  instantSeqMode = mode;
  localStorage.setItem(INSTANT_SEQ_KEY, mode);
  updateInstantSeqUI();

  // 現在の問題より後のみ並べ替え（次の問題から新順序を適用するため）
  const remaining = instantQueue.slice(instantCurrentIndex + 1);
  if (remaining.length > 0) {
    if (instantSeqMode === "random") {
      shuffleArray(remaining);
    } else {
      // 順番通り = 元のTSV順（allChunksの出現順）に戻す
      remaining.sort((a, b) => allChunks.indexOf(a) - allChunks.indexOf(b));
    }
    instantQueue = instantQueue
      .slice(0, instantCurrentIndex + 1)
      .concat(remaining);
  }
}

// 出題キューの構築（ランダムモードならシャッフルする）
function buildInstantQueue(source) {
  const queue = [...source];
  if (instantSeqMode === "random") {
    shuffleArray(queue);
  }
  return queue;
}

// 瞬間英作文のUIステータス更新
function updateInstantStatus(status, text) {
  instantStatusBadge.className = `instant-status-badge status-${status}`;
  if (status === "reading-ja") {
    instantStatusIcon.textContent = "🔊";
    instantStatusText.textContent = text || "Reading Spanish...";
  } else if (status === "thinking") {
    instantStatusIcon.textContent = "🤔";
    instantStatusText.textContent = text || "Say it in English...";
  } else if (status === "reading-en") {
    instantStatusIcon.textContent = "📢";
    instantStatusText.textContent = text || "Playing the correct English answer!";
  } else if (status === "paused") {
    instantStatusIcon.textContent = "⏸";
    instantStatusText.textContent = text || "Paused";
  } else {
    instantStatusIcon.textContent = "⚡";
    instantStatusText.textContent = text || "Getting ready...";
  }

  if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = isInstantPlaying ? "playing" : "paused";
  }
}

// 英語正解テキストの取得（英語訳 → セリフ → english の優先順位）
// ※ スペイン語版では fullQuote（漫画内のセリフ）がスペイン語になるため
//   英語は keyPhrase（セリフの英語訳）を優先する
function getEnglishAnswer(chunk) {
  if (!chunk) return "";
  return chunk.keyPhrase || chunk.fullQuote || chunk.english || "";
}

// 瞬間英作文カードの表示更新
function renderInstantCard(chunk) {
  if (!chunk) return;
  instantJapanese.textContent = chunk.japanese || "";
  instantEnglish.textContent = getEnglishAnswer(chunk);
  const japaneseLabel = instantJapaneseBox.querySelector(".card-label");
  if (instantOrder === "en-first") {
    // 英語→スペイン語モード: 英文は最初に見せる / スペイン語は後で見せる
    instantAnswerBox.hidden = false;
    instantJapaneseBox.hidden = true;
    if (japaneseLabel) japaneseLabel.textContent = "SPANISH (Correct answer in Spanish)";
  } else {
    // スペイン語→英語モード（従来通り）
    instantJapaneseBox.hidden = false;
    instantAnswerBox.hidden = true;
    if (japaneseLabel) japaneseLabel.textContent = "SPANISH (Listen in Spanish, recall in English)";
  }
  instantTimerBar.style.width = "0%";
  instantProgressCount.textContent = `Q ${instantCurrentIndex + 1} / ${instantQueue.length}`;
  updateMediaSession(chunk);
}

// 思考タイマーのアニメーション
function runThinkCountdown(durationSeconds) {
  return new Promise((resolve) => {
    // 実時間ベースで進捗を計る（バックグラウンドでタイマーが間引かれても
    // 経過時間が正しく反映されるようにするため）
    const totalMs = durationSeconds * 1000;
    const startTimeMs = Date.now();
    const intervalMs = 200;

    clearInterval(instantThinkProgressInterval);
    instantTimerBar.style.width = "0%";

    instantThinkProgressInterval = setInterval(() => {
      if (!isInstantPlaying) {
        clearInterval(instantThinkProgressInterval);
        return;
      }
      const elapsedMs = Date.now() - startTimeMs;
      const progress = Math.min(100, (elapsedMs / totalMs) * 100);
      instantTimerBar.style.width = `${progress}%`;

      if (elapsedMs >= totalMs) {
        clearInterval(instantThinkProgressInterval);
        instantTimerBar.style.width = "100%";
        resolve();
      }
    }, intervalMs);
  });
}

// 1問の出題シーケンス実行
async function playInstantStep() {
  clearTimeout(instantStepTimer);
  clearInterval(instantThinkProgressInterval);
  stopSpeech();

  if (instantQueue.length === 0) {
    showInstantComplete();
    return;
  }

  if (instantCurrentIndex >= instantQueue.length) {
    // 1ラウンド終了 → 復習画面へ
    finishInstantRound();
    return;
  }

  const currentChunk = instantQueue[instantCurrentIndex];
  renderInstantCard(currentChunk);

  if (!isInstantPlaying) {
    updateInstantStatus("paused", "Paused (press play to start)");
    releaseWakeLock();
    return;
  }

  // 画面自動スリープ防止 & バックグラウンドオーディオセッションを維持
  // 先にサイレントオーディオを再生してオーディオコンテキストをアンロック（ユーザーインタラクションコンテキスト内で実行）
  requestWakeLock();
  startSilentAudioLoop();

  const englishText = getEnglishAnswer(currentChunk);

  if (instantOrder === "en-first") {
    // 英語→スペイン語モード

    // STEP 1: 英文読み上げ（1回 / 標準スピード 1.0）
    updateInstantStatus("reading-en", "Listen in English — recall the Spanish...");
    await playInstantSpeech(currentChunk, englishText, "en-US", 1.0, "en");

    if (!isInstantPlaying) return;

    // STEP 2: 考える時間（シンキングタイム）
    updateInstantStatus("thinking", `Recall it in Spanish... (${instantThinkSeconds}s)`);
    await runThinkCountdown(instantThinkSeconds);

    if (!isInstantPlaying) return;
  } else {
    // スペイン語→英語モード（従来通り）

    // STEP 1: スペイン語読み上げ（標準スピード）
    updateInstantStatus("reading-ja", "Listen in Spanish — recall the English...");
    await playInstantSpeech(currentChunk, currentChunk.japanese, "es-MX", 1.0, "es");

    if (!isInstantPlaying) return;

    // STEP 2: 考える時間（シンキングタイム）
    updateInstantStatus("thinking", `Say it in English... (${instantThinkSeconds}s)`);
    await runThinkCountdown(instantThinkSeconds);

    if (!isInstantPlaying) return;
  }

  // STEP 3: 正解の読み上げ & 答え表示
  if (instantOrder === "en-first") {
    // 英語→スペイン語モード: スペイン語の答えを読み上げて表示
    instantJapaneseBox.hidden = false;
    updateInstantStatus("reading-ja", "Playing the correct Spanish answer!");
    await playInstantSpeech(currentChunk, currentChunk.japanese, "es-MX", 1.0, "es");
  } else {
    // スペイン語→英語モード: 英語の正解を2回読み上げて表示
    instantAnswerBox.hidden = false;

    // 1回目の英語読み上げ（標準スピード 1.0）
    updateInstantStatus("reading-en", "Correct answer in English (1/2)");
    await playInstantSpeech(currentChunk, englishText, "en-US", 1.0, "en");

    if (!isInstantPlaying) return;

    // 1回目と2回目の間の短いポーズ (約0.7秒)
    await new Promise((resolve) => setTimeout(resolve, 700));

    if (!isInstantPlaying) return;

    // 2回目の英語読み上げ（標準スピード 1.0）
    updateInstantStatus("reading-en", "Correct answer in English (2/2)");
    await playInstantSpeech(currentChunk, englishText, "en-US", 1.0, "en");
  }

  if (!isInstantPlaying) return;

  // STEP 4: 少しのインターバルの後、自動で次の問題へ
  updateInstantStatus(instantOrder === "en-first" ? "reading-ja" : "reading-en", "Moving to the next question...");
  instantStepTimer = setTimeout(() => {
    if (isInstantPlaying) {
      instantCurrentIndex++;
      playInstantStep();
    }
  }, 1200);
}

// 瞬間英作文の再生・一時停止切り替え
function toggleInstantPlayPause() {
  if (isInstantPlaying) {
    // 一時停止
    isInstantPlaying = false;
    clearTimeout(instantStepTimer);
    clearInterval(instantThinkProgressInterval);
    stopSpeech();
    stopSilentAudioLoop();
    releaseWakeLock();
    instantPlayPauseBtn.textContent = "▶ Resume";
    instantPlayPauseBtn.classList.remove("is-playing");
    updateInstantStatus("paused", "Paused");
  } else {
    // 再開
    isInstantPlaying = true;
    instantPlayPauseBtn.textContent = "⏸ Pause";
    instantPlayPauseBtn.classList.add("is-playing");
    requestWakeLock();
    startSilentAudioLoop();
    playInstantStep();
  }
}

// 前の問題へ戻る
function prevInstantQuestion() {
  clearTimeout(instantStepTimer);
  clearInterval(instantThinkProgressInterval);
  stopSpeech();
  if (instantCurrentIndex > 0) {
    instantCurrentIndex--;
  }
  playInstantStep();
}

// 次の問題へ進む
function nextInstantQuestion() {
  clearTimeout(instantStepTimer);
  clearInterval(instantThinkProgressInterval);
  stopSpeech();
  if (instantCurrentIndex < instantQueue.length - 1) {
    instantCurrentIndex++;
    playInstantStep();
  } else {
    finishInstantRound();
  }
}

// 答えを今すぐ表示
function revealInstantAnswer() {
  clearTimeout(instantStepTimer);
  clearInterval(instantThinkProgressInterval);
  const currentChunk = instantQueue[instantCurrentIndex];
  if (!currentChunk) return;

  if (instantOrder === "en-first") {
    // 英語→スペイン語モード: スペイン語の答えを表示して読み上げ
    instantJapaneseBox.hidden = false;
    playInstantSpeech(currentChunk, currentChunk.japanese, "es-MX", 1.0, "es");
  } else {
    // スペイン語→英語モード（従来通り）: 英語の正解を表示して読み上げ
    instantAnswerBox.hidden = false;
    playInstantSpeech(currentChunk, getEnglishAnswer(currentChunk), "en-US", 1.0, "en");
  }
}

// 1ラウンド終了時の処理（復習・仕分け画面を表示）
function finishInstantRound() {
  isInstantPlaying = false;
  clearTimeout(instantStepTimer);
  clearInterval(instantThinkProgressInterval);
  stopSpeech();
  stopSilentAudioLoop();
  releaseWakeLock();

  // 今回のラウンドの問題を復習リストとして設定
  instantReviewQueue = [...instantQueue];

  instantPlayView.hidden = true;
  instantCompleteView.hidden = true;
  instantReviewView.hidden = false;

  renderReviewList();
}

// 復習リストのレンダリング
function renderReviewList() {
  reviewList.innerHTML = "";
  reviewRemainingCount.textContent = String(instantReviewQueue.length);
  retryCountLabel.textContent = String(instantReviewQueue.length);

  if (instantReviewQueue.length === 0) {
    showInstantComplete();
    return;
  }

  instantReviewQueue.forEach((chunk, index) => {
    const card = document.createElement("div");
    card.className = "review-item-card";
    card.dataset.index = String(index);

    const main = document.createElement("div");
    main.className = "review-item-main";

    const content = document.createElement("div");
    content.className = "review-item-content";

    const ja = document.createElement("p");
    ja.className = "review-item-ja";
    ja.textContent = chunk.japanese || "";

    const en = document.createElement("p");
    en.className = "review-item-en";
    en.textContent = getEnglishAnswer(chunk);

    content.appendChild(ja);
    content.appendChild(en);

    const doneBtn = document.createElement("button");
    doneBtn.className = "review-done-btn";
    doneBtn.type = "button";
    doneBtn.textContent = "✅ Memorized";
    doneBtn.setAttribute("aria-label", `Mark "${chunk.japanese}" as memorized`);

    doneBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dismissReviewItem(card, chunk);
    });

    main.appendChild(content);
    main.appendChild(doneBtn);
    card.appendChild(main);

    // 左スワイプ操作の実装
    attachReviewCardSwipe(card, chunk);

    reviewList.appendChild(card);
  });
}

// 復習カードの左スワイプ処理
function attachReviewCardSwipe(card, chunk) {
  let startX = 0;
  let startY = 0;
  let isSwiping = false;

  card.addEventListener("pointerdown", (e) => {
    if (e.target.tagName === "BUTTON") return;
    isSwiping = true;
    startX = e.clientX;
    startY = e.clientY;
    card.classList.add("dragging");
    if (card.setPointerCapture) {
      try { card.setPointerCapture(e.pointerId); } catch (_) {}
    }
  });

  card.addEventListener("pointermove", (e) => {
    if (!isSwiping) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // 水平スワイプ中
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
      card.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.05}deg)`;
      card.style.opacity = String(Math.max(0.3, 1 - Math.abs(deltaX) / 250));
    }
  });

  const handleEnd = (e) => {
    if (!isSwiping) return;
    isSwiping = false;
    card.classList.remove("dragging");

    if (card.releasePointerCapture) {
      try { card.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    const deltaX = e.clientX - startX;
    if (deltaX < -70) {
      // 左スワイプ成功 → 覚えたとして除外
      dismissReviewItem(card, chunk);
    } else {
      // 元に戻す
      card.style.transform = "";
      card.style.opacity = "";
    }
  };

  card.addEventListener("pointerup", handleEnd);
  card.addEventListener("pointercancel", handleEnd);
}

// 復習アイテムの除外アニメーション & リスト更新
function dismissReviewItem(card, chunk) {
  card.classList.add("dismissed");

  setTimeout(() => {
    const idx = instantReviewQueue.indexOf(chunk);
    if (idx !== -1) {
      instantReviewQueue.splice(idx, 1);
    }
    reviewRemainingCount.textContent = String(instantReviewQueue.length);
    retryCountLabel.textContent = String(instantReviewQueue.length);

    if (card.parentNode) {
      card.remove();
    }

    if (instantReviewQueue.length === 0) {
      showInstantComplete();
    }
  }, 250);
}

// 残った問題だけで瞬間英作文を再開
function retryRemainingInstant() {
  if (instantReviewQueue.length === 0) return;

  instantQueue = buildInstantQueue(instantReviewQueue);
  instantCurrentIndex = 0;
  isInstantPlaying = true;

  instantReviewView.hidden = true;
  instantCompleteView.hidden = true;
  instantPlayView.hidden = false;

  instantPlayPauseBtn.textContent = "⏸ Pause";
  instantPlayPauseBtn.classList.add("is-playing");

  playInstantStep();
}

// 全問で最初から再スタート
function restartAllInstant() {
  instantQueue = buildInstantQueue(allChunks);
  instantCurrentIndex = 0;
  isInstantPlaying = true;

  instantReviewView.hidden = true;
  instantCompleteView.hidden = true;
  instantPlayView.hidden = false;

  instantPlayPauseBtn.textContent = "⏸ Pause";
  instantPlayPauseBtn.classList.add("is-playing");

  playInstantStep();
}

// 全問マスター完了画面の表示
function showInstantComplete() {
  instantPlayView.hidden = true;
  instantReviewView.hidden = true;
  instantCompleteView.hidden = false;
}

// アプリモードの切り替え
function switchAppMode(mode) {
  if (currentAppMode === mode) return;
  currentAppMode = mode;

  if (mode === "quiz") {
    // 瞬間英作文を停止して通常モードへ
    isInstantPlaying = false;
    clearTimeout(instantStepTimer);
    clearInterval(instantThinkProgressInterval);
    stopSpeech();
    stopSilentAudioLoop();
    releaseWakeLock();

    modeQuizBtn.classList.add("active");
    modeInstantBtn.classList.remove("active");
    quizModeContainer.hidden = false;
    instantModeContainer.hidden = true;

    showCurrentChunk();
  } else {
    // 通常クイズタイマーを停止して瞬間英作文へ
    stopTimer();

    modeQuizBtn.classList.remove("active");
    modeInstantBtn.classList.add("active");
    quizModeContainer.hidden = true;
    instantModeContainer.hidden = false;

    restartAllInstant();
  }
}

// 瞬間英作文モードの初期化
function initInstantMode() {
  setInstantThinkTime(instantThinkSeconds);
  setupMediaSessionHandlers();
  updateInstantOrderUI();
  updateInstantSeqUI();

  modeQuizBtn.addEventListener("click", () => switchAppMode("quiz"));
  modeInstantBtn.addEventListener("click", () => switchAppMode("instant"));

  instantOrderBtn.addEventListener("click", () => {
    setInstantOrder(instantOrder === "en-first" ? "ja-first" : "en-first");
  });

  instantSeqBtn.addEventListener("click", () => {
    setInstantSeqMode(instantSeqMode === "random" ? "sequential" : "random");
  });

  instantThinkSelect.addEventListener("change", (e) => {
    setInstantThinkTime(parseInt(e.target.value, 10));
  });

  instantPlayPauseBtn.addEventListener("click", toggleInstantPlayPause);
  instantPrevBtn.addEventListener("click", prevInstantQuestion);
  instantNextBtn.addEventListener("click", nextInstantQuestion);
  instantReplayBtn.addEventListener("click", () => playInstantStep());
  instantRevealBtn.addEventListener("click", revealInstantAnswer);

  instantRetryRemainBtn.addEventListener("click", retryRemainingInstant);
  instantRestartAllBtn.addEventListener("click", restartAllInstant);
  instantCompleteRestartBtn.addEventListener("click", restartAllInstant);
}

init();

// Service Worker の登録（PWA / オフライン対応）
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Service Worker registered successfully:", reg.scope);
      })
      .catch((err) => {
        console.warn("Service Worker registration failed:", err);
      });
  });
}
