// Lundi — data/prepositions.js
// The preposition reference: which case each one takes, and what it means in each case.
// Case codes: ÞF = þolfall (accusative), ÞGF = þágufall (dative), EF = eignarfall (genitive).
// Order: two-case prepositions first (the ones that need a decision), then accusative-only,
// dative-only, genitive-only, and finally the directional compounds.
// All example sentences are original.

export const prepositions = [

  // ───────────────────── two-case: the ones you have to think about ─────────────────────

  {
    p: "í",
    en: "in, into",
    cases: ["ÞGF", "ÞF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "in / inside (staying put)", is: "Anna er í eldhúsinu.", enx: "Anna is in the kitchen." },
      { case: "ÞF", en: "into / to (going there)", is: "Anna fer í eldhúsið.", enx: "Anna goes into the kitchen." },
      { case: "ÞF", en: "for (a stretch of time)", is: "Við bíðum í tíu mínútur.", enx: "We wait for ten minutes." },
      { case: "ÞGF", en: "wearing (clothes you have on)", is: "Hún er í rauðri peysu.", enx: "She is wearing a red sweater." }
    ],
    contrast: "Does the sentence cross a boundary? Crossing into it → ÞF; already inside → ÞGF.",
    opposite: "úr"
  },

  {
    p: "á",
    en: "on, onto, at",
    cases: ["ÞGF", "ÞF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "on (resting on a surface)", is: "Bókin liggur á borðinu.", enx: "The book is lying on the table." },
      { case: "ÞF", en: "onto (landing on a surface)", is: "Ég legg bókina á borðið.", enx: "I put the book on the table." },
      { case: "ÞF", en: "on (one particular day)", is: "Ég vinn á laugardaginn.", enx: "I am working on Saturday." },
      { case: "ÞGF", en: "on (every time that day comes round)", is: "Ég vinn á laugardögum.", enx: "I work on Saturdays." }
    ],
    contrast: "Landing on the surface, or one named day → ÞF. Already on it, or a repeated day → ÞGF.",
    opposite: "af"
  },

  {
    p: "undir",
    en: "under, underneath",
    cases: ["ÞGF", "ÞF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "under (lying there already)", is: "Lyklarnir eru undir mottunni.", enx: "The keys are under the mat." },
      { case: "ÞF", en: "under (moving in under)", is: "Ég set lyklana undir mottuna.", enx: "I put the keys under the mat." }
    ],
    contrast: "Something moves in under → ÞF. Nothing moves, it is simply there → ÞGF.",
    opposite: "yfir"
  },

  {
    p: "yfir",
    en: "over, above, across",
    cases: ["ÞGF", "ÞF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "above (hanging there)", is: "Lampinn hangir yfir borðinu.", enx: "The lamp hangs above the table." },
      { case: "ÞF", en: "over / across (a path through the air)", is: "Fuglinn flýgur yfir húsið.", enx: "The bird flies over the house." },
      { case: "ÞF", en: "over / more than (an amount)", is: "Þetta kostar yfir þúsund krónur.", enx: "This costs over a thousand krónur." }
    ],
    contrast: "A path across something → ÞF. Hanging or hovering in one spot → ÞGF.",
    opposite: "undir"
  },

  {
    p: "fyrir",
    en: "for, in front of, ago",
    cases: ["ÞF", "ÞGF"],
    unit: 8,
    freq: 1,
    senses: [
      { case: "ÞF", en: "for (meant for someone)", is: "Þetta er fyrir þig.", enx: "This is for you." },
      { case: "ÞF", en: "before (a point in time)", is: "Ég klára þetta fyrir helgina.", enx: "I'll finish this before the weekend." },
      { case: "ÞGF", en: "in front of (and in the way)", is: "Það er tré fyrir glugganum.", enx: "There is a tree in front of the window." },
      { case: "ÞGF", en: "ago", is: "Ég kom fyrir þremur dögum.", enx: "I arrived three days ago." }
    ],
    contrast: "Who it is for, or a deadline → ÞF. Where it stands, or how long ago → ÞGF.",
    opposite: "eftir"
  },

  {
    p: "eftir",
    en: "after, along, by",
    cases: ["ÞF", "ÞGF"],
    unit: 8,
    freq: 1,
    senses: [
      { case: "ÞF", en: "after (in time)", is: "Ég kem eftir þrjá daga.", enx: "I'll come in three days." },
      { case: "ÞF", en: "by (who made it)", is: "Þetta er lag eftir Björk.", enx: "This is a song by Björk." },
      { case: "ÞGF", en: "along (following a road or line)", is: "Við göngum eftir götunni.", enx: "We walk along the street." }
    ],
    contrast: "Time, or the author of something → ÞF. Following along a road → ÞGF.",
    opposite: "fyrir"
  },

  {
    p: "með",
    en: "with",
    cases: ["ÞGF", "ÞF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "with (a companion who comes along freely)", is: "Ég fer með Önnu í bíó.", enx: "I am going to the cinema with Anna." },
      { case: "ÞGF", en: "with (a tool you use)", is: "Hann skrifar með blýanti.", enx: "He writes with a pencil." },
      { case: "ÞGF", en: "by (means of transport)", is: "Við förum með strætó.", enx: "We go by bus." },
      { case: "ÞF", en: "have / be carrying (vera með)", is: "Anna er með nýjan síma.", enx: "Anna has a new phone." }
    ],
    contrast: "If you bring or carry the thing, it is ÞF. If it comes with you of its own accord, or it is a tool, ÞGF.",
    opposite: "án"
  },

  {
    p: "ofan á",
    en: "on top of",
    cases: ["ÞGF", "ÞF"],
    unit: 12,
    freq: 2,
    senses: [
      { case: "ÞGF", en: "on top of (sitting there)", is: "Osturinn er ofan á brauðinu.", enx: "The cheese is on top of the bread." },
      { case: "ÞF", en: "onto the top of (putting it there)", is: "Ég set ost ofan á brauðið.", enx: "I put cheese on top of the bread." }
    ],
    contrast: "Same test as á: it lands there → ÞF, it already lies there → ÞGF.",
    opposite: "undir"
  },

  // ───────────────────────────── accusative only ─────────────────────────────

  {
    p: "um",
    en: "about, around, during",
    cases: ["ÞF"],
    unit: 6,
    freq: 1,
    senses: [
      { case: "ÞF", en: "about (a topic)", is: "Við tölum um veðrið.", enx: "We are talking about the weather." },
      { case: "ÞF", en: "around / about (moving all over a place)", is: "Hann gengur um bæinn.", enx: "He walks around the town." },
      { case: "ÞF", en: "during (a part of the day)", is: "Hann kom heim um kvöldið.", enx: "He came home in the evening." }
    ]
  },

  {
    p: "við",
    en: "at, by, to (talking)",
    cases: ["ÞF"],
    unit: 5,
    freq: 1,
    senses: [
      { case: "ÞF", en: "by / next to", is: "Ég sit við gluggann.", enx: "I am sitting by the window." },
      { case: "ÞF", en: "to (with verbs of speaking)", is: "Ég tala við nágrannann.", enx: "I am talking to the neighbour." },
      { case: "ÞF", en: "with / on (what your work involves)", is: "Hann vinnur við tölvur.", enx: "He works with computers." }
    ]
  },

  {
    p: "gegnum",
    en: "through",
    cases: ["ÞF"],
    unit: 12,
    freq: 2,
    senses: [
      { case: "ÞF", en: "through (in one side and out the other)", is: "Sólin skín gegnum gluggann.", enx: "The sun shines through the window." }
    ]
  },

  {
    p: "kringum",
    en: "around, surrounding",
    cases: ["ÞF"],
    unit: 13,
    freq: 2,
    senses: [
      { case: "ÞF", en: "around (forming a ring)", is: "Við sitjum kringum borðið.", enx: "We are sitting around the table." }
    ]
  },

  {
    p: "umfram",
    en: "beyond, more than",
    cases: ["ÞF"],
    unit: 18,
    freq: 3,
    senses: [
      { case: "ÞF", en: "above all, more than", is: "Ég met heilsuna umfram allt.", enx: "I value health above everything." }
    ]
  },

  {
    p: "fyrir framan",
    en: "in front of",
    cases: ["ÞF"],
    unit: 9,
    freq: 1,
    senses: [
      { case: "ÞF", en: "in front of (facing it)", is: "Ég bíð fyrir framan búðina.", enx: "I am waiting in front of the shop." }
    ],
    opposite: "fyrir aftan"
  },

  {
    p: "fyrir aftan",
    en: "behind",
    cases: ["ÞF"],
    unit: 9,
    freq: 2,
    senses: [
      { case: "ÞF", en: "behind (at someone's back)", is: "Lúlli stendur fyrir aftan mig.", enx: "Lúlli is standing behind me." }
    ],
    opposite: "fyrir framan"
  },

  {
    p: "fyrir ofan",
    en: "above, over",
    cases: ["ÞF"],
    unit: 9,
    freq: 2,
    senses: [
      { case: "ÞF", en: "higher up than something", is: "Myndin hangir fyrir ofan sófann.", enx: "The picture hangs above the sofa." }
    ],
    opposite: "fyrir neðan"
  },

  {
    p: "fyrir neðan",
    en: "below, underneath",
    cases: ["ÞF"],
    unit: 9,
    freq: 2,
    senses: [
      { case: "ÞF", en: "lower down than something", is: "Sóley býr fyrir neðan mig.", enx: "Sóley lives below me." }
    ],
    opposite: "fyrir ofan"
  },

  {
    p: "fyrir utan",
    en: "outside, apart from",
    cases: ["ÞF"],
    unit: 14,
    freq: 2,
    senses: [
      { case: "ÞF", en: "outside (a building or area)", is: "Fyrir utan húsið er stór garður.", enx: "Outside the house there is a big garden." },
      { case: "ÞF", en: "apart from, except", is: "Allir komu fyrir utan Jónas.", enx: "Everyone came apart from Jónas." }
    ],
    opposite: "innan"
  },

  // ───────────────────────────── dative only ─────────────────────────────

  {
    p: "að",
    en: "to, towards, up to",
    cases: ["ÞGF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "towards (heading for it)", is: "Báturinn siglir að landi.", enx: "The boat is sailing towards land." },
      { case: "ÞGF", en: "up to (arriving at the edge of something)", is: "Ég gekk að dyrunum.", enx: "I walked up to the door." }
    ],
    opposite: "frá"
  },

  {
    p: "frá",
    en: "from",
    cases: ["ÞGF"],
    unit: 2,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "from (where you come from)", is: "Hún kemur frá Akureyri.", enx: "She is from Akureyri." },
      { case: "ÞGF", en: "from (a starting time)", is: "Búðin er opin frá níu.", enx: "The shop is open from nine." }
    ],
    opposite: "til"
  },

  {
    p: "af",
    en: "off, of, from",
    cases: ["ÞGF"],
    unit: 8,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "off (down from a surface)", is: "Bókin datt af borðinu.", enx: "The book fell off the table." },
      { case: "ÞGF", en: "of (what a feeling is about)", is: "Hún er stolt af syni sínum.", enx: "She is proud of her son." },
      { case: "ÞGF", en: "in the question word af hverju = why", is: "Af hverju ertu heima?", enx: "Why are you at home?" }
    ],
    opposite: "á"
  },

  {
    p: "hjá",
    en: "at (someone's place), beside",
    cases: ["ÞGF"],
    unit: 7,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "at someone's place", is: "Ég bý hjá ömmu minni.", enx: "I live at my grandmother's." },
      { case: "ÞGF", en: "beside, next to a person", is: "Lúlli situr hjá mér.", enx: "Lúlli is sitting next to me." }
    ]
  },

  {
    p: "úr",
    en: "out of, made of",
    cases: ["ÞGF"],
    unit: 5,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "out of (leaving an enclosed space)", is: "Hún kemur úr búðinni.", enx: "She is coming out of the shop." },
      { case: "ÞGF", en: "made of (material)", is: "Peysan er úr ull.", enx: "The sweater is made of wool." }
    ],
    opposite: "í"
  },

  {
    p: "handa",
    en: "for (the benefit of)",
    cases: ["ÞGF"],
    unit: 10,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "for someone, as a present", is: "Ég keypti blóm handa mömmu.", enx: "I bought flowers for mum." }
    ]
  },

  {
    p: "undan",
    en: "from under",
    cases: ["ÞGF"],
    unit: 13,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "out from under something", is: "Kötturinn kom undan borðinu.", enx: "The cat came out from under the table." }
    ],
    opposite: "undir"
  },

  {
    p: "nálægt",
    en: "near, close to",
    cases: ["ÞGF"],
    unit: 9,
    freq: 2,
    senses: [
      { case: "ÞGF", en: "near (a place)", is: "Hótelið er nálægt miðbænum.", enx: "The hotel is near the town centre." }
    ]
  },

  {
    p: "gegn",
    en: "against",
    cases: ["ÞGF"],
    unit: 16,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "against (an opponent)", is: "Ísland spilar gegn Noregi.", enx: "Iceland is playing against Norway." }
    ],
    opposite: "með"
  },

  {
    p: "á móti",
    en: "against, opposite, towards",
    cases: ["ÞGF"],
    unit: 14,
    freq: 2,
    senses: [
      { case: "ÞGF", en: "against (opposed to)", is: "Ég er á móti þessu.", enx: "I am against this." },
      { case: "ÞGF", en: "towards (coming to meet you)", is: "Hún kom á móti mér.", enx: "She came towards me." }
    ],
    opposite: "með"
  },

  {
    p: "ásamt",
    en: "together with",
    cases: ["ÞGF"],
    unit: 17,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "together with (a formal með)", is: "Anna kom ásamt vinum sínum.", enx: "Anna came together with her friends." }
    ],
    opposite: "án"
  },

  {
    p: "gagnvart",
    en: "towards, in relation to",
    cases: ["ÞGF"],
    unit: 19,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "towards someone (attitude, not movement)", is: "Hann er kurteis gagnvart öllum.", enx: "He is polite towards everyone." }
    ]
  },

  {
    p: "meðfram",
    en: "along, alongside",
    cases: ["ÞGF"],
    unit: 15,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "along the side of something long", is: "Við gengum meðfram ánni.", enx: "We walked along the river." }
    ]
  },

  {
    p: "gegnt",
    en: "opposite, facing",
    cases: ["ÞGF"],
    unit: 18,
    freq: 3,
    senses: [
      { case: "ÞGF", en: "directly across from", is: "Kaffihúsið er gegnt kirkjunni.", enx: "The café is opposite the church." }
    ]
  },

  {
    p: "við hliðina á",
    en: "next to, beside",
    cases: ["ÞGF"],
    unit: 9,
    freq: 1,
    senses: [
      { case: "ÞGF", en: "right beside (the everyday way to say it)", is: "Bakaríið er við hliðina á bankanum.", enx: "The bakery is next to the bank." }
    ]
  },

  // ───────────────────────────── genitive only ─────────────────────────────

  {
    p: "til",
    en: "to, until, for",
    cases: ["EF"],
    unit: 3,
    freq: 1,
    senses: [
      { case: "EF", en: "to (a country, town or place)", is: "Ég fer til Íslands.", enx: "I am going to Iceland." },
      { case: "EF", en: "until (a time)", is: "Búðin er opin til fimm.", enx: "The shop is open until five." },
      { case: "EF", en: "for / to (the person receiving)", is: "Þetta er gjöf til þín.", enx: "This is a present for you." }
    ],
    opposite: "frá"
  },

  {
    p: "án",
    en: "without",
    cases: ["EF"],
    unit: 11,
    freq: 2,
    senses: [
      { case: "EF", en: "without", is: "Ég drekk kaffi án sykurs.", enx: "I drink coffee without sugar." }
    ],
    opposite: "með"
  },

  {
    p: "auk",
    en: "besides, in addition to",
    cases: ["EF"],
    unit: 17,
    freq: 3,
    senses: [
      { case: "EF", en: "in addition to", is: "Auk þess tala ég dönsku.", enx: "In addition I speak Danish." }
    ]
  },

  {
    p: "milli",
    en: "between",
    cases: ["EF"],
    unit: 11,
    freq: 1,
    senses: [
      { case: "EF", en: "between two places", is: "Bakaríið er milli bankans og skólans.", enx: "The bakery is between the bank and the school." },
      { case: "EF", en: "between (a distance)", is: "Hvað er langt milli Reykjavíkur og Akureyrar?", enx: "How far is it between Reykjavík and Akureyri?" }
    ]
  },

  {
    p: "vegna",
    en: "because of",
    cases: ["EF"],
    unit: 13,
    freq: 2,
    senses: [
      { case: "EF", en: "because of, on account of", is: "Við fórum ekki vegna veðursins.", enx: "We did not go because of the weather." }
    ]
  },

  {
    p: "sakir",
    en: "on account of",
    cases: ["EF"],
    unit: 20,
    freq: 3,
    senses: [
      { case: "EF", en: "owing to (formal; sökum means the same)", is: "Sakir veikinda kemur hún ekki.", enx: "Owing to illness she is not coming." }
    ]
  },

  {
    p: "innan",
    en: "within, inside",
    cases: ["EF"],
    unit: 16,
    freq: 3,
    senses: [
      { case: "EF", en: "within (a period of time)", is: "Ég kem innan viku.", enx: "I will come within a week." },
      { case: "EF", en: "inside (an organisation or area)", is: "Þetta er þekkt innan skólans.", enx: "This is well known inside the school." }
    ],
    opposite: "utan"
  },

  {
    p: "utan",
    en: "outside",
    cases: ["EF"],
    unit: 16,
    freq: 3,
    senses: [
      { case: "EF", en: "outside (an area)", is: "Þeir búa utan borgarinnar.", enx: "They live outside the city." }
    ],
    opposite: "innan"
  },

  {
    p: "handan",
    en: "beyond, on the other side of",
    cases: ["EF"],
    unit: 19,
    freq: 3,
    senses: [
      { case: "EF", en: "on the far side of", is: "Fjallið er handan fjarðarins.", enx: "The mountain is on the other side of the fjord." }
    ]
  },

  {
    p: "meðal",
    en: "among",
    cases: ["EF"],
    unit: 18,
    freq: 3,
    senses: [
      { case: "EF", en: "among (a group); á meðal means the same", is: "Hún er vinsæl meðal nemenda.", enx: "She is popular among the students." }
    ]
  },

  // ───────────────────── directional compounds (two words, one meaning) ─────────────────────

  {
    p: "inn í",
    en: "into",
    cases: ["ÞF"],
    unit: 10,
    freq: 1,
    senses: [
      { case: "ÞF", en: "in through the doorway of something", is: "Hún gekk inn í herbergið.", enx: "She walked into the room." }
    ],
    opposite: "út úr"
  },

  {
    p: "út úr",
    en: "out of",
    cases: ["ÞGF"],
    unit: 10,
    freq: 2,
    senses: [
      { case: "ÞGF", en: "out of an enclosed space", is: "Hann fór út úr húsinu.", enx: "He went out of the house." }
    ],
    opposite: "inn í"
  },

  {
    p: "upp á",
    en: "up onto",
    cases: ["ÞF"],
    unit: 12,
    freq: 2,
    senses: [
      { case: "ÞF", en: "up onto a surface", is: "Kötturinn stekkur upp á þakið.", enx: "The cat jumps up onto the roof." }
    ],
    opposite: "niður á"
  },

  {
    p: "niður á",
    en: "down onto, down to",
    cases: ["ÞF"],
    unit: 12,
    freq: 2,
    senses: [
      { case: "ÞF", en: "down to a lower place", is: "Við göngum niður á höfnina.", enx: "We walk down to the harbour." }
    ],
    opposite: "upp á"
  },

  {
    p: "upp í",
    en: "up into",
    cases: ["ÞF"],
    unit: 12,
    freq: 2,
    senses: [
      { case: "ÞF", en: "up into something", is: "Ég fer upp í rúm.", enx: "I am going up to bed." }
    ],
    opposite: "niður í"
  },

  {
    p: "niður í",
    en: "down into, down to",
    cases: ["ÞF"],
    unit: 10,
    freq: 1,
    senses: [
      { case: "ÞF", en: "down into a place; niður í bæ = into town", is: "Við förum niður í bæ.", enx: "We are going downtown." }
    ],
    opposite: "upp í"
  },

  {
    p: "út í",
    en: "out to, out into",
    cases: ["ÞF"],
    unit: 9,
    freq: 2,
    senses: [
      { case: "ÞF", en: "out to a nearby place", is: "Við förum út í búð.", enx: "We are going out to the shop." }
    ],
    opposite: "inn í"
  },

  {
    p: "fram hjá",
    en: "past, by",
    cases: ["ÞGF"],
    unit: 14,
    freq: 2,
    senses: [
      { case: "ÞGF", en: "past something, without stopping", is: "Strætó keyrir fram hjá skólanum.", enx: "The bus drives past the school." }
    ]
  },

  {
    p: "í kringum",
    en: "around, all round",
    cases: ["ÞF"],
    unit: 13,
    freq: 2,
    senses: [
      { case: "ÞF", en: "surrounding something on every side", is: "Það eru fjöll í kringum bæinn.", enx: "There are mountains around the town." }
    ]
  }

];

export default prepositions;
