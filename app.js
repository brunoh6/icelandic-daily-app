const STORAGE_KEY = "icelandic-daily-progress-v1";

const lessons = [
  {
    id: "sounds",
    title: "Sounds and Letters",
    minutes: 18,
    stage: "Foundation",
    summary: "Learn the alphabet habits that make Icelandic spelling feel less mysterious.",
    theory: [
      "Icelandic spelling is regular enough that slow, careful reading pays off early. Treat accent marks as part of the letter, not decoration.",
      "The letters þ and ð both relate to English th. Use þ for the sharper sound in thin, and ð for the softer sound in this.",
      "Your first goal is recognition: notice long vowels, doubled consonants, and the rhythm of short phrases before chasing speed."
    ],
    phonetics: [
      "Read these aloud in pairs: þu, það, dagur, góðan. Keep the tongue light against the teeth for þ and ð.",
      "Practice the rolled or tapped r in Reykjavík and rétt. A short tap is enough; do not force a long trill."
    ],
    focus: ["alphabet", "pronunciation", "listening"],
    vocab: ["góðan dag", "takk", "já", "nei", "það", "ég"],
    exercises: [
      { type: "choice", prompt: "Which letter usually sounds like the th in thin?", options: ["þ", "ð", "æ", "ö"], answer: "þ" },
      { type: "choice", prompt: "Which letter usually sounds like the th in this?", options: ["ð", "þ", "í", "ll"], answer: "ð" },
      { type: "type", prompt: "Type the Icelandic word for yes.", answer: "já", hint: "It has an accent." }
    ]
  },
  {
    id: "welcome",
    title: "Welcome to Iceland",
    minutes: 20,
    stage: "Lesson 1",
    summary: "Greetings, gender, definite articles, pronouns, and simple questions.",
    theory: [
      "Icelandic nouns have grammatical gender: masculine, feminine, or neuter. Many masculine nouns end in -ur, many feminine nouns end in -a, and many neuter nouns have no obvious ending.",
      "The definite article attaches to the end of the noun: dagur becomes dagurinn, ruta becomes rutan, and hotel becomes hotelið.",
      "Questions often move the verb before the subject: Talar þú? Answer with the subject first: Ég tala."
    ],
    phonetics: [
      "Góðan daginn is a useful careful greeting. Keep ð soft and avoid turning the final -inn into a heavy English syllable.",
      "Practice the hv- question words as a set: hvað, hver, hvar, hvaðan."
    ],
    focus: ["gender", "articles", "questions"],
    vocab: ["góðan dag", "fyrirgefðu", "hótel", "rúta", "hvar", "hvaðan", "ég heiti"],
    exercises: [
      { type: "choice", prompt: "Which noun is most likely feminine from its ending?", options: ["taska", "dagur", "hótel", "stóll"], answer: "taska" },
      { type: "choice", prompt: "Choose the best English meaning: Hvaðan ert þú?", options: ["Where are you from?", "Where is the hotel?", "What is this?", "Are you learning?"], answer: "Where are you from?" },
      { type: "type", prompt: "Add the article to dagur.", answer: "dagurinn", hint: "Masculine nouns often take -inn." },
      { type: "type", prompt: "Translate: My name is Bruno. Use the Icelandic pattern.", answer: "Ég heiti Bruno", hint: "Ég heiti ..." }
    ]
  },
  {
    id: "origins",
    title: "Where Are You From?",
    minutes: 18,
    stage: "Lesson 2",
    summary: "Countries, nationalities, plural pronouns, and polite self-introduction.",
    theory: [
      "Use frá for origin: Ég er frá Perú. Nationality words behave like nouns and often show gender.",
      "The verb vera is central: ég er, þú ert, hann/hún/það er. Keep these forms automatic.",
      "Polite conversation usually combines greeting, name, origin, and a small phrase of thanks or acknowledgement."
    ],
    phonetics: [
      "Practice frá with a clear long á.",
      "Say Perú slowly: pe-ru, with the accent carrying the final vowel."
    ],
    focus: ["origin", "vera", "courtesy"],
    vocab: ["frá", "Perú", "Ísland", "útlendingur", "velkomin", "sömuleiðis"],
    exercises: [
      { type: "choice", prompt: "What does frá mean?", options: ["from", "to", "inside", "after"], answer: "from" },
      { type: "type", prompt: "Translate: I am from Peru.", answer: "Ég er frá Perú", hint: "Use frá." },
      { type: "choice", prompt: "Which is the þú form of vera?", options: ["ert", "er", "eru", "heitir"], answer: "ert" }
    ]
  },
  {
    id: "directions",
    title: "Where Are We Going?",
    minutes: 20,
    stage: "Lesson 3",
    summary: "Directions, plural present verbs, numbers, money, and time.",
    theory: [
      "Direction words change with motion and location. Start with the practical contrast: hvert asks where to, hvar asks where at.",
      "Plural pronouns unlock group travel: við, þið, þeir, þær, þau. Verbs also shift in the plural.",
      "Numbers connect to prices, hours, dates, and travel plans, so this lesson mixes grammar with everyday survival."
    ],
    phonetics: [
      "Contrast hvar and hvert. The r in hvert should be heard before the final t.",
      "Practice klukkan tvö, klukkan fjögur, and eftir hádegi as compact time chunks."
    ],
    focus: ["directions", "plural", "numbers", "time"],
    vocab: ["hvert", "hvar", "við", "klukkan", "milli", "eftir hádegi"],
    exercises: [
      { type: "choice", prompt: "Which question asks where to?", options: ["Hvert?", "Hvar?", "Hver?", "Hvaðan?"], answer: "Hvert?" },
      { type: "choice", prompt: "Which pronoun means we?", options: ["við", "þið", "þeir", "það"], answer: "við" },
      { type: "type", prompt: "Translate: at two o'clock.", answer: "klukkan tvö", hint: "Use klukkan." }
    ]
  },
  {
    id: "shopping",
    title: "I Would Like...",
    minutes: 17,
    stage: "Lesson 4",
    summary: "Requests, prices, objects, and the first strong dose of case awareness.",
    theory: [
      "A practical request pattern is Ég ætla að fá: I would like to get. It is useful in cafes, shops, and ticket counters.",
      "Icelandic cases show the job a noun is doing. At this stage, notice changes after verbs and prepositions without trying to master every table.",
      "When asking price, learn the whole phrase as a tool rather than building it word by word."
    ],
    phonetics: [
      "Say ætla with a light tl cluster. Keep the first vowel open.",
      "Practice fá, kaffi, vatn, and mikið in short shop dialogues."
    ],
    focus: ["requests", "prices", "cases"],
    vocab: ["ég ætla að fá", "kaffi", "vatn", "hvað kostar", "mikið", "peningar"],
    exercises: [
      { type: "choice", prompt: "Best phrase for ordering politely?", options: ["Ég ætla að fá", "Ég er frá", "Hvar er", "Það heitir"], answer: "Ég ætla að fá" },
      { type: "type", prompt: "Translate: I would like coffee.", answer: "Ég ætla að fá kaffi", hint: "Use the request pattern." },
      { type: "choice", prompt: "What does hvað kostar? ask about?", options: ["price", "origin", "weather", "family"], answer: "price" }
    ]
  },
  {
    id: "clothing",
    title: "Clothing",
    minutes: 18,
    stage: "Lesson 5",
    summary: "Adjectives, colors, agreement, and describing what you want or wear.",
    theory: [
      "Adjectives agree with nouns in gender, number, and case. Start by noticing the noun first, then choosing the adjective form.",
      "Colors are high-value adjectives because they make agreement visible in everyday sentences.",
      "Clothing language also strengthens shopping requests and descriptions."
    ],
    phonetics: [
      "Practice föt, peysa, buxur, svartur, blár. Keep ö distinct from o.",
      "Say rauður slowly and let ð stay soft."
    ],
    focus: ["adjectives", "colors", "agreement"],
    vocab: ["föt", "peysa", "buxur", "skór", "rauður", "svartur", "blár"],
    exercises: [
      { type: "choice", prompt: "What should an adjective agree with?", options: ["the noun", "only the verb", "the English translation", "the sentence length"], answer: "the noun" },
      { type: "choice", prompt: "Which word means clothes?", options: ["föt", "rúta", "veður", "fjölskylda"], answer: "föt" },
      { type: "type", prompt: "Type the Icelandic word for shoes.", answer: "skór", hint: "Starts with sk." }
    ]
  },
  {
    id: "travel",
    title: "On the Move",
    minutes: 19,
    stage: "Lesson 6",
    summary: "Transport, location phrases, routes, and travel questions.",
    theory: [
      "Travel Icelandic depends on prepositions: to, from, in, on, by, and with. Each one tends to invite a case pattern.",
      "Build useful chunks: I go by bus, the bus leaves, where does it stop, and how long does it take.",
      "Map reading and route questions are ideal review because they combine place words, present tense, and numbers."
    ],
    phonetics: [
      "Practice strætó and flugvöllur. Do not flatten æ into English a.",
      "Read fer, förum, fara as a family."
    ],
    focus: ["transport", "prepositions", "routes"],
    vocab: ["strætó", "flugvöllur", "fer", "stoppar", "hérna", "þangað"],
    exercises: [
      { type: "choice", prompt: "Which word refers to a city bus?", options: ["strætó", "hótel", "hádegi", "maður"], answer: "strætó" },
      { type: "type", prompt: "Translate: The bus stops here.", answer: "Rútan stoppar hérna", hint: "Rútan + stoppar + here." },
      { type: "choice", prompt: "Which verb family means go?", options: ["fara", "heita", "borða", "lesa"], answer: "fara" }
    ]
  },
  {
    id: "daily-life",
    title: "Daily Life",
    minutes: 18,
    stage: "Lesson 7",
    summary: "Routines, reflexive habits, frequency, and ordinary-day narration.",
    theory: [
      "Daily routine language makes grammar stick because the same verbs repeat: wake, wash, eat, go, work, study, sleep.",
      "Use time phrases to anchor sentences. A simple timeline is better than isolated vocabulary.",
      "Some actions use reflexive patterns, especially with washing, dressing, and taking care of yourself."
    ],
    phonetics: [
      "Practice vakna, vinna, læra, sofa. Keep the double consonant short and crisp.",
      "Say klæði mig as one controlled phrase."
    ],
    focus: ["routine", "time", "reflexives"],
    vocab: ["vakna", "vinna", "læra", "sofa", "borða", "klæði mig"],
    exercises: [
      { type: "choice", prompt: "Which verb means to sleep?", options: ["sofa", "vinna", "fara", "tala"], answer: "sofa" },
      { type: "type", prompt: "Translate: I am learning Icelandic.", answer: "Ég er að læra íslensku", hint: "Use er að + infinitive." },
      { type: "choice", prompt: "A daily timeline mostly practices which skill?", options: ["routine narration", "weather forecast", "subjunctive mood", "alphabet only"], answer: "routine narration" }
    ]
  },
  {
    id: "food",
    title: "Enjoy Your Meal",
    minutes: 20,
    stage: "Lesson 8",
    summary: "Food, invitations, polite hosting, quantities, and preferences.",
    theory: [
      "Food lessons combine requests with social language: offering, accepting, declining, thanking, and describing taste.",
      "Quantity words often expose case and agreement. Learn them in real phrases rather than as lonely grammar.",
      "Traditional food vocabulary is culturally rich, but start with everyday meals before adding special dishes."
    ],
    phonetics: [
      "Practice verði þér að góðu slowly. It is a phrase worth memorizing whole.",
      "Say brauð, smjör, fiskur, kjöt with careful vowel contrast."
    ],
    focus: ["food", "offers", "quantity"],
    vocab: ["matur", "brauð", "fiskur", "kjöt", "smjör", "verði þér að góðu"],
    exercises: [
      { type: "choice", prompt: "Which phrase is used like enjoy your meal?", options: ["Verði þér að góðu", "Hvaðan ert þú", "Ég heiti", "Eftir hádegi"], answer: "Verði þér að góðu" },
      { type: "type", prompt: "Type the Icelandic word for fish.", answer: "fiskur", hint: "Starts with f." },
      { type: "choice", prompt: "Which word means meat?", options: ["kjöt", "brauð", "smjör", "vatn"], answer: "kjöt" }
    ]
  },
  {
    id: "family",
    title: "The Family",
    minutes: 18,
    stage: "Lesson 9",
    summary: "Kinship, possession, names, and talking about people.",
    theory: [
      "Family vocabulary is a strong gateway to genitive and possessive ideas: my mother, his brother, their children.",
      "Icelandic names often use patronymic or matronymic patterns, so last names work differently from many English-speaking contexts.",
      "When describing people, recycle adjective agreement from clothing and daily-life sentences."
    ],
    phonetics: [
      "Practice fjölskylda, móðir, faðir, systir, bróðir. Keep ð soft.",
      "Say -son and -dóttir endings clearly; they carry meaning."
    ],
    focus: ["family", "possession", "names"],
    vocab: ["fjölskylda", "móðir", "faðir", "systir", "bróðir", "barn"],
    exercises: [
      { type: "choice", prompt: "Which word means family?", options: ["fjölskylda", "veður", "gisting", "höfuð"], answer: "fjölskylda" },
      { type: "choice", prompt: "Which ending often means daughter of?", options: ["-dóttir", "-son", "-ur", "-lega"], answer: "-dóttir" },
      { type: "type", prompt: "Type the Icelandic word for child.", answer: "barn", hint: "Neuter noun." }
    ]
  },
  {
    id: "appointments",
    title: "Appointments",
    minutes: 17,
    stage: "Lesson 10",
    summary: "Dates, arrangements, phone language, and future plans.",
    theory: [
      "Appointments require precision: who, when, where, and whether the time still works.",
      "Use ætla for planned future action: I am going to meet, call, go, or check.",
      "Phone Icelandic rewards fixed phrases. Learn a few chunks and reuse them."
    ],
    phonetics: [
      "Practice augnablik, sími, hringja. Keep the ng sound nasal.",
      "Say ég ætla að hitta as a compact plan phrase."
    ],
    focus: ["future", "dates", "phone"],
    vocab: ["sími", "hringja", "augnablik", "hitta", "á morgun", "í kvöld"],
    exercises: [
      { type: "choice", prompt: "What does á morgun mean?", options: ["tomorrow", "tonight", "yesterday", "now"], answer: "tomorrow" },
      { type: "type", prompt: "Translate: I am going to meet Anna.", answer: "Ég ætla að hitta Anna", hint: "Use ætla að hitta." },
      { type: "choice", prompt: "Which word is connected to telephone calls?", options: ["hringja", "borða", "snjóar", "klæði"], answer: "hringja" }
    ]
  },
  {
    id: "lodging",
    title: "Accommodation",
    minutes: 19,
    stage: "Lesson 11",
    summary: "Hotels, rooms, requests, before/after, and practical problem solving.",
    theory: [
      "Accommodation language combines booking, checking in, asking for facilities, and reporting small problems.",
      "Before and after phrases help you narrate travel days: before Christmas, after noon, five minutes late.",
      "Room vocabulary is useful because it mixes neuter nouns, definite articles, and prepositional phrases."
    ],
    phonetics: [
      "Practice gisting, herbergi, lykill, sturta. Keep the ll in lykill light.",
      "Say fyrir and eftir in contrast."
    ],
    focus: ["lodging", "before-after", "requests"],
    vocab: ["gisting", "herbergi", "lykill", "sturta", "fyrir", "eftir"],
    exercises: [
      { type: "choice", prompt: "Which word means room?", options: ["herbergi", "fjölskylda", "vindur", "höfn"], answer: "herbergi" },
      { type: "choice", prompt: "Which word means after?", options: ["eftir", "fyrir", "hvar", "milli"], answer: "eftir" },
      { type: "type", prompt: "Type the Icelandic word for key.", answer: "lykill", hint: "Starts with ly." }
    ]
  },
  {
    id: "spare-time",
    title: "Spare Time",
    minutes: 18,
    stage: "Lesson 12",
    summary: "Hobbies, comparisons, adverbs, likes, and cultural plans.",
    theory: [
      "Spare-time language helps you talk as yourself: music, sport, theatre, reading, walking, and what you enjoy.",
      "Comparatives let you compare people, places, and things: bigger, smaller, older, better.",
      "Adverbs intensify opinions, but use them carefully. A small set will take you far."
    ],
    phonetics: [
      "Practice tónlist, gönguferð, sund, leikhús.",
      "Say betri and stærri with a clear r."
    ],
    focus: ["hobbies", "comparison", "adverbs"],
    vocab: ["tónlist", "sund", "leikhús", "gönguferð", "betri", "stærri"],
    exercises: [
      { type: "choice", prompt: "Which word means swimming?", options: ["sund", "tónlist", "leikhús", "gisting"], answer: "sund" },
      { type: "choice", prompt: "Which word means better?", options: ["betri", "stærri", "gamall", "hátt"], answer: "betri" },
      { type: "type", prompt: "Type the Icelandic word for music.", answer: "tónlist", hint: "Has an accented o." }
    ]
  },
  {
    id: "iceland",
    title: "Iceland",
    minutes: 20,
    stage: "Lesson 13",
    summary: "Landscape, weather, passive expressions, directions, and national context.",
    theory: [
      "Weather and landscape vocabulary matter in Iceland because travel plans often depend on them.",
      "Directional words such as north, east, south, and west have several forms depending on motion, origin, or location.",
      "Passive-style expressions are useful for general statements: it is spoken, it is used, it is built."
    ],
    phonetics: [
      "Practice norður, austur, suður, vestur as a compass.",
      "Say veður, vindur, snjór, rigning. Keep ð and r distinct."
    ],
    focus: ["weather", "directions", "passive"],
    vocab: ["veður", "vindur", "snjór", "rigning", "norður", "suður", "vestur", "austur"],
    exercises: [
      { type: "choice", prompt: "Which word means weather?", options: ["veður", "vindur", "vatn", "verk"], answer: "veður" },
      { type: "choice", prompt: "Which compass word means north?", options: ["norður", "suður", "vestur", "austur"], answer: "norður" },
      { type: "type", prompt: "Type the Icelandic word for snow.", answer: "snjór", hint: "Starts with sn." }
    ]
  },
  {
    id: "history",
    title: "Story, History, and People",
    minutes: 19,
    stage: "Lesson 14",
    summary: "Past narration, cultural reading, people, institutions, and society.",
    theory: [
      "Historical reading introduces denser sentences. First identify names, dates, verbs, and connectors.",
      "Past narration asks you to track tense and subject together. Do not translate every word before finding the sentence spine.",
      "Cultural vocabulary often contains compounds. Split them into known parts whenever possible."
    ],
    phonetics: [
      "Practice saga, þjóð, Alþingi, land.",
      "Say compound words slowly, then as one word."
    ],
    focus: ["history", "past", "reading"],
    vocab: ["saga", "þjóð", "Alþingi", "land", "íbúar", "höfuðborg"],
    exercises: [
      { type: "choice", prompt: "Which word means story or history?", options: ["saga", "veður", "sími", "skór"], answer: "saga" },
      { type: "choice", prompt: "Which word means capital city?", options: ["höfuðborg", "flugvöllur", "herbergi", "matur"], answer: "höfuðborg" },
      { type: "type", prompt: "Type the Icelandic word for people/nation.", answer: "þjóð", hint: "Starts with thorn." }
    ]
  },
  {
    id: "health",
    title: "Head, Shoulders, Knees, and Toes",
    minutes: 18,
    stage: "Lesson 15",
    summary: "Body, health, symptoms, advice, and careful imperative forms.",
    theory: [
      "Body vocabulary becomes practical when paired with symptoms: my head hurts, I have a sore throat, I need help.",
      "Health conversations often use impersonal patterns. Learn the phrase first, then analyze the grammar.",
      "Imperatives are useful for advice and instructions, but politeness still matters."
    ],
    phonetics: [
      "Practice höfuð, herðar, hné, tær.",
      "Say hálsbólga and handleggur without rushing the consonants."
    ],
    focus: ["body", "health", "imperative"],
    vocab: ["höfuð", "háls", "hné", "tær", "sársauki", "hjálp"],
    exercises: [
      { type: "choice", prompt: "Which word means head?", options: ["höfuð", "hné", "háls", "höfn"], answer: "höfuð" },
      { type: "choice", prompt: "Which word means throat or neck?", options: ["háls", "höfuð", "tær", "hendur"], answer: "háls" },
      { type: "type", prompt: "Type the Icelandic word for help.", answer: "hjálp", hint: "You saw this early in the course." }
    ]
  },
  {
    id: "good-luck",
    title: "Good Luck",
    minutes: 20,
    stage: "Lesson 16",
    summary: "Subjunctive mood, wishes, conditions, and final integrated review.",
    theory: [
      "The subjunctive appears in wishes, uncertainty, reported speech, and hypothetical situations.",
      "Treat it as a meaning signal first: the speaker is not presenting the event as plain fact.",
      "Your final daily classes should mix reading, writing, listening aloud, and review from earlier lessons."
    ],
    phonetics: [
      "Practice gangi þér vel as a whole phrase.",
      "Read conditional sentences slowly and mark the verb before translating."
    ],
    focus: ["subjunctive", "conditions", "review"],
    vocab: ["gangi þér vel", "vona", "ef", "koma", "vera", "hafa"],
    exercises: [
      { type: "choice", prompt: "Which phrase means good luck?", options: ["Gangi þér vel", "Verði þér að góðu", "Góðan daginn", "Allt í lagi"], answer: "Gangi þér vel" },
      { type: "choice", prompt: "The subjunctive often signals...", options: ["wish or uncertainty", "only plural nouns", "only prices", "alphabet order"], answer: "wish or uncertainty" },
      { type: "type", prompt: "Type the Icelandic word for if.", answer: "ef", hint: "Two letters." }
    ]
  }
];

const vocabulary = [
  ["góðan dag", "good day / hello", "greetings"],
  ["takk", "thanks", "greetings"],
  ["fyrirgefðu", "excuse me", "greetings"],
  ["bless", "goodbye", "greetings"],
  ["já", "yes", "foundation"],
  ["nei", "no", "foundation"],
  ["ég", "I", "pronouns"],
  ["þú", "you", "pronouns"],
  ["hann", "he", "pronouns"],
  ["hún", "she", "pronouns"],
  ["það", "it / there", "pronouns"],
  ["við", "we", "pronouns"],
  ["ég heiti", "my name is", "greetings"],
  ["hvar", "where", "questions"],
  ["hvert", "where to", "questions"],
  ["hvaðan", "where from", "questions"],
  ["hver", "who", "questions"],
  ["hvað", "what", "questions"],
  ["hótel", "hotel", "travel"],
  ["rúta", "coach / bus", "travel"],
  ["strætó", "city bus", "travel"],
  ["flugvöllur", "airport", "travel"],
  ["hérna", "here", "travel"],
  ["þangað", "there / to there", "travel"],
  ["frá", "from", "origin"],
  ["Ísland", "Iceland", "origin"],
  ["Perú", "Peru", "origin"],
  ["útlendingur", "foreigner", "origin"],
  ["klukkan", "o'clock", "time"],
  ["í kvöld", "tonight", "time"],
  ["á morgun", "tomorrow", "time"],
  ["eftir hádegi", "in the afternoon", "time"],
  ["kaffi", "coffee", "shopping"],
  ["vatn", "water", "shopping"],
  ["peningar", "money", "shopping"],
  ["föt", "clothes", "clothing"],
  ["peysa", "sweater", "clothing"],
  ["buxur", "trousers", "clothing"],
  ["skór", "shoes", "clothing"],
  ["rauður", "red", "colors"],
  ["svartur", "black", "colors"],
  ["blár", "blue", "colors"],
  ["vakna", "wake up", "daily life"],
  ["vinna", "work", "daily life"],
  ["læra", "learn / study", "daily life"],
  ["sofa", "sleep", "daily life"],
  ["borða", "eat", "daily life"],
  ["matur", "food", "food"],
  ["brauð", "bread", "food"],
  ["fiskur", "fish", "food"],
  ["kjöt", "meat", "food"],
  ["smjör", "butter", "food"],
  ["fjölskylda", "family", "family"],
  ["móðir", "mother", "family"],
  ["faðir", "father", "family"],
  ["systir", "sister", "family"],
  ["bróðir", "brother", "family"],
  ["barn", "child", "family"],
  ["sími", "phone", "appointments"],
  ["hringja", "call / ring", "appointments"],
  ["hitta", "meet", "appointments"],
  ["gisting", "accommodation", "lodging"],
  ["herbergi", "room", "lodging"],
  ["lykill", "key", "lodging"],
  ["sturta", "shower", "lodging"],
  ["tónlist", "music", "spare time"],
  ["sund", "swimming", "spare time"],
  ["leikhús", "theatre", "spare time"],
  ["gönguferð", "walk / hiking trip", "spare time"],
  ["veður", "weather", "iceland"],
  ["vindur", "wind", "iceland"],
  ["snjór", "snow", "iceland"],
  ["rigning", "rain", "iceland"],
  ["norður", "north", "iceland"],
  ["suður", "south", "iceland"],
  ["vestur", "west", "iceland"],
  ["austur", "east", "iceland"],
  ["saga", "story / history", "history"],
  ["þjóð", "people / nation", "history"],
  ["höfuðborg", "capital city", "history"],
  ["höfuð", "head", "health"],
  ["háls", "neck / throat", "health"],
  ["hné", "knee", "health"],
  ["tær", "toes", "health"],
  ["hjálp", "help", "health"],
  ["ef", "if", "subjunctive"],
  ["vona", "hope", "subjunctive"],
  ["gangi þér vel", "good luck", "subjunctive"]
].map(([is, en, topic]) => ({ is, en, topic }));

const readings = [
  {
    id: "a0-cafe",
    level: "A0",
    topic: "greetings",
    title: "Á kaffihúsi",
    minutes: 3,
    text: [
      "Góðan daginn.",
      "Ég heiti Bruno.",
      "Ég er að læra íslensku.",
      "Ég fæ kaffi og vatn.",
      "Takk fyrir."
    ],
    translation: "Good day. My name is Bruno. I am learning Icelandic. I get coffee and water. Thank you.",
    hints: ["fæ: I get / receive", "kaffi: coffee", "vatn: water"],
    checks: [
      { prompt: "Where is Bruno probably speaking?", options: ["in a cafe", "at a hospital", "on a mountain"], answer: "in a cafe" },
      { prompt: "What is Bruno learning?", options: ["Icelandic", "English", "music"], answer: "Icelandic" }
    ]
  },
  {
    id: "a0-hotel",
    level: "A0",
    topic: "travel",
    title: "Hótelið",
    minutes: 3,
    text: [
      "Hótelið er í Reykjavík.",
      "Rútan stoppar hérna.",
      "Ég fer inn.",
      "Herbergið er lítið.",
      "Lykillinn er á borðinu."
    ],
    translation: "The hotel is in Reykjavík. The coach stops here. I go inside. The room is small. The key is on the table.",
    hints: ["hérna: here", "lítið: small", "lykillinn: the key"],
    checks: [
      { prompt: "Where is the hotel?", options: ["in Reykjavík", "in Peru", "in Akureyri"], answer: "in Reykjavík" },
      { prompt: "Where is the key?", options: ["on the table", "in the bus", "outside"], answer: "on the table" }
    ]
  },
  {
    id: "a1-morning",
    level: "A1",
    topic: "daily life",
    title: "Morgunn",
    minutes: 5,
    text: [
      "Ég vakna klukkan sjö.",
      "Ég borða brauð og drekk kaffi.",
      "Svo fer ég í vinnu.",
      "Í hádeginu læri ég tíu ný orð.",
      "Um kvöldið les ég stuttan texta."
    ],
    translation: "I wake up at seven. I eat bread and drink coffee. Then I go to work. At noon I learn ten new words. In the evening I read a short text.",
    hints: ["vakna: wake up", "svo: then", "stuttan texta: a short text"],
    checks: [
      { prompt: "When does the person wake up?", options: ["at seven", "at noon", "in the evening"], answer: "at seven" },
      { prompt: "What happens at noon?", options: ["ten new words are studied", "the person sleeps", "the person takes a bus"], answer: "ten new words are studied" }
    ]
  },
  {
    id: "a1-weather",
    level: "A1",
    topic: "iceland",
    title: "Veðrið í dag",
    minutes: 5,
    text: [
      "Í dag er kalt í Reykjavík.",
      "Það er vindur og smá rigning.",
      "Ég fer ekki langt.",
      "Ég tek jakka og geng í búðina.",
      "Heima drekk ég te og hlusta á tónlist."
    ],
    translation: "Today it is cold in Reykjavík. There is wind and a little rain. I do not go far. I take a jacket and walk to the shop. At home I drink tea and listen to music.",
    hints: ["smá: a little", "geng: I walk", "búðina: the shop"],
    checks: [
      { prompt: "What is the weather like?", options: ["cold, windy, and rainy", "hot and sunny", "snowy only"], answer: "cold, windy, and rainy" },
      { prompt: "What does the person take?", options: ["a jacket", "a bicycle", "a book"], answer: "a jacket" }
    ]
  },
  {
    id: "a1-family",
    level: "A1",
    topic: "family",
    title: "Fjölskyldan mín",
    minutes: 6,
    text: [
      "Fjölskyldan mín er lítil.",
      "Móðir mín heitir Ana og faðir minn heitir Luis.",
      "Ég á eina systur.",
      "Hún talar spænsku og ensku.",
      "Við lærum stundum íslensku saman."
    ],
    translation: "My family is small. My mother is called Ana and my father is called Luis. I have one sister. She speaks Spanish and English. We sometimes learn Icelandic together.",
    hints: ["mín/minn: my", "eina systur: one sister", "saman: together"],
    checks: [
      { prompt: "How many sisters are mentioned?", options: ["one", "two", "none"], answer: "one" },
      { prompt: "What do they sometimes do together?", options: ["learn Icelandic", "eat fish", "go north"], answer: "learn Icelandic" }
    ]
  },
  {
    id: "a2-trip",
    level: "A2",
    topic: "travel",
    title: "Ferð til Akureyrar",
    minutes: 8,
    text: [
      "Á föstudaginn fer ég til Akureyrar með vini mínum.",
      "Við tökum rútu snemma um morguninn.",
      "Á leiðinni sjáum við fjöll, sjó og lítil hús.",
      "Veðrið er betra en í gær, en það er enn kalt.",
      "Þegar við komum, ætlum við að finna kaffihús og lesa kortið."
    ],
    translation: "On Friday I go to Akureyri with my friend. We take a coach early in the morning. On the way we see mountains, sea, and small houses. The weather is better than yesterday, but it is still cold. When we arrive, we plan to find a cafe and read the map.",
    hints: ["með vini mínum: with my friend", "á leiðinni: on the way", "betra en í gær: better than yesterday"],
    checks: [
      { prompt: "How do they travel?", options: ["by coach", "by plane", "by boat"], answer: "by coach" },
      { prompt: "What will they do after arriving?", options: ["find a cafe and read the map", "sleep immediately", "buy clothes"], answer: "find a cafe and read the map" }
    ]
  },
  {
    id: "a2-food",
    level: "A2",
    topic: "food",
    title: "Kvöldmatur",
    minutes: 8,
    text: [
      "Í kvöld býður Jón vinum sínum í mat.",
      "Hann eldar fisk með kartöflum og smjöri.",
      "Gestirnir koma klukkan sjö og allir setjast við borðið.",
      "Ein vinkona hans borðar ekki kjöt, en fiskurinn er í lagi.",
      "Eftir matinn drekka þau kaffi og tala um helgina."
    ],
    translation: "Tonight Jon invites his friends for a meal. He cooks fish with potatoes and butter. The guests arrive at seven and everyone sits at the table. One of his female friends does not eat meat, but the fish is fine. After the meal they drink coffee and talk about the weekend.",
    hints: ["býður: invites / offers", "gestirnir: the guests", "helgina: the weekend"],
    checks: [
      { prompt: "What does Jon cook?", options: ["fish with potatoes and butter", "bread and soup", "lamb only"], answer: "fish with potatoes and butter" },
      { prompt: "What do they discuss after dinner?", options: ["the weekend", "the airport", "the weather forecast only"], answer: "the weekend" }
    ]
  },
  {
    id: "b1-history",
    level: "A2-B1",
    topic: "history",
    title: "Stutt saga um Reykjavík",
    minutes: 10,
    text: [
      "Reykjavík er höfuðborg Íslands og stærsta borg landsins.",
      "Þótt borgin sé ekki mjög stór, eru þar margar mikilvægar stofnanir.",
      "Í miðbænum má sjá gömul hús, nýjar byggingar, kaffihús og höfnina.",
      "Margir ferðamenn ganga um borgina á sumrin, en íbúar nota hana líka sem daglegt heimili.",
      "Þegar maður les um Reykjavík, sér maður bæði sögu og nútímalíf."
    ],
    translation: "Reykjavík is the capital of Iceland and the country's largest city. Although the city is not very large, many important institutions are there. In the city center one can see old houses, new buildings, cafes, and the harbor. Many tourists walk around the city in summer, but residents also use it as a daily home. When one reads about Reykjavík, one sees both history and modern life.",
    hints: ["þótt: although", "stofnanir: institutions", "bæði ... og: both ... and"],
    checks: [
      { prompt: "What contrast does the text make about Reykjavík?", options: ["not very large, but important", "very hot, but empty", "old only, not modern"], answer: "not very large, but important" },
      { prompt: "What can be seen in the city center?", options: ["old houses, new buildings, cafes, and the harbor", "only mountains", "only a university"], answer: "old houses, new buildings, cafes, and the harbor" }
    ]
  },
  {
    id: "a0-airport",
    level: "A0",
    topic: "travel",
    title: "Á flugvellinum",
    minutes: 3,
    text: [
      "Flugvélin lendir klukkan tíu.",
      "Ég tek töskuna mína.",
      "Rútan bíður fyrir utan.",
      "Ég fer til Reykjavíkur.",
      "Ferðin er stutt."
    ],
    translation: "The plane lands at ten o'clock. I take my suitcase. The coach waits outside. I go to Reykjavík. The trip is short.",
    hints: ["lendir: lands", "töskuna: the suitcase", "bíður: waits"],
    checks: [
      { prompt: "What time does the plane land?", options: ["ten o'clock", "two o'clock", "midnight"], answer: "ten o'clock" },
      { prompt: "Where does the coach wait?", options: ["outside", "at the hotel", "in Akureyri"], answer: "outside" }
    ]
  },
  {
    id: "a0-gift",
    level: "A0",
    topic: "shopping",
    title: "Gjöf til vinar",
    minutes: 3,
    text: [
      "Á morgun á vinur minn afmæli.",
      "Ég fer í búð og skoða bækur.",
      "Ég vel litla, fallega bók.",
      "Búðin pakkar bókinni inn.",
      "Vinur minn verður glaður."
    ],
    translation: "Tomorrow my friend has a birthday. I go to a shop and look at books. I choose a small, beautiful book. The shop wraps the book. My friend will be happy.",
    hints: ["afmæli: birthday", "vel: I choose", "pakkar inn: wraps up"],
    checks: [
      { prompt: "What does the speaker choose?", options: ["a small, beautiful book", "a shirt", "flowers"], answer: "a small, beautiful book" },
      { prompt: "What does the shop do with the book?", options: ["wraps it", "reads it", "sells it back"], answer: "wraps it" }
    ]
  },
  {
    id: "a1-tourists",
    level: "A1",
    topic: "travel",
    title: "Ferðamenn í Reykjavík",
    minutes: 5,
    text: [
      "Margir ferðamenn koma til Reykjavíkur á sumrin.",
      "Þeir ganga um miðbæinn og taka myndir.",
      "Sumir fara í sund, aðrir fara í hvalaskoðun.",
      "Á kvöldin borða þeir á litlum veitingastöðum.",
      "Flestir segja að Reykjavík sé lítil en skemmtileg borg."
    ],
    translation: "Many tourists come to Reykjavík in the summer. They walk around downtown and take pictures. Some go swimming, others go whale watching. In the evenings they eat at small restaurants. Most say that Reykjavík is a small but fun city.",
    hints: ["ferðamenn: tourists", "hvalaskoðun: whale watching", "flestir: most (people)"],
    checks: [
      { prompt: "What do some tourists do besides swimming?", options: ["go whale watching", "go skiing", "go fishing alone"], answer: "go whale watching" },
      { prompt: "What do most tourists say about Reykjavík?", options: ["small but fun", "too big", "too cold to enjoy"], answer: "small but fun" }
    ]
  },
  {
    id: "a1-birthday",
    level: "A1",
    topic: "shopping",
    title: "Að kaupa afmælisgjöf",
    minutes: 5,
    text: [
      "Í dag ætla ég að kaupa gjöf handa systur minni.",
      "Hún á afmæli á föstudaginn og verður tuttugu og fimm ára.",
      "Ég fer í nokkrar búðir en finn ekkert sem mér líkar.",
      "Loksins sé ég fallegan trefil í litlum búðum í miðbænum.",
      "Ég held að hún verði mjög ánægð með trefilinn."
    ],
    translation: "Today I am going to buy a gift for my sister. She has a birthday on Friday and will turn twenty-five. I go to several shops but find nothing I like. Finally I see a beautiful scarf in a small shop downtown. I think she will be very pleased with the scarf.",
    hints: ["handa: for (someone)", "trefil: scarf", "held að: I think that"],
    checks: [
      { prompt: "How old is the sister turning?", options: ["twenty-five", "thirty", "eighteen"], answer: "twenty-five" },
      { prompt: "What does the speaker finally buy?", options: ["a scarf", "a book", "shoes"], answer: "a scarf" }
    ]
  },
  {
    id: "a2-interview",
    level: "A2",
    topic: "work",
    title: "Í atvinnuviðtali",
    minutes: 8,
    text: [
      "Anna mætir í atvinnuviðtal hjá litlu fyrirtæki í miðbænum.",
      "Hún er svolítið stressuð en reynir að anda rólega.",
      "Stjórnandinn spyr hana um fyrri reynslu og styrkleika.",
      "Anna segir að hún hafi unnið á kaffihúsi í þrjú ár.",
      "Í lok viðtalsins þakkar hún fyrir tímann og fer brosandi út."
    ],
    translation: "Anna attends a job interview at a small company downtown. She is a little stressed but tries to breathe calmly. The manager asks her about previous experience and strengths. Anna says that she has worked at a café for three years. At the end of the interview she thanks them for their time and leaves smiling.",
    hints: ["atvinnuviðtal: job interview", "styrkleika: strengths", "anda rólega: to breathe calmly"],
    checks: [
      { prompt: "How does Anna feel before the interview?", options: ["a little stressed", "very confident", "angry"], answer: "a little stressed" },
      { prompt: "Where has Anna worked for three years?", options: ["at a café", "at a hospital", "at a bank"], answer: "at a café" }
    ]
  },
  {
    id: "a2-camping",
    level: "A2",
    topic: "nature",
    title: "Að fara í útilegu",
    minutes: 8,
    text: [
      "Um helgina fara Jón og vinir hans í útilegu á Suðurlandi.",
      "Þeir setja upp tjöld nálægt lítilli á og kveikja varðeld.",
      "Um nóttina er himinninn skýr og þau sjá ótal stjörnur.",
      "Morguninn eftir vakna þau við hljóð úr fuglum og vindi.",
      "Jón segir að náttúran róisér hann meira en nokkuð annað."
    ],
    translation: "Over the weekend Jón and his friends go camping in the South. They set up tents near a small river and light a campfire. During the night the sky is clear and they see countless stars. The next morning they wake up to the sound of birds and wind. Jón says that nature calms him more than anything else.",
    hints: ["útilegu: camping trip", "varðeld: campfire", "ótal: countless"],
    checks: [
      { prompt: "Where do they set up their tents?", options: ["near a small river", "on a mountain top", "next to the ocean"], answer: "near a small river" },
      { prompt: "What wakes them up the next morning?", options: ["birds and wind", "an alarm clock", "rain"], answer: "birds and wind" }
    ]
  },
  {
    id: "a2-whale",
    level: "A2",
    topic: "nature",
    title: "Ég sé hval!",
    minutes: 8,
    text: [
      "Björg fer í hvalaskoðunarferð frá höfninni í Reykjavík.",
      "Báturinn siglir langt út á haf í köldum en björtum morgni.",
      "Eftir klukkutíma bendir leiðsögumaðurinn skyndilega í átt að öldunum.",
      "„Þarna, sjáið! Hnúfubakur!“ hrópar hann spenntur.",
      "Björg tekur upp myndavélina, en er of hissa til að ýta á takkann."
    ],
    translation: "Björg goes on a whale-watching trip from the harbor in Reykjavík. The boat sails far out to sea on a cold but bright morning. After an hour the guide suddenly points toward the waves. 'There, look! A humpback whale!' he shouts excitedly. Björg picks up her camera, but is too surprised to press the button.",
    hints: ["hvalaskoðunarferð: whale-watching trip", "leiðsögumaðurinn: the guide", "hnúfubakur: humpback whale"],
    checks: [
      { prompt: "What kind of whale do they see?", options: ["a humpback whale", "a killer whale", "a blue whale"], answer: "a humpback whale" },
      { prompt: "Why doesn't Björg take a photo right away?", options: ["she is too surprised", "her camera is broken", "the whale is too far away"], answer: "she is too surprised" }
    ]
  },
  {
    id: "a2b1-phone",
    level: "A2-B1",
    topic: "problems",
    title: "Hvar er farsíminn minn?",
    minutes: 8,
    text: [
      "Óli leitar að farsímanum sínum um alla íbúðina.",
      "Hann man að hann átti hann þegar hann kom heim úr vinnunni.",
      "Eftir smá leit finnur hann símann undir sófapúðanum.",
      "Því miður er skjárinn sprunginn eftir að hafa dottið á gólfið.",
      "Óli andvarpar og ákveður að fara með hann í viðgerð daginn eftir."
    ],
    translation: "Óli searches for his cell phone all over the apartment. He remembers that he had it when he came home from work. After a short search he finds the phone under the sofa cushion. Unfortunately the screen is cracked after falling on the floor. Óli sighs and decides to take it in for repair the next day.",
    hints: ["leitar að: searches for", "sprunginn: cracked", "andvarpar: sighs"],
    checks: [
      { prompt: "Where does Óli find his phone?", options: ["under the sofa cushion", "in his coat pocket", "in the kitchen"], answer: "under the sofa cushion" },
      { prompt: "What is wrong with the phone?", options: ["the screen is cracked", "the battery is dead", "it is missing"], answer: "the screen is cracked" }
    ]
  },
  {
    id: "b1-goodbye",
    level: "A2-B1",
    topic: "farewells",
    title: "Kveðjustund",
    minutes: 10,
    text: [
      "Eftir eitt ár í Reykjavík er komið að því að Mark fljúgi heim.",
      "Vinir hans skipuleggja litla kveðjuveislu kvöldið áður.",
      "Þau rifja upp skemmtileg atvik og hlæja að gömlum myndum.",
      "Mark segir að hann muni sakna íslenska veðursins, sem kemur öllum á óvart.",
      "Þegar hann kveður á flugvellinum lofar hann að koma aftur fljótlega."
    ],
    translation: "After one year in Reykjavík, the time has come for Mark to fly home. His friends organize a small farewell party the evening before. They reminisce about funny incidents and laugh at old photos. Mark says that he will miss the Icelandic weather, which surprises everyone. When he says goodbye at the airport, he promises to come back soon.",
    hints: ["kveðjuveislu: farewell party", "rifja upp: to reminisce, look back on", "kemur á óvart: comes as a surprise"],
    checks: [
      { prompt: "What surprises Mark's friends?", options: ["that he will miss the weather", "that he is leaving early", "that he forgot his passport"], answer: "that he will miss the weather" },
      { prompt: "What does Mark promise at the airport?", options: ["to come back soon", "to write every week", "to move back permanently"], answer: "to come back soon" }
    ]
  }
];

const grammarTopics = [
  {
    id: "gender-articles",
    level: "A0",
    category: "Nouns",
    title: "Gender and the Definite Article",
    summary: "Masculine, feminine, neuter, and the suffixed article that replaces 'the'.",
    theory: [
      "Icelandic nouns have three grammatical genders: masculine, feminine, and neuter. Gender affects a noun's ending, its definite article, and which forms of adjectives and pronouns agree with it.",
      "There is no separate word for 'the'. Instead, a suffix attaches to the end of the noun, and that suffix carries gender and case information on its own.",
      "Gender is not always predictable from meaning, so it is more efficient to learn each noun together with its gender and definite form rather than deriving it from a rule every time."
    ],
    tables: [
      {
        title: "Definite article by gender (nominative singular)",
        headers: ["Gender", "Indefinite", "Definite", "Meaning"],
        rows: [
          ["Masculine", "dagur", "dagurinn", "day / the day"],
          ["Feminine", "taska", "taskan", "bag / the bag"],
          ["Neuter", "borð", "borðið", "table / the table"]
        ]
      }
    ],
    examples: [
      { is: "Hótelið er stórt.", en: "The hotel is big." },
      { is: "Taskan er þung.", en: "The bag is heavy." }
    ],
    exercises: [
      { type: "choice", prompt: "Which ending is typical for many masculine nouns?", options: ["-ur", "-a", "no ending", "-ið"], answer: "-ur" },
      { type: "choice", prompt: "What is the definite form of taska (bag)?", options: ["taskan", "taskaið", "taskurinn", "taskar"], answer: "taskan" },
      { type: "type", prompt: "Add the definite article to borð (table).", answer: "borðið", hint: "Neuter nouns often take -ið." }
    ]
  },
  {
    id: "cases-overview",
    level: "A1",
    category: "Cases",
    title: "What Are Cases? The Nominative",
    summary: "The case system at a glance, and how the nominative marks the subject.",
    theory: [
      "Icelandic has four grammatical cases: nominative, accusative, dative, and genitive. The case of a noun shows the role it plays in the sentence, not just its position in the word order.",
      "The nominative marks the subject, the one doing the action, and is also the citation form: the form a noun is listed under in a dictionary.",
      "The other three cases each get their own topic in this section (Accusative, Dative, and Genitive). Verbs and prepositions each expect a specific case from the noun that follows them, so it helps to learn short phrases as whole units instead of translating word by word."
    ],
    tables: [
      {
        title: "Case function summary",
        headers: ["Case", "Typical role", "Example"],
        rows: [
          ["Nominative", "subject", "Hundurinn sefur. (The dog sleeps.)"],
          ["Accusative", "direct object", "Ég sé hundinn. (I see the dog.)"],
          ["Dative", "indirect object / after some prepositions", "Ég gef hundinum kjöt. (I give the dog meat.)"],
          ["Genitive", "possession", "Nafn hundsins er Leo. (The dog's name is Leo.)"]
        ]
      }
    ],
    examples: [
      { is: "Hundurinn er svangur.", en: "The dog is hungry. (nominative subject)" },
      { is: "Hótelið er stórt.", en: "The hotel is big. (nominative subject)" }
    ],
    exercises: [
      { type: "choice", prompt: "Which case usually marks the subject of a sentence?", options: ["nominative", "accusative", "dative", "genitive"], answer: "nominative" },
      { type: "choice", prompt: "Which case typically shows possession?", options: ["genitive", "nominative", "accusative", "dative"], answer: "genitive" },
      { type: "choice", prompt: "Which case doubles as a noun's dictionary form?", options: ["nominative", "accusative", "dative", "genitive"], answer: "nominative" }
    ]
  },
  {
    id: "noun-classes",
    level: "A1",
    category: "Nouns",
    title: "Weak and Strong Nouns",
    summary: "Two declension patterns, and a shortcut for how each one behaves.",
    theory: [
      "Icelandic nouns fall into two declension types: strong and weak. The split is not about meaning, but about which endings a noun takes as its case changes.",
      "Weak nouns are the more predictable group. Weak masculine nouns end in -i and take -a in every oblique case (accusative, dative, and genitive). Weak feminine nouns end in -a and take -u in every oblique case. Weak neuter nouns end in -a and do not change at all across the singular.",
      "Strong nouns show more variety and are worth learning noun by noun, but one shortcut applies across every gender: a neuter noun's accusative always matches its nominative, in both singular and plural."
    ],
    tables: [
      {
        title: "Singular case endings by noun type (example words)",
        headers: ["Type", "Nominative", "Accusative", "Dative", "Genitive"],
        rows: [
          ["Strong masculine (hestur, horse)", "hestur", "hest", "hesti", "hests"],
          ["Weak masculine (tími, time)", "tími", "tíma", "tíma", "tíma"],
          ["Strong feminine (borg, city)", "borg", "borg", "borg", "borgar"],
          ["Weak feminine (saga, story)", "saga", "sögu", "sögu", "sögu"],
          ["Strong neuter (barn, child)", "barn", "barn", "barni", "barns"],
          ["Weak neuter (auga, eye)", "auga", "auga", "auga", "auga"]
        ]
      }
    ],
    examples: [
      { is: "Þetta er falleg borg.", en: "This is a beautiful city. (strong feminine)" },
      { is: "Sagan er löng.", en: "The story is long. (weak feminine)" }
    ],
    exercises: [
      { type: "choice", prompt: "Which single ending covers accusative, dative, AND genitive for tími (weak masculine)?", options: ["-a", "-i", "-ar", "-ans"], answer: "-a" },
      { type: "choice", prompt: "Which noun type never changes at all across the singular cases?", options: ["weak neuter", "strong masculine", "weak feminine", "strong feminine"], answer: "weak neuter" },
      { type: "type", prompt: "Give the genitive singular of borg (city, strong feminine).", answer: "borgar" }
    ]
  },
  {
    id: "accusative-case",
    level: "A1",
    category: "Cases",
    title: "The Accusative Case",
    summary: "Marking the direct object, in nouns, pronouns, and adjectives.",
    theory: [
      "The accusative usually marks the direct object: the person or thing directly affected by the verb's action.",
      "For most nouns, the accusative singular looks identical to the nominative. The main exception is strong masculine nouns, which typically drop their nominative ending (hestur becomes hest).",
      "Personal pronouns change more noticeably in the accusative: ég becomes mig, þú becomes þig, and hún becomes hana. Adjectives describing an accusative noun shift too, most visibly in the masculine (góður becomes góðan)."
    ],
    tables: [
      {
        title: "Accusative singular by noun type",
        headers: ["Type", "Nominative", "Accusative"],
        rows: [
          ["Strong masculine", "hestur", "hest"],
          ["Weak masculine", "tími", "tíma"],
          ["Strong feminine", "borg", "borg"],
          ["Weak feminine", "saga", "sögu"],
          ["Strong neuter", "barn", "barn"],
          ["Weak neuter", "auga", "auga"]
        ]
      }
    ],
    examples: [
      { is: "Ég sé hestinn.", en: "I see the horse. (accusative, definite)" },
      { is: "Hann elskar hana.", en: "He loves her. (accusative pronoun)" }
    ],
    exercises: [
      { type: "choice", prompt: "What is the accusative of hestur (horse)?", options: ["hest", "hestur", "hesti", "hests"], answer: "hest" },
      { type: "choice", prompt: "Which pronoun is the accusative of hún (she)?", options: ["hana", "hún", "hennar", "henni"], answer: "hana" },
      { type: "type", prompt: "Translate: I see the horse. Use the definite accusative of hestur.", answer: "Ég sé hestinn" }
    ]
  },
  {
    id: "demonstratives",
    level: "A1",
    category: "Pronouns",
    title: "Demonstrative Pronouns: þessi and þetta",
    summary: "One default pointing word, and one that agrees with the noun.",
    theory: [
      "Icelandic has two ways to point at something: þetta, used broadly without needing to match the noun's gender, and þessi, which agrees with the noun it modifies.",
      "In simple identification sentences, þetta is the default choice regardless of gender: Þetta er bíll (This is a car), Þetta er kona (This is a woman), Þetta er hús (This is a house).",
      "When the word modifies a noun directly, it agrees in gender: þessi bíll (masculine), þessi kona (feminine), but þetta hús (neuter uses þetta even when modifying a noun)."
    ],
    tables: [
      {
        title: "þessi / þetta by gender, nominative singular",
        headers: ["Gender", "Form", "Example"],
        rows: [
          ["Masculine", "þessi", "þessi bíll (this car)"],
          ["Feminine", "þessi", "þessi kona (this woman)"],
          ["Neuter", "þetta", "þetta hús (this house)"]
        ]
      }
    ],
    examples: [
      { is: "Þetta er kaffi.", en: "This is coffee. (general identification)" },
      { is: "Þessi kona er kennari.", en: "This woman is a teacher. (agreement)" }
    ],
    exercises: [
      { type: "choice", prompt: "Which form agrees with a neuter noun like hús (house)?", options: ["þetta", "þessi", "þessar", "þessum"], answer: "þetta" },
      { type: "choice", prompt: "In a general identification sentence like 'This is a car,' which word is the default choice?", options: ["þetta", "þessi", "þessar", "það"], answer: "þetta" },
      { type: "type", prompt: "Translate: This woman is a teacher.", answer: "Þessi kona er kennari" }
    ]
  },
  {
    id: "imperative",
    level: "A1",
    category: "Verbs",
    title: "Imperative Mood",
    summary: "Giving commands, and how to say 'Let's...'.",
    theory: [
      "The imperative gives commands or instructions. For most verbs, it is built from the þú-form of the present tense by dropping the ending and attaching -ðu (or -du after certain consonants), folding the pronoun into the verb.",
      "Tala (to speak) gives Talaðu! (Speak!); Fara (to go) gives Farðu! (Go!); Koma (to come) gives Komdu! (Come!). These forms are extremely common in everyday spoken Icelandic.",
      "To suggest a joint action ('Let's...'), use Við skulum plus the infinitive: Við skulum fara (Let's go)."
    ],
    examples: [
      { is: "Komdu hingað!", en: "Come here!" },
      { is: "Við skulum byrja.", en: "Let's begin." }
    ],
    exercises: [
      { type: "choice", prompt: "What does Talaðu! mean?", options: ["Speak!", "I speak.", "You speak?", "Speaking"], answer: "Speak!" },
      { type: "choice", prompt: "How do you say 'Let's go'?", options: ["Við skulum fara", "Ég fer", "Þú ferð", "Hann fer"], answer: "Við skulum fara" },
      { type: "type", prompt: "Give the imperative (command) form of koma (to come).", answer: "Komdu", hint: "Attach -du to the verb, folding in the pronoun." }
    ]
  },
  {
    id: "dative-case",
    level: "A2",
    category: "Cases",
    title: "The Dative Case",
    summary: "Marking the indirect object, and the case some prepositions demand.",
    theory: [
      "The dative often marks an indirect object, the receiver of something, and is required after several common prepositions, including með (with) and frá (from).",
      "Weak nouns keep the same oblique ending they use in the accusative and genitive, so once you know a weak noun's accusative you largely already know its dative. Strong nouns are more individual, but strong neuter nouns typically add -i.",
      "Personal pronouns shift again in the dative: mér (to/for me), þér (to/for you), henni (to/for her)."
    ],
    tables: [
      {
        title: "Dative singular by noun type",
        headers: ["Type", "Nominative", "Dative"],
        rows: [
          ["Strong masculine", "hestur", "hesti"],
          ["Weak masculine", "tími", "tíma"],
          ["Strong feminine", "borg", "borg"],
          ["Weak feminine", "saga", "sögu"],
          ["Strong neuter", "barn", "barni"],
          ["Weak neuter", "auga", "auga"]
        ]
      }
    ],
    examples: [
      { is: "Ég gef henni bók.", en: "I give her a book. (dative pronoun)" },
      { is: "Hann er með hestinum.", en: "He is with the horse. (með + dative)" }
    ],
    exercises: [
      { type: "choice", prompt: "What is the dative of barn (child, strong neuter)?", options: ["barni", "barn", "barns", "börnum"], answer: "barni" },
      { type: "choice", prompt: "Which pronoun means 'to/for her'?", options: ["henni", "hana", "hún", "hennar"], answer: "henni" },
      { type: "type", prompt: "Translate: I give her a book.", answer: "Ég gef henni bók" }
    ]
  },
  {
    id: "reflexives",
    level: "A2",
    category: "Pronouns",
    title: "Reflexive Pronouns",
    summary: "sig, sér, sín: acting on oneself, only marked in the third person.",
    theory: [
      "Icelandic marks reflexivity, doing something to or for oneself, only in the third person, with a special set of forms: sig (accusative), sér (dative), and sín (genitive). First and second person simply reuse the ordinary object pronouns, since 'I bought myself coffee' is not ambiguous about who 'myself' is.",
      "The contrast matters because Icelandic distinguishes acting on oneself from acting on someone else, using different pronouns for each: Hann keypti sér kaffi (He bought himself coffee) versus Hann keypti honum kaffi (He bought him, someone else, coffee)."
    ],
    tables: [
      {
        title: "Third-person reflexive pronouns",
        headers: ["Case", "Form", "Meaning"],
        rows: [
          ["Accusative", "sig", "himself / herself / itself / themselves"],
          ["Dative", "sér", "to / for himself, herself, itself, themselves"],
          ["Genitive", "sín", "his / her / its own"]
        ]
      }
    ],
    examples: [
      { is: "Hún keypti sér nýjan bíl.", en: "She bought herself a new car." },
      { is: "Þau tala um sig.", en: "They talk about themselves." }
    ],
    exercises: [
      { type: "choice", prompt: "Which pronoun means 'to/for himself' in the dative?", options: ["sér", "sig", "sín", "honum"], answer: "sér" },
      { type: "choice", prompt: "In 'Hann keypti honum kaffi,' who receives the coffee?", options: ["someone else, not the subject", "the subject himself", "no one", "the speaker"], answer: "someone else, not the subject" },
      { type: "type", prompt: "Complete: Hún keypti ___ nýjan bíl. (dative reflexive: 'for herself')", answer: "sér" }
    ]
  },
  {
    id: "pronouns",
    level: "A0",
    category: "Pronouns",
    title: "Personal Pronouns",
    summary: "Nominative and accusative pronouns, including the gendered forms of 'they'.",
    theory: [
      "Icelandic pronouns change form depending on case, the same way nouns do. Learning the nominative and accusative forms first covers most everyday sentences.",
      "The third person singular has three genders: hann (he), hún (she), það (it), matching the grammatical gender of the noun referred to, not necessarily biological sex.",
      "Plural forms of 'they' also show gender: þeir (masculine or mixed group), þær (feminine), þau (neuter or a mixed group that includes a neuter noun)."
    ],
    tables: [
      {
        title: "Personal pronouns (nominative and accusative)",
        headers: ["Person", "Nominative", "Accusative", "English"],
        rows: [
          ["1st sg", "ég", "mig", "I / me"],
          ["2nd sg", "þú", "þig", "you / you"],
          ["3rd sg m", "hann", "hann", "he / him"],
          ["3rd sg f", "hún", "hana", "she / her"],
          ["3rd sg n", "það", "það", "it / it"],
          ["1st pl", "við", "okkur", "we / us"],
          ["2nd pl", "þið", "ykkur", "you (pl) / you (pl)"],
          ["3rd pl", "þeir / þær / þau", "þá / þær / þau", "they / them"]
        ]
      }
    ],
    examples: [
      { is: "Hún sér hana.", en: "She sees her." },
      { is: "Við tölum við ykkur.", en: "We talk to you (pl)." }
    ],
    exercises: [
      { type: "choice", prompt: "Which pronoun means 'she'?", options: ["hún", "hann", "það", "þau"], answer: "hún" },
      { type: "type", prompt: "Translate: We see you (plural).", answer: "Við sjáum ykkur", hint: "Use the accusative form of þið." },
      { type: "choice", prompt: "Which pronoun is used for a mixed or neuter group?", options: ["þau", "þeir", "þær", "þið"], answer: "þau" }
    ]
  },
  {
    id: "present-tense",
    level: "A1",
    category: "Verbs",
    title: "Present Tense Verbs",
    summary: "Regular weak-verb endings, plus the irregular vera (to be).",
    theory: [
      "Most Icelandic verbs follow one of a few regular present-tense patterns. Learning the pattern for tala (to speak) covers a large share of everyday weak verbs.",
      "The verb stem stays fairly stable; endings mark the person. Þú typically adds -r or -rð, the 3rd person singular usually matches the þú form, and all plural persons often share one ending in a given class.",
      "Vera (to be) is irregular and worth memorizing as fixed forms since it appears constantly."
    ],
    tables: [
      {
        title: "Present tense of tala (to speak)",
        headers: ["Person", "Form"],
        rows: [
          ["ég", "tala"],
          ["þú", "talar"],
          ["hann / hún / það", "talar"],
          ["við", "tölum"],
          ["þið", "talið"],
          ["þeir / þær / þau", "tala"]
        ]
      },
      {
        title: "Present tense of vera (to be)",
        headers: ["Person", "Form"],
        rows: [
          ["ég", "er"],
          ["þú", "ert"],
          ["hann / hún / það", "er"],
          ["við", "erum"],
          ["þið", "eruð"],
          ["þeir / þær / þau", "eru"]
        ]
      }
    ],
    examples: [
      { is: "Þau tala íslensku.", en: "They speak Icelandic." },
      { is: "Við erum þreytt.", en: "We are tired." }
    ],
    exercises: [
      { type: "choice", prompt: "What is the þú form of tala?", options: ["talar", "tala", "tölum", "talið"], answer: "talar" },
      { type: "type", prompt: "Give the við form of vera.", answer: "erum" },
      { type: "choice", prompt: "Which form matches þið in the present tense of tala?", options: ["talið", "talar", "tala", "tölum"], answer: "talið" }
    ]
  },
  {
    id: "past-tense",
    level: "A2",
    category: "Verbs",
    title: "Past Tense Verbs",
    summary: "Weak verbs add a dental suffix; strong verbs change their stem vowel. Goes beyond the beginner course.",
    theory: [
      "This topic goes past what a typical beginner course covers, since most keep the past tense for a second-level book. It is included here as a bonus for anyone who wants to push a little further.",
      "Weak verbs form the past tense with a dental suffix, usually -aði, -di, or -ti added to the stem. Tala (to speak) becomes talaði in the past.",
      "Strong verbs change their stem vowel instead, similar to English sing/sang/sung. Fara (to go) becomes fór in the past, and koma (to come) becomes kom.",
      "Strong verb patterns are not fully predictable, so it is efficient to memorize the past tense of common strong verbs individually rather than deriving it from a rule."
    ],
    tables: [
      {
        title: "Past tense examples",
        headers: ["Infinitive", "Type", "Past (ég form)", "English"],
        rows: [
          ["tala", "weak", "talaði", "I spoke"],
          ["læra", "weak", "lærði", "I learned"],
          ["fara", "strong", "fór", "I went"],
          ["koma", "strong", "kom", "I came"],
          ["sjá", "strong", "sá", "I saw"]
        ]
      }
    ],
    examples: [
      { is: "Í gær fór ég til Akureyrar.", en: "Yesterday I went to Akureyri." },
      { is: "Hún lærði nýtt orð.", en: "She learned a new word." }
    ],
    exercises: [
      { type: "choice", prompt: "What is the past tense (ég form) of fara?", options: ["fór", "fara", "fer", "farði"], answer: "fór" },
      { type: "type", prompt: "Give the past tense of tala (ég form).", answer: "talaði" },
      { type: "choice", prompt: "Which pattern do strong verbs use in the past tense?", options: ["a stem vowel change", "adding -aði", "adding -ir", "no change at all"], answer: "a stem vowel change" }
    ]
  },
  {
    id: "adjectives",
    level: "A2",
    category: "Adjectives",
    title: "Adjective Agreement",
    summary: "Adjectives change to match the gender, number, and case of the noun.",
    theory: [
      "Icelandic adjectives agree with the noun they describe in gender, number, and case. The same adjective, good, changes shape depending on whether the noun is masculine, feminine, or neuter.",
      "In the indefinite (strong) form, used mostly after 'is/are' or with indefinite nouns, endings vary by gender: typically no ending or -ur for masculine, no ending or -/-a for feminine, and -t for neuter.",
      "After a definite article, demonstrative, or possessive, adjectives usually switch to the weak declension, which is more uniform across genders, often ending in -i or -a."
    ],
    tables: [
      {
        title: "Indefinite adjective góður (good) by gender, nominative singular",
        headers: ["Gender", "Noun example", "Adjective form"],
        rows: [
          ["Masculine", "dagur (day)", "góður dagur"],
          ["Feminine", "taska (bag)", "góð taska"],
          ["Neuter", "borð (table)", "gott borð"]
        ]
      }
    ],
    examples: [
      { is: "Þetta er góður dagur.", en: "This is a good day." },
      { is: "Kaffið er gott.", en: "The coffee is good." }
    ],
    exercises: [
      { type: "choice", prompt: "Which form of 'good' matches borð (neuter)?", options: ["gott", "góður", "góð", "góðir"], answer: "gott" },
      { type: "choice", prompt: "Which form of 'good' matches taska (feminine)?", options: ["góð", "góður", "gott", "góðar"], answer: "góð" },
      { type: "type", prompt: "Complete: ___ dagur (good day), masculine form.", answer: "góður" }
    ]
  },
  {
    id: "word-order",
    level: "A1",
    category: "Sentence Structure",
    title: "Word Order and Questions",
    summary: "Verb-second order, yes/no inversion, and wh-question structure.",
    theory: [
      "Icelandic is a verb-second (V2) language: the finite verb is normally the second element in a statement, even when something other than the subject comes first.",
      "To form a yes/no question, invert the subject and verb: Talar þú íslensku? (Do you speak Icelandic?) instead of adding a helper word like 'do'.",
      "Wh-questions place the question word first, followed immediately by the verb, then the subject: Hvað heitir þú? (What is your name?)."
    ],
    examples: [
      { is: "Í dag lærum við ný orð.", en: "Today we learn new words. (verb stays second)" },
      { is: "Hvar býrð þú?", en: "Where do you live?" }
    ],
    exercises: [
      { type: "choice", prompt: "What comes right after the question word in an Icelandic wh-question?", options: ["the verb", "the subject", "the object", "nothing"], answer: "the verb" },
      { type: "choice", prompt: "How do you form a yes/no question from 'Þú talar íslensku'?", options: ["Talar þú íslensku?", "Þú talar íslensku?", "Gerir þú talar íslensku?", "Ert þú talar íslensku?"], answer: "Talar þú íslensku?" },
      { type: "type", prompt: "Translate: Today we learn new words. Start with Í dag.", answer: "Í dag lærum við ný orð", hint: "Keep the verb in second position." }
    ]
  },
  {
    id: "numbers-time",
    level: "A0",
    category: "Numbers & Time",
    title: "Numbers and Telling Time",
    summary: "Gendered forms of 'one', and how the clock and half-hours work.",
    theory: [
      "Icelandic numbers 1 to 4 change form depending on the gender of the noun they count (einn/ein/eitt for one), while 5 and above stay the same for every gender.",
      "Time is told using klukkan (the clock) followed by the hour: klukkan eitt (one o'clock), klukkan tvö (two o'clock).",
      "Half hours count toward the next hour, similar to German: hálf tvö means 'half past one', not 'half past two'."
    ],
    tables: [
      {
        title: "The number 'one' by gender",
        headers: ["Gender", "Form", "Example"],
        rows: [
          ["Masculine", "einn", "einn dagur (one day)"],
          ["Feminine", "ein", "ein taska (one bag)"],
          ["Neuter", "eitt", "eitt borð (one table)"]
        ]
      }
    ],
    examples: [
      { is: "Klukkan er hálf tvö.", en: "It is half past one." },
      { is: "Ég á eina systur.", en: "I have one sister." }
    ],
    exercises: [
      { type: "choice", prompt: "Which form of 'one' matches taska (feminine)?", options: ["ein", "einn", "eitt", "einir"], answer: "ein" },
      { type: "choice", prompt: "What does hálf tvö mean?", options: ["half past one", "half past two", "two o'clock", "quarter to two"], answer: "half past one" },
      { type: "type", prompt: "Translate: one day (masculine).", answer: "einn dagur" }
    ]
  },
  {
    id: "prepositions",
    level: "A2",
    category: "Cases",
    title: "Prepositions and Case Government",
    summary: "Why í and á can mean motion or location depending on the case that follows.",
    theory: [
      "Every Icelandic preposition governs a specific case, and some prepositions can govern two different cases depending on meaning. Learning the case together with the preposition, as one chunk, avoids guessing later.",
      "Í and á are the clearest example: they take accusative when describing motion into or onto a place, and dative when describing static location in or on a place. Ég fer í bæinn (accusative, motion) versus Ég er í bænum (dative, location).",
      "Other common prepositions have a fixed case: frá (from) takes dative, and til (to, toward) takes genitive."
    ],
    tables: [
      {
        title: "Common prepositions and their case",
        headers: ["Preposition", "Case", "Meaning", "Example"],
        rows: [
          ["í / á (motion)", "accusative", "into / onto", "Ég fer í bæinn."],
          ["í / á (location)", "dative", "in / on", "Ég er í bænum."],
          ["frá", "dative", "from", "Ég er frá Perú."],
          ["til", "genitive", "to, toward", "Ég fer til Íslands."],
          ["með", "dative", "with", "Ég fer með þér."]
        ]
      }
    ],
    examples: [
      { is: "Hann fer á kaffihúsið.", en: "He goes to the cafe. (motion, accusative)" },
      { is: "Hann er á kaffihúsinu.", en: "He is at the cafe. (location, dative)" }
    ],
    exercises: [
      { type: "choice", prompt: "Which case does til usually take?", options: ["genitive", "accusative", "dative", "nominative"], answer: "genitive" },
      { type: "choice", prompt: "'Í bæinn' (accusative) describes:", options: ["motion into town", "staying in town", "leaving town", "a memory of town"], answer: "motion into town" },
      { type: "type", prompt: "Translate: I am from Peru.", answer: "Ég er frá Perú" }
    ]
  },
  {
    id: "genitive-case",
    level: "A2",
    category: "Cases",
    title: "The Genitive Case",
    summary: "Possession, and the preposition til that always demands it.",
    theory: [
      "The genitive expresses possession, similar to English 's or 'of'. In everyday spoken Icelandic it is increasingly common to hear af plus dative instead, but the genitive remains standard in writing and appears in fixed phrases.",
      "Endings vary by noun type: strong masculine and neuter nouns typically add -s (hestur to hests, barn to barns), strong feminine nouns add -ar (borg to borgar), and weak nouns of every gender add -a or -u, matching their other oblique cases.",
      "The preposition til (to, toward) always takes the genitive: Ég fer til Íslands (I am going to Iceland)."
    ],
    tables: [
      {
        title: "Genitive singular by noun type",
        headers: ["Type", "Nominative", "Genitive"],
        rows: [
          ["Strong masculine", "hestur", "hests"],
          ["Weak masculine", "tími", "tíma"],
          ["Strong feminine", "borg", "borgar"],
          ["Weak feminine", "saga", "sögu"],
          ["Strong neuter", "barn", "barns"],
          ["Weak neuter", "auga", "auga"]
        ]
      }
    ],
    examples: [
      { is: "Nafn hestsins er Blesi.", en: "The horse's name is Blesi." },
      { is: "Ég fer til Íslands.", en: "I am going to Iceland." }
    ],
    exercises: [
      { type: "choice", prompt: "What is the genitive of hestur (horse)?", options: ["hests", "hesti", "hest", "hestar"], answer: "hests" },
      { type: "choice", prompt: "Which case does the preposition til always take?", options: ["genitive", "accusative", "dative", "nominative"], answer: "genitive" },
      { type: "type", prompt: "Give the genitive of borg (city, strong feminine).", answer: "borgar" }
    ]
  },
  {
    id: "modals-infinitives",
    level: "A2",
    category: "Verbs",
    title: "Modal Verbs and Verb+Infinitive Patterns",
    summary: "Ætla að, vera búinn að, eiga að, and munu: intention, completion, obligation, future.",
    theory: [
      "Icelandic uses a handful of high-frequency verb-plus-infinitive patterns to express intention, near-future action, obligation, and completed action, similar to English 'going to,' 'about to,' and 'supposed to.'",
      "Ætla að + infinitive expresses intention or a plan: Ég ætla að læra (I am going to study). Vera búinn að + infinitive expresses that something is already finished: Ég er búinn að læra (I have already studied).",
      "Eiga að + infinitive expresses obligation or expectation: Þú átt að mæta klukkan átta (You are supposed to arrive at eight). The modal verb munu (will) works like its English counterpart for talking about the future: Ég mun koma (I will come)."
    ],
    tables: [
      {
        title: "Common verb + infinitive patterns",
        headers: ["Pattern", "Meaning", "Example"],
        rows: [
          ["ætla að + infinitive", "intend to / going to", "Ég ætla að fara."],
          ["vera búinn að + infinitive", "have already done", "Ég er búinn að borða."],
          ["eiga að + infinitive", "supposed to / should", "Þú átt að hringja."],
          ["munu + infinitive", "will (future)", "Ég mun koma."]
        ]
      }
    ],
    examples: [
      { is: "Hún ætlar að ferðast til Íslands.", en: "She is going to travel to Iceland." },
      { is: "Við erum búin að klára verkefnið.", en: "We have already finished the assignment." }
    ],
    exercises: [
      { type: "choice", prompt: "What does 'Ég er búinn að læra' mean?", options: ["I have already studied", "I am going to study", "I should study", "I will study"], answer: "I have already studied" },
      { type: "choice", prompt: "Which pattern expresses obligation, like 'supposed to'?", options: ["eiga að + infinitive", "ætla að + infinitive", "vera búinn að + infinitive", "munu + infinitive"], answer: "eiga að + infinitive" },
      { type: "type", prompt: "Translate: I am going to go. Use ætla.", answer: "Ég ætla að fara" }
    ]
  },
  {
    id: "subjunctive",
    level: "B1",
    category: "Verbs",
    title: "Intro to the Subjunctive",
    summary: "Recognizing sé and friends in reported speech, wishes, and doubt. Goes beyond the beginner course.",
    theory: [
      "This topic also goes past what a typical beginner course covers; most save the subjunctive for a second-level book. It is included here as a bonus for anyone who wants to push a little further.",
      "The subjunctive (viðtengingarháttur) is used for indirect speech, wishes, doubt, and some conditional or purpose clauses. It is a shift in mood, not tense.",
      "A common trigger is reported speech after verbs like segja (say) or halda (think): Hann segir að hún sé þreytt (He says that she is tired) uses sé, the subjunctive of vera, instead of the indicative er.",
      "At this stage, focus on recognizing the subjunctive forms of vera rather than producing every verb's subjunctive freely."
    ],
    tables: [
      {
        title: "Subjunctive of vera (present subjunctive)",
        headers: ["Person", "Form"],
        rows: [
          ["ég", "sé"],
          ["þú", "sért"],
          ["hann / hún / það", "sé"],
          ["við", "séum"],
          ["þið", "séuð"],
          ["þeir / þær / þau", "séu"]
        ]
      }
    ],
    examples: [
      { is: "Ég held að hann sé þreyttur.", en: "I think he is tired. (subjunctive after held að)" },
      { is: "Hún vonar að veðrið verði gott.", en: "She hopes the weather will be good." }
    ],
    exercises: [
      { type: "choice", prompt: "Which form is the subjunctive of vera for hann?", options: ["sé", "er", "var", "séum"], answer: "sé" },
      { type: "choice", prompt: "The subjunctive is commonly triggered after which kind of verb?", options: ["verbs like segja and halda for reported speech", "verbs that show location", "verbs in the simple past only", "numbers"], answer: "verbs like segja and halda for reported speech" },
      { type: "type", prompt: "Complete: Ég held að hann ___ þreyttur. (subjunctive of vera)", answer: "sé" }
    ]
  }
];

const novels = [
  {
    id: "nyja-ibudin",
    level: "A1",
    title: "Nýja íbúðin",
    subtitle: "The New Apartment",
    tagline: "Elín moves to Reykjavík and slowly finds her footing in a new city.",
    chapters: [
      {
        title: "1. Flutningurinn",
        subtitle: "The Move",
        text: [
          "Elín flytur í nýja íbúð í Reykjavík.",
          "Íbúðin er lítil en björt.",
          "Það eru þrjú herbergi og lítið eldhús.",
          "Elín setur bækurnar sínar á hilluna.",
          "Hún er þreytt en ánægð."
        ],
        translation: "Elín moves into a new apartment in Reykjavík. The apartment is small but bright. There are three rooms and a small kitchen. Elín puts her books on the shelf. She is tired but happy.",
        hints: ["flytur: moves / is moving", "björt: bright", "hilluna: the shelf"],
        checks: [
          { prompt: "How does Elín feel at the end of the chapter?", options: ["tired but happy", "angry", "bored"], answer: "tired but happy" },
          { prompt: "How many rooms does the apartment have?", options: ["three", "five", "one"], answer: "three" }
        ]
      },
      {
        title: "2. Nágranninn",
        subtitle: "The Neighbor",
        text: [
          "Daginn eftir heyrir Elín bank á dyrnar.",
          "Fyrir utan stendur maður með köku.",
          "„Hæ, ég heiti Baldur. Ég bý hérna við hliðina,“ segir hann.",
          "Elín brosir og býður honum inn.",
          "Þau tala saman um Reykjavík og veðrið."
        ],
        translation: "The next day Elín hears a knock on the door. Outside stands a man with a cake. 'Hi, I'm Baldur. I live right next door,' he says. Elín smiles and invites him in. They talk together about Reykjavík and the weather.",
        hints: ["bank á dyrnar: a knock on the door", "við hliðina: next door", "brosir: smiles"],
        checks: [
          { prompt: "What does Baldur bring?", options: ["a cake", "flowers", "a book"], answer: "a cake" },
          { prompt: "What do Elín and Baldur talk about?", options: ["Reykjavík and the weather", "work", "money"], answer: "Reykjavík and the weather" }
        ]
      },
      {
        title: "3. Á kaffihúsinu",
        subtitle: "At the Café",
        text: [
          "Um helgina fara Elín og Baldur á kaffihús saman.",
          "Þau panta kaffi og kanilsnúð.",
          "Baldur segir að hann vinni í banka.",
          "Elín segir að hún sé að læra íslensku.",
          "„Þú talar mjög vel!“ segir Baldur."
        ],
        translation: "On the weekend Elín and Baldur go to a café together. They order coffee and a cinnamon roll. Baldur says that he works at a bank. Elín says that she is learning Icelandic. 'You speak very well!' says Baldur.",
        hints: ["kanilsnúð: cinnamon roll", "vinni: works (subjunctive after segir að)", "mjög vel: very well"],
        checks: [
          { prompt: "What do they order?", options: ["coffee and a cinnamon roll", "tea and bread", "juice and cake"], answer: "coffee and a cinnamon roll" },
          { prompt: "Where does Baldur work?", options: ["at a bank", "at a hospital", "at a school"], answer: "at a bank" }
        ]
      },
      {
        title: "4. Nýir vinir",
        subtitle: "New Friends",
        text: [
          "Eftir nokkrar vikur þekkir Elín marga í hverfinu.",
          "Hún talar íslensku á hverjum degi.",
          "Baldur býður henni í matarboð með vinum sínum.",
          "Elín er ekki lengur ein í nýju borginni.",
          "Hún brosir þegar hún hugsar um fyrsta daginn í íbúðinni."
        ],
        translation: "After a few weeks Elín knows many people in the neighborhood. She speaks Icelandic every day. Baldur invites her to a dinner party with his friends. Elín is no longer alone in the new city. She smiles when she thinks about the first day in the apartment.",
        hints: ["hverfinu: the neighborhood", "matarboð: dinner party", "ekki lengur: no longer"],
        checks: [
          { prompt: "What does Elín do every day now?", options: ["speak Icelandic", "clean the apartment", "travel"], answer: "speak Icelandic" },
          { prompt: "What does Baldur invite Elín to?", options: ["a dinner party", "a concert", "a trip"], answer: "a dinner party" }
        ]
      }
    ]
  },
  {
    id: "leyndarmalid",
    level: "A2",
    title: "Leyndarmálið á kaffihúsinu",
    subtitle: "The Secret at the Café",
    tagline: "A barista finds an old man's forgotten book, and a fifty-year-old story inside it.",
    chapters: [
      {
        title: "1. Undarlegur gestur",
        subtitle: "A Strange Customer",
        text: [
          "Sigga vinnur á litlu kaffihúsi í miðbænum.",
          "Á hverjum morgni kemur sami gamli maðurinn og pantar svart kaffi.",
          "Hann talar aldrei við neinn og situr alltaf við sama borðið.",
          "Í dag skilur hann eftir litla, gamla bók á borðinu.",
          "Sigga tekur bókina og skoðar hana forvitin."
        ],
        translation: "Sigga works at a small café downtown. Every morning the same old man comes and orders black coffee. He never talks to anyone and always sits at the same table. Today he leaves a small, old book on the table. Sigga takes the book and looks at it, curious.",
        hints: ["skilur eftir: leaves behind", "forvitin: curious", "sami: the same"],
        checks: [
          { prompt: "How often does the old man come?", options: ["every morning", "once a week", "only today"], answer: "every morning" },
          { prompt: "What does he leave behind?", options: ["a small old book", "his coat", "money"], answer: "a small old book" }
        ]
      },
      {
        title: "2. Bókin",
        subtitle: "The Book",
        text: [
          "Bókin er full af gömlum bréfum og myndum.",
          "Í einu bréfi stendur nafnið Guðrún og ártalið 1962.",
          "Sigga sér mynd af ungri konu fyrir framan sama kaffihúsið.",
          "Húsið lítur næstum eins út, en göturnar eru öðruvísi.",
          "Sigga spyr sjálfa sig: hver var Guðrún?"
        ],
        translation: "The book is full of old letters and photos. In one letter is the name Guðrún and the year 1962. Sigga sees a photo of a young woman in front of the same café. The building looks almost the same, but the streets are different. Sigga asks herself: who was Guðrún?",
        hints: ["bréfum: letters", "ártalið: the year (date)", "spyr sjálfa sig: asks herself"],
        checks: [
          { prompt: "What year is written in the letter?", options: ["1962", "1990", "2005"], answer: "1962" },
          { prompt: "What is unusual about the photo?", options: ["the streets look different", "the woman is Sigga", "the café doesn't exist"], answer: "the streets look different" }
        ]
      },
      {
        title: "3. Gamli maðurinn kemur aftur",
        subtitle: "The Old Man Returns",
        text: [
          "Daginn eftir kemur gamli maðurinn aftur inn á kaffihúsið.",
          "Sigga réttir honum bókina og spyr varlega um Guðrúnu.",
          "Maðurinn verður hljóður og horfir lengi út um gluggann.",
          "„Guðrún var konan mín,“ segir hann að lokum.",
          "„Hún vann hérna fyrir meira en fimmtíu árum.“"
        ],
        translation: "The next day the old man comes into the café again. Sigga hands him the book and carefully asks about Guðrún. The man becomes quiet and looks out the window for a long time. 'Guðrún was my wife,' he says at last. 'She worked here more than fifty years ago.'",
        hints: ["réttir: hands (something to someone)", "verður hljóður: becomes quiet", "að lokum: at last, finally"],
        checks: [
          { prompt: "Who was Guðrún to the old man?", options: ["his wife", "his sister", "his teacher"], answer: "his wife" },
          { prompt: "Where did Guðrún work?", options: ["at the same café", "at a hospital", "at a school"], answer: "at the same café" }
        ]
      },
      {
        title: "4. Sagan hans",
        subtitle: "His Story",
        text: [
          "Maðurinn segir Siggu alla söguna yfir kaffibolla.",
          "Hann og Guðrún hittust á kaffihúsinu árið 1961.",
          "Þau giftu sig ári síðar og bjuggu saman í fjörutíu ár.",
          "Guðrún lést fyrir þremur árum, en maðurinn kemur enn á hverjum degi.",
          "„Hér finnst mér ég vera nálægt henni,“ segir hann."
        ],
        translation: "The man tells Sigga the whole story over a cup of coffee. He and Guðrún met at the café in 1961. They got married a year later and lived together for forty years. Guðrún passed away three years ago, but the man still comes every day. 'Here I feel close to her,' he says.",
        hints: ["hittust: met (each other)", "giftu sig: got married", "lést: passed away"],
        checks: [
          { prompt: "When did the man and Guðrún meet?", options: ["1961", "1962", "1990"], answer: "1961" },
          { prompt: "Why does the man still come every day?", options: ["he feels close to her there", "he has nowhere else to go", "he works there"], answer: "he feels close to her there" }
        ]
      },
      {
        title: "5. Ný hefð",
        subtitle: "A New Tradition",
        text: [
          "Sigga skilar bókinni til mannsins, en hann biður hana að eiga eitt bréfið.",
          "Hún velur myndina af Guðrúnu fyrir framan kaffihúsið.",
          "Núna hangir myndin á vegg kaffihússins, öllum til sýnis.",
          "Gamli maðurinn brosir í hvert sinn sem hann sér hana.",
          "Sigga hugsar að sumar sögur eigi heima þar sem þær byrjuðu."
        ],
        translation: "Sigga returns the book to the man, but he asks her to keep one letter. She chooses the photo of Guðrún in front of the café. Now the photo hangs on the café wall, for everyone to see. The old man smiles every time he sees it. Sigga thinks that some stories belong where they began.",
        hints: ["skilar: returns (something)", "til sýnis: on display", "eigi heima: belong"],
        checks: [
          { prompt: "What does Sigga keep?", options: ["the photo of Guðrún", "the whole book", "nothing"], answer: "the photo of Guðrún" },
          { prompt: "Where does the photo end up?", options: ["on the café wall", "in a museum", "in the book"], answer: "on the café wall" }
        ]
      }
    ]
  },
  {
    id: "ferdin-nordur",
    level: "B1",
    title: "Ferðin norður",
    subtitle: "The Journey North",
    tagline: "A weekend road trip to Akureyri does not go quite as planned.",
    chapters: [
      {
        title: "1. Áætlunin",
        subtitle: "The Plan",
        text: [
          "Kristján og Selma ákveða að keyra norður til Akureyrar um helgina.",
          "Þau hafa aldrei farið saman í svona langa ferð áður.",
          "Selma segir að þau ættu að leggja af stað snemma til að forðast umferð.",
          "Kristján hlær og segir að hann sé alltaf tilbúinn fyrir ævintýri.",
          "Um kvöldið pakka þau niður hlýjum fötum og korti."
        ],
        translation: "Kristján and Selma decide to drive north to Akureyri for the weekend. They have never gone on such a long trip together before. Selma says that they should set off early to avoid traffic. Kristján laughs and says that he is always ready for an adventure. In the evening they pack warm clothes and a map.",
        hints: ["ættu að: should (subjunctive of eiga)", "forðast: to avoid", "tilbúinn: ready"],
        checks: [
          { prompt: "Where are Kristján and Selma going?", options: ["Akureyri", "Reykjavík", "Ísafjörður"], answer: "Akureyri" },
          { prompt: "What does Selma suggest?", options: ["leaving early to avoid traffic", "staying home", "flying instead"], answer: "leaving early to avoid traffic" }
        ]
      },
      {
        title: "2. Á veginum",
        subtitle: "On the Road",
        text: [
          "Snemma morguns leggja þau af stað í rigningu.",
          "Eftir nokkrar klukkustundir birtir upp og fjöllin sjást vel.",
          "Þau stoppa við litla sjoppu og fá sér kaffi og vöfflur.",
          "Selma tekur myndir af hverunum sem gufa upp úr jörðinni.",
          "Kristján segir að þetta sé fallegasti hluti Íslands sem hann hafi séð."
        ],
        translation: "Early in the morning they set off in the rain. After a few hours it clears up and the mountains are clearly visible. They stop at a small roadside shop and get coffee and waffles. Selma takes pictures of the hot springs steaming up from the ground. Kristján says that this is the most beautiful part of Iceland he has seen.",
        hints: ["birtir upp: it clears up (weather)", "hverunum: the hot springs", "gufa upp: to steam / give off steam"],
        checks: [
          { prompt: "What is the weather like at the start of the drive?", options: ["rainy", "sunny", "snowy"], answer: "rainy" },
          { prompt: "What does Selma photograph?", options: ["hot springs", "birds", "the ocean"], answer: "hot springs" }
        ]
      },
      {
        title: "3. Bilunin",
        subtitle: "The Breakdown",
        text: [
          "Rétt fyrir Akureyri byrjar bíllinn að hósta og stoppar svo alveg.",
          "Kristján reynir að ræsa hann aftur, en ekkert gerist.",
          "Selma hringir í vegaaðstoð og bíður óþreyjufull eftir svari.",
          "Á meðan þau bíða, sjá þau hjörð af hestum á næsta akri.",
          "„Kannski var þetta merki um að við ættum að hvíla okkur,“ segir Selma og hlær."
        ],
        translation: "Right before Akureyri the car starts to sputter and then stops completely. Kristján tries to start it again, but nothing happens. Selma calls roadside assistance and waits impatiently for an answer. While they wait, they see a herd of horses in the next field. 'Maybe that was a sign that we should rest,' says Selma, laughing.",
        hints: ["hósta: to cough / sputter", "vegaaðstoð: roadside assistance", "hjörð: a herd"],
        checks: [
          { prompt: "What happens to the car?", options: ["it breaks down", "it runs out of gas", "it gets a flat tire"], answer: "it breaks down" },
          { prompt: "What do they see while waiting?", options: ["a herd of horses", "a whale", "the northern lights"], answer: "a herd of horses" }
        ]
      },
      {
        title: "4. Akureyri loksins",
        subtitle: "Akureyri at Last",
        text: [
          "Vegaaðstoðin kemur eftir klukkutíma og gerir við bílinn.",
          "Þau komast loksins til Akureyrar rétt fyrir myrkur.",
          "Bærinn er minni en Reykjavík, en göturnar eru fullar af litlum húsum og ljósum.",
          "Þau fá sér herbergi á litlu hóteli nálægt firðinum.",
          "Um kvöldið borða þau fiskisúpu og tala um ferðalagið."
        ],
        translation: "The roadside assistance arrives after an hour and fixes the car. They finally reach Akureyri right before dark. The town is smaller than Reykjavík, but the streets are full of small houses and lights. They get a room at a small hotel near the fjord. In the evening they eat fish soup and talk about the journey.",
        hints: ["gerir við: fixes, repairs", "myrkur: darkness", "firðinum: the fjord"],
        checks: [
          { prompt: "When do they arrive in Akureyri?", options: ["right before dark", "early morning", "at noon"], answer: "right before dark" },
          { prompt: "What do they eat that evening?", options: ["fish soup", "lamb", "pizza"], answer: "fish soup" }
        ]
      },
      {
        title: "5. Heimferðin",
        subtitle: "The Way Home",
        text: [
          "Daginn eftir ganga þau um bæinn og heimsækja grasagarðinn.",
          "Selma segir að hún hefði gjarnan viljað dvelja lengur.",
          "Á leiðinni heim rifja þau upp allt sem gerðist: rigninguna, hverina, bilunina.",
          "Kristján segir að erfiðleikarnir hafi gert ferðina eftirminnilegri.",
          "Þegar þau koma heim, byrja þau strax að skipuleggja næstu ferð."
        ],
        translation: "The next day they walk around town and visit the botanical garden. Selma says that she would gladly have stayed longer. On the way home they recall everything that happened: the rain, the hot springs, the breakdown. Kristján says that the difficulties made the trip more memorable. When they get home, they immediately start planning the next trip.",
        hints: ["grasagarðinn: the botanical garden", "rifja upp: to recall, look back on", "eftirminnilegri: more memorable"],
        checks: [
          { prompt: "What do they visit the next day?", options: ["the botanical garden", "a museum", "a whale-watching boat"], answer: "the botanical garden" },
          { prompt: "What do they do when they get home?", options: ["start planning the next trip", "go straight to sleep", "call their friends"], answer: "start planning the next trip" }
        ]
      }
    ]
  }
];

const state = loadState();
let currentLessonIndex = Math.min(state.currentLessonIndex ?? 0, lessons.length - 1);
let currentExerciseIndex = 0;
let currentGrammarTopicId = null;
let currentGrammarExerciseIndex = 0;
let currentNovelId = null;
let currentChapterIndex = 0;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState();
  } catch {
    return defaultState();
  }
}

function defaultState() {
  return {
    currentLessonIndex: 0,
    completed: {},
    exerciseStats: {},
    readingStats: {},
    grammarStats: {},
    novelProgress: {},
    streak: { count: 0, lastDate: null }
  };
}

function saveState() {
  state.currentLessonIndex = currentLessonIndex;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderStats();
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function renderLesson() {
  const lesson = lessons[currentLessonIndex];
  $("#lessonEyebrow").textContent = `${lesson.stage} - ${lesson.minutes} min`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonSummary").textContent = lesson.summary;
  $("#lessonMinutes").textContent = `${lesson.minutes} min`;
  $("#theoryContent").innerHTML = `
    ${lesson.theory.map((item) => `<p>${item}</p>`).join("")}
    <h3>Today's learning targets</h3>
    <ul>${lesson.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  $("#phoneticContent").innerHTML = `
    ${lesson.phonetics.map((item) => `<p>${item}</p>`).join("")}
    <h3>Mini vocabulary</h3>
    <ul>${lesson.vocab.map((word) => `<li>${word}</li>`).join("")}</ul>
  `;
  currentExerciseIndex = 0;
  renderExercise();
  renderCourse();
  renderReview();
}

function renderExercise() {
  const lesson = lessons[currentLessonIndex];
  const exercise = lesson.exercises[currentExerciseIndex];
  $("#exerciseProgress").textContent = `${currentExerciseIndex + 1}/${lesson.exercises.length}`;
  const host = $("#exerciseHost");

  if (!exercise) {
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">Class practice finished. Mark it complete when you feel steady enough to meet it again in review.</p>
        <button class="primary-action" type="button" data-complete-current>Complete class</button>
      </div>
    `;
    host.querySelector("[data-complete-current]").addEventListener("click", completeCurrentLesson);
    return;
  }

  if (exercise.type === "choice") {
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">${exercise.prompt}</p>
        <div class="choice-grid">
          ${exercise.options.map((option) => `<button class="choice" type="button">${option}</button>`).join("")}
        </div>
        <p class="feedback" aria-live="polite"></p>
      </div>
    `;
    host.querySelectorAll(".choice").forEach((button) => {
      button.addEventListener("click", () => checkChoice(button, exercise));
    });
  } else {
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">${exercise.prompt}</p>
        <input class="answer-input" type="text" autocomplete="off" autocapitalize="sentences" placeholder="${exercise.hint || "Type your answer"}" />
        <div class="hero-actions">
          <button class="primary-action" type="button">Check</button>
          <button class="secondary-action" type="button" data-skip>Skip</button>
        </div>
        <p class="feedback" aria-live="polite"></p>
      </div>
    `;
    host.querySelector(".primary-action").addEventListener("click", () => checkTyped(exercise));
    host.querySelector("[data-skip]").addEventListener("click", nextExercise);
    host.querySelector(".answer-input").addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkTyped(exercise);
    });
  }
}

function checkChoice(button, exercise) {
  const host = $("#exerciseHost");
  const buttons = host.querySelectorAll(".choice");
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === exercise.answer) item.classList.add("is-correct");
  });
  const correct = button.textContent === exercise.answer;
  if (!correct) button.classList.add("is-wrong");
  recordExercise(correct);
  host.querySelector(".feedback").textContent = correct ? "Correct. Nice and steady." : `Not yet. Correct answer: ${exercise.answer}`;
  window.setTimeout(nextExercise, correct ? 650 : 1250);
}

function checkTyped(exercise) {
  const host = $("#exerciseHost");
  const input = host.querySelector(".answer-input");
  const correct = normalize(input.value) === normalize(exercise.answer);
  recordExercise(correct);
  host.querySelector(".feedback").textContent = correct ? "Correct. Say it once aloud before moving on." : `Close review: ${exercise.answer}`;
  input.style.borderColor = correct ? "var(--green)" : "var(--red)";
  window.setTimeout(nextExercise, correct ? 750 : 1400);
}

function recordExercise(correct) {
  const lesson = lessons[currentLessonIndex];
  const stat = state.exerciseStats[lesson.id] || { correct: 0, total: 0 };
  stat.correct += correct ? 1 : 0;
  stat.total += 1;
  state.exerciseStats[lesson.id] = stat;
  saveState();
}

function nextExercise() {
  currentExerciseIndex += 1;
  renderExercise();
}

function completeCurrentLesson() {
  const lesson = lessons[currentLessonIndex];
  state.completed[lesson.id] = {
    date: todayKey(),
    title: lesson.title
  };
  updateStreak();
  if (currentLessonIndex < lessons.length - 1) currentLessonIndex += 1;
  saveState();
  renderLesson();
}

function updateStreak() {
  const today = todayKey();
  if (state.streak.lastDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  state.streak.count = state.streak.lastDate === yesterdayKey ? state.streak.count + 1 : 1;
  state.streak.lastDate = today;
}

function renderStats() {
  $("#streakDays").textContent = state.streak.count || 0;
  const totals = Object.values(state.exerciseStats).reduce(
    (acc, item) => {
      acc.correct += item.correct;
      acc.total += item.total;
      return acc;
    },
    { correct: 0, total: 0 }
  );
  $("#masteryScore").textContent = totals.total ? `${Math.round((totals.correct / totals.total) * 100)}%` : "0%";
}

function renderCourse() {
  $("#courseGrid").innerHTML = lessons
    .map((lesson, index) => {
      const done = Boolean(state.completed[lesson.id]);
      const active = index === currentLessonIndex;
      return `
        <article class="course-card">
          <div class="meta-row">
            <span class="pill ${done ? "done" : ""}">${done ? "Complete" : active ? "Current" : "Upcoming"}</span>
            <span class="pill">${lesson.minutes} min</span>
          </div>
          <h3>${index + 1}. ${lesson.title}</h3>
          <p>${lesson.summary}</p>
          <button class="small-action" type="button" data-lesson-index="${index}">${active ? "Open" : "Study this"}</button>
        </article>
      `;
    })
    .join("");

  $("#courseGrid").querySelectorAll("[data-lesson-index]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLessonIndex = Number(button.dataset.lessonIndex);
      saveState();
      showView("today");
      renderLesson();
    });
  });
}

function renderGrammarList() {
  const levelSelect = $("#grammarLevel");
  const categorySelect = $("#grammarCategory");
  const levels = [...new Set(grammarTopics.map((item) => item.level))];
  const categories = [...new Set(grammarTopics.map((item) => item.category))].sort();

  levelSelect.innerHTML = `<option value="all">All levels</option>${levels
    .map((level) => `<option value="${level}">${level}</option>`)
    .join("")}`;
  categorySelect.innerHTML = `<option value="all">All categories</option>${categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("")}`;

  const update = () => {
    const level = levelSelect.value;
    const category = categorySelect.value;
    const filtered = grammarTopics.filter((topic) => {
      const matchesLevel = level === "all" || topic.level === level;
      const matchesCategory = category === "all" || topic.category === category;
      return matchesLevel && matchesCategory;
    });

    $("#grammarGrid").innerHTML = filtered
      .map((topic) => {
        const stat = state.grammarStats?.[topic.id];
        const score = stat?.total ? `${Math.round((stat.correct / stat.total) * 100)}%` : "not drilled";
        return `
          <article class="course-card">
            <div class="meta-row">
              <span class="pill">${topic.level}</span>
              <span class="pill">${topic.category}</span>
              <span class="pill ${stat ? "done" : ""}">${score}</span>
            </div>
            <h3>${topic.title}</h3>
            <p>${topic.summary}</p>
            <button class="small-action" type="button" data-grammar-id="${topic.id}">Open</button>
          </article>
        `;
      })
      .join("");

    $("#grammarGrid")
      .querySelectorAll("[data-grammar-id]")
      .forEach((button) => {
        button.addEventListener("click", () => openGrammarTopic(button.dataset.grammarId));
      });
  };

  levelSelect.addEventListener("change", update);
  categorySelect.addEventListener("change", update);
  update();
}

function openGrammarTopic(id) {
  currentGrammarTopicId = id;
  currentGrammarExerciseIndex = 0;
  $("#grammarDetailWrap").classList.add("is-open");
  $(".grammar-list-wrap").classList.add("is-hidden");
  renderGrammarDetail();
}

function closeGrammarDetail() {
  currentGrammarTopicId = null;
  $("#grammarDetailWrap").classList.remove("is-open");
  $(".grammar-list-wrap").classList.remove("is-hidden");
  renderGrammarList();
}

function renderGrammarDetail() {
  const topic = grammarTopics.find((item) => item.id === currentGrammarTopicId);
  if (!topic) return;

  $("#grammarTopicEyebrow").textContent = `${topic.category} - ${topic.level}`;
  $("#grammarTopicLevel").textContent = topic.level;
  $("#grammarTopicTitle").textContent = topic.title;

  const tablesHtml = (topic.tables || [])
    .map(
      (table) => `
        <h3>${table.title}</h3>
        <div class="table-scroll">
          <table class="grammar-table">
            <thead><tr>${table.headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
            <tbody>${table.rows
              .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
              .join("")}</tbody>
          </table>
        </div>
      `
    )
    .join("");

  const examplesHtml = topic.examples?.length
    ? `
      <h3>Examples</h3>
      <ul>${topic.examples.map((example) => `<li><span lang="is">${example.is}</span> — ${example.en}</li>`).join("")}</ul>
    `
    : "";

  $("#grammarTheoryContent").innerHTML = `
    ${topic.theory.map((item) => `<p>${item}</p>`).join("")}
    ${tablesHtml}
    ${examplesHtml}
  `;

  renderGrammarExercise();
}

function renderGrammarExercise() {
  const topic = grammarTopics.find((item) => item.id === currentGrammarTopicId);
  if (!topic) return;
  const exercise = topic.exercises[currentGrammarExerciseIndex];
  $("#grammarExerciseProgress").textContent = `${Math.min(currentGrammarExerciseIndex + 1, topic.exercises.length)}/${topic.exercises.length}`;
  const host = $("#grammarExerciseHost");

  if (!exercise) {
    const stat = state.grammarStats?.[topic.id];
    const score = stat?.total ? `${Math.round((stat.correct / stat.total) * 100)}%` : "0%";
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">Drill finished. Score for this topic: ${score}.</p>
        <button class="secondary-action" type="button" data-restart>Practice again</button>
      </div>
    `;
    host.querySelector("[data-restart]").addEventListener("click", () => {
      currentGrammarExerciseIndex = 0;
      renderGrammarExercise();
    });
    return;
  }

  if (exercise.type === "choice") {
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">${exercise.prompt}</p>
        <div class="choice-grid">
          ${exercise.options.map((option) => `<button class="choice" type="button">${option}</button>`).join("")}
        </div>
        <p class="feedback" aria-live="polite"></p>
      </div>
    `;
    host.querySelectorAll(".choice").forEach((button) => {
      button.addEventListener("click", () => checkGrammarChoice(button, exercise));
    });
  } else {
    host.innerHTML = `
      <div class="exercise-card">
        <p class="exercise-prompt">${exercise.prompt}</p>
        <input class="answer-input" type="text" autocomplete="off" autocapitalize="sentences" placeholder="${exercise.hint || "Type your answer"}" />
        <div class="hero-actions">
          <button class="primary-action" type="button">Check</button>
          <button class="secondary-action" type="button" data-skip>Skip</button>
        </div>
        <p class="feedback" aria-live="polite"></p>
      </div>
    `;
    host.querySelector(".primary-action").addEventListener("click", () => checkGrammarTyped(exercise));
    host.querySelector("[data-skip]").addEventListener("click", nextGrammarExercise);
    host.querySelector(".answer-input").addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkGrammarTyped(exercise);
    });
  }
}

function checkGrammarChoice(button, exercise) {
  const host = $("#grammarExerciseHost");
  host.querySelectorAll(".choice").forEach((item) => {
    item.disabled = true;
    if (item.textContent === exercise.answer) item.classList.add("is-correct");
  });
  const correct = button.textContent === exercise.answer;
  if (!correct) button.classList.add("is-wrong");
  recordGrammarExercise(correct);
  host.querySelector(".feedback").textContent = correct ? "Correct." : `Not yet. Correct answer: ${exercise.answer}`;
  window.setTimeout(nextGrammarExercise, correct ? 650 : 1250);
}

function checkGrammarTyped(exercise) {
  const host = $("#grammarExerciseHost");
  const input = host.querySelector(".answer-input");
  const correct = normalize(input.value) === normalize(exercise.answer);
  recordGrammarExercise(correct);
  host.querySelector(".feedback").textContent = correct ? "Correct." : `Close review: ${exercise.answer}`;
  input.style.borderColor = correct ? "var(--green)" : "var(--red)";
  window.setTimeout(nextGrammarExercise, correct ? 750 : 1400);
}

function recordGrammarExercise(correct) {
  state.grammarStats = state.grammarStats || {};
  const stat = state.grammarStats[currentGrammarTopicId] || { correct: 0, total: 0 };
  stat.correct += correct ? 1 : 0;
  stat.total += 1;
  state.grammarStats[currentGrammarTopicId] = stat;
  saveState();
}

function nextGrammarExercise() {
  currentGrammarExerciseIndex += 1;
  renderGrammarExercise();
}

function renderVocabulary() {
  const topics = [...new Set(vocabulary.map((item) => item.topic))].sort();
  $("#vocabFilter").innerHTML = `<option value="all">All topics</option>${topics
    .map((topic) => `<option value="${topic}">${topic}</option>`)
    .join("")}`;

  const update = () => {
    const query = normalize($("#vocabSearch").value);
    const topic = $("#vocabFilter").value;
    const filtered = vocabulary.filter((item) => {
      const matchesTopic = topic === "all" || item.topic === topic;
      const matchesQuery = !query || normalize(`${item.is} ${item.en} ${item.topic}`).includes(query);
      return matchesTopic && matchesQuery;
    });

    $("#vocabGrid").innerHTML = filtered
      .map(
        (item) => `
          <article class="vocab-card">
            <strong>${item.is}</strong>
            <h3>${item.en}</h3>
            <p>${item.topic}</p>
          </article>
        `
      )
      .join("");
  };

  $("#vocabSearch").addEventListener("input", update);
  $("#vocabFilter").addEventListener("change", update);
  update();
}

function renderReading() {
  const levelSelect = $("#readingLevel");
  const topicSelect = $("#readingTopic");
  const levels = [...new Set(readings.map((item) => item.level))];
  const topics = [...new Set(readings.map((item) => item.topic))].sort();

  levelSelect.innerHTML = `<option value="all">All levels</option>${levels
    .map((level) => `<option value="${level}">${level}</option>`)
    .join("")}`;
  topicSelect.innerHTML = `<option value="all">All topics</option>${topics
    .map((topic) => `<option value="${topic}">${topic}</option>`)
    .join("")}`;

  const update = () => {
    const level = levelSelect.value;
    const topic = topicSelect.value;
    const filtered = readings.filter((item) => {
      const matchesLevel = level === "all" || item.level === level;
      const matchesTopic = topic === "all" || item.topic === topic;
      return matchesLevel && matchesTopic;
    });

    $("#readingGrid").innerHTML = filtered.map(renderReadingCard).join("");
    $("#readingGrid").querySelectorAll("[data-reading-choice]").forEach((button) => {
      button.addEventListener("click", () => checkReadingChoice(button));
    });
  };

  levelSelect.addEventListener("change", update);
  topicSelect.addEventListener("change", update);
  update();
}

function renderReadingCard(reading) {
  const stat = state.readingStats?.[reading.id];
  const score = stat ? `${stat.correct}/${stat.total}` : "new";
  return `
    <article class="reading-card">
      <div class="reading-head">
        <div>
          <div class="meta-row">
            <span class="pill">${reading.level}</span>
            <span class="pill">${reading.topic}</span>
            <span class="pill">${reading.minutes} min</span>
            <span class="pill ${stat ? "done" : ""}">${score}</span>
          </div>
          <h3>${reading.title}</h3>
        </div>
      </div>
      <div class="reading-text" lang="is">
        ${reading.text.map((line) => `<p>${line}</p>`).join("")}
      </div>
      <details>
        <summary>English sense and hints</summary>
        <p>${reading.translation}</p>
        <ul>${reading.hints.map((hint) => `<li>${hint}</li>`).join("")}</ul>
      </details>
      <div class="reading-checks">
        ${reading.checks
          .map(
            (check, index) => `
              <div class="reading-question">
                <p>${check.prompt}</p>
                <div class="choice-grid">
                  ${check.options
                    .map(
                      (option) =>
                        `<button class="choice" type="button" data-reading-choice data-reading-id="${reading.id}" data-question-index="${index}" data-answer="${check.answer}">${option}</button>`
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function checkReadingChoice(button) {
  const readingId = button.dataset.readingId;
  const questionIndex = button.dataset.questionIndex;
  const answer = button.dataset.answer;
  const group = $$(`[data-reading-id="${readingId}"][data-question-index="${questionIndex}"]`);
  const correct = button.textContent === answer;

  group.forEach((item) => {
    item.disabled = true;
    if (item.textContent === answer) item.classList.add("is-correct");
  });
  if (!correct) button.classList.add("is-wrong");

  state.readingStats = state.readingStats || {};
  const stat = state.readingStats[readingId] || { correct: 0, total: 0 };
  stat.correct += correct ? 1 : 0;
  stat.total += 1;
  state.readingStats[readingId] = stat;
  saveState();
}

function renderNovelList() {
  const levelSelect = $("#novelLevel");
  const levels = [...new Set(novels.map((item) => item.level))];
  levelSelect.innerHTML = `<option value="all">All levels</option>${levels
    .map((level) => `<option value="${level}">${level}</option>`)
    .join("")}`;

  const update = () => {
    const level = levelSelect.value;
    const filtered = novels.filter((novel) => level === "all" || novel.level === level);

    $("#novelGrid").innerHTML = filtered
      .map((novel) => {
        const progress = state.novelProgress?.[novel.id];
        const done = progress?.completedChapters?.length || 0;
        return `
          <article class="course-card">
            <div class="meta-row">
              <span class="pill">${novel.level}</span>
              <span class="pill ${done ? "done" : ""}">${done}/${novel.chapters.length} chapters</span>
            </div>
            <h3>${novel.title}</h3>
            <p>${novel.subtitle}</p>
            <p>${novel.tagline}</p>
            <button class="small-action" type="button" data-novel-id="${novel.id}">Open</button>
          </article>
        `;
      })
      .join("");

    $("#novelGrid")
      .querySelectorAll("[data-novel-id]")
      .forEach((button) => {
        button.addEventListener("click", () => openNovel(button.dataset.novelId));
      });
  };

  levelSelect.addEventListener("change", update);
  update();
}

function openNovel(id) {
  currentNovelId = id;
  const progress = state.novelProgress?.[id];
  currentChapterIndex = progress?.lastChapterIndex ?? 0;
  $("#novelDetailWrap").classList.add("is-open");
  $(".novel-list-wrap").classList.add("is-hidden");
  renderNovelDetail();
}

function closeNovelDetail() {
  currentNovelId = null;
  $("#novelDetailWrap").classList.remove("is-open");
  $(".novel-list-wrap").classList.remove("is-hidden");
  renderNovelList();
}

function renderNovelDetail() {
  const novel = novels.find((item) => item.id === currentNovelId);
  if (!novel) return;

  $("#novelEyebrow").textContent = `Novel - ${novel.level}`;
  $("#novelTitle").textContent = novel.title;
  $("#novelTagline").textContent = `${novel.subtitle}. ${novel.tagline}`;

  renderChapterTabs();
  renderNovelChapter();
}

function renderChapterTabs() {
  const novel = novels.find((item) => item.id === currentNovelId);
  if (!novel) return;
  const progress = state.novelProgress?.[novel.id];
  const completed = progress?.completedChapters || [];

  $("#chapterTabs").innerHTML = novel.chapters
    .map((chapter, index) => {
      const active = index === currentChapterIndex;
      const done = completed.includes(index);
      return `<button class="pill chapter-tab ${active ? "is-active" : ""} ${done ? "done" : ""}" type="button" data-chapter-index="${index}">${index + 1}</button>`;
    })
    .join("");

  $("#chapterTabs")
    .querySelectorAll("[data-chapter-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        currentChapterIndex = Number(button.dataset.chapterIndex);
        saveNovelProgress();
        renderChapterTabs();
        renderNovelChapter();
      });
    });
}

function renderNovelChapter() {
  const novel = novels.find((item) => item.id === currentNovelId);
  if (!novel) return;
  const chapter = novel.chapters[currentChapterIndex];

  $("#novelChapterProgress").textContent = `Chapter ${currentChapterIndex + 1}/${novel.chapters.length}`;
  $("#novelChapterTitle").textContent = `${chapter.title} (${chapter.subtitle})`;
  $("#novelChapterText").innerHTML = chapter.text.map((line) => `<p>${line}</p>`).join("");
  $("#novelChapterTranslation").textContent = chapter.translation;
  $("#novelChapterHints").innerHTML = chapter.hints.map((hint) => `<li>${hint}</li>`).join("");

  $("#novelChapterChecks").innerHTML = chapter.checks
    .map(
      (check, index) => `
        <div class="reading-question">
          <p>${check.prompt}</p>
          <div class="choice-grid">
            ${check.options
              .map(
                (option) =>
                  `<button class="choice" type="button" data-novel-choice data-question-index="${index}" data-answer="${check.answer}">${option}</button>`
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  $("#novelChapterChecks")
    .querySelectorAll("[data-novel-choice]")
    .forEach((button) => {
      button.addEventListener("click", () => checkNovelChoice(button));
    });

  $("#novelPrevChapter").disabled = currentChapterIndex === 0;
  $("#novelNextChapter").disabled = currentChapterIndex === novel.chapters.length - 1;
  $("#novelNextChapter").textContent =
    currentChapterIndex === novel.chapters.length - 1 ? "The end" : "Next chapter →";
}

function checkNovelChoice(button) {
  const questionIndex = button.dataset.questionIndex;
  const answer = button.dataset.answer;
  const group = $$(`#novelChapterChecks [data-question-index="${questionIndex}"]`);
  const correct = button.textContent === answer;

  group.forEach((item) => {
    item.disabled = true;
    if (item.textContent === answer) item.classList.add("is-correct");
  });
  if (!correct) button.classList.add("is-wrong");

  recordNovelCheck(correct);
}

function recordNovelCheck(correct) {
  const novel = novels.find((item) => item.id === currentNovelId);
  if (!novel) return;
  const chapter = novel.chapters[currentChapterIndex];

  state.novelProgress = state.novelProgress || {};
  const progress = state.novelProgress[novel.id] || {
    lastChapterIndex: currentChapterIndex,
    chapterStats: {},
    completedChapters: []
  };
  const key = String(currentChapterIndex);
  const stat = progress.chapterStats[key] || { correct: 0, total: 0 };
  stat.correct += correct ? 1 : 0;
  stat.total += 1;
  progress.chapterStats[key] = stat;
  if (stat.total >= chapter.checks.length && !progress.completedChapters.includes(currentChapterIndex)) {
    progress.completedChapters.push(currentChapterIndex);
  }
  state.novelProgress[novel.id] = progress;
  saveState();
  renderChapterTabs();
}

function saveNovelProgress() {
  if (!currentNovelId) return;
  state.novelProgress = state.novelProgress || {};
  const progress = state.novelProgress[currentNovelId] || { chapterStats: {}, completedChapters: [] };
  progress.lastChapterIndex = currentChapterIndex;
  state.novelProgress[currentNovelId] = progress;
  saveState();
}

function navigateChapter(delta) {
  const novel = novels.find((item) => item.id === currentNovelId);
  if (!novel) return;
  currentChapterIndex = Math.max(0, Math.min(novel.chapters.length - 1, currentChapterIndex + delta));
  saveNovelProgress();
  renderChapterTabs();
  renderNovelChapter();
}

function renderReview() {
  const completedIds = Object.keys(state.completed);
  const reviewItems = completedIds.length
    ? completedIds
        .slice(-5)
        .reverse()
        .map((id) => lessons.find((lesson) => lesson.id === id))
        .filter(Boolean)
    : lessons.slice(0, 3);

  $("#reviewList").innerHTML = reviewItems
    .map((lesson) => {
      const stat = state.exerciseStats[lesson.id];
      const score = stat?.total ? `${Math.round((stat.correct / stat.total) * 100)}%` : "not tested";
      return `
        <article class="review-item">
          <div class="meta-row">
            <span class="pill">${lesson.stage}</span>
            <span class="pill">${score}</span>
          </div>
          <h3>${lesson.title}</h3>
          <p>${lesson.focus.join(", ")}</p>
          <button class="small-action" type="button" data-review-id="${lesson.id}">Review this class</button>
        </article>
      `;
    })
    .join("");

  $("#reviewList").querySelectorAll("[data-review-id]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLessonIndex = lessons.findIndex((lesson) => lesson.id === button.dataset.reviewId);
      currentExerciseIndex = 0;
      saveState();
      showView("today");
      renderLesson();
    });
  });
}

function showView(view) {
  $$(".tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  $$(".view").forEach((section) => section.classList.remove("is-visible"));
  $(`#${view}View`).classList.add("is-visible");
}

function drawIcelandCanvas() {
  const canvas = $("#icelandCanvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, "#07111b");
  sky.addColorStop(0.46, "#11263a");
  sky.addColorStop(1, "#081018");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = 0.85;
  drawAurora(ctx, w, h, 0.18, "#72c7ae");
  ctx.globalAlpha = 0.55;
  drawAurora(ctx, w, h, 0.31, "#6d9ed6");
  ctx.globalAlpha = 1;

  drawStars(ctx, w, h);
  drawMountains(ctx, w, h, h * 0.62, "#17283a");
  drawMountains(ctx, w, h, h * 0.72, "#20364a");
  drawWater(ctx, w, h);
}

function drawAurora(ctx, w, h, offset, color) {
  ctx.beginPath();
  ctx.moveTo(0, h * offset);
  for (let x = 0; x <= w; x += 28) {
    const y = h * offset + Math.sin(x * 0.012 + offset * 9) * 26 + Math.cos(x * 0.021) * 18;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(w, h * (offset + 0.22));
  ctx.lineTo(0, h * (offset + 0.18));
  ctx.closePath();
  const gradient = ctx.createLinearGradient(0, h * offset, 0, h * (offset + 0.24));
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "rgba(8,16,24,0)");
  ctx.fillStyle = gradient;
  ctx.fill();
}

function drawStars(ctx, w, h) {
  ctx.fillStyle = "rgba(242,239,232,0.72)";
  for (let i = 0; i < 95; i += 1) {
    const x = (i * 97) % w;
    const y = ((i * 53) % Math.max(1, h * 0.56)) + 10;
    const r = i % 9 === 0 ? 1.4 : 0.8;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawMountains(ctx, w, h, base, color) {
  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(0, base);
  for (let x = 0; x <= w; x += 68) {
    const peak = base - 70 - Math.sin(x * 0.018) * 45 - (x % 3) * 8;
    ctx.lineTo(x + 34, peak);
    ctx.lineTo(x + 68, base + Math.cos(x * 0.015) * 18);
  }
  ctx.lineTo(w, h);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawWater(ctx, w, h) {
  const gradient = ctx.createLinearGradient(0, h * 0.72, 0, h);
  gradient.addColorStop(0, "rgba(16,40,57,0.86)");
  gradient.addColorStop(1, "rgba(6,12,18,0.98)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, h * 0.76, w, h * 0.24);
  ctx.strokeStyle = "rgba(214,199,166,0.18)";
  ctx.lineWidth = 1;
  for (let y = h * 0.8; y < h; y += 18) {
    ctx.beginPath();
    for (let x = 0; x <= w; x += 30) {
      const wave = y + Math.sin(x * 0.03 + y * 0.02) * 3;
      if (x === 0) ctx.moveTo(x, wave);
      else ctx.lineTo(x, wave);
    }
    ctx.stroke();
  }
}

function init() {
  renderStats();
  renderLesson();
  renderGrammarList();
  renderReading();
  renderNovelList();
  renderVocabulary();
  drawIcelandCanvas();

  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => showView(tab.dataset.view));
  });

  $("#grammarBack").addEventListener("click", closeGrammarDetail);

  $$(".mode-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".mode-tab").forEach((item) => item.classList.toggle("is-active", item === tab));
      const mode = tab.dataset.readingMode;
      $(".reading-passages-wrap").classList.toggle("is-hidden", mode !== "passages");
      $(".reading-novels-wrap").classList.toggle("is-hidden", mode !== "novels");
    });
  });

  $("#novelBack").addEventListener("click", closeNovelDetail);
  $("#novelPrevChapter").addEventListener("click", () => navigateChapter(-1));
  $("#novelNextChapter").addEventListener("click", () => navigateChapter(1));

  $("#startLesson").addEventListener("click", () => {
    showView("today");
    document.getElementById("todayView").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $("#markComplete").addEventListener("click", completeCurrentLesson);
  window.addEventListener("resize", drawIcelandCanvas);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

init();
