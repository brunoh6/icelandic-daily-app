// Lundi — drill sets: prepositions and verb government
// 10 sets × 5 rounds × 6 items. One instruction per set, repeated on every round.
// Rounds rise in difficulty: cued single words → bare noun phrases → adjective phrases / minimal pairs.

export const drills = [

  // ─────────────────────────────────────────────────────────────
  // 1. prep-acc-only
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-acc-only",
    title: "Prepositions that always take the accusative",
    cat: "prepositions",
    cefr: "A1",
    unit: 7,
    instruction: "Put the word in brackets into the case this preposition demands.",
    example: { q: "Anna talar um ___ (skólinn)", a: "skólann" },
    rounds: [
      {
        n: 1,
        label: "um + masculine nouns",
        items: [
          { q: "Jónas talar um ___ (bíllinn)", a: "bílinn",
            opts: ["bíllinn", "bílinn", "bílnum"],
            why: "um is always accusative: bíllinn → bílinn." },
          { q: "Anna hugsar um ___ (skólinn)", a: "skólann",
            opts: ["skólinn", "skólanum", "skólann"],
            why: "Weak masculine -i takes -ann in the accusative: skólinn → skólann." },
          { q: "Við tölum um ___ (dagurinn)", a: "daginn",
            opts: ["daginn", "deginum", "dagurinn"],
            why: "dagur drops the -ur: dag + inn = daginn." },
          { q: "Sóley spyr um ___ (maðurinn)", a: "manninn",
            opts: ["manninum", "manninn", "maðurinn"],
            why: "maður is irregular: accusative mann, with the article manninn." },
          { q: "Þau tala um ___ (garðurinn)", a: "garðinn",
            opts: ["garðinum", "garðurinn", "garðinn"],
            why: "Strong masculine -ur → -inn in the accusative." },
          { q: "Ég spyr um ___ (lykillinn)", a: "lykilinn",
            opts: ["lykilinn", "lyklinum", "lykillinn"],
            why: "The accusative lykil keeps both l-sounds: lykil + inn." }
        ]
      },
      {
        n: 2,
        label: "um + feminine nouns",
        items: [
          { q: "Anna talar um ___ (borgin)", a: "borgina",
            opts: ["borginni", "borgina", "borgin"],
            why: "Feminine -in becomes -ina in the accusative." },
          { q: "Sóley talar um ___ (búðin)", a: "búðina",
            opts: ["búðina", "búðinni", "búðarinnar"],
            why: "búð is a strong feminine: the bare form plus -ina." },
          { q: "Við tölum um ___ (kirkjan)", a: "kirkjuna",
            opts: ["kirkjan", "kirkjunni", "kirkjuna"],
            why: "Weak feminine -a → -u, then the article: kirkju + na." },
          { q: "Jónas spyr um ___ (bókin)", a: "bókina",
            opts: ["bókinni", "bókina", "bókarinnar"],
            why: "bók has no ending in the accusative, so only the article changes." },
          { q: "Ég hugsa um ___ (vinnan)", a: "vinnuna",
            opts: ["vinnuna", "vinnunni", "vinnan"],
            why: "Weak feminine again: vinna → vinnu → vinnuna." },
          { q: "Þau tala um ___ (helgin)", a: "helgina",
            opts: ["helginni", "helgin", "helgina"],
            why: "helgi is feminine; um helgina is the standard way to say during the weekend." }
        ]
      },
      {
        n: 3,
        label: "Neuters and plurals",
        items: [
          { q: "Anna talar um ___ (húsið)", a: "húsið",
            why: "Neuter nouns look identical in the nominative and the accusative." },
          { q: "Sóley spyr um ___ (barnið)", a: "barnið",
            why: "Still neuter, still unchanged — but it really is accusative after um." },
          { q: "Við tölum um ___ (safnið)", a: "safnið",
            why: "safn is neuter; no visible ending, only the case label changes." },
          { q: "Jónas talar um ___ (bílarnir)", a: "bílana",
            why: "Masculine plural accusative is -ana with the article: bílarnir → bílana." },
          { q: "Anna spyr um ___ (bækurnar)", a: "bækurnar",
            why: "Feminine plurals are the same in the nominative and the accusative." },
          { q: "Lúlli hugsar um ___ (börnin)", a: "börnin",
            why: "Neuter plural with the article stays börnin in the accusative." }
        ]
      },
      {
        n: 4,
        label: "gegnum, kringum, við",
        items: [
          { q: "Við göngum gegnum ___ (garðurinn)", a: "garðinn",
            why: "gegnum only ever takes the accusative." },
          { q: "Lúlli flýgur kringum ___ (kirkjan)", a: "kirkjuna",
            why: "kringum is accusative: kirkja → kirkju → kirkjuna." },
          { q: "Anna bíður við ___ (glugginn)", a: "gluggann",
            why: "við meaning at or by takes the accusative." },
          { q: "Rútan keyrir gegnum ___ (bærinn)", a: "bæinn",
            why: "bær has the accusative bæ, so with the article bæinn." },
          { q: "Sóley situr við ___ (borðið)", a: "borðið",
            why: "Neuter shows no ending, but við still governs the accusative." },
          { q: "Þau ganga kringum ___ (höfnin)", a: "höfnina",
            why: "höfn keeps its ö in the accusative: höfnina." }
        ]
      },
      {
        n: 5,
        label: "Adjective and number phrases",
        items: [
          { q: "Anna talar um ___ (gamall bíll)", a: "gamlan bíl",
            why: "Masculine accusative adjective is -an, and gamall loses its second a: gamlan." },
          { q: "Við göngum gegnum ___ (stór garður)", a: "stóran garð",
            why: "stór + an, and the noun drops -ur in the accusative." },
          { q: "Jónas hugsar um ___ (ný vinna)", a: "nýja vinnu",
            why: "Feminine accusative adjective is -a: nýja, with vinnu." },
          { q: "Sóley spyr um ___ (lítið barn)", a: "lítið barn",
            why: "Neuter accusative looks like the nominative, adjective included." },
          { q: "Lúlli flýgur kringum ___ (hvítt hús)", a: "hvítt hús",
            why: "Neuter again: no ending anywhere, but the case is accusative." },
          { q: "Þau tala um ___ (þrír dagar)", a: "þrjá daga",
            why: "þrír becomes þrjá in the masculine accusative plural." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. prep-dat-only
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-dat-only",
    title: "Prepositions that always take the dative",
    cat: "prepositions",
    cefr: "A1",
    unit: 7,
    instruction: "Put the word in brackets into the dative — these prepositions never take anything else.",
    example: { q: "Anna kemur frá ___ (Ísland)", a: "Íslandi" },
    rounds: [
      {
        n: 1,
        label: "frá, úr, hjá + masculine nouns",
        items: [
          { q: "Anna kemur úr ___ (skólinn)", a: "skólanum",
            opts: ["skólann", "skólanum", "skólans"],
            why: "úr is always dative: skólinn → skólanum." },
          { q: "Jónas fer út úr ___ (bíllinn)", a: "bílnum",
            opts: ["bílinn", "bílsins", "bílnum"],
            why: "bíll has the dative bíl, so with the article bílnum." },
          { q: "Lúlli flýgur frá ___ (garðurinn)", a: "garðinum",
            opts: ["garðinum", "garðinn", "garðsins"],
            why: "frá is always dative: garði + num." },
          { q: "Sóley kemur frá ___ (bærinn)", a: "bænum",
            opts: ["bæinn", "bænum", "bæjarins"],
            why: "The dative of bær is bæ, giving bænum with the article." },
          { q: "Barnið kemur frá ___ (læknirinn)", a: "lækninum",
            opts: ["læknirinn", "lækninn", "lækninum"],
            why: "læknir has the dative lækni, so lækninum." },
          { q: "Ég fæ bréf frá ___ (kennarinn)", a: "kennaranum",
            opts: ["kennaranum", "kennarann", "kennarans"],
            why: "Weak masculine -i takes -anum in the dative with the article." }
        ]
      },
      {
        n: 2,
        label: "frá, úr, hjá + feminine nouns",
        items: [
          { q: "Anna kemur úr ___ (búðin)", a: "búðinni",
            opts: ["búðina", "búðinni", "búðarinnar"],
            why: "Feminine dative with the article ends in -inni." },
          { q: "Við komum frá ___ (borgin)", a: "borginni",
            opts: ["borgin", "borginni", "borgina"],
            why: "borg has no ending in the dative, so only -inni is added." },
          { q: "Sóley kemur úr ___ (kirkjan)", a: "kirkjunni",
            opts: ["kirkjunni", "kirkjuna", "kirkjunnar"],
            why: "Weak feminine: kirkju + nni." },
          { q: "Jónas kemur frá ___ (vinnan)", a: "vinnunni",
            opts: ["vinnuna", "vinnunnar", "vinnunni"],
            why: "vinna → vinnu → vinnunni in the dative." },
          { q: "Ég fæ kaffi hjá ___ (mamma)", a: "mömmu",
            opts: ["mamma", "mömmu", "mömmum"],
            why: "hjá is dative; weak feminine -a → -u, and the a turns into ö before it." },
          { q: "Lúlli kemur úr ___ (sundlaugin)", a: "sundlauginni",
            opts: ["sundlaugin", "sundlaugina", "sundlauginni"],
            why: "Same feminine pattern as borginni." }
        ]
      },
      {
        n: 3,
        label: "Neuters and plurals",
        items: [
          { q: "Anna kemur úr ___ (húsið)", a: "húsinu",
            why: "Neuter dative with the article is -inu." },
          { q: "Barnið kemur frá ___ (safnið)", a: "safninu",
            why: "safn → safni → safninu." },
          { q: "Jónas kemur úr ___ (herbergið)", a: "herberginu",
            why: "herbergi already ends in -i, so the article simply adds -nu." },
          { q: "Bollinn dettur af ___ (borðið)", a: "borðinu",
            why: "af is always dative, and neuter takes -inu." },
          { q: "Ég fæ bréf frá ___ (börnin)", a: "börnunum",
            why: "Every dative plural ends in -um; with the article, -unum." },
          { q: "Sóley kemur úr ___ (búðirnar)", a: "búðunum",
            why: "Dative plural is -um for all three genders: búðunum." }
        ]
      },
      {
        n: 4,
        label: "hjá, að, nálægt, handa",
        items: [
          { q: "Anna býr hjá ___ (amma)", a: "ömmu",
            why: "hjá takes the dative; amma → ömmu with the u-shift a → ö." },
          { q: "Við göngum að ___ (kirkjan)", a: "kirkjunni",
            why: "að meaning towards is always dative." },
          { q: "Hótelið er nálægt ___ (höfnin)", a: "höfninni",
            why: "nálægt takes the dative; höfn has no ending, so höfninni." },
          { q: "Ég keypti gjöf handa ___ (systir mín)", a: "systur minni",
            why: "handa is dative; systir → systur and minn → minni." },
          { q: "Lúlli situr hjá ___ (glugginn)", a: "glugganum",
            why: "Weak masculine dative with the article: glugga + num." },
          { q: "Sóley gengur meðfram ___ (gatan)", a: "götunni",
            why: "meðfram is dative; gata → götu, then -nni." }
        ]
      },
      {
        n: 5,
        label: "Adjective and number phrases",
        items: [
          { q: "Anna kemur frá ___ (lítið land)", a: "litlu landi",
            why: "Neuter dative adjective is -u, and lítill loses its second syllable: litlu." },
          { q: "Jónas býr hjá ___ (gamall maður)", a: "gömlum manni",
            why: "Masculine dative -um pulls a → ö: gamall → gömlum." },
          { q: "Við komum úr ___ (stór borg)", a: "stórri borg",
            why: "Feminine dative adjective ends in -ri: stórri." },
          { q: "Ég fæ bréf frá ___ (þrír vinir)", a: "þremur vinum",
            why: "þrír has the dative þremur, and every dative plural noun ends in -um." },
          { q: "Barnið kemur frá ___ (nýr skóli)", a: "nýjum skóla",
            why: "nýr adds a j before -um: nýjum; skóli stays skóla." },
          { q: "Sóley gengur meðfram ___ (löng gata)", a: "langri götu",
            why: "The ö in löng is only there in the nominative: dative langri götu." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3. prep-gen-only
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-gen-only",
    title: "Prepositions that always take the genitive",
    cat: "prepositions",
    cefr: "A2",
    unit: 7,
    instruction: "Put the word in brackets into the genitive — that is the only case these prepositions allow.",
    example: { q: "Við förum til ___ (bærinn)", a: "bæjarins" },
    rounds: [
      {
        n: 1,
        label: "til + masculine nouns and names",
        items: [
          { q: "Anna fer til ___ (skólinn)", a: "skólans",
            opts: ["skólann", "skólans", "skólanum"],
            why: "til is always genitive: weak masculine -i → -ans." },
          { q: "Jónas keyrir til ___ (bærinn)", a: "bæjarins",
            opts: ["bænum", "bæjarins", "bæinn"],
            why: "bær has the genitive bæjar, so bæjarins with the article." },
          { q: "Sóley fer til ___ (læknirinn)", a: "læknisins",
            opts: ["læknisins", "lækninum", "lækninn"],
            why: "læknir → læknis, then the genitive article -ins." },
          { q: "Barnið hleypur til ___ (pabbi)", a: "pabba",
            opts: ["pabbi", "pabba", "pabbanum"],
            why: "Weak masculine nouns end in -a in every case but the nominative." },
          { q: "Lúlli flýgur til ___ (Noregur)", a: "Noregs",
            opts: ["Noregi", "Noregs", "Noreg"],
            why: "Country names in -ur take the genitive -s." },
          { q: "Jónas flýgur til ___ (Ísland)", a: "Íslands",
            opts: ["Íslandi", "Ísland", "Íslands"],
            why: "Neuter genitive -s: til Íslands." }
        ]
      },
      {
        n: 2,
        label: "til + feminine nouns and names",
        items: [
          { q: "Barnið hleypur til ___ (mamma)", a: "mömmu",
            opts: ["mamma", "mömmu", "mömmunnar"],
            why: "Weak feminine nouns end in -u in the accusative, dative and genitive alike." },
          { q: "Anna fer til ___ (amma)", a: "ömmu",
            opts: ["ömmu", "amma", "ömmum"],
            why: "Same weak pattern, with a → ö before the u." },
          { q: "Jónas fer til ___ (systir)", a: "systur",
            opts: ["systir", "systur", "systurinnar"],
            why: "Family words in -ir have systur in all three oblique cases." },
          { q: "Rútan fer til ___ (borgin)", a: "borgarinnar",
            opts: ["borginni", "borgarinnar", "borgina"],
            why: "Feminine genitive with the article is -arinnar here: borgar + innar." },
          { q: "Við göngum til ___ (kirkjan)", a: "kirkjunnar",
            opts: ["kirkjunnar", "kirkjunni", "kirkjuna"],
            why: "Weak feminine genitive with the article ends in -unnar." },
          { q: "Sóley flýgur til ___ (Reykjavík)", a: "Reykjavíkur",
            opts: ["Reykjavíkur", "Reykjavík", "Reykjavíkinni"],
            why: "Reykjavík is feminine and takes the genitive -ur." }
        ]
      },
      {
        n: 3,
        label: "án and milli",
        items: [
          { q: "Anna drekkur kaffi án ___ (sykur)", a: "sykurs",
            why: "án is genitive; sykur is masculine with the genitive sykurs." },
          { q: "Jónas borðar brauð án ___ (smjör)", a: "smjörs",
            why: "Neuter genitive -s: án smjörs." },
          { q: "Við förum til ___ (safnið)", a: "safnsins",
            why: "Neuter with the article: safns + ins." },
          { q: "Barnið sefur án ___ (teppið)", a: "teppisins",
            why: "teppi is neuter in -i, genitive teppis, with the article teppisins." },
          { q: "Milli ___ (húsin) er lítill garður", a: "húsanna",
            why: "milli is genitive; the genitive plural article is -anna." },
          { q: "Kaffihúsið er á milli ___ (bankarnir)", a: "bankanna",
            why: "Weak masculine plural genitive with the article is also -anna." }
        ]
      },
      {
        n: 4,
        label: "vegna, auk, innan, utan, meðal",
        items: [
          { q: "Við förum ekki út vegna ___ (veðrið)", a: "veðursins",
            why: "vegna is genitive; veður has the genitive veðurs." },
          { q: "Anna er heima vegna ___ (barnið)", a: "barnsins",
            why: "barn → barns, then the article -ins." },
          { q: "Búðin opnar innan ___ (klukkutími)", a: "klukkutíma",
            why: "innan is genitive, and weak masculine nouns end in -a." },
          { q: "Jónas býr utan ___ (bærinn)", a: "bæjarins",
            why: "utan takes the genitive just like til." },
          { q: "Auk ___ (kaffið) fékk hann köku", a: "kaffisins",
            why: "auk is genitive; kaffi → kaffis → kaffisins." },
          { q: "Lúlli er vinsæll meðal ___ (börnin)", a: "barnanna",
            why: "meðal is genitive, and the neuter plural article is -anna." }
        ]
      },
      {
        n: 5,
        label: "Adjective and number phrases",
        items: [
          { q: "Anna fer til ___ (stór borg)", a: "stórrar borgar",
            why: "Feminine genitive adjective ends in -rar: stórrar borgar." },
          { q: "Jónas kemur ekki vegna ___ (vont veður)", a: "vonds veðurs",
            why: "Neuter genitive adjective ends in -s, matching the noun." },
          { q: "Kaffihúsið er milli ___ (tvær búðir)", a: "tveggja búða",
            why: "tveir has the genitive tveggja, and the genitive plural of búð is búða." },
          { q: "Þau ferðast til ___ (mörg lönd)", a: "margra landa",
            why: "Genitive plural adjective is -ra: margra landa." },
          { q: "Anna kemur heim án ___ (nýja bókin)", a: "nýju bókarinnar",
            why: "After the article the adjective is weak: nýju, with bókarinnar." },
          { q: "Sóley vinnur alla daga vegna ___ (nýja starfið)", a: "nýja starfsins",
            why: "Weak adjective nýja plus the neuter genitive starfsins." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4. prep-i-motion-location
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-i-motion-location",
    title: "í: into or in?",
    cat: "prepositions",
    cefr: "A1",
    unit: 7,
    instruction: "Decide whether í here means into (accusative) or in (dative), and put the bracketed word into that case.",
    example: { q: "Barnið hleypur í ___ (garðurinn)", a: "garðinn" },
    rounds: [
      {
        n: 1,
        label: "Movement only — accusative",
        items: [
          { q: "Anna fer í ___ (skólinn)", a: "skólann",
            opts: ["skólanum", "skólann", "skólans"],
            why: "fara is movement, so í takes the accusative." },
          { q: "Jónas fer í ___ (búðin)", a: "búðina",
            opts: ["búðina", "búðinni", "búðin"],
            why: "Going into the shop is a change of place: accusative." },
          { q: "Sóley hleypur í ___ (bakaríið)", a: "bakaríið",
            opts: ["bakaríinu", "bakaríið", "bakarísins"],
            why: "Neuter hides the ending, but hlaupa í is still accusative." },
          { q: "Við förum í ___ (bærinn)", a: "bæinn",
            opts: ["bænum", "bæjarins", "bæinn"],
            why: "fara í bæinn — heading downtown, so accusative." },
          { q: "Lúlli flýgur í ___ (glugginn)", a: "gluggann",
            opts: ["gluggann", "glugganum", "glugginn"],
            why: "Flying into the window is movement: accusative gluggann." },
          { q: "Barnið hleypur í ___ (herbergið)", a: "herbergið",
            opts: ["herberginu", "herbergið", "herbergisins"],
            why: "Neuter shows nothing, but the case after this verb is accusative." }
        ]
      },
      {
        n: 2,
        label: "Staying put — dative",
        items: [
          { q: "Anna er í ___ (skólinn)", a: "skólanum",
            opts: ["skólann", "skólanum", "skólinn"],
            why: "vera is no movement at all, so í takes the dative." },
          { q: "Jónas vinnur í ___ (búðin)", a: "búðinni",
            opts: ["búðinni", "búðina", "búðin"],
            why: "Working somewhere is a location: dative." },
          { q: "Sóley bakar í ___ (eldhúsið)", a: "eldhúsinu",
            opts: ["eldhúsið", "eldhúsinu", "eldhússins"],
            why: "The baking happens inside, nothing moves in: dative." },
          { q: "Við búum í ___ (bærinn)", a: "bænum",
            opts: ["bæinn", "bænum", "bæjarins"],
            why: "búa is static, so bænum." },
          { q: "Lúlli situr í ___ (garðurinn)", a: "garðinum",
            opts: ["garðinum", "garðinn", "garðsins"],
            why: "sitja is a position, not a journey: dative." },
          { q: "Barnið sefur í ___ (rúmið)", a: "rúminu",
            opts: ["rúmið", "rúminu", "rúmsins"],
            why: "Sleeping in bed is location: rúminu." }
        ]
      },
      {
        n: 3,
        label: "Mixed — read the verb",
        items: [
          { q: "Anna hleypur í ___ (búðin)", a: "búðina",
            why: "hlaupa í means run into: accusative." },
          { q: "Jónas bíður í ___ (bíllinn)", a: "bílnum",
            why: "bíða is waiting in one spot: dative." },
          { q: "Sóley leggur brauðið í ___ (pokinn)", a: "pokann",
            why: "leggja moves the bread, so accusative." },
          { q: "Kaffið er í ___ (eldhúsið)", a: "eldhúsinu",
            why: "vera again — nothing moves: dative." },
          { q: "Við setjumst í ___ (sófinn)", a: "sófann",
            why: "setjast is sitting down, a change of position: accusative." },
          { q: "Börnin leika sér í ___ (sundlaugin)", a: "sundlauginni",
            why: "The playing takes place inside the pool: dative." }
        ]
      },
      {
        n: 4,
        label: "Clothes and stretches of time",
        items: [
          { q: "Anna er í ___ (rauð peysa)", a: "rauðri peysu",
            why: "vera í means wear and takes the dative: rauðri peysu." },
          { q: "Jónas fer í ___ (nýir skór)", a: "nýja skó",
            why: "fara í means put on and takes the accusative: nýja skó." },
          { q: "Sóley er í ___ (blár kjóll)", a: "bláum kjól",
            why: "Wearing something is dative, so bláum kjól." },
          { q: "Við verðum á Íslandi í ___ (þrír dagar)", a: "þrjá daga",
            why: "í for a stretch of time is accusative: í þrjá daga." },
          { q: "Ég fer í ___ (sturta) á morgnana", a: "sturtu",
            why: "fara í sturtu is fixed and accusative." },
          { q: "Barnið sofnaði í ___ (bíllinn)", a: "bílnum",
            why: "sofna happens where the child already is: dative." }
        ]
      },
      {
        n: 5,
        label: "Minimal pairs — only the verb decides",
        items: [
          { q: "Anna gengur í ___ (skólinn)", a: "skólann",
            why: "ganga í skólann is walking there — accusative." },
          { q: "Anna lærir í ___ (skólinn)", a: "skólanum",
            why: "læra í skólanum happens inside — dative. Same noun, same preposition, different verb." },
          { q: "Sóley hleypur í ___ (búðin)", a: "búðina",
            why: "hlaupa takes her from outside to inside — accusative." },
          { q: "Sóley vinnur í ___ (búðin)", a: "búðinni",
            why: "vinna keeps her where she is — dative." },
          { q: "Lúlli flýgur í ___ (garðurinn)", a: "garðinn",
            why: "fljúga í means fly into the garden — accusative." },
          { q: "Lúlli sefur í ___ (garðurinn)", a: "garðinum",
            why: "sofa is pure location — dative. The preposition never told you; the verb did." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 5. prep-a-motion-location
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-a-motion-location",
    title: "á: onto or on?",
    cat: "prepositions",
    cefr: "A1",
    unit: 7,
    instruction: "Decide whether á points at a goal (accusative) or a place (dative), and put the bracketed word into that case.",
    example: { q: "Bókin liggur á ___ (borðið)", a: "borðinu" },
    rounds: [
      {
        n: 1,
        label: "Where something is — dative",
        items: [
          { q: "Bókin er á ___ (borðið)", a: "borðinu",
            opts: ["borðið", "borðinu", "borðsins"],
            why: "Nothing moves, so á takes the dative: borðinu." },
          { q: "Anna vinnur á ___ (kaffihúsið)", a: "kaffihúsinu",
            opts: ["kaffihúsinu", "kaffihúsið", "kaffihússins"],
            why: "Working somewhere is a location: dative." },
          { q: "Jónas er á ___ (spítalinn)", a: "spítalanum",
            opts: ["spítalann", "spítalinn", "spítalanum"],
            why: "vera á + dative for being at a place." },
          { q: "Sóley stendur á ___ (gólfið)", a: "gólfinu",
            opts: ["gólfinu", "gólfið", "gólfsins"],
            why: "standa is a position, not a move: dative." },
          { q: "Myndin hangir á ___ (veggurinn)", a: "veggnum",
            opts: ["vegginn", "veggnum", "veggurinn"],
            why: "hanga is static; the dative of veggur is vegg, so veggnum." },
          { q: "Við bíðum á ___ (stoppistöðin)", a: "stoppistöðinni",
            opts: ["stoppistöðina", "stoppistöðinni", "stoppistöðin"],
            why: "Waiting at a stop is location: dative." }
        ]
      },
      {
        n: 2,
        label: "Where something goes — accusative",
        items: [
          { q: "Anna setur bollann á ___ (borðið)", a: "borðið",
            opts: ["borðinu", "borðið", "borðsins"],
            why: "setja moves the cup, so accusative — even though neuter looks the same." },
          { q: "Jónas fer á ___ (fundurinn)", a: "fundinn",
            opts: ["fundinn", "fundinum", "fundurinn"],
            why: "fara á + accusative for heading to an event." },
          { q: "Sóley hengir myndina á ___ (veggurinn)", a: "vegginn",
            opts: ["veggnum", "vegginn", "veggjarins"],
            why: "hengja puts the picture there: accusative vegginn." },
          { q: "Lúlli sest á ___ (stóllinn)", a: "stólinn",
            opts: ["stólnum", "stóllinn", "stólinn"],
            why: "setjast is a change of position: accusative." },
          { q: "Barnið fer á ___ (spítalinn)", a: "spítalann",
            opts: ["spítalann", "spítalanum", "spítalinn"],
            why: "Going to hospital is movement: accusative." },
          { q: "Anna skrifar nafnið á ___ (miðinn)", a: "miðann",
            opts: ["miðinn", "miðanum", "miðann"],
            why: "The writing lands on the ticket, so accusative miðann." }
        ]
      },
      {
        n: 3,
        label: "Mixed — read the verb",
        items: [
          { q: "Kaffið stendur á ___ (eldavélin)", a: "eldavélinni",
            why: "standa is static: dative." },
          { q: "Jónas leggur lyklana á ___ (borðið)", a: "borðið",
            why: "leggja is movement onto: accusative." },
          { q: "Anna er á ___ (leiðin) heim", a: "leiðinni",
            why: "vera á leiðinni is a fixed dative phrase." },
          { q: "Sóley setur kökuna á ___ (diskurinn)", a: "diskinn",
            why: "setja again: accusative diskinn." },
          { q: "Við hittumst á ___ (torgið)", a: "torginu",
            why: "The meeting happens at the square: dative." },
          { q: "Lúlli flýgur út á ___ (höfnin)", a: "höfnina",
            why: "út á plus a flight is movement: accusative höfnina." }
        ]
      },
      {
        n: 4,
        label: "Days, habits and events",
        items: [
          { q: "Anna fer í bíó á ___ (föstudagurinn)", a: "föstudaginn",
            why: "One particular day takes the accusative: á föstudaginn." },
          { q: "Jónas vinnur á ___ (laugardagar)", a: "laugardögum",
            why: "A repeated habit takes the dative plural, with a → ö: laugardögum." },
          { q: "Sóley vinnur á ___ (bakaríið)", a: "bakaríinu",
            why: "A workplace is a location: dative bakaríinu." },
          { q: "Lúlli sefur á ___ (dagurinn)", a: "daginn",
            why: "á daginn means during the day and is accusative." },
          { q: "Anna er í skólanum á ___ (virkir dagar)", a: "virkum dögum",
            why: "Again a habit: dative plural virkum dögum." },
          { q: "Anna og Jónas fara á ___ (tónleikar)", a: "tónleika",
            why: "fara á is accusative; tónleikar is a plural-only noun: tónleika." }
        ]
      },
      {
        n: 5,
        label: "Minimal pairs — only the verb decides",
        items: [
          { q: "Anna setur bókina á ___ (hillan)", a: "hilluna",
            why: "setja moves the book to the shelf: accusative hilluna." },
          { q: "Bókin stendur á ___ (hillan)", a: "hillunni",
            why: "standa leaves it where it is: dative hillunni." },
          { q: "Jónas hengir jakkann á ___ (stóllinn)", a: "stólinn",
            why: "hengja is the act of putting it there: accusative." },
          { q: "Jakkinn hangir á ___ (stóllinn)", a: "stólnum",
            why: "hanga is the result: dative. Same noun, same preposition." },
          { q: "Lúlli sest á ___ (bekkurinn)", a: "bekkinn",
            why: "setjast lands him on the bench: accusative." },
          { q: "Lúlli situr á ___ (bekkurinn)", a: "bekknum",
            why: "sitja is where he already is: dative bekknum." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 6. prep-med-case
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-med-case",
    title: "með: dative or accusative?",
    cat: "prepositions",
    cefr: "A2",
    unit: 7,
    instruction: "Choose the case með needs here and put the bracketed word into it.",
    example: { q: "Anna skrifar með ___ (penninn)", a: "pennanum" },
    rounds: [
      {
        n: 1,
        label: "Tools and transport — dative",
        items: [
          { q: "Anna skrifar með ___ (blýanturinn)", a: "blýantinum",
            opts: ["blýantinn", "blýantinum", "blýanturinn"],
            why: "An instrument you use takes the dative." },
          { q: "Jónas fer með ___ (rútan)", a: "rútunni",
            opts: ["rútunni", "rútuna", "rútan"],
            why: "Means of transport is dative: með rútunni." },
          { q: "Sóley sker kökuna með ___ (hnífurinn)", a: "hnífnum",
            opts: ["hnífinn", "hnífnum", "hnífurinn"],
            why: "hnífur has the dative hníf, so hnífnum." },
          { q: "Við förum með ___ (flugvélin)", a: "flugvélinni",
            opts: ["flugvélina", "flugvélin", "flugvélinni"],
            why: "Travelling by plane is dative." },
          { q: "Barnið borðar með ___ (skeiðin)", a: "skeiðinni",
            opts: ["skeiðinni", "skeiðina", "skeiðin"],
            why: "A spoon is a tool: dative skeiðinni." },
          { q: "Anna opnar hurðina með ___ (lykillinn)", a: "lyklinum",
            opts: ["lykilinn", "lyklinum", "lykillinn"],
            why: "The dative of lykill drops the second i: lykli, so lyklinum." }
        ]
      },
      {
        n: 2,
        label: "People who come along — dative",
        items: [
          { q: "Anna kemur með ___ (Jónas)", a: "Jónasi",
            opts: ["Jónas", "Jónasi", "Jónasar"],
            why: "A person coming of their own will takes the dative: Jónasi." },
          { q: "Ég fer í bíó með ___ (vinkona mín)", a: "vinkonu minni",
            opts: ["vinkonu minni", "vinkonu mína", "vinkona mín"],
            why: "Company is dative: vinkonu minni." },
          { q: "Jónas gengur heim með ___ (Anna)", a: "Önnu",
            opts: ["Anna", "Önnu", "Önnum"],
            why: "Anna becomes Önnu outside the nominative — here the dative." },
          { q: "Barnið kemur með ___ (pabbi sinn)", a: "pabba sínum",
            opts: ["pabba sinn", "pabba sínum", "pabbi sinn"],
            why: "Dad walks in on his own legs, so dative pabba sínum." },
          { q: "Við borðum með ___ (þau)", a: "þeim",
            opts: ["þau", "þeim", "þeirra"],
            why: "The dative of þau is þeim." },
          { q: "Sóley vinnur með ___ (bróðir minn)", a: "bróður mínum",
            opts: ["bróður minn", "bróðir minn", "bróður mínum"],
            why: "bróðir → bróður, and minn → mínum in the dative." }
        ]
      },
      {
        n: 3,
        label: "vera með = to have — accusative",
        items: [
          { q: "Anna er með ___ (lyklarnir)", a: "lyklana",
            why: "vera með means have or carry and takes the accusative: lyklana." },
          { q: "Jónas er með ___ (höfuðverkur)", a: "höfuðverk",
            why: "Illnesses use vera með + accusative: höfuðverk." },
          { q: "Sóley er með ___ (nýr sími)", a: "nýjan síma",
            why: "Accusative masculine: nýjan síma." },
          { q: "Ég er með ___ (peningarnir)", a: "peningana",
            why: "Masculine plural accusative with the article is -ana." },
          { q: "Lúlli er með ___ (fiskur) í goggnum", a: "fisk",
            why: "The puffin is carrying it, so accusative fisk." },
          { q: "Barnið er með ___ (rautt teppi)", a: "rautt teppi",
            why: "Neuter shows no ending, but the phrase is still accusative." }
        ]
      },
      {
        n: 4,
        label: "Bringing something vs coming along",
        items: [
          { q: "Anna kemur með ___ (kakan)", a: "kökuna",
            why: "She brings the cake, so accusative kökuna." },
          { q: "Anna kemur með ___ (bróðir sinn)", a: "bróður sínum",
            why: "A brother comes along by himself: dative bróður sínum." },
          { q: "Jónas kemur með ___ (hundurinn)", a: "hundinn",
            why: "The dog is brought, not a free companion: accusative hundinn." },
          { q: "Sóley kemur með ___ (brauðið)", a: "brauðið",
            why: "The bread is carried: accusative, invisible on a neuter noun." },
          { q: "Við förum með ___ (strætó)", a: "strætó",
            why: "strætó never changes shape, but the case here is dative." },
          { q: "Lúlli kemur með ___ (Anna)", a: "Önnu",
            why: "Anna walks in on her own, so dative Önnu." }
        ]
      },
      {
        n: 5,
        label: "Longer phrases",
        items: [
          { q: "Anna er með ___ (þrjár bækur) í töskunni", a: "þrjár bækur",
            why: "vera með is accusative; feminine plurals look the same as the nominative." },
          { q: "Anna kemur alltaf með ___ (litla systir sín)", a: "litlu systur sinni",
            why: "A sister who walks along is dative: litlu systur sinni." },
          { q: "Jónas skrifar bréfið með ___ (gamall penni)", a: "gömlum penna",
            why: "Instrument, so dative: gamall → gömlum, penni → penna." },
          { q: "Sóley kemur með ___ (heitt kaffi) handa okkur", a: "heitt kaffi",
            why: "She carries the coffee: accusative, unmarked on neuter." },
          { q: "Við ferðumst með ___ (íslenskt flugfélag)", a: "íslensku flugfélagi",
            why: "Transport is dative: íslensku flugfélagi." },
          { q: "Ég er með ___ (vondur höfuðverkur)", a: "vondan höfuðverk",
            why: "vera með + accusative: vondan höfuðverk." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 7. prep-time-expressions
  // ─────────────────────────────────────────────────────────────
  {
    id: "prep-time-expressions",
    title: "Prepositions in time expressions",
    cat: "prepositions",
    cefr: "A2",
    unit: 10,
    instruction: "Put the time expression in brackets into the case its preposition demands.",
    example: { q: "Ég verð hér í ___ (þrír dagar)", a: "þrjá daga" },
    rounds: [
      {
        n: 1,
        label: "í + how long — accusative",
        items: [
          { q: "Anna verður á Íslandi í ___ (þrír dagar)", a: "þrjá daga",
            opts: ["þrjá daga", "þremur dögum", "þrír dagar"],
            why: "í for a stretch of time is accusative: þrjá daga." },
          { q: "Jónas sefur í ___ (átta tímar)", a: "átta tíma",
            opts: ["átta tímum", "átta tíma", "átta tímar"],
            why: "Accusative plural of tími is tíma." },
          { q: "Sóley vinnur í ___ (fimm klukkutímar)", a: "fimm klukkutíma",
            opts: ["fimm klukkutíma", "fimm klukkutímum", "fimm klukkutímar"],
            why: "Same weak masculine plural: klukkutíma." },
          { q: "Við bíðum í ___ (tíu mínútur)", a: "tíu mínútur",
            opts: ["tíu mínútum", "tíu mínútur", "tíu mínútna"],
            why: "mínútur is feminine, and feminine plurals look alike in the nominative and accusative." },
          { q: "Lúlli var hér í ___ (ein vika)", a: "eina viku",
            opts: ["einni viku", "ein vika", "eina viku"],
            why: "Feminine accusative singular: eina viku." },
          { q: "Ég lærði íslensku í ___ (tvö ár)", a: "tvö ár",
            opts: ["tveimur árum", "tvö ár", "tveggja ára"],
            why: "Neuter plural is unchanged in the accusative: tvö ár." }
        ]
      },
      {
        n: 2,
        label: "fyrir + how long ago — dative",
        items: [
          { q: "Anna kom fyrir ___ (þrír dagar)", a: "þremur dögum",
            opts: ["þrjá daga", "þremur dögum", "þriggja daga"],
            why: "fyrir meaning ago is dative: þremur dögum." },
          { q: "Jónas hringdi fyrir ___ (ein klukkustund)", a: "einni klukkustund",
            opts: ["einni klukkustund", "eina klukkustund", "ein klukkustund"],
            why: "Feminine dative: einni klukkustund." },
          { q: "Við fluttum hingað fyrir ___ (tvö ár)", a: "tveimur árum",
            opts: ["tvö ár", "tveggja ára", "tveimur árum"],
            why: "Dative plural always ends in -um: tveimur árum." },
          { q: "Sóley byrjaði fyrir ___ (ein vika)", a: "einni viku",
            opts: ["eina viku", "einni viku", "ein vika"],
            why: "Same feminine dative as einni klukkustund." },
          { q: "Lúlli kom fyrir ___ (fimm mínútur)", a: "fimm mínútum",
            opts: ["fimm mínútur", "fimm mínútum", "fimm mínútna"],
            why: "Dative plural -um, even when the number does not change." },
          { q: "Búðin lokaði fyrir ___ (tíu dagar)", a: "tíu dögum",
            opts: ["tíu daga", "tíu dögum", "tíu dagar"],
            why: "dagur → dögum in the dative plural, with a → ö." }
        ]
      },
      {
        n: 3,
        label: "eftir and um — accusative",
        items: [
          { q: "Anna kemur eftir ___ (tveir dagar)", a: "tvo daga",
            why: "eftir for future time is accusative: tvo daga." },
          { q: "Við borðum eftir ___ (klukkutími)", a: "klukkutíma",
            why: "Weak masculine accusative: klukkutíma." },
          { q: "Jónas fer í frí um ___ (jólin)", a: "jólin",
            why: "um is always accusative; the neuter plural jólin does not change." },
          { q: "Sóley vinnur um ___ (helgin)", a: "helgina",
            why: "um helgina is the fixed way to say over the weekend." },
          { q: "Lúlli sefur um ___ (nóttin)", a: "nóttina",
            why: "Accusative of nótt is nótt, so nóttina with the article." },
          { q: "Skólinn byrjar eftir ___ (þrjár vikur)", a: "þrjár vikur",
            why: "Feminine plural is identical in the nominative and accusative." }
        ]
      },
      {
        n: 4,
        label: "Days, opening hours, habits",
        items: [
          { q: "Anna fer í sund á ___ (þriðjudagurinn)", a: "þriðjudaginn",
            why: "One specific day takes the accusative after á." },
          { q: "Sundlaugin er opin á ___ (sunnudagar)", a: "sunnudögum",
            why: "A repeated habit takes the dative plural: á sunnudögum." },
          { q: "Búðin er opin frá ___ (mánudagur) til föstudags", a: "mánudegi",
            why: "frá is dative, and dagur has the irregular dative degi: mánudegi." },
          { q: "Við erum í fríi til ___ (mánudagurinn)", a: "mánudagsins",
            why: "til is genitive: mánudagsins." },
          { q: "Anna æfir á ___ (kvöldin)", a: "kvöldin",
            why: "á kvöldin is a fixed accusative plural for something you do every evening." },
          { q: "Jónas verður heima frá ___ (hádegi)", a: "hádegi",
            why: "hádegi is neuter in -i and already looks like its own dative." }
        ]
      },
      {
        n: 5,
        label: "Longer time phrases",
        items: [
          { q: "Anna hefur búið hér í ___ (fjögur ár)", a: "fjögur ár",
            why: "Duration with í is accusative, and the neuter plural is unchanged." },
          { q: "Jónas kom heim fyrir ___ (hálftími)", a: "hálftíma",
            why: "fyrir is dative here, and weak masculine nouns end in -a." },
          { q: "Sóley vaknar klukkan sjö á ___ (virkir dagar)", a: "virkum dögum",
            why: "A habit takes the dative plural: virkum dögum." },
          { q: "Við hittumst eftir ___ (löng vika)", a: "langa viku",
            why: "eftir is accusative; the ö of löng only belongs to the nominative." },
          { q: "Lúlli var í Reykjavík um ___ (síðasta helgi)", a: "síðustu helgi",
            why: "um síðustu helgi — accusative, with the weak adjective síðustu." },
          { q: "Barnið svaf í ___ (tveir tímar)", a: "tvo tíma",
            why: "tveir becomes tvo in the masculine accusative." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 8. verb-dative-objects
  // ─────────────────────────────────────────────────────────────
  {
    id: "verb-dative-objects",
    title: "Verbs whose object is dative",
    cat: "cases",
    cefr: "A1",
    unit: 9,
    instruction: "These verbs take their object in the dative. Put the bracketed word into the dative.",
    example: { q: "Ég hjálpa ___ (mamma)", a: "mömmu" },
    rounds: [
      {
        n: 1,
        label: "hjálpa + pronouns",
        items: [
          { q: "Anna hjálpar ___ (ég)", a: "mér",
            opts: ["mig", "mér", "mín"],
            why: "hjálpa takes the dative, and the dative of ég is mér." },
          { q: "Jónas hjálpar ___ (þú)", a: "þér",
            opts: ["þér", "þig", "þín"],
            why: "The dative of þú is þér." },
          { q: "Sóley hjálpar ___ (hann)", a: "honum",
            opts: ["hann", "hans", "honum"],
            why: "The dative of hann is honum." },
          { q: "Við hjálpum ___ (hún)", a: "henni",
            opts: ["hana", "henni", "hennar"],
            why: "The dative of hún is henni." },
          { q: "Lúlli hjálpar ___ (þeir)", a: "þeim",
            opts: ["þá", "þeirra", "þeim"],
            why: "All three plural genders share the dative þeim." },
          { q: "Ég hjálpa ___ (þið)", a: "ykkur",
            opts: ["ykkur", "ykkar", "þið"],
            why: "ykkur serves as both accusative and dative — here it is the dative." }
        ]
      },
      {
        n: 2,
        label: "hjálpa, svara, loka, heilsa",
        items: [
          { q: "Anna hjálpar ___ (mamma sín)", a: "mömmu sinni",
            opts: ["mömmu sína", "mömmu sinni", "mamma sín"],
            why: "Dative: mömmu sinni." },
          { q: "Jónas svarar ___ (kennarinn)", a: "kennaranum",
            opts: ["kennarann", "kennaranum", "kennarinn"],
            why: "svara takes the dative of the person answered." },
          { q: "Sóley lokar ___ (hurðin)", a: "hurðinni",
            opts: ["hurðina", "hurðin", "hurðinni"],
            why: "loka takes a dative object: hurðinni." },
          { q: "Barnið svarar ___ (læknirinn)", a: "lækninum",
            opts: ["lækninum", "lækninn", "læknisins"],
            why: "Dative of læknir is lækni, so lækninum." },
          { q: "Anna heilsar ___ (nágranninn)", a: "nágrannanum",
            opts: ["nágrannann", "nágranninn", "nágrannanum"],
            why: "heilsa means greet and takes the dative." },
          { q: "Við hjálpum ___ (börnin)", a: "börnunum",
            opts: ["börnin", "börnunum", "barnanna"],
            why: "Dative plural with the article is -unum." }
        ]
      },
      {
        n: 3,
        label: "gleyma, týna, skila, ná, henda, breyta",
        items: [
          { q: "Jónas gleymdi ___ (lyklarnir)", a: "lyklunum",
            why: "gleyma takes the dative: lyklunum." },
          { q: "Anna týndi ___ (síminn)", a: "símanum",
            why: "týna takes the dative even though English says lose something." },
          { q: "Sóley skilar ___ (bókin)", a: "bókinni",
            why: "skila means give back and governs the dative." },
          { q: "Við náum ___ (rútan)", a: "rútunni",
            why: "ná takes the dative: rúta → rútu → rútunni." },
          { q: "Barnið hendir ___ (boltinn)", a: "boltanum",
            why: "henda takes the dative: boltanum." },
          { q: "Anna breytti ___ (nafnið sitt)", a: "nafninu sínu",
            why: "breyta means change something and takes the dative." }
        ]
      },
      {
        n: 4,
        label: "treysta, trúa, fylgja, mæta, bjarga, stela",
        items: [
          { q: "Ég treysti ___ (Jónas)", a: "Jónasi",
            why: "treysta takes the dative: Jónasi." },
          { q: "Anna trúir ___ (bróðir sinn)", a: "bróður sínum",
            why: "trúa plus a person is dative: bróður sínum." },
          { q: "Sóley fylgir ___ (gestirnir)", a: "gestunum",
            why: "fylgja means accompany and takes the dative plural gestunum." },
          { q: "Við mættum ___ (kennarinn) í bænum", a: "kennaranum",
            why: "mæta means run into someone and takes the dative." },
          { q: "Lúlli bjargar ___ (barnið)", a: "barninu",
            why: "bjarga takes the dative: barninu." },
          { q: "Einhver stal ___ (hjólið mitt)", a: "hjólinu mínu",
            why: "stela takes the dative of the thing stolen." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna hjálpar ___ (gömul kona) yfir götuna", a: "gamalli konu",
            why: "The feminine dative ending -ri turns into -li after the ll of gamall: gamalli konu." },
          { q: "Jónas svarar ___ (öll bréfin)", a: "öllum bréfunum",
            why: "Dative plural throughout: öllum bréfunum." },
          { q: "Sóley gleymdi ___ (nýja símanúmerið)", a: "nýja símanúmerinu",
            why: "Weak adjective nýja plus the neuter dative símanúmerinu." },
          { q: "Við skilum ___ (þrjár bækur) í dag", a: "þremur bókum",
            why: "þrjár becomes þremur, and bók has the dative plural bókum." },
          { q: "Lúlli fylgir ___ (litla stelpan) heim", a: "litlu stelpunni",
            why: "After the article the adjective is weak: litlu stelpunni." },
          { q: "Ég treysti ___ (þessi maður)", a: "þessum manni",
            why: "þessi has the dative þessum, and maður has manni." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 9. verb-genitive-objects
  // ─────────────────────────────────────────────────────────────
  {
    id: "verb-genitive-objects",
    title: "Verbs whose object is genitive",
    cat: "cases",
    cefr: "A2",
    unit: 11,
    instruction: "These verbs take their object in the genitive. Put the bracketed word into the genitive.",
    example: { q: "Ég sakna ___ (mamma)", a: "mömmu" },
    rounds: [
      {
        n: 1,
        label: "sakna + pronouns",
        items: [
          { q: "Anna saknar ___ (ég)", a: "mín",
            opts: ["mig", "mér", "mín"],
            why: "sakna takes the genitive, and the genitive of ég is mín." },
          { q: "Jónas saknar ___ (þú)", a: "þín",
            opts: ["þín", "þig", "þér"],
            why: "The genitive of þú is þín." },
          { q: "Sóley saknar ___ (hann)", a: "hans",
            opts: ["hann", "honum", "hans"],
            why: "The genitive of hann is hans." },
          { q: "Við söknum ___ (hún)", a: "hennar",
            opts: ["hana", "henni", "hennar"],
            why: "The genitive of hún is hennar." },
          { q: "Ég sakna ___ (þið)", a: "ykkar",
            opts: ["ykkur", "ykkar", "þið"],
            why: "ykkar is the genitive; ykkur is the accusative and dative." },
          { q: "Þau sakna ___ (við)", a: "okkar",
            opts: ["okkar", "okkur", "við"],
            why: "The genitive of við is okkar." }
        ]
      },
      {
        n: 2,
        label: "sakna and bíða + nouns",
        items: [
          { q: "Anna saknar ___ (mamma sín)", a: "mömmu sinnar",
            opts: ["mömmu sinni", "mömmu sinnar", "mamma sín"],
            why: "Genitive: mömmu sinnar." },
          { q: "Sóley bíður ___ (rútan)", a: "rútunnar",
            opts: ["rútuna", "rútunni", "rútunnar"],
            why: "bíða takes the genitive: weak feminine gives rútunnar." },
          { q: "Við bíðum ___ (sumarið)", a: "sumarsins",
            opts: ["sumarinu", "sumarsins", "sumarið"],
            why: "Neuter genitive with the article: sumars + ins." },
          { q: "Anna saknar ___ (bróðir sinn)", a: "bróður síns",
            opts: ["bróður sinn", "bróður sínum", "bróður síns"],
            why: "sinn has the masculine genitive síns." },
          { q: "Jónas saknar ___ (Ísland)", a: "Íslands",
            opts: ["Íslandi", "Íslands", "Ísland"],
            why: "Neuter genitive -s: Íslands." },
          { q: "Barnið bíður ___ (pabbi sinn)", a: "pabba síns",
            opts: ["pabba sinn", "pabba síns", "pabbi sinn"],
            why: "Weak masculine pabba plus the genitive síns." }
        ]
      },
      {
        n: 3,
        label: "njóta, leita, gæta",
        items: [
          { q: "Anna nýtur ___ (sumarið)", a: "sumarsins",
            why: "njóta takes the genitive: sumarsins." },
          { q: "Jónas leitar ___ (lyklarnir)", a: "lyklanna",
            why: "leita takes the genitive; the plural article is -anna." },
          { q: "Sóley gætir ___ (börnin)", a: "barnanna",
            why: "gæta means look after and takes the genitive plural barnanna." },
          { q: "Við njótum ___ (maturinn)", a: "matarins",
            why: "matur has the genitive matar, so matarins." },
          { q: "Lúlli leitar ___ (fiskurinn)", a: "fisksins",
            why: "fiskur → fisks → fisksins." },
          { q: "Anna leitar ___ (nýja vinnan)", a: "nýju vinnunnar",
            why: "Weak adjective nýju plus the feminine genitive vinnunnar." }
        ]
      },
      {
        n: 4,
        label: "minnast, krefjast and the rest",
        items: [
          { q: "Jónas minnist ___ (gamli tíminn)", a: "gamla tímans",
            why: "minnast takes the genitive: gamla tímans." },
          { q: "Sóley krefst ___ (svarið)", a: "svarsins",
            why: "krefjast means demand and takes the genitive svarsins." },
          { q: "Við njótum ___ (góða veðrið)", a: "góða veðursins",
            why: "veður has the genitive veðurs, and the adjective is weak after the article." },
          { q: "Anna gætir ___ (litla systir sín)", a: "litlu systur sinnar",
            why: "Feminine genitive: litlu systur sinnar." },
          { q: "Lúlli bíður ___ (nóttin)", a: "næturinnar",
            why: "nótt has the irregular genitive nætur, so næturinnar." },
          { q: "Jónas saknar ___ (vinir sínir)", a: "vina sinna",
            why: "Genitive plural: vina sinna." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "Anna saknar ___ (gamla húsið) í Reykjavík", a: "gamla hússins",
            why: "Weak adjective gamla plus the neuter genitive hússins." },
          { q: "Við njótum ___ (þessi dagur)", a: "þessa dags",
            why: "þessi has the genitive þessa, and dagur has dags." },
          { q: "Sóley leitar ___ (nýtt starf)", a: "nýs starfs",
            why: "Neuter genitive adjective ends in -s: nýs starfs." },
          { q: "Lúlli bíður ___ (betra veður)", a: "betra veðurs",
            why: "Comparatives only ever take weak endings, so betra stays betra; veður gives veðurs." },
          { q: "Ég sakna ___ (íslenskt brauð)", a: "íslensks brauðs",
            why: "Both adjective and noun take the neuter genitive -s." },
          { q: "Þau minnast ___ (fyrsta ferðin) til Íslands", a: "fyrstu ferðarinnar",
            why: "Ordinals are always weak: fyrstu, with the genitive ferðarinnar." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 10. impersonal-subjects
  // ─────────────────────────────────────────────────────────────
  {
    id: "impersonal-subjects",
    title: "Impersonal verbs: mig or mér?",
    cat: "cases",
    cefr: "A2",
    unit: 8,
    instruction: "Put the person in brackets into the case this impersonal verb demands.",
    example: { q: "___ (þú) langar í köku", a: "Þig" },
    rounds: [
      {
        n: 1,
        label: "langa and vanta — accusative",
        items: [
          { q: "___ (ég) langar í kaffi", a: "Mig",
            opts: ["Ég", "Mig", "Mér"],
            why: "langa takes an accusative subject: mig langar." },
          { q: "___ (þú) vantar nýja skó", a: "Þig",
            opts: ["Þig", "Þú", "Þér"],
            why: "vanta also takes the accusative: þig vantar." },
          { q: "___ (hann) langar í ís", a: "Hann",
            opts: ["Hann", "Honum", "Hans"],
            why: "hann happens to look the same in the nominative and accusative — but it is accusative." },
          { q: "___ (hún) vantar hjálp", a: "Hana",
            opts: ["Hún", "Henni", "Hana"],
            why: "The accusative of hún is hana." },
          { q: "___ (þeir) vantar peninga", a: "Þá",
            opts: ["Þeir", "Þá", "Þeim"],
            why: "The masculine plural accusative is þá." },
          { q: "___ (við) langar í frí", a: "Okkur",
            opts: ["Við", "Okkur", "Okkar"],
            why: "okkur is the accusative here, even though it doubles as the dative." }
        ]
      },
      {
        n: 2,
        label: "finnast, líka, líða — dative",
        items: [
          { q: "___ (ég) finnst íslenska skemmtileg", a: "Mér",
            opts: ["Ég", "Mig", "Mér"],
            why: "finnast takes a dative subject: mér finnst." },
          { q: "___ (þú) líkar vel í Reykjavík", a: "Þér",
            opts: ["Þér", "Þig", "Þú"],
            why: "líka takes the dative: þér líkar." },
          { q: "___ (hann) líður vel í dag", a: "Honum",
            opts: ["Hann", "Honum", "Hans"],
            why: "líða in this sense is dative: honum líður vel." },
          { q: "___ (hún) finnst kaffið gott", a: "Henni",
            opts: ["Hana", "Henni", "Hún"],
            why: "The dative of hún is henni." },
          { q: "___ (þeir) leiðist í rigningunni", a: "Þeim",
            opts: ["Þá", "Þeim", "Þeir"],
            why: "leiðast is dative: þeim leiðist." },
          { q: "___ (þið) finnst þetta auðvelt", a: "Ykkur",
            opts: ["Ykkur", "Ykkar", "Þið"],
            why: "ykkur is both accusative and dative; here it is the dative." }
        ]
      },
      {
        n: 3,
        label: "Named people",
        items: [
          { q: "___ (Jónas) vantar nýjan síma", a: "Jónas",
            why: "vanta is accusative, and names in -as do not change: Jónas vantar." },
          { q: "___ (Jónas) finnst kaffið of sterkt", a: "Jónasi",
            why: "finnast is dative, and the dative of Jónas is Jónasi. Same name, different case." },
          { q: "___ (Anna) er kalt", a: "Önnu",
            why: "vera kalt takes a dative person: Önnu er kalt." },
          { q: "___ (Lúlli) langar í fisk", a: "Lúlla",
            why: "langa is accusative, and weak masculine names end in -a outside the nominative." },
          { q: "___ (barnið) leiðist", a: "Barninu",
            why: "leiðast is dative: barninu leiðist." },
          { q: "___ (maðurinn) svimar", a: "Manninn",
            why: "svima takes an accusative subject: manninn svimar." }
        ]
      },
      {
        n: 4,
        label: "Longer subjects",
        items: [
          { q: "___ (systir mín) langar í nýtt hjól", a: "Systur mína",
            why: "langa is accusative: systur mína langar." },
          { q: "___ (bróðir minn) finnst þetta erfitt", a: "Bróður mínum",
            why: "finnast is dative: bróður mínum finnst." },
          { q: "___ (börnin) dreymir um sumarið", a: "Börnin",
            why: "dreyma is accusative; the neuter plural looks unchanged." },
          { q: "___ (gamli maðurinn) er illt í fætinum", a: "Gamla manninum",
            why: "vera illt í takes a dative person: gamla manninum." },
          { q: "___ (Anna og Jónas) tekst þetta vel", a: "Önnu og Jónasi",
            why: "takast is dative, so both names go into the dative." },
          { q: "___ (þeir) grunar ekkert", a: "Þá",
            why: "gruna takes an accusative subject: þá grunar." }
        ]
      },
      {
        n: 5,
        label: "Full sentences",
        items: [
          { q: "___ (litla stelpan) langar í nýja bók", a: "Litlu stelpuna",
            why: "Accusative with a weak adjective: litlu stelpuna langar." },
          { q: "___ (kennarinn minn) finnst íslenska falleg", a: "Kennaranum mínum",
            why: "Dative throughout: kennaranum mínum finnst." },
          { q: "___ (allir gestirnir) líður vel í húsinu", a: "Öllum gestunum",
            why: "líða is dative, and the whole phrase follows: öllum gestunum." },
          { q: "___ (Jónas og Anna) vantar tvo miða", a: "Jónas og Önnu",
            why: "vanta is accusative: Jónas stays, Anna becomes Önnu." },
          { q: "___ (þreytt barn) leiðist alltaf", a: "Þreyttu barni",
            why: "Neuter dative without the article: þreyttu barni." },
          { q: "___ (ég) þykir vænt um Ísland", a: "Mér",
            why: "þykja vænt um takes a dative person and an accusative object." }
        ]
      }
    ]
  }

];

export default drills;
