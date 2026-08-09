// data/src/drills-verbs.js — the verb gym.
// 11 drill sets, 5 rounds of 6 items each. Merged into data/drills.js by tools/build.js.

export const drills = [

  /* ================================================================ 1 */
  {
    id: "verb-present-a",
    title: "Present tense: the -a verbs",
    cat: "verbs",
    cefr: "A1",
    unit: 2,
    instruction: "Put the verb in brackets into the correct present-tense form.",
    example: { q: "við ___ (tala)", a: "tölum" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (tala)", a: "tala", opts: ["tala", "talar", "tölum"], why: "The ég form of an -a verb is the bare infinitive: tala." },
          { q: "þú ___ (borða)", a: "borðar", opts: ["borðar", "borða", "borðum"], why: "þú takes -ar in this class." },
          { q: "hann ___ (hlusta)", a: "hlustar", opts: ["hlustar", "hlusta", "hlustið"], why: "hann and þú share the same -ar form." },
          { q: "ég ___ (spila)", a: "spila", opts: ["spila", "spilar", "spilum"], why: "ég = the infinitive again, no ending added." },
          { q: "þú ___ (elska)", a: "elskar", opts: ["elskar", "elska", "elskið"], why: "þú -ar, every time in this class." },
          { q: "hún ___ (dansa)", a: "dansar", opts: ["dansar", "dansa", "dönsum"], why: "hún behaves exactly like hann: -ar." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (tala)", a: "tölum", opts: ["tölum", "talum", "tölur"], why: "The -um ending pulls a to ö: tala → tölum (u-umlaut)." },
          { q: "þið ___ (borða)", a: "borðið", opts: ["borðið", "borðum", "borða"], why: "þið always ends in -ið." },
          { q: "þeir ___ (hlusta)", a: "hlusta", opts: ["hlusta", "hlustum", "hlustið"], why: "The þeir form looks like the infinitive." },
          { q: "við ___ (dansa)", a: "dönsum", opts: ["dönsum", "dansum", "dansið"], why: "a → ö before the u of -um: dansa → dönsum." },
          { q: "þið ___ (spila)", a: "spilið", opts: ["spilið", "spilum", "spila"], why: "No umlaut here — the stem vowel is i, not a." },
          { q: "þær ___ (safna)", a: "safna", opts: ["safna", "söfnum", "safnið"], why: "þær is a third-person plural, so the form matches þeir." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "þið ___ (kalla)", a: "kallið", why: "þið -ið; the umlaut only shows up in the -um form." },
          { q: "ég ___ (baka)", a: "baka", why: "ég keeps the infinitive shape." },
          { q: "við ___ (þakka)", a: "þökkum", why: "þakka → þökkum: a becomes ö before -um." },
          { q: "hann ___ (versla)", a: "verslar", why: "Third person singular takes -ar." },
          { q: "þeir ___ (opna)", a: "opna", why: "Third person plural = the infinitive form." },
          { q: "þú ___ (skoða)", a: "skoðar", why: "þú -ar, with no vowel change." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Anna ___ íslensku á hverjum degi. (tala)", a: "talar", why: "Anna is a third-person subject, so -ar." },
          { q: "Við ___ morgunmat klukkan átta. (borða)", a: "borðum", why: "við -um; the stem vowel o is untouched." },
          { q: "Þið ___ á útvarpið. (hlusta)", a: "hlustið", why: "þið -ið. Note hlusta á takes the accusative." },
          { q: "Lúlli ___ á borðinu. (dansa)", a: "dansar", why: "One puffin, third person: -ar." },
          { q: "Ég ___ gluggann. (opna)", a: "opna", why: "ég adds nothing to the stem." },
          { q: "Sóley ___ brauð á hverjum morgni. (baka)", a: "bakar", why: "Third person singular -ar." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Við ___ oft í kringum tjörnina. (labba)", a: "löbbum", why: "labba → löbbum. The -um ending forces a → ö." },
          { q: "Jónas og Anna ___ frímerkjum. (safna)", a: "safna", why: "A mixed pair is þau, so the plain -a form. safna also takes the dative." },
          { q: "Þið ___ alltaf í búðinni á laugardögum. (versla)", a: "verslið", why: "þið -ið, whatever else is in the sentence." },
          { q: "Ég ___ þér fyrir hjálpina. (þakka)", a: "þakka", why: "ég form; þakka takes a dative person and fyrir + accusative." },
          { q: "Við ___ myndina saman. (skoða)", a: "skoðum", why: "við -um; the stem vowel is o, so no umlaut." },
          { q: "Þeir ___ á Lúlla en hann kemur ekki. (kalla)", a: "kalla", why: "þeir form = infinitive. kalla á takes the accusative: Lúlla." }
        ]
      }
    ]
  },

  /* ================================================================ 2 */
  {
    id: "verb-present-i",
    title: "Present tense: the -i verbs",
    cat: "verbs",
    cefr: "A1",
    unit: 2,
    instruction: "Put the verb in brackets into the correct present-tense form.",
    example: { q: "ég ___ (heyra)", a: "heyri" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (heyra)", a: "heyri", opts: ["heyri", "heyra", "heyrir"], why: "This class drops the -a and adds -i for ég." },
          { q: "þú ___ (læra)", a: "lærir", opts: ["lærir", "læri", "lærið"], why: "þú takes -ir, not -ar." },
          { q: "hann ___ (keyra)", a: "keyrir", opts: ["keyrir", "keyri", "keyra"], why: "þú and hann share the -ir form." },
          { q: "ég ___ (senda)", a: "sendi", opts: ["sendi", "sendir", "senda"], why: "ég -i." },
          { q: "þú ___ (horfa)", a: "horfir", opts: ["horfir", "horfi", "horfum"], why: "þú -ir." },
          { q: "hún ___ (kaupa)", a: "kaupir", opts: ["kaupir", "kaupi", "kaupa"], why: "hún -ir, like hann." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (heyra)", a: "heyrum", opts: ["heyrum", "heyrium", "heyrið"], why: "The plural endings -um, -ið, -a are the same in every weak class." },
          { q: "þið ___ (læra)", a: "lærið", opts: ["lærið", "lærum", "læra"], why: "þið -ið." },
          { q: "þeir ___ (keyra)", a: "keyra", opts: ["keyra", "keyrum", "keyrið"], why: "þeir = the infinitive form." },
          { q: "við ___ (kaupa)", a: "kaupum", opts: ["kaupum", "kaupim", "kaupið"], why: "við -um." },
          { q: "þið ___ (senda)", a: "sendið", opts: ["sendið", "sendum", "senda"], why: "þið -ið." },
          { q: "þær ___ (horfa)", a: "horfa", opts: ["horfa", "horfum", "horfið"], why: "þær is third person plural: -a." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "þú ___ (gleyma)", a: "gleymir", why: "þú -ir in the -i class." },
          { q: "við ___ (brosa)", a: "brosum", why: "við -um." },
          { q: "ég ___ (reyna)", a: "reyni", why: "ég -i." },
          { q: "þið ___ (heyra)", a: "heyrið", why: "þið -ið." },
          { q: "hann ___ (senda)", a: "sendir", why: "Third person singular -ir." },
          { q: "þeir ___ (læra)", a: "læra", why: "Third person plural = infinitive." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ íslensku í skólanum. (læra)", a: "læri", why: "ég -i." },
          { q: "Þú ___ ekkert í þessum hávaða. (heyra)", a: "heyrir", why: "þú -ir. í + dative for a static situation." },
          { q: "Við ___ á sjónvarpið á kvöldin. (horfa)", a: "horfum", why: "við -um. horfa á takes the accusative." },
          { q: "Sóley ___ mér skilaboð. (senda)", a: "sendir", why: "Third person -ir; senda gives a dative person and an accusative thing." },
          { q: "Jónas ___ bílnum í vinnuna. (keyra)", a: "keyrir", why: "Third person -ir; keyra takes a dative object." },
          { q: "Þið ___ kaffi á hverjum morgni. (kaupa)", a: "kaupið", why: "þið -ið." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Ég ___ alltaf nafninu hans. (gleyma)", a: "gleymi", why: "ég -i; gleyma takes the dative, so nafninu." },
          { q: "Við ___ að tala íslensku á hverjum degi. (reyna)", a: "reynum", why: "við -um; reyna is followed by að + infinitive." },
          { q: "Börnin ___ þegar þau sjá Lúlla. (brosa)", a: "brosa", why: "börnin is plural, so the -a form." },
          { q: "Þú ___ ekki nógu hratt. (keyra)", a: "keyrir", why: "þú -ir; ekki sits after the finite verb." },
          { q: "Anna ___ mömmu sinni bréf. (senda)", a: "sendir", why: "Third person -ir; mömmu sinni is the dative recipient." },
          { q: "Við ___ nýja bók í búðinni. (kaupa)", a: "kaupum", why: "við -um; nýja bók is accusative after the verb." }
        ]
      }
    ]
  },

  /* ================================================================ 3 */
  {
    id: "verb-present-strong",
    title: "Present tense: strong verbs and the vowel shift",
    cat: "verbs",
    cefr: "A1",
    unit: 7,
    instruction: "Put the verb in brackets into the correct present-tense form.",
    example: { q: "ég ___ (fara)", a: "fer" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (fara)", a: "fer", opts: ["fer", "fara", "för"], why: "Strong verbs shift the stem vowel in the singular: a → e." },
          { q: "þú ___ (taka)", a: "tekur", opts: ["tekur", "takar", "takur"], why: "taka → tek-, then the ending -ur." },
          { q: "hann ___ (koma)", a: "kemur", opts: ["kemur", "komur", "koma"], why: "o → e in the singular: koma → kem-." },
          { q: "ég ___ (ganga)", a: "geng", opts: ["geng", "gangi", "gengur"], why: "a → e, and ég takes no ending." },
          { q: "þú ___ (lesa)", a: "lest", opts: ["lest", "lesur", "lesir"], why: "A stem in -s takes -t rather than -ur for þú." },
          { q: "hún ___ (sofa)", a: "sefur", opts: ["sefur", "sofur", "sofar"], why: "o → e: sofa → sef-, plus -ur." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (fara)", a: "förum", opts: ["förum", "farum", "ferum"], why: "The plural goes back to the infinitive stem, but -um turns a into ö." },
          { q: "þið ___ (taka)", a: "takið", opts: ["takið", "tekið", "tökum"], why: "No vowel shift in the plural: tak- + -ið." },
          { q: "þeir ___ (koma)", a: "koma", opts: ["koma", "kemur", "komum"], why: "Third person plural = the infinitive." },
          { q: "við ___ (ganga)", a: "göngum", opts: ["göngum", "gangum", "gengum"], why: "a → ö before -um." },
          { q: "þið ___ (lesa)", a: "lesið", opts: ["lesið", "lesum", "lesa"], why: "þið -ið, no shift." },
          { q: "þær ___ (sofa)", a: "sofa", opts: ["sofa", "sofum", "sefa"], why: "Third person plural keeps the infinitive vowel." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "ég ___ (sjá)", a: "sé", why: "sjá is irregular: sé, sérð, sér in the singular." },
          { q: "þú ___ (fá)", a: "færð", why: "á → æ, and þú gets -rð: fæ, færð, fær." },
          { q: "við ___ (standa)", a: "stöndum", why: "a → ö before -um: stöndum." },
          { q: "hann ___ (bjóða)", a: "býður", why: "jó → ý in the singular: býð, býður, býður." },
          { q: "þið ___ (drekka)", a: "drekkið", why: "The plural has no vowel change; just add -ið." },
          { q: "þeir ___ (halda)", a: "halda", why: "Third person plural = the infinitive; the singular would be heldur." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ í skólann klukkan átta. (fara)", a: "fer", why: "Singular shift a → e; í + accusative because there is movement." },
          { q: "Anna ___ strætó niður í bæ. (taka)", a: "tekur", why: "Third person singular: tek- + -ur." },
          { q: "Við ___ heim eftir kvöldmat. (ganga)", a: "göngum", why: "við -um with a → ö." },
          { q: "Þú ___ ekki nóg á nóttunni. (sofa)", a: "sefur", why: "o → e in the singular." },
          { q: "Lúlli ___ á þakinu. (standa)", a: "stendur", why: "a → e: stend, stendur, stendur. á + dative for standing still." },
          { q: "Þið ___ bókina í kvöld. (lesa)", a: "lesið", why: "þið -ið, no shift in the plural." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Við ___ kaffi með Sóleyju á hverjum morgni. (drekka)", a: "drekkum", why: "við -um; með takes the dative, hence Sóleyju." },
          { q: "Jónas ___ okkur í mat á sunnudaginn. (bjóða)", a: "býður", why: "jó → ý in the singular; bjóða gives a dative person." },
          { q: "Ég ___ Lúlla aldrei á morgnana. (sjá)", a: "sé", why: "ég sé. Lúlla is the accusative object." },
          { q: "Þið ___ bréf frá skólanum í dag. (fá)", a: "fáið", why: "The plural keeps á: fáum, fáið, fá." },
          { q: "Þeir ___ alltaf sömu bókina. (lesa)", a: "lesa", why: "Third person plural = the infinitive form." },
          { q: "Hún ___ á fætur klukkan sex. (fara)", a: "fer", why: "fara á fætur means to get up; the singular shifts a → e." }
        ]
      }
    ]
  },

  /* ================================================================ 4 */
  {
    id: "verb-vera-hafa",
    title: "vera and hafa",
    cat: "verbs",
    cefr: "A1",
    unit: 1,
    instruction: "Put the verb in brackets into the correct present-tense form.",
    example: { q: "við ___ (hafa)", a: "höfum" },
    rounds: [
      {
        n: 1,
        label: "vera í öllum persónum",
        items: [
          { q: "ég ___ (vera)", a: "er", opts: ["er", "ert", "eru"], why: "vera: er, ert, er, erum, eruð, eru." },
          { q: "þú ___ (vera)", a: "ert", opts: ["ert", "er", "eruð"], why: "Only þú has the -t." },
          { q: "hún ___ (vera)", a: "er", opts: ["er", "ert", "eru"], why: "ég and hann/hún share er." },
          { q: "við ___ (vera)", a: "erum", opts: ["erum", "eruð", "eru"], why: "við -um." },
          { q: "þið ___ (vera)", a: "eruð", opts: ["eruð", "erum", "eru"], why: "þið -uð here, not -ið." },
          { q: "þær ___ (vera)", a: "eru", opts: ["eru", "erum", "eruð"], why: "Third person plural: eru." }
        ]
      },
      {
        n: 2,
        label: "hafa í öllum persónum",
        items: [
          { q: "ég ___ (hafa)", a: "hef", opts: ["hef", "hafi", "hefur"], why: "hafa: hef, hefur, hefur, höfum, hafið, hafa." },
          { q: "þú ___ (hafa)", a: "hefur", opts: ["hefur", "hef", "hafið"], why: "þú and hann both say hefur." },
          { q: "hann ___ (hafa)", a: "hefur", opts: ["hefur", "hef", "hafa"], why: "Third person singular: hefur." },
          { q: "við ___ (hafa)", a: "höfum", opts: ["höfum", "hafum", "hefum"], why: "The a of the stem becomes ö before -um." },
          { q: "þið ___ (hafa)", a: "hafið", opts: ["hafið", "höfuð", "hefið"], why: "þið hafið — the stem vowel comes back as a." },
          { q: "þeir ___ (hafa)", a: "hafa", opts: ["hafa", "höfum", "hafið"], why: "Third person plural = the infinitive." }
        ]
      },
      {
        n: 3,
        label: "vera og hafa á víxl",
        items: [
          { q: "þið ___ (vera)", a: "eruð", why: "vera has -uð for þið." },
          { q: "við ___ (hafa)", a: "höfum", why: "a → ö before -um." },
          { q: "hann ___ (vera)", a: "er", why: "Third person singular of vera is er." },
          { q: "þú ___ (hafa)", a: "hefur", why: "hafa shifts a → e in the singular." },
          { q: "þau ___ (vera)", a: "eru", why: "þau is a plural pronoun, so eru." },
          { q: "ég ___ (hafa)", a: "hef", why: "ég hef, with no ending." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ frá Íslandi. (vera)", a: "er", why: "ég er; frá takes the dative, hence Íslandi." },
          { q: "Við ___ með lyklana. (vera)", a: "erum", why: "vera með means to have on you, and it takes the accusative." },
          { q: "Þú ___ ekki tíma í dag. (hafa)", a: "hefur", why: "þú hefur; ekki comes after the finite verb." },
          { q: "Anna og Jónas ___ heima í kvöld. (vera)", a: "eru", why: "Two people = a plural subject: eru." },
          { q: "Þið ___ að læra íslensku. (vera)", a: "eruð", why: "vera að + infinitive is the ongoing present." },
          { q: "Sóley ___ alltaf nóg að gera. (hafa)", a: "hefur", why: "Third person singular hefur." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Lúlli ___ með fiskinn minn í nefinu. (vera)", a: "er", why: "vera með + accusative for carrying something." },
          { q: "Við ___ ekki séð hann síðan í gær. (hafa)", a: "höfum", why: "hafa plus a participle builds the perfect: höfum séð." },
          { q: "Þið ___ tilbúin klukkan sjö. (vera)", a: "eruð", why: "þið eruð; tilbúin is the plural form of the adjective." },
          { q: "Það ___ kalt úti í dag. (vera)", a: "er", why: "Weather sentences use það plus er." },
          { q: "Þeir ___ aldrei tíma til að hjálpa. (hafa)", a: "hafa", why: "Third person plural hafa; til að introduces the purpose." },
          { q: "Ég ___ með höfuðverk eftir tónleikana. (vera)", a: "er", why: "vera með + accusative is how you say you have a headache." }
        ]
      }
    ]
  },

  /* ================================================================ 5 */
  {
    id: "verb-past-weak",
    title: "Past tense: weak verbs",
    cat: "verbs",
    cefr: "A2",
    unit: 14,
    instruction: "Put the verb in brackets into the correct past-tense form.",
    example: { q: "við ___ (tala)", a: "töluðum" },
    rounds: [
      {
        n: 1,
        label: "-aði: ég, þú, hann",
        items: [
          { q: "ég ___ (tala)", a: "talaði", opts: ["talaði", "talaðir", "töluðum"], why: "The -a class builds the past with -aði." },
          { q: "þú ___ (borða)", a: "borðaðir", opts: ["borðaðir", "borðaði", "borðuðuð"], why: "þú adds -r to the -aði form." },
          { q: "hann ___ (hjálpa)", a: "hjálpaði", opts: ["hjálpaði", "hjálpaðir", "hjálpuðu"], why: "ég and hann look the same in the past: -aði." },
          { q: "ég ___ (dansa)", a: "dansaði", opts: ["dansaði", "dansaðir", "dönsuðum"], why: "-aði, with no vowel change in the singular." },
          { q: "þú ___ (hlusta)", a: "hlustaðir", opts: ["hlustaðir", "hlustaði", "hlustuðu"], why: "þú -aðir." },
          { q: "hún ___ (baka)", a: "bakaði", opts: ["bakaði", "bakaðir", "bökuðum"], why: "Third person singular -aði." }
        ]
      },
      {
        n: 2,
        label: "-aði: við, þið, þeir",
        items: [
          { q: "við ___ (tala)", a: "töluðum", opts: ["töluðum", "talaðum", "töluðuð"], why: "In the plural the endings hold u, so a → ö: töluðum." },
          { q: "þið ___ (borða)", a: "borðuðuð", opts: ["borðuðuð", "borðuðum", "borðaðuð"], why: "þið -uðuð. The stem vowel o cannot umlaut." },
          { q: "þeir ___ (hjálpa)", a: "hjálpuðu", opts: ["hjálpuðu", "hjálpuðum", "hjálpaðu"], why: "Third person plural -uðu; á never umlauts." },
          { q: "við ___ (dansa)", a: "dönsuðum", opts: ["dönsuðum", "dansuðum", "dönsuðuð"], why: "a → ö throughout the plural: dönsuðum." },
          { q: "þið ___ (kalla)", a: "kölluðuð", opts: ["kölluðuð", "kölluðum", "kallaðuð"], why: "kalla → köll- in the plural past." },
          { q: "þær ___ (safna)", a: "söfnuðu", opts: ["söfnuðu", "safnuðu", "söfnuðum"], why: "Third person plural -uðu with a → ö." }
        ]
      },
      {
        n: 3,
        label: "-ði, -di, -ti",
        items: [
          { q: "ég ___ (heyra)", a: "heyrði", why: "The -i class takes -ði after a voiced sound." },
          { q: "þú ___ (læra)", a: "lærðir", why: "þú adds -r: lærði → lærðir." },
          { q: "við ___ (keyra)", a: "keyrðum", why: "Plural -um on the past stem keyrð-." },
          { q: "hann ___ (gleyma)", a: "gleymdi", why: "After m the marker is -di: gleymdi." },
          { q: "þið ___ (horfa)", a: "horfðuð", why: "Past stem horfð- plus the plural ending -uð." },
          { q: "þeir ___ (kaupa)", a: "keyptu", why: "kaupa is irregular: keypti, keyptir, keypti, keyptum, keyptuð, keyptu." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ við Jónas í gær. (tala)", a: "talaði", why: "-aði for ég; tala við takes the accusative." },
          { q: "Við ___ kvöldmat klukkan sjö. (borða)", a: "borðuðum", why: "Plural past -uðum." },
          { q: "Sóley ___ mér í gær. (hjálpa)", a: "hjálpaði", why: "Third person -aði; hjálpa takes a dative object." },
          { q: "Þið ___ á útvarpið allan daginn. (hlusta)", a: "hlustuðuð", why: "þið -uðuð; allan daginn is an accusative stretch of time." },
          { q: "Anna ___ nýja bók í gær. (kaupa)", a: "keypti", why: "kaupa → keypti in the past." },
          { q: "Ég ___ ekki nafnið hans. (heyra)", a: "heyrði", why: "heyra → heyrði; ekki follows the finite verb." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Við ___ á myndina en skildum ekkert. (horfa)", a: "horfðum", why: "Past stem horfð- plus -um." },
          { q: "Lúlli ___ á þakinu alla nóttina. (dansa)", a: "dansaði", why: "Third person -aði; alla nóttina is accusative duration." },
          { q: "Þeir ___ bílnum alla leið til Akureyrar. (keyra)", a: "keyrðu", why: "Third person plural keyrðu; keyra takes the dative bílnum." },
          { q: "Ég ___ alveg að hringja í þig. (gleyma)", a: "gleymdi", why: "gleyma → gleymdi, followed here by að + infinitive." },
          { q: "Þið ___ frímerkjum þegar þið voruð ung. (safna)", a: "söfnuðuð", why: "Plural past with a → ö; safna takes the dative." },
          { q: "Hún ___ mér langt bréf. (senda)", a: "sendi", why: "A stem already ending in d just adds -i: sendi." }
        ]
      }
    ]
  },

  /* ================================================================ 6 */
  {
    id: "verb-past-strong",
    title: "Past tense: strong verbs",
    cat: "verbs",
    cefr: "A2",
    unit: 14,
    instruction: "Put the verb in brackets into the correct past-tense form.",
    example: { q: "við ___ (fara)", a: "fórum" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (fara)", a: "fór", opts: ["fór", "fer", "fóru"], why: "Strong verbs change the stem vowel instead of adding an ending: fara → fór." },
          { q: "þú ___ (koma)", a: "komst", opts: ["komst", "kom", "komuð"], why: "The þú form adds -st to the past stem." },
          { q: "hann ___ (taka)", a: "tók", opts: ["tók", "tekur", "tóku"], why: "ég and hann share the bare past stem tók." },
          { q: "ég ___ (sjá)", a: "sá", opts: ["sá", "sé", "sáu"], why: "sjá → sá in the past singular." },
          { q: "þú ___ (fá)", a: "fékkst", opts: ["fékkst", "fékk", "fenguð"], why: "fá → fékk, and þú adds -st." },
          { q: "hún ___ (ganga)", a: "gekk", opts: ["gekk", "gengur", "gengu"], why: "ganga → gekk in the singular." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (fara)", a: "fórum", opts: ["fórum", "förum", "fóruð"], why: "The plural past keeps ó and adds -um." },
          { q: "þið ___ (koma)", a: "komuð", opts: ["komuð", "komum", "komið"], why: "þið -uð in the past, not -ið." },
          { q: "þeir ___ (taka)", a: "tóku", opts: ["tóku", "tókum", "taka"], why: "Third person plural -u: tóku." },
          { q: "við ___ (sjá)", a: "sáum", opts: ["sáum", "sjáum", "sáuð"], why: "Past stem sá- plus -um." },
          { q: "þið ___ (fá)", a: "fenguð", opts: ["fenguð", "fengum", "fáið"], why: "The plural stem is feng-, not fékk-." },
          { q: "þær ___ (ganga)", a: "gengu", opts: ["gengu", "gengum", "gekku"], why: "Plural stem geng- plus -u." }
        ]
      },
      {
        n: 3,
        label: "Eintala og fleirtala saman",
        items: [
          { q: "ég ___ (drekka)", a: "drakk", why: "The singular past vowel is a: drakk." },
          { q: "við ___ (drekka)", a: "drukkum", why: "The plural switches to u: drukkum." },
          { q: "hann ___ (verða)", a: "varð", why: "verða → varð in the singular." },
          { q: "þið ___ (verða)", a: "urðuð", why: "The plural stem is urð-: urðum, urðuð, urðu." },
          { q: "ég ___ (lesa)", a: "las", why: "lesa → las." },
          { q: "þeir ___ (lesa)", a: "lásu", why: "The plural lengthens the vowel: lásum, lásuð, lásu." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ til Íslands í fyrra. (fara)", a: "fór", why: "Singular past fór; til takes the genitive Íslands." },
          { q: "Anna ___ strætó niður í bæ. (taka)", a: "tók", why: "Third person singular tók." },
          { q: "Við ___ heim eftir miðnætti. (ganga)", a: "gengum", why: "Plural stem geng- plus -um." },
          { q: "Þið ___ of mikið kaffi í gær. (drekka)", a: "drukkuð", why: "Plural past drukk- plus -uð." },
          { q: "Jónas ___ okkur í mat. (bjóða)", a: "bauð", why: "bjóða → bauð; the verb gives a dative person." },
          { q: "Þeir ___ bréf frá skólanum. (fá)", a: "fengu", why: "Plural stem feng- plus -u." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Sóley ___ mér uppskriftina að brauðinu. (gefa)", a: "gaf", why: "gefa → gaf; the recipient mér is dative." },
          { q: "Veðrið ___ verra um kvöldið. (verða)", a: "varð", why: "Singular past varð, with the neuter comparative verra." },
          { q: "Ég ___ illa síðustu nótt. (sofa)", a: "svaf", why: "sofa → svaf in the singular past." },
          { q: "Lúlli ___ yfir höfnina og settist á bátinn. (fljúga)", a: "flaug", why: "fljúga → flaug; yfir takes the accusative when there is movement." },
          { q: "Þið ___ lengi í biðröðinni. (standa)", a: "stóðuð", why: "Past stem stóð- plus -uð." },
          { q: "Krakkarnir ___ heim úr skólanum. (hlaupa)", a: "hlupu", why: "hlaupa → hljóp in the singular but hlup- in the plural." }
        ]
      }
    ]
  },

  /* ================================================================ 7 */
  {
    id: "verb-imperative",
    title: "The imperative",
    cat: "verbs",
    cefr: "A1",
    unit: 10,
    instruction: "Put the verb in brackets into the imperative that fits the person addressed.",
    example: { q: "Anna, ___ hingað! (koma)", a: "komdu" },
    rounds: [
      {
        n: 1,
        label: "Við einn: -a sagnir",
        items: [
          { q: "Anna, ___ hægar! (tala)", a: "talaðu", opts: ["talaðu", "talið", "talar"], why: "-a verbs build the singular imperative with -aðu." },
          { q: "Jónas, ___ glugganum! (loka)", a: "lokaðu", opts: ["lokaðu", "lokið", "lokar"], why: "lokaðu; loka takes a dative object, hence glugganum." },
          { q: "Sóley, ___ mér! (hjálpa)", a: "hjálpaðu", opts: ["hjálpaðu", "hjálpið", "hjálpar"], why: "-aðu again; hjálpa takes the dative mér." },
          { q: "Lúlli, ___ fiskinn! (borða)", a: "borðaðu", opts: ["borðaðu", "borðið", "borðar"], why: "borðaðu, with the accusative object fiskinn." },
          { q: "Anna, ___ dyrnar! (opna)", a: "opnaðu", opts: ["opnaðu", "opnið", "opnar"], why: "opnaðu; dyr is a plural-only feminine noun." },
          { q: "Sóley, ___ myndirnar! (skoða)", a: "skoðaðu", opts: ["skoðaðu", "skoðið", "skoðar"], why: "Every -a verb behaves the same: stem + -aðu." }
        ]
      },
      {
        n: 2,
        label: "Við einn: aðrar sagnir",
        items: [
          { q: "Anna, ___ þessa bók! (lesa)", a: "lestu", opts: ["lestu", "lesaðu", "lesið"], why: "lesa → lestu. The þú pronoun fuses onto the stem." },
          { q: "Jónas, ___ hingað! (koma)", a: "komdu", opts: ["komdu", "komaðu", "komið"], why: "koma → komdu." },
          { q: "Sóley, ___ mér skilaboð! (senda)", a: "sendu", opts: ["sendu", "sendaðu", "sendið"], why: "A stem in d simply takes -u: sendu." },
          { q: "Lúlli, ___ heim! (fara)", a: "farðu", opts: ["farðu", "faraðu", "farið"], why: "fara → farðu." },
          { q: "Jónas, ___ rólegur! (vera)", a: "vertu", opts: ["vertu", "veraðu", "verið"], why: "vera → vertu, with the masculine adjective rólegur." },
          { q: "Sóley, ___ á þetta! (horfa)", a: "horfðu", opts: ["horfðu", "horfaðu", "horfið"], why: "horfa → horfðu; horfa á takes the accusative." }
        ]
      },
      {
        n: 3,
        label: "Við fleiri en einn",
        items: [
          { q: "Krakkar, ___ hægar! (tala)", a: "talið", why: "The plural imperative is simply the þið form: talið." },
          { q: "Anna og Jónas, ___ inn! (koma)", a: "komið", why: "komið — the same shape as þið komið." },
          { q: "Krakkar, ___ dyrunum! (loka)", a: "lokið", why: "lokið, with the dative dyrunum." },
          { q: "Strákar, ___ bókina saman! (lesa)", a: "lesið", why: "Plural imperative lesið." },
          { q: "Stelpur, ___ heim núna! (fara)", a: "farið", why: "farið is both the þið form and the plural order." },
          { q: "Krakkar, ___ þolinmóð! (vera)", a: "verið", why: "verið; þolinmóð is the plural form of the adjective." }
        ]
      },
      {
        n: 4,
        label: "Lengri fyrirmæli",
        items: [
          { q: "Anna, ___ mér nafnið þitt aftur. (segja)", a: "segðu", why: "segja → segðu, with a dative person and an accusative thing." },
          { q: "Jónas, ___ strætó niður í bæ. (taka)", a: "taktu", why: "taka → taktu." },
          { q: "Sóley, ___ okkur brauð fyrir morgundaginn. (baka)", a: "bakaðu", why: "-a verb, so -aðu; fyrir takes the accusative here." },
          { q: "Krakkar, ___ ykkur tíma til að hugsa. (gefa)", a: "gefið", why: "Plural imperative gefið, with the reflexive dative ykkur." },
          { q: "Anna, ___ í mig þegar þú kemur. (hringja)", a: "hringdu", why: "hringja → hringdu; hringja í takes the accusative." },
          { q: "Jónas, ___ á klukkuna, rútan er að fara. (líta)", a: "líttu", why: "líta → líttu; líta á takes the accusative." }
        ]
      },
      {
        n: 5,
        label: "Neitun og lengri setningar",
        items: [
          { q: "Lúlli, ekki ___ fiskinn hennar Önnu! (taka)", a: "taka", why: "After ekki the verb stays in the plain infinitive." },
          { q: "Krakkar, ekki ___ svona hátt inni. (tala)", a: "tala", why: "Negative orders use ekki plus the infinitive, singular or plural." },
          { q: "Anna, ___ ekki að loka glugganum áður en þú ferð. (gleyma)", a: "gleymdu", why: "Here the order itself is positive, so the imperative gleymdu is right." },
          { q: "Jónas, ___ hægar, það er hálka á veginum. (keyra)", a: "keyrðu", why: "keyra → keyrðu." },
          { q: "Sóley, ___ mér hvað þetta kostar. (segja)", a: "segðu", why: "segðu introduces the indirect question hvað þetta kostar." },
          { q: "Krakkar, ___ ykkur vel í kvöld. (skemmta)", a: "skemmtið", why: "Plural imperative skemmtið; skemmta sér takes a dative reflexive." }
        ]
      }
    ]
  },

  /* ================================================================ 8 */
  {
    id: "verb-participle",
    title: "Past participles",
    cat: "verbs",
    cefr: "A2",
    unit: 15,
    instruction: "Write the past participle of the verb in brackets.",
    example: { q: "Ég hef ___ (tala)", a: "talað" },
    rounds: [
      {
        n: 1,
        label: "-a sagnir enda á -að",
        items: [
          { q: "Ég hef ___ (tala)", a: "talað", opts: ["talað", "talaði", "talt"], why: "Every -a verb ends its participle in -að." },
          { q: "Ég hef ___ (borða)", a: "borðað", opts: ["borðað", "borðaði", "borðið"], why: "-a class, so -að." },
          { q: "Ég hef ___ (hjálpa)", a: "hjálpað", opts: ["hjálpað", "hjálpaði", "hjálpt"], why: "hjálpa → hjálpað." },
          { q: "Ég hef ___ (opna)", a: "opnað", opts: ["opnað", "opnaði", "opnið"], why: "opna → opnað." },
          { q: "Ég hef ___ (skrifa)", a: "skrifað", opts: ["skrifað", "skrifaði", "skrift"], why: "skrifa → skrifað." },
          { q: "Ég hef ___ (borga)", a: "borgað", opts: ["borgað", "borgaði", "borgt"], why: "borga → borgað." }
        ]
      },
      {
        n: 2,
        label: "-i sagnir enda á -t",
        items: [
          { q: "Ég hef ___ (heyra)", a: "heyrt", opts: ["heyrt", "heyrað", "heyrið"], why: "The -i class ends its participle in -t." },
          { q: "Ég hef ___ (læra)", a: "lært", opts: ["lært", "lærað", "lærið"], why: "læra → lært." },
          { q: "Ég hef ___ (keyra)", a: "keyrt", opts: ["keyrt", "keyrað", "keyrið"], why: "keyra → keyrt." },
          { q: "Ég hef ___ (gleyma)", a: "gleymt", opts: ["gleymt", "gleymað", "gleymið"], why: "gleyma → gleymt." },
          { q: "Ég hef ___ (kaupa)", a: "keypt", opts: ["keypt", "kaupt", "kaupað"], why: "kaupa is irregular: keypti, keypt." },
          { q: "Ég hef ___ (segja)", a: "sagt", opts: ["sagt", "segt", "sagað"], why: "segja → sagði, sagt." }
        ]
      },
      {
        n: 3,
        label: "Sterkar sagnir enda á -ið",
        items: [
          { q: "Ég hef ___ (fara)", a: "farið", why: "Strong verbs end in -ið: farið." },
          { q: "Ég hef ___ (taka)", a: "tekið", why: "taka → tekið, with a → e." },
          { q: "Ég hef ___ (drekka)", a: "drukkið", why: "The participle takes the u vowel: drukkið." },
          { q: "Ég hef ___ (fljúga)", a: "flogið", why: "jú → o in the participle: flogið." },
          { q: "Ég hef ___ (sjá)", a: "séð", why: "sjá is irregular: séð." },
          { q: "Ég hef ___ (verða)", a: "orðið", why: "verða → orðið." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Anna hefur ___ íslensku í tvö ár. (læra)", a: "lært", why: "-i class participle in -t." },
          { q: "Við höfum ___ í Reykjavík síðan í fyrra. (búa)", a: "búið", why: "búa → búið." },
          { q: "Þið hafið ___ allt kaffið. (drekka)", a: "drukkið", why: "Strong participle drukkið; the participle never agrees after hafa." },
          { q: "Jónas hefur aldrei ___ til Akureyrar. (fljúga)", a: "flogið", why: "flogið; til takes the genitive Akureyrar." },
          { q: "Ég hef ekki ___ Lúlla í dag. (sjá)", a: "séð", why: "séð, with the accusative object Lúlla." },
          { q: "Sóley hefur ___ brauð síðan klukkan fimm. (baka)", a: "bakað", why: "-a class, so -að; síðan marks a stretch reaching the present." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Þeir hafa ___ mér mikið í vetur. (hjálpa)", a: "hjálpað", why: "hjálpað, with the dative object mér." },
          { q: "Hún hefur ___ öllum nöfnunum okkar. (gleyma)", a: "gleymt", why: "gleymt; gleyma takes the dative, hence nöfnunum." },
          { q: "Við höfum ___ á myndina þrisvar. (horfa)", a: "horft", why: "horfa → horft; horfa á takes the accusative." },
          { q: "Þú hefur ___ mjög duglegur í dag. (vera)", a: "verið", why: "vera → verið." },
          { q: "Lúlli hefur ___ á þakinu allan daginn. (sitja)", a: "setið", why: "sitja → setið, with i → e." },
          { q: "Ég hef ___ reikninginn nú þegar. (borga)", a: "borgað", why: "-a class participle borgað." }
        ]
      }
    ]
  },

  /* ================================================================ 9 */
  {
    id: "verb-perfect",
    title: "The present perfect with hafa",
    cat: "verbs",
    cefr: "A2",
    unit: 15,
    instruction: "Fill the gap with hafa in the right person plus the past participle of the verb in brackets.",
    example: { q: "Ég ___ íslensku í tvö ár. (læra)", a: "hef lært" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "Ég ___ íslensku í tvö ár. (læra)", a: "hef lært", opts: ["hef lært", "hefur lært", "hef læra"], why: "ég hef plus the participle lært." },
          { q: "Þú ___ allt kaffið. (drekka)", a: "hefur drukkið", opts: ["hefur drukkið", "hefur drekkið", "hef drukkið"], why: "þú hefur plus drukkið." },
          { q: "Hann ___ til Íslands. (fara)", a: "hefur farið", opts: ["hefur farið", "hef farið", "hafa farið"], why: "Third person singular hefur plus farið." },
          { q: "Ég ___ hann áður. (sjá)", a: "hef séð", opts: ["hef séð", "hefur séð", "hef sjá"], why: "hef séð; the participle never changes shape after hafa." },
          { q: "Þú ___ mér mikið. (hjálpa)", a: "hefur hjálpað", opts: ["hefur hjálpað", "hef hjálpað", "hafið hjálpað"], why: "hefur hjálpað, with the dative mér." },
          { q: "Hún ___ nýja bók. (kaupa)", a: "hefur keypt", opts: ["hefur keypt", "hef keypt", "hafa keypt"], why: "hefur plus the irregular participle keypt." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "Við ___ hér lengi. (búa)", a: "höfum búið", opts: ["höfum búið", "hafum búið", "hafið búið"], why: "við höfum, with a → ö before -um." },
          { q: "Þið ___ allt of mikið. (borða)", a: "hafið borðað", opts: ["hafið borðað", "höfum borðað", "hafa borðað"], why: "þið hafið plus borðað." },
          { q: "Þeir ___ heim. (ganga)", a: "hafa gengið", opts: ["hafa gengið", "hafið gengið", "höfum gengið"], why: "Third person plural hafa plus gengið." },
          { q: "Við ___ um þetta oft. (tala)", a: "höfum talað", opts: ["höfum talað", "hafið talað", "hafa talað"], why: "höfum talað; tala um takes the accusative." },
          { q: "Þið ___ bréfið. (senda)", a: "hafið sent", opts: ["hafið sent", "höfum sent", "hafa sent"], why: "hafið plus the participle sent." },
          { q: "Þær ___ myndina. (sjá)", a: "hafa séð", opts: ["hafa séð", "hafið séð", "höfum séð"], why: "þær is third person plural, so hafa." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "Ég ___ tvisvar til Akureyrar. (fljúga)", a: "hef flogið", why: "hef plus flogið; til takes the genitive Akureyrar." },
          { q: "Við ___ mikið í vetur. (læra)", a: "höfum lært", why: "höfum lært." },
          { q: "Þú ___ nafninu mínu. (gleyma)", a: "hefur gleymt", why: "hefur gleymt; gleyma takes the dative, hence nafninu mínu." },
          { q: "Þeir ___ á Tjörninni allan daginn. (standa)", a: "hafa staðið", why: "hafa plus the participle staðið." },
          { q: "Þið ___ okkur mikið. (hjálpa)", a: "hafið hjálpað", why: "hafið hjálpað, with the dative okkur." },
          { q: "Hann ___ reikninginn. (borga)", a: "hefur borgað", why: "hefur borgað." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Sóley ___ brauð síðan klukkan fimm í morgun. (baka)", a: "hefur bakað", why: "The perfect suits an action still going on: hefur bakað." },
          { q: "Við ___ í sama húsi síðan í fyrra. (búa)", a: "höfum búið", why: "höfum búið; síðan marks a stretch reaching the present." },
          { q: "Jónas ___ mér oft með bílinn. (hjálpa)", a: "hefur hjálpað", why: "hefur hjálpað, with mér in the dative." },
          { q: "Þið ___ þessa mynd þrisvar. (sjá)", a: "hafið séð", why: "hafið séð; þessa mynd is accusative." },
          { q: "Ég ___ öllu sem hún sagði. (gleyma)", a: "hef gleymt", why: "hef gleymt; gleyma takes the dative öllu." },
          { q: "Þeir ___ alla nóttina á flugvellinum. (sitja)", a: "hafa setið", why: "hafa setið, with the accusative duration alla nóttina." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Ég ___ margar góðar kökur hjá Sóleyju. (borða)", a: "hef borðað", why: "hef borðað; margar góðar kökur is feminine accusative plural." },
          { q: "Anna og Jónas ___ til Vestmannaeyja í sumar. (fljúga)", a: "hafa flogið", why: "A plural subject takes hafa; til governs the genitive." },
          { q: "Þú ___ mikið síðan í fyrra. (læra)", a: "hefur lært", why: "hefur lært." },
          { q: "Við ___ um þetta mál oftar en einu sinni. (tala)", a: "höfum talað", why: "höfum talað; um takes the accusative mál." },
          { q: "Sóley ___ okkur í kaffi á laugardaginn. (bjóða)", a: "hefur boðið", why: "bjóða → boðið; the guests okkur stand in the dative." },
          { q: "Lúlli ___ allan fiskinn af borðinu. (taka)", a: "hefur tekið", why: "hefur tekið; af always takes the dative." }
        ]
      }
    ]
  },

  /* =============================================================== 10 */
  {
    id: "verb-middle-voice",
    title: "The middle voice in -st",
    cat: "verbs",
    cefr: "A2",
    unit: 12,
    instruction: "Put the -st verb in brackets into the correct present-tense form.",
    example: { q: "við ___ (hittast)", a: "hittumst" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (ferðast)", a: "ferðast", opts: ["ferðast", "ferðumst", "ferðist"], why: "In the middle voice all three singular persons look identical." },
          { q: "þú ___ (ferðast)", a: "ferðast", opts: ["ferðast", "ferðist", "ferðumst"], why: "Same form again — the -st swallows the personal ending." },
          { q: "hann ___ (komast)", a: "kemst", opts: ["kemst", "komumst", "komist"], why: "komast keeps the vowel shift of koma: kem- plus -st." },
          { q: "ég ___ (setjast)", a: "sest", opts: ["sest", "setjumst", "setjist"], why: "setja → set, and set + st becomes sest." },
          { q: "þú ___ (breytast)", a: "breytist", opts: ["breytist", "breytumst", "breytast"], why: "An -i verb gives breytist in the whole singular." },
          { q: "hún ___ (eldast)", a: "eldist", opts: ["eldist", "eldumst", "eldast"], why: "eldist for ég, þú and hann alike." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (ferðast)", a: "ferðumst", opts: ["ferðumst", "ferðist", "ferðast"], why: "The við form always ends in -umst." },
          { q: "þið ___ (ferðast)", a: "ferðist", opts: ["ferðist", "ferðumst", "ferðast"], why: "The þið form ends in -ist." },
          { q: "þeir ___ (ferðast)", a: "ferðast", opts: ["ferðast", "ferðumst", "ferðist"], why: "Third person plural matches the infinitive: -ast." },
          { q: "við ___ (hittast)", a: "hittumst", opts: ["hittumst", "hittist", "hittast"], why: "hittumst — the classic way to say we are meeting." },
          { q: "þið ___ (setjast)", a: "setjist", opts: ["setjist", "setjumst", "setjast"], why: "setja keeps its j before -ist: setjist." },
          { q: "þær ___ (komast)", a: "komast", opts: ["komast", "komumst", "komist"], why: "Third person plural = the infinitive komast." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "ég ___ (komast)", a: "kemst", why: "Singular kemst for all three persons." },
          { q: "við ___ (breytast)", a: "breytumst", why: "við -umst." },
          { q: "þið ___ (komast)", a: "komist", why: "þið -ist, with the plain plural stem kom-." },
          { q: "hann ___ (setjast)", a: "sest", why: "Singular sest." },
          { q: "þeir ___ (hittast)", a: "hittast", why: "Third person plural hittast." },
          { q: "þú ___ (eldast)", a: "eldist", why: "Singular eldist." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Við ___ á Hlemmi klukkan sex. (hittast)", a: "hittumst", why: "hittumst means we meet each other; á Hlemmi is dative." },
          { q: "Anna ___ mikið um landið á sumrin. (ferðast)", a: "ferðast", why: "Third person singular ferðast; um takes the accusative." },
          { q: "Ég ___ niður og fæ mér kaffi. (setjast)", a: "sest", why: "sest niður is the everyday way to say sit down." },
          { q: "Hurðin ___ hægt. (opnast)", a: "opnast", why: "The -st form gives an intransitive sense: the door opens by itself." },
          { q: "Þið ___ ekki heim fyrir myrkur. (komast)", a: "komist", why: "þið -ist; komast means to manage to get somewhere." },
          { q: "Veðrið ___ alltaf hratt á Íslandi. (breytast)", a: "breytist", why: "Third person singular breytist." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Þeir ___ á hverjum fimmtudegi í sundlauginni. (hittast)", a: "hittast", why: "Plural hittast; dagur has the dative degi." },
          { q: "Við ___ með rútunni til Akureyrar. (ferðast)", a: "ferðumst", why: "ferðumst; með takes the dative for a means of transport." },
          { q: "Kaffið ___ alltaf of snemma hjá Sóleyju. (klárast)", a: "klárast", why: "Third person singular klárast; hjá takes the dative." },
          { q: "Þú ___ ekkert, þú lítur alltaf eins út. (eldast)", a: "eldist", why: "Singular eldist, the same form as ég and hann." },
          { q: "Ég ___ ekki í vinnuna fyrr en klukkan tíu. (komast)", a: "kemst", why: "kemst; í takes the accusative because there is movement." },
          { q: "Krakkarnir ___ í hring á gólfinu. (setjast)", a: "setjast", why: "Plural setjast; í hring is accusative motion, á gólfinu dative place." }
        ]
      }
    ]
  },

  /* =============================================================== 11 */
  {
    id: "verb-modals",
    title: "Modal verbs: geta, mega, vilja, kunna, þurfa, eiga",
    cat: "verbs",
    cefr: "A1",
    unit: 9,
    instruction: "Put the verb in brackets into the correct present-tense form.",
    example: { q: "þú ___ (mega)", a: "mátt" },
    rounds: [
      {
        n: 1,
        label: "ég, þú, hann",
        items: [
          { q: "ég ___ (geta)", a: "get", opts: ["get", "getur", "getum"], why: "geta: get, getur, getur, getum, getið, geta." },
          { q: "þú ___ (mega)", a: "mátt", opts: ["mátt", "má", "megið"], why: "mega: má, mátt, má in the singular." },
          { q: "hann ___ (vilja)", a: "vill", opts: ["vill", "vil", "vilt"], why: "vilja: vil, vilt, vill — three different singular forms." },
          { q: "ég ___ (þurfa)", a: "þarf", opts: ["þarf", "þarft", "þurfum"], why: "þurfa: þarf, þarft, þarf." },
          { q: "þú ___ (eiga)", a: "átt", opts: ["átt", "á", "eigið"], why: "eiga: á, átt, á in the singular." },
          { q: "hún ___ (kunna)", a: "kann", opts: ["kann", "kannt", "kunna"], why: "kunna: kann, kannt, kann." }
        ]
      },
      {
        n: 2,
        label: "við, þið, þeir",
        items: [
          { q: "við ___ (geta)", a: "getum", opts: ["getum", "getið", "geta"], why: "The plural is regular: getum, getið, geta." },
          { q: "þið ___ (mega)", a: "megið", opts: ["megið", "megum", "mega"], why: "The plural stem of mega is meg-." },
          { q: "þeir ___ (vilja)", a: "vilja", opts: ["vilja", "viljum", "viljið"], why: "Third person plural = the infinitive vilja." },
          { q: "við ___ (þurfa)", a: "þurfum", opts: ["þurfum", "þurfið", "þurfa"], why: "The plural goes back to þurf-." },
          { q: "þið ___ (eiga)", a: "eigið", opts: ["eigið", "eigum", "eiga"], why: "The plural stem of eiga is eig-." },
          { q: "þær ___ (kunna)", a: "kunna", opts: ["kunna", "kunnum", "kunnið"], why: "Third person plural kunna." }
        ]
      },
      {
        n: 3,
        label: "Allar persónur á víxl",
        items: [
          { q: "þú ___ (vilja)", a: "vilt", why: "vilt is the only form with -t here." },
          { q: "við ___ (mega)", a: "megum", why: "Plural stem meg- plus -um." },
          { q: "ég ___ (eiga)", a: "á", why: "ég á and hann á are identical." },
          { q: "þið ___ (geta)", a: "getið", why: "þið getið." },
          { q: "hann ___ (þurfa)", a: "þarf", why: "Third person singular þarf, the same as ég." },
          { q: "þeir ___ (kunna)", a: "kunna", why: "Third person plural kunna." }
        ]
      },
      {
        n: 4,
        label: "Heilar setningar",
        items: [
          { q: "Ég ___ ekki komið í kvöld. (geta)", a: "get", why: "geta is the one modal that takes a past participle, not an infinitive." },
          { q: "Þú ___ ekki reykja hérna. (mega)", a: "mátt", why: "mega is followed by a bare infinitive." },
          { q: "Við ___ fara heim núna. (vilja)", a: "viljum", why: "vilja plus a bare infinitive, with no að." },
          { q: "Anna ___ að læra fyrir prófið. (þurfa)", a: "þarf", why: "þurfa always brings að before the infinitive." },
          { q: "Þið ___ að hringja í hana á morgun. (eiga)", a: "eigið", why: "eiga að means ought to; hringja í takes the accusative." },
          { q: "Jónas ___ að baka rúgbrauð. (kunna)", a: "kann", why: "kunna að is used for a learned skill." }
        ]
      },
      {
        n: 5,
        label: "Lengri setningar",
        items: [
          { q: "Við ___ hitt ykkur á Hlemmi klukkan sjö. (geta)", a: "getum", why: "geta plus the participle hitt, never the infinitive hitta." },
          { q: "Þeir ___ ekki fara út fyrr en þeir klára heimaverkefnið. (mega)", a: "mega", why: "Third person plural mega plus a bare infinitive." },
          { q: "Ég ___ helst tala íslensku við þig. (vilja)", a: "vil", why: "ég vil plus a bare infinitive; tala við takes the accusative." },
          { q: "Þú ___ að taka strætó ef bíllinn er bilaður. (þurfa)", a: "þarft", why: "þú þarft að, with að before the infinitive." },
          { q: "Sóley ___ að opna bakaríið klukkan sex. (eiga)", a: "á", why: "Third person singular á, followed by að." },
          { q: "Krakkarnir ___ allir að synda. (kunna)", a: "kunna", why: "Plural kunna; allir agrees with the masculine plural krakkarnir." }
        ]
      }
    ]
  }

];

export default drills;
