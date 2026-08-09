// Drill sets — nouns and cases.
// Ten drills, each with exactly 5 rounds of exactly 6 items and one repeated instruction.
// Round order is always: 1 masculine, 2 feminine, 3 neuter, 4 mixed, 5 full sentences.

export const drills = [
  /* =================================================== 1. nom-vs-acc === */
  {
    id: "nom-vs-acc",
    title: "Nominative or accusative?",
    cat: "cases",
    cefr: "A1.1",
    unit: 5,
    instruction: "Decide whether the noun is the subject or the object, then write it in the nominative or the accusative. No article.",
    example: { q: "Ég sé ___ (hestur)", a: "hest" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Hér er ___ (hestur)", a: "hestur", opts: ["hestur", "hest", "hesti"], why: "After vera the noun is the subject, so it stays in the nominative." },
          { q: "Ég sé ___ (hestur)", a: "hest", opts: ["hestur", "hest", "hests"], why: "sjá takes a direct object, and direct objects go into the accusative: -ur drops off." },
          { q: "Þarna er ___ (hundur)", a: "hundur", opts: ["hundur", "hund", "hundi"], why: "Nominative again — nothing is acting on the dog." },
          { q: "Anna á ___ (hundur)", a: "hund", opts: ["hundur", "hund", "hunds"], why: "eiga takes an accusative object." },
          { q: "Hér er ___ (bíll)", a: "bíll", opts: ["bíll", "bíl", "bílinn"], why: "Subject after vera: the plain nominative bíll." },
          { q: "Jónas kaupir ___ (bíll)", a: "bíl", opts: ["bíll", "bíl", "bíls"], why: "kaupa takes the accusative; -ll loses one l when the -r of the ending goes." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Hér er ___ (kaka)", a: "kaka", opts: ["kaka", "köku", "kökur"], why: "Subject after vera stays as it is: kaka." },
          { q: "Sóley bakar ___ (kaka)", a: "köku", opts: ["kaka", "köku", "kökur"], why: "Weak feminines swap -a for -u in the accusative, and the stem a shifts to ö before that u." },
          { q: "Þarna er ___ (kirkja)", a: "kirkja", opts: ["kirkja", "kirkju", "kirkjur"], why: "Nominative subject — no change." },
          { q: "Ég sé ___ (kirkja)", a: "kirkju", opts: ["kirkja", "kirkju", "kirkjur"], why: "Object of sjá: -a becomes -u." },
          { q: "Hér er ___ (klukka)", a: "klukka", opts: ["klukka", "klukku", "klukkur"], why: "Subject after vera." },
          { q: "Anna á ___ (klukka)", a: "klukku", opts: ["klukka", "klukku", "klukkur"], why: "Object of eiga: klukka becomes klukku." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Hér er ___ (borð)", a: "borð", why: "Nominative subject after vera." },
          { q: "Ég sé ___ (borð)", a: "borð", why: "Neuter nouns look identical in the nominative and the accusative." },
          { q: "Þarna er ___ (hús)", a: "hús", why: "Nominative subject." },
          { q: "Jónas málar ___ (hús)", a: "hús", why: "It is an object here, but neuter singular never changes shape." },
          { q: "Hér er ___ (epli)", a: "epli", why: "Neuters in -i keep the -i in both cases." },
          { q: "Anna borðar ___ (epli)", a: "epli", why: "Object of borða, and still epli — the neuter freebie." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Hér er ___ (gluggi)", a: "gluggi", why: "Weak masculine subject, nominative -i." },
          { q: "Lúlli sér ___ (gluggi)", a: "glugga", why: "Weak masculines end in -a in every case but the nominative." },
          { q: "Þarna er ___ (stelpa)", a: "stelpa", why: "Feminine nominative subject." },
          { q: "Ég þekki ___ (stelpa)", a: "stelpu", why: "þekkja takes the accusative: -a to -u." },
          { q: "Hér er ___ (glas)", a: "glas", why: "Neuter nominative." },
          { q: "Sóley þvær ___ (glas)", a: "glas", why: "Neuter accusative equals the nominative." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Fyrir utan bakaríið stendur ___ (strákur)", a: "strákur", why: "The boy is doing the standing, so he is the nominative subject even after the verb." },
          { q: "Sóley þekkir ___ úr skólanum (strákur)", a: "strák", why: "Object of þekkja: the ending -ur drops." },
          { q: "Á náttborðinu hjá Önnu liggur ___ (saga)", a: "saga", why: "The story lies there by itself — nominative subject." },
          { q: "Anna les ___ á hverju kvöldi (saga)", a: "sögu", why: "Object of lesa: saga becomes sögu, with a to ö before the u." },
          { q: "Uppi á þakinu situr ___ (lundi)", a: "lundi", why: "Subject of sitja, so the weak masculine keeps its -i." },
          { q: "Jónas sér ___ út um eldhúsgluggann (lundi)", a: "lunda", why: "Object of sjá: weak masculine -i turns into -a." }
        ]
      }
    ]
  },

  /* ============================================== 2. acc-indefinite === */
  {
    id: "acc-indefinite",
    title: "Accusative without the article",
    cat: "cases",
    cefr: "A1.1",
    unit: 5,
    instruction: "Put the noun in brackets into the accusative singular, without the definite article.",
    example: { q: "Ég sé ___ (hundur)", a: "hund" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Ég á ___ (hattur)", a: "hatt", opts: ["hattur", "hatt", "hatti"], why: "Masculine -ur simply loses the ending in the accusative." },
          { q: "Anna kaupir ___ (bíll)", a: "bíl", opts: ["bíll", "bíl", "bíls"], why: "The second l in bíll is the swallowed ending, so it goes: bíl." },
          { q: "Jónas á ___ (hundur)", a: "hund", opts: ["hundur", "hund", "hundi"], why: "eiga takes the accusative; -ur drops." },
          { q: "Ég finn ___ (lykill)", a: "lykil", opts: ["lykill", "lykil", "lykli"], why: "-ill becomes -il here; the vowel only drops out later, in the dative lykli." },
          { q: "Við eigum ___ (bátur)", a: "bát", opts: ["bátur", "bát", "báti"], why: "Same pattern as hattur: bát." },
          { q: "Sóley þekkir ___ (kennari)", a: "kennara", opts: ["kennari", "kennara", "kennarinn"], why: "Weak masculines in -i take -a in the accusative." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Ég sé ___ (borg)", a: "borg", opts: ["borg", "borgar", "borgir"], why: "Short feminines like borg never change in the accusative singular." },
          { q: "Sóley bakar ___ (kaka)", a: "köku", opts: ["kaka", "köku", "kökur"], why: "-a to -u, and the stem a becomes ö because the ending has u." },
          { q: "Anna les ___ (bók)", a: "bók", opts: ["bók", "bókar", "bækur"], why: "bók stays bók; the change comes only in the genitive and the plural." },
          { q: "Ég þekki ___ (kona)", a: "konu", opts: ["kona", "konu", "konur"], why: "Weak feminine: -a becomes -u." },
          { q: "Jónas segir ___ (saga)", a: "sögu", opts: ["saga", "sögu", "sögur"], why: "saga to sögu — the u in the ending pulls a over to ö." },
          { q: "Við sjáum ___ (kirkja)", a: "kirkju", opts: ["kirkja", "kirkju", "kirkjur"], why: "Weak feminine ending -a swaps for -u." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Ég sé ___ (hús)", a: "hús", why: "Neuter singular is the same in the nominative and the accusative." },
          { q: "Anna borðar ___ (epli)", a: "epli", why: "Neuters in -i keep the -i." },
          { q: "Jónas kaupir ___ (blað)", a: "blað", why: "No ending is added in the neuter accusative." },
          { q: "Við eigum ___ (borð)", a: "borð", why: "Unchanged, like every neuter singular object." },
          { q: "Sóley bakar ___ (brauð)", a: "brauð", why: "Neuter: nothing to add." },
          { q: "Ég drekk ___ (vatn)", a: "vatn", why: "Neuter accusative equals the nominative." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Ég sé ___ (hestur)", a: "hest", why: "Masculine -ur drops in the accusative." },
          { q: "Anna á ___ (klukka)", a: "klukku", why: "Weak feminine -a becomes -u." },
          { q: "Jónas skrifar ___ (bréf)", a: "bréf", why: "Neuter singular does not change." },
          { q: "Sóley þekkir ___ (stelpa)", a: "stelpu", why: "Weak feminine -a becomes -u." },
          { q: "Við eigum ___ (garður)", a: "garð", why: "Masculine -ur drops: garð." },
          { q: "Ég vil ___ (kaffi)", a: "kaffi", why: "Neuter in -i, unchanged." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Á morgnana drekkur Anna ___ með brauði (kaffi)", a: "kaffi", why: "Object of drekka, but neuter -i words never change." },
          { q: "Jónas les alltaf ___ áður en hann fer að sofa (bók)", a: "bók", why: "bók is the object, and this feminine type is identical in the accusative." },
          { q: "Sóley bakar ___ fyrir afmælið á morgun (kaka)", a: "köku", why: "Object of baka: kaka to köku." },
          { q: "Lúlli sér ___ í garðinum hjá Jónasi (köttur)", a: "kött", why: "Object of sjá: köttur loses -ur and keeps the ö." },
          { q: "Í ferðinni sáum við ___ í fyrsta skipti (jökull)", a: "jökul", why: "-ull becomes -ul in the accusative; the syncope jökli waits for the dative." },
          { q: "Anna skrifar ___ til ömmu sinnar á hverjum mánuði (bréf)", a: "bréf", why: "Neuter object, no ending." }
        ]
      }
    ]
  },

  /* ================================================ 3. acc-definite === */
  {
    id: "acc-definite",
    title: "Accusative with the definite article",
    cat: "cases",
    cefr: "A1.1",
    unit: 5,
    instruction: "Put the noun in brackets into the accusative singular with the definite article stuck on the end.",
    example: { q: "Ég sé ___ (hundur)", a: "hundinn" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Ég sé ___ (hestur)", a: "hestinn", opts: ["hesturinn", "hestinn", "hestinum"], why: "Accusative hest plus the masculine article -inn." },
          { q: "Anna opnar ___ (gluggi)", a: "gluggann", opts: ["glugginn", "gluggann", "glugganum"], why: "Weak masculine glugga plus -nn." },
          { q: "Jónas selur ___ (bíll)", a: "bílinn", opts: ["bíllinn", "bílinn", "bílnum"], why: "Accusative bíl plus -inn." },
          { q: "Ég finn ___ (lykill)", a: "lykilinn", opts: ["lykillinn", "lykilinn", "lyklinum"], why: "Accusative lykil plus -inn; no vowel drops here." },
          { q: "Við þekkjum ___ (kennari)", a: "kennarann", opts: ["kennarinn", "kennarann", "kennaranum"], why: "Weak masculine kennara plus -nn." },
          { q: "Anna kallar á ___ (hundur)", a: "hundinn", opts: ["hundurinn", "hundinn", "hundinum"], why: "kalla á takes the accusative: hund plus -inn." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Ég sé ___ (borg)", a: "borgina", opts: ["borgin", "borgina", "borginni"], why: "Accusative borg plus the feminine article -ina." },
          { q: "Anna les ___ (bók)", a: "bókina", opts: ["bókin", "bókina", "bókinni"], why: "bók plus -ina." },
          { q: "Sóley opnar ___ (búð)", a: "búðina", opts: ["búðin", "búðina", "búðinni"], why: "búð plus -ina." },
          { q: "Jónas segir ___ (saga)", a: "söguna", opts: ["sagan", "söguna", "sögunni"], why: "Accusative sögu plus -na — weak feminines only add -na." },
          { q: "Ég þekki ___ (kona)", a: "konuna", opts: ["konan", "konuna", "konunni"], why: "konu plus -na." },
          { q: "Anna stillir ___ (klukka)", a: "klukkuna", opts: ["klukkan", "klukkuna", "klukkunni"], why: "klukku plus -na." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Jónas málar ___ (hús)", a: "húsið", why: "Neuter accusative hús plus the article -ið." },
          { q: "Anna sér ___ (barn)", a: "barnið", why: "barn plus -ið." },
          { q: "Við þrífum ___ (borð)", a: "borðið", why: "borð plus -ið." },
          { q: "Ég borða ___ (epli)", a: "eplið", why: "Neuters in -i drop that -i before the article: epli plus -ið." },
          { q: "Sóley les ___ (blað)", a: "blaðið", why: "blað plus -ið." },
          { q: "Anna leigir ___ (herbergi)", a: "herbergið", why: "herbergi loses its final -i and takes -ið." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Ég sé ___ (fjall)", a: "fjallið", why: "Neuter: fjall plus -ið." },
          { q: "Jónas þvær ___ (bíll)", a: "bílinn", why: "Masculine: bíl plus -inn." },
          { q: "Sóley bakar ___ (kaka)", a: "kökuna", why: "Feminine: köku plus -na." },
          { q: "Við heimsækjum ___ (borg)", a: "borgina", why: "Feminine: borg plus -ina." },
          { q: "Anna borðar ___ (brauð)", a: "brauðið", why: "Neuter: brauð plus -ið." },
          { q: "Ég þekki ___ (strákur)", a: "strákinn", why: "Masculine: strák plus -inn." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna opnar ___ því það er heitt inni (gluggi)", a: "gluggann", why: "Object of opna, weak masculine with the article: glugga plus -nn." },
          { q: "Jónas fer með ___ í göngutúr á hverju kvöldi (hundur)", a: "hundinn", why: "Here Jónas is taking the dog along, so með governs the accusative." },
          { q: "Sóley setur ___ í ofninn klukkan sjö (kaka)", a: "kökuna", why: "Object of setja: köku plus -na." },
          { q: "Lúlli borðar ___ sem liggur á svölunum (fiskur)", a: "fiskinn", why: "Object of borða: fisk plus -inn." },
          { q: "Við sáum ___ út um gluggann í flugvélinni (jökull)", a: "jökulinn", why: "Accusative jökul keeps both vowels, then takes -inn." },
          { q: "Anna les ___ upphátt fyrir barnið (saga)", a: "söguna", why: "Object of lesa: sögu plus -na." }
        ]
      }
    ]
  },

  /* ============================================== 4. dat-indefinite === */
  {
    id: "dat-indefinite",
    title: "Dative without the article",
    cat: "cases",
    cefr: "A1.2",
    unit: 6,
    instruction: "Put the noun in brackets into the dative singular, without the definite article.",
    example: { q: "Anna gistir á ___ (hótel)", a: "hóteli" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Anna er í ___ (skóli)", a: "skóla", opts: ["skóli", "skóla", "skólanum"], why: "í for a static place takes the dative, and weak masculines end in -a everywhere but the nominative." },
          { q: "Jónas kemur á ___ (bátur)", a: "báti", opts: ["bátur", "bát", "báti"], why: "Most masculine -ur nouns take -i in the dative." },
          { q: "Bréfið er frá ___ (læknir)", a: "lækni", opts: ["læknir", "lækni", "læknis"], why: "frá always takes the dative; -ir becomes -i." },
          { q: "Sóley hjálpar ___ (kennari)", a: "kennara", opts: ["kennari", "kennara", "kennurum"], why: "hjálpa governs the dative, and weak masculines show -a." },
          { q: "Ég gleymdi ___ (lykill)", a: "lykli", opts: ["lykill", "lykil", "lykli"], why: "gleyma takes the dative, and here the second vowel drops out: lykill to lykli." },
          { q: "Við hittumst á ___ (fundur)", a: "fundi", opts: ["fundur", "fund", "fundi"], why: "Static á plus the dative ending -i." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Anna býr í ___ (borg)", a: "borg", opts: ["borg", "borgar", "borgum"], why: "Short feminines like borg are unchanged in the dative singular." },
          { q: "Sóley vinnur í ___ (búð)", a: "búð", opts: ["búð", "búðar", "búðum"], why: "Same type as borg: no ending in the dative." },
          { q: "Ég hjálpa ___ (kona)", a: "konu", opts: ["kona", "konu", "konum"], why: "hjálpa takes the dative; weak feminines show -u in every case but the nominative." },
          { q: "Við komum úr ___ (kirkja)", a: "kirkju", opts: ["kirkja", "kirkju", "kirkjum"], why: "úr is always dative: kirkja becomes kirkju." },
          { q: "Jónas sagði mér frá ___ (ferð)", a: "ferð", opts: ["ferð", "ferðar", "ferðum"], why: "frá takes the dative, but this feminine type adds nothing." },
          { q: "Fuglarnir búa á ___ (eyja)", a: "eyju", opts: ["eyja", "eyju", "eyjum"], why: "Static á plus the dative; weak feminine -a becomes -u." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Anna gistir á ___ (hótel)", a: "hóteli", why: "Neuter nouns take -i in the dative singular." },
          { q: "Bókin liggur á ___ (borð)", a: "borði", why: "Static á plus the neuter dative ending -i." },
          { q: "Jónas hjálpar ___ (barn)", a: "barni", why: "hjálpa takes the dative: barn plus -i." },
          { q: "Við búum í ___ (hús)", a: "húsi", why: "Static í plus -i." },
          { q: "Sóley er í ___ (herbergi)", a: "herbergi", why: "Neuters that already end in -i look like a dative and stay put." },
          { q: "Hún kemur frá ___ (land)", a: "landi", why: "frá is dative: land plus -i." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Anna vinnur í ___ (bakarí)", a: "bakaríi", why: "Neuter in -í adds the dative -i, giving a double i." },
          { q: "Sóley er í ___ (vinna)", a: "vinnu", why: "Weak feminine: -a becomes -u." },
          { q: "Barnið sefur í ___ (rúm)", a: "rúmi", why: "Neuter dative -i." },
          { q: "Ég fer með ___ (rúta)", a: "rútu", why: "með for a means of transport takes the dative: rúta becomes rútu." },
          { q: "Jónas gleymdi ___ (hattur)", a: "hatti", why: "gleyma governs the dative: hattur becomes hatti." },
          { q: "Lúlli situr á ___ (þak)", a: "þaki", why: "Static á plus the neuter dative -i." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Á sunnudögum hittir Anna vinkonur sínar á ___ niðri í bæ (kaffihús)", a: "kaffihúsi", why: "Static á plus the neuter dative -i." },
          { q: "Jónas fer alltaf í vinnuna á ___ (hjól)", a: "hjóli", why: "á for a means of transport is dative: hjól plus -i." },
          { q: "Sóley byrjar að baka klukkan fimm á hverjum ___ (morgunn)", a: "morgni", why: "morgunn has an irregular dative morgni, used in the set phrase á hverjum morgni." },
          { q: "Lúlli situr uppi á ___ og horfir yfir höfnina (kirkja)", a: "kirkju", why: "Static á plus the dative; weak feminine -a becomes -u." },
          { q: "Anna talar við ömmu sína í síma á hverju ___ (kvöld)", a: "kvöldi", why: "á with a repeated time takes the dative: kvöld plus -i." },
          { q: "Við sáum hvali úr ___ fyrir utan Reykjavík (bátur)", a: "báti", why: "úr is always dative: bátur becomes báti." }
        ]
      }
    ]
  },

  /* ================================================ 5. dat-definite === */
  {
    id: "dat-definite",
    title: "Dative with the definite article",
    cat: "cases",
    cefr: "A1.2",
    unit: 6,
    instruction: "Put the noun in brackets into the dative singular with the definite article stuck on the end.",
    example: { q: "Bókin liggur á ___ (borð)", a: "borðinu" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Anna er í ___ (skóli)", a: "skólanum", opts: ["skólinn", "skólann", "skólanum"], why: "Dative skóla plus the masculine article -num." },
          { q: "Bókin er hjá ___ (kennari)", a: "kennaranum", opts: ["kennarinn", "kennarann", "kennaranum"], why: "hjá is always dative: kennara plus -num." },
          { q: "Við sitjum í ___ (bíll)", a: "bílnum", opts: ["bíllinn", "bílinn", "bílnum"], why: "bíll has no -i in the dative, so it is simply bíl plus -num." },
          { q: "Sóley hjálpar ___ (læknir)", a: "lækninum", opts: ["læknirinn", "lækninn", "lækninum"], why: "hjálpa takes the dative: lækni plus -num." },
          { q: "Anna gefur ___ mat (hundur)", a: "hundinum", opts: ["hundurinn", "hundinn", "hundinum"], why: "The receiver of gefa stands in the dative: hundi plus -num." },
          { q: "Lúlli situr í ___ (gluggi)", a: "glugganum", opts: ["glugginn", "gluggann", "glugganum"], why: "Dative glugga plus -num." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Anna býr í ___ (borg)", a: "borginni", opts: ["borgin", "borgina", "borginni"], why: "Dative borg plus the feminine article -inni." },
          { q: "Sóley vinnur í ___ (búð)", a: "búðinni", opts: ["búðin", "búðina", "búðinni"], why: "búð plus -inni." },
          { q: "Ég hjálpa ___ (kona)", a: "konunni", opts: ["konan", "konuna", "konunni"], why: "Dative konu plus -nni — weak feminines only add -nni." },
          { q: "Við hittumst í ___ (kirkja)", a: "kirkjunni", opts: ["kirkjan", "kirkjuna", "kirkjunni"], why: "kirkju plus -nni." },
          { q: "Hann sagði frá ___ (ferð)", a: "ferðinni", opts: ["ferðin", "ferðina", "ferðinni"], why: "frá is dative: ferð plus -inni." },
          { q: "Fuglarnir búa á ___ (eyja)", a: "eyjunni", opts: ["eyjan", "eyjuna", "eyjunni"], why: "eyju plus -nni." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Anna gistir á ___ (hótel)", a: "hótelinu", why: "Dative hóteli plus the neuter article -nu." },
          { q: "Bókin liggur á ___ (borð)", a: "borðinu", why: "borði plus -nu." },
          { q: "Sóley gefur ___ mjólk (barn)", a: "barninu", why: "The receiver of gefa is dative: barni plus -nu." },
          { q: "Við búum í ___ (hús)", a: "húsinu", why: "húsi plus -nu." },
          { q: "Lúlli er í ___ (herbergi)", a: "herberginu", why: "The dative herbergi is unchanged, and the article -nu is simply added: herberginu." },
          { q: "Vatnið er í ___ (glas)", a: "glasinu", why: "glasi plus -nu." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Anna er í ___ (vinna)", a: "vinnunni", why: "Feminine: vinnu plus -nni." },
          { q: "Jónas gleymdi ___ (hattur)", a: "hattinum", why: "gleyma is dative: hatti plus -num." },
          { q: "Barnið sefur í ___ (rúm)", a: "rúminu", why: "Neuter: rúmi plus -nu." },
          { q: "Við förum með ___ (rúta)", a: "rútunni", why: "með for transport takes the dative: rútu plus -nni." },
          { q: "Lúlli situr á ___ (þak)", a: "þakinu", why: "Neuter: þaki plus -nu." },
          { q: "Anna svarar ___ (bréf)", a: "bréfinu", why: "svara governs the dative: bréfi plus -nu." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna gleymdi ___ heima og komst ekki inn í íbúðina (lykill)", a: "lyklinum", why: "gleyma is dative, and lykill loses its second vowel: lykli plus -num." },
          { q: "Á veturna er alltaf kalt í ___ hjá Jónasi (eldhús)", a: "eldhúsinu", why: "Static í plus the neuter dative with article: eldhúsi plus -nu." },
          { q: "Sóley bakar brauðið í ___ á hverjum morgni (ofn)", a: "ofninum", why: "Static í takes the dative: ofni plus -num." },
          { q: "Lúlli situr á ___ og fylgist með bátunum (bryggja)", a: "bryggjunni", why: "Sitting still on something is static á plus the dative: bryggju plus -nni." },
          { q: "Anna og Jónas tala saman í ___ á hverjum morgni (garður)", a: "garðinum", why: "Static í plus the dative: garði plus -num." },
          { q: "Sóley segir öllum frá ___ sem hún hitti í bakaríinu (kona)", a: "konunni", why: "frá is always dative: konu plus -nni." }
        ]
      }
    ]
  },

  /* ============================================== 6. gen-indefinite === */
  {
    id: "gen-indefinite",
    title: "Genitive without the article",
    cat: "cases",
    cefr: "A1.2",
    unit: 10,
    instruction: "Put the noun in brackets into the genitive singular, without the definite article.",
    example: { q: "Við förum til ___ (læknir)", a: "læknis" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Þetta er lykill ___ (bíll)", a: "bíls", opts: ["bíll", "bíl", "bíls"], why: "The owner stands in the genitive, and most masculines take -s." },
          { q: "Við förum til ___ (læknir)", a: "læknis", opts: ["læknir", "lækni", "læknis"], why: "til always takes the genitive: -ir becomes -is." },
          { q: "Þetta er hús ___ (kennari)", a: "kennara", opts: ["kennari", "kennara", "kennarans"], why: "Weak masculines end in -a in the genitive too, with no -s." },
          { q: "Anna kom án ___ (hundur)", a: "hunds", opts: ["hundur", "hundi", "hunds"], why: "án governs the genitive: hund plus -s." },
          { q: "Þetta er þak ___ (skóli)", a: "skóla", opts: ["skóli", "skóla", "skólans"], why: "Weak masculine genitive is plain -a." },
          { q: "Þetta er nafn ___ (staður)", a: "staðar", opts: ["staður", "stað", "staðar"], why: "A small group of masculines takes -ar instead of -s: staðar." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Þetta er nafn ___ (borg)", a: "borgar", opts: ["borg", "borgar", "borgir"], why: "Feminines of this type take -ar in the genitive singular." },
          { q: "Anna fór án ___ (bók)", a: "bókar", opts: ["bók", "bókar", "bækur"], why: "án is genitive: bók plus -ar." },
          { q: "Þetta er gluggi ___ (búð)", a: "búðar", opts: ["búð", "búðar", "búðir"], why: "búð plus -ar." },
          { q: "Þetta er sonur ___ (kona)", a: "konu", opts: ["kona", "konu", "konur"], why: "Weak feminines keep -u in the genitive as well — no extra ending." },
          { q: "Þetta er turn ___ (kirkja)", a: "kirkju", opts: ["kirkja", "kirkju", "kirkjur"], why: "Weak feminine genitive is the same -u as the accusative and dative." },
          { q: "Þetta er endir ___ (saga)", a: "sögu", opts: ["saga", "sögu", "sögur"], why: "sögu once again, with a to ö before the u." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Þetta er þak ___ (hús)", a: "húss", why: "Neuters take -s; hús already ends in s, so you see a double s." },
          { q: "Þetta er nafn ___ (barn)", a: "barns", why: "barn plus -s." },
          { q: "Þetta er lykill ___ (herbergi)", a: "herbergis", why: "Neuters in -i add -s to that i: herbergis." },
          { q: "Þetta er fáni ___ (land)", a: "lands", why: "land plus -s." },
          { q: "Anna kom án ___ (blað)", a: "blaðs", why: "án is genitive: blað plus -s." },
          { q: "Þetta er fótur ___ (borð)", a: "borðs", why: "borð plus -s." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Við förum til ___ (Ísland)", a: "Íslands", why: "til is genitive, and neuter place names take -s." },
          { q: "Þetta er bíll ___ (kona)", a: "konu", why: "Weak feminine genitive -u." },
          { q: "Anna kom án ___ (hattur)", a: "hatts", why: "Masculine genitive -s." },
          { q: "Þetta er hurð ___ (herbergi)", a: "herbergis", why: "Neuter in -i plus -s." },
          { q: "Þetta er endir ___ (dagur)", a: "dags", why: "dagur becomes dags in the genitive." },
          { q: "Þetta er þak ___ (kirkja)", a: "kirkju", why: "Weak feminine genitive -u." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Jónas fer aldrei út án ___ á veturna (hattur)", a: "hatts", why: "án always governs the genitive: hatt plus -s." },
          { q: "Anna ætlar til ___ í sumar því hana langar að sjá firðina (Noregur)", a: "Noregs", why: "til is genitive, and Noregur takes -s." },
          { q: "Sóley man ekki nafn ___ sem keypti allar kökurnar (kona)", a: "konu", why: "The possessor is genitive; weak feminines show -u." },
          { q: "Lúlli sat á þaki ___ og horfði á fólkið (bakarí)", a: "bakarís", why: "The possessor is genitive: neuter -í plus -s." },
          { q: "Vegna ___ komst enginn til vinnu í morgun (veður)", a: "veðurs", why: "vegna takes the genitive: veður plus -s." },
          { q: "Lúlli flýgur alltaf aftur til sama ___ á vorin (klettur)", a: "kletts", why: "til always takes the genitive, and klettur takes -s: kletts." }
        ]
      }
    ]
  },

  /* ================================================ 7. gen-definite === */
  {
    id: "gen-definite",
    title: "Genitive with the definite article",
    cat: "cases",
    cefr: "A1.2",
    unit: 10,
    instruction: "Put the noun in brackets into the genitive singular with the definite article stuck on the end.",
    example: { q: "Þetta er þak ___ (hús)", a: "hússins" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Þetta er þak ___ (skóli)", a: "skólans", opts: ["skólinn", "skólans", "skólanum"], why: "Genitive skóla plus the masculine article -ns." },
          { q: "Þetta er bíll ___ (kennari)", a: "kennarans", opts: ["kennarinn", "kennarans", "kennaranum"], why: "kennara plus -ns." },
          { q: "Hér er lykill ___ (bíll)", a: "bílsins", opts: ["bílsins", "bílinn", "bílnum"], why: "Genitive bíls plus the article -ins." },
          { q: "Þetta er nafn ___ (hestur)", a: "hestsins", opts: ["hesturinn", "hestsins", "hestinum"], why: "hests plus -ins." },
          { q: "Þetta er stofa ___ (læknir)", a: "læknisins", opts: ["læknirinn", "læknisins", "lækninum"], why: "læknis plus -ins." },
          { q: "Þetta er endir ___ (dagur)", a: "dagsins", opts: ["dagurinn", "dagsins", "deginum"], why: "dags plus -ins." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Þetta er nafn ___ (borg)", a: "borgarinnar", opts: ["borgin", "borgarinnar", "borginni"], why: "Genitive borgar plus the feminine article -innar." },
          { q: "Þetta er titill ___ (bók)", a: "bókarinnar", opts: ["bókin", "bókarinnar", "bókinni"], why: "bókar plus -innar." },
          { q: "Þetta er gluggi ___ (búð)", a: "búðarinnar", opts: ["búðin", "búðarinnar", "búðinni"], why: "búðar plus -innar." },
          { q: "Þetta er sonur ___ (kona)", a: "konunnar", opts: ["konan", "konunnar", "konunni"], why: "Genitive konu plus -nnar — weak feminines only add -nnar." },
          { q: "Þetta er turn ___ (kirkja)", a: "kirkjunnar", opts: ["kirkjan", "kirkjunnar", "kirkjunni"], why: "kirkju plus -nnar." },
          { q: "Þetta er endir ___ (saga)", a: "sögunnar", opts: ["sagan", "sögunnar", "sögunni"], why: "sögu plus -nnar." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Þetta er þak ___ (hús)", a: "hússins", why: "Genitive húss plus the neuter article -ins." },
          { q: "Þetta er nafn ___ (barn)", a: "barnsins", why: "barns plus -ins." },
          { q: "Þetta er lykill ___ (herbergi)", a: "herbergisins", why: "herbergis plus -ins." },
          { q: "Þetta er fáni ___ (land)", a: "landsins", why: "lands plus -ins." },
          { q: "Þetta er forsíða ___ (blað)", a: "blaðsins", why: "blaðs plus -ins." },
          { q: "Þetta er fótur ___ (borð)", a: "borðsins", why: "borðs plus -ins." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Þetta er hurð ___ (bíll)", a: "bílsins", why: "Masculine: bíls plus -ins." },
          { q: "Þetta er miðja ___ (borg)", a: "borgarinnar", why: "Feminine: borgar plus -innar." },
          { q: "Þetta er þak ___ (kirkja)", a: "kirkjunnar", why: "Weak feminine: kirkju plus -nnar." },
          { q: "Þetta er bragð ___ (kaffi)", a: "kaffisins", why: "Neuter in -i: kaffis plus -ins." },
          { q: "Þetta er hattur ___ (maður)", a: "mannsins", why: "maður has the irregular genitive manns, then -ins." },
          { q: "Þetta er litur ___ (hús)", a: "hússins", why: "Neuter: húss plus -ins." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna man ekki nafn ___ sem hún hitti í strætó í gær (maður)", a: "mannsins", why: "The possessor is genitive: manns plus -ins." },
          { q: "Lúlli sest alltaf á sama horn ___ hjá Jónasi (þak)", a: "þaksins", why: "Neuter genitive þaks plus -ins." },
          { q: "Sóley kann öll verð ___ utan að (búð)", a: "búðarinnar", why: "The shop is the possessor: genitive búðar plus -innar." },
          { q: "Titill ___ er á íslensku en textinn er á ensku (bók)", a: "bókarinnar", why: "bókar plus -innar." },
          { q: "Vegna ___ komst enginn út úr bænum í gær (veður)", a: "veðursins", why: "vegna is genitive: veðurs plus -ins." },
          { q: "Endir ___ kom Önnu algjörlega á óvart (saga)", a: "sögunnar", why: "sögu plus -nnar." }
        ]
      }
    ]
  },

  /* ============================================= 8. noun-plural-nom === */
  {
    id: "noun-plural-nom",
    title: "The nominative plural",
    cat: "cases",
    cefr: "A1.1",
    unit: 5,
    instruction: "Put the noun in brackets into the nominative plural, without the definite article.",
    example: { q: "Einn hestur, tveir ___ (hestur)", a: "hestar" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Einn hestur, tveir ___ (hestur)", a: "hestar", opts: ["hestar", "hestir", "hestum"], why: "The commonest masculine plural ending is -ar." },
          { q: "Einn bíll, tveir ___ (bíll)", a: "bílar", opts: ["bílar", "bílir", "bílum"], why: "bíll takes -ar: bílar." },
          { q: "Einn köttur, tveir ___ (köttur)", a: "kettir", opts: ["kettir", "kattar", "köttar"], why: "This group takes -ir, and the ö shifts to e in front of it: kettir." },
          { q: "Einn gestur, tveir ___ (gestur)", a: "gestir", opts: ["gestir", "gestar", "gestum"], why: "gestur belongs to the -ir group." },
          { q: "Einn kennari, tveir ___ (kennari)", a: "kennarar", opts: ["kennarar", "kennarnir", "kennurum"], why: "Weak masculines in -i take -ar: kennarar." },
          { q: "Einn lykill, tveir ___ (lykill)", a: "lyklar", opts: ["lyklar", "lykillar", "lyklum"], why: "The second vowel drops before the ending: lykill to lyklar." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Ein bók, tvær ___ (bók)", a: "bækur", opts: ["bækur", "bókir", "bókar"], why: "A few feminines change their vowel and take -ur: bók to bækur." },
          { q: "Ein borg, tvær ___ (borg)", a: "borgir", opts: ["borgir", "borgar", "borgur"], why: "borg takes the feminine plural -ir." },
          { q: "Ein kona, tvær ___ (kona)", a: "konur", opts: ["konur", "konir", "konar"], why: "Weak feminines in -a take -ur: konur." },
          { q: "Ein saga, tvær ___ (saga)", a: "sögur", opts: ["sögur", "sagur", "sagir"], why: "sögur, with a to ö before the u of the ending." },
          { q: "Ein nótt, tvær ___ (nótt)", a: "nætur", opts: ["nætur", "nóttir", "nóttur"], why: "nótt is irregular: the plural is nætur." },
          { q: "Ein mynd, tvær ___ (mynd)", a: "myndir", opts: ["myndir", "myndar", "myndur"], why: "Same -ir group as borg." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Eitt hús, tvö ___ (hús)", a: "hús", why: "Neuter plurals add no ending at all." },
          { q: "Eitt barn, tvö ___ (barn)", a: "börn", why: "No ending, but the a shifts to ö in the plural: börn." },
          { q: "Eitt land, tvö ___ (land)", a: "lönd", why: "Same shift: land to lönd." },
          { q: "Eitt epli, tvö ___ (epli)", a: "epli", why: "Neuters in -i are identical in the singular and the plural." },
          { q: "Eitt glas, tvö ___ (glas)", a: "glös", why: "glas to glös, with the same a to ö shift." },
          { q: "Eitt nafn, tvö ___ (nafn)", a: "nöfn", why: "nafn to nöfn." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Hér eru ___ (strákur)", a: "strákar", why: "Masculine -ar plural." },
          { q: "Þarna eru ___ (kirkja)", a: "kirkjur", why: "Weak feminine -ur plural." },
          { q: "Hér eru ___ (fjall)", a: "fjöll", why: "Neuter with no ending, but a becomes ö: fjöll." },
          { q: "Þarna eru ___ (stelpa)", a: "stelpur", why: "Weak feminine -ur plural." },
          { q: "Hér eru ___ (dagur)", a: "dagar", why: "Masculine -ar plural: dagar." },
          { q: "Þarna eru ___ (orð)", a: "orð", why: "Neuter plural with no ending and no vowel change." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Í hverfinu hjá Önnu eru margar ___ og eitt lítið bakarí (búð)", a: "búðir", why: "Feminine -ir plural, matching margar." },
          { q: "Uppi á klettinum sitja hundrað ___ og bíða eftir kvöldinu (lundi)", a: "lundar", why: "Weak masculine in -i takes -ar: lundar." },
          { q: "Í kringum bæinn rísa há ___ með snjó á toppnum (fjall)", a: "fjöll", why: "Neuter plural fjöll, which is why the adjective is há." },
          { q: "Á morgnana koma alltaf sömu ___ inn í bakaríið hjá Sóleyju (gestur)", a: "gestir", why: "gestur belongs to the -ir group: gestir." },
          { q: "Í kassanum hjá Jónasi liggja gamlir ___ sem passa hvergi lengur (lykill)", a: "lyklar", why: "lykill loses its second vowel and takes -ar: lyklar." },
          { q: "Á veturna eru ___ stuttir og dimmir á Íslandi (dagur)", a: "dagar", why: "dagar is the subject, which is why the adjectives end in -ir." }
        ]
      }
    ]
  },

  /* ====================================== 9. noun-plural-all-cases === */
  {
    id: "noun-plural-all-cases",
    title: "The plural in all four cases",
    cat: "cases",
    cefr: "A1.2",
    unit: 9,
    instruction: "Put the noun in brackets into the plural, in whichever case the sentence calls for. No article.",
    example: { q: "Jónas talar um ___ (bíll)", a: "bíla" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Hér eru ___ (hestur)", a: "hestar", opts: ["hestar", "hesta", "hestum"], why: "Subject, so nominative plural -ar." },
          { q: "Ég sé ___ (hestur)", a: "hesta", opts: ["hestar", "hesta", "hestum"], why: "Object of sjá: the accusative plural ends in -a." },
          { q: "Anna er með ___ (hundur)", a: "hunda", opts: ["hundar", "hunda", "hundum"], why: "vera með means to have, and it takes the accusative: hunda." },
          { q: "Jónas talar um ___ (bíll)", a: "bíla", opts: ["bílar", "bíla", "bílum"], why: "um always takes the accusative: bíla." },
          { q: "Sóley hjálpar ___ (kennari)", a: "kennurum", opts: ["kennarar", "kennara", "kennurum"], why: "hjálpa is dative, and the dative plural of kennari is kennurum." },
          { q: "Þetta er hús ___ (læknir)", a: "lækna", opts: ["læknar", "lækna", "læknum"], why: "The possessor is genitive, and the genitive plural ends in -a." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Hér eru margar ___ (borg)", a: "borgir", opts: ["borgir", "borgum", "borga"], why: "Nominative plural -ir." },
          { q: "Ég sé ___ (kirkja)", a: "kirkjur", opts: ["kirkjur", "kirkjum", "kirkna"], why: "Feminine plurals look the same in the nominative and the accusative." },
          { q: "Anna talar við ___ (kona)", a: "konur", opts: ["konur", "konum", "kvenna"], why: "við is accusative, and that is identical to the nominative plural konur." },
          { q: "Jónas kemur frá ___ (eyja)", a: "eyjum", opts: ["eyjar", "eyjum", "eyja"], why: "frá is dative, and every dative plural ends in -um." },
          { q: "Bókin er um ___ (stelpa)", a: "stelpur", opts: ["stelpur", "stelpum", "stelpna"], why: "um is accusative: stelpur." },
          { q: "Ísland er land ___ og jökla (saga)", a: "sagna", opts: ["sögur", "sögum", "sagna"], why: "Genitive plural: saga has the irregular form sagna." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Hér eru mörg ___ (hús)", a: "hús", why: "Neuter nominative plural adds nothing." },
          { q: "Ég sé ___ (barn)", a: "börn", why: "Accusative equals the nominative in the neuter: börn." },
          { q: "Anna talar um ___ (land)", a: "lönd", why: "um is accusative, and the neuter plural is lönd." },
          { q: "Ljósið kemur frá ___ (hús)", a: "húsum", why: "frá is dative, and the dative plural ending is -um." },
          { q: "Sóley gefur ___ kökur (barn)", a: "börnum", why: "The receiver of gefa is dative plural: börnum." },
          { q: "Þetta er land ___ (fjall)", a: "fjalla", why: "Genitive plural ends in -a: fjalla." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Hér eru margir ___ (dagur)", a: "dagar", why: "Nominative plural -ar." },
          { q: "Ég sé ___ (fugl)", a: "fugla", why: "Accusative plural -a." },
          { q: "Anna þekkir fólk í mörgum ___ (borg)", a: "borgum", why: "Static í is dative: borgum." },
          { q: "Jónas talar um ___ (bók)", a: "bækur", why: "um is accusative, identical to the nominative plural bækur." },
          { q: "Sóley gefur ___ brauð (gestur)", a: "gestum", why: "The receiver of gefa is dative: gestum." },
          { q: "Þetta er land ___ (jökull)", a: "jökla", why: "Genitive plural: the second vowel drops, giving jökla." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Á sumrin koma þúsundir ___ til Íslands til að sjá lundana (ferðamaður)", a: "ferðamanna", why: "þúsundir takes the genitive plural, and maður has the irregular form manna." },
          { q: "Anna talar við ___ sínar í síma á hverjum sunnudegi (vinkona)", a: "vinkonur", why: "við is accusative, which for feminines looks like the nominative plural." },
          { q: "Í bakaríinu hjá Sóleyju er alltaf nóg af ___ (kaka)", a: "kökum", why: "af is always dative, and the dative plural ends in -um." },
          { q: "Það rigndi marga ___ í röð og enginn fór út (dagur)", a: "daga", why: "A stretch of time stands in the accusative: marga daga." },
          { q: "Lúlli flýgur yfir höfnina þar sem hann sér marga ___ (bátur)", a: "báta", why: "Object of sjá: accusative plural -a." },
          { q: "Á veturna eru ___ löng og dimm á Íslandi (kvöld)", a: "kvöld", why: "Neuter nominative plural with no ending, so the adjectives are löng and dimm." }
        ]
      }
    ]
  },

  /* =========================================== 10. article-all-cases === */
  {
    id: "article-all-cases",
    title: "The definite article through the cases",
    cat: "cases",
    cefr: "A1.2",
    unit: 6,
    instruction: "Add the definite article to the noun in brackets, in whichever case the sentence calls for.",
    example: { q: "Ég sé ___ (hestur)", a: "hestinn" },
    rounds: [
      {
        n: 1,
        label: "Masculine nouns",
        items: [
          { q: "Hér er ___ (hestur)", a: "hesturinn", opts: ["hesturinn", "hestinn", "hestinum"], why: "Nominative subject: hestur plus -inn." },
          { q: "Ég sé ___ (hestur)", a: "hestinn", opts: ["hesturinn", "hestinn", "hestsins"], why: "Accusative hest plus -inn." },
          { q: "Anna gefur ___ epli (hestur)", a: "hestinum", opts: ["hesturinn", "hestinn", "hestinum"], why: "The receiver of gefa is dative: hesti plus -num." },
          { q: "Þetta er nafn ___ (hestur)", a: "hestsins", opts: ["hestsins", "hestinum", "hestinn"], why: "The possessor is genitive: hests plus -ins." },
          { q: "Hér er ___ (skóli)", a: "skólinn", opts: ["skólinn", "skólann", "skólanum"], why: "Weak masculine nominative with the article: skólinn." },
          { q: "Ég fer í ___ (skóli)", a: "skólann", opts: ["skólinn", "skólann", "skólanum"], why: "Motion into something takes í plus the accusative: skóla plus -nn." }
        ]
      },
      {
        n: 2,
        label: "Feminine nouns",
        items: [
          { q: "Hér er ___ (borg)", a: "borgin", opts: ["borgin", "borgina", "borginni"], why: "Nominative borg plus -in." },
          { q: "Ég sé ___ (borg)", a: "borgina", opts: ["borgin", "borgina", "borginni"], why: "Accusative borg plus -ina." },
          { q: "Anna býr í ___ (borg)", a: "borginni", opts: ["borgin", "borgina", "borginni"], why: "Static í is dative: borg plus -inni." },
          { q: "Þetta er nafn ___ (borg)", a: "borgarinnar", opts: ["borgarinnar", "borginni", "borgina"], why: "Genitive borgar plus -innar." },
          { q: "Hér er ___ (saga)", a: "sagan", opts: ["sagan", "söguna", "sögunni"], why: "Weak feminine nominative: saga plus -n." },
          { q: "Ég les ___ (saga)", a: "söguna", opts: ["sagan", "söguna", "sögunni"], why: "Accusative sögu plus -na." }
        ]
      },
      {
        n: 3,
        label: "Neuter nouns",
        items: [
          { q: "Hér er ___ (borð)", a: "borðið", why: "Neuter nominative: borð plus -ið." },
          { q: "Ég sé ___ (borð)", a: "borðið", why: "The neuter accusative is identical, so the form does not move." },
          { q: "Bókin liggur á ___ (borð)", a: "borðinu", why: "Static á is dative: borði plus -nu." },
          { q: "Þetta er fótur ___ (borð)", a: "borðsins", why: "Genitive borðs plus -ins." },
          { q: "Hér er ___ (hús)", a: "húsið", why: "hús plus -ið." },
          { q: "Þetta er þak ___ (hús)", a: "hússins", why: "Genitive húss plus -ins." }
        ]
      },
      {
        n: 4,
        label: "Mixed genders",
        items: [
          { q: "Hér er ___ (klukka)", a: "klukkan", why: "Weak feminine nominative: klukka plus -n." },
          { q: "Ég opna ___ (gluggi)", a: "gluggann", why: "Accusative glugga plus -nn." },
          { q: "Barnið sefur í ___ (rúm)", a: "rúminu", why: "Static í is dative: rúmi plus -nu." },
          { q: "Þetta er titill ___ (bók)", a: "bókarinnar", why: "Genitive bókar plus -innar." },
          { q: "Anna talar við ___ (kennari)", a: "kennarann", why: "við takes the accusative: kennara plus -nn." },
          { q: "Lúlli situr á ___ (þak)", a: "þakinu", why: "Static á is dative: þaki plus -nu." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna opnar ___ og hleypir köldu lofti inn í stofuna (gluggi)", a: "gluggann", why: "Object of opna: accusative glugga plus -nn." },
          { q: "Sóley kemur alltaf fyrst í ___ á morgnana (bakarí)", a: "bakaríið", why: "Motion into a place is í plus the accusative, which in the neuter looks like the nominative: bakaríið." },
          { q: "Jónas gleymdi ___ sínum í strætó í gær (hattur)", a: "hattinum", why: "gleyma governs the dative: hatti plus -num." },
          { q: "Nafn ___ stendur á stóru skilti við dyrnar (búð)", a: "búðarinnar", why: "The possessor is genitive: búðar plus -innar." },
          { q: "Á laugardögum fer Anna með ___ niður að tjörninni (barn)", a: "barninu", why: "með a companion takes the dative: barni plus -nu." },
          { q: "Lúlli flaug beint inn um ___ hjá Jónasi (eldhúsgluggi)", a: "eldhúsgluggann", why: "inn um takes the accusative: eldhúsglugga plus -nn." }
        ]
      }
    ]
  }
];

export default drills;
