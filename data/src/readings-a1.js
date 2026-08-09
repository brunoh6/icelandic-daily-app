// data/src/readings-a1.js — A1 readings (units 1–8), merged into data/readings.js by tools/build.js
// All Icelandic text is original writing for Lundi.

export const readings = [

  {
    id: "r01",
    title: "Halló, ég heiti Anna",
    en: "Hello, my name is Anna",
    level: "A1",
    unit: 1,
    minutes: 3,
    text: [
      { is: "Halló! Ég heiti Anna.", en: "Hello! My name is Anna." },
      { is: "Ég er nemandi og ég bý í Reykjavík.", en: "I am a student and I live in Reykjavík." },
      { is: "Þetta er Jónas.", en: "This is Jónas." },
      { is: "Hann er kennari og hann er frá Akureyri.", en: "He is a teacher and he is from Akureyri." },
      { is: "Jónas talar hratt.", en: "Jónas talks fast." },
      { is: "Ég tala hægt, en ég skil hann vel.", en: "I talk slowly, but I understand him well." },
      { is: "Hér er líka lundi.", en: "There is a puffin here too." },
      { is: "Hann heitir Lúlli.", en: "He is called Lúlli." },
      { is: "Lúlli er fugl og hann talar ekki.", en: "Lúlli is a bird and he does not talk." },
      { is: "En Lúlli er alltaf hér.", en: "But Lúlli is always here." },
      { is: "Nú segi ég: “Bless, bless!”", en: "Now I say: “Bye bye!”" }
    ],
    glossary: [
      ["heita", "to be called"],
      ["nemandi", "student"],
      ["búa", "to live"],
      ["kennari", "teacher"],
      ["hratt", "fast"],
      ["hægt", "slowly"],
      ["skilja", "to understand"],
      ["líka", "also"],
      ["lundi", "puffin"],
      ["fugl", "bird"],
      ["alltaf", "always"],
      ["nú", "now"],
      ["bless", "bye"]
    ],
    qs: [
      { q: "What does Anna do?", opts: ["She is a student", "She is a teacher", "She is a doctor", "She is a driver"], a: "She is a student" },
      { q: "Where is Jónas from?", opts: ["Akureyri", "Reykjavík", "Denmark"], a: "Akureyri" },
      { q: "How does Anna speak Icelandic?", opts: ["Slowly", "Fast", "Not at all"], a: "Slowly" },
      { q: "What is Lúlli?", opts: ["A bird", "A teacher", "A student", "A city"], a: "A bird" }
    ]
  },

  {
    id: "r02",
    title: "Nemendurnir í skólanum",
    en: "The students at the school",
    level: "A1",
    unit: 2,
    minutes: 4,
    text: [
      { is: "Anna er nemandi í Háskóla Íslands.", en: "Anna is a student at the University of Iceland." },
      { is: "Hún lærir íslensku.", en: "She is learning Icelandic." },
      { is: "Nemendurnir eru frá Póllandi, Frakklandi og Kanada.", en: "The students are from Poland, France and Canada." },
      { is: "Pólverjinn heitir Marek.", en: "The Pole is called Marek." },
      { is: "Hann er læknir og vinnur á spítala.", en: "He is a doctor and works at a hospital." },
      { is: "Franska konan heitir Chloé.", en: "The French woman is called Chloé." },
      { is: "Hún er kokkur og talar fjögur tungumál.", en: "She is a cook and speaks four languages." },
      { is: "Jónas kennir í skólanum.", en: "Jónas teaches at the school." },
      { is: "Hann talar íslensku, dönsku og ensku.", en: "He speaks Icelandic, Danish and English." },
      { is: "Anna skilur ekki allt.", en: "Anna does not understand everything." },
      { is: "En hún lærir mikið á hverjum degi.", en: "But she learns a lot every day." },
      { is: "Lúlli situr úti og hlustar.", en: "Lúlli sits outside and listens." }
    ],
    glossary: [
      ["háskóli", "university"],
      ["læra", "to learn, study"],
      ["land", "country"],
      ["spítali", "hospital"],
      ["læknir", "doctor"],
      ["kokkur", "cook"],
      ["tungumál", "language"],
      ["kenna", "to teach"],
      ["danska", "Danish"],
      ["allt", "everything"],
      ["á hverjum degi", "every day"],
      ["hlusta", "to listen"],
      ["úti", "outside"]
    ],
    qs: [
      { q: "What is Anna studying?", opts: ["Icelandic", "Danish", "Medicine", "French"], a: "Icelandic" },
      { q: "Where does Marek work?", opts: ["At a hospital", "At a school", "In a shop"], a: "At a hospital" },
      { q: "How many languages does Chloé speak?", opts: ["Four", "Two", "Three"], a: "Four" },
      { q: "What does Lúlli do?", opts: ["He sits outside and listens", "He teaches Danish", "He works at the hospital"], a: "He sits outside and listens" }
    ]
  },

  {
    id: "r03",
    title: "Vikan hjá Önnu",
    en: "Anna's week",
    level: "A1",
    unit: 3,
    minutes: 4,
    text: [
      { is: "Anna vaknar snemma á mánudögum.", en: "Anna wakes up early on Mondays." },
      { is: "Vekjaraklukkan hringir klukkan sjö.", en: "The alarm clock rings at seven o'clock." },
      { is: "Skólinn byrjar klukkan átta.", en: "School starts at eight." },
      { is: "Hún borðar morgunmat klukkan hálf átta.", en: "She eats breakfast at half past seven." },
      { is: "Klukkan tíu hittir hún Jónas á kaffihúsi.", en: "At ten she meets Jónas at a café." },
      { is: "Þau tala saman í hálftíma.", en: "They talk together for half an hour." },
      { is: "Á miðvikudögum fer Anna í sund.", en: "On Wednesdays Anna goes swimming." },
      { is: "Sundlaugin er opin frá klukkan sex á morgnana.", en: "The swimming pool is open from six in the mornings." },
      { is: "Um helgar vaknar Anna seint.", en: "At weekends Anna wakes up late." },
      { is: "Hún sefur til klukkan ellefu.", en: "She sleeps until eleven." },
      { is: "Á sunnudögum borðar hún hádegismat með Jónasi.", en: "On Sundays she has lunch with Jónas." },
      { is: "Lúlli bíður alltaf fyrir utan.", en: "Lúlli is always waiting outside." }
    ],
    glossary: [
      ["vakna", "to wake up"],
      ["snemma", "early"],
      ["vekjaraklukka", "alarm clock"],
      ["byrja", "to begin"],
      ["hálf átta", "half past seven"],
      ["hitta", "to meet"],
      ["hálftími", "half an hour"],
      ["sund", "swimming"],
      ["opinn", "open"],
      ["um helgar", "at weekends"],
      ["seint", "late"],
      ["sofa", "to sleep"],
      ["bíða", "to wait"],
      ["fyrir utan", "outside"]
    ],
    qs: [
      { q: "When does school start?", opts: ["At eight", "At seven", "At ten", "At half past seven"], a: "At eight" },
      { q: "Where does Anna meet Jónas at ten?", opts: ["At a café", "At the pool", "At school"], a: "At a café" },
      { q: "What does Anna do on Wednesdays?", opts: ["She goes swimming", "She sleeps late", "She works at a café"], a: "She goes swimming" },
      { q: "Until what time does Anna sleep at weekends?", opts: ["Eleven", "Eight", "Six"], a: "Eleven" }
    ]
  },

  {
    id: "r04",
    title: "Hvert fer strætó?",
    en: "Where does the bus go?",
    level: "A1",
    unit: 4,
    minutes: 4,
    text: [
      { is: "Anna stendur á stoppistöð í miðbænum.", en: "Anna is standing at a bus stop in the town centre." },
      { is: "Hún bíður eftir strætó.", en: "She is waiting for the bus." },
      { is: "Strætó kemur klukkan þrjú.", en: "The bus comes at three o'clock." },
      { is: "“Fyrirgefðu, hvert fer strætó?” spyr hún bílstjórann.", en: "“Excuse me, where does the bus go?” she asks the driver." },
      { is: "“Hann fer að sundlauginni og svo að háskólanum,” segir bílstjórinn.", en: "“It goes to the swimming pool and then to the university,” says the driver." },
      { is: "Anna kaupir miða.", en: "Anna buys a ticket." },
      { is: "Strætó keyrir beint áfram og beygir svo til hægri.", en: "The bus drives straight ahead and then turns right." },
      { is: "Við kirkjuna stoppar hann.", en: "It stops by the church." },
      { is: "Anna fer út og gengur til vinstri.", en: "Anna gets out and walks to the left." },
      { is: "Bakaríið er á horninu.", en: "The bakery is on the corner." },
      { is: "Sóley vinnur þar og Anna heilsar henni.", en: "Sóley works there and Anna says hello to her." },
      { is: "Lúlli situr á bekk fyrir framan bakaríið.", en: "Lúlli is sitting on a bench in front of the bakery." }
    ],
    glossary: [
      ["stoppistöð", "bus stop"],
      ["miðbær", "town centre"],
      ["bíða eftir", "to wait for"],
      ["hvert", "where to"],
      ["bílstjóri", "driver"],
      ["miði", "ticket"],
      ["beint áfram", "straight ahead"],
      ["beygja", "to turn"],
      ["til hægri", "to the right"],
      ["kirkja", "church"],
      ["til vinstri", "to the left"],
      ["horn", "corner"],
      ["heilsa", "to greet"],
      ["bekkur", "bench"]
    ],
    qs: [
      { q: "What is Anna waiting for?", opts: ["A bus", "A taxi", "A bike", "A plane"], a: "A bus" },
      { q: "What does Anna buy?", opts: ["A ticket", "Bread", "A map"], a: "A ticket" },
      { q: "Where does the bus stop?", opts: ["By the church", "At the airport", "At the harbour"], a: "By the church" },
      { q: "Who works at the bakery?", opts: ["Sóley", "Jónas", "The driver"], a: "Sóley" }
    ]
  },

  {
    id: "r05",
    title: "Morgunn í bakaríinu",
    en: "A morning at the bakery",
    level: "A1",
    unit: 5,
    minutes: 4,
    text: [
      { is: "Sóley vinnur í bakaríi á Laugavegi.", en: "Sóley works at a bakery on Laugavegur." },
      { is: "Hún byrjar að vinna klukkan sex.", en: "She starts work at six o'clock." },
      { is: "Á morgnana bakar hún brauð og snúða.", en: "In the mornings she bakes bread and cinnamon rolls." },
      { is: "Kaffið er alltaf heitt og brauðið er nýtt.", en: "The coffee is always hot and the bread is fresh." },
      { is: "Anna kemur inn klukkan hálf níu.", en: "Anna comes in at half past eight." },
      { is: "“Góðan daginn! Hvað kostar snúður?” spyr hún.", en: "“Good day! What does a cinnamon roll cost?” she asks." },
      { is: "“Fjögur hundruð og fimmtíu krónur,” svarar Sóley.", en: "“Four hundred and fifty krónur,” Sóley answers." },
      { is: "Anna ætlar að fá tvo snúða og eitt kaffi.", en: "Anna would like two cinnamon rolls and one coffee." },
      { is: "Hún borgar með korti.", en: "She pays by card." },
      { is: "Sóley setur snúðana í poka.", en: "Sóley puts the cinnamon rolls in a bag." },
      { is: "Þá kemur lundi inn um dyrnar.", en: "Then a puffin comes in through the door." },
      { is: "Sóley hlær og segir: “Þetta er Lúlli. Hann vill alltaf brauð.”", en: "Sóley laughs and says: “That is Lúlli. He always wants bread.”" }
    ],
    glossary: [
      ["bakarí", "bakery"],
      ["baka", "to bake"],
      ["snúður", "cinnamon roll"],
      ["nýr", "new, fresh"],
      ["kosta", "to cost"],
      ["króna", "króna"],
      ["svara", "to answer"],
      ["ætla að fá", "to be going to have"],
      ["borga", "to pay"],
      ["kort", "card"],
      ["poki", "bag"],
      ["dyr", "door"],
      ["hlæja", "to laugh"],
      ["vilja", "to want"]
    ],
    qs: [
      { q: "What time does Sóley start work?", opts: ["At six", "At eight", "At nine", "At half past eight"], a: "At six" },
      { q: "What does one cinnamon roll cost?", opts: ["450 krónur", "150 krónur", "900 krónur"], a: "450 krónur" },
      { q: "How does Anna pay?", opts: ["By card", "With cash", "She does not pay"], a: "By card" },
      { q: "Who comes in through the door?", opts: ["A puffin", "Jónas", "A driver"], a: "A puffin" }
    ]
  },

  {
    id: "r06",
    title: "Ný lopapeysa",
    en: "A new woollen jumper",
    level: "A1",
    unit: 6,
    minutes: 4,
    text: [
      { is: "Það er kalt í dag.", en: "It is cold today." },
      { is: "Anna er í gamalli úlpu.", en: "Anna is wearing an old parka." },
      { is: "Hún fer í búð með Jónasi.", en: "She goes to a shop with Jónas." },
      { is: "Þar eru margar lopapeysur.", en: "There are many woollen jumpers there." },
      { is: "Anna mátar bláa peysu.", en: "Anna tries on a blue jumper." },
      { is: "Peysan er falleg en hún er of stór.", en: "The jumper is beautiful but it is too big." },
      { is: "Svo mátar hún græna peysu.", en: "Then she tries on a green jumper." },
      { is: "Hún passar vel.", en: "It fits well." },
      { is: "Peysan kostar tuttugu og fimm þúsund krónur.", en: "The jumper costs twenty-five thousand krónur." },
      { is: "Anna kaupir grænu peysuna.", en: "Anna buys the green jumper." },
      { is: "Hún er líka með rauða húfu og hvíta vettlinga.", en: "She also has a red hat and white mittens." },
      { is: "Jónas er í svörtum skóm.", en: "Jónas is wearing black shoes." },
      { is: "“Nú ertu alvöru Íslendingur,” segir hann og hlær.", en: "“Now you are a real Icelander,” he says and laughs." }
    ],
    glossary: [
      ["kaldur", "cold"],
      ["úlpa", "parka"],
      ["gamall", "old"],
      ["lopapeysa", "woollen jumper"],
      ["margir", "many"],
      ["máta", "to try on"],
      ["blár", "blue"],
      ["of", "too"],
      ["grænn", "green"],
      ["passa", "to fit"],
      ["húfa", "hat"],
      ["vettlingur", "mitten"],
      ["skór", "shoe"],
      ["alvöru", "real, genuine"]
    ],
    qs: [
      { q: "What is the weather like?", opts: ["Cold", "Hot", "Rainy"], a: "Cold" },
      { q: "Why does Anna not take the blue jumper?", opts: ["It is too big", "It is too small", "It is too cheap", "It is grey"], a: "It is too big" },
      { q: "What colour is Anna's hat?", opts: ["Red", "Green", "White", "Black"], a: "Red" },
      { q: "What is Jónas wearing on his feet?", opts: ["Black shoes", "White mittens", "Blue boots"], a: "Black shoes" }
    ]
  },

  {
    id: "r07",
    title: "Dagurinn hjá Jónasi",
    en: "Jónas's day",
    level: "A1",
    unit: 7,
    minutes: 4,
    text: [
      { is: "Jónas vaknar klukkan sex á morgnana.", en: "Jónas wakes up at six in the mornings." },
      { is: "Vekjaraklukkan hringir en hann er alltaf syfjaður.", en: "The alarm clock rings but he is always sleepy." },
      { is: "Hann fer á fætur og fer í sturtu.", en: "He gets up and takes a shower." },
      { is: "Svo burstar hann tennurnar.", en: "Then he brushes his teeth." },
      { is: "Hann þvær andlitið með köldu vatni.", en: "He washes his face with cold water." },
      { is: "Jónas eldar morgunmat og drekkur svart kaffi.", en: "Jónas cooks breakfast and drinks black coffee." },
      { is: "Klukkan sjö fer hann út og hjólar í skólann.", en: "At seven he goes out and cycles to school." },
      { is: "Hann kennir íslensku frá klukkan átta til klukkan tvö.", en: "He teaches Icelandic from eight until two." },
      { is: "Á leiðinni heim kaupir hann fisk.", en: "On the way home he buys fish." },
      { is: "Um kvöldið les hann bók eða horfir á sjónvarpið.", en: "In the evening he reads a book or watches television." },
      { is: "Hann háttar klukkan ellefu.", en: "He goes to bed at eleven." },
      { is: "Stundum sofnar hann með símann í hendinni.", en: "Sometimes he falls asleep holding his phone." }
    ],
    glossary: [
      ["syfjaður", "sleepy"],
      ["fara á fætur", "to get up"],
      ["sturta", "shower"],
      ["bursta", "to brush"],
      ["tönn", "tooth"],
      ["þvo", "to wash"],
      ["andlit", "face"],
      ["elda", "to cook"],
      ["hjóla", "to cycle"],
      ["á leiðinni", "on the way"],
      ["lesa", "to read"],
      ["horfa á", "to watch"],
      ["hátta", "to go to bed"],
      ["sofna", "to fall asleep"]
    ],
    qs: [
      { q: "When does Jónas wake up?", opts: ["At six", "At seven", "At eight", "At eleven"], a: "At six" },
      { q: "How does he get to school?", opts: ["By bike", "By bus", "On foot"], a: "By bike" },
      { q: "What does he buy on the way home?", opts: ["Fish", "Bread", "Coffee"], a: "Fish" },
      { q: "What does he sometimes do at night?", opts: ["He falls asleep holding his phone", "He cooks dinner", "He cycles to the pool"], a: "He falls asleep holding his phone" }
    ]
  },

  {
    id: "r08",
    title: "Laugardagur hjá Önnu",
    en: "Anna's Saturday",
    level: "A1",
    unit: 7,
    minutes: 4,
    text: [
      { is: "Á laugardögum vaknar Anna seint.", en: "On Saturdays Anna wakes up late." },
      { is: "Hún liggur lengi í rúminu.", en: "She lies in bed for a long time." },
      { is: "Svo eldar hún hafragraut í eldhúsinu.", en: "Then she cooks porridge in the kitchen." },
      { is: "Anna drekkur te en ekki kaffi.", en: "Anna drinks tea but not coffee." },
      { is: "Eftir hádegi fer hún í sund með Sóleyju.", en: "In the afternoon she goes swimming with Sóley." },
      { is: "Sundlaugin er heit en veðrið er kalt.", en: "The swimming pool is warm but the weather is cold." },
      { is: "Þær sitja lengi í heita pottinum.", en: "They sit in the hot tub for a long time." },
      { is: "Um kvöldið kemur Jónas í heimsókn.", en: "In the evening Jónas comes for a visit." },
      { is: "Þau borða saman og tala um daginn.", en: "They eat together and talk about the day." },
      { is: "Anna er þreytt en ánægð.", en: "Anna is tired but happy." },
      { is: "Klukkan tólf fer Jónas heim.", en: "At twelve Jónas goes home." },
      { is: "Lúlli situr enn á svölunum.", en: "Lúlli is still sitting on the balcony." }
    ],
    glossary: [
      ["laugardagur", "Saturday"],
      ["liggja", "to lie"],
      ["lengi", "for a long time"],
      ["rúm", "bed"],
      ["hafragrautur", "porridge"],
      ["eftir hádegi", "in the afternoon"],
      ["sund", "swimming"],
      ["heitur pottur", "hot tub"],
      ["heimsókn", "visit"],
      ["saman", "together"],
      ["þreyttur", "tired"],
      ["ánægður", "happy, pleased"],
      ["enn", "still"],
      ["svalir", "balcony"]
    ],
    qs: [
      { q: "When does Anna wake up on Saturdays?", opts: ["Late", "Early", "At six"], a: "Late" },
      { q: "What does Anna drink in the morning?", opts: ["Tea", "Coffee", "Milk", "Water"], a: "Tea" },
      { q: "Who does Anna go swimming with?", opts: ["Sóley", "Jónas", "Lúlli"], a: "Sóley" },
      { q: "Where is Lúlli in the evening?", opts: ["On the balcony", "In the pool", "In the kitchen"], a: "On the balcony" }
    ]
  },

  {
    id: "r09",
    title: "Hvar er lykillinn?",
    en: "Where is the key?",
    level: "A1",
    unit: 8,
    minutes: 5,
    text: [
      { is: "Anna finnur ekki lykilinn sinn.", en: "Anna cannot find her key." },
      { is: "Hann er ekki í vasanum og ekki í töskunni.", en: "It is not in her pocket and not in her bag." },
      { is: "Hún leitar í eldhúsinu.", en: "She looks in the kitchen." },
      { is: "Lykillinn er ekki á borðinu.", en: "The key is not on the table." },
      { is: "Hann er ekki undir stólnum.", en: "It is not under the chair." },
      { is: "Hann er ekki í skápnum.", en: "It is not in the cupboard." },
      { is: "Jónas kemur og hjálpar henni.", en: "Jónas comes and helps her." },
      { is: "Hann leitar undir teppinu á gólfinu.", en: "He looks under the rug on the floor." },
      { is: "Þar er ekkert.", en: "There is nothing there." },
      { is: "Þá sér Anna eitthvað fyrir utan gluggann.", en: "Then Anna sees something outside the window." },
      { is: "Lúlli situr á svölunum með lykilinn í nefinu.", en: "Lúlli is sitting on the balcony with the key in his beak." },
      { is: "Anna hlær og opnar gluggann.", en: "Anna laughs and opens the window." },
      { is: "“Takk fyrir hjálpina, Lúlli!”", en: "“Thanks for the help, Lúlli!”" }
    ],
    glossary: [
      ["lykill", "key"],
      ["vasi", "pocket"],
      ["taska", "bag"],
      ["leita", "to look for"],
      ["stóll", "chair"],
      ["skápur", "cupboard"],
      ["hjálpa", "to help"],
      ["teppi", "rug"],
      ["gólf", "floor"],
      ["ekkert", "nothing"],
      ["eitthvað", "something"],
      ["fyrir utan", "outside"],
      ["gluggi", "window"],
      ["nef", "beak, nose"]
    ],
    qs: [
      { q: "What is Anna looking for?", opts: ["Her key", "Her bag", "Her phone"], a: "Her key" },
      { q: "Who helps Anna?", opts: ["Jónas", "Sóley", "The driver", "A teacher"], a: "Jónas" },
      { q: "Where does Jónas look?", opts: ["Under the rug", "On the balcony", "In the bakery"], a: "Under the rug" },
      { q: "Where is the key in the end?", opts: ["In Lúlli's beak", "Under the chair", "In her pocket"], a: "In Lúlli's beak" }
    ]
  },

  {
    id: "r10",
    title: "Frá morgni til kvölds",
    en: "From morning to evening",
    level: "A1",
    unit: 8,
    minutes: 5,
    text: [
      { is: "Á sunnudögum fer Anna út klukkan tíu.", en: "On Sundays Anna goes out at ten." },
      { is: "Hún gengur frá húsinu sínu að sundlauginni.", en: "She walks from her house to the swimming pool." },
      { is: "Eftir sundið kaupir hún kaffi í bakaríinu hjá Sóleyju.", en: "After the swim she buys coffee at Sóley's bakery." },
      { is: "Hún situr við gluggann og horfir á fólkið úti.", en: "She sits by the window and watches the people outside." },
      { is: "Klukkan eitt fer hún með strætó niður í bæ.", en: "At one o'clock she takes the bus downtown." },
      { is: "Í miðbænum eru margir túristar.", en: "There are many tourists in the town centre." },
      { is: "Anna fer inn í búð og kaupir bók um Ísland.", en: "Anna goes into a shop and buys a book about Iceland." },
      { is: "Svo gengur hún meðfram höfninni.", en: "Then she walks along the harbour." },
      { is: "Vindurinn kemur af hafinu og Anna verður köld.", en: "The wind comes off the sea and Anna gets cold." },
      { is: "Fyrir framan safnið stendur maður með gítar.", en: "In front of the museum a man is standing with a guitar." },
      { is: "Anna hlustar á hann í nokkrar mínútur.", en: "Anna listens to him for a few minutes." },
      { is: "Klukkan fimm fer hún heim til sín.", en: "At five she goes home." },
      { is: "Lúlli flýgur yfir húsið og hverfur.", en: "Lúlli flies over the house and disappears." }
    ],
    glossary: [
      ["ganga", "to walk"],
      ["sundlaug", "swimming pool"],
      ["hjá", "at (someone's place)"],
      ["fólk", "people"],
      ["með strætó", "by bus"],
      ["niður í bæ", "downtown"],
      ["túristi", "tourist"],
      ["meðfram", "along"],
      ["höfn", "harbour"],
      ["haf", "sea"],
      ["safn", "museum"],
      ["gítar", "guitar"],
      ["hlusta á", "to listen to"],
      ["hverfa", "to disappear"]
    ],
    qs: [
      { q: "Where does Anna walk to first?", opts: ["The swimming pool", "The museum", "The harbour"], a: "The swimming pool" },
      { q: "What does she buy in the shop?", opts: ["A book about Iceland", "A jumper", "A ticket", "A guitar"], a: "A book about Iceland" },
      { q: "What is in front of the museum?", opts: ["A man with a guitar", "A bus", "A puffin"], a: "A man with a guitar" },
      { q: "What does Lúlli do at the end?", opts: ["He flies over the house", "He sits on the bench", "He goes into the shop"], a: "He flies over the house" }
    ]
  }

];

export default readings;
