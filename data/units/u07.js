// Lundi — Unit 7: Dagurinn minn / My day
// Theme: daily routine from waking to sleeping.
// Grammar: the dative in depth, personal pronoun declension, strong-verb i-umlaut, time of day.

export const unit = {
  id: 7,
  slug: "u07",
  title: "Dagurinn minn",
  en: "My day",
  cefr: "A1.2",
  icon: "⏰",
  blurb: "Wake up, brush your teeth, catch the bus and get through a whole Icelandic day.",
  canDo: [
    "Describe my day from waking up to going to bed",
    "Say when things happen: klukkan sjö, á morgnana, um kvöldið",
    "Use the dative for the person who receives, for með, and for standing still",
    "Use ég, mig, mér, mín and the vowel-shifting verbs fer, tek, kem, sef"
  ],
  lessons: [

    // ───────────────────────────── l1 ─────────────────────────────
    {
      n: 1,
      id: "u07l1",
      kind: "lesson",
      title: "Ég vakna klukkan sjö",
      en: "I wake up at seven",
      goal: "Run through a morning and put a clock time on it.",
      minutes: 9,
      icon: "🌅",
      teach: [
        {
          h: "A morning in six verbs",
          p: "A whole Icelandic morning is built from a handful of verbs. Learn them as a chain and the day writes itself.",
          table: {
            cols: ["íslenska", "English"],
            rows: [
              ["vakna", "wake up"],
              ["fara á fætur", "get up, get out of bed"],
              ["fara í sturtu", "have a shower"],
              ["bursta tennurnar", "brush your teeth"],
              ["borða morgunmat", "eat breakfast"],
              ["hátta", "go to bed"]
            ]
          },
          tip: "vakna is opening your eyes. fara á fætur is the harder part."
        },
        {
          h: "Klukkan sjö",
          p: "The clock is a feminine noun carrying its article: klukkan. Put a bare number after it and you have a time. The same word does the asking and the answering.",
          ex: [
            ["Klukkan er sjö.", "It is seven o'clock."],
            ["Ég vakna klukkan sjö.", "I wake up at seven."],
            ["Klukkan er hálf átta.", "It is half past seven."]
          ],
          tip: "hálf átta is half of the eighth hour, so 7:30 — always one hour earlier than the English number."
        },
        {
          h: "Morning, evening, night",
          p: "Icelandic marks a habit differently from a single occasion. The habit takes á, the single occasion takes í or um.",
          table: {
            cols: ["every day", "this one time"],
            rows: [
              ["á morgnana — in the mornings", "í morgun — this morning"],
              ["á kvöldin — in the evenings", "um kvöldið — that evening"],
              ["á nóttunni — at night", "í nótt — tonight, last night"]
            ]
          }
        }
      ],
      vocab: ["vakna", "fara á fætur", "sofa", "hátta", "sofna", "bursta", "þvo", "klæða sig", "tönn", "andlit", "hár", "morgunn", "kvöld", "hádegi", "snemma", "seint"],
      items: [
        {
          t: "match",
          q: "Match the routine verbs",
          pairs: [["vakna", "wake up"], ["hátta", "go to bed"], ["sofna", "fall asleep"], ["bursta", "brush"], ["þvo", "wash"], ["elda", "cook"]]
        },
        {
          t: "choice",
          q: "It is seven o'clock.",
          opts: ["Klukkan er sjö", "Klukkan sjö er", "Er klukkan sjö", "Klukkan sjö"],
          a: "Klukkan er sjö",
          note: "A statement puts the verb second: klukkan, then er, then the number.",
          tags: ["time", "syntax:v2"]
        },
        {
          t: "type",
          q: "Type “I wake up at seven.”",
          a: "Ég vakna klukkan sjö",
          hint: "No preposition before klukkan.",
          note: "Icelandic says klukkan sjö where English says at seven.",
          speak: "Ég vakna klukkan sjö."
        },
        {
          t: "build",
          q: "I get up at six.",
          a: "Ég fer á fætur klukkan sex",
          extra: ["kem", "vakna", "átta", "þú"],
          note: "fara á fætur is fixed: the feet go into the accusative plural and stay there."
        },
        {
          t: "fill",
          q: "Put the verb in the right form.",
          sentence: "Ég ___ á fætur klukkan sjö.",
          base: "fara",
          a: "fer",
          mode: "type",
          why: "fara shifts a to e in the singular: fer, ferð, fer.",
          tags: ["verb:strong", "umlaut:i"]
        },
        {
          t: "fill",
          q: "Put the verb in the right form.",
          sentence: "Hann ___ til hádegis um helgar.",
          base: "sofa",
          a: "sefur",
          mode: "type",
          why: "sofa also shifts in the singular: sef, sefur, sefur — but sofum in the plural.",
          tags: ["verb:strong", "umlaut:i"]
        },
        {
          t: "gender",
          word: "morgunn",
          a: "kk",
          note: "morgunn is masculine, and it drops its middle vowel: morgunn, morgun, morgni, morguns."
        },
        {
          t: "listen",
          speak: "Ég sef til klukkan tíu.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Ég sef til klukkan tíu.", "Ég fer klukkan tíu.", "Ég vakna klukkan tíu."],
          a: "Ég sef til klukkan tíu.",
          note: "sef is the ég-form of sofa."
        },
        {
          t: "choice",
          q: "Ég fer í sturtu ___ morgnana.",
          opts: ["á", "um", "í", "með"],
          a: "á",
          note: "A repeated time of day takes á plus the plural: á morgnana, á kvöldin."
        },
        {
          t: "choice",
          q: "What time is hálf átta?",
          opts: ["07:30", "08:30", "08:00", "07:00"],
          a: "07:30",
          note: "hálf counts the hour you are heading into, so hálf átta is thirty minutes before eight."
        },
        {
          t: "speak",
          is: "Ég vakna klukkan sjö og fer strax á fætur.",
          en: "I wake up at seven and get up straight away.",
          tip: "The g in fer is a plain [g]; the double k in klukkan is preaspirated, roughly “kluhk-kan”."
        },
        {
          t: "type",
          q: "Type “I go to bed at eleven.”",
          a: "Ég hátta klukkan ellefu",
          note: "hátta is a plain -a verb: hátta, háttar, háttar.",
          speak: "Ég hátta klukkan ellefu."
        }
      ]
    },

    // ───────────────────────────── l2 ─────────────────────────────
    {
      n: 2,
      id: "u07l2",
      kind: "lesson",
      title: "Alltaf, stundum, aldrei",
      en: "Always, sometimes, never",
      goal: "Say how often you do something, and front a time word without breaking the sentence.",
      minutes: 10,
      icon: "🔁",
      teach: [
        {
          h: "How often",
          table: {
            cols: ["orð", "English"],
            rows: [
              ["alltaf", "always"],
              ["venjulega", "usually"],
              ["oft", "often"],
              ["stundum", "sometimes"],
              ["sjaldan", "seldom"],
              ["aldrei", "never"]
            ]
          }
        },
        {
          h: "The verb keeps second place",
          p: "You may put almost anything at the front of an Icelandic sentence. The verb still has to be the second element, so the subject slides in behind it.",
          ex: [
            ["Ég drekk kaffi á morgnana.", "I drink coffee in the mornings."],
            ["Á morgnana drekk ég kaffi.", "In the mornings I drink coffee."],
            ["Stundum hjóla ég í vinnuna.", "Sometimes I cycle to work."]
          ],
          tip: "Start with a time phrase and the very next word is the verb. No exceptions."
        },
        {
          h: "Where the frequency word sits",
          p: "With nothing fronted, the frequency word comes straight after the verb — the opposite of English, which puts it before.",
          ex: [
            ["Ég vakna alltaf snemma.", "I always wake up early."],
            ["Hann eldar aldrei.", "He never cooks."],
            ["Við borðum seint á föstudögum.", "We eat late on Fridays."]
          ]
        }
      ],
      vocab: ["alltaf", "oft", "stundum", "sjaldan", "aldrei", "venjulega", "á morgnana", "um kvöldið", "elda", "hjóla", "strætó"],
      items: [
        {
          t: "match",
          q: "Match the frequency words",
          pairs: [["alltaf", "always"], ["venjulega", "usually"], ["oft", "often"], ["stundum", "sometimes"], ["sjaldan", "seldom"], ["aldrei", "never"]]
        },
        {
          t: "choice",
          q: "Which word means “sometimes”?",
          opts: ["stundum", "sjaldan", "alltaf", "venjulega"],
          a: "stundum",
          note: "stundum comes from stund, a while — literally “at whiles”."
        },
        {
          t: "build",
          q: "In the mornings I drink coffee.",
          a: "Á morgnana drekk ég kaffi",
          extra: ["er", "mig", "kaffið", "þú"],
          note: "Fronted time phrase, then the verb, then the subject."
        },
        {
          t: "fill",
          q: "Choose the right verb form.",
          sentence: "Á sunnudögum ___ ég lengi.",
          base: "sofa",
          opts: ["sef", "sofa", "sefur"],
          a: "sef",
          mode: "choice",
          why: "The subject is ég, so the singular sef — even though it stands after the verb.",
          tags: ["syntax:v2", "verb:strong"]
        },
        {
          t: "type",
          q: "Type “I never eat breakfast.”",
          a: "Ég borða aldrei morgunmat",
          note: "aldrei goes after the verb, not before it.",
          speak: "Ég borða aldrei morgunmat."
        },
        {
          t: "choice",
          q: "Which sentence is correct?",
          opts: ["Á morgnana ég drekk kaffi.", "Á morgnana drekk ég kaffi.", "Drekk á morgnana ég kaffi.", "Ég á morgnana drekk kaffi."],
          a: "Á morgnana drekk ég kaffi.",
          note: "One element before the verb, and only one. The subject moves behind it.",
          tags: ["syntax:v2"]
        },
        {
          t: "table",
          q: "Complete the present tense of vakna.",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "ég / við", cells: ["vakna", "vöknum"], blank: [1] },
            { label: "þú / þið", cells: ["vaknar", "vaknið"], blank: [] },
            { label: "hann / þeir", cells: ["vaknar", "vakna"], blank: [0] }
          ],
          note: "vöknum, not vaknum: an ending with u rounds an a in the stem to ö."
        },
        {
          t: "gender",
          word: "sturta",
          a: "kvk",
          note: "Nouns ending in -a are almost always feminine: sturta, sturtu, sturtu, sturtu."
        },
        {
          t: "listen",
          speak: "Ég fer sjaldan í sund.",
          q: "Type what you hear.",
          mode: "type",
          a: "Ég fer sjaldan í sund",
          note: "fara í + accusative, because you are moving into the pool."
        },
        {
          t: "build",
          q: "I usually take the bus.",
          a: "Ég tek venjulega strætó",
          extra: ["með", "strætónum", "taka", "er"],
          note: "taka shifts to tek in the singular. venjulega sits right after the verb."
        },
        {
          t: "speak",
          is: "Hann er alltaf syfjaður á morgnana.",
          en: "He is always sleepy in the mornings.",
          tip: "syfjaður has a long first syllable and stress on it: SYF-ja-thur."
        }
      ]
    },

    // ───────────────────────────── l3 ─────────────────────────────
    {
      n: 3,
      id: "u07l3",
      kind: "grammar",
      title: "Þágufall: sá sem fær",
      en: "The dative: the one who receives",
      goal: "Use the dative for receivers, for a group of common verbs, for með, and for standing still.",
      minutes: 13,
      icon: "🎁",
      teach: [
        {
          h: "The case of the receiver",
          p: "When something changes hands, the thing goes into the accusative and the person into the dative. Icelandic names the person first, with no word for “to”.",
          ex: [
            ["Ég rétti Höllu lyklana.", "I hand Halla the keys."],
            ["Hún sendir mér mynd.", "She sends me a picture."],
            ["Óli gefur mér kaffi.", "Óli gives me coffee."]
          ],
          tip: "Person in ÞGF, thing in ÞF. Drill it as one shape: mér lyklana."
        },
        {
          h: "Verbs that never take an accusative object",
          p: "A small group of very common verbs treats its object as a receiver rather than a target. English gives you no warning at all, so learn the list.",
          list: [
            "svara + ÞGF — answer",
            "hjálpa + ÞGF — help",
            "loka + ÞGF — close",
            "gleyma + ÞGF — forget",
            "flýta sér — hurry (a dative reflexive)"
          ],
          ex: [
            ["Ég svara símanum.", "I answer the phone."],
            ["Hún hjálpar mér á morgnana.", "She helps me in the mornings."],
            ["Ég gleymi alltaf lyklunum.", "I always forget the keys."]
          ]
        },
        {
          h: "með + ÞGF: the tool and the ride",
          p: "Whatever you do something with sits in the dative. That covers instruments and every kind of transport.",
          ex: [
            ["Ég fer með strætó.", "I go by bus."],
            ["Hann opnar hurðina með lyklinum.", "He opens the door with the key."],
            ["Ég þvæ hárið með köldu vatni.", "I wash my hair with cold water."]
          ],
          tip: "But vera með means “to have on you”, and that one takes ÞF: Ég er með lyklana."
        },
        {
          h: "Standing still is dative",
          p: "í and á take two cases. Moving into a place is accusative; already being there is dative. Ask yourself whether anything actually moves.",
          table: {
            cols: ["hvert? — ÞF", "hvar? — ÞGF"],
            rows: [
              ["Ég fer í vinnuna.", "Ég er í vinnunni."],
              ["Ég fer í sturtu.", "Ég er í sturtunni."],
              ["Ég fer upp í rúm.", "Ég ligg í rúminu."]
            ]
          }
        }
      ],
      vocab: ["rétta", "senda", "svara", "loka", "gleyma", "lykill", "sími", "rúm", "vinna", "sturta"],
      items: [
        {
          t: "fill",
          q: "The person who receives goes into the dative.",
          sentence: "Ég rétti ___ lyklana.",
          base: "Halla",
          opts: ["Halla", "Höllu", "Höllum"],
          a: "Höllu",
          mode: "choice",
          case: "ÞGF",
          why: "The receiver takes ÞGF, and the a of Halla rounds to ö before the ending.",
          tags: ["case:dat", "role:indirect-object"]
        },
        {
          t: "fill",
          q: "Put the pronoun in the right case.",
          sentence: "Hún hjálpar ___ á morgnana.",
          base: "ég",
          a: "mér",
          mode: "type",
          case: "ÞGF",
          why: "hjálpa always takes the dative — mér, never mig.",
          tags: ["case:dat", "verb:dat-gov"]
        },
        {
          t: "fill",
          q: "Put the noun in the right case.",
          sentence: "Ég svara ekki ___ í vinnunni.",
          base: "síminn",
          a: "símanum",
          mode: "type",
          case: "ÞGF",
          why: "svara governs the dative: sími, síma, síma — with the article, símanum.",
          tags: ["case:dat", "verb:dat-gov"]
        },
        {
          t: "fill",
          q: "The instrument goes into the dative.",
          sentence: "Hann opnar hurðina með ___ .",
          base: "lykillinn",
          a: "lyklinum",
          mode: "type",
          case: "ÞGF",
          why: "með for an instrument takes ÞGF, and lykill loses its second vowel: lykli, lyklinum.",
          tags: ["case:dat", "prep:með", "syncope"]
        },
        {
          t: "fill",
          q: "Nothing is moving here.",
          sentence: "Síminn minn er í ___ .",
          base: "rúmið",
          opts: ["rúmið", "rúminu", "rúmsins"],
          a: "rúminu",
          mode: "choice",
          case: "ÞGF",
          why: "Static location after í takes the dative.",
          tags: ["case:dat", "prep:í"]
        },
        {
          t: "table",
          q: "Complete the motion and location pairs.",
          cols: ["", "hvert? (ÞF)", "hvar? (ÞGF)"],
          rows: [
            { label: "vinnan", cells: ["í vinnuna", "í vinnunni"], blank: [1] },
            { label: "sundlaugin", cells: ["í sundlaugina", "í sundlauginni"], blank: [1] },
            { label: "rúmið", cells: ["í rúmið", "í rúminu"], blank: [0] }
          ],
          note: "Change of place gets ÞF; no change gets ÞGF."
        },
        {
          t: "table",
          q: "Complete the present tense of svara.",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "ég / við", cells: ["svara", "svörum"], blank: [1] },
            { label: "þú / þið", cells: ["svarar", "svarið"], blank: [] },
            { label: "hann / þau", cells: ["svarar", "svara"], blank: [0] }
          ],
          note: "svörum rounds a to ö because the ending contains u."
        },
        {
          t: "build",
          q: "I give her the key.",
          a: "Ég gef henni lykilinn",
          extra: ["hana", "lykill", "mér", "hún"],
          note: "Receiver in ÞGF (henni), thing in ÞF (lykilinn), in that order."
        },
        {
          t: "choice",
          q: "What does “Ég er með lyklana” mean?",
          opts: ["I have the keys on me", "I am beside the keys", "I give away the keys", "I lose the keys"],
          a: "I have the keys on me",
          note: "vera með is the everyday way to say “have”, and it breaks the pattern by taking ÞF.",
          tags: ["prep:með", "case:acc"]
        },
        {
          t: "choice",
          q: "Ég fer í vinnuna ___ strætó.",
          opts: ["með", "í", "á", "til"],
          a: "með",
          note: "Means of transport is með + ÞGF. strætó looks the same in every case except the genitive.",
          tags: ["prep:með", "case:dat"]
        },
        {
          t: "type",
          q: "Type “I answer him.”",
          a: "Ég svara honum",
          hint: "svara + ÞGF",
          note: "hann becomes honum in the dative.",
          speak: "Ég svara honum."
        },
        {
          t: "listen",
          speak: "Hún réttir mér kaffið.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Hún réttir mér kaffið.", "Hann réttir mér kaffið.", "Hún réttir mér mjólkina."],
          a: "Hún réttir mér kaffið.",
          note: "Two cases in three words: mér is ÞGF, kaffið is ÞF."
        },
        {
          t: "gender",
          word: "lykill",
          a: "kk",
          note: "Masculine, and one of the -ill nouns that drop the vowel: lykill, lykil, lykli, lykils."
        },
        {
          t: "speak",
          is: "Geturðu hjálpað mér?",
          en: "Can you help me?",
          tip: "hjálpa takes the dative, so it is mér — never mig. The l in hjálpa is whispered before the p."
        }
      ]
    },

    // ───────────────────────────── l4 ─────────────────────────────
    {
      n: 4,
      id: "u07l4",
      kind: "lesson",
      title: "Ég, mig, mér, mín",
      en: "Me in four shapes",
      goal: "Decline every personal pronoun and use the singular vowel shift in strong verbs.",
      minutes: 11,
      icon: "🙋",
      teach: [
        {
          h: "One pronoun, four shapes",
          table: {
            cols: ["", "NF", "ÞF", "ÞGF", "EF"],
            rows: [
              ["1sg", "ég", "mig", "mér", "mín"],
              ["2sg", "þú", "þig", "þér", "þín"],
              ["3sg m", "hann", "hann", "honum", "hans"],
              ["3sg f", "hún", "hana", "henni", "hennar"],
              ["3sg n", "það", "það", "því", "þess"],
              ["1pl", "við", "okkur", "okkur", "okkar"],
              ["2pl", "þið", "ykkur", "ykkur", "ykkar"],
              ["3pl", "þeir / þær / þau", "þá / þær / þau", "þeim", "þeirra"]
            ]
          },
          tip: "In the plural, ÞF and ÞGF are identical: okkur, ykkur. That is half the work gone."
        },
        {
          h: "The genitive ones do double duty",
          p: "hans, hennar and þeirra are also the words for his, her and their. They never change shape, whatever noun they follow.",
          ex: [
            ["Síminn hans er alltaf í rúminu.", "His phone is always in the bed."],
            ["Vinnan hennar byrjar klukkan sex.", "Her work starts at six."],
            ["Hjólið þeirra stendur úti.", "Their bike is standing outside."]
          ]
        },
        {
          h: "Strong verbs shift a vowel — singular only",
          p: "The three singular forms of a strong verb use a different stem vowel from the plural. Learn the ég-form and the við-form together as a pair and you own the verb.",
          table: {
            cols: ["nafnháttur", "ég", "við"],
            rows: [
              ["fara", "fer", "förum"],
              ["taka", "tek", "tökum"],
              ["koma", "kem", "komum"],
              ["sofa", "sef", "sofum"],
              ["standa", "stend", "stöndum"]
            ]
          },
          tip: "a and o turn into e in the singular; the plural often rounds to ö because the ending has a u in it."
        }
      ],
      vocab: ["heyra", "þreyttur", "syfjaður", "nótt", "sundlaug", "handklæði"],
      items: [
        {
          t: "table",
          q: "Complete the pronoun grid.",
          cols: ["", "ég", "þú", "hann", "hún"],
          rows: [
            { label: "NF", cells: ["ég", "þú", "hann", "hún"], blank: [] },
            { label: "ÞF", cells: ["mig", "þig", "hann", "hana"], blank: [3] },
            { label: "ÞGF", cells: ["mér", "þér", "honum", "henni"], blank: [0, 2] },
            { label: "EF", cells: ["mín", "þín", "hans", "hennar"], blank: [] }
          ],
          note: "hann is the only one that looks the same in NF and ÞF."
        },
        {
          t: "fill",
          q: "Put the pronoun in the right case.",
          sentence: "Hún bíður eftir ___ við sundlaugina.",
          base: "ég",
          a: "mér",
          mode: "type",
          case: "ÞGF",
          why: "bíða eftir takes the dative.",
          tags: ["case:dat", "prep:eftir"]
        },
        {
          t: "fill",
          q: "Put the pronoun in the right case.",
          sentence: "Ég sé ___ alltaf í strætó.",
          base: "hún",
          a: "hana",
          mode: "type",
          case: "ÞF",
          why: "A plain direct object takes ÞF: hún becomes hana.",
          tags: ["case:acc", "pron"]
        },
        {
          t: "build",
          q: "He always helps us.",
          a: "Hann hjálpar okkur alltaf",
          extra: ["við", "okkar", "mér", "er"],
          note: "okkur covers both ÞF and ÞGF; hjálpa means it is the dative here."
        },
        {
          t: "table",
          q: "Complete the strong verbs.",
          cols: ["", "ég", "við"],
          rows: [
            { label: "fara", cells: ["fer", "förum"], blank: [0] },
            { label: "taka", cells: ["tek", "tökum"], blank: [1] },
            { label: "koma", cells: ["kem", "komum"], blank: [0] },
            { label: "sofa", cells: ["sef", "sofum"], blank: [] }
          ],
          note: "Singular shifts the vowel forward; plural often rounds it back."
        },
        {
          t: "choice",
          q: "Which form means “I take”?",
          opts: ["tek", "tekur", "taka", "tökum"],
          a: "tek",
          note: "The ég-form of a strong verb has no ending at all — just the shifted stem."
        },
        {
          t: "type",
          q: "Type “She comes with me.”",
          a: "Hún kemur með mér",
          hint: "koma + með + ÞGF",
          note: "með takes the dative when the companion comes willingly.",
          speak: "Hún kemur með mér."
        },
        {
          t: "listen",
          speak: "Ég stend upp klukkan sex.",
          q: "Type what you hear.",
          mode: "type",
          a: "Ég stend upp klukkan sex",
          note: "standa gives stend in the singular but stöndum in the plural."
        },
        {
          t: "match",
          q: "Match the pronoun forms",
          pairs: [["mér", "to me"], ["þig", "you (object)"], ["honum", "to him"], ["hana", "her (object)"], ["okkur", "us"], ["þeirra", "their"]]
        },
        {
          t: "fill",
          q: "Choose the right verb form.",
          sentence: "Þau ___ heim klukkan sex.",
          base: "koma",
          opts: ["kem", "kemur", "koma", "komum"],
          a: "koma",
          mode: "choice",
          why: "þau is third person plural, and the plural keeps the o: koma.",
          tags: ["verb:strong"]
        },
        {
          t: "gender",
          word: "nótt",
          a: "kvk",
          note: "Feminine, and irregular: nótt, nótt, nóttu, nætur — plural nætur."
        },
        {
          t: "speak",
          is: "Ég fer á fætur, þú ferð á fætur, hann fer á fætur.",
          en: "I get up, you get up, he gets up.",
          tip: "The vowel has already shifted in all three; only the ending moves."
        }
      ]
    },

    // ───────────────────────────── l5 ─────────────────────────────
    {
      n: 5,
      id: "u07l5",
      kind: "story",
      title: "Þriðjudagsmorgunn",
      en: "A Tuesday morning",
      goal: "Follow a real morning conversation and pick the datives out of it.",
      minutes: 11,
      icon: "🛏️",
      teach: [
        {
          h: "Who is who",
          p: "Halla is a nurse who leaves the flat at six. Óli shares it with her and has never once met six o'clock.",
          list: ["enn — still", "bilaður — broken, out of order", "á leiðinni — on the way"]
        },
        {
          h: "Listen for the datives",
          p: "Every dative below is doing one of three jobs: receiving something, following a dative verb, or marking a place where nothing moves."
        }
      ],
      story: {
        title: "Þriðjudagsmorgunn",
        lines: [
          { sp: "Halla", is: "Óli, klukkan er hálf átta. Þú ert enn í rúminu.", en: "Óli, it is half past seven. You are still in bed." },
          { sp: "Óli", is: "Vekjaraklukkan mín er biluð.", en: "My alarm clock is broken." },
          { sp: "Halla", is: "Hún er ekki biluð. Þú heyrir bara ekki í henni.", en: "It is not broken. You just don't hear it." },
          { sp: "Óli", is: "Ég sef svo vel á morgnana.", en: "I sleep so well in the mornings." },
          { sp: "Halla", is: "Ég vakna klukkan fimm, fer í sturtu og hjóla í vinnuna.", en: "I wake up at five, have a shower and cycle to work." },
          { sp: "Óli", is: "Þú ert ekki venjuleg.", en: "You are not normal." },
          { sp: "Halla", is: "Geturðu rétt mér kaffið?", en: "Can you pass me the coffee?" },
          { sp: "Óli", is: "Kaffið er búið.", en: "The coffee is finished." },
          { sp: "Halla", is: "Þá tek ég strætó og kaupi kaffi á leiðinni.", en: "Then I'll take the bus and buy coffee on the way." },
          { sp: "Óli", is: "Ég kem með þér.", en: "I'm coming with you." },
          { sp: "Halla", is: "Þú ert enn í rúminu, Óli.", en: "You are still in bed, Óli." },
          { sp: "Óli", is: "Já. En andlega er ég í strætó.", en: "Yes. But mentally I am on the bus." }
        ],
        glossary: [
          ["enn", "still"],
          ["bilaður", "broken, out of order"],
          ["heyra í e-m", "to hear someone or something"],
          ["búinn", "finished, used up"],
          ["á leiðinni", "on the way"],
          ["andlega", "mentally"],
          ["þá", "then, in that case"]
        ]
      },
      vocab: ["enn", "bilaður", "á leiðinni", "vekjaraklukka", "morgunmatur", "kvöldmatur"],
      items: [
        {
          t: "choice",
          q: "Hvenær vaknar Halla?",
          opts: ["Klukkan fimm", "Klukkan hálf átta", "Klukkan sjö", "Klukkan átta"],
          a: "Klukkan fimm",
          note: "She says it herself in line five."
        },
        {
          t: "choice",
          q: "Why does Óli's alarm clock fail, according to Halla?",
          opts: ["He does not hear it", "It is broken", "He owns no clock", "It rings too late"],
          a: "He does not hear it",
          note: "Þú heyrir bara ekki í henni — heyra í takes the dative."
        },
        {
          t: "fill",
          q: "Nothing is moving.",
          sentence: "Þú ert enn í ___ .",
          base: "rúmið",
          a: "rúminu",
          mode: "type",
          case: "ÞGF",
          why: "Being somewhere, not going there, so í takes ÞGF.",
          tags: ["case:dat", "prep:í"]
        },
        {
          t: "fill",
          q: "Put the verb in the right form.",
          sentence: "Ég ___ ekki í vekjaraklukkunni.",
          base: "heyra",
          a: "heyri",
          mode: "type",
          why: "heyra is a regular -i verb: heyri, heyrir, heyrir.",
          tags: ["verb:weak-i"]
        },
        {
          t: "build",
          q: "I'm coming with you.",
          a: "Ég kem með þér",
          extra: ["þig", "fer", "þú", "mér"],
          note: "með plus a willing companion takes ÞGF: þér."
        },
        {
          t: "type",
          q: "Type “The coffee is finished.”",
          a: "Kaffið er búið",
          note: "kaffi is neuter, so the adjective is búið.",
          speak: "Kaffið er búið."
        },
        {
          t: "match",
          q: "Match the words from the story",
          pairs: [["enn", "still"], ["bilaður", "broken"], ["á leiðinni", "on the way"], ["andlega", "mentally"], ["þá", "then"]]
        },
        {
          t: "listen",
          speak: "Þá tek ég strætó.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Þá tek ég strætó.", "Þá tekur hann strætó.", "Þá fer ég í strætó."],
          a: "Þá tek ég strætó.",
          note: "þá is fronted, so the verb tek comes before the subject ég."
        },
        {
          t: "fill",
          q: "Who receives the coffee?",
          sentence: "Geturðu rétt ___ kaffið?",
          base: "ég",
          opts: ["ég", "mig", "mér"],
          a: "mér",
          mode: "choice",
          case: "ÞGF",
          why: "The receiver of a handed-over thing is always ÞGF.",
          tags: ["case:dat", "role:indirect-object"]
        },
        {
          t: "choice",
          q: "How does Halla normally get to work?",
          opts: ["She cycles", "She drives", "She walks", "She takes a taxi"],
          a: "She cycles",
          note: "hjóla í vinnuna — motion into a place, so accusative vinnuna."
        },
        {
          t: "gender",
          word: "vekjaraklukka",
          a: "kvk",
          note: "A compound takes the gender of its last part, and klukka is feminine."
        },
        {
          t: "speak",
          is: "Ég sef svo vel á morgnana.",
          en: "I sleep so well in the mornings.",
          tip: "Say the f in sef as a [v]: “sev”."
        }
      ]
    },

    // ───────────────────────────── l6 ─────────────────────────────
    {
      n: 6,
      id: "u07l6",
      kind: "checkpoint",
      title: "Frá vöku til svefns",
      en: "From waking to sleeping",
      goal: "Prove you can run a whole day in Icelandic without stopping to think.",
      minutes: 12,
      icon: "🏁",
      teach: [
        {
          h: "What you now control",
          list: [
            "A whole day: vakna, fara á fætur, bursta tennurnar, fara í vinnuna, hátta",
            "Times: klukkan sjö, hálf átta, á morgnana, um kvöldið",
            "Frequency words, and the rule that the verb stays in second place",
            "ÞGF for the receiver, for svara / hjálpa / loka / gleyma, for með, and for standing still",
            "ég, mig, mér, mín — and the singular vowel shift in fer, tek, kem, sef, stend"
          ]
        }
      ],
      vocab: [],
      items: [
        {
          t: "match",
          q: "Match the day's verbs",
          pairs: [["vakna", "wake up"], ["fara á fætur", "get up"], ["þvo", "wash"], ["elda", "cook"], ["hátta", "go to bed"], ["sofna", "fall asleep"]]
        },
        {
          t: "fill",
          q: "Put the verb in the right form.",
          sentence: "Ég ___ á fætur klukkan sjö.",
          base: "fara",
          a: "fer",
          mode: "type",
          why: "fara shifts a to e in the singular."
        },
        {
          t: "fill",
          q: "Put the pronoun in the right case.",
          sentence: "Hann hjálpar ___ á kvöldin.",
          base: "ég",
          opts: ["ég", "mig", "mér"],
          a: "mér",
          mode: "choice",
          case: "ÞGF",
          why: "hjálpa governs the dative."
        },
        {
          t: "build",
          q: "In the evenings I cook dinner.",
          a: "Á kvöldin elda ég kvöldmat",
          extra: ["er", "matinn", "um", "þú"],
          note: "Fronted time phrase, verb second, subject third."
        },
        {
          t: "type",
          q: "Type “I take the bus to work.”",
          a: "Ég tek strætó í vinnuna",
          hint: "Motion into a place.",
          note: "í + ÞF for motion: vinnuna.",
          speak: "Ég tek strætó í vinnuna."
        },
        {
          t: "table",
          q: "Complete the pronouns.",
          cols: ["", "ÞF", "ÞGF"],
          rows: [
            { label: "ég", cells: ["mig", "mér"], blank: [1] },
            { label: "þú", cells: ["þig", "þér"], blank: [0] },
            { label: "hún", cells: ["hana", "henni"], blank: [1] },
            { label: "við", cells: ["okkur", "okkur"], blank: [] }
          ],
          note: "The plural forms collapse: okkur does both jobs."
        },
        {
          t: "gender",
          word: "kvöld",
          a: "hk",
          note: "Neuter: kvöld, kvöld, kvöldi, kvölds."
        },
        {
          t: "listen",
          speak: "Ég vakna alltaf snemma.",
          q: "Type what you hear.",
          mode: "type",
          a: "Ég vakna alltaf snemma",
          note: "The frequency word follows the verb."
        },
        {
          t: "choice",
          q: "Which sentence is correct?",
          opts: ["Um kvöldið ég les bók.", "Um kvöldið les ég bók.", "Les um kvöldið ég bók.", "Ég um kvöldið les bók."],
          a: "Um kvöldið les ég bók.",
          note: "Verb second, always.",
          tags: ["syntax:v2"]
        },
        {
          t: "choice",
          q: "Ég fer í sund ___ strætó.",
          opts: ["með", "í", "á", "til"],
          a: "með",
          note: "Transport is með + ÞGF."
        },
        {
          t: "fill",
          q: "Nothing is moving.",
          sentence: "Handklæðið er í ___ .",
          base: "sturtan",
          a: "sturtunni",
          mode: "type",
          case: "ÞGF",
          why: "Static location after í takes the dative."
        },
        {
          t: "choice",
          q: "Which word means “seldom”?",
          opts: ["sjaldan", "stundum", "alltaf", "aldrei"],
          a: "sjaldan",
          note: "sjaldan is rarer than stundum but not as absolute as aldrei."
        },
        {
          t: "build",
          q: "She gives me the keys.",
          a: "Hún gefur mér lyklana",
          extra: ["mig", "lykill", "hann", "henni"],
          note: "Receiver in ÞGF, thing in ÞF."
        },
        {
          t: "speak",
          is: "Klukkan er hálf níu og ég er enn í rúminu.",
          en: "It is half past eight and I am still in bed.",
          tip: "hálf níu is 8:30 — one hour earlier than the English number suggests."
        }
      ]
    }
  ]
};

export const vocab = [
  // ── verbs ──────────────────────────────────────────────────────
  { w: "vakna", en: "to wake up", pos: "verb", topic: "routine", unit: 7, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["vakna", "vaknar", "vaknar", "vöknum", "vaknið", "vakna"],
            past: ["vaknaði", "vaknaðir", "vaknaði", "vöknuðum", "vöknuðuð", "vöknuðu"], pp: "vaknað" },
    ex: { is: "Ég vakna klukkan sex á morgnana.", en: "I wake up at six in the mornings." } },

  { w: "sofa", en: "to sleep", pos: "verb", topic: "routine", unit: 7, cefr: "A1", vclass: "strong",
    conj: { pres: ["sef", "sefur", "sefur", "sofum", "sofið", "sofa"],
            past: ["svaf", "svafst", "svaf", "sváfum", "sváfuð", "sváfu"], pp: "sofið" },
    ex: { is: "Hann sefur til hádegis um helgar.", en: "He sleeps until noon at weekends." } },

  { w: "sofna", en: "to fall asleep", pos: "verb", topic: "routine", unit: 7, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["sofna", "sofnar", "sofnar", "sofnum", "sofnið", "sofna"],
            past: ["sofnaði", "sofnaðir", "sofnaði", "sofnuðum", "sofnuðuð", "sofnuðu"], pp: "sofnað" },
    ex: { is: "Ég sofna alltaf í strætó.", en: "I always fall asleep on the bus." } },

  { w: "hátta", en: "to go to bed", pos: "verb", topic: "routine", unit: 7, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["hátta", "háttar", "háttar", "háttum", "háttið", "hátta"],
            past: ["háttaði", "háttaðir", "háttaði", "háttuðum", "háttuðuð", "háttuðu"], pp: "háttað" },
    ex: { is: "Við háttum snemma á sunnudögum.", en: "We go to bed early on Sundays." } },

  { w: "bursta", en: "to brush", pos: "verb", topic: "routine", unit: 7, cefr: "A1", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["bursta", "burstar", "burstar", "burstum", "burstið", "bursta"],
            past: ["burstaði", "burstaðir", "burstaði", "burstuðum", "burstuðuð", "burstuðu"], pp: "burstað" },
    ex: { is: "Ég bursta tennurnar eftir morgunmat.", en: "I brush my teeth after breakfast." } },

  { w: "þvo", en: "to wash", pos: "verb", topic: "routine", unit: 7, cefr: "A1", gov: "ÞF", vclass: "strong",
    conj: { pres: ["þvæ", "þværð", "þvær", "þvoum", "þvoið", "þvo"],
            past: ["þvoði", "þvoðir", "þvoði", "þvoðum", "þvoðuð", "þvoðu"], pp: "þvegið" },
    ex: { is: "Hún þvær hárið á hverjum degi.", en: "She washes her hair every day." } },

  { w: "klæða sig", en: "to get dressed", pos: "verb", topic: "routine", unit: 7, cefr: "A1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["klæði", "klæðir", "klæðir", "klæðum", "klæðið", "klæða"],
            past: ["klæddi", "klæddir", "klæddi", "klæddum", "klædduð", "klæddu"], pp: "klætt" },
    ex: { is: "Ég klæði mig og fer út.", en: "I get dressed and go out." } },

  { w: "elda", en: "to cook", pos: "verb", topic: "household", unit: 7, cefr: "A1", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["elda", "eldar", "eldar", "eldum", "eldið", "elda"],
            past: ["eldaði", "eldaðir", "eldaði", "elduðum", "elduðuð", "elduðu"], pp: "eldað" },
    ex: { is: "Óli eldar kvöldmat á þriðjudögum.", en: "Óli cooks dinner on Tuesdays." } },

  { w: "hjóla", en: "to cycle", pos: "verb", topic: "routine", unit: 7, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["hjóla", "hjólar", "hjólar", "hjólum", "hjólið", "hjóla"],
            past: ["hjólaði", "hjólaðir", "hjólaði", "hjóluðum", "hjóluðuð", "hjóluðu"], pp: "hjólað" },
    ex: { is: "Ég hjóla í vinnuna á sumrin.", en: "I cycle to work in the summers." } },

  { w: "svara", en: "to answer", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["svara", "svarar", "svarar", "svörum", "svarið", "svara"],
            past: ["svaraði", "svaraðir", "svaraði", "svöruðum", "svöruðuð", "svöruðu"], pp: "svarað" },
    ex: { is: "Hún svarar mér aldrei.", en: "She never answers me." } },

  { w: "loka", en: "to close", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["loka", "lokar", "lokar", "lokum", "lokið", "loka"],
            past: ["lokaði", "lokaðir", "lokaði", "lokuðum", "lokuðuð", "lokuðu"], pp: "lokað" },
    ex: { is: "Ég loka glugganum á kvöldin.", en: "I close the window in the evenings." } },

  { w: "gleyma", en: "to forget", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["gleymi", "gleymir", "gleymir", "gleymum", "gleymið", "gleyma"],
            past: ["gleymdi", "gleymdir", "gleymdi", "gleymdum", "gleymduð", "gleymdu"], pp: "gleymt" },
    ex: { is: "Ég gleymi alltaf lyklunum.", en: "I always forget the keys." } },

  { w: "rétta", en: "to hand, to pass", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["rétti", "réttir", "réttir", "réttum", "réttið", "rétta"],
            past: ["rétti", "réttir", "rétti", "réttum", "réttuð", "réttu"], pp: "rétt" },
    ex: { is: "Hann réttir mér kaffibollann.", en: "He hands me the coffee cup." } },

  { w: "senda", en: "to send", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["sendi", "sendir", "sendir", "sendum", "sendið", "senda"],
            past: ["sendi", "sendir", "sendi", "sendum", "senduð", "sendu"], pp: "sent" },
    ex: { is: "Ég sendi þér mynd í kvöld.", en: "I'll send you a picture tonight." } },

  { w: "heyra", en: "to hear", pos: "verb", topic: "actions", unit: 7, cefr: "A1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["heyri", "heyrir", "heyrir", "heyrum", "heyrið", "heyra"],
            past: ["heyrði", "heyrðir", "heyrði", "heyrðum", "heyrðuð", "heyrðu"], pp: "heyrt" },
    ex: { is: "Ég heyri ekki í vekjaraklukkunni.", en: "I don't hear the alarm clock." } },

  // ── nouns ──────────────────────────────────────────────────────
  { w: "morgunn", en: "morning", pos: "noun", g: "kk", topic: "time", unit: 7, cefr: "A1",
    forms: { sg: ["morgunn", "morgun", "morgni", "morguns"], pl: ["morgnar", "morgna", "morgnum", "morgna"] },
    ex: { is: "Þetta er fallegur morgunn.", en: "This is a beautiful morning." } },

  { w: "kvöld", en: "evening", pos: "noun", g: "hk", topic: "time", unit: 7, cefr: "A1",
    forms: { sg: ["kvöld", "kvöld", "kvöldi", "kvölds"], pl: ["kvöld", "kvöld", "kvöldum", "kvölda"] },
    ex: { is: "Á kvöldin les ég í rúminu.", en: "In the evenings I read in bed." } },

  { w: "nótt", en: "night", pos: "noun", g: "kvk", topic: "time", unit: 7, cefr: "A1",
    forms: { sg: ["nótt", "nótt", "nóttu", "nætur"], pl: ["nætur", "nætur", "nóttum", "nátta"] },
    ex: { is: "Ég vinn stundum á nóttunni.", en: "I sometimes work at night." } },

  { w: "hádegi", en: "noon, midday", pos: "noun", g: "hk", topic: "time", unit: 7, cefr: "A1",
    forms: { sg: ["hádegi", "hádegi", "hádegi", "hádegis"], pl: null },
    ex: { is: "Við borðum í hádeginu.", en: "We eat at midday." } },

  { w: "vekjaraklukka", en: "alarm clock", pos: "noun", g: "kvk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["vekjaraklukka", "vekjaraklukku", "vekjaraklukku", "vekjaraklukku"],
             pl: ["vekjaraklukkur", "vekjaraklukkur", "vekjaraklukkum", "vekjaraklukkna"] },
    ex: { is: "Vekjaraklukkan mín hringir klukkan sex.", en: "My alarm clock rings at six." } },

  { w: "rúm", en: "bed", pos: "noun", g: "hk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["rúm", "rúm", "rúmi", "rúms"], pl: ["rúm", "rúm", "rúmum", "rúma"] },
    ex: { is: "Síminn minn er alltaf í rúminu.", en: "My phone is always in the bed." } },

  { w: "sturta", en: "shower", pos: "noun", g: "kvk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["sturta", "sturtu", "sturtu", "sturtu"], pl: ["sturtur", "sturtur", "sturtum", "sturtna"] },
    ex: { is: "Ég fer í sturtu á morgnana.", en: "I have a shower in the mornings." } },

  { w: "tönn", en: "tooth", pos: "noun", g: "kvk", topic: "body", unit: 7, cefr: "A1",
    forms: { sg: ["tönn", "tönn", "tönn", "tannar"], pl: ["tennur", "tennur", "tönnum", "tanna"] },
    ex: { is: "Ég bursta tennurnar tvisvar á dag.", en: "I brush my teeth twice a day." } },

  { w: "andlit", en: "face", pos: "noun", g: "hk", topic: "body", unit: 7, cefr: "A1",
    forms: { sg: ["andlit", "andlit", "andliti", "andlits"], pl: ["andlit", "andlit", "andlitum", "andlita"] },
    ex: { is: "Ég þvæ andlitið í köldu vatni.", en: "I wash my face in cold water." } },

  { w: "hár", en: "hair", pos: "noun", g: "hk", topic: "body", unit: 7, cefr: "A1",
    forms: { sg: ["hár", "hár", "hári", "hárs"], pl: ["hár", "hár", "hárum", "hára"] },
    ex: { is: "Hárið á mér er blautt.", en: "My hair is wet." } },

  { w: "morgunmatur", en: "breakfast", pos: "noun", g: "kk", topic: "food", unit: 7, cefr: "A1",
    forms: { sg: ["morgunmatur", "morgunmat", "morgunmat", "morgunmatar"], pl: null },
    ex: { is: "Morgunmaturinn minn er brauð og kaffi.", en: "My breakfast is bread and coffee." } },

  { w: "kvöldmatur", en: "dinner, supper", pos: "noun", g: "kk", topic: "food", unit: 7, cefr: "A1",
    forms: { sg: ["kvöldmatur", "kvöldmat", "kvöldmat", "kvöldmatar"], pl: null },
    ex: { is: "Kvöldmaturinn er klukkan sjö.", en: "Dinner is at seven." } },

  { w: "handklæði", en: "towel", pos: "noun", g: "hk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["handklæði", "handklæði", "handklæði", "handklæðis"],
             pl: ["handklæði", "handklæði", "handklæðum", "handklæða"] },
    ex: { is: "Handklæðið er í sturtunni.", en: "The towel is in the shower." } },

  { w: "lykill", en: "key", pos: "noun", g: "kk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["lykill", "lykil", "lykli", "lykils"], pl: ["lyklar", "lykla", "lyklum", "lykla"] },
    ex: { is: "Ég er með lyklana í vasanum.", en: "I have the keys in my pocket." } },

  { w: "sími", en: "telephone", pos: "noun", g: "kk", topic: "household", unit: 7, cefr: "A1",
    forms: { sg: ["sími", "síma", "síma", "síma"], pl: ["símar", "síma", "símum", "síma"] },
    ex: { is: "Ég svara ekki símanum í vinnunni.", en: "I don't answer the phone at work." } },

  { w: "vinna", en: "work, job", pos: "noun", g: "kvk", topic: "routine", unit: 7, cefr: "A1",
    forms: { sg: ["vinna", "vinnu", "vinnu", "vinnu"], pl: null },
    ex: { is: "Ég fer í vinnuna klukkan átta.", en: "I go to work at eight." } },

  { w: "sundlaug", en: "swimming pool", pos: "noun", g: "kvk", topic: "places", unit: 7, cefr: "A1",
    forms: { sg: ["sundlaug", "sundlaug", "sundlaug", "sundlaugar"],
             pl: ["sundlaugar", "sundlaugar", "sundlaugum", "sundlauga"] },
    ex: { is: "Sundlaugin opnar klukkan sex.", en: "The swimming pool opens at six." } },

  { w: "strætó", en: "bus", pos: "noun", g: "kk", topic: "transport", unit: 7, cefr: "A1",
    forms: { sg: ["strætó", "strætó", "strætó", "strætós"], pl: null },
    ex: { is: "Ég fer með strætó í vinnuna.", en: "I go to work by bus." } },

  // ── adjectives ─────────────────────────────────────────────────
  { w: "syfjaður", en: "sleepy", pos: "adj", topic: "describing", unit: 7, cefr: "A1",
    decl: { nom: ["syfjaður", "syfjuð", "syfjað"] },
    ex: { is: "Ég er alltaf syfjaður á mánudögum.", en: "I am always sleepy on Mondays." } },

  { w: "þreyttur", en: "tired", pos: "adj", topic: "describing", unit: 7, cefr: "A1",
    decl: { nom: ["þreyttur", "þreytt", "þreytt"] },
    ex: { is: "Hún er þreytt eftir vinnuna.", en: "She is tired after work." } },

  { w: "bilaður", en: "broken, out of order", pos: "adj", topic: "describing", unit: 7, cefr: "A1",
    decl: { nom: ["bilaður", "biluð", "bilað"] },
    ex: { is: "Vekjaraklukkan er biluð.", en: "The alarm clock is broken." } },

  // ── adverbs ────────────────────────────────────────────────────
  { w: "alltaf", en: "always", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Ég drekk alltaf kaffi á morgnana.", en: "I always drink coffee in the mornings." } },

  { w: "oft", en: "often", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Hann er oft seinn í vinnuna.", en: "He is often late for work." } },

  { w: "stundum", en: "sometimes", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Stundum hjóla ég í vinnuna.", en: "Sometimes I cycle to work." } },

  { w: "sjaldan", en: "seldom, rarely", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Ég fer sjaldan í sund.", en: "I rarely go swimming." } },

  { w: "aldrei", en: "never", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Óli vaknar aldrei snemma.", en: "Óli never wakes up early." } },

  { w: "venjulega", en: "usually", pos: "adv", topic: "frequency", unit: 7, cefr: "A1",
    ex: { is: "Venjulega tek ég strætó.", en: "I usually take the bus." } },

  { w: "snemma", en: "early", pos: "adv", topic: "time", unit: 7, cefr: "A1",
    ex: { is: "Halla fer snemma á fætur.", en: "Halla gets up early." } },

  { w: "seint", en: "late", pos: "adv", topic: "time", unit: 7, cefr: "A1",
    ex: { is: "Við borðum seint á föstudögum.", en: "We eat late on Fridays." } },

  { w: "enn", en: "still", pos: "adv", topic: "time", unit: 7, cefr: "A1",
    ex: { is: "Hann er enn í rúminu.", en: "He is still in bed." } },

  // ── phrases ────────────────────────────────────────────────────
  { w: "fara á fætur", en: "to get up, get out of bed", pos: "phrase", topic: "routine", unit: 7, cefr: "A1",
    ex: { is: "Ég fer á fætur klukkan sjö.", en: "I get up at seven." } },

  { w: "á morgnana", en: "in the mornings", pos: "phrase", topic: "time", unit: 7, cefr: "A1",
    ex: { is: "Á morgnana drekk ég te.", en: "In the mornings I drink tea." } },

  { w: "um kvöldið", en: "in the evening (that evening)", pos: "phrase", topic: "time", unit: 7, cefr: "A1",
    ex: { is: "Um kvöldið horfum við á sjónvarpið.", en: "In the evening we watch television." } },

  { w: "á leiðinni", en: "on the way", pos: "phrase", topic: "transport", unit: 7, cefr: "A1",
    ex: { is: "Ég kaupi brauð á leiðinni heim.", en: "I buy bread on the way home." } }
];

export default unit;
