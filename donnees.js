// =====================================================================
//  DONNÉES DU SITE — seul fichier à modifier pour mettre à jour le suivi
// =====================================================================
//
//  Ajouter une performance : copier une ligne de PERFORMANCES, la coller
//  à la fin de la liste et changer les valeurs. L'ordre n'a pas d'importance,
//  le site trie tout seul.
//
//  nageur  : identifiant du nageur (doit exister dans NAGEURS)
//  date    : "AAAA-MM-JJ"
//  epreuve : "50 NL", "100 Dos", "200 Brasse", "50 Papillon", "100 4 Nages"…
//            (distance + espace + NL / Dos / Brasse / Papillon / 4 Nages)
//  temps   : "36.64" (moins d'une minute) ou "1:21.67" (min:sec.centièmes)
//  points  : points FFN, ou null si inconnus
//  bassin  : 25 ou 50
//  lieu    : ville de la compétition
//  niveau  : "DEP", "REG", "NAT"… (libre)
//
//  Tout le reste (âge, catégorie, saison, records, progression) est calculé
//  automatiquement par le site.
//
//  Les courses de Sarah peuvent aussi être récupérées sur sa fiche FFN
//  (Actions > « Mise à jour depuis la FFN ») dans donnees-ffn.js : ne pas
//  modifier ce fichier-là.
// =====================================================================

const NAGEURS = [
  { id: "sarah", nom: "AMSTUZ", prenom: "Sarah", naissance: 2016, sexe: "F", club: "USB Longwy Natation", iuf: 4376162, suivi: true },
];

const PERFORMANCES = [
  { nageur: "sarah", date: "2025-10-12", epreuve: "50 Brasse",    temps: "57.37",   points: 237,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2025-10-12", epreuve: "50 Dos",       temps: "54.53",   points: 206,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2025-10-12", epreuve: "50 NL",        temps: "44.58",   points: 239,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2025-11-11", epreuve: "100 4 Nages",  temps: "1:52.24", points: 225,  bassin: 25, lieu: "PONT-A-MOUSSON", niveau: "DEP" },
  { nageur: "sarah", date: "2025-11-11", epreuve: "100 NL",       temps: "1:33.08", points: 258,  bassin: 25, lieu: "PONT-A-MOUSSON", niveau: "DEP" },
  { nageur: "sarah", date: "2025-11-22", epreuve: "100 4 Nages",  temps: "1:55.19", points: 189,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2025-11-22", epreuve: "100 NL",       temps: "1:33.68", points: 249,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2025-11-22", epreuve: "50 Dos",       temps: "54.21",   points: 213,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2025-12-14", epreuve: "100 4 Nages",  temps: "1:45.36", points: 320,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "sarah", date: "2025-12-14", epreuve: "50 Brasse",    temps: "53.31",   points: 347,  bassin: 25, lieu: "VILLERUPT", niveau: "DEP" },
  { nageur: "sarah", date: "2026-01-25", epreuve: "100 NL",       temps: "1:33.25", points: 256,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-01-25", epreuve: "50 Dos",       temps: "48.84",   points: 361,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-01-25", epreuve: "50 NL",        temps: "39.34",   points: 441,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-03-15", epreuve: "100 4 Nages",  temps: "1:42.57", points: 363,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-03-15", epreuve: "50 Brasse",    temps: "56.04",   points: 271,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-03-15", epreuve: "50 Papillon",  temps: "47.46",   points: 268,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-07", epreuve: "100 4 Nages",  temps: "1:37.94", points: 441,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-07", epreuve: "200 NL",       temps: "3:06.97", points: 420,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-13", epreuve: "100 4 Nages",  temps: "1:34.74", points: 499,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-13", epreuve: "100 NL",       temps: "1:25.19", points: 407,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-13", epreuve: "50 Papillon",  temps: "42.91",   points: 428,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-14", epreuve: "100 Dos",      temps: "1:41.66", points: 375,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-14", epreuve: "200 NL",       temps: "3:09.07", points: 400,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-06-14", epreuve: "50 NL",        temps: "39.63",   points: 428,  bassin: 25, lieu: "JOEUF", niveau: "DEP" },
  { nageur: "sarah", date: "2026-10-11", epreuve: "100 4 Nages",  temps: "1:36.14", points: 473,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-10-11", epreuve: "100 NL",       temps: "1:27.45", points: 361,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-10-11", epreuve: "50 NL",        temps: "38.98",   points: 457,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-10-11", epreuve: "50 Papillon",  temps: "42.21",   points: 456,  bassin: 25, lieu: "TOUL", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-01", epreuve: "200 4 Nages",  temps: "3:20.87", points: 468,  bassin: 25, lieu: "PONT-A-MOUSSON", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-14", epreuve: "100 Dos",      temps: "1:38.96", points: 418,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-14", epreuve: "200 NL",       temps: "3:04.96", points: 439,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-14", epreuve: "50 NL",        temps: "37.57",   points: 523,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-15", epreuve: "100 4 Nages",  temps: "1:34.11", points: 511,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-15", epreuve: "100 NL",       temps: "1:23.20", points: 450,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
  { nageur: "sarah", date: "2026-11-15", epreuve: "50 Dos",       temps: "45.37",   points: 477,  bassin: 25, lieu: "LANEUVEVILLE-DEVANT-NANCY", niveau: "DEP" },
];
