export const unit = {
  id: 10,
  slug: "u10",
  title: "Fjölskyldan",
  en: "The family",
  cefr: "A1.2",
  icon: "👨‍👩‍👧",
  blurb: "Name your relatives, own things, and meet the genitive case.",
  canDo: [
    "Introduce my family and say how many siblings and children I have",
    "Say who owns what using the genitive and the words minn, þinn and sinn",
    "Read an Icelandic name and work out who the person's father is",
    "Ask and answer how old someone is"
  ],
  lessons: [
    {
      n: 1,
      id: "u10l1",
      kind: "lesson",
      title: "Pabbi, mamma og hin",
      en: "Dad, mum and the rest",
      goal: "Name the people in a family and count them.",
      minutes: 9,
      icon: "🧑‍🤝‍🧑",
      teach: [
        {
          h: "Nobody says faðir",
          p: "Icelandic has the solemn words faðir and móðir, and almost nobody uses them out loud. In a kitchen you say pabbi and mamma, at any age, even at sixty.",
          ex: [
            ["Pabbi minn vinnur í bakaríi.", "My dad works in a bakery."],
            ["Mamma mín heitir Anna.", "My mum is called Anna."]
          ],
          tip: "Keep faðir and móðir for forms and gravestones."
        },
        {
          h: "eiga is the family verb",
          p: "You do not have relatives in Icelandic, you own them. eiga takes the accusative, so the person counted changes shape.",
          ex: [
            ["Ég á tvo bræður.", "I have two brothers."],
            ["Hún á eina systur.", "She has one sister."],
            ["Þau eiga þrjú börn.", "They have three children."]
          ],
          tip: "The numbers one to four still carry gender: tvo bræður, tvær systur, tvö börn."
        },
        {
          h: "The core cast",
          table: {
            cols: ["kk", "kvk", "hk"],
            rows: [
              ["pabbi", "mamma", "barn"],
              ["bróðir", "systir", "systkini"],
              ["afi", "amma", "barnabarn"],
              ["sonur", "dóttir", "einkabarn"]
            ]
          },
          tip: "systkini is neuter and plural: systkini mín eru þrjú."
        }
      ],
      vocab: ["fjölskylda", "pabbi", "mamma", "faðir", "móðir", "bróðir", "systir", "systkini", "barn", "sonur", "dóttir", "afi", "amma"],
      items: [
        {
          t: "match",
          q: "Match the family words",
          pairs: [
            ["pabbi", "dad"],
            ["mamma", "mum"],
            ["systir", "sister"],
            ["bróðir", "brother"],
            ["afi", "grandfather"],
            ["amma", "grandmother"]
          ]
        },
        {
          t: "choice",
          q: "How does an Icelander normally say \"my mother\"?",
          opts: ["mamma mín", "móðirin mín", "mín mamma", "mamman mín"],
          a: "mamma mín",
          note: "Family words take no article, and the possessive comes after the noun.",
          tags: ["poss:minn"]
        },
        {
          t: "gender",
          word: "amma",
          a: "kvk",
          note: "Nouns ending in -a are nearly always feminine."
        },
        {
          t: "gender",
          word: "barn",
          a: "hk",
          note: "Short words with no ending are usually neuter: barn, hús, borð."
        },
        {
          t: "fill",
          q: "Put the noun into the accusative.",
          sentence: "Ég á eina ___ .",
          base: "systir",
          a: "systur",
          case: "ÞF",
          why: "eiga takes the accusative, and systir becomes systur.",
          mode: "type",
          tags: ["case:acc", "verb:eiga"]
        },
        {
          t: "fill",
          q: "Pick the right form.",
          sentence: "Ég á tvo ___ .",
          base: "bróðir",
          opts: ["bróðir", "bræður", "bræðrum"],
          a: "bræður",
          case: "ÞF",
          why: "bróðir has the plural bræður, and it stays bræður in the accusative.",
          mode: "choice",
          tags: ["case:acc", "noun:irregular"]
        },
        {
          t: "build",
          q: "This is my grandmother.",
          a: "Þetta er amma mín",
          extra: ["minn", "mitt", "hans"],
          tags: ["poss:minn"]
        },
        {
          t: "choice",
          q: "Which sentence means \"I have no siblings\"?",
          opts: ["Ég á engin systkini", "Ég hef engin systkini", "Ég er engin systkini", "Ég á enginn systkini"],
          a: "Ég á engin systkini",
          note: "Family belongs to eiga, never to hafa. systkini is neuter plural, so enginn becomes engin.",
          tags: ["verb:eiga"]
        },
        {
          t: "listen",
          speak: "Þetta er bróðir minn.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Þetta er bróðir minn.", "Þetta er systir mín.", "Þetta er pabbi minn."],
          a: "Þetta er bróðir minn."
        },
        {
          t: "type",
          q: "Type \"I have three siblings.\"",
          a: "Ég á þrjú systkini",
          hint: "systkini is neuter, so three is þrjú."
        },
        {
          t: "speak",
          is: "Þetta er fjölskyldan mín.",
          en: "This is my family.",
          tip: "The ö in fjölskyldan is short and round, like the vowel in English \"her\"."
        }
      ]
    },
    {
      n: 2,
      id: "u10l2",
      kind: "lesson",
      title: "Eiga, hafa, vera með",
      en: "Three ways to have",
      goal: "Choose the right \"have\", and say how old someone is.",
      minutes: 10,
      icon: "🎂",
      teach: [
        {
          h: "Three verbs, one English word",
          p: "English gets by with \"have\". Icelandic sorts it by what kind of thing you are talking about.",
          table: {
            cols: ["verb", "used for", "example"],
            rows: [
              ["eiga", "real property, family, friends", "Ég á hjól."],
              ["hafa", "things you cannot own", "Ég hef ekki tíma."],
              ["vera með", "what is on you right now", "Ég er með lyklana."]
            ]
          },
          tip: "All three are followed by the accusative, so only the verb changes."
        },
        {
          h: "eiga and hafa, present tense",
          table: {
            cols: ["", "eiga", "hafa"],
            rows: [
              ["ég", "á", "hef"],
              ["þú", "átt", "hefur"],
              ["hann", "á", "hefur"],
              ["við", "eigum", "höfum"],
              ["þið", "eigið", "hafið"],
              ["þeir", "eiga", "hafa"]
            ]
          },
          tip: "Átt þú? shrinks to Áttu? in speech, and Hefur þú? to Hefurðu?"
        },
        {
          h: "Age already uses the genitive",
          p: "Ages are built on ára, \"of years\". The number in front sits in the genitive, which is why two, three and four look strange.",
          ex: [
            ["Barnið er eins árs.", "The child is one year old."],
            ["Sonur minn er tveggja ára.", "My son is two."],
            ["Hún er tuttugu og fimm ára.", "She is twenty-five."]
          ],
          tip: "From five upwards the number stops changing. Only 1–4 give you trouble."
        }
      ],
      vocab: ["eiga", "hafa", "eiga heima", "ára gamall", "gamall", "ungur", "afmæli", "brúðkaup", "heimsókn", "ættarmót", "barnabarn", "einkabarn"],
      items: [
        {
          t: "choice",
          q: "A friend asks if you are free. How do you say \"I don't have time\"?",
          opts: ["Ég hef ekki tíma", "Ég á ekki tíma", "Ég er ekki tíma", "Ég er með ekki tíma"],
          a: "Ég hef ekki tíma",
          note: "Time cannot be owned, so it goes to hafa.",
          tags: ["verb:hafa"]
        },
        {
          t: "choice",
          q: "Grandma and grandad have six grandchildren. Which verb?",
          opts: ["Amma og afi eiga sex barnabörn", "Amma og afi hafa sex barnabörn", "Amma og afi eru sex barnabörn", "Amma og afi eru með sex barnabörn"],
          a: "Amma og afi eiga sex barnabörn",
          note: "People close to you belong to eiga.",
          tags: ["verb:eiga"]
        },
        {
          t: "fill",
          q: "Which \"have\" fits?",
          sentence: "Ég ___ með lyklana að húsinu.",
          base: "vera",
          opts: ["á", "hef", "er"],
          a: "er",
          why: "vera með is for what you are carrying right now.",
          mode: "choice",
          tags: ["phrase:vera með"]
        },
        {
          t: "fill",
          q: "Put the number into the genitive.",
          sentence: "Barnið er ___ árs.",
          base: "einn",
          a: "eins",
          case: "EF",
          why: "Age is measured in years, and the measure sits in the genitive.",
          mode: "type",
          tags: ["case:gen", "numbers"]
        },
        {
          t: "build",
          q: "How old is your grandmother?",
          a: "Hvað er amma þín gömul",
          extra: ["gamall", "ert", "hún"],
          tags: ["adj:agreement"]
        },
        {
          t: "type",
          q: "Type \"She is twenty-five years old.\"",
          a: "Hún er tuttugu og fimm ára",
          hint: "From five upwards the number does not change."
        },
        {
          t: "listen",
          speak: "Ég á afmæli í dag.",
          q: "Type what you hear.",
          mode: "type",
          a: "Ég á afmæli í dag."
        },
        {
          t: "match",
          q: "Match the family events",
          pairs: [
            ["afmæli", "birthday"],
            ["brúðkaup", "wedding"],
            ["heimsókn", "a visit"],
            ["ættarmót", "family reunion"],
            ["barnabarn", "grandchild"],
            ["einkabarn", "only child"]
          ]
        },
        {
          t: "gender",
          word: "afmæli",
          a: "hk",
          note: "Nouns ending in -i that never change in the singular are neuter."
        },
        {
          t: "choice",
          q: "Which sentence means \"My grandfather is ninety\"?",
          opts: ["Afi minn er níutíu ára", "Afi minn á níutíu ára", "Afi minn er níutíu ár", "Afi minn hefur níutíu ára"],
          a: "Afi minn er níutíu ára",
          note: "Age uses vera plus ára. You are old, you do not have years.",
          tags: ["adj:age"]
        },
        {
          t: "speak",
          is: "Hvað ert þú gamall?",
          en: "How old are you?",
          tip: "Say gömul if you are speaking to a woman. The adjective agrees with the listener."
        }
      ]
    },
    {
      n: 3,
      id: "u10l3",
      kind: "grammar",
      title: "Eignarfall",
      en: "The genitive",
      goal: "Say who owns what, and read an Icelandic name properly.",
      minutes: 14,
      icon: "🔗",
      teach: [
        {
          h: "The owner goes second",
          p: "English puts the owner first: Ragnar's car. Icelandic puts the thing first and the owner behind it, in the genitive.",
          ex: [
            ["bíll Ragnars", "Ragnar's car"],
            ["hús ömmu", "grandma's house"],
            ["nafn barnsins", "the child's name"]
          ],
          tip: "When a genitive noun follows, the first noun drops its article: bíll Ragnars, not bíllinn Ragnars."
        },
        {
          h: "The endings",
          p: "Four endings cover almost everything. Learn the pair for each gender and you can build the rest.",
          table: {
            cols: ["kyn", "nefnifall", "eignarfall"],
            rows: [
              ["kk, sterk", "hestur", "hests"],
              ["kk, sterk", "sonur", "sonar"],
              ["kk, veik", "pabbi", "pabba"],
              ["kvk, sterk", "ætt", "ættar"],
              ["kvk, veik", "amma", "ömmu"],
              ["hk", "barn", "barns"]
            ]
          },
          tip: "Watch amma → ömmu. The u in the ending pulls the a back to ö."
        },
        {
          h: "Names do it too",
          table: {
            cols: ["nafn", "eignarfall"],
            rows: [
              ["Jón", "Jóns"],
              ["Ragnar", "Ragnars"],
              ["Helgi", "Helga"],
              ["Bjarni", "Bjarna"],
              ["Anna", "Önnu"],
              ["Guðrún", "Guðrúnar"]
            ]
          },
          tip: "Men's names in -i behave like pabbi: Helgi → Helga."
        },
        {
          h: "Why Icelanders have no surname",
          p: "Ragnarsson is not a family name. It is a sentence: son of Ragnar. Take the father's name, put it in the genitive, glue on -son or -dóttir. Ragnar's children are Óli Ragnarsson and Sigga Ragnarsdóttir, and they share no surname with each other in the English sense.",
          list: [
            "Jón → Jóns → Jónsson / Jónsdóttir",
            "Ólafur → Ólafs → Ólafsson / Ólafsdóttir",
            "Helgi → Helga → Helgason / Helgadóttir",
            "Bjarni → Bjarna → Bjarnason / Bjarnadóttir"
          ],
          tip: "This is why the phone book and the hospital wristband both list you by your first name."
        },
        {
          h: "The colloquial version",
          p: "In speech people slip hans or hennar in front of the owner. The first noun then keeps its article after all.",
          ex: [
            ["bíll Ragnars", "Ragnar's car, neutral"],
            ["bíllinn hans Ragnars", "Ragnar's car, everyday speech"],
            ["hjólið hennar Siggu", "Sigga's bike"]
          ],
          tip: "Both are correct. The second one sounds like a person, not a form."
        }
      ],
      vocab: ["ættarnafn", "föðurnafn", "ætt", "ættingi", "frændi", "frænka", "sakna", "hans", "hennar"],
      items: [
        {
          t: "fill",
          q: "Put the noun into the genitive.",
          sentence: "Bíllinn hans ___ er gamall.",
          base: "pabbi",
          a: "pabba",
          case: "EF",
          why: "Weak masculines in -i take -a in every case but the nominative.",
          mode: "type",
          tags: ["case:gen", "noun:masc"]
        },
        {
          t: "fill",
          q: "Put the name into the genitive.",
          sentence: "Þetta eru foreldrar ___ .",
          base: "Anna",
          a: "Önnu",
          case: "EF",
          why: "Women's names in -a end in -u, and the a turns into ö.",
          mode: "type",
          tags: ["case:gen", "names", "umlaut:u"]
        },
        {
          t: "table",
          q: "Complete the declension of sonur (kk)",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["sonur", "synir"], blank: [1] },
            { label: "ÞF", cells: ["son", "syni"], blank: [] },
            { label: "ÞGF", cells: ["syni", "sonum"], blank: [] },
            { label: "EF", cells: ["sonar", "sona"], blank: [0, 1] }
          ]
        },
        {
          t: "fill",
          q: "Pick the genitive.",
          sentence: "Ég man ekki nafn ___ .",
          base: "barnið",
          opts: ["barnið", "barninu", "barnsins"],
          a: "barnsins",
          case: "EF",
          why: "Neuter genitive is -s, and the article -ins goes on the end of it.",
          mode: "choice",
          tags: ["case:gen", "noun:neut", "article"]
        },
        {
          t: "choice",
          q: "Which one means \"Ragnar's car\"?",
          opts: ["bíll Ragnars", "bíllinn Ragnars", "bíll Ragnar", "Ragnars bíll"],
          a: "bíll Ragnars",
          note: "A genitive noun behind it means the first noun loses its article.",
          tags: ["case:gen", "article"]
        },
        {
          t: "choice",
          q: "Same car, but the way people actually say it. Which is right?",
          opts: ["bíllinn hans Ragnars", "bíll hans Ragnars", "bíllinn hans Ragnar", "hans Ragnars bíllinn"],
          a: "bíllinn hans Ragnars",
          note: "With hans in front, the article comes back: bíllinn hans Ragnars.",
          tags: ["case:gen", "article", "register"]
        },
        {
          t: "table",
          q: "Fill in the genitive singular",
          cols: ["kyn", "nefnifall", "eignarfall"],
          rows: [
            { label: "kk", cells: ["hestur", "hests"], blank: [1] },
            { label: "kk", cells: ["pabbi", "pabba"], blank: [] },
            { label: "kvk", cells: ["ætt", "ættar"], blank: [1] },
            { label: "kvk", cells: ["amma", "ömmu"], blank: [1] },
            { label: "hk", cells: ["barn", "barns"], blank: [] }
          ]
        },
        {
          t: "fill",
          q: "Helgi has a son called Jón. Complete the name.",
          sentence: "Hann heitir Jón ___ .",
          base: "Helgi",
          a: "Helgason",
          why: "Father's name in the genitive, Helga, plus -son.",
          mode: "type",
          tags: ["patronymic", "case:gen"]
        },
        {
          t: "choice",
          q: "Bjarni has a daughter called Katrín. What is her full name?",
          opts: ["Katrín Bjarnadóttir", "Katrín Bjarnisdóttir", "Katrín Bjarnasdóttir", "Katrín Bjarnadóttur"],
          a: "Katrín Bjarnadóttir",
          note: "Bjarni goes to Bjarna in the genitive, then -dóttir is glued on.",
          tags: ["patronymic"]
        },
        {
          t: "type",
          q: "Type \"Ragnar's daughter is called Sigga.\"",
          a: "Dóttir Ragnars heitir Sigga",
          hint: "Thing first, owner second.",
          tags: ["case:gen"]
        },
        {
          t: "fill",
          q: "til always takes one case. Which form?",
          sentence: "Við förum til ___ um jólin.",
          base: "amma",
          a: "ömmu",
          case: "EF",
          why: "til governs the genitive, every single time.",
          mode: "type",
          tags: ["case:gen", "prep:til"]
        },
        {
          t: "fill",
          q: "sakna wants a case of its own.",
          sentence: "Ég sakna ___ minnar.",
          base: "systir",
          opts: ["systir", "systur", "systrum"],
          a: "systur",
          case: "EF",
          why: "sakna takes the genitive, and systir is systur in every case but the nominative.",
          mode: "choice",
          tags: ["case:gen", "verb:sakna"]
        },
        {
          t: "build",
          q: "This is Sigga's bike.",
          a: "Þetta er hjólið hennar Siggu",
          extra: ["hans", "Sigga", "hjól"],
          tags: ["case:gen"]
        },
        {
          t: "listen",
          speak: "Þetta er bakaríið hans pabba.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Þetta er bakaríið hans pabba.", "Þetta er bakarí pabba míns.", "Þetta er bakaríið hennar mömmu."],
          a: "Þetta er bakaríið hans pabba."
        }
      ]
    },
    {
      n: 4,
      id: "u10l4",
      kind: "lesson",
      title: "Minn, þinn, sinn",
      en: "Mine, yours, his own",
      goal: "Attach a possessive to the right noun in the right shape.",
      minutes: 11,
      icon: "🫱",
      teach: [
        {
          h: "The possessive comes after",
          p: "minn and þinn follow the noun and copy its gender, number and case. Only two of these pronouns exist. Everything else in the third person is a fixed genitive: hans, hennar, þeirra, okkar, ykkar.",
          ex: [
            ["Þetta er pabbi minn.", "That is my dad."],
            ["Þetta er bíllinn minn.", "That is my car."],
            ["Bíllinn hans er gamall.", "His car is old."]
          ],
          tip: "hans, hennar and þeirra never change. Enjoy that."
        },
        {
          h: "The article trap",
          p: "Ordinary nouns take the article in front of a possessive. Words that can only mean a relative do not.",
          table: {
            cols: ["no article", "article"],
            rows: [
              ["pabbi minn", "bíllinn minn"],
              ["systir mín", "bókin mín"],
              ["foreldrar mínir", "húsið mitt"],
              ["dóttir mín", "barnið mitt"]
            ]
          },
          tip: "barn and maður are not only family words, so they keep the article: barnið mitt, maðurinn minn."
        },
        {
          h: "sinn points back at the subject",
          p: "sinn means the subject's own. hans and hennar mean somebody else's. Icelandic keeps these apart and the difference is not optional.",
          ex: [
            ["Jón heimsækir ömmu sína.", "Jón visits his own grandmother."],
            ["Jón heimsækir ömmu hans.", "Jón visits the other man's grandmother."]
          ],
          tip: "If the owner is the subject of the same sentence, reach for sinn."
        }
      ],
      vocab: ["minn", "þinn", "sinn", "hans", "hennar", "þeirra", "okkar", "foreldrar", "heimsækja", "passa", "þekkja", "frændi"],
      items: [
        {
          t: "choice",
          q: "Which is \"my dad\"?",
          opts: ["pabbi minn", "pabbinn minn", "minn pabbi", "pabba minn"],
          a: "pabbi minn",
          note: "Pure family words take no article.",
          tags: ["poss:minn", "article"]
        },
        {
          t: "choice",
          q: "Which is \"my car\"?",
          opts: ["bíllinn minn", "bíll minn", "minn bíll", "bílinn minn"],
          a: "bíllinn minn",
          note: "An ordinary noun must wear its article before a possessive.",
          tags: ["poss:minn", "article"]
        },
        {
          t: "fill",
          q: "Make the possessive agree.",
          sentence: "Þetta er mamma ___ .",
          base: "minn",
          opts: ["minn", "mín", "mitt"],
          a: "mín",
          why: "mamma is feminine, so minn becomes mín.",
          mode: "choice",
          tags: ["poss:minn", "agreement"]
        },
        {
          t: "fill",
          q: "Make the possessive agree.",
          sentence: "Þetta er barnið ___ .",
          base: "minn",
          a: "mitt",
          why: "barn is neuter, so minn becomes mitt, and barn keeps its article.",
          mode: "type",
          tags: ["poss:minn", "agreement", "article"]
        },
        {
          t: "table",
          q: "Complete minn in the singular",
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            { label: "NF", cells: ["minn", "mín", "mitt"], blank: [2] },
            { label: "ÞF", cells: ["minn", "mína", "mitt"], blank: [1] },
            { label: "ÞGF", cells: ["mínum", "minni", "mínu"], blank: [] },
            { label: "EF", cells: ["míns", "minnar", "míns"], blank: [1] }
          ]
        },
        {
          t: "build",
          q: "My sister lives in Reykjavík.",
          a: "Systir mín býr í Reykjavík",
          extra: ["minn", "mitt", "hún"],
          tags: ["poss:minn"]
        },
        {
          t: "match",
          q: "Match the phrases",
          pairs: [
            ["pabbi minn", "my dad"],
            ["mamma mín", "my mum"],
            ["barnið mitt", "my child"],
            ["systir þín", "your sister"],
            ["bíllinn hans", "his car"],
            ["húsið þeirra", "their house"]
          ]
        },
        {
          t: "choice",
          q: "Jón visits his own grandmother. Which sentence?",
          opts: ["Jón heimsækir ömmu sína", "Jón heimsækir ömmu hans", "Jón heimsækir amma sín", "Jón heimsækir ömmu sinni"],
          a: "Jón heimsækir ömmu sína",
          note: "The owner is the subject, so sinn steps in. heimsækja takes the accusative: sína.",
          tags: ["poss:sinn", "case:acc"]
        },
        {
          t: "fill",
          q: "Choose the right form of sinn.",
          sentence: "Hann hringir í mömmu ___ .",
          base: "sinn",
          opts: ["sinn", "sína", "sinni"],
          a: "sína",
          why: "í takes the accusative here, and mamma is feminine: sína.",
          mode: "choice",
          tags: ["poss:sinn", "case:acc"]
        },
        {
          t: "type",
          q: "Type \"This is my sister.\"",
          a: "Þetta er systir mín",
          hint: "No article on a pure family word."
        },
        {
          t: "listen",
          speak: "Foreldrar mínir eiga heima á Akureyri.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Foreldrar mínir eiga heima á Akureyri.", "Foreldrar þínir eiga heima á Akureyri.", "Systkini mín eiga heima á Akureyri."],
          a: "Foreldrar mínir eiga heima á Akureyri."
        },
        {
          t: "gender",
          word: "systkini",
          a: "hk",
          note: "systkini is neuter and lives mostly in the plural: systkini mín."
        }
      ]
    },
    {
      n: 5,
      id: "u10l5",
      kind: "story",
      title: "Í pottinum",
      en: "In the hot tub",
      goal: "Follow a family conversation and pick the names apart.",
      minutes: 12,
      icon: "♨️",
      teach: [
        {
          h: "Before you read",
          p: "Sigga takes her brother Óli to the pool. Bjarni is already in the hot tub, as he is most days, and he knows everyone's father.",
          list: [
            "potturinn — the hot tub",
            "á hverjum degi — every day",
            "fáir — few people"
          ]
        },
        {
          h: "Two things to watch",
          list: [
            "bakaríið hans pabba — article plus hans plus the owner",
            "níutíu og tveggja ára — tveggja is the genitive of tveir"
          ]
        }
      ],
      story: {
        title: "Í pottinum",
        lines: [
          { sp: "Bjarni", is: "Sæl, Sigga! Ert þú líka hér?", en: "Hi Sigga! Are you here too?" },
          { sp: "Sigga", is: "Sæll, Bjarni. Ég kem hingað á hverjum degi. Þetta er Óli, bróðir minn.", en: "Hi Bjarni. I come here every day. This is Óli, my brother." },
          { sp: "Óli", is: "Sæll. Ég heiti Óli Ragnarsson.", en: "Hello. My name is Óli Ragnarsson." },
          { sp: "Bjarni", is: "Ragnarsson? Er pabbi þinn þá Ragnar í bakaríinu?", en: "Ragnarsson? So is your dad Ragnar from the bakery?" },
          { sp: "Óli", is: "Já. Bakaríið hans pabba er í miðbænum.", en: "Yes. My dad's bakery is downtown." },
          { sp: "Bjarni", is: "Ég þekki hann vel. Amma mín kaupir brauð hjá honum á hverjum morgni.", en: "I know him well. My grandmother buys bread from him every morning." },
          { sp: "Sigga", is: "Hvað heitir amma þín?", en: "What is your grandmother called?" },
          { sp: "Bjarni", is: "Hún heitir Þóra og er níutíu og tveggja ára.", en: "She is called Þóra and she is ninety-two." },
          { sp: "Sigga", is: "Níutíu og tveggja ára? Og hún fer sjálf í sund?", en: "Ninety-two? And she goes swimming on her own?" },
          { sp: "Bjarni", is: "Hún kemur hingað á þriðjudögum. Þá eru fáir í pottinum.", en: "She comes here on Tuesdays. There are few people in the tub then." },
          { sp: "Óli", is: "Þá kem ég á þriðjudögum.", en: "Then I'll come on Tuesdays." }
        ],
        glossary: [
          ["potturinn", "the hot tub"],
          ["á hverjum degi", "every day"],
          ["á hverjum morgni", "every morning"],
          ["sjálf", "by herself"],
          ["fáir", "few people"],
          ["þá", "then, in that case"]
        ]
      },
      vocab: ["þekkja", "heimsókn", "pabbi", "amma", "bróðir", "hans", "minn", "þinn"],
      items: [
        {
          t: "choice",
          q: "Who is Óli's father?",
          opts: ["Ragnar", "Bjarni", "Helgi", "Óli"],
          a: "Ragnar",
          note: "Ragnarsson tells you outright: son of Ragnar.",
          tags: ["patronymic"]
        },
        {
          t: "choice",
          q: "How old is Bjarni's grandmother?",
          opts: ["92", "29", "72", "90"],
          a: "92",
          note: "níutíu og tveggja ára. tveggja is the genitive of tveir."
        },
        {
          t: "match",
          q: "Match the story words",
          pairs: [
            ["potturinn", "the hot tub"],
            ["á hverjum degi", "every day"],
            ["sjálf", "by herself"],
            ["fáir", "few people"],
            ["miðbærinn", "the town centre"]
          ]
        },
        {
          t: "fill",
          q: "Put the owner into the genitive.",
          sentence: "Bakaríið hans ___ er í miðbænum.",
          base: "pabbi",
          a: "pabba",
          case: "EF",
          why: "pabbi ends in -i, so the genitive is pabba.",
          mode: "type",
          tags: ["case:gen"]
        },
        {
          t: "build",
          q: "My grandmother buys bread from him.",
          a: "Amma mín kaupir brauð hjá honum",
          extra: ["hennar", "með", "kaupa"],
          tags: ["prep:hjá"]
        },
        {
          t: "type",
          q: "Type \"My name is Óli Ragnarsson.\"",
          a: "Ég heiti Óli Ragnarsson",
          hint: "heita, not vera."
        },
        {
          t: "listen",
          speak: "Ég kem hingað á hverjum degi.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Ég kem hingað á hverjum degi.", "Ég kem hingað á þriðjudögum.", "Ég fer héðan á hverjum degi."],
          a: "Ég kem hingað á hverjum degi."
        },
        {
          t: "fill",
          q: "Which preposition marks a repeated day?",
          sentence: "Hún kemur hingað ___ þriðjudögum.",
          base: "á",
          opts: ["á", "í", "til"],
          a: "á",
          case: "ÞGF",
          why: "á plus the dative plural means every Tuesday, not one specific one.",
          mode: "choice",
          tags: ["prep:á", "case:dat"]
        },
        {
          t: "gender",
          word: "bróðir",
          a: "kk",
          note: "bróðir is masculine, with the odd plural bræður."
        },
        {
          t: "choice",
          q: "Why does Óli suddenly want to come on Tuesdays?",
          opts: ["Because the tub is quiet then", "Because the bakery is shut", "Because Sigga works then", "Because it is cheaper"],
          a: "Because the tub is quiet then",
          note: "Þá eru fáir í pottinum. He is not there for Þóra."
        },
        {
          t: "speak",
          is: "Þá kem ég á þriðjudögum.",
          en: "Then I'll come on Tuesdays.",
          tip: "þ at the start of þá is unvoiced, like the th in \"thin\"."
        }
      ]
    },
    {
      n: 6,
      id: "u10l6",
      kind: "checkpoint",
      title: "Ættarmót",
      en: "Family reunion",
      goal: "Put the whole unit together.",
      minutes: 13,
      icon: "🏁",
      teach: [
        {
          h: "What you now control",
          list: [
            "eiga for people and property, hafa for the abstract, vera með for what is in your pocket",
            "the genitive endings -s, -ar, -a and -u, and til plus the genitive",
            "why Ragnarsson is a fact about a father, not a surname",
            "minn, þinn and sinn behind the noun, agreeing with it",
            "the article rule: pabbi minn but bíllinn minn",
            "ages built on ára, with the number in the genitive up to four"
          ]
        }
      ],
      vocab: ["fjölskylda", "eiga", "hafa", "minn", "sinn", "frænka", "ættingi", "sakna", "gamall", "foreldrar"],
      items: [
        {
          t: "choice",
          q: "Which sentence is right?",
          opts: ["Amma á sex barnabörn", "Amma hefur sex barnabörn", "Amma er sex barnabörn", "Amma er með sex barnabörn"],
          a: "Amma á sex barnabörn",
          note: "Relatives go with eiga.",
          tags: ["verb:eiga"]
        },
        {
          t: "fill",
          q: "Put the name into the genitive.",
          sentence: "Bíllinn hans ___ er nýr.",
          base: "Bjarni",
          a: "Bjarna",
          case: "EF",
          why: "Men's names in -i take -a in the genitive.",
          mode: "type",
          tags: ["case:gen", "names"]
        },
        {
          t: "build",
          q: "I miss my grandmother.",
          a: "Ég sakna ömmu minnar",
          extra: ["amma", "mín", "minni"],
          tags: ["case:gen", "verb:sakna"]
        },
        {
          t: "type",
          q: "Type \"I have two brothers.\"",
          a: "Ég á tvo bræður",
          hint: "eiga takes the accusative, and two is tvo before a masculine plural."
        },
        {
          t: "table",
          q: "Complete the declension of dóttir (kvk)",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["dóttir", "dætur"], blank: [1] },
            { label: "ÞF", cells: ["dóttur", "dætur"], blank: [] },
            { label: "ÞGF", cells: ["dóttur", "dætrum"], blank: [] },
            { label: "EF", cells: ["dóttur", "dætra"], blank: [0] }
          ]
        },
        {
          t: "gender",
          word: "frænka",
          a: "kvk",
          note: "frænka covers aunt and female cousin alike."
        },
        {
          t: "fill",
          q: "Make the possessive agree.",
          sentence: "Mamma ___ heitir Anna.",
          base: "minn",
          opts: ["minn", "mín", "mitt"],
          a: "mín",
          why: "mamma is feminine.",
          mode: "choice",
          tags: ["poss:minn"]
        },
        {
          t: "choice",
          q: "Bjarni has a son called Ólafur. What is the boy's full name?",
          opts: ["Ólafur Bjarnason", "Ólafur Bjarnisson", "Ólafur Bjarnasson", "Ólafur Bjarnadóttir"],
          a: "Ólafur Bjarnason",
          note: "Bjarni becomes Bjarna, then -son.",
          tags: ["patronymic"]
        },
        {
          t: "fill",
          q: "til takes one case only.",
          sentence: "Við förum til ___ í kvöld.",
          base: "afi",
          a: "afa",
          case: "EF",
          why: "til always governs the genitive.",
          mode: "type",
          tags: ["case:gen", "prep:til"]
        },
        {
          t: "listen",
          speak: "Systkini mín búa í Danmörku.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Systkini mín búa í Danmörku.", "Foreldrar mínir búa í Danmörku.", "Systir mín býr í Danmörku."],
          a: "Systkini mín búa í Danmörku."
        },
        {
          t: "choice",
          q: "Which one is correct?",
          opts: ["Þetta er húsið mitt", "Þetta er hús mitt", "Þetta er mitt hús", "Þetta er húsinu mitt"],
          a: "Þetta er húsið mitt",
          note: "hús is not a family word, so it keeps its article before the possessive.",
          tags: ["poss:minn", "article"]
        },
        {
          t: "fill",
          q: "Choose sinn or hans.",
          sentence: "Sigga heimsækir ömmu ___ á sunnudögum.",
          base: "sinn",
          opts: ["sinn", "sína", "hans"],
          a: "sína",
          why: "The grandmother is Sigga's own, and heimsækja takes the accusative.",
          mode: "choice",
          tags: ["poss:sinn", "case:acc"]
        },
        {
          t: "build",
          q: "My parents live in Selfoss.",
          a: "Foreldrar mínir eiga heima á Selfossi",
          extra: ["mín", "minn", "búa"],
          tags: ["poss:minn"]
        },
        {
          t: "type",
          q: "Type \"How old is your grandfather?\"",
          a: "Hvað er afi þinn gamall",
          hint: "gamall agrees with afi, who is masculine."
        }
      ]
    }
  ]
};

export const vocab = [
  { w: "fjölskylda", en: "family", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["fjölskylda", "fjölskyldu", "fjölskyldu", "fjölskyldu"], pl: ["fjölskyldur", "fjölskyldur", "fjölskyldum", "fjölskyldna"] },
    ex: { is: "Fjölskyldan mín er lítil.", en: "My family is small." } },

  { w: "pabbi", en: "dad", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["pabbi", "pabba", "pabba", "pabba"], pl: ["pabbar", "pabba", "pöbbum", "pabba"] },
    ex: { is: "Pabbi minn vinnur í bakaríi.", en: "My dad works in a bakery." } },

  { w: "mamma", en: "mum", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["mamma", "mömmu", "mömmu", "mömmu"], pl: ["mömmur", "mömmur", "mömmum", "mamma"] },
    ex: { is: "Mamma mín heitir Anna.", en: "My mum is called Anna." } },

  { w: "faðir", en: "father (formal)", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["faðir", "föður", "föður", "föður"], pl: ["feður", "feður", "feðrum", "feðra"] },
    ex: { is: "Faðir hennar er læknir.", en: "Her father is a doctor." } },

  { w: "móðir", en: "mother (formal)", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["móðir", "móður", "móður", "móður"], pl: ["mæður", "mæður", "mæðrum", "mæðra"] },
    ex: { is: "Móðir mín er fædd á Akureyri.", en: "My mother was born in Akureyri." } },

  { w: "foreldrar", en: "parents", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["foreldri", "foreldri", "foreldri", "foreldris"], pl: ["foreldrar", "foreldra", "foreldrum", "foreldra"] },
    ex: { is: "Foreldrar mínir eiga heima á Selfossi.", en: "My parents live in Selfoss." } },

  { w: "barn", en: "child", pos: "noun", g: "hk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["barn", "barn", "barni", "barns"], pl: ["börn", "börn", "börnum", "barna"] },
    ex: { is: "Þau eiga þrjú börn.", en: "They have three children." } },

  { w: "sonur", en: "son", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["sonur", "son", "syni", "sonar"], pl: ["synir", "syni", "sonum", "sona"] },
    ex: { is: "Sonur minn er sjö ára.", en: "My son is seven." } },

  { w: "dóttir", en: "daughter", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["dóttir", "dóttur", "dóttur", "dóttur"], pl: ["dætur", "dætur", "dætrum", "dætra"] },
    ex: { is: "Dóttir mín heitir Sigga.", en: "My daughter is called Sigga." } },

  { w: "bróðir", en: "brother", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["bróðir", "bróður", "bróður", "bróður"], pl: ["bræður", "bræður", "bræðrum", "bræðra"] },
    ex: { is: "Bróðir minn býr í Danmörku.", en: "My brother lives in Denmark." } },

  { w: "systir", en: "sister", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["systir", "systur", "systur", "systur"], pl: ["systur", "systur", "systrum", "systra"] },
    ex: { is: "Ég á eina systur.", en: "I have one sister." } },

  { w: "systkini", en: "siblings", pos: "noun", g: "hk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["systkini", "systkini", "systkini", "systkinis"], pl: ["systkini", "systkini", "systkinum", "systkina"] },
    ex: { is: "Systkini mín eru öll eldri en ég.", en: "My siblings are all older than me." } },

  { w: "afi", en: "grandfather", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["afi", "afa", "afa", "afa"], pl: ["afar", "afa", "öfum", "afa"] },
    ex: { is: "Afi minn er níutíu ára.", en: "My grandfather is ninety." } },

  { w: "amma", en: "grandmother", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["amma", "ömmu", "ömmu", "ömmu"], pl: ["ömmur", "ömmur", "ömmum", "amma"] },
    ex: { is: "Við förum til ömmu á sunnudögum.", en: "We go to grandma's on Sundays." } },

  { w: "barnabarn", en: "grandchild", pos: "noun", g: "hk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["barnabarn", "barnabarn", "barnabarni", "barnabarns"], pl: ["barnabörn", "barnabörn", "barnabörnum", "barnabarna"] },
    ex: { is: "Amma á sex barnabörn.", en: "Grandma has six grandchildren." } },

  { w: "frændi", en: "male relative, uncle or cousin", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["frændi", "frænda", "frænda", "frænda"], pl: ["frændur", "frændur", "frændum", "frænda"] },
    ex: { is: "Frændi minn kemur í heimsókn.", en: "My cousin is coming to visit." } },

  { w: "frænka", en: "female relative, aunt or cousin", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["frænka", "frænku", "frænku", "frænku"], pl: ["frænkur", "frænkur", "frænkum", "frænkna"] },
    ex: { is: "Frænka mín býr í Vestmannaeyjum.", en: "My aunt lives in the Westman Islands." } },

  { w: "eiginmaður", en: "husband", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["eiginmaður", "eiginmann", "eiginmanni", "eiginmanns"], pl: ["eiginmenn", "eiginmenn", "eiginmönnum", "eiginmanna"] },
    ex: { is: "Eiginmaður hennar er kokkur.", en: "Her husband is a cook." } },

  { w: "eiginkona", en: "wife", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["eiginkona", "eiginkonu", "eiginkonu", "eiginkonu"], pl: ["eiginkonur", "eiginkonur", "eiginkonum", "eiginkvenna"] },
    ex: { is: "Eiginkona hans heitir Þóra.", en: "His wife is called Þóra." } },

  { w: "kærasti", en: "boyfriend", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A1",
    forms: { sg: ["kærasti", "kærasta", "kærasta", "kærasta"], pl: ["kærastar", "kærasta", "kærustum", "kærasta"] },
    ex: { is: "Kærasti hennar er frá Póllandi.", en: "Her boyfriend is from Poland." } },

  { w: "maki", en: "partner, spouse", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["maki", "maka", "maka", "maka"], pl: ["makar", "maka", "mökum", "maka"] },
    ex: { is: "Hún kemur með maka sínum.", en: "She is coming with her partner." } },

  { w: "mágkona", en: "sister-in-law", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["mágkona", "mágkonu", "mágkonu", "mágkonu"], pl: ["mágkonur", "mágkonur", "mágkonum", "mágkvenna"] },
    ex: { is: "Mágkona mín býr í Keflavík.", en: "My sister-in-law lives in Keflavík." } },

  { w: "ætt", en: "family line, kin", pos: "noun", g: "kvk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["ætt", "ætt", "ætt", "ættar"], pl: ["ættir", "ættir", "ættum", "ætta"] },
    ex: { is: "Ætt pabba er stór.", en: "My dad's side of the family is big." } },

  { w: "ættingi", en: "relative", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["ættingi", "ættingja", "ættingja", "ættingja"], pl: ["ættingjar", "ættingja", "ættingjum", "ættingja"] },
    ex: { is: "Margir ættingjar koma í brúðkaupið.", en: "Many relatives are coming to the wedding." } },

  { w: "ættarnafn", en: "surname", pos: "noun", g: "hk", topic: "names", unit: 10, cefr: "A2",
    forms: { sg: ["ættarnafn", "ættarnafn", "ættarnafni", "ættarnafns"], pl: ["ættarnöfn", "ættarnöfn", "ættarnöfnum", "ættarnafna"] },
    ex: { is: "Fáir Íslendingar eiga ættarnafn.", en: "Few Icelanders have a surname." } },

  { w: "föðurnafn", en: "patronymic", pos: "noun", g: "hk", topic: "names", unit: 10, cefr: "A2",
    forms: { sg: ["föðurnafn", "föðurnafn", "föðurnafni", "föðurnafns"], pl: ["föðurnöfn", "föðurnöfn", "föðurnöfnum", "föðurnafna"] },
    ex: { is: "Föðurnafn mitt er Ragnarsdóttir.", en: "My patronymic is Ragnarsdóttir." } },

  { w: "einkabarn", en: "only child", pos: "noun", g: "hk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["einkabarn", "einkabarn", "einkabarni", "einkabarns"], pl: ["einkabörn", "einkabörn", "einkabörnum", "einkabarna"] },
    ex: { is: "Mamma er einkabarn.", en: "My mum is an only child." } },

  { w: "tvíburi", en: "twin", pos: "noun", g: "kk", topic: "family", unit: 10, cefr: "A2",
    forms: { sg: ["tvíburi", "tvíbura", "tvíbura", "tvíbura"], pl: ["tvíburar", "tvíbura", "tvíburum", "tvíbura"] },
    ex: { is: "Bróðir minn er tvíburi.", en: "My brother is a twin." } },

  { w: "brúðkaup", en: "wedding", pos: "noun", g: "hk", topic: "life events", unit: 10, cefr: "A1",
    forms: { sg: ["brúðkaup", "brúðkaup", "brúðkaupi", "brúðkaups"], pl: ["brúðkaup", "brúðkaup", "brúðkaupum", "brúðkaupa"] },
    ex: { is: "Brúðkaupið er á laugardaginn.", en: "The wedding is on Saturday." } },

  { w: "afmæli", en: "birthday", pos: "noun", g: "hk", topic: "life events", unit: 10, cefr: "A1",
    forms: { sg: ["afmæli", "afmæli", "afmæli", "afmælis"], pl: ["afmæli", "afmæli", "afmælum", "afmæla"] },
    ex: { is: "Hún á afmæli í dag.", en: "It is her birthday today." } },

  { w: "ættarmót", en: "family reunion", pos: "noun", g: "hk", topic: "life events", unit: 10, cefr: "A2",
    forms: { sg: ["ættarmót", "ættarmót", "ættarmóti", "ættarmóts"], pl: ["ættarmót", "ættarmót", "ættarmótum", "ættarmóta"] },
    ex: { is: "Við förum á ættarmót í sumar.", en: "We are going to a family reunion this summer." } },

  { w: "heimsókn", en: "a visit", pos: "noun", g: "kvk", topic: "life events", unit: 10, cefr: "A1",
    forms: { sg: ["heimsókn", "heimsókn", "heimsókn", "heimsóknar"], pl: ["heimsóknir", "heimsóknir", "heimsóknum", "heimsókna"] },
    ex: { is: "Amma kemur í heimsókn á morgun.", en: "Grandma is coming to visit tomorrow." } },

  { w: "eiga", en: "to own, to have", pos: "verb", topic: "possession", unit: 10, cefr: "A1", gov: "ÞF", vclass: "irregular",
    conj: { pres: ["á", "átt", "á", "eigum", "eigið", "eiga"],
            past: ["átti", "áttir", "átti", "áttum", "áttuð", "áttu"], pp: "átt" },
    ex: { is: "Ég á tvo bræður.", en: "I have two brothers." } },

  { w: "hafa", en: "to have (abstract)", pos: "verb", topic: "possession", unit: 10, cefr: "A1", gov: "ÞF", vclass: "irregular",
    conj: { pres: ["hef", "hefur", "hefur", "höfum", "hafið", "hafa"],
            past: ["hafði", "hafðir", "hafði", "höfðum", "höfðuð", "höfðu"], pp: "haft" },
    ex: { is: "Ég hef ekki tíma í dag.", en: "I don't have time today." } },

  { w: "heimsækja", en: "to visit", pos: "verb", topic: "actions", unit: 10, cefr: "A1", gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["heimsæki", "heimsækir", "heimsækir", "heimsækjum", "heimsækið", "heimsækja"],
            past: ["heimsótti", "heimsóttir", "heimsótti", "heimsóttum", "heimsóttuð", "heimsóttu"], pp: "heimsótt" },
    ex: { is: "Við heimsækjum ömmu og afa.", en: "We visit grandma and grandad." } },

  { w: "sakna", en: "to miss someone", pos: "verb", topic: "feelings", unit: 10, cefr: "A2", gov: "EF", vclass: "weak-a",
    conj: { pres: ["sakna", "saknar", "saknar", "söknum", "saknið", "sakna"],
            past: ["saknaði", "saknaðir", "saknaði", "söknuðum", "söknuðuð", "söknuðu"], pp: "saknað" },
    ex: { is: "Ég sakna systur minnar.", en: "I miss my sister." } },

  { w: "passa", en: "to look after, to babysit", pos: "verb", topic: "actions", unit: 10, cefr: "A1", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["passa", "passar", "passar", "pössum", "passið", "passa"],
            past: ["passaði", "passaðir", "passaði", "pössuðum", "pössuðuð", "pössuðu"], pp: "passað" },
    ex: { is: "Afi passar börnin á föstudögum.", en: "Grandad looks after the children on Fridays." } },

  { w: "þekkja", en: "to know a person", pos: "verb", topic: "actions", unit: 10, cefr: "A1", gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["þekki", "þekkir", "þekkir", "þekkjum", "þekkið", "þekkja"],
            past: ["þekkti", "þekktir", "þekkti", "þekktum", "þekktuð", "þekktu"], pp: "þekkt" },
    ex: { is: "Ég þekki alla í fjölskyldunni.", en: "I know everyone in the family." } },

  { w: "gamall", en: "old", pos: "adj", topic: "describing", unit: 10, cefr: "A1",
    decl: { nom: ["gamall", "gömul", "gamalt"], comp: "eldri", sup: "elstur" },
    ex: { is: "Hvað er amma þín gömul?", en: "How old is your grandmother?" } },

  { w: "ungur", en: "young", pos: "adj", topic: "describing", unit: 10, cefr: "A1",
    decl: { nom: ["ungur", "ung", "ungt"], comp: "yngri", sup: "yngstur" },
    ex: { is: "Hann er of ungur til að keyra.", en: "He is too young to drive." } },

  { w: "giftur", en: "married", pos: "adj", topic: "life events", unit: 10, cefr: "A1",
    decl: { nom: ["giftur", "gift", "gift"] },
    ex: { is: "Systir mín er gift.", en: "My sister is married." } },

  { w: "fæddur", en: "born", pos: "adj", topic: "life events", unit: 10, cefr: "A1",
    decl: { nom: ["fæddur", "fædd", "fætt"] },
    ex: { is: "Ég er fæddur í Reykjavík.", en: "I was born in Reykjavík." } },

  { w: "minn", en: "my, mine", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Þetta er pabbi minn.", en: "That is my dad." } },

  { w: "þinn", en: "your, yours", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Hvar á systir þín heima?", en: "Where does your sister live?" } },

  { w: "sinn", en: "his own, her own, their own", pos: "pron", topic: "possession", unit: 10, cefr: "A2",
    ex: { is: "Hann hringir í mömmu sína.", en: "He calls his mother." } },

  { w: "hans", en: "his", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Bíllinn hans er gamall.", en: "His car is old." } },

  { w: "hennar", en: "her, hers", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Börnin hennar eru í skólanum.", en: "Her children are at school." } },

  { w: "þeirra", en: "their, theirs", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Húsið þeirra er við sjóinn.", en: "Their house is by the sea." } },

  { w: "okkar", en: "our, ours", pos: "pron", topic: "possession", unit: 10, cefr: "A1",
    ex: { is: "Fjölskyldan okkar er stór.", en: "Our family is big." } },

  { w: "gifta sig", en: "to get married", pos: "phrase", topic: "life events", unit: 10, cefr: "A2",
    ex: { is: "Þau ætla að gifta sig í júní.", en: "They are getting married in June." } },

  { w: "ára gamall", en: "years old", pos: "phrase", topic: "age", unit: 10, cefr: "A1",
    ex: { is: "Hann er þrjátíu ára gamall.", en: "He is thirty years old." } },

  { w: "eiga heima", en: "to live, to reside", pos: "phrase", topic: "places", unit: 10, cefr: "A1",
    ex: { is: "Ég á heima í Hafnarfirði.", en: "I live in Hafnarfjörður." } }
];

export default unit;
