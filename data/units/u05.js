export const unit = {
  id: 5,
  slug: "u05",
  title: "Ég ætla að fá…",
  en: "I would like…",
  cefr: "A1.1",
  icon: "🛍️",
  blurb: "Order, pay, and meet the four cases across a bakery counter.",
  canDo: [
    "Ask for what I want in a shop, a bakery or a café",
    "Ask what something costs and pay for it",
    "Put a noun into the accusative after fá, kaupa and langa í",
    "Name the four Icelandic cases and say what each one does"
  ],
  lessons: [
    {
      n: 1,
      id: "u05l1",
      kind: "lesson",
      title: "Ég ætla að fá…",
      en: "I'll have…",
      goal: "Ask for things in a shop and name what is on the shelf.",
      minutes: 9,
      icon: "🛒",
      teach: [
        {
          h: "The four words that open every door",
          p: "Ég ætla að fá… gets you through almost any shop or café. It means \"I intend to get\". Say it, then name the thing you want.",
          ex: [
            ["Ég ætla að fá kaffi.", "I'll have a coffee."],
            ["Ég ætla að fá brauð og mjólk.", "I'll have bread and milk."]
          ],
          tip: "Icelandic barely uses a word for \"please\". Tone does that job here."
        },
        {
          h: "The thing you ask for changes shape",
          p: "fá is followed by the accusative, þolfall. Masculine words drop their -ur. Feminine -a words end in -u. Neuter words do not move at all.",
          table: {
            cols: ["kyn", "orðabókarmynd", "eftir fá"],
            rows: [
              ["kk", "snúður", "snúð"],
              ["kvk", "kaka", "köku"],
              ["hk", "brauð", "brauð"]
            ]
          },
          tip: "Neuter is the lazy gender. Enjoy it while it lasts."
        },
        {
          h: "Where you buy things",
          list: [
            "búð — a shop, any shop",
            "bakarí — bakery, warm at seven, empty by three",
            "söluturn — kiosk: hot dogs, sweets, newspapers",
            "kaffihús — café"
          ]
        }
      ],
      vocab: ["búð", "bakarí", "söluturn", "kaffihús", "brauð", "mjólk", "ostur", "smjör", "snúður", "fá", "ætla"],
      items: [
        {
          t: "choice",
          q: "You want a coffee. What do you say?",
          opts: ["Ég ætla að fá kaffi", "Ég er kaffi", "Kaffi er ég", "Ég ætla kaffi"],
          a: "Ég ætla að fá kaffi",
          note: "ætla needs að + an infinitive, and the infinitive here is fá.",
          tags: ["phrase:ætla að fá"]
        },
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["búð", "shop"],
            ["bakarí", "bakery"],
            ["kaffihús", "café"],
            ["söluturn", "kiosk"],
            ["brauð", "bread"],
            ["mjólk", "milk"]
          ]
        },
        {
          t: "gender",
          word: "mjólk",
          a: "kvk",
          note: "mjólk is feminine, and it never changes in the accusative."
        },
        {
          t: "gender",
          word: "brauð",
          a: "hk",
          note: "Short words with no ending are very often neuter."
        },
        {
          t: "build",
          q: "I'll have bread and milk.",
          a: "Ég ætla að fá brauð og mjólk",
          extra: ["með", "mjólkina", "er"],
          tags: ["case:acc"]
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég ætla að fá ___ .",
          base: "snúður",
          opts: ["snúður", "snúð", "snúði"],
          a: "snúð",
          case: "ÞF",
          why: "fá takes the accusative, and masculine -ur falls off.",
          mode: "choice",
          tags: ["case:acc", "noun:masc"]
        },
        {
          t: "listen",
          speak: "Ég ætla að fá ost.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Ég ætla að fá ost.", "Ég ætla að fá ís.", "Ég ætla að fá epli."],
          a: "Ég ætla að fá ost."
        },
        {
          t: "choice",
          q: "Where do you buy bread at seven in the morning?",
          opts: ["bakarí", "kaffihús", "söluturn", "verslun"],
          a: "bakarí"
        },
        {
          t: "type",
          q: "Type \"I'll have milk.\"",
          a: "Ég ætla að fá mjólk",
          hint: "mjólk looks the same in the accusative."
        },
        {
          t: "speak",
          is: "Ég ætla að fá snúð.",
          en: "I'll have a cinnamon roll.",
          tip: "ð is soft and voiced, like the th in \"other\"."
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég ætla að fá ___ .",
          base: "kaka",
          a: "köku",
          case: "ÞF",
          why: "Feminine -a becomes -u, and a turns into ö in front of it.",
          mode: "type",
          tags: ["case:acc", "noun:fem", "umlaut:u"]
        }
      ]
    },
    {
      n: 2,
      id: "u05l2",
      kind: "lesson",
      title: "Á kaffihúsinu",
      en: "At the café",
      goal: "Order a drink, ask a price, and say what you fancy.",
      minutes: 10,
      icon: "☕",
      teach: [
        {
          h: "Two ways to want something",
          p: "Ég ætla að fá… is an order. Mig langar í… is a wish. Both are followed by the accusative, and both are everywhere.",
          ex: [
            ["Ég ætla að fá kaffi og köku.", "I'll have a coffee and a cake."],
            ["Mig langar í súpu.", "I fancy some soup."]
          ],
          tip: "langa never says ég. The person who wants sits in the accusative: mig, þig, hana."
        },
        {
          h: "Asking the price",
          p: "kosta is a plain -a verb. The thing being sold does the costing, so it stays in the nominative.",
          ex: [
            ["Hvað kostar kakan?", "How much is the cake?"],
            ["Hvað kostar þetta mikið?", "What does this come to?"]
          ],
          tip: "Add mikið when you mean the whole bill, not one item."
        },
        {
          h: "Hot and cold, by gender",
          table: {
            cols: ["", "kk", "kvk", "hk"],
            rows: [
              ["heitur", "heitur", "heit", "heitt"],
              ["kaldur", "kaldur", "köld", "kalt"]
            ]
          },
          tip: "kaldur is the tricky one: the feminine takes the u-umlaut, köld."
        }
      ],
      vocab: ["kaffi", "te", "kaka", "súpa", "samloka", "glas", "bolli", "vatn", "langa", "kosta", "heitur", "kaldur"],
      items: [
        {
          t: "choice",
          q: "You are dreaming of soup. Which sentence is right?",
          opts: ["Mig langar í súpu", "Ég langa í súpa", "Mig langar súpu", "Ég langar í súpan"],
          a: "Mig langar í súpu",
          note: "langa puts the wanter in the accusative and the wish behind í.",
          tags: ["impersonal", "case:acc"]
        },
        {
          t: "fill",
          q: "Fill the gap.",
          sentence: "Mig langar í ___ .",
          base: "kaffi",
          opts: ["kaffi", "kaffið", "kaffis"],
          a: "kaffi",
          case: "ÞF",
          why: "Neuter nouns look identical in the nominative and the accusative.",
          mode: "choice"
        },
        {
          t: "build",
          q: "How much is the cake?",
          a: "Hvað kostar kakan",
          extra: ["kökuna", "er", "mikið"],
          tags: ["case:nom"]
        },
        {
          t: "type",
          q: "Type \"I'll have a coffee and a cake.\"",
          a: "Ég ætla að fá kaffi og köku",
          hint: "kaka → köku"
        },
        {
          t: "listen",
          speak: "Hvað kostar þetta?",
          q: "Type what you hear.",
          mode: "type",
          a: "Hvað kostar þetta?"
        },
        {
          t: "match",
          q: "Match the café words",
          pairs: [
            ["kaffi", "coffee"],
            ["te", "tea"],
            ["vatn", "water"],
            ["súpa", "soup"],
            ["samloka", "sandwich"],
            ["bolli", "cup"]
          ]
        },
        {
          t: "gender",
          word: "súpa",
          a: "kvk",
          note: "Nouns ending in -a are nearly always feminine."
        },
        {
          t: "choice",
          q: "Say \"The soup is hot.\"",
          opts: ["Súpan er heit", "Súpan er heitur", "Súpan er heitt", "Súpan eru heit"],
          a: "Súpan er heit",
          note: "The adjective agrees with súpa, which is feminine."
        },
        {
          t: "fill",
          q: "Make the adjective agree.",
          sentence: "Kaffið er ___ .",
          base: "heitur",
          a: "heitt",
          case: "NF",
          why: "kaffi is neuter, so heitur becomes heitt.",
          mode: "type",
          tags: ["adj:agreement"]
        },
        {
          t: "speak",
          is: "Mig langar í heitt kaffi.",
          en: "I fancy a hot coffee.",
          tip: "Stress the first syllable of every word: MIG LANG-ar."
        },
        {
          t: "type",
          q: "Type \"How much is the soup?\"",
          a: "Hvað kostar súpan",
          hint: "The soup is the subject here."
        }
      ]
    },
    {
      n: 3,
      id: "u05l3",
      kind: "grammar",
      title: "Föllin fjögur",
      en: "The four cases",
      goal: "Meet nefnifall, þolfall, þágufall and eignarfall, and learn the first two properly.",
      minutes: 13,
      icon: "🧱",
      teach: [
        {
          h: "Why Icelandic words wobble",
          p: "English shows who did what to whom by word order. Icelandic marks it on the word itself. Every noun has four shapes, and the sentence decides which one you reach for.",
          ex: [
            ["Snúðurinn kostar 450 krónur.", "The roll costs 450 krónur."],
            ["Ég ætla að fá snúðinn.", "I'll have the roll."]
          ],
          tip: "Same roll, two shapes. Doing something: snúðurinn. Being got: snúðinn."
        },
        {
          h: "The four, in the order Icelanders recite them",
          p: "Learn this order now. Every table you will ever see runs top to bottom in it.",
          table: {
            cols: ["fall", "English", "job", "cue"],
            rows: [
              ["nefnifall", "nominative", "the subject", "hér er…"],
              ["þolfall", "accusative", "the direct object", "um…"],
              ["þágufall", "dative", "after most prepositions", "frá…"],
              ["eignarfall", "genitive", "possession, measure", "til…"]
            ]
          },
          tip: "Short forms: NF, ÞF, ÞGF, EF. This unit lives in the first two."
        },
        {
          h: "Nominative against accusative, bare",
          table: {
            cols: ["", "kk snúður", "kvk kaka", "hk brauð"],
            rows: [
              ["NF", "snúður", "kaka", "brauð"],
              ["ÞF", "snúð", "köku", "brauð"]
            ]
          },
          tip: "One gender loses an ending, one swaps a vowel, one does nothing."
        },
        {
          h: "Now glue the article on",
          p: "Icelandic has no separate word for \"the\". It sticks it to the end of the noun. Watch the masculine: -urinn in the nominative, plain -inn in the accusative.",
          table: {
            cols: ["", "NF", "ÞF"],
            rows: [
              ["kk", "snúðurinn", "snúðinn"],
              ["kvk", "kakan", "kökuna"],
              ["hk", "brauðið", "brauðið"]
            ]
          },
          tip: "Feminine is the only one that adds a whole syllable: -in becomes -ina."
        }
      ],
      vocab: ["fall", "epli", "ís", "poki", "verð", "kaupa", "selja", "dýr", "ódýr", "peningur"],
      items: [
        {
          t: "table",
          q: "Complete snúður (kk).",
          cols: ["", "NF", "ÞF"],
          rows: [
            { label: "án greinis", cells: ["snúður", "snúð"], blank: [1] },
            { label: "með greini", cells: ["snúðurinn", "snúðinn"], blank: [1] }
          ]
        },
        {
          t: "table",
          q: "Complete kaka (kvk).",
          cols: ["", "NF", "ÞF"],
          rows: [
            { label: "án greinis", cells: ["kaka", "köku"], blank: [1] },
            { label: "með greini", cells: ["kakan", "kökuna"], blank: [1] }
          ]
        },
        {
          t: "table",
          q: "Name the cases in the Icelandic order.",
          cols: ["nr", "fall", "English"],
          rows: [
            { label: "1", cells: ["nefnifall", "nominative"], blank: [0] },
            { label: "2", cells: ["þolfall", "accusative"], blank: [0] },
            { label: "3", cells: ["þágufall", "dative"], blank: [] },
            { label: "4", cells: ["eignarfall", "genitive"], blank: [] }
          ]
        },
        {
          t: "fill",
          q: "Which shape does the subject take?",
          sentence: "___ kostar 450 krónur.",
          base: "snúðurinn",
          opts: ["Snúðurinn", "Snúðinn", "Snúðnum"],
          a: "Snúðurinn",
          case: "NF",
          why: "The roll is doing the costing, so it is the subject: nominative.",
          mode: "choice",
          tags: ["case:nom"]
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég ætla að fá ___ .",
          base: "eplið",
          a: "eplið",
          case: "ÞF",
          why: "Neuter never moves between the nominative and the accusative.",
          mode: "type",
          tags: ["case:acc", "noun:neut"]
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég kaupi ___ .",
          base: "pokinn",
          a: "pokann",
          case: "ÞF",
          why: "Masculine -i becomes -a, then the article -nn follows.",
          mode: "type",
          tags: ["case:acc", "noun:masc"]
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Hann selur ___ .",
          base: "ísinn",
          opts: ["ísinn", "ísnum", "íssins"],
          a: "ísinn",
          case: "ÞF",
          why: "selja takes the accusative, and ís looks the same in both cases.",
          mode: "choice"
        },
        {
          t: "choice",
          q: "Which sentence puts the object in the right case?",
          opts: ["Ég kaupi kökuna", "Ég kaupi kakan", "Ég kaupi kökunni"],
          a: "Ég kaupi kökuna",
          note: "kaupa takes the accusative: kakan becomes kökuna."
        },
        {
          t: "build",
          q: "The bread is cheap.",
          a: "Brauðið er ódýrt",
          extra: ["ódýr", "dýrt", "eru"],
          tags: ["adj:agreement", "noun:neut"]
        },
        {
          t: "gender",
          word: "epli",
          a: "hk",
          note: "Neuter words in -i, like epli and herbergi, sit still in the accusative."
        },
        {
          t: "choice",
          q: "Which case follows fá?",
          opts: ["nefnifall", "þolfall", "þágufall", "eignarfall"],
          a: "þolfall",
          note: "fá, kaupa, selja and borga all take þolfall."
        },
        {
          t: "type",
          q: "Type \"I'll have the roll.\"",
          a: "Ég ætla að fá snúðinn",
          hint: "The definite accusative of snúður."
        },
        {
          t: "speak",
          is: "Þetta er of dýrt.",
          en: "That is too expensive.",
          tip: "ý and í sound the same: a long ee."
        }
      ]
    },
    {
      n: 4,
      id: "u05l4",
      kind: "lesson",
      title: "Hvað kostar þetta?",
      en: "What does this cost?",
      goal: "Handle prices, money and quantities at the till.",
      minutes: 10,
      icon: "💳",
      teach: [
        {
          h: "Money",
          p: "Prices come in krónur, and the numbers are big: a coffee sits somewhere near 700 krónur. kosta puts the price in the accusative, where krónur happens to look unchanged.",
          ex: [
            ["Kaffið kostar sjö hundruð krónur.", "The coffee costs seven hundred krónur."],
            ["Hvað kostar þetta mikið?", "What does this come to?"]
          ],
          tip: "Icelanders say the number and then krónur, never the other way round."
        },
        {
          h: "At the till",
          table: {
            cols: ["íslenska", "English"],
            rows: [
              ["Má ég borga með greiðslukorti?", "May I pay by card?"],
              ["Ég er með peninga.", "I have cash on me."],
              ["Má ég fá poka?", "Could I have a bag?"],
              ["Gjörðu svo vel.", "Here you are."]
            ]
          },
          tip: "vera með plus the accusative is the everyday way to say you have something on you."
        },
        {
          h: "How much of it",
          p: "For a quantity, name the container or the measure, then hang the stuff off it with af plus the dative.",
          ex: [
            ["einn lítri af mjólk", "one litre of milk"],
            ["tveir bollar af kaffi", "two cups of coffee"],
            ["glas af vatni", "a glass of water"]
          ],
          tip: "af always takes the dative: mjólk stays put, but vatn becomes vatni."
        }
      ],
      vocab: ["króna", "peningur", "reikningur", "greiðslukort", "flaska", "lítri", "borga", "mega", "mikið", "bara", "gjörðu svo vel"],
      items: [
        {
          t: "build",
          q: "May I pay by card?",
          a: "Má ég borga með greiðslukorti",
          extra: ["greiðslukort", "er", "fá"],
          tags: ["prep:með", "case:dat"]
        },
        {
          t: "fill",
          q: "Put the noun into the dative.",
          sentence: "Ég ætla að fá glas af ___ .",
          base: "vatn",
          a: "vatni",
          case: "ÞGF",
          why: "af always takes the dative.",
          mode: "type",
          tags: ["prep:af", "case:dat"]
        },
        {
          t: "fill",
          q: "Choose the right form.",
          sentence: "Kakan kostar sex hundruð ___ .",
          base: "króna",
          opts: ["krónur", "krónum", "króna"],
          a: "krónur",
          case: "ÞF",
          why: "kosta takes the accusative, and the plural krónur is the same in NF and ÞF.",
          mode: "choice"
        },
        {
          t: "choice",
          q: "You want the bill. What do you say?",
          opts: ["Má ég fá reikninginn?", "Má ég fá pokann?", "Hvað kostar reikningur?", "Ég er með reikninginn."],
          a: "Má ég fá reikninginn?",
          note: "mega is followed by a bare infinitive, with no að."
        },
        {
          t: "match",
          q: "Match the money words",
          pairs: [
            ["króna", "króna, the currency"],
            ["peningur", "money"],
            ["reikningur", "bill"],
            ["poki", "bag"],
            ["flaska", "bottle"],
            ["lítri", "litre"]
          ]
        },
        {
          t: "type",
          q: "Type \"What does this come to?\"",
          a: "Hvað kostar þetta mikið",
          hint: "mikið means the whole total."
        },
        {
          t: "gender",
          word: "reikningur",
          a: "kk",
          note: "Words in -ingur are masculine, and drop -ur in the accusative: reikning."
        },
        {
          t: "listen",
          speak: "Ég er með peninga.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Ég er með peninga.", "Ég er með poka.", "Ég er með reikninginn."],
          a: "Ég er með peninga."
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Má ég fá ___ ?",
          base: "pokinn",
          a: "pokann",
          case: "ÞF",
          why: "fá takes the accusative, article and all.",
          mode: "type"
        },
        {
          t: "speak",
          is: "Hvað kostar þetta mikið?",
          en: "What does this come to?",
          tip: "hv is pronounced kv: \"kvað\"."
        },
        {
          t: "choice",
          q: "What does vera með mean here?",
          opts: ["to have something on you", "to belong to someone", "to want something", "to cost something"],
          a: "to have something on you",
          note: "vera með plus accusative covers most of what English does with \"have\"."
        }
      ]
    },
    {
      n: 5,
      id: "u05l5",
      kind: "story",
      title: "Þrír snúðar og eitt kaffi",
      en: "Three rolls and one coffee",
      goal: "Follow a whole bakery transaction from greeting to bag.",
      minutes: 12,
      icon: "🥐",
      teach: [
        {
          h: "Before you read",
          p: "Anna wants rolls. Kári has stood at this till since 1998 and has firm opinions about cash.",
          list: [
            "snúður — cinnamon roll",
            "poki — bag",
            "eitthvað fleira? — anything else?"
          ]
        },
        {
          h: "Numbers in the till",
          table: {
            cols: ["íslenska", "tala"],
            rows: [
              ["fimmtíu", "50"],
              ["fjögur hundruð", "400"],
              ["tvö þúsund", "2000"]
            ]
          }
        }
      ],
      story: {
        title: "Í bakaríinu á þriðjudegi",
        lines: [
          { sp: "Anna", is: "Góðan daginn. Ég ætla að fá þrjá snúða.", en: "Good day. I'll have three cinnamon rolls." },
          { sp: "Kári", is: "Gjörðu svo vel. Eitthvað fleira?", en: "Here you are. Anything else?" },
          { sp: "Anna", is: "Já, eitt kaffi. Er kaffið heitt?", en: "Yes, one coffee. Is the coffee hot?" },
          { sp: "Kári", is: "Kaffið er alltaf heitt. Vindurinn úti er kaldur.", en: "The coffee is always hot. The wind outside is cold." },
          { sp: "Anna", is: "Hvað kostar þetta mikið?", en: "What does this come to?" },
          { sp: "Kári", is: "Tvö þúsund og fjögur hundruð krónur.", en: "Two thousand four hundred krónur." },
          { sp: "Anna", is: "Má ég borga með greiðslukorti?", en: "May I pay by card?" },
          { sp: "Kári", is: "Auðvitað. Enginn er með peninga lengur.", en: "Of course. Nobody carries cash any more." },
          { sp: "Kári", is: "Viltu poka? Hann kostar fimmtíu krónur.", en: "Do you want a bag? It costs fifty krónur." },
          { sp: "Anna", is: "Nei takk. Ég er með poka.", en: "No thanks. I have a bag on me." }
        ],
        glossary: [
          ["eitthvað fleira", "anything else"],
          ["alltaf", "always"],
          ["vindurinn", "the wind"],
          ["úti", "outside"],
          ["auðvitað", "of course"],
          ["enginn", "nobody"],
          ["lengur", "any more"],
          ["nei takk", "no thanks"]
        ]
      },
      vocab: ["snúður", "kaffi", "poki", "peningur", "greiðslukort", "gjörðu svo vel"],
      items: [
        {
          t: "choice",
          q: "What does Anna order first?",
          opts: ["þrjá snúða", "eitt kaffi", "einn poka", "tvær kökur"],
          a: "þrjá snúða"
        },
        {
          t: "choice",
          q: "Why does Kári mention the wind?",
          opts: ["The coffee is hot and the day is not", "The bakery is closing", "The bag costs extra", "He wants to sell her soup"],
          a: "The coffee is hot and the day is not"
        },
        {
          t: "fill",
          q: "Numbers decline too.",
          sentence: "Ég ætla að fá ___ snúða.",
          base: "þrír",
          opts: ["þrír", "þrjá", "þremur"],
          a: "þrjá",
          case: "ÞF",
          why: "Masculine þrír becomes þrjá in the accusative.",
          mode: "choice",
          tags: ["num:1-4", "case:acc"]
        },
        {
          t: "build",
          q: "May I pay by card?",
          a: "Má ég borga með greiðslukorti",
          extra: ["poka", "fá", "kortið"]
        },
        {
          t: "type",
          q: "Type \"The coffee is always hot.\"",
          a: "Kaffið er alltaf heitt",
          hint: "kaffi is neuter."
        },
        {
          t: "listen",
          speak: "Eitthvað fleira?",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Eitthvað fleira?", "Hvað kostar þetta?", "Ertu með poka?"],
          a: "Eitthvað fleira?"
        },
        {
          t: "match",
          q: "Match the counter phrases",
          pairs: [
            ["gjörðu svo vel", "here you are"],
            ["eitthvað fleira", "anything else"],
            ["auðvitað", "of course"],
            ["nei takk", "no thanks"],
            ["alltaf", "always"]
          ]
        },
        {
          t: "choice",
          q: "How much is the bag?",
          opts: ["fimmtíu krónur", "fimm hundruð krónur", "fjögur hundruð krónur", "ekkert"],
          a: "fimmtíu krónur"
        },
        {
          t: "fill",
          q: "The bag is the subject here.",
          sentence: "___ kostar fimmtíu krónur.",
          base: "poki með greini",
          a: "Pokinn",
          case: "NF",
          why: "Subjects take the nominative, article and all.",
          mode: "type",
          tags: ["case:nom"]
        },
        {
          t: "speak",
          is: "Gjörðu svo vel.",
          en: "Here you are.",
          tip: "It comes out fast, almost as one word."
        },
        {
          t: "gender",
          word: "kaffi",
          a: "hk",
          note: "kaffi, te, brauð, vatn: the café counter is mostly neuter."
        }
      ]
    },
    {
      n: 6,
      id: "u05l6",
      kind: "checkpoint",
      title: "Að borga og fara",
      en: "Paying up",
      goal: "Prove you can shop, order and count your change.",
      minutes: 12,
      icon: "🧾",
      teach: [
        {
          h: "What you now control",
          list: [
            "Ég ætla að fá… and Mig langar í… , both with the accusative",
            "Hvað kostar þetta? and Hvað kostar þetta mikið?",
            "kaupa, selja, borga and vera með, all with the accusative",
            "The nominative and accusative of all three genders, with and without the article",
            "af plus the dative for quantities: glas af vatni"
          ]
        }
      ],
      vocab: ["búð", "verð", "kaupa", "selja", "borga", "króna", "flaska", "mjólk", "súpa", "fiskur"],
      items: [
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég ætla að fá ___ .",
          base: "kakan",
          opts: ["kakan", "kökuna", "kökunni"],
          a: "kökuna",
          case: "ÞF",
          why: "fá takes the accusative: feminine -in becomes -ina.",
          mode: "choice"
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Mig langar í ___ .",
          base: "súpa",
          a: "súpu",
          case: "ÞF",
          why: "langa í always takes the accusative.",
          mode: "type"
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Hann selur ___ .",
          base: "fiskur",
          a: "fisk",
          case: "ÞF",
          why: "selja takes the accusative, and masculine -ur falls off.",
          mode: "type"
        },
        {
          t: "table",
          q: "Complete the definite forms.",
          cols: ["", "NF", "ÞF"],
          rows: [
            { label: "brauð (hk)", cells: ["brauðið", "brauðið"], blank: [1] },
            { label: "búð (kvk)", cells: ["búðin", "búðina"], blank: [1] }
          ]
        },
        {
          t: "build",
          q: "How much does the coffee cost?",
          a: "Hvað kostar kaffið",
          extra: ["mikið", "er", "kaffi"]
        },
        {
          t: "type",
          q: "Type \"I have money on me.\"",
          a: "Ég er með peninga",
          hint: "vera með takes the accusative."
        },
        {
          t: "choice",
          q: "Which case follows the preposition af?",
          opts: ["nefnifall", "þolfall", "þágufall", "eignarfall"],
          a: "þágufall"
        },
        {
          t: "gender",
          word: "flaska",
          a: "kvk"
        },
        {
          t: "gender",
          word: "verð",
          a: "hk"
        },
        {
          t: "listen",
          speak: "Má ég fá reikninginn?",
          q: "Type what you hear.",
          mode: "type",
          a: "Má ég fá reikninginn?"
        },
        {
          t: "match",
          q: "Match the shop words",
          pairs: [
            ["búð", "shop"],
            ["verð", "price"],
            ["ódýr", "cheap"],
            ["dýr", "expensive"],
            ["kaupa", "to buy"],
            ["selja", "to sell"]
          ]
        },
        {
          t: "choice",
          q: "The assistant hands you your change and says…",
          opts: ["Gjörðu svo vel", "Hvað kostar þetta", "Mig langar í kaffi", "Ég ætla að fá poka"],
          a: "Gjörðu svo vel"
        },
        {
          t: "fill",
          q: "Choose the right form after af.",
          sentence: "Ég kaupi lítra af ___ .",
          base: "mjólk",
          opts: ["mjólk", "mjólkin", "mjólkina"],
          a: "mjólk",
          case: "ÞGF",
          why: "af takes the dative, where mjólk looks unchanged.",
          mode: "choice"
        },
        {
          t: "speak",
          is: "Ég ætla að fá tvo bolla af kaffi.",
          en: "I'll have two cups of coffee.",
          tip: "tvo is the masculine accusative of tveir."
        }
      ]
    }
  ]
};

export const vocab = [
  { w: "búð", en: "shop", pos: "noun", g: "kvk", topic: "shopping", unit: 5, cefr: "A1",
    forms: { sg: ["búð", "búð", "búð", "búðar"], pl: ["búðir", "búðir", "búðum", "búða"] },
    ex: { is: "Búðin opnar klukkan tíu.", en: "The shop opens at ten." } },

  { w: "verslun", en: "store, shop", pos: "noun", g: "kvk", topic: "shopping", unit: 5, cefr: "A1",
    forms: { sg: ["verslun", "verslun", "verslun", "verslunar"], pl: ["verslanir", "verslanir", "verslunum", "verslana"] },
    ex: { is: "Verslunin er lokuð á sunnudögum.", en: "The store is closed on Sundays." } },

  { w: "bakarí", en: "bakery", pos: "noun", g: "hk", topic: "shopping", unit: 5, cefr: "A1",
    forms: { sg: ["bakarí", "bakarí", "bakaríi", "bakarís"], pl: ["bakarí", "bakarí", "bakaríum", "bakaría"] },
    ex: { is: "Ég kaupi brauð í bakaríinu.", en: "I buy bread at the bakery." } },

  { w: "kaffihús", en: "café", pos: "noun", g: "hk", topic: "shopping", unit: 5, cefr: "A1",
    forms: { sg: ["kaffihús", "kaffihús", "kaffihúsi", "kaffihúss"], pl: ["kaffihús", "kaffihús", "kaffihúsum", "kaffihúsa"] },
    ex: { is: "Við sitjum á kaffihúsi.", en: "We are sitting in a café." } },

  { w: "söluturn", en: "kiosk", pos: "noun", g: "kk", topic: "shopping", unit: 5, cefr: "A1",
    forms: { sg: ["söluturn", "söluturn", "söluturni", "söluturns"], pl: ["söluturnar", "söluturna", "söluturnum", "söluturna"] },
    ex: { is: "Ég kaupi pylsu í söluturninum.", en: "I buy a hot dog at the kiosk." } },

  { w: "kaffi", en: "coffee", pos: "noun", g: "hk", topic: "drink", unit: 5, cefr: "A1",
    forms: { sg: ["kaffi", "kaffi", "kaffi", "kaffis"], pl: null },
    ex: { is: "Kaffið er heitt.", en: "The coffee is hot." } },

  { w: "te", en: "tea", pos: "noun", g: "hk", topic: "drink", unit: 5, cefr: "A1",
    forms: { sg: ["te", "te", "tei", "tes"], pl: null },
    ex: { is: "Ég drekk te á kvöldin.", en: "I drink tea in the evenings." } },

  { w: "mjólk", en: "milk", pos: "noun", g: "kvk", topic: "drink", unit: 5, cefr: "A1",
    forms: { sg: ["mjólk", "mjólk", "mjólk", "mjólkur"], pl: null },
    ex: { is: "Mjólkin er köld.", en: "The milk is cold." } },

  { w: "vatn", en: "water", pos: "noun", g: "hk", topic: "drink", unit: 5, cefr: "A1",
    forms: { sg: ["vatn", "vatn", "vatni", "vatns"], pl: ["vötn", "vötn", "vötnum", "vatna"] },
    ex: { is: "Má ég fá glas af vatni?", en: "Could I have a glass of water?" } },

  { w: "gos", en: "soft drink", pos: "noun", g: "hk", topic: "drink", unit: 5, cefr: "A1",
    forms: { sg: ["gos", "gos", "gosi", "goss"], pl: ["gos", "gos", "gosum", "gosa"] },
    ex: { is: "Hann kaupir gos í söluturninum.", en: "He buys a soft drink at the kiosk." } },

  { w: "brauð", en: "bread", pos: "noun", g: "hk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["brauð", "brauð", "brauði", "brauðs"], pl: ["brauð", "brauð", "brauðum", "brauða"] },
    ex: { is: "Brauðið er nýtt.", en: "The bread is fresh." } },

  { w: "smjör", en: "butter", pos: "noun", g: "hk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["smjör", "smjör", "smjöri", "smjörs"], pl: null },
    ex: { is: "Ég ætla að fá smjör og ost.", en: "I'll have butter and cheese." } },

  { w: "ostur", en: "cheese", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["ostur", "ost", "osti", "osts"], pl: ["ostar", "osta", "ostum", "osta"] },
    ex: { is: "Osturinn er dýr.", en: "The cheese is expensive." } },

  { w: "epli", en: "apple", pos: "noun", g: "hk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["epli", "epli", "epli", "eplis"], pl: ["epli", "epli", "eplum", "epla"] },
    ex: { is: "Eplin eru græn.", en: "The apples are green." } },

  { w: "banani", en: "banana", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["banani", "banana", "banana", "banana"], pl: ["bananar", "banana", "banönum", "banana"] },
    ex: { is: "Ég ætla að fá tvo banana.", en: "I'll have two bananas." } },

  { w: "kaka", en: "cake", pos: "noun", g: "kvk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["kaka", "köku", "köku", "köku"], pl: ["kökur", "kökur", "kökum", "kakna"] },
    ex: { is: "Kakan kostar sex hundruð krónur.", en: "The cake costs six hundred krónur." } },

  { w: "snúður", en: "cinnamon roll", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["snúður", "snúð", "snúði", "snúðs"], pl: ["snúðar", "snúða", "snúðum", "snúða"] },
    ex: { is: "Snúðurinn er heitur.", en: "The cinnamon roll is warm." } },

  { w: "samloka", en: "sandwich", pos: "noun", g: "kvk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["samloka", "samloku", "samloku", "samloku"], pl: ["samlokur", "samlokur", "samlokum", "samlokna"] },
    ex: { is: "Ég ætla að fá samloku.", en: "I'll have a sandwich." } },

  { w: "súpa", en: "soup", pos: "noun", g: "kvk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["súpa", "súpu", "súpu", "súpu"], pl: ["súpur", "súpur", "súpum", "súpna"] },
    ex: { is: "Súpan er heit.", en: "The soup is hot." } },

  { w: "pylsa", en: "hot dog, sausage", pos: "noun", g: "kvk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["pylsa", "pylsu", "pylsu", "pylsu"], pl: ["pylsur", "pylsur", "pylsum", "pylsna"] },
    ex: { is: "Pylsan kostar fimm hundruð krónur.", en: "The hot dog costs five hundred krónur." } },

  { w: "ís", en: "ice cream", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["ís", "ís", "ís", "íss"], pl: ["ísar", "ísa", "ísum", "ísa"] },
    ex: { is: "Mig langar í ís.", en: "I fancy an ice cream." } },

  { w: "fiskur", en: "fish", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["fiskur", "fisk", "fiski", "fisks"], pl: ["fiskar", "fiska", "fiskum", "fiska"] },
    ex: { is: "Þeir selja fisk í búðinni.", en: "They sell fish in the shop." } },

  { w: "kjöt", en: "meat", pos: "noun", g: "hk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["kjöt", "kjöt", "kjöti", "kjöts"], pl: null },
    ex: { is: "Kjötið er dýrt á Íslandi.", en: "Meat is expensive in Iceland." } },

  { w: "sykur", en: "sugar", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["sykur", "sykur", "sykri", "sykurs"], pl: null },
    ex: { is: "Ég drekk kaffi án sykurs.", en: "I drink coffee without sugar." } },

  { w: "matur", en: "food", pos: "noun", g: "kk", topic: "food", unit: 5, cefr: "A1",
    forms: { sg: ["matur", "mat", "mat", "matar"], pl: null },
    ex: { is: "Við kaupum mat í búðinni.", en: "We buy food in the shop." } },

  { w: "króna", en: "króna (currency)", pos: "noun", g: "kvk", topic: "money", unit: 5, cefr: "A1",
    forms: { sg: ["króna", "krónu", "krónu", "krónu"], pl: ["krónur", "krónur", "krónum", "króna"] },
    ex: { is: "Þetta kostar þúsund krónur.", en: "This costs a thousand krónur." } },

  { w: "peningur", en: "money", pos: "noun", g: "kk", topic: "money", unit: 5, cefr: "A1",
    forms: { sg: ["peningur", "pening", "peningi", "penings"], pl: ["peningar", "peninga", "peningum", "peninga"] },
    ex: { is: "Ég er með peninga.", en: "I have cash on me." } },

  { w: "verð", en: "price", pos: "noun", g: "hk", topic: "money", unit: 5, cefr: "A1",
    forms: { sg: ["verð", "verð", "verði", "verðs"], pl: ["verð", "verð", "verðum", "verða"] },
    ex: { is: "Verðið er of hátt.", en: "The price is too high." } },

  { w: "reikningur", en: "bill", pos: "noun", g: "kk", topic: "money", unit: 5, cefr: "A1",
    forms: { sg: ["reikningur", "reikning", "reikningi", "reiknings"], pl: ["reikningar", "reikninga", "reikningum", "reikninga"] },
    ex: { is: "Má ég fá reikninginn?", en: "Could I have the bill?" } },

  { w: "greiðslukort", en: "payment card", pos: "noun", g: "hk", topic: "money", unit: 5, cefr: "A1",
    forms: { sg: ["greiðslukort", "greiðslukort", "greiðslukorti", "greiðslukorts"], pl: ["greiðslukort", "greiðslukort", "greiðslukortum", "greiðslukorta"] },
    ex: { is: "Ég borga með greiðslukorti.", en: "I pay by card." } },

  { w: "poki", en: "bag", pos: "noun", g: "kk", topic: "containers", unit: 5, cefr: "A1",
    forms: { sg: ["poki", "poka", "poka", "poka"], pl: ["pokar", "poka", "pokum", "poka"] },
    ex: { is: "Pokinn kostar fimmtíu krónur.", en: "The bag costs fifty krónur." } },

  { w: "flaska", en: "bottle", pos: "noun", g: "kvk", topic: "containers", unit: 5, cefr: "A1",
    forms: { sg: ["flaska", "flösku", "flösku", "flösku"], pl: ["flöskur", "flöskur", "flöskum", "flaskna"] },
    ex: { is: "Ég ætla að fá flösku af vatni.", en: "I'll have a bottle of water." } },

  { w: "bolli", en: "cup", pos: "noun", g: "kk", topic: "containers", unit: 5, cefr: "A1",
    forms: { sg: ["bolli", "bolla", "bolla", "bolla"], pl: ["bollar", "bolla", "bollum", "bolla"] },
    ex: { is: "Bollinn er heitur.", en: "The cup is hot." } },

  { w: "glas", en: "glass", pos: "noun", g: "hk", topic: "containers", unit: 5, cefr: "A1",
    forms: { sg: ["glas", "glas", "glasi", "glass"], pl: ["glös", "glös", "glösum", "glasa"] },
    ex: { is: "Má ég fá glas af mjólk?", en: "Could I have a glass of milk?" } },

  { w: "lítri", en: "litre", pos: "noun", g: "kk", topic: "quantities", unit: 5, cefr: "A1",
    forms: { sg: ["lítri", "lítra", "lítra", "lítra"], pl: ["lítrar", "lítra", "lítrum", "lítra"] },
    ex: { is: "Ég kaupi einn lítra af mjólk.", en: "I buy one litre of milk." } },

  { w: "fall", en: "case (grammar)", pos: "noun", g: "hk", topic: "grammar", unit: 5, cefr: "A1",
    forms: { sg: ["fall", "fall", "falli", "falls"], pl: ["föll", "föll", "föllum", "falla"] },
    ex: { is: "Íslenska hefur fjögur föll.", en: "Icelandic has four cases." } },

  { w: "fá", en: "to get, to have (in a shop)", pos: "verb", topic: "shopping", unit: 5, cefr: "A1", gov: "ÞF", vclass: "strong",
    conj: { pres: ["fæ", "færð", "fær", "fáum", "fáið", "fá"],
            past: ["fékk", "fékkst", "fékk", "fengum", "fenguð", "fengu"], pp: "fengið" },
    ex: { is: "Ég ætla að fá kaffi.", en: "I'll have a coffee." } },

  { w: "kaupa", en: "to buy", pos: "verb", topic: "shopping", unit: 5, cefr: "A1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["kaupi", "kaupir", "kaupir", "kaupum", "kaupið", "kaupa"],
            past: ["keypti", "keyptir", "keypti", "keyptum", "keyptuð", "keyptu"], pp: "keypt" },
    ex: { is: "Hún kaupir brauð í bakaríinu.", en: "She buys bread at the bakery." } },

  { w: "selja", en: "to sell", pos: "verb", topic: "shopping", unit: 5, cefr: "A1", gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["sel", "selur", "selur", "seljum", "seljið", "selja"],
            past: ["seldi", "seldir", "seldi", "seldum", "selduð", "seldu"], pp: "selt" },
    ex: { is: "Þeir selja gos og pylsur.", en: "They sell soft drinks and hot dogs." } },

  { w: "borga", en: "to pay", pos: "verb", topic: "money", unit: 5, cefr: "A1", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["borga", "borgar", "borgar", "borgum", "borgið", "borga"],
            past: ["borgaði", "borgaðir", "borgaði", "borguðum", "borguðuð", "borguðu"], pp: "borgað" },
    ex: { is: "Ég borga reikninginn.", en: "I am paying the bill." } },

  { w: "kosta", en: "to cost", pos: "verb", topic: "money", unit: 5, cefr: "A1", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["kosta", "kostar", "kostar", "kostum", "kostið", "kosta"],
            past: ["kostaði", "kostaðir", "kostaði", "kostuðum", "kostuðuð", "kostuðu"], pp: "kostað" },
    ex: { is: "Hvað kostar kaffið?", en: "How much is the coffee?" } },

  { w: "ætla", en: "to intend, to be going to", pos: "verb", topic: "actions", unit: 5, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["ætla", "ætlar", "ætlar", "ætlum", "ætlið", "ætla"],
            past: ["ætlaði", "ætlaðir", "ætlaði", "ætluðum", "ætluðuð", "ætluðu"], pp: "ætlað" },
    ex: { is: "Ég ætla að fá súpu.", en: "I'll have soup." } },

  { w: "langa", en: "to want, to fancy", pos: "verb", topic: "actions", unit: 5, cefr: "A1", gov: "impersonal-ÞF", vclass: "weak-a",
    conj: { pres: ["langar", "langar", "langar", "langar", "langar", "langar"],
            past: ["langaði", "langaði", "langaði", "langaði", "langaði", "langaði"], pp: "langað" },
    ex: { is: "Mig langar í köku.", en: "I fancy a cake." } },

  { w: "vanta", en: "to need, to lack", pos: "verb", topic: "actions", unit: 5, cefr: "A1", gov: "impersonal-ÞF", vclass: "weak-a",
    conj: { pres: ["vantar", "vantar", "vantar", "vantar", "vantar", "vantar"],
            past: ["vantaði", "vantaði", "vantaði", "vantaði", "vantaði", "vantaði"], pp: "vantað" },
    ex: { is: "Mig vantar poka.", en: "I need a bag." } },

  { w: "mega", en: "may, to be allowed to", pos: "verb", topic: "actions", unit: 5, cefr: "A1", vclass: "preterite-present",
    conj: { pres: ["má", "mátt", "má", "megum", "megið", "mega"],
            past: ["mátti", "máttir", "mátti", "máttum", "máttuð", "máttu"], pp: "mátt" },
    ex: { is: "Má ég fá reikninginn?", en: "May I have the bill?" } },

  { w: "drekka", en: "to drink", pos: "verb", topic: "food", unit: 5, cefr: "A1", gov: "ÞF", vclass: "strong",
    conj: { pres: ["drekk", "drekkur", "drekkur", "drekkum", "drekkið", "drekka"],
            past: ["drakk", "drakkst", "drakk", "drukkum", "drukkuð", "drukku"], pp: "drukkið" },
    ex: { is: "Ég drekk mikið kaffi.", en: "I drink a lot of coffee." } },

  { w: "dýr", en: "expensive", pos: "adj", topic: "describing", unit: 5, cefr: "A1",
    decl: { nom: ["dýr", "dýr", "dýrt"], comp: "dýrari", sup: "dýrastur" },
    ex: { is: "Osturinn er dýr.", en: "The cheese is expensive." } },

  { w: "ódýr", en: "cheap", pos: "adj", topic: "describing", unit: 5, cefr: "A1",
    decl: { nom: ["ódýr", "ódýr", "ódýrt"], comp: "ódýrari", sup: "ódýrastur" },
    ex: { is: "Brauðið er ódýrt.", en: "The bread is cheap." } },

  { w: "heitur", en: "hot", pos: "adj", topic: "describing", unit: 5, cefr: "A1",
    decl: { nom: ["heitur", "heit", "heitt"], comp: "heitari", sup: "heitastur" },
    ex: { is: "Súpan er heit.", en: "The soup is hot." } },

  { w: "kaldur", en: "cold", pos: "adj", topic: "describing", unit: 5, cefr: "A1",
    decl: { nom: ["kaldur", "köld", "kalt"], comp: "kaldari", sup: "kaldastur" },
    ex: { is: "Mjólkin er köld.", en: "The milk is cold." } },

  { w: "mikið", en: "much, a lot", pos: "adv", topic: "quantities", unit: 5, cefr: "A1",
    ex: { is: "Hvað kostar þetta mikið?", en: "What does this come to?" } },

  { w: "bara", en: "just, only", pos: "adv", topic: "shopping", unit: 5, cefr: "A1",
    ex: { is: "Við erum bara með gos.", en: "We only have soft drinks." } },

  { w: "gjörðu svo vel", en: "here you are, go ahead", pos: "phrase", topic: "courtesy", unit: 5, cefr: "A1",
    ex: { is: "Gjörðu svo vel, hérna er kaffið.", en: "Here you are, here is the coffee." } },

  { w: "hvað kostar þetta?", en: "how much is this?", pos: "phrase", topic: "shopping", unit: 5, cefr: "A1",
    ex: { is: "Hvað kostar þetta mikið?", en: "What does this come to?" } }
];

export default unit;
