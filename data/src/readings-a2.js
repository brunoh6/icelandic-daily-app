// A2 readings — r11–r20, units 9–16.
// Longer texts, past narrative mixed with present, relative and subordinate clauses.
// All Icelandic and English written for Lundi; nothing copied from any source book.

export const readings = [
  {
    id: "r11",
    title: "Sundlaugin í desember",
    en: "The swimming pool in December",
    level: "A2",
    unit: 9,
    minutes: 5,
    text: [
      { is: "Anna fer í sund á hverjum morgni, líka í desember.", en: "Anna goes swimming every morning, in December too." },
      { is: "Í gær var frost og snjór á götunum.", en: "Yesterday there was frost and snow on the streets." },
      { is: "Hún gekk að lauginni með handklæði í töskunni.", en: "She walked to the pool with a towel in her bag." },
      { is: "Loftið var kalt en vatnið var heitt.", en: "The air was cold but the water was hot." },
      { is: "Fyrst fór hún í sturtu og svo út í laugina.", en: "First she took a shower and then went out into the pool." },
      { is: "Gufan lá yfir vatninu eins og hvít þoka.", en: "The steam lay over the water like a white fog." },
      { is: "Anna synti tuttugu ferðir og taldi þær í huganum.", en: "Anna swam twenty lengths and counted them in her head." },
      { is: "Eftir sundið settist hún í heita pottinn.", en: "After the swim she sat down in the hot tub." },
      { is: "Þar sátu tveir eldri menn og töluðu um veðrið.", en: "Two older men were sitting there talking about the weather." },
      { is: "Þeir kvörtuðu yfir kuldanum og yfir myrkrinu.", en: "They complained about the cold and about the darkness." },
      { is: "Anna hlustaði en sagði ekkert.", en: "Anna listened but said nothing." },
      { is: "Snjórinn féll hægt á heita vatnið.", en: "The snow fell slowly onto the hot water." },
      { is: "Þegar hún kom út aftur var hárið á henni frosið.", en: "When she came out again her hair was frozen." },
      { is: "Hún hljóp inn í búningsklefann og hló.", en: "She ran into the changing room and laughed." },
      { is: "Henni finnst ekkert betra en sundlaug í frosti.", en: "She thinks nothing is better than a swimming pool in a frost." },
      { is: "Lúlli sat á girðingunni og horfði á hana.", en: "Lúlli sat on the fence and watched her." }
    ],
    glossary: [
      ["laug", "pool"],
      ["gufa", "steam"],
      ["heiti potturinn", "the hot tub"],
      ["handklæði", "towel"],
      ["búningsklefi", "changing room"],
      ["kvarta yfir", "to complain about"],
      ["frost", "frost"]
    ],
    qs: [
      { q: "How often does Anna go swimming?", opts: ["Every morning", "Once a week", "Only in summer"], a: "Every morning" },
      { q: "What was the weather like the day before?", opts: ["Frost and snow", "Warm and sunny", "Rainy and mild"], a: "Frost and snow" },
      { q: "How many lengths did Anna swim?", opts: ["Twenty", "Ten", "Forty"], a: "Twenty" },
      { q: "What were the two men in the hot tub doing?", opts: ["Complaining about the cold", "Reading newspapers", "Teaching Anna to swim"], a: "Complaining about the cold" },
      { q: "What happened to Anna's hair outside?", opts: ["It froze", "It got tangled", "It stayed dry"], a: "It froze" }
    ]
  },

  {
    id: "r12",
    title: "Strætó sem kom aldrei",
    en: "The bus that never came",
    level: "A2",
    unit: 10,
    minutes: 5,
    text: [
      { is: "Jónas stóð á stoppistöðinni klukkan sjö.", en: "Jónas stood at the bus stop at seven o'clock." },
      { is: "Það var myrkur og rigningin barði á skýlinu.", en: "It was dark and the rain was beating on the shelter." },
      { is: "Vagn númer fjórtán átti að koma fimm mínútum yfir sjö.", en: "Bus number fourteen was supposed to come at five past seven." },
      { is: "Hann kom ekki.", en: "It did not come." },
      { is: "Jónas skoðaði appið í símanum sínum.", en: "Jónas checked the app on his phone." },
      { is: "Appið sagði að vagninn væri á leiðinni.", en: "The app said the bus was on its way." },
      { is: "Fimm mínútum síðar stóð það sama á skjánum.", en: "Five minutes later the same thing was on the screen." },
      { is: "Kona við hliðina á honum hló og sagði að þetta gerðist alltaf í rigningu.", en: "A woman next to him laughed and said this always happened in the rain." },
      { is: "Jónas var orðinn kaldur á fótunum.", en: "Jónas's feet had gone cold." },
      { is: "Hann hugsaði um að ganga heim en það var of langt.", en: "He thought about walking home but it was too far." },
      { is: "Loksins kom vagn, en það var vagn númer sex.", en: "Finally a bus came, but it was bus number six." },
      { is: "Bílstjórinn hristi höfuðið og keyrði fram hjá.", en: "The driver shook his head and drove past." },
      { is: "Þá hringdi Jónas í Önnu og spurði hvort hún gæti sótt hann.", en: "Then Jónas rang Anna and asked whether she could pick him up." },
      { is: "Hún kom tíu mínútum síðar á gömlum bíl.", en: "She came ten minutes later in an old car." },
      { is: "Þegar þau óku af stað sáu þau vagn númer fjórtán fyrir aftan sig.", en: "As they drove off they saw bus number fourteen behind them." },
      { is: "Jónas hló ekki.", en: "Jónas did not laugh." },
      { is: "Anna hló mikið.", en: "Anna laughed a lot." }
    ],
    glossary: [
      ["stoppistöð", "bus stop"],
      ["skýli", "shelter"],
      ["á leiðinni", "on the way"],
      ["skjár", "screen"],
      ["bílstjóri", "driver"],
      ["sækja", "to fetch, pick up"],
      ["fram hjá", "past, by"],
      ["af stað", "off, on our way"]
    ],
    qs: [
      { q: "When was bus fourteen supposed to arrive?", opts: ["Five past seven", "Seven o'clock sharp", "Half past seven"], a: "Five past seven" },
      { q: "What did the app tell Jónas?", opts: ["That the bus was on its way", "That the bus was cancelled", "That the bus was full"], a: "That the bus was on its way" },
      { q: "Which bus actually stopped in front of him first?", opts: ["Number six, which drove past", "Number fourteen", "None at all"], a: "Number six, which drove past" },
      { q: "How did Jónas get home?", opts: ["Anna picked him up", "He walked", "He took a taxi"], a: "Anna picked him up" },
      { q: "What did they see as they drove off?", opts: ["Bus fourteen behind them", "The rain stopping", "The woman waving"], a: "Bus fourteen behind them" }
    ]
  },

  {
    id: "r13",
    title: "Sunnudagsmatur",
    en: "Sunday dinner",
    level: "A2",
    unit: 11,
    minutes: 5,
    text: [
      { is: "Á sunnudögum borðar fjölskylda Önnu saman.", en: "On Sundays Anna's family eats together." },
      { is: "Amma hennar eldar alltaf sama réttinn: lambakjöt með kartöflum.", en: "Her grandmother always cooks the same dish: lamb with potatoes." },
      { is: "Í síðustu viku kom Anna klukkan fjögur og hjálpaði ömmu sinni í eldhúsinu.", en: "Last week Anna came at four and helped her grandmother in the kitchen." },
      { is: "Þær flysjuðu kartöflur og töluðu um gamla daga.", en: "They peeled potatoes and talked about the old days." },
      { is: "Bróðir Önnu, Kári, kom seint eins og venjulega.", en: "Anna's brother Kári came late, as usual." },
      { is: "Hann var með köku frá bakaríinu þar sem Sóley vinnur.", en: "He had a cake from the bakery where Sóley works." },
      { is: "Pabbi lagði á borðið og kveikti á kertum.", en: "Dad set the table and lit some candles." },
      { is: "Allir settust niður klukkan sex.", en: "Everyone sat down at six." },
      { is: "Maturinn var heitur og lyktin var góð.", en: "The food was hot and the smell was good." },
      { is: "Amma spurði hvort Anna væri ekki of grönn.", en: "Grandmother asked whether Anna was not too thin." },
      { is: "Anna hló og fékk sér meira.", en: "Anna laughed and helped herself to more." },
      { is: "Eftir matinn drukku þau kaffi inni í stofu.", en: "After the meal they drank coffee in the living room." },
      { is: "Kári sagði frá nýju vinnunni sinni.", en: "Kári talked about his new job." },
      { is: "Amma sofnaði í stólnum með kaffibollann í hendinni.", en: "Grandmother fell asleep in her chair with the coffee cup in her hand." },
      { is: "Anna og pabbi hennar vöskuðu upp í hljóði.", en: "Anna and her father washed up quietly." },
      { is: "Þegar Anna fór heim gaf amma henni afgangana í litlum poka.", en: "When Anna went home her grandmother gave her the leftovers in a small bag." }
    ],
    glossary: [
      ["réttur", "dish, course"],
      ["flysja", "to peel"],
      ["kerti", "candle"],
      ["lykt", "smell"],
      ["grannur", "thin, slim"],
      ["vaska upp", "to wash up"],
      ["afgangar", "leftovers"],
      ["í hljóði", "quietly, in silence"]
    ],
    qs: [
      { q: "What does the grandmother always cook?", opts: ["Lamb with potatoes", "Fish soup", "Pizza"], a: "Lamb with potatoes" },
      { q: "What did Kári bring?", opts: ["A cake from the bakery", "A bottle of wine", "Nothing at all"], a: "A cake from the bakery" },
      { q: "What did the grandmother ask Anna?", opts: ["Whether she was too thin", "Where she was living", "Whether she liked her job"], a: "Whether she was too thin" },
      { q: "Where did the grandmother fall asleep?", opts: ["In her chair", "At the kitchen table", "On the bus home"], a: "In her chair" },
      { q: "What did Anna take home with her?", opts: ["The leftovers", "The candles", "Her brother"], a: "The leftovers" }
    ]
  },

  {
    id: "r14",
    title: "Gönguferð á Þingvöllum",
    en: "A walk at Þingvellir",
    level: "A2",
    unit: 12,
    minutes: 5,
    text: [
      { is: "Í september fóru Anna og Jónas til Þingvalla.", en: "In September Anna and Jónas went to Þingvellir." },
      { is: "Þau lögðu bílnum á stóra bílastæðinu og gengu niður í gjána.", en: "They parked the car in the big car park and walked down into the ravine." },
      { is: "Almannagjá er löng og djúp og veggirnir eru úr svörtu grjóti.", en: "Almannagjá is long and deep and its walls are of black rock." },
      { is: "Jónas útskýrði að þarna mættust tveir jarðflekar.", en: "Jónas explained that two tectonic plates meet there." },
      { is: "Anna vissi það ekki áður.", en: "Anna had not known that before." },
      { is: "Þau gengu eftir stígnum og lásu skiltin.", en: "They walked along the path and read the signs." },
      { is: "Vatnið var kyrrt og fjöllin spegluðust í því.", en: "The lake was still and the mountains were reflected in it." },
      { is: "Þau settust á stein og borðuðu nesti.", en: "They sat down on a rock and ate their packed lunch." },
      { is: "Jónas hellti kaffi í tvo bolla.", en: "Jónas poured coffee into two cups." },
      { is: "Vindurinn var kaldur en sólin skein.", en: "The wind was cold but the sun was shining." },
      { is: "Anna spurði af hverju staðurinn væri svona mikilvægur.", en: "Anna asked why the place was so important." },
      { is: "Jónas sagði henni frá gamla þinginu sem starfaði þarna í mörg hundruð ár.", en: "Jónas told her about the old parliament that worked there for many hundreds of years." },
      { is: "Á leiðinni til baka sáu þau hóp af ferðamönnum í appelsínugulum úlpum.", en: "On the way back they saw a group of tourists in orange jackets." },
      { is: "Einn þeirra spurði hvar lundarnir væru.", en: "One of them asked where the puffins were." },
      { is: "Anna sagði að þeir væru farnir út á haf.", en: "Anna said they had gone out to sea." },
      { is: "Á heimleiðinni sofnaði hún í bílnum.", en: "On the way home she fell asleep in the car." },
      { is: "Jónas keyrði hægt og hlustaði á útvarpið.", en: "Jónas drove slowly and listened to the radio." }
    ],
    glossary: [
      ["gjá", "ravine, rift"],
      ["grjót", "rock, stone"],
      ["jarðfleki", "tectonic plate"],
      ["stígur", "path"],
      ["skilti", "sign"],
      ["speglast", "to be reflected"],
      ["nesti", "packed food"],
      ["heimleið", "the way home"]
    ],
    qs: [
      { q: "How did they get down into Almannagjá?", opts: ["They walked down from the car park", "They took a boat", "They climbed a rope"], a: "They walked down from the car park" },
      { q: "What did Jónas explain about the place?", opts: ["Two tectonic plates meet there", "It is the highest point in Iceland", "It is a bird reserve"], a: "Two tectonic plates meet there" },
      { q: "What was the weather like?", opts: ["Cold wind but sunshine", "Heavy rain", "Thick fog"], a: "Cold wind but sunshine" },
      { q: "What did one of the tourists want to know?", opts: ["Where the puffins were", "Where the toilets were", "How deep the lake was"], a: "Where the puffins were" },
      { q: "What did Anna do on the drive home?", opts: ["She fell asleep", "She drove", "She read the signs again"], a: "She fell asleep" }
    ]
  },

  {
    id: "r15",
    title: "Óveðrið",
    en: "The storm",
    level: "A2",
    unit: 13,
    minutes: 5,
    text: [
      { is: "Í janúar kom óveður yfir landið.", en: "In January a storm came over the country." },
      { is: "Veðurstofan gaf út appelsínugula viðvörun.", en: "The Met Office issued an orange warning." },
      { is: "Sóley fór snemma heim úr bakaríinu.", en: "Sóley went home early from the bakery." },
      { is: "Vindurinn var svo sterkur að hún gat varla opnað hurðina.", en: "The wind was so strong that she could barely open the door." },
      { is: "Þakplötur fuku af húsum í hverfinu.", en: "Roof panels blew off houses in the neighbourhood." },
      { is: "Rafmagnið fór klukkan níu um kvöldið.", en: "The power went out at nine in the evening." },
      { is: "Sóley kveikti á kertum og fann gamalt teppi.", en: "Sóley lit some candles and found an old blanket." },
      { is: "Hún sat í sófanum og hlustaði á vindinn.", en: "She sat on the sofa and listened to the wind." },
      { is: "Snjórinn þyrlaðist upp fyrir utan gluggann.", en: "The snow whirled up outside the window." },
      { is: "Jónas hringdi og spurði hvort allt væri í lagi hjá henni.", en: "Jónas rang and asked whether everything was all right at her place." },
      { is: "Hún sagði að hún hefði nóg af kertum og kexi.", en: "She said she had plenty of candles and biscuits." },
      { is: "Um miðnætti hætti vindurinn skyndilega.", en: "Around midnight the wind suddenly stopped." },
      { is: "Um morguninn var allt hvítt og hljótt.", en: "In the morning everything was white and silent." },
      { is: "Tré hafði fallið á bílinn hennar.", en: "A tree had fallen on her car." },
      { is: "En rúðurnar voru heilar og hún varð fegin.", en: "But the windows were intact and she was relieved." },
      { is: "Nágrannar hjálpuðust að við að moka snjó af götunni.", en: "Neighbours helped each other clear snow off the street." },
      { is: "Lúlli sat á tröppunum og virtist alveg rólegur.", en: "Lúlli sat on the steps and seemed completely calm." }
    ],
    glossary: [
      ["óveður", "storm"],
      ["viðvörun", "warning"],
      ["fjúka", "to blow away"],
      ["rafmagn", "electricity"],
      ["teppi", "blanket"],
      ["rúða", "window pane"],
      ["feginn", "relieved, glad"],
      ["moka", "to shovel"]
    ],
    qs: [
      { q: "What did the Met Office issue?", opts: ["An orange warning", "A red warning", "A snow forecast only"], a: "An orange warning" },
      { q: "What happened at nine in the evening?", opts: ["The power went out", "The wind stopped", "Jónas arrived"], a: "The power went out" },
      { q: "What did Sóley tell Jónas on the phone?", opts: ["She had plenty of candles and biscuits", "She was afraid and wanted help", "She had lost her keys"], a: "She had plenty of candles and biscuits" },
      { q: "What did she find in the morning?", opts: ["A tree on her car", "Her roof gone", "Her car missing"], a: "A tree on her car" },
      { q: "What were the neighbours doing?", opts: ["Shovelling snow together", "Repairing roofs", "Waiting for the bus"], a: "Shovelling snow together" }
    ]
  },

  {
    id: "r16",
    title: "Íbúðin á þriðju hæð",
    en: "The flat on the third floor",
    level: "A2",
    unit: 14,
    minutes: 5,
    text: [
      { is: "Anna leitaði að nýrri íbúð í allt haust.", en: "Anna looked for a new flat all autumn." },
      { is: "Í október sá hún auglýsingu um litla íbúð í Vesturbænum.", en: "In October she saw an advert for a small flat in the west of town." },
      { is: "Hún hringdi strax og fékk að skoða hana um kvöldið.", en: "She rang at once and got to view it that evening." },
      { is: "Íbúðin var á þriðju hæð og lyftan var biluð.", en: "The flat was on the third floor and the lift was broken." },
      { is: "Anna gekk upp stigann og var móð þegar hún kom upp.", en: "Anna walked up the stairs and was out of breath when she got up." },
      { is: "Leigusalinn opnaði og bauð henni inn.", en: "The landlord opened the door and invited her in." },
      { is: "Eldhúsið var lítið en gluggarnir sneru í suður.", en: "The kitchen was small but the windows faced south." },
      { is: "Í stofunni var gamalt parket og hvítir veggir.", en: "In the living room there was an old wooden floor and white walls." },
      { is: "Baðherbergið var nýtt en þar var engin þvottavél.", en: "The bathroom was new but there was no washing machine." },
      { is: "Anna spurði hversu há leigan væri.", en: "Anna asked how high the rent was." },
      { is: "Leigusalinn nefndi tölu sem henni fannst allt of há.", en: "The landlord named a figure that she found far too high." },
      { is: "Hún þakkaði fyrir sig og gekk niður stigann.", en: "She thanked him and walked back down the stairs." },
      { is: "Hún hugsaði um íbúðina alla leiðina heim.", en: "She thought about the flat all the way home." },
      { is: "Um nóttina dreymdi hana um stóra íbúð með svölum.", en: "During the night she dreamed about a big flat with a balcony." },
      { is: "Daginn eftir hringdi hún aftur en þá var búið að leigja hana.", en: "The next day she rang again but by then it had been rented out." },
      { is: "Anna varð svekkt en Jónas sagði að fleiri íbúðir kæmu í vor.", en: "Anna was disappointed but Jónas said more flats would come in the spring." },
      { is: "Hún leitar enn.", en: "She is still looking." }
    ],
    glossary: [
      ["íbúð", "flat, apartment"],
      ["auglýsing", "advertisement"],
      ["lyfta", "lift, elevator"],
      ["bilaður", "broken, out of order"],
      ["leigusali", "landlord"],
      ["leiga", "rent"],
      ["svalir", "balcony"],
      ["svekktur", "disappointed"]
    ],
    qs: [
      { q: "Why did Anna have to walk up the stairs?", opts: ["The lift was broken", "There was no lift", "She wanted the exercise"], a: "The lift was broken" },
      { q: "What was missing from the bathroom?", opts: ["A washing machine", "A window", "A shower"], a: "A washing machine" },
      { q: "What did she think of the rent?", opts: ["Far too high", "Very reasonable", "Lower than expected"], a: "Far too high" },
      { q: "What did she dream about?", opts: ["A big flat with a balcony", "Losing her keys", "Her old flat"], a: "A big flat with a balcony" },
      { q: "What happened when she rang the next day?", opts: ["The flat had already been rented", "The landlord lowered the price", "Nobody answered"], a: "The flat had already been rented" }
    ]
  },

  {
    id: "r17",
    title: "Atvinnuviðtalið",
    en: "The job interview",
    level: "A2",
    unit: 14,
    minutes: 5,
    text: [
      { is: "Sóley vann í bakaríinu í tvö ár.", en: "Sóley worked in the bakery for two years." },
      { is: "Í fyrra sótti hún um starf á kaffihúsi í miðbænum.", en: "Last year she applied for a job at a café downtown." },
      { is: "Hún skrifaði ferilskrá og bað Önnu um að lesa hana yfir.", en: "She wrote a CV and asked Anna to read it through." },
      { is: "Viðtalið var á fimmtudegi klukkan tíu.", en: "The interview was on a Thursday at ten." },
      { is: "Sóley var stressuð og kom hálftíma of snemma.", en: "Sóley was nervous and arrived half an hour too early." },
      { is: "Hún sat á bekk fyrir utan og æfði svörin sín í huganum.", en: "She sat on a bench outside and practised her answers in her head." },
      { is: "Konan sem tók á móti henni hét Guðrún.", en: "The woman who received her was called Guðrún." },
      { is: "Guðrún spurði hvers vegna hún vildi skipta um vinnu.", en: "Guðrún asked why she wanted to change jobs." },
      { is: "Sóley sagði að hana langaði að læra meira um kaffi.", en: "Sóley said that she wanted to learn more about coffee." },
      { is: "Hún talaði líka um hvernig hún bakaði á hverjum morgni klukkan fimm.", en: "She also talked about how she baked every morning at five." },
      { is: "Guðrún kinkaði kolli og skrifaði eitthvað niður.", en: "Guðrún nodded and wrote something down." },
      { is: "Svo spurði hún hvort Sóley gæti byrjað í næstu viku.", en: "Then she asked whether Sóley could start next week." },
      { is: "Sóley varð svo glöð að hún gleymdi að spyrja um launin.", en: "Sóley was so happy that she forgot to ask about the pay." },
      { is: "Hún hringdi í mömmu sína úti á götu.", en: "She rang her mother out in the street." },
      { is: "Á leiðinni heim keypti hún köku handa Önnu.", en: "On the way home she bought a cake for Anna." },
      { is: "Núna vinnur hún bæði á kaffihúsinu og stundum í bakaríinu um helgar.", en: "Now she works both at the café and sometimes at the bakery at weekends." }
    ],
    glossary: [
      ["atvinnuviðtal", "job interview"],
      ["sækja um", "to apply for"],
      ["ferilskrá", "CV, résumé"],
      ["stressaður", "nervous, stressed"],
      ["skipta um", "to change (to another)"],
      ["kinka kolli", "to nod"],
      ["laun", "wages, pay"],
      ["handa", "for (someone's benefit)"]
    ],
    qs: [
      { q: "How long had Sóley worked at the bakery?", opts: ["Two years", "Two months", "Six years"], a: "Two years" },
      { q: "Who read her CV?", opts: ["Anna", "Guðrún", "Her mother"], a: "Anna" },
      { q: "How early did she arrive for the interview?", opts: ["Half an hour", "Ten minutes", "A whole hour"], a: "Half an hour" },
      { q: "What reason did she give for changing jobs?", opts: ["She wanted to learn more about coffee", "The bakery paid badly", "She disliked getting up early"], a: "She wanted to learn more about coffee" },
      { q: "What did she forget to ask about?", opts: ["The pay", "The hours", "The uniform"], a: "The pay" }
    ]
  },

  {
    id: "r18",
    title: "Gangan sem fór úrskeiðis",
    en: "The hike that went wrong",
    level: "A2",
    unit: 15,
    minutes: 5,
    text: [
      { is: "Síðasta sumar ætluðu Anna og Jónas að ganga á Esjuna.", en: "Last summer Anna and Jónas planned to climb Esja." },
      { is: "Þau lögðu af stað klukkan níu í góðu veðri.", en: "They set off at nine in good weather." },
      { is: "Anna var í nýjum gönguskóm sem hún hafði keypt daginn áður.", en: "Anna was wearing new hiking boots that she had bought the day before." },
      { is: "Það voru mistök.", en: "That was a mistake." },
      { is: "Eftir klukkutíma var hún komin með blöðru á hælnum.", en: "After an hour she had a blister on her heel." },
      { is: "Þau settust á stein og Jónas fann plástur í bakpokanum.", en: "They sat down on a rock and Jónas found a plaster in his backpack." },
      { is: "Þokan kom óvænt neðan úr dalnum.", en: "The fog came unexpectedly up from the valley." },
      { is: "Allt í einu sáu þau ekki stíginn lengur.", en: "All at once they could no longer see the path." },
      { is: "Jónas tók upp símann en það var ekkert samband.", en: "Jónas took out his phone but there was no signal." },
      { is: "Þeim var kalt og Anna var svöng.", en: "They were cold and Anna was hungry." },
      { is: "Þau ákváðu að bíða frekar en að ganga áfram.", en: "They decided to wait rather than walk on." },
      { is: "Þau sátu undir stórum steini í tuttugu mínútur.", en: "They sat under a large rock for twenty minutes." },
      { is: "Svo lyftist þokan jafn hratt og hún hafði komið.", en: "Then the fog lifted as fast as it had come." },
      { is: "Þau sáu bæinn fyrir neðan sig og fundu stíginn aftur.", en: "They saw the town below them and found the path again." },
      { is: "Niðurleiðin tók lengri tíma en uppgangan.", en: "The way down took longer than the climb up." },
      { is: "Þegar þau komu heim var Anna með tvær blöðrur og eina sögu.", en: "When they got home Anna had two blisters and one story." },
      { is: "Hún segir söguna enn í dag.", en: "She still tells that story today." }
    ],
    glossary: [
      ["fara úrskeiðis", "to go wrong"],
      ["gönguskór", "hiking boots"],
      ["mistök", "a mistake"],
      ["blaðra", "blister"],
      ["plástur", "plaster, band-aid"],
      ["þoka", "fog"],
      ["samband", "connection, signal"],
      ["niðurleið", "the way down"]
    ],
    qs: [
      { q: "What was Anna's mistake?", opts: ["Wearing brand-new boots", "Forgetting her jacket", "Starting too late"], a: "Wearing brand-new boots" },
      { q: "What came up from the valley?", opts: ["Fog", "Rain", "A group of tourists"], a: "Fog" },
      { q: "Why could they not call for help?", opts: ["There was no phone signal", "The phone was flat", "They had left the phone at home"], a: "There was no phone signal" },
      { q: "What did they decide to do?", opts: ["Wait where they were", "Keep walking upwards", "Split up and search"], a: "Wait where they were" },
      { q: "How did the day end?", opts: ["They found the path and walked down", "They were rescued by helicopter", "They spent the night on the mountain"], a: "They found the path and walked down" }
    ]
  },

  {
    id: "r19",
    title: "Jólin hjá Önnu",
    en: "Christmas at Anna's",
    level: "A2",
    unit: 15,
    minutes: 5,
    text: [
      { is: "Jólin byrja klukkan sex á aðfangadag hjá fjölskyldu Önnu.", en: "Christmas begins at six o'clock on Christmas Eve in Anna's family." },
      { is: "Þá hringja kirkjuklukkurnar í útvarpinu og allir setjast við borðið.", en: "Then the church bells ring on the radio and everyone sits down at the table." },
      { is: "Í desember bakar amma hennar laufabrauð eins og hún hefur alltaf gert.", en: "In December her grandmother bakes leaf bread as she has always done." },
      { is: "Anna og bróðir hennar skera mynstur í deigið með litlum hnífi.", en: "Anna and her brother cut patterns into the dough with a small knife." },
      { is: "Í fyrra brenndi Kári eitt laufabrauð en enginn sagði neitt.", en: "Last year Kári burnt one leaf bread but nobody said anything." },
      { is: "Á Þorláksmessu borðar pabbi skötu og húsið lyktar illa í tvo daga.", en: "On the twenty-third her father eats skate and the house smells bad for two days." },
      { is: "Anna borðar hana ekki.", en: "Anna does not eat it." },
      { is: "Á aðfangadagskvöld fá allir bók í jólagjöf.", en: "On Christmas Eve everyone gets a book as a present." },
      { is: "Eftir matinn liggja allir í sófanum og lesa.", en: "After the meal everyone lies on the sofa and reads." },
      { is: "Þetta er íslensk hefð sem heitir jólabókaflóð.", en: "This is an Icelandic tradition called the Christmas book flood." },
      { is: "Í fyrra fékk Anna þykka bók um íslenska sögu.", en: "Last year Anna got a thick book about Icelandic history." },
      { is: "Hún las hana á þremur kvöldum.", en: "She read it over three evenings." },
      { is: "Jónas kom í heimsókn á jóladag með smákökur.", en: "Jónas came to visit on Christmas Day with biscuits." },
      { is: "Þau spiluðu á spil fram á nótt.", en: "They played cards well into the night." },
      { is: "Anna segir að desember sé besti mánuðurinn þrátt fyrir myrkrið.", en: "Anna says December is the best month in spite of the darkness." },
      { is: "Amma segir að janúar sé verstur.", en: "Grandmother says January is the worst." }
    ],
    glossary: [
      ["aðfangadagur", "Christmas Eve"],
      ["laufabrauð", "leaf bread"],
      ["deig", "dough"],
      ["Þorláksmessa", "23 December"],
      ["skata", "skate (fish)"],
      ["jólabókaflóð", "the Christmas book flood"],
      ["hefð", "tradition"],
      ["þrátt fyrir", "in spite of"]
    ],
    qs: [
      { q: "When does Christmas begin for Anna's family?", opts: ["At six on Christmas Eve", "At midnight", "On Christmas morning"], a: "At six on Christmas Eve" },
      { q: "What do Anna and her brother do with the dough?", opts: ["Cut patterns into it", "Roll it into balls", "Freeze it"], a: "Cut patterns into it" },
      { q: "What does her father eat on 23 December?", opts: ["Skate", "Lamb", "Herring"], a: "Skate" },
      { q: "What is the jólabókaflóð?", opts: ["Everyone gets a book and reads it", "A church service", "A market in the town square"], a: "Everyone gets a book and reads it" },
      { q: "What does the grandmother think of January?", opts: ["It is the worst month", "It is the best month", "It is her favourite for reading"], a: "It is the worst month" }
    ]
  },

  {
    id: "r20",
    title: "Nóttin með norðurljósunum",
    en: "The night of the northern lights",
    level: "A2",
    unit: 16,
    minutes: 5,
    text: [
      { is: "Í mars sendi Jónas Önnu skilaboð um miðnætti.", en: "In March Jónas sent Anna a message around midnight." },
      { is: "Hann skrifaði að himinninn væri grænn.", en: "He wrote that the sky was green." },
      { is: "Anna var þegar komin í rúmið en hún klæddi sig í flýti.", en: "Anna had already gone to bed but she got dressed in a hurry." },
      { is: "Þau keyrðu út fyrir borgina þar sem engin ljós trufluðu.", en: "They drove out of the city where no lights got in the way." },
      { is: "Það var frost og stjörnurnar voru skýrar.", en: "There was a frost and the stars were clear." },
      { is: "Fyrst sáu þau bara daufa slæðu yfir fjallinu.", en: "At first they saw only a faint veil above the mountain." },
      { is: "Svo varð hún sterkari og teygði sig yfir allan himininn.", en: "Then it grew stronger and stretched across the whole sky." },
      { is: "Ljósin hreyfðust hægt eins og gardína í vindi.", en: "The lights moved slowly like a curtain in the wind." },
      { is: "Anna reyndi að taka mynd en síminn hennar réð ekki við myrkrið.", en: "Anna tried to take a photo but her phone could not cope with the darkness." },
      { is: "Jónas sagði henni að slökkva á símanum og horfa bara.", en: "Jónas told her to switch the phone off and just watch." },
      { is: "Þau stóðu þögul í tuttugu mínútur.", en: "They stood in silence for twenty minutes." },
      { is: "Anna fann hvað henni var orðið kalt en hún vildi ekki fara.", en: "Anna felt how cold she had got but she did not want to leave." },
      { is: "Á leiðinni heim töluðu þau lítið.", en: "On the way home they said little." },
      { is: "Amma hennar segir að ljósin séu sálir gamalla manna.", en: "Her grandmother says the lights are the souls of old men." },
      { is: "Anna trúir því ekki en henni finnst hugmyndin falleg.", en: "Anna does not believe that, but she finds the idea beautiful." },
      { is: "Þegar hún kom heim var klukkan orðin þrjú.", en: "When she got home it was three o'clock." },
      { is: "Hún svaf til hádegis daginn eftir.", en: "She slept until noon the next day." }
    ],
    glossary: [
      ["norðurljós", "northern lights"],
      ["skilaboð", "message"],
      ["í flýti", "in a hurry"],
      ["trufla", "to disturb, get in the way"],
      ["slæða", "veil"],
      ["gardína", "curtain"],
      ["ráða við", "to cope with"],
      ["sál", "soul"]
    ],
    qs: [
      { q: "How did Anna hear about the lights?", opts: ["Jónas sent her a message", "She saw them from her window", "Her grandmother rang"], a: "Jónas sent her a message" },
      { q: "Why did they drive out of the city?", opts: ["To get away from the city lights", "To reach a mountain hut", "To pick up Sóley"], a: "To get away from the city lights" },
      { q: "What happened when Anna tried to photograph the lights?", opts: ["Her phone could not cope with the dark", "The lights disappeared", "The phone battery died"], a: "Her phone could not cope with the dark" },
      { q: "What does Anna's grandmother say the lights are?", opts: ["The souls of old men", "A warning of bad weather", "Reflections off the snow"], a: "The souls of old men" },
      { q: "What time did Anna get home?", opts: ["Three o'clock", "Midnight", "Noon"], a: "Three o'clock" }
    ]
  }
];

export default readings;
