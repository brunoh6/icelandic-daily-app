// Drill sets — sentence building and sounds.
// Merged into data/drills.js by tools/build.js.
// 8 sets, each exactly 5 rounds of 6 items, one instruction repeated throughout.

export const drills = [

  /* ------------------------------------------------------------------ 1 */
  {
    id: "word-order-v2",
    title: "The verb in second place",
    cat: "syntax",
    cefr: "B1.1",
    unit: 17,
    instruction: "Start the sentence with the phrase in brackets. The verb must stay in second place.",
    example: { q: "(Í dag) Ég fer í skólann.", a: "Í dag fer ég í skólann." },
    rounds: [
      {
        n: 1,
        label: "Time words in front",
        items: [
          { q: "(Í dag) Ég vinn heima.", a: "Í dag vinn ég heima.",
            why: "One slot, one verb: the time phrase takes slot one, so the subject moves behind the verb." },
          { q: "(Á morgun) Anna fer til Akureyrar.", a: "Á morgun fer Anna til Akureyrar.",
            why: "til always takes the genitive: Akureyrar." },
          { q: "(Núna) Lúlli sefur á þakinu.", a: "Núna sefur Lúlli á þakinu.",
            why: "Verb second, subject third. The rest of the sentence never moves." },
          { q: "(Í kvöld) Við borðum fisk.", a: "Í kvöld borðum við fisk.",
            why: "Icelandic does this with every fronted element, not just a few." },
          { q: "(Í gær) Jónas keypti brauð.", a: "Í gær keypti Jónas brauð.",
            why: "The rule works the same in the past tense." },
          { q: "(Á laugardaginn) Sóley bakar köku.", a: "Á laugardaginn bakar Sóley köku.",
            why: "á + accusative for one named day; kaka becomes köku in the accusative." }
        ]
      },
      {
        n: 2,
        label: "Place phrases in front",
        items: [
          { q: "(Heima) Ég les alltaf á kvöldin.", a: "Heima les ég alltaf á kvöldin.",
            why: "alltaf stays behind the verb where it always sat." },
          { q: "(Hérna) Þú getur beðið.", a: "Hérna getur þú beðið.",
            why: "Only the finite verb counts as second; beðið follows the subject." },
          { q: "(Í Reykjavík) Það rignir mikið.", a: "Í Reykjavík rignir mikið.",
            why: "The empty það only fills slot one. Once something else fills it, það disappears." },
          { q: "(Á Íslandi) Margir tala ensku.", a: "Á Íslandi tala margir ensku.",
            why: "margir is the subject, so it slots in behind the verb." },
          { q: "(Úti) Það er kalt.", a: "Úti er kalt.",
            why: "Again the placeholder það drops out once the front slot is taken." },
          { q: "(Í búðinni) Sóley vinnur á morgnana.", a: "Í búðinni vinnur Sóley á morgnana.",
            why: "í + dative for a static location: búðinni." }
        ]
      },
      {
        n: 3,
        label: "Objects and adverbs in front",
        items: [
          { q: "(Þetta) Ég veit ekki.", a: "Þetta veit ég ekki.",
            why: "An object can be fronted for emphasis; the verb still comes second." },
          { q: "(Kaffi) Jónas drekkur aldrei.", a: "Kaffi drekkur Jónas aldrei.",
            why: "Fronting the object is how Icelandic says „coffee, though, he never drinks“." },
          { q: "(Bókina) Ég las í sumar.", a: "Bókina las ég í sumar.",
            why: "The object keeps its accusative form when it moves: bókina." },
          { q: "(Þess vegna) Ég kem seint.", a: "Þess vegna kem ég seint.",
            why: "Þess vegna is a single front element, however many words it has." },
          { q: "(Kannski) Anna kemur með okkur.", a: "Kannski kemur Anna með okkur.",
            why: "kannski counts as slot one, so the verb follows it directly." },
          { q: "(Aldrei) Lúlli hlustar á mig.", a: "Aldrei hlustar Lúlli á mig.",
            why: "hlusta á takes the accusative: á mig." }
        ]
      },
      {
        n: 4,
        label: "A whole clause in front",
        items: [
          { q: "(Þegar ég vakna) Ég drekk kaffi.", a: "Þegar ég vakna drekk ég kaffi.",
            why: "A subordinate clause fills slot one as a block, so the main verb comes next." },
          { q: "(Ef þú vilt) Við getum farið í bíó.", a: "Ef þú vilt getum við farið í bíó.",
            why: "Inside the ef-clause the order is normal; only the main clause inverts." },
          { q: "(Af því að hann er þreyttur) Jónas fer snemma heim.", a: "Af því að hann er þreyttur fer Jónas snemma heim.",
            why: "Long or short, the front element counts as one." },
          { q: "(Eftir vinnu) Sóley hittir vinkonu sína.", a: "Eftir vinnu hittir Sóley vinkonu sína.",
            why: "eftir + accusative in time expressions: eftir vinnu." },
          { q: "(Á hverjum degi) Anna gengur í skólann.", a: "Á hverjum degi gengur Anna í skólann.",
            why: "dagur has the irregular dative degi." },
          { q: "(Þótt það rigni) Við förum út.", a: "Þótt það rigni förum við út.",
            why: "þótt takes the subjunctive rigni, and the main clause still inverts." }
        ]
      },
      {
        n: 5,
        label: "Long sentences, no help",
        items: [
          { q: "(Í fyrra) Anna bjó í lítilli íbúð í miðbænum.", a: "Í fyrra bjó Anna í lítilli íbúð í miðbænum.",
            why: "Feminine dative singular of lítill is lítilli." },
          { q: "(Um helgar) Jónas les blöðin og drekkur te.", a: "Um helgar les Jónas blöðin og drekkur te.",
            why: "Only the first verb needs to be second; the one after og just follows." },
          { q: "(Klukkan sjö) Sóley opnar bakaríið.", a: "Klukkan sjö opnar Sóley bakaríið.",
            why: "bakarí is neuter, so the definite form is bakaríið." },
          { q: "(Þess vegna) Við ætlum ekki að bíða lengur.", a: "Þess vegna ætlum við ekki að bíða lengur.",
            why: "ætlum is the finite verb, so it takes second place and ekki stays behind the subject." },
          { q: "(Á sumrin) Ferðamennirnir koma til Íslands í hópum.", a: "Á sumrin koma ferðamennirnir til Íslands í hópum.",
            why: "maður forms its plural in -menn: ferðamennirnir." },
          { q: "(Þegar Lúlli sest á borðið) Allir hlæja.", a: "Þegar Lúlli sest á borðið hlæja allir.",
            why: "setjast is a middle-voice verb: hann sest. The main clause inverts as usual." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "negation-placement",
    title: "Where ekki goes",
    cat: "syntax",
    cefr: "A2.1",
    unit: 12,
    instruction: "Make the sentence negative by putting ekki in the right place.",
    example: { q: "Ég tala íslensku.", a: "Ég tala ekki íslensku." },
    rounds: [
      {
        n: 1,
        label: "Plain statements",
        items: [
          { q: "Ég drekk kaffi.", a: "Ég drekk ekki kaffi.",
            why: "ekki comes straight after the finite verb." },
          { q: "Anna býr í Reykjavík.", a: "Anna býr ekki í Reykjavík.",
            why: "Verb first, then ekki, then everything else." },
          { q: "Við förum í bíó í kvöld.", a: "Við förum ekki í bíó í kvöld.",
            why: "ekki does not wait until the end of the sentence." },
          { q: "Jónas vinnur á laugardögum.", a: "Jónas vinnur ekki á laugardögum.",
            why: "The prepositional phrase stays put behind ekki." },
          { q: "Þetta er dýrt.", a: "Þetta er ekki dýrt.",
            why: "Also true of vera: er ekki." },
          { q: "Lúlli syngur fallega.", a: "Lúlli syngur ekki fallega.",
            why: "An adverb of manner sits behind ekki, not in front of it." }
        ]
      },
      {
        n: 2,
        label: "Questions",
        items: [
          { q: "Ert þú svangur?", a: "Ert þú ekki svangur?",
            why: "In a question the subject has already jumped in front of ekki." },
          { q: "Kemur Anna í kvöld?", a: "Kemur Anna ekki í kvöld?",
            why: "Verb, subject, ekki. Say jú, not já, if you want to disagree." },
          { q: "Átt þú bíl?", a: "Átt þú ekki bíl?",
            why: "eiga in the second person is átt." },
          { q: "Búa þau á Akureyri?", a: "Búa þau ekki á Akureyri?",
            why: "Same slot with a plural subject." },
          { q: "Vinnur Sóley í bakaríinu?", a: "Vinnur Sóley ekki í bakaríinu?",
            why: "A full noun subject behaves exactly like a pronoun here." },
          { q: "Er þetta rétt?", a: "Er þetta ekki rétt?",
            why: "A negative question like this expects the answer jú." }
        ]
      },
      {
        n: 3,
        label: "Pronoun objects jump ahead",
        items: [
          { q: "Ég sé þig.", a: "Ég sé þig ekki.",
            why: "A short pronoun object hops over ekki." },
          { q: "Hann skilur mig.", a: "Hann skilur mig ekki.",
            why: "Compare hann skilur ekki spurninguna, where the object is a full noun." },
          { q: "Við þekkjum hana.", a: "Við þekkjum hana ekki.",
            why: "hana is the accusative of hún." },
          { q: "Anna man það.", a: "Anna man það ekki.",
            why: "það counts as a short pronoun object and jumps ahead too." },
          { q: "Þau hjálpa mér.", a: "Þau hjálpa mér ekki.",
            why: "hjálpa takes the dative, and a dative pronoun jumps too." },
          { q: "Ég trúi þér.", a: "Ég trúi þér ekki.",
            why: "trúa also takes the dative: þér." }
        ]
      },
      {
        n: 4,
        label: "Two verbs in a row",
        items: [
          { q: "Ég ætla að fara heim.", a: "Ég ætla ekki að fara heim.",
            why: "ekki follows the finite verb, so it lands before að fara." },
          { q: "Hún getur komið.", a: "Hún getur ekki komið.",
            why: "getur is finite, komið is not." },
          { q: "Við höfum séð myndina.", a: "Við höfum ekki séð myndina.",
            why: "In the perfect, ekki sits between hafa and the supine." },
          { q: "Þú mátt reykja hér.", a: "Þú mátt ekki reykja hér.",
            why: "mátt ekki is the standard way to forbid something." },
          { q: "Jónas vill borða fisk.", a: "Jónas vill ekki borða fisk.",
            why: "vill is the finite verb; borða is the infinitive behind ekki." },
          { q: "Ég er búin að læra þetta.", a: "Ég er ekki búin að læra þetta.",
            why: "er is the finite verb, so ekki goes right after it." }
        ]
      },
      {
        n: 5,
        label: "Inside subordinate clauses",
        items: [
          { q: "Ég veit að hann kemur.", a: "Ég veit að hann kemur ekki.",
            why: "Icelandic keeps verb before ekki even inside an að-clause." },
          { q: "Hún segir að þetta sé satt.", a: "Hún segir að þetta sé ekki satt.",
            why: "The subjunctive sé still comes before ekki." },
          { q: "Anna heldur að Lúlli sé svangur.", a: "Anna heldur að Lúlli sé ekki svangur.",
            why: "halda að takes the subjunctive; ekki changes nothing about that." },
          { q: "Ég vona að það rigni.", a: "Ég vona að það rigni ekki.",
            why: "vona að also takes the present subjunctive: rigni." },
          { q: "Þetta er maðurinn sem talar íslensku.", a: "Þetta er maðurinn sem talar ekki íslensku.",
            why: "In a sem-clause too, the verb comes first and ekki after it." },
          { q: "Sóley segir að hún vinni á morgun.", a: "Sóley segir að hún vinni ekki á morgun.",
            why: "vinni is the present subjunctive of vinna, and ekki follows it." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "questions-inversion",
    title: "Turning statements into questions",
    cat: "syntax",
    cefr: "A1.2",
    unit: 7,
    instruction: "Make a question out of the statement, using the question word in brackets when there is one.",
    example: { q: "Þú talar íslensku.", a: "Talar þú íslensku?" },
    rounds: [
      {
        n: 1,
        label: "Yes or no questions",
        items: [
          { q: "Þú ert frá Íslandi.", a: "Ert þú frá Íslandi?",
            why: "Swap subject and verb. There is no do-word in Icelandic." },
          { q: "Anna kemur í kvöld.", a: "Kemur Anna í kvöld?",
            why: "Verb first, subject second, rest unchanged." },
          { q: "Þið búið í Reykjavík.", a: "Búið þið í Reykjavík?",
            why: "The verb keeps its plural ending: búið." },
          { q: "Hann á hund.", a: "Á hann hund?",
            why: "eiga in the third person singular is á." },
          { q: "Þetta kostar mikið.", a: "Kostar þetta mikið?",
            why: "þetta is the subject, so it moves behind the verb." },
          { q: "Sóley bakar brauð.", a: "Bakar Sóley brauð?",
            why: "A name inverts just like a pronoun." }
        ]
      },
      {
        n: 2,
        label: "hvar, hvenær, hvernig",
        items: [
          { q: "(Hvar) Anna býr í Reykjavík.", a: "Hvar býr Anna?",
            why: "The question word replaces the phrase you are asking about." },
          { q: "(Hvenær) Rútan fer klukkan sjö.", a: "Hvenær fer rútan?",
            why: "Question word first, verb second, subject third." },
          { q: "(Hvernig) Þér líður vel.", a: "Hvernig líður þér?",
            why: "líða is impersonal: the person is in the dative, þér." },
          { q: "(Hvaðan) Jónas er frá Akureyri.", a: "Hvaðan er Jónas?",
            why: "hvaðan already contains the meaning of frá, so the preposition drops." },
          { q: "(Hvert) Við förum í bæinn.", a: "Hvert förum við?",
            why: "hvert asks about movement; hvar would ask about a fixed place." },
          { q: "(Af hverju) Lúlli er á þakinu.", a: "Af hverju er Lúlli á þakinu?",
            why: "Af hverju is one front element, so the verb still comes second." }
        ]
      },
      {
        n: 3,
        label: "hver, hvað, hvaða",
        items: [
          { q: "(Hver) Anna á bílinn.", a: "Hver á bílinn?",
            why: "When hver is itself the subject, nothing swaps places." },
          { q: "(Hvað) Þú heitir Anna.", a: "Hvað heitir þú?",
            why: "Icelandic asks hvað heitir þú, never hver." },
          { q: "(Hvaða) Þetta er íslensk bók.", a: "Hvaða bók er þetta?",
            why: "hvaða always stands in front of a noun." },
          { q: "(Hvern) Þú sérð Jónas.", a: "Hvern sérð þú?",
            why: "The object form of hver is hvern, and sjá gives sérð in the second person." },
          { q: "(Hverjum) Anna hjálpar Jónasi.", a: "Hverjum hjálpar Anna?",
            why: "hjálpa takes the dative, so the question word is dative too." },
          { q: "(Hvað) Þetta kostar 500 krónur.", a: "Hvað kostar þetta?",
            why: "The everyday way to ask a price." }
        ]
      },
      {
        n: 4,
        label: "Two verbs and stranded prepositions",
        items: [
          { q: "Þú vilt koma með.", a: "Vilt þú koma með?",
            why: "Only the finite verb moves; koma stays put." },
          { q: "(Hvað) Þú ætlar að gera í kvöld.", a: "Hvað ætlar þú að gera í kvöld?",
            why: "The question word takes slot one and ætlar slot two." },
          { q: "(Hvar) Anna hefur búið í Reykjavík.", a: "Hvar hefur Anna búið?",
            why: "hefur is finite, búið is the supine and stays at the end." },
          { q: "(Um hvað) Þið talið um veðrið.", a: "Um hvað talið þið?",
            why: "The preposition may travel with the question word to the front." },
          { q: "(Við hvern) Jónas talar við Sóleyju.", a: "Við hvern talar Jónas?",
            why: "við takes the accusative, so hver becomes hvern." },
          { q: "(Hvaðan) Þessi fugl kemur frá Vestmannaeyjum.", a: "Hvaðan kemur þessi fugl?",
            why: "þessi fugl is the whole subject and moves behind the verb together." }
        ]
      },
      {
        n: 5,
        label: "Longer sentences",
        items: [
          { q: "(Hvenær) Sóley byrjar að vinna klukkan sex.", a: "Hvenær byrjar Sóley að vinna?",
            why: "You drop the answer, not the rest of the sentence." },
          { q: "Þið hafið séð myndina.", a: "Hafið þið séð myndina?",
            why: "In the perfect only hafa moves to the front." },
          { q: "(Hvers vegna) Anna kaupir alltaf brauð í þessu bakaríi.", a: "Hvers vegna kaupir Anna alltaf brauð í þessu bakaríi?",
            why: "þessu bakaríi is the dative after í for a location." },
          { q: "(Hvað) Lúlli borðar fisk á hverjum degi.", a: "Hvað borðar Lúlli á hverjum degi?",
            why: "The object fisk is what you are asking about, so hvað replaces it." },
          { q: "Jónas þarf að fara til læknis.", a: "Þarf Jónas að fara til læknis?",
            why: "til takes the genitive: læknis." },
          { q: "(Hvernig) Þú komst hingað með strætó.", a: "Hvernig komst þú hingað?",
            why: "komst is the past tense of koma in the second person." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "relative-sem",
    title: "Relative clauses with sem",
    cat: "syntax",
    cefr: "B1.1",
    unit: 18,
    instruction: "Join the two sentences into one relative clause.",
    example: { q: "Þetta er maðurinn. Hann býr hérna.", a: "Þetta er maðurinn sem býr hérna." },
    rounds: [
      {
        n: 1,
        label: "sem as the subject",
        items: [
          { q: "Þetta er stelpan. Hún talar íslensku.", a: "Þetta er stelpan sem talar íslensku.",
            why: "sem replaces the pronoun. It never changes shape, whatever the gender." },
          { q: "Ég þekki manninn. Hann vinnur hérna.", a: "Ég þekki manninn sem vinnur hérna.",
            why: "sem covers who, which and that all at once." },
          { q: "Þetta er fuglinn. Hann heitir Lúlli.", a: "Þetta er fuglinn sem heitir Lúlli.",
            why: "No comma is needed in front of sem in modern Icelandic." },
          { q: "Ég á vinkonu. Hún býr á Akureyri.", a: "Ég á vinkonu sem býr á Akureyri.",
            why: "The noun keeps whatever case its own clause gave it: vinkonu." },
          { q: "Sóley bakar brauð. Það er alltaf ferskt.", a: "Sóley bakar brauð sem er alltaf ferskt.",
            why: "sem works for neuter nouns too, unchanged." },
          { q: "Við eigum bíl. Hann er rauður.", a: "Við eigum bíl sem er rauður.",
            why: "The adjective still agrees with bíll, not with sem." }
        ]
      },
      {
        n: 2,
        label: "sem as the object",
        items: [
          { q: "Þetta er bókin. Ég las hana í gær.", a: "Þetta er bókin sem ég las í gær.",
            why: "The object pronoun disappears completely; sem does its job." },
          { q: "Hérna er kakan. Sóley bakaði hana.", a: "Hérna er kakan sem Sóley bakaði.",
            why: "Inside the sem-clause the order is subject then verb." },
          { q: "Ég þekki manninn. Þú sást hann.", a: "Ég þekki manninn sem þú sást.",
            why: "sást is the past tense of sjá in the second person." },
          { q: "Þetta er myndin. Við sáum hana í bíó.", a: "Þetta er myndin sem við sáum í bíó.",
            why: "Unlike English, sem can never be left out." },
          { q: "Anna á kött. Hún elskar hann.", a: "Anna á kött sem hún elskar.",
            why: "sem covers an accusative object without changing form." },
          { q: "Þetta er maturinn. Lúlli borðaði hann.", a: "Þetta er maturinn sem Lúlli borðaði.",
            why: "Two clauses, one shared noun, one sem." }
        ]
      },
      {
        n: 3,
        label: "The preposition stays behind",
        items: [
          { q: "Þetta er maðurinn. Ég talaði við hann.", a: "Þetta er maðurinn sem ég talaði við.",
            why: "The preposition is left stranded at the end, just as in spoken English." },
          { q: "Hérna er húsið. Anna býr í því.", a: "Hérna er húsið sem Anna býr í.",
            why: "í loses its object but keeps its place at the end." },
          { q: "Þetta er stelpan. Ég fór með henni.", a: "Þetta er stelpan sem ég fór með.",
            why: "með stays behind even though its dative object is gone." },
          { q: "Þarna er borðið. Lúlli sat á því.", a: "Þarna er borðið sem Lúlli sat á.",
            why: "sat is the past tense of sitja." },
          { q: "Þetta er bókin. Ég sagði þér frá henni.", a: "Þetta er bókin sem ég sagði þér frá.",
            why: "Only the preposition of the missing noun is stranded; þér stays where it was." },
          { q: "Þetta er vinurinn. Ég bý hjá honum.", a: "Þetta er vinurinn sem ég bý hjá.",
            why: "hjá always takes the dative, but there is nothing left for it to govern." }
        ]
      },
      {
        n: 4,
        label: "þar sem and þegar",
        items: [
          { q: "Þetta er bærinn. Ég ólst upp þar.", a: "Þetta er bærinn þar sem ég ólst upp.",
            why: "For a place, use þar sem instead of plain sem." },
          { q: "Hérna er kaffihúsið. Við hittumst þar.", a: "Hérna er kaffihúsið þar sem við hittumst.",
            why: "hittast is a middle-voice verb meaning meet each other." },
          { q: "Ég man daginn. Þá kom Anna.", a: "Ég man daginn þegar Anna kom.",
            why: "For a point in time, use þegar." },
          { q: "Þetta er búðin. Sóley vinnur þar.", a: "Þetta er búðin þar sem Sóley vinnur.",
            why: "þar sem is two words and never merges." },
          { q: "Þetta er herbergið. Ég sef þar.", a: "Þetta er herbergið þar sem ég sef.",
            why: "sef is the first person of sofa." },
          { q: "Ég man kvöldið. Þá sáum við norðurljósin.", a: "Ég man kvöldið þegar við sáum norðurljósin.",
            why: "norðurljós is a neuter plural: norðurljósin." }
        ]
      },
      {
        n: 5,
        label: "Longer sentences",
        items: [
          { q: "Anna á vinkonu. Hún vinnur á sjúkrahúsi.", a: "Anna á vinkonu sem vinnur á sjúkrahúsi.",
            why: "á + dative for a workplace: á sjúkrahúsi." },
          { q: "Jónas keypti bíl. Hann kostaði alltof mikið.", a: "Jónas keypti bíl sem kostaði alltof mikið.",
            why: "The sem-clause can carry a past tense of its own." },
          { q: "Þetta er bakaríið. Sóley bakar þar bestu snúðana.", a: "Þetta er bakaríið þar sem Sóley bakar bestu snúðana.",
            why: "After a superlative the adjective is weak: bestu snúðana." },
          { q: "Ég las bókina. Þú gafst mér hana í fyrra.", a: "Ég las bókina sem þú gafst mér í fyrra.",
            why: "gafst is the past tense of gefa in the second person." },
          { q: "Þetta er lagið. Allir syngja það á Íslandi.", a: "Þetta er lagið sem allir syngja á Íslandi.",
            why: "The object það vanishes into sem." },
          { q: "Hún býr í húsi. Það er hundrað ára gamalt.", a: "Hún býr í húsi sem er hundrað ára gamalt.",
            why: "Age is given with the genitive: hundrað ára." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "conjunctions",
    title: "Joining clauses",
    cat: "syntax",
    cefr: "A2.2",
    unit: 17,
    instruction: "Join the two sentences using the word in brackets.",
    example: { q: "Ég kem. Ég hef tíma. (ef)", a: "Ég kem ef ég hef tíma." },
    rounds: [
      {
        n: 1,
        label: "og, en, eða",
        items: [
          { q: "Anna les bók. Jónas horfir á sjónvarpið. (og)", a: "Anna les bók og Jónas horfir á sjónvarpið.",
            why: "og simply glues two full sentences together and changes nothing." },
          { q: "Ég heiti Anna. Ég er frá Perú. (og)", a: "Ég heiti Anna og ég er frá Perú.",
            why: "The subject may be repeated after og." },
          { q: "Ég drekk kaffi. Anna drekkur te. (en)", a: "Ég drekk kaffi en Anna drekkur te.",
            why: "en means but here. As a preposition it would mean than." },
          { q: "Veðrið er kalt. Sólin skín. (en)", a: "Veðrið er kalt en sólin skín.",
            why: "Word order in both halves stays exactly as it was." },
          { q: "Er þetta te? Er þetta kaffi? (eða)", a: "Er þetta te eða kaffi?",
            why: "When everything else matches, only the two choices are left." },
          { q: "Við förum í dag. Við förum á morgun. (eða)", a: "Við förum í dag eða á morgun.",
            why: "Two time phrases, one verb, one eða." }
        ]
      },
      {
        n: 2,
        label: "Reasons: af því að, því",
        items: [
          { q: "Ég fer heim. Ég er þreyttur. (af því að)", a: "Ég fer heim af því að ég er þreyttur.",
            why: "af því að is three words and always keeps normal word order after it." },
          { q: "Anna kemur ekki. Hún er veik. (af því að)", a: "Anna kemur ekki af því að hún er veik.",
            why: "The negation in the first clause is untouched." },
          { q: "Við tökum leigubíl. Það rignir. (því)", a: "Við tökum leigubíl því það rignir.",
            why: "því on its own is the everyday short version of af því að." },
          { q: "Sóley vaknar snemma. Hún byrjar að vinna klukkan sex. (því)", a: "Sóley vaknar snemma því hún byrjar að vinna klukkan sex.",
            why: "því never starts the whole sentence in this meaning." },
          { q: "Ég kaupi ekki bílinn. Hann er of dýr. (af því að)", a: "Ég kaupi ekki bílinn af því að hann er of dýr.",
            why: "of dýr means too expensive; alltof dýr is stronger." },
          { q: "Lúlli er glaður. Hann fékk fisk. (því)", a: "Lúlli er glaður því hann fékk fisk.",
            why: "fékk is the past tense of fá." }
        ]
      },
      {
        n: 3,
        label: "Time and condition: þegar, ef, meðan",
        items: [
          { q: "Ég drekk kaffi. Ég vakna. (þegar)", a: "Ég drekk kaffi þegar ég vakna.",
            why: "þegar means when in a statement; hvenær is only for questions." },
          { q: "Við förum út. Veðrið er gott. (ef)", a: "Við förum út ef veðrið er gott.",
            why: "A real condition keeps the indicative er." },
          { q: "Anna les. Jónas eldar. (meðan)", a: "Anna les meðan Jónas eldar.",
            why: "meðan means while, for two things happening at once." },
          { q: "Hringdu í mig. Þú kemur til Reykjavíkur. (þegar)", a: "Hringdu í mig þegar þú kemur til Reykjavíkur.",
            why: "hringja í takes the accusative: í mig." },
          { q: "Ég hjálpa þér. Þú vilt það. (ef)", a: "Ég hjálpa þér ef þú vilt það.",
            why: "hjálpa takes the dative: þér." },
          { q: "Lúlli bíður fyrir utan. Við borðum. (meðan)", a: "Lúlli bíður fyrir utan meðan við borðum.",
            why: "bíða in the third person singular is bíður." }
        ]
      },
      {
        n: 4,
        label: "að, hvort, þótt",
        items: [
          { q: "Ég veit. Hann kemur á morgun. (að)", a: "Ég veit að hann kemur á morgun.",
            why: "vita states a fact, so the verb stays in the indicative." },
          { q: "Anna spyr. Ert þú heima? (hvort)", a: "Anna spyr hvort þú sért heima.",
            why: "hvort turns a yes-no question into a clause, and spyrja pulls the subjunctive sért." },
          { q: "Ég vona. Það rignir ekki. (að)", a: "Ég vona að það rigni ekki.",
            why: "vona is a wish, so the verb becomes the subjunctive rigni." },
          { q: "Við förum út. Það er kalt. (þótt)", a: "Við förum út þótt það sé kalt.",
            why: "þótt always takes the subjunctive: sé." },
          { q: "Jónas segir. Kakan er góð. (að)", a: "Jónas segir að kakan sé góð.",
            why: "Reporting someone else's words calls for the subjunctive." },
          { q: "Ég man ekki. Lokaði ég glugganum? (hvort)", a: "Ég man ekki hvort ég lokaði glugganum.",
            why: "loka takes the dative: glugganum." }
        ]
      },
      {
        n: 5,
        label: "Longer sentences, mixed",
        items: [
          { q: "Sóley byrjar að baka klukkan fimm. Brauðið er tilbúið þegar búðin opnar. (svo að)", a: "Sóley byrjar að baka klukkan fimm svo að brauðið sé tilbúið þegar búðin opnar.",
            why: "svo að meaning so that takes the subjunctive sé." },
          { q: "Ég ætla ekki út. Þú kemur með mér. (nema)", a: "Ég ætla ekki út nema þú komir með mér.",
            why: "nema means unless and takes the subjunctive komir." },
          { q: "Anna talar góða íslensku. Hún hefur bara búið hér í tvö ár. (þótt)", a: "Anna talar góða íslensku þótt hún hafi bara búið hér í tvö ár.",
            why: "The subjunctive of hafa is hafi." },
          { q: "Jónas fer alltaf snemma að sofa. Hann þarf að vakna klukkan sex. (af því að)", a: "Jónas fer alltaf snemma að sofa af því að hann þarf að vakna klukkan sex.",
            why: "af því að takes the indicative; only wishes and doubts trigger the subjunctive." },
          { q: "Við bíðum hérna. Rútan kemur. (þangað til)", a: "Við bíðum hérna þangað til rútan kemur.",
            why: "þangað til means until and keeps the indicative." },
          { q: "Lúlli sest á borðið. Enginn er að horfa. (þegar)", a: "Lúlli sest á borðið þegar enginn er að horfa.",
            why: "enginn is the masculine nominative of the negative pronoun." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "subjunctive-past",
    title: "The past subjunctive",
    cat: "syntax",
    cefr: "B1.1",
    unit: 19,
    instruction: "Put the verb in brackets into the past subjunctive.",
    example: { q: "Ef ég ___ (vera) ríkur, færi ég til Íslands.", a: "væri" },
    rounds: [
      {
        n: 1,
        label: "The everyday irregulars",
        items: [
          { q: "Ef ég ___ (vera) ríkur.", a: "væri",
            why: "vera has the irregular past subjunctive væri in both singular persons." },
          { q: "Ef þú ___ (hafa) tíma.", a: "hefðir",
            why: "hafa gives hefði, and the second person adds -r: hefðir." },
          { q: "Ef hann ___ (geta) komið.", a: "gæti",
            why: "The past plural gátum shows the vowel, and á shifts to æ: gæti." },
          { q: "Ef við ___ (vilja) fara.", a: "vildum",
            why: "vilja has no vowel shift; the plural form is identical to the past tense." },
          { q: "Ef ég ___ (mega) velja.", a: "mætti",
            why: "mega gives mætti, the same word you use for a polite may I." },
          { q: "Ef hún ___ (eiga) bíl.", a: "ætti",
            why: "eiga gives ætti, one of the most useful forms in the language." }
        ]
      },
      {
        n: 2,
        label: "Strong verbs: find the past plural first",
        items: [
          { q: "Ef ég ___ (koma) fyrr.", a: "kæmi",
            why: "Past plural komum, then the shift o to æ: kæmi." },
          { q: "Ef þú ___ (fara) til Íslands.", a: "færir",
            why: "Past plural fórum, ó shifts to æ, and the second person adds -r." },
          { q: "Ef hún ___ (sjá) þetta.", a: "sæi",
            why: "Past plural sáum, á shifts to æ: sæi." },
          { q: "Ef þeir ___ (taka) strætó.", a: "tækju",
            why: "Past plural tókum gives tæki, and the third person plural ends in -u." },
          { q: "Ef ég ___ (fá) frí.", a: "fengi",
            why: "Past plural fengum already has e, so nothing shifts." },
          { q: "Ef þú ___ (verða) veikur.", a: "yrðir",
            why: "Past plural urðum, u shifts to y: yrði, yrðir." }
        ]
      },
      {
        n: 3,
        label: "Weak verbs look like the past tense",
        items: [
          { q: "Ef ég ___ (tala) meiri íslensku.", a: "talaði",
            why: "Weak -a verbs have no shift at all, so past and past subjunctive match." },
          { q: "Ef þú ___ (hjálpa) mér.", a: "hjálpaðir",
            why: "Same endings as the past tense: hjálpaði, hjálpaðir." },
          { q: "Ef hann ___ (kaupa) húsið.", a: "keypti",
            why: "kaupa is irregular in the past, keypti, and the subjunctive copies it." },
          { q: "Ef við ___ (borða) fyrr.", a: "borðuðum",
            why: "The plural of -aði verbs has u throughout: borðuðum." },
          { q: "Ef Anna ___ (læra) meira.", a: "lærði",
            why: "An -i verb makes its past in -ði: lærði." },
          { q: "Ef þið ___ (spila) á gítar.", a: "spiluðuð",
            why: "Second person plural of an -aði verb: spiluðuð." }
        ]
      },
      {
        n: 4,
        label: "Now the other half of the sentence",
        items: [
          { q: "Ef ég ætti pening, ___ (fara) ég til Íslands.", a: "færi",
            why: "Both halves of an unreal sentence take the past subjunctive." },
          { q: "Ef þú spyrðir hana, ___ (segja) hún þér það.", a: "segði",
            why: "segja gives segði. Note the verb still comes second after the ef-clause." },
          { q: "Ef veðrið væri betra, ___ (ganga) ég heim.", a: "gengi",
            why: "Past plural gengum, and no shift is possible with e." },
          { q: "Ef Lúlli væri stærri, ___ (geta) hann borðað allan fiskinn.", a: "gæti",
            why: "gæti carries the meaning could all by itself." },
          { q: "Ef ég hefði tíma, ___ (lesa) ég meira.", a: "læsi",
            why: "Past plural lásum, á shifts to æ: læsi." },
          { q: "Ef þau byggju hér, ___ (koma) þau oftar.", a: "kæmu",
            why: "Third person plural of kæmi is kæmu." }
        ]
      },
      {
        n: 5,
        label: "Reports, wishes and polite requests",
        items: [
          { q: "Anna sagði að hún ___ (vera) þreytt.", a: "væri",
            why: "A past reporting verb pulls the past subjunctive into the að-clause." },
          { q: "Jónas spurði hvort ég ___ (vilja) kaffi.", a: "vildi",
            why: "spyrja hvort behaves the same way as segja að." },
          { q: "Ég vildi óska að það ___ (hætta) að rigna.", a: "hætti",
            why: "A wish for something unreal: hætta gives hætti." },
          { q: "___ (geta) þú rétt mér saltið?", a: "Gætir",
            why: "The past subjunctive is the polite form: gætir þú is softer than getur þú." },
          { q: "Sóley sagði að hún ___ (baka) fyrir okkur.", a: "bakaði",
            why: "A weak verb hides the subjunctive completely: bakaði either way." },
          { q: "Það væri gaman ef Lúlli ___ (kunna) að tala.", a: "kynni",
            why: "Past plural kunnum, u shifts to y: kynni." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "reported-speech",
    title: "Reporting what people said",
    cat: "syntax",
    cefr: "B1.1",
    unit: 20,
    instruction: "Rewrite the quoted sentence as reported speech.",
    example: { q: "Anna segir: „Ég kem á morgun.“", a: "Anna segist koma á morgun." },
    rounds: [
      {
        n: 1,
        label: "Your own words: segjast plus infinitive",
        items: [
          { q: "Ég segi: „Ég er þreyttur.“", a: "Ég segist vera þreyttur.",
            why: "When the speaker reports themselves, use the middle voice segjast and an infinitive." },
          { q: "Anna segir: „Ég kem á morgun.“", a: "Anna segist koma á morgun.",
            why: "No second subject is needed; segist already says who." },
          { q: "Jónas segir: „Ég vinn heima.“", a: "Jónas segist vinna heima.",
            why: "The main verb drops to the infinitive: vinna." },
          { q: "Þau segja: „Við búum í Reykjavík.“", a: "Þau segjast búa í Reykjavík.",
            why: "The plural middle form is segjast as well." },
          { q: "Sóley segir: „Ég baka á hverjum degi.“", a: "Sóley segist baka á hverjum degi.",
            why: "Time phrases travel along unchanged." },
          { q: "Við segjum: „Við ætlum að koma.“", a: "Við segjumst ætla að koma.",
            why: "First person plural of the middle voice: segjumst." }
        ]
      },
      {
        n: 2,
        label: "Somebody else's words: að plus subjunctive",
        items: [
          { q: "Anna segir: „Jónas er heima.“", a: "Anna segir að Jónas sé heima.",
            why: "A different subject needs an að-clause, and að-clauses after segja take the subjunctive." },
          { q: "Jónas segir: „Kakan er góð.“", a: "Jónas segir að kakan sé góð.",
            why: "The present subjunctive of vera is sé." },
          { q: "Sóley segir: „Búðin opnar klukkan sjö.“", a: "Sóley segir að búðin opni klukkan sjö.",
            why: "Weak verbs take -i in the subjunctive: opni." },
          { q: "Anna segir: „Lúlli sefur á þakinu.“", a: "Anna segir að Lúlli sofi á þakinu.",
            why: "No i-shift in the present subjunctive, so sefur becomes sofi." },
          { q: "Þau segja: „Veðrið er gott.“", a: "Þau segja að veðrið sé gott.",
            why: "The adjective still agrees with veðrið." },
          { q: "Hún segir: „Börnin koma seint.“", a: "Hún segir að börnin komi seint.",
            why: "Third person plural subjunctive of koma is komi." }
        ]
      },
      {
        n: 3,
        label: "When the reporting verb is in the past",
        items: [
          { q: "Anna sagði: „Jónas er veikur.“", a: "Anna sagði að Jónas væri veikur.",
            why: "sagði is past, so the clause moves to the past subjunctive væri." },
          { q: "Jónas sagði: „Búðin er lokuð.“", a: "Jónas sagði að búðin væri lokuð.",
            why: "lokuð is a feminine participle agreeing with búðin." },
          { q: "Sóley sagði: „Brauðið kostar 500 krónur.“", a: "Sóley sagði að brauðið kostaði 500 krónur.",
            why: "For weak verbs the past subjunctive looks like the plain past: kostaði." },
          { q: "Hann sagði: „Þau búa á Akureyri.“", a: "Hann sagði að þau byggju á Akureyri.",
            why: "Past plural bjuggum, u shifts to y, plural ending -u: byggju." },
          { q: "Anna sagði: „Lúlli borðar allt.“", a: "Anna sagði að Lúlli borðaði allt.",
            why: "allt is the neuter form of allur used for everything in general." },
          { q: "Kennarinn sagði: „Prófið er á föstudaginn.“", a: "Kennarinn sagði að prófið væri á föstudaginn.",
            why: "á + accusative for one named day: á föstudaginn." }
        ]
      },
      {
        n: 4,
        label: "Reported questions",
        items: [
          { q: "Anna spyr: „Ert þú heima?“", a: "Anna spyr hvort þú sért heima.",
            why: "A yes-no question becomes hvort, and the order goes back to subject then verb." },
          { q: "Jónas spurði: „Kemur Anna í kvöld?“", a: "Jónas spurði hvort Anna kæmi í kvöld.",
            why: "Past reporting verb, past subjunctive: kæmi." },
          { q: "Sóley spyr: „Hvar býrð þú?“", a: "Sóley spyr hvar þú búir.",
            why: "A hv-question keeps its question word and adds the subjunctive búir." },
          { q: "Hann spurði: „Hvenær fer rútan?“", a: "Hann spurði hvenær rútan færi.",
            why: "Past plural fórum gives færi." },
          { q: "Anna spurði: „Hvað kostar þetta?“", a: "Anna spurði hvað þetta kostaði.",
            why: "The subject slides in front of the verb inside the reported clause." },
          { q: "Þau spyrja: „Vilt þú koma með?“", a: "Þau spyrja hvort þú viljir koma með.",
            why: "Present subjunctive of vilja is vilji, second person viljir." }
        ]
      },
      {
        n: 5,
        label: "Past events, feelings and possessions",
        items: [
          { q: "Anna segir: „Ég hef aldrei komið til Akureyrar.“", a: "Anna segist aldrei hafa komið til Akureyrar.",
            why: "In the middle-voice pattern the adverb comes before the infinitive hafa." },
          { q: "Jónas segir: „Mér finnst þetta gott.“", a: "Jónas segir að sér finnist þetta gott.",
            why: "An impersonal dative subject cannot use segjast; mér becomes the reflexive sér." },
          { q: "Anna sagði: „Mig langar í ís.“", a: "Anna sagði að sig langaði í ís.",
            why: "langa takes an accusative subject, so mig becomes the reflexive sig." },
          { q: "Sóley segir: „Íbúðin mín er lítil.“", a: "Sóley segir að íbúðin sín sé lítil.",
            why: "A possessive pointing back at the speaker becomes sinn: íbúðin sín." },
          { q: "Jónas sagði: „Ég keypti bílinn í fyrra.“", a: "Jónas sagðist hafa keypt bílinn í fyrra.",
            why: "A reported past event becomes hafa plus the supine: hafa keypt." },
          { q: "Anna sagði: „Lúlli stal fiskinum.“", a: "Anna sagði að Lúlli hefði stolið fiskinum.",
            why: "stela takes the dative, and the past event becomes hefði plus stolið." }
        ]
      }
    ]
  },

  /* ------------------------------------------------------------------ 8 */
  {
    id: "sound-spelling",
    title: "Spelling and sound",
    cat: "sounds",
    cefr: "A1.1",
    unit: 1,
    instruction: "Choose the word that contains the sound described.",
    example: { q: "Which word contains the sound [tl]?", a: "stóll" },
    rounds: [
      {
        n: 1,
        label: "ll is [tl]",
        items: [
          { q: "Which word contains the sound [tl]?", opts: ["salur", "stóll", "sími", "hús"], a: "stóll",
            why: "Double ll is pronounced [tl]. Stóll sounds roughly like stoutl." },
          { q: "Which word contains the sound [tl]?", opts: ["fjara", "fara", "fjall", "fé"], a: "fjall",
            why: "Fjall ends in ll, so the l turns into [tl]." },
          { q: "Which word contains the sound [tl]?", opts: ["gulur", "gata", "gull", "gaman"], a: "gull",
            why: "Gulur has one l and keeps a plain [l]; gull has two and gets [tl]." },
          { q: "Which word contains the sound [tl]?", opts: ["bók", "bíll", "borg", "bak"], a: "bíll",
            why: "Bíll is roughly beetl, not beel." },
          { q: "Which word contains the sound [tl]?", opts: ["kalt", "kall", "kaka", "kex"], a: "kall",
            why: "In kalt the l stands before t and stays [l]; kall has real ll." },
          { q: "Which word contains the sound [tl]?", opts: ["hótel", "hiti", "hóll", "hús"], a: "hóll",
            why: "Hóll, a hill, is pronounced with the same [tl] as stóll." }
        ]
      },
      {
        n: 2,
        label: "nn is [tn] after a long vowel",
        items: [
          { q: "Which word contains the sound [tn]?", opts: ["hann", "steinn", "finna", "minn"], a: "steinn",
            why: "Steinn has the diphthong ei before nn, so nn becomes [tn]." },
          { q: "Which word contains the sound [tn]?", opts: ["enn", "einn", "inn", "vinna"], a: "einn",
            why: "Einn is roughly eitn. Enn has a short e and keeps a plain [n]." },
          { q: "Which word contains the sound [tn]?", opts: ["kanna", "brúnn", "banna", "hinn"], a: "brúnn",
            why: "The long ú in brúnn triggers [tn]." },
          { q: "Which word contains the sound [tn]?", opts: ["sinn", "hreinn", "þinn", "finnur"], a: "hreinn",
            why: "Hreinn has ei before nn; sinn and þinn have a short i and stay [n]." },
          { q: "Which word contains the sound [tn]?", opts: ["vinnur", "fínn", "minni", "kanna"], a: "fínn",
            why: "Fínn has a long í, so the ending sounds like -itn." },
          { q: "Which word contains the sound [tn]?", opts: ["senn", "seinn", "synir", "sinn"], a: "seinn",
            why: "Seinn has ei, senn only a short e. One letter, two different sounds." }
        ]
      },
      {
        n: 3,
        label: "Preaspiration: a puff of air before the stop",
        items: [
          { q: "Which word contains preaspiration?", opts: ["efni", "epli", "aldrei", "opið"], a: "epli",
            why: "p before l is preaspirated: epli sounds like ehpli." },
          { q: "Which word contains preaspiration?", opts: ["vaða", "vatn", "vara", "vera"], a: "vatn",
            why: "t before n gives vahtn." },
          { q: "Which word contains preaspiration?", opts: ["eiga", "eftir", "ekki", "efa"], a: "ekki",
            why: "Double kk is preaspirated: ehki." },
          { q: "Which word contains preaspiration?", opts: ["nóg", "nótt", "nafn", "nú"], a: "nótt",
            why: "Double tt gives nohtt." },
          { q: "Which word contains preaspiration?", opts: ["ofan", "opna", "orð", "una"], a: "opna",
            why: "p before n behaves like p before l: ohpna." },
          { q: "Which word contains preaspiration?", opts: ["lita", "litla", "lifa", "lesa"], a: "litla",
            why: "Lita has a single t between vowels; litla has t before l and gets the puff." }
        ]
      },
      {
        n: 4,
        label: "hv is [kv], and f between vowels is [v]",
        items: [
          { q: "Which word begins with the sound [kv]?", opts: ["hafa", "hvað", "hús", "köttur"], a: "hvað",
            why: "In modern Reykjavík speech hv is said kv: kvað." },
          { q: "Which word begins with the sound [kv]?", opts: ["hiti", "hvítur", "hönd", "haf"], a: "hvítur",
            why: "Hvítur sounds like kvítur." },
          { q: "Which word begins with the sound [kv]?", opts: ["heim", "hjá", "hver", "hlusta"], a: "hver",
            why: "Every hv- question word starts with [kv]: hver, hvað, hvar." },
          { q: "Which word contains a [v] sound spelled with f?", opts: ["hata", "hafa", "haka", "hana"], a: "hafa",
            why: "Between two vowels f is voiced and sounds like [v]: hava." },
          { q: "Which word contains a [v] sound spelled with f?", opts: ["loka", "lita", "lofa", "lesa"], a: "lofa",
            why: "Lofa sounds like lova." },
          { q: "Which word contains a [b] sound spelled with f?", opts: ["nótt", "nafn", "nál", "norður"], a: "nafn",
            why: "Before l and n, f hardens into [b]: nabn." }
        ]
      },
      {
        n: 5,
        label: "au, and everything at once",
        items: [
          { q: "Which word contains the diphthong [œi], as in auga?", opts: ["heim", "haust", "hús", "hár"], a: "haust",
            why: "au is a rounded diphthong, never the English ow of house." },
          { q: "Which word contains the diphthong [œi], as in auga?", opts: ["leikur", "laugardagur", "ljós", "lúr"], a: "laugardagur",
            why: "Laugardagur opens with the same au sound as auga." },
          { q: "Which word contains the sound [tn]?", opts: ["sinn", "Sveinn", "synir", "sonur"], a: "Sveinn",
            why: "The name Sveinn has ei before nn, so it ends in [tn]." },
          { q: "Which word contains preaspiration?", opts: ["nóg", "níu", "nokkur", "nafn"], a: "nokkur",
            why: "Double kk again: nohkur." },
          { q: "Which word begins with the sound [kv]?", opts: ["hérna", "hjálp", "hvernig", "hlaupa"], a: "hvernig",
            why: "Hvernig is said kvernig, whatever the spelling suggests." },
          { q: "Which word contains a [v] sound spelled with f?", opts: ["kaffi", "hafið", "kalla", "kanna"], a: "hafið",
            why: "One f between vowels is [v]; double ff stays a hard [f]." }
        ]
      }
    ]
  }

];

export default drills;
