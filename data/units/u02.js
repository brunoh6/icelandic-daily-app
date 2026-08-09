// Unit 2 — Hvaðan ert þú? / Where are you from?
// Countries, nationalities, languages and jobs.

export const unit = {
  id: 2,
  slug: "u02",
  title: "Hvaðan ert þú?",
  en: "Where are you from?",
  cefr: "A1.1",
  icon: "🌍",
  blurb: "Say where you come from, what you do, and which languages you speak.",
  canDo: [
    "Say which country I am from and ask someone else",
    "Name common countries, nationalities and languages",
    "Say what I do for a living and where I work",
    "Ask with hvað, hver, hvar, hvaðan and hvernig"
  ],
  lessons: [

    // ─────────────────────────────────────────────────────────── l1
    {
      n: 1,
      id: "u02l1",
      kind: "lesson",
      title: "Ég er frá Íslandi",
      en: "I'm from Iceland",
      goal: "Say which country you come from.",
      minutes: 9,
      icon: "🌍",
      teach: [
        {
          h: "Origin runs through one word: frá",
          p: "Everything after frá goes into the dative, so the country name changes shape. Neuter countries in -land simply add -i.",
          ex: [
            ["Ég er frá Íslandi.", "I'm from Iceland."],
            ["Hún er frá Póllandi.", "She's from Poland."]
          ],
          tip: "Ísland → Íslandi. Þýskaland → Þýskalandi. Same move every time."
        },
        {
          h: "Most countries are neuter",
          p: "Anything ending in -land is neuter. A handful are not, and those you learn one at a time.",
          table: {
            cols: ["land", "kyn", "frá …"],
            rows: [
              ["Ísland", "hk", "frá Íslandi"],
              ["Þýskaland", "hk", "frá Þýskalandi"],
              ["Noregur", "kk", "frá Noregi"],
              ["Danmörk", "kvk", "frá Danmörku"],
              ["Ítalía", "kvk", "frá Ítalíu"]
            ]
          }
        },
        {
          h: "Hvaðan or hvar",
          p: "Hvaðan asks where someone started. Hvar asks where they are standing right now.",
          ex: [
            ["Hvaðan ert þú?", "Where are you from?"],
            ["Hvar ert þú?", "Where are you?"]
          ]
        }
      ],
      vocab: ["hvaðan", "frá", "Ísland", "Noregur", "Danmörk", "Þýskaland", "Pólland", "Ítalía", "Kanada", "land"],
      items: [
        { t: "choice", q: "Which word asks where someone comes from?",
          opts: ["Hvaðan", "Hvar", "Hver", "Hvernig"], a: "Hvaðan",
          note: "Hvar asks where you are. Hvaðan asks where you started.",
          tags: ["question-words"] },

        { t: "fill", q: "Put the country into the right case.",
          sentence: "Ég er frá ___ .", base: "Ísland",
          opts: ["Ísland", "Íslandi", "Íslands"], a: "Íslandi",
          case: "ÞGF", why: "frá always takes the dative", mode: "choice",
          tags: ["prep:frá", "case:dat"] },

        { t: "fill", q: "Same move, new country.",
          sentence: "Hún er frá ___ .", base: "Þýskaland", a: "Þýskalandi",
          case: "ÞGF", why: "neuter -land countries add -i in the dative", mode: "type",
          tags: ["prep:frá", "case:dat"] },

        { t: "build", q: "Where are you from?", a: "Hvaðan ert þú",
          extra: ["hvar", "hún", "heitir"],
          note: "The question word comes first, then the verb, then the subject." },

        { t: "match", q: "Match the countries",
          pairs: [["Ísland", "Iceland"], ["Noregur", "Norway"], ["Danmörk", "Denmark"],
                  ["Þýskaland", "Germany"], ["Pólland", "Poland"]] },

        { t: "gender", word: "Ísland", a: "hk",
          note: "Every country ending in -land is neuter." },

        { t: "gender", word: "Danmörk", a: "kvk",
          note: "Danmörk is feminine, and the dative is Danmörku." },

        { t: "listen", speak: "Ég er frá Noregi.", q: "What did you hear?", mode: "choice",
          opts: ["Ég er frá Noregi.", "Ég er frá Danmörku.", "Ég er frá Íslandi."],
          a: "Ég er frá Noregi." },

        { t: "type", q: "Type “She is from Italy.”", a: "Hún er frá Ítalíu",
          hint: "frá + ÞGF; Ítalía ends in -u in every case but the first.",
          note: "Feminine nouns in -a take -u in the accusative, dative and genitive." },

        { t: "choice", q: "Kári asks: Hvaðan ert þú? Which answer fits?",
          opts: ["Ég er frá Póllandi.", "Ég heiti Mira.", "Ég tala íslensku.", "Ég er kennari."],
          a: "Ég er frá Póllandi.",
          note: "The other three are all true of Mira. None of them answers hvaðan." },

        { t: "speak", is: "Ég er frá Íslandi.", en: "I'm from Iceland.",
          tip: "Í is a long ee. The whole word Íslandi leans on its first syllable." },

        { t: "fill", q: "Careful — this one is a freebie.",
          sentence: "Tom er frá ___ .", base: "Kanada", a: "Kanada",
          case: "ÞGF", why: "Kanada never changes its ending, whatever the case", mode: "type",
          tags: ["prep:frá", "case:dat"] }
      ]
    },

    // ─────────────────────────────────────────────────────────── l2
    {
      n: 2,
      id: "u02l2",
      kind: "lesson",
      title: "Íslendingur eða íslensk?",
      en: "Nations and nationalities",
      goal: "Name a person by country, as a noun or as an adjective.",
      minutes: 10,
      icon: "🧍",
      teach: [
        {
          h: "Every country has a person-word",
          p: "Four endings cover nearly all of them. Learn the ending and you can guess most of the rest.",
          table: {
            cols: ["ending", "land", "manneskja"],
            rows: [
              ["-ingur", "Ísland", "Íslendingur"],
              ["-i", "Danmörk", "Dani"],
              ["-verji", "Pólland", "Pólverji"],
              ["-maður", "Noregur", "Norðmaður"]
            ]
          },
          tip: "A few are lopsided: Þýskaland gives Þjóðverji, not Þýskalandsmaður."
        },
        {
          h: "All of them are masculine",
          p: "Íslendingur, Frakki, Pólverji, Norðmaður — karlkyn, every one, whoever they describe. About a woman you still say hún er Íslendingur.",
          tip: "Job words in -kona are the exception: söngkona is feminine."
        },
        {
          h: "Or reach for an adjective",
          p: "Instead of the noun you can use an adjective. Then it has to agree: masculine -ur, feminine bare, neuter -t.",
          ex: [
            ["Kári er íslenskur.", "Kári is Icelandic."],
            ["Mira er pólsk.", "Mira is Polish."],
            ["Þetta er danskt nafn.", "That is a Danish name."],
            ["Tom er ekki enskur.", "Tom isn't English."]
          ]
        }
      ],
      vocab: ["Íslendingur", "Norðmaður", "Dani", "Svíi", "Þjóðverji", "Pólverji", "Frakki",
              "íslenskur", "pólskur", "danskur", "franskur", "þýskur", "enskur", "Svíþjóð", "Frakkland"],
      items: [
        { t: "choice", q: "A person from Poland is …",
          opts: ["Pólverji", "Pólland", "pólskt", "Pólverjar"], a: "Pólverji",
          note: "-verji is the person, -land is the place." },

        { t: "choice", q: "Mira is Polish. Which form agrees with her?",
          opts: ["pólsk", "pólskur", "pólskt", "Pólverja"], a: "pólsk",
          note: "The feminine simply drops the masculine -ur.",
          tags: ["adj:agreement"] },

        { t: "gender", word: "Íslendingur", a: "kk",
          note: "Nationality nouns are masculine even when the person is a woman." },

        { t: "match", q: "Match the nationalities",
          pairs: [["Frakki", "a Frenchman"], ["Svíi", "a Swede"], ["Dani", "a Dane"],
                  ["Norðmaður", "a Norwegian"], ["Þjóðverji", "a German"]] },

        { t: "build", q: "Kári is Icelandic.", a: "Kári er íslenskur",
          extra: ["íslensk", "frá", "Íslendingi"],
          note: "Kári is masculine, so the adjective keeps its -ur." },

        { t: "fill", q: "Make the adjective agree.",
          sentence: "Anna er ___ .", base: "danskur",
          opts: ["danskur", "dönsk", "danskt"], a: "dönsk",
          case: "NF", why: "feminine of danskur; the a bends to ö", mode: "choice",
          tags: ["adj:agreement", "u-shift"] },

        { t: "type", q: "Type “I am not French.” (said by a man)",
          a: "Ég er ekki franskur", hint: "ekki sits right after the verb",
          note: "Ekki comes after the first verb, never before it." },

        { t: "listen", speak: "Hann er Þjóðverji.", q: "What did you hear?", mode: "choice",
          opts: ["Hann er Þjóðverji.", "Hún er þýsk.", "Hann er frá Þýskalandi."],
          a: "Hann er Þjóðverji.",
          note: "All three are good Icelandic. Only one is the noun." },

        { t: "choice", q: "Which sentence is correct?",
          opts: ["Mira er pólskur.", "Mira er pólsk.", "Mira er pólskt.", "Mira er Pólland."],
          a: "Mira er pólsk.",
          note: "A person is never a country." },

        { t: "gender", word: "Svíþjóð", a: "kvk",
          note: "It ends in þjóð, and þjóð is feminine." },

        { t: "speak", is: "Ég er ekki Íslendingur.", en: "I'm not an Icelander.",
          tip: "Ekki is short and flat — do not lean on it." },

        { t: "table", q: "Fill in the missing person-words.",
          cols: ["land", "manneskja"],
          rows: [
            { label: "Ísland", cells: ["Íslendingur"], blank: [0] },
            { label: "Pólland", cells: ["Pólverji"], blank: [] },
            { label: "Svíþjóð", cells: ["Svíi"], blank: [0] },
            { label: "Noregur", cells: ["Norðmaður"], blank: [] }
          ] }
      ]
    },

    // ─────────────────────────────────────────────────────────── l3
    {
      n: 3,
      id: "u02l3",
      kind: "grammar",
      title: "Ég tala, þú talar",
      en: "The present tense",
      goal: "Conjugate the two big weak classes — and the verbs that cheat.",
      minutes: 12,
      icon: "🔤",
      teach: [
        {
          h: "Cut the -a, add an ending",
          p: "Take the infinitive, drop the final -a, hang an ending on what is left. Two patterns cover most verbs: the -a group and the -i group. They differ by a single vowel.",
          table: {
            cols: ["", "tala (-a group)", "læra (-i group)"],
            rows: [
              ["ég", "tala", "læri"],
              ["þú", "talar", "lærir"],
              ["hann / hún", "talar", "lærir"],
              ["við", "tölum", "lærum"],
              ["þið", "talið", "lærið"],
              ["þeir / þær / þau", "tala", "læra"]
            ]
          },
          tip: "þú and hann/hún are always identical. That is two forms you get free."
        },
        {
          h: "The u that bends an a",
          p: "Look at við tölum. The ending -um pulls every a in the word over to ö. Nouns do the same thing: dagur → dögum.",
          ex: [
            ["Ég tala íslensku.", "I speak Icelandic."],
            ["Við tölum íslensku.", "We speak Icelandic."]
          ]
        },
        {
          h: "Three that refuse to play along",
          p: "búa, vinna and vera go their own way. In the ég form búa and vinna drop the ending altogether — and then þú and hann take -ur.",
          table: {
            cols: ["", "búa", "vinna", "vera"],
            rows: [
              ["ég", "bý", "vinn", "er"],
              ["þú", "býrð", "vinnur", "ert"],
              ["hann / hún", "býr", "vinnur", "er"],
              ["við", "búum", "vinnum", "erum"],
              ["þið", "búið", "vinnið", "eruð"],
              ["þeir / þær / þau", "búa", "vinna", "eru"]
            ]
          },
          tip: "Bare ég form → -ur for the next two. That rule saves you every time."
        },
        {
          h: "Questions cost nothing",
          p: "Swap the verb and the subject. Nothing else moves, no extra word appears.",
          ex: [
            ["Þú talar íslensku.", "You speak Icelandic."],
            ["Talar þú íslensku?", "Do you speak Icelandic?"]
          ]
        }
      ],
      vocab: ["tala", "læra", "búa", "vinna", "kenna", "skilja", "íslenska", "enska"],
      items: [
        { t: "table", q: "Complete the present tense of tala.",
          cols: ["", "tala"],
          rows: [
            { label: "ég", cells: ["tala"], blank: [] },
            { label: "þú", cells: ["talar"], blank: [0] },
            { label: "hún", cells: ["talar"], blank: [] },
            { label: "við", cells: ["tölum"], blank: [0] },
            { label: "þið", cells: ["talið"], blank: [] },
            { label: "þau", cells: ["tala"], blank: [] }
          ] },

        { t: "table", q: "Complete the present tense of læra.",
          cols: ["", "læra"],
          rows: [
            { label: "ég", cells: ["læri"], blank: [0] },
            { label: "þú", cells: ["lærir"], blank: [] },
            { label: "hann", cells: ["lærir"], blank: [] },
            { label: "við", cells: ["lærum"], blank: [0] },
            { label: "þið", cells: ["lærið"], blank: [] },
            { label: "þeir", cells: ["læra"], blank: [] }
          ] },

        { t: "fill", q: "Put the verb into the þú form.",
          sentence: "Þú ___ íslensku.", base: "tala", a: "talar",
          why: "the -a group takes -ar for þú and hann/hún", mode: "type",
          tags: ["verb:weak-a"] },

        { t: "fill", q: "Which form goes with við?",
          sentence: "Við ___ í Reykjavík.", base: "búa",
          opts: ["búum", "búa", "bý", "búið"], a: "búum",
          why: "við always ends in -um, in every verb in the language", mode: "choice",
          tags: ["verb:irregular"] },

        { t: "fill", q: "Mira is a nurse.",
          sentence: "Mira ___ á spítala.", base: "vinna", a: "vinnur",
          why: "vinna has a bare ég form (vinn), so þú and hún take -ur", mode: "type",
          tags: ["verb:strong"] },

        { t: "fill", q: "Now the ég form.",
          sentence: "Ég ___ í Reykjavík.", base: "búa", a: "bý",
          why: "búa is irregular: bý, býrð, býr", mode: "type",
          tags: ["verb:irregular"] },

        { t: "fill", q: "Where did the j go?",
          sentence: "Kári ___ ekki ensku.", base: "skilja",
          opts: ["skilur", "skil", "skiljum", "skilja"], a: "skilur",
          why: "the j drops out in the singular: ég skil, hann skilur", mode: "choice",
          tags: ["verb:ja-class"] },

        { t: "build", q: "Do you speak Icelandic?", a: "Talar þú íslensku",
          extra: ["talarðu", "ég", "tala"],
          note: "Verb first, subject second — that is the whole question rule." },

        { t: "choice", q: "Which is the við form of vinna?",
          opts: ["vinnum", "vinnur", "vinn", "vinnið"], a: "vinnum",
          note: "-um for við, -ið for þið. No exceptions worth worrying about." },

        { t: "type", q: "Type “I am learning Icelandic.” (simple present)",
          a: "Ég læri íslensku", hint: "læra is an -i verb",
          note: "Icelandic uses the plain present where English says “am learning”." },

        { t: "listen", speak: "Hún býr í Póllandi.", mode: "type", a: "Hún býr í Póllandi",
          q: "Type what you hear." },

        { t: "choice", q: "Ég ___ ensku í skóla. (kenna)",
          opts: ["kenni", "kenn", "kennar", "kennir"], a: "kenni",
          note: "kenna is an -i verb: kenni, kennir, kennir." },

        { t: "speak", is: "Við tölum saman á íslensku.", en: "We talk to each other in Icelandic.",
          tip: "tölum, not talum — the -um ending bends the a to ö." }
      ]
    },

    // ─────────────────────────────────────────────────────────── l4
    {
      n: 4,
      id: "u02l4",
      kind: "lesson",
      title: "Hvað gerir þú?",
      en: "What do you do?",
      goal: "Say your job and where you work.",
      minutes: 10,
      icon: "🧰",
      teach: [
        {
          h: "No little word before the job",
          p: "English needs a in front of a job. Icelandic drops it completely and sounds blunter for it.",
          ex: [
            ["Ég er kennari.", "I'm a teacher."],
            ["Hún er læknir.", "She's a doctor."],
            ["Kári er bílstjóri.", "Kári is a driver."]
          ],
          tip: "Never build “ég er einn kennari”. It is not a sentence."
        },
        {
          h: "Job words are built, not memorised",
          p: "Pull the ending off and you usually see the verb or the field of study underneath.",
          table: {
            cols: ["ending", "what it adds", "example"],
            rows: [
              ["-ari", "the person who does it", "leikari (leika, to act)"],
              ["-fræðingur", "the person who studied it", "lögfræðingur (lögfræði, law)"],
              ["-maður / -kona", "someone in that line of work", "sjómaður, söngkona"],
              ["-stjóri", "someone who runs something", "bílstjóri, framkvæmdastjóri"]
            ]
          }
        },
        {
          h: "The five questions",
          table: {
            cols: ["orð", "English", "dæmi"],
            rows: [
              ["hvað", "what", "Hvað gerir þú?"],
              ["hver", "who", "Hver er þetta?"],
              ["hvar", "where", "Hvar vinnur þú?"],
              ["hvaðan", "from where", "Hvaðan ert þú?"],
              ["hvernig", "how", "Hvernig hefur þú það?"]
            ]
          },
          tip: "All of them start with hv-, and all of them sound like kv-."
        },
        {
          h: "Where you work",
          p: "hjá + dative names your employer. á or í + dative names the building.",
          ex: [
            ["Ég vinn hjá stóru fyrirtæki.", "I work for a big company."],
            ["Hún vinnur á spítala.", "She works at a hospital."],
            ["Hann vinnur í búð.", "He works in a shop."]
          ]
        }
      ],
      vocab: ["kennari", "læknir", "nemandi", "bílstjóri", "sjómaður", "hjúkrunarfræðingur",
              "leikari", "kokkur", "söngkona", "starf", "spítali", "búð", "háskóli", "hjá", "hvernig", "hver"],
      items: [
        { t: "choice", q: "How do you say “I'm a teacher”?",
          opts: ["Ég er kennari.", "Ég er einn kennari.", "Ég er kennarinn.", "Ég kennari er."],
          a: "Ég er kennari.",
          note: "No article at all after vera. Kennarinn would mean “the teacher”." },

        { t: "match", q: "Match the jobs",
          pairs: [["læknir", "doctor"], ["kokkur", "cook"], ["sjómaður", "fisherman"],
                  ["bílstjóri", "driver"], ["leikari", "actor"], ["kennari", "teacher"]] },

        { t: "gender", word: "söngkona", a: "kvk",
          note: "-kona is feminine; its partner ending -maður is masculine." },

        { t: "gender", word: "starf", a: "hk",
          note: "starf, starfið. In the plural the a bends: störf." },

        { t: "fill", q: "Which preposition goes with a hospital?",
          sentence: "Mira vinnur ___ spítala.", base: "á",
          opts: ["á", "í", "frá", "hjá"], a: "á",
          case: "ÞGF", why: "hospitals take á; shops take í", mode: "choice",
          tags: ["prep:á"] },

        { t: "fill", q: "Put the workplace into the dative.",
          sentence: "Hann vinnur á ___ .", base: "spítali", a: "spítala",
          case: "ÞGF", why: "á + dative for standing still somewhere", mode: "type",
          tags: ["prep:á", "case:dat"] },

        { t: "build", q: "What do you do?", a: "Hvað gerir þú",
          extra: ["hvar", "ert", "hvaðan"] },

        { t: "build", q: "Where do you work?", a: "Hvar vinnur þú",
          extra: ["hvaðan", "vinn", "hvernig"],
          note: "vinn is the ég form. After hvar þú you need vinnur." },

        { t: "type", q: "Type “She is a nurse.”", a: "Hún er hjúkrunarfræðingur",
          hint: "hjúkrunar + fræðingur",
          note: "One long word, no article." },

        { t: "listen", speak: "Ég er nemandi í háskóla.", q: "What did you hear?", mode: "choice",
          opts: ["Ég er nemandi í háskóla.", "Ég er kennari í háskóla.", "Ég er læknir á spítala."],
          a: "Ég er nemandi í háskóla." },

        { t: "choice", q: "Which question asks who somebody is?",
          opts: ["Hver er þetta?", "Hvað er þetta?", "Hvar er þetta?", "Hvaðan er þetta?"],
          a: "Hver er þetta?",
          note: "hver = who, hvað = what. One letter, whole different question." },

        { t: "speak", is: "Ég er hjúkrunarfræðingur.", en: "I'm a nurse.",
          tip: "Say it in two chunks: HJÚKRunar-fræðingur. The stress never leaves the front." }
      ]
    },

    // ─────────────────────────────────────────────────────────── l5
    {
      n: 5,
      id: "u02l5",
      kind: "story",
      title: "Á strætóstoppistöðinni",
      en: "At the bus stop",
      goal: "Follow a whole conversation about origins and jobs.",
      minutes: 11,
      icon: "🚌",
      teach: [
        {
          h: "Two strangers, one shelter",
          p: "Wind, a Tuesday, and a bus that is late. Read it once for the story, once for the verb endings."
        },
        {
          h: "Listen for these",
          list: [
            "frá + dative: frá Kanada, frá Póllandi",
            "bý / býrð / býr — búa in the singular",
            "vinn / vinnur — vinna in the singular",
            "a job after er with nothing in front of it"
          ]
        }
      ],
      story: {
        title: "Á strætóstoppistöðinni",
        lines: [
          { sp: "Tom", is: "Fyrirgefðu, talar þú ensku?", en: "Excuse me, do you speak English?" },
          { sp: "Mira", is: "Svolítið. En ég tala líka íslensku.", en: "A little. But I speak Icelandic too." },
          { sp: "Tom", is: "Frábært. Ég heiti Tom og ég er frá Kanada.", en: "Great. My name is Tom and I'm from Canada." },
          { sp: "Mira", is: "Ég heiti Mira. Ég er pólsk.", en: "I'm Mira. I'm Polish." },
          { sp: "Tom", is: "Býrð þú í Reykjavík?", en: "Do you live in Reykjavík?" },
          { sp: "Mira", is: "Já. Ég bý hér og ég vinn á spítala. Ég er hjúkrunarfræðingur.", en: "Yes. I live here and I work at a hospital. I'm a nurse." },
          { sp: "Mira", is: "En þú? Hvað gerir þú?", en: "And you? What do you do?" },
          { sp: "Tom", is: "Ég er nemandi. Ég læri íslensku í háskóla.", en: "I'm a student. I study Icelandic at the university." },
          { sp: "Mira", is: "Og hvernig gengur?", en: "And how's it going?" },
          { sp: "Tom", is: "Ágætlega. En veðrið er ekki gott.", en: "Fine. But the weather isn't good." },
          { sp: "Mira", is: "Veðrið er alltaf svona á þriðjudögum.", en: "The weather is always like this on Tuesdays." },
          { sp: "Kári", is: "Strætó er kominn. Komið þið?", en: "The bus is here. Are you two coming?" }
        ],
        glossary: [
          ["fyrirgefðu", "excuse me"],
          ["svolítið", "a little"],
          ["líka", "also, too"],
          ["frábært", "great"],
          ["ágætlega", "fine, well enough"],
          ["veðrið", "the weather"],
          ["svona", "like this"],
          ["strætó", "the city bus"],
          ["hvernig gengur?", "how's it going?"]
        ]
      },
      vocab: ["hjúkrunarfræðingur", "nemandi", "spítali", "háskóli", "búa", "læra", "tala"],
      items: [
        { t: "choice", q: "Where is Tom from?",
          opts: ["Kanada", "Pólland", "Ísland", "Ítalía"], a: "Kanada" },

        { t: "choice", q: "What does Mira do?",
          opts: ["Hún er hjúkrunarfræðingur.", "Hún er kennari.", "Hún er nemandi.", "Hún er bílstjóri."],
          a: "Hún er hjúkrunarfræðingur." },

        { t: "fill", q: "Mira's country, the way she would say it.",
          sentence: "Mira er frá ___ .", base: "Pólland", a: "Póllandi",
          case: "ÞGF", why: "frá + dative", mode: "type",
          tags: ["prep:frá", "case:dat"] },

        { t: "fill", q: "What does Tom do at the university?",
          sentence: "Tom ___ íslensku í háskóla.", base: "læra",
          opts: ["læri", "lærir", "lærum", "læra"], a: "lærir",
          why: "hann and hún take -ir in the -i group", mode: "choice",
          tags: ["verb:weak-i"] },

        { t: "build", q: "Do you live in Reykjavík?", a: "Býrð þú í Reykjavík",
          extra: ["bý", "hvar", "ert"],
          note: "bý is the ég form. For þú you need býrð." },

        { t: "type", q: "Type “I work at a hospital.”", a: "Ég vinn á spítala",
          hint: "the ég form of vinna has no ending",
          note: "á + dative: spítali becomes spítala." },

        { t: "listen", speak: "Ég er nemandi.", q: "What did you hear?", mode: "choice",
          opts: ["Ég er nemandi.", "Ég er kennari.", "Ég er læknir."], a: "Ég er nemandi." },

        { t: "match", q: "Match the words from the story",
          pairs: [["fyrirgefðu", "excuse me"], ["svolítið", "a little"], ["frábært", "great"],
                  ["ágætlega", "fine"], ["svona", "like this"]] },

        { t: "gender", word: "spítali", a: "kk",
          note: "Weak masculine nouns end in -i: spítali, skóli, kennari." },

        { t: "speak", is: "Fyrirgefðu, talar þú ensku?", en: "Excuse me, do you speak English?",
          tip: "Fyrirgefðu runs together as one word: FYR-ir-gefðu." },

        { t: "type", q: "Type “The weather isn't good.”", a: "Veðrið er ekki gott",
          hint: "veður is neuter",
          note: "Neuter subject, neuter adjective: gott, not góður." },

        { t: "choice", q: "Who turns up at the end?",
          opts: ["Kári", "Tom", "Mira", "Anna"], a: "Kári",
          note: "Kári drives the bus. He will be back." }
      ]
    },

    // ─────────────────────────────────────────────────────────── l6
    {
      n: 6,
      id: "u02l6",
      kind: "checkpoint",
      title: "Hvaðan, hvað, hvar",
      en: "Unit 2 checkpoint",
      goal: "Prove the whole unit sticks.",
      minutes: 12,
      icon: "🏁",
      teach: [
        {
          h: "What you now control",
          list: [
            "frá + dative for where you come from",
            "country names and their genders",
            "person-words in -ingur, -i, -verji, -maður and -kona",
            "the -a and -i present tense, plus bý, vinn and er",
            "a job after vera with nothing in front of it",
            "hvað, hver, hvar, hvaðan, hvernig"
          ]
        }
      ],
      vocab: ["Spánn", "tungumál", "kokkur", "enska", "íslenska", "frá", "hvaðan"],
      items: [
        { t: "fill", q: "Denmark, in the dative.",
          sentence: "Hann er frá ___ .", base: "Danmörk",
          opts: ["Danmörk", "Danmörku", "Danmerkur"], a: "Danmörku",
          case: "ÞGF", why: "frá + dative", mode: "choice",
          tags: ["prep:frá", "case:dat"] },

        { t: "fill", q: "Mind the vowel.",
          sentence: "Við ___ íslensku heima.", base: "tala", a: "tölum",
          why: "the -um ending bends every a in the word to ö", mode: "type",
          tags: ["verb:weak-a", "u-shift"] },

        { t: "fill", q: "búa, third person singular.",
          sentence: "Mira ___ í Reykjavík.", base: "búa", a: "býr",
          why: "búa is irregular: bý, býrð, býr", mode: "type",
          tags: ["verb:irregular"] },

        { t: "gender", word: "Ítalía", a: "kvk",
          note: "Country names ending in -a are feminine: Ítalía, Ástralía, Kína." },

        { t: "gender", word: "tungumál", a: "hk",
          note: "mál is neuter, so every compound ending in -mál is too." },

        { t: "choice", q: "Which is correct?",
          opts: ["Ég er læknir.", "Ég er einn læknir.", "Ég er læknirinn er.", "Ég læknir."],
          a: "Ég er læknir.",
          note: "A job after vera stands alone, with no article." },

        { t: "choice", q: "Hvaðan ert þú? asks about …",
          opts: ["where you come from", "your job", "your name", "the weather"],
          a: "where you come from" },

        { t: "build", q: "I'm not a teacher.", a: "Ég er ekki kennari",
          extra: ["kennarinn", "hún", "ert"],
          note: "ekki goes straight after er." },

        { t: "build", q: "Where do you live?", a: "Hvar býrð þú",
          extra: ["hvaðan", "bý", "ert"] },

        { t: "match", q: "Match the countries",
          pairs: [["Þýskaland", "Germany"], ["Svíþjóð", "Sweden"], ["Frakkland", "France"],
                  ["Spánn", "Spain"], ["Noregur", "Norway"]] },

        { t: "type", q: "Type “She works at a hospital.”", a: "Hún vinnur á spítala",
          hint: "vinna: vinn, vinnur, vinnur" },

        { t: "listen", speak: "Hvað gerir þú?", mode: "type", a: "Hvað gerir þú",
          q: "Type what you hear." },

        { t: "table", q: "Complete the present tense of vinna.",
          cols: ["", "vinna"],
          rows: [
            { label: "ég", cells: ["vinn"], blank: [0] },
            { label: "þú", cells: ["vinnur"], blank: [] },
            { label: "hún", cells: ["vinnur"], blank: [] },
            { label: "við", cells: ["vinnum"], blank: [0] },
            { label: "þið", cells: ["vinnið"], blank: [] },
            { label: "þau", cells: ["vinna"], blank: [] }
          ] },

        { t: "choice", q: "Guðrún er frá Íslandi. Hún er …",
          opts: ["íslensk", "íslenskur", "íslenskt", "Ísland"], a: "íslensk",
          note: "Feminine subject, feminine adjective." }
      ]
    }
  ]
};

export const vocab = [
  // ── countries ─────────────────────────────────────────────
  { w: "Ísland", en: "Iceland", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Ísland", "Ísland", "Íslandi", "Íslands"], pl: null },
    ex: { is: "Ég bý á Íslandi.", en: "I live in Iceland." } },

  { w: "Noregur", en: "Norway", pos: "noun", g: "kk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Noregur", "Noreg", "Noregi", "Noregs"], pl: null },
    ex: { is: "Hann vinnur í Noregi.", en: "He works in Norway." } },

  { w: "Danmörk", en: "Denmark", pos: "noun", g: "kvk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Danmörk", "Danmörku", "Danmörku", "Danmerkur"], pl: null },
    ex: { is: "Anna er frá Danmörku.", en: "Anna is from Denmark." } },

  { w: "Svíþjóð", en: "Sweden", pos: "noun", g: "kvk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Svíþjóð", "Svíþjóð", "Svíþjóð", "Svíþjóðar"], pl: null },
    ex: { is: "Svíþjóð er stórt land.", en: "Sweden is a big country." } },

  { w: "Þýskaland", en: "Germany", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Þýskaland", "Þýskaland", "Þýskalandi", "Þýskalands"], pl: null },
    ex: { is: "Hann er frá Þýskalandi.", en: "He is from Germany." } },

  { w: "Pólland", en: "Poland", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Pólland", "Pólland", "Póllandi", "Póllands"], pl: null },
    ex: { is: "Mira er frá Póllandi.", en: "Mira is from Poland." } },

  { w: "Frakkland", en: "France", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Frakkland", "Frakkland", "Frakklandi", "Frakklands"], pl: null },
    ex: { is: "Hún býr í Frakklandi.", en: "She lives in France." } },

  { w: "Ítalía", en: "Italy", pos: "noun", g: "kvk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Ítalía", "Ítalíu", "Ítalíu", "Ítalíu"], pl: null },
    ex: { is: "Kokkurinn er frá Ítalíu.", en: "The cook is from Italy." } },

  { w: "Spánn", en: "Spain", pos: "noun", g: "kk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Spánn", "Spán", "Spáni", "Spánar"], pl: null },
    ex: { is: "Ég vinn á Spáni.", en: "I work in Spain." } },

  { w: "Kanada", en: "Canada", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["Kanada", "Kanada", "Kanada", "Kanada"], pl: null },
    ex: { is: "Tom er frá Kanada.", en: "Tom is from Canada." } },

  { w: "land", en: "country, land", pos: "noun", g: "hk", topic: "countries", unit: 2, cefr: "A1",
    forms: { sg: ["land", "land", "landi", "lands"], pl: ["lönd", "lönd", "löndum", "landa"] },
    ex: { is: "Ísland er lítið land.", en: "Iceland is a small country." } },

  // ── nationalities: the person ─────────────────────────────
  { w: "Íslendingur", en: "an Icelander", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Íslendingur", "Íslending", "Íslendingi", "Íslendings"],
             pl: ["Íslendingar", "Íslendinga", "Íslendingum", "Íslendinga"] },
    ex: { is: "Kári er Íslendingur.", en: "Kári is an Icelander." } },

  { w: "Norðmaður", en: "a Norwegian", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Norðmaður", "Norðmann", "Norðmanni", "Norðmanns"],
             pl: ["Norðmenn", "Norðmenn", "Norðmönnum", "Norðmanna"] },
    ex: { is: "Bílstjórinn er Norðmaður.", en: "The driver is Norwegian." } },

  { w: "Dani", en: "a Dane", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Dani", "Dana", "Dana", "Dana"], pl: ["Danir", "Dani", "Dönum", "Dana"] },
    ex: { is: "Anna er Dani, ekki Svíi.", en: "Anna is a Dane, not a Swede." } },

  { w: "Svíi", en: "a Swede", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Svíi", "Svía", "Svía", "Svía"], pl: ["Svíar", "Svía", "Svíum", "Svía"] },
    ex: { is: "Hann er Svíi frá Stokkhólmi.", en: "He is a Swede from Stockholm." } },

  { w: "Þjóðverji", en: "a German", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Þjóðverji", "Þjóðverja", "Þjóðverja", "Þjóðverja"],
             pl: ["Þjóðverjar", "Þjóðverja", "Þjóðverjum", "Þjóðverja"] },
    ex: { is: "Kennarinn minn er Þjóðverji.", en: "My teacher is German." } },

  { w: "Pólverji", en: "a Pole", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Pólverji", "Pólverja", "Pólverja", "Pólverja"],
             pl: ["Pólverjar", "Pólverja", "Pólverjum", "Pólverja"] },
    ex: { is: "Mira er Pólverji.", en: "Mira is Polish." } },

  { w: "Frakki", en: "a Frenchman", pos: "noun", g: "kk", topic: "nationalities", unit: 2, cefr: "A1",
    forms: { sg: ["Frakki", "Frakka", "Frakka", "Frakka"], pl: ["Frakkar", "Frakka", "Frökkum", "Frakka"] },
    ex: { is: "Kokkurinn er Frakki.", en: "The cook is French." } },

  // ── nationalities: the adjective ──────────────────────────
  { w: "íslenskur", en: "Icelandic", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["íslenskur", "íslensk", "íslenskt"] },
    ex: { is: "Kári er íslenskur.", en: "Kári is Icelandic." } },

  { w: "danskur", en: "Danish", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["danskur", "dönsk", "danskt"] },
    ex: { is: "Þetta er danskt nafn.", en: "That is a Danish name." } },

  { w: "þýskur", en: "German", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["þýskur", "þýsk", "þýskt"] },
    ex: { is: "Hún er þýsk.", en: "She is German." } },

  { w: "pólskur", en: "Polish", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["pólskur", "pólsk", "pólskt"] },
    ex: { is: "Mira er pólsk.", en: "Mira is Polish." } },

  { w: "franskur", en: "French", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["franskur", "frönsk", "franskt"] },
    ex: { is: "París er frönsk borg.", en: "Paris is a French city." } },

  { w: "enskur", en: "English", pos: "adj", topic: "nationalities", unit: 2, cefr: "A1",
    decl: { nom: ["enskur", "ensk", "enskt"] },
    ex: { is: "Tom er ekki enskur.", en: "Tom isn't English." } },

  // ── languages ─────────────────────────────────────────────
  { w: "íslenska", en: "Icelandic (the language)", pos: "noun", g: "kvk", topic: "languages", unit: 2, cefr: "A1",
    forms: { sg: ["íslenska", "íslensku", "íslensku", "íslensku"], pl: null },
    ex: { is: "Ég tala íslensku.", en: "I speak Icelandic." } },

  { w: "enska", en: "English (the language)", pos: "noun", g: "kvk", topic: "languages", unit: 2, cefr: "A1",
    forms: { sg: ["enska", "ensku", "ensku", "ensku"], pl: null },
    ex: { is: "Hún kennir ensku.", en: "She teaches English." } },

  { w: "tungumál", en: "language", pos: "noun", g: "hk", topic: "languages", unit: 2, cefr: "A1",
    forms: { sg: ["tungumál", "tungumál", "tungumáli", "tungumáls"],
             pl: ["tungumál", "tungumál", "tungumálum", "tungumála"] },
    ex: { is: "Íslenska er erfitt tungumál.", en: "Icelandic is a difficult language." } },

  // ── verbs ─────────────────────────────────────────────────
  { w: "tala", en: "to speak, to talk", pos: "verb", topic: "actions", unit: 2, cefr: "A1",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["tala", "talar", "talar", "tölum", "talið", "tala"],
            past: ["talaði", "talaðir", "talaði", "töluðum", "töluðuð", "töluðu"], pp: "talað" },
    ex: { is: "Talar þú íslensku?", en: "Do you speak Icelandic?" } },

  { w: "læra", en: "to learn, to study", pos: "verb", topic: "study", unit: 2, cefr: "A1",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["læri", "lærir", "lærir", "lærum", "lærið", "læra"],
            past: ["lærði", "lærðir", "lærði", "lærðum", "lærðuð", "lærðu"], pp: "lært" },
    ex: { is: "Ég læri íslensku.", en: "I'm learning Icelandic." } },

  { w: "búa", en: "to live, to reside", pos: "verb", topic: "actions", unit: 2, cefr: "A1",
    gov: "none", vclass: "irregular",
    conj: { pres: ["bý", "býrð", "býr", "búum", "búið", "búa"],
            past: ["bjó", "bjóst", "bjó", "bjuggum", "bjugguð", "bjuggu"], pp: "búið" },
    ex: { is: "Hvar býrð þú?", en: "Where do you live?" } },

  { w: "vinna", en: "to work", pos: "verb", topic: "work", unit: 2, cefr: "A1",
    gov: "none", vclass: "strong",
    conj: { pres: ["vinn", "vinnur", "vinnur", "vinnum", "vinnið", "vinna"],
            past: ["vann", "vannst", "vann", "unnum", "unnuð", "unnu"], pp: "unnið" },
    ex: { is: "Ég vinn í búð.", en: "I work in a shop." } },

  { w: "kenna", en: "to teach", pos: "verb", topic: "study", unit: 2, cefr: "A1",
    gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["kenni", "kennir", "kennir", "kennum", "kennið", "kenna"],
            past: ["kenndi", "kenndir", "kenndi", "kenndum", "kennduð", "kenndu"], pp: "kennt" },
    ex: { is: "Hún kennir ensku.", en: "She teaches English." } },

  { w: "skilja", en: "to understand", pos: "verb", topic: "actions", unit: 2, cefr: "A1",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["skil", "skilur", "skilur", "skiljum", "skiljið", "skilja"],
            past: ["skildi", "skildir", "skildi", "skildum", "skilduð", "skildu"], pp: "skilið" },
    ex: { is: "Ég skil ekki.", en: "I don't understand." } },

  // ── jobs ──────────────────────────────────────────────────
  { w: "kennari", en: "teacher", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["kennari", "kennara", "kennara", "kennara"],
             pl: ["kennarar", "kennara", "kennurum", "kennara"] },
    ex: { is: "Guðrún er kennari.", en: "Guðrún is a teacher." } },

  { w: "læknir", en: "doctor", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["læknir", "lækni", "lækni", "læknis"], pl: ["læknar", "lækna", "læknum", "lækna"] },
    ex: { is: "Systir mín er læknir.", en: "My sister is a doctor." } },

  { w: "nemandi", en: "student", pos: "noun", g: "kk", topic: "study", unit: 2, cefr: "A1",
    forms: { sg: ["nemandi", "nemanda", "nemanda", "nemanda"],
             pl: ["nemendur", "nemendur", "nemendum", "nemenda"] },
    ex: { is: "Tom er nemandi í háskóla.", en: "Tom is a student at the university." } },

  { w: "hjúkrunarfræðingur", en: "nurse", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["hjúkrunarfræðingur", "hjúkrunarfræðing", "hjúkrunarfræðingi", "hjúkrunarfræðings"],
             pl: ["hjúkrunarfræðingar", "hjúkrunarfræðinga", "hjúkrunarfræðingum", "hjúkrunarfræðinga"] },
    ex: { is: "Mira er hjúkrunarfræðingur.", en: "Mira is a nurse." } },

  { w: "bílstjóri", en: "driver", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["bílstjóri", "bílstjóra", "bílstjóra", "bílstjóra"],
             pl: ["bílstjórar", "bílstjóra", "bílstjórum", "bílstjóra"] },
    ex: { is: "Kári er bílstjóri.", en: "Kári is a driver." } },

  { w: "sjómaður", en: "fisherman", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["sjómaður", "sjómann", "sjómanni", "sjómanns"],
             pl: ["sjómenn", "sjómenn", "sjómönnum", "sjómanna"] },
    ex: { is: "Pabbi hans er sjómaður.", en: "His dad is a fisherman." } },

  { w: "leikari", en: "actor", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["leikari", "leikara", "leikara", "leikara"],
             pl: ["leikarar", "leikara", "leikurum", "leikara"] },
    ex: { is: "Hann er leikari í Reykjavík.", en: "He is an actor in Reykjavík." } },

  { w: "kokkur", en: "cook, chef", pos: "noun", g: "kk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["kokkur", "kokk", "kokki", "kokks"], pl: ["kokkar", "kokka", "kokkum", "kokka"] },
    ex: { is: "Kokkurinn er franskur.", en: "The cook is French." } },

  { w: "söngkona", en: "singer (woman)", pos: "noun", g: "kvk", topic: "jobs", unit: 2, cefr: "A1",
    forms: { sg: ["söngkona", "söngkonu", "söngkonu", "söngkonu"],
             pl: ["söngkonur", "söngkonur", "söngkonum", "söngkvenna"] },
    ex: { is: "Mamma hans er söngkona.", en: "His mother is a singer." } },

  // ── work and study places ─────────────────────────────────
  { w: "starf", en: "job, position", pos: "noun", g: "hk", topic: "work", unit: 2, cefr: "A1",
    forms: { sg: ["starf", "starf", "starfi", "starfs"], pl: ["störf", "störf", "störfum", "starfa"] },
    ex: { is: "Þetta er gott starf.", en: "That is a good job." } },

  { w: "spítali", en: "hospital", pos: "noun", g: "kk", topic: "places", unit: 2, cefr: "A1",
    forms: { sg: ["spítali", "spítala", "spítala", "spítala"],
             pl: ["spítalar", "spítala", "spítölum", "spítala"] },
    ex: { is: "Hún vinnur á spítala.", en: "She works at a hospital." } },

  { w: "búð", en: "shop", pos: "noun", g: "kvk", topic: "places", unit: 2, cefr: "A1",
    forms: { sg: ["búð", "búð", "búð", "búðar"], pl: ["búðir", "búðir", "búðum", "búða"] },
    ex: { is: "Ég vinn í búð.", en: "I work in a shop." } },

  { w: "háskóli", en: "university", pos: "noun", g: "kk", topic: "study", unit: 2, cefr: "A1",
    forms: { sg: ["háskóli", "háskóla", "háskóla", "háskóla"],
             pl: ["háskólar", "háskóla", "háskólum", "háskóla"] },
    ex: { is: "Hann lærir íslensku í háskóla.", en: "He studies Icelandic at university." } },

  // ── function words ────────────────────────────────────────
  { w: "frá", en: "from", pos: "prep", topic: "prepositions", unit: 2, cefr: "A1", gov: "ÞGF",
    ex: { is: "Hún kemur frá Ítalíu.", en: "She comes from Italy." } },

  { w: "hjá", en: "at, with (someone)", pos: "prep", topic: "prepositions", unit: 2, cefr: "A1", gov: "ÞGF",
    ex: { is: "Ég vinn hjá stóru fyrirtæki.", en: "I work for a big company." } },

  { w: "hvaðan", en: "from where", pos: "adv", topic: "questions", unit: 2, cefr: "A1",
    ex: { is: "Hvaðan ert þú?", en: "Where are you from?" } },

  { w: "hvernig", en: "how", pos: "adv", topic: "questions", unit: 2, cefr: "A1",
    ex: { is: "Hvernig hefur þú það?", en: "How are you?" } },

  { w: "hver", en: "who, which", pos: "pron", topic: "questions", unit: 2, cefr: "A1",
    ex: { is: "Hver er þetta?", en: "Who is that?" } }
];

export default unit;
