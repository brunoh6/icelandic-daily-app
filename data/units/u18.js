// Unit 18 — Líkaminn og heilsa / The body and health
// Irregular body-part nouns, impersonal constructions for physical states,
// and the present perfect with hafa + past participle.

export const unit = {
  id: 18,
  slug: "u18",
  title: "Líkaminn og heilsa",
  en: "The body and health",
  cefr: "A2.2",
  icon: "🩺",
  blurb: "Name every body part, say what hurts, and survive a visit to the doctor.",
  canDo: [
    "Name the parts of the body, including the irregular ones like fætur and tennur",
    "Say what hurts with mér er illt í and ég er með verk í",
    "Describe symptoms to a doctor and ask for what I need at the pharmacy",
    "Use the present perfect with hafa to say what I have — and have never — done"
  ],
  lessons: [
    {
      n: 1,
      id: "u18l1",
      kind: "lesson",
      title: "Augu, eyru og nef",
      en: "The head",
      goal: "Name the head and use vera með for what your body looks like.",
      minutes: 9,
      icon: "👀",
      teach: [
        {
          h: "The weak neuter twins",
          p: "auga, eyra, hjarta and lunga are weak neuters. They end in -a in all four cases of the singular and swap that -a for -u in the plural. Nothing else happens to them.",
          ex: [
            ["Augun í honum eru blá.", "His eyes are blue."],
            ["Mér er illt í eyranu.", "My ear hurts."],
            ["Hjartað í mér slær hratt.", "My heart is beating fast."]
          ],
          tip: "hjarta takes the u-shift in the plural: hjörtu, hjörtum."
        },
        {
          h: "Icelanders do not own their bodies",
          p: "You never say mitt nef or eiga augu. To describe your own body you use vera með plus the accusative, and to say whose body part it is you add í or á plus the dative.",
          ex: [
            ["Ég er með brún augu.", "I have brown eyes."],
            ["Anna er með lítið nef.", "Anna has a small nose."],
            ["Hárið á henni er sítt.", "Her hair is long."]
          ],
          tip: "í for something inside the head or body, á for something on the outside."
        },
        {
          h: "Höfuð loses a vowel",
          p: "höfuð drops its second vowel as soon as an ending is added: höfði in the dative, höfðum in the dative plural. The same squeeze hits lyfseðill and plástur later in the unit.",
          table: {
            cols: ["", "eintala", "fleirtala"],
            rows: [
              ["NF", "höfuð", "höfuð"],
              ["ÞF", "höfuð", "höfuð"],
              ["ÞGF", "höfði", "höfðum"],
              ["EF", "höfuðs", "höfða"]
            ]
          }
        }
      ],
      vocab: ["líkami", "höfuð", "auga", "eyra", "hjarta", "nef", "munnur", "háls", "aumur"],
      items: [
        { t: "match", q: "Match the parts of the head",
          pairs: [["höfuð", "head"], ["auga", "eye"], ["eyra", "ear"], ["nef", "nose"], ["munnur", "mouth"], ["háls", "neck, throat"]] },

        { t: "gender", word: "auga", a: "hk",
          note: "Neuter, and a weak one: auga in every singular case, augu in the plural." },

        { t: "gender", word: "háls", a: "kk",
          note: "Masculine: hálsinn. One word covers both the neck and the throat." },

        { t: "choice", q: "What is the plural of auga?",
          opts: ["augu", "augar", "augir", "augun"], a: "augu",
          note: "Weak neuters trade -a for -u. augun is that plural with the article stuck on." },

        { t: "fill", q: "Describe her eyes.", sentence: "Hún er með blá ___ .", base: "auga",
          a: "augu", case: "ÞF", mode: "type",
          why: "vera með takes the accusative, and the accusative plural of auga is augu." },

        { t: "fill", q: "A puffin has two of these.", sentence: "Lúlli er með lítil ___ .", base: "eyra",
          opts: ["eyra", "eyru", "eyrum"], a: "eyru", case: "ÞF", mode: "choice",
          why: "Accusative plural eyru, with lítil in the neuter plural to match." },

        { t: "build", q: "Anna has a small nose.",
          a: "Anna er með lítið nef", extra: ["lítill", "á", "hefur"],
          note: "nef is neuter, so lítill becomes lítið." },

        { t: "type", q: "Type: “I have brown eyes.”", a: "Ég er með brún augu",
          hint: "vera með + þolfall",
          note: "Icelandic has no natural way to say “my eyes” here. vera með does the whole job." },

        { t: "listen", speak: "Hjartað í mér slær hratt.", q: "What did you hear?", mode: "choice",
          opts: ["Hjartað í mér slær hratt.", "Hjartað í mér slær hægt.", "Höfuðið á mér er þungt."],
          a: "Hjartað í mér slær hratt.",
          note: "To say whose body part it is, add í or á plus the dative: í mér, á honum." },

        { t: "choice", q: "Fill the gap: Mér er illt í ___ .",
          opts: ["höfðinu", "höfuðið", "höfuðinu", "höfuðs"], a: "höfðinu",
          note: "höfuð squeezes out its second vowel in the dative: höfði, then the article -nu." },

        { t: "table", q: "Complete the declension of auga (hk.).",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["auga", "augu"], blank: [1] },
            { label: "ÞF", cells: ["auga", "augu"], blank: [] },
            { label: "ÞGF", cells: ["auga", "augum"], blank: [1] },
            { label: "EF", cells: ["auga", "augna"], blank: [1] }
          ] },

        { t: "speak", is: "Ég er með stórt nef og lítil eyru.", en: "I have a big nose and small ears.",
          tip: "The f in nef is a soft [v], and eyru is two quick syllables, not three." }
      ]
    },

    {
      n: 2,
      id: "u18l2",
      kind: "lesson",
      title: "Hendur, fætur og tennur",
      en: "Arms, legs and the rest",
      goal: "Handle the body parts that change their vowel in the plural.",
      minutes: 10,
      icon: "🦶",
      teach: [
        {
          h: "The vowel-swappers",
          p: "Four body words rebuild themselves in the plural instead of adding an ending. There is no rule left to learn here — say each pair out loud until the second one arrives by itself.",
          table: {
            cols: ["", "eintala", "fleirtala"],
            rows: [
              ["fótur (kk.)", "fótur", "fætur"],
              ["hönd (kvk.)", "hönd", "hendur"],
              ["tönn (kvk.)", "tönn", "tennur"],
              ["tá (kvk.)", "tá", "tær"]
            ]
          },
          tip: "The dative plurals go back to the singular vowel: fótum, höndum, tönnum, tám."
        },
        {
          h: "hné and bak",
          p: "hné is a short neuter that hides a j: it is hné in the whole singular except the genitive hnés, and hnjám in the dative plural. bak is an ordinary neuter with the u-shift: bak, baki, but bök and bökum.",
          ex: [
            ["Mér er illt í hnénu.", "My knee hurts."],
            ["Ég er með verk í bakinu.", "I have a pain in my back."],
            ["Hnén á honum eru bólgin.", "His knees are swollen."]
          ]
        },
        {
          h: "Cold hands, sore back",
          p: "Two frames carry almost everything you need. mér er kalt á plus dative says a part of you is cold; mér er illt í plus dative says a part of you hurts. The person is in the dative and the verb never moves.",
          ex: [
            ["Mér er kalt á höndunum.", "My hands are cold."],
            ["Mér er kalt á fótunum.", "My feet are cold."],
            ["Mér er illt í öxlinni.", "My shoulder hurts."]
          ],
          tip: "á for the outside of the body, í for inside it. Cold lands on you; pain sits in you."
        }
      ],
      vocab: ["fótur", "hönd", "hné", "bak", "tá", "fingur", "öxl", "handleggur", "magi"],
      items: [
        { t: "match", q: "Match the body parts",
          pairs: [["fótur", "foot, leg"], ["hönd", "hand"], ["hné", "knee"], ["bak", "back"], ["fingur", "finger"], ["tá", "toe"]] },

        { t: "choice", q: "What is the plural of fótur?",
          opts: ["fætur", "fótar", "fótir", "fótur"], a: "fætur",
          note: "ó becomes æ: fótur → fætur. The dative plural swings back to fótum." },

        { t: "gender", word: "hönd", a: "kvk",
          note: "Feminine: höndin. Plural hendur, dative plural höndum." },

        { t: "gender", word: "hné", a: "hk",
          note: "Neuter: hnéð. It hides a j in the dative plural, hnjám." },

        { t: "fill", q: "Cold hands.", sentence: "Ég er með kaldar ___ .", base: "hönd",
          a: "hendur", case: "ÞF", mode: "type",
          why: "Accusative plural hendur, feminine, so the adjective is kaldar." },

        { t: "fill", q: "Where does it hurt?", sentence: "Mér er illt í ___ .", base: "bakið",
          opts: ["bakið", "bakinu", "baksins"], a: "bakinu", case: "ÞGF", mode: "choice",
          why: "í plus dative for a fixed spot: baki, plus the article -nu." },

        { t: "fill", q: "Cold feet.", sentence: "Mér er kalt á ___ .", base: "fætur",
          a: "fótunum", case: "ÞGF", mode: "type",
          why: "The dative plural of fótur is fótum, and the article turns it into fótunum." },

        { t: "build", q: "My knee hurts.",
          a: "Mér er illt í hnénu", extra: ["ég", "mig", "hnéð"],
          note: "The person goes in the dative and the sentence has no real subject at all." },

        { t: "type", q: "Type: “My teeth hurt.”", a: "Mér er illt í tönnunum",
          hint: "dative plural of tönn plus the article",
          note: "tönnum plus -unum gives tönnunum." },

        { t: "table", q: "Fill in the missing plurals.",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "kk.", cells: ["fótur", "fætur"], blank: [1] },
            { label: "kvk.", cells: ["hönd", "hendur"], blank: [1] },
            { label: "kvk.", cells: ["tönn", "tennur"], blank: [] },
            { label: "kvk.", cells: ["tá", "tær"], blank: [1] }
          ] },

        { t: "listen", speak: "Mér er kalt á höndunum.", q: "What did you hear?", mode: "choice",
          opts: ["Mér er kalt á höndunum.", "Mér er kalt á fótunum.", "Mér er illt í höndunum."],
          a: "Mér er kalt á höndunum.",
          note: "kalt á for cold, illt í for pain. One letter of difference, two different complaints." },

        { t: "speak", is: "Ég er með tíu fingur og tíu tær.", en: "I have ten fingers and ten toes.",
          tip: "tær is one syllable, and the r is a light tap." }
      ]
    },

    {
      n: 3,
      id: "u18l3",
      kind: "grammar",
      title: "Ég hef aldrei verið veik",
      en: "The present perfect",
      goal: "Build hafa + past participle and know when to use it instead of the past.",
      minutes: 14,
      icon: "⏳",
      teach: [
        {
          h: "hafa plus a frozen participle",
          p: "Two pieces. hafa carries the person, and the past participle carries the meaning. The participle never agrees with anything — it is the same word whoever is speaking.",
          ex: [
            ["Ég hef aldrei verið á sjúkrahúsi.", "I have never been in hospital."],
            ["Hann hefur verið veikur í viku.", "He has been ill for a week."],
            ["Við höfum tekið lyfið.", "We have taken the medicine."]
          ],
          tip: "hafa is irregular in the present: hef, hefur, hefur, höfum, hafið, hafa."
        },
        {
          h: "Where the participle comes from",
          p: "The ending depends on the class of the verb, and it is the same shape you already met in the past tense stem. Three patterns cover almost everything.",
          table: {
            cols: ["flokkur", "nafnháttur", "sagnbót"],
            rows: [
              ["-a verbs", "hósta", "hóstað"],
              ["-i verbs", "mæla", "mælt"],
              ["strong", "fara", "farið"],
              ["strong", "vera", "verið"],
              ["irregular", "sjá", "séð"]
            ]
          },
          tip: "A handful just have to be learnt: gera → gert, segja → sagt, fá → fengið, sitja → setið."
        },
        {
          h: "Perfect or plain past?",
          p: "The simple past pins an event to one finished moment. The present perfect leaves the moment vague and points at the result, the experience or the count. If the sentence names the moment — í gær, í morgun, klukkan þrjú — the simple past wins.",
          ex: [
            ["Ég fór til læknis í gær.", "I went to the doctor yesterday."],
            ["Ég hef farið til læknis.", "I have been to the doctor."],
            ["Hefurðu tekið verkjatöflu?", "Have you taken a painkiller?"]
          ],
          tip: "aldrei, oft, áður, lengi and síðan all pull the sentence towards the perfect."
        },
        {
          h: "The spoken shortcut",
          p: "In everyday Reykjavík speech vera búinn að does much of the same work: Ég er búin að taka lyfið is the same news as Ég hef tekið lyfið. The difference is that búinn að only reaches back to something recent, while the perfect can reach back years.",
          list: [
            "Ég er búinn að borða. — I have eaten (just now).",
            "Ég hef borðað hval. — I have eaten whale (some time in my life).",
            "búinn agrees: búinn, búin, búið.",
            "The participle after hafa never agrees."
          ]
        }
      ],
      vocab: ["hósta", "mæla", "hvíla", "skoða", "veikur", "áður", "fyrir löngu", "sjúkrahús", "lyf"],
      items: [
        { t: "fill", q: "Put hafa in the right person.", sentence: "Ég ___ aldrei verið á sjúkrahúsi.", base: "hafa",
          a: "hef", case: "", mode: "type",
          why: "hafa is irregular: hef, hefur, hefur, höfum, hafið, hafa." },

        { t: "fill", q: "Put hafa in the right person.", sentence: "Við ___ aldrei séð þennan lækni.", base: "hafa",
          a: "höfum", case: "", mode: "type",
          why: "The við form takes the u-shift: höfum, not hafum." },

        { t: "fill", q: "Make the participle.", sentence: "Ég hef ___ til læknis.", base: "fara",
          a: "farið", case: "", mode: "type",
          why: "Strong verbs end their participle in -ið: fara → farið." },

        { t: "fill", q: "Make the participle.", sentence: "Hann hefur ___ veikur í viku.", base: "vera",
          a: "verið", case: "", mode: "type",
          why: "vera → verið, and veikur stays nominative because it describes hann." },

        { t: "fill", q: "Make the participle.", sentence: "Anna hefur ___ mikið í nótt.", base: "hósta",
          a: "hóstað", case: "", mode: "type",
          why: "-a verbs make their participle in -að." },

        { t: "fill", q: "Make the participle.", sentence: "Hefurðu ___ þig í dag?", base: "mæla",
          a: "mælt", case: "", mode: "type",
          why: "-i verbs make their participle in -t. mæla sig = to take one's temperature." },

        { t: "fill", q: "Make the participle.", sentence: "Ég hef ___ þennan lækni áður.", base: "sjá",
          opts: ["séð", "sáð", "sjáð", "sé"], a: "séð", case: "", mode: "choice",
          why: "sjá is irregular: the participle is séð." },

        { t: "table", q: "Complete the present tense of hafa.",
          cols: ["", "hafa"],
          rows: [
            { label: "ég", cells: ["hef"], blank: [0] },
            { label: "þú", cells: ["hefur"], blank: [] },
            { label: "hann", cells: ["hefur"], blank: [] },
            { label: "við", cells: ["höfum"], blank: [0] },
            { label: "þið", cells: ["hafið"], blank: [] },
            { label: "þeir", cells: ["hafa"], blank: [0] }
          ] },

        { t: "table", q: "Complete the participles.",
          cols: ["", "nafnháttur", "sagnbót"],
          rows: [
            { label: "-a verb", cells: ["hósta", "hóstað"], blank: [1] },
            { label: "-i verb", cells: ["mæla", "mælt"], blank: [1] },
            { label: "strong", cells: ["fara", "farið"], blank: [] },
            { label: "strong", cells: ["vera", "verið"], blank: [1] }
          ] },

        { t: "choice", q: "Which fits? Í gær ___ ég til læknis.",
          opts: ["fór", "hef farið", "hefur farið", "er farinn"], a: "fór",
          note: "í gær names one finished moment, so the simple past is the only option." },

        { t: "choice", q: "Which fits? Ég ___ aldrei verið með flensu.",
          opts: ["hef", "hafði", "er", "var"], a: "hef",
          note: "aldrei with no fixed moment calls for the present perfect." },

        { t: "build", q: "Anna says: “I have never been ill.”",
          a: "Ég hef aldrei verið veik", extra: ["var", "veikur", "hefur"],
          note: "Anna is speaking, so the adjective is feminine: veik. The participle verið never changes." },

        { t: "type", q: "Type: “Have you been in hospital?”", a: "Hefurðu verið á sjúkrahúsi?",
          hint: "hefur + þú glued together",
          note: "á sjúkrahúsi, dative — you are located there, not moving into it." },

        { t: "listen", speak: "Ég hef aldrei tekið þetta lyf.", q: "What did you hear?", mode: "choice",
          opts: ["Ég hef aldrei tekið þetta lyf.", "Ég hef oft tekið þetta lyf.", "Ég tók þetta lyf í gær."],
          a: "Ég hef aldrei tekið þetta lyf.",
          note: "taka → tekið. Listen for aldrei against oft — they sit in the same slot." }
      ]
    },

    {
      n: 4,
      id: "u18l4",
      kind: "lesson",
      title: "Hvað er að þér?",
      en: "At the doctor's",
      goal: "Describe symptoms with the impersonal frames a doctor expects.",
      minutes: 11,
      icon: "🤒",
      teach: [
        {
          h: "Feelings happen to you",
          p: "Icelandic does not let you be the subject of your own discomfort. The person goes into the dative, the verb sits in the third person singular, and nothing is nominative at all.",
          ex: [
            ["Mér líður illa.", "I feel awful."],
            ["Mér er illt í maganum.", "My stomach hurts."],
            ["Mér batnar hægt.", "I am getting better slowly."],
            ["Honum versnaði í nótt.", "He got worse during the night."]
          ],
          tip: "Never say ég líð illa. The dative mér is the only person marker you get."
        },
        {
          h: "The accusative half of the family",
          p: "A smaller group puts the person in the accusative instead. You already know mig langar and mig vantar; add mig svimar for dizziness.",
          ex: [
            ["Mig svimar.", "I feel dizzy."],
            ["Mig svimar þegar ég stend upp.", "I get dizzy when I stand up."],
            ["Mig vantar verkjatöflur.", "I need painkillers."]
          ]
        },
        {
          h: "Three ways to say it hurts",
          p: "Pick whichever comes out first — a doctor will understand all three.",
          list: [
            "Mér er illt í maganum. — the all-purpose one.",
            "Ég er með verk í bakinu. — vera með plus verkur.",
            "Ég er með höfuðverk. — the -verkur compounds: höfuðverkur, bakverkur, tannpína.",
            "Ég er með hita / kvef / flensu / hálsbólgu. — vera með plus the accusative."
          ],
          tip: "When you leave, the nurse will say Góða bata! — get well soon."
        }
      ],
      vocab: ["heilsa", "verkur", "höfuðverkur", "hiti", "kvef", "flensa", "hálsbólga", "batna", "versna", "svima", "lasinn", "slappur", "hress", "sjúklingur", "biðstofa", "heilsugæslustöð", "mér líður vel", "mér er illt í", "Góða bata"],
      items: [
        { t: "fill", q: "Who is feeling bad?", sentence: "___ líður illa.", base: "ég",
          a: "mér", case: "ÞGF", mode: "type",
          why: "líða takes a dative person: mér, þér, honum, henni." },

        { t: "fill", q: "Who is dizzy?", sentence: "___ svimar þegar ég stend upp.", base: "ég",
          a: "mig", case: "ÞF", mode: "type",
          why: "svima is one of the accusative-subject verbs, like langa and vanta." },

        { t: "fill", q: "Where does it hurt?", sentence: "Mér er illt í ___ .", base: "maginn",
          a: "maganum", case: "ÞGF", mode: "type",
          why: "magi is a weak masculine: maga in the dative, maganum with the article." },

        { t: "fill", q: "Where is the pain?", sentence: "Ég er með verk í ___ .", base: "bakið",
          a: "bakinu", case: "ÞGF", mode: "type",
          why: "í plus dative for a location inside you." },

        { t: "fill", q: "Slowly but surely.", sentence: "Mér ___ hægt.", base: "batna",
          opts: ["batna", "batnar", "batnaði"], a: "batnar", case: "", mode: "choice",
          why: "The verb is stuck in the third person singular because mér is not a subject." },

        { t: "choice", q: "Which one means “I feel awful”?",
          opts: ["Mér líður illa", "Ég líð illa", "Ég er illur", "Mig líður illa"], a: "Mér líður illa",
          note: "Dative person, third-person verb. The other three are all impossible." },

        { t: "match", q: "Match the complaints",
          pairs: [["hiti", "fever"], ["kvef", "a cold"], ["flensa", "the flu"], ["hálsbólga", "a sore throat"], ["höfuðverkur", "a headache"], ["verkur", "pain"]] },

        { t: "gender", word: "flensa", a: "kvk",
          note: "Feminine: flensan. Accusative flensu — Ég er með flensu." },

        { t: "build", q: "I have a fever.",
          a: "Ég er með hita", extra: ["hiti", "hef", "á"],
          note: "vera með takes the accusative, and hiti becomes hita." },

        { t: "type", q: "Type: “My stomach hurts.”", a: "Mér er illt í maganum",
          hint: "Start with the dative person.",
          note: "Word for word this is “to me is bad in the stomach”. Learn the frame whole." },

        { t: "listen", speak: "Ertu með hita eða bara kvef?", q: "What did you hear?", mode: "choice",
          opts: ["Ertu með hita eða bara kvef?", "Ertu með hita eða bara flensu?", "Ertu með verk eða bara kvef?"],
          a: "Ertu með hita eða bara kvef?",
          note: "Both nouns are in the accusative after vera með; kvef simply looks the same." },

        { t: "speak", is: "Mér líður miklu betur í dag.", en: "I feel much better today.",
          tip: "miklu is the dative of measure — “better by a lot”." }
      ]
    },

    {
      n: 5,
      id: "u18l5",
      kind: "story",
      title: "Lúlli á afgreiðsluborðinu",
      en: "Lúlli on the counter",
      goal: "Follow a consultation and a trip to the pharmacy.",
      minutes: 11,
      icon: "💊",
      teach: [
        {
          h: "Listen for two things",
          p: "How long Anna has been ill, and what she walks out of the pharmacy with. Both answers are hiding in a present perfect."
        },
        {
          h: "mæla sig",
          p: "mæla means to measure. With a reflexive object it means to take your own temperature, which is why the doctor asks Hefurðu mælt þig? and not anything about a thermometer."
        }
      ],
      story: {
        title: "Hjá lækninum og í apótekinu",
        lines: [
          { sp: "Læknir", is: "Komdu inn, Anna. Hvað er að þér?", en: "Come in, Anna. What's the matter?" },
          { sp: "Anna", is: "Mér líður illa. Ég hef verið með hita síðan á sunnudaginn.", en: "I feel awful. I've had a fever since Sunday." },
          { sp: "Læknir", is: "Ertu með hósta?", en: "Do you have a cough?" },
          { sp: "Anna", is: "Já, og mér er illt í hálsinum. Stundum svimar mig líka.", en: "Yes, and my throat hurts. Sometimes I get dizzy too." },
          { sp: "Læknir", is: "Hefurðu mælt þig?", en: "Have you taken your temperature?" },
          { sp: "Anna", is: "Já, ég var með þrjátíu og níu stiga hita í morgun.", en: "Yes, I had a temperature of thirty-nine this morning." },
          { sp: "Læknir", is: "Opnaðu munninn. Hálsinn er bólginn. Þetta er flensa.", en: "Open your mouth. The throat is swollen. This is the flu." },
          { sp: "Læknir", is: "Farðu heim og hvíldu þig. Hérna er lyfseðill. Góða bata, Anna!", en: "Go home and rest. Here is a prescription. Get well soon, Anna!" },
          { sp: "Anna", is: "Góðan daginn. Ég er með lyfseðil, og mig vantar líka verkjatöflur.", en: "Good day. I have a prescription, and I also need painkillers." },
          { sp: "Lyfsali", is: "Gjörðu svo vel. Viltu hitamæli líka?", en: "Here you are. Would you like a thermometer as well?" },
          { sp: "Lyfsali", is: "En hver á þennan fugl? Hann hefur setið á borðinu í hálftíma.", en: "But whose bird is this? It has been sitting on the counter for half an hour." },
          { sp: "Anna", is: "Hann heitir Lúlli. Hann er alltaf þar sem hann á ekki að vera.", en: "His name is Lúlli. He is always where he is not supposed to be." }
        ],
        glossary: [
          ["Hvað er að þér?", "what's the matter with you?"],
          ["mæla sig", "to take one's temperature"],
          ["Gjörðu svo vel", "here you are"],
          ["Góða bata", "get well soon"],
          ["hálftími", "half an hour"],
          ["þar sem", "where, in the place that"]
        ]
      },
      vocab: ["lyfseðill", "verkjatafla", "hitamælir", "lyf", "hósta", "hvíla", "bólginn", "Góða bata", "mér er illt í"],
      items: [
        { t: "choice", q: "Hvað er að Önnu?",
          opts: ["Hún er með flensu", "Hún er handleggsbrotin", "Hún er með tannpínu", "Hún er bara þreytt"],
          a: "Hún er með flensu",
          note: "The doctor's verdict: Þetta er flensa." },

        { t: "choice", q: "How long has Anna had a fever?",
          opts: ["Since Sunday", "Since Monday", "For two hours", "Since this morning"], a: "Since Sunday",
          note: "síðan á sunnudaginn — the perfect hef verið stretches from Sunday to now." },

        { t: "fill", q: "Rebuild Anna's line.", sentence: "Ég hef ___ með hita síðan á sunnudaginn.", base: "vera",
          a: "verið", case: "", mode: "type",
          why: "hafa plus the participle verið. The state is still going on, so not var." },

        { t: "fill", q: "Where does it hurt?", sentence: "Mér er illt í ___ .", base: "hálsinn",
          a: "hálsinum", case: "ÞGF", mode: "type",
          why: "háls is masculine: hálsi in the dative, hálsinum with the article." },

        { t: "fill", q: "Who needs painkillers?", sentence: "___ vantar verkjatöflur.", base: "ég",
          a: "mig", case: "ÞF", mode: "type",
          why: "vanta puts the person in the accusative and leaves the verb in the third person." },

        { t: "build", q: "Here is a prescription.",
          a: "Hérna er lyfseðill", extra: ["lyfseðil", "þarna", "eru"],
          note: "After er the noun stays nominative: lyfseðill, not lyfseðil." },

        { t: "type", q: "Type what the doctor asks: “Have you taken your temperature?”",
          a: "Hefurðu mælt þig?", hint: "hefur + þú, then the participle",
          note: "mæla sig is reflexive, so þig follows the participle." },

        { t: "listen", speak: "Stundum svimar mig líka.", q: "What did you hear?", mode: "choice",
          opts: ["Stundum svimar mig líka.", "Stundum hósta ég líka.", "Oft svimar mig líka."],
          a: "Stundum svimar mig líka.",
          note: "Stundum sits first, so the verb jumps ahead of mig." },

        { t: "match", q: "Match the story phrases",
          pairs: [["Hvað er að þér?", "what's the matter?"], ["mæla sig", "take one's temperature"], ["Gjörðu svo vel", "here you are"], ["Góða bata", "get well soon"], ["hálftími", "half an hour"]] },

        { t: "gender", word: "lyfseðill", a: "kk",
          note: "Masculine: lyfseðillinn. It syncopates — lyfseðli in the dative, lyfseðlar in the plural." },

        { t: "choice", q: "Where has Lúlli been sitting?",
          opts: ["On the pharmacy counter", "In the waiting room", "On Anna's shoulder", "On the doctor's desk"],
          a: "On the pharmacy counter",
          note: "Hann hefur setið á borðinu — sitja makes its participle setið." },

        { t: "speak", is: "Góða bata, Anna!", en: "Get well soon, Anna!",
          tip: "bata is the accusative of bati, recovery. The whole phrase is an old wish with the verb left out." }
      ]
    },

    {
      n: 6,
      id: "u18l6",
      kind: "checkpoint",
      title: "Heilsupróf",
      en: "Unit 18 checkpoint",
      goal: "Prove you can name the body, report a symptom and use the perfect.",
      minutes: 13,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "Weak neuters: auga/augu, eyra/eyru, hjarta/hjörtu — and augna, eyrna in the genitive plural.",
            "Vowel-swappers: fótur/fætur, hönd/hendur, tönn/tennur, tá/tær; datives fótum, höndum, tönnum, tám.",
            "hné → hnjám, bak → bök, höfuð → höfði.",
            "mér er kalt á + ÞGF, mér er illt í + ÞGF, mér líður vel/illa, mér batnar, mér versnar.",
            "mig svimar, mig vantar — the accusative-subject group.",
            "hafa + participle for the perfect; the simple past whenever the moment is named."
          ]
        }
      ],
      vocab: ["auga", "hönd", "fótur", "hné", "bak", "hiti", "flensa", "verkjatafla", "sjúkrahús", "svima", "batna", "mæla", "skoða", "veikur", "hress", "áður"],
      items: [
        { t: "fill", q: "Put hafa in the right person.", sentence: "Ég ___ aldrei verið á sjúkrahúsi.", base: "hafa",
          a: "hef", case: "", mode: "type",
          why: "hef, hefur, hefur, höfum, hafið, hafa." },

        { t: "fill", q: "Make the participle.", sentence: "Hún hefur ___ hitann.", base: "mæla",
          a: "mælt", case: "", mode: "type",
          why: "-i verbs end their participle in -t." },

        { t: "choice", q: "Which fits? Í gær ___ ég til læknis.",
          opts: ["fór", "hef farið", "hefur farið", "fer"], a: "fór",
          note: "A named moment in the past takes the simple past, not the perfect." },

        { t: "choice", q: "Which is the past participle of sjá?",
          opts: ["séð", "sáð", "sjáið", "sé"], a: "séð",
          note: "Ég hef séð þennan lækni áður." },

        { t: "fill", q: "Where does it hurt?", sentence: "Mér er illt í ___ .", base: "hnéð",
          a: "hnénu", case: "ÞGF", mode: "type",
          why: "hné is the same in the dative singular; the article adds -nu." },

        { t: "fill", q: "Cold feet again.", sentence: "Mér er kalt á ___ .", base: "fætur",
          a: "fótunum", case: "ÞGF", mode: "type",
          why: "The dative plural goes back to ó: fótum, then fótunum." },

        { t: "fill", q: "Who is dizzy?", sentence: "___ svimar í hvert sinn sem hún stendur upp.", base: "hún",
          a: "hana", case: "ÞF", mode: "type",
          why: "svima takes an accusative person: mig, þig, hana." },

        { t: "gender", word: "hönd", a: "kvk",
          note: "Feminine. Singular hönd, hönd, hendi, handar; plural hendur." },

        { t: "match", q: "Match the unit words",
          pairs: [["hiti", "fever"], ["verkjatafla", "painkiller"], ["hitamælir", "thermometer"], ["lyfseðill", "prescription"], ["sjúkrahús", "hospital"], ["biðstofa", "waiting room"]] },

        { t: "table", q: "Fill in the missing plurals.",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "hk.", cells: ["auga", "augu"], blank: [1] },
            { label: "kk.", cells: ["fótur", "fætur"], blank: [1] },
            { label: "kvk.", cells: ["hönd", "hendur"], blank: [] },
            { label: "kvk.", cells: ["tönn", "tennur"], blank: [1] }
          ] },

        { t: "build", q: "I have never had the flu.",
          a: "Ég hef aldrei verið með flensu", extra: ["var", "hafði", "flensa"],
          note: "vera með plus the accusative flensu, wrapped inside the perfect." },

        { t: "type", q: "Type: “The doctor examined me yesterday.”", a: "Læknirinn skoðaði mig í gær",
          hint: "skoða is an -a verb",
          note: "í gær names the moment, so the plain past skoðaði is right." },

        { t: "listen", speak: "Ertu búin að taka verkjatöflu?", q: "What did you hear?", mode: "choice",
          opts: ["Ertu búin að taka verkjatöflu?", "Ertu búinn að taka verkjatöflu?", "Hefurðu tekið verkjatöflu?"],
          a: "Ertu búin að taka verkjatöflu?",
          note: "búin is feminine — the question is aimed at a woman. búinn að and the perfect say the same thing here." },

        { t: "speak", is: "Mér er batnað og ég er orðin hress.", en: "I have recovered and I am fit again.",
          tip: "orðin is feminine; a man would say orðinn hress." }
      ]
    }
  ]
};

export const vocab = [
  // ——— líkaminn: höfuðið ———
  { w: "líkami", en: "body", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["líkami", "líkama", "líkama", "líkama"], pl: ["líkamar", "líkama", "líkömum", "líkama"] },
    ex: { is: "Líkaminn þarf svefn og vatn.", en: "The body needs sleep and water." } },

  { w: "höfuð", en: "head", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["höfuð", "höfuð", "höfði", "höfuðs"], pl: ["höfuð", "höfuð", "höfðum", "höfða"] },
    ex: { is: "Ég er með verk í höfðinu.", en: "I have a pain in my head." } },

  { w: "auga", en: "eye", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["auga", "auga", "auga", "auga"], pl: ["augu", "augu", "augum", "augna"] },
    ex: { is: "Hann er með græn augu.", en: "He has green eyes." } },

  { w: "eyra", en: "ear", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["eyra", "eyra", "eyra", "eyra"], pl: ["eyru", "eyru", "eyrum", "eyrna"] },
    ex: { is: "Anna er með verk í eyranu.", en: "Anna has a pain in her ear." } },

  { w: "hjarta", en: "heart", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["hjarta", "hjarta", "hjarta", "hjarta"], pl: ["hjörtu", "hjörtu", "hjörtum", "hjartna"] },
    ex: { is: "Hjartað í honum slær hægt.", en: "His heart beats slowly." } },

  { w: "nef", en: "nose", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["nef", "nef", "nefi", "nefs"], pl: ["nef", "nef", "nefjum", "nefja"] },
    ex: { is: "Nefið á Lúlla er stórt og appelsínugult.", en: "Lúlli's beak is big and orange." } },

  { w: "munnur", en: "mouth", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["munnur", "munn", "munni", "munns"], pl: ["munnar", "munna", "munnum", "munna"] },
    ex: { is: "Læknirinn skoðaði munninn á mér.", en: "The doctor looked at my mouth." } },

  { w: "háls", en: "neck, throat", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["háls", "háls", "hálsi", "háls"], pl: ["hálsar", "hálsa", "hálsum", "hálsa"] },
    ex: { is: "Mér er illt í hálsinum.", en: "My throat hurts." } },

  { w: "tönn", en: "tooth", pos: "noun", g: "kvk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["tönn", "tönn", "tönn", "tannar"], pl: ["tennur", "tennur", "tönnum", "tanna"] },
    ex: { is: "Ég bursta tennurnar á hverjum morgni.", en: "I brush my teeth every morning." } },

  // ——— líkaminn: útlimir ———
  { w: "fótur", en: "foot, leg", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["fótur", "fót", "fæti", "fótar"], pl: ["fætur", "fætur", "fótum", "fóta"] },
    ex: { is: "Anna er með verk í vinstri fæti.", en: "Anna has a pain in her left leg." } },

  { w: "hönd", en: "hand", pos: "noun", g: "kvk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["hönd", "hönd", "hendi", "handar"], pl: ["hendur", "hendur", "höndum", "handa"] },
    ex: { is: "Hendurnar á mér eru kaldar.", en: "My hands are cold." } },

  { w: "hné", en: "knee", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["hné", "hné", "hné", "hnés"], pl: ["hné", "hné", "hnjám", "hnjáa"] },
    ex: { is: "Jónas er með verk í hnénu.", en: "Jónas has a pain in his knee." } },

  { w: "bak", en: "back", pos: "noun", g: "hk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["bak", "bak", "baki", "baks"], pl: ["bök", "bök", "bökum", "baka"] },
    ex: { is: "Sóley er með verk í bakinu eftir langan dag.", en: "Sóley has a sore back after a long day." } },

  { w: "tá", en: "toe", pos: "noun", g: "kvk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["tá", "tá", "tá", "táar"], pl: ["tær", "tær", "tám", "táa"] },
    ex: { is: "Mér er kalt á tánum.", en: "My toes are cold." } },

  { w: "fingur", en: "finger", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["fingur", "fingur", "fingri", "fingurs"], pl: ["fingur", "fingur", "fingrum", "fingra"] },
    ex: { is: "Ég er með hring á fingrinum.", en: "I have a ring on my finger." } },

  { w: "öxl", en: "shoulder", pos: "noun", g: "kvk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["öxl", "öxl", "öxl", "axlar"], pl: ["axlir", "axlir", "öxlum", "axla"] },
    ex: { is: "Lúlli sat á öxlinni á Önnu.", en: "Lúlli sat on Anna's shoulder." } },

  { w: "handleggur", en: "arm", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["handleggur", "handlegg", "handlegg", "handleggs"], pl: ["handleggir", "handleggi", "handleggjum", "handleggja"] },
    ex: { is: "Hann er með verk í handleggnum.", en: "He has a pain in his arm." } },

  { w: "magi", en: "stomach", pos: "noun", g: "kk", topic: "body", unit: 18, cefr: "A2",
    forms: { sg: ["magi", "maga", "maga", "maga"], pl: ["magar", "maga", "mögum", "maga"] },
    ex: { is: "Mér er illt í maganum eftir matinn.", en: "My stomach hurts after the meal." } },

  // ——— heilsa og einkenni ———
  { w: "heilsa", en: "health", pos: "noun", g: "kvk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["heilsa", "heilsu", "heilsu", "heilsu"], pl: null },
    ex: { is: "Amma er enn við góða heilsu.", en: "Grandma is still in good health." } },

  { w: "verkur", en: "pain, ache", pos: "noun", g: "kk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["verkur", "verk", "verk", "verkjar"], pl: ["verkir", "verki", "verkjum", "verkja"] },
    ex: { is: "Verkurinn kom aftur í nótt.", en: "The pain came back during the night." } },

  { w: "höfuðverkur", en: "headache", pos: "noun", g: "kk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["höfuðverkur", "höfuðverk", "höfuðverk", "höfuðverkjar"], pl: ["höfuðverkir", "höfuðverki", "höfuðverkjum", "höfuðverkja"] },
    ex: { is: "Ég er með hræðilegan höfuðverk.", en: "I have a terrible headache." } },

  { w: "hiti", en: "fever, temperature", pos: "noun", g: "kk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["hiti", "hita", "hita", "hita"], pl: null },
    ex: { is: "Barnið er með háan hita.", en: "The child has a high temperature." } },

  { w: "kvef", en: "a cold", pos: "noun", g: "hk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["kvef", "kvef", "kvefi", "kvefs"], pl: null },
    ex: { is: "Ég er bara með kvef, ekki flensu.", en: "I only have a cold, not the flu." } },

  { w: "flensa", en: "the flu", pos: "noun", g: "kvk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["flensa", "flensu", "flensu", "flensu"], pl: null },
    ex: { is: "Hún er heima með flensu.", en: "She is at home with the flu." } },

  { w: "hálsbólga", en: "sore throat", pos: "noun", g: "kvk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["hálsbólga", "hálsbólgu", "hálsbólgu", "hálsbólgu"], pl: null },
    ex: { is: "Ég er með hálsbólgu og get varla talað.", en: "I have a sore throat and can hardly speak." } },

  { w: "sjúklingur", en: "patient", pos: "noun", g: "kk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["sjúklingur", "sjúkling", "sjúklingi", "sjúklings"], pl: ["sjúklingar", "sjúklinga", "sjúklingum", "sjúklinga"] },
    ex: { is: "Læknirinn talar við sjúklinginn.", en: "The doctor is talking to the patient." } },

  { w: "læknir", en: "doctor", pos: "noun", g: "kk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["læknir", "lækni", "lækni", "læknis"], pl: ["læknar", "lækna", "læknum", "lækna"] },
    ex: { is: "Ég þarf að panta tíma hjá lækni.", en: "I need to book an appointment with a doctor." } },

  { w: "sjúkrahús", en: "hospital", pos: "noun", g: "hk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["sjúkrahús", "sjúkrahús", "sjúkrahúsi", "sjúkrahúss"], pl: ["sjúkrahús", "sjúkrahús", "sjúkrahúsum", "sjúkrahúsa"] },
    ex: { is: "Hann liggur á sjúkrahúsi í Reykjavík.", en: "He is in a hospital in Reykjavík." } },

  { w: "heilsugæslustöð", en: "health centre", pos: "noun", g: "kvk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["heilsugæslustöð", "heilsugæslustöð", "heilsugæslustöð", "heilsugæslustöðvar"], pl: ["heilsugæslustöðvar", "heilsugæslustöðvar", "heilsugæslustöðvum", "heilsugæslustöðva"] },
    ex: { is: "Heilsugæslustöðin opnar klukkan átta.", en: "The health centre opens at eight." } },

  { w: "biðstofa", en: "waiting room", pos: "noun", g: "kvk", topic: "health", unit: 18, cefr: "A2",
    forms: { sg: ["biðstofa", "biðstofu", "biðstofu", "biðstofu"], pl: ["biðstofur", "biðstofur", "biðstofum", "biðstofa"] },
    ex: { is: "Við bíðum á biðstofunni.", en: "We are waiting in the waiting room." } },

  // ——— apótekið ———
  { w: "lyf", en: "medicine, drug", pos: "noun", g: "hk", topic: "medicine", unit: 18, cefr: "A2",
    forms: { sg: ["lyf", "lyf", "lyfi", "lyfs"], pl: ["lyf", "lyf", "lyfjum", "lyfja"] },
    ex: { is: "Taktu lyfið tvisvar á dag.", en: "Take the medicine twice a day." } },

  { w: "lyfseðill", en: "prescription", pos: "noun", g: "kk", topic: "medicine", unit: 18, cefr: "A2",
    forms: { sg: ["lyfseðill", "lyfseðil", "lyfseðli", "lyfseðils"], pl: ["lyfseðlar", "lyfseðla", "lyfseðlum", "lyfseðla"] },
    ex: { is: "Læknirinn skrifaði lyfseðil.", en: "The doctor wrote a prescription." } },

  { w: "verkjatafla", en: "painkiller", pos: "noun", g: "kvk", topic: "medicine", unit: 18, cefr: "A2",
    forms: { sg: ["verkjatafla", "verkjatöflu", "verkjatöflu", "verkjatöflu"], pl: ["verkjatöflur", "verkjatöflur", "verkjatöflum", "verkjataflna"] },
    ex: { is: "Ég tók tvær verkjatöflur.", en: "I took two painkillers." } },

  { w: "hitamælir", en: "thermometer", pos: "noun", g: "kk", topic: "medicine", unit: 18, cefr: "A2",
    forms: { sg: ["hitamælir", "hitamæli", "hitamæli", "hitamælis"], pl: ["hitamælar", "hitamæla", "hitamælum", "hitamæla"] },
    ex: { is: "Hvar er hitamælirinn?", en: "Where is the thermometer?" } },

  // ——— sagnir ———
  { w: "hósta", en: "to cough", pos: "verb", topic: "health", unit: 18, cefr: "A2", gov: "none", vclass: "weak-a",
    conj: { pres: ["hósta", "hóstar", "hóstar", "hóstum", "hóstið", "hósta"],
            past: ["hóstaði", "hóstaðir", "hóstaði", "hóstuðum", "hóstuðuð", "hóstuðu"], pp: "hóstað" },
    ex: { is: "Ég hef hóstað alla nóttina.", en: "I have been coughing all night." } },

  { w: "mæla", en: "to measure, to take (a temperature)", pos: "verb", topic: "health", unit: 18, cefr: "A2", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["mæli", "mælir", "mælir", "mælum", "mælið", "mæla"],
            past: ["mældi", "mældir", "mældi", "mældum", "mælduð", "mældu"], pp: "mælt" },
    ex: { is: "Læknirinn mældi hitann í mér.", en: "The doctor took my temperature." } },

  { w: "hvíla", en: "to rest", pos: "verb", topic: "health", unit: 18, cefr: "A2", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["hvíli", "hvílir", "hvílir", "hvílum", "hvílið", "hvíla"],
            past: ["hvíldi", "hvíldir", "hvíldi", "hvíldum", "hvílduð", "hvíldu"], pp: "hvílt" },
    ex: { is: "Þú verður að hvíla þig í nokkra daga.", en: "You have to rest for a few days." } },

  { w: "skoða", en: "to examine, to look at", pos: "verb", topic: "health", unit: 18, cefr: "A2", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["skoða", "skoðar", "skoðar", "skoðum", "skoðið", "skoða"],
            past: ["skoðaði", "skoðaðir", "skoðaði", "skoðuðum", "skoðuðuð", "skoðuðu"], pp: "skoðað" },
    ex: { is: "Læknirinn skoðaði hálsinn á mér.", en: "The doctor examined my throat." } },

  { w: "batna", en: "to get better, to recover", pos: "verb", topic: "impersonal", unit: 18, cefr: "A2", gov: "impersonal-ÞGF", vclass: "weak-a",
    conj: { pres: ["batna", "batnar", "batnar", "bötnum", "batnið", "batna"],
            past: ["batnaði", "batnaðir", "batnaði", "bötnuðum", "bötnuðuð", "bötnuðu"], pp: "batnað" },
    ex: { is: "Mér batnar hægt en örugglega.", en: "I am getting better slowly but surely." } },

  { w: "versna", en: "to get worse", pos: "verb", topic: "impersonal", unit: 18, cefr: "A2", gov: "impersonal-ÞGF", vclass: "weak-a",
    conj: { pres: ["versna", "versnar", "versnar", "versnum", "versnið", "versna"],
            past: ["versnaði", "versnaðir", "versnaði", "versnuðum", "versnuðuð", "versnuðu"], pp: "versnað" },
    ex: { is: "Mér versnaði eftir hádegi.", en: "I got worse after midday." } },

  { w: "svima", en: "to feel dizzy", pos: "verb", topic: "impersonal", unit: 18, cefr: "A2", gov: "impersonal-ÞF", vclass: "weak-a",
    conj: { pres: ["svima", "svimar", "svimar", "svimum", "svimið", "svima"],
            past: ["svimaði", "svimaðir", "svimaði", "svimuðum", "svimuðuð", "svimuðu"], pp: "svimað" },
    ex: { is: "Mig svimar dálítið í dag.", en: "I feel a bit dizzy today." } },

  // ——— lýsingarorð ———
  { w: "veikur", en: "ill, sick", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["veikur", "veik", "veikt"], comp: "veikari", sup: "veikastur" },
    ex: { is: "Anna hefur verið veik í viku.", en: "Anna has been ill for a week." } },

  { w: "aumur", en: "sore, tender", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["aumur", "aum", "aumt"], comp: "aumari", sup: "aumastur" },
    ex: { is: "Ég er aumur í fótunum eftir hlaupið.", en: "My legs are sore after the run." } },

  { w: "lasinn", en: "under the weather, poorly", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["lasinn", "lasin", "lasið"] },
    ex: { is: "Sóley er lasin og fer ekki í vinnuna.", en: "Sóley is poorly and is not going to work." } },

  { w: "slappur", en: "weak, run-down", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["slappur", "slöpp", "slappt"], comp: "slappari", sup: "slappastur" },
    ex: { is: "Ég er slappur eftir flensuna.", en: "I feel run-down after the flu." } },

  { w: "hress", en: "fit, in good form", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["hress", "hress", "hresst"], comp: "hressari", sup: "hressastur" },
    ex: { is: "Ég er orðinn hress aftur.", en: "I am back on my feet again." } },

  { w: "bólginn", en: "swollen", pos: "adj", topic: "health", unit: 18, cefr: "A2",
    decl: { nom: ["bólginn", "bólgin", "bólgið"] },
    ex: { is: "Hálsinn á mér er bólginn.", en: "My throat is swollen." } },

  // ——— atviksorð og orðasambönd ———
  { w: "áður", en: "before, previously", pos: "adv", topic: "time", unit: 18, cefr: "A2",
    ex: { is: "Ég hef aldrei komið hingað áður.", en: "I have never been here before." } },

  { w: "fyrir löngu", en: "long ago", pos: "adv", topic: "time", unit: 18, cefr: "A2",
    ex: { is: "Þetta gerðist fyrir löngu.", en: "That happened long ago." } },

  { w: "mér líður vel", en: "I feel well", pos: "phrase", topic: "health", unit: 18, cefr: "A2",
    ex: { is: "Mér líður vel í dag, takk.", en: "I feel well today, thanks." } },

  { w: "mér er illt í", en: "my ... hurts", pos: "phrase", topic: "health", unit: 18, cefr: "A2",
    ex: { is: "Mér er illt í maganum.", en: "My stomach hurts." } },

  { w: "Góða bata", en: "get well soon", pos: "phrase", topic: "courtesy", unit: 18, cefr: "A2",
    ex: { is: "Góða bata, Jónas!", en: "Get well soon, Jónas!" } }
];

export default unit;
