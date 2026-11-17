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

// =====================================================================
//  GRILLES DE QUALIFICATION — DÉPARTEMENTAUX (Dames)
// =====================================================================
//  Une épreuve est qualifiée si le meilleur temps est inférieur ou égal
//  au temps de la grille. Toutes les catégories s'affichent côte à côte.
//  sexe : "H" ou "F" — chaque nageur ne voit que les grilles de son sexe
//  (un nageur sans « sexe » dans NAGEURS est considéré comme "H").
//  Pour une nouvelle saison, remplacer les temps.
// =====================================================================

const GRILLES_DEPARTEMENTAUX = [
  // --- Dames ---
  { nom: "U10 et -", sexe: "F", temps: {
    "50 NL":        "44.25",
    "100 NL":       "1:33.62",
    "200 NL":       "3:27.36",
    "50 Dos":       "52.75",
    "100 Dos":      "1:50.58",
    "50 Brasse":    "56.87",
    "100 Brasse":   "2:06.48",
    "50 Papillon":  "48.07",
    "100 Papillon": "1:48.11",
    "100 4 Nages":  "1:50.33",
    "200 4 Nages":  "3:48.66",
  } },
  { nom: "U11", sexe: "F", temps: {
    "50 NL":        "42.82",
    "100 NL":       "1:30.72",
    "200 NL":       "3:20.80",
    "50 Dos":       "50.90",
    "100 Dos":      "1:46.81",
    "50 Brasse":    "54.96",
    "100 Brasse":   "2:02.12",
    "50 Papillon":  "46.48",
    "100 Papillon": "1:44.49",
    "100 4 Nages":  "1:46.73",
    "200 4 Nages":  "3:41.45",
  } },
  { nom: "U12-U13", sexe: "F", temps: {
    "50 NL":        "41.51",
    "100 NL":       "1:28.05",
    "200 NL":       "3:14.77",
    "400 NL":       "6:43.82",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "49.21",
    "100 Dos":      "1:43.34",
    "200 Dos":      "3:35.30",
    "50 Brasse":    "53.21",
    "100 Brasse":   "1:58.12",
    "200 Brasse":   "4:05.36",
    "50 Papillon":  "45.01",
    "100 Papillon": "1:41.15",
    "200 Papillon": "3:32.09",
    "100 4 Nages":  "1:43.42",
    "200 4 Nages":  "3:34.83",
    "400 4 Nages":  "7:24.82",
  } },
  { nom: "U14-U15", sexe: "F", temps: {
    "50 NL":        "38.05",
    "100 NL":       "1:21.03",
    "200 NL":       "2:58.89",
    "400 NL":       "6:11.72",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "44.76",
    "100 Dos":      "1:34.22",
    "200 Dos":      "3:17.18",
    "50 Brasse":    "48.60",
    "100 Brasse":   "1:47.59",
    "200 Brasse":   "3:44.52",
    "50 Papillon":  "41.15",
    "100 Papillon": "1:32.39",
    "200 Papillon": "3:14.91",
    "100 4 Nages":  "1:34.70",
    "200 4 Nages":  "3:17.39",
    "400 4 Nages":  "6:49.80",
  } },
  { nom: "U16 et +", sexe: "F", temps: {
    "50 NL":        "33.29",
    "100 NL":       "1:11.37",
    "200 NL":       "2:37.04",
    "400 NL":       "5:27.56",
    "800 NL":       "11:24.03",
    "1500 NL":      "22:04.97",
    "50 Dos":       "38.63",
    "100 Dos":      "1:21.67",
    "200 Dos":      "2:52.25",
    "50 Brasse":    "42.46",
    "100 Brasse":   "1:33.10",
    "200 Brasse":   "3:15.84",
    "50 Papillon":  "35.84",
    "100 Papillon": "1:20.32",
    "200 Papillon": "2:51.26",
    "100 4 Nages":  "1:22.71",
    "200 4 Nages":  "2:53.41",
    "400 4 Nages":  "6:01.61",
  } },
];
