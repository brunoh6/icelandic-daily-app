// Lundi — grammar reference: verbs, syntax and sounds.
// Merged into data/grammar.js by tools/build.js.

export const grammar = [

  {
    id: "verb-present-weak",
    cat: "verbs",
    title: "Present tense: the weak verbs",
    en: "Nútíð veikra sagna",
    cefr: "A1",
    unit: 2,
    summary: "Most Icelandic verbs are weak, and they split into a handful of endings you can learn in an afternoon.",
    sections: [
      {
        h: "One infinitive, three singular patterns",
        p: "Nearly every Icelandic infinitive ends in -a. Take that -a off and you have the stem. What you add back tells you which family the verb belongs to. The plural endings are the same for everybody: -um, -ið, -a. Only the singular varies.",
        ex: [
          ["Ég tala íslensku.", "I speak Icelandic."],
          ["Hún lærir dönsku.", "She is learning Danish."],
          ["Við veljum kaffi.", "We choose coffee."]
        ],
        tip: "Learn every new verb together with its ég form. That one word tells you the whole singular."
      },
      {
        h: "The -a family",
        p: "The ég form looks exactly like the infinitive, and þú and hann both end in -ar. This is the biggest family by far, and it is the one that swallows new and borrowed verbs.",
        table: {
          cols: ["", "tala (speak)", "borða (eat)", "spila (play)"],
          rows: [
            ["ég", "tala", "borða", "spila"],
            ["þú", "talar", "borðar", "spilar"],
            ["hann/hún/það", "talar", "borðar", "spilar"],
            ["við", "tölum", "borðum", "spilum"],
            ["þið", "talið", "borðið", "spilið"],
            ["þeir/þær/þau", "tala", "borða", "spila"]
          ]
        },
        tip: "Watch tölum. The -um ending drags an a in the stem over to ö. That is the u-umlaut, and it never stops happening."
      },
      {
        h: "The -i family",
        p: "The same shape as the -a family, but with i where the other has a. If a verb ends its ég form in -i, the past tense will end in -ði, -di or -ti rather than -aði.",
        table: {
          cols: ["", "heyra (hear)", "læra (learn)", "gera (do)"],
          rows: [
            ["ég", "heyri", "læri", "geri"],
            ["þú", "heyrir", "lærir", "gerir"],
            ["hann/hún/það", "heyrir", "lærir", "gerir"],
            ["við", "heyrum", "lærum", "gerum"],
            ["þið", "heyrið", "lærið", "gerið"],
            ["þeir/þær/þau", "heyra", "læra", "gera"]
          ]
        }
      },
      {
        h: "The -ja family",
        p: "These verbs carry a j in the infinitive. The j disappears in the whole singular, then walks back in before -um and -ið. The ég form has no ending at all, and þú and hann take -ur.",
        table: {
          cols: ["", "velja (choose)", "telja (count)", "flytja (move)"],
          rows: [
            ["ég", "vel", "tel", "flyt"],
            ["þú", "velur", "telur", "flytur"],
            ["hann/hún/það", "velur", "telur", "flytur"],
            ["við", "veljum", "teljum", "flytjum"],
            ["þið", "veljið", "teljið", "flytjið"],
            ["þeir/þær/þau", "velja", "telja", "flytja"]
          ]
        },
        tip: "The j only survives in front of u and i-endings in the plural. Nowhere else."
      },
      {
        h: "Short verbs",
        p: "A few very common verbs have a one-syllable infinitive. They behave like the -ja family in the plural and shift their vowel in the singular.",
        table: {
          cols: ["", "ná (reach, catch)", "þvo (wash)"],
          rows: [
            ["ég", "næ", "þvæ"],
            ["þú", "nærð", "þværð"],
            ["hann/hún/það", "nær", "þvær"],
            ["við", "náum", "þvoum"],
            ["þið", "náið", "þvoið"],
            ["þeir/þær/þau", "ná", "þvo"]
          ]
        },
        ex: [
          ["Ég næ strætó klukkan átta.", "I catch the bus at eight."],
          ["Hann þvær sér um hendurnar.", "He washes his hands."]
        ]
      }
    ],
    related: ["verb-present-strong", "verb-past-weak", "verb-vera-hafa"]
  },

  {
    id: "verb-present-strong",
    cat: "verbs",
    title: "Present tense: strong verbs and the vowel shift",
    en: "Nútíð sterkra sagna",
    cefr: "A1.2",
    unit: 7,
    summary: "The commonest verbs of all change their stem vowel in the singular, then snap back to normal in the plural.",
    sections: [
      {
        h: "Why fara becomes fer",
        p: "Strong verbs take no ending in the ég form, and instead bend the stem vowel. Icelandic calls this the i-shift, because the vowel is being pulled towards an i that fell off the ending a thousand years ago. The plural puts the original vowel back.",
        ex: [
          ["Ég fer heim klukkan sex.", "I go home at six."],
          ["Við förum heim klukkan sex.", "We go home at six."]
        ],
        tip: "Singular is shifted, plural is honest. If you can see the infinitive vowel, you are in the plural."
      },
      {
        h: "The shifts you will meet first",
        table: {
          cols: ["nafnháttur", "ég", "þú", "hann/hún/það", "breyting"],
          rows: [
            ["fara", "fer", "ferð", "fer", "a til e"],
            ["taka", "tek", "tekur", "tekur", "a til e"],
            ["ganga", "geng", "gengur", "gengur", "a til e"],
            ["standa", "stend", "stendur", "stendur", "a til e"],
            ["halda", "held", "heldur", "heldur", "a til e"],
            ["koma", "kem", "kemur", "kemur", "o til e"],
            ["sofa", "sef", "sefur", "sefur", "o til e"],
            ["fá", "fæ", "færð", "fær", "á til æ"],
            ["sjá", "sé", "sérð", "sér", "já til é"]
          ]
        }
      },
      {
        h: "Four full paradigms",
        table: {
          cols: ["", "fara (go)", "taka (take)", "koma (come)", "ganga (walk)"],
          rows: [
            ["ég", "fer", "tek", "kem", "geng"],
            ["þú", "ferð", "tekur", "kemur", "gengur"],
            ["hann/hún/það", "fer", "tekur", "kemur", "gengur"],
            ["við", "förum", "tökum", "komum", "göngum"],
            ["þið", "farið", "takið", "komið", "gangið"],
            ["þeir/þær/þau", "fara", "taka", "koma", "ganga"]
          ]
        },
        tip: "förum, tökum, göngum: the -um ending turns a into ö every single time."
      },
      {
        h: "Three more you cannot avoid",
        table: {
          cols: ["", "standa (stand)", "verða (become)", "sjá (see)"],
          rows: [
            ["ég", "stend", "verð", "sé"],
            ["þú", "stendur", "verður", "sérð"],
            ["hann/hún/það", "stendur", "verður", "sér"],
            ["við", "stöndum", "verðum", "sjáum"],
            ["þið", "standið", "verðið", "sjáið"],
            ["þeir/þær/þau", "standa", "verða", "sjá"]
          ]
        },
        ex: [
          ["Bakaríið stendur við hornið.", "The bakery stands on the corner."],
          ["Það verður kalt í kvöld.", "It will be cold tonight."],
          ["Sérðu lundann þarna?", "Do you see the puffin over there?"]
        ]
      },
      {
        h: "Choosing between -ur and -ð in the þú form",
        p: "Look at your ég form. If it ends in a vowel, add -rð. If it already ends in -r, add just -ð. Otherwise add -ur.",
        table: {
          cols: ["ég form ends in", "þú ending", "dæmi"],
          rows: [
            ["a vowel", "-rð", "fæ til færð, sé til sérð, næ til nærð"],
            ["-r", "-ð", "fer til ferð"],
            ["any other consonant", "-ur", "tek til tekur, kem til kemur"]
          ]
        }
      }
    ],
    related: ["verb-present-weak", "verb-past-strong", "verb-vera-hafa"]
  },

  {
    id: "verb-vera-hafa",
    cat: "verbs",
    title: "vera and hafa",
    en: "Sagnirnar vera og hafa",
    cefr: "A1",
    unit: 1,
    summary: "The two verbs that hold the whole language together, in every tense you will need.",
    sections: [
      {
        h: "vera, to be",
        table: {
          cols: ["", "nútíð", "þátíð", "vth. nútíð", "vth. þátíð"],
          rows: [
            ["ég", "er", "var", "sé", "væri"],
            ["þú", "ert", "varst", "sért", "værir"],
            ["hann/hún/það", "er", "var", "sé", "væri"],
            ["við", "erum", "vorum", "séum", "værum"],
            ["þið", "eruð", "voruð", "séuð", "væruð"],
            ["þeir/þær/þau", "eru", "voru", "séu", "væru"]
          ]
        },
        tip: "Boðháttur: vertu (to one person), verið (to several). Sagnbót: verið."
      },
      {
        h: "hafa, to have",
        table: {
          cols: ["", "nútíð", "þátíð", "vth. nútíð", "vth. þátíð"],
          rows: [
            ["ég", "hef", "hafði", "hafi", "hefði"],
            ["þú", "hefur", "hafðir", "hafir", "hefðir"],
            ["hann/hún/það", "hefur", "hafði", "hafi", "hefði"],
            ["við", "höfum", "höfðum", "höfum", "hefðum"],
            ["þið", "hafið", "höfðuð", "hafið", "hefðuð"],
            ["þeir/þær/þau", "hafa", "höfðu", "hafi", "hefðu"]
          ]
        },
        tip: "Sagnbót: haft. Boðháttur: hafðu, hafið."
      },
      {
        h: "What follows vera has to agree",
        p: "An adjective after vera takes the gender and number of the subject. This is the single most common slip learners make in their first month.",
        ex: [
          ["Jónas er þreyttur.", "Jónas is tired."],
          ["Anna er þreytt.", "Anna is tired."],
          ["Barnið er þreytt.", "The child is tired."],
          ["Við erum þreytt.", "We are tired."]
        ]
      },
      {
        h: "Three jobs for vera",
        table: {
          cols: ["bygging", "merking", "dæmi"],
          rows: [
            ["vera + lýsingarorð", "plain description", "Kaffið er heitt."],
            ["vera að + nafnháttur", "right now, in progress", "Ég er að læra íslensku."],
            ["vera búinn að + nafnháttur", "finished, just done", "Sóley er búin að baka."],
            ["vera með + þolfall", "have on you, carry", "Ég er með lyklana."]
          ]
        },
        tip: "vera með is how Icelanders say have for anything you are holding, wearing or suffering from: ég er með höfuðverk."
      },
      {
        h: "hafa, eiga or vera með?",
        p: "hafa is mostly an auxiliary these days. For owning something use eiga; for having something on you use vera með.",
        ex: [
          ["Ég á tvo bræður.", "I have two brothers."],
          ["Ég er með peninga á mér.", "I have money on me."],
          ["Ég hef aldrei komið til Akureyrar.", "I have never been to Akureyri."]
        ]
      }
    ],
    related: ["verb-perfect", "verb-modals", "verb-subjunctive"]
  },

  {
    id: "verb-past-weak",
    cat: "verbs",
    title: "Past tense: weak verbs",
    en: "Þátíð veikra sagna",
    cefr: "A2.2",
    unit: 14,
    summary: "Weak verbs build the past with a dental consonant plus a fixed set of endings.",
    sections: [
      {
        h: "The recipe",
        p: "Stem, then a dental (-ð-, -d- or -t-), then the person ending. The singular endings are -i, -ir, -i and the plural endings are -um, -uð, -u. That never changes, whatever the verb.",
        tip: "The plural endings all contain u, so any a left in the stem turns into ö: töluðum, sögðum, töldum."
      },
      {
        h: "The -a family keeps its -a",
        table: {
          cols: ["", "tala (speak)", "borða (eat)", "hjálpa (help)"],
          rows: [
            ["ég", "talaði", "borðaði", "hjálpaði"],
            ["þú", "talaðir", "borðaðir", "hjálpaðir"],
            ["hann/hún/það", "talaði", "borðaði", "hjálpaði"],
            ["við", "töluðum", "borðuðum", "hjálpuðum"],
            ["þið", "töluðuð", "borðuðuð", "hjálpuðuð"],
            ["þeir/þær/þau", "töluðu", "borðuðu", "hjálpuðu"]
          ]
        },
        tip: "This is the easiest past tense in the language: -aði in the singular, -uðu- in the plural, no exceptions."
      },
      {
        h: "The -i family",
        table: {
          cols: ["", "heyra (hear)", "læra (learn)", "gera (do)", "læsa (lock)"],
          rows: [
            ["ég", "heyrði", "lærði", "gerði", "læsti"],
            ["þú", "heyrðir", "lærðir", "gerðir", "læstir"],
            ["hann/hún/það", "heyrði", "lærði", "gerði", "læsti"],
            ["við", "heyrðum", "lærðum", "gerðum", "læstum"],
            ["þið", "heyrðuð", "lærðuð", "gerðuð", "læstuð"],
            ["þeir/þær/þau", "heyrðu", "lærðu", "gerðu", "læstu"]
          ]
        }
      },
      {
        h: "Which dental do I pick?",
        p: "Exactly the same rule as the singular imperative. Listen to the last sound of the stem.",
        table: {
          cols: ["dental", "after", "dæmi"],
          rows: [
            ["-ð-", "vowels and voiced sounds", "heyra til heyrði"],
            ["-d-", "l, m, n", "gleyma til gleymdi, telja til taldi"],
            ["-t-", "p, t, k, s and voiceless clusters", "læsa til læsti, flytja til flutti"]
          ]
        }
      },
      {
        h: "The -ja family shifts its vowel too",
        table: {
          cols: ["nafnháttur", "þátíð et.", "þátíð ft.", "sagnbót"],
          rows: [
            ["velja", "valdi", "völdum", "valið"],
            ["telja", "taldi", "töldum", "talið"],
            ["flytja", "flutti", "fluttum", "flutt"],
            ["segja", "sagði", "sögðum", "sagt"],
            ["leggja", "lagði", "lögðum", "lagt"],
            ["spyrja", "spurði", "spurðum", "spurt"]
          ]
        },
        ex: [
          ["Sóley sagði mér frá lundanum.", "Sóley told me about the puffin."],
          ["Við völdum stærsta kaffibollann.", "We chose the biggest coffee cup."]
        ]
      }
    ],
    related: ["verb-past-strong", "verb-present-weak", "verb-participles"]
  },

  {
    id: "verb-past-strong",
    cat: "verbs",
    title: "Past tense: strong verbs",
    en: "Þátíð sterkra sagna",
    cefr: "A2.2",
    unit: 14,
    summary: "Strong verbs have no dental at all. They tell you the past by changing their vowel, once in the singular and again in the plural.",
    sections: [
      {
        h: "Two stems, almost no endings",
        p: "A strong verb has one vowel for the past singular and another for the past plural. The only singular ending in the whole tense is -st in the þú form. The plural takes the ordinary -um, -uð, -u.",
        tip: "That is why dictionaries list strong verbs in four parts: fara, fór, fórum, farið. Learn all four together or you will only ever half know the verb."
      },
      {
        h: "fara, taka, koma, sjá",
        table: {
          cols: ["", "fara", "taka", "koma", "sjá"],
          rows: [
            ["ég", "fór", "tók", "kom", "sá"],
            ["þú", "fórst", "tókst", "komst", "sást"],
            ["hann/hún/það", "fór", "tók", "kom", "sá"],
            ["við", "fórum", "tókum", "komum", "sáum"],
            ["þið", "fóruð", "tókuð", "komuð", "sáuð"],
            ["þeir/þær/þau", "fóru", "tóku", "komu", "sáu"]
          ]
        }
      },
      {
        h: "ganga, standa, verða, geta",
        table: {
          cols: ["", "ganga", "standa", "verða", "geta"],
          rows: [
            ["ég", "gekk", "stóð", "varð", "gat"],
            ["þú", "gekkst", "stóðst", "varðst", "gast"],
            ["hann/hún/það", "gekk", "stóð", "varð", "gat"],
            ["við", "gengum", "stóðum", "urðum", "gátum"],
            ["þið", "genguð", "stóðuð", "urðuð", "gátuð"],
            ["þeir/þær/þau", "gengu", "stóðu", "urðu", "gátu"]
          ]
        },
        tip: "verða loses its v in the plural: varð but urðum. Any verb starting with v- does the same in front of u."
      },
      {
        h: "The vowel series",
        p: "There are roughly seven patterns. They leak, but knowing them means you can guess a form and be right most of the time.",
        table: {
          cols: ["stofnsérhljóð", "þátíð et.", "þátíð ft.", "sagnbót", "dæmi"],
          rows: [
            ["í", "ei", "i", "i", "bíta, beit, bitum, bitið"],
            ["jó/jú/ú", "au", "u", "o", "fljúga, flaug, flugum, flogið"],
            ["i + nefhljóð", "a", "u", "u", "finna, fann, fundum, fundið"],
            ["e", "a", "á", "e", "gefa, gaf, gáfum, gefið"],
            ["i", "a", "á", "e", "sitja, sat, sátum, setið"],
            ["a", "ó", "ó", "a", "fara, fór, fórum, farið"],
            ["a", "é", "é", "a", "falla, féll, féllum, fallið"],
            ["á/é", "é", "é", "á", "láta, lét, létum, látið"],
            ["au", "jó", "u", "au", "hlaupa, hljóp, hlupum, hlaupið"]
          ]
        }
      },
      {
        h: "The ones that follow nobody",
        table: {
          cols: ["nafnháttur", "þátíð et.", "þátíð ft.", "sagnbót"],
          rows: [
            ["búa", "bjó", "bjuggum", "búið"],
            ["fá", "fékk", "fengum", "fengið"],
            ["ganga", "gekk", "gengum", "gengið"],
            ["standa", "stóð", "stóðum", "staðið"],
            ["vinna", "vann", "unnum", "unnið"],
            ["sofa", "svaf", "sváfum", "sofið"],
            ["deyja", "dó", "dóum", "dáið"],
            ["vera", "var", "vorum", "verið"]
          ]
        },
        ex: [
          ["Amma bjó á Ísafirði í fjörutíu ár.", "Grandma lived in Ísafjörður for forty years."],
          ["Ég fékk bréf frá Önnu í gær.", "I got a letter from Anna yesterday."]
        ]
      }
    ],
    related: ["verb-past-weak", "verb-present-strong", "verb-subjunctive"]
  },

  {
    id: "verb-participles",
    cat: "verbs",
    title: "Participles",
    en: "Lýsingarháttur nútíðar og þátíðar",
    cefr: "A2.2",
    unit: 13,
    summary: "One participle ends in -andi and never changes; the other ends in -að, -t or -ið and sometimes has to agree.",
    sections: [
      {
        h: "The present participle: -andi",
        p: "Add -andi to the stem and you get a form that works as an adjective, an adverb or a noun. As an adjective it is frozen: it never declines.",
        ex: [
          ["Barnið er sofandi.", "The child is sleeping."],
          ["Þetta er spennandi bók.", "This is an exciting book."],
          ["Lúlli kom labbandi inn í bakaríið.", "Lúlli came walking into the bakery."],
          ["Anna er nemandi í Háskóla Íslands.", "Anna is a student at the University of Iceland."]
        ],
        tip: "As a noun, -andi words are people who do the thing: nemandi, kennari is not one of them, but seljandi and kaupandi are."
      },
      {
        h: "The past participle, by verb family",
        table: {
          cols: ["hópur", "ending", "dæmi"],
          rows: [
            ["-a family", "-að", "tala til talað, borða til borðað"],
            ["-i family", "-t", "heyra til heyrt, gera til gert"],
            ["-ja family and strong verbs", "-ið, usually with a vowel change", "taka til tekið, lesa til lesið"]
          ]
        }
      },
      {
        h: "The vowel changes in -ið participles",
        table: {
          cols: ["stofnsérhljóð", "sérhljóð í sagnbót", "dæmi"],
          rows: [
            ["í", "i", "bíta til bitið"],
            ["jó/jú/ú", "o", "fljúga til flogið"],
            ["i", "u", "finna til fundið"],
            ["i", "e", "sitja til setið"],
            ["e", "e", "lesa til lesið, gefa til gefið"],
            ["e in -ja verbs", "a", "semja til samið"]
          ]
        }
      },
      {
        h: "Supine or adjective?",
        p: "After hafa and geta the participle is frozen in its neuter form. Icelandic calls that the sagnbót, the supine. After vera and verða it is a real adjective and takes the gender and number of the subject.",
        table: {
          cols: ["sögn", "kk", "kvk", "hk"],
          rows: [
            ["kalla", "kallaður", "kölluð", "kallað"],
            ["opna", "opnaður", "opnuð", "opnað"],
            ["gera", "gerður", "gerð", "gert"],
            ["brjóta", "brotinn", "brotin", "brotið"],
            ["lesa", "lesinn", "lesin", "lesið"],
            ["taka", "tekinn", "tekin", "tekið"]
          ]
        },
        ex: [
          ["Ég hef lesið bókina.", "I have read the book."],
          ["Bókin er lesin í skólanum.", "The book is read in the school."],
          ["Bækurnar eru lesnar á hverju ári.", "The books are read every year."]
        ],
        tip: "If hafa or geta stands in front of it, the participle cannot move. Anywhere else, check the subject first."
      }
    ],
    related: ["verb-perfect", "verb-passive", "verb-past-strong"]
  },

  {
    id: "verb-perfect",
    cat: "verbs",
    title: "The perfect: hafa plus the supine",
    en: "Núliðin tíð",
    cefr: "A2.2",
    unit: 15,
    summary: "hafa plus a frozen participle covers both what has just happened and what happened a very long time ago.",
    sections: [
      {
        h: "The build",
        p: "Take hafa in whatever person you need and put the supine after it. The supine never changes shape, no matter who the subject is.",
        table: {
          cols: ["", "hafa + sagnbót"],
          rows: [
            ["ég", "hef borðað"],
            ["þú", "hefur borðað"],
            ["hann/hún/það", "hefur borðað"],
            ["við", "höfum borðað"],
            ["þið", "hafið borðað"],
            ["þeir/þær/þau", "hafa borðað"]
          ]
        },
        ex: [
          ["Hefurðu séð Lúlla í dag?", "Have you seen Lúlli today?"],
          ["Við höfum búið hér í tíu ár.", "We have lived here for ten years."]
        ]
      },
      {
        h: "Two quite different meanings",
        p: "With words like oft, aldrei or áður the perfect means what English means by it. With no such word at all, Icelandic usually reads it as something finished long ago.",
        table: {
          cols: ["setning", "merking"],
          rows: [
            ["Amma hefur oft farið til læknis.", "Grandma has often been to the doctor."],
            ["Amma hefur farið til læknis.", "Grandma went to the doctor, a long time ago."],
            ["Amma er búin að fara til læknis.", "Grandma has been to the doctor, just now."]
          ]
        },
        tip: "If you mean just now, reach for vera búinn að rather than the perfect."
      },
      {
        h: "vera búinn að, and it does agree",
        p: "búinn is an adjective, so it takes the gender and number of the subject even though the infinitive after it does not move.",
        table: {
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            ["eintala", "búinn", "búin", "búið"],
            ["fleirtala", "búnir", "búnar", "búin"]
          ]
        },
        ex: [
          ["Jónas er búinn að borða.", "Jónas has eaten."],
          ["Anna er búin að borða.", "Anna has eaten."],
          ["Þau eru búin að fara.", "They have left."]
        ]
      },
      {
        h: "The past perfect",
        p: "Swap hef for hafði and you have the tense for one past event that came before another.",
        ex: [
          ["Ég hafði aldrei séð norðurljósin áður.", "I had never seen the northern lights before."],
          ["Hún hafði farið heim þegar ég kom.", "She had gone home by the time I arrived."]
        ]
      },
      {
        h: "Verbs of motion take vera instead",
        p: "With fara, koma and a few others, vera plus the participle says where someone now is. The participle then agrees like any adjective.",
        ex: [
          ["Hann er farinn heim.", "He has gone home."],
          ["Anna er komin.", "Anna has arrived."],
          ["Þau eru komin til Íslands.", "They have arrived in Iceland."]
        ]
      }
    ],
    related: ["verb-vera-hafa", "verb-participles", "verb-past-strong"]
  },

  {
    id: "verb-imperative",
    cat: "verbs",
    title: "The imperative",
    en: "Boðháttur",
    cefr: "A1.2",
    unit: 10,
    summary: "Telling one person what to do means welding þú onto the end of the verb.",
    sections: [
      {
        h: "The stem plus -ðu",
        p: "The singular imperative is the stem with -ðu stuck on. That -ðu is the pronoun þú, worn down over centuries until it became an ending. For several people you simply use the þið form of the verb.",
        ex: [
          ["Komdu inn!", "Come in!"],
          ["Farðu heim.", "Go home."],
          ["Talið hægar.", "Speak more slowly."]
        ]
      },
      {
        h: "How the ending changes shape",
        table: {
          cols: ["regla", "eintala", "fleirtala"],
          rows: [
            ["-a verbs keep the -a", "talaðu!", "talið!"],
            ["default is -ðu", "farðu!", "farið!"],
            ["-du after l, m, n", "komdu!", "komið!"],
            ["-tu after p, t, k, s", "taktu!", "takið!"],
            ["nothing extra after -dd or -tt", "hættu!", "hættið!"]
          ]
        }
      },
      {
        h: "Common irregulars",
        table: {
          cols: ["nafnháttur", "eintala", "fleirtala"],
          rows: [
            ["vera", "vertu", "verið"],
            ["ganga", "gakktu", "gangið"],
            ["standa", "stattu", "standið"],
            ["halda", "haltu", "haldið"],
            ["segja", "segðu", "segið"],
            ["gera", "gerðu", "gerið"],
            ["sjá", "sjáðu", "sjáið"],
            ["hafa", "hafðu", "hafið"],
            ["senda", "sendu", "sendið"],
            ["hringja", "hringdu", "hringið"]
          ]
        }
      },
      {
        h: "Saying do not",
        p: "Put ekki in front of the plain infinitive, or leave the imperative and add ekki after it. Both are ordinary spoken Icelandic.",
        ex: [
          ["Ekki gera þetta.", "Do not do that."],
          ["Farðu ekki strax.", "Do not leave yet."]
        ]
      },
      {
        h: "Reflexive verbs keep their pronoun",
        ex: [
          ["Flýttu þér!", "Hurry up!"],
          ["Fáðu þér kaffi.", "Have some coffee."],
          ["Hreyfðu þig meira.", "Move about more."]
        ]
      },
      {
        h: "Softer ways to ask",
        p: "A bare imperative is not rude in Icelandic. But when you want to be gentle, the past subjunctive of geta or vilja does the job.",
        ex: [
          ["Viltu rétta mér saltið?", "Would you pass me the salt?"],
          ["Gætirðu hjálpað mér?", "Could you help me?"],
          ["Gjörðu svo vel.", "Here you are."]
        ]
      }
    ],
    related: ["verb-modals", "verb-subjunctive", "verb-reflexive"]
  },

  {
    id: "verb-middle-voice",
    cat: "verbs",
    title: "The middle voice",
    en: "Miðmynd",
    cefr: "A2.1",
    unit: 12,
    summary: "An -st glued to the verb turns it reflexive, reciprocal, passive, or into a different verb altogether.",
    sections: [
      {
        h: "How to build it",
        p: "Add -st to the verb form you already have, then clean up: the personal endings -r, -ð and -rð fall away, and a d, ð or t immediately before the -st disappears too. The result is that the whole singular looks identical.",
        table: {
          cols: ["", "koma til komast", "breyta til breytast", "kalla til kallast"],
          rows: [
            ["ég", "kemst", "breytist", "kallast"],
            ["þú", "kemst", "breytist", "kallast"],
            ["hann/hún/það", "kemst", "breytist", "kallast"],
            ["við", "komumst", "breytumst", "köllumst"],
            ["þið", "komist", "breytist", "kallist"],
            ["þeir/þær/þau", "komast", "breytast", "kallast"]
          ]
        },
        tip: "Three identical singular forms is not a misprint. It is the whole point of the middle voice."
      },
      {
        h: "The past",
        table: {
          cols: ["", "komast", "kallast", "segjast"],
          rows: [
            ["ég", "komst", "kallaðist", "sagðist"],
            ["þú", "komst", "kallaðist", "sagðist"],
            ["hann/hún/það", "komst", "kallaðist", "sagðist"],
            ["við", "komumst", "kölluðumst", "sögðumst"],
            ["þið", "komust", "kölluðust", "sögðust"],
            ["þeir/þær/þau", "komust", "kölluðust", "sögðust"]
          ]
        },
        tip: "For komast the present ég form and the past ég form are both komst. Only the sentence around it tells you which."
      },
      {
        h: "Four things it does",
        table: {
          cols: ["hlutverk", "dæmi", "English"],
          rows: [
            ["reflexive", "Barnið meiddist.", "The child hurt itself."],
            ["each other", "Við sjáumst á morgun.", "We will see each other tomorrow."],
            ["a new meaning", "Ég komst ekki í vinnuna.", "I could not get to work."],
            ["the only form there is", "Anna ferðast mikið.", "Anna travels a lot."]
          ]
        }
      },
      {
        h: "When -st changes the meaning",
        table: {
          cols: ["germynd", "miðmynd", "merking"],
          rows: [
            ["koma", "komast", "get there, manage to go"],
            ["taka", "takast", "succeed, work out"],
            ["gera", "gerast", "happen"],
            ["sjá", "sjást", "be visible, see each other"],
            ["finna", "finnast", "be found; and mér finnst, I think"],
            ["heyra", "heyrast", "be heard"],
            ["gifta", "giftast", "get married"]
          ]
        },
        ex: [
          ["Hvað er að gerast hérna?", "What is going on here?"],
          ["Mér tókst það loksins.", "I finally managed it."]
        ]
      },
      {
        h: "Middle voice as a quiet passive",
        p: "When nobody in particular is doing the action, the middle voice is the natural way to say it. It often comes out in English as can be.",
        ex: [
          ["Húsið sést ekki héðan.", "The house cannot be seen from here."],
          ["Mjólkin geymist vel í ísskáp.", "Milk keeps well in the fridge."],
          ["Bókin selst vel.", "The book is selling well."]
        ]
      }
    ],
    related: ["verb-passive", "verb-reflexive", "reported-speech"]
  },

  {
    id: "verb-modals",
    cat: "verbs",
    title: "Modal verbs",
    en: "Hjálparsagnir",
    cefr: "A1.2",
    unit: 10,
    summary: "can, want, may, should, need and know how to, plus the one rule that trips everyone up: geta takes a supine.",
    sections: [
      {
        h: "The six you need first",
        table: {
          cols: ["", "geta", "vilja", "mega", "eiga", "þurfa", "kunna"],
          rows: [
            ["ég", "get", "vil", "má", "á", "þarf", "kann"],
            ["þú", "getur", "vilt", "mátt", "átt", "þarft", "kannt"],
            ["hann/hún/það", "getur", "vill", "má", "á", "þarf", "kann"],
            ["við", "getum", "viljum", "megum", "eigum", "þurfum", "kunnum"],
            ["þið", "getið", "viljið", "megið", "eigið", "þurfið", "kunnið"],
            ["þeir/þær/þau", "geta", "vilja", "mega", "eiga", "þurfa", "kunna"]
          ]
        },
        tip: "Notice how many of them have a bare singular and a full plural. They are old verbs and they kept old habits."
      },
      {
        h: "Their past and their polite form",
        table: {
          cols: ["sögn", "þátíð", "vth. þátíð", "merking"],
          rows: [
            ["geta", "gat, gátum", "gæti", "can, be able to"],
            ["vilja", "vildi, vildum", "vildi", "want"],
            ["mega", "mátti, máttum", "mætti", "may, be allowed"],
            ["eiga að", "átti, áttum", "ætti", "should, ought to"],
            ["þurfa að", "þurfti, þurftum", "þyrfti", "need to"],
            ["kunna að", "kunni, kunnum", "kynni", "know how to"]
          ]
        },
        ex: [
          ["Gætirðu opnað gluggann?", "Could you open the window?"],
          ["Þú ættir að hvíla þig.", "You ought to rest."]
        ]
      },
      {
        h: "munu and skulu",
        p: "These two are the only Icelandic infinitives ending in -u. munu is a hedged future; skulu is intention, promise or an invitation.",
        table: {
          cols: ["", "munu", "skulu"],
          rows: [
            ["ég", "mun", "skal"],
            ["þú", "munt", "skalt"],
            ["hann/hún/það", "mun", "skal"],
            ["við", "munum", "skulum"],
            ["þið", "munuð", "skuluð"],
            ["þeir/þær/þau", "munu", "skulu"]
          ]
        },
        ex: [
          ["Það mun rigna á morgun.", "It will probably rain tomorrow."],
          ["Við skulum fá okkur kaffi.", "Let us get some coffee."]
        ]
      },
      {
        h: "With að, without að, or with a supine",
        table: {
          cols: ["sögn", "hvað kemur á eftir", "dæmi"],
          rows: [
            ["vilja", "bare infinitive", "Ég vil fara heim."],
            ["mega", "bare infinitive", "Má ég koma inn?"],
            ["munu", "bare infinitive", "Það mun kosta mikið."],
            ["skulu", "bare infinitive", "Við skulum bíða."],
            ["geta", "supine, never an infinitive", "Ég get komið á morgun."],
            ["eiga", "að + infinitive", "Þú átt að mæta klukkan átta."],
            ["þurfa", "að + infinitive", "Ég þarf að fara."],
            ["ætla", "að + infinitive", "Við ætlum að borða."],
            ["kunna", "að + infinitive", "Hún kann að synda."]
          ]
        },
        tip: "Ég get farið, never ég get fara. geta is the odd one out and it is very common, so fix it early."
      }
    ],
    related: ["verb-infinitive-ad", "verb-subjunctive", "verb-vera-hafa"]
  },

  {
    id: "verb-subjunctive",
    cat: "verbs",
    title: "The subjunctive",
    en: "Viðtengingarháttur",
    cefr: "B1.1",
    unit: 16,
    summary: "The mood for wishes, reported speech and things that are not quite facts.",
    sections: [
      {
        h: "What it is for",
        p: "The subjunctive marks something as not straightforwardly true: a wish, a rumour, a condition that is only imagined, a polite request. Icelandic uses it far more than English does, and you will hear it every day.",
        ex: [
          ["Gangi þér vel!", "Good luck!"],
          ["Ég vona að þú komir.", "I hope you will come."],
          ["Ef ég ætti bíl færi ég oftar út úr bænum.", "If I had a car I would get out of town more often."]
        ]
      },
      {
        h: "Present subjunctive",
        p: "Built straight from the infinitive stem, with an -i in almost every slot and no vowel shift at all. That absent shift is the giveaway: fari, not fer.",
        table: {
          cols: ["", "vera", "hafa", "fara", "koma", "spila"],
          rows: [
            ["ég", "sé", "hafi", "fari", "komi", "spili"],
            ["þú", "sért", "hafir", "farir", "komir", "spilir"],
            ["hann/hún/það", "sé", "hafi", "fari", "komi", "spili"],
            ["við", "séum", "höfum", "förum", "komum", "spilum"],
            ["þið", "séuð", "hafið", "farið", "komið", "spilið"],
            ["þeir/þær/þau", "séu", "hafi", "fari", "komi", "spili"]
          ]
        }
      },
      {
        h: "Past subjunctive",
        p: "Built from the past plural stem, and here the vowel does shift. This is why you have to know the past plural of strong verbs.",
        table: {
          cols: ["", "vera", "hafa", "fara", "koma", "taka", "geta"],
          rows: [
            ["ég", "væri", "hefði", "færi", "kæmi", "tæki", "gæti"],
            ["þú", "værir", "hefðir", "færir", "kæmir", "tækir", "gætir"],
            ["hann/hún/það", "væri", "hefði", "færi", "kæmi", "tæki", "gæti"],
            ["við", "værum", "hefðum", "færum", "kæmum", "tækjum", "gætum"],
            ["þið", "væruð", "hefðuð", "færuð", "kæmuð", "tækjuð", "gætuð"],
            ["þeir/þær/þau", "væru", "hefðu", "færu", "kæmu", "tækju", "gætu"]
          ]
        }
      },
      {
        h: "Getting there from the past plural",
        table: {
          cols: ["þátíð ft.", "hljóðbreyting", "vth. þátíð"],
          rows: [
            ["fórum", "ó til æ", "færi"],
            ["sáum", "á til æ", "sæi"],
            ["tókum", "ó til æ", "tæki"],
            ["stóðum", "ó til æ", "stæði"],
            ["urðum", "u til y", "yrði"],
            ["þurftum", "u til y", "þyrfti"],
            ["gengum", "engin breyting", "gengi"],
            ["töluðum", "engin breyting", "talaði"]
          ]
        },
        tip: "For weak -a verbs the past subjunctive and the plain past are the same word. One less thing to learn."
      },
      {
        h: "Where it turns up",
        table: {
          cols: ["kveikja", "dæmi", "English"],
          rows: [
            ["a wish", "Lifi Ísland!", "Long live Iceland!"],
            ["að after segja, vona, halda", "Hún segir að hann sé veikur.", "She says he is ill."],
            ["hvort and hv- questions", "Ég spurði hvort hún kæmi.", "I asked whether she was coming."],
            ["þó að, nema, svo að, til þess að", "Ég kem þótt ég sé þreytt.", "I will come although I am tired."],
            ["an imagined condition", "Ég vildi að þú værir hér.", "I wish you were here."]
          ]
        },
        tip: "ef does not automatically mean subjunctive. Ég geri það ef ég get is a plain fact and stays in the indicative."
      }
    ],
    related: ["reported-speech", "conjunctions", "verb-modals"]
  },

  {
    id: "verb-passive",
    cat: "verbs",
    title: "The passive",
    en: "Þolmynd",
    cefr: "B1.1",
    unit: 18,
    summary: "vera or verða plus a participle, with three twists English does not have.",
    sections: [
      {
        h: "The plain passive",
        p: "The object becomes the subject, vera carries the tense, and the participle agrees with the new subject in gender and number.",
        ex: [
          ["Húsið var byggt árið 1930.", "The house was built in 1930."],
          ["Bókin er lesin í öllum skólum.", "The book is read in all schools."],
          ["Bréfin voru skrifuð í gær.", "The letters were written yesterday."],
          ["Dyrnar eru opnaðar klukkan níu.", "The doors are opened at nine."]
        ]
      },
      {
        h: "Agreement of the participle",
        table: {
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            ["eintala", "lesinn", "lesin", "lesið"],
            ["fleirtala", "lesnir", "lesnar", "lesin"]
          ]
        }
      },
      {
        h: "verða for something still to come",
        p: "vera describes the state; verða describes the change or the future event.",
        ex: [
          ["Húsið verður málað í sumar.", "The house will be painted this summer."],
          ["Maturinn verður borinn fram klukkan sjö.", "The food will be served at seven."]
        ]
      },
      {
        h: "A dative object stays in the dative",
        p: "If the active verb governed the dative or genitive, the noun keeps that case and never becomes a nominative subject. The participle then has nothing to agree with and freezes in the neuter.",
        ex: [
          ["Bílnum var stolið.", "The car was stolen."],
          ["Mér var hjálpað.", "I was helped."],
          ["Honum var boðið í mat.", "He was invited for a meal."]
        ],
        tip: "This is the twist. Bíllinn var stolinn is wrong, because stela takes the dative."
      },
      {
        h: "No object at all",
        p: "Icelandic will happily build a passive out of a verb that has no object. Either það fills the empty subject slot, or you front something else.",
        ex: [
          ["Það var dansað fram á nótt.", "There was dancing until the small hours."],
          ["Hér er ekki reykt.", "There is no smoking here."],
          ["Þangað er ekki flogið á veturna.", "There are no flights there in winter."]
        ]
      },
      {
        h: "Active, passive, and no agent",
        table: {
          cols: ["germynd", "þolmynd", "athugasemd"],
          rows: [
            ["Anna les bókina.", "Bókin er lesin.", "object becomes subject, participle agrees"],
            ["Einhver stal bílnum.", "Bílnum var stolið.", "dative object keeps the dative"],
            ["Þau dönsuðu lengi.", "Það var dansað lengi.", "no object, so það steps in"],
            ["Enginn sér húsið.", "Húsið sést ekki.", "middle voice when there is no real agent"]
          ]
        }
      }
    ],
    related: ["verb-participles", "verb-middle-voice", "verb-impersonal"]
  },

  {
    id: "verb-impersonal",
    cat: "verbs",
    title: "Impersonal verbs",
    en: "Ópersónulegar sagnir",
    cefr: "A1.2",
    unit: 8,
    summary: "Feelings, wants and needs put you in the accusative or the dative, and leave the verb stuck in the third person singular.",
    sections: [
      {
        h: "No nominative subject",
        p: "A whole family of Icelandic verbs has no ordinary subject. The person is in the accusative or the dative, and the verb stays in the third person singular whatever happens. English says I am cold; Icelandic says to-me is cold.",
        ex: [
          ["Mér er kalt.", "I am cold."],
          ["Mig langar í kaffi.", "I would like a coffee."]
        ],
        tip: "Never say ég langar. The verb is not about you as a doer, it is about something happening to you."
      },
      {
        h: "The mér group, dative",
        table: {
          cols: ["setning", "English", "sögn"],
          rows: [
            ["Mér finnst þetta gott.", "I think this is good.", "finnast"],
            ["Mér líður vel.", "I feel well.", "líða"],
            ["Mér er kalt.", "I am cold.", "vera"],
            ["Mér leiðist.", "I am bored.", "leiðast"],
            ["Mér líkar vel við hana.", "I like her.", "líka"],
            ["Mér þykir vænt um þig.", "I am fond of you.", "þykja"],
            ["Mér tókst það.", "I managed it.", "takast"]
          ]
        }
      },
      {
        h: "The mig group, accusative",
        table: {
          cols: ["setning", "English", "sögn"],
          rows: [
            ["Mig langar í ís.", "I fancy an ice cream.", "langa"],
            ["Mig vantar hjálp.", "I need help.", "vanta"],
            ["Mig dreymdi þig í nótt.", "I dreamt about you last night.", "dreyma"],
            ["Mig minnir að hún komi.", "I seem to recall she is coming.", "minna"],
            ["Mig grunar eitthvað.", "I suspect something.", "gruna"],
            ["Mig svimar.", "I feel dizzy.", "svima"]
          ]
        },
        tip: "hlakka til is the exception people argue about. Say ég hlakka til, with a normal nominative."
      },
      {
        h: "Which form of the pronoun?",
        table: {
          cols: ["", "þolfall, mig-hópur", "þágufall, mér-hópur"],
          rows: [
            ["ég", "mig", "mér"],
            ["þú", "þig", "þér"],
            ["hann", "hann", "honum"],
            ["hún", "hana", "henni"],
            ["við", "okkur", "okkur"],
            ["þið", "ykkur", "ykkur"],
            ["þeir/þær/þau", "þá / þær / þau", "þeim"]
          ]
        },
        ex: [
          ["Okkur langar í ís.", "We fancy an ice cream."],
          ["Strákunum leiðist.", "The boys are bored."]
        ],
        tip: "Plural person, singular verb. Okkur langar, never okkur langa."
      },
      {
        h: "Weather and the empty það",
        p: "Weather verbs have no subject either, so það holds the slot open exactly as English it does.",
        ex: [
          ["Það rignir mikið í Reykjavík.", "It rains a lot in Reykjavík."],
          ["Það snjóaði alla nóttina.", "It snowed all night."],
          ["Það er gott veður í dag.", "The weather is good today."]
        ]
      }
    ],
    related: ["verb-middle-voice", "verb-passive", "verb-reflexive"]
  },

  {
    id: "verb-reflexive",
    cat: "verbs",
    title: "Reflexive pronouns and sinn",
    en: "Afturbeygð fornöfn",
    cefr: "A2.1",
    unit: 12,
    summary: "sig, sér, sín point back at the subject, and sinn tells you whose it really is.",
    sections: [
      {
        h: "Only the third person has its own word",
        p: "In the first and second person the reflexive pronoun is just the ordinary pronoun. The third person, singular and plural, has one special set for all genders: sig, sér, sín.",
        table: {
          cols: ["", "þolfall", "þágufall", "eignarfall"],
          rows: [
            ["ég", "mig", "mér", "mín"],
            ["þú", "þig", "þér", "þín"],
            ["hann/hún/það", "sig", "sér", "sín"],
            ["við", "okkur", "okkur", "okkar"],
            ["þið", "ykkur", "ykkur", "ykkar"],
            ["þeir/þær/þau", "sig", "sér", "sín"]
          ]
        }
      },
      {
        h: "Each verb decides the case",
        table: {
          cols: ["sögn", "fall", "dæmi"],
          rows: [
            ["flýta sér", "þágufall", "Hún flýtir sér í vinnuna."],
            ["fá sér", "þágufall", "Ég ætla að fá mér kaffi."],
            ["skemmta sér", "þágufall", "Þau skemmta sér vel."],
            ["klæða sig", "þolfall", "Ég klæði mig áður en ég borða."],
            ["raka sig", "þolfall", "Hann rakar sig á morgnana."],
            ["hvíla sig", "þolfall", "Við hvílum okkur eftir gönguna."],
            ["hreyfa sig", "þolfall", "Þú þarft að hreyfa þig meira."]
          ]
        },
        tip: "Learn the pronoun with the verb, as one lump: flýta sér, fá sér, klæða sig."
      },
      {
        h: "sinn: whose is it really?",
        p: "For the third person, sinn means it belongs to the subject of the sentence. hans, hennar and þeirra mean it belongs to somebody else. English cannot tell these apart at all.",
        table: {
          cols: ["setning", "hver á hlutinn?"],
          rows: [
            ["Jónas tekur bílinn sinn.", "his own car"],
            ["Jónas tekur bílinn hans.", "someone else's car"],
            ["Anna hittir systur sína.", "her own sister"],
            ["Anna hittir systur hennar.", "another woman's sister"]
          ]
        }
      },
      {
        h: "sinn declines like minn",
        table: {
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            ["NF", "sinn", "sín", "sitt"],
            ["ÞF", "sinn", "sína", "sitt"],
            ["ÞGF", "sínum", "sinni", "sínu"],
            ["EF", "síns", "sinnar", "síns"]
          ]
        },
        tip: "sinn never appears as the subject of its own clause, because it always looks back at one."
      },
      {
        h: "Or drop the pronoun and use -st",
        p: "Many reflexive verbs have a middle voice twin that says the same thing in one word.",
        ex: [
          ["Barnið meiðir sig.", "The child hurts itself."],
          ["Barnið meiðist.", "The child gets hurt."],
          ["Þau ætla að gifta sig.", "They are getting married."],
          ["Þau ætla að giftast.", "They are getting married."]
        ]
      }
    ],
    related: ["verb-middle-voice", "verb-imperative", "verb-impersonal"]
  },

  {
    id: "verb-infinitive-ad",
    cat: "verbs",
    title: "The infinitive and að",
    en: "Nafnháttur með að",
    cefr: "A1.2",
    unit: 10,
    summary: "When to put að in front of a second verb, when to leave it out, and when to reach for the supine instead.",
    sections: [
      {
        h: "The marker",
        p: "The infinitive of nearly every verb ends in -a. að in front of it works like English to. The trouble is that some verbs want it, some refuse it, and geta wants something else entirely.",
        ex: [
          ["Ég ætla að læra íslensku.", "I am going to learn Icelandic."],
          ["Ég vil læra íslensku.", "I want to learn Icelandic."],
          ["Ég get lært íslensku.", "I can learn Icelandic."]
        ]
      },
      {
        h: "Verbs that take að",
        table: {
          cols: ["sögn", "dæmi", "English"],
          rows: [
            ["ætla að", "Ég ætla að hringja í Önnu.", "I am going to phone Anna."],
            ["þurfa að", "Þú þarft að hvíla þig.", "You need to rest."],
            ["eiga að", "Við eigum að mæta klukkan átta.", "We are supposed to turn up at eight."],
            ["byrja að", "Hún byrjaði að hlæja.", "She started laughing."],
            ["hætta að", "Hann hætti að reykja í fyrra.", "He stopped smoking last year."],
            ["reyna að", "Ég reyni að tala hægt.", "I try to speak slowly."],
            ["nenna að", "Ég nenni ekki að elda í kvöld.", "I do not feel like cooking tonight."],
            ["langa til að", "Mig langar til að ferðast um landið.", "I would like to travel around the country."]
          ]
        }
      },
      {
        h: "Verbs that refuse að",
        p: "The modals vilja, mega, munu and skulu take a bare infinitive, and so do the verbs of letting and perceiving.",
        ex: [
          ["Ég vil fara heim.", "I want to go home."],
          ["Má ég sjá?", "May I see?"],
          ["Við skulum bíða aðeins.", "Let us wait a moment."],
          ["Ég sá hann koma.", "I saw him coming."],
          ["Hún lét mig bíða.", "She kept me waiting."]
        ]
      },
      {
        h: "geta takes a supine",
        p: "After geta the second verb appears in its supine form, the frozen neuter participle. This is the one pattern to drill until it is automatic.",
        ex: [
          ["Ég get komið á morgun.", "I can come tomorrow."],
          ["Geturðu hjálpað mér?", "Can you help me?"],
          ["Ég gat ekki sofnað.", "I could not fall asleep."]
        ]
      },
      {
        h: "Purpose and prepositions",
        table: {
          cols: ["bygging", "dæmi", "English"],
          rows: [
            ["til að", "Ég kom til að hjálpa þér.", "I came to help you."],
            ["til þess að", "Hún fór út til þess að ná í mjólk.", "She went out to fetch milk."],
            ["án þess að", "Hann fór án þess að segja neitt.", "He left without saying anything."],
            ["eftir að hafa", "Eftir að hafa borðað fórum við í göngu.", "After eating we went for a walk."]
          ]
        }
      },
      {
        h: "Infinitive or a whole clause?",
        p: "Same subject in both halves, use an infinitive. Different subjects, use að plus a clause, and that clause takes the subjunctive.",
        ex: [
          ["Ég ætla að fara snemma.", "I am going to leave early."],
          ["Ég vil að þú farir snemma.", "I want you to leave early."]
        ]
      }
    ],
    related: ["verb-modals", "verb-subjunctive", "conjunctions"]
  },

  {
    id: "word-order",
    cat: "syntax",
    title: "Word order",
    en: "Orðaröð",
    cefr: "A2.2",
    unit: 17,
    summary: "The finite verb sits in second place, and everything else arranges itself around it.",
    sections: [
      {
        h: "The one rule that matters",
        p: "Icelandic is a verb-second language. Put whatever you like at the front of a statement, but the finite verb must come immediately after it, and the subject then slides in behind the verb.",
        table: {
          cols: ["fyrsta sæti", "sögn", "afgangurinn"],
          rows: [
            ["Ég", "fer", "í bæinn á morgun."],
            ["Á morgun", "fer", "ég í bæinn."],
            ["Í bæinn", "fer", "ég á morgun."],
            ["Þennan bíl", "keypti", "Jónas í fyrra."]
          ]
        },
        tip: "If you front a time or place word and forget to swap the subject and verb, the sentence sounds foreign at once."
      },
      {
        h: "Questions",
        table: {
          cols: ["gerð", "dæmi", "English"],
          rows: [
            ["staðhæfing", "Þú talar íslensku.", "You speak Icelandic."],
            ["já/nei-spurning", "Talar þú íslensku?", "Do you speak Icelandic?"],
            ["hv-spurning", "Hvar talar þú íslensku?", "Where do you speak Icelandic?"],
            ["hv-orð sem frumlag", "Hver talar íslensku?", "Who speaks Icelandic?"]
          ]
        },
        tip: "Icelandic has no helper verb for questions. There is no equivalent of do."
      },
      {
        h: "þú welded onto the verb",
        p: "In speech þú almost always merges with the verb in front of it. The þ softens to ð or disappears.",
        table: {
          cols: ["fullt form", "talmál"],
          rows: [
            ["ert þú", "ertu"],
            ["ferð þú", "ferðu"],
            ["segir þú", "segirðu"],
            ["vilt þú", "viltu"],
            ["hefur þú", "hefurðu"]
          ]
        }
      },
      {
        h: "Subordinate clauses",
        p: "Inside a subordinate clause the subject comes before the verb again, because the conjunction is already filling the front slot.",
        ex: [
          ["Ég veit að hún kemur í kvöld.", "I know she is coming tonight."],
          ["Hann spurði hvort ég væri þreytt.", "He asked whether I was tired."]
        ]
      },
      {
        h: "A fronted clause counts as the first slot",
        p: "Put a whole subordinate clause at the front and the main clause still has to invert.",
        ex: [
          ["Þegar hún kemur, borðum við.", "When she arrives, we will eat."],
          ["Ef það rignir, verðum við heima.", "If it rains, we will stay in."]
        ]
      },
      {
        h: "Objects and adverbs",
        table: {
          cols: ["regla", "dæmi", "English"],
          rows: [
            ["indirect before direct", "Ég gaf henni bókina.", "I gave her the book."],
            ["both as pronouns, dative first", "Ég gaf honum hana.", "I gave it to him."],
            ["adverb after the finite verb", "Anna talar oft við Jónas.", "Anna often talks to Jónas."],
            ["pronoun object jumps the adverb", "Hún saknar hans oft.", "She often misses him."]
          ]
        }
      }
    ],
    related: ["negation", "conjunctions", "relative-clauses"]
  },

  {
    id: "negation",
    cat: "syntax",
    title: "Negation",
    en: "Neitun",
    cefr: "A2.2",
    unit: 17,
    summary: "ekki follows the finite verb, unless a pronoun object gets there first.",
    sections: [
      {
        h: "Straight after the verb",
        p: "The default position for ekki is immediately after the finite verb. Not at the end, not before the verb.",
        ex: [
          ["Ég tala ekki þýsku.", "I do not speak German."],
          ["Hún er ekki heima.", "She is not at home."],
          ["Við förum ekki í dag.", "We are not going today."]
        ]
      },
      {
        h: "Pronoun objects overtake ekki",
        p: "A short pronoun object slips in front of the negation. A full noun phrase stays behind it.",
        table: {
          cols: ["andlag", "dæmi", "English"],
          rows: [
            ["fornafn", "Ég sé hann ekki.", "I do not see him."],
            ["nafnorð", "Ég sé ekki bílinn.", "I do not see the car."],
            ["fornafn", "Hún þekkir mig ekki.", "She does not know me."],
            ["nafnorð", "Hún þekkir ekki systur mína.", "She does not know my sister."]
          ]
        }
      },
      {
        h: "With two verbs",
        p: "ekki still hugs the finite verb, so it lands between the auxiliary and the second verb.",
        ex: [
          ["Ég hef ekki séð hana lengi.", "I have not seen her for a long time."],
          ["Þú átt ekki að gera þetta.", "You should not do that."],
          ["Hann getur ekki komið.", "He cannot come."]
        ]
      },
      {
        h: "In subordinate clauses too",
        p: "Unlike its Scandinavian neighbours, Icelandic keeps ekki after the finite verb even inside a subordinate clause.",
        ex: [
          ["Ég veit að hann kemur ekki.", "I know that he is not coming."],
          ["Hún segir að hún sé ekki þreytt.", "She says that she is not tired."]
        ]
      },
      {
        h: "The other negative words",
        table: {
          cols: ["orð", "English", "dæmi"],
          rows: [
            ["ekki", "not", "Ég skil þetta ekki."],
            ["aldrei", "never", "Ég hef aldrei séð lunda svona nálægt."],
            ["ekkert", "nothing", "Ég sé ekkert."],
            ["enginn", "nobody, no", "Enginn kom í tíma."],
            ["hvergi", "nowhere", "Ég finn lyklana hvergi."],
            ["hvorki og né", "neither nor", "Ég drekk hvorki te né kaffi."]
          ]
        }
      },
      {
        h: "enginn declines",
        table: {
          cols: ["", "kk", "kvk", "hk"],
          rows: [
            ["NF", "enginn", "engin", "ekkert"],
            ["ÞF", "engan", "enga", "ekkert"],
            ["ÞGF", "engum", "engri", "engu"],
            ["EF", "einskis", "engrar", "einskis"]
          ]
        },
        ex: [
          ["Ég á engan bíl.", "I do not own a car."],
          ["Hann sagði ekkert.", "He said nothing."]
        ]
      },
      {
        h: "já or jú?",
        p: "When you contradict a negative question, the answer is jú, not já. Getting this right makes you sound instantly more fluent.",
        ex: [
          ["Kemurðu ekki? Jú, ég kem.", "Are you not coming? Yes, I am."],
          ["Kemurðu? Já, ég kem.", "Are you coming? Yes, I am."]
        ]
      }
    ],
    related: ["word-order", "verb-modals", "conjunctions"]
  },

  {
    id: "relative-clauses",
    cat: "syntax",
    title: "Relative clauses",
    en: "Tilvísunarsetningar",
    cefr: "B1.1",
    unit: 19,
    summary: "One word, sem, does the work of who, whom, which and that, and it never changes.",
    sections: [
      {
        h: "sem covers everything",
        p: "Whatever the gender, number or case of the noun in front, the relative word is sem. It is not declined and it cannot be left out.",
        ex: [
          ["Maðurinn sem býr hér heitir Jónas.", "The man who lives here is called Jónas."],
          ["Bókin sem ég las var mjög góð.", "The book I read was very good."],
          ["Börnin sem búa í næsta húsi eru þrjú.", "The children who live next door are three."]
        ],
        tip: "English drops that all the time. Icelandic never drops sem."
      },
      {
        h: "What sem is doing inside its clause",
        table: {
          cols: ["hlutverk", "dæmi", "English"],
          rows: [
            ["frumlag", "Konan sem vinnur í bakaríinu heitir Sóley.", "The woman who works in the bakery is called Sóley."],
            ["andlag", "Kaffið sem ég keypti var kalt.", "The coffee I bought was cold."],
            ["með forsetningu", "Húsið sem við búum í er gamalt.", "The house we live in is old."]
          ]
        }
      },
      {
        h: "The preposition goes to the end",
        p: "A preposition belonging to the relative clause is stranded at the end. It never stands in front of sem.",
        ex: [
          ["Stelpan sem ég talaði við heitir Anna.", "The girl I spoke to is called Anna."],
          ["Bekkurinn sem ég sit á er nýr.", "The bench I am sitting on is new."],
          ["Maðurinn sem ég fékk bréfið frá er kennari.", "The man I got the letter from is a teacher."]
        ]
      },
      {
        h: "The relative family",
        table: {
          cols: ["orð", "notkun", "dæmi"],
          rows: [
            ["sem", "the general relative", "Bíllinn sem stendur þarna er minn."],
            ["þar sem", "place, where", "Bakaríið þar sem Sóley vinnur er í miðbænum."],
            ["það sem", "what, that which", "Ég skil ekki það sem þú segir."],
            ["sá sem", "the one who", "Sá sem kemur síðastur borgar kaffið."],
            ["allt sem", "everything that", "Allt sem hann sagði var satt."]
          ]
        }
      },
      {
        h: "The noun keeps its own case",
        p: "The head noun takes whatever case the main clause needs. sem takes nothing at all, so the two never have to be reconciled.",
        ex: [
          ["Ég þekki manninn sem býr hér.", "I know the man who lives here."],
          ["Ég talaði við manninn sem býr hér.", "I spoke to the man who lives here."]
        ],
        tip: "manninn is accusative because þekkja demands it. sem stays sem either way."
      },
      {
        h: "Extra information, set off by commas",
        ex: [
          ["Jónas, sem býr við hliðina á mér, málar alltaf eitthvað.", "Jónas, who lives next door to me, is always painting something."],
          ["Lúlli, sem á ekkert erindi hingað, situr á borðinu.", "Lúlli, who has no business here, is sitting on the table."]
        ]
      }
    ],
    related: ["conjunctions", "word-order", "reported-speech"]
  },

  {
    id: "conjunctions",
    cat: "syntax",
    title: "Conjunctions",
    en: "Samtengingar",
    cefr: "A2.2",
    unit: 19,
    summary: "Some joining words leave the sentence alone; others open a subordinate clause and sometimes demand the subjunctive.",
    sections: [
      {
        h: "Two families",
        p: "Coordinating conjunctions link two things of equal weight and change nothing. Subordinating conjunctions open a clause that depends on the main one, and that clause has its own word order.",
        tip: "If you can swap the two halves and the sentence still works, the conjunction is coordinating."
      },
      {
        h: "Coordinating",
        table: {
          cols: ["orð", "English", "dæmi"],
          rows: [
            ["og", "and", "Anna og Jónas búa í sama húsi."],
            ["en", "but", "Ég er þreyttur en ég kem samt."],
            ["eða", "or", "Viltu te eða kaffi?"],
            ["heldur", "but rather", "Þetta er ekki te heldur kaffi."],
            ["því", "for, because", "Ég fer heim því ég er þreytt."]
          ]
        }
      },
      {
        h: "Subordinating",
        table: {
          cols: ["orð", "English", "dæmi"],
          rows: [
            ["að", "that", "Ég veit að hún kemur."],
            ["hvort", "whether", "Ég veit ekki hvort hann kemur."],
            ["ef", "if", "Ef það rignir verðum við heima."],
            ["þegar", "when", "Þegar ég vakna drekk ég kaffi."],
            ["af því að", "because", "Ég kom af því að þú baðst mig."],
            ["áður en", "before", "Ég borða áður en ég fer."],
            ["eftir að", "after", "Eftir að ég borðaði fór ég út."],
            ["meðan", "while", "Hún las meðan ég eldaði."],
            ["þangað til", "until", "Við bíðum þangað til hann kemur."],
            ["eins og", "as, like", "Gerðu eins og ég geri."],
            ["þar sem", "since, given that", "Þar sem veðrið er gott göngum við."]
          ]
        }
      },
      {
        h: "The four that pull in a subjunctive",
        table: {
          cols: ["orð", "English", "dæmi"],
          rows: [
            ["þó að, þótt", "although", "Ég fer þó að það rigni."],
            ["nema", "unless", "Ég kem nema ég verði veik."],
            ["svo að", "so that", "Talaðu hægt svo að ég skilji."],
            ["til þess að", "in order that", "Ég hringdi til þess að hún vissi þetta."]
          ]
        },
        tip: "rigni, verði, skilji: no vowel shift and an -i ending. That is the present subjunctive doing its job."
      },
      {
        h: "Put the clause first and the main clause inverts",
        p: "A fronted subordinate clause fills the first slot, so the main clause must start with its verb.",
        ex: [
          ["Ef þú kemur snemma, förum við saman.", "If you come early, we will go together."],
          ["Þegar ég kom heim, var enginn þar.", "When I got home, nobody was there."],
          ["Af því að strætó var seinn, kom ég of seint.", "Because the bus was late, I arrived late."]
        ]
      },
      {
        h: "Choosing a word for because",
        table: {
          cols: ["orð", "blær", "dæmi"],
          rows: [
            ["af því að", "everyday, neutral", "Ég fór af því að mér leiddist."],
            ["því", "slightly tighter, often written", "Ég fór því mér leiddist."],
            ["þar sem", "since, given that, a bit formal", "Þar sem búðin var lokuð fór ég heim."],
            ["vegna þess að", "because of the fact that", "Vegna þess að hann var veikur kom hann ekki."]
          ]
        }
      }
    ],
    related: ["verb-subjunctive", "word-order", "relative-clauses"]
  },

  {
    id: "reported-speech",
    cat: "syntax",
    title: "Reported speech",
    en: "Óbein ræða",
    cefr: "B1.1",
    unit: 20,
    summary: "Reporting your own words uses segjast; reporting anyone else's uses að plus the subjunctive.",
    sections: [
      {
        h: "Two different routes",
        p: "Icelandic splits reported speech by whose words they were. If the reporter and the speaker are the same person, use the middle voice segjast and a plain infinitive, and skip the second subject entirely.",
        table: {
          cols: ["bein ræða", "óbein ræða", "English"],
          rows: [
            ["Ég segi: 'Ég kem á morgun.'", "Ég segist koma á morgun.", "I say I am coming tomorrow."],
            ["Hún segir: 'Ég er þreytt.'", "Hún segist vera þreytt.", "She says she is tired."],
            ["Þeir sögðu: 'Við komum seinna.'", "Þeir sögðust koma seinna.", "They said they would come later."]
          ]
        },
        tip: "No subjunctive is needed here, because an infinitive cannot carry a mood."
      },
      {
        h: "Someone else's words: að plus subjunctive",
        table: {
          cols: ["frásagnarsögn", "aukasetning", "dæmi"],
          rows: [
            ["nútíð", "nútíðarviðtengingarháttur", "Anna segir að Jónas sé heima."],
            ["þátíð", "þátíðarviðtengingarháttur", "Anna sagði að Jónas væri heima."],
            ["nútíð, liðinn atburður", "hafi + sagnbót", "Anna segir að Jónas hafi verið heima."],
            ["þátíð, liðinn atburður", "hefði + sagnbót", "Anna sagði að Jónas hefði verið heima."]
          ]
        },
        tip: "The tense of the reporting verb decides the tense of the subjunctive. Nothing else does."
      },
      {
        h: "Reporting a question",
        p: "A yes or no question becomes hvort. Anything else keeps its hv- word. Both take the subjunctive and both go back to subject before verb.",
        ex: [
          ["Hún spurði hvort ég væri þreytt.", "She asked whether I was tired."],
          ["Hann spurði hvenær ég kæmi heim.", "He asked when I would come home."],
          ["Sóley spurði hvað ég vildi.", "Sóley asked what I wanted."]
        ]
      },
      {
        h: "When the reporter is the subject inside the clause",
        p: "If the original sentence had an impersonal construction or a possessive that belonged to the speaker, segjast will not work. Use an að-clause and make the pronoun reflexive.",
        table: {
          cols: ["bein ræða", "óbein ræða"],
          rows: [
            ["Anna segir: 'Mér líður vel.'", "Anna segir að sér líði vel."],
            ["Jónas segir: 'Mig langar í kaffi.'", "Jónas segir að sig langi í kaffi."],
            ["Anna sagði: 'Íbúðin mín er björt.'", "Anna sagði að íbúðin sín væri björt."]
          ]
        }
      },
      {
        h: "A worked example",
        p: "Watch three things change at once: the pronoun, the mood and the tense.",
        ex: [
          ["Sóley sagði: 'Ég bakaði þetta í morgun.'", "Sóley said: I baked this this morning."],
          ["Sóley sagði að hún hefði bakað þetta um morguninn.", "Sóley said she had baked it that morning."]
        ]
      },
      {
        h: "What you will actually hear",
        p: "In relaxed speech people often keep the indicative, especially with segja. The subjunctive is still the form to aim for in writing and in careful speech, and it is what you will meet in the news and in books.",
        ex: [
          ["Hann segir að þetta sé í lagi.", "He says it is fine."],
          ["Hann segir að þetta er í lagi.", "He says it is fine. (casual)"]
        ]
      }
    ],
    related: ["verb-subjunctive", "verb-middle-voice", "conjunctions"]
  },

  {
    id: "sounds-alphabet",
    cat: "sounds",
    title: "The alphabet",
    en: "Stafrófið",
    cefr: "A1",
    unit: 1,
    summary: "Thirty-two letters, four of them missing from English and four English ones missing from it.",
    sections: [
      {
        h: "The order",
        p: "Accented vowels are not decorated versions of plain ones. They are separate letters with their own place in the alphabet, which is why a dictionary puts every á word after every a word.",
        list: [
          "a á b d ð e é f g h i í j k l m n o ó p r s t u ú v x y ý þ æ ö"
        ],
        tip: "Look up bát under b, but á under á, right at the front, after every word in a."
      },
      {
        h: "The letters English does not have",
        table: {
          cols: ["stafur", "hljóð", "dæmi"],
          rows: [
            ["þ", "the th of thing, no voice", "þú, þrír, þakka"],
            ["ð", "the th of this, with voice", "maður, góðan, við"],
            ["æ", "like the vowel in eye", "æfing, læra, bæ"],
            ["ö", "like the vowel in bird", "börn, köttur, sögu"],
            ["é", "a y glued to an e", "ég, séð"]
          ]
        }
      },
      {
        h: "Where they can stand",
        p: "ð never begins a word, and þ never ends one. If you can hear a th at the start, it is spelt þ; at the end or in the middle of a word it is ð.",
        ex: [
          ["þakka", "to thank"],
          ["að", "to, that"],
          ["Þingvellir", "Thingvellir"],
          ["góðan daginn", "good day"]
        ]
      },
      {
        h: "The letters that are not there",
        p: "There is no c, no q and no w in native spelling. z was abolished in 1974 and survives only in a few names and in the newspaper Morgunblaðið. x exists but is rare.",
        list: [
          "Foreign names keep their own letters: Coca-Cola, New York, Wales.",
          "Borrowed words get respelt instead: sjónvarp for television, tölva for computer.",
          "y and ý sound exactly like i and í. Only the spelling remembers the difference."
        ]
      }
    ],
    related: ["sounds-vowels", "sounds-consonants", "sounds-stress"]
  },

  {
    id: "sounds-vowels",
    cat: "sounds",
    title: "Vowels",
    en: "Sérhljóð",
    cefr: "A1",
    unit: 1,
    summary: "An accent changes the vowel completely, and half the accented letters are really diphthongs.",
    sections: [
      {
        h: "Accent means a different sound, not a louder one",
        p: "a and á are two unrelated sounds, as different as English cat and cow. Never treat the accent as stress: stress in Icelandic is fixed elsewhere and never moves.",
        table: {
          cols: ["stafur", "hljóð", "enskt viðmið", "dæmi"],
          rows: [
            ["a", "a", "father, short", "land"],
            ["á", "au", "how, cow", "bátur"],
            ["e", "e", "bed", "hestur"],
            ["é", "je", "yes", "ég"],
            ["i, y", "i", "sit", "fiskur, yfir"],
            ["í, ý", "ee", "see", "vín, býr"],
            ["o", "o", "or, short", "opna"],
            ["ó", "ou", "go", "stór"],
            ["u", "y", "French tu, German ü", "upp"],
            ["ú", "oo", "moon", "hús"],
            ["æ", "ai", "eye, my", "læra"],
            ["ö", "eu", "bird, French deux", "köttur"]
          ]
        }
      },
      {
        h: "The diphthongs",
        table: {
          cols: ["stafsetning", "hljóð", "dæmi"],
          rows: [
            ["au", "ö plus i", "auga, laug, haust"],
            ["ei, ey", "ay as in day", "einn, eyja, heima"],
            ["á", "ow as in cow", "átta, páfi"],
            ["ó", "oa as in boat", "sól, ljós"],
            ["æ", "eye", "bæ, mæla"]
          ]
        },
        tip: "au is the one everybody gets wrong. It is not the ow of house. Round your lips for ö, then glide to i."
      },
      {
        h: "Long or short",
        p: "A stressed vowel is long when only one consonant follows it, and short when two or more do. The letters are the same; only the length changes.",
        table: {
          cols: ["langt", "stutt"],
          rows: [
            ["vera", "verða"],
            ["taka", "takk"],
            ["lesa", "lest"],
            ["fara", "farm"]
          ]
        },
        tip: "The combinations p, t, k or s followed by v, j or r count as one consonant, so the vowel in vitja stays long."
      },
      {
        h: "No lazy vowels",
        p: "Unstressed syllables keep their full vowel. Icelandic has nothing like the English uh in about or sofa, so read every letter you see.",
        ex: [
          ["banani", "banana"],
          ["morgunmatur", "breakfast"],
          ["Reykjavíkurborg", "the city of Reykjavík"]
        ]
      }
    ],
    related: ["sounds-alphabet", "sounds-consonants", "sounds-stress"]
  },

  {
    id: "sounds-consonants",
    cat: "sounds",
    title: "Consonants",
    en: "Samhljóð",
    cefr: "A1",
    unit: 1,
    summary: "Preaspiration, ll as tl, hv as kv, and an f that turns into v or b depending on its neighbours.",
    sections: [
      {
        h: "Preaspiration",
        p: "A double p, t or k, and a p, t or k in front of l or n, all get a puff of air before them rather than after. It is the single most Icelandic thing about Icelandic pronunciation.",
        table: {
          cols: ["stafsetning", "framburður", "dæmi"],
          rows: [
            ["pp, tt, kk", "hp, ht, hk", "uppi, detta, takk"],
            ["p, t, k + l eða n", "hpl, htn, hkn", "epli, vatn, opna"]
          ]
        },
        tip: "vatn sounds roughly like vahtn. Put the h before the consonant, never after it."
      },
      {
        h: "ll and nn",
        table: {
          cols: ["stafsetning", "framburður", "dæmi"],
          rows: [
            ["ll", "tl", "fjall, stóll, alltaf"],
            ["nn after a long vowel or diphthong", "tn", "steinn, einn, brúnn"],
            ["nn after a short vowel", "nn", "finna, kanna"],
            ["nn in the article on kk nouns", "nn", "hesturinn, bíllinn"]
          ]
        },
        tip: "The masculine article -inn keeps a plain nn. That is why hesturinn does not rhyme with steinn."
      },
      {
        h: "hv becomes kv",
        p: "In modern Reykjavík speech every hv- word starts with a kv sound. A few speakers in the south-east still say a breathy hw, but you will not be misunderstood with kv.",
        ex: [
          ["hvað", "what"],
          ["hver", "who"],
          ["hvar", "where"],
          ["hvernig", "how"]
        ]
      },
      {
        h: "f and g change with their neighbours",
        table: {
          cols: ["stafur", "staða", "hljóð", "dæmi"],
          rows: [
            ["f", "at the start of a word", "f", "fara, fiskur"],
            ["f", "between vowels", "v", "hafa, kafa"],
            ["f", "before l or n", "b", "nafn, Keflavík"],
            ["g", "at the start of a word", "g", "góður, gata"],
            ["g", "between vowels", "a soft gh", "saga, laga"],
            ["g", "before i or j", "j", "segja, lagi"],
            ["g", "between a vowel and a or u", "silent", "sagði, fljúga"]
          ]
        }
      },
      {
        h: "Voiceless l, m, n, r",
        p: "Before p, t or k the sounds l, m, n and r lose their voice and come out as a breath. And rl and rn become something close to rtl and rtn.",
        table: {
          cols: ["dæmi", "athugasemd"],
          rows: [
            ["hjálpa", "the l goes voiceless before p"],
            ["hart", "the r goes voiceless before t"],
            ["vanta", "the n goes voiceless before t"],
            ["karl", "rl comes out as rtl"],
            ["barn", "rn comes out as rtn"]
          ]
        }
      }
    ],
    related: ["sounds-vowels", "sounds-alphabet", "sounds-stress"]
  },

  {
    id: "sounds-stress",
    cat: "sounds",
    title: "Stress and rhythm",
    en: "Áhersla og hrynjandi",
    cefr: "A1",
    unit: 1,
    summary: "The first syllable takes the stress. Always. In every word, including borrowed ones.",
    sections: [
      {
        h: "One rule, no exceptions",
        p: "Icelandic puts the main stress on the first syllable of every word. There is no list to memorise and no shifting stress in different forms of a word.",
        table: {
          cols: ["orð", "áhersla", "athugasemd"],
          rows: [
            ["Reykjavík", "REYK-ja-vík", "first syllable, as always"],
            ["íslenska", "ÍS-lenska", "the accent on the í is not the reason"],
            ["banani", "BA-na-ni", "a loanword, still stressed at the front"],
            ["hótel", "HÓ-tel", "not ho-TEL"],
            ["prófessor", "PRÓ-fessor", "the same treatment for every borrowing"]
          ]
        },
        tip: "If you are unsure where to put the emphasis, put it at the beginning. You will be right."
      },
      {
        h: "Long compounds",
        p: "Icelandic builds enormous compound words. The main stress goes on the first element and a lighter secondary stress lands on the front of the next one.",
        table: {
          cols: ["orð", "samsetning", "áhersla"],
          rows: [
            ["sundlaug", "sund + laug", "SUND-laug"],
            ["morgunmatur", "morgun + matur", "MORG-un-mat-ur"],
            ["flugvöllur", "flug + völlur", "FLUG-völl-ur"],
            ["matvöruverslun", "mat + vöru + verslun", "MAT-vöru-versl-un"]
          ]
        },
        tip: "Find the seam in a long word, and the front piece tells you where the stress goes."
      },
      {
        h: "Every syllable keeps its vowel",
        p: "Because the stress never moves, unstressed syllables are not swallowed. Endings like -inn, -unum and -irnar stay clear and audible, which is exactly why the case endings are so easy to hear.",
        ex: [
          ["hestarnir", "the horses"],
          ["húsunum", "to the houses"],
          ["stelpunni", "to the girl"]
        ]
      },
      {
        h: "Sentence melody",
        p: "A yes or no question rises gently at the end. A hv- question falls, exactly like a statement, so the word order and the question word carry the meaning rather than the tune.",
        ex: [
          ["Ertu frá Íslandi?", "Are you from Iceland?"],
          ["Hvaðan ert þú?", "Where are you from?"],
          ["Ég er frá Perú.", "I am from Peru."]
        ]
      }
    ],
    related: ["sounds-vowels", "sounds-consonants", "sounds-alphabet"]
  }

];

export default grammar;
