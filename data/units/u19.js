// Unit 19 — Vinnan og framtíðin / Work and the future
// The modal system (geta + supine, mega, vilja, kunna, þurfa að, eiga að, ætla að, munu),
// three ways of talking about the future, relative clauses with sem and þar sem,
// and the everyday conjunctions.

export const unit = {
  id: 19,
  slug: "u19",
  title: "Vinnan og framtíðin",
  en: "Work and the future",
  cefr: "A2.2",
  icon: "💼",
  blurb: "Jobs, studies, money and plans — and every modal verb nailed down.",
  canDo: [
    "Say what I do for a living and where I work",
    "Use geta with a supine and pick the right shape after every other modal",
    "Talk about the future with a time word, with ætla að and with munu",
    "Join sentences with sem, þar sem, ef, þegar and af því að"
  ],
  lessons: [
    {
      n: 1,
      id: "u19l1",
      kind: "lesson",
      title: "Við hvað vinnur þú?",
      en: "Jobs and workplaces",
      goal: "Say what you do, where you do it, and join two halves of a sentence.",
      minutes: 10,
      icon: "🧰",
      teach: [
        {
          h: "Naming the job",
          p: "A job title after vera or vinna sem stands bare — Icelandic never puts an article in front of it. The title itself stays in the nominative because vera and verða never take an object.",
          ex: [
            ["Ég er kennari.", "I am a teacher."],
            ["Ég vinn sem hjúkrunarfræðingur.", "I work as a nurse."],
            ["Við hvað vinnur þú?", "What do you do for a living?"]
          ],
          tip: "Ég er einn kennari is not a sentence anyone says. Drop the number word."
        },
        {
          h: "hjá, á or í",
          p: "Three prepositions carry the workplace and all three take the dative. Which one you reach for depends on whether you are naming the employer, the kind of work, or the building.",
          table: {
            cols: ["forsetning", "hvað fylgir", "dæmi"],
            rows: [
              ["hjá + ÞGF", "the employer", "Ég vinn hjá borginni."],
              ["á + ÞGF", "an open workplace", "Hún vinnur á skrifstofu."],
              ["í + ÞGF", "a shop or building", "Hann vinnur í banka."]
            ]
          },
          tip: "Shifts get á too: vinna á vöktum, vera á vakt."
        },
        {
          h: "en, eða and the two words for because",
          p: "en marks a contrast, eða offers a choice. For a reason you have two options that are not interchangeable: því að can only sit between two clauses, while af því að is also what you answer with when somebody asks hvers vegna.",
          ex: [
            ["Launin eru lág en starfið er skemmtilegt.", "The pay is low but the job is fun."],
            ["Vinnurðu á daginn eða á kvöldin?", "Do you work days or evenings?"],
            ["Ég sæki um starfið því að ég þarf peninga.", "I am applying for the job because I need money."],
            ["Af því að ég vil læra meira.", "Because I want to learn more."]
          ]
        }
      ],
      vocab: ["atvinna", "starfsmaður", "vinnustaður", "skrifstofa", "fyrirtæki", "yfirmaður", "vinnufélagi", "verkfræðingur", "hjúkrunarfræðingur", "vakt"],
      items: [
        { t: "match", q: "Match the workplace words",
          pairs: [["yfirmaður", "boss"], ["vinnufélagi", "colleague"], ["skrifstofa", "office"], ["fyrirtæki", "company"], ["vakt", "shift"], ["starfsmaður", "employee"]] },

        { t: "gender", word: "atvinna", a: "kvk",
          note: "Feminine: atvinnan. Like vinna it ends in -u in the other three cases: atvinnu." },

        { t: "gender", word: "fyrirtæki", a: "hk",
          note: "Neuter: fyrirtækið. A -i neuter, so the dative plural picks up a j: fyrirtækjum." },

        { t: "choice", q: "How do you say “I work as a nurse”?",
          opts: ["Ég vinn sem hjúkrunarfræðingur", "Ég vinn eins og hjúkrunarfræðingur", "Ég er sem hjúkrunarfræðingur", "Ég vinn hjúkrunarfræðing"],
          a: "Ég vinn sem hjúkrunarfræðingur",
          note: "vinna sem plus the bare title in the nominative. eins og would mean you merely resemble one." },

        { t: "choice", q: "Which preposition names the employer? Hún vinnur ___ stóru fyrirtæki.",
          opts: ["hjá", "á", "í", "með"], a: "hjá",
          note: "hjá plus the dative for whoever pays you. The building itself would take í." },

        { t: "fill", q: "hjá takes the dative.", sentence: "Jónas vinnur hjá ___ .", base: "bankinn",
          a: "bankanum", case: "ÞGF", mode: "type",
          why: "banki is a weak masculine: banka in the dative, bankanum once the article is on." },

        { t: "fill", q: "Where does Sóley work?", sentence: "Sóley vinnur í ___ .", base: "bakaríið",
          opts: ["bakaríið", "bakaríinu", "bakarísins"], a: "bakaríinu", case: "ÞGF", mode: "choice",
          why: "í plus dative for a static workplace: bakaríi, then the article -nu." },

        { t: "build", q: "I want to become an engineer.",
          a: "Ég vil verða verkfræðingur", extra: ["verkfræðing", "vill", "að"],
          note: "vilja takes a bare infinitive, and verða leaves the job title in the nominative." },

        { t: "type", q: "Type: “I know how to bake bread.”", a: "Ég kann að baka brauð",
          hint: "kunna needs að before the infinitive",
          note: "kunna is about a skill you have learnt. Leaving out að is the usual slip." },

        { t: "choice", q: "Which one can open a sentence on its own?",
          opts: ["Af því að", "Því að", "Að því", "Því"], a: "Af því að",
          note: "því að only ever sits between two clauses. af því að can start the answer to hvers vegna." },

        { t: "listen", speak: "Ég vil vinna á skrifstofu en ekki á vöktum.", q: "What did you hear?", mode: "choice",
          opts: ["Ég vil vinna á skrifstofu en ekki á vöktum.", "Ég vil vinna í bakaríi en ekki á skrifstofu.", "Ég kann að vinna á skrifstofu og á vöktum."],
          a: "Ég vil vinna á skrifstofu en ekki á vöktum.",
          note: "en pins the contrast, and vöktum is the dative plural of vakt with its u-shift." },

        { t: "speak", is: "Ég vinn hjá litlu fyrirtæki í Kópavogi.", en: "I work for a small company in Kópavogur.",
          tip: "litlu is one soft [t]-less syllable pair — say lit-lu, not lít-lu." }
      ]
    },

    {
      n: 2,
      id: "u19l2",
      kind: "lesson",
      title: "Nám og framtíð",
      en: "Studies and what comes next",
      goal: "Talk about studying and about the future in all three ways.",
      minutes: 11,
      icon: "🎓",
      teach: [
        {
          h: "The present tense is already a future",
          p: "Icelandic has no separate future form. A plain present verb plus a time word does the whole job, exactly as English does with “I start on Monday”.",
          ex: [
            ["Ég byrja í nýrri vinnu á mánudaginn.", "I start a new job on Monday."],
            ["Við tökum prófið í næstu viku.", "We take the exam next week."],
            ["Anna lýkur náminu næsta vor.", "Anna finishes her studies next spring."]
          ],
          tip: "ljúka takes a dative object: ljúka náminu, ljúka prófinu."
        },
        {
          h: "ætla að — the plan you have already made",
          p: "This is the everyday future. ætla is an ordinary -a verb and it always keeps að in front of the infinitive.",
          ex: [
            ["Ég ætla að sækja um sumarvinnu.", "I am going to apply for a summer job."],
            ["Hvað ætlar þú að læra í haust?", "What are you going to study this autumn?"],
            ["Þau ætla ekki að hætta í skólanum.", "They are not going to drop out of school."]
          ]
        },
        {
          h: "munu — the written future",
          p: "mun plus a bare infinitive is the future of news bulletins, contracts and solemn promises. It has no að and it sounds heavier than ætla að, so keep it for statements about how things will turn out.",
          ex: [
            ["Fyrirtækið mun ráða tíu manns í sumar.", "The company will hire ten people this summer."],
            ["Þetta mun taka tíma.", "This will take time."],
            ["Ég mun aldrei gleyma þessu námskeiði.", "I will never forget this course."]
          ],
          table: {
            cols: ["", "munu"],
            rows: [["ég", "mun"], ["þú", "munt"], ["hann", "mun"], ["við", "munum"], ["þið", "munuð"], ["þeir", "munu"]]
          }
        },
        {
          h: "þegar and ef push the verb forward",
          p: "A clause opened by þegar or ef counts as the first slot of the sentence. The main verb then has to come second, so the subject slides in behind it.",
          ex: [
            ["Þegar ég útskrifast ætla ég að flytja til Akureyrar.", "When I graduate I am going to move to Akureyri."],
            ["Ef þú vilt starfið þarftu að senda umsókn.", "If you want the job you need to send an application."]
          ],
          tip: "Say the main clause to yourself backwards: ætla ég, þarftu. If the subject comes first, something has gone wrong."
        }
      ],
      vocab: ["nám", "námskeið", "próf", "menntun", "framtíð", "markmið", "útskrifast", "ljúka", "erfiður", "duglegur", "munu"],
      items: [
        { t: "match", q: "Match the study words",
          pairs: [["nám", "studies"], ["námskeið", "course"], ["próf", "exam"], ["menntun", "education"], ["framtíð", "future"], ["markmið", "goal"]] },

        { t: "gender", word: "nám", a: "hk",
          note: "Neuter: námið. Dative námi — Ég er í námi, Ég lýk náminu." },

        { t: "choice", q: "Which sentence already points at the future?",
          opts: ["Ég byrja í nýrri vinnu á mánudaginn", "Ég byrjaði í nýrri vinnu", "Ég er byrjuð í nýrri vinnu", "Ég var að byrja í nýrri vinnu"],
          a: "Ég byrja í nýrri vinnu á mánudaginn",
          note: "Present tense plus á mánudaginn. No extra machinery is needed." },

        { t: "fill", q: "Put ætla in the right person.", sentence: "Hvað ___ þú að læra í haust?", base: "ætla",
          a: "ætlar", case: "", mode: "type",
          why: "ætla is a plain -a verb: ætla, ætlar, ætlar, ætlum, ætlið, ætla." },

        { t: "fill", q: "Put munu in the right person.", sentence: "Við ___ ráða tvo starfsmenn í sumar.", base: "munu",
          a: "munum", case: "", mode: "type",
          why: "mun, munt, mun, munum, munuð, munu — and never að before the infinitive." },

        { t: "fill", q: "ljúka takes the dative.", sentence: "Anna lýkur ___ næsta vor.", base: "námið",
          a: "náminu", case: "ÞGF", mode: "type",
          why: "Dative námi plus the article -nu. The subject is nominative, the object dative." },

        { t: "fill", q: "Watch the word order after þegar.", sentence: "Þegar ég útskrifast ___ ég að flytja til Noregs.", base: "ætla",
          opts: ["ætla", "ætlar", "ætlaði"], a: "ætla", case: "", mode: "choice",
          why: "The þegar-clause fills slot one, so the verb comes second and ég follows it — but the subject is still ég, so the form is ætla." },

        { t: "table", q: "Complete the present tense of munu.",
          cols: ["", "munu"],
          rows: [
            { label: "ég", cells: ["mun"], blank: [0] },
            { label: "þú", cells: ["munt"], blank: [] },
            { label: "hann", cells: ["mun"], blank: [] },
            { label: "við", cells: ["munum"], blank: [0] },
            { label: "þið", cells: ["munuð"], blank: [] },
            { label: "þeir", cells: ["munu"], blank: [0] }
          ] },

        { t: "build", q: "I am going to apply for a summer job.",
          a: "Ég ætla að sækja um sumarvinnu", extra: ["sumarvinna", "mun", "ætlar"],
          note: "sækja um takes the accusative, so sumarvinna becomes sumarvinnu." },

        { t: "type", q: "Type: “The company will hire ten people.”", a: "Fyrirtækið mun ráða tíu manns",
          hint: "munu takes a bare infinitive",
          note: "tíu manns is the fixed genitive Icelanders use for counting people." },

        { t: "listen", speak: "Ef þú vilt starfið þarftu að senda umsókn.", q: "What did you hear?", mode: "choice",
          opts: ["Ef þú vilt starfið þarftu að senda umsókn.", "Ef þú vilt starfið þarftu að hringja í okkur.", "Þegar þú vilt starfið sendirðu umsókn."],
          a: "Ef þú vilt starfið þarftu að senda umsókn.",
          note: "þarftu is þarft plus þú glued on, sitting in second place after the ef-clause." },

        { t: "speak", is: "Ég útskrifast í vor og ætla þá að vinna í eitt ár.", en: "I graduate in the spring and then I am going to work for a year.",
          tip: "útskrifast is a middle-voice verb — the -st ending stays put through the whole singular." }
      ]
    },

    {
      n: 3,
      id: "u19l3",
      kind: "grammar",
      title: "Get, má, vil, þarf",
      en: "The modal verbs",
      goal: "Choose the right shape after each modal: supine, bare infinitive, or að plus infinitive.",
      minutes: 15,
      icon: "🔑",
      teach: [
        {
          h: "geta is the odd one out",
          p: "Every other modal is followed by an infinitive. geta is not: it takes the supine, the same frozen form you already use after hafa. Ég get talað, never Ég get tala.",
          ex: [
            ["Ég get talað íslensku og ensku.", "I can speak Icelandic and English."],
            ["Hún getur unnið á laugardaginn.", "She can work on Saturday."],
            ["Geturðu byrjað á mánudaginn?", "Can you start on Monday?"],
            ["Ég gat ekki mætt í viðtalið.", "I could not make it to the interview."]
          ],
          table: {
            cols: ["", "geta"],
            rows: [["ég", "get"], ["þú", "getur"], ["hann", "getur"], ["við", "getum"], ["þið", "getið"], ["þeir", "geta"]]
          },
          tip: "Past tense: gat, gast, gat, gátum, gátuð, gátu — and the supine still follows."
        },
        {
          h: "mega, vilja and munu take a bare infinitive",
          p: "No að, no supine, just the plain dictionary form of the next verb. Slipping an að in here is the single commonest mistake at this level.",
          ex: [
            ["Má ég fara heim núna?", "May I go home now?"],
            ["Þú mátt byrja klukkan sjö.", "You may start at seven."],
            ["Ég vil vinna í bakaríi.", "I want to work in a bakery."],
            ["Þetta mun kosta mikið.", "This will cost a lot."]
          ],
          tip: "mega: má, mátt, má, megum, megið, mega. vilja: vil, vilt, vill, viljum, viljið, vilja."
        },
        {
          h: "kunna, þurfa, eiga and ætla take að",
          p: "This group keeps að in front of the infinitive every single time. kunna is the skill you have learnt, þurfa is what the situation demands, eiga is what somebody else has decided, ætla is what you have planned.",
          ex: [
            ["Ég kann að nota tölvu.", "I know how to use a computer."],
            ["Þú þarft að skrifa ferilskrá.", "You need to write a CV."],
            ["Þú átt að mæta klukkan níu.", "You are supposed to turn up at nine."],
            ["Við ætlum að ráða tvo starfsmenn.", "We are going to hire two employees."]
          ],
          tip: "kunna is knowing how; geta is being able right now. Ég kann að synda en ég get ekki synt í dag."
        },
        {
          h: "The whole system on one page",
          p: "Learn the middle column and the rest follows. Only the first row breaks the pattern.",
          table: {
            cols: ["sögn", "á eftir", "dæmi"],
            rows: [
              ["geta", "sagnbót", "Ég get talað"],
              ["mega", "nafnháttur", "Ég má fara"],
              ["vilja", "nafnháttur", "Ég vil fara"],
              ["munu", "nafnháttur", "Ég mun fara"],
              ["kunna", "að + nafnháttur", "Ég kann að synda"],
              ["þurfa", "að + nafnháttur", "Ég þarf að fara"],
              ["eiga", "að + nafnháttur", "Ég á að fara"],
              ["ætla", "að + nafnháttur", "Ég ætla að fara"]
            ]
          },
          list: [
            "eiga að — someone else made the rule.",
            "þurfa að — the situation makes it necessary.",
            "verða að — there is no way out of it.",
            "mega — permission, not ability."
          ]
        }
      ],
      vocab: ["geta", "kunna", "munu", "ráða", "stefna", "fastur", "erfiður"],
      items: [
        { t: "fill", q: "Put geta in the right person.", sentence: "Ég ___ talað íslensku og ensku.", base: "geta",
          a: "get", case: "", mode: "type",
          why: "get, getur, getur, getum, getið, geta." },

        { t: "fill", q: "Put geta in the right person.", sentence: "Við ___ ekki byrjað fyrr en í ágúst.", base: "geta",
          a: "getum", case: "", mode: "type",
          why: "The við form is getum, and byrjað stays a supine whoever is speaking." },

        { t: "fill", q: "geta needs a supine.", sentence: "Hún getur ___ á laugardaginn.", base: "vinna",
          a: "unnið", case: "", mode: "type",
          why: "vinna makes its supine unnið — the same form you would use after hafa." },

        { t: "fill", q: "Which shape follows mega?", sentence: "Þú mátt ___ heim klukkan fjögur.", base: "fara",
          opts: ["fara", "að fara", "farið", "ferð"], a: "fara", case: "", mode: "choice",
          why: "mega takes a bare infinitive: no að and no supine." },

        { t: "fill", q: "Which shape follows kunna?", sentence: "Hann kann ___ tölvu.", base: "nota",
          opts: ["að nota", "nota", "notað", "notar"], a: "að nota", case: "", mode: "choice",
          why: "kunna always keeps að in front of the infinitive." },

        { t: "fill", q: "Put þurfa in the right person.", sentence: "Þú ___ að skrifa ferilskrá og senda umsókn.", base: "þurfa",
          a: "þarft", case: "", mode: "type",
          why: "þarf, þarft, þarf, þurfum, þurfið, þurfa." },

        { t: "table", q: "Complete the present tense of geta.",
          cols: ["", "geta"],
          rows: [
            { label: "ég", cells: ["get"], blank: [0] },
            { label: "þú", cells: ["getur"], blank: [] },
            { label: "hann", cells: ["getur"], blank: [] },
            { label: "við", cells: ["getum"], blank: [0] },
            { label: "þið", cells: ["getið"], blank: [] },
            { label: "þeir", cells: ["geta"], blank: [0] }
          ] },

        { t: "table", q: "What comes after each modal?",
          cols: ["sögn", "á eftir"],
          rows: [
            { label: "geta", cells: ["sagnbót"], blank: [0] },
            { label: "mega", cells: ["nafnháttur"], blank: [] },
            { label: "munu", cells: ["nafnháttur"], blank: [0] },
            { label: "kunna", cells: ["að + nafnháttur"], blank: [0] },
            { label: "eiga", cells: ["að + nafnháttur"], blank: [] }
          ] },

        { t: "choice", q: "Which one is correct?",
          opts: ["Ég get talað íslensku", "Ég get tala íslensku", "Ég get að tala íslensku", "Ég get talar íslensku"],
          a: "Ég get talað íslensku",
          note: "geta plus the supine talað. The infinitive tala never appears after geta." },

        { t: "choice", q: "Which one is correct?",
          opts: ["Má ég spyrja?", "Má ég að spyrja?", "Má ég spurt?", "Má ég spyr?"],
          a: "Má ég spyrja?",
          note: "mega takes the bare infinitive spyrja — no að, and definitely no supine." },

        { t: "build", q: "I could not make it to the interview.",
          a: "Ég gat ekki mætt í viðtalið", extra: ["mæta", "gátum", "get"],
          note: "Past tense gat, and the supine mætt behind it. mæta í plus the accusative viðtalið." },

        { t: "type", q: "Type: “You are supposed to turn up at nine.”", a: "Þú átt að mæta klukkan níu",
          hint: "eiga að",
          note: "eiga að says somebody else set the time; þurfa að would say the situation did." },

        { t: "listen", speak: "Ég kann að baka en ég get ekki byrjað fyrr en í júní.", q: "What did you hear?", mode: "choice",
          opts: ["Ég kann að baka en ég get ekki byrjað fyrr en í júní.", "Ég kann að baka en ég vil ekki byrja í júní.", "Ég get bakað en ég kann ekki að byrja."],
          a: "Ég kann að baka en ég get ekki byrjað fyrr en í júní.",
          note: "Two modals, two shapes in one breath: kann að baka with að, get byrjað with the supine." },

        { t: "speak", is: "Ég stefni að því að verða verkfræðingur.", en: "I am aiming to become an engineer.",
          tip: "stefna að takes the dative, which is why the frame is stefna að því að." }
      ]
    },

    {
      n: 4,
      id: "u19l4",
      kind: "lesson",
      title: "Umsóknir, laun og samningar",
      en: "Applying, earning, signing",
      goal: "Handle applications and pay, and hook clauses together with sem and þar sem.",
      minutes: 12,
      icon: "📄",
      teach: [
        {
          h: "sem — one word for who, which and that",
          p: "sem never changes for gender, number or case, and unlike English it can never be dropped. Whatever it refers back to, the word itself stays sem.",
          ex: [
            ["Konan sem vinnur í bakaríinu heitir Sóley.", "The woman who works in the bakery is called Sóley."],
            ["Starfið sem ég sótti um er í Kópavogi.", "The job I applied for is in Kópavogur."],
            ["Fyrirtækið sem ég vinn hjá er lítið.", "The company I work for is small."]
          ],
          tip: "A preposition belonging to the relative clause is stranded at its end: sem ég vinn hjá, sem ég talaði við."
        },
        {
          h: "þar sem — where",
          p: "When the thing you are pointing back at is a place, use þar sem. Plain sem there would make the place the subject of the next verb, which is rarely what you mean.",
          ex: [
            ["Bakaríið þar sem Sóley vinnur opnar klukkan sex.", "The bakery where Sóley works opens at six."],
            ["Ég vil vinna á stað þar sem allir tala íslensku.", "I want to work somewhere where everyone speaks Icelandic."]
          ]
        },
        {
          h: "að — the word that carries a whole clause",
          p: "að introduces what someone thinks, says or hopes. After halda and vona the verb inside the clause usually slides into the subjunctive.",
          ex: [
            ["Ég held að þetta sé gott starf.", "I think this is a good job."],
            ["Hún sagði að hún ætlaði að hætta.", "She said she was going to quit."],
            ["Það er gott að eiga fastan samning.", "It is good to have a permanent contract."]
          ],
          tip: "Do not confuse this að with the að of ætla að fara. One opens a clause, the other props up an infinitive."
        },
        {
          h: "The paperwork phrases",
          list: [
            "sækja um starf — to apply for a job (accusative; past sótti um)",
            "senda umsókn og ferilskrá — to send an application and a CV",
            "skrifa undir samning — to sign a contract (accusative)",
            "vera á góðum launum — to be well paid (laun is plural only)",
            "spara peninga — to save money"
          ]
        }
      ],
      vocab: ["laun", "samningur", "umsókn", "ferilskrá", "auglýsing", "tækifæri", "sækja um", "skrifa undir", "spara", "þéna", "sem", "þar sem"],
      items: [
        { t: "match", q: "Match the paperwork words",
          pairs: [["laun", "wages, salary"], ["samningur", "contract"], ["umsókn", "application"], ["ferilskrá", "CV"], ["auglýsing", "advertisement"], ["tækifæri", "opportunity"]] },

        { t: "gender", word: "umsókn", a: "kvk",
          note: "Feminine: umsóknin. Genitive umsóknar, plural umsóknir." },

        { t: "choice", q: "Which word joins the halves? Konan ___ vinnur í bakaríinu heitir Sóley.",
          opts: ["sem", "þar sem", "að", "því"], a: "sem",
          note: "A person takes sem, and sem stays sem whatever case the clause would need." },

        { t: "choice", q: "Which word joins the halves? Bakaríið ___ Sóley vinnur opnar klukkan sex.",
          opts: ["þar sem", "sem", "hvar", "þar"], a: "þar sem",
          note: "A place takes þar sem. Plain sem would try to make the bakery the subject of vinnur." },

        { t: "fill", q: "Fill in the relative word.", sentence: "Starfið ___ ég sótti um er í Kópavogi.", base: "sem",
          opts: ["sem", "þar sem", "að", "hver"], a: "sem", case: "", mode: "choice",
          why: "sem covers who, which and that, and um is left stranded behind sótti." },

        { t: "fill", q: "skrifa undir takes the accusative.", sentence: "Ég skrifaði undir ___ í gær.", base: "samningurinn",
          a: "samninginn", case: "ÞF", mode: "type",
          why: "Accusative samning plus the masculine article -inn." },

        { t: "fill", q: "laun has no singular.", sentence: "Sóley er á góðum ___ .", base: "laun",
          a: "launum", case: "ÞGF", mode: "type",
          why: "á plus dative, and the dative plural of laun is launum — góðum agrees with it." },

        { t: "build", q: "The job I applied for is in Kópavogur.",
          a: "Starfið sem ég sótti um er í Kópavogi", extra: ["að", "þar", "sæki"],
          note: "um belongs to sækja um, so it stays behind the verb inside the relative clause." },

        { t: "type", q: "Type: “The company I work for is small.”", a: "Fyrirtækið sem ég vinn hjá er lítið",
          hint: "the preposition stays at the end",
          note: "English can drop the relative word; Icelandic never can. sem is compulsory here." },

        { t: "table", q: "Complete the declension of samningur (kk.).",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["samningur", "samningar"], blank: [1] },
            { label: "ÞF", cells: ["samning", "samninga"], blank: [0] },
            { label: "ÞGF", cells: ["samningi", "samningum"], blank: [1] },
            { label: "EF", cells: ["samnings", "samninga"], blank: [] }
          ] },

        { t: "listen", speak: "Ég held að launin séu of lág.", q: "What did you hear?", mode: "choice",
          opts: ["Ég held að launin séu of lág.", "Ég held að launin séu of há.", "Ég veit að launin eru of lág."],
          a: "Ég held að launin séu of lág.",
          note: "After halda the að-clause takes the subjunctive séu, not the indicative eru." },

        { t: "speak", is: "Ég ætla að spara peninga og fara í nám næsta haust.", en: "I am going to save money and start studying next autumn.",
          tip: "fara í nám, but vera í námi — motion takes the accusative, staying put takes the dative." }
      ]
    },

    {
      n: 5,
      id: "u19l5",
      kind: "story",
      title: "Atvinnuviðtal í bakaríinu",
      en: "A job interview at the bakery",
      goal: "Follow a whole interview and catch the modals as they go past.",
      minutes: 12,
      icon: "🥐",
      teach: [
        {
          h: "Two things to catch",
          p: "What time Anna has to turn up, and what Lúlli is allowed to do. Both answers are carried by a modal verb, so listen for þarft, get, mátt and ætla."
        },
        {
          h: "sækja um",
          p: "sækja um takes the accusative, and its past tense is irregular: sótti. Anna sótti um sumarvinnu means she put in an application, not that she collected anything."
        }
      ],
      story: {
        title: "Atvinnuviðtal í bakaríinu",
        lines: [
          { sp: "Sóley", is: "Komdu sæl, Anna. Sestu. Þú sóttir um sumarvinnu hjá okkur, er það ekki?", en: "Hello, Anna. Have a seat. You applied for a summer job with us, didn't you?" },
          { sp: "Anna", is: "Jú, ég sendi umsókn og ferilskrá í síðustu viku.", en: "Yes, I sent an application and a CV last week." },
          { sp: "Sóley", is: "Ég sá hana. Hefurðu unnið í bakaríi áður?", en: "I saw it. Have you worked in a bakery before?" },
          { sp: "Anna", is: "Nei, en ég vann á kaffihúsi í fyrra og ég kann að baka.", en: "No, but I worked in a café last year and I know how to bake." },
          { sp: "Sóley", is: "Gott. Þú þarft að mæta klukkan sex því að brauðið fer snemma í ofninn.", en: "Good. You need to be here at six, because the bread goes into the oven early." },
          { sp: "Anna", is: "Ég get vaknað snemma. Ég er alltaf komin á fætur fyrir sjö.", en: "I can get up early. I am always up before seven." },
          { sp: "Sóley", is: "Þá ætla ég að ráða þig. Þú mátt byrja á mánudaginn.", en: "Then I am going to hire you. You may start on Monday." },
          { sp: "Anna", is: "Frábært! Hvenær skrifa ég undir samninginn?", en: "Great! When do I sign the contract?" },
          { sp: "Sóley", is: "Á morgun. En hver á fuglinn sem situr á brauðinu?", en: "Tomorrow. But whose bird is the one sitting on the bread?" },
          { sp: "Anna", is: "Það er Lúlli. Hann er alltaf þar sem maturinn er.", en: "That's Lúlli. He is always wherever the food is." },
          { sp: "Sóley", is: "Hann má vera hér ef hann borðar ekki vörurnar.", en: "He may stay here if he doesn't eat the goods." },
          { sp: "Anna", is: "Ég lofa engu, en ég mun reyna.", en: "I promise nothing, but I will try." }
        ],
        glossary: [
          ["sækja um", "to apply for"],
          ["í fyrra", "last year"],
          ["mæta", "to turn up, to show up"],
          ["á fætur", "up, out of bed"],
          ["skrifa undir", "to sign"],
          ["Ég lofa engu", "I promise nothing"]
        ]
      },
      vocab: ["sumarvinna", "atvinnuviðtal", "ráða", "sækja um", "skrifa undir", "vakt", "ferilskrá", "sem", "þar sem", "ef"],
      items: [
        { t: "choice", q: "Hvenær á Anna að mæta í vinnuna?",
          opts: ["Klukkan sex", "Klukkan sjö", "Klukkan átta", "Klukkan níu"], a: "Klukkan sex",
          note: "Þú þarft að mæta klukkan sex því að brauðið fer snemma í ofninn." },

        { t: "choice", q: "Where had Anna worked before?",
          opts: ["In a café", "In a bakery", "In a bank", "Nowhere at all"], a: "In a café",
          note: "ég vann á kaffihúsi í fyrra — the past of vinna is vann." },

        { t: "fill", q: "Rebuild Sóley's line.", sentence: "Þú ___ að mæta klukkan sex.", base: "þurfa",
          a: "þarft", case: "", mode: "type",
          why: "þarf, þarft, þarf, þurfum, þurfið, þurfa — and þurfa always keeps að." },

        { t: "fill", q: "geta needs a supine.", sentence: "Ég get ___ snemma.", base: "vakna",
          a: "vaknað", case: "", mode: "type",
          why: "-a verbs make their supine in -að: vakna becomes vaknað." },

        { t: "fill", q: "Whose bird is that?", sentence: "Hver á fuglinn ___ situr á brauðinu?", base: "sem",
          opts: ["sem", "þar sem", "að", "hver"], a: "sem", case: "", mode: "choice",
          why: "sem for a person or a thing; þar sem only when the antecedent is a place." },

        { t: "fill", q: "Permission with a condition attached.", sentence: "Hann má vera hér ___ hann borðar ekki vörurnar.", base: "ef",
          opts: ["ef", "þegar", "því að", "að"], a: "ef", case: "", mode: "choice",
          why: "ef sets a condition. þegar would promise that he is bound to behave sooner or later." },

        { t: "build", q: "He is always wherever the food is.",
          a: "Hann er alltaf þar sem maturinn er", extra: ["hvar", "matinn", "var"],
          note: "þar sem is two words but one joint, and the clause it opens keeps its own verb at the end here." },

        { t: "type", q: "Type: “I applied for a summer job.”", a: "Ég sótti um sumarvinnu",
          hint: "the past of sækja is sótti",
          note: "sækja um takes the accusative: sumarvinna becomes sumarvinnu." },

        { t: "listen", speak: "Þú mátt byrja á mánudaginn.", q: "What did you hear?", mode: "choice",
          opts: ["Þú mátt byrja á mánudaginn.", "Þú átt að byrja á mánudaginn.", "Þú getur byrjað á mánudaginn."],
          a: "Þú mátt byrja á mánudaginn.",
          note: "All three are real Icelandic, but only mátt byrja hands out permission — and it takes a bare infinitive." },

        { t: "match", q: "Match the story phrases",
          pairs: [["sækja um", "to apply for"], ["skrifa undir", "to sign"], ["í fyrra", "last year"], ["á fætur", "up, out of bed"], ["atvinnuviðtal", "job interview"]] },

        { t: "gender", word: "vakt", a: "kvk",
          note: "Feminine: vaktin. Genitive vaktar, plural vaktir, dative plural vöktum." },

        { t: "speak", is: "Ég lofa engu, en ég mun reyna.", en: "I promise nothing, but I will try.",
          tip: "lofa takes a dative object, so ekkert turns into engu." }
      ]
    },

    {
      n: 6,
      id: "u19l6",
      kind: "checkpoint",
      title: "Vinnupróf",
      en: "Unit 19 checkpoint",
      goal: "Prove you can pick the right shape after every modal and join clauses cleanly.",
      minutes: 14,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "geta + sagnbót: Ég get talað, hún getur unnið, ég gat mætt.",
            "mega, vilja, munu + bare infinitive; kunna, þurfa, eiga, ætla + að + infinitive.",
            "Three futures: present plus a time word, ætla að, and the formal munu.",
            "sem for people and things, þar sem for places — and neither can be left out.",
            "að, því að, af því að, þegar, ef, en, eða — and the verb second after þegar and ef.",
            "vinna hjá + ÞGF, vinna á + ÞGF, vinna í + ÞGF; laun is plural only."
          ]
        }
      ],
      vocab: ["geta", "kunna", "munu", "laun", "samningur", "ferilskrá", "yfirmaður", "vinnustaður", "markmið", "fyrirtæki", "sem", "þar sem", "útskrifast", "duglegur"],
      items: [
        { t: "fill", q: "geta needs a supine.", sentence: "Hún getur ___ á laugardaginn.", base: "vinna",
          a: "unnið", case: "", mode: "type",
          why: "vinna makes its supine unnið — never the infinitive after geta." },

        { t: "fill", q: "Put þurfa in the right person.", sentence: "Þú ___ að skrifa ferilskrá fyrst.", base: "þurfa",
          a: "þarft", case: "", mode: "type",
          why: "þarf, þarft, þarf, þurfum, þurfið, þurfa, and að stays in front of skrifa." },

        { t: "fill", q: "Put munu in the right person.", sentence: "Við ___ ráða tvo starfsmenn í haust.", base: "munu",
          a: "munum", case: "", mode: "type",
          why: "munum, and munu takes a bare infinitive, so ráða has no að." },

        { t: "fill", q: "Fill in the relative word.", sentence: "Konan ___ ég talaði við er yfirmaður minn.", base: "sem",
          opts: ["sem", "þar sem", "hver", "að"], a: "sem", case: "", mode: "choice",
          why: "sem never changes shape, and við is stranded at the end of its own clause." },

        { t: "fill", q: "laun has no singular.", sentence: "Sóley er á góðum ___ .", base: "laun",
          a: "launum", case: "ÞGF", mode: "type",
          why: "Dative plural launum after á, with góðum agreeing." },

        { t: "choice", q: "Which one is correct?",
          opts: ["Ég má fara heim", "Ég má að fara heim", "Ég má farið heim", "Ég má fer heim"],
          a: "Ég má fara heim",
          note: "mega takes a bare infinitive. Only geta would want the supine farið." },

        { t: "choice", q: "Which word fits? Bakaríið ___ Sóley vinnur opnar klukkan sex.",
          opts: ["þar sem", "sem", "hvar", "að"], a: "þar sem",
          note: "The antecedent is a place, so þar sem. hvar only ever asks a question." },

        { t: "gender", word: "fyrirtæki", a: "hk",
          note: "Neuter: fyrirtækið, fyrirtækis, and fyrirtækjum in the dative plural." },

        { t: "match", q: "Match the unit words",
          pairs: [["yfirmaður", "boss"], ["samningur", "contract"], ["ferilskrá", "CV"], ["laun", "wages"], ["vinnustaður", "workplace"], ["markmið", "goal"]] },

        { t: "table", q: "Complete the present tense of geta.",
          cols: ["", "geta"],
          rows: [
            { label: "ég", cells: ["get"], blank: [0] },
            { label: "þú", cells: ["getur"], blank: [] },
            { label: "hann", cells: ["getur"], blank: [] },
            { label: "við", cells: ["getum"], blank: [0] },
            { label: "þið", cells: ["getið"], blank: [] },
            { label: "þeir", cells: ["geta"], blank: [0] }
          ] },

        { t: "build", q: "I am going to apply for the job tomorrow.",
          a: "Ég ætla að sækja um starfið á morgun", extra: ["mun", "sótti", "starfinu"],
          note: "ætla að keeps its að; sækja um takes the accusative starfið." },

        { t: "type", q: "Type: “When I graduate I am going to work in Norway.”",
          a: "Þegar ég útskrifast ætla ég að vinna í Noregi",
          hint: "the main verb comes second, so the subject slides behind it",
          note: "The þegar-clause fills the first slot, which is why it is ætla ég and not ég ætla." },

        { t: "listen", speak: "Ég held að launin séu of lág.", q: "What did you hear?", mode: "choice",
          opts: ["Ég held að launin séu of lág.", "Ég held að launin séu of há.", "Ég veit að launin eru of lág."],
          a: "Ég held að launin séu of lág.",
          note: "halda pulls the að-clause into the subjunctive: séu. After veit it would stay eru." },

        { t: "speak", is: "Framtíðin er björt ef maður er duglegur.", en: "The future is bright if you work hard.",
          tip: "björt is feminine because framtíðin is; duglegur is masculine because maður is." }
      ]
    }
  ]
};

export const vocab = [
  // ——— vinnan og vinnustaðurinn ———
  { w: "atvinna", en: "work, employment", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["atvinna", "atvinnu", "atvinnu", "atvinnu"], pl: null },
    ex: { is: "Hann er í leit að atvinnu.", en: "He is looking for work." } },

  { w: "starfsmaður", en: "employee, member of staff", pos: "noun", g: "kk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["starfsmaður", "starfsmann", "starfsmanni", "starfsmanns"], pl: ["starfsmenn", "starfsmenn", "starfsmönnum", "starfsmanna"] },
    ex: { is: "Fyrirtækið er með fimmtán starfsmenn.", en: "The company has fifteen employees." } },

  { w: "vinnustaður", en: "workplace", pos: "noun", g: "kk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["vinnustaður", "vinnustað", "vinnustað", "vinnustaðar"], pl: ["vinnustaðir", "vinnustaði", "vinnustöðum", "vinnustaða"] },
    ex: { is: "Vinnustaðurinn minn er í miðbænum.", en: "My workplace is downtown." } },

  { w: "skrifstofa", en: "office", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["skrifstofa", "skrifstofu", "skrifstofu", "skrifstofu"], pl: ["skrifstofur", "skrifstofur", "skrifstofum", "skrifstofa"] },
    ex: { is: "Skrifstofan opnar klukkan níu.", en: "The office opens at nine." } },

  { w: "fyrirtæki", en: "company, firm", pos: "noun", g: "hk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["fyrirtæki", "fyrirtæki", "fyrirtæki", "fyrirtækis"], pl: ["fyrirtæki", "fyrirtæki", "fyrirtækjum", "fyrirtækja"] },
    ex: { is: "Fyrirtækið er lítið en launin eru góð.", en: "The company is small but the pay is good." } },

  { w: "yfirmaður", en: "boss, manager", pos: "noun", g: "kk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["yfirmaður", "yfirmann", "yfirmanni", "yfirmanns"], pl: ["yfirmenn", "yfirmenn", "yfirmönnum", "yfirmanna"] },
    ex: { is: "Yfirmaðurinn minn heitir Jónas.", en: "My boss is called Jónas." } },

  { w: "vinnufélagi", en: "colleague, workmate", pos: "noun", g: "kk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["vinnufélagi", "vinnufélaga", "vinnufélaga", "vinnufélaga"], pl: ["vinnufélagar", "vinnufélaga", "vinnufélögum", "vinnufélaga"] },
    ex: { is: "Vinnufélagar mínir eru allir yngri en ég.", en: "My colleagues are all younger than me." } },

  { w: "vakt", en: "shift", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["vakt", "vakt", "vakt", "vaktar"], pl: ["vaktir", "vaktir", "vöktum", "vakta"] },
    ex: { is: "Ég er á vakt til klukkan tíu.", en: "I am on shift until ten." } },

  { w: "verkefni", en: "task, project", pos: "noun", g: "hk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["verkefni", "verkefni", "verkefni", "verkefnis"], pl: ["verkefni", "verkefni", "verkefnum", "verkefna"] },
    ex: { is: "Verkefnið tekur um það bil viku.", en: "The project takes about a week." } },

  { w: "sumarvinna", en: "summer job", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["sumarvinna", "sumarvinnu", "sumarvinnu", "sumarvinnu"], pl: null },
    ex: { is: "Ég fékk sumarvinnu í bakaríinu.", en: "I got a summer job at the bakery." } },

  { w: "verkfræðingur", en: "engineer", pos: "noun", g: "kk", topic: "jobs", unit: 19, cefr: "A2",
    forms: { sg: ["verkfræðingur", "verkfræðing", "verkfræðingi", "verkfræðings"], pl: ["verkfræðingar", "verkfræðinga", "verkfræðingum", "verkfræðinga"] },
    ex: { is: "Systir mín er verkfræðingur hjá stóru fyrirtæki.", en: "My sister is an engineer at a big company." } },

  { w: "hjúkrunarfræðingur", en: "nurse", pos: "noun", g: "kk", topic: "jobs", unit: 19, cefr: "A2",
    forms: { sg: ["hjúkrunarfræðingur", "hjúkrunarfræðing", "hjúkrunarfræðingi", "hjúkrunarfræðings"], pl: ["hjúkrunarfræðingar", "hjúkrunarfræðinga", "hjúkrunarfræðingum", "hjúkrunarfræðinga"] },
    ex: { is: "Hann vinnur sem hjúkrunarfræðingur á sjúkrahúsinu.", en: "He works as a nurse at the hospital." } },

  // ——— nám og menntun ———
  { w: "nám", en: "studies", pos: "noun", g: "hk", topic: "study", unit: 19, cefr: "A2",
    forms: { sg: ["nám", "nám", "námi", "náms"], pl: null },
    ex: { is: "Hún er í námi í Kaupmannahöfn.", en: "She is studying in Copenhagen." } },

  { w: "námskeið", en: "course", pos: "noun", g: "hk", topic: "study", unit: 19, cefr: "A2",
    forms: { sg: ["námskeið", "námskeið", "námskeiði", "námskeiðs"], pl: ["námskeið", "námskeið", "námskeiðum", "námskeiða"] },
    ex: { is: "Ég fór á námskeið í íslensku.", en: "I took a course in Icelandic." } },

  { w: "próf", en: "exam", pos: "noun", g: "hk", topic: "study", unit: 19, cefr: "A2",
    forms: { sg: ["próf", "próf", "prófi", "prófs"], pl: ["próf", "próf", "prófum", "prófa"] },
    ex: { is: "Prófið var erfiðara en ég bjóst við.", en: "The exam was harder than I expected." } },

  { w: "menntun", en: "education", pos: "noun", g: "kvk", topic: "study", unit: 19, cefr: "A2",
    forms: { sg: ["menntun", "menntun", "menntun", "menntunar"], pl: null },
    ex: { is: "Menntun skiptir máli á vinnumarkaði.", en: "Education matters in the job market." } },

  // ——— framtíð og markmið ———
  { w: "framtíð", en: "future", pos: "noun", g: "kvk", topic: "future", unit: 19, cefr: "A2",
    forms: { sg: ["framtíð", "framtíð", "framtíð", "framtíðar"], pl: null },
    ex: { is: "Ég hugsa oft um framtíðina.", en: "I often think about the future." } },

  { w: "draumur", en: "dream", pos: "noun", g: "kk", topic: "future", unit: 19, cefr: "A2",
    forms: { sg: ["draumur", "draum", "draumi", "draums"], pl: ["draumar", "drauma", "draumum", "drauma"] },
    ex: { is: "Draumurinn minn er að vinna á sjó.", en: "My dream is to work at sea." } },

  { w: "markmið", en: "goal, aim", pos: "noun", g: "hk", topic: "future", unit: 19, cefr: "A2",
    forms: { sg: ["markmið", "markmið", "markmiði", "markmiðs"], pl: ["markmið", "markmið", "markmiðum", "markmiða"] },
    ex: { is: "Markmið mitt er að tala íslensku vel.", en: "My goal is to speak Icelandic well." } },

  { w: "tækifæri", en: "opportunity, chance", pos: "noun", g: "hk", topic: "future", unit: 19, cefr: "A2",
    forms: { sg: ["tækifæri", "tækifæri", "tækifæri", "tækifæris"], pl: ["tækifæri", "tækifæri", "tækifærum", "tækifæra"] },
    ex: { is: "Þetta er gott tækifæri fyrir mig.", en: "This is a good opportunity for me." } },

  { w: "reynsla", en: "experience", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["reynsla", "reynslu", "reynslu", "reynslu"], pl: null },
    ex: { is: "Ég hef enga reynslu af bakstri.", en: "I have no experience of baking." } },

  // ——— peningar, umsóknir og samningar ———
  { w: "laun", en: "wages, salary (pl. only)", pos: "noun", g: "hk", topic: "money", unit: 19, cefr: "A2",
    forms: { sg: ["—", "—", "—", "—"], pl: ["laun", "laun", "launum", "launa"] },
    ex: { is: "Launin eru betri en í gamla starfinu.", en: "The pay is better than in my old job." } },

  { w: "samningur", en: "contract, agreement", pos: "noun", g: "kk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["samningur", "samning", "samningi", "samnings"], pl: ["samningar", "samninga", "samningum", "samninga"] },
    ex: { is: "Ég skrifaði undir samninginn í gær.", en: "I signed the contract yesterday." } },

  { w: "umsókn", en: "application", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["umsókn", "umsókn", "umsókn", "umsóknar"], pl: ["umsóknir", "umsóknir", "umsóknum", "umsókna"] },
    ex: { is: "Umsóknin þín er komin til okkar.", en: "Your application has reached us." } },

  { w: "ferilskrá", en: "CV, résumé", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["ferilskrá", "ferilskrá", "ferilskrá", "ferilskrár"], pl: ["ferilskrár", "ferilskrár", "ferilskrám", "ferilskráa"] },
    ex: { is: "Ég sendi ferilskrá með umsókninni.", en: "I sent a CV with the application." } },

  { w: "atvinnuviðtal", en: "job interview", pos: "noun", g: "hk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["atvinnuviðtal", "atvinnuviðtal", "atvinnuviðtali", "atvinnuviðtals"], pl: ["atvinnuviðtöl", "atvinnuviðtöl", "atvinnuviðtölum", "atvinnuviðtala"] },
    ex: { is: "Ég fer í atvinnuviðtal á fimmtudaginn.", en: "I am going to a job interview on Thursday." } },

  { w: "auglýsing", en: "advertisement", pos: "noun", g: "kvk", topic: "work", unit: 19, cefr: "A2",
    forms: { sg: ["auglýsing", "auglýsingu", "auglýsingu", "auglýsingar"], pl: ["auglýsingar", "auglýsingar", "auglýsingum", "auglýsinga"] },
    ex: { is: "Ég sá auglýsinguna á netinu.", en: "I saw the advert online." } },

  // ——— hjálparsagnir ———
  { w: "geta", en: "can, to be able to (+ supine)", pos: "verb", topic: "modals", unit: 19, cefr: "A2", gov: "none", vclass: "strong",
    conj: { pres: ["get", "getur", "getur", "getum", "getið", "geta"],
            past: ["gat", "gast", "gat", "gátum", "gátuð", "gátu"], pp: "getað" },
    ex: { is: "Ég get ekki komið í viðtalið á morgun.", en: "I cannot come to the interview tomorrow." } },

  { w: "kunna", en: "to know how to", pos: "verb", topic: "modals", unit: 19, cefr: "A2", gov: "ÞF", vclass: "irregular",
    conj: { pres: ["kann", "kannt", "kann", "kunnum", "kunnið", "kunna"],
            past: ["kunni", "kunnir", "kunni", "kunnum", "kunnuð", "kunnu"], pp: "kunnað" },
    ex: { is: "Kanntu að baka rúgbrauð?", en: "Do you know how to bake rye bread?" } },

  { w: "munu", en: "will (formal future)", pos: "verb", topic: "modals", unit: 19, cefr: "A2", gov: "none", vclass: "irregular",
    conj: { pres: ["mun", "munt", "mun", "munum", "munuð", "munu"],
            past: ["mundi", "mundir", "mundi", "mundum", "munduð", "mundu"], pp: "—" },
    ex: { is: "Þetta mun taka nokkrar vikur.", en: "This will take a few weeks." } },

  // ——— sagnir um vinnu og nám ———
  { w: "ráða", en: "to hire, to be in charge", pos: "verb", topic: "work", unit: 19, cefr: "A2", gov: "ÞF", vclass: "strong",
    conj: { pres: ["ræð", "ræður", "ræður", "ráðum", "ráðið", "ráða"],
            past: ["réð", "réðst", "réð", "réðum", "réðuð", "réðu"], pp: "ráðið" },
    ex: { is: "Fyrirtækið réð þrjá nýja starfsmenn.", en: "The company hired three new employees." } },

  { w: "hætta", en: "to stop, to quit", pos: "verb", topic: "work", unit: 19, cefr: "A2", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["hætti", "hættir", "hættir", "hættum", "hættið", "hætta"],
            past: ["hætti", "hættir", "hætti", "hættum", "hættuð", "hættu"], pp: "hætt" },
    ex: { is: "Hún hætti í vinnunni í fyrra.", en: "She quit her job last year." } },

  { w: "ljúka", en: "to finish, to complete", pos: "verb", topic: "study", unit: 19, cefr: "A2", gov: "ÞGF", vclass: "strong",
    conj: { pres: ["lýk", "lýkur", "lýkur", "ljúkum", "ljúkið", "ljúka"],
            past: ["lauk", "laukst", "lauk", "lukum", "lukuð", "luku"], pp: "lokið" },
    ex: { is: "Hún lauk prófinu á tveimur tímum.", en: "She finished the exam in two hours." } },

  { w: "útskrifast", en: "to graduate", pos: "verb", topic: "study", unit: 19, cefr: "A2", gov: "none", vclass: "middle",
    conj: { pres: ["útskrifast", "útskrifast", "útskrifast", "útskrifumst", "útskrifist", "útskrifast"],
            past: ["útskrifaðist", "útskrifaðist", "útskrifaðist", "útskrifuðumst", "útskrifuðust", "útskrifuðust"], pp: "útskrifast" },
    ex: { is: "Ég útskrifast úr háskólanum í vor.", en: "I graduate from university in the spring." } },

  { w: "stefna", en: "to aim, to head for", pos: "verb", topic: "future", unit: 19, cefr: "A2", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["stefni", "stefnir", "stefnir", "stefnum", "stefnið", "stefna"],
            past: ["stefndi", "stefndir", "stefndi", "stefndum", "stefnduð", "stefndu"], pp: "stefnt" },
    ex: { is: "Ég stefni að því að ljúka náminu í vor.", en: "I am aiming to finish my studies in the spring." } },

  { w: "spara", en: "to save (money)", pos: "verb", topic: "money", unit: 19, cefr: "A2", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["spara", "sparar", "sparar", "spörum", "sparið", "spara"],
            past: ["sparaði", "sparaðir", "sparaði", "spöruðum", "spöruðuð", "spöruðu"], pp: "sparað" },
    ex: { is: "Ég spara peninga fyrir bíl.", en: "I am saving money for a car." } },

  { w: "þéna", en: "to earn", pos: "verb", topic: "money", unit: 19, cefr: "A2", gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["þéna", "þénar", "þénar", "þénum", "þénið", "þéna"],
            past: ["þénaði", "þénaðir", "þénaði", "þénuðum", "þénuðuð", "þénuðu"], pp: "þénað" },
    ex: { is: "Hann þénar vel í nýja starfinu.", en: "He earns well in his new job." } },

  // ——— lýsingarorð ———
  { w: "duglegur", en: "hard-working, capable", pos: "adj", topic: "describing", unit: 19, cefr: "A2",
    decl: { nom: ["duglegur", "dugleg", "duglegt"], comp: "duglegri", sup: "duglegastur" },
    ex: { is: "Anna er dugleg í vinnunni.", en: "Anna is a hard worker." } },

  { w: "erfiður", en: "difficult, hard", pos: "adj", topic: "describing", unit: 19, cefr: "A2",
    decl: { nom: ["erfiður", "erfið", "erfitt"], comp: "erfiðari", sup: "erfiðastur" },
    ex: { is: "Þetta var erfitt próf.", en: "That was a hard exam." } },

  { w: "fastur", en: "permanent, fixed", pos: "adj", topic: "work", unit: 19, cefr: "A2",
    decl: { nom: ["fastur", "föst", "fast"], comp: "fastari", sup: "fastastur" },
    ex: { is: "Ég er komin með fastan samning.", en: "I have got a permanent contract now." } },

  { w: "atvinnulaus", en: "unemployed", pos: "adj", topic: "work", unit: 19, cefr: "A2",
    decl: { nom: ["atvinnulaus", "atvinnulaus", "atvinnulaust"] },
    ex: { is: "Hann hefur verið atvinnulaus í hálft ár.", en: "He has been unemployed for six months." } },

  // ——— atviksorð ———
  { w: "bráðum", en: "soon", pos: "adv", topic: "time", unit: 19, cefr: "A2",
    ex: { is: "Ég byrja bráðum í nýrri vinnu.", en: "I am starting a new job soon." } },

  { w: "seinna", en: "later", pos: "adv", topic: "time", unit: 19, cefr: "A2",
    ex: { is: "Við tölum betur um þetta seinna.", en: "We will talk about this properly later." } },

  // ——— tengiorð ———
  { w: "sem", en: "who, which, that", pos: "pron", topic: "grammar", unit: 19, cefr: "A2",
    ex: { is: "Maðurinn sem ræður hér heitir Jónas.", en: "The man who is in charge here is called Jónas." } },

  { w: "þar sem", en: "where, in the place that", pos: "conj", topic: "grammar", unit: 19, cefr: "A2",
    ex: { is: "Ég vinn í búð þar sem allt er dýrt.", en: "I work in a shop where everything is expensive." } },

  { w: "því að", en: "because, for", pos: "conj", topic: "grammar", unit: 19, cefr: "A2",
    ex: { is: "Ég hætti því að launin voru of lág.", en: "I quit because the pay was too low." } },

  { w: "af því að", en: "because", pos: "conj", topic: "grammar", unit: 19, cefr: "A2",
    ex: { is: "Ég sæki um af því að mig langar í nýtt starf.", en: "I am applying because I want a new job." } },

  { w: "ef", en: "if", pos: "conj", topic: "grammar", unit: 19, cefr: "A2",
    ex: { is: "Ef ég fæ starfið byrja ég í ágúst.", en: "If I get the job I start in August." } },

  // ——— orðasambönd ———
  { w: "sækja um", en: "to apply for", pos: "phrase", topic: "work", unit: 19, cefr: "A2",
    ex: { is: "Ég sótti um þrjú störf í síðustu viku.", en: "I applied for three jobs last week." } },

  { w: "skrifa undir", en: "to sign", pos: "phrase", topic: "work", unit: 19, cefr: "A2",
    ex: { is: "Við skrifuðum undir samninginn í morgun.", en: "We signed the contract this morning." } }
];

export default unit;
