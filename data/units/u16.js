// Unit 16 — Í gær / Yesterday
// The past tense, part one: weak verbs (-aði and -di/-ði/-ti), var and hafði,
// and the time words that put a sentence firmly behind you.

export const unit = {
  id: 16,
  slug: "u16",
  title: "Í gær",
  en: "Yesterday",
  cefr: "A2.2",
  icon: "🕰️",
  blurb: "Tell someone what you did — the past tense of every weak verb.",
  canDo: [
    "Say when something happened: í gær, í fyrradag, í síðustu viku, fyrir þremur dögum",
    "Put any -a verb into the past tense in all six persons",
    "Choose between -di, -ði and -ti for the second weak class",
    "Tell a short story about yesterday with var, hafði and fyrst, svo, síðan"
  ],
  lessons: [
    {
      n: 1,
      id: "u16l1",
      kind: "lesson",
      title: "Í gær, í fyrradag, í fyrra",
      en: "Putting it in the past",
      goal: "Name the moment something happened and meet the -aði past.",
      minutes: 10,
      icon: "📆",
      teach: [
        {
          h: "The shelf of yesterdays",
          p: "Icelandic keeps a tidy shelf of finished time. Each expression names one closed box, and the verb in the sentence has to be in the past to match it.",
          ex: [
            ["í gær", "yesterday"],
            ["í fyrradag", "the day before yesterday"],
            ["í gærkvöldi", "last night"],
            ["í fyrra", "last year"],
            ["um daginn", "the other day"],
            ["áðan", "a moment ago"]
          ],
          tip: "nýlega means recently and is vaguer than all of them. Use it when you cannot be bothered to be exact."
        },
        {
          h: "í morgun is not á morgun",
          p: "One letter separates this morning from tomorrow. í morgun looks back at a morning that is over; á morgun points at a day that has not started yet.",
          ex: [
            ["Ég vaknaði snemma í morgun.", "I woke up early this morning."],
            ["Ég vakna snemma á morgun.", "I will wake up early tomorrow."]
          ],
          tip: "Same trick with í fyrra (last year) and á næsta ári (next year)."
        },
        {
          h: "The past you already half know",
          p: "Verbs whose ég-form ends in -a build their past by keeping that -a and adding -ði. Nothing else happens. tala becomes talaði, dansa becomes dansaði, labba becomes labbaði.",
          ex: [
            ["Ég tala við Jónas.", "I talk to Jónas."],
            ["Ég talaði við Jónas í gær.", "I talked to Jónas yesterday."]
          ]
        }
      ],
      vocab: ["í gær", "í fyrradag", "í morgun", "í gærkvöldi", "í fyrra", "í síðustu viku", "um daginn", "áðan", "nýlega", "lengi", "hlusta", "dansa", "labba"],
      items: [
        { t: "match", q: "Match the time expressions",
          pairs: [["í gær", "yesterday"], ["í fyrradag", "the day before yesterday"], ["í morgun", "this morning"], ["í fyrra", "last year"], ["áðan", "a moment ago"]] },

        { t: "choice", q: "Which one means “tomorrow”?",
          opts: ["á morgun", "í morgun", "í gær", "í fyrra"], a: "á morgun",
          note: "í morgun is this morning, already spent. á morgun is still ahead of you." },

        { t: "choice", q: "Fill the gap: Ég ___ við Jónas í gær.",
          opts: ["talaði", "tala", "talar", "talað"], a: "talaði",
          note: "The -a verb keeps its -a and adds -ði: tal-a-ði." },

        { t: "fill", q: "Which time word fits? The waking up is over.",
          sentence: "Ég vaknaði snemma ___ .", base: "morgunn",
          opts: ["í morgun", "á morgun", "á morgnana"], a: "í morgun",
          case: "", mode: "choice",
          why: "í morgun looks back at a morning that has already gone." },

        { t: "build", q: "We watched a film last night.",
          a: "Við horfðum á mynd í gærkvöldi", extra: ["gær", "sáum", "um"],
          note: "horfa á takes the accusative, and í gærkvöldi is one fixed lump." },

        { t: "type", q: "Type: “I danced yesterday.”", a: "Ég dansaði í gær",
          hint: "dansa is an -a verb." },

        { t: "listen", speak: "Ég labbaði heim í gærkvöldi.", q: "What did you hear?", mode: "choice",
          opts: ["Ég labbaði heim í gærkvöldi.", "Ég labba heim í kvöld.", "Ég labbaði heim í fyrradag."],
          a: "Ég labbaði heim í gærkvöldi.",
          note: "heim needs no preposition: it already means “homewards”." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ á útvarpið í morgun.", base: "hlusta", a: "hlustaði",
          case: "", mode: "type",
          why: "hlusta is an -a verb, so the past is hlust-a-ði." },

        { t: "gender", word: "helgi", a: "kvk",
          note: "Feminine: helgin, um helgina. The plural is helgar." },

        { t: "choice", q: "í fyrra means…",
          opts: ["last year", "next year", "this morning", "last night"], a: "last year",
          note: "í fyrra is always the year before this one — never a month or a week." },

        { t: "speak", is: "Hvað gerðir þú í gær?", en: "What did you do yesterday?",
          tip: "gerðir has a soft ð; let the tongue barely touch the teeth." },

        { t: "table", q: "Now and yesterday.",
          cols: ["", "núna", "í gær"],
          rows: [
            { label: "tala", cells: ["ég tala", "ég talaði"], blank: [1] },
            { label: "dansa", cells: ["ég dansa", "ég dansaði"], blank: [1] },
            { label: "labba", cells: ["ég labba", "ég labbaði"], blank: [] },
            { label: "hlusta", cells: ["ég hlusta", "ég hlustaði"], blank: [1] }
          ] }
      ]
    },

    {
      n: 2,
      id: "u16l2",
      kind: "lesson",
      title: "Ég talaði, við töluðum",
      en: "The -aði class in full",
      goal: "Run an -a verb through all six past forms.",
      minutes: 11,
      icon: "🗣️",
      teach: [
        {
          h: "Six endings, one pattern",
          p: "The singular endings are -aði, -aðir, -aði. The plural endings swap that -a- for a -u-: -uðum, -uðuð, -uðu. Learn the pair aði / uðu and the rest follows.",
          table: {
            cols: ["", "dansa", "skoða"],
            rows: [
              ["ég", "dansaði", "skoðaði"],
              ["þú", "dansaðir", "skoðaðir"],
              ["hann", "dansaði", "skoðaði"],
              ["við", "dönsuðum", "skoðuðum"],
              ["þið", "dönsuðuð", "skoðuðuð"],
              ["þeir", "dönsuðu", "skoðuðu"]
            ]
          }
        },
        {
          h: "The u pulls a down to ö",
          p: "Once the plural ending brings a -u- into the word, an -a- in the stem has to become -ö-. That is the u-shift you met with dagur and dögum, and it works the same here.",
          ex: [
            ["dansa — við dönsuðum", "we danced"],
            ["safna — við söfnuðum", "we collected"],
            ["tapa — þeir töpuðu", "they lost"]
          ],
          tip: "No -a- in the stem, no change: skoða keeps its o, spila keeps its i."
        },
        {
          h: "þá and svo push the verb forward",
          p: "Start a sentence with þá (then) or svo (and then) and the verb jumps in front of the subject, exactly as it does after í gær.",
          ex: [
            ["Þá hringdi ég í Sóleyju.", "Then I rang Sóley."],
            ["Svo labbaði ég heim.", "Then I walked home."]
          ]
        }
      ],
      vocab: ["skoða", "prófa", "versla", "laga", "spila", "safna", "tapa", "þá", "svo"],
      items: [
        { t: "table", q: "Complete the past tense of dansa.",
          cols: ["", "dansa í gær"],
          rows: [
            { label: "ég", cells: ["dansaði"], blank: [0] },
            { label: "þú", cells: ["dansaðir"], blank: [] },
            { label: "hann", cells: ["dansaði"], blank: [] },
            { label: "við", cells: ["dönsuðum"], blank: [0] },
            { label: "þið", cells: ["dönsuðuð"], blank: [] },
            { label: "þeir", cells: ["dönsuðu"], blank: [0] }
          ] },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Við ___ um Ísland í gær.", base: "tala", a: "töluðum",
          case: "", mode: "type",
          why: "The plural ending has a -u-, so the stem a turns into ö: töluðum." },

        { t: "fill", q: "Which form goes with þið?",
          sentence: "Þið ___ í nýju búðinni.", base: "versla",
          opts: ["verslaði", "versluðuð", "verslið"], a: "versluðuð",
          case: "", mode: "choice",
          why: "þið takes -uðuð in the past. No stem a here, so no ö." },

        { t: "choice", q: "Which one means “they played”?",
          opts: ["spiluðu", "spiluðum", "spilaði", "spila"], a: "spiluðu",
          note: "-uðu is the þeir ending; -uðum would be við." },

        { t: "build", q: "We looked at the pictures yesterday.",
          a: "Við skoðuðum myndirnar í gær", extra: ["skoðaði", "sáum", "um"],
          note: "skoða takes the accusative: myndirnar." },

        { t: "type", q: "Type: “I tried the fish.”", a: "Ég prófaði fiskinn",
          hint: "prófa + accusative" },

        { t: "listen", speak: "Þeir töpuðu leiknum í gær.", q: "What did you hear?", mode: "choice",
          opts: ["Þeir töpuðu leiknum í gær.", "Þeir töpuðu leiknum í fyrra.", "Þeir spiluðu leikinn í gær."],
          a: "Þeir töpuðu leiknum í gær.",
          note: "tapa governs the dative: tapa leiknum, not leikinn." },

        { t: "match", q: "Match the verbs",
          pairs: [["skoða", "to look at"], ["prófa", "to try out"], ["versla", "to do the shopping"], ["spila", "to play"], ["safna", "to collect"]] },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ kaffi handa Jónasi í morgun.", base: "laga", a: "lagaði",
          case: "", mode: "type",
          why: "laga kaffi is the ordinary way to say “make coffee”. Past: lag-a-ði." },

        { t: "build", q: "Then I rang Sóley.",
          a: "Þá hringdi ég í Sóleyju", extra: ["hún", "þar", "með"],
          note: "þá takes first place, so the verb comes before ég. hringja í wants the accusative Sóleyju." },

        { t: "speak", is: "Ég verslaði og svo labbaði ég heim.", en: "I did the shopping and then walked home.",
          tip: "After svo the verb comes first: svo labbaði ég, never svo ég labbaði." },

        { t: "choice", q: "Which plural is right: við ___ (safna)?",
          opts: ["söfnuðum", "safnaðum", "safnuðum", "söfnuðuð"], a: "söfnuðum",
          note: "Ending -uðum, and the stem a is dragged to ö by the u." }
      ]
    },

    {
      n: 3,
      id: "u16l3",
      kind: "grammar",
      title: "-di, -ði eða -ti?",
      en: "The second weak class",
      goal: "Pick the right consonant for every -i verb in the past.",
      minutes: 14,
      icon: "🔤",
      teach: [
        {
          h: "The other half of the weak verbs",
          p: "If the ég-form of a verb ends in -i rather than -a — heyri, geri, horfi, reyni — the past is built differently. The -a of the infinitive is thrown away and a single consonant is glued straight onto the stem: heyr + ði, reyn + di, miss + ti.",
          ex: [
            ["heyra — ég heyrði", "I heard"],
            ["reyna — ég reyndi", "I tried"],
            ["missa — ég missti", "I missed"]
          ]
        },
        {
          h: "The last sound of the stem decides",
          p: "You do not have to memorise which verb takes which letter. Say the stem out loud and let the final sound choose for you. It is the same instinct that gives you komdu, heyrðu and sæktu in the imperative.",
          table: {
            cols: ["stem ends in", "nafnháttur", "þátíð"],
            rows: [
              ["l, m, n", "reyna", "reyndi"],
              ["p, t, k, s", "missa", "missti"],
              ["a vowel, r, f, g, ð", "horfa", "horfði"],
              ["lg — the l wins", "fylgja", "fylgdi"]
            ]
          },
          tip: "If the stem already ends in the right letter, nothing new is added: gista gives gisti, senda gives sendi."
        },
        {
          h: "The endings after that consonant",
          p: "There is no -a- anywhere in this class. Singular: -i, -ir, -i. Plural: -um, -uð, -u. Watch for the u-shift in the plural when the stem holds an a: vakti but vöktum.",
          table: {
            cols: ["", "heyra", "vekja"],
            rows: [
              ["ég", "heyrði", "vakti"],
              ["þú", "heyrðir", "vaktir"],
              ["hún", "heyrði", "vakti"],
              ["við", "heyrðum", "vöktum"],
              ["þið", "heyrðuð", "vöktuð"],
              ["þær", "heyrðu", "vöktu"]
            ]
          }
        },
        {
          h: "Seven that also change their vowel",
          p: "A small group is weak — the past really does end in -ti or -ði — but the stem vowel shifts as well. These are common, so learn them as pairs.",
          list: [
            "kaupa → keypti (bought)",
            "segja → sagði (said)",
            "spyrja → spurði (asked)",
            "vekja → vakti (woke someone)",
            "flytja → flutti (moved)",
            "sækja → sótti (fetched)",
            "þykja → þótti (seemed)"
          ],
          tip: "Icelandic dictionaries print exactly these three parts — horfa (horfi, horfði, horft) — so the past is never a guess."
        }
      ],
      vocab: ["horfa", "reyna", "sýna", "missa", "brosa", "gista", "æfa", "fylgja", "vekja", "flytja", "leigja", "segja", "gera", "spyrja", "fortíð"],
      items: [
        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ á sjónvarpið í gærkvöldi.", base: "horfa", a: "horfði",
          case: "", mode: "type",
          why: "The stem horf- ends in f, so the consonant is ð: horfði." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Hún ___ að hringja í mig.", base: "reyna", a: "reyndi",
          case: "", mode: "type",
          why: "The stem reyn- ends in n, and n always pulls a d: reyndi." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ af strætó í morgun.", base: "missa", a: "missti",
          case: "", mode: "type",
          why: "The stem ends in s, so the consonant is t. missa af takes the dative." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Sóley ___ mér nýju bókina.", base: "sýna", a: "sýndi",
          case: "", mode: "type",
          why: "sýn- ends in n, so -di. sýna hands the person the dative and the thing the accusative." },

        { t: "fill", q: "Which plural form is right?",
          sentence: "Við ___ í tvo tíma í gær.", base: "æfa",
          opts: ["æfðum", "æfuðum", "æfðuð"], a: "æfðum",
          case: "", mode: "choice",
          why: "æf- ends in f, so -ði, and the við ending is a bare -um: æfðum." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Hann ___ þegar hann sá mig.", base: "brosa", a: "brosti",
          case: "", mode: "type",
          why: "bros- ends in s, so the consonant is t." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Anna ___ til Reykjavíkur í fyrra.", base: "flytja", a: "flutti",
          case: "", mode: "type",
          why: "flytja is one of the vowel-changers: y becomes u, and the ending is -ti." },

        { t: "type", q: "Type: “Mum woke me at six.”", a: "Mamma vakti mig klukkan sex",
          hint: "vekja → vakti",
          note: "vekja means waking somebody else. Waking up by yourself is vakna." },

        { t: "fill", q: "Which form goes with þú?",
          sentence: "Hvað ___ þú í gær?", base: "gera",
          opts: ["gerðir", "gerði", "gerðuð"], a: "gerðir",
          case: "", mode: "choice",
          why: "The þú ending in the past is always -r on top of the singular form: gerði → gerðir." },

        { t: "table", q: "Which consonant does the stem ask for?",
          cols: ["", "nafnháttur", "þátíð"],
          rows: [
            { label: "l, m, n", cells: ["reyna", "reyndi"], blank: [1] },
            { label: "p, t, k, s", cells: ["missa", "missti"], blank: [1] },
            { label: "r, f, g, ð", cells: ["horfa", "horfði"], blank: [1] },
            { label: "lg", cells: ["fylgja", "fylgdi"], blank: [] }
          ] },

        { t: "table", q: "Complete the past tense of heyra.",
          cols: ["", "heyra í gær"],
          rows: [
            { label: "ég", cells: ["heyrði"], blank: [] },
            { label: "þú", cells: ["heyrðir"], blank: [0] },
            { label: "hún", cells: ["heyrði"], blank: [] },
            { label: "við", cells: ["heyrðum"], blank: [0] },
            { label: "þið", cells: ["heyrðuð"], blank: [] },
            { label: "þær", cells: ["heyrðu"], blank: [0] }
          ] },

        { t: "choice", q: "Which is the past of kaupa?",
          opts: ["keypti", "kaupti", "kaupaði", "keyfti"], a: "keypti",
          note: "Weak ending -ti, but the stem vowel au slides to ey. Same shape in sækja → sótti." },

        { t: "build", q: "I asked him about the bus.",
          a: "Ég spurði hann um strætó", extra: ["spurðir", "að", "með"],
          note: "spyrja takes an accusative person, and um for the topic." },

        { t: "listen", speak: "Ég leigði bíl í síðustu viku.", q: "What did you hear?", mode: "choice",
          opts: ["Ég leigði bíl í síðustu viku.", "Ég leigði bíl í fyrra.", "Ég keypti bíl í síðustu viku."],
          a: "Ég leigði bíl í síðustu viku.",
          note: "leigja → leigði: the g sits after a diphthong, so it takes ð." }
      ]
    },

    {
      n: 4,
      id: "u16l4",
      kind: "lesson",
      title: "Ég var, ég hafði",
      en: "Was, were, had",
      goal: "Use var and hafði, and say how long ago something was.",
      minutes: 11,
      icon: "⏳",
      teach: [
        {
          h: "var, varst, var",
          p: "vera is the verb you will reach for most often in any story, and its past is irregular enough to be worth ten minutes on its own.",
          table: {
            cols: ["", "vera"],
            rows: [
              ["ég", "var"],
              ["þú", "varst"],
              ["hann", "var"],
              ["við", "vorum"],
              ["þið", "voruð"],
              ["þeir", "voru"]
            ]
          },
          tip: "First and third person singular are identical: var. Only the context tells you who."
        },
        {
          h: "hafði — and vera með",
          p: "hafa is regular once you know its past stem: hafði, hafðir, hafði, höfðum, höfðuð, höfðu. But remember that everyday “I have my keys on me” is vera með plus the accusative, so its past is var með.",
          ex: [
            ["Ég hafði ekki tíma.", "I didn't have time."],
            ["Ég var með lyklana í gær.", "I had the keys yesterday."],
            ["Við höfðum engan pening.", "We had no money."]
          ]
        },
        {
          h: "How long ago",
          p: "“Ago” is fyrir plus the dative. The number goes into the dative too, which is why it is þremur and not þrír.",
          list: [
            "fyrir hálftíma — half an hour ago",
            "fyrir þremur dögum — three days ago",
            "fyrir viku — a week ago",
            "fyrir mánuði — a month ago",
            "fyrir tveimur árum — two years ago"
          ],
          tip: "þess vegna (therefore) and af því að (because) glue two past sentences together. After þess vegna the verb comes first; after af því að it does not."
        }
      ],
      vocab: ["fyrir þremur dögum", "um helgina", "samt", "þess vegna", "af því að", "minning"],
      items: [
        { t: "table", q: "Complete the past tense of vera.",
          cols: ["", "vera"],
          rows: [
            { label: "ég", cells: ["var"], blank: [0] },
            { label: "þú", cells: ["varst"], blank: [] },
            { label: "hann", cells: ["var"], blank: [] },
            { label: "við", cells: ["vorum"], blank: [0] },
            { label: "þið", cells: ["voruð"], blank: [] },
            { label: "þeir", cells: ["voru"], blank: [0] }
          ] },

        { t: "fill", q: "Put vera in the past.",
          sentence: "___ þú heima í gær?", base: "vera", a: "varst",
          case: "", mode: "type",
          why: "þú takes varst — the only past form of vera with a real ending." },

        { t: "fill", q: "Which plural form is right?",
          sentence: "Við ___ öll þreytt eftir ferðina.", base: "vera",
          opts: ["vorum", "vórum", "voruð"], a: "vorum",
          case: "", mode: "choice",
          why: "The plural stem is vor-, with a short o and no accent." },

        { t: "fill", q: "Put hafa in the past.",
          sentence: "Ég ___ ekki tíma til að hringja.", base: "hafa", a: "hafði",
          case: "", mode: "type",
          why: "hafa is weak: haf- plus ð plus -i." },

        { t: "choice", q: "Which one means “three days ago”?",
          opts: ["fyrir þremur dögum", "eftir þrjá daga", "í þrjá daga", "fyrir þrjá daga"], a: "fyrir þremur dögum",
          note: "eftir þrjá daga is in three days, í þrjá daga is for three days. Only the dative looks backwards." },

        { t: "fill", q: "A week ago.",
          sentence: "Ég flutti hingað fyrir ___ .", base: "vika", a: "viku",
          case: "ÞGF", mode: "type",
          why: "fyrir in the sense of “ago” governs the dative." },

        { t: "build", q: "I had the keys yesterday.",
          a: "Ég var með lyklana í gær", extra: ["hafði", "mig", "um"],
          note: "vera með is the everyday “have on you”, so its past is var með plus the accusative." },

        { t: "build", q: "I didn't come because I was ill.",
          a: "Ég kom ekki af því að ég var veikur", extra: ["þess", "vegna", "þreyttur"],
          note: "af því að introduces an ordinary clause — subject first, verb second." },

        { t: "type", q: "Type: “Where were you last night?”", a: "Hvar varst þú í gærkvöldi?",
          hint: "vera in the þú form" },

        { t: "listen", speak: "Þeir voru í sundlauginni um helgina.", q: "What did you hear?", mode: "choice",
          opts: ["Þeir voru í sundlauginni um helgina.", "Þeir voru í sundlauginni í gær.", "Við vorum í sundlauginni um helgina."],
          a: "Þeir voru í sundlauginni um helgina.",
          note: "um helgina means over the weekend, with the accusative after um." },

        { t: "match", q: "Match the connectors and time words",
          pairs: [["fyrir þremur dögum", "three days ago"], ["um helgina", "over the weekend"], ["samt", "still, nevertheless"], ["þess vegna", "therefore"], ["af því að", "because"], ["minning", "memory"]] },

        { t: "speak", is: "Ég var veik og þess vegna kom ég ekki.", en: "I was ill, and that is why I didn't come.",
          tip: "After þess vegna the verb jumps ahead: kom ég, not ég kom." }
      ]
    },

    {
      n: 5,
      id: "u16l5",
      kind: "story",
      title: "Lundinn í bakaríinu",
      en: "The puffin in the bakery",
      goal: "Follow a whole story told in the past tense.",
      minutes: 11,
      icon: "🥐",
      teach: [
        {
          h: "Fyrst, svo, síðan, loksins",
          p: "These four carry a story from one event to the next: fyrst for the opening move, svo and síðan for what came after, loksins for the relief at the end. allt í einu drops a surprise in the middle.",
          ex: [
            ["Fyrst lagaði ég kaffi.", "First I made coffee."],
            ["Svo hringdi ég í Jónas.", "Then I rang Jónas."],
            ["Loksins kom hann.", "Finally he came."]
          ],
          tip: "Every one of them takes first place in the sentence, so every one of them pushes the verb in front of the subject."
        },
        {
          h: "Listen for the ending, not the verb",
          p: "In this story the past is doing all the work. -aði tells you it was an -a verb; -ti, -di or -ði tells you it was an -i verb; var and sótti you simply know."
        }
      ],
      story: {
        title: "Í bakaríinu",
        lines: [
          { sp: "Anna", is: "Sæl, Sóley. Þú varst ekki heima í gærkvöldi.", en: "Hi Sóley. You weren't home last night." },
          { sp: "Sóley", is: "Nei, ég var í bakaríinu til klukkan tíu.", en: "No, I was at the bakery until ten." },
          { sp: "Anna", is: "Svona seint? Af hverju?", en: "That late? Why?" },
          { sp: "Sóley", is: "Ég opnaði gluggann klukkan sjö og allt í einu var lundi inni hjá mér.", en: "I opened the window at seven and suddenly there was a puffin inside with me." },
          { sp: "Anna", is: "Lundi? Inni í bakaríinu?", en: "A puffin? Inside the bakery?" },
          { sp: "Sóley", is: "Já. Hann labbaði á borðið og skoðaði kleinurnar.", en: "Yes. He walked onto the table and had a look at the kleinur." },
          { sp: "Anna", is: "Þetta var Lúlli. Hann heimsótti Jónas í fyrradag.", en: "That was Lúlli. He visited Jónas the day before yesterday." },
          { sp: "Sóley", is: "Ég reyndi að ná honum en hann var alltof fljótur.", en: "I tried to catch him but he was far too quick." },
          { sp: "Anna", is: "Og hvað gerðir þú þá?", en: "And what did you do then?" },
          { sp: "Sóley", is: "Ég hringdi í Jónas og hann sótti fuglinn klukkan tíu.", en: "I rang Jónas and he fetched the bird at ten." },
          { sp: "Anna", is: "Loksins! En kleinurnar?", en: "Finally! And the kleinur?" },
          { sp: "Sóley", is: "Lúlli borðaði tvær. Eftir það lokaði ég glugganum.", en: "Lúlli ate two. After that I closed the window." }
        ],
        glossary: [
          ["lundi", "puffin"],
          ["kleina", "kleina, a twisted doughnut"],
          ["allt í einu", "suddenly"],
          ["ná", "to catch (+ dative)"],
          ["alltof fljótur", "far too quick"],
          ["sótti", "fetched (past of sækja)"]
        ]
      },
      vocab: ["fyrst", "síðan", "loksins", "allt í einu", "eftir það", "saga"],
      items: [
        { t: "choice", q: "Hvar var Sóley í gærkvöldi?",
          opts: ["Í bakaríinu", "Heima", "Í sundlauginni", "Hjá Jónasi"], a: "Í bakaríinu",
          note: "Ég var í bakaríinu til klukkan tíu." },

        { t: "choice", q: "Hvað gerði lundinn á borðinu?",
          opts: ["Hann skoðaði kleinurnar", "Hann lagaði kaffi", "Hann opnaði gluggann", "Hann hringdi í Jónas"],
          a: "Hann skoðaði kleinurnar",
          note: "skoðaði is the past of skoða, an ordinary -a verb." },

        { t: "choice", q: "Who came and fetched the puffin?",
          opts: ["Jónas", "Anna", "Sóley", "Lúlli"], a: "Jónas",
          note: "sótti is the past of sækja — a weak verb with a vowel change." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Sóley ___ gluggann klukkan sjö.", base: "opna", a: "opnaði",
          case: "", mode: "type",
          why: "opna is an -a verb: opn-a-ði." },

        { t: "fill", q: "Which form goes with hún?",
          sentence: "Eftir það ___ hún glugganum.", base: "loka",
          opts: ["lokaði", "lokaðir", "lokuðum"], a: "lokaði",
          case: "", mode: "choice",
          why: "Third person singular is -aði. loka governs the dative: glugganum." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Hann ___ Jónas í fyrradag.", base: "heimsækja", a: "heimsótti",
          case: "", mode: "type",
          why: "heimsækja follows sækja: sótti, heimsótti." },

        { t: "build", q: "Then I rang Jónas.",
          a: "Þá hringdi ég í Jónas", extra: ["hann", "með", "síðan"],
          note: "þá first, verb second, subject third." },

        { t: "type", q: "Type: “Finally he came.”", a: "Loksins kom hann",
          hint: "Three words, verb in the middle." },

        { t: "listen", speak: "Ég reyndi að ná honum.", q: "What did you hear?", mode: "choice",
          opts: ["Ég reyndi að ná honum.", "Ég reyndi að ná henni.", "Ég reyni að ná honum."],
          a: "Ég reyndi að ná honum.",
          note: "ná takes the dative, so honum for a male puffin." },

        { t: "match", q: "Match the narrative connectors",
          pairs: [["fyrst", "first of all"], ["svo", "and then"], ["síðan", "afterwards"], ["loksins", "finally"], ["allt í einu", "suddenly"], ["eftir það", "after that"]] },

        { t: "gender", word: "saga", a: "kvk",
          note: "Feminine: sagan, söguna, sögunni, sögunnar." },

        { t: "speak", is: "Fyrst lagaði ég kaffi og svo hringdi ég í Jónas.", en: "First I made coffee and then I rang Jónas.",
          tip: "Two connectors, two inversions. Keep the verb glued to the connector." }
      ]
    },

    {
      n: 6,
      id: "u16l6",
      kind: "checkpoint",
      title: "Þátíðarpróf",
      en: "Unit 16 checkpoint",
      goal: "Prove you can tell someone what happened yesterday.",
      minutes: 13,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "Time words that close a box: í gær, í fyrradag, í gærkvöldi, í fyrra, um daginn, áðan, nýlega.",
            "í morgun is this morning; á morgun is tomorrow.",
            "-a verbs: -aði, -aðir, -aði, -uðum, -uðuð, -uðu, with a becoming ö in the plural.",
            "-i verbs: -di after l, m, n; -ti after p, t, k, s; -ði after vowels, r, f, g, ð.",
            "kaupa → keypti, segja → sagði, spyrja → spurði, vekja → vakti, flytja → flutti, sækja → sótti.",
            "var, varst, var, vorum, voruð, voru — and hafði, höfðum.",
            "fyrir + dative for “ago”, and fyrst, svo, síðan, loksins to carry a story."
          ]
        }
      ],
      vocab: ["í gær", "í fyrradag", "í fyrra", "áðan", "nýlega", "um daginn", "hlusta", "dansa", "skoða", "horfa", "reyna", "sýna", "missa", "gista", "segja", "gera", "fyrst", "svo", "loksins", "þess vegna", "fyrir þremur dögum"],
      items: [
        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ við Jónas í gær.", base: "tala", a: "talaði",
          case: "", mode: "type",
          why: "-a verb: tal-a-ði." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Við ___ á tónlist í gærkvöldi.", base: "hlusta", a: "hlustuðum",
          case: "", mode: "type",
          why: "The við ending is -uðum. No a in the stem, so no ö." },

        { t: "fill", q: "Which form goes with þú?",
          sentence: "Þú ___ ekki heima í fyrradag.", base: "vera",
          opts: ["varst", "vart", "vorum"], a: "varst",
          case: "", mode: "choice",
          why: "vera in the past: var, varst, var." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Hún ___ mér nýja bók.", base: "sýna", a: "sýndi",
          case: "", mode: "type",
          why: "The stem ends in n, so -di." },

        { t: "fill", q: "Put the verb in the past.",
          sentence: "Ég ___ af strætó í morgun.", base: "missa", a: "missti",
          case: "", mode: "type",
          why: "The stem ends in s, so -ti." },

        { t: "choice", q: "Which is right: Við ___ alla nóttina.",
          opts: ["dönsuðum", "dansuðum", "dansaðum", "dönsuðuð"], a: "dönsuðum",
          note: "Ending -uðum, and the u drags the stem a down to ö." },

        { t: "choice", q: "Which time expression looks backwards?",
          opts: ["á morgun", "í morgun", "á morgnana", "næstu viku"], a: "í morgun",
          note: "í morgun is a morning that has already been used up." },

        { t: "build", q: "We stayed at Jónas's place last week.",
          a: "Við gistum hjá Jónasi í síðustu viku", extra: ["með", "hann", "fyrra"],
          note: "gista already ends in t, so the past adds nothing: gisti, gistum." },

        { t: "build", q: "I was tired and that is why I went home.",
          a: "Ég var þreyttur og þess vegna fór ég heim", extra: ["af", "því", "hafði"],
          note: "þess vegna puts the verb in front of the subject: fór ég." },

        { t: "type", q: "Type: “What did you do yesterday?”", a: "Hvað gerðir þú í gær?",
          hint: "gera → gerði, gerðir" },

        { t: "listen", speak: "Ég keypti nýja skó í síðustu viku.", q: "What did you hear?", mode: "choice",
          opts: ["Ég keypti nýja skó í síðustu viku.", "Ég keypti nýja skó í fyrra.", "Ég leigði bíl í síðustu viku."],
          a: "Ég keypti nýja skó í síðustu viku.",
          note: "keypti is weak but changes its vowel. skór is plural here: nýja skó." },

        { t: "match", q: "Match the past time expressions",
          pairs: [["í gær", "yesterday"], ["í fyrradag", "the day before yesterday"], ["í fyrra", "last year"], ["áðan", "a moment ago"], ["nýlega", "recently"], ["um daginn", "the other day"]] },

        { t: "table", q: "One example from each class.",
          cols: ["", "nafnháttur", "þátíð (ég)"],
          rows: [
            { label: "-aði", cells: ["dansa", "dansaði"], blank: [1] },
            { label: "-ði", cells: ["horfa", "horfði"], blank: [1] },
            { label: "-di", cells: ["reyna", "reyndi"], blank: [] },
            { label: "-ti", cells: ["missa", "missti"], blank: [1] }
          ] },

        { t: "table", q: "Complete vera and hafa in the past.",
          cols: ["", "vera", "hafa"],
          rows: [
            { label: "ég", cells: ["var", "hafði"], blank: [] },
            { label: "þú", cells: ["varst", "hafðir"], blank: [0] },
            { label: "við", cells: ["vorum", "höfðum"], blank: [1] },
            { label: "þeir", cells: ["voru", "höfðu"], blank: [] }
          ] }
      ]
    }
  ]
};

export const vocab = [
  // ── tíminn sem er liðinn / time that has passed ───────────────────────
  { w: "í gær", en: "yesterday", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Ég talaði við Jónas í gær.", en: "I talked to Jónas yesterday." } },

  { w: "í fyrradag", en: "the day before yesterday", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Hann kom heim í fyrradag.", en: "He came home the day before yesterday." } },

  { w: "í gærkvöldi", en: "last night, yesterday evening", pos: "phrase", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Við horfðum á mynd í gærkvöldi.", en: "We watched a film last night." } },

  { w: "í morgun", en: "this morning", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Ég vaknaði snemma í morgun.", en: "I woke up early this morning." } },

  { w: "í fyrra", en: "last year", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Anna bjó í Danmörku í fyrra.", en: "Anna lived in Denmark last year." } },

  { w: "í síðustu viku", en: "last week", pos: "phrase", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Ég keypti nýja skó í síðustu viku.", en: "I bought new shoes last week." } },

  { w: "um daginn", en: "the other day", pos: "phrase", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Ég hitti Sóleyju um daginn.", en: "I ran into Sóley the other day." } },

  { w: "um helgina", en: "over the weekend", pos: "phrase", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Við dönsuðum um helgina.", en: "We danced over the weekend." } },

  { w: "áðan", en: "a moment ago, just now", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Hann hringdi áðan.", en: "He rang a moment ago." } },

  { w: "nýlega", en: "recently, lately", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Við fluttum hingað nýlega.", en: "We moved here recently." } },

  { w: "fyrir þremur dögum", en: "three days ago", pos: "phrase", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Ég sendi bréfið fyrir þremur dögum.", en: "I sent the letter three days ago." } },

  { w: "lengi", en: "for a long time", pos: "adv", topic: "past-time", unit: 16, cefr: "A2",
    ex: { is: "Við töluðum lengi saman.", en: "We talked together for a long time." } },

  // ── að tengja saman / narrative connectors ────────────────────────────
  { w: "fyrst", en: "first, at first", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Fyrst lagaði ég kaffi.", en: "First I made coffee." } },

  { w: "svo", en: "then, and then", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Svo labbaði ég heim.", en: "Then I walked home." } },

  { w: "síðan", en: "afterwards, then", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Síðan hittum við Jónas.", en: "Afterwards we met Jónas." } },

  { w: "þá", en: "then, at that point", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Þá hringdi síminn.", en: "Then the phone rang." } },

  { w: "loksins", en: "finally, at last", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Loksins kom strætó.", en: "Finally the bus came." } },

  { w: "allt í einu", en: "suddenly", pos: "phrase", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Allt í einu byrjaði að rigna.", en: "Suddenly it started to rain." } },

  { w: "eftir það", en: "after that", pos: "phrase", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Eftir það fórum við heim.", en: "After that we went home." } },

  { w: "þess vegna", en: "therefore, that is why", pos: "phrase", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Ég var veik og þess vegna kom ég ekki.", en: "I was ill, and that is why I didn't come." } },

  { w: "samt", en: "still, nevertheless", pos: "adv", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Ég var þreyttur en ég kom samt.", en: "I was tired but I came anyway." } },

  { w: "af því að", en: "because", pos: "conj", topic: "connectors", unit: 16, cefr: "A2",
    ex: { is: "Ég kom ekki af því að ég var veikur.", en: "I didn't come because I was ill." } },

  // ── sagnir með -aði / the -aði class ──────────────────────────────────
  { w: "hlusta", en: "to listen", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A1",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["hlusta", "hlustar", "hlustar", "hlustum", "hlustið", "hlusta"],
            past: ["hlustaði", "hlustaðir", "hlustaði", "hlustuðum", "hlustuðuð", "hlustuðu"], pp: "hlustað" },
    ex: { is: "Ég hlustaði á útvarpið í morgun.", en: "I listened to the radio this morning." } },

  { w: "dansa", en: "to dance", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A1",
    gov: "none", vclass: "weak-a",
    conj: { pres: ["dansa", "dansar", "dansar", "dönsum", "dansið", "dansa"],
            past: ["dansaði", "dansaðir", "dansaði", "dönsuðum", "dönsuðuð", "dönsuðu"], pp: "dansað" },
    ex: { is: "Við dönsuðum alla nóttina.", en: "We danced all night." } },

  { w: "labba", en: "to walk, to stroll", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "none", vclass: "weak-a",
    conj: { pres: ["labba", "labbar", "labbar", "löbbum", "labbið", "labba"],
            past: ["labbaði", "labbaðir", "labbaði", "löbbuðum", "löbbuðuð", "löbbuðu"], pp: "labbað" },
    ex: { is: "Ég labbaði heim í gærkvöldi.", en: "I walked home last night." } },

  { w: "skoða", en: "to look at, to examine", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["skoða", "skoðar", "skoðar", "skoðum", "skoðið", "skoða"],
            past: ["skoðaði", "skoðaðir", "skoðaði", "skoðuðum", "skoðuðuð", "skoðuðu"], pp: "skoðað" },
    ex: { is: "Við skoðuðum myndirnar í gær.", en: "We looked at the pictures yesterday." } },

  { w: "prófa", en: "to try, to test", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["prófa", "prófar", "prófar", "prófum", "prófið", "prófa"],
            past: ["prófaði", "prófaðir", "prófaði", "prófuðum", "prófuðuð", "prófuðu"], pp: "prófað" },
    ex: { is: "Ég prófaði fiskinn.", en: "I tried the fish." } },

  { w: "versla", en: "to shop, to do the shopping", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "none", vclass: "weak-a",
    conj: { pres: ["versla", "verslar", "verslar", "verslum", "verslið", "versla"],
            past: ["verslaði", "verslaðir", "verslaði", "versluðum", "versluðuð", "versluðu"], pp: "verslað" },
    ex: { is: "Þið versluðuð í nýju búðinni.", en: "You did your shopping in the new shop." } },

  { w: "laga", en: "to make, to fix", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["laga", "lagar", "lagar", "lögum", "lagið", "laga"],
            past: ["lagaði", "lagaðir", "lagaði", "löguðum", "löguðuð", "löguðu"], pp: "lagað" },
    ex: { is: "Ég lagaði kaffi handa Jónasi.", en: "I made coffee for Jónas." } },

  { w: "spila", en: "to play", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["spila", "spilar", "spilar", "spilum", "spilið", "spila"],
            past: ["spilaði", "spilaðir", "spilaði", "spiluðum", "spiluðuð", "spiluðu"], pp: "spilað" },
    ex: { is: "Þeir spiluðu vel í gær.", en: "They played well yesterday." } },

  { w: "safna", en: "to collect, to gather", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["safna", "safnar", "safnar", "söfnum", "safnið", "safna"],
            past: ["safnaði", "safnaðir", "safnaði", "söfnuðum", "söfnuðuð", "söfnuðu"], pp: "safnað" },
    ex: { is: "Við söfnuðum peningum í fyrra.", en: "We collected money last year." } },

  { w: "tapa", en: "to lose", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["tapa", "tapar", "tapar", "töpum", "tapið", "tapa"],
            past: ["tapaði", "tapaðir", "tapaði", "töpuðum", "töpuðuð", "töpuðu"], pp: "tapað" },
    ex: { is: "Þeir töpuðu leiknum í gær.", en: "They lost the match yesterday." } },

  // ── sagnir með -di, -ði, -ti ──────────────────────────────────────────
  { w: "horfa", en: "to watch", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A1",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["horfi", "horfir", "horfir", "horfum", "horfið", "horfa"],
            past: ["horfði", "horfðir", "horfði", "horfðum", "horfðuð", "horfðu"], pp: "horft" },
    ex: { is: "Ég horfði á sjónvarpið í gærkvöldi.", en: "I watched television last night." } },

  { w: "reyna", en: "to try", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["reyni", "reynir", "reynir", "reynum", "reynið", "reyna"],
            past: ["reyndi", "reyndir", "reyndi", "reyndum", "reynduð", "reyndu"], pp: "reynt" },
    ex: { is: "Ég reyndi að ná honum.", en: "I tried to catch him." } },

  { w: "sýna", en: "to show", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["sýni", "sýnir", "sýnir", "sýnum", "sýnið", "sýna"],
            past: ["sýndi", "sýndir", "sýndi", "sýndum", "sýnduð", "sýndu"], pp: "sýnt" },
    ex: { is: "Sóley sýndi mér nýju bókina.", en: "Sóley showed me the new book." } },

  { w: "missa", en: "to lose, to miss", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["missi", "missir", "missir", "missum", "missið", "missa"],
            past: ["missti", "misstir", "missti", "misstum", "misstuð", "misstu"], pp: "misst" },
    ex: { is: "Ég missti af strætó í morgun.", en: "I missed the bus this morning." } },

  { w: "brosa", en: "to smile", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "none", vclass: "weak-i",
    conj: { pres: ["brosi", "brosir", "brosir", "brosum", "brosið", "brosa"],
            past: ["brosti", "brostir", "brosti", "brostum", "brostuð", "brostu"], pp: "brosað" },
    ex: { is: "Hann brosti þegar hann sá mig.", en: "He smiled when he saw me." } },

  { w: "gista", en: "to stay the night", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "none", vclass: "weak-i",
    conj: { pres: ["gisti", "gistir", "gistir", "gistum", "gistið", "gista"],
            past: ["gisti", "gistir", "gisti", "gistum", "gistuð", "gistu"], pp: "gist" },
    ex: { is: "Við gistum hjá Jónasi í síðustu viku.", en: "We stayed at Jónas's place last week." } },

  { w: "æfa", en: "to practise, to train", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["æfi", "æfir", "æfir", "æfum", "æfið", "æfa"],
            past: ["æfði", "æfðir", "æfði", "æfðum", "æfðuð", "æfðu"], pp: "æft" },
    ex: { is: "Við æfðum í tvo tíma í gær.", en: "We trained for two hours yesterday." } },

  { w: "fylgja", en: "to follow, to accompany", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["fylgi", "fylgir", "fylgir", "fylgjum", "fylgið", "fylgja"],
            past: ["fylgdi", "fylgdir", "fylgdi", "fylgdum", "fylgduð", "fylgdu"], pp: "fylgt" },
    ex: { is: "Hann fylgdi mér heim.", en: "He walked me home." } },

  { w: "vekja", en: "to wake someone up", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["vek", "vekur", "vekur", "vekjum", "vekið", "vekja"],
            past: ["vakti", "vaktir", "vakti", "vöktum", "vöktuð", "vöktu"], pp: "vakið" },
    ex: { is: "Mamma vakti mig klukkan sex.", en: "Mum woke me at six." } },

  { w: "flytja", en: "to move, to carry", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["flyt", "flytur", "flytur", "flytjum", "flytjið", "flytja"],
            past: ["flutti", "fluttir", "flutti", "fluttum", "fluttuð", "fluttu"], pp: "flutt" },
    ex: { is: "Anna flutti til Reykjavíkur í fyrra.", en: "Anna moved to Reykjavík last year." } },

  { w: "leigja", en: "to rent", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["leigi", "leigir", "leigir", "leigjum", "leigið", "leigja"],
            past: ["leigði", "leigðir", "leigði", "leigðum", "leigðuð", "leigðu"], pp: "leigt" },
    ex: { is: "Ég leigði bíl í síðustu viku.", en: "I rented a car last week." } },

  { w: "segja", en: "to say, to tell", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A1",
    gov: "ÞF+ÞGF", vclass: "weak-ja",
    conj: { pres: ["segi", "segir", "segir", "segjum", "segið", "segja"],
            past: ["sagði", "sagðir", "sagði", "sögðum", "sögðuð", "sögðu"], pp: "sagt" },
    ex: { is: "Hvað sagðir þú?", en: "What did you say?" } },

  { w: "gera", en: "to do, to make", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A1",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["geri", "gerir", "gerir", "gerum", "gerið", "gera"],
            past: ["gerði", "gerðir", "gerði", "gerðum", "gerðuð", "gerðu"], pp: "gert" },
    ex: { is: "Hvað gerðir þú í gær?", en: "What did you do yesterday?" } },

  { w: "spyrja", en: "to ask", pos: "verb", topic: "past-verbs", unit: 16, cefr: "A2",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["spyr", "spyrð", "spyr", "spyrjum", "spyrjið", "spyrja"],
            past: ["spurði", "spurðir", "spurði", "spurðum", "spurðuð", "spurðu"], pp: "spurt" },
    ex: { is: "Ég spurði hann um strætó.", en: "I asked him about the bus." } },

  // ── nafnorð / nouns ───────────────────────────────────────────────────
  { w: "fortíð", en: "the past, past tense", pos: "noun", g: "kvk", topic: "grammar", unit: 16, cefr: "A2",
    forms: { sg: ["fortíð", "fortíð", "fortíð", "fortíðar"],
             pl: ["fortíðir", "fortíðir", "fortíðum", "fortíða"] },
    ex: { is: "Þessi sögn er í fortíð.", en: "This verb is in the past tense." } },

  { w: "saga", en: "story, history", pos: "noun", g: "kvk", topic: "storytelling", unit: 16, cefr: "A2",
    forms: { sg: ["saga", "sögu", "sögu", "sögu"],
             pl: ["sögur", "sögur", "sögum", "sagna"] },
    ex: { is: "Sóley sagði mér skemmtilega sögu.", en: "Sóley told me a fun story." } },

  { w: "minning", en: "memory", pos: "noun", g: "kvk", topic: "storytelling", unit: 16, cefr: "A2",
    forms: { sg: ["minning", "minningu", "minningu", "minningar"],
             pl: ["minningar", "minningar", "minningum", "minninga"] },
    ex: { is: "Þetta er falleg minning.", en: "That is a lovely memory." } }
];

export default unit;
