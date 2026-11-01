// デフォルトで出題する27個の英語問題データです。
const SETS = [
    {
      "id": "daily",
      "name": "Set 1",
      "audioVersion": "95e82f41",
      "chunks": [
      {
      "keyPhrase": "We'll know by tomorrow."
,
      "japanese": "Lo sabremos mañana."
,
      "fullQuote": "Lo sabremos mañana."
,
      "situation": "Space Brothers: un personaje tranquiliza a su compañero explicando que el resultado de la selección se sabrá al día siguiente."
,
      "explanation": "未来形 sabremos（saber の1人称複数）で「私たちは分かる」。mañana は「明日」。"
,
      "blankWord": "sabremos"
      },
      {
      "keyPhrase": "Can't complain."
,
      "japanese": "No me puedo quejar."
,
      "fullQuote": "No me puedo quejar."
,
      "situation": "One Piece: un personaje responde de forma casual que no está mal cuando le preguntan cómo está."
,
      "explanation": "直訳は「私は文句を言えない」。近況に対して「悪くないよ」と控えめに答える決まり文句。"
,
      "blankWord": "quejar"
      },
      {
      "keyPhrase": "Hey stranger."
,
      "japanese": "¡Hola, desconocido!"
,
      "fullQuote": "¡Hola, desconocido!"
,
      "situation": "One Piece (obra de fans): Usopp saluda a Sanji después de mucho tiempo sin verlo."
,
      "explanation": "desconocido は本来「知らない人」だが、親しい相手に久しぶりだと冗談めかして言う表現。"
,
      "blankWord": "desconocido"
      },
      {
      "keyPhrase": "I feel you."
,
      "japanese": "Te entiendo."
,
      "fullQuote": "Te entiendo."
,
      "situation": "Jujutsu Kaisen (conversación de fans): un personaje muestra empatía con los sentimientos del otro."
,
      "explanation": "「あなたを理解する」。英語の I feel you に近い、共感を伝える自然な言い方。"
,
      "blankWord": "entiendo"
      },
      {
      "keyPhrase": "Fingers crossed."
,
      "japanese": "Crucemos los dedos."
,
      "fullQuote": "Crucemos los dedos."
,
      "situation": "My Hero Academia (obra de fans): los personajes desean que un examen o un plan salga bien."
,
      "explanation": "直訳は「指を交差させよう」。成功・幸運を願うときの定番表現。"
,
      "blankWord": "Crucemos"
      },
      {
      "keyPhrase": "After you."
,
      "japanese": "Después de usted."
,
      "fullQuote": "Después de usted."
,
      "situation": "Detective Conan: un personaje deja pasar primero a otra persona por una puerta o hacia una sala."
,
      "explanation": "usted を使う丁寧な「お先にどうぞ」。親しい相手なら Después de ti. となる。"
,
      "blankWord": "Después"
      },
      {
      "keyPhrase": "Thanks for having me."
,
      "japanese": "Gracias por recibirme."
,
      "fullQuote": "Gracias por recibirme."
,
      "situation": "One Pieceのファン・コミュニティ：歓迎された集まりを去る際に礼を言う場面。"
,
      "explanation": "recibirme は recibir（迎える・受け入れる）の不定詞＋目的語 me。「招いてくれてありがとう」。"
,
      "blankWord": "recibirme"
      },
      {
      "keyPhrase": "Anytime."
,
      "japanese": "Cuando quieras."
,
      "fullQuote": "Cuando quieras."
,
      "situation": "NARUTO: un personaje responde con amabilidad a un agradecimiento o a una petición."
,
      "explanation": "直訳は「あなたが望むときに」。Gracias への返答として「いつでもどうぞ」の意味で使える。"
,
      "blankWord": "quieras"
      },
      {
      "keyPhrase": "Works for me."
,
      "japanese": "Me parece bien."
,
      "fullQuote": "Me parece bien."
,
      "situation": "One Pieceの字幕制作フォーラム：提案された表現に同意する文脈。"
,
      "explanation": "「私にはよく思える」から「それで大丈夫」「賛成です」。予定や提案への同意に便利。"
,
      "blankWord": "parece"
      },
      {
      "keyPhrase": "I'd love to."
,
      "japanese": "Me encantaría."
,
      "fullQuote": "Me encantaría."
,
      "situation": "Keep Your Hands Off Eizouken!: un personaje acepta con entusiasmo una invitación o propuesta."
,
      "explanation": "encantar は「大好きにさせる」。条件法 encantaría で、丁寧かつ前向きな「ぜひそうしたい」。"
,
      "blankWord": "encantaría"
      },
      {
      "keyPhrase": "Take your time."
,
      "japanese": "Tómate tu tiempo."
,
      "fullQuote": "Hay de sobra, así que tómate tu tiempo."
,
      "situation": "Attack on Titan: se les dice a Sasha y a los demás que no hace falta apresurarse mientras comen la comida de Nicolo."
,
      "explanation": "tómate は tomar の tú に対する肯定命令。tu tiempo は「自分の時間」→「ゆっくりして」。"
,
      "blankWord": "Tómate"
      },
      {
      "keyPhrase": "I lost track of time."
,
      "japanese": "Perdí la noción del tiempo."
,
      "fullQuote": "Perdí un poco la noción del tiempo."
,
      "situation": "Frieren: Beyond Journey's End (obra de fans): Frieren explica por qué tardó tanto en volver a visitar a alguien."
,
      "explanation": "perder la noción de ... は「〜の感覚を失う」。時間を忘れていた、という自然な表現。"
,
      "blankWord": "Perdí"
      },
      {
      "keyPhrase": "Have fun."
,
      "japanese": "Diviértete."
,
      "fullQuote": "De todos modos, es tu turno. ¡Diviértete!"
,
      "situation": "Dragon Ball Z: Resurrection 'F': un personaje cede un turno de combate y dice la frase con un toque irónico."
,
      "explanation": "divertirse（楽しむ）の tú に対する肯定命令。「楽しんでね」。usted なら Diviértase。"
,
      "blankWord": "Diviértete"
      },
      {
      "keyPhrase": "Talk to you soon."
,
      "japanese": "Hablamos pronto."
,
      "fullQuote": "Hablamos pronto."
,
      "situation": "One Piece: un personaje se despide prometiendo que volverán a hablar o verse pronto."
,
      "explanation": "直訳は「私たちはすぐ話す」。別れ際に「またすぐ話そう」と言うカジュアルな挨拶。"
,
      "blankWord": "Hablamos"
      },
      {
      "keyPhrase": "Get home safe."
,
      "japanese": "Llega bien a casa."
,
      "fullQuote": "Mándame un mensaje cuando llegues bien a casa."
,
      "situation": "My Hero Academia: un personaje pide que le escriban al llegar a casa después de despedirse."
,
      "explanation": "llegar a casa は「帰宅する」。bien を添えると「無事に」。相手が tú の場合の命令形。"
,
      "blankWord": "Llega"
      },
      {
      "keyPhrase": "Catch you later."
,
      "japanese": "Nos vemos luego."
,
      "fullQuote": "Nos vemos luego."
,
      "situation": "NARUTO: Naruto se despide de manera informal cuando se aleja de un puesto en un festival."
,
      "explanation": "「後で会おう」から「またね」。友人同士で広く使えるカジュアルな別れの挨拶。"
,
      "blankWord": "vemos"
      },
      {
      "keyPhrase": "Drive safe."
,
      "japanese": "Conduce con cuidado."
,
      "fullQuote": "Está bien. Conduce con cuidado."
,
      "situation": "Detective Conan (obra de fans): Kaito se despide de Shinichi cuando este se va en coche."
,
      "explanation": "conducir（運転する）の tú に対する命令形。con cuidado は「注意して」。"
,
      "blankWord": "cuidado"
      },
      {
      "keyPhrase": "Have a good one."
,
      "japanese": "Que tengas un buen día."
,
      "fullQuote": "Que tengas un buen día."
,
      "situation": "Space Brothers: un personaje se despide con una frase casual deseando que el otro tenga un buen día."
,
      "explanation": "que + 接続法 tengas の願いを表す構文。相手の一日がよいものになるよう願う定番表現。"
,
      "blankWord": "tengas"
      },
      {
      "keyPhrase": "Sleep well."
,
      "japanese": "Duerme bien."
,
      "fullQuote": "Duerme bien."
,
      "situation": "Frieren: Beyond Journey's End: un personaje se despide de sus compañeros en la posada por la noche."
,
      "explanation": "dormir（眠る）の tú に対する命令形。Buenas noches に「よく眠ってね」の気持ちを足した表現。"
,
      "blankWord": "Duerme"
      },
      {
      "keyPhrase": "Don't work too hard."
,
      "japanese": "No trabajes demasiado."
,
      "fullQuote": "No trabajes demasiado."
,
      "situation": "Keep Your Hands Off Eizouken!: un personaje se preocupa por un compañero que sigue trabajando en la producción."
,
      "explanation": "trabajar の tú に対する否定命令。否定命令は接続法 trabajes を使う。"
,
      "blankWord": "demasiado"
      },
      {
      "keyPhrase": "Let me know how it goes."
,
      "japanese": "Avísame cómo te va."
,
      "fullQuote": "Avísame cómo te va."
,
      "situation": "My Hero Academia: un personaje pide que le cuenten después cómo salió un examen o una tarea."
,
      "explanation": "avisar は「知らせる」、me は「私に」。cómo te va は「どう進むか・どうだったか」。"
,
      "blankWord": "Avísame"
      },
      {
      "keyPhrase": "I'm out."
,
      "japanese": "Me voy."
,
      "fullQuote": "¡Me voy!"
,
      "situation": "Dragon Ball: un personaje anuncia brevemente que va a retirarse de una conversación o de una pelea."
,
      "explanation": "irse は「立ち去る」。me voy は現在形で、今から去るという近い未来も表せる。"
,
      "blankWord": "Me"
      },
      {
      "keyPhrase": "a shirt in a smaller size"
,
      "japanese": "una camisa de talla más pequeña"
,
      "fullQuote": "¿Tiene esta camisa en una talla más pequeña?"
,
      "situation": "Detective Conan (obra de fans): un personaje busca ropa mientras hace compras."
,
      "explanation": "una talla más pequeña で「より小さいサイズ」。店員には丁寧に ¿Tiene ...? と尋ねられる。"
,
      "blankWord": "camisa"
      },
      {
      "keyPhrase": "Is there a charge?"
,
      "japanese": "¿Hay algún cargo?"
,
      "fullQuote": "¿Hay algún cargo?"
,
      "situation": "One Piece: un personaje pregunta si un servicio o una instalación tiene algún coste."
,
      "explanation": "cargo は「料金・請求」。algún は男性名詞 cargo の前で使う alguno の短縮形。"
,
      "blankWord": "cargo"
      },
      {
      "keyPhrase": "Can I get by?"
,
      "japanese": "¿Puedo pasar?"
,
      "fullQuote": "¿Puedo pasar?"
,
      "situation": "Attack on Titan: un personaje pide permiso para abrirse paso entre la gente o por un pasillo."
,
      "explanation": "poder + 不定詞で「〜してもよいですか」。pasar は「通る」。丁寧にするなら Perdón, ¿puedo pasar?。"
,
      "blankWord": "pasar"
      },
      {
      "keyPhrase": "Where did you last see it?"
,
      "japanese": "¿Dónde lo viste por última vez?"
,
      "fullQuote": "¿Dónde lo viste por última vez?"
,
      "situation": "Detective Conan: durante una investigación, un personaje pregunta dónde se vio por última vez un objeto perdido o una prueba."
,
      "explanation": "por última vez は「最後に」。lo は男性名詞の物を指す目的語で、女性名詞なら la。"
,
      "blankWord": "última"
      },
      {
      "keyPhrase": "We are running out of time."
,
      "japanese": "Se nos acaba el tiempo."
,
      "fullQuote": "Nos queda poco tiempo."
,
      "situation": "Attack on Titan: los personajes discuten que deben actuar con rapidez por el poco tiempo que le queda a Zeke."
,
      "explanation": "acabarse el tiempo は「時間が尽きる」。nos は「私たちにとって」を表し、切迫感がある。"
,
      "blankWord": "acaba"
      },
      {
      "keyPhrase": "I'm not in charge of that."
,
      "japanese": "Yo no me encargo de eso."
,
      "fullQuote": "Yo no me encargo de eso."
,
      "situation": "One Piece: un personaje aclara que no puede decidir algo porque no es parte de sus responsabilidades."
,
      "explanation": "encargarse de は「〜を担当する」。no me encargo de ... で「それは私の担当ではない」。"
,
      "blankWord": "encargo"
      },
      {
      "keyPhrase": "Formal attire."
,
      "japanese": "Atuendo formal."
,
      "fullQuote": "Una corbata blanca; era atuendo formal."
,
      "situation": "Detective Conan: los investigadores deducen por una corbata blanca que la víctima llevaba ropa formal."
,
      "explanation": "atuendo は「服装」。formal を付けると、式典・結婚式などにふさわしい正装を指す。"
,
      "blankWord": "formal"
      },
      {
      "keyPhrase": "I'm working on my English."
,
      "japanese": "Estoy mejorando mi inglés."
,
      "fullQuote": "Estoy mejorando mi inglés."
,
      "situation": "Space Brothers: un personaje explica que está estudiando inglés para una misión o entrenamiento internacional."
,
      "explanation": "estar + 動名詞 mejorando は「改善している最中」。trabajar en ... より会話的に上達への取り組みを表せる。"
,
      "blankWord": "mejorando"
      },
      {
      "keyPhrase": "Right away."
,
      "japanese": "Enseguida."
,
      "fullQuote": "¡Enseguida!"
,
      "situation": "Castle in the Sky: un personaje responde a una orden diciendo que actuará de inmediato."
,
      "explanation": "「すぐに」「ただちに」。命令や依頼を受けて素早く対応することを示す副詞。"
,
      "blankWord": "Enseguida"
      },
      {
      "keyPhrase": "What's your availability for...?"
,
      "japanese": "¿Cuál es tu disponibilidad para...?"
,
      "fullQuote": "¿Cuál es tu disponibilidad para la próxima semana?"
,
      "situation": "My Hero Academia: un personaje pregunta cuándo tiene tiempo otro para una reunión o una cita."
,
      "explanation": "disponibilidad は「都合がつく時間・空き」。para の後ろに期間や予定を続ける。"
,
      "blankWord": "disponibilidad"
      },
      {
      "keyPhrase": "I'll get back to you later."
,
      "japanese": "Te respondo más tarde."
,
      "fullQuote": "Te respondo más tarde."
,
      "situation": "Detective Conan: un personaje aplaza su respuesta hasta poder revisar la información."
,
      "explanation": "responder は「返答する」。現在形 respondo で「後で返事する」という近い未来を自然に表せる。"
,
      "blankWord": "respondo"
      },
      {
      "keyPhrase": "We are running low on..."
,
      "japanese": "Nos estamos quedando sin..."
,
      "fullQuote": "Nos estamos quedando sin suministros."
,
      "situation": "Nausicaä of the Valley of the Wind: durante un viaje o una evacuación, un personaje avisa que quedan pocos suministros."
,
      "explanation": "quedarse sin は「〜がなくなる／尽きる」。現在進行形で、残量が減ってきている途中を表す。"
,
      "blankWord": "quedando"
      }
      ]
    },
    {
      "id": "business",
      "name": "Set 2",
      "audioVersion": "1b00a4ed",
      "chunks": [
      {
      "keyPhrase": "Sorry, sorry. I couldn't help it."
,
      "japanese": "No pude evitarlo."
,
      "fullQuote": "Lo siento, lo siento. No pude evitarlo."
,
      "situation": "NARUTO Shippuden / Yamato: se disculpa y explica que no pudo evitar su acción."
,
      "explanation": "poder evitarlo は「それを避けられる」。否定の no pude で「仕方なかった」。"
,
      "blankWord": "evitarlo"
      },
      {
      "keyPhrase": "They deserve it!"
,
      "japanese": "¡Se lo merece!"
,
      "fullQuote": "¡Se lo merece!"
,
      "situation": "NARUTO: un personaje dice que el otro sufrió las consecuencias de sus propios actos."
,
      "explanation": "merecer は「値する」。se lo merece は文脈により「彼・彼女・あなた（敬称）はそれに値する／自業自得だ」。"
,
      "blankWord": "mereces"
      },
      {
      "keyPhrase": "Those who sympathize with a criminal like you cannot be allowed to live."
,
      "japanese": "no se puede permitir que"
,
      "fullQuote": "No se puede permitir que vivan quienes simpatizan con un criminal como tú."
,
      "situation": "NOBLESSE: se afirma que no se puede permitir vivir a quienes apoyan a un gran criminal."
,
      "explanation": "no se puede permitir que + 接続法は「〜するのを許すことはできない」。vivir が接続法になる。"
,
      "blankWord": "autorizado"
      },
      {
      "keyPhrase": "That old man is likely to be there."
,
      "japanese": "ser probable que"
,
      "fullQuote": "Es probable que ese viejo esté allí."
,
      "situation": "ONE PIECE: se supone que cierta persona probablemente está en ese lugar."
,
      "explanation": "Es probable que + 接続法で「〜する可能性が高い」。"
,
      "blankWord": "probable"
      },
      {
      "keyPhrase": "Hang in there!"
,
      "japanese": "¡Aguanta!"
,
      "fullQuote": "¡Aguanta!"
,
      "situation": "ONE PIECE / NARUTO: se anima a alguien que está en una situación difícil."
,
      "explanation": "aguantar は「耐える・踏ん張る」。困難の中にいる相手を励ます。"
,
      "blankWord": "Aguanta"
      },
      {
      "keyPhrase": "Get out of my way!"
,
      "japanese": "¡Quítate de mi camino!"
,
      "fullQuote": "¡Quítate de mi camino!"
,
      "situation": "ONE PIECE / Luffy: exige que alguien le despeje el camino."
,
      "explanation": "quitarse de mi camino は「私の道からどく」、すなわち「どけ」。tú への強い命令。"
,
      "blankWord": "Quítate"
      },
      {
      "keyPhrase": "Cut it out!"
,
      "japanese": "¡Déjalo ya!"
,
      "fullQuote": "¡Déjalo ya!"
,
      "situation": "ONE PIECE / Luffy: pide que otra persona deje de hacer algo molesto."
,
      "explanation": "dejar は「やめる」。ya を添えると「今すぐやめて」の強さが出る。"
,
      "blankWord": "Déjalo"
      },
      {
      "keyPhrase": "I do not know what he is plotting."
,
      "japanese": "estar tramando algo"
,
      "fullQuote": "No sé qué está tramando."
,
      "situation": "ONE PIECE: los subordinados de Caesar sospechan de lo que planea hacer Straw Hat."
,
      "explanation": "¿qué está tramando? は「何を企んでいるの？」。怪しい行動に使う。"
,
      "blankWord": "tramando"
      },
      {
      "keyPhrase": "I would rather die than kick you!"
,
      "japanese": "preferiría"
,
      "fullQuote": "¡Preferiría morir antes que darte una patada!"
,
      "situation": "ONE PIECE / Sanji: afirma que preferiría morir antes que patear a un compañero."
,
      "explanation": "preferiría A antes que B で「BするくらいならAしたい」。"
,
      "blankWord": "Preferiría"
      },
      {
      "keyPhrase": "The situation is getting out of control."
,
      "japanese": "salirse de control"
,
      "fullQuote": "La situación se está saliendo de control."
,
      "situation": "ONE PIECE: se comenta que el caos de Impel Down ya no se puede controlar."
,
      "explanation": "salirse de control は「手に負えなくなる」。"
,
      "blankWord": "saliendo"
      },
      {
      "keyPhrase": "You had better get going."
,
      "japanese": "más vale que"
,
      "fullQuote": "Más vale que te vayas yendo."
,
      "situation": "Re:ZERO: se aconseja a alguien que se marche pronto."
,
      "explanation": "más vale que + 接続法で、警告を含む「〜した方がいい」。"
,
      "blankWord": "vale"
      },
      {
      "keyPhrase": "what's right"
,
      "japanese": "qué está bien"
,
      "fullQuote": "Tu corazón sabe qué está bien."
,
      "situation": "Space Brothers / Sharon: anima a alguien a confiar en su corazón e intuición."
,
      "explanation": "qué está bien は「何が正しいか」。間接疑問なので qué にアクセントが付く。"
,
      "blankWord": "bien"
      },
      {
      "keyPhrase": "What shines the brightest in your life right now?"
,
      "japanese": "¿Qué es lo que más brilla en tu vida ahora mismo?"
,
      "fullQuote": "¿Qué es lo que más brilla en tu vida ahora mismo?"
,
      "situation": "Space Brothers / Sharon: pregunta qué es lo más importante en la vida de alguien."
,
      "explanation": "brillar は比喩で「最も大切・輝かしい」を表せる。"
,
      "blankWord": "brilla"
      },
      {
      "keyPhrase": "It's a piece of cake."
,
      "japanese": "¡Está chupado!"
,
      "fullQuote": "¡Está chupado!"
,
      "situation": "Space Brothers / Sharon: anima a alguien diciendo que algo no es difícil."
,
      "explanation": "chupado は口語で「楽勝」。スペインでは特に一般的。"
,
      "blankWord": "chupado"
      },
      {
      "keyPhrase": "The sky does not belong to anyone."
,
      "japanese": "pertenecer a alguien"
,
      "fullQuote": "El cielo no pertenece a nadie."
,
      "situation": "Space Brothers / Deniel Young: habla sobre el cielo y el espacio."
,
      "explanation": "pertenecer a は「〜のものである」。nadie で「誰のものでもない」。"
,
      "blankWord": "pertenece"
      },
      {
      "keyPhrase": "You can control your life."
,
      "japanese": "Puedes controlar tu vida."
,
      "fullQuote": "Puedes controlar tu vida."
,
      "situation": "Space Brothers / Deniel Young: habla de decidir el rumbo de la propia vida."
,
      "explanation": "controlar tu vida は「自分の人生を自分で決める」。"
,
      "blankWord": "controlar"
      },
      {
      "keyPhrase": "Your life is yours alone."
,
      "japanese": "Tu vida solo te pertenece a ti."
,
      "fullQuote": "Tu vida solo te pertenece a ti."
,
      "situation": "Space Brothers / Deniel Young: afirma que la vida de una persona es suya."
,
      "explanation": "solo と a ti で「あなた自身だけのもの」を強調する。"
,
      "blankWord": "pertenece"
      },
      {
      "keyPhrase": "If you can give up, then it was not really your dream."
,
      "japanese": "Si..., entonces..."
,
      "fullQuote": "Si puedes renunciar, entonces no era realmente tu sueño."
,
      "situation": "Space Brothers / Hibito Nanba: reflexiona sobre abandonar un sueño."
,
      "explanation": "Si + 現在形、entonces + 過去形で条件と結論をつなぐ。"
,
      "blankWord": "renunciar"
      },
      {
      "keyPhrase": "Everything we have done will surely become our strength."
,
      "japanese": "Todo lo que hemos hecho."
,
      "fullQuote": "Todo lo que hemos hecho se convertirá sin duda en nuestra fuerza."
,
      "situation": "Space Brothers / Mutta Nanba: dice que sus experiencias se convertirán en fortaleza."
,
      "explanation": "hemos hecho は現在完了で「これまでしてきたこと」。"
,
      "blankWord": "hemos"
      },
      {
      "keyPhrase": "The spacesuit is on our side."
,
      "japanese": "estar de nuestro lado"
,
      "fullQuote": "El traje espacial está de nuestro lado."
,
      "situation": "Space Brothers / Mutta Nanba: dice que el traje espacial los protege."
,
      "explanation": "estar de nuestro lado は人・状況・道具が「味方である」。"
,
      "blankWord": "lado"
      },
      {
      "keyPhrase": "My enemy is myself in most cases."
,
      "japanese": "Mi enemigo soy yo mismo en la mayoría de los casos."
,
      "fullQuote": "Mi enemigo soy yo mismo en la mayoría de los casos."
,
      "situation": "Space Brothers / Mutta Nanba: reconoce que su mayor obstáculo suele ser él mismo."
,
      "explanation": "en la mayoría de los casos は「たいていの場合」。"
,
      "blankWord": "mayoría"
      },
      {
      "keyPhrase": "Let's talk about space."
,
      "japanese": "Hablemos del espacio."
,
      "fullQuote": "Hablemos del espacio."
,
      "situation": "Space Brothers / Mutta Nanba: cambia un ambiente tenso proponiendo hablar del espacio."
,
      "explanation": "Hablemos de... は「〜について話そう」。"
,
      "blankWord": "Hablemos"
      },
      {
      "keyPhrase": "Let's try doing something that's just a little bit impossible."
,
      "japanese": "Intentemos hacer algo que sea solo un poco imposible."
,
      "fullQuote": "Intentemos hacer algo que sea solo un poco imposible."
,
      "situation": "Space Brothers / Mutta Nanba: invita a asumir un reto nuevo."
,
      "explanation": "Intentemos + 不定詞で「〜してみよう」。que sea は algo を説明する接続法の関係節。"
,
      "blankWord": "Intentemos"
      },
      {
      "keyPhrase": "An earnest failure has meaning."
,
      "japanese": "Un fracaso sincero tiene sentido."
,
      "fullQuote": "Un fracaso sincero tiene sentido."
,
      "situation": "Space Brothers / Mutta Nanba: habla del valor de fracasar tras intentarlo en serio."
,
      "explanation": "sincero は「真剣な・誠実な」。"
,
      "blankWord": "sincero"
      },
      {
      "keyPhrase": "I will figure out the plan as I go along. We have no time to stop!"
,
      "japanese": "mientras avanzo"
,
      "fullQuote": "Iré pensando en el plan mientras avanzo. ¡No tenemos tiempo para parar!"
,
      "situation": "Jujutsu Kaisen / Yuji Itadori: decide pensar el plan mientras sigue moviéndose."
,
      "explanation": "mientras + 動詞で「〜しながら」。"
,
      "blankWord": "mientras"
      },
      {
      "keyPhrase": "It's not my fault!"
,
      "japanese": "No es culpa mía."
,
      "fullQuote": "¡No es culpa mía!"
,
      "situation": "Attack on Titan: un personaje insiste en que no tiene responsabilidad."
,
      "explanation": "culpa は「過失・責任」。"
,
      "blankWord": "culpa"
      },
      {
      "keyPhrase": "Mistress Frieren is about to fall asleep."
,
      "japanese": "estar a punto de"
,
      "fullQuote": "La señorita Frieren está a punto de dormirse."
,
      "situation": "Frieren: se observa que Frieren está a punto de quedarse dormida."
,
      "explanation": "estar a punto de + 不定詞は「今にも〜しそう」。"
,
      "blankWord": "punto"
      },
      {
      "keyPhrase": "Even if I cannot achieve immortality, I would like a little more time."
,
      "japanese": "Aunque..."
,
      "fullQuote": "Aunque no pueda conseguir la inmortalidad, me gustaría tener un poco más de tiempo."
,
      "situation": "Frieren / Heiter: dice que desea vivir algo más incluso sin inmortalidad."
,
      "explanation": "aunque + 接続法で「たとえ〜でも」。"
,
      "blankWord": "Aunque"
      },
      {
      "keyPhrase": "I can tell."
,
      "japanese": "Me doy cuenta."
,
      "fullQuote": "Me doy cuenta."
,
      "situation": "Frieren / Fern: Fern explica que puede darse cuenta de lo que Frieren quiere comer."
,
      "explanation": "darse cuenta de は「気づく・分かる」。"
,
      "blankWord": "cuenta"
      },
      {
      "keyPhrase": "Way to go, Fern."
,
      "japanese": "¡Eso es, Fern!"
,
      "fullQuote": "¡Eso es, Fern!"
,
      "situation": "Frieren / Frieren: elogia una acción o un logro de Fern."
,
      "explanation": "¡Eso es! は「その調子！」「よくやった！」。"
,
      "blankWord": "Eso"
      },
      {
      "keyPhrase": "Since we learned, we could dance."
,
      "japanese": "Ya que aprendimos..."
,
      "fullQuote": "Ya que aprendimos, podríamos bailar."
,
      "situation": "Frieren / Stark: propone bailar porque ya aprendieron a hacerlo."
,
      "explanation": "ya que + 直説法で「〜なので／〜だから」。podríamos で控えめな提案。"
,
      "blankWord": "podríamos"
      },
      {
      "keyPhrase": "Mr. Sein is supposed to be a priest."
,
      "japanese": "se supone que"
,
      "fullQuote": "Se supone que el señor Sein es sacerdote."
,
      "situation": "Frieren / Fern: se queja de que Sein bebe pese a que es sacerdote."
,
      "explanation": "se supone que は役割・予定から「本来〜のはず」。"
,
      "blankWord": "supone"
      },
      {
      "keyPhrase": "You know Aura the Guillotine, do you not?"
,
      "japanese": "conocer a alguien"
,
      "fullQuote": "Conoces a Aura la Guillotina, ¿verdad?"
,
      "situation": "Frieren / Fern: pregunta si Frieren conoce la existencia de Aura."
,
      "explanation": "conocer a alguien は「人を知っている」。人を目的語に取るため a を伴う。"
,
      "blankWord": "Conoces"
      },
      {
      "keyPhrase": "The entire village used to help clean the shore."
,
      "japanese": "antes solía"
,
      "fullQuote": "Antes, todo el pueblo solía ayudar a limpiar la costa."
,
      "situation": "Frieren / el jefe de la aldea: habla de una antigua costumbre del pueblo."
,
      "explanation": "solía + 不定詞で、現在とは異なる昔の習慣。"
,
      "blankWord": "solía"
      },
      {
      "keyPhrase": "What should we throw away, and what should we keep?"
,
      "japanese": "¿Qué deberíamos tirar y qué deberíamos conservar?"
,
      "fullQuote": "¿Qué deberíamos tirar y qué deberíamos conservar?"
,
      "situation": "A Witch's Life in Mongol: Anis habla de limpiar y de decidir qué conservar."
,
      "explanation": "deberíamos は「〜すべき」。tirar は捨てる、conservar は残す。"
,
      "blankWord": "deberíamos"
      },
      {
      "keyPhrase": "What matters is what you choose to keep."
,
      "japanese": "Lo importante es..."
,
      "fullQuote": "Lo importante es lo que eliges conservar."
,
      "situation": "A Witch's Life in Mongol / Anis: expresa qué es esencial al ordenar cosas."
,
      "explanation": "Lo importante es... は「大切なのは〜」。"
,
      "blankWord": "importante"
      },
      {
      "keyPhrase": "He is still alive."
,
      "japanese": "Él sigue vivo."
,
      "fullQuote": "Él sigue vivo."
,
      "situation": "A Witch's Life in Mongol / Sitara: habla de Muhammad."
,
      "explanation": "seguir vivo は「まだ生きている」。"
,
      "blankWord": "sigue"
      },
      {
      "keyPhrase": "It was supposed to arrive."
,
      "japanese": "Se suponía que..."
,
      "fullQuote": "Se suponía que iba a llegar."
,
      "situation": "A Witch's Life in Mongol / Sitara: habla de algo que no ocurrió como se esperaba."
,
      "explanation": "過去の se suponía que は「〜するはずだった」。"
,
      "blankWord": "suponía"
      },
      {
      "keyPhrase": "I don't want to go somewhere I don't know."
,
      "japanese": "No quiero ir a un lugar que no conozco."
,
      "fullQuote": "No quiero ir a un lugar que no conozco."
,
      "situation": "A Witch's Life in Mongol / Sitara: expresa miedo ante un lugar desconocido."
,
      "explanation": "un lugar que no conozco は関係節で「私が知らない場所」。"
,
      "blankWord": "conozco"
      },
      {
      "keyPhrase": "I promised to protect my lady."
,
      "japanese": "Prometí proteger a mi señora."
,
      "fullQuote": "Prometí proteger a mi señora."
,
      "situation": "A Witch's Life in Mongol / Sitara: recuerda una promesa que debe cumplir."
,
      "explanation": "prometer + 不定詞で「〜すると約束する」。"
,
      "blankWord": "Prometí"
      },
      {
      "keyPhrase": "I will not pretend to be cute anymore."
,
      "japanese": "fingir ser"
,
      "fullQuote": "Ya no fingiré ser linda."
,
      "situation": "A Witch's Life in Mongol / Sitara: rechaza fingir para aumentar su valor."
,
      "explanation": "fingir + 不定詞で「〜するふりをする」。"
,
      "blankWord": "fingiré"
      },
      {
      "keyPhrase": "I don't want to be sold far away."
,
      "japanese": "No quiero que me vendan lejos."
,
      "fullQuote": "No quiero que me vendan lejos."
,
      "situation": "A Witch's Life in Mongol / Sitara: teme ser vendida lejos."
,
      "explanation": "querer que + 接続法で「〜してほしい／されたくない」。lejos は「遠くへ」。"
,
      "blankWord": "quiero"
      },
      {
      "keyPhrase": "I made that decision myself."
,
      "japanese": "Tomé esa decisión yo misma."
,
      "fullQuote": "Tomé esa decisión yo misma."
,
      "situation": "A Witch's Life in Mongol / Sitara: recalca que decidió por sí misma."
,
      "explanation": "yo misma は「自分自身で」の強調。"
,
      "blankWord": "misma"
      },
      {
      "keyPhrase": "I need to escape."
,
      "japanese": "Necesito escapar."
,
      "fullQuote": "Necesito escapar."
,
      "situation": "A Witch's Life in Mongol / Sitara: siente que debe huir."
,
      "explanation": "necesitar + 不定詞で「〜する必要がある」。"
,
      "blankWord": "Necesito"
      },
      {
      "keyPhrase": "I won't study anymore."
,
      "japanese": "Ya no estudiaré."
,
      "fullQuote": "Ya no estudiaré."
,
      "situation": "A Witch's Life in Mongol / Sitara: se rebela contra seguir estudiando."
,
      "explanation": "ya no は「もう〜ない」。未来形で強い意思を表せる。"
,
      "blankWord": "Ya"
      },
      {
      "keyPhrase": "That would only make me more valuable."
,
      "japanese": "Eso solo me haría más valiosa."
,
      "fullQuote": "Eso solo me haría más valiosa."
,
      "situation": "A Witch's Life in Mongol / Sitara: cree que estudiar elevaría el precio por el que la venderían."
,
      "explanation": "hacer + 目的語 + 形容詞で「〜を…にする」。"
,
      "blankWord": "haría"
      },
      {
      "keyPhrase": "I need to understand how this works."
,
      "japanese": "Necesito entender cómo funciona esto."
,
      "fullQuote": "Necesito entender cómo funciona esto."
,
      "situation": "A Witch's Life in Mongol / Fatima: intenta comprender conocimiento científico o médico."
,
      "explanation": "cómo funciona は「どういう仕組みか」。"
,
      "blankWord": "funciona"
      },
      {
      "keyPhrase": "You must learn to survive."
,
      "japanese": "Debes aprender a sobrevivir."
,
      "fullQuote": "Debes aprender a sobrevivir."
,
      "situation": "A Witch's Life in Mongol / Fatima: habla de aprender para sobrevivir en circunstancias difíciles."
,
      "explanation": "deber + 不定詞は義務・助言を表す。"
,
      "blankWord": "Debes"
      },
      {
      "keyPhrase": "I will find a way."
,
      "japanese": "Encontraré una manera."
,
      "fullQuote": "Encontraré una manera."
,
      "situation": "A Witch's Life in Mongol / Fatima: muestra voluntad de abrirse camino."
,
      "explanation": "未来形 encontraré で強い決意を表す。"
,
      "blankWord": "Encontraré"
      },
      {
      "keyPhrase": "There must be another way."
,
      "japanese": "Tiene que haber otra manera."
,
      "fullQuote": "Tiene que haber otra manera."
,
      "situation": "A Witch's Life in Mongol / Fatima: busca otra solución ante una dificultad."
,
      "explanation": "tiene que haber は「〜があるはずだ」。"
,
      "blankWord": "que"
      },
      {
      "keyPhrase": "I can't let that happen."
,
      "japanese": "No puedo dejar que eso ocurra."
,
      "fullQuote": "No puedo dejar que eso ocurra."
,
      "situation": "A Witch's Life in Mongol / Fatima: muestra una firme determinación."
,
      "explanation": "dejar que + 接続法で「〜するのを許す」。"
,
      "blankWord": "dejar"
      },
      {
      "keyPhrase": "Knowledge can change your fate."
,
      "japanese": "El conocimiento puede cambiar tu destino."
,
      "fullQuote": "El conocimiento puede cambiar tu destino."
,
      "situation": "A Witch's Life in Mongol / Fatima: habla de conocimiento y destino."
,
      "explanation": "puede + 不定詞で「〜できる」。"
,
      "blankWord": "puede"
      },
      {
      "keyPhrase": "Knowledge is a duty for every Muslim."
,
      "japanese": "El conocimiento es un deber para todo musulmán."
,
      "fullQuote": "El conocimiento es un deber para todo musulmán."
,
      "situation": "A Witch's Life in Mongol / Fatima: habla del deber de aprender."
,
      "explanation": "deber は「義務・務め」。"
,
      "blankWord": "deber"
      },
      {
      "keyPhrase": "You have to prepare yourself before using this Quirk."
,
      "japanese": "tener que"
,
      "fullQuote": "Tienes que prepararte antes de usar este Don."
,
      "situation": "My Hero Academia: se explica que hay que prepararse antes de usar un Don."
,
      "explanation": "tienes que + 不定詞は口語的な「〜しなければならない」。"
,
      "blankWord": "Tienes"
      },
      {
      "keyPhrase": "Conan and Kogoro were passing by the apartment building by chance."
,
      "japanese": "por casualidad"
,
      "fullQuote": "Conan y Kogoro pasaban por casualidad junto al edificio de apartamentos."
,
      "situation": "Detective Conan: Conan y Kogoro pasan casualmente cerca de la escena."
,
      "explanation": "por casualidad は「たまたま・偶然に」。"
,
      "blankWord": "casualidad"
      },
      {
      "keyPhrase": "I cannot. I am the only one immersed in memories."
,
      "japanese": "estar inmerso en"
,
      "fullQuote": "No puedo. Soy la única que está inmersa en recuerdos."
,
      "situation": "ONE PIECE / Nico Robin: Robin queda atrapada en un mundo de recuerdos."
,
      "explanation": "estar inmerso en は「〜に深く浸る・没頭する」。"
,
      "blankWord": "inmersa"
      },
      {
      "keyPhrase": "I am tied up."
,
      "japanese": "estar ocupado"
,
      "fullQuote": "Estoy ocupado."
,
      "situation": "Ejemplo general: una persona tiene trabajo y recados acumulados."
,
      "explanation": "estar ocupado は「手が離せない」。"
,
      "blankWord": "ocupado"
      },
      {
      "keyPhrase": "Do not pick on your sister."
,
      "japanese": "meterse con"
,
      "fullQuote": "No te metas con tu hermana."
,
      "situation": "Ejemplo general: alguien molesta o acosa repetidamente a su hermana."
,
      "explanation": "meterse con alguien は「〜をいじめる・からかう」。"
,
      "blankWord": "metas"
      },
      {
      "keyPhrase": "I should have known!"
,
      "japanese": "Debería haberlo sabido."
,
      "fullQuote": "¡Debería haberlo sabido!"
,
      "situation": "Ejemplo general: una persona se arrepiente de su juicio."
,
      "explanation": "debería haber + 過去分詞は過去への後悔。"
,
      "blankWord": "Debería"
      },
      {
      "keyPhrase": "Don't I know you?"
,
      "japanese": "¿No te conozco?"
,
      "fullQuote": "¿No te conozco?"
,
      "situation": "Ejemplo general: alguien cree haber conocido antes a otra persona."
,
      "explanation": "「どこかで会いましたか？」という自然な言い方。"
,
      "blankWord": "conozco"
      },
      {
      "keyPhrase": "I got ripped off."
,
      "japanese": "Me estafaron."
,
      "fullQuote": "Me estafaron."
,
      "situation": "Ejemplo general: una persona paga un precio injustamente alto."
,
      "explanation": "estafar は「ぼったくる・だます」。"
,
      "blankWord": "estafaron"
      },
      {
      "keyPhrase": "You've got to be kidding!"
,
      "japanese": "¡Tienes que estar bromeando!"
,
      "fullQuote": "¡Tienes que estar bromeando!"
,
      "situation": "Ejemplo general: alguien oye algo increíble."
,
      "explanation": "驚き・あきれを表す「冗談でしょ！」。"
,
      "blankWord": "bromeando"
      },
      {
      "keyPhrase": "He has what it takes to be a leader."
,
      "japanese": "tener lo necesario para"
,
      "fullQuote": "Tiene lo necesario para ser líder."
,
      "situation": "Ejemplo general: se evalúa la aptitud de una persona."
,
      "explanation": "tener lo necesario para は「〜する資質がある」。"
,
      "blankWord": "necesario"
      },
      {
      "keyPhrase": "Count on it!"
,
      "japanese": "Cuenta con ello."
,
      "fullQuote": "¡Cuenta con ello!"
,
      "situation": "Ejemplo general: alguien responde con confianza a una petición."
,
      "explanation": "「任せて」。contar con は「頼りにする」。"
,
      "blankWord": "Cuenta"
      },
      {
      "keyPhrase": "Suit yourself!"
,
      "japanese": "Como quieras."
,
      "fullQuote": "¡Como quieras!"
,
      "situation": "Ejemplo general: alguien decide no seguir un consejo."
,
      "explanation": "「好きにすれば」。口調によって冷たく聞こえる。"
,
      "blankWord": "quieras"
      },
      {
      "keyPhrase": "Could I have a word with you?"
,
      "japanese": "¿Podría hablar un momento contigo?"
,
      "fullQuote": "¿Podría hablar un momento contigo?"
,
      "situation": "Ejemplo general: alguien quiere hablar en privado con otra persona."
,
      "explanation": "podría で丁寧な依頼になる。"
,
      "blankWord": "Podría"
      },
      {
      "keyPhrase": "I'll make it up to you."
,
      "japanese": "Te compensaré."
,
      "fullQuote": "Te compensaré."
,
      "situation": "Ejemplo general: alguien promete compensar una molestia."
,
      "explanation": "compensar a alguien は「人に埋め合わせをする」。"
,
      "blankWord": "compensaré"
      },
      {
      "keyPhrase": "Shame on you!"
,
      "japanese": "¡Debería darte vergüenza!"
,
      "fullQuote": "¡Debería darte vergüenza!"
,
      "situation": "Ejemplo general: se reprende duramente una acción inmoral."
,
      "explanation": "強い道徳的非難。「恥を知れ」。"
,
      "blankWord": "vergüenza"
      },
      {
      "keyPhrase": "What if they don't show up?"
,
      "japanese": "¿Y si...?"
,
      "fullQuote": "¿Y si no aparece?"
,
      "situation": "Ejemplo general: se teme que alguien no llegue a una cita."
,
      "explanation": "¿Y si...? は「もし〜だったらどうする？」。"
,
      "blankWord": "si"
      },
      {
      "keyPhrase": "I can't get over them."
,
      "japanese": "superar a alguien"
,
      "fullQuote": "No puedo superarlo."
,
      "situation": "Ejemplo general: alguien no logra superar a una expareja."
,
      "explanation": "superar a alguien は失恋などを「乗り越える」。"
,
      "blankWord": "superarlo"
      },
      {
      "keyPhrase": "He is unlikely to change his mind."
,
      "japanese": "ser poco probable que"
,
      "fullQuote": "Es poco probable que cambie de opinión."
,
      "situation": "Ejemplo general: se habla de una persona obstinada."
,
      "explanation": "Es poco probable que + 接続法で「〜しそうにない」。"
,
      "blankWord": "poco"
      },
      {
      "keyPhrase": "All applicants are required to pass the first test."
,
      "japanese": "estar obligado a"
,
      "fullQuote": "Todos los solicitantes están obligados a aprobar el primer examen."
,
      "situation": "Ejemplo general: se explica una condición formal de un examen."
,
      "explanation": "estar obligado a + 不定詞は制度上の義務。"
,
      "blankWord": "obligados"
      },
      {
      "keyPhrase": "The ceremony is scheduled to begin at noon."
,
      "japanese": "estar programado para"
,
      "fullQuote": "La ceremonia está programada para empezar al mediodía."
,
      "situation": "Ejemplo general: se informa de un horario oficial."
,
      "explanation": "estar programado para + 不定詞は公式予定を表す。"
,
      "blankWord": "programado"
      }
      ]
    },
    {
      "id": "travel",
      "name": "Set 3",
      "audioVersion": "097cd31d",
      "chunks": [
      {
      "keyPhrase": "I was born in Yokohama on July 3, 1981."
,
      "japanese": "Nací en Yokohama el 3 de julio de 1981."
      },
      {
      "keyPhrase": "I have two older sisters."
,
      "japanese": "Tengo dos hermanas mayores."
      },
      {
      "keyPhrase": "I'm the youngest in my family."
,
      "japanese": "Soy el menor de la familia."
      },
      {
      "keyPhrase": "Yokohama has about three million people."
,
      "japanese": "Yokohama tiene unos tres millones de habitantes."
      },
      {
      "keyPhrase": "Yokohama has a large port."
,
      "japanese": "Yokohama tiene un puerto grande."
      },
      {
      "keyPhrase": "I studied physics at a university in Yokohama."
,
      "japanese": "Estudié física en una universidad de Yokohama."
      },
      {
      "keyPhrase": "I graduated from university."
,
      "japanese": "Me gradué de la universidad."
      },
      {
      "keyPhrase": "I lived with my family during university."
,
      "japanese": "Durante la universidad vivía en casa de mis padres."
      },
      {
      "keyPhrase": "After university, I worked in Tokyo."
,
      "japanese": "Después de la universidad, trabajé en Tokio."
      },
      {
      "keyPhrase": "My first job was system development."
,
      "japanese": "Mi primer trabajo fue el desarrollo de sistemas."
      },
      {
      "keyPhrase": "I developed email software for mobile phones."
,
      "japanese": "Desarrollé un software de correo para teléfonos móviles."
      },
      {
      "keyPhrase": "The work was interesting."
,
      "japanese": "El trabajo era interesante."
      },
      {
      "keyPhrase": "But it was very demanding."
,
      "japanese": "Pero era muy exigente."
      },
      {
      "keyPhrase": "Over 100 hours of overtime was normal."
,
      "japanese": "Era normal trabajar más de 100 horas extra al mes."
      },
      {
      "keyPhrase": "I quit after two years."
,
      "japanese": "Renuncié después de dos años."
      },
      {
      "keyPhrase": "I went to Germany on a working holiday."
,
      "japanese": "Me fui a Alemania con visa de working holiday."
      },
      {
      "keyPhrase": "I stayed in Germany for a year."
,
      "japanese": "Me quedé en Alemania un año."
      },
      {
      "keyPhrase": "I traveled around Europe with a backpack."
,
      "japanese": "Viajé por Europa con una mochila."
      },
      {
      "keyPhrase": "I enjoyed learning about other cultures."
,
      "japanese": "Disfruté aprendiendo sobre otras culturas."
      },
      {
      "keyPhrase": "After I came back, I decided to become an acupuncturist."
,
      "japanese": "Al volver, decidí convertirme en acupuntor."
      },
      {
      "keyPhrase": "I studied while working."
,
      "japanese": "Estudiaba mientras trabajaba."
      },
      {
      "keyPhrase": "I went to acupuncture school for three years."
,
      "japanese": "Fui a una escuela de acupuntura durante tres años."
      },
      {
      "keyPhrase": "I worked during the day."
,
      "japanese": "Durante el día trabajaba."
      },
      {
      "keyPhrase": "I had three hours of classes at night."
,
      "japanese": "Por la noche tenía tres horas de clases."
      },
      {
      "keyPhrase": "I got my acupuncture license."
,
      "japanese": "Obtuve la licencia de acupuntor."
      },
      {
      "keyPhrase": "Then I went to Nicaragua."
,
      "japanese": "Después me fui a Nicaragua."
      },
      {
      "keyPhrase": "I stayed in Nicaragua for a year and a half."
,
      "japanese": "Me quedé en Nicaragua un año y medio."
      },
      {
      "keyPhrase": "I worked as an acupuncturist in Nicaragua."
,
      "japanese": "Trabajé como acupuntor en Nicaragua."
      },
      {
      "keyPhrase": "I also taught traditional Asian medicine."
,
      "japanese": "También enseñé medicina tradicional asiática."
      },
      {
      "keyPhrase": "Then I went to Armenia."
,
      "japanese": "Después me fui a Armenia."
      },
      {
      "keyPhrase": "I stayed in Armenia for a year."
,
      "japanese": "Me quedé en Armenia un año."
      },
      {
      "keyPhrase": "I also worked as an acupuncturist in Armenia."
,
      "japanese": "También trabajé como acupuntor en Armenia."
      },
      {
      "keyPhrase": "I also went to India."
,
      "japanese": "También fui a India."
      },
      {
      "keyPhrase": "I stayed in Gurgaon, India, for four months."
,
      "japanese": "Me quedé cuatro meses en Gurgaon, India."
      },
      {
      "keyPhrase": "After I came back to Japan, I joined a travel company."
,
      "japanese": "Al volver a Japón, entré a una agencia de viajes."
      },
      {
      "keyPhrase": "Now I work as a guide."
,
      "japanese": "Ahora trabajo como guía."
      },
      {
      "keyPhrase": "Until last year, I mainly worked as a tour escort."
,
      "japanese": "Hasta el año pasado, trabajé principalmente como acompañante de tours."
      },
      {
      "keyPhrase": "I also worked on many hiking tours."
,
      "japanese": "También trabajé en muchas rutas de senderismo."
      },
      {
      "keyPhrase": "I have climbed Mount Fuji three times."
,
      "japanese": "He subido al monte Fuji tres veces."
      },
      {
      "keyPhrase": "Now I also work as an inbound guide."
,
      "japanese": "Ahora también trabajo como guía para visitantes extranjeros."
      },
      {
      "keyPhrase": "I also work on cruise ships."
,
      "japanese": "También trabajo en barcos de crucero."
      },
      {
      "keyPhrase": "I value thinking for myself."
,
      "japanese": "Valoro pensar por mí mismo."
      },
      {
      "keyPhrase": "I want to move forward little by little."
,
      "japanese": "Quiero avanzar poco a poco."
      },
      {
      "keyPhrase": "I want to live a life that feels right to me."
,
      "japanese": "Quiero vivir una vida con la que me sienta a gusto."
      },
      {
      "keyPhrase": "I want to keep traveling."
,
      "japanese": "Quiero seguir viajando."
      },
      {
      "keyPhrase": "I want to keep meeting people as I get older."
,
      "japanese": "Quiero seguir relacionándome con la gente aunque me haga mayor."
      },
      {
      "keyPhrase": "I want to communicate in English comfortably."
,
      "japanese": "Quiero comunicarme en inglés sin problemas."
      },
      {
      "keyPhrase": "My hobby is solo travel."
,
      "japanese": "Mi afición es viajar solo."
      },
      {
      "keyPhrase": "I also like playing shogi."
,
      "japanese": "También me gusta jugar shogi."
      },
      {
      "keyPhrase": "I also like following technology news."
,
      "japanese": "También me gusta ver las noticias de tecnología."
      },
      {
      "keyPhrase": "I like traveling and hiking."
,
      "japanese": "Me gustan los viajes y el senderismo."
      },
      {
      "keyPhrase": "But I'm not good at making plans."
,
      "japanese": "Pero no se me da bien hacer planes."
      },
      {
      "keyPhrase": "If I'm not careful, I tend to stay home."
,
      "japanese": "Si me descuido, tiendo a quedarme en casa."
      },
      {
      "keyPhrase": "I'm interested in unusual food."
,
      "japanese": "Me interesan las comidas poco comunes."
      },
      {
      "keyPhrase": "I like food that gives me new ideas."
,
      "japanese": "Me gusta la comida que me da nuevas ideas."
      },
      {
      "keyPhrase": "I don't want to eat a lot."
,
      "japanese": "No quiero comer mucho."
      },
      {
      "keyPhrase": "I'm not very interested in familiar foods like donuts."
,
      "japanese": "No me interesan mucho las comidas comunes como las donas."
      },
      {
      "keyPhrase": "I lived in Yokohama until I graduated from university."
,
      "japanese": "Viví en Yokohama hasta graduarme de la universidad."
      },
      {
      "keyPhrase": "I lived by myself in Tachikawa, Tokyo."
,
      "japanese": "Viví solo en Tachikawa, Tokio."
      },
      {
      "keyPhrase": "I currently live in Kanagawa."
,
      "japanese": "Actualmente vivo en Kanagawa."
      },
      {
      "keyPhrase": "I'm single."
,
      "japanese": "Estoy soltero."
      },
      {
      "keyPhrase": "I live with my aunt."
,
      "japanese": "Vivo con mi tía."
      },
      {
      "keyPhrase": "I'm interested in getting married."
,
      "japanese": "Me interesa casarme."
      },
      {
      "keyPhrase": "But I'm not actively looking for a partner."
,
      "japanese": "Pero no busco pareja de forma activa."
      },
      {
      "keyPhrase": "I often spend time with friends I met while traveling."
,
      "japanese": "A menudo paso tiempo con amigos que conocí en mis viajes."
      },
      {
      "keyPhrase": "There are many mountains you can visit from Tokyo."
,
      "japanese": "Hay muchas montañas a las que puedes ir desde Tokio."
      },
      {
      "keyPhrase": "Many can be visited on a day trip."
,
      "japanese": "Muchas se pueden visitar en una excursión de un día."
      },
      {
      "keyPhrase": "I recommend Yatsugatake."
,
      "japanese": "Recomiendo Yatsugatake."
      },
      {
      "keyPhrase": "You can enjoy Yatsugatake all year round."
,
      "japanese": "Se puede disfrutar de Yatsugatake todo el año."
      },
      {
      "keyPhrase": "You can take a bus near the mountain even in winter."
,
      "japanese": "Incluso en invierno, puedes ir en autobús hasta cerca de la montaña."
      },
      {
      "keyPhrase": "You can take a ropeway to the middle of the mountain."
,
      "japanese": "Se puede subir en teleférico hasta la mitad de la montaña."
      },
      {
      "keyPhrase": "You can enjoy snow hiking there."
,
      "japanese": "Ahí puedes disfrutar del senderismo con nieve."
      },
      {
      "keyPhrase": "Public transportation is convenient in Japan."
,
      "japanese": "El transporte público es cómodo en Japón."
      },
      {
      "keyPhrase": "You can get around by train or bus almost everywhere."
,
      "japanese": "Casi en todas partes te puedes mover en tren o autobús."
      },
      {
      "keyPhrase": "Japan is very safe."
,
      "japanese": "Japón es muy seguro."
      },
      {
      "keyPhrase": "Each region of Japan is different."
,
      "japanese": "Cada región de Japón es diferente."
      },
      {
      "keyPhrase": "Japan also has a lot of nature."
,
      "japanese": "Japón también tiene mucha naturaleza."
      },
      {
      "keyPhrase": "You can choose a place by looking at a map."
,
      "japanese": "Puedes elegir el destino mirando el mapa."
      },
      {
      "keyPhrase": "English is still not widely spoken in Japan."
,
      "japanese": "En Japón todavía no se habla mucho inglés."
      },
      {
      "keyPhrase": "But speaking a little Japanese can make a big difference."
,
      "japanese": "Pero hablar un poco de japonés puede cambiar mucho la impresión."
      },
      {
      "keyPhrase": "I think Japanese people will be kind to you."
,
      "japanese": "Creo que los japoneses te tratarán con amabilidad."
      },
      {
      "keyPhrase": "When I travel, I want to use English more."
,
      "japanese": "Cuando viajo, quiero usar más el inglés."
      },
      {
      "keyPhrase": "That's why I'm studying English."
,
      "japanese": "Por eso estoy estudiando inglés."
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
