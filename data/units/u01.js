export const vocab = [
  { w:"halló", en:"hello", pos:"interj", topic:"greetings", unit:1, cefr:"A1",
    ex:{ is:"Halló! Ég heiti Sóley.", en:"Hello! I'm Sóley." } },

  { w:"góðan daginn", en:"good day", pos:"phrase", topic:"greetings", unit:1, cefr:"A1",
    ex:{ is:"Góðan daginn, Tómas.", en:"Good day, Tómas." } },

  { w:"bless", en:"bye", pos:"interj", topic:"greetings", unit:1, cefr:"A1",
    ex:{ is:"Bless, Sóley!", en:"Bye, Sóley!" } },

  { w:"sæll", en:"hello (said to a man)", pos:"interj", topic:"greetings", unit:1, cefr:"A1",
    ex:{ is:"Sæll, Tómas!", en:"Hello, Tómas!" } },

  { w:"sæl", en:"hello (said to a woman)", pos:"interj", topic:"greetings", unit:1, cefr:"A1",
    ex:{ is:"Sæl, Sóley!", en:"Hello, Sóley!" } },

  { w:"takk", en:"thanks", pos:"interj", topic:"courtesy", unit:1, cefr:"A1",
    ex:{ is:"Takk fyrir hjálpina.", en:"Thanks for the help." } },

  { w:"fyrirgefðu", en:"excuse me, sorry", pos:"phrase", topic:"courtesy", unit:1, cefr:"A1",
    ex:{ is:"Fyrirgefðu, hvar er skólinn?", en:"Excuse me, where is the school?" } },

  { w:"velkominn", en:"welcome", pos:"adj", topic:"courtesy", unit:1, cefr:"A1",
    decl:{ nom:["velkominn","velkomin","velkomið"] },
    ex:{ is:"Velkominn til Íslands, Tómas!", en:"Welcome to Iceland, Tómas!" } },

  { w:"já", en:"yes", pos:"adv", topic:"courtesy", unit:1, cefr:"A1",
    ex:{ is:"Já, ég er nemandi.", en:"Yes, I am a student." } },

  { w:"nei", en:"no", pos:"adv", topic:"courtesy", unit:1, cefr:"A1",
    ex:{ is:"Nei, ég heiti ekki Tómas.", en:"No, my name is not Tómas." } },

  { w:"jú", en:"yes (answering a negative question)", pos:"adv", topic:"courtesy", unit:1, cefr:"A1",
    ex:{ is:"Jú, ég tala íslensku.", en:"Yes, I do speak Icelandic." } },

  { w:"hvað", en:"what", pos:"pron", topic:"questions", unit:1, cefr:"A1",
    ex:{ is:"Hvað heitir þú?", en:"What is your name?" } },

  { w:"hver", en:"who", pos:"pron", topic:"questions", unit:1, cefr:"A1",
    ex:{ is:"Hver er þetta?", en:"Who is this?" } },

  { w:"hvar", en:"where", pos:"adv", topic:"questions", unit:1, cefr:"A1",
    ex:{ is:"Hvar er skólinn?", en:"Where is the school?" } },

  { w:"hvaðan", en:"where from", pos:"adv", topic:"questions", unit:1, cefr:"A1",
    ex:{ is:"Hvaðan ert þú?", en:"Where are you from?" } },

  { w:"ég", en:"I", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Ég heiti Sóley.", en:"My name is Sóley." } },

  { w:"þú", en:"you", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Hvað heitir þú?", en:"What is your name?" } },

  { w:"hann", en:"he, it", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Hann er kennari.", en:"He is a teacher." } },

  { w:"hún", en:"she, it", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Hún heitir Sóley.", en:"Her name is Sóley." } },

  { w:"það", en:"it", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Það er kalt úti.", en:"It is cold outside." } },

  { w:"þetta", en:"this", pos:"pron", topic:"pronouns", unit:1, cefr:"A1",
    ex:{ is:"Hvað er þetta?", en:"What is this?" } },

  { w:"hér", en:"here", pos:"adv", topic:"place", unit:1, cefr:"A1",
    ex:{ is:"Bókin er hér.", en:"The book is here." } },

  { w:"frá", en:"from", pos:"prep", topic:"place", unit:1, cefr:"A1", gov:"ÞGF",
    ex:{ is:"Ég er frá Kanada.", en:"I am from Canada." } },

  { w:"vera", en:"to be", pos:"verb", topic:"actions", unit:1, cefr:"A1", vclass:"irregular",
    conj:{ pres:["er","ert","er","erum","eruð","eru"],
           past:["var","varst","var","vorum","voruð","voru"], pp:"verið" },
    ex:{ is:"Ég er hér.", en:"I am here." } },

  { w:"heita", en:"to be called", pos:"verb", topic:"actions", unit:1, cefr:"A1", vclass:"strong",
    conj:{ pres:["heiti","heitir","heitir","heitum","heitið","heita"], pp:"heitið" },
    ex:{ is:"Ég heiti Tómas.", en:"My name is Tómas." } },

  { w:"tala", en:"to speak, to talk", pos:"verb", topic:"actions", unit:1, cefr:"A1", vclass:"weak-a",
    conj:{ pres:["tala","talar","talar","tölum","talið","tala"],
           past:["talaði","talaðir","talaði","töluðum","töluðuð","töluðu"], pp:"talað" },
    ex:{ is:"Hún talar íslensku.", en:"She speaks Icelandic." } },

  { w:"góður", en:"good", pos:"adj", topic:"describing", unit:1, cefr:"A1",
    decl:{ nom:["góður","góð","gott"], comp:"betri", sup:"bestur" },
    ex:{ is:"Þetta er góð bók.", en:"This is a good book." } },

  { w:"maður", en:"man, person", pos:"noun", g:"kk", topic:"people", unit:1, cefr:"A1",
    forms:{ sg:["maður","mann","manni","manns"], pl:["menn","menn","mönnum","manna"] },
    ex:{ is:"Maðurinn heitir Tómas.", en:"The man's name is Tómas." } },

  { w:"kona", en:"woman", pos:"noun", g:"kvk", topic:"people", unit:1, cefr:"A1",
    forms:{ sg:["kona","konu","konu","konu"], pl:["konur","konur","konum","kvenna"] },
    ex:{ is:"Konan er kennari.", en:"The woman is a teacher." } },

  { w:"barn", en:"child", pos:"noun", g:"hk", topic:"people", unit:1, cefr:"A1",
    forms:{ sg:["barn","barn","barni","barns"], pl:["börn","börn","börnum","barna"] },
    ex:{ is:"Barnið heitir Sóley.", en:"The child is called Sóley." } },

  { w:"hús", en:"house", pos:"noun", g:"hk", topic:"places", unit:1, cefr:"A1",
    forms:{ sg:["hús","hús","húsi","húss"], pl:["hús","hús","húsum","húsa"] },
    ex:{ is:"Húsið er hvítt.", en:"The house is white." } },

  { w:"bók", en:"book", pos:"noun", g:"kvk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["bók","bók","bók","bókar"], pl:["bækur","bækur","bókum","bóka"] },
    ex:{ is:"Bókin er á borðinu.", en:"The book is on the table." } },

  { w:"borg", en:"city", pos:"noun", g:"kvk", topic:"places", unit:1, cefr:"A1",
    forms:{ sg:["borg","borg","borg","borgar"], pl:["borgir","borgir","borgum","borga"] },
    ex:{ is:"Reykjavík er lítil borg.", en:"Reykjavík is a small city." } },

  { w:"land", en:"country, land", pos:"noun", g:"hk", topic:"places", unit:1, cefr:"A1",
    forms:{ sg:["land","land","landi","lands"], pl:["lönd","lönd","löndum","landa"] },
    ex:{ is:"Ísland er fallegt land.", en:"Iceland is a beautiful country." } },

  { w:"nafn", en:"name", pos:"noun", g:"hk", topic:"people", unit:1, cefr:"A1",
    forms:{ sg:["nafn","nafn","nafni","nafns"], pl:["nöfn","nöfn","nöfnum","nafna"] },
    ex:{ is:"Nafnið mitt er Tómas.", en:"My name is Tómas." } },

  { w:"stafur", en:"letter (of the alphabet)", pos:"noun", g:"kk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["stafur","staf","staf","stafs"], pl:["stafir","stafi","stöfum","stafa"] },
    ex:{ is:"Þetta er fyrsti stafurinn.", en:"This is the first letter." } },

  { w:"orð", en:"word", pos:"noun", g:"hk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["orð","orð","orði","orðs"], pl:["orð","orð","orðum","orða"] },
    ex:{ is:"Ég kann þetta orð.", en:"I know this word." } },

  { w:"kennari", en:"teacher", pos:"noun", g:"kk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["kennari","kennara","kennara","kennara"], pl:["kennarar","kennara","kennurum","kennara"] },
    ex:{ is:"Kennarinn talar hægt.", en:"The teacher speaks slowly." } },

  { w:"nemandi", en:"student", pos:"noun", g:"kk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["nemandi","nemanda","nemanda","nemanda"], pl:["nemendur","nemendur","nemendum","nemenda"] },
    ex:{ is:"Nemandinn er í skólanum.", en:"The student is at school." } },

  { w:"skóli", en:"school", pos:"noun", g:"kk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["skóli","skóla","skóla","skóla"], pl:["skólar","skóla","skólum","skóla"] },
    ex:{ is:"Skólinn byrjar klukkan átta.", en:"School starts at eight." } },

  { w:"spurning", en:"question", pos:"noun", g:"kvk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["spurning","spurningu","spurningu","spurningar"], pl:["spurningar","spurningar","spurningum","spurninga"] },
    ex:{ is:"Ég á eina spurningu.", en:"I have one question." } },

  { w:"íslenska", en:"Icelandic (the language)", pos:"noun", g:"kvk", topic:"classroom", unit:1, cefr:"A1",
    forms:{ sg:["íslenska","íslensku","íslensku","íslensku"], pl:null },
    ex:{ is:"Ég tala smá íslensku.", en:"I speak a little Icelandic." } },

  { w:"dagur", en:"day", pos:"noun", g:"kk", topic:"time", unit:1, cefr:"A1",
    forms:{ sg:["dagur","dag","degi","dags"], pl:["dagar","daga","dögum","daga"] },
    ex:{ is:"Þetta er góður dagur.", en:"This is a good day." } },

  { w:"núll", en:"zero", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Núll, einn, tveir, þrír.", en:"Zero, one, two, three." } },

  { w:"einn", en:"one", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Hér er einn maður.", en:"Here is one man." } },

  { w:"tveir", en:"two", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Ég er með tvær bækur.", en:"I have two books." } },

  { w:"þrír", en:"three", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Þrír kennarar tala saman.", en:"Three teachers are talking together." } },

  { w:"fjórir", en:"four", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Fjórir nemendur eru í skólanum.", en:"Four students are at the school." } },

  { w:"fimm", en:"five", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Klukkan er fimm.", en:"It is five o'clock." } },

  { w:"sex", en:"six", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Sex börn eru í húsinu.", en:"Six children are in the house." } },

  { w:"sjö", en:"seven", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Sjö dagar eru í viku.", en:"There are seven days in a week." } },

  { w:"átta", en:"eight", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Ég vakna klukkan átta.", en:"I wake up at eight." } },

  { w:"níu", en:"nine", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Barnið er níu ára.", en:"The child is nine years old." } },

  { w:"tíu", en:"ten", pos:"num", topic:"numbers", unit:1, cefr:"A1",
    ex:{ is:"Ég tel upp að tíu.", en:"I count up to ten." } }
];

export const unit = {
  id: 1,
  slug: "u01",
  title: "Halló!",
  en: "Hello!",
  cefr: "A1.1",
  icon: "👋",
  blurb: "Greetings, names, the alphabet, and your first Icelandic questions.",
  canDo: [
    "Greet someone and say goodbye at the right moment of the day",
    "Give my name and ask for someone else's",
    "Read Icelandic letters aloud, including þ, ð and the accented vowels",
    "Tell a noun's gender and stick the right form of \"the\" onto it"
  ],
  lessons: [

    {
      n: 1,
      id: "u01l1",
      kind: "lesson",
      title: "Halló, ég heiti…",
      en: "Hello, I'm…",
      goal: "Say hello, give your name, ask for someone else's.",
      minutes: 8,
      icon: "👋",
      teach: [
        { h: "Two ways in",
          p: "Halló works anywhere and asks nothing of you. Góðan daginn is the one you use walking into a shop, a bank, a classroom — anywhere there is a counter between you and a stranger.",
          ex: [["Halló!","Hello!"],["Góðan daginn.","Good day."],["Bless!","Bye!"]],
          tip: "Icelanders say góðan daginn from waking up until evening. There is no separate \"good morning\"." },

        { h: "Sæll to a man, sæl to a woman",
          p: "This greeting agrees with the person standing in front of you, the way an adjective does. One extra l for a man, none for a woman. Nobody will be offended if you slip, but people notice when you get it right.",
          table: { cols:["to a man","to a woman"],
                   rows:[["Sæll!","Sæl!"],["Komdu sæll!","Komdu sæl!"],["Vertu sæll!","Vertu sæl!"]] },
          tip: "Komdu sæl… is hello. Vertu sæl… is goodbye. Same word, opposite doors." },

        { h: "Your name, their name",
          p: "Icelandic never says \"my name is\". It says \"I am called\" — one verb, no possessive to worry about. To ask, the verb jumps to the front.",
          ex: [["Ég heiti Tómas.","I'm Tómas."],["Hvað heitir þú?","What's your name?"],["Hún heitir Sóley.","Her name is Sóley."]],
          tip: "heiti goes with ég. heitir goes with þú, hann and hún." }
      ],
      vocab: ["halló","góðan daginn","bless","sæll","sæl","takk","fyrirgefðu","heita","ég","þú","hvað","já","nei"],
      items: [
        { t:"choice", q:"You walk into a bakery at ten in the morning. What do you say?",
          opts:["Góðan daginn","Góða nótt","Bless","Takk"], a:"Góðan daginn",
          note:"Góðan daginn covers morning and afternoon. Góða nótt is only for leaving late at night.",
          tags:["greetings"] },

        { t:"choice", q:"Sóley is a woman. How do you greet her?",
          opts:["Sæl, Sóley!","Sæll, Sóley!","Sælt, Sóley!"], a:"Sæl, Sóley!",
          note:"The greeting agrees with the person you are talking to: sæl to a woman, sæll to a man.",
          tags:["greetings","agreement"] },

        { t:"match", q:"Match the words",
          pairs:[["halló","hello"],["bless","bye"],["takk","thanks"],["fyrirgefðu","excuse me"],["góðan daginn","good day"]] },

        { t:"build", q:"My name is Tómas.", a:"Ég heiti Tómas", extra:["þú","er","hún"],
          note:"heiti is the ég form. Literally: I am called Tómas.", tags:["verb:heita"] },

        { t:"build", q:"What is your name?", a:"Hvað heitir þú", extra:["hver","ég","heiti"],
          note:"The verb comes before þú in a question. hvað = what, hver = who.", tags:["questions"] },

        { t:"type", q:"Type \"Excuse me\".", a:"Fyrirgefðu",
          hint:"Starts with fyrir-", note:"Literally \"forgive\". One word, stress on the first syllable." },

        { t:"type", q:"Type \"She is called Sóley.\"", a:"Hún heitir Sóley",
          note:"hún + heitir. The same form as þú heitir." },

        { t:"listen", speak:"Ég heiti Sóley.", q:"What did you hear?", mode:"choice",
          opts:["Ég heiti Sóley.","Hún heitir Sóley.","Hvað heitir þú?"], a:"Ég heiti Sóley.",
          note:"Listen for the first word: ég, not hún." },

        { t:"listen", speak:"Takk fyrir.", mode:"type", a:"Takk fyrir",
          note:"Takk on its own is fine too. Takk fyrir is a touch warmer." },

        { t:"speak", is:"Góðan daginn!", en:"Good day!",
          tip:"The g in daginn softens to a y: DAI-yin. Stress the very first syllable of both words." },

        { t:"choice", q:"Someone asks you \"Hvað heitir þú?\" — what do they want?",
          opts:["Your name","Your address","Where you are from","The time"], a:"Your name",
          note:"hvað = what, heitir = are called." }
      ]
    },

    {
      n: 2,
      id: "u01l2",
      kind: "lesson",
      title: "Stafir og tölur",
      en: "Letters and numbers",
      goal: "Read the odd letters out loud and count from núll to tíu.",
      minutes: 10,
      icon: "🔤",
      teach: [
        { h: "þ and ð are two different th's",
          p: "þ is the hard th of \"thin\", and it only ever starts a word. ð is the soft th of \"this\", and it never starts one. So if the sound opens the word it is þ; if it sits inside, it is ð.",
          ex: [["þú","you"],["það","it"],["maður","man"],["góður","good"]],
          tip: "þ opens, ð never does. And no Icelandic word ends in þ." },

        { h: "An accent is a different letter, not a stress mark",
          p: "á is not a loud a. It is its own sound. Swap one for the other and you have a different word.",
          table: { cols:["letter","sounds like","word"],
                   rows:[["a","a in father, short","tala"],
                         ["á","ow in now","hár"],
                         ["u","u in put, tighter","hundur"],
                         ["ú","oo in moon","hús"],
                         ["i, y","i in sit","fimm"],
                         ["í, ý","ee in see","tíu"],
                         ["au","ö then i — never English ow","auga"],
                         ["ei, ey","ay in day","einn"]] },
          tip: "i and y sound identical. So do í and ý. The spelling is history, not sound." },

        { h: "Four noises that catch everyone out",
          list: ["hv- is said kv-. hvað comes out as \"kvath\".",
                 "ll is said tl. bíll ends like \"beetl\".",
                 "nn after a long vowel or a diphthong is tn: einn is \"eitn\". But the -inn of \"the\" keeps a plain nn.",
                 "pp, tt, kk get a puff of h in front: átta is \"ahtta\".",
                 "Stress is on the first syllable. Always. Even in banani."] },

        { h: "Núll til tíu",
          p: "Say them out loud in one breath. The first four change shape depending on what you are counting — that comes later. For phone numbers and sums Icelanders use the neuter set: eitt, tvö, þrjú, fjögur.",
          list: ["0 núll","1 einn","2 tveir","3 þrír","4 fjórir","5 fimm","6 sex","7 sjö","8 átta","9 níu","10 tíu"] }
      ],
      vocab: ["stafur","orð","nafn","hvar","hver","hvaðan","núll","einn","tveir","þrír","fjórir","fimm","sex","sjö","átta","níu","tíu"],
      items: [
        { t:"choice", q:"Which of these can start an Icelandic word?",
          opts:["þ","ð","c","z"], a:"þ",
          note:"ð never begins a word, and þ never ends one. c and z are not in the modern alphabet.",
          tags:["sounds"] },

        { t:"choice", q:"How is hvað actually pronounced?",
          opts:["kvath","hvath with an English h","vath"], a:"kvath",
          note:"Standard modern speech turns every hv- into kv-.", tags:["sounds"] },

        { t:"listen", speak:"átta", q:"Which number is it?", mode:"choice",
          opts:["átta","níu","sjö","tíu"], a:"átta",
          note:"átta has the little h-puff before the tt: \"ahtta\"." },

        { t:"listen", speak:"Þrír, fjórir, fimm.", mode:"type", a:"Þrír fjórir fimm",
          hint:"Three numbers in a row.", note:"þrír opens with the hard th of \"thin\"." },

        { t:"match", q:"Match the numbers",
          pairs:[["núll","zero"],["þrír","three"],["fimm","five"],["sjö","seven"],["tíu","ten"]] },

        { t:"type", q:"Type the Icelandic for \"eight\".", a:"átta", hint:"Accented a." },

        { t:"type", q:"Type the Icelandic for \"six\".", a:"sex",
          note:"Yes, really. It is pronounced with a clear s at the front." },

        { t:"build", q:"What is this?", a:"Hvað er þetta", extra:["hver","heitir","hvar"],
          note:"hvað asks about a thing, hver asks about a person.", tags:["questions"] },

        { t:"choice", q:"Which word contains the tl sound?",
          opts:["bíll","bók","barn","borg"], a:"bíll",
          note:"Double ll is said tl. Only the second l is the ending.", tags:["sounds"] },

        { t:"speak", is:"Reykjavík", en:"Reykjavík",
          tip:"REYK-ja-vík. Stress the first syllable and let the rest fall away. ey is the ay of \"day\"." },

        { t:"fill", q:"Keep counting.", sentence:"Sex, sjö, ___, níu.", base:"8",
          mode:"choice", opts:["átta","tíu","fimm"], a:"átta", why:"átta is eight." },

        { t:"choice", q:"You hear the \"ee\" of \"see\". Which letter is it?",
          opts:["í","i","u","ö"], a:"í",
          note:"Plain i is the short i of \"sit\". The accent makes it long and tight." }
      ]
    },

    {
      n: 3,
      id: "u01l3",
      kind: "grammar",
      title: "Kyn og greinir",
      en: "Gender, and the glued-on \"the\"",
      goal: "Guess a noun's gender from its shape and add the definite article.",
      minutes: 13,
      icon: "🧩",
      teach: [
        { h: "Every noun has a gender, and it has nothing to do with people",
          p: "Is a table masculine? No — borð is neuter. Gender in Icelandic follows the shape of the word, not its meaning. Learn the gender at the same moment you learn the word, the way you learn its spelling.",
          ex: [["maður (kk)","man"],["kona (kvk)","woman"],["barn (hk)","child"]],
          tip: "kk = karlkyn, kvk = kvenkyn, hk = hvorugkyn. You will be reading these three tags for years." },

        { h: "Endings that give the gender away",
          p: "These are habits, not laws. bók and borg have no ending at all and are feminine anyway. Treat the endings as a first guess and let the dictionary correct you.",
          table: { cols:["ending","gender","examples"],
                   rows:[["-ur, -i, -ll, -nn","kk","stafur, skóli, bíll, steinn"],
                         ["-a, -ing, -un","kvk","kona, spurning, verslun"],
                         ["no ending, -i, or an accented vowel","hk","barn, hús, herbergi, bakarí"]] },
          tip: "The -i overlaps: skóli is masculine, herbergi is neuter. When the shape tells you nothing, memorise it." },

        { h: "\"The\" is a suffix",
          p: "Icelandic has no word for \"a\". It has no separate word for \"the\" either — it welds it onto the back of the noun.",
          table: { cols:["gender","noun","+ the"],
                   rows:[["kk","maður","maðurinn"],
                         ["kk","skóli","skólinn"],
                         ["kvk","bók","bókin"],
                         ["kvk","kona","konan"],
                         ["hk","hús","húsið"],
                         ["hk","orð","orðið"]] },
          tip: "-inn for kk, -in for kvk, -ið for hk. If the noun already ends in a vowel you only add the -nn, -n or -ð." },

        { h: "Say it out loud",
          p: "The -inn of maðurinn is a plain double n, not the tn of einn. The article is the one place where nn behaves itself." }
      ],
      vocab: ["maður","kona","barn","hús","bók","borg","land","nafn","spurning","kennari","skóli","hér"],
      items: [
        { t:"gender", word:"kona", a:"kvk", note:"Nouns ending in -a are almost always feminine.", tags:["noun:fem"] },
        { t:"gender", word:"skóli", a:"kk", note:"-i on a word like this is usually masculine: skóli, kennari, penni.", tags:["noun:masc"] },
        { t:"gender", word:"hús", a:"hk", note:"A short bare noun is often neuter — but check, because bók and borg are bare and feminine.", tags:["noun:neut"] },
        { t:"gender", word:"spurning", a:"kvk", note:"-ing and -un are feminine, with no exceptions worth worrying about.", tags:["noun:fem"] },
        { t:"gender", word:"maður", a:"kk", note:"-ur is the classic masculine ending.", tags:["noun:masc"] },

        { t:"table", q:"Add the definite article.",
          cols:["","orð","+ greinir"],
          rows:[ { label:"kk", cells:["maður","maðurinn"], blank:[1] },
                 { label:"kvk", cells:["bók","bókin"], blank:[1] },
                 { label:"hk", cells:["hús","húsið"], blank:[1] } ],
          note:"-inn, -in, -ið. Three genders, three endings." },

        { t:"table", q:"Nouns that already end in a vowel take a shorter article.",
          cols:["","orð","+ greinir"],
          rows:[ { label:"kk", cells:["skóli","skólinn"], blank:[1] },
                 { label:"kk", cells:["kennari","kennarinn"], blank:[] },
                 { label:"kvk", cells:["kona","konan"], blank:[1] } ],
          note:"skóli + nn, kona + n. The vowel is already there, so you do not repeat it." },

        { t:"fill", q:"Add \"the\".", sentence:"Hvar er ___ ?", base:"bók", a:"bókin",
          mode:"type", why:"bók is kvk, so the article is -in." },

        { t:"fill", q:"Add \"the\".", sentence:"___ heitir Tómas.", base:"maður", a:"maðurinn",
          mode:"type", why:"maður is kk, so the article is -inn." },

        { t:"fill", q:"Add \"the\".", sentence:"___ er hér.", base:"hús", a:"húsið",
          mode:"type", why:"hús is hk, so the article is -ið." },

        { t:"fill", q:"Pick the right form.", sentence:"___ heitir Ísland.", base:"land",
          mode:"choice", opts:["Landið","Landin","Landinn"], a:"Landið",
          why:"land is neuter, so it takes -ið." },

        { t:"choice", q:"Which of these nouns is NOT feminine?",
          opts:["borg","bók","kona","barn"], a:"barn",
          note:"barn is neuter: barnið. The other three are all kvk." },

        { t:"match", q:"Match the nouns",
          pairs:[["maður","man"],["kona","woman"],["barn","child"],["land","country"],["borg","city"],["hús","house"]] },

        { t:"build", q:"The teacher is here.", a:"Kennarinn er hér", extra:["kennari","hún","skólinn"],
          note:"kennari is kk and ends in a vowel, so it takes just -nn.", tags:["article"] }
      ]
    },

    {
      n: 4,
      id: "u01l4",
      kind: "lesson",
      title: "Ert þú kennari?",
      en: "Are you a teacher?",
      goal: "Use vera, ask by moving the verb, and answer with já, nei or jú.",
      minutes: 10,
      icon: "❓",
      teach: [
        { h: "Five pronouns, and það does overtime",
          p: "hann and hún are not reserved for people. A school is masculine, so the school is hann. A book is feminine, so the book is hún. Match the pronoun to the noun's gender, not to what the thing actually is.",
          table: { cols:["Icelandic","English"],
                   rows:[["ég","I"],["þú","you"],["hann","he, it"],["hún","she, it"],["það","it"]] },
          ex: [["Hvar er skólinn? Hann er hér.","Where is the school? It is here."],
               ["Hvar er bókin? Hún er hér.","Where is the book? It is here."]] },

        { h: "vera — the verb you cannot avoid",
          table: { cols:["","nútíð"],
                   rows:[["ég","er"],["þú","ert"],["hann, hún, það","er"]] },
          tip: "Only þú gets its own form. er covers everything else in the singular." },

        { h: "To ask, put the verb first",
          p: "No do, no does, no auxiliary at all. You swap the first two words and you are done.",
          ex: [["Þú ert kennari.","You are a teacher."],
               ["Ert þú kennari?","Are you a teacher?"],
               ["Hann heitir Tómas.","He is called Tómas."],
               ["Heitir hann Tómas?","Is he called Tómas?"]],
          tip: "In speech þú melts into the verb: ertu, heitirðu. Both are perfectly correct." },

        { h: "já, nei — and jú",
          p: "jú has exactly one job: saying yes to a question that was phrased in the negative. English has to fight back with \"yes I am\". Icelandic just changes the word.",
          ex: [["Ert þú kennari? — Já.","Are you a teacher? — Yes."],
               ["Ert þú ekki kennari? — Jú, ég er kennari.","Aren't you a teacher? — Yes, I am."],
               ["Ert þú ekki kennari? — Nei.","Aren't you a teacher? — No."]] }
      ],
      vocab: ["ég","þú","hann","hún","það","þetta","vera","hver","hvar","já","nei","jú","nemandi","góður","frá"],
      items: [
        { t:"table", q:"Complete vera in the singular.",
          cols:["","nútíð"],
          rows:[ { label:"ég", cells:["er"], blank:[0] },
                 { label:"þú", cells:["ert"], blank:[0] },
                 { label:"hann", cells:["er"], blank:[] },
                 { label:"hún", cells:["er"], blank:[] } ],
          note:"One form for þú, one form for everything else.", tags:["verb:vera"] },

        { t:"match", q:"Match the pronouns",
          pairs:[["ég","I"],["þú","you"],["hann","he"],["hún","she"],["það","it"]] },

        { t:"choice", q:"Hvar er bókin?",
          opts:["Hún er hér.","Hann er hér.","Það er hér."], a:"Hún er hér.",
          note:"bók is feminine, so the book is hún — even though it is an object.", tags:["pronouns"] },

        { t:"choice", q:"Hvar er skólinn?",
          opts:["Hann er hér.","Hún er hér.","Þetta er hér."], a:"Hann er hér.",
          note:"skóli is masculine, so the school is hann.", tags:["pronouns"] },

        { t:"build", q:"Are you a teacher?", a:"Ert þú kennari", extra:["er","hann","heitir"],
          note:"Verb first, subject second. That is the whole trick.", tags:["questions"] },

        { t:"build", q:"Who is this?", a:"Hver er þetta", extra:["hvað","þú","heitir"],
          note:"hver for a person, hvað for a thing.", tags:["questions"] },

        { t:"type", q:"Type \"I am a student.\"", a:"Ég er nemandi",
          note:"No word for \"a\". Ég er nemandi is the whole sentence." },

        { t:"type", q:"Turn \"Þú ert nemandi\" into a question.", a:"Ert þú nemandi", alt:["Ertu nemandi"],
          note:"Move ert to the front. Ertu is the everyday spoken squeeze." },

        { t:"fill", q:"Answer the negative question — and you are one.",
          sentence:"Ert þú ekki kennari? — ___ , ég er kennari.", base:"já / nei / jú",
          mode:"choice", opts:["Jú","Já","Nei"], a:"Jú",
          why:"A question with ekki in it gets jú, never já." },

        { t:"fill", q:"Which pronoun?", sentence:"Hvar er barnið? ___ er hér.", base:"hann / hún / það",
          mode:"choice", opts:["Það","Hann","Hún"], a:"Það",
          why:"barn is neuter, so the child is það." },

        { t:"listen", speak:"Ert þú kennari?", q:"What did you hear?", mode:"choice",
          opts:["Ert þú kennari?","Ert þú nemandi?","Er hann kennari?"], a:"Ert þú kennari?" },

        { t:"speak", is:"Ertu ekki frá Íslandi?", en:"Aren't you from Iceland?",
          tip:"ert þú collapses into ertu in ordinary speech. Let it. And frá has the ow-sound: \"frow\"." }
      ]
    },

    {
      n: 5,
      id: "u01l5",
      kind: "story",
      title: "Fyrsti dagurinn",
      en: "The first day",
      goal: "Follow a whole conversation made only of what you already know.",
      minutes: 9,
      icon: "📖",
      teach: [
        { h: "Before you read",
          p: "Tómas landed in Reykjavík on Sunday and turned up to his first Icelandic class on Monday. Sóley teaches it. Nobody in this room is trying to impress anybody.",
          list: ["kann — I know (a fact, a skill)","byrjun — a start","sjáumst — see you"] },

        { h: "Listen for the flip",
          p: "One line is a question with no question word in it. The only thing marking it as a question is the verb sitting in front of the subject." }
      ],
      story: {
        title: "Fyrsti dagurinn",
        lines: [
          { sp:"Sóley", is:"Góðan daginn. Ég heiti Sóley og ég er kennarinn.", en:"Good day. My name is Sóley and I'm the teacher." },
          { sp:"Tómas", is:"Sæl, Sóley. Ég heiti Tómas.", en:"Hello, Sóley. My name is Tómas." },
          { sp:"Sóley", is:"Tómas. Það er gott nafn.", en:"Tómas. That's a good name." },
          { sp:"Tómas", is:"Takk. Ég er frá Kanada.", en:"Thanks. I'm from Canada." },
          { sp:"Sóley", is:"Talar þú íslensku?", en:"Do you speak Icelandic?" },
          { sp:"Tómas", is:"Já. Ég kann fimm orð.", en:"Yes. I know five words." },
          { sp:"Sóley", is:"Það er góð byrjun.", en:"That's a good start." },
          { sp:"Tómas", is:"Fyrirgefðu. Hvað er þetta orð?", en:"Sorry. What is this word?" },
          { sp:"Sóley", is:"Það er velkominn.", en:"That one is \"welcome\"." },
          { sp:"Tómas", is:"Velkominn. Sex orð.", en:"Velkominn. Six words." },
          { sp:"Sóley", is:"Bless, Tómas. Sjáumst á morgun.", en:"Bye, Tómas. See you tomorrow." }
        ],
        glossary: [["kennarinn","the teacher"],["kann","(I) know"],["byrjun","a start"],["orð","word"],["sjáumst","see you"],["á morgun","tomorrow"]]
      },
      vocab: ["heita","tala","íslenska","orð","nafn","góður","frá","bless","velkominn","kennari"],
      items: [
        { t:"choice", q:"Where is Tómas from?",
          opts:["Kanada","Ísland","Reykjavík","Skotland"], a:"Kanada" },

        { t:"choice", q:"What does Sóley do?",
          opts:["Hún er kennari.","Hún er nemandi.","Hún er frá Kanada."], a:"Hún er kennari.",
          note:"She says it in her very first line: ég er kennarinn." },

        { t:"choice", q:"How many Icelandic words does Tómas have by the end?",
          opts:["Sex","Fimm","Tíu","Núll"], a:"Sex",
          note:"He picks up velkominn during the conversation, so five quietly becomes six." },

        { t:"type", q:"Type Sóley's question: \"Do you speak Icelandic?\"", a:"Talar þú íslensku",
          alt:["Talarðu íslensku"], hint:"Verb first." },

        { t:"build", q:"That is a good name.", a:"Það er gott nafn", extra:["góð","hún","bók"],
          note:"nafn is neuter, so góður shows up as gott.", tags:["agreement"] },

        { t:"build", q:"I am from Canada.", a:"Ég er frá Kanada", extra:["þú","ert","hér"],
          note:"frá is followed by the dative, but Kanada never changes shape.", tags:["prep:frá"] },

        { t:"fill", q:"Finish Sóley's opening line.", sentence:"Ég heiti Sóley og ég er ___ .",
          base:"kennari", a:"kennarinn", mode:"type",
          why:"She means the teacher, not a teacher — kk noun plus -nn." },

        { t:"listen", speak:"Sjáumst á morgun.", q:"What did Sóley say?", mode:"choice",
          opts:["See you tomorrow.","Good evening.","Where are you from?"], a:"See you tomorrow." },

        { t:"match", q:"Match the story words",
          pairs:[["byrjun","a start"],["orð","word"],["nafn","name"],["bless","bye"],["velkominn","welcome"]] },

        { t:"speak", is:"Það er góð byrjun.", en:"That's a good start.",
          tip:"byrjun is BIR-yun — the rj is r followed by a y-sound. Stress the first syllable." },

        { t:"gender", word:"nafn", a:"hk", note:"nafn is neuter: nafnið. That is why the story says gott nafn, not góður." }
      ]
    },

    {
      n: 6,
      id: "u01l6",
      kind: "checkpoint",
      title: "Kaflapróf",
      en: "Unit checkpoint",
      goal: "Prove the whole unit sticks.",
      minutes: 12,
      icon: "🏁",
      teach: [
        { h: "What you now control",
          list: ["Greet by the clock and by the person: góðan daginn, sæll, sæl, bless.",
                 "Give a name and ask for one: Ég heiti… / Hvað heitir þú?",
                 "Read þ, ð, ll, nn, hv- and the accented vowels out loud.",
                 "Count núll to tíu.",
                 "Spot a noun's gender from its shape and glue on -inn, -in or -ið.",
                 "Conjugate vera in the singular and turn any statement into a question by moving the verb.",
                 "Answer with já, nei — and jú when the question came wrapped in ekki."] }
      ],
      vocab: ["hvaðan","frá","jú","bless","níu"],
      items: [
        { t:"choice", q:"It is nine at night and you are leaving a friend's flat. What do you say?",
          opts:["Bless","Góðan daginn","Velkominn","Fyrirgefðu"], a:"Bless" },

        { t:"gender", word:"borg", a:"kvk", note:"borg has no ending at all and is still feminine: borgin. One to memorise." },

        { t:"gender", word:"land", a:"hk", note:"land is neuter: landið." },

        { t:"fill", q:"Add \"the\".", sentence:"___ er í Reykjavík.", base:"skóli", a:"skólinn",
          mode:"type", why:"kk noun ending in a vowel takes just -nn." },

        { t:"fill", q:"Pick the right form.", sentence:"Hvar er ___ ?", base:"barn",
          mode:"choice", opts:["barnið","barnin","barninn"], a:"barnið",
          why:"hk nouns take -ið." },

        { t:"table", q:"Add the article to each noun.",
          cols:["","orð","+ greinir"],
          rows:[ { label:"kk", cells:["kennari","kennarinn"], blank:[1] },
                 { label:"kvk", cells:["kona","konan"], blank:[1] },
                 { label:"hk", cells:["orð","orðið"], blank:[1] } ] },

        { t:"build", q:"What is your name?", a:"Hvað heitir þú", extra:["hver","er","ég"] },

        { t:"build", q:"Is she a teacher?", a:"Er hún kennari", extra:["ert","þú","hann"],
          note:"Verb first. er covers hún.", tags:["questions"] },

        { t:"type", q:"Type \"I am from Iceland.\"", a:"Ég er frá Íslandi",
          hint:"frá takes the dative.", note:"Ísland becomes Íslandi after frá." },

        { t:"type", q:"Type the Icelandic for \"nine\".", a:"níu" },

        { t:"listen", speak:"Hvaðan ert þú?", q:"What did you hear?", mode:"choice",
          opts:["Hvaðan ert þú?","Hvað heitir þú?","Hvar ert þú?"], a:"Hvaðan ert þú?",
          note:"All three start with the kv- sound. Listen past it." },

        { t:"match", q:"Match the question words",
          pairs:[["hvað","what"],["hver","who"],["hvar","where"],["hvaðan","where from"],["já","yes"],["jú","yes (after a negative)"]] },

        { t:"choice", q:"Someone asks \"Ert þú ekki nemandi?\" and you are. Which word opens your answer?",
          opts:["Jú","Já","Nei","Takk"], a:"Jú",
          note:"ekki in the question means the yes is jú." },

        { t:"speak", is:"Ég heiti Tómas og ég er frá Kanada.", en:"My name is Tómas and I'm from Canada.",
          tip:"Stress every first syllable: HEI-ti, KA-na-da. Icelandic never puts the beat later." }
      ]
    }

  ]
};

export default unit;
