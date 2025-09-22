// Exercice 9
// Écrivez votre code ici
// Valeur totale du patrimoine
const patrimoineTotal = 60000000 + 40000000 + 20000000; 

// Répartition des catégories
const partPremiereCategorie = 0.75 * patrimoineTotal; // 75%
const partDeuxiemeCategorie = 0.25 * patrimoineTotal; // 25%

// --- Première catégorie : enfants ---
// Il y a 3 parts : Paul, Marie, Alain (représenté par Éric et Claire)
const partEnfant = partPremiereCategorie / 3;

// Part d'Éric et Claire (ils se partagent la part d'Alain)
const partEric = partEnfant / 2;
const partClaire = partEnfant / 2;

// Part des enfants vivants
const partPaul = partEnfant;
const partMarie = partEnfant;

// --- Deuxième catégorie : conjoint survivant et frères/nièce ---
const partDeuxiemeCategorieIndividu = partDeuxiemeCategorie / 3;

const partMadameMukuna = partDeuxiemeCategorieIndividu;
const partJoseph = partDeuxiemeCategorieIndividu;
const partSarah = partDeuxiemeCategorieIndividu;

// --- Affichage des résultats ---
console.log("Répartition de l'héritage (en CDF) :");
console.log("Paul :", partPaul.toLocaleString());
console.log("Marie :", partMarie.toLocaleString());
console.log("Éric :", partEric.toLocaleString());
console.log("Claire :", partClaire.toLocaleString());
console.log("Madame MUKUNA :", partMadameMukuna.toLocaleString());
console.log("Joseph :", partJoseph.toLocaleString());
console.log("Sarah :", partSarah.toLocaleString());
