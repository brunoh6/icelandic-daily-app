// Unit 15 — Veður og náttúra / Weather and nature
// Comparative and superlative, intensifiers, the wind-direction families, -andi participles.

export const unit = {
  id: 15,
  slug: "u15",
  title: "Veður og náttúra",
  en: "Weather and nature",
  cefr: "A2.1",
  icon: "🌦️",
  blurb: "Talk about the weather, compare things, and name the land around you.",
  canDo: [
    "Describe today's weather and read a simple forecast",
    "Name mountains, glaciers, fjords and the rest of the landscape",
    "Compare two things with -ari and pick the best with -astur",
    "Say which way the wind blows and where in the country someone lives"
  ],
  lessons: [
    {
      n: 1,
      id: "u15l1",
      kind: "lesson",
      title: "Hvernig er veðrið?",
      en: "What is the weather like?",
      goal: "Describe today's weather with það and a neuter adjective.",
      minutes: 9,
      icon: "🌧️",
      teach: [
        {
          h: "Weather has no subject",
          p: "Nobody rains. Icelandic fills the empty subject slot with það and puts the verb in the third person singular. That is the whole construction.",
          ex: [
            ["Það rignir.", "It is raining."],
            ["Það snjóar á fjöllum.", "It is snowing in the mountains."],
            ["Það er kalt úti.", "It is cold outside."]
          ],
          tip: "Move something else to the front and það disappears: Í dag rignir mikið."
        },
        {
          h: "The adjective goes neuter",
          p: "After það er, the adjective describes nothing in particular, so it lands in the neuter singular. Learn the weather words in that shape and you will never need the others.",
          table: {
            cols: ["karlkyn", "hvorugkyn", "English"],
            rows: [
              ["hlýr", "hlýtt", "warm"],
              ["bjartur", "bjart", "bright"],
              ["blautur", "blautt", "wet"],
              ["skýjaður", "skýjað", "cloudy"]
            ]
          }
        },
        {
          h: "veður loses a vowel",
          p: "veður is neuter, and the second stem vowel drops out as soon as an ending arrives: veður, veður, veðri, veðurs. That is syncope, the same trick you saw in jökull and gamall.",
          ex: [
            ["Veðrið er gott í dag.", "The weather is good today."],
            ["Við förum ekki út í svona veðri.", "We are not going out in weather like this."]
          ]
        }
      ],
      vocab: ["veður", "rigning", "snjór", "sól", "ský", "þoka", "rigna", "snjóa", "skína", "hlýr", "bjartur", "blautur"],
      items: [
        { t: "choice", q: "Which sentence says “It is raining”?",
          opts: ["Það rignir", "Það snjóar", "Það er bjart", "Sólin skín"], a: "Það rignir",
          note: "rigna keeps the third person singular and það holds the subject slot." },

        { t: "gender", word: "ský", a: "hk",
          note: "Neuter: skýið. The plural gets a j before the -um: skýjum." },

        { t: "gender", word: "rigning", a: "kvk",
          note: "Feminine. Every noun in -ing is: rigningin, rigningu, rigningar." },

        { t: "gender", word: "snjór", a: "kk",
          note: "Masculine: snjórinn. Dative and accusative are both just snjó." },

        { t: "match", q: "Match the weather words",
          pairs: [["rigning", "rain"], ["snjór", "snow"], ["sól", "sun"], ["ský", "cloud"], ["þoka", "fog"]] },

        { t: "fill", q: "Put the verb in.", sentence: "Í dag ___ mikið í Reykjavík.", base: "rigna",
          a: "rignir", case: "", mode: "type",
          why: "Weather verbs stay in the third person singular: rignir." },

        { t: "fill", q: "Which shape does the adjective take?", sentence: "Það er ___ úti í dag.", base: "hlýr",
          opts: ["hlýr", "hlý", "hlýtt"], a: "hlýtt", case: "NF", mode: "choice",
          why: "After það er the adjective goes neuter: hlýtt." },

        { t: "build", q: "The sun is shining today.",
          a: "Sólin skín í dag", extra: ["rignir", "er", "þoka"],
          note: "skína is strong, and the stem ends in -n, so the third person adds no -ur: hún skín." },

        { t: "type", q: "Type: “What is the weather like today?”", a: "Hvernig er veðrið í dag?",
          hint: "hvernig = how",
          note: "Icelandic asks how the weather is, never what it is like." },

        { t: "listen", speak: "Það snjóar á fjöllum í dag.", q: "What did you hear?", mode: "choice",
          opts: ["Það snjóar á fjöllum í dag.", "Það rignir á fjöllum í dag.", "Það snjóar í bænum í dag."],
          a: "Það snjóar á fjöllum í dag.",
          note: "á + dative for a static location, and fjöll takes the u-umlaut: fjöllum." },

        { t: "table", q: "Complete the declension of veður (n.).",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["veður", "veður"], blank: [] },
            { label: "ÞF", cells: ["veður", "veður"], blank: [] },
            { label: "ÞGF", cells: ["veðri", "veðrum"], blank: [0, 1] },
            { label: "EF", cells: ["veðurs", "veðra"], blank: [0] }
          ] },

        { t: "speak", is: "Það er þoka í dalnum.", en: "There is fog in the valley.",
          tip: "The k in þoka is unaspirated, close to an English g, and stress sits on þo-." }
      ]
    },

    {
      n: 2,
      id: "u15l2",
      kind: "lesson",
      title: "Fjöll, firðir og jöklar",
      en: "Mountains, fjords and glaciers",
      goal: "Name the landscape and turn the volume up or down with an adverb.",
      minutes: 10,
      icon: "🏔️",
      teach: [
        {
          h: "The volume knob",
          p: "One little adverb in front of the adjective does all the work. They sit in a rough order of strength, and Icelanders use the strong ones far more freely than English speakers do.",
          table: {
            cols: ["adverb", "strength", "English"],
            rows: [
              ["frekar", "1", "fairly, rather"],
              ["svolítið", "1", "a little"],
              ["mjög", "2", "very"],
              ["rosalega", "3", "really, insanely"],
              ["alveg", "3", "completely, absolutely"]
            ]
          },
          tip: "alveg means all the way to the end, so it fits absolutes: alveg svart, alveg blautt."
        },
        {
          h: "Two nouns that shift their vowel",
          p: "fjall takes the u-umlaut in the plural, a to ö: fjall, fjöll, fjöllum. jökull drops its second vowel instead: jökull, jökli, jöklar. Both changes are automatic once you hear them a few times.",
          ex: [
            ["Fjöllin eru mjög há.", "The mountains are very high."],
            ["Snjórinn liggur á jöklinum allt árið.", "The snow lies on the glacier all year."]
          ]
        },
        {
          h: "The land itself",
          p: "Iceland runs on a handful of landscape words and then builds compounds out of them. eldfjall is fire plus mountain, eldgos is fire plus gush, norðurljós is north plus lights.",
          list: [
            "fjall — mountain, eldfjall — volcano",
            "jökull — glacier, foss — waterfall",
            "hraun — lava field, goshver — geyser",
            "fjörður — fjord, strönd — coast, eyja — island"
          ]
        }
      ],
      vocab: ["fjall", "jökull", "foss", "eldfjall", "hraun", "goshver", "eldgos", "norðurljós", "dalur", "strönd", "fjörður", "sjór", "eyja", "árstíð", "náttúra", "landslag", "mjög", "alveg", "rosalega", "frekar", "stór"],
      items: [
        { t: "match", q: "Match the landscape words",
          pairs: [["fjall", "mountain"], ["jökull", "glacier"], ["foss", "waterfall"], ["hraun", "lava field"], ["fjörður", "fjord"], ["eyja", "island"]] },

        { t: "choice", q: "Which adverb is the strongest?",
          opts: ["alveg", "frekar", "svolítið", "mjög"], a: "alveg",
          note: "alveg takes the adjective all the way: Hraunið er alveg svart." },

        { t: "fill", q: "Choose the adverb.", sentence: "Fjöllin hérna eru ___ falleg.", base: "mjög",
          opts: ["mjög", "miklu", "meira", "mest"], a: "mjög", case: "", mode: "choice",
          why: "mjög goes with a plain adjective. miklu is only for comparatives." },

        { t: "fill", q: "Make the adjective agree.", sentence: "Ísland er ___ eyja.", base: "stór",
          a: "stór", case: "NF", mode: "type",
          why: "eyja is feminine, and the feminine nominative of stór has no ending at all." },

        { t: "build", q: "There are many volcanoes in Iceland.",
          a: "Það eru mörg eldfjöll á Íslandi", extra: ["margir", "er", "fjöll"],
          note: "eldfjöll is neuter plural, so margur becomes mörg with the u-umlaut." },

        { t: "type", q: "Type: “The waterfall is really big.”", a: "Fossinn er rosalega stór",
          hint: "rosalega = really",
          note: "foss is masculine, so the adjective keeps its -ur: stór has none, but it is the masculine form." },

        { t: "gender", word: "jökull", a: "kk",
          note: "Masculine: jökullinn. Dative jökli, plural jöklar — the u drops out." },

        { t: "gender", word: "hraun", a: "hk",
          note: "Neuter: hraunið. Same shape in the nominative and accusative." },

        { t: "listen", speak: "Sjórinn er alveg ískaldur.", q: "What did you hear?", mode: "choice",
          opts: ["Sjórinn er alveg ískaldur.", "Sjórinn er frekar kaldur.", "Snjórinn er alveg ískaldur."],
          a: "Sjórinn er alveg ískaldur.",
          note: "sjór and snjór differ by one letter. Listen for the n." },

        { t: "table", q: "Complete the declension of fjall (n.).",
          cols: ["", "eintala", "fleirtala"],
          rows: [
            { label: "NF", cells: ["fjall", "fjöll"], blank: [1] },
            { label: "ÞF", cells: ["fjall", "fjöll"], blank: [] },
            { label: "ÞGF", cells: ["fjalli", "fjöllum"], blank: [1] },
            { label: "EF", cells: ["fjalls", "fjalla"], blank: [] }
          ] },

        { t: "choice", q: "Fill the gap: Veðrið er ___ gott í dag, ekki frábært.",
          opts: ["frekar", "alveg", "rosalega", "mjög"], a: "frekar",
          note: "frekar hedges: fairly good, and no more than that." },

        { t: "speak", is: "Við keyrum í gegnum dalinn.", en: "We drive through the valley.",
          tip: "gegnum takes the accusative, so dalinn. The g in gegnum is a hard [g] at the start." }
      ]
    },

    {
      n: 3,
      id: "u15l3",
      kind: "grammar",
      title: "Stærri, stærstur",
      en: "Comparative and superlative",
      goal: "Build the two extra rungs of every adjective and use them correctly.",
      minutes: 14,
      icon: "📈",
      teach: [
        {
          h: "Three rungs",
          p: "Icelandic names them frumstig, miðstig and efsta stig. The ladder is regular: add -ari for the middle rung and -astur for the top one. kaldur, kaldari, kaldastur.",
          table: {
            cols: ["frumstig", "miðstig", "efsta stig"],
            rows: [
              ["kaldur", "kaldari", "kaldastur"],
              ["bjartur", "bjartari", "bjartastur"],
              ["blautur", "blautari", "blautastur"],
              ["skýjaður", "skýjaðri", "skýjaðastur"]
            ]
          },
          tip: "en is the word for than: Akureyri er kaldari en Reykjavík."
        },
        {
          h: "When the vowel jumps",
          p: "Some adjectives take the i-shift on the middle rung and then keep the shifted vowel on top, dropping the -a- of -astur. These are frequent words, so learn the four pairs as a block.",
          table: {
            cols: ["frumstig", "miðstig", "efsta stig"],
            rows: [
              ["stór", "stærri", "stærstur"],
              ["hár", "hærri", "hæstur"],
              ["langur", "lengri", "lengstur"],
              ["ungur", "yngri", "yngstur"]
            ]
          },
          tip: "Stems ending in a vowel double the r: hlýr gives hlýrri, and then hlýjastur with a j."
        },
        {
          h: "The six you simply memorise",
          p: "These do not follow any rule, and they are the ones you will need first. Say the whole row out loud each time until it comes as one lump.",
          table: {
            cols: ["frumstig", "miðstig", "efsta stig"],
            rows: [
              ["góður", "betri", "bestur"],
              ["vondur", "verri", "verstur"],
              ["mikill", "meiri", "mestur"],
              ["lítill", "minni", "minnstur"],
              ["gamall", "eldri", "elstur"],
              ["margir", "fleiri", "flestir"]
            ]
          }
        },
        {
          h: "Endings and intensifiers",
          p: "The comparative ends in -i for every gender and case, except the neuter singular, which switches to -a: hann er stærri, húsið er stærra. The superlative declines normally, and goes weak in front of a noun: stærsti jökullinn. To boost a comparative you need miklu, never mjög.",
          ex: [
            ["Veðrið er betra í dag.", "The weather is better today."],
            ["Það er miklu kaldara fyrir norðan.", "It is much colder in the north."],
            ["Þetta er stærsti foss á Íslandi.", "This is the biggest waterfall in Iceland."]
          ],
          tip: "For as … as, use eins … og: Hann er eins hár og ég."
        }
      ],
      vocab: ["stór", "góður", "mikill", "lítill", "hlýr", "bjartur", "þurr", "skýjaður"],
      items: [
        { t: "fill", q: "Compare the two towns.", sentence: "Akureyri er ___ en Reykjavík.", base: "kaldur",
          a: "kaldari", case: "", mode: "type",
          why: "Regular ladder: kaldur, kaldari. The -i is the same for all genders." },

        { t: "fill", q: "Compare today with yesterday.", sentence: "Í dag er veðrið ___ en í gær.", base: "góður",
          a: "betra", case: "", mode: "type",
          why: "góður is irregular (betri), and veðrið is neuter, so the -i becomes -a." },

        { t: "fill", q: "Name the record holder.", sentence: "Vatnajökull er ___ jökull á Íslandi.", base: "stór",
          opts: ["stór", "stærri", "stærsti", "stærstur"], a: "stærsti", case: "NF", mode: "choice",
          why: "A superlative in front of a noun takes the weak ending: stærsti." },

        { t: "fill", q: "Which one is oldest?", sentence: "Þetta er ___ eldfjallið á landinu.", base: "gamall",
          a: "elsta", case: "", mode: "type",
          why: "gamall, eldri, elstur. Weak neuter in front of a noun gives elsta." },

        { t: "fill", q: "More or less snow?", sentence: "Í dag er ___ snjór á fjöllum en í gær.", base: "mikill",
          a: "meiri", case: "", mode: "type",
          why: "mikill, meiri, mestur. snjór is masculine, so meiri, not meira." },

        { t: "fill", q: "Compare the two islands.", sentence: "Ísland er ___ en Grænland.", base: "lítill",
          a: "minna", case: "", mode: "type",
          why: "lítill gives minni, and Ísland is neuter, so the comparative ends in -a." },

        { t: "fill", q: "The highest of them all.", sentence: "Hvannadalshnjúkur er ___ fjall á Íslandi.", base: "hár",
          a: "hæsta", case: "", mode: "type",
          why: "hár, hærri, hæstur. In front of a neuter noun the superlative is weak: hæsta." },

        { t: "table", q: "Complete the regular ladder.",
          cols: ["", "miðstig", "efsta stig"],
          rows: [
            { label: "kaldur", cells: ["kaldari", "kaldastur"], blank: [0] },
            { label: "bjartur", cells: ["bjartari", "bjartastur"], blank: [] },
            { label: "hlýr", cells: ["hlýrri", "hlýjastur"], blank: [1] },
            { label: "stór", cells: ["stærri", "stærstur"], blank: [0] },
            { label: "hár", cells: ["hærri", "hæstur"], blank: [] }
          ] },

        { t: "table", q: "Complete the irregular comparisons.",
          cols: ["", "miðstig", "efsta stig"],
          rows: [
            { label: "góður", cells: ["betri", "bestur"], blank: [0] },
            { label: "mikill", cells: ["meiri", "mestur"], blank: [1] },
            { label: "lítill", cells: ["minni", "minnstur"], blank: [0] },
            { label: "gamall", cells: ["eldri", "elstur"], blank: [0] }
          ] },

        { t: "choice", q: "Which word boosts a comparative?",
          opts: ["miklu", "mjög", "alveg", "rosalega"], a: "miklu",
          note: "mjög kaldur is fine, but much colder is miklu kaldara." },

        { t: "choice", q: "Fill the gap: Húsið er ___ en bíllinn.",
          opts: ["stærra", "stærri", "stærst", "stærsta"], a: "stærra",
          note: "The comparative is -i everywhere except the neuter singular, where it is -a." },

        { t: "build", q: "The weather is better in the north.",
          a: "Veðrið er betra fyrir norðan", extra: ["gott", "best", "sunnan"],
          note: "fyrir norðan is the fixed phrase for being up north." },

        { t: "type", q: "Type: “This is the biggest waterfall in Iceland.”", a: "Þetta er stærsti foss á Íslandi",
          hint: "weak superlative in front of the noun",
          note: "Icelandic says á Íslandi, on Iceland, not in it." },

        { t: "listen", speak: "Það er miklu hlýrra í dag.", q: "What did you hear?", mode: "choice",
          opts: ["Það er miklu hlýrra í dag.", "Það er miklu kaldara í dag.", "Það er mjög hlýtt í dag."],
          a: "Það er miklu hlýrra í dag.",
          note: "hlýr doubles its r in the comparative, and the neuter is hlýrra." }
      ]
    },

    {
      n: 4,
      id: "u15l4",
      kind: "lesson",
      title: "Norðan, sunnan, að austan",
      en: "Wind directions and -andi",
      goal: "Say where the wind comes from and use participles in -andi.",
      minutes: 11,
      icon: "🧭",
      teach: [
        {
          h: "One direction, three shapes",
          p: "Each compass point has a going-to form, a coming-from form and a being-there form. Icelanders keep them apart strictly, and a weather forecast is nothing but these words.",
          table: {
            cols: ["going to", "coming from", "being there"],
            rows: [
              ["norður", "að norðan", "fyrir norðan"],
              ["austur", "að austan", "fyrir austan"],
              ["suður", "að sunnan", "fyrir sunnan"],
              ["vestur", "að vestan", "fyrir vestan"]
            ]
          },
          tip: "Note the odd one out: suður turns into sunnan, not suðan."
        },
        {
          h: "Which one the wind takes",
          p: "Wind is always described by where it comes from, so the forecast uses the -an forms. The að is often left out when the word sits in front of átt or a verb.",
          ex: [
            ["Vindurinn er að norðan.", "The wind is from the north."],
            ["Það er norðanátt í dag.", "There is a northerly today."],
            ["Jónas býr fyrir norðan.", "Jónas lives up north."],
            ["Við keyrum norður á morgun.", "We are driving north tomorrow."]
          ]
        },
        {
          h: "Present participles in -andi",
          p: "Take the verb stem and add -andi. The result never changes its ending, whatever the gender, number or case beside it. It works as an adjective, as an adverb and as a verb form.",
          ex: [
            ["Þetta er spennandi ferð.", "This is an exciting trip."],
            ["Lúlli er sofandi.", "Lúlli is asleep."],
            ["Hann er rennandi blautur.", "He is soaking wet."]
          ],
          tip: "Because it never declines, it has no comparative either. Use meira spennandi for more exciting."
        }
      ],
      vocab: ["norðan", "vindur", "stormur", "frost", "hiti", "kuldi", "himinn", "stig", "veðurspá", "blása", "frjósa", "hvass", "spá", "kólna", "hlýna", "spennandi"],
      items: [
        { t: "table", q: "Complete the wind-direction families.",
          cols: ["", "going to", "coming from", "being there"],
          rows: [
            { label: "north", cells: ["norður", "að norðan", "fyrir norðan"], blank: [1] },
            { label: "east", cells: ["austur", "að austan", "fyrir austan"], blank: [] },
            { label: "south", cells: ["suður", "að sunnan", "fyrir sunnan"], blank: [1, 2] },
            { label: "west", cells: ["vestur", "að vestan", "fyrir vestan"], blank: [0] }
          ] },

        { t: "fill", q: "Where does the wind come from?", sentence: "Vindurinn er að ___ í dag.", base: "norður",
          a: "norðan", case: "", mode: "type",
          why: "Wind is named after its source, so the -an form: að norðan." },

        { t: "fill", q: "Where does Sóley live?", sentence: "Sóley býr fyrir ___ , í Vestmannaeyjum.", base: "suður",
          a: "sunnan", case: "", mode: "type",
          why: "suður is irregular here: fyrir sunnan, not fyrir suðan." },

        { t: "fill", q: "Which way are they driving?", sentence: "Við keyrum ___ til Akureyrar á morgun.", base: "norður",
          a: "norður", case: "", mode: "type",
          why: "Movement towards a direction uses the bare form: norður, austur, suður, vestur." },

        { t: "fill", q: "Make a participle.", sentence: "Þetta verður mjög ___ ferð.", base: "spenna",
          a: "spennandi", case: "", mode: "type",
          why: "Stem plus -andi, and it never changes ending, even before a feminine noun." },

        { t: "choice", q: "What does að sunnan mean?",
          opts: ["from the south", "to the south", "in the south", "the southern one"], a: "from the south",
          note: "að + -an is always the source. fyrir sunnan would be the location." },

        { t: "match", q: "Match the -andi participles",
          pairs: [["spennandi", "exciting"], ["sofandi", "sleeping"], ["vakandi", "awake"], ["gangandi", "walking"], ["brennandi", "burning"]] },

        { t: "build", q: "The wind is blowing from the north.",
          a: "Vindurinn blæs að norðan", extra: ["kemur", "sunnan", "fyrir"],
          note: "blása is strong: ég blæs, þú blæst, hann blæs, við blásum." },

        { t: "type", q: "Type: “It is very windy today.”", a: "Það er mjög hvasst í dag",
          hint: "hvass in the neuter",
          note: "hvass doubles the s and adds -t in the neuter: hvasst." },

        { t: "listen", speak: "Veðurspáin er ekki góð á morgun.", q: "What did you hear?", mode: "choice",
          opts: ["Veðurspáin er ekki góð á morgun.", "Veðurspáin er góð á morgun.", "Veðrið er ekki gott á morgun."],
          a: "Veðurspáin er ekki góð á morgun.",
          note: "veðurspá is feminine, so the article is -in and the adjective is góð." },

        { t: "gender", word: "veðurspá", a: "kvk",
          note: "Feminine: veðurspáin. Genitive veðurspár." },

        { t: "speak", is: "Það er þriggja stiga frost.", en: "It is minus three degrees.",
          tip: "Degrees come in the genitive after a number: þriggja stiga. frost stays put." }
      ]
    },

    {
      n: 5,
      id: "u15l5",
      kind: "story",
      title: "Hurðin og vindurinn",
      en: "The door and the wind",
      goal: "Follow a windy afternoon and pick the comparatives out of it.",
      minutes: 11,
      icon: "🐦",
      teach: [
        {
          h: "Before you read",
          p: "Anna and Jónas have driven east along the south coast. The forecast that morning promised sun, so nobody packed for a gale. Lúlli did not need a forecast.",
          list: [
            "bílastæði — a car park",
            "hurð — a door, here the one on the car",
            "fyrir sunnan Vík — just south of the village of Vík"
          ]
        }
      ],
      story: {
        title: "Hurðin og vindurinn",
        lines: [
          { sp: "Sögumaður", is: "Anna og Jónas stoppa á bílastæðinu fyrir sunnan Vík.", en: "Anna and Jónas stop in the car park south of Vík." },
          { sp: "Jónas", is: "Ekki opna hurðina. Það er miklu hvassara hérna en heima.", en: "Don't open the door. It is much windier here than at home." },
          { sp: "Anna", is: "Þetta er bara svolítill vindur. Ég næ í myndavélina mína.", en: "This is only a bit of wind. I'll grab my camera." },
          { sp: "Sögumaður", is: "Anna opnar hurðina og vindurinn tekur hana strax.", en: "Anna opens the door and the wind takes it at once." },
          { sp: "Anna", is: "Æ, nei! Vindurinn er miklu sterkari en ég.", en: "Oh no! The wind is much stronger than me." },
          { sp: "Jónas", is: "Ég sagði þér það. Hérna er alltaf hvassast á landinu.", en: "I told you so. It is always windiest here in the whole country." },
          { sp: "Anna", is: "Eigum við samt að ganga niður að ströndinni?", en: "Shall we walk down to the beach all the same?" },
          { sp: "Jónas", is: "Nei, það fer að rigna eftir tíu mínútur. Sjáðu skýin.", en: "No, it is going to rain in ten minutes. Look at the clouds." },
          { sp: "Anna", is: "En veðurspáin var svo góð í morgun.", en: "But the forecast was so good this morning." },
          { sp: "Jónas", is: "Veðurspár á Íslandi eru bara spennandi sögur.", en: "Weather forecasts in Iceland are just exciting stories." },
          { sp: "Sögumaður", is: "Þá kemur Lúlli fljúgandi og sest á þakið á bílnum.", en: "Then Lúlli comes flying and settles on the roof of the car." },
          { sp: "Anna", is: "Auðvitað. Hann er miklu betri í vindi en við.", en: "Of course. He is much better in wind than we are." }
        ],
        glossary: [["bílastæði", "car park"], ["hurð", "door"], ["strax", "at once"],
                   ["samt", "all the same"], ["þak", "roof"], ["auðvitað", "of course"]]
      },
      vocab: ["hurð", "sterkur", "fljúga", "vindur", "hvass", "ský", "strönd", "veðurspá", "spennandi"],
      items: [
        { t: "choice", q: "Why does Jónas tell Anna to leave the door shut?",
          opts: ["Það er miklu hvassara þarna", "Bíllinn er læstur", "Lúlli sefur í bílnum", "Það er komin þoka"],
          a: "Það er miklu hvassara þarna",
          note: "miklu is the booster a comparative needs. mjög hvassara would be wrong." },

        { t: "choice", q: "What does the wind do?",
          opts: ["Vindurinn tekur hurðina", "Vindurinn tekur myndavélina", "Vindurinn brýtur gluggann", "Vindurinn hættir strax"],
          a: "Vindurinn tekur hurðina",
          note: "taka governs the accusative, so the door is hurðina, not hurðin." },

        { t: "choice", q: "Why do they give up the walk to the beach?",
          opts: ["Það fer að rigna", "Þau eru mjög þreytt", "Ströndin er lokuð", "Lúlli vill fara heim"],
          a: "Það fer að rigna",
          note: "fara að plus an infinitive is the everyday way to say something is about to start." },

        { t: "match", q: "Match the words from the story",
          pairs: [["hurð", "door"], ["vindur", "wind"], ["ský", "cloud"], ["strönd", "beach"],
                  ["veðurspá", "weather forecast"], ["þak", "roof"]] },

        { t: "fill", q: "Build the comparative.", sentence: "Það er miklu ___ hérna en heima.", base: "hvass",
          a: "hvassara", case: "", mode: "type",
          why: "hvass, hvassari, hvassastur. Nothing carries the adjective here, so it lands in the neuter: hvassara." },

        { t: "fill", q: "Build the comparative.", sentence: "Vindurinn er miklu ___ en ég.", base: "sterkur",
          a: "sterkari", case: "", mode: "type",
          why: "vindur is masculine, and the masculine comparative keeps the plain -i: sterkari." },

        { t: "fill", q: "Now go to the top rung.", sentence: "Hérna er alltaf ___ á landinu.", base: "hvass",
          opts: ["hvassara", "hvassast", "hvassastur", "hvasst"], a: "hvassast", case: "", mode: "choice",
          why: "A superlative with no noun to agree with goes neuter: hvassast." },

        { t: "build", q: "The wind takes the door at once.",
          a: "Vindurinn tekur hurðina strax", extra: ["hurðin", "hægt", "blæs"],
          note: "hurð is feminine, and the accusative with the article is hurðina." },

        { t: "type", q: "Type: “Look at the clouds.”", a: "Sjáðu skýin",
          hint: "imperative of sjá plus the definite plural",
          note: "sjá makes the imperative sjáðu, and ský in the neuter plural with the article is skýin." },

        { t: "listen", speak: "Veðurspár á Íslandi eru bara spennandi sögur.", q: "What did you hear?", mode: "choice",
          opts: ["Veðurspár á Íslandi eru bara spennandi sögur.", "Veðurspár á Íslandi eru bara stuttar sögur.", "Veðurspáin á Íslandi er bara spennandi saga."],
          a: "Veðurspár á Íslandi eru bara spennandi sögur.",
          note: "spennandi sits in front of a feminine plural and still does not change." },

        { t: "gender", word: "hurð", a: "kvk",
          note: "Feminine: hurðin. Genitive hurðar, plural hurðir." },

        { t: "speak", is: "Þá kemur Lúlli fljúgandi.", en: "Then Lúlli comes flying.",
          tip: "fljúgandi is the -andi form of fljúga, and the g in front of the i sounds like a [j]." }
      ]
    },

    {
      n: 6,
      id: "u15l6",
      kind: "checkpoint",
      title: "Veðurprófið",
      en: "Weather checkpoint",
      goal: "Prove you can describe, compare and point at the compass.",
      minutes: 12,
      icon: "✅",
      teach: [
        {
          h: "Allt á einni blaðsíðu",
          p: "Unit fifteen in one breath before you start.",
          list: [
            "það holds the empty subject of every weather verb, and the verb stays third person singular",
            "after það er the adjective goes neuter: kalt, bjart, hvasst",
            "-ari and -astur build the two extra rungs, and miklu boosts a comparative, never mjög",
            "the wind is named after where it comes from, so the -an forms: að norðan, að vestan",
            "-andi never changes shape, whatever stands beside it"
          ]
        }
      ],
      items: [
        { t: "match", q: "Match the words from this unit",
          pairs: [["jökull", "glacier"], ["hraun", "lava field"], ["goshver", "geyser"],
                  ["eldgos", "eruption"], ["fjörður", "fjord"], ["norðurljós", "northern lights"]] },

        { t: "gender", word: "himinn", a: "kk",
          note: "Masculine: himinninn. The second vowel drops in the dative: himni.", tags: ["noun:masc"] },

        { t: "fill", q: "Put the weather verb in.", sentence: "Það ___ mikið á Norðurlandi í dag.", base: "snjóa",
          a: "snjóar", case: "", mode: "type",
          why: "Weather verbs stay in the third person singular, and snjóa is a plain -a verb: snjóar.",
          tags: ["verb:weather"] },

        { t: "fill", q: "Pick the smallest one.", sentence: "Þetta er ___ fjallið hérna.", base: "lítill",
          a: "minnsta", case: "", mode: "type",
          why: "lítill, minni, minnstur. In front of a neuter noun with the article it goes weak: minnsta.",
          tags: ["adj:sup"] },

        { t: "fill", q: "Compare yesterday with today.", sentence: "Í gær var miklu ___ en í dag.", base: "kaldur",
          a: "kaldara", case: "", mode: "type",
          why: "Nothing carries the adjective, so the comparative is neuter: kaldara. miklu does the boosting.",
          tags: ["adj:comp"] },

        { t: "fill", q: "Where is the wind coming from?", sentence: "Vindurinn kemur að ___ í kvöld.", base: "vestur",
          opts: ["vestan", "vestur", "vesturs", "vestri"], a: "vestan", case: "", mode: "choice",
          why: "að plus the -an form is always the source of the wind.", tags: ["dir:wind"] },

        { t: "fill", q: "Make a participle.", sentence: "Lúlli sat ___ á þakinu allan daginn.", base: "sofa",
          a: "sofandi", case: "", mode: "type",
          why: "Stem plus -andi, and the form never changes for gender, number or case.", tags: ["verb:participle"] },

        { t: "table", q: "Complete the comparisons.",
          cols: ["", "miðstig", "efsta stig"],
          rows: [
            { label: "vondur", cells: ["verri", "verstur"], blank: [0] },
            { label: "margir", cells: ["fleiri", "flestir"], blank: [1] },
            { label: "langur", cells: ["lengri", "lengstur"], blank: [0] },
            { label: "ungur", cells: ["yngri", "yngstur"], blank: [1] }
          ],
          note: "vondur and margir are irregular; langur and ungur just take the i-shift." },

        { t: "choice", q: "Which sentence is correct?",
          opts: ["Það er miklu hlýrra fyrir sunnan.", "Það er mjög hlýrra fyrir sunnan.",
                 "Það er miklu hlýtt fyrir sunnan.", "Það er mjög hlýrri fyrir sunnan."],
          a: "Það er miklu hlýrra fyrir sunnan.",
          note: "miklu goes with a comparative, mjög with the plain adjective, and the neuter of hlýrri is hlýrra." },

        { t: "choice", q: "Which one means “from the east”?",
          opts: ["að austan", "austur", "fyrir austan", "til austurs"], a: "að austan",
          note: "fyrir austan is being there, austur is going there, að austan is coming from there." },

        { t: "build", q: "There is a lot of snow in the mountains today.",
          a: "Það er mikill snjór á fjöllum í dag", extra: ["mikið", "fjöll", "meiri"],
          note: "snjór is masculine, so mikill keeps its masculine shape, and á with a static place takes the dative fjöllum." },

        { t: "type", q: "Type: “The weather is much better in the east.”",
          a: "Veðrið er miklu betra fyrir austan", hint: "betri in the neuter",
          note: "The neuter singular comparative ends in -a, so betri becomes betra." },

        { t: "listen", speak: "Það kólnar mikið í nótt.", q: "What did you hear?", mode: "choice",
          opts: ["Það kólnar mikið í nótt.", "Það hlýnar mikið í nótt.", "Það rignir mikið í nótt."],
          a: "Það kólnar mikið í nótt.",
          note: "kólna and hlýna are a pair: get colder and get warmer." },

        { t: "speak", is: "Norðurljósin eru björt í kvöld.", en: "The northern lights are bright tonight.",
          tip: "björt is the neuter plural of bjartur, with the u-umlaut turning a into ö." }
      ]
    }
  ]
};

export const vocab = [
  /* ---------------------------------------------------------------- weather */
  { w:"veður", en:"weather", pos:"noun", g:"hk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["veður","veður","veðri","veðurs"], pl:["veður","veður","veðrum","veðra"] },
    ex:{ is:"Veðrið breytist á hverjum degi.", en:"The weather changes every day." } },

  { w:"veðurspá", en:"weather forecast", pos:"noun", g:"kvk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["veðurspá","veðurspá","veðurspá","veðurspár"], pl:["veðurspár","veðurspár","veðurspám","veðurspáa"] },
    ex:{ is:"Ég hlusta á veðurspána á hverjum morgni.", en:"I listen to the forecast every morning." } },

  { w:"rigning", en:"rain", pos:"noun", g:"kvk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["rigning","rigningu","rigningu","rigningar"], pl:["rigningar","rigningar","rigningum","rigninga"] },
    ex:{ is:"Rigningin hætti loksins um kvöldið.", en:"The rain finally stopped in the evening." } },

  { w:"snjór", en:"snow", pos:"noun", g:"kk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["snjór","snjó","snjó","snjós"], pl:["snjóar","snjóa","snjóum","snjóa"] },
    ex:{ is:"Snjórinn liggur enn á veginum.", en:"The snow still lies on the road." } },

  { w:"sól", en:"sun", pos:"noun", g:"kvk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["sól","sól","sólu","sólar"], pl:null },
    ex:{ is:"Sólin skín á fjörðinn.", en:"The sun is shining on the fjord." } },

  { w:"ský", en:"cloud", pos:"noun", g:"hk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["ský","ský","skýi","skýs"], pl:["ský","ský","skýjum","skýja"] },
    ex:{ is:"Það eru dökk ský yfir bænum.", en:"There are dark clouds over the town." } },

  { w:"þoka", en:"fog", pos:"noun", g:"kvk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["þoka","þoku","þoku","þoku"], pl:null },
    ex:{ is:"Þokan liggur yfir dalnum.", en:"The fog lies over the valley." } },

  { w:"vindur", en:"wind", pos:"noun", g:"kk", topic:"weather", unit:15, cefr:"A1",
    forms:{ sg:["vindur","vind","vindi","vinds"], pl:["vindar","vinda","vindum","vinda"] },
    ex:{ is:"Vindurinn er hvass í dag.", en:"The wind is strong today." } },

  { w:"stormur", en:"storm", pos:"noun", g:"kk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["stormur","storm","stormi","storms"], pl:["stormar","storma","stormum","storma"] },
    ex:{ is:"Það er spáð stormi á morgun.", en:"A storm is forecast for tomorrow." } },

  { w:"frost", en:"frost, sub-zero temperature", pos:"noun", g:"hk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["frost","frost","frosti","frosts"], pl:["frost","frost","frostum","frosta"] },
    ex:{ is:"Það er tíu stiga frost í nótt.", en:"It is minus ten tonight." } },

  { w:"hiti", en:"heat, temperature", pos:"noun", g:"kk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["hiti","hita","hita","hita"], pl:null },
    ex:{ is:"Hitinn fer upp í tólf stig í dag.", en:"The temperature goes up to twelve degrees today." } },

  { w:"kuldi", en:"cold", pos:"noun", g:"kk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["kuldi","kulda","kulda","kulda"], pl:null },
    ex:{ is:"Ég þoli ekki þennan kulda.", en:"I cannot stand this cold." } },

  { w:"himinn", en:"sky", pos:"noun", g:"kk", topic:"nature", unit:15, cefr:"A2",
    forms:{ sg:["himinn","himin","himni","himins"], pl:["himnar","himna","himnum","himna"] },
    ex:{ is:"Himinninn er blár og bjartur.", en:"The sky is blue and bright." } },

  { w:"stig", en:"degree, level", pos:"noun", g:"hk", topic:"weather", unit:15, cefr:"A2",
    forms:{ sg:["stig","stig","stigi","stigs"], pl:["stig","stig","stigum","stiga"] },
    ex:{ is:"Það eru þrjú stig úti núna.", en:"It is three degrees outside now." } },

  { w:"hurð", en:"door", pos:"noun", g:"kvk", topic:"house", unit:15, cefr:"A1",
    forms:{ sg:["hurð","hurð","hurð","hurðar"], pl:["hurðir","hurðir","hurðum","hurða"] },
    ex:{ is:"Ég loka hurðinni á eftir mér.", en:"I close the door behind me." } },

  /* ----------------------------------------------------------------- verbs */
  { w:"rigna", en:"to rain", pos:"verb", topic:"weather", unit:15, cefr:"A1", vclass:"weak-i",
    conj:{ pres:["rigni","rignir","rignir","rignum","rignið","rigna"],
           past:["rigndi","rigndir","rigndi","rigndum","rignduð","rigndu"], pp:"rignt" },
    ex:{ is:"Það rignir mikið í Reykjavík.", en:"It rains a lot in Reykjavík." } },

  { w:"snjóa", en:"to snow", pos:"verb", topic:"weather", unit:15, cefr:"A1", vclass:"weak-a",
    conj:{ pres:["snjóa","snjóar","snjóar","snjóum","snjóið","snjóa"],
           past:["snjóaði","snjóaðir","snjóaði","snjóuðum","snjóuðuð","snjóuðu"], pp:"snjóað" },
    ex:{ is:"Það snjóar á Norðurlandi.", en:"It is snowing in the north." } },

  { w:"skína", en:"to shine", pos:"verb", topic:"weather", unit:15, cefr:"A2", vclass:"strong",
    conj:{ pres:["skín","skín","skín","skínum","skínið","skína"],
           past:["skein","skeinst","skein","skinum","skinuð","skinu"], pp:"skinið" },
    ex:{ is:"Sólin skín sjaldan í nóvember.", en:"The sun rarely shines in November." } },

  { w:"blása", en:"to blow", pos:"verb", topic:"weather", unit:15, cefr:"A2", vclass:"strong",
    conj:{ pres:["blæs","blæst","blæs","blásum","blásið","blása"],
           past:["blés","blést","blés","blésum","blésuð","blésu"], pp:"blásið" },
    ex:{ is:"Það blæs kalt af jöklinum.", en:"A cold wind blows off the glacier." } },

  { w:"frjósa", en:"to freeze", pos:"verb", topic:"weather", unit:15, cefr:"A2", vclass:"strong",
    conj:{ pres:["frýs","frýst","frýs","frjósum","frjósið","frjósa"],
           past:["fraus","fraust","fraus","frusum","frusuð","frusu"], pp:"frosið" },
    ex:{ is:"Vatnið frýs á hverri nóttu.", en:"The water freezes every night." } },

  { w:"kólna", en:"to get colder", pos:"verb", topic:"weather", unit:15, cefr:"A2", vclass:"weak-a",
    conj:{ pres:["kólna","kólnar","kólnar","kólnum","kólnið","kólna"],
           past:["kólnaði","kólnaðir","kólnaði","kólnuðum","kólnuðuð","kólnuðu"], pp:"kólnað" },
    ex:{ is:"Það kólnar mikið eftir miðnætti.", en:"It gets much colder after midnight." } },

  { w:"hlýna", en:"to get warmer", pos:"verb", topic:"weather", unit:15, cefr:"A2", vclass:"weak-a",
    conj:{ pres:["hlýna","hlýnar","hlýnar","hlýnum","hlýnið","hlýna"],
           past:["hlýnaði","hlýnaðir","hlýnaði","hlýnuðum","hlýnuðuð","hlýnuðu"], pp:"hlýnað" },
    ex:{ is:"Það hlýnar hægt á vorin.", en:"It warms up slowly in the spring." } },

  { w:"spá", en:"to forecast, to predict", pos:"verb", topic:"weather", unit:15, cefr:"A2",
    gov:"ÞGF", vclass:"weak-i",
    conj:{ pres:["spái","spáir","spáir","spáum","spáið","spá"],
           past:["spáði","spáðir","spáði","spáðum","spáðuð","spáðu"], pp:"spáð" },
    ex:{ is:"Þeir spá rigningu á morgun.", en:"They are forecasting rain tomorrow." } },

  { w:"fljúga", en:"to fly", pos:"verb", topic:"actions", unit:15, cefr:"A2", vclass:"strong",
    conj:{ pres:["flýg","flýgur","flýgur","fljúgum","fljúgið","fljúga"],
           past:["flaug","flaugst","flaug","flugum","fluguð","flugu"], pp:"flogið" },
    ex:{ is:"Lúlli flýgur yfir höfnina.", en:"Lúlli flies over the harbour." } },

  /* ------------------------------------------------------------ adjectives */
  { w:"hlýr", en:"warm", pos:"adj", topic:"weather", unit:15, cefr:"A1",
    decl:{ nom:["hlýr","hlý","hlýtt"], comp:"hlýrri", sup:"hlýjastur" },
    ex:{ is:"Það er hlýtt í dag.", en:"It is warm today." } },

  { w:"bjartur", en:"bright", pos:"adj", topic:"weather", unit:15, cefr:"A2",
    decl:{ nom:["bjartur","björt","bjart"], comp:"bjartari", sup:"bjartastur" },
    ex:{ is:"Nóttin er björt í júní.", en:"The night is bright in June." } },

  { w:"blautur", en:"wet", pos:"adj", topic:"weather", unit:15, cefr:"A2",
    decl:{ nom:["blautur","blaut","blautt"], comp:"blautari", sup:"blautastur" },
    ex:{ is:"Gatan er blaut eftir rigninguna.", en:"The street is wet after the rain." } },

  { w:"þurr", en:"dry", pos:"adj", topic:"weather", unit:15, cefr:"A2",
    decl:{ nom:["þurr","þurr","þurrt"], comp:"þurrari", sup:"þurrastur" },
    ex:{ is:"Það er þurrt og bjart í dag.", en:"It is dry and bright today." } },

  { w:"skýjaður", en:"cloudy", pos:"adj", topic:"weather", unit:15, cefr:"A2",
    decl:{ nom:["skýjaður","skýjuð","skýjað"], comp:"skýjaðri", sup:"skýjaðastur" },
    ex:{ is:"Það verður skýjað um helgina.", en:"It will be cloudy over the weekend." } },

  { w:"hvass", en:"windy, blowing hard", pos:"adj", topic:"weather", unit:15, cefr:"A2",
    decl:{ nom:["hvass","hvöss","hvasst"], comp:"hvassari", sup:"hvassastur" },
    ex:{ is:"Það er hvasst fyrir austan.", en:"It is windy in the east." } },

  { w:"sterkur", en:"strong", pos:"adj", topic:"describing", unit:15, cefr:"A2",
    decl:{ nom:["sterkur","sterk","sterkt"], comp:"sterkari", sup:"sterkastur" },
    ex:{ is:"Vindurinn er sterkari en í gær.", en:"The wind is stronger than yesterday." } },

  { w:"stór", en:"big, large", pos:"adj", topic:"describing", unit:15, cefr:"A1",
    decl:{ nom:["stór","stór","stórt"], comp:"stærri", sup:"stærstur" },
    ex:{ is:"Vatnajökull er stærsti jökull í Evrópu.", en:"Vatnajökull is the biggest glacier in Europe." } },

  { w:"góður", en:"good", pos:"adj", topic:"describing", unit:15, cefr:"A1",
    decl:{ nom:["góður","góð","gott"], comp:"betri", sup:"bestur" },
    ex:{ is:"Veðrið er gott fyrir norðan.", en:"The weather is good in the north." } },

  { w:"mikill", en:"much, great", pos:"adj", topic:"describing", unit:15, cefr:"A2",
    decl:{ nom:["mikill","mikil","mikið"], comp:"meiri", sup:"mestur" },
    ex:{ is:"Það er mikill vindur úti.", en:"There is a lot of wind outside." } },

  { w:"lítill", en:"small, little", pos:"adj", topic:"describing", unit:15, cefr:"A1",
    decl:{ nom:["lítill","lítil","lítið"], comp:"minni", sup:"minnstur" },
    ex:{ is:"Það er lítil rigning í dag.", en:"There is light rain today." } },

  { w:"spennandi", en:"exciting", pos:"adj", topic:"describing", unit:15, cefr:"A2",
    decl:{ nom:["spennandi","spennandi","spennandi"] },
    ex:{ is:"Ferðin yfir hálendið er spennandi.", en:"The trip across the highlands is exciting." } },

  /* --------------------------------------------------------------- adverbs */
  { w:"mjög", en:"very", pos:"adv", topic:"describing", unit:15, cefr:"A1",
    ex:{ is:"Það er mjög kalt í dag.", en:"It is very cold today." } },

  { w:"alveg", en:"completely, absolutely", pos:"adv", topic:"describing", unit:15, cefr:"A2",
    ex:{ is:"Hraunið er alveg svart.", en:"The lava field is completely black." } },

  { w:"rosalega", en:"really, insanely", pos:"adv", topic:"describing", unit:15, cefr:"A2",
    ex:{ is:"Fossinn er rosalega stór.", en:"The waterfall is really big." } },

  { w:"frekar", en:"fairly, rather", pos:"adv", topic:"describing", unit:15, cefr:"A2",
    ex:{ is:"Veðrið er frekar gott í dag.", en:"The weather is fairly good today." } },

  { w:"norðan", en:"from the north", pos:"adv", topic:"directions", unit:15, cefr:"A2",
    ex:{ is:"Vindurinn er að norðan.", en:"The wind is from the north." } },

  /* ------------------------------------------------------------- landscape */
  { w:"fjall", en:"mountain", pos:"noun", g:"hk", topic:"landscape", unit:15, cefr:"A1",
    forms:{ sg:["fjall","fjall","fjalli","fjalls"], pl:["fjöll","fjöll","fjöllum","fjalla"] },
    ex:{ is:"Fjöllin eru hvít allan veturinn.", en:"The mountains are white all winter." } },

  { w:"eldfjall", en:"volcano", pos:"noun", g:"hk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["eldfjall","eldfjall","eldfjalli","eldfjalls"], pl:["eldfjöll","eldfjöll","eldfjöllum","eldfjalla"] },
    ex:{ is:"Hekla er þekktasta eldfjall landsins.", en:"Hekla is the country's best-known volcano." } },

  { w:"jökull", en:"glacier", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["jökull","jökul","jökli","jökuls"], pl:["jöklar","jökla","jöklum","jökla"] },
    ex:{ is:"Jökullinn er minni en áður.", en:"The glacier is smaller than before." } },

  { w:"foss", en:"waterfall", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A1",
    forms:{ sg:["foss","foss","fossi","foss"], pl:["fossar","fossa","fossum","fossa"] },
    ex:{ is:"Fossinn er stærstur á vorin.", en:"The waterfall is at its biggest in spring." } },

  { w:"hraun", en:"lava field", pos:"noun", g:"hk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["hraun","hraun","hrauni","hrauns"], pl:["hraun","hraun","hraunum","hrauna"] },
    ex:{ is:"Við göngum yfir gamalt hraun.", en:"We walk across an old lava field." } },

  { w:"goshver", en:"geyser", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["goshver","goshver","goshver","goshvers"], pl:["goshverir","goshveri","goshverum","goshvera"] },
    ex:{ is:"Goshverinn gýs á tíu mínútna fresti.", en:"The geyser erupts every ten minutes." } },

  { w:"eldgos", en:"volcanic eruption", pos:"noun", g:"hk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["eldgos","eldgos","eldgosi","eldgoss"], pl:["eldgos","eldgos","eldgosum","eldgosa"] },
    ex:{ is:"Eldgosið sést vel frá veginum.", en:"The eruption is clearly visible from the road." } },

  { w:"norðurljós", en:"northern lights", pos:"noun", g:"hk", topic:"nature", unit:15, cefr:"A2",
    forms:{ sg:["norðurljós","norðurljós","norðurljósi","norðurljóss"], pl:["norðurljós","norðurljós","norðurljósum","norðurljósa"] },
    ex:{ is:"Norðurljósin sjást best í myrkri.", en:"The northern lights show up best in the dark." } },

  { w:"dalur", en:"valley", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["dalur","dal","dal","dals"], pl:["dalir","dali","dölum","dala"] },
    ex:{ is:"Það er logn í dalnum.", en:"It is calm in the valley." } },

  { w:"strönd", en:"coast, beach", pos:"noun", g:"kvk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["strönd","strönd","strönd","strandar"], pl:["strendur","strendur","ströndum","stranda"] },
    ex:{ is:"Við keyrum meðfram ströndinni.", en:"We drive along the coast." } },

  { w:"fjörður", en:"fjord", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A2",
    forms:{ sg:["fjörður","fjörð","firði","fjarðar"], pl:["firðir","firði","fjörðum","fjarða"] },
    ex:{ is:"Bærinn stendur innst í firðinum.", en:"The town stands at the head of the fjord." } },

  { w:"sjór", en:"sea", pos:"noun", g:"kk", topic:"landscape", unit:15, cefr:"A1",
    forms:{ sg:["sjór","sjó","sjó","sjávar"], pl:null },
    ex:{ is:"Sjórinn er kaldari en vatnið.", en:"The sea is colder than the lake." } },

  { w:"eyja", en:"island", pos:"noun", g:"kvk", topic:"landscape", unit:15, cefr:"A1",
    forms:{ sg:["eyja","eyju","eyju","eyju"], pl:["eyjar","eyjar","eyjum","eyja"] },
    ex:{ is:"Þeir búa á lítilli eyju fyrir vestan.", en:"They live on a small island in the west." } },

  { w:"árstíð", en:"season", pos:"noun", g:"kvk", topic:"nature", unit:15, cefr:"A2",
    forms:{ sg:["árstíð","árstíð","árstíð","árstíðar"], pl:["árstíðir","árstíðir","árstíðum","árstíða"] },
    ex:{ is:"Haustið er fallegasta árstíðin.", en:"Autumn is the most beautiful season." } },

  { w:"náttúra", en:"nature", pos:"noun", g:"kvk", topic:"nature", unit:15, cefr:"A2",
    forms:{ sg:["náttúra","náttúru","náttúru","náttúru"], pl:null },
    ex:{ is:"Náttúran hérna er alveg einstök.", en:"The nature here is quite unique." } },

  { w:"landslag", en:"landscape", pos:"noun", g:"hk", topic:"nature", unit:15, cefr:"A2",
    forms:{ sg:["landslag","landslag","landslagi","landslags"], pl:null },
    ex:{ is:"Landslagið hérna er eins og á tunglinu.", en:"The landscape here is like the moon." } }
];

export default unit;
