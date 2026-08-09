// data/units/u03.js — Unit 3: Hvað er klukkan?
// Numbers, the clock, days, months, seasons, and the plural of everything.

export const unit = {
  id: 3,
  slug: "u03",
  title: "Hvað er klukkan?",
  en: "What time is it?",
  cefr: "A1.1",
  icon: "🕐",
  blurb: "Count, tell the time, and name the day you are stuck in.",
  canDo: [
    "Count from one to a hundred and count things in the right gender",
    "Ask and answer what time it is, including half hours and quarters",
    "Name the days, the months and the four seasons",
    "Talk about a group using við, þið, þeir, þær and þau"
  ],
  lessons: [
    {
      n: 1,
      id: "u03l1",
      kind: "lesson",
      title: "Einn, tveir, þrír",
      en: "Counting to a hundred",
      goal: "Count to 100 and pick the right form of 1–4.",
      minutes: 9,
      icon: "🔢",
      teach: [
        {
          h: "The first four numbers have genders",
          p: "From five upwards a number is just a number. One, two, three and four are different: they dress themselves in the gender of the thing being counted. Say the thing out loud first, then choose.",
          table: {
            cols: ["", "karlkyn", "kvenkyn", "hvorugkyn"],
            rows: [
              ["1", "einn", "ein", "eitt"],
              ["2", "tveir", "tvær", "tvö"],
              ["3", "þrír", "þrjár", "þrjú"],
              ["4", "fjórir", "fjórar", "fjögur"]
            ]
          },
          ex: [
            ["fjórir dagar", "four days"],
            ["fjórar vikur", "four weeks"],
            ["fjögur ár", "four years"]
          ],
          tip: "dagur is masculine, vika is feminine, ár is neuter. The number follows the noun, not the meaning."
        },
        {
          h: "Five to twenty, no thinking required",
          list: [
            "5 fimm · 6 sex · 7 sjö · 8 átta · 9 níu · 10 tíu",
            "11 ellefu · 12 tólf · 13 þrettán · 14 fjórtán · 15 fimmtán",
            "16 sextán · 17 sautján · 18 átján · 19 nítján · 20 tuttugu"
          ],
          tip: "These never change form. Ever."
        },
        {
          h: "The tens, and how to glue them together",
          p: "Take a ten, add og, add a digit. Icelandic uses og only between the last two parts of a number.",
          table: {
            cols: ["tugur", "orð", "dæmi"],
            rows: [
              ["30", "þrjátíu", "þrjátíu og einn"],
              ["40", "fjörutíu", "fjörutíu og tveir"],
              ["50", "fimmtíu", "fimmtíu og þrír"],
              ["60", "sextíu", "sextíu og fjórir"],
              ["70", "sjötíu", "sjötíu og fimm"],
              ["80", "áttatíu", "áttatíu og sex"],
              ["90", "níutíu", "níutíu og níu"],
              ["100", "hundrað", "hundrað og einn"]
            ]
          },
          tip: "For plain counting, phone numbers and arithmetic, use the masculine forms."
        }
      ],
      vocab: ["einn", "tveir", "þrír", "fjórir", "fimm", "tíu", "tuttugu", "hundrað", "dagur", "vika", "ár"],
      items: [
        { t: "match", q: "Match the numbers",
          pairs: [["einn", "one"], ["tveir", "two"], ["þrír", "three"], ["fjórir", "four"], ["fimm", "five"]] },

        { t: "choice", q: "Three men — which word for “three”?",
          opts: ["þrír", "þrjár", "þrjú", "þriðji"], a: "þrír",
          note: "maður is masculine, so the number goes masculine too.",
          tags: ["num:1-4", "gender:kk"] },

        { t: "choice", q: "Three weeks — which word for “three”?",
          opts: ["þrír", "þrjár", "þrjú"], a: "þrjár",
          note: "vika is feminine: þrjár vikur.",
          tags: ["num:1-4", "gender:kvk"] },

        { t: "choice", q: "Three years — which word for “three”?",
          opts: ["þrír", "þrjár", "þrjú"], a: "þrjú",
          note: "ár is neuter: þrjú ár.",
          tags: ["num:1-4", "gender:hk"] },

        { t: "type", q: "Type “four days”. (dagur is masculine)",
          a: "fjórir dagar", hint: "fjór… + dagar",
          note: "Masculine plural: fjórir dagar." },

        { t: "build", q: "Two weeks", a: "tvær vikur", extra: ["tveir", "tvö", "dagar"],
          note: "vika is feminine, so tvær." },

        { t: "gender", word: "vika", a: "kvk",
          note: "Nouns ending in -a are almost always feminine." },

        { t: "gender", word: "dagur", a: "kk",
          note: "The ending -ur on a noun is a strong masculine signal." },

        { t: "listen", speak: "tuttugu og einn", q: "Which number did you hear?",
          mode: "choice", opts: ["21", "12", "31", "20"], a: "21",
          note: "tuttugu = 20, then og einn." },

        { t: "fill", q: "Put the number into the right gender.",
          sentence: "Það eru ___ ár síðan.", base: "fjórir",
          opts: ["fjórir", "fjórar", "fjögur"], a: "fjögur",
          case: "NF", why: "ár is neuter, so fjögur.", mode: "choice" },

        { t: "table", q: "Complete the gendered numbers",
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            { label: "1", cells: ["einn", "ein", "eitt"], blank: [2] },
            { label: "2", cells: ["tveir", "tvær", "tvö"], blank: [1] },
            { label: "3", cells: ["þrír", "þrjár", "þrjú"], blank: [] },
            { label: "4", cells: ["fjórir", "fjórar", "fjögur"], blank: [0, 2] }
          ] },

        { t: "speak", is: "einn, tveir, þrír, fjórir, fimm", en: "one, two, three, four, five",
          tip: "Stress the first syllable of every one of them: FJÓR-ir, not fjor-ÍR." }
      ]
    },

    {
      n: 2,
      id: "u03l2",
      kind: "lesson",
      title: "Klukkan er hálf níu",
      en: "Telling the time",
      goal: "Ask the time and answer it, including halves and quarters.",
      minutes: 10,
      icon: "⏰",
      teach: [
        {
          h: "The clock is feminine but the time is neuter",
          p: "You ask Hvað er klukkan? — literally “what is the clock?”. klukka is a feminine noun, yet the answer always uses the neuter number. Klukkan er eitt. Klukkan er tvö. Nobody knows why. Just do it.",
          ex: [
            ["Hvað er klukkan?", "What time is it?"],
            ["Klukkan er þrjú.", "It is three o'clock."],
            ["Klukkan er fjögur.", "It is four o'clock."]
          ],
          tip: "eitt, tvö, þrjú, fjögur — the neuter set from lesson one."
        },
        {
          h: "Half past is half to",
          p: "This one catches everybody. Icelandic hálf points forward to the hour that is coming, not back to the one that has gone. hálf níu is half of the ninth hour: 8:30.",
          table: {
            cols: ["klukkan", "íslenska", "enska"],
            rows: [
              ["1:00", "klukkan er eitt", "one o'clock"],
              ["1:05", "klukkan er fimm mínútur yfir eitt", "five past one"],
              ["1:15", "klukkan er korter yfir eitt", "quarter past one"],
              ["1:30", "klukkan er hálf tvö", "half past one"],
              ["1:45", "klukkan er korter í tvö", "quarter to two"],
              ["2:00", "klukkan er tvö", "two o'clock"]
            ]
          },
          tip: "yfir = past, í = to, korter = a quarter of an hour."
        },
        {
          h: "At a time, drop the verb",
          p: "To say when something happens, use klukkan with no er. Ég vakna klukkan sjö. In writing it is shortened to kl.",
          ex: [
            ["Ég vakna klukkan sjö.", "I wake up at seven."],
            ["Strætó fer klukkan hálf níu.", "The bus leaves at half past eight."],
            ["Klukkan hvað borðar þú?", "What time do you eat?"]
          ]
        }
      ],
      vocab: ["klukka", "tími", "mínúta", "korter", "hálf", "hádegi", "morgunn", "kvöld", "vakna", "strætó"],
      items: [
        { t: "choice", q: "Ask what time it is.",
          opts: ["Hvað er klukkan?", "Hvar er klukkan?", "Hver er klukkan?", "Hvenær er klukkan?"],
          a: "Hvað er klukkan?",
          note: "Literally “what is the clock?” — hvað, not hvenær." },

        { t: "choice", q: "It is two o'clock.",
          opts: ["Klukkan er tvö", "Klukkan er tveir", "Klukkan er tvær", "Klukkan er tvo"],
          a: "Klukkan er tvö",
          note: "The time is always neuter, whatever the gender of klukka." },

        { t: "choice", q: "hálf níu is…",
          opts: ["8:30", "9:30", "8:45", "9:15"], a: "8:30",
          note: "hálf counts forward: half of the ninth hour." },

        { t: "build", q: "It is half past eight.", a: "Klukkan er hálf níu",
          extra: ["átta", "korter", "yfir"],
          note: "Half past eight = hálf níu. Trust the number that comes next." },

        { t: "type", q: "Type “a quarter past three”.", a: "korter yfir þrjú",
          hint: "korter …", note: "yfir = past." },

        { t: "type", q: "Type “a quarter to five”.", a: "korter í fimm",
          hint: "korter …", note: "í = to, when you are counting down to the hour." },

        { t: "listen", speak: "Klukkan er korter í sjö.", q: "What time is it?",
          mode: "choice", opts: ["6:45", "7:15", "7:45", "6:15"], a: "6:45",
          note: "korter í sjö = fifteen minutes before seven." },

        { t: "fill", q: "1:40 — past or to?",
          sentence: "Klukkan er tuttugu mínútur ___ tvö.", base: "í / yfir",
          opts: ["í", "yfir", "að"], a: "í",
          why: "Past the half hour you count down to the next hour with í.", mode: "choice" },

        { t: "match", q: "Match the time words",
          pairs: [["klukka", "clock"], ["mínúta", "minute"], ["korter", "quarter of an hour"],
                  ["hádegi", "noon"], ["tími", "hour, time"]] },

        { t: "choice", q: "Klukkan er fimm mínútur yfir tíu.",
          opts: ["10:05", "10:55", "9:55", "11:05"], a: "10:05",
          note: "yfir tíu — five minutes past ten." },

        { t: "type", q: "Type “I wake up at seven.”", a: "Ég vakna klukkan sjö",
          hint: "no er after klukkan here",
          note: "When you say at what time, klukkan stands alone with no verb." },

        { t: "speak", is: "Klukkan er hálf tólf.", en: "It is half past eleven.",
          tip: "ll in tólf is pronounced [tl]: TOULTF." }
      ]
    },

    {
      n: 3,
      id: "u03l3",
      kind: "grammar",
      title: "Við, þið, þau",
      en: "Talking about a group",
      goal: "Use the plural pronouns and the plural verb endings -um, -ið, -a.",
      minutes: 12,
      icon: "👥",
      teach: [
        {
          h: "Six pronouns become five",
          p: "Singular has three words for “they-ish” things. Plural does too, and you pick by who is standing there: all men, all women, or mixed.",
          table: {
            cols: ["", "eintala", "fleirtala"],
            rows: [
              ["1st", "ég", "við"],
              ["2nd", "þú", "þið"],
              ["3rd kk", "hann", "þeir"],
              ["3rd kvk", "hún", "þær"],
              ["3rd hk", "það", "þau"]
            ]
          },
          tip: "One man in a room of forty women and the whole group is þau. Icelandic is not subtle about this."
        },
        {
          h: "Three plural endings, and that is the lot",
          p: "Whatever the verb, the plural is -um for við, -ið for þið, and the bare infinitive for þeir, þær and þau. The third person plural looks exactly like the dictionary form.",
          table: {
            cols: ["", "tala", "vakna", "borða"],
            rows: [
              ["við", "tölum", "vöknum", "borðum"],
              ["þið", "talið", "vaknið", "borðið"],
              ["þeir/þær/þau", "tala", "vakna", "borða"]
            ]
          },
          tip: "Watch tala → tölum and vakna → vöknum. An ending with u pulls a stem a back to ö. This is the u-umlaut and it will follow you around forever."
        },
        {
          h: "The irregulars you already meet daily",
          table: {
            cols: ["", "vera", "fara", "vinna"],
            rows: [
              ["við", "erum", "förum", "vinnum"],
              ["þið", "eruð", "farið", "vinnið"],
              ["þeir/þær/þau", "eru", "fara", "vinna"]
            ]
          },
          ex: [
            ["Við erum sein.", "We are late."],
            ["Þið farið klukkan sex.", "You leave at six."],
            ["Þau bíða eftir strætó.", "They are waiting for the bus."]
          ]
        }
      ],
      vocab: ["við", "þið", "þeir", "þau", "byrja", "bíða", "sundlaug", "borða", "seinn"],
      items: [
        { t: "table", q: "Complete the plural pronouns",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "1st", cells: ["ég", "við"], blank: [1] },
            { label: "2nd", cells: ["þú", "þið"], blank: [1] },
            { label: "3rd kk", cells: ["hann", "þeir"], blank: [1] },
            { label: "3rd kvk", cells: ["hún", "þær"], blank: [1] },
            { label: "3rd hk", cells: ["það", "þau"], blank: [] }
          ] },

        { t: "table", q: "Complete the plural of tala",
          cols: ["", "nútíð"],
          rows: [
            { label: "við", cells: ["tölum"], blank: [0] },
            { label: "þið", cells: ["talið"], blank: [0] },
            { label: "þeir", cells: ["tala"], blank: [] }
          ] },

        { t: "fill", q: "Put the verb into the við form.",
          sentence: "Við ___ íslensku á mánudögum.", base: "tala", a: "tölum",
          why: "við takes -um, and the u drags the stem a over to ö.", mode: "type",
          tags: ["verb:pl", "u-umlaut"] },

        { t: "fill", q: "Put the verb into the við form.",
          sentence: "Við ___ klukkan sex.", base: "vakna", a: "vöknum",
          why: "Same u-umlaut: vakna → vöknum.", mode: "type" },

        { t: "fill", q: "Put the verb into the þið form.",
          sentence: "Þið ___ klukkan sjö.", base: "borða", a: "borðið",
          why: "þið always takes -ið.", mode: "type" },

        { t: "fill", q: "Which pronoun?",
          sentence: "___ eruð sein í dag.", base: "þú (fleirtala)",
          opts: ["Þú", "Þið", "Við"], a: "Þið",
          why: "The ending -uð on eruð can only belong to þið.", mode: "choice" },

        { t: "fill", q: "Put the verb into the plural.",
          sentence: "Þær ___ klukkan níu.", base: "byrja", a: "byrja",
          why: "Third person plural is identical to the infinitive.", mode: "type" },

        { t: "choice", q: "Anna and Jón — which pronoun?",
          opts: ["þau", "þeir", "þær", "það"], a: "þau",
          note: "A mixed group is always þau, even if it is one man and one woman." },

        { t: "choice", q: "Three women — which pronoun?",
          opts: ["þær", "þeir", "þau"], a: "þær",
          note: "All feminine → þær." },

        { t: "choice", q: "Jón, Kári and Ari — which pronoun?",
          opts: ["þeir", "þær", "þau"], a: "þeir",
          note: "All masculine → þeir." },

        { t: "build", q: "We are waiting for the bus.", a: "Við bíðum eftir strætó",
          extra: ["bíða", "þið", "hann"],
          note: "bíða eftir + dative. strætó never changes its form." },

        { t: "type", q: "Type “You (plural) start at eight.”", a: "Þið byrjið klukkan átta",
          hint: "þið + -ið", note: "byrja → byrjið for þið." },

        { t: "gender", word: "sundlaug", a: "kvk",
          note: "laug is feminine, and a compound takes the gender of its last part." },

        { t: "listen", speak: "Við förum klukkan fimm.", mode: "type", a: "Við förum klukkan fimm",
          note: "fara is irregular in the plural: förum, farið, fara." }
      ]
    },

    {
      n: 4,
      id: "u03l4",
      kind: "lesson",
      title: "Dagar, mánuðir, árstíðir",
      en: "Days, months and seasons",
      goal: "Name the week, the year and the four seasons, and say when things happen.",
      minutes: 10,
      icon: "📅",
      teach: [
        {
          h: "The week, five working days and a rescue",
          table: {
            cols: ["íslenska", "enska", "hópur"],
            rows: [
              ["mánudagur", "Monday", "virkur dagur"],
              ["þriðjudagur", "Tuesday", "virkur dagur"],
              ["miðvikudagur", "Wednesday", "virkur dagur"],
              ["fimmtudagur", "Thursday", "virkur dagur"],
              ["föstudagur", "Friday", "virkur dagur"],
              ["laugardagur", "Saturday", "helgi"],
              ["sunnudagur", "Sunday", "helgi"]
            ]
          },
          tip: "miðvikudagur is the mid-week day. laugardagur is the washing day — Saturday was bath day."
        },
        {
          h: "Months are the easy part",
          p: "janúar, febrúar, mars, apríl, maí, júní, júlí, ágúst, september, október, nóvember, desember. They never change form, in any case, ever. Small mercies.",
          ex: [
            ["Ég á afmæli í janúar.", "My birthday is in January."],
            ["Í júlí er bjart á nóttunni.", "In July it is bright at night."]
          ]
        },
        {
          h: "Once versus always",
          p: "One particular day takes á + accusative singular. Every such day takes á + dative plural — and that -um ending brings the u-umlaut with it.",
          table: {
            cols: ["", "einu sinni", "alltaf"],
            rows: [
              ["dagur", "á sunnudaginn", "á sunnudögum"],
              ["helgi", "um helgina", "um helgar"],
              ["árstíð", "í sumar", "á sumrin"]
            ]
          },
          tip: "á mánudaginn = this coming Monday. á mánudögum = every Monday, as a rule of life."
        },
        {
          h: "The four seasons",
          table: {
            cols: ["árstíð", "enska", "alltaf"],
            rows: [
              ["vor", "spring", "á vorin"],
              ["sumar", "summer", "á sumrin"],
              ["haust", "autumn", "á haustin"],
              ["vetur", "winter", "á veturna"]
            ]
          },
          tip: "vetur is the odd one out: masculine, and á veturna instead of the -in pattern."
        }
      ],
      vocab: ["mánudagur", "sunnudagur", "janúar", "júlí", "mánuður", "ár", "helgi", "vor", "sumar", "haust", "vetur", "nótt"],
      items: [
        { t: "match", q: "Match the calendar words",
          pairs: [["mánudagur", "Monday"], ["sunnudagur", "Sunday"], ["vika", "week"],
                  ["mánuður", "month"], ["helgi", "weekend"]] },

        { t: "choice", q: "“on Sundays” — every Sunday",
          opts: ["á sunnudögum", "á sunnudaginn", "um sunnudag", "í sunnudag"], a: "á sunnudögum",
          note: "Repeated days go into á + dative plural." },

        { t: "choice", q: "“on Sunday” — this coming Sunday",
          opts: ["á sunnudaginn", "á sunnudögum", "um sunnudaga"], a: "á sunnudaginn",
          note: "One specific day takes á + accusative with the article." },

        { t: "fill", q: "Every Monday — put the day in the right form.",
          sentence: "Ég fer í sundlaugina á ___ .", base: "mánudagar", a: "mánudögum",
          case: "ÞGF", why: "Repeated days: á + dative plural, and a → ö before -um.", mode: "type" },

        { t: "type", q: "Type “in the summer” — meaning every summer.", a: "á sumrin",
          hint: "á + neuter plural with the article",
          note: "á sumrin, á vorin, á haustin — but á veturna." },

        { t: "choice", q: "“in winter” — every winter",
          opts: ["á veturna", "á vetrum", "um veturinn", "á vetrinum"], a: "á veturna",
          note: "vetur breaks the pattern. Memorise á veturna as one lump." },

        { t: "gender", word: "sumar", a: "hk",
          note: "sumar, vor and haust are all neuter. Only vetur is masculine." },

        { t: "gender", word: "vetur", a: "kk",
          note: "The one masculine season, and the one irregular one." },

        { t: "build", q: "The weekend starts on Friday.", a: "Helgin byrjar á föstudaginn",
          extra: ["helgi", "byrja", "um"],
          note: "One specific coming Friday → á + accusative with the article." },

        { t: "listen", speak: "Í júlí er bjart á nóttunni.", q: "What does this mean?",
          mode: "choice",
          opts: ["In July it is bright at night.", "In January it is dark at night.",
                 "In July it rains at night.", "In June it is bright in the morning."],
          a: "In July it is bright at night.",
          note: "Month names never change: í júlí, í janúar." },

        { t: "table", q: "Complete the seasons",
          cols: ["", "enska", "alltaf"],
          rows: [
            { label: "vor", cells: ["spring", "á vorin"], blank: [1] },
            { label: "sumar", cells: ["summer", "á sumrin"], blank: [1] },
            { label: "haust", cells: ["autumn", "á haustin"], blank: [] },
            { label: "vetur", cells: ["winter", "á veturna"], blank: [1] }
          ] },

        { t: "speak", is: "Á veturna er dimmt klukkan þrjú.", en: "In winter it is dark at three o'clock.",
          tip: "veturna: the tn here is pronounced with a puff of breath before it." }
      ]
    },

    {
      n: 5,
      id: "u03l5",
      kind: "story",
      title: "Strætó númer fjórtán",
      en: "The number fourteen bus",
      goal: "Follow a conversation about the time and answer questions about it.",
      minutes: 11,
      icon: "🚌",
      teach: [
        { h: "Before you read",
          p: "Kári is at a bus stop in Vesturbær. He is early, which for Kári is unusual, and wrong.",
          list: ["klukkan er … — it is …", "of lítið — too little", "nógur tími — enough time"] },
        { h: "Watch for",
          p: "Every time somebody says a day in the plural — á laugardögum — they mean it as a rule, not as today." }
      ],
      story: {
        title: "Á biðstöðinni",
        lines: [
          { sp: "Kári", is: "Fyrirgefðu, hvað er klukkan?", en: "Excuse me, what time is it?" },
          { sp: "Anna", is: "Hún er korter yfir átta.", en: "It is a quarter past eight." },
          { sp: "Kári", is: "Þá er ég seinn. Strætó fer klukkan hálf níu.", en: "Then I am late. The bus leaves at half past eight." },
          { sp: "Anna", is: "Nei. Á laugardögum fer hann klukkan níu.", en: "No. On Saturdays it leaves at nine." },
          { sp: "Kári", is: "Á laugardögum? Er laugardagur í dag?", en: "On Saturdays? Is it Saturday today?" },
          { sp: "Anna", is: "Já. Þú sefur of lítið.", en: "Yes. You sleep too little." },
          { sp: "Kári", is: "Ég vakna alltaf klukkan sex. Líka á sumrin.", en: "I always wake up at six. In the summer too." },
          { sp: "Anna", is: "Á sumrin er bjart klukkan fjögur. Það hjálpar ekki.", en: "In the summer it is bright at four. That does not help." },
          { sp: "Kári", is: "Nákvæmlega. Þá bíðum við í þrjú korter.", en: "Exactly. So we wait for three quarters of an hour." },
          { sp: "Anna", is: "Þrjú korter er nógur tími fyrir kaffi.", en: "Three quarters of an hour is enough time for coffee." },
          { sp: "Kári", is: "Kaffi klukkan hálf níu er líka morgunmatur.", en: "Coffee at half past eight counts as breakfast too." }
        ],
        glossary: [
          ["fyrirgefðu", "excuse me"],
          ["þá", "then, so"],
          ["í dag", "today"],
          ["of lítið", "too little"],
          ["bjart", "bright"],
          ["nákvæmlega", "exactly"],
          ["morgunmatur", "breakfast"]
        ]
      },
      vocab: ["seinn", "strætó", "sofa", "alltaf", "morgunn", "korter", "bíða"],
      items: [
        { t: "choice", q: "Hvað er klukkan þegar Kári spyr?",
          opts: ["korter yfir átta", "hálf níu", "korter í níu", "átta"], a: "korter yfir átta",
          note: "Anna answers hún er korter yfir átta — hún, because klukka is feminine." },

        { t: "choice", q: "Hvaða dagur er í dag?",
          opts: ["laugardagur", "mánudagur", "sunnudagur", "föstudagur"], a: "laugardagur",
          note: "Anna says á laugardögum and then confirms it is today." },

        { t: "choice", q: "Klukkan hvað fer strætó á laugardögum?",
          opts: ["klukkan níu", "klukkan hálf níu", "klukkan átta", "klukkan tíu"], a: "klukkan níu",
          note: "The weekday timetable is half an hour earlier." },

        { t: "fill", q: "Write the number as a word.",
          sentence: "Kári vaknar alltaf klukkan ___ .", base: "6", a: "sex",
          why: "Times are written out in words in Icelandic sentences.", mode: "type" },

        { t: "fill", q: "Time is always neuter.",
          sentence: "Á sumrin er bjart klukkan ___ .", base: "fjórir",
          opts: ["fjögur", "fjórir", "fjórar"], a: "fjögur",
          why: "Every clock hour uses the neuter number.", mode: "choice" },

        { t: "build", q: "We wait for three quarters of an hour.", a: "Við bíðum í þrjú korter",
          extra: ["þrír", "korteri", "þið"],
          note: "korter is neuter, so þrjú. í + accusative marks a stretch of time." },

        { t: "type", q: "Type “What time is it?”", a: "Hvað er klukkan?",
          hint: "hvað, not hvenær", note: "The Icelandic asks what the clock is." },

        { t: "listen", speak: "Á laugardögum fer hann klukkan níu.", q: "What did Anna say?",
          mode: "choice",
          opts: ["On Saturdays it leaves at nine.", "On Saturday it leaves at nine.",
                 "On Saturdays it leaves at half past nine.", "On Sundays it leaves at nine."],
          a: "On Saturdays it leaves at nine.",
          note: "Dative plural laugardögum = as a rule, every Saturday." },

        { t: "match", q: "Match the story words",
          pairs: [["seinn", "late"], ["bjart", "bright"], ["strætó", "city bus"],
                  ["kaffi", "coffee"], ["morgunmatur", "breakfast"]] },

        { t: "gender", word: "strætó", a: "kk",
          note: "Short for strætisvagn, a masculine noun, so strætó stays masculine." },

        { t: "speak", is: "Klukkan er korter yfir átta.", en: "It is a quarter past eight.",
          tip: "átta has preaspiration: a small h slips in before the tt." },

        { t: "choice", q: "Why is Kári not late after all?",
          opts: ["It is Saturday and the bus goes later.", "He looked at the wrong clock.",
                 "Anna gives him a lift.", "The bus is delayed."],
          a: "It is Saturday and the bus goes later.",
          note: "Weekend timetables run half an hour behind." }
      ]
    },

    {
      n: 6,
      id: "u03l6",
      kind: "checkpoint",
      title: "Tékk: tíminn",
      en: "Checkpoint: time",
      goal: "Prove you own the numbers, the clock, the calendar and the plural.",
      minutes: 12,
      icon: "🏁",
      teach: [
        { h: "What you now control",
          list: [
            "Numbers to a hundred, with einn, tveir, þrír and fjórir bending to gender",
            "Hvað er klukkan? and answers in the neuter: eitt, tvö, þrjú, fjögur",
            "hálf points forward, korter yfir is past, korter í is to",
            "Days, months and seasons; á + accusative once, á + dative plural always",
            "við -um, þið -ið, þeir/þær/þau bare — plus the u-umlaut in tölum and vöknum"
          ] }
      ],
      vocab: ["klukka", "korter", "hálf", "mánudagur", "vetur", "við", "þið", "þau", "byrja", "vakna"],
      items: [
        { t: "choice", q: "Four windows (gluggi, kk.) — which number?",
          opts: ["fjórir", "fjórar", "fjögur"], a: "fjórir",
          note: "gluggi is masculine." },

        { t: "choice", q: "hálf sex is…",
          opts: ["5:30", "6:30", "5:45", "6:15"], a: "5:30",
          note: "hálf always names the hour that is coming." },

        { t: "type", q: "Type “It is a quarter to ten.”", a: "Klukkan er korter í tíu",
          hint: "korter í …" },

        { t: "fill", q: "Put the verb into the við form.",
          sentence: "Við ___ klukkan sjö á virkum dögum.", base: "vakna", a: "vöknum",
          why: "-um for við, and the u pulls a over to ö.", mode: "type" },

        { t: "fill", q: "Every Monday.",
          sentence: "Sundlaugin opnar klukkan sex á ___ .", base: "mánudagar", a: "mánudögum",
          case: "ÞGF", why: "Repeated days take á + dative plural.", mode: "type" },

        { t: "fill", q: "Which season form?",
          sentence: "Það er dimmt klukkan þrjú ___ .", base: "vetur",
          opts: ["á veturna", "á sumrin", "á vorin"], a: "á veturna",
          why: "Winter is the dark one, and vetur is irregular: á veturna.", mode: "choice" },

        { t: "build", q: "They (mixed group) start at eight.", a: "Þau byrja klukkan átta",
          extra: ["þeir", "byrjum", "sex"],
          note: "Mixed group → þau; third plural is the bare infinitive." },

        { t: "build", q: "Three weeks and two days", a: "þrjár vikur og tveir dagar",
          extra: ["þrír", "tvær", "þrjú"],
          note: "vika is feminine, dagur is masculine. The number follows each noun." },

        { t: "table", q: "Complete the plural endings of borða",
          cols: ["", "nútíð"],
          rows: [
            { label: "við", cells: ["borðum"], blank: [0] },
            { label: "þið", cells: ["borðið"], blank: [0] },
            { label: "þau", cells: ["borða"], blank: [] }
          ] },

        { t: "table", q: "Complete the gendered numbers",
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            { label: "2", cells: ["tveir", "tvær", "tvö"], blank: [2] },
            { label: "3", cells: ["þrír", "þrjár", "þrjú"], blank: [1] },
            { label: "4", cells: ["fjórir", "fjórar", "fjögur"], blank: [] }
          ] },

        { t: "gender", word: "mánuður", a: "kk",
          note: "-uður is masculine; its plural is mánuðir, not mánaðar." },

        { t: "gender", word: "klukka", a: "kvk",
          note: "Feminine — even though the time itself is told in the neuter." },

        { t: "listen", speak: "Þið eruð sein á sunnudögum.", q: "What did you hear?",
          mode: "choice",
          opts: ["Þið eruð sein á sunnudögum.", "Við erum sein á sunnudögum.",
                 "Þið eruð sein á mánudögum.", "Þau eru sein á sunnudögum."],
          a: "Þið eruð sein á sunnudögum.",
          note: "eruð can only go with þið." },

        { t: "speak", is: "Á sumrin vöknum við klukkan fjögur.", en: "In the summer we wake up at four.",
          tip: "vöknum: the ö is the [œ] in French coeur, not an English o." }
      ]
    }
  ]
};

export const vocab = [
  // ── tölur ────────────────────────────────────────────────
  { w: "einn", en: "one", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Klukkan er eitt.", en: "It is one o'clock." } },
  { w: "tveir", en: "two", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Ég á tvo bræður.", en: "I have two brothers." } },
  { w: "þrír", en: "three", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Þrjár vikur eru eftir.", en: "Three weeks are left." } },
  { w: "fjórir", en: "four", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Fjögur ár í Reykjavík.", en: "Four years in Reykjavík." } },
  { w: "fimm", en: "five", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Búðin lokar klukkan fimm.", en: "The shop closes at five." } },
  { w: "tíu", en: "ten", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Ég bíð í tíu mínútur.", en: "I will wait for ten minutes." } },
  { w: "tuttugu", en: "twenty", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Klukkan er tuttugu mínútur í tvö.", en: "It is twenty to two." } },
  { w: "hundrað", en: "hundred", pos: "num", topic: "numbers", unit: 3, cefr: "A1",
    ex: { is: "Hundrað og einn er póstnúmer í Reykjavík.", en: "101 is a postcode in Reykjavík." } },
  { w: "hálf", en: "half (past)", pos: "num", topic: "time", unit: 3, cefr: "A1",
    ex: { is: "Klukkan er hálf tíu.", en: "It is half past nine." } },

  // ── klukkan ──────────────────────────────────────────────
  { w: "klukka", en: "clock, o'clock", pos: "noun", g: "kvk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["klukka", "klukku", "klukku", "klukku"], pl: ["klukkur", "klukkur", "klukkum", "klukkna"] },
    ex: { is: "Hvað er klukkan?", en: "What time is it?" } },
  { w: "tími", en: "time, hour, class", pos: "noun", g: "kk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["tími", "tíma", "tíma", "tíma"], pl: ["tímar", "tíma", "tímum", "tíma"] },
    ex: { is: "Við höfum nógan tíma.", en: "We have enough time." } },
  { w: "mínúta", en: "minute", pos: "noun", g: "kvk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["mínúta", "mínútu", "mínútu", "mínútu"], pl: ["mínútur", "mínútur", "mínútum", "mínútna"] },
    ex: { is: "Klukkan er fimm mínútur yfir sjö.", en: "It is five past seven." } },
  { w: "korter", en: "quarter of an hour", pos: "noun", g: "hk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["korter", "korter", "korteri", "korters"], pl: ["korter", "korter", "korterum", "kortera"] },
    ex: { is: "Klukkan er korter í fimm.", en: "It is a quarter to five." } },
  { w: "hádegi", en: "noon, midday", pos: "noun", g: "hk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["hádegi", "hádegi", "hádegi", "hádegis"], pl: null },
    ex: { is: "Bakaríið opnar fyrir hádegi.", en: "The bakery opens before noon." } },
  { w: "morgunn", en: "morning", pos: "noun", g: "kk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["morgunn", "morgun", "morgni", "morguns"], pl: ["morgnar", "morgna", "morgnum", "morgna"] },
    ex: { is: "Á morgnana er dimmt í desember.", en: "In the mornings it is dark in December." } },
  { w: "kvöld", en: "evening", pos: "noun", g: "hk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["kvöld", "kvöld", "kvöldi", "kvölds"], pl: ["kvöld", "kvöld", "kvöldum", "kvölda"] },
    ex: { is: "Á kvöldin les ég.", en: "In the evenings I read." } },
  { w: "nótt", en: "night", pos: "noun", g: "kvk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["nótt", "nótt", "nóttu", "nætur"], pl: ["nætur", "nætur", "nóttum", "nótta"] },
    ex: { is: "Í júní er bjart alla nóttina.", en: "In June it is bright all night." } },

  // ── dagatal ──────────────────────────────────────────────
  { w: "dagur", en: "day", pos: "noun", g: "kk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["dagur", "dag", "degi", "dags"], pl: ["dagar", "daga", "dögum", "daga"] },
    ex: { is: "Fjórir dagar eru eftir.", en: "Four days are left." } },
  { w: "vika", en: "week", pos: "noun", g: "kvk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["vika", "viku", "viku", "viku"], pl: ["vikur", "vikur", "vikum", "vikna"] },
    ex: { is: "Vikan byrjar á mánudegi.", en: "The week starts on a Monday." } },
  { w: "mánuður", en: "month", pos: "noun", g: "kk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["mánuður", "mánuð", "mánuði", "mánaðar"], pl: ["mánuðir", "mánuði", "mánuðum", "mánaða"] },
    ex: { is: "Desember er dimmasti mánuðurinn.", en: "December is the darkest month." } },
  { w: "ár", en: "year", pos: "noun", g: "hk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["ár", "ár", "ári", "árs"], pl: ["ár", "ár", "árum", "ára"] },
    ex: { is: "Árið byrjar í janúar.", en: "The year starts in January." } },
  { w: "helgi", en: "weekend", pos: "noun", g: "kvk", topic: "time", unit: 3, cefr: "A1",
    forms: { sg: ["helgi", "helgi", "helgi", "helgar"], pl: ["helgar", "helgar", "helgum", "helga"] },
    ex: { is: "Um helgar sef ég lengi.", en: "At weekends I sleep in." } },
  { w: "mánudagur", en: "Monday", pos: "noun", g: "kk", topic: "days", unit: 3, cefr: "A1",
    forms: { sg: ["mánudagur", "mánudag", "mánudegi", "mánudags"], pl: ["mánudagar", "mánudaga", "mánudögum", "mánudaga"] },
    ex: { is: "Á mánudögum fer ég í sundlaugina.", en: "On Mondays I go to the pool." } },
  { w: "sunnudagur", en: "Sunday", pos: "noun", g: "kk", topic: "days", unit: 3, cefr: "A1",
    forms: { sg: ["sunnudagur", "sunnudag", "sunnudegi", "sunnudags"], pl: ["sunnudagar", "sunnudaga", "sunnudögum", "sunnudaga"] },
    ex: { is: "Söfnin eru opin á sunnudögum.", en: "The museums are open on Sundays." } },
  { w: "janúar", en: "January", pos: "noun", g: "kk", topic: "months", unit: 3, cefr: "A1",
    forms: { sg: ["janúar", "janúar", "janúar", "janúar"], pl: null },
    ex: { is: "Ég á afmæli í janúar.", en: "My birthday is in January." } },
  { w: "júlí", en: "July", pos: "noun", g: "kk", topic: "months", unit: 3, cefr: "A1",
    forms: { sg: ["júlí", "júlí", "júlí", "júlí"], pl: null },
    ex: { is: "Í júlí eru margir ferðamenn í bænum.", en: "In July there are many tourists in town." } },

  // ── árstíðir ─────────────────────────────────────────────
  { w: "vor", en: "spring", pos: "noun", g: "hk", topic: "seasons", unit: 3, cefr: "A1",
    forms: { sg: ["vor", "vor", "vori", "vors"], pl: ["vor", "vor", "vorum", "vora"] },
    ex: { is: "Á vorin koma fuglarnir aftur.", en: "In spring the birds come back." } },
  { w: "sumar", en: "summer", pos: "noun", g: "hk", topic: "seasons", unit: 3, cefr: "A1",
    forms: { sg: ["sumar", "sumar", "sumri", "sumars"], pl: ["sumur", "sumur", "sumrum", "sumra"] },
    ex: { is: "Á sumrin er bjart á nóttunni.", en: "In summer it is bright at night." } },
  { w: "haust", en: "autumn", pos: "noun", g: "hk", topic: "seasons", unit: 3, cefr: "A1",
    forms: { sg: ["haust", "haust", "hausti", "hausts"], pl: ["haust", "haust", "haustum", "hausta"] },
    ex: { is: "Skólinn byrjar á haustin.", en: "School starts in the autumn." } },
  { w: "vetur", en: "winter", pos: "noun", g: "kk", topic: "seasons", unit: 3, cefr: "A1",
    forms: { sg: ["vetur", "vetur", "vetri", "vetrar"], pl: ["vetur", "vetur", "vetrum", "vetra"] },
    ex: { is: "Á veturna er dimmt klukkan þrjú.", en: "In winter it is dark at three." } },

  // ── staðir og hlutir ─────────────────────────────────────
  { w: "strætó", en: "city bus", pos: "noun", g: "kk", topic: "daily", unit: 3, cefr: "A1",
    forms: { sg: ["strætó", "strætó", "strætó", "strætós"], pl: null },
    ex: { is: "Strætó fer klukkan hálf níu.", en: "The bus leaves at half past eight." } },
  { w: "sundlaug", en: "swimming pool", pos: "noun", g: "kvk", topic: "daily", unit: 3, cefr: "A1",
    forms: { sg: ["sundlaug", "sundlaug", "sundlaug", "sundlaugar"], pl: ["sundlaugar", "sundlaugar", "sundlaugum", "sundlauga"] },
    ex: { is: "Sundlaugin opnar klukkan sex.", en: "The pool opens at six." } },
  { w: "fundur", en: "meeting", pos: "noun", g: "kk", topic: "daily", unit: 3, cefr: "A1",
    forms: { sg: ["fundur", "fund", "fundi", "fundar"], pl: ["fundir", "fundi", "fundum", "funda"] },
    ex: { is: "Fundurinn byrjar klukkan tvö.", en: "The meeting starts at two." } },

  // ── sagnir ───────────────────────────────────────────────
  { w: "vakna", en: "to wake up", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["vakna", "vaknar", "vaknar", "vöknum", "vaknið", "vakna"],
            past: ["vaknaði", "vaknaðir", "vaknaði", "vöknuðum", "vöknuðuð", "vöknuðu"], pp: "vaknað" },
    ex: { is: "Ég vakna klukkan sjö.", en: "I wake up at seven." } },
  { w: "byrja", en: "to begin, to start", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["byrja", "byrjar", "byrjar", "byrjum", "byrjið", "byrja"],
            past: ["byrjaði", "byrjaðir", "byrjaði", "byrjuðum", "byrjuðuð", "byrjuðu"], pp: "byrjað" },
    ex: { is: "Vikan byrjar á mánudaginn.", en: "The week starts on Monday." } },
  { w: "enda", en: "to end, to finish", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["enda", "endar", "endar", "endum", "endið", "enda"],
            past: ["endaði", "endaðir", "endaði", "enduðum", "endaðuð", "enduðu"], pp: "endað" },
    ex: { is: "Fundurinn endar klukkan fjögur.", en: "The meeting ends at four." } },
  { w: "borða", en: "to eat", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-a", gov: "ÞF",
    conj: { pres: ["borða", "borðar", "borðar", "borðum", "borðið", "borða"],
            past: ["borðaði", "borðaðir", "borðaði", "borðuðum", "borðuðuð", "borðuðu"], pp: "borðað" },
    ex: { is: "Við borðum klukkan sex.", en: "We eat at six." } },
  { w: "sofa", en: "to sleep", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "strong",
    conj: { pres: ["sef", "sefur", "sefur", "sofum", "sofið", "sofa"],
            past: ["svaf", "svafst", "svaf", "sváfum", "sváfuð", "sváfu"], pp: "sofið" },
    ex: { is: "Um helgar sef ég lengi.", en: "At weekends I sleep in." } },
  { w: "opna", en: "to open", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-a", gov: "ÞF",
    conj: { pres: ["opna", "opnar", "opnar", "opnum", "opnið", "opna"],
            past: ["opnaði", "opnaðir", "opnaði", "opnuðum", "opnuðuð", "opnuðu"], pp: "opnað" },
    ex: { is: "Búðin opnar klukkan tíu.", en: "The shop opens at ten." } },
  { w: "hitta", en: "to meet", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "weak-i", gov: "ÞF",
    conj: { pres: ["hitti", "hittir", "hittir", "hittum", "hittið", "hitta"],
            past: ["hitti", "hittir", "hitti", "hittum", "hittuð", "hittu"], pp: "hitt" },
    ex: { is: "Ég hitti Önnu klukkan fjögur.", en: "I am meeting Anna at four." } },
  { w: "bíða", en: "to wait", pos: "verb", topic: "daily", unit: 3, cefr: "A1", vclass: "strong", gov: "EF",
    conj: { pres: ["bíð", "bíður", "bíður", "bíðum", "bíðið", "bíða"],
            past: ["beið", "beiðst", "beið", "biðum", "biðuð", "biðu"], pp: "beðið" },
    ex: { is: "Við bíðum eftir strætó.", en: "We are waiting for the bus." } },

  // ── fornöfn ──────────────────────────────────────────────
  { w: "við", en: "we", pos: "pron", topic: "pronouns", unit: 3, cefr: "A1",
    ex: { is: "Við förum klukkan fimm.", en: "We are leaving at five." } },
  { w: "þið", en: "you (plural)", pos: "pron", topic: "pronouns", unit: 3, cefr: "A1",
    ex: { is: "Þið byrjið klukkan átta.", en: "You start at eight." } },
  { w: "þeir", en: "they (all masculine)", pos: "pron", topic: "pronouns", unit: 3, cefr: "A1",
    ex: { is: "Þeir bíða á biðstöðinni.", en: "They are waiting at the bus stop." } },
  { w: "þær", en: "they (all feminine)", pos: "pron", topic: "pronouns", unit: 3, cefr: "A1",
    ex: { is: "Þær vakna snemma.", en: "They wake up early." } },
  { w: "þau", en: "they (mixed group or neuter)", pos: "pron", topic: "pronouns", unit: 3, cefr: "A1",
    ex: { is: "Anna og Kári? Þau koma á morgun.", en: "Anna and Kári? They are coming tomorrow." } },

  // ── atviksorð og lýsingarorð ─────────────────────────────
  { w: "alltaf", en: "always", pos: "adv", topic: "frequency", unit: 3, cefr: "A1",
    ex: { is: "Ég vakna alltaf klukkan sex.", en: "I always wake up at six." } },
  { w: "oft", en: "often", pos: "adv", topic: "frequency", unit: 3, cefr: "A1",
    ex: { is: "Hann er oft seinn.", en: "He is often late." } },
  { w: "stundum", en: "sometimes", pos: "adv", topic: "frequency", unit: 3, cefr: "A1",
    ex: { is: "Stundum borða ég klukkan tíu.", en: "Sometimes I eat at ten." } },
  { w: "aldrei", en: "never", pos: "adv", topic: "frequency", unit: 3, cefr: "A1",
    ex: { is: "Strætó kemur aldrei klukkan átta.", en: "The bus never comes at eight." } },
  { w: "snemma", en: "early", pos: "adv", topic: "time", unit: 3, cefr: "A1",
    ex: { is: "Sundlaugin opnar snemma.", en: "The pool opens early." } },
  { w: "seint", en: "late (adverb)", pos: "adv", topic: "time", unit: 3, cefr: "A1",
    ex: { is: "Við borðum seint á föstudögum.", en: "We eat late on Fridays." } },
  { w: "hvenær", en: "when", pos: "adv", topic: "questions", unit: 3, cefr: "A1",
    ex: { is: "Hvenær byrjar fundurinn?", en: "When does the meeting start?" } },
  { w: "seinn", en: "late", pos: "adj", topic: "describing", unit: 3, cefr: "A1",
    decl: { nom: ["seinn", "sein", "seint"], comp: "seinni", sup: "seinastur" },
    ex: { is: "Þið eruð sein í dag.", en: "You are late today." } },

  // ── orðasamband ──────────────────────────────────────────
  { w: "Hvað er klukkan?", en: "What time is it?", pos: "phrase", topic: "time", unit: 3, cefr: "A1",
    ex: { is: "Fyrirgefðu, hvað er klukkan?", en: "Excuse me, what time is it?" } }
];

export default unit;
