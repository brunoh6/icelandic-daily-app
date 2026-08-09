// data/units/u08.js — Unit 8: Forsetningar
// The preposition system, sorted by the case it hands you.

export const unit = {
  id: 8,
  slug: "u08",
  title: "Forsetningar",
  en: "Prepositions",
  cefr: "A1.2",
  icon: "🗺️",
  blurb: "Sort every preposition by the case it demands, and stop guessing.",
  canDo: [
    "Use um, gegnum and kringum with the accusative without thinking",
    "Use the big dative group: að, frá, af, hjá, úr, undan, nálægt and friends",
    "Choose accusative for movement and dative for standing still after í, á, undir and yfir",
    "Say where furniture is in a flat, and who is carrying what"
  ],
  lessons: [
    /* ---------------------------------------------------------------- L1 */
    {
      n: 1,
      id: "u08l1",
      kind: "lesson",
      title: "Alltaf þolfall",
      en: "Always the accusative",
      goal: "Use um, gegnum, kringum and umfram with the accusative.",
      minutes: 9,
      icon: "➡️",
      teach: [
        {
          h: "Four that never change their mind",
          p: "Most prepositions make you choose a case. These four never do. Whatever follows them goes into the accusative, every single time, in every sentence you will ever write.",
          ex: [
            ["Við tölum um veðrið.", "We talk about the weather."],
            ["Hann gengur gegnum garðinn.", "He walks through the garden."],
            ["Við göngum í kringum húsið.", "We walk around the house."]
          ],
          tip: "In speech kringum nearly always arrives with í in front of it: í kringum."
        },
        {
          h: "um does three jobs at once",
          table: {
            cols: ["merking", "dæmi", "enska"],
            rows: [
              ["about", "um veðrið", "about the weather"],
              ["around", "um bæinn", "around town"],
              ["during", "um helgina", "over the weekend"]
            ]
          },
          tip: "All three are accusative, so you only have one form to learn."
        },
        {
          h: "What the accusative looks like",
          p: "With the definite article the accusative is easy to spot: masculine -inn, feminine -ina, neuter -ið. Say the noun on its own first, then bend it.",
          list: [
            "garðurinn → um garðinn",
            "hurðin → um hurðina",
            "húsið → um húsið"
          ]
        }
      ],
      vocab: ["um", "gegnum", "kringum", "umfram", "garður", "gluggi"],
      items: [
        {
          t: "match", q: "Match the prepositions",
          pairs: [["um", "about"], ["gegnum", "through"], ["kringum", "around"], ["umfram", "beyond, more than"]]
        },
        {
          t: "choice", q: "Which case do um, gegnum, kringum and umfram take?",
          opts: ["þolfall", "þágufall", "eignarfall", "nefnifall"], a: "þolfall",
          note: "All four are accusative-only. No situation changes that.",
          tags: ["prep:acc"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Við tölum um ___ .", base: "veðrið",
          opts: ["veðrið", "veðrinu", "veðursins"], a: "veðrið",
          case: "ÞF", why: "um is always accusative; neuter accusative looks like the nominative.", mode: "choice",
          tags: ["prep:um", "case:acc"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Hann gengur gegnum ___ .", base: "garðurinn", a: "garðinn",
          case: "ÞF", why: "gegnum + ÞF: garðurinn → garðinn.", mode: "type",
          tags: ["prep:gegnum", "case:acc"]
        },
        {
          t: "build", q: "We walk around the house",
          a: "Við göngum í kringum húsið", extra: ["húsinu", "frá", "gegnum"],
          note: "í kringum is one unit; the noun after it is accusative."
        },
        {
          t: "type", q: "Type “I think about you.”",
          a: "Ég hugsa um þig", hint: "um + ÞF, so þú becomes þig",
          note: "Pronouns take the accusative too: mig, þig, hann, hana."
        },
        {
          t: "gender", word: "gluggi", a: "kk",
          note: "Nouns in -i like gluggi, sófi and skóli are masculine."
        },
        {
          t: "listen", speak: "Hann gengur í kringum húsið.", q: "What did you hear?",
          mode: "choice",
          opts: ["He walks around the house.", "He walks into the house.", "He walks out of the house."],
          a: "He walks around the house."
        },
        {
          t: "choice", q: "Which one is right for “over the weekend”?",
          opts: ["um helgina", "um helginni", "um helgi"], a: "um helgina",
          note: "um also covers a stretch of time, still with the accusative."
        },
        {
          t: "table", q: "Complete the declension of garður (kk.)",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["garður", "garðar"], blank: [] },
            { label: "ÞF", cells: ["garð", "garða"], blank: [0] },
            { label: "ÞGF", cells: ["garði", "görðum"], blank: [1] },
            { label: "EF", cells: ["garðs", "garða"], blank: [] }
          ]
        },
        {
          t: "speak", is: "Við tölum um veðrið á hverjum degi.",
          en: "We talk about the weather every single day.",
          tip: "veðrið is accusative after um. The rest of the sentence is dative after á."
        }
      ]
    },

    /* ---------------------------------------------------------------- L2 */
    {
      n: 2,
      id: "u08l2",
      kind: "lesson",
      title: "Alltaf þágufall",
      en: "Always the dative",
      goal: "Use the large dative-only group with confidence.",
      minutes: 10,
      icon: "🧲",
      teach: [
        {
          h: "The dative crowd",
          p: "This is the biggest fixed group, and it is worth learning as a block. Say the list out loud until it sounds like a song.",
          list: [
            "að (up to) · frá (from) · af (off) · hjá (at someone's) · úr (out of)",
            "handa (for) · undan (out from under) · nálægt (near)",
            "gegn (against) · ásamt (together with) · meðfram (along)"
          ]
        },
        {
          h: "Movement away lives in the dative",
          p: "Notice what frá, af, úr and undan have in common: something leaves. Icelandic files leaving under the dative and never asks again.",
          table: {
            cols: ["forsetning", "dæmi", "enska"],
            rows: [
              ["að", "Við göngum að húsinu.", "We walk up to the house."],
              ["frá", "Rútan fer frá Hlemmi.", "The coach leaves from Hlemmur."],
              ["af", "Hún tekur bókina af borðinu.", "She takes the book off the table."],
              ["úr", "Hann kemur úr eldhúsinu.", "He comes out of the kitchen."],
              ["hjá", "Ég bý hjá ömmu.", "I live at my grandmother's."]
            ]
          }
        },
        {
          h: "handa is a gift word",
          p: "handa means for the benefit of somebody, and it wants the dative. When you mean for in the sense of instead of or on behalf of, you reach for fyrir instead, with the accusative.",
          ex: [
            ["Þetta er handa þér.", "This one is for you."],
            ["Ég geri þetta fyrir þig.", "I am doing this for you."]
          ]
        }
      ],
      vocab: ["að", "af", "úr", "handa", "undan", "nálægt", "gegn", "ásamt", "meðfram", "hurð"],
      items: [
        {
          t: "match", q: "Match the prepositions",
          pairs: [["að", "up to"], ["af", "off, from"], ["úr", "out of"], ["nálægt", "near"], ["undan", "out from under"]]
        },
        {
          t: "choice", q: "Which fits? “She takes the book ___ the table.”",
          opts: ["af borðinu", "á borðið", "úr borðinu", "að borðinu"], a: "af borðinu",
          note: "á puts something onto a surface; af takes it off again, and af is dative.",
          tags: ["prep:af", "case:dat"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Kötturinn kemur undan ___ .", base: "sófinn", a: "sófanum",
          case: "ÞGF", why: "undan is always dative: sófinn → sófanum.", mode: "type",
          tags: ["prep:undan", "case:dat"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Við búum nálægt ___ .", base: "sundlaugin", a: "sundlauginni",
          case: "ÞGF", why: "nálægt + ÞGF; feminine dative with the article ends in -inni.", mode: "type",
          tags: ["prep:nálægt", "case:dat"]
        },
        {
          t: "build", q: "He comes out of the kitchen",
          a: "Hann kemur úr eldhúsinu", extra: ["í", "eldhúsið", "af"],
          note: "úr is the way out of a closed space, and it never takes anything but the dative."
        },
        {
          t: "type", q: "Type “This one is for you.” (a present)",
          a: "Þetta er handa þér", hint: "handa + ÞGF: þú → þér",
          note: "handa marks the person who benefits."
        },
        {
          t: "listen", speak: "Ég geng meðfram sjónum.", q: "What did you hear?",
          mode: "choice",
          opts: ["I walk along the sea.", "I walk to the sea.", "I swim in the sea."],
          a: "I walk along the sea."
        },
        {
          t: "choice", q: "gegn takes which case?",
          opts: ["þágufall", "þolfall", "eignarfall"], a: "þágufall",
          note: "gegn means against, and it is dative: gegn Danmörku."
        },
        {
          t: "table", q: "Complete the dative of the pronouns",
          cols: ["", "nefnifall", "þágufall"],
          rows: [
            { label: "1. pers.", cells: ["ég", "mér"], blank: [1] },
            { label: "2. pers.", cells: ["þú", "þér"], blank: [1] },
            { label: "3. pers. kk", cells: ["hann", "honum"], blank: [] },
            { label: "3. pers. kvk", cells: ["hún", "henni"], blank: [1] }
          ]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Ég vinn hjá ___ .", base: "læknir",
          opts: ["lækni", "læknir", "læknis"], a: "lækni",
          case: "ÞGF", why: "hjá + ÞGF; læknir loses its -r in the dative.", mode: "choice"
        },
        {
          t: "gender", word: "hurð", a: "kvk",
          note: "Plenty of feminine nouns end in a bare consonant: hurð, borg, bók."
        },
        {
          t: "speak", is: "Ég kem ásamt vinum mínum.",
          en: "I am coming along with my friends.",
          tip: "ásamt behaves exactly like frá and hjá: dative, always."
        }
      ]
    },

    /* ---------------------------------------------------------------- L3 */
    {
      n: 3,
      id: "u08l3",
      kind: "grammar",
      title: "Hreyfing eða kyrrstaða",
      en: "Motion or rest",
      goal: "Choose accusative for a change of place and dative for a static one.",
      minutes: 13,
      icon: "🔀",
      teach: [
        {
          h: "One preposition, two answers",
          p: "í, á, undir, yfir, fyrir and eftir take two cases, and the choice is not about the word. It is about the situation. If something ends up somewhere new, use the accusative. If it is simply there already, use the dative.",
          ex: [
            ["Ég set bókina á stólinn.", "I put the book on the chair."],
            ["Bókin er á stólnum.", "The book is on the chair."]
          ],
          tip: "Ask yourself: did anything move? Movement into a place → ÞF. Sitting in a place → ÞGF."
        },
        {
          h: "The same four, side by side",
          table: {
            cols: ["forsetning", "hreyfing (ÞF)", "kyrrstaða (ÞGF)"],
            rows: [
              ["í", "Ég fer í eldhúsið.", "Ég er í eldhúsinu."],
              ["á", "Ég set bókina á borðið.", "Bókin er á borðinu."],
              ["undir", "Boltinn fer undir rúmið.", "Boltinn er undir rúminu."],
              ["yfir", "Hún hengir myndina yfir sófann.", "Myndin hangir yfir sófanum."]
            ]
          }
        },
        {
          h: "Three one-way opposites",
          p: "Every two-case preposition has a partner that only means away. Those partners have no choice to make: they are dative and nothing else.",
          table: {
            cols: ["inn í", "út úr", "athugasemd"],
            rows: [
              ["í (ÞF/ÞGF)", "úr (ÞGF)", "Ég fer í bílinn. / Ég fer úr bílnum."],
              ["á (ÞF/ÞGF)", "af (ÞGF)", "Ég set glasið á borðið. / Ég tek glasið af borðinu."],
              ["undir (ÞF/ÞGF)", "undan (ÞGF)", "Boltinn fer undir sófann. / Boltinn kemur undan sófanum."]
            ]
          },
          tip: "Learn them as pairs. Half the work disappears."
        },
        {
          h: "fyrir and eftir keep two lives",
          p: "These two split by meaning rather than by movement. Learn the four phrases and you have most of everyday use.",
          table: {
            cols: ["forsetning", "þolfall", "þágufall"],
            rows: [
              ["fyrir", "fyrir mig (for me)", "fyrir glugganum (blocking the window)"],
              ["eftir", "eftir þrjá daga (in three days)", "eftir götunni (along the street)"]
            ]
          }
        }
      ],
      vocab: ["í", "á", "undir", "yfir", "fyrir", "eftir", "borð", "stóll", "sófi", "rúm", "gólf", "setja"],
      items: [
        {
          t: "fill", q: "Nothing is moving here.",
          sentence: "Bókin er á ___ .", base: "borðið",
          opts: ["borðið", "borðinu", "borðsins"], a: "borðinu",
          case: "ÞGF", why: "Static location → dative.", mode: "choice",
          tags: ["prep:á", "case:dat"]
        },
        {
          t: "fill", q: "Something is being moved.",
          sentence: "Ég set bókina á ___ .", base: "stóllinn", a: "stólinn",
          case: "ÞF", why: "The book ends up somewhere new → accusative.", mode: "type",
          tags: ["prep:á", "case:acc"]
        },
        {
          t: "fill", q: "Nothing is being moved.",
          sentence: "Bókin liggur á ___ .", base: "stóllinn", a: "stólnum",
          case: "ÞGF", why: "liggja describes a state, so á takes the dative.", mode: "type",
          tags: ["prep:á", "case:dat"]
        },
        {
          t: "fill", q: "The cat is running.",
          sentence: "Kötturinn hleypur undir ___ .", base: "sófinn",
          opts: ["sófinn", "sófann", "sófanum"], a: "sófann",
          case: "ÞF", why: "Running under something is a change of place → accusative.", mode: "choice",
          tags: ["prep:undir", "case:acc"]
        },
        {
          t: "fill", q: "The cat has settled.",
          sentence: "Kötturinn sefur undir ___ .", base: "sófinn", a: "sófanum",
          case: "ÞGF", why: "Sleeping is not moving → dative.", mode: "type",
          tags: ["prep:undir", "case:dat"]
        },
        {
          t: "table", q: "Fill in the missing halves",
          cols: ["", "hreyfing (ÞF)", "kyrrstaða (ÞGF)"],
          rows: [
            { label: "í + herbergi", cells: ["í herbergið", "í herberginu"], blank: [1] },
            { label: "á + gólf", cells: ["á gólfið", "á gólfinu"], blank: [0] },
            { label: "undir + rúm", cells: ["undir rúmið", "undir rúminu"], blank: [1] },
            { label: "yfir + borð", cells: ["yfir borðið", "yfir borðinu"], blank: [] }
          ]
        },
        {
          t: "build", q: "I'm getting out of the car",
          a: "Ég fer út úr bílnum", extra: ["í", "bílinn", "á"],
          note: "úr is the opposite of í, and it only ever takes the dative."
        },
        {
          t: "choice", q: "“I take the glass off the table.” Which one?",
          opts: ["af borðinu", "úr borðinu", "undan borðinu", "á borðið"], a: "af borðinu",
          note: "The opposite of á is af, the opposite of í is úr, the opposite of undir is undan."
        },
        {
          t: "choice", q: "How do you say “for three days”?",
          opts: ["í þrjá daga", "í þremur dögum", "á þrjá daga"], a: "í þrjá daga",
          note: "í plus the accusative also measures a stretch of time.",
          tags: ["prep:í", "case:acc", "time"]
        },
        {
          t: "fill", q: "The bus is driving along the street.",
          sentence: "Rútan keyrir eftir ___ .", base: "gatan", a: "götunni",
          case: "ÞGF", why: "eftir + ÞGF means along; watch the u-shift: gata → götu.", mode: "type",
          tags: ["prep:eftir", "case:dat"]
        },
        {
          t: "fill", q: "Time, not place.",
          sentence: "Ég kem aftur eftir ___ .", base: "mánuður",
          opts: ["mánuður", "mánuð", "mánuði"], a: "mánuð",
          case: "ÞF", why: "eftir + ÞF when you mean after a stretch of time.", mode: "choice",
          tags: ["prep:eftir", "case:acc", "time"]
        },
        {
          t: "type", q: "Type “The cat is under the bed.”",
          a: "Kötturinn er undir rúminu", hint: "no movement → ÞGF",
          note: "vera plus a two-case preposition almost always means the dative."
        },
        {
          t: "listen", speak: "Hann setur lyklana á borðið.", q: "What did you hear?",
          mode: "choice",
          opts: ["He puts the keys on the table.", "The keys are on the table.", "He takes the keys off the table."],
          a: "He puts the keys on the table."
        },
        {
          t: "speak", is: "Bíllinn stendur fyrir framan húsið.",
          en: "The car is parked in front of the house.",
          tip: "fyrir framan is a fixed pair and it takes the accusative, standing still or not."
        }
      ]
    },

    /* ---------------------------------------------------------------- L4 */
    {
      n: 4,
      id: "u08l4",
      kind: "lesson",
      title: "Eignarfall og með",
      en: "The genitive group, and með",
      goal: "Use til, án, milli and the rest with the genitive, and split með in two.",
      minutes: 10,
      icon: "🔑",
      teach: [
        {
          h: "The genitive club",
          p: "A smaller group, but you meet them constantly. Every one of them takes the genitive.",
          list: [
            "til (to) · án (without) · auk (besides) · milli (between)",
            "vegna (because of) · innan (inside) · utan (outside)",
            "handan (on the far side of) · meðal (among)"
          ],
          ex: [
            ["Ég fer til Akureyrar.", "I am going to Akureyri."],
            ["Kaffi án sykurs, takk.", "Coffee without sugar, please."],
            ["Bakaríið er handan götunnar.", "The bakery is across the street."]
          ]
        },
        {
          h: "Genitive endings you will meet",
          table: {
            cols: ["kyn", "nefnifall", "eignarfall"],
            rows: [
              ["kk", "garðurinn", "garðsins"],
              ["kvk", "hurðin", "hurðarinnar"],
              ["hk", "húsið", "hússins"]
            ]
          },
          tip: "milli often shows up as á milli. The case does not change."
        },
        {
          h: "með: who walks and who is carried",
          p: "með splits by who is in charge. A companion travelling on their own legs takes the dative. Something you pick up and bring along takes the accusative.",
          ex: [
            ["Ég kem með þér.", "I am coming with you."],
            ["Hún kemur með börnin.", "She is bringing the children."],
            ["Ég er með lyklana.", "I have got the keys."],
            ["Við förum með strætó.", "We take the bus."]
          ],
          tip: "vera með plus the accusative is the everyday way to say have."
        }
      ],
      vocab: ["til", "án", "auk", "milli", "vegna", "innan", "utan", "handan", "meðal", "með", "lykill"],
      items: [
        {
          t: "match", q: "Match the prepositions",
          pairs: [["til", "to"], ["án", "without"], ["milli", "between"], ["vegna", "because of"], ["auk", "besides"]]
        },
        {
          t: "fill", q: "Put the place name into the right case.",
          sentence: "Ég fer til ___ .", base: "Ísland", a: "Íslands",
          case: "EF", why: "til always takes the genitive.", mode: "type",
          tags: ["prep:til", "case:gen"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Kaffi án ___ , takk.", base: "sykur",
          opts: ["sykur", "sykri", "sykurs"], a: "sykurs",
          case: "EF", why: "án + EF, like til.", mode: "choice",
          tags: ["prep:án", "case:gen"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Bakaríið er handan ___ .", base: "gatan", a: "götunnar",
          case: "EF", why: "handan + EF; gata → götu → götunnar.", mode: "type",
          tags: ["prep:handan", "case:gen"]
        },
        {
          t: "build", q: "The shop is between the houses",
          a: "Búðin er á milli húsanna", extra: ["húsin", "með", "frá"],
          note: "Genitive plural with the article: húsin → húsanna."
        },
        {
          t: "choice", q: "How do you say “I have got the keys”?",
          opts: ["Ég er með lyklana", "Ég er með lyklunum", "Ég er með lyklarnir"], a: "Ég er með lyklana",
          note: "vera með means have, and what you hold goes in the accusative.",
          tags: ["prep:með", "case:acc"]
        },
        {
          t: "choice", q: "How do you say “I am coming with you”?",
          opts: ["Ég kem með þér", "Ég kem með þig", "Ég kem með þín"], a: "Ég kem með þér",
          note: "A companion who walks on their own legs goes in the dative.",
          tags: ["prep:með", "case:dat"]
        },
        {
          t: "type", q: "Type “We take the bus.”",
          a: "Við förum með strætó", hint: "means of transport → með + ÞGF",
          note: "strætó never changes shape, but the case behind it is dative."
        },
        {
          t: "gender", word: "veggur", a: "kk",
          note: "The ending -ur on a noun is a strong masculine signal."
        },
        {
          t: "table", q: "Complete the genitive with the article",
          cols: ["", "nefnifall", "eignarfall"],
          rows: [
            { label: "kk", cells: ["garðurinn", "garðsins"], blank: [1] },
            { label: "kvk", cells: ["hurðin", "hurðarinnar"], blank: [1] },
            { label: "hk", cells: ["húsið", "hússins"], blank: [1] }
          ]
        },
        {
          t: "listen", speak: "Ég bíð fyrir utan bakaríið.", q: "What did you hear?",
          mode: "choice",
          opts: ["I am waiting outside the bakery.", "I am waiting inside the bakery.", "I am waiting after the bakery."],
          a: "I am waiting outside the bakery."
        }
      ]
    },

    /* ---------------------------------------------------------------- L5 */
    {
      n: 5,
      id: "u08l5",
      kind: "story",
      title: "Sófinn og hurðin",
      en: "The sofa and the door",
      goal: "Follow a move-in day and read the prepositions off it.",
      minutes: 10,
      icon: "🛋️",
      teach: [
        {
          h: "Three verbs that stay put",
          p: "standa, liggja and sitja describe where something already is, so the preposition after them takes the dative.",
          ex: [
            ["Borðið stendur í eldhúsinu.", "The table stands in the kitchen."],
            ["Teppið liggur á gólfinu.", "The rug is lying on the floor."]
          ]
        },
        {
          h: "Two spatial pairs worth memorising",
          list: [
            "fyrir framan + ÞF — in front of",
            "fyrir aftan + ÞF — behind"
          ],
          tip: "Both are accusative even though nothing is moving. Fixed phrases beat logic."
        }
      ],
      story: {
        title: "Sófinn og hurðin",
        lines: [
          { sp: "Kári", is: "Hvert á sófinn að fara?", en: "Where is the sofa supposed to go?" },
          { sp: "Anna", is: "Undir gluggann, held ég.", en: "Under the window, I think." },
          { sp: "Kári", is: "Hann kemst ekki gegnum hurðina.", en: "It doesn't fit through the door." },
          { sp: "Anna", is: "Við förum með hann í kringum húsið.", en: "We'll take it around the house." },
          { sp: "Kári", is: "Er garður fyrir aftan húsið?", en: "Is there a garden behind the house?" },
          { sp: "Anna", is: "Já, og lykillinn að bakdyrunum er í vasanum mínum.", en: "Yes, and the key to the back door is in my pocket." },
          { sp: "Kári", is: "Gott. Þá stend ég hérna með sófann í tuttugu mínútur.", en: "Good. So I'll stand here holding the sofa for twenty minutes." },
          { sp: "Anna", is: "Nei, nei. Ég kem með þér.", en: "No, no. I'm coming with you." },
          { sp: "Kári", is: "Og hvar á borðið að standa?", en: "And where is the table supposed to stand?" },
          { sp: "Anna", is: "Í eldhúsinu. En í kvöld borðum við á gólfinu.", en: "In the kitchen. But tonight we're eating on the floor." }
        ],
        glossary: [
          ["komast", "to get somewhere, to fit"],
          ["bakdyr", "back door"],
          ["vasi", "pocket"],
          ["eins og", "like, the same as"],
          ["í kvöld", "tonight"]
        ]
      },
      vocab: ["sófi", "gluggi", "hurð", "garður", "teppi", "standa", "liggja", "sitja", "fyrir framan", "fyrir aftan"],
      items: [
        {
          t: "choice", q: "Where does Anna want the sofa?",
          opts: ["Undir gluggann", "Í eldhúsið", "Fyrir aftan húsið", "Á gólfið"], a: "Undir gluggann",
          note: "The sofa is being moved there, so the accusative: undir gluggann."
        },
        {
          t: "choice", q: "Why can't the sofa go straight in?",
          opts: ["It doesn't fit through the door.", "The door is locked.", "It is too heavy for Kári.", "The window is shut."],
          a: "It doesn't fit through the door."
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Sófinn kemst ekki gegnum ___ .", base: "hurðin",
          opts: ["hurðin", "hurðina", "hurðinni"], a: "hurðina",
          case: "ÞF", why: "gegnum is accusative-only.", mode: "choice",
          tags: ["prep:gegnum", "case:acc"]
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Lykillinn er í ___ mínum.", base: "vasi", a: "vasanum",
          case: "ÞGF", why: "í + ÞGF because the key is simply there.", mode: "type",
          tags: ["prep:í", "case:dat"]
        },
        {
          t: "build", q: "We'll take it around the house",
          a: "Við förum með hann í kringum húsið", extra: ["húsinu", "gegnum", "um"],
          note: "með hann is accusative: Kári and Anna are the ones doing the carrying."
        },
        {
          t: "type", q: "Type “I'm coming with you.”",
          a: "Ég kem með þér", hint: "a companion on their own legs → ÞGF"
        },
        {
          t: "listen", speak: "Þá stend ég hérna með sófann.", q: "What did you hear?",
          mode: "choice",
          opts: ["So I'll stand here holding the sofa.", "So I'll sit here on the sofa.", "So I'll walk past the sofa."],
          a: "So I'll stand here holding the sofa."
        },
        {
          t: "match", q: "Match the words from the story",
          pairs: [["komast", "to fit, to get through"], ["bakdyr", "back door"], ["vasi", "pocket"], ["í kvöld", "tonight"], ["eins og", "like"]]
        },
        {
          t: "gender", word: "sófi", a: "kk",
          note: "sófi, gluggi, skóli: weak masculines, all in -i."
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Í kvöld borðum við á ___ .", base: "gólfið",
          opts: ["gólfið", "gólfinu", "gólfsins"], a: "gólfinu",
          case: "ÞGF", why: "Sitting and eating there is a state, not a move.", mode: "choice",
          tags: ["prep:á", "case:dat"]
        },
        {
          t: "speak", is: "Er garður fyrir aftan húsið?",
          en: "Is there a garden behind the house?",
          tip: "fyrir aftan takes the accusative: húsið."
        }
      ]
    },

    /* ---------------------------------------------------------------- L6 */
    {
      n: 6,
      id: "u08l6",
      kind: "checkpoint",
      title: "Forsetningarnar þínar",
      en: "Your prepositions",
      goal: "Prove you can pick the case without stopping to think.",
      minutes: 12,
      icon: "🏁",
      teach: [
        {
          h: "What you now control",
          list: [
            "Accusative always: um, gegnum, kringum, umfram",
            "Dative always: að, frá, af, hjá, úr, handa, undan, nálægt, gegn, ásamt, meðfram",
            "Genitive always: til, án, auk, milli, vegna, innan, utan, handan, meðal",
            "Two cases: í, á, undir, yfir, fyrir, eftir — moving there is ÞF, being there is ÞGF",
            "með: dative for a companion or a vehicle, accusative for what you carry"
          ]
        }
      ],
      vocab: ["skápur", "veggur", "teppi", "eldhús", "herbergi", "íbúð"],
      items: [
        {
          t: "choice", q: "Which case follows til?",
          opts: ["eignarfall", "þolfall", "þágufall", "nefnifall"], a: "eignarfall",
          note: "til, án, milli and vegna are all genitive."
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Ég geng gegnum ___ .", base: "garðurinn", a: "garðinn",
          case: "ÞF", why: "gegnum is accusative-only.", mode: "type"
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Kötturinn liggur á ___ .", base: "teppið",
          opts: ["teppið", "teppinu", "teppisins"], a: "teppinu",
          case: "ÞGF", why: "liggja is a state, so á takes the dative.", mode: "choice"
        },
        {
          t: "fill", q: "Put the noun into the right case.",
          sentence: "Hún kemur út úr ___ .", base: "eldhúsið", a: "eldhúsinu",
          case: "ÞGF", why: "úr is dative and nothing else.", mode: "type"
        },
        {
          t: "build", q: "The key is in the cupboard",
          a: "Lykillinn er í skápnum", extra: ["skápinn", "á", "úr"],
          note: "Nothing moves, so í takes the dative."
        },
        {
          t: "type", q: "Type “I am going to Akureyri.”",
          a: "Ég fer til Akureyrar", hint: "til + EF"
        },
        {
          t: "choice", q: "vera með, meaning to have, takes which case?",
          opts: ["þolfall", "þágufall", "eignarfall"], a: "þolfall",
          note: "Ég er með lyklana, ekki lyklunum."
        },
        {
          t: "table", q: "Fill in the missing halves",
          cols: ["", "ÞF (hreyfing)", "ÞGF (kyrrstaða)"],
          rows: [
            { label: "í + skápur", cells: ["í skápinn", "í skápnum"], blank: [0] },
            { label: "á + veggur", cells: ["á vegginn", "á veggnum"], blank: [1] },
            { label: "undir + rúm", cells: ["undir rúmið", "undir rúminu"], blank: [1] },
            { label: "yfir + borð", cells: ["yfir borðið", "yfir borðinu"], blank: [] }
          ]
        },
        {
          t: "gender", word: "teppi", a: "hk",
          note: "Nouns in unstressed -i like teppi and herbergi are neuter."
        },
        {
          t: "listen", speak: "Bíllinn stendur fyrir framan bakaríið.", q: "What did you hear?",
          mode: "choice",
          opts: ["The car is in front of the bakery.", "The car is behind the bakery.", "The car is inside the bakery."],
          a: "The car is in front of the bakery."
        },
        {
          t: "match", q: "Match the prepositions",
          pairs: [["án", "without"], ["auk", "besides"], ["milli", "between"], ["vegna", "because of"], ["nálægt", "near"], ["undan", "out from under"]]
        },
        {
          t: "fill", q: "Time, not place.",
          sentence: "Ég kem aftur eftir ___ .", base: "mánuður",
          opts: ["mánuður", "mánuð", "mánuði"], a: "mánuð",
          case: "ÞF", why: "eftir + ÞF for a stretch of time.", mode: "choice"
        },
        {
          t: "speak", is: "Við tölum um veðrið, eins og alltaf.",
          en: "We're talking about the weather, as always.",
          tip: "um is accusative, and the weather is inexhaustible."
        },
        {
          t: "type", q: "Type “The cat is under the sofa.”",
          a: "Kötturinn er undir sófanum", hint: "no movement → ÞGF"
        }
      ]
    }
  ]
};

export const vocab = [
  /* ---------------------------------------------------- always accusative */
  { w: "um", en: "about, around, during", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF",
    ex: { is: "Við tölum um veðrið.", en: "We talk about the weather." } },

  { w: "gegnum", en: "through", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF",
    ex: { is: "Hann gengur gegnum garðinn.", en: "He walks through the garden." } },

  { w: "kringum", en: "around", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF",
    ex: { is: "Við göngum í kringum húsið.", en: "We walk around the house." } },

  { w: "umfram", en: "beyond, more than", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "ÞF",
    ex: { is: "Umfram allt þarf ég kaffi.", en: "Above all I need coffee." } },

  /* -------------------------------------------------------- always dative */
  { w: "að", en: "to, up to", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞGF",
    ex: { is: "Við göngum að húsinu.", en: "We walk up to the house." } },

  { w: "af", en: "off, from", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞGF",
    ex: { is: "Hún tekur bókina af borðinu.", en: "She takes the book off the table." } },

  { w: "úr", en: "out of", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞGF",
    ex: { is: "Ég fer úr bílnum.", en: "I get out of the car." } },

  { w: "handa", en: "for (the benefit of)", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞGF",
    ex: { is: "Þetta er handa þér.", en: "This one is for you." } },

  { w: "undan", en: "out from under", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "ÞGF",
    ex: { is: "Kötturinn kemur undan sófanum.", en: "The cat comes out from under the sofa." } },

  { w: "nálægt", en: "near", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞGF",
    ex: { is: "Við búum nálægt sundlauginni.", en: "We live near the swimming pool." } },

  { w: "gegn", en: "against", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "ÞGF",
    ex: { is: "Ísland spilar gegn Danmörku.", en: "Iceland is playing against Denmark." } },

  { w: "ásamt", en: "together with", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "ÞGF",
    ex: { is: "Ég kem ásamt vinum mínum.", en: "I am coming along with my friends." } },

  { w: "meðfram", en: "along", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "ÞGF",
    ex: { is: "Ég geng meðfram sjónum.", en: "I walk along the sea." } },

  /* ------------------------------------------------------ always genitive */
  { w: "til", en: "to", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "EF",
    ex: { is: "Ég fer til Akureyrar.", en: "I am going to Akureyri." } },

  { w: "án", en: "without", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "EF",
    ex: { is: "Kaffi án sykurs, takk.", en: "Coffee without sugar, please." } },

  { w: "auk", en: "besides, in addition to", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Auk þess er kalt úti.", en: "Besides, it is cold outside." } },

  { w: "milli", en: "between", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "EF",
    ex: { is: "Búðin er á milli húsanna.", en: "The shop is between the houses." } },

  { w: "vegna", en: "because of", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Við förum ekki út vegna veðursins.", en: "We are not going out because of the weather." } },

  { w: "innan", en: "inside, within", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Hún býr innan borgarinnar.", en: "She lives inside the city." } },

  { w: "utan", en: "outside of", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Þau búa utan borgarinnar.", en: "They live outside the city." } },

  { w: "handan", en: "on the far side of", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Bakaríið er handan götunnar.", en: "The bakery is across the street." } },

  { w: "meðal", en: "among", pos: "prep", topic: "prepositions", unit: 8, cefr: "A2", gov: "EF",
    ex: { is: "Þetta er algengt meðal Íslendinga.", en: "That is common among Icelanders." } },

  /* ----------------------------------------------------------- two cases */
  { w: "í", en: "in, into", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Ég er í eldhúsinu.", en: "I am in the kitchen." } },

  { w: "á", en: "on, onto", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Bókin er á borðinu.", en: "The book is on the table." } },

  { w: "undir", en: "under", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Kötturinn sefur undir rúminu.", en: "The cat sleeps under the bed." } },

  { w: "yfir", en: "over, above", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Myndin hangir yfir sófanum.", en: "The picture hangs above the sofa." } },

  { w: "fyrir", en: "in front of, for", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Þetta er fyrir þig.", en: "This is for you." } },

  { w: "eftir", en: "after, along", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Ég kem aftur eftir mánuð.", en: "I will be back in a month." } },

  { w: "með", en: "with", pos: "prep", topic: "prepositions", unit: 8, cefr: "A1", gov: "ÞF+ÞGF",
    ex: { is: "Ég fer með strætó.", en: "I take the bus." } },

  /* ------------------------------------------------- fixed spatial pairs */
  { w: "fyrir framan", en: "in front of", pos: "phrase", topic: "spatial", unit: 8, cefr: "A1",
    ex: { is: "Bíllinn stendur fyrir framan húsið.", en: "The car is parked in front of the house." } },

  { w: "fyrir aftan", en: "behind", pos: "phrase", topic: "spatial", unit: 8, cefr: "A1",
    ex: { is: "Garðurinn er fyrir aftan húsið.", en: "The garden is behind the house." } },

  /* ---------------------------------------------- furniture and rooms */
  { w: "borð", en: "table", pos: "noun", g: "hk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["borð", "borð", "borði", "borðs"], pl: ["borð", "borð", "borðum", "borða"] },
    ex: { is: "Lyklarnir liggja á borðinu.", en: "The keys are lying on the table." } },

  { w: "stóll", en: "chair", pos: "noun", g: "kk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["stóll", "stól", "stól", "stóls"], pl: ["stólar", "stóla", "stólum", "stóla"] },
    ex: { is: "Ég sit á stólnum.", en: "I am sitting on the chair." } },

  { w: "sófi", en: "sofa", pos: "noun", g: "kk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["sófi", "sófa", "sófa", "sófa"], pl: ["sófar", "sófa", "sófum", "sófa"] },
    ex: { is: "Kötturinn sefur á sófanum.", en: "The cat sleeps on the sofa." } },

  { w: "rúm", en: "bed", pos: "noun", g: "hk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["rúm", "rúm", "rúmi", "rúms"], pl: ["rúm", "rúm", "rúmum", "rúma"] },
    ex: { is: "Boltinn er undir rúminu.", en: "The ball is under the bed." } },

  { w: "skápur", en: "cupboard, closet", pos: "noun", g: "kk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["skápur", "skáp", "skáp", "skáps"], pl: ["skápar", "skápa", "skápum", "skápa"] },
    ex: { is: "Glösin eru í skápnum.", en: "The glasses are in the cupboard." } },

  { w: "teppi", en: "rug, carpet", pos: "noun", g: "hk", topic: "furniture", unit: 8, cefr: "A1",
    forms: { sg: ["teppi", "teppi", "teppi", "teppis"], pl: ["teppi", "teppi", "teppum", "teppa"] },
    ex: { is: "Kötturinn liggur á teppinu.", en: "The cat is lying on the rug." } },

  { w: "gólf", en: "floor", pos: "noun", g: "hk", topic: "spatial", unit: 8, cefr: "A1",
    forms: { sg: ["gólf", "gólf", "gólfi", "gólfs"], pl: ["gólf", "gólf", "gólfum", "gólfa"] },
    ex: { is: "Teppið liggur á gólfinu.", en: "The rug is lying on the floor." } },

  { w: "veggur", en: "wall", pos: "noun", g: "kk", topic: "spatial", unit: 8, cefr: "A1",
    forms: { sg: ["veggur", "vegg", "vegg", "veggjar"], pl: ["veggir", "veggi", "veggjum", "veggja"] },
    ex: { is: "Myndin hangir á veggnum.", en: "The picture hangs on the wall." } },

  { w: "gluggi", en: "window", pos: "noun", g: "kk", topic: "spatial", unit: 8, cefr: "A1",
    forms: { sg: ["gluggi", "glugga", "glugga", "glugga"], pl: ["gluggar", "glugga", "gluggum", "glugga"] },
    ex: { is: "Sófinn stendur undir glugganum.", en: "The sofa stands under the window." } },

  { w: "hurð", en: "door", pos: "noun", g: "kvk", topic: "spatial", unit: 8, cefr: "A1",
    forms: { sg: ["hurð", "hurð", "hurð", "hurðar"], pl: ["hurðir", "hurðir", "hurðum", "hurða"] },
    ex: { is: "Sófinn kemst ekki gegnum hurðina.", en: "The sofa does not fit through the door." } },

  { w: "herbergi", en: "room", pos: "noun", g: "hk", topic: "home", unit: 8, cefr: "A1",
    forms: { sg: ["herbergi", "herbergi", "herbergi", "herbergis"], pl: ["herbergi", "herbergi", "herbergjum", "herbergja"] },
    ex: { is: "Ég sef í litla herberginu.", en: "I sleep in the little room." } },

  { w: "eldhús", en: "kitchen", pos: "noun", g: "hk", topic: "home", unit: 8, cefr: "A1",
    forms: { sg: ["eldhús", "eldhús", "eldhúsi", "eldhúss"], pl: ["eldhús", "eldhús", "eldhúsum", "eldhúsa"] },
    ex: { is: "Kaffið er í eldhúsinu.", en: "The coffee is in the kitchen." } },

  { w: "íbúð", en: "flat, apartment", pos: "noun", g: "kvk", topic: "home", unit: 8, cefr: "A1",
    forms: { sg: ["íbúð", "íbúð", "íbúð", "íbúðar"], pl: ["íbúðir", "íbúðir", "íbúðum", "íbúða"] },
    ex: { is: "Íbúðin er nálægt höfninni.", en: "The flat is near the harbour." } },

  { w: "garður", en: "garden, yard", pos: "noun", g: "kk", topic: "home", unit: 8, cefr: "A1",
    forms: { sg: ["garður", "garð", "garði", "garðs"], pl: ["garðar", "garða", "görðum", "garða"] },
    ex: { is: "Börnin leika sér í garðinum.", en: "The children are playing in the garden." } },

  { w: "lykill", en: "key", pos: "noun", g: "kk", topic: "home", unit: 8, cefr: "A1",
    forms: { sg: ["lykill", "lykil", "lykli", "lykils"], pl: ["lyklar", "lykla", "lyklum", "lykla"] },
    ex: { is: "Ég er með lykilinn.", en: "I have the key." } },

  /* ------------------------------------------------------------- verbs */
  { w: "setja", en: "to put, to place", pos: "verb", topic: "actions", unit: 8, cefr: "A1", gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["set", "setur", "setur", "setjum", "setjið", "setja"],
            past: ["setti", "settir", "setti", "settum", "settuð", "settu"], pp: "sett" },
    ex: { is: "Ég set bókina á borðið.", en: "I put the book on the table." } },

  { w: "standa", en: "to stand", pos: "verb", topic: "actions", unit: 8, cefr: "A1", vclass: "strong",
    conj: { pres: ["stend", "stendur", "stendur", "stöndum", "standið", "standa"],
            past: ["stóð", "stóðst", "stóð", "stóðum", "stóðuð", "stóðu"], pp: "staðið" },
    ex: { is: "Bíllinn stendur fyrir framan húsið.", en: "The car is parked in front of the house." } },

  { w: "liggja", en: "to lie, to be lying", pos: "verb", topic: "actions", unit: 8, cefr: "A1", vclass: "strong",
    conj: { pres: ["ligg", "liggur", "liggur", "liggjum", "liggið", "liggja"], pp: "legið" },
    ex: { is: "Bókin liggur á gólfinu.", en: "The book is lying on the floor." } },

  { w: "sitja", en: "to sit", pos: "verb", topic: "actions", unit: 8, cefr: "A1", vclass: "strong",
    conj: { pres: ["sit", "situr", "situr", "sitjum", "sitjið", "sitja"], pp: "setið" },
    ex: { is: "Hún situr á stólnum.", en: "She is sitting on the chair." } }
];

export default unit;
