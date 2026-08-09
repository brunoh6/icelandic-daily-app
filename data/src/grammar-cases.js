// Lundi — grammar reference: CASES and PREPOSITIONS.
// 17 articles. cat is either "cases" or "prepositions".
// Case codes throughout: NF = nefnifall, ÞF = þolfall, ÞGF = þágufall, EF = eignarfall.
// Every example sentence here is written for Lundi and is original.

export const grammar = [

  /* ════════════════════════════════════ 1 ════════════════════════════════════ */
  {
    id: "cases-intro",
    cat: "cases",
    title: "The four cases",
    en: "Föllin fjögur",
    cefr: "A1.1",
    unit: 4,
    summary: "Icelandic marks who does what by changing the end of the word, not by fixing the word order.",
    sections: [
      {
        h: "What a case actually does",
        p: "English keeps track of the players by seating them: whoever sits before the verb is doing the action. Icelandic keeps track by dressing them. The doer wears one ending, the one being acted on wears another, and once the endings are on, the words can move around fairly freely.",
        ex: [
          ["Hundurinn bítur köttinn.", "The dog bites the cat."],
          ["Kötturinn bítur hundinn.", "The cat bites the dog."],
          ["Köttinn bítur hundurinn.", "It is the cat the dog bites."]
        ],
        tip: "Look at the third sentence. The cat comes first but still ends in -inn, so the cat is still the victim. The ending wins, not the position."
      },
      {
        h: "The four names, in the order every Icelander recites them",
        p: "Never learn them in the English order. Icelandic schoolchildren chant nefnifall, þolfall, þágufall, eignarfall, and every table in Lundi follows that order. The cue phrase in the last column is the trick natives use to force a form out of memory.",
        table: {
          cols: ["fall", "stutt", "English", "cue phrase"],
          rows: [
            ["nefnifall", "NF", "nominative", "hér er ..."],
            ["þolfall", "ÞF", "accusative", "um ..."],
            ["þágufall", "ÞGF", "dative", "frá ..."],
            ["eignarfall", "EF", "genitive", "til ..."]
          ]
        }
      },
      {
        h: "One noun, eight shapes",
        p: "Four cases in the singular and four in the plural gives eight slots. Most of them repeat, so there is far less to learn than the grid suggests.",
        table: {
          cols: ["fall", "eintala", "fleirtala"],
          rows: [
            ["NF", "hattur", "hattar"],
            ["ÞF", "hatt", "hatta"],
            ["ÞGF", "hatti", "höttum"],
            ["EF", "hatts", "hatta"]
          ]
        },
        tip: "Two free rules: every dative plural in the language ends in -um, and hatta covers both ÞF and EF plural."
      },
      {
        h: "Three questions decide the case",
        list: [
          "Is this word the doer, or does it follow vera? Then NF.",
          "Is there a preposition in front of it? Then the preposition decides, and nothing else does.",
          "Is it the thing a verb is acting on? Then the verb decides: usually ÞF, sometimes ÞGF or EF."
        ]
      },
      {
        h: "Case spreads to everything around the noun",
        p: "An article, an adjective, a number and a pronoun all copy the case of the noun they belong to. That is why a single wrong case shows up in four places at once, and why it is worth getting right early.",
        ex: [
          ["Hér er stór hvítur hestur.", "Here is a big white horse."],
          ["Ég sé stóran hvítan hest.", "I see a big white horse."],
          ["Ég kem með stórum hvítum hesti.", "I am coming with a big white horse."]
        ]
      }
    ],
    related: ["case-nominative", "case-accusative", "case-dative", "case-genitive", "case-cues"]
  },

  /* ════════════════════════════════════ 2 ════════════════════════════════════ */
  {
    id: "case-nominative",
    cat: "cases",
    title: "Nominative — nefnifall",
    en: "Nefnifall",
    cefr: "A1.1",
    unit: 4,
    summary: "The naming case: the shape a word has in the dictionary, and the case of the subject.",
    sections: [
      {
        h: "The shape you look up",
        p: "Nefnifall means literally the naming case, and that is a good description. When you meet a word in a glossary, on a shop sign or in Lundi's vocabulary list, it is standing in the nominative. Everything else is built from it.",
        ex: [
          ["Þetta er bakarí.", "This is a bakery."],
          ["Bakaríið heitir Sólbrauð.", "The bakery is called Sólbrauð."]
        ]
      },
      {
        h: "The subject wears it",
        p: "Whoever or whatever performs the action stands in the nominative, wherever it happens to sit in the sentence.",
        ex: [
          ["Anna les bók.", "Anna is reading a book."],
          ["Á morgnana les Anna bók.", "In the mornings Anna reads a book."],
          ["Lúlli situr á þakinu.", "Lúlli is sitting on the roof."]
        ],
        tip: "In the second sentence something else has taken first place, so Anna moves behind the verb. She is still the subject and still nominative."
      },
      {
        h: "After vera, verða and heita",
        p: "These three verbs put an equals sign between two things, and both sides of an equals sign are nominative. English speakers who say it is me will have to unlearn that here.",
        ex: [
          ["Jónas er kennari.", "Jónas is a teacher."],
          ["Sóley verður bakari.", "Sóley is going to be a baker."],
          ["Ég heiti Anna.", "My name is Anna."],
          ["Þetta er góður ostur.", "This is a good cheese."]
        ]
      },
      {
        h: "What a nominative looks like",
        table: {
          cols: ["kyn", "typical NF sg ending", "dæmi"],
          rows: [
            ["karlkyn", "-ur, -l, -n, -i", "hattur, stóll, steinn, skóli"],
            ["kvenkyn", "-a, -ing, or bare", "kaka, spurning, borg"],
            ["hvorugkyn", "-i, or bare", "herbergi, hús"]
          ]
        },
        tip: "A masculine -ur is an ending, not part of the stem. It comes off in the other cases: hattur, hatt, hatti, hatts."
      },
      {
        h: "Careful: an English subject is not always an Icelandic one",
        p: "A small but very common group of verbs puts the person in the accusative or dative and leaves the nominative slot empty. Nothing about the English translation warns you.",
        ex: [
          ["Ég er svangur.", "I am hungry."],
          ["Mig langar í kaffi.", "I fancy a coffee."],
          ["Mér er kalt.", "I am cold."]
        ],
        tip: "Ég in the first sentence, mig in the second, mér in the third, and all three are I in English. See the article on impersonal verbs."
      }
    ],
    related: ["cases-intro", "case-accusative", "impersonal-subjects"]
  },

  /* ════════════════════════════════════ 3 ════════════════════════════════════ */
  {
    id: "case-accusative",
    cat: "cases",
    title: "Accusative — þolfall",
    en: "Þolfall",
    cefr: "A1.1",
    unit: 4,
    summary: "The case of the thing acted on, of movement towards, and of stretches of time.",
    sections: [
      {
        h: "The thing the verb acts on",
        p: "Þolfall is the suffering case, the one that puts up with the action. Most verbs that take an object take it here, so treat the accusative as the default object case and learn the exceptions separately.",
        ex: [
          ["Ég sé hundinn.", "I see the dog."],
          ["Sóley bakar köku.", "Sóley bakes a cake."],
          ["Jónas kaupir nýjan bíl.", "Jónas is buying a new car."]
        ]
      },
      {
        h: "From nominative to accusative",
        table: {
          cols: ["orð", "NF", "ÞF"],
          rows: [
            ["hattur (kk.)", "hattur", "hatt"],
            ["skóli (kk.)", "skóli", "skóla"],
            ["kaka (kvk.)", "kaka", "köku"],
            ["borg (kvk.)", "borg", "borg"],
            ["hús (hk.)", "hús", "hús"]
          ]
        },
        tip: "Neuter nouns never change between NF and ÞF, and bare feminines like borg do not either. Half the work is already done."
      },
      {
        h: "Prepositions that always take it",
        p: "Four prepositions never give you a choice. Learn each one welded to its case.",
        ex: [
          ["Við tölum um veðrið.", "We are talking about the weather."],
          ["Þau ganga gegnum garðinn.", "They walk through the garden."],
          ["Það er girðing í kringum húsið.", "There is a fence around the house."],
          ["Anna stendur við gluggann.", "Anna is standing by the window."]
        ]
      },
      {
        h: "Movement and duration",
        p: "With the two-case prepositions í and á, the accusative is the case of arriving somewhere. It also measures out a stretch of time and picks out one named day.",
        ex: [
          ["Ég fer í bæinn.", "I am going into town."],
          ["Hún leggur símann á borðið.", "She puts the phone on the table."],
          ["Við verðum hér í þrjá daga.", "We will be here for three days."],
          ["Ég vinn á laugardaginn.", "I am working on Saturday."]
        ]
      },
      {
        h: "Frozen accusatives you say every day",
        p: "Several everyday greetings and thanks are accusative fossils. Nobody analyses them any more, but knowing why they look like that makes them stick.",
        ex: [
          ["Góðan daginn!", "Good day!"],
          ["Góða nótt!", "Good night!"],
          ["Takk fyrir matinn.", "Thanks for the meal."],
          ["Gleðilega hátíð!", "Happy holidays!"]
        ]
      }
    ],
    related: ["cases-intro", "case-dative", "prep-accusative", "prep-motion-location"]
  },

  /* ════════════════════════════════════ 4 ════════════════════════════════════ */
  {
    id: "case-dative",
    cat: "cases",
    title: "Dative — þágufall",
    en: "Þágufall",
    cefr: "A1.2",
    unit: 7,
    summary: "The case of the receiver, the tool, and of staying put where you already are.",
    sections: [
      {
        h: "The one who gets something",
        p: "Þágufall is built on þiggja, to receive, and that is exactly its first job. When a verb hands something over, the thing handed over is accusative and the person receiving it is dative.",
        ex: [
          ["Ég gef henni blóm.", "I give her flowers."],
          ["Hann sendir mér skilaboð.", "He sends me a message."],
          ["Sóley sýnir okkur bakaríið.", "Sóley shows us the bakery."]
        ],
        tip: "The order is receiver first, gift second: gef henni blóm, not gef blóm henni."
      },
      {
        h: "The tool in your hand",
        p: "Whatever you do something with goes into the dative after með. That covers instruments, and it covers the bus and the plane as well.",
        ex: [
          ["Ég skrifa með penna.", "I write with a pen."],
          ["Hann opnar dyrnar með lyklinum.", "He opens the door with the key."],
          ["Við förum með strætó.", "We take the bus."]
        ]
      },
      {
        h: "Staying where you are",
        p: "With the two-case prepositions, the dative is the case of no change. Nothing moves, nothing crosses a border, the situation simply is.",
        ex: [
          ["Anna er í eldhúsinu.", "Anna is in the kitchen."],
          ["Bókin liggur á borðinu.", "The book is lying on the table."],
          ["Lyklarnir eru undir mottunni.", "The keys are under the mat."]
        ]
      },
      {
        h: "From nominative to dative",
        table: {
          cols: ["orð", "NF", "ÞGF sg", "ÞGF pl"],
          rows: [
            ["hattur (kk.)", "hattur", "hatti", "höttum"],
            ["dagur (kk.)", "dagur", "degi", "dögum"],
            ["skóli (kk.)", "skóli", "skóla", "skólum"],
            ["kaka (kvk.)", "kaka", "köku", "kökum"],
            ["borg (kvk.)", "borg", "borg", "borgum"],
            ["hús (hk.)", "hús", "húsi", "húsum"]
          ]
        },
        tip: "Every dative plural in Icelandic ends in -um, without a single exception. That -um also drags an a in the stem over to ö: dagur but dögum."
      },
      {
        h: "Watch dagur and its friends",
        p: "Most masculine nouns in -ur simply drop the ending and add -i in the dative: hattur becomes hatti. A small group instead shifts its vowel and takes -i, and dagur is the one you will meet first.",
        ex: [
          ["Þetta gerðist á góðum degi.", "That happened on a good day."],
          ["Ég sit á hattinum mínum.", "I am sitting on my hat."]
        ]
      },
      {
        h: "Two more jobs for the dative",
        p: "The dative measures how much bigger, older or better something is, and it carries the person in a whole family of impersonal expressions.",
        ex: [
          ["Hann er tveimur árum eldri en ég.", "He is two years older than me."],
          ["Þetta er miklu betra.", "This is much better."],
          ["Mér líður vel.", "I feel fine."]
        ]
      }
    ],
    related: ["cases-intro", "verbs-with-cases", "prep-dative", "impersonal-subjects", "prep-med"]
  },

  /* ════════════════════════════════════ 5 ════════════════════════════════════ */
  {
    id: "case-genitive",
    cat: "cases",
    title: "Genitive — eignarfall",
    en: "Eignarfall",
    cefr: "A2.1",
    unit: 9,
    summary: "The case of belonging, of measurements, and of a short list of prepositions and verbs.",
    sections: [
      {
        h: "Whose is it?",
        p: "Eignarfall comes from eign, property. The owner goes into the genitive and stands after the thing owned, which is the reverse of the English order.",
        ex: [
          ["bíll Önnu", "Anna's car"],
          ["hús Jónasar", "Jónas's house"],
          ["þak hússins", "the roof of the house"],
          ["dyr bakarísins", "the door of the bakery"]
        ],
        tip: "Owner second. English says Anna's car, Icelandic says the car of Anna."
      },
      {
        h: "The endings",
        table: {
          cols: ["orð", "NF", "EF sg", "EF pl"],
          rows: [
            ["hattur (kk.)", "hattur", "hatts", "hatta"],
            ["staður (kk.)", "staður", "staðar", "staða"],
            ["borg (kvk.)", "borg", "borgar", "borga"],
            ["saga (kvk.)", "saga", "sögu", "sagna"],
            ["hús (hk.)", "hús", "húss", "húsa"]
          ]
        },
        tip: "Masculine genitives split into an -s group and an -ar group, and you have to learn which is which. Glossaries print it right after the headword."
      },
      {
        h: "Prepositions that demand it",
        p: "A handful of prepositions take nothing but the genitive. Til is by far the most frequent, and it is worth over-practising on its own.",
        ex: [
          ["Við förum til Akureyrar.", "We are going to Akureyri."],
          ["Ég drekk kaffi án sykurs.", "I drink coffee without sugar."],
          ["Bankinn er á milli búðarinnar og kirkjunnar.", "The bank is between the shop and the church."],
          ["Við komum ekki vegna veðursins.", "We are not coming because of the weather."]
        ]
      },
      {
        h: "Measuring and describing",
        p: "When a number or a quantity describes a noun, Icelandic often puts the measuring phrase in the genitive in front of it. This is the pattern behind hotel-room and age vocabulary.",
        ex: [
          ["tveggja manna herbergi", "a double room"],
          ["þriggja daga ferð", "a three-day trip"],
          ["Hún er fimm ára gömul.", "She is five years old."]
        ]
      },
      {
        h: "Names and patronymics",
        p: "An Icelandic surname is a genitive with son or dóttir stuck on it, so every name card in the country is a genitive drill.",
        ex: [
          ["Jón, sonur hans: Jónsson", "Jón, his son: Jónsson"],
          ["Guðmundur, dóttir hans: Guðmundsdóttir", "Guðmundur, his daughter: Guðmundsdóttir"],
          ["Þetta er kaffibolli Sóleyjar.", "This is Sóley's coffee cup."]
        ]
      }
    ],
    related: ["cases-intro", "prep-genitive", "verbs-with-cases"]
  },

  /* ════════════════════════════════════ 6 ════════════════════════════════════ */
  {
    id: "case-cues",
    cat: "cases",
    title: "How to spot which case you need",
    en: "Hvaða fall á að nota?",
    cefr: "A2.1",
    unit: 9,
    summary: "A practical checklist: look for the trigger word first, and never translate the English case.",
    sections: [
      {
        h: "Work from the trigger, not from the meaning",
        p: "Learners lose most of their case marks by asking what the sentence means and then guessing. Icelandic does not work that way. Something in the sentence is issuing an order, and your only job is to find it. Prepositions issue orders. Verbs issue orders. Nothing else does.",
        list: [
          "Step 1: is there a preposition immediately in front of the word? If yes, the preposition decides and you can stop.",
          "Step 2: is the word the object of a verb? Then the verb decides. Assume ÞF unless the verb is on the dative or genitive list.",
          "Step 3: is the word the subject, or does it follow vera? Then NF.",
          "Step 4: does it express possession, measurement or age? Then EF."
        ]
      },
      {
        h: "Signals and what they mean",
        table: {
          cols: ["what you see", "fall", "dæmi"],
          rows: [
            ["hér er, þarna er, þetta er", "NF", "Hér er kaffibolli."],
            ["um, gegnum, kringum, við", "ÞF", "Við tölum um bókina."],
            ["frá, hjá, úr, af, að, með (companion)", "ÞGF", "Ég kem frá Íslandi."],
            ["til, án, vegna, milli", "EF", "Ég fer til Reykjavíkur."],
            ["í, á with a movement verb", "ÞF", "Ég fer í búðina."],
            ["í, á with a standing-still verb", "ÞGF", "Ég er í búðinni."],
            ["a length of time", "ÞF", "Ég bíð í tíu mínútur."],
            ["how much older or bigger", "ÞGF", "Hún er ári yngri."]
          ]
        }
      },
      {
        h: "The four cue phrases",
        p: "Icelanders drill declensions by muttering four little phrases and letting the noun follow. Use them whenever a form will not come.",
        table: {
          cols: ["cue", "fall", "hattur", "borg"],
          rows: [
            ["hér er ...", "NF", "hattur", "borg"],
            ["um ...", "ÞF", "hatt", "borg"],
            ["frá ...", "ÞGF", "hatti", "borg"],
            ["til ...", "EF", "hatts", "borgar"]
          ]
        }
      },
      {
        h: "Traps worth memorising",
        list: [
          "A preposition beats a verb. In ég hjálpa honum með bílinn, hjálpa wants the dative but með here means bringing the car along, so bílinn is accusative.",
          "Úr, af and frá are dative even when something is clearly moving: ég kem úr skólanum.",
          "Motion does not by itself mean accusative. Only the two-case prepositions ever change.",
          "An English I is not always ég. Check whether the verb is one of the impersonal ones.",
          "A noun after a number still takes the case the sentence demands: ég sé þrjá hesta."
        ]
      }
    ],
    related: ["cases-intro", "verbs-with-cases", "prep-cases-overview", "prep-motion-location"]
  },

  /* ════════════════════════════════════ 7 ════════════════════════════════════ */
  {
    id: "verbs-with-cases",
    cat: "cases",
    title: "Verbs and the case they hand out",
    en: "Fallstjórn sagna",
    cefr: "A2.1",
    unit: 9,
    summary: "Most verbs give their object the accusative, but an important minority insist on the dative or the genitive.",
    sections: [
      {
        h: "The default and the exceptions",
        p: "If you know nothing about a verb, put its object in the accusative and you will be right most of the time. The exceptions are not random leftovers, though: they are some of the most useful verbs in the language, so learn each one together with its case, the way you would learn a noun with its gender.",
        ex: [
          ["Ég sé bílinn.", "I see the car."],
          ["Ég keyri bílinn.", "I drive the car."],
          ["Ég gleymi bílnum.", "I forget the car."]
        ]
      },
      {
        h: "Verbs with a dative object",
        table: {
          cols: ["sögn", "English", "dæmi"],
          rows: [
            ["hjálpa", "help", "Ég hjálpa Sóleyju í bakaríinu."],
            ["svara", "answer", "Hún svarar símanum."],
            ["loka", "close", "Sóley lokar bakaríinu klukkan sex."],
            ["gleyma", "forget", "Ég gleymi alltaf lyklunum."],
            ["týna", "lose", "Hann týnir símanum sínum."],
            ["ná", "catch, reach", "Ég næ strætó klukkan átta."],
            ["breyta", "change", "Við breytum áætluninni."],
            ["bjarga", "save, rescue", "Lúlli bjargar deginum."],
            ["skila", "return something", "Ég skila bókinni á bókasafnið."],
            ["henda", "throw", "Hann hendir boltanum."],
            ["stela", "steal", "Lúlli stelur samlokunni."],
            ["heilsa", "greet", "Hún heilsar nágrannanum."],
            ["mæta", "run into", "Við mætum Jónasi á götunni."],
            ["fylgja", "accompany", "Ég fylgi þér heim."],
            ["treysta", "trust", "Ég treysti þér."],
            ["trúa", "believe", "Hún trúir mér ekki."],
            ["hlýða", "obey", "Hundurinn hlýðir Önnu."],
            ["neita", "refuse", "Hann neitar boðinu."],
            ["aka", "drive a vehicle", "Jónas ekur bílnum varlega."]
          ]
        },
        tip: "Notice how many of them involve doing something to a person or making contact with something. That is the old sense of the dative peeking through."
      },
      {
        h: "Verbs with a genitive object",
        table: {
          cols: ["sögn", "English", "dæmi"],
          rows: [
            ["sakna", "miss", "Ég sakna Íslands."],
            ["njóta", "enjoy", "Við njótum kvöldsins."],
            ["bíða", "await", "Hún bíður mín."],
            ["gæta", "look after", "Anna gætir barnanna."],
            ["krefjast", "demand", "Hann krefst svars."],
            ["minnast", "recall, commemorate", "Við minnumst ferðarinnar."],
            ["óska", "wish", "Ég óska þér alls góðs."]
          ]
        },
        tip: "This list is short and it stays short. Learn these seven and you have covered nearly every genitive object you will meet at A2."
      },
      {
        h: "Verbs with two objects",
        p: "Giving, sending and showing verbs take a dative person and an accusative thing, in that order.",
        table: {
          cols: ["sögn", "pattern", "dæmi"],
          rows: [
            ["gefa", "e-m (ÞGF) e-ð (ÞF)", "Ég gef henni blóm."],
            ["senda", "e-m e-ð", "Hann sendir mér skilaboð."],
            ["sýna", "e-m e-ð", "Sóley sýnir okkur bakaríið."],
            ["lána", "e-m e-ð", "Ég lána þér bókina."],
            ["segja", "e-m e-ð", "Hún segir börnunum sögu."]
          ]
        }
      },
      {
        h: "Verbs that need a preposition first",
        p: "Some verbs reach their object through a fixed preposition, and then the preposition sets the case, not the verb.",
        table: {
          cols: ["sögn + forsetning", "fall", "dæmi"],
          rows: [
            ["bíða eftir", "ÞGF", "Ég bíð eftir strætó."],
            ["leita að", "ÞGF", "Hann leitar að lyklunum."],
            ["hlusta á", "ÞF", "Við hlustum á útvarpið."],
            ["horfa á", "ÞF", "Þau horfa á myndina."],
            ["hugsa um", "ÞF", "Ég hugsa um þig."],
            ["tala við", "ÞF", "Anna talar við kennarann."],
            ["spyrja um", "ÞF", "Hann spyr um verðið."]
          ]
        },
        tip: "Bíða exists in both shapes: bíða eftir strætó in speech, bíða strætó in formal writing. Use the eftir version."
      }
    ],
    related: ["case-dative", "case-genitive", "case-cues", "impersonal-subjects"]
  },

  /* ════════════════════════════════════ 8 ════════════════════════════════════ */
  {
    id: "impersonal-subjects",
    cat: "cases",
    title: "When I is not ég",
    en: "Ópersónulegar sagnir",
    cefr: "A1.2",
    unit: 8,
    summary: "A family of everyday verbs puts the person in the dative or the accusative and freezes the verb in the third person.",
    sections: [
      {
        h: "The person is not the subject",
        p: "Wanting, needing, feeling cold and finding something funny are all things that happen to you rather than things you do. Icelandic takes that literally. The person is demoted out of the nominative and the verb stops agreeing with anybody, sitting in the third person singular forever.",
        ex: [
          ["Ég er svangur.", "I am hungry."],
          ["Mig langar í samloku.", "I feel like a sandwich."],
          ["Mér finnst þetta gott.", "I think this is good."]
        ],
        tip: "Ég, mig, mér. The first sentence is ordinary, the other two are not. There is no clue in the English."
      },
      {
        h: "Dative person",
        table: {
          cols: ["orðasamband", "English", "dæmi"],
          rows: [
            ["mér finnst", "I think, I find", "Mér finnst íslenska skemmtileg."],
            ["mér líkar", "I like", "Mér líkar vel við nágrannann."],
            ["mér líður", "I feel", "Mér líður vel í dag."],
            ["mér er kalt", "I am cold", "Mér er kalt í höndunum."],
            ["mér leiðist", "I am bored", "Mér leiðist í rigningunni."],
            ["mér þykir vænt um", "I am fond of", "Mér þykir vænt um þennan bæ."],
            ["mér tekst", "I manage", "Honum tekst alltaf að finna Lúlla."],
            ["mér sýnist", "it looks to me", "Mér sýnist þetta vera rétt."],
            ["mér er illt í", "my ... hurts", "Mér er illt í maganum."]
          ]
        }
      },
      {
        h: "Accusative person",
        table: {
          cols: ["orðasamband", "English", "dæmi"],
          rows: [
            ["mig langar í", "I want, I fancy", "Mig langar í kaffi."],
            ["mig langar að", "I want to", "Mig langar að læra íslensku."],
            ["mig vantar", "I need, I lack", "Mig vantar hjálp."],
            ["mig dreymir", "I dream", "Mig dreymir oft um sjóinn."],
            ["mig minnir", "I seem to recall", "Mig minnir að hann heiti Jónas."],
            ["mig grunar", "I suspect", "Mig grunar að Lúlli sé á þakinu."],
            ["mig svimar", "I am dizzy", "Mig svimar svolítið."]
          ]
        }
      },
      {
        h: "The verb never moves",
        p: "Because there is no nominative subject to agree with, the verb stays in the third person singular no matter who is involved. Only the pronoun changes.",
        table: {
          cols: ["persóna", "ÞGF pattern", "ÞF pattern"],
          rows: [
            ["ég", "mér finnst", "mig langar"],
            ["þú", "þér finnst", "þig langar"],
            ["hann", "honum finnst", "hann langar"],
            ["hún", "henni finnst", "hana langar"],
            ["við", "okkur finnst", "okkur langar"],
            ["þið", "ykkur finnst", "ykkur langar"],
            ["þeir", "þeim finnst", "þá langar"]
          ]
        },
        tip: "Finnst and langar never become finnast or langa here, however many people are involved."
      },
      {
        h: "One that people get wrong",
        p: "You will hear mig hlakkar til for looking forward to something, but the standard form keeps the ordinary nominative. Lundi teaches the standard version.",
        ex: [
          ["Ég hlakka til helgarinnar.", "I am looking forward to the weekend."],
          ["Við hlökkum til að sjá þig.", "We are looking forward to seeing you."]
        ]
      }
    ],
    related: ["case-dative", "case-accusative", "verbs-with-cases"]
  },

  /* ════════════════════════════════════ 9 ════════════════════════════════════ */
  {
    id: "prep-cases-overview",
    cat: "prepositions",
    title: "Prepositions and their cases",
    en: "Forsetningar og föll",
    cefr: "A1.2",
    unit: 7,
    summary: "Every Icelandic preposition governs a case. Some govern one case forever, seven of them let you choose.",
    sections: [
      {
        h: "A preposition is never alone",
        p: "In Icelandic a preposition is half a word. The other half is the case it hands to whatever follows it, and the two are inseparable. Learn til plus genitive as a single item, the way you learn kaka as feminine. If you learn the preposition on its own you have learnt nothing usable.",
        ex: [
          ["Ég fer til Reykjavíkur.", "I am going to Reykjavík."],
          ["Ég kem frá Reykjavík.", "I am coming from Reykjavík."],
          ["Ég bý í Reykjavík.", "I live in Reykjavík."]
        ],
        tip: "Same city, three prepositions, and only til changes its shape. That is the case at work."
      },
      {
        h: "The three fixed groups",
        table: {
          cols: ["fall", "forsetningar", "dæmi"],
          rows: [
            ["ÞF", "um, gegnum, kringum, við, umfram", "Við göngum um bæinn."],
            ["ÞGF", "að, frá, af, hjá, úr, handa, undan, nálægt, gegn, ásamt, meðfram, gagnvart", "Hún býr hjá ömmu sinni."],
            ["EF", "til, án, auk, milli, vegna, sökum, innan, utan, handan, meðal", "Ég kem án hans."]
          ]
        },
        tip: "These never change. Not for motion, not for time, not for anything."
      },
      {
        h: "The seven that make you choose",
        p: "Í, á, undir, yfir, fyrir, eftir and með take either the accusative or the dative, and the choice carries meaning. This is where nearly all preposition errors happen, and it has its own articles in Lundi.",
        table: {
          cols: ["forsetning", "with ÞF", "with ÞGF"],
          rows: [
            ["í", "into", "in"],
            ["á", "onto, one named day", "on, repeated days"],
            ["undir", "in under", "underneath"],
            ["yfir", "across", "above"],
            ["fyrir", "for, before a time", "in front of, ago"],
            ["eftir", "after, by an author", "along, behind"],
            ["með", "bringing along", "together with, by means of"]
          ]
        }
      },
      {
        h: "The ten you will use most",
        list: [
          "í - in, into: the most frequent preposition in the language",
          "á - on, onto, at",
          "til - to a place or person, always EF",
          "frá - from, always ÞGF",
          "hjá - at somebody's place, always ÞGF",
          "með - with, ÞGF or ÞF",
          "um - about, around, always ÞF",
          "eftir - after, along, by",
          "fyrir - for, in front of, ago",
          "úr - out of, always ÞGF"
        ]
      }
    ],
    related: ["prep-accusative", "prep-dative", "prep-genitive", "prep-two-case", "prep-motion-location"]
  },

  /* ════════════════════════════════════ 10 ═══════════════════════════════════ */
  {
    id: "prep-accusative",
    cat: "prepositions",
    title: "Prepositions that always take the accusative",
    en: "Forsetningar með þolfalli",
    cefr: "A1.2",
    unit: 7,
    summary: "Um, gegnum, kringum and við hand out the accusative and never anything else.",
    sections: [
      {
        h: "The short list",
        p: "This is the smallest of the three fixed groups, which is good news: once you recognise these four you can put the noun into the accusative without another thought.",
        table: {
          cols: ["forsetning", "English", "dæmi"],
          rows: [
            ["um", "about, around, during", "Við tölum um veðrið."],
            ["gegnum", "through", "Lestin fer gegnum fjallið."],
            ["kringum", "around", "Það er girðing í kringum húsið."],
            ["við", "by, at, against, with", "Anna stendur við gluggann."],
            ["umfram", "beyond, more than", "Þetta er umfram allt gott kaffi."]
          ]
        }
      },
      {
        h: "Um does a lot of work",
        p: "Um is the ordinary word for about a topic, but it also traces a route around or through a space, and it marks the stretch of time during which something happens.",
        ex: [
          ["Hann skrifar bók um Ísland.", "He is writing a book about Iceland."],
          ["Við gengum um miðbæinn.", "We walked around the town centre."],
          ["Ég vinn ekki um helgina.", "I am not working over the weekend."],
          ["Um nóttina rigndi mikið.", "During the night it rained a lot."]
        ]
      },
      {
        h: "Við is the awkward one",
        p: "Við means at, by, against or with, depending on the verb it hangs off. Treat it as accusative always and you will be right in modern spoken Icelandic.",
        ex: [
          ["Ég tala við hana á hverjum degi.", "I talk to her every day."],
          ["Bíllinn stendur við húsið.", "The car is parked by the house."],
          ["Sóley vinnur við hliðina á bakaríinu.", "Sóley works next to the bakery."]
        ],
        tip: "Do not confuse the preposition við with the pronoun við, we. Position tells them apart: the pronoun stands before the verb, the preposition after it."
      },
      {
        h: "Gegnum or í gegnum?",
        p: "Both are correct and both take the accusative. In speech people usually add the í.",
        ex: [
          ["Við keyrðum í gegnum bæinn.", "We drove through the village."],
          ["Sólin skín gegnum gluggann.", "The sun shines through the window."]
        ]
      }
    ],
    related: ["case-accusative", "prep-cases-overview", "prep-dative"]
  },

  /* ════════════════════════════════════ 11 ═══════════════════════════════════ */
  {
    id: "prep-dative",
    cat: "prepositions",
    title: "Prepositions that always take the dative",
    en: "Forsetningar með þágufalli",
    cefr: "A1.2",
    unit: 7,
    summary: "Frá, hjá, úr, af, að and their neighbours are dative whatever the sentence is doing.",
    sections: [
      {
        h: "The list",
        table: {
          cols: ["forsetning", "English", "dæmi"],
          rows: [
            ["frá", "from", "Ég kem frá Perú."],
            ["að", "up to, towards", "Hún gengur að dyrunum."],
            ["hjá", "at somebody's place, beside", "Anna er heima hjá Jónasi."],
            ["úr", "out of", "Ég fer úr skónum."],
            ["af", "off, from the surface of", "Taktu bókina af borðinu."],
            ["handa", "for the benefit of", "Þetta er handa þér."],
            ["undan", "out from under", "Kötturinn kemur undan bílnum."],
            ["nálægt", "near", "Hótelið er nálægt miðbænum."],
            ["gegn", "against", "Hann er gegn þessari hugmynd."],
            ["ásamt", "together with", "Hún kom ásamt systur sinni."],
            ["meðfram", "along", "Við keyrum meðfram ströndinni."],
            ["gagnvart", "towards, in relation to", "Hann er vingjarnlegur gagnvart öllum."]
          ]
        }
      },
      {
        h: "Movement does not make them accusative",
        p: "This is the single most useful thing to know about the group. Úr, af and frá all describe something leaving a place, so learners reach for the accusative out of habit. It is always the dative.",
        ex: [
          ["Ég kem úr skólanum.", "I am coming out of school."],
          ["Fuglinn flýgur af þakinu.", "The bird flies off the roof."],
          ["Rútan fer frá Akureyri klukkan sjö.", "The coach leaves Akureyri at seven."]
        ],
        tip: "Only the seven two-case prepositions ever switch. Everything else is frozen."
      },
      {
        h: "Pairs that go in and out",
        p: "Three of the two-case prepositions have a fixed dative partner for the opposite direction. Learn them as pairs and half the work disappears.",
        table: {
          cols: ["into or onto", "out of or off", "dæmi"],
          rows: [
            ["í + ÞF", "úr + ÞGF", "Ég fer í peysuna og svo úr peysunni."],
            ["á + ÞF", "af + ÞGF", "Ég set bókina á borðið og tek hana af borðinu."],
            ["undir + ÞF", "undan + ÞGF", "Boltinn fór undir bílinn og kom undan bílnum."]
          ]
        }
      },
      {
        h: "Hjá is not the same as í",
        p: "Hjá means at a person's place or in a person's company. Buildings and towns take í or á instead.",
        ex: [
          ["Ég er hjá Sóleyju.", "I am at Sóley's place."],
          ["Ég er í bakaríinu.", "I am in the bakery."],
          ["Hann vinnur hjá stóru fyrirtæki.", "He works for a big company."]
        ]
      }
    ],
    related: ["case-dative", "prep-cases-overview", "prep-motion-location", "prep-med"]
  },

  /* ════════════════════════════════════ 12 ═══════════════════════════════════ */
  {
    id: "prep-genitive",
    cat: "prepositions",
    title: "Prepositions that take the genitive",
    en: "Forsetningar með eignarfalli",
    cefr: "A2.1",
    unit: 9,
    summary: "A closed set headed by til, plus án, vegna and milli, all of which demand the genitive.",
    sections: [
      {
        h: "The list",
        table: {
          cols: ["forsetning", "English", "dæmi"],
          rows: [
            ["til", "to", "Við förum til Íslands."],
            ["án", "without", "Ég drekk kaffi án sykurs."],
            ["auk", "besides, in addition to", "Auk þess er hann góður kokkur."],
            ["milli", "between", "Bankinn er á milli búðarinnar og kirkjunnar."],
            ["vegna", "because of", "Við komum ekki vegna veðursins."],
            ["sökum", "on account of", "Sökum veikinda er lokað í dag."],
            ["innan", "within", "Ég kem innan viku."],
            ["utan", "outside of", "Hann býr utan bæjarins."],
            ["handan", "beyond, on the other side of", "Fjallið er handan fjarðarins."],
            ["meðal", "among", "Þetta er algengt meðal ferðamanna."]
          ]
        }
      },
      {
        h: "Til is the one to drill",
        p: "Til carries almost all the traffic in this group. It handles going to a place, going to a person, and belonging to a purpose, and it forces a genitive every single time.",
        ex: [
          ["Ég fer til Akureyrar á morgun.", "I am going to Akureyri tomorrow."],
          ["Komdu til mín klukkan átta.", "Come to my place at eight."],
          ["Þau flytja til Danmerkur.", "They are moving to Denmark."],
          ["Þetta er gjöf til ömmu minnar.", "This is a present for my grandmother."]
        ],
        tip: "Til plus a person means to their house: til mín, til þín, til hennar, til Jónasar."
      },
      {
        h: "Pronouns after a genitive preposition",
        table: {
          cols: ["NF", "EF", "með til"],
          rows: [
            ["ég", "mín", "til mín"],
            ["þú", "þín", "til þín"],
            ["hann", "hans", "til hans"],
            ["hún", "hennar", "til hennar"],
            ["við", "okkar", "til okkar"],
            ["þið", "ykkar", "til ykkar"],
            ["þeir", "þeirra", "til þeirra"]
          ]
        }
      },
      {
        h: "Milli and á milli",
        p: "Both forms are used and both govern the genitive. Two things joined by og both go into the genitive.",
        ex: [
          ["Bíllinn stendur milli húsanna.", "The car is parked between the houses."],
          ["Ég vinn á milli níu og fimm.", "I work between nine and five."]
        ]
      }
    ],
    related: ["case-genitive", "prep-cases-overview"]
  },

  /* ════════════════════════════════════ 13 ═══════════════════════════════════ */
  {
    id: "prep-two-case",
    cat: "prepositions",
    title: "The seven two-case prepositions",
    en: "Forsetningar með tveimur föllum",
    cefr: "A1.2",
    unit: 7,
    summary: "Í, á, undir, yfir, fyrir, eftir and með take the accusative for change and the dative for no change.",
    sections: [
      {
        h: "One preposition, two meanings",
        p: "Seven prepositions refuse to commit to a case, and instead let the case do some of the meaning. The underlying idea is the same in all seven: the accusative marks a change, a crossing, a boundary being passed, and the dative marks a situation that is simply the case.",
        table: {
          cols: ["forsetning", "ÞF - change", "ÞGF - no change"],
          rows: [
            ["í", "Ég fer í bæinn.", "Ég er í bænum."],
            ["á", "Ég set bókina á borðið.", "Bókin er á borðinu."],
            ["undir", "Boltinn fer undir bílinn.", "Boltinn er undir bílnum."],
            ["yfir", "Við göngum yfir brúna.", "Lampinn hangir yfir borðinu."],
            ["fyrir", "Þetta er fyrir þig.", "Bíllinn stendur fyrir húsinu."],
            ["eftir", "Ég kem eftir þrjá daga.", "Ég geng eftir götunni."],
            ["með", "Sóley kemur með kökurnar.", "Ég kem með þér."]
          ]
        }
      },
      {
        h: "The full contrast: time, place and everything else",
        p: "Four of the seven are genuinely three-way. This table is the one worth photographing and keeping. Read it column by column, not row by row.",
        table: {
          cols: ["forsetning", "time", "place", "other"],
          rows: [
            ["fyrir", "ago - ÞGF: fyrir þremur dögum", "in front of - ÞGF: fyrir glugganum", "for, meant for - ÞF: fyrir mig"],
            ["í", "for a stretch - ÞF: í þrjá daga", "in - ÞGF: í bænum / into - ÞF: í bæinn", "wearing - ÞGF: í rauðri peysu"],
            ["eftir", "after - ÞF: eftir þrjá daga", "along, behind - ÞGF: eftir götunni", "by an author - ÞF: bók eftir hana"],
            ["á", "one named day - ÞF: á sunnudaginn / every such day - ÞGF: á sunnudögum", "on - ÞGF: á borðinu / onto - ÞF: á borðið", "at an event - ÞGF: á tónleikum"]
          ]
        },
        tip: "Fyrir is upside down compared to the others: the dative is the time use here, not the accusative."
      },
      {
        h: "Fyrir in detail",
        p: "Fyrir is the trickiest of the seven because its two cases feel unrelated. Split it in your head into for somebody, which is accusative, and everything spatial or backward-looking, which is dative.",
        ex: [
          ["Ég keypti blóm fyrir hana.", "I bought flowers for her."],
          ["Við borðum fyrir klukkan sjö.", "We eat before seven."],
          ["Hann stendur fyrir framan bakaríið.", "He is standing in front of the bakery."],
          ["Ég flutti hingað fyrir tveimur árum.", "I moved here two years ago."]
        ],
        tip: "Fyrir framan and fyrir aftan are fixed compounds and always take the accusative: fyrir framan húsið."
      },
      {
        h: "Eftir in detail",
        p: "Eftir means after in time and along or behind in space, and the case follows that split exactly.",
        ex: [
          ["Ég hringi í þig eftir hádegi.", "I will ring you after midday."],
          ["Við göngum eftir ströndinni.", "We walk along the beach."],
          ["Þetta er bók eftir Sóleyju.", "This is a book by Sóley."],
          ["Hundurinn hleypur á eftir Lúlla.", "The dog runs after Lúlli."]
        ]
      }
    ],
    related: ["prep-motion-location", "prep-time", "prep-med", "prep-cases-overview"]
  },

  /* ════════════════════════════════════ 14 ═══════════════════════════════════ */
  {
    id: "prep-motion-location",
    cat: "prepositions",
    title: "Motion or location? The one rule that fixes everything",
    en: "Hreyfing eða kyrrstaða",
    cefr: "A1.2",
    unit: 7,
    summary: "The flagship article: how to choose between accusative and dative after í, á, undir and yfir, with a wall of minimal pairs.",
    sections: [
      {
        h: "Ask one question",
        p: "Does the sentence describe something arriving somewhere it was not before? If yes, use the accusative. If the sentence describes a state of affairs that stays as it is, use the dative. That is the whole rule, and it is worth more than any list of examples, because it generalises to prepositions you have not met yet.",
        ex: [
          ["Ég fer í eldhúsið.", "I go into the kitchen."],
          ["Ég er í eldhúsinu.", "I am in the kitchen."]
        ],
        tip: "A useful mental picture: the accusative draws an arrow, the dative draws a dot."
      },
      {
        h: "The wall of minimal pairs",
        p: "Read each row across. The noun is identical, the preposition is identical, and only the case moves. Say both halves out loud until the difference stops feeling strange.",
        table: {
          cols: ["hreyfing - ÞF", "kyrrstaða - ÞGF", "English"],
          rows: [
            ["Ég fer í bæinn.", "Ég er í bænum.", "into town / in town"],
            ["Anna fer í skólann.", "Anna er í skólanum.", "to school / at school"],
            ["Ég set mjólkina í ísskápinn.", "Mjólkin er í ísskápnum.", "into the fridge / in the fridge"],
            ["Ég set peysuna í skápinn.", "Peysan er í skápnum.", "into the cupboard / in the cupboard"],
            ["Hundurinn hoppar upp í rúmið.", "Hundurinn sefur í rúminu.", "into the bed / in the bed"],
            ["Ég legg bókina á borðið.", "Bókin liggur á borðinu.", "onto the table / on the table"],
            ["Lúlli flýgur upp á þakið.", "Lúlli situr á þakinu.", "onto the roof / on the roof"],
            ["Við förum á kaffihúsið.", "Við sitjum á kaffihúsinu.", "to the cafe / at the cafe"],
            ["Ég set lyklana undir mottuna.", "Lyklarnir eru undir mottunni.", "under the mat, arriving / lying there"],
            ["Kötturinn skríður undir borðið.", "Kötturinn sefur undir borðinu.", "under the table, arriving / lying there"],
            ["Fuglinn flýgur yfir húsið.", "Lampinn hangir yfir borðinu.", "over the house / above the table"],
            ["Ég fer í vinnuna klukkan átta.", "Ég er í vinnunni allan daginn.", "to work / at work"]
          ]
        }
      },
      {
        h: "The verb usually tells you first",
        p: "You rarely have to think about the preposition at all, because the verb has already decided. Sort your verbs into arrows and dots and the case follows automatically.",
        table: {
          cols: ["arrow verbs - ÞF", "dot verbs - ÞGF"],
          rows: [
            ["fara, koma, ganga, hlaupa, fljúga", "vera, búa, vinna, bíða"],
            ["setja, leggja, hengja, henda", "sitja, liggja, hanga, standa"],
            ["flytja, keyra inn, hoppa", "sofa, borða, lesa, hvíla sig"]
          ]
        },
        tip: "The classic pairs are worth memorising as pairs: liggja and leggja, sitja and setja, hanga and hengja. One of each pair is a dot, the other is an arrow."
      },
      {
        h: "Dot and arrow, side by side",
        ex: [
          ["Ég ligg í sófanum.", "I am lying on the sofa."],
          ["Ég legg símann í sófann.", "I put the phone down on the sofa."],
          ["Kápan hangir í fataskápnum.", "The coat is hanging in the wardrobe."],
          ["Ég hengi kápuna í fataskápinn.", "I hang the coat in the wardrobe."],
          ["Ég sit á stólnum.", "I am sitting on the chair."],
          ["Ég sest á stólinn.", "I sit down on the chair."]
        ]
      },
      {
        h: "Clothes are the best drill in the language",
        p: "Getting dressed is an arrow, being dressed is a dot, and getting undressed uses the fixed dative preposition úr. Three cases in one wardrobe.",
        ex: [
          ["Ég fer í rauða peysu.", "I put on a red sweater."],
          ["Ég er í rauðri peysu.", "I am wearing a red sweater."],
          ["Ég fer úr rauðu peysunni.", "I take off the red sweater."],
          ["Hann fer í skóna.", "He puts his shoes on."],
          ["Hann er í skónum.", "He has his shoes on."]
        ]
      },
      {
        h: "Three traps",
        list: [
          "Úr, af, frá and til never change. Ég kem úr skólanum is dative even though I am clearly moving.",
          "Í and á with a period of time are accusative even when nothing moves: ég bíð í tíu mínútur.",
          "An adverb of direction in front of the preposition does not change anything. Upp á þakið is accusative because of the arrow, not because of upp."
        ]
      },
      {
        h: "Where and where to",
        p: "Icelandic even splits the question word. Hvar asks for a dot and expects a dative answer, hvert asks for an arrow and expects an accusative one.",
        table: {
          cols: ["question", "expects", "svar"],
          rows: [
            ["Hvar ertu?", "ÞGF", "Ég er í bakaríinu."],
            ["Hvert ferðu?", "ÞF", "Ég fer í bakaríið."],
            ["Hvaðan kemurðu?", "ÞGF", "Ég kem úr bakaríinu."]
          ]
        }
      }
    ],
    related: ["prep-two-case", "prep-dative", "prep-i-a-places", "case-cues", "case-accusative"]
  },

  /* ════════════════════════════════════ 15 ═══════════════════════════════════ */
  {
    id: "prep-time",
    cat: "prepositions",
    title: "Saying when",
    en: "Forsetningar og tími",
    cefr: "A1.2",
    unit: 8,
    summary: "Which preposition and which case for clock times, days, months, seasons, durations and points in the past.",
    sections: [
      {
        h: "The clock takes no preposition",
        p: "Where English says at seven, Icelandic simply says the clock seven. There is nothing in front of klukkan.",
        ex: [
          ["Ég vakna klukkan sjö.", "I wake up at seven."],
          ["Búðin opnar klukkan tíu.", "The shop opens at ten."],
          ["Klukkan er korter yfir átta.", "It is a quarter past eight."]
        ]
      },
      {
        h: "One day or every day",
        p: "This is the highest-value distinction in the whole topic. A single named occasion takes á plus the accusative singular; a habit takes á plus the dative plural.",
        table: {
          cols: ["eitt skipti - ÞF", "alltaf - ÞGF", "English"],
          rows: [
            ["á mánudaginn", "á mánudögum", "on Monday / on Mondays"],
            ["á laugardaginn", "á laugardögum", "on Saturday / on Saturdays"],
            ["í morgun", "á morgnana", "this morning / in the mornings"],
            ["um kvöldið", "á kvöldin", "that evening / in the evenings"],
            ["í nótt", "á nóttunni", "tonight / at night"]
          ]
        },
        tip: "If you can put every in front of the English, use the dative form."
      },
      {
        h: "The whole timetable",
        table: {
          cols: ["íslenska", "English", "fall"],
          rows: [
            ["í dag", "today", "fast phrase"],
            ["í gær", "yesterday", "fast phrase"],
            ["á morgun", "tomorrow", "fast phrase"],
            ["í fyrradag", "the day before yesterday", "fast phrase"],
            ["í morgun", "this morning", "fast phrase"],
            ["í kvöld", "this evening", "fast phrase"],
            ["í janúar", "in January", "unchanged"],
            ["í sumar", "this summer", "fast phrase"],
            ["á sumrin", "in the summers", "ÞGF"],
            ["um helgina", "over the weekend", "ÞF"],
            ["í þrjá daga", "for three days", "ÞF"],
            ["eftir þrjá daga", "in three days", "ÞF"],
            ["fyrir þremur dögum", "three days ago", "ÞGF"],
            ["fyrir klukkan sjö", "before seven", "ÞF"],
            ["frá níu til fimm", "from nine to five", "EF after til"]
          ]
        }
      },
      {
        h: "Forwards, backwards and how long",
        p: "Three phrases look alike and mean quite different things. Learn them as a set of three, always together.",
        ex: [
          ["Ég verð hér í tvær vikur.", "I will be here for two weeks."],
          ["Ég kem eftir tvær vikur.", "I am coming in two weeks."],
          ["Ég kom fyrir tveimur vikum.", "I came two weeks ago."]
        ],
        tip: "Only the last one is dative, and the giveaway is the numeral: tveimur instead of tvær."
      },
      {
        h: "Months and seasons",
        p: "Month names take í and never change shape. Seasons behave like days: one particular season takes í, the repeated one takes á plus the dative plural.",
        ex: [
          ["Við giftum okkur í júní.", "We are getting married in June."],
          ["Í vetur ætla ég að læra íslensku.", "This winter I am going to learn Icelandic."],
          ["Á veturna er dimmt á Íslandi.", "In the winters it is dark in Iceland."]
        ]
      }
    ],
    related: ["prep-two-case", "prep-accusative", "prep-cases-overview"]
  },

  /* ════════════════════════════════════ 16 ═══════════════════════════════════ */
  {
    id: "prep-med",
    cat: "prepositions",
    title: "Með: dative or accusative?",
    en: "Forsetningin með",
    cefr: "A1.2",
    unit: 8,
    summary: "Með takes the dative for a companion or a tool, and the accusative for whatever you are bringing along.",
    sections: [
      {
        h: "Who is in charge?",
        p: "Með is the only two-case preposition where the choice is not about motion. It is about control. If the other party comes along under their own steam, they are dative. If you are the one moving them, carrying them or holding them, they are accusative.",
        ex: [
          ["Ég fer með Jónasi í bíó.", "I am going to the cinema with Jónas."],
          ["Ég fer með hundinn í göngutúr.", "I am taking the dog for a walk."]
        ],
        tip: "Jónas walks himself, so he is dative. The dog is being taken, so it is accusative."
      },
      {
        h: "Dative með",
        table: {
          cols: ["notkun", "dæmi", "English"],
          rows: [
            ["a companion", "Ég kem með þér.", "I am coming with you."],
            ["a tool", "Hann skrifar með blýanti.", "He writes with a pencil."],
            ["means of transport", "Við förum með strætó.", "We go by bus."],
            ["means of transport", "Þau fljúga með flugvél til Íslands.", "They fly to Iceland by plane."],
            ["what goes with the food", "Ég vil kaffi með mjólk.", "I would like coffee with milk."]
          ]
        }
      },
      {
        h: "Accusative með",
        table: {
          cols: ["notkun", "dæmi", "English"],
          rows: [
            ["bringing something", "Sóley kemur með kökurnar.", "Sóley is bringing the cakes."],
            ["taking somebody", "Anna fer með börnin í sund.", "Anna takes the children swimming."],
            ["vera með = to have on you", "Ég er með lyklana.", "I have the keys on me."],
            ["vera með = to be experiencing", "Hann er með höfuðverk.", "He has a headache."],
            ["vera með = to be wearing or holding", "Lúlli er með fisk í nefinu.", "Lúlli has a fish in his beak."]
          ]
        }
      },
      {
        h: "Vera með is how Icelandic says have",
        p: "Icelandic has the verbs eiga and hafa, but for something you are carrying, wearing or suffering from right now, the everyday phrase is vera með plus the accusative. Beginners can get a very long way on this one pattern.",
        ex: [
          ["Ertu með síma?", "Do you have a phone on you?"],
          ["Ég er ekki með pening.", "I do not have any money on me."],
          ["Hún er með nýja tösku.", "She has a new bag with her."],
          ["Ég er með kvef.", "I have a cold."]
        ],
        tip: "Eiga is for owning something in general, vera með is for having it here and now: ég á bíl but ég er með bílinn í dag."
      },
      {
        h: "One sentence, both cases",
        p: "Because the two uses are so close, they can turn up in the same breath. Read the pair below slowly.",
        ex: [
          ["Ég kem með Sóleyju og hún kemur með kaffið.", "I am coming with Sóley and she is bringing the coffee."],
          ["Jónas fer með Önnu og Anna fer með hundinn.", "Jónas goes with Anna and Anna takes the dog."]
        ]
      }
    ],
    related: ["prep-two-case", "case-dative", "case-accusative"]
  },

  /* ════════════════════════════════════ 17 ═══════════════════════════════════ */
  {
    id: "prep-i-a-places",
    cat: "prepositions",
    title: "Í or á with places",
    en: "Í eða á",
    cefr: "A1.2",
    unit: 8,
    summary: "Which places take í and which take á, from countries and towns to shops, libraries and concerts.",
    sections: [
      {
        h: "There is a pattern, but you still learn the list",
        p: "Roughly, í is for somewhere you go inside and á is for somewhere open, flat or exposed. That explains á Íslandi and í bakaríinu, but it will not predict every case, so treat the frequent ones as vocabulary and attach the preposition to the place name the way you attach a gender to a noun.",
        ex: [
          ["Ég bý á Íslandi.", "I live in Iceland."],
          ["Ég bý í Reykjavík.", "I live in Reykjavík."]
        ]
      },
      {
        h: "Countries",
        table: {
          cols: ["með í", "með á"],
          rows: [
            ["í Danmörku", "á Íslandi"],
            ["í Noregi", "á Grænlandi"],
            ["í Svíþjóð", "á Spáni"],
            ["í Finnlandi", "á Ítalíu"],
            ["í Þýskalandi", "á Englandi"],
            ["í Frakklandi", "á Írlandi"],
            ["í Póllandi", "á Kúbu"],
            ["í Bandaríkjunum", "á Nýja-Sjálandi"]
          ]
        },
        tip: "Islands lean towards á, but Spain and Italy are on the á list too. Learn those two as oddities."
      },
      {
        h: "Places in Iceland",
        table: {
          cols: ["með í", "með á"],
          rows: [
            ["í Reykjavík", "á Akureyri"],
            ["í Kópavogi", "á Selfossi"],
            ["í Hafnarfirði", "á Egilsstöðum"],
            ["í Keflavík", "á Ísafirði"],
            ["í Borgarnesi", "á Húsavík"],
            ["í Vestmannaeyjum", "á Seyðisfirði"]
          ]
        },
        tip: "Icelanders themselves cannot always explain these. Nobody will mind if you slip, but the locals of a town will notice."
      },
      {
        h: "Buildings and everyday places",
        table: {
          cols: ["með í", "með á"],
          rows: [
            ["í skólanum", "á bókasafninu"],
            ["í bankanum", "á kaffihúsinu"],
            ["í búðinni", "á veitingastaðnum"],
            ["í bakaríinu", "á hótelinu"],
            ["í kirkjunni", "á spítalanum"],
            ["í vinnunni", "á skrifstofunni"],
            ["í bílnum", "á flugvellinum"],
            ["í leikhúsinu", "á ballinu"]
          ]
        }
      },
      {
        h: "Events take á",
        p: "Anything you attend rather than enter tends to take á, very often with a dative plural.",
        ex: [
          ["Við erum á tónleikum.", "We are at a concert."],
          ["Hann er á fundi.", "He is in a meeting."],
          ["Þau eru á námskeiði.", "They are on a course."]
        ]
      },
      {
        h: "And the same list with movement",
        p: "Whichever preposition a place takes, it keeps it when you go there. Only the case changes, from dative to accusative.",
        table: {
          cols: ["hvar - ÞGF", "hvert - ÞF"],
          rows: [
            ["Ég er í bankanum.", "Ég fer í bankann."],
            ["Ég er á bókasafninu.", "Ég fer á bókasafnið."],
            ["Ég er á Akureyri.", "Ég fer til Akureyrar."],
            ["Ég er á Íslandi.", "Ég fer til Íslands."]
          ]
        },
        tip: "Country and town names are the exception: going to them uses til plus the genitive, not í or á."
      }
    ],
    related: ["prep-motion-location", "prep-genitive", "prep-two-case"]
  }

];

export default grammar;
