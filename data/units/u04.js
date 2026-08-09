// Unit 4 — Hvert förum við? / Where are we going?
// Getting around town: directions, transport, and the static/motion/source triads.

export const unit = {
  id: 4,
  slug: "u04",
  title: "Hvert förum við?",
  en: "Where are we going?",
  cefr: "A1.1",
  icon: "🚌",
  blurb: "Find the bus, cross the street, and say where you are actually going.",
  canDo: [
    "Ask where something is, where it is going and where it came from",
    "Get around Reykjavík by bus, bike, car or on foot",
    "Give and follow simple directions in a city",
    "Say whether I am at home, downtown, inside or outside"
  ],
  lessons: [
    /* ------------------------------------------------------------------ L1 */
    {
      n: 1,
      id: "u04l1",
      kind: "lesson",
      title: "Hvar? Hvert? Hvaðan?",
      en: "Where, where to, where from",
      goal: "Pick the right question word for standing still, leaving and arriving.",
      minutes: 9,
      icon: "🧭",
      teach: [
        {
          h: "Three questions, not one",
          p: "English uses \"where\" for all of it. Icelandic splits the job three ways. Hvar? pins a spot. Hvert? points away from you. Hvaðan? points back to a source.",
          ex: [
            ["Hvar er stoppistöðin?", "Where is the bus stop?"],
            ["Hvert ferð þú?", "Where are you going?"],
            ["Hvaðan kemur rútan?", "Where does the coach come from?"]
          ],
          tip: "If the verb moves, hvar is wrong."
        },
        {
          h: "fara and koma",
          table: {
            cols: ["", "fara — go", "koma — come"],
            rows: [
              ["ég", "fer", "kem"],
              ["þú", "ferð", "kemur"],
              ["hann/hún", "fer", "kemur"],
              ["við", "förum", "komum"],
              ["þið", "farið", "komið"],
              ["þeir/þær/þau", "fara", "koma"]
            ]
          },
          tip: "förum has ö because the u in the ending drags a over to ö. Same trick in dagur → dögum."
        },
        {
          h: "The answer copies the question",
          p: "Ask hvar and you get hér or þarna. Ask hvert and you get hingað or þangað. The shapes travel in pairs.",
          ex: [
            ["Hvar er Ari? Hann er þarna.", "Where is Ari? He's over there."],
            ["Hvert fer strætó? Hann fer þangað.", "Where does the bus go? It goes there."]
          ]
        }
      ],
      vocab: ["hvar", "hvert", "hvaðan", "hér", "þarna", "hingað", "þangað", "fara", "koma", "stoppistöð", "strætó"],
      items: [
        {
          t: "choice",
          q: "Ari is pulling his coat on and heading for the door. What do you ask him?",
          opts: ["Hvert ferð þú?", "Hvar ert þú?", "Hvaðan ert þú?", "Hvar ferð þú?"],
          a: "Hvert ferð þú?",
          note: "He is moving away from you, so the question has to be hvert.",
          tags: ["adv:motion", "q:hvert"]
        },
        {
          t: "choice",
          q: "Which word means \"where from\"?",
          opts: ["hvaðan", "hvert", "hvar", "hingað"],
          a: "hvaðan",
          note: "The -an ending marks a source. You will see it again in héðan and þaðan.",
          tags: ["adv:source"]
        },
        {
          t: "type",
          q: "Type \"Where is the bus stop?\"",
          a: "Hvar er stoppistöðin?",
          hint: "no movement",
          note: "The stop is not going anywhere, so hvar.",
          tags: ["q:hvar"]
        },
        {
          t: "build",
          q: "Where does the coach come from?",
          a: "Hvaðan kemur rútan",
          extra: ["hvert", "fer", "þangað"],
          note: "Question word first, then the verb, then the subject."
        },
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["hvar", "where"],
            ["hvert", "where to"],
            ["hvaðan", "where from"],
            ["hér", "here"],
            ["þarna", "over there"],
            ["hingað", "to here"]
          ]
        },
        {
          t: "listen",
          speak: "Hvert förum við?",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Hvert förum við?", "Hvar erum við?", "Hvaðan komum við?"],
          a: "Hvert förum við?",
          note: "hv- is pronounced [kv]: \"kvert\"."
        },
        {
          t: "fill",
          q: "Put fara into the right form.",
          sentence: "Við ___ í bæinn.",
          base: "fara",
          a: "förum",
          mode: "type",
          why: "1st person plural: the -um ending pulls a over to ö.",
          tags: ["verb:fara"]
        },
        {
          t: "fill",
          q: "Which question word fits?",
          sentence: "___ er stoppistöðin?",
          base: "hvar / hvert / hvaðan",
          opts: ["Hvar", "Hvert", "Hvaðan"],
          a: "Hvar",
          mode: "choice",
          why: "er means nothing is moving, so hvar."
        },
        {
          t: "gender",
          word: "rúta",
          a: "kvk",
          note: "Nouns ending in -a are nearly always feminine: rúta, gata, kirkja."
        },
        {
          t: "speak",
          is: "Hvaðan kemur þú?",
          en: "Where do you come from?",
          tip: "Say the hv- as [kv] and keep the stress on the first syllable: KVA-ðan."
        },
        {
          t: "choice",
          q: "Rútan fer ... á morgun. Which word means \"there\" as a destination?",
          opts: ["þangað", "þar", "þaðan", "þarna"],
          a: "þangað",
          note: "fer is movement, so the destination form þangað.",
          tags: ["adv:motion"]
        }
      ]
    },

    /* ------------------------------------------------------------------ L2 */
    {
      n: 2,
      id: "u04l2",
      kind: "lesson",
      title: "Með strætó eða á hjóli?",
      en: "By bus or by bike?",
      goal: "Name the ways of getting around and say which one you take.",
      minutes: 9,
      icon: "🚲",
      teach: [
        {
          h: "You ride með + dative",
          p: "If you sit inside it, Icelandic puts you there with með, and the vehicle goes into the dative.",
          ex: [
            ["Ég fer með strætó.", "I go by bus."],
            ["Við förum með rútunni til Akureyrar.", "We take the coach to Akureyri."],
            ["Hún kemur með leigubíl.", "She's coming by taxi."]
          ],
          tip: "strætó never changes shape in any case. It is the friendliest word in the lesson."
        },
        {
          h: "Bikes sit on top, so they take á",
          ex: [
            ["Ég kem á hjóli.", "I'm coming by bike."],
            ["Ari fer gangandi.", "Ari goes on foot."]
          ],
          tip: "gangandi is \"walking\" frozen into an adverb. Nothing to decline."
        },
        {
          h: "Four ways to move",
          table: {
            cols: ["sögn", "ég", "English"],
            rows: [
              ["ganga", "geng", "walk"],
              ["keyra", "keyri", "drive"],
              ["hjóla", "hjóla", "cycle"],
              ["fara", "fer", "go"]
            ]
          },
          tip: "ganga is strong: a in the infinitive, e in geng."
        }
      ],
      vocab: ["strætó", "rúta", "bíll", "leigubíll", "hjól", "miði", "bílstjóri", "flugvöllur", "keyra", "hjóla", "ganga"],
      items: [
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["strætó", "city bus"],
            ["rúta", "coach"],
            ["leigubíll", "taxi"],
            ["hjól", "bicycle"],
            ["flugvöllur", "airport"]
          ]
        },
        {
          t: "choice",
          q: "How do you say \"by bus\"?",
          opts: ["með strætó", "á strætó", "í strætó", "til strætó"],
          a: "með strætó",
          note: "Vehicles you sit inside take með.",
          tags: ["prep:með"]
        },
        {
          t: "fill",
          q: "Put the coach into the dative, with the article.",
          sentence: "Við förum með ___ til Akureyrar.",
          base: "rútan",
          a: "rútunni",
          case: "ÞGF",
          mode: "type",
          why: "með takes the dative: rútan → rútunni.",
          tags: ["case:dat", "prep:með"]
        },
        {
          t: "build",
          q: "I'm coming by bike.",
          a: "Ég kem á hjóli",
          extra: ["með", "fer", "hjólið"],
          note: "You sit on a bike, not in it: á + dative."
        },
        {
          t: "type",
          q: "Type \"She drives a car.\"",
          a: "Hún keyrir bíl",
          alt: ["Hún keyrir bílinn"],
          hint: "keyra + þolfall",
          note: "keyra takes a plain accusative object."
        },
        {
          t: "gender",
          word: "hjól",
          a: "hk",
          note: "Neuter nouns look the same in nominative and accusative: hjól / hjól."
        },
        {
          t: "gender",
          word: "leigubíll",
          a: "kk",
          note: "The -ll here is a masculine nominative ending: leigubíll → leigubílinn."
        },
        {
          t: "listen",
          speak: "Hvar kaupi ég miða?",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Hvar kaupi ég miða?", "Hvar er miðinn?", "Hvað kostar miðinn?"],
          a: "Hvar kaupi ég miða?",
          note: "miði → miða in the accusative."
        },
        {
          t: "choice",
          q: "Ari has no car and the rain is coming in sideways. What does he say?",
          opts: ["Ég tek leigubíl.", "Ég hjóla í vinnuna.", "Ég geng heim.", "Ég keyri í bæinn."],
          a: "Ég tek leigubíl.",
          note: "taka → tek. The a becomes e in the first person singular."
        },
        {
          t: "fill",
          q: "Which preposition?",
          sentence: "Ég fer í vinnuna ___ strætó.",
          base: "með / á / í",
          opts: ["með", "á", "í"],
          a: "með",
          mode: "choice",
          why: "Anything you sit inside takes með."
        },
        {
          t: "speak",
          is: "Stoppar strætó hérna?",
          en: "Does the bus stop here?",
          tip: "The pp in stoppar is preaspirated: a puff of h sneaks in — \"stohp-ar\"."
        }
      ]
    },

    /* ------------------------------------------------------------------ L3 */
    {
      n: 3,
      id: "u04l3",
      kind: "grammar",
      title: "Hingað, þangað, héðan",
      en: "Here, there and away",
      goal: "Choose the static, the motion and the source form of every place word.",
      minutes: 12,
      icon: "📍",
      teach: [
        {
          h: "One idea, three shapes",
          p: "Every place word in Icelandic travels as a set. One form says where you are. One says where you are heading. One says where you started. Use the wrong shape and the sentence quietly stops making sense.",
          ex: [
            ["Ég er hér.", "I am here."],
            ["Komdu hingað.", "Come here."],
            ["Ég fer héðan.", "I'm leaving here."]
          ],
          tip: "English used to do this too: here, hither, hence."
        },
        {
          h: "The whole grid",
          table: {
            cols: ["hvar? — static", "hvert? — motion to", "hvaðan? — motion from"],
            rows: [
              ["hér", "hingað", "héðan"],
              ["þar / þarna", "þangað", "þaðan"],
              ["hvar", "hvert", "hvaðan"],
              ["inni", "inn", "innan"],
              ["úti", "út", "utan"],
              ["uppi", "upp", "—"],
              ["niðri", "niður", "—"],
              ["heima", "heim", "heiman"]
            ]
          },
          tip: "Learn them in rows, out loud: hér-hingað-héðan, þar-þangað-þaðan."
        },
        {
          h: "The static form is the long one",
          p: "Look down the first two columns. Standing still always adds a syllable: inni against inn, úti against út, heima against heim. Movement is short and blunt.",
          ex: [
            ["Krakkarnir eru úti.", "The kids are outside."],
            ["Krakkarnir fara út.", "The kids are going outside."],
            ["Ari er heima.", "Ari is at home."],
            ["Ari fer heim.", "Ari is going home."]
          ],
          tip: "Reykjavík people say niður í bæ on the way downtown and niðri í bæ once they are standing in it."
        },
        {
          h: "The from-forms are shy",
          p: "innan, utan and heiman almost never stand alone any more. You meet them inside fixed phrases, and that is how you should store them.",
          list: [
            "fyrir utan húsið — outside the house",
            "fyrir innan búðina — inside the shop",
            "að heiman — from home",
            "Ég fer að heiman á morgun. — I'm leaving home tomorrow."
          ]
        }
      ],
      vocab: ["hér", "hingað", "héðan", "þar", "þangað", "þaðan", "hvar", "hvert", "hvaðan", "inni", "inn", "úti", "út", "uppi", "upp", "niðri", "niður", "heima", "heim"],
      items: [
        {
          t: "table",
          q: "Complete the here / there set.",
          cols: ["", "hvar?", "hvert?", "hvaðan?"],
          rows: [
            { label: "near you", cells: ["hér", "hingað", "héðan"], blank: [1] },
            { label: "away from you", cells: ["þar", "þangað", "þaðan"], blank: [2] },
            { label: "question", cells: ["hvar", "hvert", "hvaðan"], blank: [1] }
          ],
          note: "Every row keeps its own consonant: h-h-h, þ-þ-þ, hv-hv-hv."
        },
        {
          t: "table",
          q: "Complete: in, out, up, down, home.",
          cols: ["", "kyrrstaða — static", "hreyfing — motion"],
          rows: [
            { label: "inn-", cells: ["inni", "inn"], blank: [0] },
            { label: "út-", cells: ["úti", "út"], blank: [1] },
            { label: "upp-", cells: ["uppi", "upp"], blank: [] },
            { label: "niður-", cells: ["niðri", "niður"], blank: [0] },
            { label: "heim-", cells: ["heima", "heim"], blank: [1] }
          ],
          note: "Static forms end in a vowel. Motion forms stop dead on a consonant."
        },
        {
          t: "fill",
          q: "Static or motion?",
          sentence: "Ari er ___ og Halla er úti.",
          base: "inni / inn / innan",
          opts: ["inni", "inn", "innan"],
          a: "inni",
          mode: "choice",
          why: "Nobody is moving, so the long static form."
        },
        {
          t: "fill",
          q: "Static or motion?",
          sentence: "Ari fer ___ í húsið.",
          base: "inni / inn",
          a: "inn",
          mode: "type",
          why: "fer is movement into something, so the short form."
        },
        {
          t: "fill",
          q: "Halla is already downtown.",
          sentence: "Halla er ___ í bæ.",
          base: "niðri / niður / neðan",
          opts: ["niðri", "niður", "neðan"],
          a: "niðri",
          mode: "choice",
          why: "She has arrived, so niðri."
        },
        {
          t: "fill",
          q: "We are on our way.",
          sentence: "Við förum ___ í bæ á morgun.",
          base: "niðri / niður",
          a: "niður",
          mode: "type",
          why: "Motion downtown takes the short form niður."
        },
        {
          t: "fill",
          q: "Homewards or at home?",
          sentence: "Ég fer ___ eftir vinnu.",
          base: "heima / heim",
          a: "heim",
          mode: "type",
          why: "heim = homewards, heima = at home."
        },
        {
          t: "fill",
          q: "Homewards or at home?",
          sentence: "Ari er ___ í dag.",
          base: "heima / heim",
          a: "heima",
          mode: "type",
          why: "No movement, so heima."
        },
        {
          t: "choice",
          q: "Which one answers hvaðan?",
          opts: ["þaðan", "þangað", "þarna", "þar"],
          a: "þaðan",
          note: "The -an ending is the source marker across the whole grid."
        },
        {
          t: "build",
          q: "The coach leaves from here.",
          a: "Rútan fer héðan",
          extra: ["hingað", "þaðan", "kemur"],
          note: "Leaving a place → héðan, not hér."
        },
        {
          t: "build",
          q: "Come here!",
          a: "Komdu hingað",
          extra: ["hér", "héðan", "farðu"],
          note: "An invitation is movement towards the speaker: hingað."
        },
        {
          t: "type",
          q: "Type \"We're going there tomorrow.\"",
          a: "Við förum þangað á morgun",
          hint: "motion → þangað"
        },
        {
          t: "listen",
          speak: "Hvaðan kemur þú?",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Hvaðan kemur þú?", "Hvert ferð þú?", "Hvar ert þú?"],
          a: "Hvaðan kemur þú?"
        }
      ]
    },

    /* ------------------------------------------------------------------ L4 */
    {
      n: 4,
      id: "u04l4",
      kind: "lesson",
      title: "Beint áfram og til hægri",
      en: "Straight on and to the right",
      goal: "Give directions and place yourself in a town by name.",
      minutes: 10,
      icon: "➡️",
      teach: [
        {
          h: "Three phrases carry most of the work",
          ex: [
            ["Farðu beint áfram.", "Go straight ahead."],
            ["Beygðu til hægri.", "Turn right."],
            ["Bakaríið er til vinstri.", "The bakery is on the left."]
          ],
          tip: "beygja means to bend. In Icelandic you bend to the right rather than turn."
        },
        {
          h: "í or á with place names",
          p: "Each town in Iceland picks í or á once and keeps it forever. Open, high or island-like places tend to take á; bays and hollows tend to take í. There is no rule you can safely derive. You learn them one town at a time.",
          table: {
            cols: ["á", "í"],
            rows: [
              ["á Íslandi", "í Reykjavík"],
              ["á Akureyri", "í Keflavík"],
              ["á Selfossi", "í Hafnarfirði"],
              ["á Hlemmi", "í Kópavogi"]
            ]
          },
          tip: "Ask an Icelander which one a town takes. They will know instantly and will not know why."
        },
        {
          h: "Standing still or heading over",
          p: "The same preposition swaps case when you start moving. Sitting still is dative. Heading there is accusative. With town names, motion usually jumps to til plus the genitive instead.",
          ex: [
            ["Ég er í bænum.", "I'm in town."],
            ["Ég fer í bæinn.", "I'm going into town."],
            ["Hún er á Akureyri.", "She's in Akureyri."],
            ["Hún fer til Akureyrar.", "She's going to Akureyri."]
          ]
        }
      ],
      vocab: ["beint áfram", "til hægri", "til vinstri", "beygja", "gata", "torg", "miðbær", "banki", "sundlaug", "bakarí", "kirkja", "safn", "horn", "brú", "bekkur", "kort", "apótek", "umferðarljós", "gangbraut"],
      items: [
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["banki", "bank"],
            ["sundlaug", "swimming pool"],
            ["bakarí", "bakery"],
            ["kirkja", "church"],
            ["safn", "museum"],
            ["torg", "square"]
          ]
        },
        {
          t: "choice",
          q: "Halla says: Beygðu til vinstri. What do you do?",
          opts: ["Turn left", "Turn right", "Go straight on", "Turn around"],
          a: "Turn left",
          note: "vinstri = left, hægri = right. Icelanders' right hand is the hægri one."
        },
        {
          t: "build",
          q: "Go straight ahead and turn right.",
          a: "Farðu beint áfram og beygðu til hægri",
          extra: ["vinstri", "komdu", "þangað"],
          note: "farðu and beygðu are the singular imperatives of fara and beygja."
        },
        {
          t: "fill",
          q: "Which preposition?",
          sentence: "Sundlaugin er ___ horninu.",
          base: "á / í / til",
          opts: ["á", "í", "til"],
          a: "á",
          mode: "choice",
          why: "Corners take á, and a static location takes the dative: á horninu."
        },
        {
          t: "fill",
          q: "Which preposition does this town take?",
          sentence: "Ari býr ___ Akureyri.",
          base: "á / í / til",
          opts: ["á", "í", "til"],
          a: "á",
          mode: "choice",
          why: "Akureyri is an á-town. This one is memory, not logic."
        },
        {
          t: "fill",
          q: "Which preposition does this town take?",
          sentence: "Halla vinnur ___ Reykjavík.",
          base: "á / í / til",
          opts: ["í", "á", "til"],
          a: "í",
          mode: "choice",
          why: "Reykjavík is an í-town, like Kópavogur and Hafnarfjörður."
        },
        {
          t: "type",
          q: "Type \"The bakery is on the left.\"",
          a: "Bakaríið er til vinstri",
          hint: "bakarí + the article"
        },
        {
          t: "gender",
          word: "kirkja",
          a: "kvk",
          note: "-a again: kirkja, kirkjan, kirkjuna."
        },
        {
          t: "gender",
          word: "torg",
          a: "hk",
          note: "Short words with no ending are usually neuter: torg, safn, kort, horn."
        },
        {
          t: "listen",
          speak: "Beygðu til hægri við kirkjuna.",
          q: "What did you hear?",
          mode: "choice",
          opts: [
            "Beygðu til hægri við kirkjuna.",
            "Beygðu til vinstri við kirkjuna.",
            "Farðu beint áfram að kirkjunni."
          ],
          a: "Beygðu til hægri við kirkjuna.",
          note: "við always takes the accusative: kirkjuna."
        },
        {
          t: "speak",
          is: "Fyrirgefðu, hvar er næsta stoppistöð?",
          en: "Excuse me, where's the nearest bus stop?",
          tip: "Say fyrirgefðu in one quick breath. Nobody slows down for it."
        }
      ]
    },

    /* ------------------------------------------------------------------ L5 */
    {
      n: 5,
      id: "u04l5",
      kind: "story",
      title: "Röng stoppistöð",
      en: "The wrong bus stop",
      goal: "Follow a real exchange at a bus stop and pull the direction words out of it.",
      minutes: 10,
      icon: "📖",
      teach: [
        {
          h: "Before you read",
          list: [
            "fyrirgefðu — excuse me; the way to open any question with a stranger",
            "rangur — wrong; rangri after á, because á takes the dative",
            "hinum megin — on the other side",
            "hlauptu — run! Ari does not."
          ]
        },
        {
          h: "Watch the triad at work",
          p: "Halla uses héðan and þangað two lines apart. Track which one points away from the pair of them and which one points back at the pavement they are standing on.",
          ex: [
            ["Ekki héðan.", "Not from here."],
            ["Strætó fjórtán fer þangað.", "Bus fourteen goes there."]
          ]
        }
      ],
      story: {
        title: "Röng stoppistöð",
        lines: [
          { sp: "Ari", is: "Fyrirgefðu, stoppar strætó fjórtán hérna?", en: "Excuse me, does bus fourteen stop here?" },
          { sp: "Halla", is: "Já, hann stoppar hérna. Hvert ert þú að fara?", en: "Yes, it stops here. Where are you going?" },
          { sp: "Ari", is: "Í sundlaugina í Laugardal.", en: "To the swimming pool in Laugardalur." },
          { sp: "Halla", is: "Þá stendur þú á rangri stoppistöð.", en: "Then you're standing at the wrong stop." },
          { sp: "Ari", is: "Rangri? Strætó fjórtán fer þangað.", en: "Wrong? Bus fourteen goes there." },
          { sp: "Halla", is: "Ekki héðan. Héðan fer hann niður í bæ.", en: "Not from here. From here it goes downtown." },
          { sp: "Ari", is: "Og hvaðan fer hann í Laugardal?", en: "And where does it go to Laugardalur from?" },
          { sp: "Halla", is: "Frá stoppistöðinni hinum megin. Farðu yfir götuna.", en: "From the stop on the other side. Cross the street." },
          { sp: "Ari", is: "Beint áfram og yfir gangbrautina?", en: "Straight ahead and over the crossing?" },
          { sp: "Halla", is: "Já. Og hlauptu. Hann kemur eftir þrjár mínútur.", en: "Yes. And run. It's coming in three minutes." },
          { sp: "Ari", is: "Ég hleyp aldrei.", en: "I never run." },
          { sp: "Halla", is: "Þá sérð þú miðbæinn. Hann er líka ágætur.", en: "Then you'll see the town centre. It's fine too." }
        ],
        glossary: [
          ["fyrirgefðu", "excuse me"],
          ["rangur", "wrong"],
          ["hinum megin", "on the other side"],
          ["yfir götuna", "across the street"],
          ["hlauptu", "run!"],
          ["ágætur", "fine, decent"]
        ]
      },
      vocab: ["stoppistöð", "miðbær", "gangbraut", "gata", "stoppa", "strætó", "héðan", "niður"],
      items: [
        {
          t: "choice",
          q: "Where does Ari want to go?",
          opts: [
            "To the swimming pool in Laugardalur",
            "To the bakery downtown",
            "To the airport",
            "Home"
          ],
          a: "To the swimming pool in Laugardalur"
        },
        {
          t: "choice",
          q: "What is wrong with where Ari is standing?",
          opts: [
            "It's the stop for the other direction",
            "The bus doesn't run today",
            "He needs a ticket first",
            "The stop has moved"
          ],
          a: "It's the stop for the other direction",
          note: "Same bus number, opposite pavement."
        },
        {
          t: "choice",
          q: "Hvað segir Halla um strætó fjórtán héðan?",
          opts: [
            "Hann fer niður í bæ.",
            "Hann fer í Laugardal.",
            "Hann fer á flugvöllinn.",
            "Hann stoppar ekki hérna."
          ],
          a: "Hann fer niður í bæ."
        },
        {
          t: "fill",
          q: "Which preposition does Halla use for crossing?",
          sentence: "Farðu ___ götuna.",
          base: "yfir / í / á",
          opts: ["yfir", "í", "á"],
          a: "yfir",
          mode: "choice",
          why: "yfir with movement across takes the accusative: götuna."
        },
        {
          t: "fill",
          q: "Put the adjective into the right form.",
          sentence: "Þá stendur þú á ___ stoppistöð.",
          base: "rangur",
          a: "rangri",
          case: "ÞGF",
          mode: "type",
          hint: "kvk. þágufall",
          why: "á for a static location takes the dative; feminine dative of rangur is rangri."
        },
        {
          t: "build",
          q: "Bus fourteen goes downtown.",
          a: "Strætó fjórtán fer niður í bæ",
          extra: ["þangað", "upp", "heim"],
          note: "niður í bæ, because the bus is on its way there."
        },
        {
          t: "type",
          q: "Type \"Excuse me, does the bus stop here?\"",
          a: "Fyrirgefðu, stoppar strætó hérna?",
          hint: "verb first in a yes/no question"
        },
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["fyrirgefðu", "excuse me"],
            ["hinum megin", "on the other side"],
            ["gangbraut", "pedestrian crossing"],
            ["stoppistöð", "bus stop"],
            ["miðbær", "town centre"]
          ]
        },
        {
          t: "listen",
          speak: "Farðu yfir götuna og bíddu þar.",
          q: "What did you hear?",
          mode: "choice",
          opts: [
            "Farðu yfir götuna og bíddu þar.",
            "Farðu niður götuna og bíddu hér.",
            "Komdu yfir götuna og bíddu hérna."
          ],
          a: "Farðu yfir götuna og bíddu þar."
        },
        {
          t: "gender",
          word: "gata",
          a: "kvk",
          note: "gata, götuna, götunni. The a turns to ö as soon as an ending arrives."
        },
        {
          t: "choice",
          q: "How does Ari react to \"hlauptu\"?",
          opts: [
            "He says he never runs",
            "He runs",
            "He takes a taxi",
            "He asks for a map"
          ],
          a: "He says he never runs"
        },
        {
          t: "speak",
          is: "Ég hleyp aldrei.",
          en: "I never run.",
          tip: "ey in hleyp is [ei], as in English \"hay\"."
        }
      ]
    },

    /* ------------------------------------------------------------------ L6 */
    {
      n: 6,
      id: "u04l6",
      kind: "checkpoint",
      title: "Hvert ertu að fara?",
      en: "Unit 4 checkpoint",
      goal: "Prove you can move around a town without losing a case ending.",
      minutes: 12,
      icon: "🏁",
      teach: [
        {
          h: "What you now control",
          list: [
            "hvar / hvert / hvaðan — and the matching answers hér, hingað, héðan",
            "The static-motion pairs: inni/inn, úti/út, uppi/upp, niðri/niður, heima/heim",
            "fara, koma, ganga, keyra, hjóla, beygja, stoppa in the present",
            "með + dative for anything you ride inside; á hjóli for a bike",
            "beint áfram, til hægri, til vinstri",
            "á Íslandi but í Reykjavík — and why nobody can explain it"
          ]
        }
      ],
      vocab: ["hvert", "hvaðan", "heim", "heima", "niðri", "niður", "strætó", "leigubíll", "flugvöllur", "brú", "bekkur", "kort", "horn", "sundlaug", "safn", "beygja", "til vinstri"],
      items: [
        {
          t: "choice",
          q: "Someone is walking out of the room. Which question do you use?",
          opts: ["Hvert?", "Hvar?", "Hvaðan?", "Hvenær?"],
          a: "Hvert?",
          note: "Movement away from you."
        },
        {
          t: "fill",
          q: "Put fara into the right form.",
          sentence: "Við ___ heim núna.",
          base: "fara",
          a: "förum",
          mode: "type",
          why: "1st person plural, with a turning to ö before -um."
        },
        {
          t: "fill",
          q: "Which preposition?",
          sentence: "Ég fer í vinnuna ___ strætó.",
          base: "með / á / til",
          opts: ["með", "á", "til"],
          a: "með",
          mode: "choice",
          why: "You sit inside a bus, so með."
        },
        {
          t: "build",
          q: "Turn left at the church.",
          a: "Beygðu til vinstri við kirkjuna",
          extra: ["hægri", "áfram", "götuna"],
          note: "við always takes the accusative."
        },
        {
          t: "type",
          q: "Type \"Where does the coach come from?\"",
          a: "Hvaðan kemur rútan?",
          hint: "source → hvaðan"
        },
        {
          t: "table",
          q: "Complete the static and motion pairs.",
          cols: ["", "kyrrstaða", "hreyfing"],
          rows: [
            { label: "inn-", cells: ["inni", "inn"], blank: [1] },
            { label: "út-", cells: ["úti", "út"], blank: [0] },
            { label: "heim-", cells: ["heima", "heim"], blank: [1] },
            { label: "niður-", cells: ["niðri", "niður"], blank: [0] }
          ]
        },
        {
          t: "gender",
          word: "sundlaug",
          a: "kvk",
          note: "sundlaug, sundlaugin, sundlaugina."
        },
        {
          t: "gender",
          word: "safn",
          a: "hk",
          note: "safn, safnið; plural söfn with the u-umlaut."
        },
        {
          t: "match",
          q: "Match the words",
          pairs: [
            ["leigubíll", "taxi"],
            ["flugvöllur", "airport"],
            ["brú", "bridge"],
            ["bekkur", "bench"],
            ["kort", "map"],
            ["horn", "corner"]
          ]
        },
        {
          t: "listen",
          speak: "Hún býr á Akureyri.",
          q: "What did you hear?",
          mode: "choice",
          opts: ["Hún býr á Akureyri.", "Hún býr í Reykjavík.", "Hún fer til Akureyrar."],
          a: "Hún býr á Akureyri."
        },
        {
          t: "choice",
          q: "Which sentence is correct?",
          opts: [
            "Ég er niðri í bæ.",
            "Ég er niður í bæ.",
            "Ég er niðri í bæinn.",
            "Ég fer niðri í bæ."
          ],
          a: "Ég er niðri í bæ.",
          note: "er means no movement, so niðri and the dative bæ."
        },
        {
          t: "fill",
          q: "Put the corner into the dative with the article.",
          sentence: "Bakaríið er á ___ við kirkjuna.",
          base: "hornið",
          a: "horninu",
          case: "ÞGF",
          mode: "type",
          why: "á for a static location takes the dative."
        },
        {
          t: "type",
          q: "Type \"I'm going home.\"",
          a: "Ég fer heim",
          hint: "motion, not location"
        },
        {
          t: "speak",
          is: "Hvert ætlar þú?",
          en: "Where are you off to?",
          tip: "æ is the diphthong in English \"eye\": AI-tlar."
        }
      ]
    }
  ]
};

export const vocab = [
  /* ---------------------------------------------------------- question words */
  { w: "hvar", en: "where", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Hvar er stoppistöðin?", en: "Where is the bus stop?" } },
  { w: "hvert", en: "where to", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Hvert ferð þú?", en: "Where are you going?" } },
  { w: "hvaðan", en: "where from", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Hvaðan kemur rútan?", en: "Where does the coach come from?" } },

  /* ---------------------------------------------------------- place adverbs */
  { w: "hér", en: "here", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ég bíð hér.", en: "I'll wait here." } },
  { w: "hingað", en: "to here, hither", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Komdu hingað.", en: "Come here." } },
  { w: "héðan", en: "from here", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Strætó fer héðan.", en: "The bus leaves from here." } },
  { w: "þar", en: "there (mentioned before)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ég vinn þar.", en: "I work there." } },
  { w: "þarna", en: "over there (in sight)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Kirkjan er þarna.", en: "The church is over there." } },
  { w: "þangað", en: "to there", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Við förum þangað á morgun.", en: "We're going there tomorrow." } },
  { w: "þaðan", en: "from there", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Hann kemur þaðan.", en: "He comes from there." } },
  { w: "inni", en: "inside (static)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Halla er inni.", en: "Halla is inside." } },
  { w: "inn", en: "in, inwards (motion)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Farðu inn.", en: "Go inside." } },
  { w: "úti", en: "outside (static)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Krakkarnir eru úti.", en: "The kids are outside." } },
  { w: "út", en: "out, outwards (motion)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ég fer út.", en: "I'm going out." } },
  { w: "uppi", en: "up, upstairs (static)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Safnið er uppi.", en: "The museum is upstairs." } },
  { w: "upp", en: "up (motion)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Við förum upp.", en: "We're going up." } },
  { w: "niðri", en: "down, downstairs (static)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ari er niðri í bæ.", en: "Ari is downtown." } },
  { w: "niður", en: "down (motion)", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ég fer niður í bæ.", en: "I'm going downtown." } },
  { w: "heima", en: "at home", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ert þú heima?", en: "Are you at home?" } },
  { w: "heim", en: "home, homewards", pos: "adv", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Ég geng heim.", en: "I walk home." } },

  /* ---------------------------------------------------------- direction phrases */
  { w: "beint áfram", en: "straight ahead", pos: "phrase", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Farðu beint áfram að torginu.", en: "Go straight ahead to the square." } },
  { w: "til hægri", en: "to the right", pos: "phrase", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Bankinn er til hægri.", en: "The bank is on the right." } },
  { w: "til vinstri", en: "to the left", pos: "phrase", topic: "directions", unit: 4, cefr: "A1",
    ex: { is: "Beygðu til vinstri við brúna.", en: "Turn left at the bridge." } },

  /* ---------------------------------------------------------- verbs */
  { w: "fara", en: "to go", pos: "verb", topic: "movement", unit: 4, cefr: "A1", vclass: "strong",
    conj: { pres: ["fer", "ferð", "fer", "förum", "farið", "fara"],
            past: ["fór", "fórst", "fór", "fórum", "fóruð", "fóru"], pp: "farið" },
    ex: { is: "Ég fer með strætó í vinnuna.", en: "I go to work by bus." } },
  { w: "koma", en: "to come", pos: "verb", topic: "movement", unit: 4, cefr: "A1", vclass: "strong",
    conj: { pres: ["kem", "kemur", "kemur", "komum", "komið", "koma"],
            past: ["kom", "komst", "kom", "komum", "komuð", "komu"], pp: "komið" },
    ex: { is: "Rútan kemur klukkan átta.", en: "The coach comes at eight." } },
  { w: "ganga", en: "to walk, to go", pos: "verb", topic: "movement", unit: 4, cefr: "A1", vclass: "strong",
    conj: { pres: ["geng", "gengur", "gengur", "göngum", "gangið", "ganga"],
            past: ["gekk", "gekkst", "gekk", "gengum", "genguð", "gengu"], pp: "gengið" },
    ex: { is: "Við göngum niður að höfninni.", en: "We walk down to the harbour." } },
  { w: "keyra", en: "to drive", pos: "verb", topic: "movement", unit: 4, cefr: "A1", vclass: "weak-i", gov: "ÞF",
    conj: { pres: ["keyri", "keyrir", "keyrir", "keyrum", "keyrið", "keyra"],
            past: ["keyrði", "keyrðir", "keyrði", "keyrðum", "keyrðuð", "keyrðu"], pp: "keyrt" },
    ex: { is: "Halla keyrir bílinn.", en: "Halla drives the car." } },
  { w: "hjóla", en: "to cycle", pos: "verb", topic: "movement", unit: 4, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["hjóla", "hjólar", "hjólar", "hjólum", "hjólið", "hjóla"],
            past: ["hjólaði", "hjólaðir", "hjólaði", "hjóluðum", "hjóluðuð", "hjóluðu"], pp: "hjólað" },
    ex: { is: "Ari hjólar í vinnuna.", en: "Ari cycles to work." } },
  { w: "beygja", en: "to turn", pos: "verb", topic: "directions", unit: 4, cefr: "A1", vclass: "weak-i",
    conj: { pres: ["beygi", "beygir", "beygir", "beygjum", "beygið", "beygja"],
            past: ["beygði", "beygðir", "beygði", "beygðum", "beygðuð", "beygðu"], pp: "beygt" },
    ex: { is: "Beygðu til hægri við bankann.", en: "Turn right at the bank." } },
  { w: "stoppa", en: "to stop", pos: "verb", topic: "transport", unit: 4, cefr: "A1", vclass: "weak-a",
    conj: { pres: ["stoppa", "stoppar", "stoppar", "stoppum", "stoppið", "stoppa"],
            past: ["stoppaði", "stoppaðir", "stoppaði", "stoppuðum", "stoppuðuð", "stoppuðu"], pp: "stoppað" },
    ex: { is: "Strætó stoppar við sundlaugina.", en: "The bus stops at the swimming pool." } },

  /* ---------------------------------------------------------- transport */
  { w: "strætó", en: "city bus", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["strætó", "strætó", "strætó", "strætós"], pl: null },
    ex: { is: "Ég fer með strætó í skólann.", en: "I take the bus to school." } },
  { w: "rúta", en: "coach, long-distance bus", pos: "noun", g: "kvk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["rúta", "rútu", "rútu", "rútu"], pl: ["rútur", "rútur", "rútum", "rútna"] },
    ex: { is: "Rútan fer til Akureyrar.", en: "The coach goes to Akureyri." } },
  { w: "bíll", en: "car", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["bíll", "bíl", "bíl", "bíls"], pl: ["bílar", "bíla", "bílum", "bíla"] },
    ex: { is: "Bíllinn stendur fyrir utan húsið.", en: "The car is parked outside the house." } },
  { w: "leigubíll", en: "taxi", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["leigubíll", "leigubíl", "leigubíl", "leigubíls"], pl: ["leigubílar", "leigubíla", "leigubílum", "leigubíla"] },
    ex: { is: "Við tökum leigubíl heim.", en: "We're taking a taxi home." } },
  { w: "hjól", en: "bicycle, wheel", pos: "noun", g: "hk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["hjól", "hjól", "hjóli", "hjóls"], pl: ["hjól", "hjól", "hjólum", "hjóla"] },
    ex: { is: "Hjólið mitt er úti.", en: "My bike is outside." } },
  { w: "flugvöllur", en: "airport", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["flugvöllur", "flugvöll", "flugvelli", "flugvallar"], pl: ["flugvellir", "flugvelli", "flugvöllum", "flugvalla"] },
    ex: { is: "Rútan fer á flugvöllinn.", en: "The coach goes to the airport." } },
  { w: "miði", en: "ticket", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["miði", "miða", "miða", "miða"], pl: ["miðar", "miða", "miðum", "miða"] },
    ex: { is: "Hvað kostar miðinn?", en: "How much is the ticket?" } },
  { w: "bílstjóri", en: "driver", pos: "noun", g: "kk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["bílstjóri", "bílstjóra", "bílstjóra", "bílstjóra"], pl: ["bílstjórar", "bílstjóra", "bílstjórum", "bílstjóra"] },
    ex: { is: "Bílstjórinn talar við Höllu.", en: "The driver is talking to Halla." } },
  { w: "stoppistöð", en: "bus stop", pos: "noun", g: "kvk", topic: "transport", unit: 4, cefr: "A1",
    forms: { sg: ["stoppistöð", "stoppistöð", "stoppistöð", "stoppistöðvar"], pl: ["stoppistöðvar", "stoppistöðvar", "stoppistöðvum", "stoppistöðva"] },
    ex: { is: "Stoppistöðin er á horninu.", en: "The bus stop is on the corner." } },

  /* ---------------------------------------------------------- city places */
  { w: "gata", en: "street", pos: "noun", g: "kvk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["gata", "götu", "götu", "götu"], pl: ["götur", "götur", "götum", "gatna"] },
    ex: { is: "Gatan heitir Laugavegur.", en: "The street is called Laugavegur." } },
  { w: "torg", en: "square", pos: "noun", g: "hk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["torg", "torg", "torgi", "torgs"], pl: ["torg", "torg", "torgum", "torga"] },
    ex: { is: "Við hittumst á torginu.", en: "We're meeting on the square." } },
  { w: "miðbær", en: "town centre", pos: "noun", g: "kk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["miðbær", "miðbæ", "miðbæ", "miðbæjar"], pl: null },
    ex: { is: "Miðbærinn er ekki stór.", en: "The town centre isn't big." } },
  { w: "banki", en: "bank", pos: "noun", g: "kk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["banki", "banka", "banka", "banka"], pl: ["bankar", "banka", "bönkum", "banka"] },
    ex: { is: "Bankinn opnar klukkan níu.", en: "The bank opens at nine." } },
  { w: "sundlaug", en: "swimming pool", pos: "noun", g: "kvk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["sundlaug", "sundlaug", "sundlaug", "sundlaugar"], pl: ["sundlaugar", "sundlaugar", "sundlaugum", "sundlauga"] },
    ex: { is: "Sundlaugin er í Laugardal.", en: "The pool is in Laugardalur." } },
  { w: "bakarí", en: "bakery", pos: "noun", g: "hk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["bakarí", "bakarí", "bakaríi", "bakarís"], pl: ["bakarí", "bakarí", "bakaríum", "bakaría"] },
    ex: { is: "Bakaríið opnar snemma.", en: "The bakery opens early." } },
  { w: "kirkja", en: "church", pos: "noun", g: "kvk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["kirkja", "kirkju", "kirkju", "kirkju"], pl: ["kirkjur", "kirkjur", "kirkjum", "kirkna"] },
    ex: { is: "Kirkjan stendur við torgið.", en: "The church stands by the square." } },
  { w: "safn", en: "museum", pos: "noun", g: "hk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["safn", "safn", "safni", "safns"], pl: ["söfn", "söfn", "söfnum", "safna"] },
    ex: { is: "Safnið er lokað í dag.", en: "The museum is closed today." } },
  { w: "apótek", en: "pharmacy", pos: "noun", g: "hk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["apótek", "apótek", "apóteki", "apóteks"], pl: ["apótek", "apótek", "apótekum", "apóteka"] },
    ex: { is: "Apótekið er á móti bankanum.", en: "The pharmacy is opposite the bank." } },
  { w: "höfn", en: "harbour", pos: "noun", g: "kvk", topic: "city", unit: 4, cefr: "A1",
    forms: { sg: ["höfn", "höfn", "höfn", "hafnar"], pl: ["hafnir", "hafnir", "höfnum", "hafna"] },
    ex: { is: "Bátarnir eru í höfninni.", en: "The boats are in the harbour." } },

  /* ---------------------------------------------------------- street furniture */
  { w: "horn", en: "corner", pos: "noun", g: "hk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["horn", "horn", "horni", "horns"], pl: ["horn", "horn", "hornum", "horna"] },
    ex: { is: "Beygðu á næsta horni.", en: "Turn at the next corner." } },
  { w: "brú", en: "bridge", pos: "noun", g: "kvk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["brú", "brú", "brú", "brúar"], pl: ["brýr", "brýr", "brúm", "brúa"] },
    ex: { is: "Við göngum yfir brúna.", en: "We walk across the bridge." } },
  { w: "bekkur", en: "bench", pos: "noun", g: "kk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["bekkur", "bekk", "bekk", "bekkjar"], pl: ["bekkir", "bekki", "bekkjum", "bekkja"] },
    ex: { is: "Ari situr á bekknum.", en: "Ari is sitting on the bench." } },
  { w: "umferðarljós", en: "traffic light", pos: "noun", g: "hk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["umferðarljós", "umferðarljós", "umferðarljósi", "umferðarljóss"], pl: ["umferðarljós", "umferðarljós", "umferðarljósum", "umferðarljósa"] },
    ex: { is: "Beygðu til vinstri við umferðarljósin.", en: "Turn left at the traffic lights." } },
  { w: "gangbraut", en: "pedestrian crossing", pos: "noun", g: "kvk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["gangbraut", "gangbraut", "gangbraut", "gangbrautar"], pl: ["gangbrautir", "gangbrautir", "gangbrautum", "gangbrauta"] },
    ex: { is: "Krakkarnir ganga yfir gangbrautina.", en: "The children walk across the crossing." } },
  { w: "kort", en: "map, card", pos: "noun", g: "hk", topic: "street", unit: 4, cefr: "A1",
    forms: { sg: ["kort", "kort", "korti", "korts"], pl: ["kort", "kort", "kortum", "korta"] },
    ex: { is: "Ég er með kort af bænum.", en: "I have a map of the town." } }
];

export default unit;
