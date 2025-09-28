// Valeur totale du patrimoine
const patrimoineTotal = 60000000 + 40000000 + 20000000; 

// Répartition des catégories
const partPremiereCategorie = 0.75 * patrimoineTotal; 
const partDeuxiemeCategorie = 0.25 * patrimoineTotal; 

// --- Première catégorie 

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

// --- Création des variables aux noms attendus par Jest ---
const paul = partPaul;
const marie = partMarie;
const eric = partEric;
const clair = partClaire;
const madameMukuna = partMadameMukuna;
const joseph = partJoseph;
const sarah = partSarah;

// --- Affichage des résultats ---
console.log("Répartition de l'héritage (en CDF) :");
console.log("Paul :", paul.toLocaleString());
console.log("Marie :", marie.toLocaleString());
console.log("Éric :", eric.toLocaleString());
console.log("Claire :", clair.toLocaleString());
console.log("Madame MUKUNA :", madameMukuna.toLocaleString());
console.log("Joseph :", joseph.toLocaleString());
console.log("Sarah :", sarah.toLocaleString());

// --- Export pour Jest ---
module.exports = { paul, marie, eric, clair, madameMukuna, joseph, sarah };
