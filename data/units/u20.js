// Unit 20 — Skoðanir og möguleikar / Opinions and possibilities
// Subjunctive wishes, unreal conditions with ef, reported speech, the passive,
// discourse connectors and the Icelandic idea of politeness.

export const unit = {
  id: 20,
  slug: "u20",
  title: "Skoðanir og möguleikar",
  en: "Opinions and possibilities",
  cefr: "B1.1",
  icon: "💭",
  blurb: "Argue a point, wish someone luck, and say what you would do if things were different.",
  canDo: [
    "Give my opinion and say clearly whether I agree or disagree",
    "Wish someone luck and use the polite phrases Icelanders actually use",
    "Talk about what would happen if things were different, using ef and væri",
    "Report what someone else said and understand a passive sentence in the news"
  ],
  lessons: [
    {
      n: 1,
      id: "u20l1",
      kind: "lesson",
      title: "Mér finnst, ég held að",
      en: "Saying what you think",
      goal: "Offer an opinion, agree or disagree, and steer a conversation with connectors.",
      minutes: 10,
      icon: "🗣️",
      teach: [
        {
          h: "Three ways to have an opinion",
          p: "mér finnst reports a personal impression and puts you in the dative. ég held að reports a belief and pulls the next verb into the subjunctive. að mínu mati is the tidy written one, and it pushes the verb straight after it.",
          ex: [
            ["Mér finnst þetta góð hugmynd.", "I think that is a good idea."],
            ["Ég held að þetta sé rétt.", "I think that is right."],
            ["Að mínu mati er umræðan of hörð.", "In my opinion the debate is too harsh."]
          ],
          tip: "finnast never takes a nominative person. It is mér, þér, honum, Önnu — never ég finnst."
        },
        {
          h: "Sammála and its dative",
          p: "sammála and ósammála are frozen. They add no gender ending, no plural ending and no case ending, and the person you agree with lands in the dative.",
          ex: [
            ["Ég er alveg sammála þér.", "I completely agree with you."],
            ["Sóley er ósammála Jónasi um þetta.", "Sóley disagrees with Jónas about this."],
            ["Við erum sammála um flest.", "We agree about most things."]
          ],
          tip: "Þetta er rétt hjá þér is the everyday way of saying you are right."
        },
        {
          h: "Four words that steer the argument",
          p: "These are adverbs, not conjunctions, so they can open the sentence — and when they do, the verb has to follow them immediately. Nothing may squeeze in between.",
          list: [
            "hins vegar — on the other hand: Hins vegar er þetta alltof dýrt.",
            "þess vegna — that is why: Þess vegna fer ég snemma að sofa.",
            "samt — still, all the same: Þetta er dýrt. Samt ætla ég að kaupa það.",
            "að minnsta kosti — at least: Hann kom að minnsta kosti á réttum tíma.",
            "til dæmis — for example: Taktu til dæmis veðrið í gær."
          ]
        }
      ],
      vocab: ["álit", "hugmynd", "ástæða", "dæmi", "umræða", "sammála", "ósammála", "mikilvægur", "hins vegar", "að minnsta kosti", "til dæmis", "að mínu mati"],
      items: [
        { t: "match", q: "Match the opinion words",
          pairs: [["álit", "opinion, view"], ["hugmynd", "idea"], ["ástæða", "reason"], ["dæmi", "example"], ["umræða", "discussion"], ["munur", "difference"]] },

        { t: "gender", word: "ástæða", a: "kvk",
          note: "Feminine and weak: ástæða, ástæðu, ástæðu, ástæðu. Plural ástæður." },

        { t: "choice", q: "Which sentence means “I think that is right”?",
          opts: ["Ég held að þetta sé rétt", "Ég held að þetta er rétt", "Ég held þetta sé rétt", "Ég held að sé þetta rétt"],
          a: "Ég held að þetta sé rétt",
          note: "halda að needs the little word að and the subjunctive sé after it." },

        { t: "fill", q: "Put the opinion verb in.", sentence: "Mér ___ þetta góð hugmynd.", base: "finnast",
          a: "finnst", case: "", mode: "type",
          why: "finnast is stuck in the third person singular; mér is the only person marker." },

        { t: "fill", q: "Who do you agree with?", sentence: "Ég er sammála ___ um þetta.", base: "þú",
          a: "þér", case: "ÞGF", mode: "type",
          why: "sammála takes a dative: sammála mér, þér, honum, Önnu." },

        { t: "choice", q: "Which connector fits? Ég er þreyttur. ___ fer ég snemma að sofa.",
          opts: ["Þess vegna", "Hins vegar", "Til dæmis", "Að minnsta kosti"], a: "Þess vegna",
          note: "þess vegna draws a conclusion, and the verb fer follows it at once." },

        { t: "fill", q: "Pick the connector.", sentence: "Maturinn var kaldur. ___ var hann ódýr.", base: "connector",
          opts: ["Að minnsta kosti", "Þess vegna", "Til dæmis"], a: "Að minnsta kosti", case: "", mode: "choice",
          why: "að minnsta kosti rescues one good thing from a complaint." },

        { t: "build", q: "In my opinion the debate is too harsh.",
          a: "Að mínu mati er umræðan of hörð", extra: ["hart", "eru", "mín"],
          note: "að mínu mati opens the sentence, so er has to come next and umræðan waits its turn." },

        { t: "type", q: "Type: “I completely agree with you.”", a: "Ég er alveg sammála þér",
          hint: "sammála + þágufall",
          note: "No ending on sammála, whoever is speaking and however many of you there are." },

        { t: "choice", q: "Which one is possible?",
          opts: ["Við erum sammála", "Við erum sammálar", "Við erum sammálir", "Við erum sammált"],
          a: "Við erum sammála",
          note: "The word simply has no other forms." },

        { t: "listen", speak: "Hún er ósammála mér um þetta.", q: "What did you hear?", mode: "choice",
          opts: ["Hún er ósammála mér um þetta.", "Hún er sammála mér um þetta.", "Hann er ósammála mér um þetta."],
          a: "Hún er ósammála mér um þetta.",
          note: "The ó- is a short, clear syllable at the front; do not let it disappear." },

        { t: "speak", is: "Að mínu mati er þetta mikilvæg ákvörðun.", en: "In my opinion this is an important decision.",
          tip: "mikilvæg is feminine here because ákvörðun is. Stress every first syllable: MAT-i, MIK-il-væg." }
      ]
    },
    {
      n: 2,
      id: "u20l2",
      kind: "lesson",
      title: "Gangi þér vel!",
      en: "Wishes and polite requests",
      goal: "Use the present subjunctive for wishes and pitch a request at the right level.",
      minutes: 10,
      icon: "🍀",
      teach: [
        {
          h: "The wish form",
          p: "Take the infinitive, cut the -a and add -i. That is the present subjunctive, and Icelandic keeps a small set of wishes frozen in it. In a wish the verb comes first, before the person.",
          table: {
            cols: ["nafnháttur", "viðtengingarháttur", "óskin"],
            rows: [
              ["ganga", "gangi", "Gangi þér vel!"],
              ["verða", "verði", "Verði þér að góðu!"],
              ["lifa", "lifi", "Lifi Ísland!"],
              ["blessa", "blessi", "Guð blessi þig!"]
            ]
          },
          tip: "The person being wished at sits in the dative: gangi þér, gangi honum, gangi Önnu vel."
        },
        {
          h: "Hoping out loud",
          p: "vona and óska open an að-clause, and the verb inside that clause goes into the present subjunctive too. The endings are the ordinary -i, -ir, -i, -um, -ið, -i.",
          ex: [
            ["Ég vona að allt gangi vel.", "I hope everything goes well."],
            ["Ég vona að þú komir aftur.", "I hope you come back."],
            ["Hún vonar að veðrið verði betra.", "She hopes the weather will get better."]
          ],
          tip: "vera is the odd one out: sé, sért, sé, séum, séuð, séu."
        },
        {
          h: "How polite is polite enough?",
          p: "There is no everyday þér in modern Iceland and no word for please. A short imperative plus takk is warm and normal. Piling on politeness does not sound extra kind — it sounds distant, or as if you are being funny.",
          list: [
            "Réttu mér saltið, takk. — Pass me the salt. Perfectly friendly.",
            "Viltu koma með mér? — Will you come with me? The everyday request.",
            "Gætirðu hjálpað mér aðeins? — Could you help me a second? One step softer.",
            "Mætti ég fá að sjá þetta? — Might I see this? Formal, and rare in a shop.",
            "takk, gjörðu svo vel and your tone of voice do all the work that please does in English."
          ],
          tip: "gætirðu and mætti are past subjunctives. Unit 20 lesson 3 takes them apart."
        }
      ],
      vocab: ["Gangi þér vel", "Lifi Ísland", "vona", "von", "kurteisi", "kurteis", "leyfa", "banna"],
      items: [
        { t: "match", q: "Match the set phrases",
          pairs: [["Gangi þér vel", "good luck"], ["Verði þér að góðu", "you are welcome (after a meal)"], ["Lifi Ísland", "long live Iceland"], ["Gjörðu svo vel", "here you are"], ["Takk fyrir mig", "thanks for having me"]] },

        { t: "choice", q: "How do you wish somebody good luck?",
          opts: ["Gangi þér vel", "Gengur þér vel", "Gakktu vel", "Gangir þú vel"], a: "Gangi þér vel",
          note: "Third person subjunctive gangi, verb first, and the person in the dative." },

        { t: "fill", q: "Wish someone a good trip.", sentence: "___ þér vel í ferðinni!", base: "ganga",
          a: "Gangi", case: "", mode: "type",
          why: "Cut the -a off ganga and add -i: gangi. The wish opens with the verb." },

        { t: "fill", q: "Finish the hope.", sentence: "Ég vona að þú ___ aftur.", base: "koma",
          a: "komir", case: "", mode: "type",
          why: "vona að takes the present subjunctive, and the þú ending is -ir: komir." },

        { t: "fill", q: "Finish the hope.", sentence: "Ég vona að veðrið ___ betra á morgun.", base: "verða",
          opts: ["verður", "verði", "yrði"], a: "verði", case: "", mode: "choice",
          why: "verður is the plain present; verði is the subjunctive that vona demands." },

        { t: "table", q: "Complete the present subjunctive of vera.",
          cols: ["", "viðtengingarháttur nútíðar"],
          rows: [
            { label: "ég", cells: ["sé"], blank: [0] },
            { label: "þú", cells: ["sért"], blank: [] },
            { label: "hann", cells: ["sé"], blank: [] },
            { label: "við", cells: ["séum"], blank: [0] },
            { label: "þið", cells: ["séuð"], blank: [] },
            { label: "þeir", cells: ["séu"], blank: [0] }
          ] },

        { t: "build", q: "I hope everything goes well.",
          a: "Ég vona að allt gangi vel", extra: ["gengur", "fer", "mjög"],
          note: "gengur would be a plain statement of fact; after vona að the verb must be gangi." },

        { t: "type", q: "Type: “Could you help me?”", a: "Gætirðu hjálpað mér?",
          hint: "gætir + þú glued together",
          note: "hjálpa takes the dative, so it is mér and never mig." },

        { t: "choice", q: "Your neighbour holds the door open for you. What do you say?",
          opts: ["Takk fyrir", "Ég væri þér ævinlega þakklátur", "Gerðu það fyrir mig", "Fyrirgefðu mér"],
          a: "Takk fyrir",
          note: "Two words is the whole of it. The long version would sound like a joke." },

        { t: "listen", speak: "Mætti ég fá að sjá blaðið?", q: "What did you hear?", mode: "choice",
          opts: ["Mætti ég fá að sjá blaðið?", "Má ég fá að sjá blaðið?", "Viltu fá að sjá blaðið?"],
          a: "Mætti ég fá að sjá blaðið?",
          note: "má is the everyday ask; mætti lifts it into the careful register." },

        { t: "gender", word: "von", a: "kvk",
          note: "Feminine: vonin. Genitive vonar, plural vonir — the same shape as borg." },

        { t: "speak", is: "Gangi þér vel í prófinu!", en: "Good luck in the exam!",
          tip: "The g in gangi is soft before i, close to a [j]. Two light syllables, no stress on the ending." }
      ]
    },
    {
      n: 3,
      id: "u20l3",
      kind: "grammar",
      title: "Ef ég væri lundi",
      en: "The past subjunctive",
      goal: "Build væri, hefði, færi, kæmi and yrði, and use them in conditions that are not true.",
      minutes: 15,
      icon: "🌀",
      teach: [
        {
          h: "Where the form comes from",
          p: "Start from the við form of the past tense, change the vowel, and add the endings. The vowel shifts are the ones you already know from elsewhere: a becomes e, o and ó and á become æ, u becomes y.",
          table: {
            cols: ["nafnháttur", "þátíð (við)", "viðt. þátíðar"],
            rows: [
              ["vera", "vorum", "væri"],
              ["hafa", "höfðum", "hefði"],
              ["fara", "fórum", "færi"],
              ["koma", "komum", "kæmi"],
              ["verða", "urðum", "yrði"],
              ["geta", "gátum", "gæti"],
              ["taka", "tókum", "tæki"],
              ["eiga", "áttum", "ætti"]
            ]
          },
          tip: "Weak verbs change nothing at all: talaði, heyrði and gerði are the same in both moods. Only strong and irregular verbs show the form, which is why this short list carries almost the whole job."
        },
        {
          h: "The six endings",
          p: "They never vary: -i, -ir, -i, -um, -uð, -u. Notice that the first and third person are identical, exactly as in the present subjunctive.",
          table: {
            cols: ["", "vera", "hafa"],
            rows: [
              ["ég", "væri", "hefði"],
              ["þú", "værir", "hefðir"],
              ["hann", "væri", "hefði"],
              ["við", "værum", "hefðum"],
              ["þið", "væruð", "hefðuð"],
              ["þeir", "væru", "hefðu"]
            ]
          }
        },
        {
          h: "Conditions that are not true",
          p: "An ef-clause about the real world keeps the plain present: Ef það rignir, verð ég heima. An ef-clause about a world that does not exist takes the past subjunctive, and the result clause usually takes myndi plus the infinitive.",
          ex: [
            ["Ef ég ætti meiri tíma, myndi ég læra íslensku betur.", "If I had more time, I would learn Icelandic better."],
            ["Ef Lúlli gæti talað, myndi hann segja allt.", "If Lúlli could talk, he would tell everything."],
            ["Ef ég væri þú, myndi ég spyrja Sóleyju.", "If I were you, I would ask Sóley."],
            ["Ef við færum á morgun, yrðum við þar á föstudaginn.", "If we left tomorrow, we would be there on Friday."]
          ],
          tip: "When the ef-clause comes first it fills the front slot of the sentence, so the main clause has to start with its verb: myndi ég, yrðum við."
        },
        {
          h: "myndi, and the polite corner",
          p: "myndi, myndir, myndi, myndum, mynduð, myndu. It carries no meaning of its own — it is there so the second verb can stay in the infinitive. The same past subjunctive is what makes a request sound careful rather than blunt.",
          list: [
            "Ég myndi gera það sama. — I would do the same.",
            "Það væri gaman að sjá þig aftur. — It would be nice to see you again.",
            "Gætirðu opnað gluggann? — Could you open the window?",
            "Værirðu til í að koma með? — Would you be up for coming along?",
            "Ég vildi óska að þetta væri satt. — I wish this were true.",
            "Ef ég hefði vitað þetta, hefði ég ekki farið. — If I had known this, I would not have gone."
          ]
        }
      ],
      vocab: ["möguleiki", "framtíð", "vandamál", "lausn", "reynsla", "líklegur", "virðast", "efast"],
      items: [
        { t: "fill", q: "Make the condition unreal.", sentence: "Ef ég ___ ríkur, myndi ég kaupa hús við sjóinn.", base: "vera",
          a: "væri", case: "", mode: "type",
          why: "væri, værir, væri, værum, væruð, væru. I am not rich, so the plain er will not do." },

        { t: "fill", q: "Make the condition unreal.", sentence: "Ef þú ___ meiri tíma, hvað myndirðu gera?", base: "hafa",
          a: "hefðir", case: "", mode: "type",
          why: "hafa gives hefði, and the þú ending is -ir: hefðir." },

        { t: "fill", q: "Make the condition unreal.", sentence: "Ef Lúlli ___ talað, myndi hann segja allt.", base: "geta",
          a: "gæti", case: "", mode: "type",
          why: "gátum gives gæti. After geta the second verb stays in the supine: talað." },

        { t: "fill", q: "Make the condition unreal.", sentence: "Ef við ___ á morgun, yrðum við þar á föstudaginn.", base: "fara",
          a: "færum", case: "", mode: "type",
          why: "fórum gives færi, and the við ending is -um: færum." },

        { t: "fill", q: "Pick the right mood.", sentence: "Ef Anna ___ fyrr, myndi hún ná strætó.", base: "koma",
          opts: ["kæmi", "kom", "kemur", "komi"], a: "kæmi", case: "", mode: "choice",
          why: "komi is the present subjunctive; kæmi is the past one, and only kæmi builds an unreal condition." },

        { t: "fill", q: "Make the condition unreal.", sentence: "Ef ég ___ meiri peninga, myndi ég ferðast meira.", base: "eiga",
          a: "ætti", case: "", mode: "type",
          why: "áttum gives ætti. eiga is the verb for owning money; hafa would sound translated." },

        { t: "table", q: "Complete the past subjunctive of vera.",
          cols: ["", "viðtengingarháttur þátíðar"],
          rows: [
            { label: "ég", cells: ["væri"], blank: [0] },
            { label: "þú", cells: ["værir"], blank: [] },
            { label: "hann", cells: ["væri"], blank: [] },
            { label: "við", cells: ["værum"], blank: [0] },
            { label: "þið", cells: ["væruð"], blank: [] },
            { label: "þeir", cells: ["væru"], blank: [0] }
          ] },

        { t: "table", q: "Give the third person past subjunctive.",
          cols: ["nafnháttur", "viðt. þátíðar"],
          rows: [
            { label: "fara", cells: ["færi"], blank: [0] },
            { label: "koma", cells: ["kæmi"], blank: [0] },
            { label: "verða", cells: ["yrði"], blank: [0] },
            { label: "geta", cells: ["gæti"], blank: [] },
            { label: "hafa", cells: ["hefði"], blank: [0] }
          ] },

        { t: "choice", q: "Which sentence is a proper unreal condition?",
          opts: ["Ef ég væri þú, myndi ég hringja", "Ef ég er þú, myndi ég hringja", "Ef ég væri þú, mun ég hringja", "Ef ég var þú, myndi ég hringja"],
          a: "Ef ég væri þú, myndi ég hringja",
          note: "Past subjunctive in the ef-clause, myndi plus infinitive in the result. Both halves have to play along." },

        { t: "choice", q: "What is the past subjunctive of verða?",
          opts: ["yrði", "varð", "verði", "urði"], a: "yrði",
          note: "urðum gives yrði. verði is the present subjunctive, varð the plain past." },

        { t: "build", q: "If I were you, I would ask Sóley.",
          a: "Ef ég væri þú myndi ég spyrja Sóleyju", extra: ["er", "mun", "Sóley"],
          note: "spyrja takes the accusative, and Sóley becomes Sóleyju." },

        { t: "type", q: "Type: “It would be nice to see you again.”", a: "Það væri gaman að sjá þig aftur",
          hint: "Start with Það væri.",
          note: "væri is what makes it an offer rather than a statement. Það er gaman would mean it is happening now." },

        { t: "listen", speak: "Ef ég hefði vitað þetta, hefði ég ekki farið.", q: "What did you hear?", mode: "choice",
          opts: ["Ef ég hefði vitað þetta, hefði ég ekki farið.", "Ef ég hefði vitað þetta, hefði ég farið.", "Ef ég veit þetta, fer ég ekki."],
          a: "Ef ég hefði vitað þetta, hefði ég ekki farið.",
          note: "Two hefði forms and one small ekki between them decide the whole meaning." },

        { t: "speak", is: "Ef Lúlli kynni að tala, myndi hann segja frá öllu.", en: "If Lúlli knew how to talk, he would tell us everything.",
          tip: "kunni becomes kynni: u shifts to y. segja frá takes the dative, hence öllu." }
      ]
    },
    {
      n: 4,
      id: "u20l4",
      kind: "lesson",
      title: "Hann segist vera á leiðinni",
      en: "Reported speech and the passive",
      goal: "Pass on what someone said and read the passive sentences the news is written in.",
      minutes: 12,
      icon: "📰",
      teach: [
        {
          h: "segjast plus the infinitive",
          p: "When the person speaking and the person spoken about are the same, Icelandic folds the whole thing into one verb: the middle voice segjast, followed by an infinitive. Anything that describes the subject still agrees with it.",
          ex: [
            ["Jónas segist vera upptekinn.", "Jónas says he is busy."],
            ["Sóley segist hafa séð lundann.", "Sóley says she has seen the puffin."],
            ["Þau sögðust ætla að kjósa.", "They said they were going to vote."]
          ],
          tip: "segist, segist, segist, segjumst, segist, segjast — three of the six are identical, so the pronoun does the telling."
        },
        {
          h: "að-clauses and their subjunctive",
          p: "If you want a full clause instead, use að and put its verb in the subjunctive. Which subjunctive depends on the reporting verb: a present segir pulls the present, a past sagði pulls the past.",
          table: {
            cols: ["frásögn", "bein ræða", "óbein ræða"],
            rows: [
              ["nútíð", "Þetta er satt.", "Hann segir að þetta sé satt."],
              ["þátíð", "Þetta er satt.", "Hann sagði að þetta væri satt."],
              ["spurning", "Áttu tíma?", "Hún spurði hvort ég ætti tíma."]
            ]
          },
          tip: "Reported yes-or-no questions start with hvort, never with ef."
        },
        {
          h: "The passive with vera and verða",
          p: "vera plus the past participle describes the state something is in; verða plus the participle says it is going to be done. The participle behaves like an adjective and agrees with the subject in gender, number and case.",
          ex: [
            ["Fréttirnar eru lesnar klukkan sjö.", "The news is read at seven."],
            ["Greinin var skrifuð árið 1990.", "The article was written in 1990."],
            ["Húsið verður málað í sumar.", "The house will be painted this summer."],
            ["Búðinni var lokað klukkan sex.", "The shop was closed at six."]
          ],
          tip: "loka takes the dative, so its passive keeps the dative búðinni and the participle freezes in the neuter: lokað."
        },
        {
          h: "The -st passive",
          p: "The middle voice does the same work in a single word, and it is what people reach for in speech. No helper verb, no agreement to worry about — just the -st ending on the verb itself.",
          list: [
            "Lyklarnir týndust. — The keys got lost.",
            "Þetta gleymdist alveg. — That was completely forgotten.",
            "Bókin seldist vel. — The book sold well.",
            "Það heyrist ekkert hérna. — Nothing can be heard in here."
          ]
        }
      ],
      vocab: ["segjast", "virðast", "viðurkenna", "útskýra", "gleymast", "frétt", "dagblað", "blaðamaður", "grein", "viðtal"],
      items: [
        { t: "fill", q: "Fold the quote into one verb.", sentence: "Jónas ___ vera upptekinn.", base: "segjast",
          a: "segist", case: "", mode: "type",
          why: "The middle voice of segja in the third person singular is segist." },

        { t: "fill", q: "Choose the mood.", sentence: "Hann sagði að þetta ___ satt.", base: "vera",
          opts: ["væri", "var", "sé", "er"], a: "væri", case: "", mode: "choice",
          why: "sagði is in the past, so the að-clause takes the past subjunctive væri." },

        { t: "fill", q: "Report the question.", sentence: "Hún spurði hvort ég ___ tíma.", base: "eiga",
          a: "ætti", case: "", mode: "type",
          why: "hvort opens a reported question, and the verb goes into the past subjunctive: ætti." },

        { t: "fill", q: "Make the participle agree.", sentence: "Greinin var ___ árið 1990.", base: "skrifa",
          a: "skrifuð", case: "", mode: "type",
          why: "grein is feminine, so the participle takes the feminine form skrifuð." },

        { t: "fill", q: "The shop is shut.", sentence: "Búðinni var ___ klukkan sex.", base: "loka",
          opts: ["lokað", "lokuð", "lokaður"], a: "lokað", case: "", mode: "choice",
          why: "There is no nominative subject to agree with, so the participle stays neuter." },

        { t: "table", q: "Make the participle agree with the subject.",
          cols: ["", "vera + lýsingarháttur"],
          rows: [
            { label: "Bíllinn (kk.)", cells: ["var seldur"], blank: [0] },
            { label: "Bókin (kvk.)", cells: ["var seld"], blank: [0] },
            { label: "Húsið (hk.)", cells: ["var selt"], blank: [0] },
            { label: "Bílarnir (kk. ft.)", cells: ["voru seldir"], blank: [] }
          ] },

        { t: "choice", q: "Which one says “the keys got lost”?",
          opts: ["Lyklarnir týndust", "Lyklarnir týndu", "Lyklunum týndist", "Lyklarnir voru týnt"],
          a: "Lyklarnir týndust",
          note: "The -st ending turns the verb passive on its own; the keys stay in the nominative." },

        { t: "build", q: "Sóley says she has seen the puffin.",
          a: "Sóley segist hafa séð lundann", extra: ["sagði", "hefur", "lundinn"],
          note: "After segist the next verb is an infinitive, so hafa and not hefur." },

        { t: "type", q: "Type: “He said that he was tired.”", a: "Hann sagði að hann væri þreyttur",
          hint: "sagði að + viðtengingarháttur þátíðar",
          note: "English drops the that; Icelandic keeps að, and the subjunctive marks it as somebody else's claim." },

        { t: "listen", speak: "Fréttirnar eru lesnar klukkan sjö.", q: "What did you hear?", mode: "choice",
          opts: ["Fréttirnar eru lesnar klukkan sjö.", "Fréttirnar eru lesnar klukkan átta.", "Fréttin er lesin klukkan sjö."],
          a: "Fréttirnar eru lesnar klukkan sjö.",
          note: "fréttir is a feminine plural, so the participle is lesnar. One piece of news would be lesin." },

        { t: "match", q: "Match the media words",
          pairs: [["frétt", "piece of news"], ["dagblað", "newspaper"], ["blaðamaður", "journalist"], ["viðtal", "interview"], ["grein", "article"], ["skoðanakönnun", "opinion poll"]] },

        { t: "speak", is: "Það var sagt í fréttunum að veðrið yrði betra.", en: "It was said on the news that the weather would get better.",
          tip: "sagt is the neuter participle with no subject at all, and yrði keeps the forecast at arm's length." }
      ]
    },
    {
      n: 5,
      id: "u20l5",
      kind: "story",
      title: "Greinin um götuna",
      en: "The article about the street",
      goal: "Follow an argument in which nobody quite believes the newspaper.",
      minutes: 12,
      icon: "🥐",
      teach: [
        {
          h: "Two things to listen for",
          p: "Who doubts the journalist, and where Anna's newspaper ends up. Both answers arrive in a single line each, so do not blink."
        },
        {
          h: "segja að and the subjunctive",
          p: "In Jónas's line the verb after að is kosti, not kostar. He is passing on somebody else's figure and the subjunctive quietly marks it as theirs, not his."
        }
      ],
      story: {
        title: "Greinin um götuna",
        lines: [
          { sp: "Jónas", is: "Sástu greinina um götuna í blaðinu í morgun?", en: "Did you see the article about the street in the paper this morning?" },
          { sp: "Anna", is: "Já, ég las hana í strætó. Mér finnst hugmyndin góð.", en: "Yes, I read it on the bus. I think the idea is a good one." },
          { sp: "Jónas", is: "Hins vegar segja þeir að þetta kosti alltof mikið.", en: "They say, on the other hand, that it costs far too much." },
          { sp: "Sóley", is: "Blaðamaðurinn segist hafa talað við alla í götunni.", en: "The journalist says he has talked to everyone on the street." },
          { sp: "Anna", is: "Ég efast um það. Enginn talaði við mig, að minnsta kosti.", en: "I doubt it. Nobody talked to me, at least." },
          { sp: "Jónas", is: "Ef ég væri borgarstjóri, myndi ég spyrja fólkið fyrst.", en: "If I were mayor, I would ask the people first." },
          { sp: "Sóley", is: "Þess vegna er skoðanakönnun á netinu. Þú getur kosið í dag.", en: "That is why there is a poll online. You can vote today." },
          { sp: "Anna", is: "Gott. Þá kýs ég strax eftir kaffið.", en: "Good. Then I will vote right after the coffee." },
          { sp: "Sóley", is: "Bíddu, Anna. Blaðið þitt er horfið.", en: "Hang on, Anna. Your paper is gone." },
          { sp: "Jónas", is: "Það er ekki horfið. Það er undir Lúlla.", en: "It is not gone. It is under Lúlli." },
          { sp: "Anna", is: "Auðvitað. Hann les alltaf fréttirnar á undan mér.", en: "Of course. He always reads the news before I do." },
          { sp: "Sóley", is: "Gangi þér vel í kosningunni, Lúlli.", en: "Good luck in the vote, Lúlli." }
        ],
        glossary: [
          ["borgarstjóri", "mayor"],
          ["efast um", "to doubt"],
          ["á netinu", "online"],
          ["horfinn", "gone, vanished"],
          ["á undan", "ahead of, before"],
          ["auðvitað", "of course"]
        ]
      },
      vocab: ["frétt", "grein", "blaðamaður", "skoðanakönnun", "kosning", "kjósa", "efast", "hins vegar", "að minnsta kosti", "Gangi þér vel"],
      items: [
        { t: "choice", q: "Um hvað var greinin?",
          opts: ["Um götuna", "Um veðrið", "Um bakaríið", "Um lundann"], a: "Um götuna",
          note: "Jónas opens with greinina um götuna — the accusative after um." },

        { t: "choice", q: "Who doubts the journalist?",
          opts: ["Anna", "Jónas", "Sóley", "Lúlli"], a: "Anna",
          note: "Ég efast um það. Enginn talaði við mig, að minnsta kosti." },

        { t: "choice", q: "Where did Anna's newspaper end up?",
          opts: ["Under Lúlli", "In the bin", "On the bus", "Behind the counter"], a: "Under Lúlli",
          note: "undir Lúlla — undir takes the dative when nothing is moving." },

        { t: "fill", q: "Rebuild Jónas's condition.", sentence: "Ef ég ___ borgarstjóri, myndi ég spyrja fólkið fyrst.", base: "vera",
          a: "væri", case: "", mode: "type",
          why: "He is not the mayor, so the ef-clause takes the past subjunctive." },

        { t: "fill", q: "Whose figure is it?", sentence: "Þeir segja að þetta ___ alltof mikið.", base: "kosta",
          a: "kosti", case: "", mode: "type",
          why: "segja að takes the present subjunctive: kostar becomes kosti." },

        { t: "fill", q: "The journalist's own claim.", sentence: "Blaðamaðurinn ___ hafa talað við alla.", base: "segjast",
          a: "segist", case: "", mode: "type",
          why: "Same subject in both halves, so segjast plus an infinitive does the whole job." },

        { t: "fill", q: "Sóley's parting wish.", sentence: "___ þér vel í kosningunni!", base: "ganga",
          opts: ["Gangi", "Gengur", "Gakktu"], a: "Gangi", case: "", mode: "choice",
          why: "The frozen wish form: verb first, subjunctive gangi, person in the dative." },

        { t: "build", q: "I doubt that.",
          a: "Ég efast um það", extra: ["efa", "því", "ekki"],
          note: "efast is a middle-voice verb and it needs um plus the accusative." },

        { t: "type", q: "Type: “Nobody talked to me, at least.”", a: "Enginn talaði við mig, að minnsta kosti",
          hint: "enginn + past + við + þolfall",
          note: "að minnsta kosti can sit at the end like this and colours the whole sentence." },

        { t: "match", q: "Match the story phrases",
          pairs: [["borgarstjóri", "mayor"], ["efast um", "to doubt"], ["á netinu", "online"], ["á undan", "ahead of"], ["auðvitað", "of course"]] },

        { t: "listen", speak: "Þess vegna er skoðanakönnun á netinu.", q: "What did you hear?", mode: "choice",
          opts: ["Þess vegna er skoðanakönnun á netinu.", "Þess vegna er skoðanakönnun í blaðinu.", "Hins vegar er skoðanakönnun á netinu."],
          a: "Þess vegna er skoðanakönnun á netinu.",
          note: "þess vegna draws a conclusion, hins vegar turns against one. Listen to the first syllable." },

        { t: "speak", is: "Hann les alltaf fréttirnar á undan mér.", en: "He always reads the news before I do.",
          tip: "á undan takes the dative: á undan mér, á undan þér, á undan Önnu." }
      ]
    },
    {
      n: 6,
      id: "u20l6",
      kind: "checkpoint",
      title: "Skoðanapróf",
      en: "Unit 20 checkpoint",
      goal: "Prove you can argue, wish, suppose and report without losing the thread.",
      minutes: 14,
      icon: "✅",
      teach: [
        {
          h: "What you now control",
          list: [
            "Opinions: mér finnst + a nominative, ég held að + subjunctive, að mínu mati at the front.",
            "sammála and ósammála never change, and the other person is in the dative.",
            "Wishes in the present subjunctive: Gangi þér vel, Verði þér að góðu, Lifi Ísland, and vona að + -i.",
            "Past subjunctive: væri, hefði, færi, kæmi, yrði, gæti, ætti, tæki — endings -i, -ir, -i, -um, -uð, -u.",
            "Unreal conditions: ef + past subjunctive, then myndi plus the infinitive with the verb first.",
            "Reported speech: segjast + infinitive, að + subjunctive, hvort for reported questions.",
            "Passive: vera/verða + an agreeing participle, or the one-word -st form.",
            "Connectors: hins vegar, þess vegna, samt, að minnsta kosti — verb straight after them."
          ]
        }
      ],
      vocab: ["álit", "ástæða", "lausn", "möguleiki", "ákvörðun", "vandamál", "hins vegar", "að minnsta kosti", "segjast", "virðast", "kjósa", "vona", "sammála", "mikilvægur"],
      items: [
        { t: "fill", q: "Make the condition unreal.", sentence: "Ef ég ___ meiri tíma, myndi ég lesa meira.", base: "hafa",
          a: "hefði", case: "", mode: "type",
          why: "höfðum gives hefði; a shifts to e." },

        { t: "fill", q: "Make the condition unreal.", sentence: "Ef hún ___ fyrr, næði hún strætó.", base: "koma",
          a: "kæmi", case: "", mode: "type",
          why: "komum gives kæmi, and the result clause answers with næði." },

        { t: "fill", q: "Report the claim.", sentence: "Hann sagði að hann ___ þreyttur.", base: "vera",
          a: "væri", case: "", mode: "type",
          why: "A past reporting verb pulls the að-clause into the past subjunctive." },

        { t: "fill", q: "Finish the hope.", sentence: "Ég vona að allt ___ vel.", base: "ganga",
          opts: ["gangi", "gengur", "gengi"], a: "gangi", case: "", mode: "choice",
          why: "vona að takes the present subjunctive gangi; gengi would be the past one." },

        { t: "fill", q: "Make the participle agree.", sentence: "Greinin var ___ á íslensku.", base: "skrifa",
          a: "skrifuð", case: "", mode: "type",
          why: "The participle agrees with grein, which is feminine." },

        { t: "choice", q: "What is the past subjunctive of verða?",
          opts: ["yrði", "verði", "varð", "urðu"], a: "yrði",
          note: "urðum gives yrði. Ef ég væri þú, yrði ég ekki hissa." },

        { t: "choice", q: "Which connector means “on the other hand”?",
          opts: ["hins vegar", "þess vegna", "að minnsta kosti", "til dæmis"], a: "hins vegar",
          note: "þess vegna concludes, hins vegar turns the argument around." },

        { t: "table", q: "Complete the past subjunctive.",
          cols: ["", "vera", "hafa"],
          rows: [
            { label: "ég", cells: ["væri", "hefði"], blank: [0] },
            { label: "þú", cells: ["værir", "hefðir"], blank: [] },
            { label: "hann", cells: ["væri", "hefði"], blank: [1] },
            { label: "við", cells: ["værum", "hefðum"], blank: [0] },
            { label: "þið", cells: ["væruð", "hefðuð"], blank: [] },
            { label: "þeir", cells: ["væru", "hefðu"], blank: [1] }
          ] },

        { t: "match", q: "Match the abstract nouns",
          pairs: [["álit", "opinion"], ["ástæða", "reason"], ["lausn", "solution"], ["möguleiki", "possibility"], ["ákvörðun", "decision"], ["vandamál", "problem"]] },

        { t: "gender", word: "ákvörðun", a: "kvk",
          note: "Feminine: ákvörðunin. Genitive ákvörðunar, plural ákvarðanir." },

        { t: "build", q: "If I were you, I would vote.",
          a: "Ef ég væri þú myndi ég kjósa", extra: ["er", "mun", "kýs"],
          note: "The ef-clause fills the front slot, so myndi has to lead the main clause." },

        { t: "type", q: "Type: “I hope everything goes well.”", a: "Ég vona að allt gangi vel",
          hint: "vona að + viðtengingarháttur",
          note: "gengur states a fact; gangi keeps it a hope." },

        { t: "listen", speak: "Búðinni var lokað klukkan sex.", q: "What did you hear?", mode: "choice",
          opts: ["Búðinni var lokað klukkan sex.", "Búðin var lokuð klukkan sex.", "Búðinni verður lokað klukkan sex."],
          a: "Búðinni var lokað klukkan sex.",
          note: "Dative búðinni with the neuter lokað is the passive of loka; nominative búðin with lokuð is a description." },

        { t: "speak", is: "Að mínu mati er þetta besta lausnin.", en: "In my opinion this is the best solution.",
          tip: "besta is the weak form: the superlative always takes it, article or no article." }
      ]
    }
  ]
};

export const vocab = [
  // ——— skoðanir og hugtök ———
  { w: "álit", en: "opinion, view", pos: "noun", g: "hk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["álit", "álit", "áliti", "álits"], pl: ["álit", "álit", "álitum", "álita"] },
    ex: { is: "Hvert er álit þitt á þessu?", en: "What is your view on this?" } },

  { w: "ástæða", en: "reason", pos: "noun", g: "kvk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["ástæða", "ástæðu", "ástæðu", "ástæðu"], pl: ["ástæður", "ástæður", "ástæðum", "ástæðna"] },
    ex: { is: "Það er góð ástæða fyrir þessu.", en: "There is a good reason for this." } },

  { w: "umræða", en: "discussion, debate", pos: "noun", g: "kvk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["umræða", "umræðu", "umræðu", "umræðu"], pl: ["umræður", "umræður", "umræðum", "umræðna"] },
    ex: { is: "Umræðan í blöðunum var hörð.", en: "The debate in the papers was harsh." } },

  { w: "dæmi", en: "example", pos: "noun", g: "hk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["dæmi", "dæmi", "dæmi", "dæmis"], pl: ["dæmi", "dæmi", "dæmum", "dæma"] },
    ex: { is: "Getur þú nefnt eitt dæmi?", en: "Can you give one example?" } },

  { w: "munur", en: "difference", pos: "noun", g: "kk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["munur", "mun", "mun", "munar"], pl: ["munir", "muni", "munum", "muna"] },
    ex: { is: "Það er mikill munur á þessu tvennu.", en: "There is a big difference between these two." } },

  { w: "möguleiki", en: "possibility, option", pos: "noun", g: "kk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["möguleiki", "möguleika", "möguleika", "möguleika"], pl: ["möguleikar", "möguleika", "möguleikum", "möguleika"] },
    ex: { is: "Við höfum tvo möguleika.", en: "We have two options." } },

  { w: "vandamál", en: "problem", pos: "noun", g: "hk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["vandamál", "vandamál", "vandamáli", "vandamáls"], pl: ["vandamál", "vandamál", "vandamálum", "vandamála"] },
    ex: { is: "Þetta er ekkert vandamál.", en: "That is no problem at all." } },

  { w: "lausn", en: "solution", pos: "noun", g: "kvk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["lausn", "lausn", "lausn", "lausnar"], pl: ["lausnir", "lausnir", "lausnum", "lausna"] },
    ex: { is: "Besta lausnin er að bíða.", en: "The best solution is to wait." } },

  { w: "reynsla", en: "experience", pos: "noun", g: "kvk", topic: "opinion", unit: 20, cefr: "B1",
    forms: { sg: ["reynsla", "reynslu", "reynslu", "reynslu"], pl: null },
    ex: { is: "Af minni reynslu er þetta erfitt.", en: "In my experience this is difficult." } },

  { w: "framtíð", en: "future", pos: "noun", g: "kvk", topic: "abstract", unit: 20, cefr: "B1",
    forms: { sg: ["framtíð", "framtíð", "framtíð", "framtíðar"], pl: null },
    ex: { is: "Enginn veit hvað framtíðin ber í skauti sér.", en: "Nobody knows what the future holds." } },

  { w: "von", en: "hope", pos: "noun", g: "kvk", topic: "abstract", unit: 20, cefr: "B1",
    forms: { sg: ["von", "von", "von", "vonar"], pl: ["vonir", "vonir", "vonum", "vona"] },
    ex: { is: "Það er enn von.", en: "There is still hope." } },

  { w: "hugmynd", en: "idea", pos: "noun", g: "kvk", topic: "abstract", unit: 20, cefr: "B1",
    forms: { sg: ["hugmynd", "hugmynd", "hugmynd", "hugmyndar"], pl: ["hugmyndir", "hugmyndir", "hugmyndum", "hugmynda"] },
    ex: { is: "Mér finnst þetta góð hugmynd.", en: "I think that is a good idea." } },

  { w: "ákvörðun", en: "decision", pos: "noun", g: "kvk", topic: "abstract", unit: 20, cefr: "B1",
    forms: { sg: ["ákvörðun", "ákvörðun", "ákvörðun", "ákvörðunar"], pl: ["ákvarðanir", "ákvarðanir", "ákvörðunum", "ákvarðana"] },
    ex: { is: "Þetta var erfið ákvörðun.", en: "That was a hard decision." } },

  { w: "kurteisi", en: "politeness, courtesy", pos: "noun", g: "kvk", topic: "courtesy", unit: 20, cefr: "B1",
    forms: { sg: ["kurteisi", "kurteisi", "kurteisi", "kurteisi"], pl: null },
    ex: { is: "Kurteisi kostar ekkert.", en: "Politeness costs nothing." } },

  // ——— samfélag ———
  { w: "samfélag", en: "society, community", pos: "noun", g: "hk", topic: "society", unit: 20, cefr: "B1",
    forms: { sg: ["samfélag", "samfélag", "samfélagi", "samfélags"], pl: ["samfélög", "samfélög", "samfélögum", "samfélaga"] },
    ex: { is: "Íslenskt samfélag hefur breyst mikið.", en: "Icelandic society has changed a great deal." } },

  { w: "ríkisstjórn", en: "government", pos: "noun", g: "kvk", topic: "society", unit: 20, cefr: "B1",
    forms: { sg: ["ríkisstjórn", "ríkisstjórn", "ríkisstjórn", "ríkisstjórnar"], pl: ["ríkisstjórnir", "ríkisstjórnir", "ríkisstjórnum", "ríkisstjórna"] },
    ex: { is: "Ríkisstjórnin samþykkti tillöguna.", en: "The government approved the proposal." } },

  { w: "kosning", en: "election, vote", pos: "noun", g: "kvk", topic: "society", unit: 20, cefr: "B1",
    forms: { sg: ["kosning", "kosningu", "kosningu", "kosningar"], pl: ["kosningar", "kosningar", "kosningum", "kosninga"] },
    ex: { is: "Kosningin fer fram í haust.", en: "The election takes place in the autumn." } },

  { w: "frelsi", en: "freedom", pos: "noun", g: "hk", topic: "society", unit: 20, cefr: "B1",
    forms: { sg: ["frelsi", "frelsi", "frelsi", "frelsis"], pl: null },
    ex: { is: "Frelsi fylgir ábyrgð.", en: "Freedom comes with responsibility." } },

  { w: "skoðanakönnun", en: "opinion poll", pos: "noun", g: "kvk", topic: "society", unit: 20, cefr: "B1",
    forms: { sg: ["skoðanakönnun", "skoðanakönnun", "skoðanakönnun", "skoðanakönnunar"], pl: ["skoðanakannanir", "skoðanakannanir", "skoðanakönnunum", "skoðanakannana"] },
    ex: { is: "Ný skoðanakönnun birtist í morgun.", en: "A new opinion poll appeared this morning." } },

  // ——— fjölmiðlar ———
  { w: "frétt", en: "piece of news", pos: "noun", g: "kvk", topic: "media", unit: 20, cefr: "B1",
    forms: { sg: ["frétt", "frétt", "frétt", "fréttar"], pl: ["fréttir", "fréttir", "fréttum", "frétta"] },
    ex: { is: "Fréttirnar byrja klukkan sjö.", en: "The news starts at seven." } },

  { w: "dagblað", en: "newspaper", pos: "noun", g: "hk", topic: "media", unit: 20, cefr: "B1",
    forms: { sg: ["dagblað", "dagblað", "dagblaði", "dagblaðs"], pl: ["dagblöð", "dagblöð", "dagblöðum", "dagblaða"] },
    ex: { is: "Jónas les dagblaðið á hverjum morgni.", en: "Jónas reads the newspaper every morning." } },

  { w: "blaðamaður", en: "journalist", pos: "noun", g: "kk", topic: "media", unit: 20, cefr: "B1",
    forms: { sg: ["blaðamaður", "blaðamann", "blaðamanni", "blaðamanns"], pl: ["blaðamenn", "blaðamenn", "blaðamönnum", "blaðamanna"] },
    ex: { is: "Blaðamaðurinn talaði við alla í götunni.", en: "The journalist talked to everyone on the street." } },

  { w: "viðtal", en: "interview", pos: "noun", g: "hk", topic: "media", unit: 20, cefr: "B1",
    forms: { sg: ["viðtal", "viðtal", "viðtali", "viðtals"], pl: ["viðtöl", "viðtöl", "viðtölum", "viðtala"] },
    ex: { is: "Það var langt viðtal við hana í blaðinu.", en: "There was a long interview with her in the paper." } },

  { w: "grein", en: "article", pos: "noun", g: "kvk", topic: "media", unit: 20, cefr: "B1",
    forms: { sg: ["grein", "grein", "grein", "greinar"], pl: ["greinar", "greinar", "greinum", "greina"] },
    ex: { is: "Greinin var skrifuð á íslensku.", en: "The article was written in Icelandic." } },

  // ——— sagnir ———
  { w: "vona", en: "to hope", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "none", vclass: "weak-a",
    conj: { pres: ["vona", "vonar", "vonar", "vonum", "vonið", "vona"],
            past: ["vonaði", "vonaðir", "vonaði", "vonuðum", "vonuðuð", "vonuðu"], pp: "vonað" },
    ex: { is: "Ég vona að allt gangi vel.", en: "I hope everything goes well." } },

  { w: "trúa", en: "to believe", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "ÞGF", vclass: "weak-i",
    conj: { pres: ["trúi", "trúir", "trúir", "trúum", "trúið", "trúa"],
            past: ["trúði", "trúðir", "trúði", "trúðum", "trúðuð", "trúðu"], pp: "trúað" },
    ex: { is: "Ég trúi þér alveg.", en: "I believe you completely." } },

  { w: "efast", en: "to doubt", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "none", vclass: "weak-a",
    conj: { pres: ["efast", "efast", "efast", "efumst", "efist", "efast"],
            past: ["efaðist", "efaðist", "efaðist", "efuðumst", "efuðust", "efuðust"], pp: "efast" },
    ex: { is: "Ég efast um að þetta sé rétt.", en: "I doubt that this is right." } },

  { w: "viðurkenna", en: "to admit, to acknowledge", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["viðurkenni", "viðurkennir", "viðurkennir", "viðurkennum", "viðurkennið", "viðurkenna"],
            past: ["viðurkenndi", "viðurkenndir", "viðurkenndi", "viðurkenndum", "viðurkennduð", "viðurkenndu"], pp: "viðurkennt" },
    ex: { is: "Hann viðurkenndi að hann hefði rangt fyrir sér.", en: "He admitted that he was wrong." } },

  { w: "samþykkja", en: "to accept, to approve", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "ÞF", vclass: "weak-ja",
    conj: { pres: ["samþykki", "samþykkir", "samþykkir", "samþykkjum", "samþykkið", "samþykkja"],
            past: ["samþykkti", "samþykktir", "samþykkti", "samþykktum", "samþykktuð", "samþykktu"], pp: "samþykkt" },
    ex: { is: "Við samþykktum tillöguna í gær.", en: "We approved the proposal yesterday." } },

  { w: "ræða", en: "to discuss", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["ræði", "ræðir", "ræðir", "ræðum", "ræðið", "ræða"],
            past: ["ræddi", "ræddir", "ræddi", "ræddum", "rædduð", "ræddu"], pp: "rætt" },
    ex: { is: "Við ræddum málið í klukkutíma.", en: "We discussed the matter for an hour." } },

  { w: "útskýra", en: "to explain", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "ÞF", vclass: "weak-i",
    conj: { pres: ["útskýri", "útskýrir", "útskýrir", "útskýrum", "útskýrið", "útskýra"],
            past: ["útskýrði", "útskýrðir", "útskýrði", "útskýrðum", "útskýrðuð", "útskýrðu"], pp: "útskýrt" },
    ex: { is: "Gætirðu útskýrt þetta betur?", en: "Could you explain this better?" } },

  { w: "virðast", en: "to seem", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "none", vclass: "weak-i",
    conj: { pres: ["virðist", "virðist", "virðist", "virðumst", "virðist", "virðast"],
            past: ["virtist", "virtist", "virtist", "virtumst", "virtust", "virtust"], pp: "virst" },
    ex: { is: "Þetta virðist vera einfalt.", en: "This seems to be simple." } },

  { w: "leyfa", en: "to allow", pos: "verb", topic: "society", unit: 20, cefr: "B1", gov: "ÞF+ÞGF", vclass: "weak-i",
    conj: { pres: ["leyfi", "leyfir", "leyfir", "leyfum", "leyfið", "leyfa"],
            past: ["leyfði", "leyfðir", "leyfði", "leyfðum", "leyfðuð", "leyfðu"], pp: "leyft" },
    ex: { is: "Mamma leyfir mér að fara.", en: "Mum lets me go." } },

  { w: "banna", en: "to forbid, to ban", pos: "verb", topic: "society", unit: 20, cefr: "B1", gov: "ÞF+ÞGF", vclass: "weak-a",
    conj: { pres: ["banna", "bannar", "bannar", "bönnum", "bannið", "banna"],
            past: ["bannaði", "bannaðir", "bannaði", "bönnuðum", "bönnuðuð", "bönnuðu"], pp: "bannað" },
    ex: { is: "Það er bannað að reykja hérna.", en: "Smoking is forbidden here." } },

  { w: "kjósa", en: "to vote, to choose", pos: "verb", topic: "society", unit: 20, cefr: "B1", gov: "ÞF", vclass: "strong",
    conj: { pres: ["kýs", "kýst", "kýs", "kjósum", "kjósið", "kjósa"],
            past: ["kaus", "kaust", "kaus", "kusum", "kusuð", "kusu"], pp: "kosið" },
    ex: { is: "Ég kýs á laugardaginn.", en: "I am voting on Saturday." } },

  { w: "segjast", en: "to say of oneself", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "none", vclass: "weak-i",
    conj: { pres: ["segist", "segist", "segist", "segjumst", "segist", "segjast"],
            past: ["sagðist", "sagðist", "sagðist", "sögðumst", "sögðust", "sögðust"], pp: "sagst" },
    ex: { is: "Jónas segist vera upptekinn.", en: "Jónas says he is busy." } },

  { w: "gleymast", en: "to be forgotten", pos: "verb", topic: "opinion", unit: 20, cefr: "B1", gov: "none", vclass: "weak-i",
    conj: { pres: ["gleymist", "gleymist", "gleymist", "gleymumst", "gleymist", "gleymast"],
            past: ["gleymdist", "gleymdist", "gleymdist", "gleymdumst", "gleymdust", "gleymdust"], pp: "gleymst" },
    ex: { is: "Þetta gleymdist alveg í umræðunni.", en: "That was completely forgotten in the discussion." } },

  // ——— lýsingarorð ———
  { w: "sammála", en: "in agreement", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["sammála", "sammála", "sammála"] },
    ex: { is: "Ég er alveg sammála þér.", en: "I completely agree with you." } },

  { w: "ósammála", en: "in disagreement", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["ósammála", "ósammála", "ósammála"] },
    ex: { is: "Sóley er ósammála Jónasi um þetta.", en: "Sóley disagrees with Jónas about this." } },

  { w: "mikilvægur", en: "important", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["mikilvægur", "mikilvæg", "mikilvægt"], comp: "mikilvægari", sup: "mikilvægastur" },
    ex: { is: "Þetta er mikilvæg ákvörðun.", en: "This is an important decision." } },

  { w: "réttur", en: "right, correct", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["réttur", "rétt", "rétt"], comp: "réttari", sup: "réttastur" },
    ex: { is: "Þetta er alveg rétt hjá þér.", en: "You are quite right about that." } },

  { w: "rangur", en: "wrong", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["rangur", "röng", "rangt"], comp: "rangari", sup: "rangastur" },
    ex: { is: "Svarið var rangt.", en: "The answer was wrong." } },

  { w: "augljós", en: "obvious", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["augljós", "augljós", "augljóst"], comp: "augljósari", sup: "augljósastur" },
    ex: { is: "Lausnin er augljós.", en: "The solution is obvious." } },

  { w: "sanngjarn", en: "fair, reasonable", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["sanngjarn", "sanngjörn", "sanngjarnt"], comp: "sanngjarnari", sup: "sanngjarnastur" },
    ex: { is: "Mér finnst þetta ekki sanngjarnt.", en: "I do not think that is fair." } },

  { w: "líklegur", en: "likely", pos: "adj", topic: "opinion", unit: 20, cefr: "B1",
    decl: { nom: ["líklegur", "líkleg", "líklegt"], comp: "líklegri", sup: "líklegastur" },
    ex: { is: "Það er líklegt að hann komi.", en: "It is likely that he will come." } },

  { w: "kurteis", en: "polite", pos: "adj", topic: "courtesy", unit: 20, cefr: "B1",
    decl: { nom: ["kurteis", "kurteis", "kurteist"], comp: "kurteisari", sup: "kurteisastur" },
    ex: { is: "Hún er alltaf kurteis við alla.", en: "She is always polite to everybody." } },

  // ——— tengiorð og orðasambönd ———
  { w: "hins vegar", en: "on the other hand, however", pos: "adv", topic: "connectors", unit: 20, cefr: "B1",
    ex: { is: "Hins vegar er þetta alltof dýrt.", en: "This, on the other hand, is far too expensive." } },

  { w: "að minnsta kosti", en: "at least", pos: "adv", topic: "connectors", unit: 20, cefr: "B1",
    ex: { is: "Hann kom að minnsta kosti á réttum tíma.", en: "He came on time, at least." } },

  { w: "til dæmis", en: "for example", pos: "adv", topic: "connectors", unit: 20, cefr: "B1",
    ex: { is: "Taktu til dæmis veðrið í gær.", en: "Take yesterday's weather, for example." } },

  { w: "að mínu mati", en: "in my opinion", pos: "phrase", topic: "opinion", unit: 20, cefr: "B1",
    ex: { is: "Að mínu mati er þetta besta lausnin.", en: "In my opinion this is the best solution." } },

  { w: "Gangi þér vel", en: "good luck", pos: "phrase", topic: "courtesy", unit: 20, cefr: "B1",
    ex: { is: "Gangi þér vel í prófinu!", en: "Good luck in the exam!" } },

  { w: "Lifi Ísland", en: "long live Iceland", pos: "phrase", topic: "courtesy", unit: 20, cefr: "B1",
    ex: { is: "Lifi Ísland!", en: "Long live Iceland!" } }
];

export default unit;
