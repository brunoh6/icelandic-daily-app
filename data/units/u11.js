export const unit = {
  id: 11,
  slug: "u11",
  title: "Heima hjá mér",
  en: "At my place",
  cefr: "A2.1",
  icon: "🏠",
  blurb: "Describe your flat, place the furniture, and point at things.",
  canDo: [
    "Name the rooms of a home and say what is in each one",
    "Say where the furniture stands using the right case",
    "Describe things with the weak adjective: gamli sófinn, litla eldhúsið",
    "Point with þessi and sá, and say whose place you are at"
  ],
  lessons: [
    {
      n: 1,
      id: "u11l1",
      kind: "lesson",
      title: "Íbúðin mín",
      en: "My flat",
      goal: "Name the rooms and say what is in them.",
      minutes: 9,
      icon: "🚪",
      teach: [
        { h: "Four doors and a hallway",
          p: "Most Reykjavík flats are built from the same handful of words. Learn the rooms once and you can describe any of them.",
          table: { cols:["íslenska","English","kyn"],
                   rows:[["íbúð","flat","kvk"],["herbergi","room","hk"],["stofa","living room","kvk"],
                         ["eldhús","kitchen","hk"],["svefnherbergi","bedroom","hk"],["baðherbergi","bathroom","hk"]] },
          tip: "Anything ending in -herbergi or -hús is neuter, because herbergi and hús are." },
        { h: "Það er, það eru",
          p: "To say something exists somewhere, start with það. The verb then agrees with what actually exists, not with það.",
          ex: [["Það er sófi í stofunni.","There is a sofa in the living room."],
               ["Það eru þrír stólar í eldhúsinu.","There are three chairs in the kitchen."],
               ["Það er enginn heima.","There is nobody home."]],
          tip: "One thing → það er. Two or more → það eru. The English 'there' is not a place here; it is just scaffolding." },
        { h: "Where, not whither",
          p: "í and á take the dative when nothing moves. That is almost every sentence in this lesson.",
          ex: [["Ég sef í svefnherberginu.","I sleep in the bedroom."],
               ["Íbúðin er á þriðju hæð.","The flat is on the third floor."]] }
      ],
      vocab: ["íbúð","herbergi","stofa","eldhús","baðherbergi","svefnherbergi","heimili","gluggi","hæð","það er"],
      items: [
        { t:"match", q:"Match the rooms",
          pairs:[["stofa","living room"],["eldhús","kitchen"],["svefnherbergi","bedroom"],
                 ["baðherbergi","bathroom"],["íbúð","flat"],["gluggi","window"]] },

        { t:"gender", word:"stofa", a:"kvk", note:"Nouns ending in -a are feminine, with very few exceptions.", tags:["noun:fem"] },

        { t:"gender", word:"eldhús", a:"hk", note:"hús is neuter, so every compound ending in -hús is neuter too.", tags:["noun:neut"] },

        { t:"gender", word:"gluggi", a:"kk", note:"Weak nouns in -i are masculine; weak nouns in -a are feminine.", tags:["noun:masc"] },

        { t:"choice", q:"Where do you cook?",
          opts:["í eldhúsinu","í stofunni","í baðherberginu","á ganginum"],
          a:"í eldhúsinu", note:"eldur = fire, hús = house. A kitchen is a fire-house." },

        { t:"fill", q:"Nothing moves here.", sentence:"Ég sef í ___ .", base:"svefnherbergið",
          opts:["svefnherbergið","svefnherberginu","svefnherbergis"], a:"svefnherberginu",
          case:"ÞGF", why:"í with a static location takes the dative", mode:"choice", tags:["prep:í","case:dat"] },

        { t:"choice", q:"Three chairs. Pick the right sentence.",
          opts:["Það er þrír stólar í eldhúsinu.","Það eru þrír stólar í eldhúsinu.","Þeir eru þrír stólar í eldhúsinu."],
          a:"Það eru þrír stólar í eldhúsinu.",
          note:"The verb agrees with stólar, not with það." },

        { t:"build", q:"There is a big window in the living room.",
          a:"Það er stór gluggi í stofunni", extra:["eru","stofuna","hús"],
          note:"One window → það er." },

        { t:"listen", speak:"Íbúðin er á þriðju hæð.", q:"What did you hear?", mode:"choice",
          opts:["Íbúðin er á þriðju hæð.","Íbúðin er á fyrstu hæð.","Húsið er á þriðju hæð."],
          a:"Íbúðin er á þriðju hæð." },

        { t:"type", q:"Type “The kitchen is small but bright.”", a:"Eldhúsið er lítið en bjart",
          hint:"eldhúsið is neuter", note:"Predicate adjectives after vera agree with the subject: hk. → lítið, bjart." },

        { t:"speak", is:"Þetta er heimilið mitt.", en:"This is my home.",
          tip:"heimilið is neuter, so the possessive is mitt, not minn." }
      ]
    },
    {
      n: 2,
      id: "u11l2",
      kind: "lesson",
      title: "Húsgögn og dót",
      en: "Furniture and stuff",
      goal: "Place the furniture and say whose place you are at.",
      minutes: 10,
      icon: "🛋️",
      teach: [
        { h: "The furniture",
          table: { cols:["íslenska","English","kyn"],
                   rows:[["sófi","sofa","kk"],["stóll","chair","kk"],["rúm","bed","hk"],
                         ["skápur","cupboard","kk"],["hilla","shelf","kvk"],["lampi","lamp","kk"],
                         ["teppi","rug, blanket","hk"],["spegill","mirror","kk"],["skrifborð","desk","hk"]] } },
        { h: "hjá + ÞGF = at someone's place",
          p: "hjá is the word for being at a person rather than at a place. It only ever takes the dative — there is no second option to remember.",
          ex: [["Ég er heima hjá Önnu.","I'm at Anna's place."],
               ["Við borðum hjá nágrannanum í kvöld.","We're eating at the neighbour's tonight."],
               ["Hann býr enn hjá foreldrum sínum.","He still lives with his parents."]],
          tip: "hjá mér, hjá þér, hjá honum, hjá henni, hjá okkur, hjá ykkur, hjá þeim." },
        { h: "Putting things beside things",
          p: "Each placing expression drags its own case behind it. Learn the whole phrase, not the preposition alone.",
          list: ["fyrir framan + ÞF — fyrir framan sófann (in front of the sofa)",
                 "fyrir aftan + ÞF — fyrir aftan húsið (behind the house)",
                 "við hliðina á + ÞGF — við hliðina á rúminu (next to the bed)",
                 "á milli + EF — á milli gluggans og hurðarinnar (between the window and the door)"] }
      ],
      vocab: ["sófi","stóll","rúm","skápur","hilla","lampi","teppi","skrifborð","spegill","húsgagn","fyrir framan","við hliðina á"],
      items: [
        { t:"match", q:"Match the furniture",
          pairs:[["sófi","sofa"],["skápur","cupboard"],["hilla","shelf"],["teppi","rug"],["spegill","mirror"]] },

        { t:"fill", q:"Finish the sentence.", sentence:"Lampinn er við hliðina á ___ .", base:"rúmið",
          a:"rúminu", case:"ÞGF", why:"the á inside við hliðina á always takes the dative",
          mode:"type", tags:["prep:á","case:dat"] },

        { t:"fill", q:"Finish the sentence.", sentence:"Teppið liggur fyrir framan ___ .", base:"sófinn",
          opts:["sófinn","sófanum","sófann"], a:"sófann", case:"ÞF",
          why:"fyrir framan always takes the accusative", mode:"choice", tags:["case:acc"] },

        { t:"choice", q:"“At my place” is…",
          opts:["heima hjá mér","heima hjá mig","heima hjá minn","heima hjá ég"],
          a:"heima hjá mér", note:"hjá takes the dative, and the dative of ég is mér." },

        { t:"build", q:"We're eating at the neighbour's tonight.",
          a:"Við borðum hjá nágrannanum í kvöld", extra:["nágrannann","mér","kvöldið"],
          note:"nágranni is a weak masculine: nágranna, plus the dative article -num." },

        { t:"type", q:"Type “The mirror hangs on the wall.”", a:"Spegillinn hangir á veggnum",
          hint:"hanga → hangir", note:"Nothing moves, so á takes the dative: veggnum." },

        { t:"gender", word:"hilla", a:"kvk", note:"-a on a weak noun means feminine." },

        { t:"gender", word:"skrifborð", a:"hk", note:"borð is neuter, so skrifborð is too." },

        { t:"listen", speak:"Sófinn stendur við gluggann.", q:"What did you hear?", mode:"choice",
          opts:["Sófinn stendur við gluggann.","Sófinn stendur við hurðina.","Stóllinn stendur við gluggann."],
          a:"Sófinn stendur við gluggann." },

        { t:"choice", q:"The books are going onto the shelf. Which is right?",
          opts:["Ég set bækurnar í hilluna.","Ég set bækurnar í hillunni.","Ég set bækurnar á hillunni."],
          a:"Ég set bækurnar í hilluna.", note:"They move, so í takes the accusative: hilluna." },

        { t:"fill", q:"One verb form is missing.", sentence:"Það ___ fjögur húsgögn í herberginu.", base:"vera",
          a:"eru", case:"NF", why:"the subject húsgögn is plural, so það eru", mode:"type" },

        { t:"speak", is:"Má ég sitja í sófanum?", en:"May I sit on the sofa?",
          tip:"Icelanders sit í a sofa, not á it." }
      ]
    },
    {
      n: 3,
      id: "u11l3",
      kind: "grammar",
      title: "Gamli sófinn",
      en: "The weak adjective",
      goal: "Switch an adjective into its weak form whenever the noun is definite.",
      minutes: 13,
      icon: "🧶",
      teach: [
        { h: "Every adjective owns two coats",
          p: "On its own an adjective wears the strong endings from unit 6. The moment the noun becomes definite, the adjective goes soft and takes a weak ending instead. Same word, different coat.",
          ex: [["Sófinn er gamall.","The sofa is old."],
               ["Gamli sófinn er þægilegur.","The old sofa is comfortable."],
               ["Herbergið er bjart.","The room is bright."],
               ["Bjarta herbergið er mitt.","The bright room is mine."]],
          tip: "Notice where the adjective sits. After vera it stays strong. In front of a definite noun it goes weak." },
        { h: "The whole weak set",
          p: "This is the easy paradigm in Icelandic. Three endings do all the work.",
          table: { cols:["","kk","kvk","hk"],
                   rows:[["NF et.","hvíti","hvíta","hvíta"],
                         ["ÞF et.","hvíta","hvítu","hvíta"],
                         ["ÞGF et.","hvíta","hvítu","hvíta"],
                         ["EF et.","hvíta","hvítu","hvíta"],
                         ["ft., öll kyn","hvítu","hvítu","hvítu"]] },
          tip: "Only one box is -i: masculine, singular, nominative. Feminine goes -a once and then -u. Every plural is -u." },
        { h: "Four switches that flip the coat",
          p: "Any of these makes the noun definite, and a definite noun pulls its adjective into the weak form.",
          list: ["the suffixed article — nýja rúmið",
                 "a demonstrative — þessi hvíti veggur",
                 "a possessive — litla íbúðin mín",
                 "a superlative — besta herbergið í húsinu"],
          tip: "Superlatives are weak even with no article in sight." },
        { h: "Two adjectives that lose a vowel",
          p: "lítill and gamall drop their second vowel before a weak ending, the same syncope you saw in jökull → jökli.",
          table: { cols:["strong","weak kk NF","weak elsewhere"],
                   rows:[["lítill","litli","litla / litlu"],
                         ["gamall","gamli","gamla / gömlu"]] },
          tip: "gömlu takes ö because the ending contains u — the same u-shift as dagur → dögum." }
      ],
      vocab: ["bjartur","rúmgóður","þægilegur","notalegur","hreinn","skítugur"],
      items: [
        { t:"table", q:"Fill in the weak forms of hvítur.",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF et.", cells:["hvíti","hvíta","hvíta"], blank:[0] },
            { label:"ÞF et.", cells:["hvíta","hvítu","hvíta"], blank:[1] },
            { label:"ÞGF et.", cells:["hvíta","hvítu","hvíta"], blank:[] },
            { label:"ft.", cells:["hvítu","hvítu","hvítu"], blank:[2] }
          ] },

        { t:"fill", q:"Weak form, please.", sentence:"Þetta er ___ sófinn.", base:"gamall",
          a:"gamli", case:"NF", why:"masculine singular nominative is the only weak form in -i",
          mode:"type", tags:["adj:weak"] },

        { t:"fill", q:"Weak form, please.", sentence:"Ég sit í ___ stólnum.", base:"þægilegur",
          a:"þægilega", case:"ÞGF", why:"outside the nominative the weak masculine is -a",
          mode:"type", tags:["adj:weak","case:dat"] },

        { t:"fill", q:"Careful with this one.", sentence:"Ég bý í ___ íbúðinni minni.", base:"lítill",
          opts:["litla","litlu","lítilli"], a:"litlu", case:"ÞGF",
          why:"feminine weak outside the nominative is -u, and lítill drops its í",
          mode:"choice", tags:["adj:weak","syncope"] },

        { t:"fill", q:"Plural time.", sentence:"Hann þvær ___ gluggana.", base:"stór",
          a:"stóru", case:"ÞF", why:"every plural in the weak declension ends in -u",
          mode:"type", tags:["adj:weak","case:acc"] },

        { t:"choice", q:"Which one is right?",
          opts:["Þetta er nýja rúmið mitt.","Þetta er nýtt rúmið mitt.","Þetta er nýr rúmið mitt."],
          a:"Þetta er nýja rúmið mitt.", note:"rúmið is definite, so nýr goes weak: nýja." },

        { t:"choice", q:"The adjective stands alone after vera. Strong or weak?",
          opts:["Herbergið er bjart.","Herbergið er bjarta.","Herbergið er bjarti."],
          a:"Herbergið er bjart.", note:"A predicate adjective after vera is always strong, even when the subject is definite." },

        { t:"table", q:"Complete the weak forms of lítill.",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF et.", cells:["litli","litla","litla"], blank:[0] },
            { label:"ÞGF et.", cells:["litla","litlu","litla"], blank:[1] },
            { label:"ft.", cells:["litlu","litlu","litlu"], blank:[] }
          ] },

        { t:"build", q:"The bright room is mine.",
          a:"Bjarta herbergið er mitt", extra:["bjart","bjarti","mín"],
          note:"hk. weak is -a in every case." },

        { t:"type", q:"Type “This is the new sofa.”", a:"Þetta er nýi sófinn",
          hint:"kk. NF weak", note:"nýi — the one -i box in the table." },

        { t:"fill", q:"Superlatives are always weak.", sentence:"Þetta er ___ herbergið í íbúðinni.", base:"bestur",
          a:"besta", case:"NF", why:"superlatives take the weak ending even without an article",
          mode:"type", tags:["adj:weak","superlative"] },

        { t:"listen", speak:"Litla eldhúsið er mjög notalegt.", q:"What did you hear?", mode:"choice",
          opts:["Litla eldhúsið er mjög notalegt.","Lítið eldhús er mjög notalegt.","Litla eldhúsið er mjög bjart."],
          a:"Litla eldhúsið er mjög notalegt." },

        { t:"speak", is:"Gamli sófinn er of stór.", en:"The old sofa is too big.",
          tip:"Gamli — masculine, singular, nominative: the single -i form." }
      ]
    },
    {
      n: 4,
      id: "u11l4",
      kind: "lesson",
      title: "Þessi eða sá?",
      en: "This one or that one",
      goal: "Point at things with þessi and sá, and talk about renting.",
      minutes: 10,
      icon: "👉",
      teach: [
        { h: "þessi points, sá refers",
          p: "þessi is the thing you can touch or nod at. sá is the one further away, or the one you have both already been talking about.",
          ex: [["Þessi stóll er þægilegur.","This chair is comfortable."],
               ["Sá stóll er ljótur.","That chair is ugly."],
               ["Ég vil ekki þennan lampa.","I don't want this lamp."]],
          tip: "Both make the noun definite by themselves, so the noun keeps no article: þessi íbúð, never þessi íbúðin." },
        { h: "þessi",
          table: { cols:["","kk","kvk","hk"],
                   rows:[["NF et.","þessi","þessi","þetta"],
                         ["ÞF et.","þennan","þessa","þetta"],
                         ["ÞGF et.","þessum","þessari","þessu"],
                         ["EF et.","þessa","þessarar","þessa"],
                         ["NF ft.","þessir","þessar","þessi"],
                         ["ÞGF ft.","þessum","þessum","þessum"]] },
          tip: "þennan and þessari are the two you will fumble. Say them out loud a few times." },
        { h: "sá",
          p: "You already know most of sá: it is the hann/hún/það set, with a different nominative singular.",
          table: { cols:["","kk","kvk","hk"],
                   rows:[["NF et.","sá","sú","það"],
                         ["ÞF et.","þann","þá","það"],
                         ["ÞGF et.","þeim","þeirri","því"],
                         ["EF et.","þess","þeirrar","þess"],
                         ["NF ft.","þeir","þær","þau"],
                         ["ÞGF ft.","þeim","þeim","þeim"]] } },
        { h: "Renting words",
          list: ["leigja — to rent (from someone or to someone)",
                 "leigan — the rent you pay every month",
                 "flytja — to move house",
                 "til leigu — for rent, on the market"] }
      ],
      vocab: ["þessi","sá","nágranni","leiga","leigja","flytja","kjallari","stigi","hæð"],
      items: [
        { t:"fill", q:"Choose the right form.", sentence:"Ég vil ekki ___ stól.", base:"þessi",
          opts:["þessi","þennan","þessum"], a:"þennan", case:"ÞF",
          why:"vilja takes the accusative, and the masculine accusative of þessi is þennan",
          mode:"choice", tags:["dem:þessi","case:acc"] },

        { t:"fill", q:"Choose the right form.", sentence:"Hún býr í ___ húsi.", base:"þessi",
          a:"þessu", case:"ÞGF", why:"í with a static location takes the dative; neuter is þessu",
          mode:"type", tags:["dem:þessi","case:dat"] },

        { t:"choice", q:"You are standing inside the flat. Which sentence?",
          opts:["Þessi íbúð er björt.","Þessi íbúðin er björt.","Þetta íbúð er björt."],
          a:"Þessi íbúð er björt.", note:"A demonstrative replaces the article — never both." },

        { t:"fill", q:"Choose the right form of sá.", sentence:"Er ___ íbúð enn til leigu?", base:"sá",
          a:"sú", case:"NF", why:"the feminine nominative of sá is sú",
          mode:"type", tags:["dem:sá"] },

        { t:"build", q:"I don't know that neighbour.",
          a:"Ég þekki ekki þann nágranna", extra:["þennan","sá","nágranninn"],
          note:"þekkja takes the accusative: þann nágranna." },

        { t:"match", q:"Match the words",
          pairs:[["þessi","this"],["sá","that"],["nágranni","neighbour"],["leiga","rent"],["kjallari","basement"]] },

        { t:"type", q:"Type “We are moving in May.”", a:"Við flytjum í maí",
          hint:"flytja is a -ja verb" },

        { t:"choice", q:"Which means “I rent a small flat”?",
          opts:["Ég leigi litla íbúð.","Ég leigi lítil íbúð.","Ég leigi litlu íbúð."],
          a:"Ég leigi litla íbúð.",
          note:"The noun is indefinite, so the adjective stays strong: feminine accusative litla." },

        { t:"gender", word:"kjallari", a:"kk", note:"Weak nouns in -i are masculine." },

        { t:"listen", speak:"Sá stóll er frá ömmu minni.", q:"What did you hear?", mode:"choice",
          opts:["Sá stóll er frá ömmu minni.","Þessi stóll er frá ömmu minni.","Sá stóll er frá mömmu minni."],
          a:"Sá stóll er frá ömmu minni." },

        { t:"speak", is:"Þessi lykill gengur ekki að þessari hurð.", en:"This key doesn't fit this door.",
          tip:"þessari — feminine dative, the odd one with -ari." }
      ]
    },
    {
      n: 5,
      id: "u11l5",
      kind: "story",
      title: "Íbúðin á þriðju hæð",
      en: "The flat on the third floor",
      goal: "Follow a flat viewing and catch the weak adjectives as they go past.",
      minutes: 12,
      icon: "🔑",
      teach: [
        { h: "Before you read",
          p: "Anna and Sóley are looking at a flat together. Jónas lives on the same staircase and he is the one holding the key. Somebody has got there before them.",
          list: ["til leigu — for rent, on the market",
                 "virka — to work, to function",
                 "lundi — a puffin"] },
        { h: "Two things to watch",
          list: ["Litla eldhúsið er gamalt — weak in front of the noun, strong after vera",
                 "Það búa engin dýr — the verb follows dýr, not það",
                 "hjá mér, hjá þér — the dative, every time"] }
      ],
      story: {
        title: "Íbúðin á þriðju hæð",
        lines: [
          { sp:"Jónas", is:"Komið inn. Ég er með lykilinn að íbúðinni.", en:"Come in. I've got the key to the flat." },
          { sp:"Anna", is:"Takk, Jónas. Vá, stofan er björt!", en:"Thanks, Jónas. Wow, the living room is bright!" },
          { sp:"Jónas", is:"Já, þetta er besta herbergið í íbúðinni.", en:"Yes, this is the best room in the flat." },
          { sp:"Sóley", is:"Og eldhúsið?", en:"And the kitchen?" },
          { sp:"Jónas", is:"Hérna inni. Litla eldhúsið er gamalt en notalegt.", en:"In here. The little kitchen is old but cosy." },
          { sp:"Anna", is:"Virkar gamla eldavélin?", en:"Does the old cooker work?" },
          { sp:"Jónas", is:"Hún virkar vel. Ísskápurinn er nýr og þvottavélin er í kjallaranum.", en:"It works fine. The fridge is new and the washing machine is in the basement." },
          { sp:"Sóley", is:"Anna, sjáðu! Það er eitthvað í skápnum.", en:"Anna, look! There is something in the cupboard." },
          { sp:"Anna", is:"Þetta er Lúlli. Hann er lundi og hann býr hjá mér.", en:"That's Lúlli. He is a puffin and he lives at my place." },
          { sp:"Jónas", is:"Hjá þér? Það búa engin dýr í þessu húsi.", en:"At your place? No animals live in this building." },
          { sp:"Anna", is:"Lúlli er ekki dýr. Hann er vinur minn.", en:"Lúlli isn't an animal. He's a friend of mine." },
          { sp:"Sóley", is:"Þá tökum við íbúðina.", en:"Then we'll take the flat." }
        ],
        glossary: [
          ["komið inn","come in"],
          ["hérna inni","in here"],
          ["virka","to work, to function"],
          ["lundi","puffin"],
          ["dýr","animal"],
          ["þá","then, in that case"]
        ]
      },
      vocab: ["íbúð","stofa","eldhús","eldavél","ísskápur","þvottavél","kjallari","skápur","lykill","nágranni","notalegur","bjartur"],
      items: [
        { t:"choice", q:"Where is the washing machine?",
          opts:["Í kjallaranum","Í eldhúsinu","Í baðherberginu","Í stofunni"],
          a:"Í kjallaranum", note:"Í fjölbýlishúsi the laundry often sits downstairs for the whole building." },

        { t:"choice", q:"Who is sitting in the cupboard?",
          opts:["Lúlli the puffin","Jónas the neighbour","Sóley","Nobody at all"],
          a:"Lúlli the puffin", note:"Sóley finds him before Anna has to explain him." },

        { t:"match", q:"Match the definite forms",
          pairs:[["lykillinn","the key"],["nágranninn","the neighbour"],["skápurinn","the cupboard"],
                 ["kjallarinn","the basement"],["stofan","the living room"]] },

        { t:"fill", q:"Weak form, please.", sentence:"Virkar ___ eldavélin?", base:"gamall",
          a:"gamla", case:"NF", why:"the noun is definite, and the weak feminine nominative is -a",
          mode:"type", tags:["adj:weak","noun:fem"] },

        { t:"fill", q:"Choose the right demonstrative.", sentence:"Það búa engin dýr í ___ húsi.", base:"þessi",
          opts:["þessi","þetta","þessu"], a:"þessu", case:"ÞGF",
          why:"í with a static location takes the dative, and the neuter is þessu",
          mode:"choice", tags:["dem:þessi","case:dat"] },

        { t:"fill", q:"vera með wants one case.", sentence:"Ég er með ___ að íbúðinni.", base:"lykill",
          a:"lykilinn", case:"ÞF", why:"vera með takes the accusative: lykil plus the article -inn",
          mode:"type", tags:["case:acc","article"] },

        { t:"build", q:"Then we'll take the flat.",
          a:"Þá tökum við íbúðina", extra:["íbúðin","taka","hún"],
          note:"Þá comes first, so the verb has to come second: Þá tökum við.", tags:["syntax:v2"] },

        { t:"type", q:"Type “He lives at my place.”", a:"Hann býr hjá mér",
          hint:"hjá + ÞGF", note:"hjá never takes anything but the dative, so ég becomes mér." },

        { t:"listen", speak:"Litla eldhúsið er gamalt en notalegt.", q:"What did you hear?", mode:"choice",
          opts:["Litla eldhúsið er gamalt en notalegt.","Litla eldhúsið er lítið en notalegt.","Stóra eldhúsið er gamalt en notalegt."],
          a:"Litla eldhúsið er gamalt en notalegt." },

        { t:"choice", q:"Why does Jónas object to Lúlli?",
          opts:["No animals are allowed in the building","The cupboard belongs to him","The rent goes up","The kitchen is too small"],
          a:"No animals are allowed in the building",
          note:"Það búa engin dýr í þessu húsi. Anna answers that Lúlli is a friend, not an animal." },

        { t:"gender", word:"eldavél", a:"kvk", note:"vél is feminine, so every compound ending in -vél is feminine too." },

        { t:"speak", is:"Vá, stofan er björt!", en:"Wow, the living room is bright!",
          tip:"björt is the feminine of bjartur, and it stays strong because it comes after vera." }
      ]
    },
    {
      n: 6,
      id: "u11l6",
      kind: "checkpoint",
      title: "Heima hjá þér",
      en: "At your place",
      goal: "Put the whole unit together.",
      minutes: 13,
      icon: "🏁",
      teach: [
        { h: "What you now control",
          list: ["the rooms of a flat and the things that stand in them",
                 "það er for one thing, það eru for several",
                 "the weak adjective: -i for masculine singular nominative, -a elsewhere in the singular, -u for every plural",
                 "the four switches that make a noun definite: article, demonstrative, possessive, superlative",
                 "þessi for what is within reach and sá for what is further off or already mentioned",
                 "hjá plus the dative for being at somebody's place"] }
      ],
      vocab: ["íbúð","stofa","eldhús","sófi","skápur","hilla","þessi","sá","hreinn","bjartur","það er"],
      items: [
        { t:"choice", q:"Which sentence is right?",
          opts:["Litla íbúðin mín er á þriðju hæð.","Lítil íbúðin mín er á þriðju hæð.","Litlu íbúðin mín er á þriðju hæð."],
          a:"Litla íbúðin mín er á þriðju hæð.",
          note:"The possessive makes the noun definite, so lítill goes weak: feminine nominative litla.",
          tags:["adj:weak","poss:minn"] },

        { t:"fill", q:"Weak form, please.", sentence:"Ég sit í ___ sófanum.", base:"gamall",
          a:"gamla", case:"ÞGF", why:"outside the nominative the weak masculine is -a",
          mode:"type", tags:["adj:weak","case:dat"] },

        { t:"fill", q:"Plural time.", sentence:"Ég raða bókunum í ___ hillurnar.", base:"nýr",
          a:"nýju", case:"ÞF", why:"every plural in the weak declension ends in -u, whatever the gender",
          mode:"type", tags:["adj:weak","case:acc"] },

        { t:"table", q:"Complete the weak forms of hreinn.",
          cols:["","kk","kvk","hk"],
          rows:[
            { label:"NF et.", cells:["hreini","hreina","hreina"], blank:[0] },
            { label:"ÞGF et.", cells:["hreina","hreinu","hreina"], blank:[1] },
            { label:"ft.", cells:["hreinu","hreinu","hreinu"], blank:[2] }
          ] },

        { t:"choice", q:"Which one means “I don't want that chair”?",
          opts:["Ég vil ekki þann stól.","Ég vil ekki þennan stól.","Ég vil ekki sá stól.","Ég vil ekki þeim stól."],
          a:"Ég vil ekki þann stól.",
          note:"sá becomes þann in the accusative. þennan would be this chair, not that one.",
          tags:["dem:sá","case:acc"] },

        { t:"fill", q:"hjá takes one case only.", sentence:"Lykillinn er hjá ___ nágranna.", base:"þessi",
          opts:["þessi","þennan","þessum"], a:"þessum", case:"ÞGF",
          why:"hjá always governs the dative, and the masculine of þessi is þessum",
          mode:"choice", tags:["prep:hjá","dem:þessi","case:dat"] },

        { t:"build", q:"There are three rooms in the flat.",
          a:"Það eru þrjú herbergi í íbúðinni", extra:["er","þrír","íbúðina"],
          note:"herbergi is neuter, so three is þrjú, and the plural pulls það eru.",
          tags:["phrase:það er"] },

        { t:"type", q:"Type “I am at Anna's place.”", a:"Ég er heima hjá Önnu",
          hint:"hjá + ÞGF", note:"Women's names in -a end in -u in every case but the nominative, and the a turns into ö." },

        { t:"listen", speak:"Það eru skítug glös í vaskinum.", q:"What did you hear?", mode:"choice",
          opts:["Það eru skítug glös í vaskinum.","Það eru hrein glös í vaskinum.","Það er skítugt glas í vaskinum."],
          a:"Það eru skítug glös í vaskinum." },

        { t:"gender", word:"veggur", a:"kk", note:"A nominative singular in -ur is a strong masculine almost every time." },

        { t:"match", q:"Match the household words",
          pairs:[["ísskápur","fridge"],["þvottavél","washing machine"],["vaskur","sink"],
                 ["spegill","mirror"],["gólf","floor"],["hurð","door"]] },

        { t:"fill", q:"One verb form is missing.", sentence:"Það ___ þrjár myndir á veggnum.", base:"vera",
          a:"eru", case:"NF", why:"myndir is plural, so the verb goes plural too", mode:"type",
          tags:["phrase:það er"] },

        { t:"choice", q:"You are sitting on the sofa and you say it is comfortable. Which fits?",
          opts:["Þessi sófi er þægilegur.","Sá sófi er þægilegur.","Þetta sófi er þægilegur."],
          a:"Þessi sófi er þægilegur.",
          note:"þessi is the one you can touch. sá is the one across the room, or the one already under discussion.",
          tags:["dem:þessi"] },

        { t:"speak", is:"Þessi íbúð er björt og rúmgóð.", en:"This flat is bright and spacious.",
          tip:"þessi makes the noun definite, but björt and rúmgóð still stay strong because they follow vera." }
      ]
    }
  ]
};

export const vocab = [
  { w:"heimili", en:"home", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["heimili","heimili","heimili","heimilis"], pl:["heimili","heimili","heimilum","heimila"] },
    ex:{ is:"Heimilið mitt er lítið en bjart.", en:"My home is small but bright." } },

  { w:"íbúð", en:"flat, apartment", pos:"noun", g:"kvk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["íbúð","íbúð","íbúð","íbúðar"], pl:["íbúðir","íbúðir","íbúðum","íbúða"] },
    ex:{ is:"Íbúðin er á þriðju hæð.", en:"The flat is on the third floor." } },

  { w:"herbergi", en:"room", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["herbergi","herbergi","herbergi","herbergis"], pl:["herbergi","herbergi","herbergjum","herbergja"] },
    ex:{ is:"Það eru þrjú herbergi í íbúðinni.", en:"There are three rooms in the flat." } },

  { w:"stofa", en:"living room", pos:"noun", g:"kvk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["stofa","stofu","stofu","stofu"], pl:["stofur","stofur","stofum","stofa"] },
    ex:{ is:"Það er stór gluggi í stofunni.", en:"There is a big window in the living room." } },

  { w:"eldhús", en:"kitchen", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["eldhús","eldhús","eldhúsi","eldhúss"], pl:["eldhús","eldhús","eldhúsum","eldhúsa"] },
    ex:{ is:"Ég drekk kaffi í eldhúsinu á morgnana.", en:"I drink coffee in the kitchen in the mornings." } },

  { w:"baðherbergi", en:"bathroom", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["baðherbergi","baðherbergi","baðherbergi","baðherbergis"], pl:["baðherbergi","baðherbergi","baðherbergjum","baðherbergja"] },
    ex:{ is:"Þvottavélin er í baðherberginu.", en:"The washing machine is in the bathroom." } },

  { w:"svefnherbergi", en:"bedroom", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["svefnherbergi","svefnherbergi","svefnherbergi","svefnherbergis"], pl:["svefnherbergi","svefnherbergi","svefnherbergjum","svefnherbergja"] },
    ex:{ is:"Svefnherbergið mitt er mjög lítið.", en:"My bedroom is very small." } },

  { w:"gluggi", en:"window", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["gluggi","glugga","glugga","glugga"], pl:["gluggar","glugga","gluggum","glugga"] },
    ex:{ is:"Glugginn í stofunni er stór.", en:"The window in the living room is big." } },

  { w:"veggur", en:"wall", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["veggur","vegg","vegg","veggjar"], pl:["veggir","veggi","veggjum","veggja"] },
    ex:{ is:"Myndin hangir á veggnum.", en:"The picture hangs on the wall." } },

  { w:"gólf", en:"floor (surface)", pos:"noun", g:"hk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["gólf","gólf","gólfi","gólfs"], pl:["gólf","gólf","gólfum","gólfa"] },
    ex:{ is:"Teppið liggur á gólfinu.", en:"The rug lies on the floor." } },

  { w:"hurð", en:"door", pos:"noun", g:"kvk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["hurð","hurð","hurð","hurðar"], pl:["hurðir","hurðir","hurðum","hurða"] },
    ex:{ is:"Hurðin er opin.", en:"The door is open." } },

  { w:"hæð", en:"floor, storey", pos:"noun", g:"kvk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["hæð","hæð","hæð","hæðar"], pl:["hæðir","hæðir","hæðum","hæða"] },
    ex:{ is:"Við búum á annarri hæð.", en:"We live on the second floor." } },

  { w:"kjallari", en:"basement, cellar", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["kjallari","kjallara","kjallara","kjallara"], pl:["kjallarar","kjallara","kjöllurum","kjallara"] },
    ex:{ is:"Þvottavélin er í kjallaranum.", en:"The washing machine is in the basement." } },

  { w:"stigi", en:"staircase, stairs", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["stigi","stiga","stiga","stiga"], pl:["stigar","stiga","stigum","stiga"] },
    ex:{ is:"Ég geng upp stigann á hverjum degi.", en:"I walk up the stairs every day." } },

  { w:"garður", en:"garden, yard", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["garður","garð","garði","garðs"], pl:["garðar","garða","görðum","garða"] },
    ex:{ is:"Það er lítill garður fyrir aftan húsið.", en:"There is a small garden behind the house." } },

  { w:"stóll", en:"chair", pos:"noun", g:"kk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["stóll","stól","stól","stóls"], pl:["stólar","stóla","stólum","stóla"] },
    ex:{ is:"Þessi stóll er þægilegur.", en:"This chair is comfortable." } },

  { w:"sófi", en:"sofa", pos:"noun", g:"kk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["sófi","sófa","sófa","sófa"], pl:["sófar","sófa","sófum","sófa"] },
    ex:{ is:"Kötturinn sefur alltaf í sófanum.", en:"The cat always sleeps on the sofa." } },

  { w:"rúm", en:"bed", pos:"noun", g:"hk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["rúm","rúm","rúmi","rúms"], pl:["rúm","rúm","rúmum","rúma"] },
    ex:{ is:"Rúmið mitt er of mjúkt.", en:"My bed is too soft." } },

  { w:"skápur", en:"cupboard, wardrobe", pos:"noun", g:"kk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["skápur","skáp","skáp","skáps"], pl:["skápar","skápa","skápum","skápa"] },
    ex:{ is:"Fötin eru í skápnum.", en:"The clothes are in the wardrobe." } },

  { w:"hilla", en:"shelf", pos:"noun", g:"kvk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["hilla","hillu","hillu","hillu"], pl:["hillur","hillur","hillum","hillna"] },
    ex:{ is:"Bækurnar standa í hillunni.", en:"The books are on the shelf." } },

  { w:"lampi", en:"lamp", pos:"noun", g:"kk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["lampi","lampa","lampa","lampa"], pl:["lampar","lampa","lömpum","lampa"] },
    ex:{ is:"Lampinn við sófann er ljótur.", en:"The lamp by the sofa is ugly." } },

  { w:"teppi", en:"rug, blanket", pos:"noun", g:"hk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["teppi","teppi","teppi","teppis"], pl:["teppi","teppi","teppum","teppa"] },
    ex:{ is:"Teppið á gólfinu er blátt.", en:"The rug on the floor is blue." } },

  { w:"spegill", en:"mirror", pos:"noun", g:"kk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["spegill","spegil","spegli","spegils"], pl:["speglar","spegla","speglum","spegla"] },
    ex:{ is:"Spegillinn hangir á veggnum.", en:"The mirror hangs on the wall." } },

  { w:"skrifborð", en:"desk", pos:"noun", g:"hk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["skrifborð","skrifborð","skrifborði","skrifborðs"], pl:["skrifborð","skrifborð","skrifborðum","skrifborða"] },
    ex:{ is:"Tölvan mín er á skrifborðinu.", en:"My computer is on the desk." } },

  { w:"húsgagn", en:"piece of furniture (pl. húsgögn = furniture)", pos:"noun", g:"hk", topic:"furniture", unit:11, cefr:"A2",
    forms:{ sg:["húsgagn","húsgagn","húsgagni","húsgagns"], pl:["húsgögn","húsgögn","húsgögnum","húsgagna"] },
    ex:{ is:"Húsgögnin í stofunni eru ný.", en:"The furniture in the living room is new." } },

  { w:"ísskápur", en:"fridge", pos:"noun", g:"kk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["ísskápur","ísskáp","ísskáp","ísskáps"], pl:["ísskápar","ísskápa","ísskápum","ísskápa"] },
    ex:{ is:"Mjólkin er í ísskápnum.", en:"The milk is in the fridge." } },

  { w:"eldavél", en:"cooker, stove", pos:"noun", g:"kvk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["eldavél","eldavél","eldavél","eldavélar"], pl:["eldavélar","eldavélar","eldavélum","eldavéla"] },
    ex:{ is:"Eldavélin er gömul en hún virkar.", en:"The cooker is old but it works." } },

  { w:"þvottavél", en:"washing machine", pos:"noun", g:"kvk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["þvottavél","þvottavél","þvottavél","þvottavélar"], pl:["þvottavélar","þvottavélar","þvottavélum","þvottavéla"] },
    ex:{ is:"Þvottavélin er í kjallaranum.", en:"The washing machine is in the basement." } },

  { w:"sturta", en:"shower", pos:"noun", g:"kvk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["sturta","sturtu","sturtu","sturtu"], pl:["sturtur","sturtur","sturtum","sturta"] },
    ex:{ is:"Ég fer í sturtu á morgnana.", en:"I take a shower in the mornings." } },

  { w:"vaskur", en:"sink", pos:"noun", g:"kk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["vaskur","vask","vaski","vasks"], pl:["vaskar","vaska","vöskum","vaska"] },
    ex:{ is:"Það eru skítug glös í vaskinum.", en:"There are dirty glasses in the sink." } },

  { w:"lykill", en:"key", pos:"noun", g:"kk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["lykill","lykil","lykli","lykils"], pl:["lyklar","lykla","lyklum","lykla"] },
    ex:{ is:"Ég er með lykilinn.", en:"I have the key." } },

  { w:"mynd", en:"picture, photo", pos:"noun", g:"kvk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["mynd","mynd","mynd","myndar"], pl:["myndir","myndir","myndum","mynda"] },
    ex:{ is:"Við hengjum myndina á vegginn.", en:"We hang the picture on the wall." } },

  { w:"sjónvarp", en:"television", pos:"noun", g:"hk", topic:"household", unit:11, cefr:"A2",
    forms:{ sg:["sjónvarp","sjónvarp","sjónvarpi","sjónvarps"], pl:["sjónvörp","sjónvörp","sjónvörpum","sjónvarpa"] },
    ex:{ is:"Sjónvarpið er of stórt fyrir stofuna.", en:"The television is too big for the living room." } },

  { w:"nágranni", en:"neighbour", pos:"noun", g:"kk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["nágranni","nágranna","nágranna","nágranna"], pl:["nágrannar","nágranna","nágrönnum","nágranna"] },
    ex:{ is:"Nágranninn minn vaknar klukkan sex.", en:"My neighbour wakes up at six." } },

  { w:"leiga", en:"rent", pos:"noun", g:"kvk", topic:"housing", unit:11, cefr:"A2",
    forms:{ sg:["leiga","leigu","leigu","leigu"], pl:["leigur","leigur","leigum","leiga"] },
    ex:{ is:"Leigan í Reykjavík er dýr.", en:"The rent in Reykjavík is expensive." } },

  { w:"leigja", en:"to rent", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞF", vclass:"weak-i",
    conj:{ pres:["leigi","leigir","leigir","leigjum","leigið","leigja"],
           past:["leigði","leigðir","leigði","leigðum","leigðuð","leigðu"], pp:"leigt" },
    ex:{ is:"Ég leigi litla íbúð í Vesturbænum.", en:"I rent a small flat in the west end." } },

  { w:"flytja", en:"to move (house)", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞF", vclass:"weak-ja",
    conj:{ pres:["flyt","flytur","flytur","flytjum","flytjið","flytja"],
           past:["flutti","fluttir","flutti","fluttum","fluttuð","fluttu"], pp:"flutt" },
    ex:{ is:"Við flytjum í nýja íbúð í maí.", en:"We are moving into a new flat in May." } },

  { w:"þrífa", en:"to clean", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞF", vclass:"strong",
    conj:{ pres:["þríf","þrífur","þrífur","þrífum","þrífið","þrífa"],
           past:["þreif","þreifst","þreif","þrifum","þrifuð","þrifu"], pp:"þrifið" },
    ex:{ is:"Ég þríf baðherbergið á laugardögum.", en:"I clean the bathroom on Saturdays." } },

  { w:"hengja", en:"to hang (something) up", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞF", vclass:"weak-i",
    conj:{ pres:["hengi","hengir","hengir","hengjum","hengið","hengja"],
           past:["hengdi","hengdir","hengdi","hengdum","hengduð","hengdu"], pp:"hengt" },
    ex:{ is:"Hún hengir myndina fyrir ofan sófann.", en:"She hangs the picture above the sofa." } },

  { w:"standa", en:"to stand", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"none", vclass:"strong",
    conj:{ pres:["stend","stendur","stendur","stöndum","standið","standa"],
           past:["stóð","stóðst","stóð","stóðum","stóðuð","stóðu"], pp:"staðið" },
    ex:{ is:"Sófinn stendur við gluggann.", en:"The sofa stands by the window." } },

  { w:"liggja", en:"to lie, to be lying", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"none", vclass:"weak-ja",
    conj:{ pres:["ligg","liggur","liggur","liggjum","liggið","liggja"],
           past:["lá","látst","lá","lágum","láguð","lágu"], pp:"legið" },
    ex:{ is:"Teppið liggur fyrir framan rúmið.", en:"The rug lies in front of the bed." } },

  { w:"raða", en:"to arrange, to put in order", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞGF", vclass:"weak-a",
    conj:{ pres:["raða","raðar","raðar","röðum","raðið","raða"],
           past:["raðaði","raðaðir","raðaði","röðuðum","röðuðuð","röðuðu"], pp:"raðað" },
    ex:{ is:"Ég raða bókunum í hilluna.", en:"I arrange the books on the shelf." } },

  { w:"mála", en:"to paint", pos:"verb", topic:"housing-verbs", unit:11, cefr:"A2", gov:"ÞF", vclass:"weak-a",
    conj:{ pres:["mála","málar","málar","málum","málið","mála"],
           past:["málaði","málaðir","málaði","máluðum","máluðuð","máluðu"], pp:"málað" },
    ex:{ is:"Við málum eldhúsið gult.", en:"We are painting the kitchen yellow." } },

  { w:"bjartur", en:"bright", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["bjartur","björt","bjart"], comp:"bjartari", sup:"bjartastur" },
    ex:{ is:"Þetta er bjart herbergi.", en:"This is a bright room." } },

  { w:"rúmgóður", en:"spacious", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["rúmgóður","rúmgóð","rúmgott"], comp:"rúmbetri", sup:"rúmbestur" },
    ex:{ is:"Stofan er rúmgóð og björt.", en:"The living room is spacious and bright." } },

  { w:"þægilegur", en:"comfortable", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["þægilegur","þægileg","þægilegt"], comp:"þægilegri", sup:"þægilegastur" },
    ex:{ is:"Þessi sófi er mjög þægilegur.", en:"This sofa is very comfortable." } },

  { w:"notalegur", en:"cosy", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["notalegur","notaleg","notalegt"], comp:"notalegri", sup:"notalegastur" },
    ex:{ is:"Eldhúsið er lítið en notalegt.", en:"The kitchen is small but cosy." } },

  { w:"hreinn", en:"clean", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["hreinn","hrein","hreint"], comp:"hreinni", sup:"hreinastur" },
    ex:{ is:"Gólfið er hreint núna.", en:"The floor is clean now." } },

  { w:"skítugur", en:"dirty", pos:"adj", topic:"describing", unit:11, cefr:"A2",
    decl:{ nom:["skítugur","skítug","skítugt"], comp:"skítugri", sup:"skítugastur" },
    ex:{ is:"Glugginn er skítugur eftir veturinn.", en:"The window is dirty after the winter." } },

  { w:"þessi", en:"this", pos:"pron", topic:"grammar", unit:11, cefr:"A2",
    ex:{ is:"Þessi íbúð er of dýr.", en:"This flat is too expensive." } },

  { w:"sá", en:"that", pos:"pron", topic:"grammar", unit:11, cefr:"A2",
    ex:{ is:"Sá stóll er frá ömmu minni.", en:"That chair is from my grandmother." } },

  { w:"fyrir framan", en:"in front of", pos:"prep", topic:"grammar", unit:11, cefr:"A2", gov:"ÞF",
    ex:{ is:"Teppið er fyrir framan sófann.", en:"The rug is in front of the sofa." } },

  { w:"við hliðina á", en:"next to, beside", pos:"prep", topic:"grammar", unit:11, cefr:"A2", gov:"ÞGF",
    ex:{ is:"Lampinn er við hliðina á rúminu.", en:"The lamp is next to the bed." } },

  { w:"það er", en:"there is / there are", pos:"phrase", topic:"grammar", unit:11, cefr:"A2",
    ex:{ is:"Það er ísskápur í eldhúsinu.", en:"There is a fridge in the kitchen." } }
];

export default unit;
