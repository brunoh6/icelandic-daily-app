// Drill sets: adjectives, pronouns and numbers.
// Merged into data/drills.js by tools/build.js.

export const drills = [

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-strong-nom",
    title: "Strong adjectives in the nominative",
    cat: "adjectives",
    cefr: "A1.2",
    unit: 6,
    instruction: "Put the adjective in brackets into the strong nominative form that matches the noun.",
    example: { q: "Hesturinn er ___ . (hvítur)", a: "hvítur" },
    rounds: [
      {
        n: 1,
        label: "Karlkyn eintala",
        items: [
          { q: "Bíllinn er ___ . (rauður)", a: "rauður", opts: ["rauður", "rauð", "rautt"],
            why: "bíll is kk. eintala, so the adjective keeps its dictionary ending -ur." },
          { q: "Hundurinn er ___ . (svartur)", a: "svartur", opts: ["svartur", "svört", "svart"],
            why: "kk. NF eintala = the form you look up: svartur." },
          { q: "Kaffibollinn er ___ . (heitur)", a: "heitur", opts: ["heitur", "heit", "heitt"],
            why: "bolli is kk., so the adjective ends in -ur." },
          { q: "Jónas er ___ í dag. (glaður)", a: "glaður", opts: ["glaður", "glöð", "glatt"],
            why: "Jónas is kk.; the ö of glöð only turns up in the kvk. form." },
          { q: "Skólinn er ___ . (nýr)", a: "nýr", opts: ["nýr", "ný", "nýtt"],
            why: "skóli is kk.; nýr has no -ur, its r belongs to the stem." },
          { q: "Síminn minn er ___ . (gamall)", a: "gamall", opts: ["gamall", "gömul", "gamalt"],
            why: "sími is kk. → gamall; gömul is the kvk. form." }
        ]
      },
      {
        n: 2,
        label: "Kvenkyn eintala",
        items: [
          { q: "Bókin er ___ . (nýr)", a: "ný", opts: ["nýr", "ný", "nýtt"],
            why: "bók is kvk., and the kvk. NF eintala has no ending at all." },
          { q: "Sóley er ___ . (glaður)", a: "glöð", opts: ["glaður", "glöð", "glatt"],
            why: "the kvk. ending used to contain u, so a shifts to ö: glöð." },
          { q: "Mjólkin er ___ . (kaldur)", a: "köld", opts: ["kaldur", "köld", "kalt"],
            why: "mjólk is kvk. → köld, with the same u-shift as glöð." },
          { q: "Borgin er ___ . (stór)", a: "stór", opts: ["stór", "stórt", "stórir"],
            why: "stór has no ending in either kk. or kvk. NF eintala." },
          { q: "Kakan er ___ . (góður)", a: "góð", opts: ["góður", "góð", "gott"],
            why: "kaka is kvk. → góð; the -ur simply drops." },
          { q: "Peysan er ___ . (blár)", a: "blá", opts: ["blár", "blá", "blátt"],
            why: "peysa is kvk.; blár loses its -r: blá." }
        ]
      },
      {
        n: 3,
        label: "Hvorugkyn eintala",
        items: [
          { q: "Húsið er ___ . (stór)", a: "stórt",
            why: "hk. NF eintala adds -t: stórt." },
          { q: "Veðrið er ___ . (kaldur)", a: "kalt",
            why: "kald + t gives kalt; the d is swallowed by the t." },
          { q: "Brauðið er ___ . (góður)", a: "gott",
            why: "a stem in -ð plus -t comes out as tt: gott." },
          { q: "Herbergið er ___ . (lítill)", a: "lítið",
            why: "lítill is irregular; its hk. form is lítið." },
          { q: "Barnið er ___ . (þreyttur)", a: "þreytt",
            why: "the stem already ends in tt, so nothing more is added." },
          { q: "Vatnið er ___ . (heitur)", a: "heitt",
            why: "heit + t = heitt." }
        ]
      },
      {
        n: 4,
        label: "Fleirtala",
        items: [
          { q: "Hestarnir eru ___ . (hvítur)", a: "hvítir",
            why: "kk. fleirtala NF ends in -ir." },
          { q: "Bækurnar eru ___ . (dýr)", a: "dýrar",
            why: "kvk. fleirtala NF ends in -ar." },
          { q: "Húsin eru ___ . (gamall)", a: "gömul",
            why: "hk. fleirtala takes no ending but does take the u-shift: gömul." },
          { q: "Stelpurnar eru ___ . (svangur)", a: "svangar",
            why: "kvk. fleirtala -ar; there is no u in the ending, so the a stays." },
          { q: "Strákarnir eru ___ . (kátur)", a: "kátir",
            why: "kk. fleirtala -ir: kátir." },
          { q: "Börnin eru ___ . (glaður)", a: "glöð",
            why: "hk. fleirtala looks exactly like the kvk. eintala: glöð." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna á hund og hundurinn hennar er ___ . (lítill)", a: "lítill",
            why: "hundur is kk. eintala, so the dictionary form stands: lítill." },
          { q: "Sóley bakar kökur og kökurnar eru alltaf ___ . (heitur)", a: "heitar",
            why: "kökur is kvk. fleirtala → -ar: heitar." },
          { q: "Jónas býr í húsi og húsið er ___ . (gamall)", a: "gamalt",
            why: "hús is hk. eintala → gamalt." },
          { q: "Lúlli er lundi og hann er alltaf ___ . (svangur)", a: "svangur",
            why: "hann stands for a kk. noun, so the adjective is kk. eintala." },
          { q: "Við kaupum brauð í bakaríinu og brauðið er ___ . (nýr)", a: "nýtt",
            why: "brauð is hk. → nýtt." },
          { q: "Anna og Jónas eru systkini og þau eru bæði ___ . (duglegur)", a: "dugleg",
            why: "þau is hk. fleirtala, which takes no ending: dugleg." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-strong-acc",
    title: "Strong adjectives in the accusative",
    cat: "adjectives",
    cefr: "A1.2",
    unit: 6,
    instruction: "Put the adjective in brackets into the strong accusative (þolfall).",
    example: { q: "Ég sé ___ hest. (hvítur)", a: "hvítan" },
    rounds: [
      {
        n: 1,
        label: "Karlkyn eintala",
        items: [
          { q: "Ég sé ___ hund. (svartur)", a: "svartan", opts: ["svartur", "svartan", "svarta"],
            why: "kk. ÞF eintala ends in -an." },
          { q: "Anna kaupir ___ bíl. (nýr)", a: "nýjan", opts: ["nýr", "nýjan", "nýja"],
            why: "nýr slips a j in before a vowel ending: nýjan." },
          { q: "Hann drekkur ___ bjór. (kaldur)", a: "kaldan", opts: ["kaldur", "kaldan", "köldum"],
            why: "the ending -an has no u, so the stem keeps its a: kaldan." },
          { q: "Við eigum ___ hest. (gamall)", a: "gamlan", opts: ["gamall", "gamlan", "gömlum"],
            why: "gamall drops its second a before an ending: gamlan." },
          { q: "Ég vil fá ___ kaffibolla. (stór)", a: "stóran", opts: ["stór", "stóran", "stóru"],
            why: "stór + -an = stóran." },
          { q: "Sóley bakar ___ snúð. (góður)", a: "góðan", opts: ["góður", "góðan", "góða"],
            why: "kk. ÞF eintala -an: góðan." }
        ]
      },
      {
        n: 2,
        label: "Kvenkyn eintala",
        items: [
          { q: "Ég sé ___ borg. (stór)", a: "stóra", opts: ["stór", "stóra", "stórar"],
            why: "kvk. ÞF eintala ends in -a." },
          { q: "Hún kaupir ___ peysu. (blár)", a: "bláa", opts: ["blá", "bláa", "bláu"],
            why: "blár + -a = bláa." },
          { q: "Ég vil fá ___ köku. (lítill)", a: "litla", opts: ["lítil", "litla", "litlu"],
            why: "lítill loses its í-syllable outside the NF: litla." },
          { q: "Jónas les ___ bók. (skemmtilegur)", a: "skemmtilega", opts: ["skemmtileg", "skemmtilega", "skemmtilegar"],
            why: "bók is kvk. eintala → -a." },
          { q: "Anna á ___ systur. (ungur)", a: "unga", opts: ["ung", "unga", "ungar"],
            why: "kvk. ÞF eintala -a: unga." },
          { q: "Ég drekk ___ mjólk. (kaldur)", a: "kalda", opts: ["köld", "kalda", "köldu"],
            why: "no u in the ending means no u-shift: kalda, not köldu." }
        ]
      },
      {
        n: 3,
        label: "Hvorugkyn eintala",
        items: [
          { q: "Ég sé ___ hús. (stór)", a: "stórt",
            why: "the hk. ÞF is identical to the hk. NF: stórt." },
          { q: "Hún borðar ___ brauð. (nýr)", a: "nýtt",
            why: "nýtt in hk., the same in NF and ÞF." },
          { q: "Við eigum ___ barn. (lítill)", a: "lítið",
            why: "hk. lítið never changes between NF and ÞF." },
          { q: "Ég vil fá ___ vatn. (kaldur)", a: "kalt",
            why: "kald + t → kalt." },
          { q: "Þau leigja ___ herbergi. (ódýr)", a: "ódýrt",
            why: "hk. adds -t: ódýrt." },
          { q: "Lúlli finnur ___ egg. (gulur)", a: "gult",
            why: "egg is hk. → gult." }
        ]
      },
      {
        n: 4,
        label: "Fleirtala",
        items: [
          { q: "Ég sé ___ hesta. (hvítur)", a: "hvíta",
            why: "kk. fleirtala ÞF ends in -a: hvíta." },
          { q: "Hún kaupir ___ bækur. (dýr)", a: "dýrar",
            why: "kvk. fleirtala is dýrar in both NF and ÞF." },
          { q: "Við sjáum ___ hús. (gamall)", a: "gömul",
            why: "hk. fleirtala gömul, the same in NF and ÞF." },
          { q: "Anna á ___ vini. (góður)", a: "góða",
            why: "kk. fleirtala ÞF -a: góða." },
          { q: "Ég borða ___ epli. (rauður)", a: "rauð",
            why: "hk. fleirtala has no ending: rauð." },
          { q: "Þeir skoða ___ myndir. (fallegur)", a: "fallegar",
            why: "kvk. fleirtala -ar: fallegar." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna fer í búðina og kaupir ___ kjól. (rauður)", a: "rauðan",
            why: "kaupa takes ÞF and kjóll is kk. → rauðan." },
          { q: "Sóley setur ___ köku í gluggann. (stór)", a: "stóra",
            why: "kaka is kvk. in ÞF → stóra." },
          { q: "Jónas á gamlan bíl en hann vill ___ bíl. (nýr)", a: "nýjan",
            why: "vilja takes ÞF; bíll is kk. → nýjan." },
          { q: "Lúlli tekur snúð og flýgur yfir ___ þak. (rauður)", a: "rautt",
            why: "yfir with movement takes ÞF, and þak is hk. → rautt." },
          { q: "Við þekkjum ___ konu sem býr hérna. (gamall)", a: "gamla",
            why: "kona is kvk. in ÞF; the noun is indefinite, so the adjective is strong: gamla." },
          { q: "Ég ætla að fá ___ kaffi og eina köku. (heitur)", a: "heitt",
            why: "kaffi is hk. → heitt, unchanged from the NF." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-strong-dat",
    title: "Strong adjectives in the dative",
    cat: "adjectives",
    cefr: "A1.2",
    unit: 6,
    instruction: "Put the adjective in brackets into the strong dative (þágufall).",
    example: { q: "Ég bý í ___ húsi. (hvítur)", a: "hvítu" },
    rounds: [
      {
        n: 1,
        label: "Karlkyn eintala",
        items: [
          { q: "Ég bý í ___ bæ. (lítill)", a: "litlum", opts: ["lítill", "litlum", "litla"],
            why: "í with a static location takes ÞGF; kk. ÞGF is -um." },
          { q: "Anna býr hjá ___ vini. (góður)", a: "góðum", opts: ["góður", "góðan", "góðum"],
            why: "hjá always takes ÞGF: góðum." },
          { q: "Við sitjum á ___ stól. (gamall)", a: "gömlum", opts: ["gamall", "gamlan", "gömlum"],
            why: "the u of -um brings both the u-shift and the loss of the second a: gömlum." },
          { q: "Ég er með kaffi í ___ bolla. (stór)", a: "stórum", opts: ["stór", "stóran", "stórum"],
            why: "í + static location → ÞGF; bolli is kk. → stórum." },
          { q: "Hann er í ___ jakka. (svartur)", a: "svörtum", opts: ["svartur", "svörtum", "svarta"],
            why: "the ending -um turns the stem a into ö: svörtum." },
          { q: "Sóley vinnur með ___ manni. (skemmtilegur)", a: "skemmtilegum", opts: ["skemmtilegur", "skemmtilegan", "skemmtilegum"],
            why: "með with a person takes ÞGF: skemmtilegum." }
        ]
      },
      {
        n: 2,
        label: "Kvenkyn eintala",
        items: [
          { q: "Ég bý í ___ borg. (stór)", a: "stórri", opts: ["stór", "stóra", "stórri"],
            why: "kvk. ÞGF eintala ends in -ri: stórri." },
          { q: "Hann býr hjá ___ konu. (gamall)", a: "gamalli", opts: ["gömul", "gamla", "gamalli"],
            why: "after l the -ri ending becomes -li: gamalli." },
          { q: "Ég er í ___ úlpu. (nýr)", a: "nýrri", opts: ["ný", "nýja", "nýrri"],
            why: "nýr + -ri = nýrri." },
          { q: "Anna vinnur í ___ búð. (lítill)", a: "lítilli", opts: ["lítil", "litla", "lítilli"],
            why: "lítill keeps its í here and takes -li: lítilli." },
          { q: "Jónas býr hjá ___ vinkonu. (góður)", a: "góðri", opts: ["góð", "góða", "góðri"],
            why: "kvk. ÞGF -ri: góðri." },
          { q: "Ég drekk kaffi með ___ mjólk. (kaldur)", a: "kaldri", opts: ["köld", "kalda", "kaldri"],
            why: "no u in -ri, so no u-shift: kaldri." }
        ]
      },
      {
        n: 3,
        label: "Hvorugkyn eintala",
        items: [
          { q: "Bókin liggur á ___ borði. (stór)", a: "stóru",
            why: "hk. ÞGF eintala ends in -u: stóru." },
          { q: "Þau búa í ___ húsi. (gamall)", a: "gömlu",
            why: "the -u ending gives both the u-shift and the dropped a: gömlu." },
          { q: "Ég sef í ___ herbergi. (lítill)", a: "litlu",
            why: "lítill → litlu in the hk. ÞGF." },
          { q: "Hann kemur frá ___ landi. (kaldur)", a: "köldu",
            why: "a becomes ö before -u: köldu." },
          { q: "Kötturinn sefur á ___ teppi. (mjúkur)", a: "mjúku",
            why: "teppi is hk. → mjúku." },
          { q: "Sóley vinnur í ___ bakaríi. (nýr)", a: "nýju",
            why: "nýr + -u = nýju." }
        ]
      },
      {
        n: 4,
        label: "Fleirtala",
        items: [
          { q: "Hún býr hjá ___ vinum. (góður)", a: "góðum",
            why: "the fleirtala ÞGF is -um in all three genders." },
          { q: "Við drekkum kakó á ___ dögum. (kaldur)", a: "köldum",
            why: "-um brings the u-shift: köldum." },
          { q: "Anna tekur myndir af ___ fjöllum. (hár)", a: "háum",
            why: "hár + -um = háum." },
          { q: "Hann er í ___ skóm. (svartur)", a: "svörtum",
            why: "svartur → svörtum before the -um ending." },
          { q: "Við gistum í ___ herbergjum. (lítill)", a: "litlum",
            why: "lítill → litlum in the fleirtala ÞGF." },
          { q: "Hún vinnur með ___ konum. (duglegur)", a: "duglegum",
            why: "one ending, -um, covers every gender in the fleirtala." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna býr í ___ íbúð í miðbænum. (lítill)", a: "lítilli",
            why: "í with a static location takes ÞGF; íbúð is kvk. → lítilli." },
          { q: "Jónas fer alltaf út að ganga í ___ veðri. (vondur)", a: "vondu",
            why: "veður is hk., and the hk. ÞGF eintala is -u: vondu." },
          { q: "Sóley býður okkur kaffi með ___ brauði. (heitur)", a: "heitu",
            why: "með takes ÞGF here, and brauð is hk. → heitu." },
          { q: "Lúlli situr á ___ þaki og horfir á fólkið. (rauður)", a: "rauðu",
            why: "á with a static location takes ÞGF; þak is hk. → rauðu." },
          { q: "Við förum í sund með ___ vinum okkar. (íslenskur)", a: "íslenskum",
            why: "með with companions takes ÞGF fleirtala: -um." },
          { q: "Anna kaupir mjólk í ___ búð við hliðina á skólanum. (gamall)", a: "gamalli",
            why: "búð is kvk. in ÞGF, and gamall gives gamalli." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-weak",
    title: "The weak adjective declension",
    cat: "adjectives",
    cefr: "A1.2",
    unit: 7,
    instruction: "Put the adjective in brackets into the weak form used after an article, a demonstrative, a possessive or a superlative.",
    example: { q: "___ hesturinn (hvítur)", a: "hvíti" },
    rounds: [
      {
        n: 1,
        label: "Karlkyn með greini",
        items: [
          { q: "___ hesturinn (hvítur)", a: "hvíti", opts: ["hvítur", "hvíti", "hvíta"],
            why: "a definite noun pulls the adjective into the weak form: kk. NF -i." },
          { q: "___ bíllinn (rauður)", a: "rauði", opts: ["rauður", "rauði", "rauða"],
            why: "kk. NF weak ends in -i: rauði." },
          { q: "___ maðurinn (gamall)", a: "gamli", opts: ["gamall", "gamli", "gamla"],
            why: "gamall drops its second a in the weak form: gamli." },
          { q: "___ hundurinn (lítill)", a: "litli", opts: ["lítill", "litli", "litla"],
            why: "lítill becomes litli when the noun is definite." },
          { q: "___ snúðurinn (nýr)", a: "nýi", opts: ["nýr", "nýi", "nýja"],
            why: "nýr → nýi in the weak kk. NF." },
          { q: "___ skólinn (stór)", a: "stóri", opts: ["stór", "stóri", "stóra"],
            why: "kk. NF weak -i: stóri." }
        ]
      },
      {
        n: 2,
        label: "Kvenkyn og hvorugkyn með greini",
        items: [
          { q: "___ bókin (nýr)", a: "nýja", opts: ["ný", "nýja", "nýju"],
            why: "kvk. NF weak ends in -a: nýja." },
          { q: "___ borgin (stór)", a: "stóra", opts: ["stór", "stóra", "stóru"],
            why: "kvk. NF weak -a: stóra." },
          { q: "___ húsið (gamall)", a: "gamla", opts: ["gamalt", "gamla", "gömlu"],
            why: "the weak hk. is -a in every case: gamla." },
          { q: "___ barnið (lítill)", a: "litla", opts: ["lítið", "litla", "litlu"],
            why: "hk. weak -a: litla." },
          { q: "___ kakan (góður)", a: "góða", opts: ["góð", "góða", "góðu"],
            why: "kvk. NF weak -a: góða." },
          { q: "___ veðrið (vondur)", a: "vonda", opts: ["vont", "vonda", "vondu"],
            why: "veður is hk. → vonda." }
        ]
      },
      {
        n: 3,
        label: "Fleirtala",
        items: [
          { q: "___ hestarnir (hvítur)", a: "hvítu",
            why: "every weak fleirtala form, in all genders and cases, ends in -u." },
          { q: "___ bækurnar (gamall)", a: "gömlu",
            why: "the -u ending brings the u-shift and the dropped a: gömlu." },
          { q: "___ húsin (nýr)", a: "nýju",
            why: "weak fleirtala -u: nýju." },
          { q: "___ stelpurnar (duglegur)", a: "duglegu",
            why: "one form, duglegu, covers the whole fleirtala." },
          { q: "___ börnin (lítill)", a: "litlu",
            why: "lítill → litlu in the weak fleirtala." },
          { q: "___ skórnir (svartur)", a: "svörtu",
            why: "-u turns the a into ö: svörtu." }
        ]
      },
      {
        n: 4,
        label: "Önnur föll",
        items: [
          { q: "Ég keyri ___ bílinn. (nýr)", a: "nýja",
            why: "the weak kk. is -i only in the NF; every other case is -a." },
          { q: "Við búum í ___ húsinu. (gamall)", a: "gamla",
            why: "the weak hk. stays -a in all four cases: gamla." },
          { q: "Anna talar við ___ konuna. (gamall)", a: "gömlu",
            why: "the weak kvk. is -a only in the NF; ÞF, ÞGF and EF are all -u." },
          { q: "Hann situr í ___ stofunni. (stór)", a: "stóru",
            why: "stofa is kvk. in ÞGF, so the weak ending is -u: stóru." },
          { q: "þessi ___ maður (ungur)", a: "ungi",
            why: "þessi makes the adjective weak even without an article: ungi." },
          { q: "Ég tala við manninn í ___ jakkanum. (svartur)", a: "svarta",
            why: "weak kk. outside the NF is -a: svarta." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna vinnur á ___ kaffihúsinu við hliðina á skólanum. (nýr)", a: "nýja",
            why: "kaffihús is hk., and the weak hk. is -a in every case." },
          { q: "Sóley selur ___ snúðana fyrst á morgnana. (heitur)", a: "heitu",
            why: "the noun is definite fleirtala, so the weak ending is -u: heitu." },
          { q: "Jónas býr í ___ húsinu á horninu. (gamall)", a: "gamla",
            why: "hk. ÞGF weak is still -a: gamla." },
          { q: "Lúlli situr á ___ bryggjunni og bíður. (gamall)", a: "gömlu",
            why: "bryggja is kvk. in ÞGF → weak -u: gömlu." },
          { q: "Ég ætla að fá ___ kökuna í glugganum. (lítill)", a: "litlu",
            why: "kaka is kvk. in ÞF, where the weak ending is -u: litlu." },
          { q: "___ strákurinn í bekknum heitir Jónas. (duglegur)", a: "duglegi",
            why: "kk. NF with a definite noun → weak -i: duglegi." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-comparative",
    title: "The comparative",
    cat: "adjectives",
    cefr: "A2.2",
    unit: 14,
    instruction: "Give the comparative of the adjective in brackets.",
    example: { q: "kaldur → ___", a: "kaldari" },
    rounds: [
      {
        n: 1,
        label: "Reglulegt -ari",
        items: [
          { q: "kaldur → ___", a: "kaldari", opts: ["kaldari", "kaldri", "kældri"],
            why: "the plain pattern is stem + -ari: kaldari." },
          { q: "sterkur → ___", a: "sterkari", opts: ["sterkari", "sterkri", "styrkri"],
            why: "stem + -ari: sterkari." },
          { q: "dýr → ___", a: "dýrari", opts: ["dýrari", "dýrri", "dýri"],
            why: "dýr takes -ari with no vowel change: dýrari." },
          { q: "ríkur → ___", a: "ríkari", opts: ["ríkari", "ríkri", "rýkri"],
            why: "stem + -ari: ríkari." },
          { q: "heitur → ___", a: "heitari", opts: ["heitari", "heitri", "hetari"],
            why: "stem + -ari: heitari." },
          { q: "glaður → ___", a: "glaðari", opts: ["glaðari", "glaðri", "glöðari"],
            why: "stem + -ari, and no u-shift because there is no u: glaðari." }
        ]
      },
      {
        n: 2,
        label: "-ri með hljóðvarpi",
        items: [
          { q: "stór → ___", a: "stærri", opts: ["stærri", "stórari", "stóri"],
            why: "the shorter -ri ending forces ó → æ: stærri." },
          { q: "ungur → ___", a: "yngri", opts: ["yngri", "ungari", "öngri"],
            why: "u → y before -ri: yngri." },
          { q: "langur → ___", a: "lengri", opts: ["lengri", "langari", "löngri"],
            why: "a → e before -ri: lengri." },
          { q: "hár → ___", a: "hærri", opts: ["hærri", "hárari", "hári"],
            why: "á → æ before -ri: hærri." },
          { q: "þungur → ___", a: "þyngri", opts: ["þyngri", "þungari", "þöngri"],
            why: "u → y: þyngri." },
          { q: "lágur → ___", a: "lægri", opts: ["lægri", "lágari", "lögri"],
            why: "á → æ: lægri." }
        ]
      },
      {
        n: 3,
        label: "Óregluleg stig",
        items: [
          { q: "góður → ___", a: "betri",
            why: "góður uses a completely different stem: betri." },
          { q: "vondur → ___", a: "verri",
            why: "vondur → verri, another stem swap." },
          { q: "gamall → ___", a: "eldri",
            why: "gamall → eldri; the comparative comes from a different word." },
          { q: "lítill → ___", a: "minni",
            why: "lítill → minni." },
          { q: "mikill → ___", a: "meiri",
            why: "mikill → meiri." },
          { q: "margir → ___", a: "fleiri",
            why: "margir → fleiri, used only in the fleirtala." }
        ]
      },
      {
        n: 4,
        label: "Í setningum með en",
        items: [
          { q: "Anna er ___ en Jónas. (ungur)", a: "yngri",
            why: "a comparative ends in -ri for kk. and kvk. alike: yngri." },
          { q: "Húsið mitt er ___ en húsið þitt. (stór)", a: "stærra",
            why: "the hk. eintala is the one comparative form ending in -a: stærra." },
          { q: "Kaffið hérna er ___ en heima. (góður)", a: "betra",
            why: "kaffi is hk. eintala → betra." },
          { q: "Þessi peysa er ___ en hin. (dýr)", a: "dýrari",
            why: "peysa is kvk., and kvk. keeps the -i: dýrari." },
          { q: "Veðrið í dag er ___ en í gær. (vondur)", a: "verra",
            why: "vondur → verri, and the hk. eintala is verra." },
          { q: "Bræður mínir eru ___ en ég. (gamall)", a: "eldri",
            why: "a comparative in the fleirtala always ends in -ri: eldri." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Jónas á gamlan bíl en bíllinn hennar Önnu er enn ___ . (gamall)", a: "eldri",
            why: "bíll is kk. eintala, and kk. comparatives end in -ri: eldri." },
          { q: "Í Reykjavík er kalt en á Akureyri er oft ___ . (kaldur)", a: "kaldara",
            why: "a weather statement with no noun is hk. → kaldara." },
          { q: "Þessi bók er löng en hin er miklu ___ . (langur)", a: "lengri",
            why: "a → e before -ri, and bók is kvk. → lengri." },
          { q: "Anna á litla íbúð en Jónas á ___ íbúð. (stór)", a: "stærri",
            why: "comparatives keep -ri in every case except the hk. eintala." },
          { q: "Snúðarnir í þessu bakaríi eru ___ en í hinu. (ódýr)", a: "ódýrari",
            why: "the fleirtala of a comparative is -ari here, never -u." },
          { q: "Mér finnst íslenska ___ en enska. (erfiður)", a: "erfiðari",
            why: "íslenska is kvk. eintala → erfiðari." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "adj-superlative",
    title: "The superlative",
    cat: "adjectives",
    cefr: "A2.2",
    unit: 14,
    instruction: "Give the superlative of the adjective in brackets.",
    example: { q: "kaldur → ___", a: "kaldastur" },
    rounds: [
      {
        n: 1,
        label: "Reglulegt -astur",
        items: [
          { q: "kaldur → ___", a: "kaldastur", opts: ["kaldastur", "kaldstur", "kældastur"],
            why: "the plain pattern is stem + -astur: kaldastur." },
          { q: "sterkur → ___", a: "sterkastur", opts: ["sterkastur", "sterkstur", "styrkastur"],
            why: "stem + -astur: sterkastur." },
          { q: "dýr → ___", a: "dýrastur", opts: ["dýrastur", "dýrstur", "dýrari"],
            why: "dýr + -astur = dýrastur." },
          { q: "ríkur → ___", a: "ríkastur", opts: ["ríkastur", "ríkstur", "rýkastur"],
            why: "stem + -astur: ríkastur." },
          { q: "heitur → ___", a: "heitastur", opts: ["heitastur", "heitstur", "hetastur"],
            why: "stem + -astur: heitastur." },
          { q: "glaður → ___", a: "glaðastur", opts: ["glaðastur", "glaðstur", "glöðastur"],
            why: "stem + -astur: glaðastur." }
        ]
      },
      {
        n: 2,
        label: "-stur með hljóðvarpi",
        items: [
          { q: "stór → ___", a: "stærstur", opts: ["stærstur", "stórastur", "stórstur"],
            why: "the short -stur ending forces ó → æ: stærstur." },
          { q: "ungur → ___", a: "yngstur", opts: ["yngstur", "ungastur", "öngstur"],
            why: "u → y before -stur: yngstur." },
          { q: "langur → ___", a: "lengstur", opts: ["lengstur", "langastur", "löngstur"],
            why: "a → e before -stur: lengstur." },
          { q: "hár → ___", a: "hæstur", opts: ["hæstur", "hárastur", "hárstur"],
            why: "á → æ: hæstur." },
          { q: "þungur → ___", a: "þyngstur", opts: ["þyngstur", "þungastur", "þöngstur"],
            why: "u → y: þyngstur." },
          { q: "lágur → ___", a: "lægstur", opts: ["lægstur", "lágastur", "lögstur"],
            why: "á → æ: lægstur." }
        ]
      },
      {
        n: 3,
        label: "Óregluleg stig",
        items: [
          { q: "góður → ___", a: "bestur",
            why: "góður – betri – bestur, all from different stems." },
          { q: "vondur → ___", a: "verstur",
            why: "vondur – verri – verstur." },
          { q: "gamall → ___", a: "elstur",
            why: "gamall – eldri – elstur." },
          { q: "lítill → ___", a: "minnstur",
            why: "lítill – minni – minnstur." },
          { q: "mikill → ___", a: "mestur",
            why: "mikill – meiri – mestur." },
          { q: "margir → ___", a: "flestir",
            why: "margir – fleiri – flestir, fleirtala only." }
        ]
      },
      {
        n: 4,
        label: "Með greini (veik beyging)",
        items: [
          { q: "___ maðurinn í hópnum (gamall)", a: "elsti",
            why: "a superlative next to a definite noun is weak: kk. NF -i." },
          { q: "___ bakaríið í bænum (góður)", a: "besta",
            why: "the weak hk. ends in -a: besta." },
          { q: "___ borgin á Íslandi (stór)", a: "stærsta",
            why: "the weak kvk. NF ends in -a: stærsta." },
          { q: "___ dagarnir eru í desember. (stuttur)", a: "stystu",
            why: "stuttur – styttri – stystur, and every weak fleirtala is -u." },
          { q: "___ barnið í fjölskyldunni (ungur)", a: "yngsta",
            why: "the weak hk. is -a: yngsta." },
          { q: "___ fjöllin á Íslandi (hár)", a: "hæstu",
            why: "weak fleirtala -u: hæstu." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Vatnajökull er ___ jökull í Evrópu. (stór)", a: "stærsti",
            why: "a superlative is weak even without an article; jökull is kk. → stærsti." },
          { q: "Þetta er ___ kaffi í bænum. (góður)", a: "besta",
            why: "kaffi is hk., so the weak superlative is besta." },
          { q: "Anna er ___ nemandinn í bekknum. (duglegur)", a: "duglegasti",
            why: "nemandi is kk. NF with the article → weak duglegasti." },
          { q: "Janúar er ___ mánuður ársins. (kaldur)", a: "kaldasti",
            why: "mánuður is kk. NF → weak kaldasti." },
          { q: "Sóley bakar ___ kökurnar í bænum. (góður)", a: "bestu",
            why: "the fleirtala of a weak superlative is always -u: bestu." },
          { q: "Lúlli situr alltaf á ___ þakinu í götunni. (hár)", a: "hæsta",
            why: "þak is hk., and the weak hk. is -a in every case: hæsta." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "pron-personal-cases",
    title: "Personal pronouns in all four cases",
    cat: "pronouns",
    cefr: "A1.2",
    unit: 7,
    instruction: "Put the pronoun in brackets into the case the sentence needs.",
    example: { q: "Anna sér ___ . (ég)", a: "mig" },
    rounds: [
      {
        n: 1,
        label: "Þolfall",
        items: [
          { q: "Jónas sér ___ . (ég)", a: "mig", opts: ["ég", "mig", "mér"],
            why: "sjá takes ÞF, and the ÞF of ég is mig." },
          { q: "Ég sé ___ . (þú)", a: "þig", opts: ["þú", "þig", "þér"],
            why: "ÞF of þú is þig." },
          { q: "Anna þekkir ___ . (hann)", a: "hann", opts: ["hann", "honum", "hans"],
            why: "hann looks the same in NF and ÞF." },
          { q: "Við sjáum ___ . (hún)", a: "hana", opts: ["hún", "hana", "henni"],
            why: "ÞF of hún is hana." },
          { q: "Lúlli tekur ___ . (það)", a: "það", opts: ["það", "því", "þess"],
            why: "hk. það is identical in NF and ÞF." },
          { q: "Kennarinn spyr ___ . (við)", a: "okkur", opts: ["við", "okkur", "okkar"],
            why: "spyrja takes ÞF, and við becomes okkur." }
        ]
      },
      {
        n: 2,
        label: "Þágufall",
        items: [
          { q: "Anna hjálpar ___ . (ég)", a: "mér", opts: ["ég", "mig", "mér"],
            why: "hjálpa governs ÞGF: mér." },
          { q: "Ég segi ___ frá þessu. (þú)", a: "þér", opts: ["þú", "þig", "þér"],
            why: "the person you tell something stands in ÞGF: þér." },
          { q: "Sóley svarar ___ . (hann)", a: "honum", opts: ["hann", "honum", "hans"],
            why: "svara governs ÞGF: honum." },
          { q: "Jónas gefur ___ kaffi. (hún)", a: "henni", opts: ["hún", "hana", "henni"],
            why: "the receiver stands in ÞGF: henni." },
          { q: "Ég treysti ___ . (þið)", a: "ykkur", opts: ["þið", "ykkur", "ykkar"],
            why: "treysta governs ÞGF: ykkur." },
          { q: "Hún kemur með ___ í bíó. (við)", a: "okkur", opts: ["við", "okkur", "okkar"],
            why: "með with companions takes ÞGF: okkur." }
        ]
      },
      {
        n: 3,
        label: "Eignarfall",
        items: [
          { q: "Þetta er bíllinn ___ . (hann)", a: "hans",
            why: "the EF of hann is hans and never changes shape." },
          { q: "Hér er húsið ___ . (hún)", a: "hennar",
            why: "the EF of hún is hennar." },
          { q: "Anna saknar ___ . (við)", a: "okkar",
            why: "sakna governs EF: okkar." },
          { q: "Þetta er skólinn ___ . (þeir)", a: "þeirra",
            why: "þeir, þær and þau all share one EF form: þeirra." },
          { q: "Hann bíður ___ . (ég)", a: "mín",
            why: "bíða governs EF: mín." },
          { q: "Er þetta taska ___ ? (þú)", a: "þín",
            why: "the EF of þú is þín." }
        ]
      },
      {
        n: 4,
        label: "Eftir forsetningar",
        items: [
          { q: "Lúlli situr hjá ___ . (ég)", a: "mér",
            why: "hjá always takes ÞGF: mér." },
          { q: "Þetta er handa ___ . (þú)", a: "þér",
            why: "handa takes ÞGF: þér." },
          { q: "Anna talar um ___ . (þeir)", a: "þá",
            why: "um takes ÞF, and the ÞF of þeir is þá." },
          { q: "Við förum án ___ . (hann)", a: "hans",
            why: "án takes EF: hans." },
          { q: "Sóley bakar köku fyrir ___ . (þið)", a: "ykkur",
            why: "fyrir meaning for takes ÞF: ykkur." },
          { q: "Jónas býr á móti ___ . (við)", a: "okkur",
            why: "á móti takes ÞGF: okkur." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Lúlli vekur ___ klukkan sex og Anna er alltaf þreytt. (hún)", a: "hana",
            why: "vekja takes ÞF, so hún becomes hana." },
          { q: "Jónas á gamalt hjól og hann notar ___ á hverjum degi. (það)", a: "það",
            why: "nota takes ÞF, and hk. það looks the same in both cases." },
          { q: "Sóley kann vel við nýju nágrannana og býður ___ í kaffi. (þeir)", a: "þeim",
            why: "bjóða puts the guest in ÞGF: þeim." },
          { q: "Ég sakna Íslands og ég sakna ___ líka. (þið)", a: "ykkar",
            why: "sakna governs EF: ykkar." },
          { q: "Anna og Jónas eru vinir og Lúlli fylgir ___ alltaf heim. (þau)", a: "þeim",
            why: "fylgja governs ÞGF, and þau becomes þeim." },
          { q: "Þegar Sóley bakar finnst ___ dagurinn betri. (hún)", a: "henni",
            why: "finnast puts its experiencer in ÞGF: henni finnst." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "pron-possessive",
    title: "Possessive pronouns",
    cat: "pronouns",
    cefr: "A1.2",
    unit: 10,
    instruction: "Give the form of the possessive in brackets that fits the noun.",
    example: { q: "bíllinn ___ (minn)", a: "minn" },
    rounds: [
      {
        n: 1,
        label: "minn í eintölu",
        items: [
          { q: "bíllinn ___ (minn)", a: "minn", opts: ["minn", "mín", "mitt"],
            why: "bíll is kk. → minn." },
          { q: "bókin ___ (minn)", a: "mín", opts: ["minn", "mín", "mitt"],
            why: "bók is kvk. → mín." },
          { q: "húsið ___ (minn)", a: "mitt", opts: ["minn", "mín", "mitt"],
            why: "hús is hk. → mitt." },
          { q: "systir ___ (minn)", a: "mín", opts: ["minn", "mín", "mitt"],
            why: "systir is kvk. → mín." },
          { q: "bróðir ___ (minn)", a: "minn", opts: ["minn", "mín", "mitt"],
            why: "bróðir is kk. → minn." },
          { q: "barnið ___ (minn)", a: "mitt", opts: ["minn", "mín", "mitt"],
            why: "barn is hk. → mitt." }
        ]
      },
      {
        n: 2,
        label: "þinn í fleirtölu",
        items: [
          { q: "skórnir ___ (þinn)", a: "þínir", opts: ["þínir", "þínar", "þín"],
            why: "skór is kk. fleirtala → þínir." },
          { q: "bækurnar ___ (þinn)", a: "þínar", opts: ["þínir", "þínar", "þín"],
            why: "bækur is kvk. fleirtala → þínar." },
          { q: "börnin ___ (þinn)", a: "þín", opts: ["þínir", "þínar", "þín"],
            why: "börn is hk. fleirtala → þín." },
          { q: "foreldrar ___ (þinn)", a: "þínir", opts: ["þínir", "þínar", "þín"],
            why: "foreldrar is kk. fleirtala → þínir." },
          { q: "systur ___ (þinn)", a: "þínar", opts: ["þínir", "þínar", "þín"],
            why: "systur is kvk. fleirtala → þínar." },
          { q: "augun ___ (þinn)", a: "þín", opts: ["þínir", "þínar", "þín"],
            why: "augu is hk. fleirtala → þín." }
        ]
      },
      {
        n: 3,
        label: "Föllin fjögur",
        items: [
          { q: "Ég tala við bróður ___ . (minn)", a: "minn",
            why: "við takes ÞF, and the kk. ÞF of minn is also minn." },
          { q: "Ég bý hjá systur ___ . (minn)", a: "minni",
            why: "hjá takes ÞGF, and the kvk. ÞGF is minni." },
          { q: "Hann keyrir bílinn ___ . (þinn)", a: "þinn",
            why: "the kk. ÞF of þinn is þinn." },
          { q: "Anna passar börnin ___ . (þinn)", a: "þín",
            why: "the hk. fleirtala ÞF is þín." },
          { q: "Ég sit í herberginu ___ . (minn)", a: "mínu",
            why: "the hk. ÞGF eintala is mínu." },
          { q: "Þetta er hús foreldra ___ . (minn)", a: "minna",
            why: "the EF fleirtala is minna in every gender." }
        ]
      },
      {
        n: 4,
        label: "sinn eða hans/hennar",
        items: [
          { q: "Jónas þvær bílinn ___ . (his own)", a: "sinn",
            why: "sinn points back to the subject: it is Jónas's own car." },
          { q: "Anna hittir Jónas og talar við konuna ___ . (Jónas's)", a: "hans",
            why: "the woman belongs to Jónas, not to the subject Anna, so hans." },
          { q: "Sóley bakar köku handa mömmu ___ . (her own)", a: "sinni",
            why: "handa takes ÞGF and mamma is kvk. → sinni, pointing back to Sóley." },
          { q: "Anna á hjól. Hjólið ___ er rautt. (her)", a: "hennar",
            why: "a new sentence has no subject to point back to, so hennar." },
          { q: "Börnin borða morgunmatinn ___ . (their own)", a: "sinn",
            why: "morgunmatur is kk. ÞF → sinn, pointing back to börnin." },
          { q: "Þetta eru vinir ___ , ekki mínir. (þinn)", a: "þínir",
            why: "vinir is kk. fleirtala NF → þínir." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna býr í lítilli íbúð og hún elskar íbúðina ___ . (sinn)", a: "sína",
            why: "íbúð is kvk. in ÞF → sína, pointing back to hún." },
          { q: "Jónas gefur nágrönnum ___ fisk á föstudögum. (sinn)", a: "sínum",
            why: "nágrannar is kk. fleirtala in ÞGF → sínum." },
          { q: "Sóley kemur alltaf með kaffi handa vinkonu ___ . (sinn)", a: "sinni",
            why: "handa takes ÞGF and vinkona is kvk. → sinni." },
          { q: "Ég sakna fjölskyldunnar ___ á veturna. (minn)", a: "minnar",
            why: "sakna takes EF and fjölskylda is kvk. → minnar." },
          { q: "Lúlli lendir á öxlinni ___ þegar þú býður honum brauð. (þinn)", a: "þinni",
            why: "á with a static location takes ÞGF and öxl is kvk. → þinni." },
          { q: "Við borðum kvöldmat með foreldrum ___ á sunnudögum. (minn)", a: "mínum",
            why: "með takes ÞGF and foreldrar is kk. fleirtala → mínum." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    id: "num-1-4-gender",
    title: "The numbers 1–4 have gender",
    cat: "numbers",
    cefr: "A1.2",
    unit: 7,
    instruction: "Write the number in brackets in the form that matches the noun.",
    example: { q: "___ hestur (1)", a: "einn" },
    rounds: [
      {
        n: 1,
        label: "einn og tveir í nefnifalli",
        items: [
          { q: "___ hestur (1)", a: "einn", opts: ["einn", "ein", "eitt"],
            why: "hestur is kk. → einn." },
          { q: "___ kona (1)", a: "ein", opts: ["einn", "ein", "eitt"],
            why: "kona is kvk. → ein." },
          { q: "___ barn (1)", a: "eitt", opts: ["einn", "ein", "eitt"],
            why: "barn is hk. → eitt." },
          { q: "___ bílar (2)", a: "tveir", opts: ["tveir", "tvær", "tvö"],
            why: "bílar is kk. → tveir." },
          { q: "___ bækur (2)", a: "tvær", opts: ["tveir", "tvær", "tvö"],
            why: "bækur is kvk. → tvær." },
          { q: "___ hús (2)", a: "tvö", opts: ["tveir", "tvær", "tvö"],
            why: "hús is hk. → tvö." }
        ]
      },
      {
        n: 2,
        label: "þrír og fjórir í nefnifalli",
        items: [
          { q: "___ hundar (3)", a: "þrír", opts: ["þrír", "þrjár", "þrjú"],
            why: "hundar is kk. → þrír." },
          { q: "___ stelpur (3)", a: "þrjár", opts: ["þrír", "þrjár", "þrjú"],
            why: "stelpur is kvk. → þrjár." },
          { q: "___ börn (3)", a: "þrjú", opts: ["þrír", "þrjár", "þrjú"],
            why: "börn is hk. → þrjú." },
          { q: "___ dagar (4)", a: "fjórir", opts: ["fjórir", "fjórar", "fjögur"],
            why: "dagar is kk. → fjórir." },
          { q: "___ nætur (4)", a: "fjórar", opts: ["fjórir", "fjórar", "fjögur"],
            why: "nætur is kvk. → fjórar." },
          { q: "___ epli (4)", a: "fjögur", opts: ["fjórir", "fjórar", "fjögur"],
            why: "epli is hk. → fjögur." }
        ]
      },
      {
        n: 3,
        label: "Þolfall",
        items: [
          { q: "Ég sé ___ hesta. (2)", a: "tvo",
            why: "the kk. ÞF of tveir is tvo." },
          { q: "Anna kaupir ___ bækur. (2)", a: "tvær",
            why: "kvk. tvær is the same in NF and ÞF." },
          { q: "Við eigum ___ hús. (2)", a: "tvö",
            why: "hk. tvö does not change in ÞF." },
          { q: "Hann á ___ bræður. (3)", a: "þrjá",
            why: "the kk. ÞF of þrír is þrjá." },
          { q: "Ég vil fá ___ snúða. (4)", a: "fjóra",
            why: "the kk. ÞF of fjórir is fjóra." },
          { q: "Sóley bakar ___ kökur. (4)", a: "fjórar",
            why: "kvk. fjórar is the same in NF and ÞF." }
        ]
      },
      {
        n: 4,
        label: "Þágufall og eignarfall",
        items: [
          { q: "Anna býr með ___ vinkonum. (2)", a: "tveimur",
            why: "the ÞGF of tveir is tveimur in all three genders." },
          { q: "Jónas kemur með ___ hundum. (3)", a: "þremur",
            why: "the ÞGF of þrír is þremur, one form for every gender." },
          { q: "Ég bý í ___ herbergi. (1)", a: "einu",
            why: "the hk. ÞGF of eitt is einu." },
          { q: "Þetta er ___ manna herbergi. (2)", a: "tveggja",
            why: "a measure phrase like this takes EF: tveggja." },
          { q: "Hún fer í ___ vikna frí. (3)", a: "þriggja",
            why: "the EF of þrír is þriggja." },
          { q: "Þetta er ferð til ___ landa. (4)", a: "fjögurra",
            why: "til takes EF, and the EF of fjórir is fjögurra." }
        ]
      },
      {
        n: 5,
        label: "Heilar setningar",
        items: [
          { q: "Anna á ___ systur og einn bróður. (2)", a: "tvær",
            why: "systur is kvk., and kvk. tvær stays the same in ÞF." },
          { q: "Sóley bakar ___ hundruð snúða á laugardögum. (3)", a: "þrjú",
            why: "hundrað is hk., so the numeral is þrjú." },
          { q: "Ég verð á Íslandi í ___ daga. (4)", a: "fjóra",
            why: "í with a stretch of time takes ÞF, and dagur is kk. → fjóra." },
          { q: "Lúlli tekur ___ snúða og flýgur upp á þak. (2)", a: "tvo",
            why: "snúðar is kk. in ÞF → tvo." },
          { q: "Í eldhúsinu eru ___ glös og ein kanna. (3)", a: "þrjú",
            why: "glös is hk. in NF → þrjú." },
          { q: "Anna talar við ___ kennara á hverjum degi. (3)", a: "þrjá",
            why: "við takes ÞF, and kennari is kk. → þrjá." }
        ]
      }
    ]
  }

];

export default drills;
