// Unit 17 — Sögur og saga / Stories and history
// Strong verbs in the past, the ablaut series, the -st ending on þú, and narrative V2 word order.

export const unit = {
  id: 17,
  slug: "u17",
  title: "Sögur og saga",
  en: "Stories and history",
  cefr: "A2.2",
  icon: "📜",
  blurb: "Tell a story in the past tense, from the first settlers to the last puffin.",
  canDo: [
    "Talk about Icelandic history, settlement and sagas",
    "Put strong verbs into the past and recognise the ablaut series",
    "Say what you did with the -st ending: þú fórst, þú komst, þú gafst",
    "Chain events with fyrst, síðan, svo and loksins, keeping the verb in second place"
  ],
  lessons: [

    {
      n: 1,
      id: "u17l1",
      kind: "lesson",
      title: "Fyrir mörgum öldum",
      en: "Many centuries ago",
      goal: "Name the pieces of Icelandic history and set a story in the past.",
      minutes: 9,
      icon: "🛶",
      teach: [
        {
          h: "One word, two jobs",
          p: "Saga means both story and history. Icelanders never had to choose between the two, and neither do you. Íslandssaga is the history of Iceland; þjóðsaga is a folk tale your grandmother swears is true.",
          ex: [
            ["Hún sagði okkur langa sögu.", "She told us a long story."],
            ["Við lærum sögu Íslands.", "We are studying the history of Iceland."]
          ],
          tip: "Saga is feminine and goes saga, sögu, sögu, sögu. The vowel darkens the moment you leave the nominative."
        },
        {
          h: "The past you already own",
          p: "Before any new verbs, remember that vera and hafa are already past-tense ready. Every story you tell leans on them.",
          table: {
            cols: ["", "vera", "hafa"],
            rows: [
              ["ég", "var", "hafði"],
              ["þú", "varst", "hafðir"],
              ["hann", "var", "hafði"],
              ["við", "vorum", "höfðum"],
              ["þið", "voruð", "höfðuð"],
              ["þeir", "voru", "höfðu"]
            ]
          }
        },
        {
          h: "Setting the scene",
          p: "Two openers do most of the work in Icelandic storytelling: einu sinni for a tale, and fyrir + dative for a stretch of time gone by.",
          ex: [
            ["Einu sinni var lítill lundi.", "Once there was a little puffin."],
            ["Þetta gerðist fyrir mörgum öldum.", "This happened many centuries ago."]
          ]
        }
      ],
      vocab: ["saga", "þjóðsaga", "öld", "þjóð", "landnám", "landnámsmaður", "víkingur", "skip", "handrit", "fortíð", "sannur", "sigla", "einu sinni"],
      items: [
        { t: "gender", word: "saga", a: "kvk",
          note: "Feminine. Nouns in -a almost always are, and this one shifts to sögu outside the nominative." },

        { t: "gender", word: "landnám", a: "hk",
          note: "Neuter: landnámið. Compounds ending in -nám are neuter, like nám itself." },

        { t: "gender", word: "handrit", a: "hk",
          note: "Neuter, plural handrit. The word is literally hand-writing." },

        { t: "match", q: "Match the history words",
          pairs: [["öld", "century"], ["þjóð", "nation"], ["landnám", "settlement"], ["víkingur", "viking"], ["handrit", "manuscript"], ["skip", "ship"]] },

        { t: "choice", q: "Which word means “century”?",
          opts: ["öld", "ár", "vika", "tími"], a: "öld",
          note: "öld, aldar, plural aldir. Á níundu öld = in the ninth century." },

        { t: "fill", q: "Put the noun into the accusative.", sentence: "Ég las ___ í gær.", base: "sagan",
          a: "söguna", case: "ÞF", mode: "type",
          why: "saga → sögu in the accusative, and the feminine article adds -na." },

        { t: "build", q: "The nation owns many stories.",
          a: "Þjóðin á margar sögur", extra: ["sögu", "átti", "mikið"],
          note: "sögur is feminine plural, so margar agrees with it." },

        { t: "type", q: "Type: “The story is true.”", a: "Sagan er sönn",
          hint: "sannur in the feminine",
          note: "sannur, sönn, satt. The u in the ending pulls a over to ö." },

        { t: "listen", speak: "Víkingarnir sigldu til Íslands.", q: "What did you hear?", mode: "choice",
          opts: ["Víkingarnir sigldu til Íslands.", "Víkingarnir sigla til Íslands.", "Víkingarnir komu til Íslands."],
          a: "Víkingarnir sigldu til Íslands.",
          note: "sigldu is the past; sigla is the present. til always takes the genitive: Íslands." },

        { t: "choice", q: "Fill the gap: Hvar ___ þú í gær?",
          opts: ["varst", "var", "vorum", "ert"], a: "varst",
          note: "vera in the past: var, varst, var, vorum, voruð, voru." },

        { t: "fill", q: "Put vera into the past.", sentence: "Þau ___ á Íslandi í tíu ár.", base: "vera",
          a: "voru", mode: "type",
          why: "þau is plural, so the past is voru." },

        { t: "speak", is: "Þetta gerðist fyrir mörgum öldum.", en: "This happened many centuries ago.",
          tip: "fyrir takes the dative, and margar öldur becomes mörgum öldum — u pulls a to ö." }
      ]
    },

    {
      n: 2,
      id: "u17l2",
      kind: "lesson",
      title: "Sterkar sagnir stíga inn",
      en: "Strong verbs step in",
      goal: "Recognise a strong past tense and use the first three ablaut series.",
      minutes: 10,
      icon: "🪓",
      teach: [
        {
          h: "Weak verbs add, strong verbs change",
          p: "A weak verb glues an ending on: skrifa becomes skrifaði. A strong verb refuses to carry anything extra and changes its vowel instead: finna becomes fann. Nothing is added at all in the singular.",
          ex: [
            ["Amma skrifaði söguna.", "Grandma wrote the story."],
            ["Amma fann handritið.", "Grandma found the manuscript."]
          ]
        },
        {
          h: "Four parts, not two",
          p: "To own a strong verb you need four forms: the infinitive, the past singular, the past plural, and the participle. Learn them as one chant.",
          table: {
            cols: ["nafnháttur", "þátíð eintala", "þátíð fleirtala", "lýsingarháttur"],
            rows: [
              ["bíta", "beit", "bitum", "bitið"],
              ["fljúga", "flaug", "flugum", "flogið"],
              ["finna", "fann", "fundum", "fundið"]
            ]
          },
          tip: "The past plural vowel is the one that surprises people. Say bitum, flugum, fundum out loud until they stop sounding wrong."
        },
        {
          h: "The bare singular",
          p: "Ég beit and hann beit look identical, because the strong past singular has no ending in the first or third person. Only the plural takes -um, -uð, -u.",
          list: [
            "ég beit · hann beit · við bitum · þið bituð · þeir bitu",
            "ég flaug · hún flaug · við flugum · þið fluguð · þær flugu",
            "ég fann · það fann · við fundum · þið funduð · þau fundu"
          ]
        }
      ],
      vocab: ["bíta", "fljúga", "finna", "skrifa", "sigla", "skip", "handrit", "atburður", "frásögn", "forn"],
      items: [
        { t: "table", q: "Complete the past tense of bíta.",
          cols: ["", "þátíð"],
          rows: [
            { label: "ég", cells: ["beit"], blank: [] },
            { label: "þú", cells: ["beist"], blank: [0] },
            { label: "hann", cells: ["beit"], blank: [] },
            { label: "við", cells: ["bitum"], blank: [0] },
            { label: "þið", cells: ["bituð"], blank: [] },
            { label: "þeir", cells: ["bitu"], blank: [0] }
          ] },

        { t: "choice", q: "What is the past singular of fljúga?",
          opts: ["flaug", "flýg", "flugum", "flogið"], a: "flaug",
          note: "jú turns into au in the past singular: flaug." },

        { t: "fill", q: "Put fljúga into the past.", sentence: "Fuglinn ___ yfir hafið.", base: "fljúga",
          a: "flaug", mode: "type",
          why: "Past singular of fljúga is flaug. yfir with motion takes the accusative: hafið." },

        { t: "fill", q: "Choose the past plural.", sentence: "Við ___ ekki handritið.", base: "finna",
          opts: ["fundum", "fann", "finnum", "fundið"], a: "fundum", mode: "choice",
          why: "við needs the past plural, and finna shifts i to u: fundum." },

        { t: "build", q: "They found the ship.",
          a: "Þeir fundu skipið", extra: ["fann", "finna", "skip"],
          note: "þeir fundu — the past plural ends in -u with no vowel change from fundum." },

        { t: "type", q: "Type: “The dog bit me.”", a: "Hundurinn beit mig",
          hint: "bíta takes the accusative",
          note: "bíta governs the accusative, so mig, never mér." },

        { t: "match", q: "Match the past forms",
          pairs: [["beit", "bit"], ["flaug", "flew"], ["fann", "found"], ["sigldi", "sailed"], ["skrifaði", "wrote"]] },

        { t: "listen", speak: "Hann fann gamalt handrit.", q: "What did you hear?", mode: "choice",
          opts: ["Hann fann gamalt handrit.", "Hann finnur gamalt handrit.", "Hann fann gamla sögu."],
          a: "Hann fann gamalt handrit.",
          note: "fann is past, finnur is present. gamalt agrees with the neuter handrit." },

        { t: "gender", word: "skip", a: "hk",
          note: "Neuter, and the plural looks the same: eitt skip, mörg skip." },

        { t: "choice", q: "Which is the past participle of fljúga?",
          opts: ["flogið", "flaug", "flugu", "flýg"], a: "flogið",
          note: "The participle vowel is o: flogið. Hann hefur flogið heim." },

        { t: "fill", q: "Put sigla into the past.", sentence: "Þeir ___ til landsins á litlu skipi.", base: "sigla",
          a: "sigldu", mode: "type",
          why: "sigla is weak: sigldi, sigldu. Not every history verb is strong." },

        { t: "speak", is: "Ég flaug til Íslands í fyrra.", en: "I flew to Iceland last year.",
          tip: "í fyrra means last year, and it needs a past tense after it." }
      ]
    },

    {
      n: 3,
      id: "u17l3",
      kind: "grammar",
      title: "Hljóðskiptaraðirnar",
      en: "The ablaut series",
      goal: "Master the seven strong past patterns and the -st ending on þú.",
      minutes: 13,
      icon: "🔤",
      teach: [
        {
          h: "Seven patterns, not seven hundred",
          p: "Every strong verb in Icelandic belongs to one of seven vowel patterns. Learn one verb from each row and you can guess the rest. This is the single table that unlocks reading anything written before the twentieth century.",
          table: {
            cols: ["röð", "nafnháttur", "þátíð et.", "þátíð ft.", "lh. þt."],
            rows: [
              ["1", "bíta", "beit", "bitum", "bitið"],
              ["2", "fljúga", "flaug", "flugum", "flogið"],
              ["3", "finna", "fann", "fundum", "fundið"],
              ["4", "bera", "bar", "bárum", "borið"],
              ["5", "gefa", "gaf", "gáfum", "gefið"],
              ["6", "fara", "fór", "fórum", "farið"],
              ["7", "halda", "hélt", "héldum", "haldið"]
            ]
          },
          tip: "Rows 4 and 5 look alike until the participle: bera ends in borið, gefa in gefið."
        },
        {
          h: "The vowel story in one line each",
          list: [
            "1 í → ei → i: bíta, beit, bitum",
            "2 jú/jó → au → u, participle in o: fljúga, flaug, flugum, flogið",
            "3 i → a → u: finna, fann, fundum",
            "4 e → a → á, participle in o: bera, bar, bárum, borið",
            "5 e → a → á, participle keeps e: gefa, gaf, gáfum, gefið",
            "6 a → ó → ó: fara, fór, fórum",
            "7 the past has é or e and both past forms match: halda, hélt, héldum"
          ]
        },
        {
          h: "þú takes -st",
          p: "This is where strong and weak part company for good. A weak verb gives þú the ending -ir: þú skrifaðir, þú sagðir. A strong verb gives þú the ending -st, welded straight onto the past singular.",
          table: {
            cols: ["", "ég", "þú"],
            rows: [
              ["fara", "fór", "fórst"],
              ["koma", "kom", "komst"],
              ["gefa", "gaf", "gafst"],
              ["bera", "bar", "barst"],
              ["halda", "hélt", "hélst"],
              ["segja (weak)", "sagði", "sagðir"]
            ]
          },
          tip: "If the t of the stem is already there, the two sounds merge: hélt + st gives hélst, not héltst." },
        {
          h: "Careful with two look-alikes",
          p: "fannst and komst also exist as middle-voice forms with other meanings, so read the whole sentence. Þú fannst handritið is you found the manuscript; Handritið fannst is the manuscript was found.",
          ex: [
            ["Hvert fórst þú í gær?", "Where did you go yesterday?"],
            ["Þú gafst mér góða sögu.", "You gave me a good story."]
          ]
        }
      ],
      vocab: ["bera", "gefa", "halda", "finna", "fljúga", "bíta", "sjá", "verða", "taka", "lesa", "handrit", "hetja"],
      items: [
        { t: "table", q: "Complete the principal parts of the strong verbs.",
          cols: ["", "þátíð et.", "þátíð ft.", "lh. þt."],
          rows: [
            { label: "bíta", cells: ["beit", "bitum", "bitið"], blank: [] },
            { label: "fljúga", cells: ["flaug", "flugum", "flogið"], blank: [1] },
            { label: "finna", cells: ["fann", "fundum", "fundið"], blank: [] },
            { label: "bera", cells: ["bar", "bárum", "borið"], blank: [2] },
            { label: "gefa", cells: ["gaf", "gáfum", "gefið"], blank: [] },
            { label: "fara", cells: ["fór", "fórum", "farið"], blank: [0] },
            { label: "halda", cells: ["hélt", "héldum", "haldið"], blank: [] }
          ] },

        { t: "table", q: "Add the þú form of each past tense.",
          cols: ["", "ég", "þú"],
          rows: [
            { label: "fara", cells: ["fór", "fórst"], blank: [1] },
            { label: "koma", cells: ["kom", "komst"], blank: [1] },
            { label: "gefa", cells: ["gaf", "gafst"], blank: [] },
            { label: "halda", cells: ["hélt", "hélst"], blank: [1] }
          ] },

        { t: "fill", q: "Put fara into the past for þú.", sentence: "Hvert ___ þú í gær?", base: "fara",
          a: "fórst", mode: "type",
          why: "Strong verbs give þú the ending -st: fór → fórst." },

        { t: "fill", q: "Put gefa into the past.", sentence: "Hann ___ mér handritið.", base: "gefa",
          a: "gaf", case: "ÞGF", mode: "type",
          why: "gaf is the past singular. gefa hands the person the dative: mér." },

        { t: "fill", q: "Put bera into the past plural.", sentence: "Við ___ öll handritin heim.", base: "bera",
          a: "bárum", mode: "type",
          why: "Series 4: bar in the singular, bárum in the plural with a long á." },

        { t: "fill", q: "Put halda into the past.", sentence: "Þeir ___ stóra veislu um haustið.", base: "halda",
          opts: ["héldu", "hélt", "halda", "haldið"], a: "héldu", mode: "choice",
          why: "þeir takes the past plural stem héld- plus -u." },

        { t: "choice", q: "Which is the past plural of gefa?",
          opts: ["gáfum", "gefum", "gaf", "gefið"], a: "gáfum",
          note: "The plural lengthens the vowel: gaf but gáfum." },

        { t: "choice", q: "How does koma end when the subject is þú?",
          opts: ["komst", "komt", "komir", "kom"], a: "komst",
          note: "Strong past + þú = -st. Þú komst of seint." },

        { t: "build", q: "You came late yesterday.",
          a: "Þú komst seint í gær", extra: ["kom", "komið", "snemma"],
          note: "komst, not kom — the second person carries the -st." },

        { t: "type", q: "Type: “We flew home.”", a: "Við flugum heim",
          hint: "past plural of fljúga",
          note: "flugum, with u. flaug would only work for a single flier." },

        { t: "fill", q: "Put sjá into the past.", sentence: "Ég ___ hana á þinginu í fyrra.", base: "sjá",
          a: "sá", mode: "type",
          why: "sjá goes sá, sást, sá, sáum, sáuð, sáu." },

        { t: "choice", q: "Which form completes: Hann hefur ___ handritið?",
          opts: ["borið", "borinn", "bar", "bárum"], a: "borið",
          note: "After hefur you need the plain participle borið, which never agrees with anything." },

        { t: "listen", speak: "Við fundum handritið í gömlu húsi.", q: "What did you hear?", mode: "choice",
          opts: ["Við fundum handritið í gömlu húsi.", "Við finnum handritið í gömlu húsi.", "Þeir fundu handritið í gömlu húsi."],
          a: "Við fundum handritið í gömlu húsi.",
          note: "fundum is past, finnum present. í with a location takes the dative: gömlu húsi." },

        { t: "speak", is: "Hvert fórst þú um helgina?", en: "Where did you go at the weekend?",
          tip: "fórst is one syllable of vowel and a hiss: fór plus st." }
      ]
    },

    {
      n: 4,
      id: "u17l4",
      kind: "lesson",
      title: "Sögnin í öðru sæti",
      en: "The verb in second place",
      goal: "Chain events with sequence words and keep the verb where Icelandic wants it.",
      minutes: 10,
      icon: "🧵",
      teach: [
        {
          h: "The verb does not move. Everything else does.",
          p: "In an Icelandic statement the finite verb sits in slot two, always. If you put a time word in slot one, the subject has to step behind the verb. English does not do this, which is why learners give themselves away in the first sentence of any story.",
          ex: [
            ["Anna las söguna í gær.", "Anna read the story yesterday."],
            ["Í gær las Anna söguna.", "Yesterday Anna read the story."]
          ],
          tip: "Count the slots: one thing, then the verb. Í gær is one thing. Þegar hann kom heim is also one thing."
        },
        {
          h: "The connectors that trigger it",
          p: "These are the words that push a story forward, and every one of them sends the subject behind the verb.",
          list: [
            "fyrst — first of all",
            "síðan — then, after that",
            "svo — then, next",
            "þá — then, at that point",
            "seinna — later",
            "loksins — finally, at last",
            "að lokum — in the end"
          ]
        },
        {
          h: "þegar and meðan",
          p: "Inside a þegar or meðan clause the order is ordinary: subject first, verb second. But the whole clause counts as slot one, so the main verb comes straight after the comma.",
          ex: [
            ["Þegar við komum, var húsið tómt.", "When we arrived, the house was empty."],
            ["Hann las meðan ég eldaði.", "He read while I cooked."]
          ]
        }
      ],
      vocab: ["fyrst", "síðan", "svo", "þá", "seinna", "loksins", "að lokum", "þegar", "meðan", "þing", "byggja", "gerast"],
      items: [
        { t: "choice", q: "Fill the gap: Í gær ___ ég langa sögu.",
          opts: ["las", "lesa", "lesið", "lásum"], a: "las",
          note: "Í gær fills slot one, so the verb comes next and ég waits its turn." },

        { t: "build", q: "Yesterday Anna read the saga.",
          a: "Í gær las Anna söguna", extra: ["lesa", "sagan", "hún"],
          note: "Verb before subject, because a time word opened the sentence." },

        { t: "fill", q: "Put sigla into the past.", sentence: "Síðan ___ þeir heim til Noregs.", base: "sigla",
          a: "sigldu", mode: "type",
          why: "After síðan the verb comes first and þeir follows it." },

        { t: "choice", q: "Which sentence is correct?",
          opts: ["Þá fann hann handritið.", "Þá hann fann handritið.", "Þá hann handritið fann.", "Fann þá hann handritið."],
          a: "Þá fann hann handritið.",
          note: "þá, verb, subject. Anything else sounds foreign straight away." },

        { t: "type", q: "Type: “Finally they found the ship.”", a: "Loksins fundu þeir skipið",
          hint: "start with Loksins",
          note: "loksins takes slot one, so fundu jumps ahead of þeir." },

        { t: "match", q: "Match the sequence words",
          pairs: [["fyrst", "first of all"], ["síðan", "then, after that"], ["svo", "next"], ["þá", "at that point"], ["loksins", "finally"], ["seinna", "later"]] },

        { t: "fill", q: "Put vera into the past.", sentence: "Þegar hann kom heim, ___ sagan búin.", base: "vera",
          a: "var", mode: "type",
          why: "The whole þegar clause fills slot one, so var comes before sagan." },

        { t: "build", q: "Then he told us the whole story.",
          a: "Þá sagði hann okkur alla söguna", extra: ["sagt", "segja", "hana"],
          note: "segja gives the listener the dative okkur and the story the accusative söguna." },

        { t: "listen", speak: "Fyrst byggðu þeir hús og síðan kirkju.", q: "What did you hear?", mode: "choice",
          opts: ["Fyrst byggðu þeir hús og síðan kirkju.", "Fyrst byggja þeir hús og síðan kirkju.", "Fyrst byggðu þeir kirkju og síðan hús."],
          a: "Fyrst byggðu þeir hús og síðan kirkju.",
          note: "byggðu is the past of byggja, and both objects are accusative." },

        { t: "choice", q: "A sentence starts with Í gær. Where does the verb go?",
          opts: ["Straight after Í gær, before the subject", "At the very end", "After the subject", "It is left out"],
          a: "Straight after Í gær, before the subject",
          note: "This is the V2 rule, and Icelandic keeps it without exception in statements." },

        { t: "gender", word: "þing", a: "hk",
          note: "Neuter: þingið. Same shape in the plural, þing." },

        { t: "speak", is: "Seinna kom hann aftur til Íslands.", en: "Later he came back to Iceland.",
          tip: "Seinna, then the verb, then the subject. Feel the rhythm of it." }
      ]
    },

    {
      n: 5,
      id: "u17l5",
      kind: "story",
      title: "Handritið í kjallaranum",
      en: "The manuscript in the basement",
      goal: "Follow a family tale told entirely in the past tense.",
      minutes: 11,
      icon: "🗝️",
      teach: [
        {
          h: "Listen for the vowels",
          p: "Jónas tells the whole story in the past, so almost every verb has swapped its vowel. Track flaug, fann, sagði, kom and see which ones are strong and which are weak."
        },
        {
          h: "Sagan endar illa",
          p: "Icelandic folk tales rarely bother with a happy ending, and nobody apologises for it. Enda illa is the standard way to warn a listener."
        }
      ],
      story: {
        title: "Handritið í kjallaranum",
        lines: [
          { sp: "Jónas", is: "Anna, komdu hingað! Ég fann gamalt handrit í kjallaranum.", en: "Anna, come here! I found an old manuscript in the basement." },
          { sp: "Anna", is: "Hver skrifaði það?", en: "Who wrote it?" },
          { sp: "Jónas", is: "Amma mín. Hún sagði mér söguna þegar ég var lítill.", en: "My grandmother. She told me the story when I was little." },
          { sp: "Anna", is: "Um hvað er sagan?", en: "What is the story about?" },
          { sp: "Jónas", is: "Um lunda sem flaug of langt að heiman.", en: "About a puffin that flew too far from home." },
          { sp: "Anna", is: "Og hvað gerðist þá?", en: "And what happened then?" },
          { sp: "Jónas", is: "Fyrst flaug hann yfir hafið, svo yfir fjöllin. Loksins fann hann litla eyju.", en: "First he flew over the sea, then over the mountains. At last he found a small island." },
          { sp: "Sóley", is: "Ég heyrði þessa sögu líka. Amma þín sagði hana öllum í hverfinu.", en: "I heard this story too. Your grandmother told it to everyone in the neighbourhood." },
          { sp: "Jónas", is: "Sagan endar illa. Lundinn kom aldrei heim.", en: "The story ends badly. The puffin never came home." },
          { sp: "Anna", is: "Er þetta sönn saga?", en: "Is it a true story?" },
          { sp: "Sóley", is: "Bíðið aðeins. Það situr lundi á glugganum.", en: "Hold on a moment. There is a puffin sitting on the window." },
          { sp: "Anna", is: "Þá kom hann loksins heim.", en: "Then he finally came home." }
        ],
        glossary: [
          ["kjallari", "basement"],
          ["að heiman", "from home"],
          ["of langt", "too far"],
          ["eyja", "island"],
          ["enda illa", "to end badly"],
          ["Bíðið aðeins", "hold on a moment"]
        ]
      },
      vocab: ["handrit", "saga", "skrifa", "segja", "fljúga", "finna", "gerast", "fyrst", "svo", "loksins", "þá", "sannur"],
      items: [
        { t: "choice", q: "Hvar fann Jónas handritið?",
          opts: ["Í kjallaranum", "Í eldhúsinu", "Á safni", "Í kirkjunni"], a: "Í kjallaranum",
          note: "kjallari is masculine; í with a location gives kjallaranum." },

        { t: "choice", q: "Who wrote the manuscript?",
          opts: ["Jónas's grandmother", "Sóley", "Anna", "A settler from Norway"], a: "Jónas's grandmother",
          note: "Amma mín skrifaði það." },

        { t: "fill", q: "Put segja into the past.", sentence: "Hún ___ mér söguna.", base: "segja",
          a: "sagði", case: "ÞGF", mode: "type",
          why: "segja is weak: sagði. The listener is dative, mér, and the story accusative, söguna." },

        { t: "build", q: "First he flew over the sea.",
          a: "Fyrst flaug hann yfir hafið", extra: ["flýgur", "hafinu", "síðan"],
          note: "yfir with motion takes the accusative hafið, not the dative hafinu." },

        { t: "type", q: "Type: “The puffin never came home.”", a: "Lundinn kom aldrei heim",
          hint: "aldrei sits after the verb",
          note: "kom is the past of koma, and aldrei goes straight after the finite verb." },

        { t: "match", q: "Match the story words",
          pairs: [["kjallari", "basement"], ["að heiman", "from home"], ["eyja", "island"], ["of langt", "too far"], ["enda illa", "to end badly"]] },

        { t: "listen", speak: "Loksins fann hann litla eyju.", q: "What did you hear?", mode: "choice",
          opts: ["Loksins fann hann litla eyju.", "Loksins fundu þeir litla eyju.", "Fyrst fann hann litla eyju."],
          a: "Loksins fann hann litla eyju.",
          note: "fann is singular, fundu plural. eyja becomes eyju in the accusative." },

        { t: "fill", q: "Put allir into the dative.", sentence: "Amma þín sagði hana ___ í hverfinu.", base: "allir",
          a: "öllum", case: "ÞGF", mode: "type",
          why: "segja gives the listener the dative, and allir becomes öllum." },

        { t: "gender", word: "kjallari", a: "kk",
          note: "Masculine weak noun: kjallari, kjallara, kjallara, kjallara." },

        { t: "speak", is: "Sagan endar illa.", en: "The story ends badly.",
          tip: "illa is the adverb from illur, and it never changes." },

        { t: "choice", q: "Hvað gerðist í lokin?",
          opts: ["Lundi kom að glugganum", "Handritið hvarf", "Anna fór heim", "Sóley skrifaði nýja sögu"],
          a: "Lundi kom að glugganum",
          note: "koma að takes the dative: að glugganum." },

        { t: "type", q: "Type: “And what happened then?”", a: "Og hvað gerðist þá?",
          hint: "gerast in the past",
          note: "gerðist is the middle-voice past of gerast — the -st stays put." }
      ]
    },

    {
      n: 6,
      id: "u17l6",
      kind: "checkpoint",
      title: "Sögupróf",
      en: "Unit 17 checkpoint",
      goal: "Prove you can narrate a past-tense story without tripping over word order.",
      minutes: 12,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "The four principal parts of a strong verb: bíta, beit, bitum, bitið.",
            "The seven ablaut series, from bíta down to halda.",
            "The bare past singular — ég fann, hann fann — against the -um, -uð, -u plural.",
            "þú plus a strong past means -st: fórst, komst, gafst, barst, hélst.",
            "Weak verbs keep -ir for þú: skrifaðir, sagðir, sigldir.",
            "V2: one thing, then the verb. Í gær las ég, never Í gær ég las."
          ]
        }
      ],
      vocab: ["saga", "öld", "þjóð", "handrit", "hetja", "bardagi", "landnám", "bíta", "fljúga", "finna", "bera", "gefa", "halda", "lesa", "segja", "byggja", "deyja", "fyrst", "síðan", "loksins", "þegar"],
      items: [
        { t: "table", q: "Complete the principal parts.",
          cols: ["", "þátíð et.", "þátíð ft.", "lh. þt."],
          rows: [
            { label: "bíta", cells: ["beit", "bitum", "bitið"], blank: [0] },
            { label: "finna", cells: ["fann", "fundum", "fundið"], blank: [] },
            { label: "gefa", cells: ["gaf", "gáfum", "gefið"], blank: [1] },
            { label: "halda", cells: ["hélt", "héldum", "haldið"], blank: [2] }
          ] },

        { t: "fill", q: "Put fara into the past for þú.", sentence: "Hvert ___ þú í fyrra?", base: "fara",
          a: "fórst", mode: "type",
          why: "Strong past plus þú always ends in -st." },

        { t: "choice", q: "Which is the past plural of fljúga?",
          opts: ["flugum", "flaug", "fljúgum", "flogið"], a: "flugum",
          note: "fljúgum is the present. The past plural drops the j and takes u." },

        { t: "build", q: "Then they sailed home.",
          a: "Þá sigldu þeir heim", extra: ["sigla", "sigldi", "síðan"],
          note: "þá opens the sentence, so the verb comes before þeir." },

        { t: "type", q: "Type: “We found the old manuscript.”", a: "Við fundum gamla handritið",
          hint: "past plural of finna",
          note: "The definite article pulls the adjective into the weak form gamla." },

        { t: "match", q: "Match the unit words",
          pairs: [["öld", "century"], ["þjóð", "nation"], ["handrit", "manuscript"], ["hetja", "hero"], ["bardagi", "battle"], ["landnám", "settlement"]] },

        { t: "listen", speak: "Í gær las ég alla söguna.", q: "What did you hear?", mode: "choice",
          opts: ["Í gær las ég alla söguna.", "Í gær las hann alla söguna.", "Í dag las ég alla söguna."],
          a: "Í gær las ég alla söguna.",
          note: "las is the past of lesa, and ég comes after it because Í gær took slot one." },

        { t: "gender", word: "bardagi", a: "kk",
          note: "Masculine weak noun: bardagi, bardaga, bardaga, bardaga." },

        { t: "fill", q: "Put segja into the past.", sentence: "Amma ___ mér þessa sögu oft.", base: "segja",
          a: "sagði", mode: "type",
          why: "segja is weak, so the past is sagði and þú would be sagðir." },

        { t: "speak", is: "Fyrst flaug hann yfir hafið og svo yfir fjöllin.", en: "First he flew over the sea and then over the mountains.",
          tip: "Two sequence words, one verb, and the accusative after yfir both times." },

        { t: "choice", q: "Which sentence has correct word order?",
          opts: ["Í gær fann Anna handritið.", "Í gær Anna fann handritið.", "Í gær handritið fann Anna.", "Fann í gær Anna handritið."],
          a: "Í gær fann Anna handritið.",
          note: "Time word, verb, subject. That order never varies in a statement." },

        { t: "build", q: "You gave me the story.",
          a: "Þú gafst mér söguna", extra: ["gaf", "mig", "sagan"],
          note: "gafst, because þú demands the -st ending on a strong past." },

        { t: "fill", q: "Choose the right past form.", sentence: "Þeir ___ stórt hús við sjóinn.", base: "byggja",
          opts: ["byggðu", "byggja", "byggði", "byggt"], a: "byggðu", mode: "choice",
          why: "byggja is weak: byggði in the singular, byggðu in the plural." },

        { t: "type", q: "Type: “The hero died in the battle.”", a: "Hetjan dó í bardaganum",
          hint: "deyja in the past",
          note: "dó is the past of deyja, and í with a location takes the dative bardaganum." }
      ]
    }

  ]
};

export const vocab = [

  // ── saga og sögur / history and stories ───────────────────────────────
  { w: "þjóðsaga", en: "folk tale", pos: "noun", g: "kvk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["þjóðsaga", "þjóðsögu", "þjóðsögu", "þjóðsögu"],
             pl: ["þjóðsögur", "þjóðsögur", "þjóðsögum", "þjóðsagna"] },
    ex: { is: "Þessi þjóðsaga er mjög gömul.", en: "This folk tale is very old." } },

  { w: "sögumaður", en: "storyteller, narrator", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["sögumaður", "sögumann", "sögumanni", "sögumanns"],
             pl: ["sögumenn", "sögumenn", "sögumönnum", "sögumanna"] },
    ex: { is: "Jónas er góður sögumaður.", en: "Jónas is a good storyteller." } },

  { w: "frásögn", en: "account, narrative", pos: "noun", g: "kvk", topic: "history", unit: 17, cefr: "B1",
    forms: { sg: ["frásögn", "frásögn", "frásögn", "frásagnar"],
             pl: ["frásagnir", "frásagnir", "frásögnum", "frásagna"] },
    ex: { is: "Frásögnin í handritinu er stutt.", en: "The account in the manuscript is short." } },

  { w: "ævintýri", en: "adventure, fairy tale", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["ævintýri", "ævintýri", "ævintýri", "ævintýris"],
             pl: ["ævintýri", "ævintýri", "ævintýrum", "ævintýra"] },
    ex: { is: "Amma las ævintýri fyrir mig.", en: "Grandma read me a fairy tale." } },

  { w: "handrit", en: "manuscript", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["handrit", "handrit", "handriti", "handrits"],
             pl: ["handrit", "handrit", "handritum", "handrita"] },
    ex: { is: "Gamla handritið er á safni.", en: "The old manuscript is in a museum." } },

  // ── fortíðin / the past ───────────────────────────────────────────────
  { w: "öld", en: "century", pos: "noun", g: "kvk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["öld", "öld", "öld", "aldar"],
             pl: ["aldir", "aldir", "öldum", "alda"] },
    ex: { is: "Þetta gerðist á síðustu öld.", en: "This happened in the last century." } },

  { w: "ártal", en: "year (as a number), date", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["ártal", "ártal", "ártali", "ártals"],
             pl: ["ártöl", "ártöl", "ártölum", "ártala"] },
    ex: { is: "Ég man aldrei ártölin.", en: "I never remember the dates." } },

  { w: "upphaf", en: "beginning, origin", pos: "noun", g: "hk", topic: "storytelling", unit: 17, cefr: "A2",
    forms: { sg: ["upphaf", "upphaf", "upphafi", "upphafs"], pl: null },
    ex: { is: "Upphaf sögunnar er stutt.", en: "The beginning of the story is short." } },

  { w: "endir", en: "ending, end", pos: "noun", g: "kk", topic: "storytelling", unit: 17, cefr: "A2",
    forms: { sg: ["endir", "endi", "enda", "endis"],
             pl: ["endar", "enda", "endum", "enda"] },
    ex: { is: "Endirinn kom mér á óvart.", en: "The ending surprised me." } },

  { w: "kjallari", en: "basement, cellar", pos: "noun", g: "kk", topic: "house", unit: 17, cefr: "A2",
    forms: { sg: ["kjallari", "kjallara", "kjallara", "kjallara"],
             pl: ["kjallarar", "kjallara", "kjöllurum", "kjallara"] },
    ex: { is: "Handritið lá í kjallaranum.", en: "The manuscript lay in the basement." } },

  { w: "eyja", en: "island", pos: "noun", g: "kvk", topic: "nature", unit: 17, cefr: "A2",
    forms: { sg: ["eyja", "eyju", "eyju", "eyju"],
             pl: ["eyjar", "eyjar", "eyjum", "eyja"] },
    ex: { is: "Lundinn fann litla eyju.", en: "The puffin found a small island." } },

  { w: "atburður", en: "event", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["atburður", "atburð", "atburði", "atburðar"],
             pl: ["atburðir", "atburði", "atburðum", "atburða"] },
    ex: { is: "Þessi atburður gerðist á tíundu öld.", en: "This event happened in the tenth century." } },

  { w: "þjóð", en: "nation, people", pos: "noun", g: "kvk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["þjóð", "þjóð", "þjóð", "þjóðar"],
             pl: ["þjóðir", "þjóðir", "þjóðum", "þjóða"] },
    ex: { is: "Þjóðin man þessa sögu enn.", en: "The nation still remembers this story." } },

  { w: "landnám", en: "settlement", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["landnám", "landnám", "landnámi", "landnáms"], pl: null },
    ex: { is: "Við lærum um landnám Íslands.", en: "We are learning about the settlement of Iceland." } },

  { w: "landnámsmaður", en: "settler", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["landnámsmaður", "landnámsmann", "landnámsmanni", "landnámsmanns"],
             pl: ["landnámsmenn", "landnámsmenn", "landnámsmönnum", "landnámsmanna"] },
    ex: { is: "Fyrstu landnámsmennirnir komu frá Noregi.", en: "The first settlers came from Norway." } },

  { w: "víkingur", en: "viking", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["víkingur", "víking", "víkingi", "víkings"],
             pl: ["víkingar", "víkinga", "víkingum", "víkinga"] },
    ex: { is: "Víkingarnir sigldu á litlum skipum.", en: "The vikings sailed in small ships." } },

  { w: "skip", en: "ship", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["skip", "skip", "skipi", "skips"],
             pl: ["skip", "skip", "skipum", "skipa"] },
    ex: { is: "Skipið kom að landi um nóttina.", en: "The ship reached land during the night." } },

  { w: "höfðingi", en: "chieftain, leader", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "B1",
    forms: { sg: ["höfðingi", "höfðingja", "höfðingja", "höfðingja"],
             pl: ["höfðingjar", "höfðingja", "höfðingjum", "höfðingja"] },
    ex: { is: "Höfðinginn átti mörg skip.", en: "The chieftain owned many ships." } },

  { w: "þing", en: "assembly, parliament", pos: "noun", g: "hk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["þing", "þing", "þingi", "þings"],
             pl: ["þing", "þing", "þingum", "þinga"] },
    ex: { is: "Þingið kom saman á hverju sumri.", en: "The assembly met every summer." } },

  { w: "bardagi", en: "battle", pos: "noun", g: "kk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["bardagi", "bardaga", "bardaga", "bardaga"],
             pl: ["bardagar", "bardaga", "bardögum", "bardaga"] },
    ex: { is: "Bardaginn stóð í þrjá daga.", en: "The battle lasted three days." } },

  { w: "hetja", en: "hero", pos: "noun", g: "kvk", topic: "history", unit: 17, cefr: "A2",
    forms: { sg: ["hetja", "hetju", "hetju", "hetju"],
             pl: ["hetjur", "hetjur", "hetjum", "hetja"] },
    ex: { is: "Hetjan í sögunni var ung kona.", en: "The hero of the story was a young woman." } },

  // ── vættir og verur / creatures of the tales ──────────────────────────
  { w: "draugur", en: "ghost", pos: "noun", g: "kk", topic: "folklore", unit: 17, cefr: "A2",
    forms: { sg: ["draugur", "draug", "draugi", "draugs"],
             pl: ["draugar", "drauga", "draugum", "drauga"] },
    ex: { is: "Í sögunni er draugur sem talar.", en: "There is a ghost in the story that talks." } },

  { w: "tröll", en: "troll", pos: "noun", g: "hk", topic: "folklore", unit: 17, cefr: "A2",
    forms: { sg: ["tröll", "tröll", "trölli", "trölls"],
             pl: ["tröll", "tröll", "tröllum", "trölla"] },
    ex: { is: "Tröllin búa í fjöllunum.", en: "The trolls live in the mountains." } },

  { w: "huldufólk", en: "hidden people, elves", pos: "noun", g: "hk", topic: "folklore", unit: 17, cefr: "A2",
    forms: { sg: ["huldufólk", "huldufólk", "huldufólki", "huldufólks"], pl: null },
    ex: { is: "Margir trúa á huldufólk.", en: "Many people believe in the hidden people." } },

  // ── sterkar sagnir / the strong verbs ─────────────────────────────────
  { w: "bíta", en: "to bite", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["bít", "bítur", "bítur", "bítum", "bítið", "bíta"],
            past: ["beit", "beist", "beit", "bitum", "bituð", "bitu"], pp: "bitið" },
    ex: { is: "Hundurinn beit mig í fótinn.", en: "The dog bit me on the leg." } },

  { w: "fljúga", en: "to fly", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "none", vclass: "strong",
    conj: { pres: ["flýg", "flýgur", "flýgur", "fljúgum", "fljúgið", "fljúga"],
            past: ["flaug", "flaugst", "flaug", "flugum", "fluguð", "flugu"], pp: "flogið" },
    ex: { is: "Lundinn flaug yfir hafið.", en: "The puffin flew over the sea." } },

  { w: "finna", en: "to find", pos: "verb", topic: "actions", unit: 17, cefr: "A1",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["finn", "finnur", "finnur", "finnum", "finnið", "finna"],
            past: ["fann", "fannst", "fann", "fundum", "funduð", "fundu"], pp: "fundið" },
    ex: { is: "Við fundum gamalt handrit.", en: "We found an old manuscript." } },

  { w: "bera", en: "to carry", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["ber", "berð", "ber", "berum", "berið", "bera"],
            past: ["bar", "barst", "bar", "bárum", "báruð", "báru"], pp: "borið" },
    ex: { is: "Þeir báru matinn inn.", en: "They carried the food inside." } },

  { w: "gefa", en: "to give", pos: "verb", topic: "actions", unit: 17, cefr: "A1",
    gov: "ÞF+ÞGF", vclass: "strong",
    conj: { pres: ["gef", "gefur", "gefur", "gefum", "gefið", "gefa"],
            past: ["gaf", "gafst", "gaf", "gáfum", "gáfuð", "gáfu"], pp: "gefið" },
    ex: { is: "Hann gaf mér handritið.", en: "He gave me the manuscript." } },

  { w: "halda", en: "to hold; to think; to hold (an event)", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["held", "heldur", "heldur", "höldum", "haldið", "halda"],
            past: ["hélt", "hélst", "hélt", "héldum", "hélduð", "héldu"], pp: "haldið" },
    ex: { is: "Þau héldu stóra veislu um haustið.", en: "They held a big party in the autumn." } },

  { w: "sjá", en: "to see", pos: "verb", topic: "actions", unit: 17, cefr: "A1",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["sé", "sérð", "sér", "sjáum", "sjáið", "sjá"],
            past: ["sá", "sást", "sá", "sáum", "sáuð", "sáu"], pp: "séð" },
    ex: { is: "Ég sá hana á þinginu.", en: "I saw her at the assembly." } },

  { w: "taka", en: "to take", pos: "verb", topic: "actions", unit: 17, cefr: "A1",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["tek", "tekur", "tekur", "tökum", "takið", "taka"],
            past: ["tók", "tókst", "tók", "tókum", "tókuð", "tóku"], pp: "tekið" },
    ex: { is: "Hann tók handritið með sér.", en: "He took the manuscript with him." } },

  { w: "verða", en: "to become", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "none", vclass: "strong",
    conj: { pres: ["verð", "verður", "verður", "verðum", "verðið", "verða"],
            past: ["varð", "varðst", "varð", "urðum", "urðuð", "urðu"], pp: "orðið" },
    ex: { is: "Hann varð frægur maður.", en: "He became a famous man." } },

  { w: "lesa", en: "to read", pos: "verb", topic: "actions", unit: 17, cefr: "A1",
    gov: "ÞF", vclass: "strong",
    conj: { pres: ["les", "lest", "les", "lesum", "lesið", "lesa"],
            past: ["las", "last", "las", "lásum", "lásuð", "lásu"], pp: "lesið" },
    ex: { is: "Ég las alla söguna í gær.", en: "I read the whole story yesterday." } },

  { w: "deyja", en: "to die", pos: "verb", topic: "actions", unit: 17, cefr: "A2",
    gov: "none", vclass: "strong",
    conj: { pres: ["dey", "deyrð", "deyr", "deyjum", "deyið", "deyja"],
            past: ["dó", "dóst", "dó", "dóum", "dóuð", "dóu"], pp: "dáið" },
    ex: { is: "Hetjan dó í bardaganum.", en: "The hero died in the battle." } },

  // ── veikar sagnir í frásögn / weak verbs for narrating ────────────────
  { w: "segja", en: "to say, to tell", pos: "verb", topic: "storytelling", unit: 17, cefr: "A1",
    gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["segi", "segir", "segir", "segjum", "segið", "segja"],
            past: ["sagði", "sagðir", "sagði", "sögðum", "sögðuð", "sögðu"], pp: "sagt" },
    ex: { is: "Amma sagði okkur þjóðsögu.", en: "Grandma told us a folk tale." } },

  { w: "skrifa", en: "to write", pos: "verb", topic: "storytelling", unit: 17, cefr: "A1",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["skrifa", "skrifar", "skrifar", "skrifum", "skrifið", "skrifa"],
            past: ["skrifaði", "skrifaðir", "skrifaði", "skrifuðum", "skrifuðuð", "skrifuðu"], pp: "skrifað" },
    ex: { is: "Hver skrifaði þetta handrit?", en: "Who wrote this manuscript?" } },

  { w: "sigla", en: "to sail", pos: "verb", topic: "history", unit: 17, cefr: "A2",
    gov: "none", vclass: "weak-i",
    conj: { pres: ["sigli", "siglir", "siglir", "siglum", "siglið", "sigla"],
            past: ["sigldi", "sigldir", "sigldi", "sigldum", "siglduð", "sigldu"], pp: "siglt" },
    ex: { is: "Þeir sigldu til Íslands.", en: "They sailed to Iceland." } },

  { w: "byggja", en: "to build", pos: "verb", topic: "history", unit: 17, cefr: "A2",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["byggi", "byggir", "byggir", "byggjum", "byggið", "byggja"],
            past: ["byggði", "byggðir", "byggði", "byggðum", "byggðuð", "byggðu"], pp: "byggt" },
    ex: { is: "Þau byggðu lítið hús við ströndina.", en: "They built a small house by the shore." } },

  { w: "stofna", en: "to found, to establish", pos: "verb", topic: "history", unit: 17, cefr: "B1",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["stofna", "stofnar", "stofnar", "stofnum", "stofnið", "stofna"],
            past: ["stofnaði", "stofnaðir", "stofnaði", "stofnuðum", "stofnuðuð", "stofnuðu"], pp: "stofnað" },
    ex: { is: "Þeir stofnuðu nýtt þorp.", en: "They founded a new village." } },

  { w: "gerast", en: "to happen", pos: "verb", topic: "storytelling", unit: 17, cefr: "A2",
    gov: "none", vclass: "middle",
    conj: { pres: ["gerist", "gerist", "gerist", "gerumst", "gerist", "gerast"],
            past: ["gerðist", "gerðist", "gerðist", "gerðumst", "gerðust", "gerðust"], pp: "gerst" },
    ex: { is: "Hvað gerðist eftir bardagann?", en: "What happened after the battle?" } },

  // ── lýsingarorð / adjectives ──────────────────────────────────────────
  { w: "frægur", en: "famous", pos: "adj", topic: "describing", unit: 17, cefr: "A2",
    decl: { nom: ["frægur", "fræg", "frægt"], comp: "frægari", sup: "frægastur" },
    ex: { is: "Hann varð frægur um allt land.", en: "He became famous all over the country." } },

  { w: "forn", en: "ancient, old", pos: "adj", topic: "history", unit: 17, cefr: "B1",
    decl: { nom: ["forn", "forn", "fornt"] },
    ex: { is: "Fornar sögur eru oft stuttar.", en: "Ancient stories are often short." } },

  { w: "sannur", en: "true", pos: "adj", topic: "describing", unit: 17, cefr: "A2",
    decl: { nom: ["sannur", "sönn", "satt"] },
    ex: { is: "Er þessi saga sönn?", en: "Is this story true?" } },

  { w: "hugrakkur", en: "brave", pos: "adj", topic: "describing", unit: 17, cefr: "A2",
    decl: { nom: ["hugrakkur", "hugrökk", "hugrakkt"] },
    ex: { is: "Hetjan var hugrökk.", en: "The hero was brave." } },

  // ── raðorð og tengiorð / sequence words and connectors ────────────────
  { w: "fyrst", en: "first, first of all", pos: "adv", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Fyrst fórum við í kirkjuna.", en: "First we went to the church." } },

  { w: "síðan", en: "then, after that", pos: "adv", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Síðan sigldu þeir heim.", en: "Then they sailed home." } },

  { w: "svo", en: "then, next; so", pos: "adv", topic: "storytelling", unit: 17, cefr: "A1",
    ex: { is: "Svo gerðist eitthvað skrítið.", en: "Then something strange happened." } },

  { w: "þá", en: "then, at that point", pos: "adv", topic: "storytelling", unit: 17, cefr: "A1",
    ex: { is: "Þá kom hún aftur.", en: "Then she came back." } },

  { w: "seinna", en: "later", pos: "adv", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Seinna sagði hann mér allt.", en: "Later he told me everything." } },

  { w: "loksins", en: "finally, at last", pos: "adv", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Loksins fann hann handritið.", en: "At last he found the manuscript." } },

  { w: "þegar", en: "when", pos: "conj", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Þegar ég var lítil, las ég allar sögurnar.", en: "When I was little, I read all the stories." } },

  { w: "meðan", en: "while", pos: "conj", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Hann las meðan ég eldaði.", en: "He read while I cooked." } },

  { w: "einu sinni", en: "once, once upon a time", pos: "phrase", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Einu sinni var lítill lundi.", en: "Once there was a little puffin." } },

  { w: "að lokum", en: "in the end, finally", pos: "phrase", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Að lokum kom hann heim.", en: "In the end he came home." } },

  { w: "segja frá", en: "to tell about, to relate", pos: "phrase", topic: "storytelling", unit: 17, cefr: "A2",
    ex: { is: "Segðu mér frá ferðinni.", en: "Tell me about the trip." } }
];

export default unit;
