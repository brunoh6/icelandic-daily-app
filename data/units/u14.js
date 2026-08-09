// Unit 14 — Tómstundir / Free time
// Reflexive pronouns and reflexive verbs, the middle voice in -st,
// enginn and ekki neinn, plural-only nouns and the counting forms tvennir/þrennir.

export const unit = {
  id: 14,
  slug: "u14",
  title: "Tómstundir",
  en: "Free time",
  cefr: "A2.1",
  icon: "🎸",
  blurb: "Hobbies, sport and a night out, with sig, sér and every verb in -st.",
  canDo: [
    "Say what I do in my free time and what I am interested in",
    "Talk about sport, teams and training with the right cases",
    "Use reflexive pronouns and middle-voice verbs like hittast and klæðast",
    "Say that there is nobody and nothing, and count things that come in pairs"
  ],
  lessons: [
    {
      n: 1,
      id: "u14l1",
      kind: "lesson",
      title: "Áhugamálin mín",
      en: "My hobbies",
      goal: "Name your hobbies and point a verb back at its own subject.",
      minutes: 9,
      icon: "🧶",
      teach: [
        {
          h: "What do you do with your evenings?",
          p: "Tómstundir is the time, áhugamál is the thing you fill it with. Both words turn up on every Icelandic sign-up form.",
          table: {
            cols: ["íslenska", "English", "kyn"],
            rows: [
              ["áhugamál", "hobby, interest", "hk"],
              ["tómstundir", "free time, leisure", "kvk ft."],
              ["skák", "chess", "kvk"],
              ["félag", "club, society", "hk"],
              ["gönguferð", "hike, walk", "kvk"],
              ["æfing", "practice, training session", "kvk"]
            ]
          },
          tip: "Say hafa áhuga á and then the dative: Ég hef áhuga á skák."
        },
        {
          h: "Pointing the verb back at the subject",
          p: "When the object is the same person as the subject, Icelandic reuses the ordinary object pronoun for ég and þú. For everybody else it reaches for one special word, sig, and that word never changes for gender or number.",
          table: {
            cols: ["", "ÞF", "ÞGF", "EF"],
            rows: [
              ["ég", "mig", "mér", "mín"],
              ["þú", "þig", "þér", "þín"],
              ["hann, hún, þau", "sig", "sér", "sín"]
            ]
          },
          tip: "sig, sér and sín always look back at the subject of their own sentence. Hún æfir sig is she herself; hún æfir hana is somebody else."
        },
        {
          h: "Verbs that drag a pronoun along",
          p: "Some verbs simply refuse to appear without one. Learn the pronoun as part of the word, exactly the way you learned which case a preposition takes.",
          list: [
            "æfa sig (ÞF) — to practise: ég æfi mig, hann æfir sig",
            "skemmta sér (ÞGF) — to enjoy oneself: ég skemmti mér, þau skemmta sér",
            "flýta sér (ÞGF) — to hurry: ég flýti mér, flýttu þér!"
          ],
          ex: [
            ["Ég skemmti mér alltaf í kórnum.", "I always enjoy myself in the choir."],
            ["Hann æfir sig á hverjum degi.", "He practises every day."],
            ["Þú þarft að flýta þér.", "You need to hurry."]
          ]
        }
      ],
      vocab: ["áhugamál", "áhugi", "tómstundir", "skák", "félag", "gönguferð", "æfa", "skemmta", "flýta", "safna", "prjóna", "veiða", "skemmtilegur", "leiðinlegur"],
      items: [
        { t: "match", q: "Match the free-time words",
          pairs: [["áhugamál", "hobby"], ["skák", "chess"], ["veiða", "to fish"], ["prjóna", "to knit"], ["félag", "club"], ["gönguferð", "hike"]] },

        { t: "gender", word: "áhugamál", a: "hk",
          note: "mál is neuter, so every compound in -mál is neuter too: áhugamálið mitt.", tags: ["noun:neut"] },

        { t: "gender", word: "skák", a: "kvk",
          note: "Feminine: skák, skák, skák, skákar. Only the genitive moves.", tags: ["noun:fem"] },

        { t: "choice", q: "Fill the gap: Hún ___ sér alltaf vel á æfingu.",
          opts: ["skemmtir", "skemmti", "skemmta", "skemmt"], a: "skemmtir",
          note: "skemmta is a weak -i verb: ég skemmti, þú skemmtir, hún skemmtir." },

        { t: "table", q: "Complete the reflexive pronouns.",
          cols: ["", "ÞF", "ÞGF", "EF"],
          rows: [
            { label: "ég", cells: ["mig", "mér", "mín"], blank: [1] },
            { label: "þú", cells: ["þig", "þér", "þín"], blank: [2] },
            { label: "hann, hún, þau", cells: ["sig", "sér", "sín"], blank: [0] }
          ] },

        { t: "fill", q: "Who is hurrying?", sentence: "Ég flýti ___ á æfinguna.", base: "ég",
          a: "mér", case: "ÞGF", mode: "type",
          why: "flýta takes the dative, and for ég the reflexive is simply mér.", tags: ["refl", "case:dat"] },

        { t: "fill", q: "Third person, please.", sentence: "Hann æfir ___ á hverjum degi.", base: "hann",
          opts: ["hann", "sig", "sér"], a: "sig", case: "ÞF", mode: "choice",
          why: "æfa takes the accusative, and the third-person reflexive accusative is sig.", tags: ["refl", "case:acc"] },

        { t: "build", q: "I collect Icelandic books.",
          a: "Ég safna íslenskum bókum", extra: ["bækur", "safnar", "íslenskar"],
          note: "safna governs the dative, so the whole phrase goes dative plural: íslenskum bókum." },

        { t: "type", q: "Type “I always enjoy myself.”", a: "Ég skemmti mér alltaf",
          hint: "skemmta + ÞGF",
          note: "Without mér the sentence would mean that you entertain somebody else." },

        { t: "choice", q: "Which sentence is right?",
          opts: ["Þeir æfa sig á hverjum degi.", "Þeir æfa þá á hverjum degi.", "Þeir æfa sér á hverjum degi."],
          a: "Þeir æfa sig á hverjum degi.",
          note: "þá would point at some other men; sér is the wrong case after æfa." },

        { t: "listen", speak: "Hvað er áhugamálið þitt?", q: "What did you hear?", mode: "choice",
          opts: ["Hvað er áhugamálið þitt?", "Hvar er áhugamálið þitt?", "Hvað er starfið þitt?"],
          a: "Hvað er áhugamálið þitt?",
          note: "áhugamál is neuter, so the possessive is þitt." },

        { t: "speak", is: "Ég hef mikinn áhuga á skák.", en: "I'm very interested in chess.",
          tip: "hafa áhuga á takes the dative: á skák. áhugi is masculine, hence mikinn áhuga." }
      ]
    },

    {
      n: 2,
      id: "u14l2",
      kind: "lesson",
      title: "Íþróttir og pör",
      en: "Sport, and things that come in pairs",
      goal: "Talk about sport, and count nouns that only exist in the plural.",
      minutes: 10,
      icon: "⚽",
      teach: [
        {
          h: "The sport words",
          table: {
            cols: ["íslenska", "English", "kyn"],
            rows: [
              ["fótbolti", "football", "kk"],
              ["handbolti", "handball", "kk"],
              ["sund", "swimming", "hk"],
              ["hlaup", "running", "hk"],
              ["lið", "team", "hk"],
              ["leikur", "game, match", "kk"],
              ["mark", "goal", "hk"],
              ["völlur", "pitch, field", "kk"]
            ]
          },
          tip: "Playing a sport is vera í: hann er í handbolta, hún er í fótbolta."
        },
        {
          h: "Nouns with no singular",
          p: "A handful of Icelandic nouns simply have no singular form. They still have a gender, and everything around them goes plural: the article, the adjective and the verb.",
          list: [
            "dyr (kvk) — door, doorway: Dyrnar opnast klukkan sex.",
            "gleraugu (hk) — glasses: Gleraugun mín eru ný.",
            "sundföt (hk) — swimwear: Sundfötin eru í töskunni.",
            "tónleikar (kk) — concert: Tónleikarnir byrja klukkan átta.",
            "tómstundir (kvk) — free time"
          ],
          tip: "Tónleikar is the classic trap. One concert is still tónleikar, plural, with a plural verb."
        },
        {
          h: "tvennir, þrennir — counting pairs and sets",
          p: "You cannot count these nouns with tveir or þrír, because those words count single objects. Icelandic keeps a separate set of numerals for pairs and for plural-only nouns.",
          table: {
            cols: ["", "kk", "kvk", "hk"],
            rows: [
              ["2", "tvennir", "tvennar", "tvenn"],
              ["3", "þrennir", "þrennar", "þrenn"]
            ]
          },
          ex: [
            ["tvennir skór", "two pairs of shoes"],
            ["þrennar buxur", "three pairs of trousers"],
            ["tvenn gleraugu", "two pairs of glasses"],
            ["þrennir tónleikar", "three concerts"]
          ],
          tip: "tveir skór would be two single shoes, probably not a pair."
        }
      ],
      vocab: ["íþrótt", "fótbolti", "handbolti", "sund", "hlaup", "lið", "leikur", "mark", "völlur", "æfing", "skíði", "líkamsrækt", "keppni", "tapa", "gleraugu", "dyr", "sundföt", "tvennir", "þrennir"],
      items: [
        { t: "match", q: "Match the sport words",
          pairs: [["lið", "team"], ["leikur", "match"], ["mark", "goal"], ["völlur", "pitch"], ["keppni", "competition"], ["líkamsrækt", "gym"]] },

        { t: "gender", word: "völlur", a: "kk",
          note: "Masculine: völlur, völl, velli, vallar. The stem vowel moves in every case.", tags: ["noun:masc"] },

        { t: "gender", word: "mark", a: "hk",
          note: "Neuter, and the plural takes u-umlaut: mark becomes mörk.", tags: ["noun:neut"] },

        { t: "choice", q: "How do you say “two pairs of shoes”?",
          opts: ["tvennir skór", "tveir skór", "tvenn skór", "tvær skór"], a: "tvennir skór",
          note: "skór is masculine plural here, so the pair numeral is tvennir." },

        { t: "fill", q: "Choose the right numeral.", sentence: "Ég þarf ___ gleraugu.", base: "tvennir",
          a: "tvenn", case: "ÞF", mode: "type",
          why: "gleraugu is neuter plural, and the neuter of tvennir is tvenn.", tags: ["num:pairs"] },

        { t: "fill", q: "Add the article.", sentence: "___ opnast klukkan sjö.", base: "dyr",
          a: "dyrnar", case: "NF", mode: "type",
          why: "dyr has no singular; the feminine plural article is -nar.", tags: ["noun:pluralonly"] },

        { t: "fill", q: "Which case after tapa?", sentence: "Liðið mitt tapar aldrei ___ .", base: "leikurinn",
          opts: ["leikinn", "leiknum", "leiksins"], a: "leiknum", case: "ÞGF", mode: "choice",
          why: "tapa governs the dative, so leikurinn becomes leiknum.", tags: ["verb:dat", "case:dat"] },

        { t: "build", q: "Our team wins the match.",
          a: "Liðið okkar vinnur leikinn", extra: ["leikur", "liðin", "okkur"],
          note: "vinna takes the accusative: leikinn." },

        { t: "type", q: "Type “I go swimming every day.”", a: "Ég fer í sund á hverjum degi",
          hint: "fara í + ÞF",
          note: "Icelanders say fara í sund, never fara að synda." },

        { t: "choice", q: "Which sentence means “he plays handball”?",
          opts: ["Hann er í handbolta.", "Hann er í handbolti.", "Hann er á handbolta."],
          a: "Hann er í handbolta.",
          note: "vera í + dative names the sport you take part in. handbolti is a weak masculine: handbolta." },

        { t: "listen", speak: "Æfingin byrjar klukkan fimm.", q: "What did you hear?", mode: "choice",
          opts: ["Æfingin byrjar klukkan fimm.", "Æfingin byrjar klukkan sex.", "Keppnin byrjar klukkan fimm."],
          a: "Æfingin byrjar klukkan fimm." },

        { t: "speak", is: "Dyrnar að sundlauginni opnast klukkan sex.", en: "The doors of the swimming pool open at six.",
          tip: "dyr only exists in the plural, so the verb is plural too: opnast." }
      ]
    },

    {
      n: 3,
      id: "u14l3",
      kind: "grammar",
      title: "Miðmynd: sagnir sem enda á -st",
      en: "The middle voice",
      goal: "Recognise and form the -st verbs, and tell their three meanings apart.",
      minutes: 14,
      icon: "🔁",
      teach: [
        {
          h: "One ending, three jobs",
          p: "Glue -st onto a verb and it stops looking for an object. The same little ending covers three quite different ideas, and only the context tells you which one is meant.",
          list: [
            "reflexive — the subject does it to itself: klæðast, to get dressed",
            "reciprocal — two or more people do it to each other: hittast, to meet",
            "passive — it just happens, nobody says who does it: seljast, to be sold"
          ],
          tip: "If a sentence has an -st verb and no object, you are almost always in one of these three."
        },
        {
          h: "How the forms are built",
          p: "The endings are the ordinary ones with -st stuck on, and the three singular persons collapse into a single form. That is the good news about the middle voice.",
          table: {
            cols: ["", "hittast", "klæðast", "sjást"],
            rows: [
              ["ég", "hittist", "klæðist", "sést"],
              ["þú", "hittist", "klæðist", "sést"],
              ["hann", "hittist", "klæðist", "sést"],
              ["við", "hittumst", "klæðumst", "sjáumst"],
              ["þið", "hittist", "klæðist", "sjáist"],
              ["þeir", "hittast", "klæðast", "sjást"]
            ]
          },
          tip: "Learn the shape of the við-form, -umst. It is the one you will actually say out loud: sjáumst, hittumst, kynnumst."
        },
        {
          h: "Reciprocal: it takes two",
          p: "Here the -st means each other. The subject has to be plural, because one person cannot meet each other.",
          ex: [
            ["Við hittumst á laugardaginn.", "We're meeting on Saturday."],
            ["Þau kynnast í kórnum.", "They get to know each other in the choir."],
            ["Sjáumst á morgun!", "See you tomorrow!"]
          ],
          tip: "Sjáumst is the standard goodbye when you expect to meet again. It is a whole sentence in one word."
        },
        {
          h: "Passive: nobody in particular",
          p: "This is the -st that lets you leave the doer out of the sentence altogether. English usually reaches for the passive here, or for an intransitive verb.",
          ex: [
            ["Miðarnir seljast alltaf upp.", "The tickets always sell out."],
            ["Dyrnar opnast klukkan sjö.", "The doors open at seven."],
            ["Húsið sést vel héðan.", "The house is clearly visible from here."]
          ],
          tip: "Some -st verbs still keep an object, and it is nearly always dative: klæðast peysu, kynnast nýju fólki."
        }
      ],
      vocab: ["setjast", "kynnast", "sjást", "ferðast"],
      items: [
        { t: "table", q: "Complete the present tense of hittast.",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "1. persóna", cells: ["hittist", "hittumst"], blank: [1] },
            { label: "2. persóna", cells: ["hittist", "hittist"], blank: [0] },
            { label: "3. persóna", cells: ["hittist", "hittast"], blank: [1] }
          ] },

        { t: "table", q: "Complete the present tense of sjást.",
          cols: ["", "miðmynd"],
          rows: [
            { label: "ég", cells: ["sést"], blank: [0] },
            { label: "við", cells: ["sjáumst"], blank: [0] },
            { label: "þið", cells: ["sjáist"], blank: [] },
            { label: "þeir", cells: ["sjást"], blank: [] }
          ] },

        { t: "fill", q: "Put the verb in the við-form.", sentence: "Við ___ á kaffihúsinu klukkan fjögur.", base: "hittast",
          a: "hittumst", case: "NF", mode: "type",
          why: "The first person plural of the middle voice ends in -umst.", tags: ["voice:middle"] },

        { t: "fill", q: "Which form?", sentence: "Húsið ___ vel héðan.", base: "sjást",
          opts: ["sést", "sjást", "sjáumst"], a: "sést", case: "NF", mode: "choice",
          why: "húsið is one thing, third person singular, so the middle voice is sést.", tags: ["voice:middle"] },

        { t: "fill", q: "First person singular.", sentence: "Ég ___ nýju fólki í kórnum.", base: "kynnast",
          a: "kynnist", case: "NF", mode: "type",
          why: "All three singular persons of kynnast look the same: kynnist. The object stays dative.", tags: ["voice:middle", "case:dat"] },

        { t: "fill", q: "Turn selja into the middle voice.", sentence: "Miðarnir ___ alltaf upp.", base: "selja",
          a: "seljast", case: "NF", mode: "type",
          why: "Third person plural of the middle voice ends in -ast, and -st removes the need for a seller.", tags: ["voice:middle", "passive"] },

        { t: "fill", q: "Turn opna into the middle voice.", sentence: "Dyrnar ___ klukkan sjö.", base: "opna",
          opts: ["opna", "opnast", "opnar"], a: "opnast", case: "NF", mode: "choice",
          why: "opna needs an object; opnast means the doors open by themselves.", tags: ["voice:middle", "passive"] },

        { t: "choice", q: "Which one means “we'll see each other tomorrow”?",
          opts: ["Sjáumst á morgun.", "Sjáum okkur á morgun.", "Sjáið á morgun."],
          a: "Sjáumst á morgun.",
          note: "The -st already carries each other, so no extra pronoun is needed." },

        { t: "choice", q: "klæðast takes which case?",
          opts: ["Hann klæðist hlýrri peysu.", "Hann klæðist hlýja peysu.", "Hann klæðist hlý peysa."],
          a: "Hann klæðist hlýrri peysu.",
          note: "klæðast governs the dative: hlýrri peysu." },

        { t: "build", q: "We meet at the pool on Saturdays.",
          a: "Við hittumst í sundlauginni á laugardögum", extra: ["hitta", "okkur", "laugardaginn"],
          note: "hittumst already means meet each other, so okkur would be one word too many." },

        { t: "build", q: "They get to know each other in the choir.",
          a: "Þau kynnast í kórnum", extra: ["kynna", "sig", "kórinn"],
          note: "kynna sig means to introduce yourself. kynnast is the reciprocal one." },

        { t: "type", q: "Type “See you on Saturday!”", a: "Sjáumst á laugardaginn",
          hint: "one word for “see you”",
          note: "á + accusative with the article picks out one particular coming Saturday." },

        { t: "listen", speak: "Við hittumst fyrir framan bíóið.", q: "What did you hear?", mode: "choice",
          opts: ["Við hittumst fyrir framan bíóið.", "Við hittumst fyrir framan leikhúsið.", "Við sjáumst fyrir framan bíóið."],
          a: "Við hittumst fyrir framan bíóið." },

        { t: "speak", is: "Hvenær sjáumst við aftur?", en: "When will we see each other again?",
          tip: "sjáumst is the við-form of sjást. The question word pulls the verb forward, so við lands after it." }
      ]
    },

    {
      n: 4,
      id: "u14l4",
      kind: "lesson",
      title: "Út að skemmta sér",
      en: "A night out",
      goal: "Talk about music, cinema and theatre, and say that there is nobody there.",
      minutes: 10,
      icon: "🎬",
      teach: [
        {
          h: "Where the evening goes",
          table: {
            cols: ["íslenska", "English", "kyn"],
            rows: [
              ["tónlist", "music", "kvk"],
              ["hljómsveit", "band", "kvk"],
              ["tónleikar", "concert", "kk ft."],
              ["kór", "choir", "kk"],
              ["lag", "song, tune", "hk"],
              ["bíó", "cinema", "hk"],
              ["bíómynd", "film", "kvk"],
              ["leikhús", "theatre", "hk"],
              ["sýning", "show, screening", "kvk"]
            ]
          },
          tip: "fara í bíó, fara í leikhús, but fara á tónleika and fara á sýningu."
        },
        {
          h: "spila á, hlusta á",
          p: "Both of these verbs need á, and á here means towards the thing, so it takes the accusative. Instruments take no article.",
          ex: [
            ["Ég spila á gítar.", "I play the guitar."],
            ["Hún hlustar á íslenska tónlist.", "She listens to Icelandic music."],
            ["Við förum á tónleika í kvöld.", "We're going to a concert tonight."]
          ]
        },
        {
          h: "enginn — not one",
          p: "enginn is one word doing the work of not any. It declines like an adjective, and its neuter is the ekkert you already know.",
          table: {
            cols: ["", "kk", "kvk", "hk"],
            rows: [
              ["NF et.", "enginn", "engin", "ekkert"],
              ["ÞF et.", "engan", "enga", "ekkert"],
              ["ÞGF et.", "engum", "engri", "engu"],
              ["NF ft.", "engir", "engar", "engin"]
            ]
          },
          ex: [
            ["Það er enginn heima.", "There is nobody home."],
            ["Ég þekki engan hér.", "I don't know anyone here."],
            ["Ekkert gerist á þriðjudögum.", "Nothing happens on Tuesdays."]
          ]
        },
        {
          h: "ekki neinn — the split version",
          p: "Once ekki has already turned up in the sentence, enginn steps aside and neinn takes over. That happens most often when the verb comes in two parts, as with ætla að or vilja.",
          ex: [
            ["Ég ætla ekki að hitta neinn í kvöld.", "I'm not going to meet anyone tonight."],
            ["Hann vill ekki kaupa neinn miða.", "He doesn't want to buy a ticket."],
            ["Ég sé engan.", "I don't see anybody."]
          ],
          tip: "Simple sentence, one verb — use enginn. Two verbs with ekki between them — use ekki … neinn."
        }
      ],
      vocab: ["tónlist", "hljómsveit", "tónleikar", "gítar", "kór", "lag", "bíó", "bíómynd", "leikhús", "sýning", "spila", "syngja", "hlusta", "dansa", "enginn", "neinn"],
      items: [
        { t: "match", q: "Match the night-out words",
          pairs: [["hljómsveit", "band"], ["tónleikar", "concert"], ["bíómynd", "film"], ["leikhús", "theatre"], ["sýning", "show"], ["lag", "song"]] },

        { t: "gender", word: "hljómsveit", a: "kvk",
          note: "sveit is feminine, so hljómsveit is too: hljómsveitin.", tags: ["noun:fem"] },

        { t: "gender", word: "leikhús", a: "hk",
          note: "Anything built on hús is neuter: leikhúsið.", tags: ["noun:neut"] },

        { t: "choice", q: "How do you say “there is nobody home”?",
          opts: ["Það er enginn heima.", "Það er engin heima.", "Það er ekkert heima."],
          a: "Það er enginn heima.",
          note: "A person of unknown gender defaults to masculine: enginn." },

        { t: "fill", q: "Which form of enginn?", sentence: "Ég þekki ___ í þessari hljómsveit.", base: "enginn",
          a: "engan", case: "ÞF", mode: "type",
          why: "þekkja takes the accusative, and the masculine accusative is engan.", tags: ["pron:neg", "case:acc"] },

        { t: "fill", q: "Which form of enginn?", sentence: "Hún talar við ___ á tónleikunum.", base: "enginn",
          opts: ["engan", "enginn", "engum"], a: "engan", case: "ÞF", mode: "choice",
          why: "við always takes the accusative.", tags: ["pron:neg", "prep:við"] },

        { t: "fill", q: "Neuter this time.", sentence: "Það er ___ í sjónvarpinu í kvöld.", base: "enginn",
          a: "ekkert", case: "NF", mode: "type",
          why: "The neuter of enginn is ekkert, the same word you use on its own for nothing.", tags: ["pron:neg"] },

        { t: "build", q: "I don't want to buy a ticket.",
          a: "Ég vil ekki kaupa neinn miða", extra: ["engan", "er", "miðann"],
          note: "ekki is already there, so the negative pronoun softens into neinn." },

        { t: "type", q: "Type “I play the guitar in a band.”", a: "Ég spila á gítar í hljómsveit",
          hint: "spila á + ÞF",
          note: "No article on the instrument: spila á gítar, spila á píanó." },

        { t: "choice", q: "Fill the gap: Hún ___ á íslenska tónlist.",
          opts: ["hlustar", "heyrir", "spilar", "syngur"], a: "hlustar",
          note: "hlusta á is to listen on purpose; heyra is to hear whether you meant to or not." },

        { t: "listen", speak: "Það er engin sýning í kvöld.", q: "What did you hear?", mode: "choice",
          opts: ["Það er engin sýning í kvöld.", "Það er enginn miði í kvöld.", "Það er ein sýning í kvöld."],
          a: "Það er engin sýning í kvöld.",
          note: "sýning is feminine, so the form is engin with one n." },

        { t: "speak", is: "Ég ætla ekki að hitta neinn í kvöld.", en: "I'm not going to meet anyone tonight.",
          tip: "ekki has already appeared before að, so neinn takes over from enginn." }
      ]
    },

    {
      n: 5,
      id: "u14l5",
      kind: "story",
      title: "Miðar á tónleika",
      en: "Concert tickets",
      goal: "Follow a plan for Saturday night, and meet a puffin with two pairs of glasses.",
      minutes: 11,
      icon: "🎟️",
      teach: [
        {
          h: "Listen for the little words",
          p: "Almost every grammar point of this unit turns up in twelve lines: mig and mér, hittumst and seljast, ekkert and engan, and one very odd numeral."
        },
        {
          h: "Ekkert sérstakt",
          p: "The standard Icelandic answer to what are you up to when the honest answer is nothing much. It is the neuter of enginn plus the neuter of sérstakur."
        }
      ],
      story: {
        title: "Miðar á tónleika",
        lines: [
          { sp: "Anna", is: "Hvað ertu að gera á laugardaginn, Jónas?", en: "What are you doing on Saturday, Jónas?" },
          { sp: "Jónas", is: "Ekkert sérstakt. Ég ætla bara að æfa mig heima.", en: "Nothing special. I'm just going to practise at home." },
          { sp: "Anna", is: "Hljómsveitin hennar Sóleyjar spilar á laugardaginn. Komdu með!", en: "Sóley's band is playing on Saturday. Come along!" },
          { sp: "Jónas", is: "Kosta miðarnir mikið?", en: "Do the tickets cost a lot?" },
          { sp: "Anna", is: "Þrjú þúsund krónur. Og þeir seljast alltaf upp.", en: "Three thousand krónur. And they always sell out." },
          { sp: "Jónas", is: "Þá flýti ég mér að kaupa tvo miða. Hvenær hittumst við?", en: "Then I'll hurry up and buy two tickets. When are we meeting?" },
          { sp: "Anna", is: "Fyrir framan húsið klukkan átta.", en: "In front of the building at eight." },
          { sp: "Anna", is: "Jónas, það situr lundi á stólnum mínum.", en: "Jónas, there's a puffin sitting on my chair." },
          { sp: "Jónas", is: "Þetta er Lúlli. Hann kemur á alla tónleika í bænum.", en: "That's Lúlli. He comes to every concert in town." },
          { sp: "Anna", is: "Og hann er með tvenn gleraugu!", en: "And he's wearing two pairs of glasses!" },
          { sp: "Jónas", is: "Hann sér ekkert án þeirra. Hann má sitja hjá okkur.", en: "He can't see a thing without them. He can sit with us." },
          { sp: "Anna", is: "En hann á engan miða. Enginn selur lunda miða.", en: "But he doesn't have a ticket. Nobody sells a puffin a ticket." }
        ],
        glossary: [
          ["ekkert sérstakt", "nothing special"],
          ["seljast upp", "to sell out"],
          ["flýta sér", "to hurry"],
          ["tvenn gleraugu", "two pairs of glasses"],
          ["án þeirra", "without them"],
          ["koma á tónleika", "to come to a concert"]
        ]
      },
      vocab: ["tónleikar", "hljómsveit", "gleraugu", "tvennir", "enginn", "neinn", "flýta", "æfa", "spila"],
      items: [
        { t: "choice", q: "Hvað ætlar Jónas að gera á laugardaginn?",
          opts: ["Æfa sig heima", "Fara á æfingu", "Spila í hljómsveit", "Fara í leikhús"],
          a: "Æfa sig heima",
          note: "Ekkert sérstakt. Ég ætla bara að æfa mig heima." },

        { t: "choice", q: "Hvað kosta miðarnir?",
          opts: ["Þrjú þúsund krónur", "Tvö þúsund krónur", "Ekkert", "Fimm þúsund krónur"],
          a: "Þrjú þúsund krónur" },

        { t: "fill", q: "Give the verb from the story.", sentence: "Þá ___ ég mér að kaupa tvo miða.", base: "flýta",
          a: "flýti", case: "NF", mode: "type",
          why: "flýta is a weak -i verb, so the ég-form is flýti. The reflexive mér is obligatory.", tags: ["refl"] },

        { t: "fill", q: "Which form of enginn?", sentence: "Lúlli á ___ miða.", base: "enginn",
          opts: ["engan", "enginn", "engum"], a: "engan", case: "ÞF", mode: "choice",
          why: "eiga takes the accusative, and miði is masculine.", tags: ["pron:neg", "case:acc"] },

        { t: "fill", q: "Reflexive, first person.", sentence: "Ég ætla að æfa ___ heima.", base: "ég",
          a: "mig", case: "ÞF", mode: "type",
          why: "æfa takes the accusative, so for ég the reflexive is mig.", tags: ["refl", "case:acc"] },

        { t: "build", q: "Nobody sells a puffin a ticket.",
          a: "Enginn selur lunda miða", extra: ["engan", "miðann", "lundinn"],
          note: "selja gives the person the dative and the thing the accusative: lunda miða." },

        { t: "type", q: "Type “The tickets always sell out.”", a: "Miðarnir seljast alltaf upp",
          hint: "middle voice of selja",
          note: "seljast leaves the seller out of the sentence entirely." },

        { t: "match", q: "Match the story phrases",
          pairs: [["ekkert sérstakt", "nothing special"], ["seljast upp", "to sell out"], ["flýta sér", "to hurry"], ["tvenn gleraugu", "two pairs of glasses"], ["án þeirra", "without them"]] },

        { t: "gender", word: "lundi", a: "kk",
          note: "A weak masculine: lundi, lunda, lunda, lunda. Lúlli fits the pattern too.", tags: ["noun:masc"] },

        { t: "choice", q: "Why does Lúlli keep the glasses on?",
          opts: ["He can't see anything without them", "He is cold", "He lost his ticket", "He is in the band"],
          a: "He can't see anything without them",
          note: "Hann sér ekkert án þeirra." },

        { t: "listen", speak: "Og hann er með tvenn gleraugu!", q: "What did you hear?", mode: "choice",
          opts: ["Og hann er með tvenn gleraugu!", "Og hann er með tvo miða!", "Og hún er með tvenn gleraugu!"],
          a: "Og hann er með tvenn gleraugu!",
          note: "vera með plus accusative is the everyday way to say have on you." },

        { t: "speak", is: "Sjáumst fyrir framan húsið klukkan átta.", en: "See you in front of the building at eight.",
          tip: "Sjáumst is a whole sentence: the middle voice already means we'll see each other." }
      ]
    },

    {
      n: 6,
      id: "u14l6",
      kind: "checkpoint",
      title: "Upprifjun: tómstundir",
      en: "Checkpoint: free time",
      goal: "Put the whole unit together: reflexives, the middle voice, enginn and pairs.",
      minutes: 12,
      icon: "🏁",
      teach: [
        {
          h: "Four things to hold on to",
          list: [
            "sig, sér and sín always look back at the subject of their own sentence.",
            "The middle voice in -st can mean myself, each other or simply it happens.",
            "enginn on its own; ekki … neinn once ekki is already in the sentence.",
            "tvennir, tvennar, tvenn count pairs and plural-only nouns."
          ]
        }
      ],
      vocab: [],
      items: [
        { t: "match", q: "Match the words from this unit",
          pairs: [["áhugamál", "hobby"], ["tónleikar", "concert"], ["völlur", "pitch"], ["kór", "choir"], ["gleraugu", "glasses"], ["keppni", "competition"]] },

        { t: "gender", word: "tónlist", a: "kvk",
          note: "Feminine: tónlist, tónlist, tónlist, tónlistar.", tags: ["noun:fem"] },

        { t: "table", q: "Complete the pair numerals.",
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            { label: "2", cells: ["tvennir", "tvennar", "tvenn"], blank: [2] },
            { label: "3", cells: ["þrennir", "þrennar", "þrenn"], blank: [0] }
          ] },

        { t: "fill", q: "Reflexive, third person.", sentence: "Hún skemmtir ___ vel í leikhúsinu.", base: "hún",
          a: "sér", case: "ÞGF", mode: "type",
          why: "skemmta takes the dative, and the third-person reflexive dative is sér.", tags: ["refl", "case:dat"] },

        { t: "fill", q: "Which form of enginn?", sentence: "Ég þekki ___ í þessum kór.", base: "enginn",
          opts: ["engan", "enginn", "engu"], a: "engan", case: "ÞF", mode: "choice",
          why: "þekkja takes the accusative: engan.", tags: ["pron:neg", "case:acc"] },

        { t: "fill", q: "Middle voice, við-form.", sentence: "Við ___ alltaf á sunnudögum.", base: "hittast",
          a: "hittumst", case: "NF", mode: "type",
          why: "The first person plural of the middle voice ends in -umst.", tags: ["voice:middle"] },

        { t: "fill", q: "Count the pairs.", sentence: "Hann á ___ skó.", base: "tvennir",
          a: "tvenna", case: "ÞF", mode: "type",
          why: "eiga takes the accusative, and the masculine accusative plural of tvennir is tvenna.", tags: ["num:pairs", "case:acc"] },

        { t: "choice", q: "Which sentence is right?",
          opts: ["Ég spila á gítar.", "Ég spila gítar.", "Ég spila með gítar."],
          a: "Ég spila á gítar.",
          note: "spila á plus accusative, and no article on the instrument." },

        { t: "choice", q: "Which one means “there is nothing on television tonight”?",
          opts: ["Það er ekkert í sjónvarpinu í kvöld.", "Það er enginn í sjónvarpinu í kvöld.", "Það er engin í sjónvarpinu í kvöld."],
          a: "Það er ekkert í sjónvarpinu í kvöld.",
          note: "A thing, not a person, so the neuter ekkert." },

        { t: "build", q: "I'm hurrying to training.",
          a: "Ég flýti mér á æfingu", extra: ["mig", "æfingin", "flýtir"],
          note: "flýta takes the dative, so the reflexive is mér, not mig." },

        { t: "build", q: "We're going to a concert on Friday.",
          a: "Við förum á tónleika á föstudaginn", extra: ["tónleikar", "í", "föstudagur"],
          note: "fara á tónleika, and tónleikar is plural even for a single concert." },

        { t: "type", q: "Type “My team never loses a match.”", a: "Liðið mitt tapar aldrei leik",
          hint: "tapa + ÞGF",
          note: "tapa governs the dative: leik. lið is neuter, so the possessive is mitt." },

        { t: "listen", speak: "Þau kynnast í kórnum.", q: "What did you hear?", mode: "choice",
          opts: ["Þau kynnast í kórnum.", "Þau hittast í kórnum.", "Þau syngja í kórnum."],
          a: "Þau kynnast í kórnum.",
          note: "kynnast is the reciprocal one: they get to know each other." },

        { t: "speak", is: "Ég hef engan áhuga á fótbolta.", en: "I have no interest in football.",
          tip: "áhugi is masculine, so enginn becomes engan after hafa; áhugi á always takes the dative." }
      ]
    }
  ]
};

export const vocab = [
  { w: "tómstundir", en: "free time, leisure (pl. only)", pos: "noun", g: "kvk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["tómstundir", "tómstundir", "tómstundum", "tómstunda"] },
    ex: { is: "Hvað gerir þú í tómstundum?", en: "What do you do in your free time?" } },

  { w: "áhugamál", en: "hobby, interest", pos: "noun", g: "hk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["áhugamál", "áhugamál", "áhugamáli", "áhugamáls"], pl: ["áhugamál", "áhugamál", "áhugamálum", "áhugamála"] },
    ex: { is: "Áhugamálið mitt er skák.", en: "My hobby is chess." } },

  { w: "áhugi", en: "interest", pos: "noun", g: "kk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["áhugi", "áhuga", "áhuga", "áhuga"], pl: null },
    ex: { is: "Ég hef mikinn áhuga á tónlist.", en: "I'm very interested in music." } },

  { w: "félag", en: "club, society", pos: "noun", g: "hk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["félag", "félag", "félagi", "félags"], pl: ["félög", "félög", "félögum", "félaga"] },
    ex: { is: "Hún er í litlu skákfélagi.", en: "She belongs to a small chess club." } },

  { w: "skák", en: "chess", pos: "noun", g: "kvk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["skák", "skák", "skák", "skákar"], pl: ["skákir", "skákir", "skákum", "skáka"] },
    ex: { is: "Við teflum eina skák á kvöldin.", en: "We play one game of chess in the evenings." } },

  { w: "gönguferð", en: "hike, walk", pos: "noun", g: "kvk", topic: "hobbies", unit: 14, cefr: "A2",
    forms: { sg: ["gönguferð", "gönguferð", "gönguferð", "gönguferðar"], pl: ["gönguferðir", "gönguferðir", "gönguferðum", "gönguferða"] },
    ex: { is: "Við förum í gönguferð á sunnudögum.", en: "We go for a hike on Sundays." } },

  { w: "íþrótt", en: "sport", pos: "noun", g: "kvk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["íþrótt", "íþrótt", "íþrótt", "íþróttar"], pl: ["íþróttir", "íþróttir", "íþróttum", "íþrótta"] },
    ex: { is: "Hvaða íþrótt æfir þú?", en: "Which sport do you do?" } },

  { w: "fótbolti", en: "football", pos: "noun", g: "kk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["fótbolti", "fótbolta", "fótbolta", "fótbolta"], pl: ["fótboltar", "fótbolta", "fótboltum", "fótbolta"] },
    ex: { is: "Bróðir minn er í fótbolta.", en: "My brother plays football." } },

  { w: "handbolti", en: "handball", pos: "noun", g: "kk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["handbolti", "handbolta", "handbolta", "handbolta"], pl: ["handboltar", "handbolta", "handboltum", "handbolta"] },
    ex: { is: "Handbolti er vinsæll á Íslandi.", en: "Handball is popular in Iceland." } },

  { w: "sund", en: "swimming", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["sund", "sund", "sundi", "sunds"], pl: null },
    ex: { is: "Ég fer í sund á hverjum degi.", en: "I go swimming every day." } },

  { w: "hlaup", en: "running, a run", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["hlaup", "hlaup", "hlaupi", "hlaups"], pl: ["hlaup", "hlaup", "hlaupum", "hlaupa"] },
    ex: { is: "Hlaup er ódýr íþrótt.", en: "Running is a cheap sport." } },

  { w: "lið", en: "team", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["lið", "lið", "liði", "liðs"], pl: ["lið", "lið", "liðum", "liða"] },
    ex: { is: "Liðið mitt vinnur alltaf.", en: "My team always wins." } },

  { w: "leikur", en: "game, match", pos: "noun", g: "kk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["leikur", "leik", "leik", "leiks"], pl: ["leikir", "leiki", "leikjum", "leikja"] },
    ex: { is: "Leikurinn byrjar klukkan sjö.", en: "The match starts at seven." } },

  { w: "mark", en: "goal (in a game)", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["mark", "mark", "marki", "marks"], pl: ["mörk", "mörk", "mörkum", "marka"] },
    ex: { is: "Hún skorar mörg mörk.", en: "She scores a lot of goals." } },

  { w: "völlur", en: "pitch, field", pos: "noun", g: "kk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["völlur", "völl", "velli", "vallar"], pl: ["vellir", "velli", "völlum", "valla"] },
    ex: { is: "Liðið æfir á vellinum í kvöld.", en: "The team trains on the pitch tonight." } },

  { w: "æfing", en: "practice, training session", pos: "noun", g: "kvk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["æfing", "æfingu", "æfingu", "æfingar"], pl: ["æfingar", "æfingar", "æfingum", "æfinga"] },
    ex: { is: "Æfingin byrjar klukkan fimm.", en: "The training session starts at five." } },

  { w: "keppni", en: "competition", pos: "noun", g: "kvk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["keppni", "keppni", "keppni", "keppni"], pl: ["keppnir", "keppnir", "keppnum", "keppna"] },
    ex: { is: "Keppnin er á laugardaginn.", en: "The competition is on Saturday." } },

  { w: "skíði", en: "ski", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["skíði", "skíði", "skíði", "skíðis"], pl: ["skíði", "skíði", "skíðum", "skíða"] },
    ex: { is: "Við förum á skíði í mars.", en: "We go skiing in March." } },

  { w: "líkamsrækt", en: "gym, fitness training", pos: "noun", g: "kvk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["líkamsrækt", "líkamsrækt", "líkamsrækt", "líkamsræktar"], pl: null },
    ex: { is: "Ég fer í líkamsrækt eftir vinnu.", en: "I go to the gym after work." } },

  { w: "sundföt", en: "swimwear (pl. only)", pos: "noun", g: "hk", topic: "sport", unit: 14, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["sundföt", "sundföt", "sundfötum", "sundfata"] },
    ex: { is: "Sundfötin mín eru enn blaut.", en: "My swimwear is still wet." } },

  { w: "gleraugu", en: "glasses (pl. only)", pos: "noun", g: "hk", topic: "things", unit: 14, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["gleraugu", "gleraugu", "gleraugum", "gleraugna"] },
    ex: { is: "Gleraugun mín eru ný.", en: "My glasses are new." } },

  { w: "dyr", en: "door, doorway (pl. only)", pos: "noun", g: "kvk", topic: "things", unit: 14, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["dyr", "dyr", "dyrum", "dyra"] },
    ex: { is: "Dyrnar opnast klukkan sex.", en: "The doors open at six." } },

  { w: "tónlist", en: "music", pos: "noun", g: "kvk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["tónlist", "tónlist", "tónlist", "tónlistar"], pl: null },
    ex: { is: "Ég hlusta mest á íslenska tónlist.", en: "I mostly listen to Icelandic music." } },

  { w: "hljómsveit", en: "band", pos: "noun", g: "kvk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["hljómsveit", "hljómsveit", "hljómsveit", "hljómsveitar"], pl: ["hljómsveitir", "hljómsveitir", "hljómsveitum", "hljómsveita"] },
    ex: { is: "Hljómsveitin spilar í kvöld.", en: "The band is playing tonight." } },

  { w: "tónleikar", en: "concert (pl. only)", pos: "noun", g: "kk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["tónleikar", "tónleika", "tónleikum", "tónleika"] },
    ex: { is: "Við förum á tónleika í kvöld.", en: "We're going to a concert tonight." } },

  { w: "gítar", en: "guitar", pos: "noun", g: "kk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["gítar", "gítar", "gítar", "gítars"], pl: ["gítarar", "gítara", "gíturum", "gítara"] },
    ex: { is: "Hann spilar á gítar á hverju kvöldi.", en: "He plays the guitar every evening." } },

  { w: "kór", en: "choir", pos: "noun", g: "kk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["kór", "kór", "kór", "kórs"], pl: ["kórar", "kóra", "kórum", "kóra"] },
    ex: { is: "Ég syng í kór á fimmtudögum.", en: "I sing in a choir on Thursdays." } },

  { w: "lag", en: "song, tune", pos: "noun", g: "hk", topic: "music", unit: 14, cefr: "A2",
    forms: { sg: ["lag", "lag", "lagi", "lags"], pl: ["lög", "lög", "lögum", "laga"] },
    ex: { is: "Þetta lag er mjög fallegt.", en: "This song is very beautiful." } },

  { w: "bíó", en: "cinema", pos: "noun", g: "hk", topic: "going-out", unit: 14, cefr: "A2",
    forms: { sg: ["bíó", "bíó", "bíói", "bíós"], pl: ["bíó", "bíó", "bíóum", "bíóa"] },
    ex: { is: "Eigum við að fara í bíó?", en: "Shall we go to the cinema?" } },

  { w: "bíómynd", en: "film, movie", pos: "noun", g: "kvk", topic: "going-out", unit: 14, cefr: "A2",
    forms: { sg: ["bíómynd", "bíómynd", "bíómynd", "bíómyndar"], pl: ["bíómyndir", "bíómyndir", "bíómyndum", "bíómynda"] },
    ex: { is: "Bíómyndin er þrír tímar.", en: "The film is three hours long." } },

  { w: "leikhús", en: "theatre", pos: "noun", g: "hk", topic: "going-out", unit: 14, cefr: "A2",
    forms: { sg: ["leikhús", "leikhús", "leikhúsi", "leikhúss"], pl: ["leikhús", "leikhús", "leikhúsum", "leikhúsa"] },
    ex: { is: "Við förum sjaldan í leikhús.", en: "We rarely go to the theatre." } },

  { w: "sýning", en: "show, screening, exhibition", pos: "noun", g: "kvk", topic: "going-out", unit: 14, cefr: "A2",
    forms: { sg: ["sýning", "sýningu", "sýningu", "sýningar"], pl: ["sýningar", "sýningar", "sýningum", "sýninga"] },
    ex: { is: "Síðasta sýningin er á sunnudaginn.", en: "The last show is on Sunday." } },

  { w: "æfa", en: "to practise, to train", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["æfi", "æfir", "æfir", "æfum", "æfið", "æfa"],
            past: ["æfði", "æfðir", "æfði", "æfðum", "æfðuð", "æfðu"], pp: "æft" },
    ex: { is: "Hann æfir sig á hverjum degi.", en: "He practises every day." } },

  { w: "skemmta", en: "to entertain (skemmta sér = to enjoy oneself)", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["skemmti", "skemmtir", "skemmtir", "skemmtum", "skemmtið", "skemmta"],
            past: ["skemmti", "skemmtir", "skemmti", "skemmtum", "skemmtuð", "skemmtu"], pp: "skemmt" },
    ex: { is: "Ég skemmti mér alltaf í kórnum.", en: "I always enjoy myself in the choir." } },

  { w: "flýta", en: "to hurry (flýta sér)", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["flýti", "flýtir", "flýtir", "flýtum", "flýtið", "flýta"],
            past: ["flýtti", "flýttir", "flýtti", "flýttum", "flýttuð", "flýttu"], pp: "flýtt" },
    ex: { is: "Þú þarft að flýta þér.", en: "You need to hurry." } },

  { w: "setjast", en: "to sit down", pos: "verb", topic: "middle-voice", unit: 14, cefr: "A2", gov: "none", vclass: "middle",
    conj: { pres: ["sest", "sest", "sest", "setjumst", "setjist", "setjast"],
            past: ["settist", "settist", "settist", "settumst", "settust", "settust"], pp: "sest" },
    ex: { is: "Sestu hérna hjá mér.", en: "Sit down here next to me." } },

  { w: "kynnast", en: "to get to know (each other)", pos: "verb", topic: "middle-voice", unit: 14, cefr: "A2", gov: "ÞGF", vclass: "middle",
    conj: { pres: ["kynnist", "kynnist", "kynnist", "kynnumst", "kynnist", "kynnast"],
            past: ["kynntist", "kynntist", "kynntist", "kynntumst", "kynntust", "kynntust"], pp: "kynnst" },
    ex: { is: "Þau kynnast í kórnum.", en: "They get to know each other in the choir." } },

  { w: "sjást", en: "to be visible, to see each other", pos: "verb", topic: "middle-voice", unit: 14, cefr: "A2", gov: "none", vclass: "middle",
    conj: { pres: ["sést", "sést", "sést", "sjáumst", "sjáist", "sjást"],
            past: ["sást", "sást", "sást", "sáumst", "sáust", "sáust"], pp: "sést" },
    ex: { is: "Húsið sést vel héðan.", en: "The house is clearly visible from here." } },

  { w: "ferðast", en: "to travel", pos: "verb", topic: "middle-voice", unit: 14, cefr: "A2", gov: "none", vclass: "middle",
    conj: { pres: ["ferðast", "ferðast", "ferðast", "ferðumst", "ferðist", "ferðast"],
            past: ["ferðaðist", "ferðaðist", "ferðaðist", "ferðuðumst", "ferðuðust", "ferðuðust"], pp: "ferðast" },
    ex: { is: "Ég ferðast mikið á sumrin.", en: "I travel a lot in the summer." } },

  { w: "spila", en: "to play (a game, an instrument)", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["spila", "spilar", "spilar", "spilum", "spilið", "spila"],
            past: ["spilaði", "spilaðir", "spilaði", "spiluðum", "spiluðuð", "spiluðu"], pp: "spilað" },
    ex: { is: "Ég spila á gítar í hljómsveit.", en: "I play the guitar in a band." } },

  { w: "syngja", en: "to sing", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞF", vclass: "strong",
    conj: { pres: ["syng", "syngur", "syngur", "syngjum", "syngið", "syngja"],
            past: ["söng", "söngst", "söng", "sungum", "sunguð", "sungu"], pp: "sungið" },
    ex: { is: "Hún syngur í kórnum mínum.", en: "She sings in my choir." } },

  { w: "hlusta", en: "to listen (hlusta á + ÞF)", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "none", vclass: "weak-a",
    conj: { pres: ["hlusta", "hlustar", "hlustar", "hlustum", "hlustið", "hlusta"],
            past: ["hlustaði", "hlustaðir", "hlustaði", "hlustuðum", "hlustuðuð", "hlustuðu"], pp: "hlustað" },
    ex: { is: "Við hlustum á tónlist í bílnum.", en: "We listen to music in the car." } },

  { w: "dansa", en: "to dance", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "none", vclass: "weak-a",
    conj: { pres: ["dansa", "dansar", "dansar", "dönsum", "dansið", "dansa"],
            past: ["dansaði", "dansaðir", "dansaði", "dönsuðum", "dönsuðuð", "dönsuðu"], pp: "dansað" },
    ex: { is: "Þau dansa alla nóttina.", en: "They dance all night." } },

  { w: "safna", en: "to collect", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["safna", "safnar", "safnar", "söfnum", "safnið", "safna"],
            past: ["safnaði", "safnaðir", "safnaði", "söfnuðum", "söfnuðuð", "söfnuðu"], pp: "safnað" },
    ex: { is: "Ég safna íslenskum bókum.", en: "I collect Icelandic books." } },

  { w: "prjóna", en: "to knit", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["prjóna", "prjónar", "prjónar", "prjónum", "prjónið", "prjóna"],
            past: ["prjónaði", "prjónaðir", "prjónaði", "prjónuðum", "prjónuðuð", "prjónuðu"], pp: "prjónað" },
    ex: { is: "Amma prjónar lopapeysu handa mér.", en: "Grandma is knitting a lopapeysa for me." } },

  { w: "veiða", en: "to fish, to catch", pos: "verb", topic: "hobby-verbs", unit: 14, cefr: "A2", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["veiði", "veiðir", "veiðir", "veiðum", "veiðið", "veiða"],
            past: ["veiddi", "veiddir", "veiddi", "veiddum", "veidduð", "veiddu"], pp: "veitt" },
    ex: { is: "Pabbi veiðir í ánni á sumrin.", en: "Dad fishes in the river in the summer." } },

  { w: "tapa", en: "to lose", pos: "verb", topic: "sport-verbs", unit: 14, cefr: "A2", gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["tapa", "tapar", "tapar", "töpum", "tapið", "tapa"],
            past: ["tapaði", "tapaðir", "tapaði", "töpuðum", "töpuðuð", "töpuðu"], pp: "tapað" },
    ex: { is: "Liðið mitt tapar aldrei leik.", en: "My team never loses a match." } },

  { w: "skemmtilegur", en: "fun, enjoyable", pos: "adj", topic: "describing", unit: 14, cefr: "A2",
    decl: { nom: ["skemmtilegur", "skemmtileg", "skemmtilegt"], comp: "skemmtilegri", sup: "skemmtilegastur" },
    ex: { is: "Þetta er skemmtilegt áhugamál.", en: "This is a fun hobby." } },

  { w: "leiðinlegur", en: "boring, dull", pos: "adj", topic: "describing", unit: 14, cefr: "A2",
    decl: { nom: ["leiðinlegur", "leiðinleg", "leiðinlegt"], comp: "leiðinlegri", sup: "leiðinlegastur" },
    ex: { is: "Leikurinn var langur og leiðinlegur.", en: "The match was long and boring." } },

  { w: "sig", en: "himself, herself, themselves (reflexive)", pos: "pron", topic: "grammar", unit: 14, cefr: "A2",
    ex: { is: "Hún æfir sig á hverjum degi.", en: "She practises every day." } },

  { w: "enginn", en: "nobody, no, none", pos: "pron", topic: "grammar", unit: 14, cefr: "A2",
    ex: { is: "Það er enginn heima.", en: "There is nobody home." } },

  { w: "neinn", en: "any, anybody (after ekki)", pos: "pron", topic: "grammar", unit: 14, cefr: "A2",
    ex: { is: "Ég ætla ekki að hitta neinn í kvöld.", en: "I'm not going to meet anyone tonight." } },

  { w: "tvennir", en: "two (pairs, sets)", pos: "num", topic: "grammar", unit: 14, cefr: "A2",
    ex: { is: "Ég á tvenna skó.", en: "I own two pairs of shoes." } },

  { w: "þrennir", en: "three (pairs, sets)", pos: "num", topic: "grammar", unit: 14, cefr: "A2",
    ex: { is: "Þrennir tónleikar eru í bænum um helgina.", en: "There are three concerts in town this weekend." } }
];

export default unit;
