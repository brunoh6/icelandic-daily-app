export const unit = {
  id: 13,
  slug: "u13",
  title: "Gisting og ferðalög",
  en: "Accommodation and travel",
  cefr: "A2.1",
  icon: "🧳",
  blurb: "Book a room, pack a bag and travel around Iceland in correct Icelandic.",
  canDo: [
    "Book a room and ask what is included in the price",
    "Say how long you are staying using í plus the accusative",
    "Build measure phrases like tveggja manna herbergi and þriggja daga ferð",
    "Compare with the dative: ári eldri, þremur vikum fyrir brottför"
  ],
  lessons: [
    {
      n: 1,
      id: "u13l1",
      kind: "lesson",
      title: "Í móttökunni",
      en: "At the reception desk",
      goal: "Ask for a room and say how many nights you are staying.",
      minutes: 9,
      icon: "🛎️",
      teach: [
        { h: "Where travellers sleep",
          p: "Iceland runs on three kinds of bed: the hotel, the guesthouse and the campsite. The first two share the same front-desk vocabulary, so learn it once.",
          table: { cols:["íslenska","English","kyn"],
                   rows:[["hótel","hotel","hk"],["gistihús","guesthouse","hk"],["gisting","accommodation","kvk"],
                         ["móttaka","reception","kvk"],["gestur","guest","kk"],["nótt","night","kvk"],
                         ["morgunmatur","breakfast","kk"]] },
          tip: "gisting ends in -ing, and every -ing noun in Icelandic is feminine." },
        { h: "Four sentences that get you a bed",
          p: "You rarely need more than these at a desk. Notice that laus changes shape with the noun: laust herbergi (hk), laus nótt (kvk).",
          ex: [["Áttu laust herbergi?","Do you have a room free?"],
               ["Ég ætla að bóka herbergi.","I want to book a room."],
               ["Hvað kostar nóttin?","How much is the night?"],
               ["Er morgunmatur innifalinn?","Is breakfast included?"]],
          tip: "bóka and panta both mean to book. panta is a little more formal and is also what you say in a restaurant." },
        { h: "How long? í + þolfall",
          p: "A stretch of time takes í and the accusative. Nothing is moving, but Icelandic still uses the accusative here, because the phrase measures out a span.",
          ex: [["Ég gisti hér í eina nótt.","I'm staying here for one night."],
               ["Við verðum hér í þrjár nætur.","We'll be here for three nights."],
               ["Hún dvelur í Reykjavík í tvær vikur.","She is staying in Reykjavík for two weeks."]],
          tip: "nótt is feminine, so the number is feminine too: ein nótt, tvær nætur, þrjár nætur, fjórar nætur." }
      ],
      vocab: ["hótel","gisting","gistihús","móttaka","gestur","nótt","laus","fullbókaður","bóka","panta","morgunmatur","innifalinn","gista"],
      items: [
        { t:"match", q:"Match the front-desk words",
          pairs:[["hótel","hotel"],["gistihús","guesthouse"],["móttaka","reception"],
                 ["gestur","guest"],["nótt","night"],["morgunmatur","breakfast"]] },

        { t:"gender", word:"gisting", a:"kvk", note:"Every noun ending in -ing is feminine.", tags:["noun:fem"] },

        { t:"gender", word:"gistihús", a:"hk", note:"hús is neuter, so any compound ending in -hús is neuter too.", tags:["noun:neut"] },

        { t:"choice", q:"Ask whether the room is free.",
          opts:["Er herbergið laust?","Er herbergið laus?","Er herbergið lausur?","Er herbergið lausan?"],
          a:"Er herbergið laust?",
          note:"herbergi is neuter, so the predicate adjective takes -t: laust." },

        { t:"fill", q:"How long are you staying?", sentence:"Ég ætla að vera hér í ___ nætur.", base:"þrír",
          opts:["þrír","þrjár","þremur"], a:"þrjár", case:"ÞF",
          why:"nótt is feminine and a stretch of time takes í + accusative", mode:"choice",
          tags:["num:þrír","case:acc"] },

        { t:"build", q:"Is breakfast included?",
          a:"Er morgunmatur innifalinn", extra:["innifalið","hótelið","með"],
          note:"morgunmatur is masculine, so the adjective is innifalinn, not innifalið." },

        { t:"type", q:"Type “I want to book a room.”", a:"Ég ætla að bóka herbergi",
          alt:["Ég ætla að panta herbergi"], hint:"ætla að + infinitive",
          note:"bóka and panta are interchangeable here." },

        { t:"listen", speak:"Hvað kostar nóttin?", q:"What did you hear?", mode:"choice",
          opts:["Hvað kostar nóttin?","Hvað kostar ferðin?","Hvar er nóttin?"],
          a:"Hvað kostar nóttin?" },

        { t:"choice", q:"Where do you check in at a hotel?",
          opts:["móttakan","gistingin","nóttin","gesturinn"],
          a:"móttakan", note:"móttaka literally means a receiving — taka á móti is to receive someone." },

        { t:"fill", q:"Make the adjective agree.", sentence:"Herbergið er ekki ___ .", base:"laus",
          a:"laust", case:"NF", why:"neuter singular adjectives take -t", mode:"type",
          tags:["adj:strong","noun:neut"] },

        { t:"speak", is:"Ég ætla að gista hér í þrjár nætur.", en:"I'm going to stay here for three nights.",
          tip:"í + accusative for a span of time; nætur is the plural of nótt." }
      ]
    },
    {
      n: 2,
      id: "u13l2",
      kind: "lesson",
      title: "Farangur og farmiðar",
      en: "Luggage and tickets",
      goal: "Handle bags and tickets, and use nokkur and enginn.",
      minutes: 10,
      icon: "🎫",
      teach: [
        { h: "Getting there and back",
          table: { cols:["íslenska","English","kyn"],
                   rows:[["farangur","luggage","kk"],["taska","bag, suitcase","kvk"],["vegabréf","passport","hk"],
                         ["miði","ticket","kk"],["flugvél","aeroplane","kvk"],["flugvöllur","airport","kk"],
                         ["rúta","coach","kvk"],["brottför","departure","kvk"]] },
          tip: "farangur is a mass noun: one bag or ten bags, it stays singular." },
        { h: "nokkur — any, some",
          p: "nokkur is the word you reach for in a question, especially when you half expect a no. It bends like an adjective and has one form worth memorising on its own: the neuter nokkurt.",
          table: { cols:["fall","kk","kvk","hk"],
                   rows:[["NF","nokkur","nokkur","nokkurt"],
                         ["ÞF","nokkurn","nokkra","nokkurt"],
                         ["ÞGF","nokkrum","nokkurri","nokkru"],
                         ["EF","nokkurs","nokkurrar","nokkurs"]] },
          ex: [["Áttu nokkurt vegabréf?","Do you have any passport at all?"],
               ["Er nokkur rúta í kvöld?","Is there any coach tonight?"]],
          list: ["Plural: nokkrir / nokkrar / nokkur — nokkra / nokkrar / nokkur — nokkrum — nokkurra",
                 "Standing alone as a thing, not a person, the neuter is nokkuð: Viltu nokkuð?"] },
        { h: "enginn — nobody, none",
          p: "enginn is the answer nokkur was fishing for. It replaces ekki + a noun in one word, so you never say ekki and enginn in the same clause.",
          table: { cols:["fall","kk","kvk","hk"],
                   rows:[["NF","enginn","engin","ekkert"],
                         ["ÞF","engan","enga","ekkert"],
                         ["ÞGF","engum","engri","engu"],
                         ["EF","einskis","engrar","einskis"]] },
          ex: [["Það er enginn í móttökunni.","There is nobody at reception."],
               ["Ég á enga tösku.","I have no bag."],
               ["Það er ekkert vegabréf í töskunni.","There is no passport in the bag."]],
          tip: "Plural: engir / engar / engin — enga / engar / engin — engum — engra." }
      ],
      vocab: ["farangur","taska","vegabréf","miði","flugvél","flugvöllur","rúta","brottför","nokkur","enginn","ferðast"],
      items: [
        { t:"match", q:"Match the travel words",
          pairs:[["farangur","luggage"],["taska","bag"],["vegabréf","passport"],
                 ["miði","ticket"],["flugvöllur","airport"],["rúta","coach"]] },

        { t:"gender", word:"farangur", a:"kk", note:"Nouns in -ur of this kind are masculine; the -ur belongs to the stem, so the accusative is farangur too.", tags:["noun:masc"] },

        { t:"choice", q:"Which sentence says “There is nobody at reception”?",
          opts:["Það er enginn í móttökunni.","Það er ekkert í móttökunni.","Það er engin í móttökuna.","Það er enginn í móttakan."],
          a:"Það er enginn í móttökunni.",
          note:"A person in general is masculine: enginn. And í with a static place takes the dative: móttökunni." },

        { t:"fill", q:"Choose the right form of enginn.", sentence:"Ég á ___ tösku.", base:"enginn",
          opts:["engin","enga","engan"], a:"enga", case:"ÞF",
          why:"eiga takes the accusative and taska is feminine", mode:"choice",
          tags:["pron:enginn","case:acc"] },

        { t:"fill", q:"Choose the right form of nokkur.", sentence:"Áttu ___ vegabréf?", base:"nokkur",
          a:"nokkurt", case:"ÞF", why:"vegabréf is neuter, and the neuter of nokkur is nokkurt", mode:"type",
          tags:["pron:nokkur","noun:neut"] },

        { t:"table", q:"Complete the declension of enginn",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF", cells:["enginn","engin","ekkert"], blank:[2] },
            { label:"ÞF", cells:["engan","enga","ekkert"], blank:[0] },
            { label:"ÞGF", cells:["engum","engri","engu"], blank:[1] },
            { label:"EF", cells:["einskis","engrar","einskis"], blank:[] }
          ],
          note:"The masculine and neuter genitive einskis is the one form that looks nothing like the rest." },

        { t:"build", q:"Do you have any luggage?",
          a:"Ertu með nokkurn farangur", extra:["nokkuð","nokkur","farangri"],
          note:"vera með takes the accusative, so nokkur becomes nokkurn." },

        { t:"type", q:"Type “I have no ticket.”", a:"Ég á engan miða",
          alt:["Ég er ekki með miða"], hint:"miði is masculine",
          note:"engan is the masculine accusative; miði drops to miða." },

        { t:"listen", speak:"Farangurinn minn er ekki hér.", q:"What did you hear?", mode:"choice",
          opts:["Farangurinn minn er ekki hér.","Farangurinn þinn er ekki hér.","Taskan mín er ekki hér."],
          a:"Farangurinn minn er ekki hér." },

        { t:"choice", q:"brottför means…",
          opts:["departure","arrival","luggage","reception"],
          a:"departure", note:"brott = away, för = journey. The departure is the journey away." },

        { t:"speak", is:"Ég er með einn miða og eina tösku.", en:"I have one ticket and one bag.",
          tip:"vera með takes the accusative: einn miða (kk), eina tösku (kvk)." }
      ]
    },
    {
      n: 3,
      id: "u13l3",
      kind: "grammar",
      title: "Tveggja manna herbergi",
      en: "Measuring with the genitive",
      goal: "Build measure phrases and decline the numbers 1–4 in all four cases.",
      minutes: 14,
      icon: "🔢",
      teach: [
        { h: "A room of two people",
          p: "When a number measures the thing that follows — how many people it holds, how many days it lasts, how old somebody is — Icelandic puts the whole measurement into the genitive and hangs it in front like an adjective. The head noun then keeps whatever case the sentence gives it.",
          ex: [["eins manns herbergi","a single room"],
               ["tveggja manna herbergi","a double room"],
               ["þriggja daga ferð","a three-day trip"],
               ["fjögurra vikna frí","a four-week holiday"],
               ["tíu mínútna gangur","a ten-minute walk"]],
          tip: "One person → genitive singular manns. Two or more → genitive plural manna. English hides this behind a hyphen; Icelandic spells it out." },
        { h: "einn in all four cases",
          p: "einn is the only one of the four that has a full three-gender set in every case. Learn it first and the rest feel easy.",
          table: { cols:["fall","kk","kvk","hk"],
                   rows:[["NF","einn","ein","eitt"],
                         ["ÞF","einn","eina","eitt"],
                         ["ÞGF","einum","einni","einu"],
                         ["EF","eins","einnar","eins"]] },
          tip: "The masculine accusative is einn, exactly like the nominative. That trips people up for months." },
        { h: "þrír in all four cases",
          p: "tveir, þrír and fjórir all collapse in the dative and the genitive: one form for all three genders. Only the nominative and accusative still care about gender.",
          table: { cols:["fall","kk","kvk","hk"],
                   rows:[["NF","þrír","þrjár","þrjú"],
                         ["ÞF","þrjá","þrjár","þrjú"],
                         ["ÞGF","þremur","þremur","þremur"],
                         ["EF","þriggja","þriggja","þriggja"]] },
          list: ["tveir: tveir / tvær / tvö — tvo / tvær / tvö — tveimur — tveggja",
                 "fjórir: fjórir / fjórar / fjögur — fjóra / fjórar / fjögur — fjórum — fjögurra",
                 "From fimm upward nothing changes at all: fimm, sex, sjö are the same in every case."] },
        { h: "The genitive plurals you will actually use",
          p: "Measure phrases only ever draw on a small set of nouns. Get their genitive plural into your fingers and you can build any phrase on the spot.",
          table: { cols:["noun","EF fleirtala","phrase"],
                   rows:[["maður","manna","tveggja manna herbergi"],
                         ["dagur","daga","þriggja daga ferð"],
                         ["vika","vikna","fjögurra vikna frí"],
                         ["ár","ára","fimm ára gamall"],
                         ["mínúta","mínútna","tíu mínútna gangur"]] },
          tip: "Ages work the same way: Hvað ertu gamall? — Ég er tuttugu ára. The word ár never appears in any other form there." }
      ],
      vocab: ["tveggja manna herbergi","á mann","vika","ferð","útsýni","kosta"],
      items: [
        { t:"table", q:"Complete the declension of einn",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF", cells:["einn","ein","eitt"], blank:[1] },
            { label:"ÞF", cells:["einn","eina","eitt"], blank:[] },
            { label:"ÞGF", cells:["einum","einni","einu"], blank:[2] },
            { label:"EF", cells:["eins","einnar","eins"], blank:[1] }
          ],
          note:"einnar is the feminine genitive: einnar viku = of one week." },

        { t:"fill", q:"Build the measure phrase.", sentence:"Við viljum ___ manna herbergi.", base:"tveir",
          a:"tveggja", case:"EF", why:"a measure phrase puts the number in the genitive", mode:"type",
          tags:["case:gen","num:tveir"] },

        { t:"fill", q:"Build the measure phrase.", sentence:"Þetta er ___ daga ferð.", base:"þrír",
          opts:["þrír","þrjá","þriggja"], a:"þriggja", case:"EF",
          why:"the measurement stands in the genitive, and daga is the genitive plural of dagur",
          mode:"choice", tags:["case:gen","num:þrír"] },

        { t:"fill", q:"How old is he?", sentence:"Lúlli er ___ ára gamall.", base:"fjórir",
          a:"fjögurra", case:"EF", why:"ages take the genitive; the genitive of fjórir is fjögurra",
          mode:"type", tags:["case:gen","num:fjórir"] },

        { t:"table", q:"Complete the declension of þrír",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF", cells:["þrír","þrjár","þrjú"], blank:[2] },
            { label:"ÞF", cells:["þrjá","þrjár","þrjú"], blank:[0] },
            { label:"ÞGF", cells:["þremur","þremur","þremur"], blank:[] },
            { label:"EF", cells:["þriggja","þriggja","þriggja"], blank:[0] }
          ],
          note:"Dative and genitive have one form for all three genders." },

        { t:"choice", q:"Which is a single room?",
          opts:["eins manns herbergi","einn manns herbergi","eina manna herbergi","eins manna herbergi"],
          a:"eins manns herbergi",
          note:"One person, so both words are genitive singular: eins manns." },

        { t:"fill", q:"How long is the trip?", sentence:"Ferðin tekur ___ vikur.", base:"fjórir",
          a:"fjórar", case:"ÞF", why:"taka takes the accusative and vika is feminine",
          mode:"type", tags:["case:acc","num:fjórir"] },

        { t:"build", q:"This is a three-day trip.",
          a:"Þetta er þriggja daga ferð", extra:["þrír","dagar","ferðin"],
          note:"The measure phrase sits in front of the noun and never changes." },

        { t:"type", q:"Type “We want a double room.”", a:"Við viljum tveggja manna herbergi",
          hint:"vilja → við viljum", note:"herbergi is the object, but the measure phrase in front of it stays genitive." },

        { t:"choice", q:"How do you say “I am twenty years old”?",
          opts:["Ég er tuttugu ára.","Ég er tuttugu ár.","Ég er tuttugu árum.","Ég er tuttugu áranna."],
          a:"Ég er tuttugu ára.", note:"ára is the genitive plural of ár, and it is the only form ages ever use." },

        { t:"table", q:"Complete the declension of fjórir",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF", cells:["fjórir","fjórar","fjögur"], blank:[2] },
            { label:"ÞF", cells:["fjóra","fjórar","fjögur"], blank:[] },
            { label:"ÞGF", cells:["fjórum","fjórum","fjórum"], blank:[] },
            { label:"EF", cells:["fjögurra","fjögurra","fjögurra"], blank:[0] }
          ],
          note:"Only the neuter keeps the ö: fjögur, fjögurra." },

        { t:"listen", speak:"Tveggja manna herbergi með útsýni, takk.", q:"What did you hear?", mode:"choice",
          opts:["Tveggja manna herbergi með útsýni, takk.","Eins manns herbergi með útsýni, takk.","Tveggja manna herbergi án útsýnis, takk."],
          a:"Tveggja manna herbergi með útsýni, takk." },

        { t:"speak", is:"Ferðin kostar tíu þúsund krónur á mann.", en:"The trip costs ten thousand krónur per person.",
          tip:"á mann = per person; mann is the accusative of maður." }
      ]
    },
    {
      n: 4,
      id: "u13l4",
      kind: "lesson",
      title: "Út í náttúruna",
      en: "Out into the landscape",
      goal: "Name the landscape and measure differences with the dative.",
      minutes: 11,
      icon: "🏔️",
      teach: [
        { h: "The map in six words",
          table: { cols:["íslenska","English","kyn"],
                   rows:[["jökull","glacier","kk"],["foss","waterfall","kk"],["fjall","mountain","hk"],
                         ["dalur","valley","kk"],["strönd","coast, beach","kvk"],["hraun","lava field","hk"],
                         ["vegur","road","kk"],["tjaldstæði","campsite","hk"]] },
          tip: "jökull loses its second vowel as soon as an ending arrives: jökli, jöklar. Same with lykill and gamall." },
        { h: "How much bigger? The dative of difference",
          p: "Put the size of a difference into the dative and set it in front of the comparative. It answers the question by how much, and it works with a measurement, a number or just a vague miklu.",
          ex: [["Jónas er ári eldri en Anna.","Jónas is a year older than Anna."],
               ["Sóley er tveimur árum yngri.","Sóley is two years younger."],
               ["Rútan er miklu ódýrari.","The coach is much cheaper."],
               ["Hótelið er þúsund krónum dýrara.","The hotel is a thousand krónur more expensive."]],
          tip: "One year is ári, two years is tveimur árum. The noun goes dative right along with the number." },
        { h: "Counting away from a date",
          p: "The same dative measures time before or after a point. It is not a preposition doing the work — the bare dative already means by that much.",
          ex: [["Við bókum þremur vikum fyrir brottför.","We book three weeks before departure."],
               ["Hann kemur tveimur dögum seinna.","He arrives two days later."],
               ["Flugvélin lenti fyrir hálftíma.","The plane landed half an hour ago."]],
          tip: "fyrir + dative also gives you ago: fyrir þremur dögum = three days ago." }
      ],
      vocab: ["jökull","foss","fjall","dalur","strönd","hraun","vegur","tjald","tjaldstæði","tjalda","skoða","ódýr"],
      items: [
        { t:"match", q:"Match the landscape words",
          pairs:[["jökull","glacier"],["foss","waterfall"],["fjall","mountain"],
                 ["dalur","valley"],["strönd","beach"],["hraun","lava field"]] },

        { t:"gender", word:"jökull", a:"kk", note:"Nouns in -ull are masculine and lose the u: jökli, jöklar.", tags:["noun:masc"] },

        { t:"gender", word:"hraun", a:"hk", note:"A short noun with no ending in the nominative is usually neuter.", tags:["noun:neut"] },

        { t:"fill", q:"By how much?", sentence:"Jónas er ___ árum eldri en Anna.", base:"tveir",
          a:"tveimur", case:"ÞGF", why:"the size of a difference stands in the dative",
          mode:"type", tags:["case:dat","comparative"] },

        { t:"fill", q:"How far ahead do you book?", sentence:"Við bókum ferðina ___ vikum fyrir brottför.", base:"þrír",
          opts:["þrír","þrjár","þremur"], a:"þremur", case:"ÞGF",
          why:"a measured distance in time takes the dative", mode:"choice", tags:["case:dat"] },

        { t:"choice", q:"How do you say “a year older”?",
          opts:["ári eldri","ár eldri","árs eldri","árinu eldri"],
          a:"ári eldri", note:"ári is the dative singular of ár." },

        { t:"build", q:"This hotel is much cheaper.",
          a:"Þetta hótel er miklu ódýrara", extra:["mikið","ódýrt","dýrara"],
          note:"miklu is the dative of mikill, frozen into an intensifier before comparatives." },

        { t:"type", q:"Type “We are camping by the waterfall.”", a:"Við tjöldum við fossinn",
          hint:"tjalda → við tjöldum", note:"The a of tjalda becomes ö before the -um ending." },

        { t:"fill", q:"Put the glacier in the right case.", sentence:"Ég ætla að skoða ___ .", base:"jökullinn",
          a:"jökulinn", case:"ÞF", why:"skoða takes the accusative; jökull → jökul, plus the article -inn",
          mode:"type", tags:["case:acc","noun:masc"] },

        { t:"listen", speak:"Jökullinn er miklu stærri.", q:"What did you hear?", mode:"choice",
          opts:["Jökullinn er miklu stærri.","Jökullinn er miklu minni.","Fossinn er miklu stærri."],
          a:"Jökullinn er miklu stærri." },

        { t:"choice", q:"Which one says “three days later”?",
          opts:["þremur dögum seinna","þrjá daga seinna","þriggja daga seinna","þrír dagar seinna"],
          a:"þremur dögum seinna", note:"Difference in time → dative: þremur dögum." },

        { t:"speak", is:"Vegurinn liggur meðfram ströndinni.", en:"The road runs along the coast.",
          tip:"meðfram only ever takes the dative." }
      ]
    },
    {
      n: 5,
      id: "u13l5",
      kind: "story",
      title: "Herbergi fjögur",
      en: "Room four",
      goal: "Follow a check-in and pick out the measure and difference phrases.",
      minutes: 11,
      icon: "🐦",
      teach: [
        { h: "Before you read",
          p: "Anna and Sóley arrive at a small guesthouse in the east. Jónas is coming later, and Lúlli has arrived first — as usual.",
          list: ["pöntun — a booking, from panta",
                 "gestgjafi — the host, the person behind the desk",
                 "dvelja — to stay, a shade more formal than vera"] }
      ],
      story: {
        title: "Herbergi fjögur",
        lines: [
          { sp:"Anna", is:"Gott kvöld. Við erum með pöntun á tveggja manna herbergi.", en:"Good evening. We have a booking for a double room." },
          { sp:"Gestgjafi", is:"Velkomnar. Hvað ætlið þið að dvelja hér lengi?", en:"Welcome. How long are you going to stay here?" },
          { sp:"Sóley", is:"Í þrjár nætur. Jónas kemur tveimur dögum seinna.", en:"For three nights. Jónas is coming two days later." },
          { sp:"Gestgjafi", is:"Fínt. Herbergi fjögur er laust, með útsýni yfir fossinn.", en:"Fine. Room four is free, with a view over the waterfall." },
          { sp:"Anna", is:"Frábært. Eigið þið nokkur handklæði?", en:"Great. Do you have any towels?" },
          { sp:"Gestgjafi", is:"Já, handklæði og sæng eru inni í skápnum.", en:"Yes, towels and a duvet are inside the cupboard." },
          { sp:"Sóley", is:"Takk. Við erum mjög þreyttar eftir daginn.", en:"Thanks. We are very tired after the day." },
          { sp:"Anna", is:"Sóley, það er einhver í svefnpokanum mínum.", en:"Sóley, there is somebody in my sleeping bag." },
          { sp:"Sóley", is:"Það er enginn maður. Þetta er lundi!", en:"That is no man. That is a puffin!" },
          { sp:"Gestgjafi", is:"Þetta er Lúlli. Hann gistir hér alltaf nokkrum vikum fyrir brottför.", en:"That is Lúlli. He always stays here a few weeks before departure." },
          { sp:"Anna", is:"Þá fær hann svefnpokann. Ég sef í rúminu.", en:"Then he gets the sleeping bag. I'll sleep in the bed." }
        ],
        glossary: [["pöntun","booking"],["gestgjafi","host"],["velkomnar","welcome (to women)"],
                   ["skápur","cupboard"],["einhver","somebody"],["þá","then"]]
      },
      vocab: ["svefnpoki","handklæði","sæng","dvelja","þreyttur","seinna","lengi"],
      items: [
        { t:"choice", q:"How many nights are they staying?",
          opts:["þrjár nætur","tvær nætur","fjórar nætur","eina nótt"],
          a:"þrjár nætur", note:"Sóley says í þrjár nætur — accusative for a span of time." },

        { t:"choice", q:"When does Jónas arrive?",
          opts:["tveimur dögum seinna","þremur vikum seinna","sama kvöld","viku fyrr"],
          a:"tveimur dögum seinna", note:"The difference in time stands in the dative." },

        { t:"choice", q:"Where are the towels?",
          opts:["inni í skápnum","í svefnpokanum","í móttökunni","undir rúminu"],
          a:"inni í skápnum" },

        { t:"match", q:"Match the words from the story",
          pairs:[["dvelja","to stay"],["þreyttur","tired"],["sæng","duvet"],
                 ["svefnpoki","sleeping bag"],["seinna","later"]] },

        { t:"fill", q:"Where is the puffin?", sentence:"Það er einhver í ___ mínum.", base:"svefnpokinn",
          a:"svefnpokanum", case:"ÞGF", why:"í with a static location takes the dative",
          mode:"type", tags:["prep:í","case:dat"] },

        { t:"fill", q:"When does Lúlli turn up?", sentence:"Lúlli kemur ___ vikum fyrir brottför.", base:"nokkur",
          a:"nokkrum", case:"ÞGF", why:"the measured time stands in the dative, so nokkur becomes nokkrum",
          mode:"type", tags:["pron:nokkur","case:dat"] },

        { t:"build", q:"We are very tired after the day. (two women)",
          a:"Við erum mjög þreyttar eftir daginn", extra:["þreyttir","deginum","dagur"],
          note:"Two women → feminine plural þreyttar. eftir in a time sense takes the accusative." },

        { t:"type", q:"Type “Do you have any towels?” (speaking to more than one person)",
          a:"Eigið þið nokkur handklæði", hint:"handklæði is neuter plural",
          note:"The neuter plural of nokkur is nokkur — same as the singular masculine." },

        { t:"listen", speak:"Jónas kemur tveimur dögum seinna.", q:"What did you hear?", mode:"choice",
          opts:["Jónas kemur tveimur dögum seinna.","Jónas kemur tveimur vikum seinna.","Jónas kemur þremur dögum seinna."],
          a:"Jónas kemur tveimur dögum seinna." },

        { t:"choice", q:"Who is in the sleeping bag?",
          opts:["lundi","Jónas","gestgjafinn","enginn"],
          a:"lundi", note:"Anna thinks it is einhver, a somebody; Sóley knows better." },

        { t:"speak", is:"Hvað ætlið þið að dvelja hér lengi?", en:"How long are you going to stay here?",
          tip:"lengi is an adverb and never changes shape." }
      ]
    },
    {
      n: 6,
      id: "u13l6",
      kind: "checkpoint",
      title: "Ferðaprófið",
      en: "Travel checkpoint",
      goal: "Prove you can book, measure and compare.",
      minutes: 12,
      icon: "✅",
      items: [
        { t:"match", q:"Match the words from this unit",
          pairs:[["gisting","accommodation"],["brottför","departure"],["tjaldstæði","campsite"],
                 ["flugvöllur","airport"],["strönd","beach"],["farangur","luggage"]] },

        { t:"gender", word:"móttaka", a:"kvk", note:"Weak nouns in -a are feminine: móttaka, móttöku.", tags:["noun:fem"] },

        { t:"gender", word:"flugvöllur", a:"kk", note:"völlur is masculine, so every -völlur compound is too.", tags:["noun:masc"] },

        { t:"fill", q:"Build the measure phrase.", sentence:"Við pöntum ___ manna herbergi.", base:"tveir",
          a:"tveggja", case:"EF", why:"a measurement in front of a noun goes into the genitive",
          mode:"type", tags:["case:gen"] },

        { t:"fill", q:"Choose the right form of nokkur.", sentence:"Er ___ herbergi laust?", base:"nokkur",
          opts:["nokkur","nokkurt","nokkru"], a:"nokkurt", case:"NF",
          why:"herbergi is neuter", mode:"choice", tags:["pron:nokkur"] },

        { t:"fill", q:"By how much?", sentence:"Sóley er ___ árum yngri en Jónas.", base:"fjórir",
          a:"fjórum", case:"ÞGF", why:"the dative of difference; fjórir → fjórum",
          mode:"type", tags:["case:dat","num:fjórir"] },

        { t:"fill", q:"How long does it take?", sentence:"Ferðin tekur ___ daga.", base:"þrír",
          a:"þrjá", case:"ÞF", why:"taka takes the accusative and dagur is masculine",
          mode:"type", tags:["case:acc","num:þrír"] },

        { t:"table", q:"Complete the declension of tveir",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF", cells:["tveir","tvær","tvö"], blank:[1] },
            { label:"ÞF", cells:["tvo","tvær","tvö"], blank:[0] },
            { label:"ÞGF", cells:["tveimur","tveimur","tveimur"], blank:[] },
            { label:"EF", cells:["tveggja","tveggja","tveggja"], blank:[2] }
          ],
          note:"tvo is the masculine accusative; the dative and genitive ignore gender." },

        { t:"choice", q:"Which is “a three-day trip”?",
          opts:["þriggja daga ferð","þrír daga ferð","þrjá daga ferð","þriggja dagar ferð"],
          a:"þriggja daga ferð", note:"Both words are genitive: þriggja daga." },

        { t:"choice", q:"Which sentence is correct?",
          opts:["Það er enginn í móttökunni.","Það er ekkert í móttökunni.","Það er engin í móttökuna.","Það er enginn í móttakan."],
          a:"Það er enginn í móttökunni.",
          note:"enginn for a person, and the dative móttökunni after a static í." },

        { t:"build", q:"The hotel is fully booked tonight.",
          a:"Hótelið er fullbókað í kvöld", extra:["fullbókaður","kvöldið","fullbókuð"],
          note:"hótel is neuter, so the adjective is fullbókað." },

        { t:"type", q:"Type “We are travelling around Iceland for two weeks.”",
          a:"Við ferðumst um Ísland í tvær vikur", hint:"ferðast → við ferðumst",
          note:"um and í both take the accusative here." },

        { t:"listen", speak:"Er morgunmatur innifalinn í verðinu?", q:"What did you hear?", mode:"choice",
          opts:["Er morgunmatur innifalinn í verðinu?","Er morgunmatur innifalinn í herberginu?","Er kaffi innifalið í verðinu?"],
          a:"Er morgunmatur innifalinn í verðinu?" },

        { t:"speak", is:"Lúlli er fjögurra ára gamall.", en:"Lúlli is four years old.",
          tip:"Ages always use the genitive: fjögurra ára." }
      ]
    }
  ]
};

export const vocab = [
  { w:"hótel", en:"hotel", pos:"noun", g:"hk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["hótel","hótel","hóteli","hótels"], pl:["hótel","hótel","hótelum","hótela"] },
    ex:{ is:"Hótelið stendur við höfnina.", en:"The hotel stands by the harbour." } },

  { w:"gisting", en:"accommodation", pos:"noun", g:"kvk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["gisting","gistingu","gistingu","gistingar"], pl:["gistingar","gistingar","gistingum","gistinga"] },
    ex:{ is:"Við leitum að gistingu í tvær nætur.", en:"We are looking for accommodation for two nights." } },

  { w:"gistihús", en:"guesthouse", pos:"noun", g:"hk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["gistihús","gistihús","gistihúsi","gistihúss"], pl:["gistihús","gistihús","gistihúsum","gistihúsa"] },
    ex:{ is:"Við gistum á litlu gistihúsi.", en:"We are staying at a small guesthouse." } },

  { w:"móttaka", en:"reception", pos:"noun", g:"kvk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["móttaka","móttöku","móttöku","móttöku"], pl:null },
    ex:{ is:"Lyklarnir eru í móttökunni.", en:"The keys are at reception." } },

  { w:"gestur", en:"guest", pos:"noun", g:"kk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["gestur","gest","gesti","gests"], pl:["gestir","gesti","gestum","gesta"] },
    ex:{ is:"Gestirnir koma klukkan sex.", en:"The guests are arriving at six." } },

  { w:"nótt", en:"night", pos:"noun", g:"kvk", topic:"gisting", unit:13, cefr:"A1",
    forms:{ sg:["nótt","nótt","nóttu","nætur"], pl:["nætur","nætur","nóttum","nótta"] },
    ex:{ is:"Nóttin kostar tólf þúsund krónur.", en:"The night costs twelve thousand krónur." } },

  { w:"morgunmatur", en:"breakfast", pos:"noun", g:"kk", topic:"gisting", unit:13, cefr:"A1",
    forms:{ sg:["morgunmatur","morgunmat","morgunmat","morgunmatar"], pl:null },
    ex:{ is:"Morgunmaturinn er frá sjö til tíu.", en:"Breakfast is from seven to ten." } },

  { w:"útsýni", en:"view", pos:"noun", g:"hk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["útsýni","útsýni","útsýni","útsýnis"], pl:null },
    ex:{ is:"Herbergið er með útsýni yfir fjallið.", en:"The room has a view over the mountain." } },

  { w:"farangur", en:"luggage", pos:"noun", g:"kk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["farangur","farangur","farangri","farangurs"], pl:null },
    ex:{ is:"Farangurinn minn er ennþá í rútunni.", en:"My luggage is still on the coach." } },

  { w:"taska", en:"bag, suitcase", pos:"noun", g:"kvk", topic:"travel", unit:13, cefr:"A1",
    forms:{ sg:["taska","tösku","tösku","tösku"], pl:["töskur","töskur","töskum","taskna"] },
    ex:{ is:"Ég er bara með eina tösku.", en:"I only have one bag with me." } },

  { w:"vegabréf", en:"passport", pos:"noun", g:"hk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["vegabréf","vegabréf","vegabréfi","vegabréfs"], pl:["vegabréf","vegabréf","vegabréfum","vegabréfa"] },
    ex:{ is:"Vegabréfið mitt er í töskunni.", en:"My passport is in the bag." } },

  { w:"miði", en:"ticket", pos:"noun", g:"kk", topic:"travel", unit:13, cefr:"A1",
    forms:{ sg:["miði","miða","miða","miða"], pl:["miðar","miða","miðum","miða"] },
    ex:{ is:"Miðinn kostar fimm þúsund krónur.", en:"The ticket costs five thousand krónur." } },

  { w:"ferð", en:"trip, journey", pos:"noun", g:"kvk", topic:"travel", unit:13, cefr:"A1",
    forms:{ sg:["ferð","ferð","ferð","ferðar"], pl:["ferðir","ferðir","ferðum","ferða"] },
    ex:{ is:"Ferðin tekur þrjá daga.", en:"The trip takes three days." } },

  { w:"brottför", en:"departure", pos:"noun", g:"kvk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["brottför","brottför","brottför","brottfarar"], pl:["brottfarir","brottfarir","brottförum","brottfara"] },
    ex:{ is:"Brottförin er klukkan sjö.", en:"Departure is at seven." } },

  { w:"flugvél", en:"aeroplane", pos:"noun", g:"kvk", topic:"travel", unit:13, cefr:"A1",
    forms:{ sg:["flugvél","flugvél","flugvél","flugvélar"], pl:["flugvélar","flugvélar","flugvélum","flugvéla"] },
    ex:{ is:"Flugvélin lendir á Keflavíkurflugvelli.", en:"The plane lands at Keflavík airport." } },

  { w:"flugvöllur", en:"airport", pos:"noun", g:"kk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["flugvöllur","flugvöll","flugvelli","flugvallar"], pl:["flugvellir","flugvelli","flugvöllum","flugvalla"] },
    ex:{ is:"Rútan fer út á flugvöll klukkan fimm.", en:"The coach leaves for the airport at five." } },

  { w:"rúta", en:"coach, bus", pos:"noun", g:"kvk", topic:"travel", unit:13, cefr:"A1",
    forms:{ sg:["rúta","rútu","rútu","rútu"], pl:["rútur","rútur","rútum","rútna"] },
    ex:{ is:"Við tökum rútuna til Akureyrar.", en:"We are taking the coach to Akureyri." } },

  { w:"vika", en:"week", pos:"noun", g:"kvk", topic:"time", unit:13, cefr:"A1",
    forms:{ sg:["vika","viku","viku","viku"], pl:["vikur","vikur","vikum","vikna"] },
    ex:{ is:"Við verðum hér í tvær vikur.", en:"We'll be here for two weeks." } },

  { w:"tjald", en:"tent", pos:"noun", g:"hk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["tjald","tjald","tjaldi","tjalds"], pl:["tjöld","tjöld","tjöldum","tjalda"] },
    ex:{ is:"Tjaldið okkar er lítið en hlýtt.", en:"Our tent is small but warm." } },

  { w:"tjaldstæði", en:"campsite", pos:"noun", g:"hk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["tjaldstæði","tjaldstæði","tjaldstæði","tjaldstæðis"], pl:["tjaldstæði","tjaldstæði","tjaldstæðum","tjaldstæða"] },
    ex:{ is:"Tjaldstæðið er við ána.", en:"The campsite is by the river." } },

  { w:"svefnpoki", en:"sleeping bag", pos:"noun", g:"kk", topic:"travel", unit:13, cefr:"A2",
    forms:{ sg:["svefnpoki","svefnpoka","svefnpoka","svefnpoka"], pl:["svefnpokar","svefnpoka","svefnpokum","svefnpoka"] },
    ex:{ is:"Ég sef alltaf í svefnpoka.", en:"I always sleep in a sleeping bag." } },

  { w:"handklæði", en:"towel", pos:"noun", g:"hk", topic:"gisting", unit:13, cefr:"A1",
    forms:{ sg:["handklæði","handklæði","handklæði","handklæðis"], pl:["handklæði","handklæði","handklæðum","handklæða"] },
    ex:{ is:"Má ég fá hreint handklæði?", en:"May I have a clean towel?" } },

  { w:"sæng", en:"duvet", pos:"noun", g:"kvk", topic:"gisting", unit:13, cefr:"A2",
    forms:{ sg:["sæng","sæng","sæng","sængar"], pl:["sængur","sængur","sængum","sænga"] },
    ex:{ is:"Sængin er inni í skápnum.", en:"The duvet is inside the cupboard." } },

  { w:"jökull", en:"glacier", pos:"noun", g:"kk", topic:"landscape", unit:13, cefr:"A2",
    forms:{ sg:["jökull","jökul","jökli","jökuls"], pl:["jöklar","jökla","jöklum","jökla"] },
    ex:{ is:"Við keyrum að jöklinum á morgun.", en:"We are driving to the glacier tomorrow." } },

  { w:"foss", en:"waterfall", pos:"noun", g:"kk", topic:"landscape", unit:13, cefr:"A1",
    forms:{ sg:["foss","foss","fossi","foss"], pl:["fossar","fossa","fossum","fossa"] },
    ex:{ is:"Fossinn er hávær og fallegur.", en:"The waterfall is loud and beautiful." } },

  { w:"fjall", en:"mountain", pos:"noun", g:"hk", topic:"landscape", unit:13, cefr:"A1",
    forms:{ sg:["fjall","fjall","fjalli","fjalls"], pl:["fjöll","fjöll","fjöllum","fjalla"] },
    ex:{ is:"Fjöllin fyrir norðan eru há.", en:"The mountains in the north are high." } },

  { w:"dalur", en:"valley", pos:"noun", g:"kk", topic:"landscape", unit:13, cefr:"A2",
    forms:{ sg:["dalur","dal","dal","dals"], pl:["dalir","dali","dölum","dala"] },
    ex:{ is:"Bærinn stendur í dalnum.", en:"The farm stands in the valley." } },

  { w:"strönd", en:"coast, beach", pos:"noun", g:"kvk", topic:"landscape", unit:13, cefr:"A2",
    forms:{ sg:["strönd","strönd","strönd","strandar"], pl:["strendur","strendur","ströndum","stranda"] },
    ex:{ is:"Við göngum eftir ströndinni.", en:"We walk along the beach." } },

  { w:"hraun", en:"lava field", pos:"noun", g:"hk", topic:"landscape", unit:13, cefr:"A2",
    forms:{ sg:["hraun","hraun","hrauni","hrauns"], pl:["hraun","hraun","hraunum","hrauna"] },
    ex:{ is:"Vegurinn liggur yfir hraunið.", en:"The road runs across the lava field." } },

  { w:"vegur", en:"road", pos:"noun", g:"kk", topic:"landscape", unit:13, cefr:"A1",
    forms:{ sg:["vegur","veg","vegi","vegar"], pl:["vegir","vegi","vegum","vega"] },
    ex:{ is:"Vegurinn til Víkur er góður.", en:"The road to Vík is good." } },

  { w:"bóka", en:"to book", pos:"verb", topic:"travel", unit:13, cefr:"A2", gov:"ÞF", vclass:"weak-a",
    conj:{ pres:["bóka","bókar","bókar","bókum","bókið","bóka"],
           past:["bókaði","bókaðir","bókaði","bókuðum","bókuðuð","bókuðu"], pp:"bókað" },
    ex:{ is:"Ég ætla að bóka herbergi í þrjár nætur.", en:"I'm going to book a room for three nights." } },

  { w:"panta", en:"to order, to reserve", pos:"verb", topic:"travel", unit:13, cefr:"A2", gov:"ÞF", vclass:"weak-a",
    conj:{ pres:["panta","pantar","pantar","pöntum","pantið","panta"],
           past:["pantaði","pantaðir","pantaði","pöntuðum","pöntuðuð","pöntuðu"], pp:"pantað" },
    ex:{ is:"Við pöntum morgunmat fyrir tvo.", en:"We are ordering breakfast for two." } },

  { w:"gista", en:"to stay the night", pos:"verb", topic:"gisting", unit:13, cefr:"A2", gov:"none", vclass:"weak-i",
    conj:{ pres:["gisti","gistir","gistir","gistum","gistið","gista"],
           past:["gisti","gistir","gisti","gistum","gistuð","gistu"], pp:"gist" },
    ex:{ is:"Þau gista á tjaldstæðinu.", en:"They are staying the night at the campsite." } },

  { w:"dvelja", en:"to stay", pos:"verb", topic:"gisting", unit:13, cefr:"A2", gov:"none", vclass:"weak-ja",
    conj:{ pres:["dvel","dvelur","dvelur","dveljum","dveljið","dvelja"],
           past:["dvaldi","dvaldir","dvaldi","dvöldum","dvölduð","dvöldu"], pp:"dvalið" },
    ex:{ is:"Hann dvelur hjá okkur í viku.", en:"He is staying with us for a week." } },

  { w:"ferðast", en:"to travel", pos:"verb", topic:"travel", unit:13, cefr:"A2", gov:"none", vclass:"middle",
    conj:{ pres:["ferðast","ferðast","ferðast","ferðumst","ferðist","ferðast"],
           past:["ferðaðist","ferðaðist","ferðaðist","ferðuðumst","ferðuðust","ferðuðust"], pp:"ferðast" },
    ex:{ is:"Við ferðumst um landið í rútu.", en:"We travel around the country by coach." } },

  { w:"tjalda", en:"to camp", pos:"verb", topic:"travel", unit:13, cefr:"A2", gov:"none", vclass:"weak-a",
    conj:{ pres:["tjalda","tjaldar","tjaldar","tjöldum","tjaldið","tjalda"],
           past:["tjaldaði","tjaldaðir","tjaldaði","tjölduðum","tjölduðuð","tjölduðu"], pp:"tjaldað" },
    ex:{ is:"Það má ekki tjalda hér.", en:"You are not allowed to camp here." } },

  { w:"skoða", en:"to look at, to visit", pos:"verb", topic:"travel", unit:13, cefr:"A1", gov:"ÞF", vclass:"weak-a",
    conj:{ pres:["skoða","skoðar","skoðar","skoðum","skoðið","skoða"],
           past:["skoðaði","skoðaðir","skoðaði","skoðuðum","skoðuðuð","skoðuðu"], pp:"skoðað" },
    ex:{ is:"Við ætlum að skoða fossinn.", en:"We are going to look at the waterfall." } },

  { w:"kosta", en:"to cost", pos:"verb", topic:"money", unit:13, cefr:"A1", gov:"ÞF", vclass:"weak-a",
    conj:{ pres:["kosta","kostar","kostar","kostum","kostið","kosta"],
           past:["kostaði","kostaðir","kostaði","kostuðum","kostuðuð","kostuðu"], pp:"kostað" },
    ex:{ is:"Hvað kostar nóttin á tjaldstæðinu?", en:"How much is the night at the campsite?" } },

  { w:"laus", en:"free, vacant", pos:"adj", topic:"gisting", unit:13, cefr:"A2",
    decl:{ nom:["laus","laus","laust"], comp:"lausari", sup:"lausastur" },
    ex:{ is:"Er nokkurt herbergi laust?", en:"Is any room free?" } },

  { w:"fullbókaður", en:"fully booked", pos:"adj", topic:"gisting", unit:13, cefr:"A2",
    decl:{ nom:["fullbókaður","fullbókuð","fullbókað"] },
    ex:{ is:"Hótelið er fullbókað um helgina.", en:"The hotel is fully booked this weekend." } },

  { w:"innifalinn", en:"included", pos:"adj", topic:"travel", unit:13, cefr:"A2",
    decl:{ nom:["innifalinn","innifalin","innifalið"] },
    ex:{ is:"Er morgunmatur innifalinn í verðinu?", en:"Is breakfast included in the price?" } },

  { w:"ódýr", en:"cheap", pos:"adj", topic:"money", unit:13, cefr:"A1",
    decl:{ nom:["ódýr","ódýr","ódýrt"], comp:"ódýrari", sup:"ódýrastur" },
    ex:{ is:"Rútan er miklu ódýrari en flugvélin.", en:"The coach is much cheaper than the plane." } },

  { w:"þreyttur", en:"tired", pos:"adj", topic:"describing", unit:13, cefr:"A1",
    decl:{ nom:["þreyttur","þreytt","þreytt"], comp:"þreyttari", sup:"þreyttastur" },
    ex:{ is:"Við erum þreytt eftir ferðina.", en:"We are tired after the trip." } },

  { w:"nokkur", en:"some, any", pos:"pron", topic:"pronouns", unit:13, cefr:"A2",
    ex:{ is:"Eigið þið nokkur handklæði?", en:"Do you have any towels?" } },

  { w:"enginn", en:"no, nobody, none", pos:"pron", topic:"pronouns", unit:13, cefr:"A2",
    ex:{ is:"Það er enginn í móttökunni.", en:"There is nobody at reception." } },

  { w:"seinna", en:"later", pos:"adv", topic:"time", unit:13, cefr:"A1",
    ex:{ is:"Jónas kemur tveimur dögum seinna.", en:"Jónas is coming two days later." } },

  { w:"lengi", en:"for a long time", pos:"adv", topic:"time", unit:13, cefr:"A1",
    ex:{ is:"Hvað ætlið þið að vera lengi?", en:"How long are you going to stay?" } },

  { w:"tveggja manna herbergi", en:"double room", pos:"phrase", topic:"gisting", unit:13, cefr:"A2",
    ex:{ is:"Við viljum tveggja manna herbergi með útsýni.", en:"We want a double room with a view." } },

  { w:"á mann", en:"per person", pos:"phrase", topic:"money", unit:13, cefr:"A2",
    ex:{ is:"Ferðin kostar tíu þúsund krónur á mann.", en:"The trip costs ten thousand krónur per person." } }
];

export default unit;
