// Exercice 7
// Écrivez votre code ici
let ageEnfant = 10;
let agePere = ageEnfant * 2;
let ageMere = agePere - 5;
let ageGrandPere = (2 * ageMere) + (0.5 * ageEnfant);
let ageOncle = agePere + 10;

console.log("Âge de l'enfant:", ageEnfant);
console.log("Âge du père:", agePere);
console.log("Âge de la mère:", ageMere);
console.log("Âge du grand-père:", ageGrandPere);
console.log("Âge de l'oncle:", ageOncle);

// --- Export des variables pour les tests ---
if (typeof module !== "undefined") {
  module.exports = {
    ageEnfant,
    agePere,
    ageMere,
    ageGrandPere,
    ageOncle
  };
}
