// data/src/grammar-nouns.js — reference articles on nominals
// nouns · word formation · adjectives · pronouns · numbers

export const grammar = [

  {
    id: "noun-gender",
    cat: "nouns",
    title: "The three genders",
    en: "Kyn nafnorða",
    cefr: "A1",
    unit: 1,
    summary: "Every Icelandic noun is masculine, feminine or neuter, and that label decides how the whole sentence around it behaves.",
    sections: [
      {
        h: "Gender is a filing system, not biology",
        p: "A table is masculine, a book is feminine and a house is neuter. There is no meaning behind it. What matters is that gender controls the article, the adjective endings and the pronoun you use later in the conversation, so it has to be learned together with the word itself.",
        ex: [
          ["Borðið er stórt.", "The table is big."],
          ["Bókin er ný.", "The book is new."],
          ["Húsið er hvítt.", "The house is white."]
        ],
        tip: "Learn every noun as a two-part fact: hestur (kk), borg (kvk), hús (hk). Never store the bare word alone."
      },
      {
        h: "Endings that usually give it away",
        table: {
          cols: ["ending", "usual gender", "example"],
          rows: [
            ["-ur", "kk", "hestur — horse"],
            ["-i", "kk", "skóli — school"],
            ["-ll, -nn", "kk", "stóll — chair"],
            ["-a", "kvk", "kaka — cake"],
            ["-ing", "kvk", "spurning — question"],
            ["-un", "kvk", "verslun — shop"],
            ["no ending at all", "hk", "hús — house"],
            ["-i (short words)", "hk", "herbergi — room"]
          ]
        },
        tip: "The ending -i sits in two rows. If the word is a person or a doer it is masculine (kennari, nemandi); if it is a thing or a place it is often neuter (herbergi, sæti)."
      },
      {
        h: "Two quick tests",
        list: [
          "Swap in a pronoun: hann for masculine, hún for feminine, það for neuter. Bíllinn er nýr — hann er rauður.",
          "Put the number one in front: einn hestur, ein bók, eitt hús.",
          "Say this is: þetta er is neutral and works for anything, so it tests nothing. Use the two tests above instead."
        ]
      },
      {
        h: "Words for people follow the word, not the person",
        p: "Barn is neuter even when the child is a boy, and skáld (poet) is neuter whoever holds the pen. The grammar agrees with the noun, not with the human being behind it.",
        ex: [
          ["Barnið er þreytt.", "The child is tired."],
          ["Lúlli er lundi og hann er svangur.", "Lúlli is a puffin and he is hungry."]
        ]
      }
    ],
    related: ["noun-article", "noun-masc", "noun-fem", "noun-neut"]
  },

  {
    id: "noun-article",
    cat: "nouns",
    title: "The definite article",
    en: "Greinirinn",
    cefr: "A1",
    unit: 2,
    summary: "Icelandic has no word for a, and the word for the is glued onto the end of the noun instead of standing in front of it.",
    sections: [
      {
        h: "There is no indefinite article",
        p: "A bare noun already means a something. To say the something you add a suffix. That suffix is the only article Icelandic has in everyday speech.",
        ex: [
          ["Hér er bíll.", "Here is a car."],
          ["Hér er bíllinn.", "Here is the car."],
          ["Ég sé bakarí.", "I see a bakery."],
          ["Ég sé bakaríið.", "I see the bakery."]
        ]
      },
      {
        h: "Singular with the article",
        table: {
          cols: ["fall", "hattur (kk)", "borg (kvk)", "glas (hk)"],
          rows: [
            ["NF", "hatturinn", "borgin", "glasið"],
            ["ÞF", "hattinn", "borgina", "glasið"],
            ["ÞGF", "hattinum", "borginni", "glasinu"],
            ["EF", "hattsins", "borgarinnar", "glassins"]
          ]
        },
        tip: "Read the article as a second word stuck on: hatt-inum, borg-inni, glas-inu. The case ending of the noun comes first, the article last."
      },
      {
        h: "Plural with the article",
        table: {
          cols: ["fall", "hattar (kk)", "borgir (kvk)", "glös (hk)"],
          rows: [
            ["NF", "hattarnir", "borgirnar", "glösin"],
            ["ÞF", "hattana", "borgirnar", "glösin"],
            ["ÞGF", "höttunum", "borgunum", "glösunum"],
            ["EF", "hattanna", "borganna", "glasanna"]
          ]
        },
        p: "The dative plural is the easiest form in the language to spot: the noun ends in -um and the article turns the whole thing into -unum, in every gender without exception."
      },
      {
        h: "Nouns ending in a vowel swallow the i",
        list: [
          "skóli → skólinn (the school)",
          "saga → sagan (the story)",
          "auga → augað (the eye)",
          "herbergi → herbergið (the room)",
          "kaffi → kaffið (the coffee)"
        ],
        tip: "Two vowels never meet across the join. The noun keeps its vowel and the article gives up its i."
      },
      {
        h: "When Icelandic uses the article and English does not",
        p: "Body parts, meals, and nouns owned by someone usually carry the article where English would use my or a. The possessive word then follows the noun.",
        ex: [
          ["Bíllinn minn er gamall.", "My car is old."],
          ["Anna er með höfuðverkinn enn.", "Anna still has that headache."]
        ]
      }
    ],
    related: ["noun-gender", "noun-masc", "noun-plural", "pron-possessive"]
  },

  {
    id: "noun-masc",
    cat: "nouns",
    title: "Masculine nouns",
    en: "Karlkynsnafnorð",
    cefr: "A1",
    unit: 4,
    summary: "The biggest gender in the language, split into an -ar plural group and an -ir plural group with a handful of vowel changes to watch.",
    sections: [
      {
        h: "What a masculine noun looks like",
        p: "Most masculine nouns end in -ur in the dictionary form. A smaller weak group ends in -i and barely moves at all. The -ur is not part of the stem, so it drops the moment any other case ending arrives.",
        ex: [
          ["Hesturinn er úti.", "The horse is outside."],
          ["Ég sé hest.", "I see a horse."],
          ["Ég kom með hest.", "I brought a horse."]
        ]
      },
      {
        h: "The -ar plural group",
        table: {
          cols: ["fall", "hattur", "dagur", "skóli", "mælir"],
          rows: [
            ["NF et.", "hattur", "dagur", "skóli", "mælir"],
            ["ÞF et.", "hatt", "dag", "skóla", "mæli"],
            ["ÞGF et.", "hatti", "degi", "skóla", "mæli"],
            ["EF et.", "hatts", "dags", "skóla", "mælis"],
            ["NF ft.", "hattar", "dagar", "skólar", "mælar"],
            ["ÞF ft.", "hatta", "daga", "skóla", "mæla"],
            ["ÞGF ft.", "höttum", "dögum", "skólum", "mælum"],
            ["EF ft.", "hatta", "daga", "skóla", "mæla"]
          ]
        },
        tip: "Compare hatti and degi. Both are dative singular, but dagur changes its vowel on the way. Learn degi, sjó and skó as one-off shapes rather than trying to derive them."
      },
      {
        h: "The -ir plural group",
        table: {
          cols: ["fall", "staður", "köttur"],
          rows: [
            ["NF et.", "staður", "köttur"],
            ["ÞF et.", "stað", "kött"],
            ["ÞGF et.", "stað", "ketti"],
            ["EF et.", "staðar", "kattar"],
            ["NF ft.", "staðir", "kettir"],
            ["ÞF ft.", "staði", "ketti"],
            ["ÞGF ft.", "stöðum", "köttum"],
            ["EF ft.", "staða", "katta"]
          ]
        },
        p: "This group is recognisable in the genitive singular: -ar instead of -s. Köttur adds a vowel change on top, ö turning into e before an i ending and into a before an a ending."
      },
      {
        h: "Weak masculines in -i",
        p: "Skóli, tími, kennari, nemandi and lundi belong to a group that is a gift to learners. Every case except the nominative singular ends in -a, and the plural is a plain -ar.",
        ex: [
          ["Kennarinn talar við nemandann.", "The teacher is talking to the student."],
          ["Lúlli situr á þaki skólans.", "Lúlli is sitting on the roof of the school."]
        ]
      },
      {
        h: "With the article",
        list: [
          "hatturinn, hattinn, hattinum, hattsins",
          "hattarnir, hattana, höttunum, hattanna",
          "skólinn, skólann, skólanum, skólans"
        ],
        tip: "In hatturinn the double n stays a clean [nn]. Only after a long vowel or diphthong does nn turn into [tn], as in steinn."
      }
    ],
    related: ["noun-fem", "noun-neut", "noun-article", "umlaut"]
  },

  {
    id: "noun-fem",
    cat: "nouns",
    title: "Feminine nouns",
    en: "Kvenkynsnafnorð",
    cefr: "A1",
    unit: 4,
    summary: "Feminine nouns keep the same shape through most of the singular, so the genitive and the plural are what you actually have to learn.",
    sections: [
      {
        h: "A quiet singular",
        p: "For strong feminine nouns such as borg, the nominative, accusative and dative singular are all identical. Only the genitive moves. For weak feminine nouns in -a, the -a becomes -u everywhere outside the nominative. Either way the singular asks very little of you.",
        ex: [
          ["Borgin er falleg.", "The city is beautiful."],
          ["Ég þekki borgina vel.", "I know the city well."],
          ["Sóley bakar köku.", "Sóley is baking a cake."]
        ]
      },
      {
        h: "The four patterns",
        table: {
          cols: ["fall", "borg", "spurning", "saga", "strönd"],
          rows: [
            ["NF et.", "borg", "spurning", "saga", "strönd"],
            ["ÞF et.", "borg", "spurningu", "sögu", "strönd"],
            ["ÞGF et.", "borg", "spurningu", "sögu", "strönd"],
            ["EF et.", "borgar", "spurningar", "sögu", "strandar"],
            ["NF ft.", "borgir", "spurningar", "sögur", "strendur"],
            ["ÞF ft.", "borgir", "spurningar", "sögur", "strendur"],
            ["ÞGF ft.", "borgum", "spurningum", "sögum", "ströndum"],
            ["EF ft.", "borga", "spurninga", "sagna", "stranda"]
          ]
        },
        tip: "In the plural, feminine nominative and accusative are always the same word. That single fact removes half the work."
      },
      {
        h: "Where the vowels move",
        p: "Saga shows the u-umlaut at work: the a of the stem becomes ö in front of an ending containing u, which is why the accusative is sögu and the dative plural is sögum. The genitive plural sagna has no u in it, so the a comes back. Strönd shows the same rule from the other side, with the plain a surfacing in strandar and stranda.",
        ex: [
          ["Anna segir sögu.", "Anna is telling a story."],
          ["Við gengum eftir ströndinni.", "We walked along the beach."]
        ]
      },
      {
        h: "With the article",
        list: [
          "borgin, borgina, borginni, borgarinnar",
          "borgirnar, borgirnar, borgunum, borganna",
          "sagan, söguna, sögunni, sögunnar"
        ],
        tip: "The feminine dative singular article is -inni with a double n. Do not confuse borginni (dative) with borgina (accusative)."
      }
    ],
    related: ["noun-masc", "noun-neut", "umlaut", "noun-plural"]
  },

  {
    id: "noun-neut",
    cat: "nouns",
    title: "Neuter nouns",
    en: "Hvorugkynsnafnorð",
    cefr: "A1",
    unit: 5,
    summary: "The easiest gender: nominative and accusative are always identical, and the plural adds no ending at all.",
    sections: [
      {
        h: "Two free forms in every neuter noun",
        p: "For any neuter noun in the language, nominative and accusative are the same in the singular and again the same in the plural. That is a rule with no exceptions, so half the neuter paradigm is free.",
        ex: [
          ["Húsið er hvítt.", "The house is white."],
          ["Ég sé húsið.", "I see the house."],
          ["Glösin eru á borðinu.", "The glasses are on the table."]
        ]
      },
      {
        h: "The patterns",
        table: {
          cols: ["fall", "glas", "herbergi", "auga", "tré"],
          rows: [
            ["NF et.", "glas", "herbergi", "auga", "tré"],
            ["ÞF et.", "glas", "herbergi", "auga", "tré"],
            ["ÞGF et.", "glasi", "herbergi", "auga", "tré"],
            ["EF et.", "glass", "herbergis", "auga", "trés"],
            ["NF ft.", "glös", "herbergi", "augu", "tré"],
            ["ÞF ft.", "glös", "herbergi", "augu", "tré"],
            ["ÞGF ft.", "glösum", "herbergjum", "augum", "trjám"],
            ["EF ft.", "glasa", "herbergja", "augna", "trjáa"]
          ]
        },
        tip: "Herbergi has one shape for six of its eight forms. When you meet a neuter noun ending in -i, expect it to barely move."
      },
      {
        h: "The plural you cannot hear",
        p: "Neuter plurals add nothing. If the stem has an a in it, the old lost ending still leaves a fingerprint as u-umlaut: barn becomes börn, land becomes lönd, blað becomes blöð. If there is no a, the plural looks exactly like the singular and only the verb tells you which one you have.",
        ex: [
          ["Barnið sefur.", "The child is asleep."],
          ["Börnin sofa.", "The children are asleep."]
        ]
      },
      {
        h: "With the article",
        list: [
          "glasið, glasið, glasinu, glassins",
          "glösin, glösin, glösunum, glasanna",
          "augað, augað, auganu, augans"
        ],
        tip: "Glass with a double s is the genitive singular of glas. The genitive of a neuter noun ending in -s doubles the letter rather than adding a syllable."
      }
    ],
    related: ["noun-masc", "noun-fem", "umlaut", "noun-irregular"]
  },

  {
    id: "noun-plural",
    cat: "nouns",
    title: "Forming the plural",
    en: "Fleirtala nafnorða",
    cefr: "A1",
    unit: 5,
    summary: "Three plural endings cover the masculine and feminine nouns, neuters add nothing, and the plural case endings are the same for everybody.",
    sections: [
      {
        h: "The endings by gender",
        table: {
          cols: ["kyn", "ending", "example"],
          rows: [
            ["kk", "-ar", "hattur → hattar"],
            ["kk", "-ir", "staður → staðir"],
            ["kk", "-ur", "fótur → fætur"],
            ["kvk", "-ar", "spurning → spurningar"],
            ["kvk", "-ir", "borg → borgir"],
            ["kvk", "-ur", "saga → sögur"],
            ["hk", "no ending", "glas → glös"]
          ]
        },
        tip: "There is no way to predict which of the three endings a noun takes. Learn the nominative plural along with the word, the way you learn the gender."
      },
      {
        h: "Once you have the plural, the cases are easy",
        table: {
          cols: ["fall", "kk", "kvk", "hk"],
          rows: [
            ["NF", "-ar / -ir", "-ar / -ir / -ur", "no ending"],
            ["ÞF", "-a / -i", "same as NF", "same as NF"],
            ["ÞGF", "-um", "-um", "-um"],
            ["EF", "-a", "-a", "-a"]
          ]
        },
        p: "Two whole rows are gender-blind. Every dative plural in the language ends in -um and every genitive plural ends in -a, whatever the noun."
      },
      {
        h: "The dative plural always bends the vowel",
        p: "Because -um contains a u, an a in the stem turns into ö. This is the single most productive sound rule in Icelandic nouns and it never fails.",
        ex: [
          ["Ég vinn á laugardögum.", "I work on Saturdays."],
          ["Við tölum um þessi lönd.", "We are talking about these countries."]
        ]
      },
      {
        h: "Nouns that only exist in the plural",
        list: [
          "buxur (kvk) — trousers",
          "gleraugu (hk) — glasses",
          "foreldrar (kk) — parents",
          "peningar (kk) — money",
          "jól (hk) — Christmas",
          "dyr (kvk) — doorway"
        ],
        tip: "These take plural adjectives and plural verbs even when they mean one object: Buxurnar eru nýjar."
      }
    ],
    related: ["noun-masc", "noun-fem", "noun-neut", "umlaut"]
  },

  {
    id: "noun-irregular",
    cat: "nouns",
    title: "Irregular nouns",
    en: "Óregluleg nafnorð",
    cefr: "A2",
    unit: 12,
    summary: "A short list of very common nouns that decline by changing their root vowel rather than by adding a tidy ending.",
    sections: [
      {
        h: "Why these are worth the effort",
        p: "The irregular nouns are almost all words you cannot avoid: man, mother, father, brother, sister, hand, foot, book, night. Because they turn up in every second sentence, learning them by heart pays for itself within a week.",
        ex: [
          ["Maðurinn á horninu er nágranni minn.", "The man on the corner is my neighbour."],
          ["Ég talaði við móður mína í gær.", "I talked to my mother yesterday."]
        ]
      },
      {
        h: "People",
        table: {
          cols: ["fall", "maður", "faðir", "móðir", "bróðir"],
          rows: [
            ["NF et.", "maður", "faðir", "móðir", "bróðir"],
            ["ÞF et.", "mann", "föður", "móður", "bróður"],
            ["ÞGF et.", "manni", "föður", "móður", "bróður"],
            ["EF et.", "manns", "föður", "móður", "bróður"],
            ["NF ft.", "menn", "feður", "mæður", "bræður"],
            ["ÞF ft.", "menn", "feður", "mæður", "bræður"],
            ["ÞGF ft.", "mönnum", "feðrum", "mæðrum", "bræðrum"],
            ["EF ft.", "manna", "feðra", "mæðra", "bræðra"]
          ]
        },
        tip: "The -ir family words have one shape for the entire oblique singular. Say föður three times and you have three cases."
      },
      {
        h: "Things with a moving vowel",
        table: {
          cols: ["fall", "fótur", "hönd", "bók", "kýr"],
          rows: [
            ["NF et.", "fótur", "hönd", "bók", "kýr"],
            ["ÞF et.", "fót", "hönd", "bók", "kú"],
            ["ÞGF et.", "fæti", "hendi", "bók", "kú"],
            ["EF et.", "fótar", "handar", "bókar", "kýr"],
            ["NF ft.", "fætur", "hendur", "bækur", "kýr"],
            ["ÞF ft.", "fætur", "hendur", "bækur", "kýr"],
            ["ÞGF ft.", "fótum", "höndum", "bókum", "kúm"],
            ["EF ft.", "fóta", "handa", "bóka", "kúa"]
          ]
        },
        p: "Notice how the vowel of hönd travels: ö in the plain forms, e when an i ending follows in hendi and hendur, and the original a in handar and handa."
      },
      {
        h: "More to file away",
        list: [
          "systir → systur, systur, systur; ft. systur, systur, systrum, systra",
          "dóttir → dóttur, dóttur, dóttur; ft. dætur, dætur, dætrum, dætra",
          "nótt → nótt, nóttu, nætur; ft. nætur, nætur, nóttum, nátta",
          "tönn → tönn, tönn, tannar; ft. tennur, tennur, tönnum, tanna",
          "vetur → vetur, vetri, vetrar; ft. vetur, vetur, vetrum, vetra",
          "auga, eyra, hjarta, lunga — neuter body parts with the plural ending -u"
        ]
      },
      {
        h: "The one you will use most",
        p: "Maður also works as an impersonal pronoun meaning one or people in general, and in that job it stays in the singular even when the meaning is plural.",
        ex: [
          ["Hvernig segir maður þetta á íslensku?", "How do you say this in Icelandic?"],
          ["Maður þarf góða skó hérna.", "You need good shoes here."]
        ]
      }
    ],
    related: ["noun-plural", "umlaut", "noun-masc", "noun-fem"]
  },

  {
    id: "syncope",
    cat: "wordformation",
    title: "Syncope",
    en: "Brottfall",
    cefr: "A1",
    unit: 6,
    summary: "Two-syllable words whose second syllable is unstressed drop that vowel as soon as an ending beginning with a vowel is attached.",
    sections: [
      {
        h: "The rule in one line",
        p: "If a word has the shape stem + unstressed vowel + consonant, and you add an ending that starts with a vowel, the unstressed vowel disappears. Jökull plus -i does not give jökuli, it gives jökli. This is why so many Icelandic words look shorter in the middle of a sentence than in the dictionary.",
        ex: [
          ["Við keyrðum að stórum jökli.", "We drove up to a big glacier."],
          ["Ég týndi lyklinum mínum.", "I lost my key."]
        ]
      },
      {
        h: "Nouns",
        table: {
          cols: ["orð", "form", "result"],
          rows: [
            ["jökull (kk)", "ÞGF et.", "jökli"],
            ["jökull (kk)", "NF ft.", "jöklar"],
            ["lykill (kk)", "ÞF ft.", "lykla"],
            ["hamar (kk)", "ÞGF et.", "hamri"],
            ["morgunn (kk)", "NF ft.", "morgnar"],
            ["veður (hk)", "ÞGF et.", "veðri"],
            ["sumar (hk)", "ÞGF ft.", "sumrum"],
            ["himinn (kk)", "ÞGF et.", "himni"]
          ]
        },
        tip: "Endings that start with a consonant leave the word alone: jökuls, lykils, morguns. Only vowel-initial endings trigger the loss."
      },
      {
        h: "Adjectives do it too",
        p: "Adjectives ending in -all, -ill or -ull behave the same way, which is why the old man is gamli maðurinn but old men are gamlir menn.",
        ex: [
          ["Þetta er gamalt hús.", "This is an old house."],
          ["Þetta eru gömul hús.", "These are old houses."],
          ["Ég bý í gamla húsinu.", "I live in the old house."]
        ]
      },
      {
        h: "Two changes at once",
        p: "Syncope often runs alongside a vowel change, and the two rules apply in the same form without interfering with each other.",
        ex: [
          ["ketill → katli", "kettle → to the kettle"],
          ["gamall → gömlum", "old → to the old ones"],
          ["sumar → sumrum", "summer → in summers"]
        ]
      }
    ],
    related: ["umlaut", "noun-masc", "adj-strong", "compounds"]
  },

  {
    id: "umlaut",
    cat: "wordformation",
    title: "Vowel shifts",
    en: "Hljóðvarp",
    cefr: "A1",
    unit: 6,
    summary: "Two ancient sound rules still bend the vowels of modern Icelandic: u-umlaut turns a into ö, and i-umlaut fronts almost every vowel it touches.",
    sections: [
      {
        h: "U-umlaut: a becomes ö",
        p: "When an ending contains a u, an a in the stem turns into ö. This is the rule behind every dative plural and behind the plural of most neuter nouns. In the neuter plural the u itself vanished centuries ago, but the ö it caused stayed behind.",
        table: {
          cols: ["stofn", "form", "result"],
          rows: [
            ["dagur (kk)", "ÞGF ft.", "dögum"],
            ["saga (kvk)", "ÞF et.", "sögu"],
            ["barn (hk)", "NF ft.", "börn"],
            ["land (hk)", "ÞGF ft.", "löndum"],
            ["kalla (so.)", "við-form", "köllum"],
            ["gamall (lo.)", "ÞGF et. kk", "gömlum"]
          ]
        },
        tip: "If you see ö in a word you have not met before, look for an a in a related form. Börn belongs to barn, sögur belongs to saga."
      },
      {
        h: "I-umlaut: the vowel moves forward",
        p: "An i in an old ending pulled the stem vowel towards the front of the mouth. The i is usually gone now, but the changed vowel is still there, which is why present-tense verbs and comparatives look so different from their base forms.",
        table: {
          cols: ["breyting", "dæmi", "merking"],
          rows: [
            ["a → e", "taka → ég tek", "take → I take"],
            ["o → e", "koma → ég kem", "come → I come"],
            ["ö → e", "köttur → kettir", "cat → cats"],
            ["á → æ", "fá → ég fæ", "get → I get"],
            ["ó → æ", "stór → stærri", "big → bigger"],
            ["ú → ý", "búa → ég bý", "live → I live"],
            ["u → y", "ungur → yngri", "young → younger"],
            ["au → ey", "auka → ég eyk", "increase → I increase"],
            ["jú, jó → ý", "fljúga → ég flýg", "fly → I fly"]
          ]
        }
      },
      {
        h: "Where you will meet them",
        list: [
          "Dative plural of every noun: hattur → höttum, barn → börnum",
          "Neuter plural: blað → blöð, land → lönd",
          "Singular present of strong verbs: fara → ég fer, sjá → ég sé",
          "Comparatives: langur → lengri, hár → hærri",
          "Plurals of the -ir group: köttur → kettir, fótur → fætur"
        ]
      },
      {
        h: "A practical habit",
        p: "Do not try to derive these forms while you are speaking. Store the shifted form as a separate word and let the pattern make it easier to remember, not slower to produce.",
        tip: "Say the pair aloud together: dagur-dögum, barn-börn, taka-tek. The pairing sticks better than the rule."
      }
    ],
    related: ["syncope", "noun-plural", "adj-compare", "noun-irregular"]
  },

  {
    id: "compounds",
    cat: "wordformation",
    title: "Compound words",
    en: "Samsett orð",
    cefr: "A2",
    unit: 7,
    summary: "Instead of borrowing foreign words, Icelandic bolts existing ones together, and the last element decides the gender and the declension.",
    sections: [
      {
        h: "Build, do not borrow",
        p: "Icelandic prefers to make a new word out of old parts. A computer is a tölva, from tala (number) and völva (seeress). A telephone is a sími, an old word for a cord. Once you can see the seams, hundreds of long words become readable at a glance.",
        ex: [
          ["Ég fer í sundlaugina á morgnana.", "I go to the swimming pool in the mornings."],
          ["Bókasafnið er opið til sex.", "The library is open until six."]
        ]
      },
      {
        h: "Three ways to join the parts",
        table: {
          cols: ["link", "how it works", "example"],
          rows: [
            ["bare stem", "first word unchanged", "sund + laug → sundlaug (swimming pool)"],
            ["-s-", "genitive singular of the first word", "sjónvarp + þáttur → sjónvarpsþáttur (TV programme)"],
            ["-a-", "genitive plural of the first word", "bók + safn → bókasafn (library)"],
            ["-ar-", "genitive singular of a feminine word", "borg + stjóri → borgarstjóri (mayor)"],
            ["-u-", "oblique form of a weak feminine", "saga + fræði → sögufræði (historical study)"]
          ]
        },
        tip: "The link vowel is not decoration. It is a real genitive, so bókasafn is literally a collection of books."
      },
      {
        h: "The last word rules everything",
        p: "Gender, case endings and plural all come from the final element. Flugvöllur is masculine because völlur is; veitingahús is neuter because hús is. The stress, on the other hand, always falls on the very first syllable of the whole compound.",
        ex: [
          ["Flugvöllurinn er langt frá bænum.", "The airport is a long way from town."],
          ["Við borðuðum á góðu veitingahúsi.", "We ate at a good restaurant."]
        ]
      },
      {
        h: "Useful ones to recognise",
        list: [
          "sundlaug — sund (swimming) + laug (pool)",
          "flugvöllur — flug (flight) + völlur (field)",
          "sjúkrahús — sjúkra (of the sick) + hús (house)",
          "kaffihús — kaffi + hús",
          "barnabarn — barna (of children) + barn = grandchild",
          "matvöruverslun — matvara (foodstuff) + verslun (shop)"
        ]
      },
      {
        h: "Reading long words",
        p: "When a word looks impossible, cut it from the right. Find the last noun you know, then work backwards. Upplýsingamiðstöð splits into upplýsinga (of information) plus mið plus stöð (station), and the whole thing is an information centre.",
        tip: "If the last element is a noun you know, you already know the gender and the endings, whatever the front of the word is doing."
      }
    ],
    related: ["noun-gender", "syncope", "noun-neut", "noun-masc"]
  },

  {
    id: "adj-strong",
    cat: "adjectives",
    title: "Strong adjectives",
    en: "Sterk beyging lýsingarorða",
    cefr: "A1",
    unit: 6,
    summary: "The full set of adjective endings used when the noun has no article, no possessive and no demonstrative in front of it.",
    sections: [
      {
        h: "When to use the strong forms",
        p: "Reach for the strong declension when the adjective stands after vera or verða, and when it modifies a bare noun with nothing definite attached. In both cases the adjective is carrying the gender, number and case information on its own, so it needs the full endings.",
        ex: [
          ["Húsið er hvítt.", "The house is white."],
          ["Ég á hvítan hest.", "I have a white horse."],
          ["Hún býr í stóru húsi.", "She lives in a big house."]
        ]
      },
      {
        h: "The full paradigm",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "hvítur", "hvít", "hvítt", "hvítir", "hvítar", "hvít"],
            ["ÞF", "hvítan", "hvíta", "hvítt", "hvíta", "hvítar", "hvít"],
            ["ÞGF", "hvítum", "hvítri", "hvítu", "hvítum", "hvítum", "hvítum"],
            ["EF", "hvíts", "hvítrar", "hvíts", "hvítra", "hvítra", "hvítra"]
          ]
        },
        tip: "The whole dative plural row is one word, hvítum, for all three genders. The genitive plural is hvítra for all three. Learn the rows, not the cells."
      },
      {
        h: "The neuter -t is not always a simple -t",
        table: {
          cols: ["kk", "hk", "why"],
          rows: [
            ["góður", "gott", "-ður becomes -tt"],
            ["rauður", "rautt", "-ður becomes -tt"],
            ["blár", "blátt", "long vowel plus r becomes -tt"],
            ["nýr", "nýtt", "long vowel plus r becomes -tt"],
            ["gamall", "gamalt", "-ll becomes -lt"],
            ["opinn", "opið", "adjectives in -inn take -ið"]
          ]
        },
        p: "The neuter singular is the form learners get wrong most often, because it is also the form you need after þetta er and after a neuter subject."
      },
      {
        h: "Agreement in practice",
        p: "An adjective agrees with its noun in gender, number and case, so the case comes from whatever governs the noun, not from the adjective itself. In á góðum degi the dative comes from the preposition á, and góðum simply follows.",
        ex: [
          ["Þetta er nýtt hús.", "This is a new house."],
          ["Ég sá stóran hval.", "I saw a big whale."],
          ["Við gengum í köldu veðri.", "We walked in cold weather."]
        ]
      }
    ],
    related: ["adj-weak", "adj-compare", "syncope", "noun-gender"]
  },

  {
    id: "adj-weak",
    cat: "adjectives",
    title: "Weak adjectives",
    en: "Veik beyging lýsingarorða",
    cefr: "A1",
    unit: 7,
    summary: "When something definite already marks the noun, the adjective switches to a short set of endings built from just -i, -a and -u.",
    sections: [
      {
        h: "What switches the adjective to weak",
        list: [
          "the definite article on the noun: gamli maðurinn",
          "a possessive: bestu vinir mínir",
          "a demonstrative: þessi stóri bíll",
          "a superlative: besta kaffið",
          "an ordinal number: þriðja bókin"
        ],
        p: "In each of these the definiteness is already expressed somewhere else, so the adjective can relax and use the short endings."
      },
      {
        h: "The whole weak declension",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "ft. öll kyn"],
          rows: [
            ["NF", "hvíti", "hvíta", "hvíta", "hvítu"],
            ["ÞF", "hvíta", "hvítu", "hvíta", "hvítu"],
            ["ÞGF", "hvíta", "hvítu", "hvíta", "hvítu"],
            ["EF", "hvíta", "hvítu", "hvíta", "hvítu"]
          ]
        },
        tip: "Every plural, every gender, every case is hvítu. There is nothing else to learn about the weak plural."
      },
      {
        h: "Three shapes, that is all",
        p: "The masculine singular is -i in the nominative and -a in the other three cases. The neuter singular is -a throughout. The feminine singular is -a in the nominative and -u after that. And the plural is -u everywhere. Four lines of memory instead of twenty-four cells.",
        ex: [
          ["Hvíti hesturinn er úti.", "The white horse is outside."],
          ["Ég sá gömlu konuna.", "I saw the old woman."],
          ["Ég bý í gamla húsinu.", "I live in the old house."]
        ]
      },
      {
        h: "The order of the words",
        p: "The adjective still comes before the noun, and the article still hangs on the end of the noun. Icelandic does not move anything around, it only changes the adjective ending.",
        ex: [
          ["stór bíll — stóri bíllinn", "a big car — the big car"],
          ["ný bók — nýja bókin", "a new book — the new book"],
          ["gott kaffi — góða kaffið", "good coffee — the good coffee"]
        ],
        tip: "In careful writing you may also see hinn stóri bíll with a free-standing article. In everyday Reykjavík speech, stóri bíllinn is what people say."
      }
    ],
    related: ["adj-strong", "adj-compare", "noun-article", "pron-demonstrative"]
  },

  {
    id: "adj-compare",
    cat: "adjectives",
    title: "Comparative and superlative",
    en: "Stigbreyting lýsingarorða",
    cefr: "A2",
    unit: 13,
    summary: "Bigger and biggest are made with -ari and -astur, or with -ri and -stur plus a vowel change, and a short list of everyday adjectives goes its own way entirely.",
    sections: [
      {
        h: "The regular group: -ari and -astur",
        table: {
          cols: ["frumstig", "miðstig", "efsta stig"],
          rows: [
            ["ríkur", "ríkari", "ríkastur"],
            ["sterkur", "sterkari", "sterkastur"],
            ["dýr", "dýrari", "dýrastur"],
            ["kaldur", "kaldari", "kaldastur"],
            ["fallegur", "fallegri", "fallegastur"],
            ["skemmtilegur", "skemmtilegri", "skemmtilegastur"]
          ]
        },
        tip: "Adjectives ending in -legur shorten the comparative to -legri but keep the full -legastur in the superlative."
      },
      {
        h: "The umlaut group: -ri and -stur",
        table: {
          cols: ["frumstig", "miðstig", "efsta stig"],
          rows: [
            ["stór", "stærri", "stærstur"],
            ["hár", "hærri", "hæstur"],
            ["langur", "lengri", "lengstur"],
            ["ungur", "yngri", "yngstur"],
            ["þungur", "þyngri", "þyngstur"],
            ["djúpur", "dýpri", "dýpstur"]
          ]
        },
        p: "This is i-umlaut again: ó becomes æ, á becomes æ, a becomes e, u becomes y. The group is small but it contains some of the most useful adjectives in the language."
      },
      {
        h: "The irregular handful",
        table: {
          cols: ["frumstig", "miðstig", "efsta stig"],
          rows: [
            ["góður", "betri", "bestur"],
            ["vondur", "verri", "verstur"],
            ["gamall", "eldri", "elstur"],
            ["lítill", "minni", "minnstur"],
            ["mikill", "meiri", "mestur"],
            ["margir", "fleiri", "flestir"]
          ]
        }
      },
      {
        h: "How they decline",
        p: "Comparatives only ever have two shapes: -a in the neuter singular and -i everywhere else. Superlatives behave like ordinary adjectives, taking the strong endings when the noun is indefinite and the weak endings after the article.",
        ex: [
          ["Bróðir minn er yngri en ég.", "My brother is younger than I am."],
          ["Þetta er betra kaffi.", "This is better coffee."],
          ["Þetta er besta kaffið í bænum.", "This is the best coffee in town."]
        ],
        tip: "Than is en, and the word after it stays in the case it would have had anyway: hann er hærri en ég."
      },
      {
        h: "Saying as … as",
        p: "For equality Icelandic uses jafn plus the plain adjective plus og, or eins og with a noun.",
        ex: [
          ["Hún er jafn há og ég.", "She is as tall as I am."],
          ["Kaffið hér er eins gott og heima.", "The coffee here is as good as at home."]
        ]
      }
    ],
    related: ["adj-strong", "adj-weak", "umlaut", "num-ordinal"]
  },

  {
    id: "pron-personal",
    cat: "pronouns",
    title: "Personal pronouns",
    en: "Persónufornöfn",
    cefr: "A1",
    unit: 8,
    summary: "The words for I, you, he, she and it change shape in all four cases, and Icelandic uses hann and hún for objects as well as people.",
    sections: [
      {
        h: "Singular",
        table: {
          cols: ["fall", "ég", "þú", "hann", "hún", "það"],
          rows: [
            ["NF", "ég", "þú", "hann", "hún", "það"],
            ["ÞF", "mig", "þig", "hann", "hana", "það"],
            ["ÞGF", "mér", "þér", "honum", "henni", "því"],
            ["EF", "mín", "þín", "hans", "hennar", "þess"]
          ]
        },
        tip: "Hann and það never change in the accusative. That is two forms you get for free."
      },
      {
        h: "Plural",
        table: {
          cols: ["fall", "við", "þið", "þeir", "þær", "þau"],
          rows: [
            ["NF", "við", "þið", "þeir", "þær", "þau"],
            ["ÞF", "okkur", "ykkur", "þá", "þær", "þau"],
            ["ÞGF", "okkur", "ykkur", "þeim", "þeim", "þeim"],
            ["EF", "okkar", "ykkar", "þeirra", "þeirra", "þeirra"]
          ]
        },
        p: "Þeir is a group of males or of masculine nouns, þær a group of females or feminine nouns, and þau a mixed group or a group of neuter nouns. A couple is always þau."
      },
      {
        h: "It depends on the gender of the noun",
        p: "There is no neutral it for objects. A car is masculine, so a car is hann. A book is feminine, so a book is hún. Only genuinely neuter nouns become það.",
        ex: [
          ["Bíllinn er nýr. Hann er rauður.", "The car is new. It is red."],
          ["Hvar er bókin? Hún er á borðinu.", "Where is the book? It is on the table."],
          ["Húsið er gamalt en það er fallegt.", "The house is old but it is beautiful."]
        ]
      },
      {
        h: "Pronouns as subjects in disguise",
        p: "A large family of everyday expressions puts the person in the accusative or the dative instead of the nominative. The pronoun is still the one having the experience, but grammatically it is not the subject.",
        ex: [
          ["Mig langar í kaffi.", "I would like a coffee."],
          ["Mig vantar peninga.", "I need money."],
          ["Mér er kalt.", "I am cold."],
          ["Mér finnst þetta gott.", "I think this is good."]
        ],
        tip: "Never say ég langar. The verb langa always takes mig, þig, hana and so on."
      },
      {
        h: "Talking to people",
        p: "Modern Icelandic uses þú with everyone, including strangers, shop staff and the president. The old polite þér survives only in very formal writing and in a few fixed phrases.",
        ex: [
          ["Hvað heitir þú?", "What is your name?"],
          ["Ertu til í að hjálpa mér?", "Are you up for helping me?"]
        ]
      }
    ],
    related: ["pron-possessive", "pron-reflexive", "pron-demonstrative", "pron-indefinite"]
  },

  {
    id: "pron-possessive",
    cat: "pronouns",
    title: "Possessives",
    en: "Eignarfornöfn",
    cefr: "A1",
    unit: 10,
    summary: "Minn, þinn and sinn decline like adjectives and follow the noun, while the third person forms hans, hennar and þeirra never change at all.",
    sections: [
      {
        h: "Two very different halves",
        p: "For the first and second person there are real possessive words that agree with the thing owned: minn, þinn and the reflexive sinn. For the third person Icelandic simply uses the genitive of the pronoun, and those forms are frozen.",
        ex: [
          ["Bíllinn minn er gamall.", "My car is old."],
          ["Bíllinn hans er nýr.", "His car is new."]
        ]
      },
      {
        h: "Minn in full",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "minn", "mín", "mitt", "mínir", "mínar", "mín"],
            ["ÞF", "minn", "mína", "mitt", "mína", "mínar", "mín"],
            ["ÞGF", "mínum", "minni", "mínu", "mínum", "mínum", "mínum"],
            ["EF", "míns", "minnar", "míns", "minna", "minna", "minna"]
          ]
        },
        tip: "Þinn and sinn follow this pattern exactly: þinn, þín, þitt and sinn, sín, sitt."
      },
      {
        h: "The frozen third person",
        table: {
          cols: ["owner", "form", "example"],
          rows: [
            ["hann", "hans", "bíllinn hans"],
            ["hún", "hennar", "bíllinn hennar"],
            ["við", "okkar", "húsið okkar"],
            ["þið", "ykkar", "húsið ykkar"],
            ["þeir, þær, þau", "þeirra", "börnin þeirra"]
          ]
        },
        p: "These never agree with anything. Bíllinn hans, bílana hans, bílunum hans: the possessive sits there unchanged while the noun does all the work."
      },
      {
        h: "Where the possessive goes",
        p: "The normal order is noun first, possessive second, and the noun carries the definite article. Family words are the exception: they take no article. Putting the possessive first, as in mín bók, sounds emphatic or literary.",
        ex: [
          ["Þetta er húsið mitt.", "This is my house."],
          ["Systir mín býr í Kópavogi.", "My sister lives in Kópavogur."],
          ["Foreldrar mínir koma á morgun.", "My parents are coming tomorrow."]
        ]
      },
      {
        h: "Sinn, the one that points back",
        p: "Sinn means his, her or their own and can only refer to the subject of its own clause. If the owner is somebody else in the sentence, you must use hans, hennar or þeirra instead. The difference changes the meaning completely.",
        ex: [
          ["Jónas talar við systur sína.", "Jónas is talking to his own sister."],
          ["Jónas talar við systur hans.", "Jónas is talking to that other man's sister."]
        ],
        tip: "Sinn has no nominative, because the owner can never also be the subject of the same clause."
      }
    ],
    related: ["pron-personal", "pron-reflexive", "adj-weak", "noun-article"]
  },

  {
    id: "pron-demonstrative",
    cat: "pronouns",
    title: "This and that",
    en: "Ábendingarfornöfn",
    cefr: "A2",
    unit: 16,
    summary: "Þessi points at what is near or just mentioned, sá at what is further off or already known, and both of them decline in full.",
    sections: [
      {
        h: "Þessi — this one here",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "þessi", "þessi", "þetta", "þessir", "þessar", "þessi"],
            ["ÞF", "þennan", "þessa", "þetta", "þessa", "þessar", "þessi"],
            ["ÞGF", "þessum", "þessari", "þessu", "þessum", "þessum", "þessum"],
            ["EF", "þessa", "þessarar", "þessa", "þessara", "þessara", "þessara"]
          ]
        },
        tip: "Þennan is the odd one out. Learn it as a whole word: ég þekki þennan mann."
      },
      {
        h: "Sá — that one there",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "sá", "sú", "það", "þeir", "þær", "þau"],
            ["ÞF", "þann", "þá", "það", "þá", "þær", "þau"],
            ["ÞGF", "þeim", "þeirri", "því", "þeim", "þeim", "þeim"],
            ["EF", "þess", "þeirrar", "þess", "þeirra", "þeirra", "þeirra"]
          ]
        },
        p: "The plural of sá is identical to the third person plural pronouns, which is no accident: they are historically the same word."
      },
      {
        h: "Using them",
        ex: [
          ["Þessi bók er betri.", "This book is better."],
          ["Ég ætla að fá þennan snúð.", "I will have this cinnamon bun."],
          ["Sá maður vinnur í bakaríinu.", "That man works in the bakery."],
          ["Ég man ekki eftir þeirri konu.", "I do not remember that woman."]
        ],
        p: "A demonstrative makes the noun definite, so the noun takes no article and any adjective goes weak: þessi stóri bíll, sá gamli maður."
      },
      {
        h: "Þetta, the all-purpose opener",
        p: "When you present something new, þetta er works no matter what gender follows. It is only when þetta modifies a noun that it has to agree.",
        ex: [
          ["Þetta er konan mín.", "This is my wife."],
          ["Þetta er nýi bíllinn.", "This is the new car."],
          ["Hver er þetta?", "Who is this?"]
        ],
        tip: "Hinn, hin, hið is a fourth demonstrative meaning the other one. In speech people usually say hinn bíllinn rather than anything more elaborate."
      }
    ],
    related: ["pron-personal", "pron-indefinite", "adj-weak", "noun-article"]
  },

  {
    id: "pron-reflexive",
    cat: "pronouns",
    title: "Reflexive pronouns",
    en: "Afturbeygð fornöfn",
    cefr: "A2",
    unit: 12,
    summary: "Sig, sér and sín point back at the subject of the clause and stay the same for every gender and every number.",
    sections: [
      {
        h: "One word, three cases, no nominative",
        table: {
          cols: ["fall", "form", "example"],
          rows: [
            ["NF", "no form exists", "the subject is already there"],
            ["ÞF", "sig", "Hann kynnti sig."],
            ["ÞGF", "sér", "Hún flýtir sér."],
            ["EF", "sín", "Hann gætir sín."]
          ]
        },
        p: "There is no nominative because the reflexive can only ever be an object. It is also completely invariable: the same sig serves he, she, it, they and a mixed crowd."
      },
      {
        h: "Only for the third person",
        p: "In the first and second person you simply reuse the ordinary pronoun. Ég þvæ mér, þú þværð þér, but hann þvær sér. The special reflexive shape only exists where hann, hún, það and þau could be ambiguous.",
        ex: [
          ["Ég flýti mér.", "I am hurrying."],
          ["Anna flýtir sér í skólann.", "Anna is hurrying to school."],
          ["Jónas keypti sér nýjan bíl.", "Jónas bought himself a new car."]
        ]
      },
      {
        h: "The distinction English does not make",
        p: "Hann sér hann means he sees some other man. Hann sér sig means he sees himself. Icelandic keeps the two apart with one letter, so the choice matters.",
        ex: [
          ["Lúlli felur sig undir borðinu.", "Lúlli is hiding under the table."],
          ["Sóley talar mikið um sig.", "Sóley talks about herself a lot."],
          ["Sóley talar mikið um hana.", "Sóley talks about her, some other woman, a lot."]
        ],
        tip: "The possessive sinn works on exactly the same principle. Sig is to hann what sinn is to hans."
      },
      {
        h: "Reflexive verbs and each other",
        p: "Many verbs are simply reflexive by habit and are best learned complete with their pronoun. For each other, Icelandic uses either a verb ending in -st or the phrase hvor annan.",
        list: [
          "flýta sér — to hurry",
          "setjast niður — to sit down",
          "líða vel — to feel good, with the person in the dative",
          "hittast — to meet each other",
          "sjást — to see each other, to be visible"
        ],
        ex: [
          ["Við hittumst á morgun.", "We will meet tomorrow."],
          ["Þau þekkja hvort annað vel.", "They know each other well."]
        ]
      }
    ],
    related: ["pron-personal", "pron-possessive", "pron-indefinite"]
  },

  {
    id: "pron-indefinite",
    cat: "pronouns",
    title: "Nobody, everybody, another",
    en: "Óákveðin fornöfn",
    cefr: "A2",
    unit: 12,
    summary: "Enginn, allur, annar, nokkur and their relatives behave like adjectives and have to agree with whatever they describe.",
    sections: [
      {
        h: "Enginn — nobody, no",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "enginn", "engin", "ekkert", "engir", "engar", "engin"],
            ["ÞF", "engan", "enga", "ekkert", "enga", "engar", "engin"],
            ["ÞGF", "engum", "engri", "engu", "engum", "engum", "engum"],
            ["EF", "einskis", "engrar", "einskis", "engra", "engra", "engra"]
          ]
        },
        ex: [
          ["Enginn veit það.", "Nobody knows that."],
          ["Ég sé engan hérna.", "I do not see anyone here."],
          ["Ég á ekkert kort.", "I do not have a card."]
        ],
        tip: "In relaxed speech ekki neinn is just as common as enginn: Ég sé ekki neinn. Both are correct."
      },
      {
        h: "Annar — another, the other, second",
        table: {
          cols: ["fall", "kk et.", "kvk et.", "hk et.", "kk ft.", "kvk ft.", "hk ft."],
          rows: [
            ["NF", "annar", "önnur", "annað", "aðrir", "aðrar", "önnur"],
            ["ÞF", "annan", "aðra", "annað", "aðra", "aðrar", "önnur"],
            ["ÞGF", "öðrum", "annarri", "öðru", "öðrum", "öðrum", "öðrum"],
            ["EF", "annars", "annarrar", "annars", "annarra", "annarra", "annarra"]
          ]
        },
        p: "The same word covers another, the other one, and the ordinal second. Context sorts them out.",
        ex: [
          ["Viltu annan kaffibolla?", "Would you like another cup of coffee?"],
          ["Hinn strákurinn er úti, en annar er inni.", "The other boy is outside, but another one is inside."]
        ]
      },
      {
        h: "The rest of the family",
        list: [
          "allur, öll, allt — all, the whole of: allan daginn, alla nóttina",
          "nokkur, nokkur, nokkuð — some, any; before a neuter noun the form is nokkurt",
          "hver, hver, hvert — each, every; also the question word who",
          "sumir, sumar, sum — some of them, in the plural only",
          "báðir, báðar, bæði — both, always plural",
          "margir, margar, mörg — many; the singular margur is rare"
        ],
        tip: "Nokkuð stands alone as a pronoun meaning anything, while nokkurt goes in front of a neuter noun: Eiga þau nokkurt barn?"
      },
      {
        h: "Asking and answering negatively",
        p: "Nokkur is the word for any in a question that expects no, and enginn is the natural answer. Note also that a question containing a negative is answered with jú rather than já when you disagree with it.",
        ex: [
          ["Er nokkur heima?", "Is anyone home?"],
          ["Nei, enginn.", "No, nobody."],
          ["Áttu ekki bíl? Jú, ég á bíl.", "Do you not have a car? Yes, I do have a car."]
        ]
      }
    ],
    related: ["pron-demonstrative", "pron-personal", "adj-strong", "num-cardinal"]
  },

  {
    id: "num-cardinal",
    cat: "numbers",
    title: "Cardinal numbers",
    en: "Frumtölur",
    cefr: "A1",
    unit: 3,
    summary: "Only the first four numbers change shape, but they change for gender and for case, and they are the four you say most often.",
    sections: [
      {
        h: "One to four have three genders",
        table: {
          cols: ["tala", "kk", "kvk", "hk"],
          rows: [
            ["1", "einn", "ein", "eitt"],
            ["2", "tveir", "tvær", "tvö"],
            ["3", "þrír", "þrjár", "þrjú"],
            ["4", "fjórir", "fjórar", "fjögur"]
          ]
        },
        p: "The gender comes from the thing being counted. Two brothers is tveir bræður, two sisters is tvær systur, and two children is tvö börn."
      },
      {
        h: "And they decline as well",
        table: {
          cols: ["fall", "1 (kk / kvk / hk)", "2", "3", "4"],
          rows: [
            ["NF", "einn / ein / eitt", "tveir / tvær / tvö", "þrír / þrjár / þrjú", "fjórir / fjórar / fjögur"],
            ["ÞF", "einn / eina / eitt", "tvo / tvær / tvö", "þrjá / þrjár / þrjú", "fjóra / fjórar / fjögur"],
            ["ÞGF", "einum / einni / einu", "tveimur", "þremur", "fjórum"],
            ["EF", "eins / einnar / eins", "tveggja", "þriggja", "fjögurra"]
          ]
        },
        tip: "In the dative and genitive, two, three and four have one form for all genders. That is where the difficulty stops."
      },
      {
        h: "From five upwards nothing moves",
        list: [
          "5 fimm · 6 sex · 7 sjö · 8 átta · 9 níu · 10 tíu",
          "11 ellefu · 12 tólf · 13 þrettán · 14 fjórtán · 15 fimmtán",
          "16 sextán · 17 sautján · 18 átján · 19 nítján · 20 tuttugu",
          "30 þrjátíu · 40 fjörutíu · 50 fimmtíu · 60 sextíu",
          "70 sjötíu · 80 áttatíu · 90 níutíu · 100 hundrað · 1000 þúsund"
        ],
        p: "Compound numbers are joined with og: tuttugu og einn, þrjátíu og fimm, hundrað og tíu. And if the last element is one to four, it still has to agree: tuttugu og tvær krónur."
      },
      {
        h: "In real sentences",
        ex: [
          ["Ég á tvo bræður og þrjár systur.", "I have two brothers and three sisters."],
          ["Klukkan er tvö.", "It is two o'clock."],
          ["Kaffið kostar fimm hundruð krónur.", "The coffee costs five hundred krónur."],
          ["Við verðum hér í þrjá daga.", "We will be here for three days."]
        ],
        tip: "The clock uses the neuter, because it is really klukkan er tvö, meaning two hours. Money uses the feminine, because króna is feminine."
      }
    ],
    related: ["num-ordinal", "noun-plural", "adj-strong", "pron-indefinite"]
  },

  {
    id: "num-ordinal",
    cat: "numbers",
    title: "Ordinal numbers and dates",
    en: "Raðtölur",
    cefr: "A1",
    unit: 11,
    summary: "First, second and third behave like weak adjectives, and Icelandic dates are simply an ordinal followed by the month.",
    sections: [
      {
        h: "One to twenty",
        table: {
          cols: ["nr.", "raðtala", "nr.", "raðtala"],
          rows: [
            ["1.", "fyrsti", "11.", "ellefti"],
            ["2.", "annar", "12.", "tólfti"],
            ["3.", "þriðji", "13.", "þrettándi"],
            ["4.", "fjórði", "14.", "fjórtándi"],
            ["5.", "fimmti", "15.", "fimmtándi"],
            ["6.", "sjötti", "16.", "sextándi"],
            ["7.", "sjöundi", "17.", "sautjándi"],
            ["8.", "áttundi", "18.", "átjándi"],
            ["9.", "níundi", "19.", "nítjándi"],
            ["10.", "tíundi", "20.", "tuttugasti"]
          ]
        },
        tip: "Icelandic writes ordinals with a full stop, so 17. júní is the seventeenth of June, the national day."
      },
      {
        h: "The tens",
        table: {
          cols: ["nr.", "raðtala"],
          rows: [
            ["30.", "þrítugasti"],
            ["40.", "fertugasti"],
            ["50.", "fimmtugasti"],
            ["60.", "sextugasti"],
            ["70.", "sjötugasti"],
            ["80.", "áttugasti"],
            ["90.", "nítugasti"],
            ["100.", "hundraðasti"]
          ]
        },
        p: "Compounds join with og and only the last element carries the ordinal ending: tuttugasti og fyrsti, tuttugasti og níundi."
      },
      {
        h: "They decline weakly",
        p: "Every ordinal except annar takes the weak adjective endings, so the masculine is -i in the nominative and -a elsewhere, the feminine and neuter are -a, and the plural is -u. Annar keeps its own strong pattern.",
        ex: [
          ["Þetta er þriðja bókin mín.", "This is my third book."],
          ["Ég bý á fjórðu hæð.", "I live on the fourth floor."],
          ["Hann er annar í röðinni.", "He is second in the queue."]
        ]
      },
      {
        h: "Dates",
        p: "A date is the ordinal in the masculine, agreeing with the invisible word dagur. Use the nominative to state what today is, and the accusative to say when something happens.",
        ex: [
          ["Í dag er fyrsti maí.", "Today is the first of May."],
          ["Hún á afmæli þrettánda desember.", "Her birthday is on the thirteenth of December."],
          ["Við komum sautjánda júní.", "We are arriving on the seventeenth of June."]
        ],
        tip: "For a year, say the number as a plain cardinal: nítján hundruð níutíu og fimm, or tvö þúsund og fimm."
      }
    ],
    related: ["num-cardinal", "adj-weak", "pron-indefinite", "adj-compare"]
  }

];

export default grammar;
