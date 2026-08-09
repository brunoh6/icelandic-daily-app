// Unit 12 — Dagsetningar og stefnumót / Dates and appointments
// Ordinals and dates, the imperative, að + infinitive, and where ekki sits.

export const unit = {
  id: 12,
  slug: "u12",
  title: "Dagsetningar og stefnumót",
  en: "Dates and appointments",
  cefr: "A2.1",
  icon: "📅",
  blurb: "Say the date, ring someone up, and get a busy friend to say yes.",
  canDo: [
    "Say and write any date from the 1st to the 31st",
    "Make a phone call, leave a message and book an appointment",
    "Tell someone what to do with a one-word imperative",
    "Make plans with ætla að, þurfa að and langa að — and turn them down with ekki"
  ],
  lessons: [
    {
      n: 1,
      id: "u12l1",
      kind: "lesson",
      title: "Hvaða mánaðardagur er í dag?",
      en: "What is today's date?",
      goal: "Read, say and write Icelandic dates.",
      minutes: 9,
      icon: "🗓️",
      teach: [
        {
          h: "The -i family",
          p: "Every Icelandic ordinal ends in -i. Every single one except the second, which is annar and refuses to join in.",
          ex: [
            ["fyrsti", "first"],
            ["þriðji", "third"],
            ["fjórði", "fourth"],
            ["annar", "second"]
          ],
          tip: "If a number word ends in -i, it is an ordinal. If it does not, check whether it is annar."
        },
        {
          h: "Writing a date",
          p: "Icelanders write the number with a full stop after it and read it as an ordinal. 17. júní is said sautjándi júní. The full stop is not optional.",
          ex: [
            ["Í dag er fyrsti maí.", "Today is the first of May."],
            ["Ég kem annan mars.", "I'm coming on the second of March."]
          ]
        },
        {
          h: "Two shapes, one date",
          p: "After er the ordinal is plain: Í dag er fjórði desember. Used as a time expression — when something happens — it slides into the accusative and ends in -a: Ég kem fjórða desember.",
          table: {
            cols: ["", "after er", "as a time expression"],
            rows: [
              ["1.", "fyrsti", "fyrsta"],
              ["2.", "annar", "annan"],
              ["3.", "þriðji", "þriðja"],
              ["4.", "fjórði", "fjórða"]
            ]
          }
        }
      ],
      vocab: ["fyrsti", "annar", "þriðji", "fjórði", "fimmti", "tuttugasti", "þrítugasti", "dagsetning", "dagatal", "mánaðardagur", "afmæli", "desember", "júní"],
      items: [
        { t: "choice", q: "Í dag er 1. maí. How is that number read out?",
          opts: ["fyrsti", "fyrsta", "einn", "fyrstur"], a: "fyrsti",
          note: "After er the ordinal keeps its plain -i form." },

        { t: "gender", word: "dagatal", a: "hk",
          note: "Neuter. Most nouns built on -tal are neuter." },

        { t: "gender", word: "dagsetning", a: "kvk",
          note: "Feminine. Nouns in -ing are feminine, like spurning and verslun." },

        { t: "match", q: "Match the ordinals",
          pairs: [["fyrsti", "first"], ["annar", "second"], ["þriðji", "third"], ["fjórði", "fourth"], ["fimmti", "fifth"]] },

        { t: "fill", q: "Say today's date.", sentence: "Í dag er ___ júní.", base: "3.",
          opts: ["þriðji", "þriðja", "þrír"], a: "þriðji", case: "NF", mode: "choice",
          why: "After er the ordinal stays in the nominative: -i." },

        { t: "build", q: "Today is the fourth of December.",
          a: "Í dag er fjórði desember", extra: ["fjórða", "á", "var"],
          note: "Months are masculine, so the ordinal is masculine too." },

        { t: "type", q: "Type: “What is the date today?”", a: "Hvaða mánaðardagur er í dag?",
          hint: "mánaðardagur = day of the month" },

        { t: "listen", speak: "Ég á afmæli fimmta júní.", q: "What did you hear?", mode: "choice",
          opts: ["Ég á afmæli fimmta júní.", "Ég á afmæli fimmti júní.", "Ég á afmæli fimmta júlí."],
          a: "Ég á afmæli fimmta júní.",
          note: "eiga afmæli = to have a birthday. The date is a time expression, so fimmta." },

        { t: "fill", q: "When is the birthday?", sentence: "Ég á afmæli ___ desember.", base: "5.",
          a: "fimmta", case: "ÞF", mode: "type",
          why: "A date that says when takes the accusative: -a." },

        { t: "choice", q: "Í dag er 2. mars. Fill the gap: Í dag er ___ mars.",
          opts: ["annar", "annað", "önnur", "tveir"], a: "annar",
          note: "annar is the one ordinal without -i, and mars is masculine." },

        { t: "speak", is: "Í dag er tuttugasti og fyrsti janúar.", en: "Today is the twenty-first of January.",
          tip: "Compound ordinals join with og, and both halves are ordinals." },

        { t: "table", q: "Fill in the missing ordinals.",
          cols: ["", "raðtala"],
          rows: [
            { label: "1.", cells: ["fyrsti"], blank: [] },
            { label: "2.", cells: ["annar"], blank: [0] },
            { label: "3.", cells: ["þriðji"], blank: [] },
            { label: "4.", cells: ["fjórði"], blank: [0] },
            { label: "5.", cells: ["fimmti"], blank: [] },
            { label: "20.", cells: ["tuttugasti"], blank: [0] },
            { label: "30.", cells: ["þrítugasti"], blank: [] }
          ] }
      ]
    },

    {
      n: 2,
      id: "u12l2",
      kind: "lesson",
      title: "Er Kári við?",
      en: "Is Kári there?",
      goal: "Handle a phone call and pick a week.",
      minutes: 10,
      icon: "📞",
      teach: [
        {
          h: "The phone script",
          p: "Icelandic phone calls are short. You say who you are, you ask for the person, you get an answer. Nobody explains themselves.",
          ex: [
            ["Er Kári við?", "Is Kári there?"],
            ["Hver er þetta?", "Who's calling?"],
            ["Þetta er hann.", "Speaking."],
            ["Andartak.", "One moment."]
          ]
        },
        {
          h: "Two verbs, two cases",
          p: "hringja needs í and then the accusative — you ring into someone. svara takes the dative flat out, no preposition.",
          ex: [
            ["Ég hringi í þig á morgun.", "I'll ring you tomorrow."],
            ["Kári svarar aldrei símanum.", "Kári never answers the phone."]
          ],
          tip: "senda is greedy: dative person, accusative thing. Ég sendi henni tölvupóst."
        },
        {
          h: "Teens and twenties",
          p: "From 13 on, ordinals are built on the cardinal: þrettándi, fjórtándi, fimmtándi, sextándi, sautjándi, átjándi, nítjándi, tuttugasti. Then tuttugasti og fyrsti all the way to þrítugasti og fyrsti.",
          list: [
            "13. þrettándi",
            "17. sautjándi",
            "20. tuttugasti",
            "24. tuttugasti og fjórði",
            "31. þrítugasti og fyrsti"
          ]
        }
      ],
      vocab: ["sími", "farsími", "símanúmer", "símsvari", "samband", "andartak", "hringja", "svara", "senda", "tölvupóstur", "senda skilaboð", "vera við", "því miður", "heyra", "næstur", "síðastur"],
      items: [
        { t: "match", q: "Match the phone words",
          pairs: [["sími", "telephone"], ["farsími", "mobile phone"], ["símanúmer", "phone number"], ["símsvari", "answering machine"], ["samband", "connection"]] },

        { t: "fill", q: "Put the pronoun right.", sentence: "Ég hringi í ___ á morgun.", base: "þú",
          a: "þig", case: "ÞF", mode: "type",
          why: "hringja í always takes the accusative." },

        { t: "fill", q: "Which case does svara want?", sentence: "Sóley svarar ekki ___ .", base: "síminn",
          opts: ["síminn", "símann", "símanum"], a: "símanum", case: "ÞGF", mode: "choice",
          why: "svara governs the dative, with no preposition at all." },

        { t: "type", q: "Type: “Is Kári there?”", a: "Er Kári við?",
          hint: "Verb first — it's a question." },

        { t: "build", q: "Who's calling?", a: "Hver er þetta", extra: ["hvað", "hann", "hvar"],
          note: "Literally “who is this”. Icelanders add með leyfi when they want to sound formal." },

        { t: "listen", speak: "Því miður er hann upptekinn.", q: "What did you hear?", mode: "choice",
          opts: ["Því miður er hann upptekinn.", "Því miður er hann laus.", "Því miður er hún upptekin."],
          a: "Því miður er hann upptekinn.",
          note: "Því miður comes first, so the verb jumps ahead of the subject." },

        { t: "gender", word: "sími", a: "kk",
          note: "Masculine. Nouns in -i like this one are weak masculines: sími, síma, síma, síma." },

        { t: "fill", q: "Which week?", sentence: "Við hittumst í ___ viku.", base: "næstur",
          a: "næstu", case: "ÞF", mode: "type",
          why: "næstur is always weak, and a time span you move into takes the accusative: næstu viku." },

        { t: "choice", q: "You reach a recording. What do you say you got?",
          opts: ["símsvarinn", "símsvari", "síminn", "sambandið"], a: "símsvarinn",
          note: "Þetta er símsvarinn hjá Kára. The definite -inn is doing the work of English “the”." },

        { t: "fill", q: "Who gets the email?", sentence: "Ég sendi ___ tölvupóst.", base: "hún",
          a: "henni", case: "ÞGF", mode: "type",
          why: "senda takes a dative person and an accusative thing." },

        { t: "speak", is: "Andartak, ég sæki hann.", en: "One moment, I'll get him.",
          tip: "The r in andartak is a single tap, and the stress is on the first syllable." },

        { t: "table", q: "Complete the present tense of hringja.",
          cols: ["", "hringja"],
          rows: [
            { label: "ég", cells: ["hringi"], blank: [] },
            { label: "þú", cells: ["hringir"], blank: [0] },
            { label: "hann", cells: ["hringir"], blank: [] },
            { label: "við", cells: ["hringjum"], blank: [0] },
            { label: "þið", cells: ["hringið"], blank: [] },
            { label: "þeir", cells: ["hringja"], blank: [0] }
          ] }
      ]
    },

    {
      n: 3,
      id: "u12l3",
      kind: "grammar",
      title: "Komdu, farðu, vertu",
      en: "The imperative",
      goal: "Glue þú onto a verb and give a one-word order.",
      minutes: 13,
      icon: "👉",
      teach: [
        {
          h: "þú, welded on",
          p: "To tell one person to do something, take the verb stem and stick -ðu on the end. That -ðu is the pronoun þú, worn down and glued into place. Komdu is literally “come-you”.",
          ex: [
            ["Heyrðu!", "Listen!"],
            ["Farðu heim.", "Go home."],
            ["Sendu mér skilaboð.", "Send me a message."]
          ]
        },
        {
          h: "The ending changes shape",
          p: "The -ðu softens or hardens to match the last sound of the stem. Say the pair out loud once and your mouth will agree.",
          table: {
            cols: ["stem ends in", "nafnháttur", "boðháttur"],
            rows: [
              ["-l, -m, -n", "koma", "komdu"],
              ["-ð", "bíða", "bíddu"],
              ["-p, -t, -k, -s", "sækja", "sæktu"],
              ["-a verb", "panta", "pantaðu"],
              ["anything else", "heyra", "heyrðu"]
            ]
          },
          tip: "If the stem already ends in -dd or -tt, nothing is added: hætta gives hættu."
        },
        {
          h: "The ones you just learn",
          p: "A handful are irregular. They are also the ones you will hear forty times a day.",
          list: [
            "vera → vertu",
            "hringja → hringdu",
            "halda → haltu",
            "taka → taktu",
            "láta → láttu",
            "sjá → sjáðu",
            "standa → stattu",
            "ganga → gakktu"
          ]
        },
        {
          h: "More than one, and “don't”",
          p: "For a group, use the þið form of the verb: komið, farið, verið, hringið. To forbid something, put ekki in front of the plain infinitive — no ending at all.",
          ex: [
            ["Komið inn!", "Come in! (to several people)"],
            ["Ekki hringja núna.", "Don't ring now."],
            ["Ekki gleyma dagsetningunni!", "Don't forget the date!"]
          ],
          tip: "An Icelandic imperative is not rude. Sendu mér skilaboð is an ordinary polite request."
        }
      ],
      vocab: ["klára", "panta", "sækja", "muna", "gleyma", "mæta", "nenna", "bjóða"],
      items: [
        { t: "fill", q: "Tell Kári to come here.", sentence: "___ hingað, Kári!", base: "koma",
          a: "komdu", case: "", mode: "type",
          why: "The stem ends in -m, so -ðu hardens to -du." },

        { t: "fill", q: "Get someone's attention.", sentence: "___, ég heiti Sóley.", base: "heyra",
          a: "heyrðu", case: "", mode: "type",
          why: "Ordinary stem, ordinary ending: heyr- + -ðu." },

        { t: "fill", q: "Tell her to be ready.", sentence: "___ tilbúin klukkan sjö.", base: "vera",
          a: "vertu", case: "", mode: "type",
          why: "vera is irregular: vertu. Learn it as one word." },

        { t: "fill", q: "Send him home.", sentence: "___ heim núna.", base: "fara",
          a: "farðu", case: "", mode: "type",
          why: "far- + -ðu. No change needed after -r." },

        { t: "fill", q: "Ask for a call.", sentence: "___ í mig á morgun.", base: "hringja",
          a: "hringdu", case: "", mode: "type",
          why: "hringja is irregular in the imperative: hringdu." },

        { t: "fill", q: "Ask for a message.", sentence: "___ mér skilaboð.", base: "senda",
          a: "sendu", case: "", mode: "type",
          why: "The stem already ends in -d, so no second d is added." },

        { t: "fill", q: "Ask to be picked up.", sentence: "___ mig klukkan átta.", base: "sækja",
          a: "sæktu", case: "", mode: "type",
          why: "The stem ends in -k, so the ending hardens to -tu." },

        { t: "table", q: "Complete the imperative rules.",
          cols: ["", "nafnháttur", "boðháttur"],
          rows: [
            { label: "stem in -l, -m, -n", cells: ["koma", "komdu"], blank: [1] },
            { label: "stem in -p, -t, -k, -s", cells: ["sækja", "sæktu"], blank: [1] },
            { label: "-a verb keeps its -a", cells: ["panta", "pantaðu"], blank: [1] },
            { label: "anything else", cells: ["heyra", "heyrðu"], blank: [] }
          ] },

        { t: "table", q: "One person or several?",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "koma", cells: ["komdu", "komið"], blank: [1] },
            { label: "fara", cells: ["farðu", "farið"], blank: [0] },
            { label: "vera", cells: ["vertu", "verið"], blank: [0, 1] }
          ] },

        { t: "choice", q: "Which is the imperative of bíða?",
          opts: ["bíddu", "bíðdu", "bíðaðu", "bíttu"], a: "bíddu",
          note: "A stem-final -ð swallows the -ð of the ending: ð + ðu becomes ddu." },

        { t: "build", q: "Come to the cinema with me.",
          a: "Komdu með mér í bíó", extra: ["þér", "á", "fer"],
          note: "koma með takes the dative when the person comes of their own accord: með mér." },

        { t: "type", q: "Type: “Don't forget the date!”", a: "Ekki gleyma dagsetningunni",
          hint: "ekki + plain infinitive",
          note: "gleyma governs the dative, so dagsetningunni, not dagsetninguna." },

        { t: "listen", speak: "Vertu tilbúin klukkan sex.", q: "What did you hear?", mode: "choice",
          opts: ["Vertu tilbúin klukkan sex.", "Vertu tilbúin klukkan sjö.", "Verið tilbúin klukkan sex."],
          a: "Vertu tilbúin klukkan sex.",
          note: "tilbúin is the feminine form — she is the one being told." },

        { t: "speak", is: "Hringdu í mig í kvöld.", en: "Call me tonight.",
          tip: "The g in hringdu is swallowed into the ng; say it as one lump." }
      ]
    },

    {
      n: 4,
      id: "u12l4",
      kind: "lesson",
      title: "Ég ætla að hitta þig",
      en: "Making plans",
      goal: "Say what you plan, need and want — and say no.",
      minutes: 11,
      icon: "🤝",
      teach: [
        {
          h: "að or no að",
          p: "ætla, þurfa, langa and nenna all need að before the next verb. vilja does not — it grabs the infinitive bare.",
          ex: [
            ["Ég ætla að hringja í hann.", "I'm going to ring him."],
            ["Ég þarf að vinna.", "I have to work."],
            ["Nennirðu að koma?", "Do you feel like coming?"],
            ["Ég vil hitta þig.", "I want to meet you."]
          ],
          tip: "If you catch yourself saying ég vil að hitta, drop the að."
        },
        {
          h: "Mig langar",
          p: "langa and vanta put the person in the accusative and leave the verb stuck in the third person. You do not want; wanting happens to you.",
          ex: [
            ["Mig langar að koma.", "I'd like to come."],
            ["Hana vantar tíma hjá tannlækni.", "She needs a dentist's appointment."]
          ]
        },
        {
          h: "Where ekki sits",
          p: "ekki comes straight after the finite verb. If there is an að-infinitive, ekki goes in front of að and never after it.",
          ex: [
            ["Ég kem ekki í kvöld.", "I'm not coming tonight."],
            ["Ég ætla ekki að koma.", "I'm not going to come."],
            ["Kemurðu ekki?", "Aren't you coming?"]
          ],
          tip: "A pronoun object slips in ahead of ekki: Ég sé þig ekki."
        }
      ],
      vocab: ["vilja", "þurfa", "hittast", "stefnumót", "boð", "veisla", "frí", "tannlæknir", "skoðun", "laus", "upptekinn", "tilbúinn", "kannski", "ekki", "á morgun", "allt í lagi", "hlakka til", "sjáumst", "klára"],
      items: [
        { t: "choice", q: "Fill the gap: Ég ___ að hitta þig.",
          opts: ["ætla", "vil", "get", "er"], a: "ætla",
          note: "vilja takes a bare infinitive, so ég vil hitta þig — no að." },

        { t: "build", q: "I want to meet you tomorrow.",
          a: "Ég vil hitta þig á morgun", extra: ["að", "ætla", "langar"],
          note: "No að after vilja." },

        { t: "fill", q: "Who wants to come?", sentence: "___ langar að koma með þér.", base: "ég",
          a: "mig", case: "ÞF", mode: "type",
          why: "langa puts its subject in the accusative: mig, þig, hana." },

        { t: "fill", q: "Who needs the appointment?", sentence: "___ vantar tíma hjá tannlækni.", base: "hún",
          a: "hana", case: "ÞF", mode: "type",
          why: "vanta works exactly like langa: accusative subject, third-person verb." },

        { t: "build", q: "Kári isn't coming tonight.",
          a: "Kári kemur ekki í kvöld", extra: ["er", "að", "ekkert"],
          note: "ekki lands directly after the finite verb." },

        { t: "build", q: "I'm not going to ring him.",
          a: "Ég ætla ekki að hringja í hann", extra: ["er", "ekkert", "með"],
          note: "With an að-infinitive, ekki goes before að." },

        { t: "type", q: "Type: “I have to work on Saturday.”", a: "Ég þarf að vinna á laugardaginn",
          hint: "þurfa + að",
          note: "á + accusative with the definite article names one particular coming Saturday." },

        { t: "gender", word: "stefnumót", a: "hk",
          note: "Neuter, like the mót it is built on: stefnumótið." },

        { t: "gender", word: "veisla", a: "kvk",
          note: "Feminine. Nouns in -a of this shape go veisla, veislu, veislu, veislu." },

        { t: "match", q: "Match the planning words",
          pairs: [["laus", "free, available"], ["upptekinn", "busy"], ["tilbúinn", "ready"], ["boð", "invitation"], ["frí", "day off"]] },

        { t: "listen", speak: "Nennirðu að koma með mér?", q: "What did you hear?", mode: "choice",
          opts: ["Nennirðu að koma með mér?", "Nennirðu að hringja í mig?", "Viltu koma í veislu?"],
          a: "Nennirðu að koma með mér?",
          note: "nenna takes að, and the þú has been glued onto the verb: nennir + þú." },

        { t: "speak", is: "Ég hlakka til að hitta þig.", en: "I'm looking forward to seeing you.",
          tip: "Say ég hlakka til, not mig hlakkar til. Before a verb, til is followed by að." }
      ]
    },

    {
      n: 5,
      id: "u12l5",
      kind: "story",
      title: "Afmælið hennar Sóleyjar",
      en: "Sóley's birthday",
      goal: "Follow a phone invitation and a very reluctant yes.",
      minutes: 10,
      icon: "🎂",
      teach: [
        {
          h: "Listen for two things",
          p: "The date, and the excuse. Kári has an excuse for everything, and Sóley has heard them all before."
        },
        {
          h: "Þetta er hann",
          p: "When someone asks for you by name on the phone, you answer Þetta er hann or Þetta er hún. Never your own name again — you have already said it once by picking up."
        }
      ],
      story: {
        title: "Í símanum",
        lines: [
          { sp: "Sóley", is: "Halló, er Kári við?", en: "Hello, is Kári there?" },
          { sp: "Kári", is: "Þetta er hann.", en: "Speaking." },
          { sp: "Sóley", is: "Sæll, Sóley hérna. Heyrðu, ég á afmæli fjórtánda mars.", en: "Hi, Sóley here. Listen, my birthday is on the fourteenth of March." },
          { sp: "Kári", is: "Til hamingju. Það er á laugardaginn.", en: "Congratulations. That's on Saturday." },
          { sp: "Sóley", is: "Einmitt. Ég ætla að halda litla veislu heima hjá mér.", en: "Exactly. I'm going to throw a small party at my place." },
          { sp: "Kári", is: "Ég er því miður upptekinn á laugardaginn.", en: "I'm unfortunately busy on Saturday." },
          { sp: "Sóley", is: "Þú ert alltaf upptekinn.", en: "You are always busy." },
          { sp: "Kári", is: "Ég þarf að vinna til klukkan sex.", en: "I have to work until six." },
          { sp: "Sóley", is: "Veislan byrjar klukkan átta. Komdu bara seint.", en: "The party starts at eight. Just come late." },
          { sp: "Kári", is: "Þá kem ég. En ég kem ekki með köku.", en: "Then I'll come. But I'm not bringing a cake." },
          { sp: "Sóley", is: "Sendu mér skilaboð þegar þú leggur af stað.", en: "Send me a message when you set off." },
          { sp: "Kári", is: "Allt í lagi. Sjáumst á laugardaginn.", en: "All right. See you on Saturday." }
        ],
        glossary: [
          ["Til hamingju", "congratulations"],
          ["halda veislu", "to throw a party"],
          ["heima hjá mér", "at my place"],
          ["leggja af stað", "to set off"],
          ["Sjáumst", "see you"],
          ["Þetta er hann", "speaking (on the phone)"]
        ]
      },
      vocab: ["afmæli", "veisla", "upptekinn", "senda skilaboð", "sjáumst", "hittast", "því miður"],
      items: [
        { t: "choice", q: "Hvenær á Sóley afmæli?",
          opts: ["Fjórtánda mars", "Fjórtánda maí", "Fjórða mars", "Á sunnudaginn"], a: "Fjórtánda mars",
          note: "Fjórtándi is the ordinal; as a date it becomes fjórtánda." },

        { t: "choice", q: "Why can't Kári come early?",
          opts: ["He has to work until six", "He is at the dentist", "He has no phone", "He is out of the country"],
          a: "He has to work until six",
          note: "Ég þarf að vinna til klukkan sex." },

        { t: "fill", q: "Give the date from the story.", sentence: "Sóley á afmæli ___ mars.", base: "14.",
          a: "fjórtánda", case: "ÞF", mode: "type",
          why: "A date that answers “when” takes the accusative -a." },

        { t: "build", q: "Send me a message.", a: "Sendu mér skilaboð", extra: ["mig", "þér", "hringdu"],
          note: "senda gives the person the dative: mér." },

        { t: "type", q: "Type what Kári says when he picks up: “Speaking.”", a: "Þetta er hann",
          hint: "Two words for “this is”, then a pronoun." },

        { t: "listen", speak: "Þú ert alltaf upptekinn.", q: "What did you hear?", mode: "choice",
          opts: ["Þú ert alltaf upptekinn.", "Þú ert aldrei upptekinn.", "Þú ert alltaf tilbúinn."],
          a: "Þú ert alltaf upptekinn.",
          note: "alltaf and aldrei sound close and mean the opposite. Listen for the l." },

        { t: "match", q: "Match the story phrases",
          pairs: [["Til hamingju", "congratulations"], ["heima hjá mér", "at my place"], ["leggja af stað", "to set off"], ["Sjáumst", "see you"], ["Þetta er hann", "speaking"]] },

        { t: "gender", word: "afmæli", a: "hk",
          note: "Neuter, and it never changes in the singular except in the genitive: afmælis." },

        { t: "choice", q: "Komdu is the imperative of which verb?",
          opts: ["koma", "kaupa", "kalla", "kunna"], a: "koma",
          note: "kom- + -du, because the stem ends in -m." },

        { t: "fill", q: "Who does Sóley ring?", sentence: "Sóley hringir í ___ .", base: "Kári",
          a: "Kára", case: "ÞF", mode: "type",
          why: "hringja í takes the accusative, and weak masculine names in -i end in -a." },

        { t: "type", q: "Type: “Are you busy on Saturday?”", a: "Ertu upptekinn á laugardaginn?",
          hint: "ert + þú glued together",
          note: "Ertu is just ert + þú. Icelanders write it that way too." },

        { t: "speak", is: "Sjáumst á laugardaginn!", en: "See you on Saturday!",
          tip: "Sjáumst ends in -st, the reciprocal ending: we'll see each other." }
      ]
    },

    {
      n: 6,
      id: "u12l6",
      kind: "checkpoint",
      title: "Stefnumótapróf",
      en: "Unit 12 checkpoint",
      goal: "Prove you can fix a date, give an order and refuse politely.",
      minutes: 12,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "Ordinals 1–31, and the -i / -a switch: Í dag er fyrsti maí, but Ég kem fyrsta maí.",
            "annar, annan — the ordinal that behaves differently.",
            "The imperative: komdu, farðu, vertu, hringdu, sæktu, pantaðu; plural komið, farið, verið.",
            "Negative commands: ekki + plain infinitive. Ekki gleyma!",
            "ætla að, þurfa að, langa að, nenna að — but vilja with a bare infinitive.",
            "ekki straight after the finite verb, and before að."
          ]
        }
      ],
      vocab: ["fyrsti", "annar", "þriðji", "fjórði", "tuttugasti", "dagatal", "stefnumót", "boð", "skoðun", "tannlæknir", "hringja", "svara", "panta", "þurfa", "vilja", "muna", "upptekinn", "laus", "tilbúinn", "ekki", "því miður"],
      items: [
        { t: "fill", q: "Today's date.", sentence: "Í dag er ___ desember.", base: "20.",
          a: "tuttugasti", case: "NF", mode: "type",
          why: "After er the ordinal keeps its -i." },

        { t: "fill", q: "When is the appointment?", sentence: "Stefnumótið er ___ júní.", base: "3.",
          a: "þriðja", case: "ÞF", mode: "type",
          why: "A date used as a time expression goes into the accusative." },

        { t: "choice", q: "Which one means “call me”?",
          opts: ["Hringdu í mig", "Hringdu mig", "Hringja í mig", "Hringdu í ég"], a: "Hringdu í mig",
          note: "Imperative hringdu, then í + accusative mig." },

        { t: "build", q: "I'm not going to come tonight.",
          a: "Ég ætla ekki að koma í kvöld", extra: ["er", "með", "ekkert"],
          note: "ekki before að, always." },

        { t: "type", q: "Type: “Unfortunately he is busy.”", a: "Því miður er hann upptekinn",
          hint: "Start with Því miður.",
          note: "Anything in first place pushes the verb ahead of the subject." },

        { t: "gender", word: "boð", a: "hk",
          note: "Neuter: boðið. Takk fyrir boðið!" },

        { t: "gender", word: "skoðun", a: "kvk",
          note: "Feminine, plural skoðanir." },

        { t: "listen", speak: "Ég þarf að panta tíma hjá tannlækni.", q: "What did you hear?", mode: "choice",
          opts: ["Ég þarf að panta tíma hjá tannlækni.", "Ég ætla að panta tíma hjá lækni.", "Ég þarf að hringja í tannlækni."],
          a: "Ég þarf að panta tíma hjá tannlækni.",
          note: "hjá takes the dative: hjá tannlækni." },

        { t: "match", q: "Match the unit words",
          pairs: [["stefnumót", "appointment"], ["boð", "invitation"], ["dagatal", "calendar"], ["afmæli", "birthday"], ["laus", "free, available"], ["upptekinn", "busy"]] },

        { t: "table", q: "Fill in the missing date forms.",
          cols: ["", "nefnifall", "þolfall"],
          rows: [
            { label: "1.", cells: ["fyrsti", "fyrsta"], blank: [1] },
            { label: "2.", cells: ["annar", "annan"], blank: [1] },
            { label: "3.", cells: ["þriðji", "þriðja"], blank: [] },
            { label: "4.", cells: ["fjórði", "fjórða"], blank: [1] }
          ] },

        { t: "fill", q: "Which case after svara?", sentence: "Sóley svarar aldrei ___ .", base: "tölvupóstar",
          a: "tölvupóstum", case: "ÞGF", mode: "type",
          why: "svara governs the dative; the dative plural ending is -um." },

        { t: "build", q: "Be ready at seven.",
          a: "Vertu tilbúinn klukkan sjö", extra: ["vera", "er", "búinn"],
          note: "vertu is irregular, and tilbúinn agrees with a male listener." },

        { t: "speak", is: "Manstu eftir stefnumótinu?", en: "Do you remember the appointment?",
          tip: "muna eftir takes the dative: stefnumótinu." },

        { t: "choice", q: "Fill the gap: Mig ___ að hitta þig.",
          opts: ["langar", "langa", "vil", "þarf"], a: "langar",
          note: "langa keeps the third-person form because mig is not really a subject." }
      ]
    }
  ]
};

export const vocab = [
  // ── raðtölur / ordinals ───────────────────────────────────────────────
  { w: "fyrsti", en: "first", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Í dag er fyrsti maí.", en: "Today is the first of May." } },

  { w: "annar", en: "second", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Ég kem annan mars.", en: "I'm coming on the second of March." } },

  { w: "þriðji", en: "third", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Veislan er þriðja apríl.", en: "The party is on the third of April." } },

  { w: "fjórði", en: "fourth", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Hann á afmæli fjórða júlí.", en: "His birthday is on the fourth of July." } },

  { w: "fimmti", en: "fifth", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Ég er laus fimmta júní.", en: "I'm free on the fifth of June." } },

  { w: "tuttugasti", en: "twentieth", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Í dag er tuttugasti desember.", en: "Today is the twentieth of December." } },

  { w: "þrítugasti", en: "thirtieth", pos: "num", topic: "calendar", unit: 12, cefr: "A2",
    ex: { is: "Ég kem heim þrítugasta ágúst.", en: "I'm coming home on the thirtieth of August." } },

  // ── dagatalið / the calendar ──────────────────────────────────────────
  { w: "dagsetning", en: "date", pos: "noun", g: "kvk", topic: "calendar", unit: 12, cefr: "A2",
    forms: { sg: ["dagsetning", "dagsetningu", "dagsetningu", "dagsetningar"],
             pl: ["dagsetningar", "dagsetningar", "dagsetningum", "dagsetninga"] },
    ex: { is: "Ég man ekki dagsetninguna.", en: "I don't remember the date." } },

  { w: "mánaðardagur", en: "day of the month", pos: "noun", g: "kk", topic: "calendar", unit: 12, cefr: "A2",
    forms: { sg: ["mánaðardagur", "mánaðardag", "mánaðardegi", "mánaðardags"],
             pl: ["mánaðardagar", "mánaðardaga", "mánaðardögum", "mánaðardaga"] },
    ex: { is: "Hvaða mánaðardagur er í dag?", en: "What is the date today?" } },

  { w: "dagatal", en: "calendar", pos: "noun", g: "hk", topic: "calendar", unit: 12, cefr: "A2",
    forms: { sg: ["dagatal", "dagatal", "dagatali", "dagatals"],
             pl: ["dagatöl", "dagatöl", "dagatölum", "dagatala"] },
    ex: { is: "Ég skrifa afmæli á dagatalið.", en: "I write birthdays on the calendar." } },

  { w: "afmæli", en: "birthday", pos: "noun", g: "hk", topic: "calendar", unit: 12, cefr: "A1",
    forms: { sg: ["afmæli", "afmæli", "afmæli", "afmælis"],
             pl: ["afmæli", "afmæli", "afmælum", "afmæla"] },
    ex: { is: "Sóley á afmæli í mars.", en: "Sóley's birthday is in March." } },

  { w: "desember", en: "December", pos: "noun", g: "kk", topic: "calendar", unit: 12, cefr: "A1",
    forms: { sg: ["desember", "desember", "desember", "desembers"], pl: null },
    ex: { is: "Það er kalt í desember.", en: "It is cold in December." } },

  { w: "júní", en: "June", pos: "noun", g: "kk", topic: "calendar", unit: 12, cefr: "A1",
    forms: { sg: ["júní", "júní", "júní", "júní"], pl: null },
    ex: { is: "Við hittumst í júní.", en: "We'll meet in June." } },

  { w: "næstur", en: "next", pos: "adj", topic: "calendar", unit: 12, cefr: "A2",
    decl: { nom: ["næstur", "næst", "næst"] },
    ex: { is: "Við hittumst í næstu viku.", en: "We'll meet next week." } },

  { w: "síðastur", en: "last", pos: "adj", topic: "calendar", unit: 12, cefr: "A2",
    decl: { nom: ["síðastur", "síðust", "síðast"] },
    ex: { is: "Þetta er síðasti dagurinn í júní.", en: "This is the last day of June." } },

  // ── stefnumót / appointments ──────────────────────────────────────────
  { w: "stefnumót", en: "appointment, date", pos: "noun", g: "hk", topic: "appointments", unit: 12, cefr: "A2",
    forms: { sg: ["stefnumót", "stefnumót", "stefnumóti", "stefnumóts"],
             pl: ["stefnumót", "stefnumót", "stefnumótum", "stefnumóta"] },
    ex: { is: "Ég á stefnumót klukkan þrjú.", en: "I have an appointment at three." } },

  { w: "boð", en: "invitation", pos: "noun", g: "hk", topic: "invitations", unit: 12, cefr: "A2",
    forms: { sg: ["boð", "boð", "boði", "boðs"],
             pl: ["boð", "boð", "boðum", "boða"] },
    ex: { is: "Takk fyrir boðið!", en: "Thanks for the invitation!" } },

  { w: "veisla", en: "party", pos: "noun", g: "kvk", topic: "invitations", unit: 12, cefr: "A2",
    forms: { sg: ["veisla", "veislu", "veislu", "veislu"],
             pl: ["veislur", "veislur", "veislum", "veislna"] },
    ex: { is: "Veislan byrjar klukkan átta.", en: "The party starts at eight." } },

  { w: "frí", en: "day off, time off", pos: "noun", g: "hk", topic: "appointments", unit: 12, cefr: "A2",
    forms: { sg: ["frí", "frí", "fríi", "frís"],
             pl: ["frí", "frí", "fríum", "fría"] },
    ex: { is: "Ég er í fríi á morgun.", en: "I'm off tomorrow." } },

  { w: "tannlæknir", en: "dentist", pos: "noun", g: "kk", topic: "appointments", unit: 12, cefr: "A2",
    forms: { sg: ["tannlæknir", "tannlækni", "tannlækni", "tannlæknis"],
             pl: ["tannlæknar", "tannlækna", "tannlæknum", "tannlækna"] },
    ex: { is: "Ég þarf að fara til tannlæknis.", en: "I have to go to the dentist." } },

  { w: "skoðun", en: "check-up, examination", pos: "noun", g: "kvk", topic: "appointments", unit: 12, cefr: "A2",
    forms: { sg: ["skoðun", "skoðun", "skoðun", "skoðunar"],
             pl: ["skoðanir", "skoðanir", "skoðunum", "skoðana"] },
    ex: { is: "Ég ætla bara í skoðun.", en: "I'm just going for a check-up." } },

  // ── síminn / the phone ────────────────────────────────────────────────
  { w: "sími", en: "telephone", pos: "noun", g: "kk", topic: "phone", unit: 12, cefr: "A1",
    forms: { sg: ["sími", "síma", "síma", "síma"],
             pl: ["símar", "síma", "símum", "síma"] },
    ex: { is: "Síminn minn er í töskunni.", en: "My phone is in the bag." } },

  { w: "farsími", en: "mobile phone", pos: "noun", g: "kk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["farsími", "farsíma", "farsíma", "farsíma"],
             pl: ["farsímar", "farsíma", "farsímum", "farsíma"] },
    ex: { is: "Ég er með farsímann minn.", en: "I have my mobile on me." } },

  { w: "símanúmer", en: "phone number", pos: "noun", g: "hk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["símanúmer", "símanúmer", "símanúmeri", "símanúmers"],
             pl: ["símanúmer", "símanúmer", "símanúmerum", "símanúmera"] },
    ex: { is: "Hvað er símanúmerið þitt?", en: "What is your phone number?" } },

  { w: "símsvari", en: "answering machine", pos: "noun", g: "kk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["símsvari", "símsvara", "símsvara", "símsvara"],
             pl: ["símsvarar", "símsvara", "símsvörum", "símsvara"] },
    ex: { is: "Þetta er símsvarinn hjá Kára.", en: "This is Kári's answering machine." } },

  { w: "tölvupóstur", en: "email", pos: "noun", g: "kk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["tölvupóstur", "tölvupóst", "tölvupósti", "tölvupósts"],
             pl: ["tölvupóstar", "tölvupósta", "tölvupóstum", "tölvupósta"] },
    ex: { is: "Ég sendi þér tölvupóst.", en: "I'll send you an email." } },

  { w: "samband", en: "connection, contact", pos: "noun", g: "hk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["samband", "samband", "sambandi", "sambands"],
             pl: ["sambönd", "sambönd", "samböndum", "sambanda"] },
    ex: { is: "Sambandið er slæmt.", en: "The connection is bad." } },

  { w: "andartak", en: "moment", pos: "noun", g: "hk", topic: "phone", unit: 12, cefr: "A2",
    forms: { sg: ["andartak", "andartak", "andartaki", "andartaks"],
             pl: ["andartök", "andartök", "andartökum", "andartaka"] },
    ex: { is: "Andartak, ég sæki hana.", en: "One moment, I'll get her." } },

  // ── sagnir / verbs ────────────────────────────────────────────────────
  { w: "hringja", en: "to ring, to call", pos: "verb", topic: "phone", unit: 12, cefr: "A1",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["hringi", "hringir", "hringir", "hringjum", "hringið", "hringja"],
            past: ["hringdi", "hringdir", "hringdi", "hringdum", "hringduð", "hringdu"], pp: "hringt" },
    ex: { is: "Hringdu í mig í kvöld.", en: "Call me tonight." } },

  { w: "svara", en: "to answer", pos: "verb", topic: "phone", unit: 12, cefr: "A1",
    gov: "ÞGF", vclass: "weak-a",
    conj: { pres: ["svara", "svarar", "svarar", "svörum", "svarið", "svara"],
            past: ["svaraði", "svaraðir", "svaraði", "svöruðum", "svöruðuð", "svöruðu"], pp: "svarað" },
    ex: { is: "Kári svarar aldrei símanum.", en: "Kári never answers the phone." } },

  { w: "senda", en: "to send", pos: "verb", topic: "phone", unit: 12, cefr: "A1",
    gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["sendi", "sendir", "sendir", "sendum", "sendið", "senda"],
            past: ["sendi", "sendir", "sendi", "sendum", "senduð", "sendu"], pp: "sent" },
    ex: { is: "Sendu mér skilaboð.", en: "Send me a message." } },

  { w: "panta", en: "to book, to order", pos: "verb", topic: "appointments", unit: 12, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["panta", "pantar", "pantar", "pöntum", "pantið", "panta"],
            past: ["pantaði", "pantaðir", "pantaði", "pöntuðum", "pöntuðuð", "pöntuðu"], pp: "pantað" },
    ex: { is: "Ég ætla að panta tíma.", en: "I'm going to book an appointment." } },

  { w: "bjóða", en: "to invite, to offer", pos: "verb", topic: "invitations", unit: 12, cefr: "A2",
    gov: "ÞGF", vclass: "strong",
    conj: { pres: ["býð", "býður", "býður", "bjóðum", "bjóðið", "bjóða"],
            past: ["bauð", "bauðst", "bauð", "buðum", "buðuð", "buðu"], pp: "boðið" },
    ex: { is: "Ég býð þér í kaffi.", en: "I'll treat you to a coffee." } },

  { w: "nenna", en: "to feel like, to be bothered", pos: "verb", topic: "invitations", unit: 12, cefr: "A2",
    gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["nenni", "nennir", "nennir", "nennum", "nennið", "nenna"],
            past: ["nennti", "nenntir", "nennti", "nenntum", "nenntuð", "nenntu"], pp: "nennt" },
    ex: { is: "Nennirðu að koma með mér?", en: "Do you feel like coming with me?" } },

  { w: "mæta", en: "to turn up, to show up", pos: "verb", topic: "appointments", unit: 12, cefr: "A2",
    gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["mæti", "mætir", "mætir", "mætum", "mætið", "mæta"],
            past: ["mætti", "mættir", "mætti", "mættum", "mættuð", "mættu"], pp: "mætt" },
    ex: { is: "Við mætum klukkan sjö.", en: "We'll turn up at seven." } },

  { w: "hittast", en: "to meet (each other)", pos: "verb", topic: "appointments", unit: 12, cefr: "A2",
    gov: "none", vclass: "middle",
    conj: { pres: ["hittist", "hittist", "hittist", "hittumst", "hittist", "hittast"], pp: "hist" },
    ex: { is: "Hittumst á laugardaginn!", en: "Let's meet on Saturday!" } },

  { w: "vilja", en: "to want", pos: "verb", topic: "actions", unit: 12, cefr: "A1",
    gov: "ÞF", vclass: "irregular",
    conj: { pres: ["vil", "vilt", "vill", "viljum", "viljið", "vilja"],
            past: ["vildi", "vildir", "vildi", "vildum", "vilduð", "vildu"], pp: "viljað" },
    ex: { is: "Ég vil hitta þig.", en: "I want to meet you." } },

  { w: "þurfa", en: "to need, to have to", pos: "verb", topic: "actions", unit: 12, cefr: "A1",
    gov: "ÞF", vclass: "irregular",
    conj: { pres: ["þarf", "þarft", "þarf", "þurfum", "þurfið", "þurfa"],
            past: ["þurfti", "þurftir", "þurfti", "þurftum", "þurftuð", "þurftu"], pp: "þurft" },
    ex: { is: "Ég þarf að vinna á morgun.", en: "I have to work tomorrow." } },

  { w: "gleyma", en: "to forget", pos: "verb", topic: "actions", unit: 12, cefr: "A1",
    gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["gleymi", "gleymir", "gleymir", "gleymum", "gleymið", "gleyma"],
            past: ["gleymdi", "gleymdir", "gleymdi", "gleymdum", "gleymduð", "gleymdu"], pp: "gleymt" },
    ex: { is: "Ekki gleyma dagsetningunni!", en: "Don't forget the date!" } },

  { w: "muna", en: "to remember", pos: "verb", topic: "actions", unit: 12, cefr: "A1",
    gov: "ÞF", vclass: "irregular",
    conj: { pres: ["man", "manst", "man", "munum", "munið", "muna"],
            past: ["mundi", "mundir", "mundi", "mundum", "munduð", "mundu"], pp: "munað" },
    ex: { is: "Manstu símanúmerið mitt?", en: "Do you remember my phone number?" } },

  { w: "sækja", en: "to fetch, to pick up", pos: "verb", topic: "actions", unit: 12, cefr: "A2",
    gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["sæki", "sækir", "sækir", "sækjum", "sækið", "sækja"],
            past: ["sótti", "sóttir", "sótti", "sóttum", "sóttuð", "sóttu"], pp: "sótt" },
    ex: { is: "Ég sæki þig klukkan átta.", en: "I'll pick you up at eight." } },

  { w: "klára", en: "to finish", pos: "verb", topic: "actions", unit: 12, cefr: "A2",
    gov: "ÞF", vclass: "weak-a",
    conj: { pres: ["klára", "klárar", "klárar", "klárum", "klárið", "klára"],
            past: ["kláraði", "kláraðir", "kláraði", "kláruðum", "kláruðuð", "kláruðu"], pp: "klárað" },
    ex: { is: "Kláraðu verkefnið!", en: "Finish the assignment!" } },

  { w: "heyra", en: "to hear", pos: "verb", topic: "phone", unit: 12, cefr: "A1",
    gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["heyri", "heyrir", "heyrir", "heyrum", "heyrið", "heyra"],
            past: ["heyrði", "heyrðir", "heyrði", "heyrðum", "heyrðuð", "heyrðu"], pp: "heyrt" },
    ex: { is: "Ég heyri illa í þér.", en: "I can hardly hear you." } },

  { w: "hlakka til", en: "to look forward to", pos: "verb", topic: "invitations", unit: 12, cefr: "A2",
    gov: "EF", vclass: "weak-a",
    conj: { pres: ["hlakka", "hlakkar", "hlakkar", "hlökkum", "hlakkið", "hlakka"],
            past: ["hlakkaði", "hlakkaðir", "hlakkaði", "hlökkuðum", "hlökkuðuð", "hlökkuðu"], pp: "hlakkað" },
    ex: { is: "Ég hlakka til að hitta þig.", en: "I'm looking forward to seeing you." } },

  // ── lýsingarorð / adjectives ──────────────────────────────────────────
  { w: "upptekinn", en: "busy, taken", pos: "adj", topic: "appointments", unit: 12, cefr: "A2",
    decl: { nom: ["upptekinn", "upptekin", "upptekið"] },
    ex: { is: "Kári er alltaf upptekinn.", en: "Kári is always busy." } },

  { w: "laus", en: "free, available", pos: "adj", topic: "appointments", unit: 12, cefr: "A2",
    decl: { nom: ["laus", "laus", "laust"] },
    ex: { is: "Ertu laus á fimmtudaginn?", en: "Are you free on Thursday?" } },

  { w: "tilbúinn", en: "ready", pos: "adj", topic: "appointments", unit: 12, cefr: "A2",
    decl: { nom: ["tilbúinn", "tilbúin", "tilbúið"] },
    ex: { is: "Vertu tilbúin klukkan sex.", en: "Be ready at six." } },

  // ── smáorð og frasar / small words and phrases ────────────────────────
  { w: "ekki", en: "not", pos: "adv", topic: "grammar", unit: 12, cefr: "A1",
    ex: { is: "Ég kem ekki í kvöld.", en: "I'm not coming tonight." } },

  { w: "kannski", en: "maybe", pos: "adv", topic: "appointments", unit: 12, cefr: "A1",
    ex: { is: "Kannski hringi ég seinna.", en: "Maybe I'll ring later." } },

  { w: "á morgun", en: "tomorrow", pos: "adv", topic: "calendar", unit: 12, cefr: "A1",
    ex: { is: "Sjáumst á morgun!", en: "See you tomorrow!" } },

  { w: "því miður", en: "unfortunately", pos: "phrase", topic: "courtesy", unit: 12, cefr: "A2",
    ex: { is: "Því miður er ég upptekinn.", en: "Unfortunately I'm busy." } },

  { w: "allt í lagi", en: "all right, okay", pos: "phrase", topic: "courtesy", unit: 12, cefr: "A1",
    ex: { is: "Allt í lagi, ég kem klukkan átta.", en: "All right, I'll come at eight." } },

  { w: "sjáumst", en: "see you", pos: "phrase", topic: "courtesy", unit: 12, cefr: "A1",
    ex: { is: "Sjáumst á fimmtudaginn!", en: "See you on Thursday!" } },

  { w: "senda skilaboð", en: "to send a message", pos: "phrase", topic: "phone", unit: 12, cefr: "A2",
    ex: { is: "Ég sendi þér skilaboð á morgun.", en: "I'll send you a message tomorrow." } },

  { w: "vera við", en: "to be in, to be available (on the phone)", pos: "phrase", topic: "phone", unit: 12, cefr: "A2",
    ex: { is: "Er Sóley við?", en: "Is Sóley there?" } }
];

export default unit;
