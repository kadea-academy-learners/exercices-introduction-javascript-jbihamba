// Exercice 8
// Écrivez votre code ici

// Déclaration du salaire et des dépenses
// Salaire et dépenses

let salaireMensuel = 500;
let loyer = (30 / 100) * salaireMensuel;
let nourriture = (20 / 100) * salaireMensuel;
let transport = (10 / 100) * salaireMensuel;
let autresDepenses = 50;
autresDepenses += 25;

// Total des dépenses initiales (pour le test)

let totalDepenses = loyer + nourriture + transport + autresDepenses;
console.log("Total de depense est : " + totalDepenses);

// Reste après dépenses

let reste = salaireMensuel - totalDepenses;
console.log("Reste est : " + reste);

// Vérification du budget

if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

// Loisirs

let loisirs = (15 / 100) * salaireMensuel;

// Total incluant loisirs (séparé pour affichage)

let totalDepensesAvecLoisirs = totalDepenses + loisirs;
console.log("Total depense est de : " + totalDepensesAvecLoisirs);

// Pourcentages de chaque catégorie

console.log("Pourcentage du loyer : " + ((loyer / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage de la nourriture : " + ((nourriture / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage du transport : " + ((transport / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage des autres dépenses : " + ((autresDepenses / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage des loisirs : " + ((loisirs / salaireMensuel) * 100).toFixed(2) + "%");

// Simulation d'une augmentation de 10% du salaire

let nouveauSalaire = salaireMensuel * 1.1;
console.log("\n--- Après augmentation de 10% ---");
console.log("Nouveau salaire : " + nouveauSalaire);

let loyer2 = (30 / 100) * nouveauSalaire;
let nourriture2 = (20 / 100) * nouveauSalaire;
let transport2 = (10 / 100) * nouveauSalaire;
let autresDepenses2 = 75; 
let loisirs2 = (15 / 100) * nouveauSalaire;

// Total après augmentation

let totalDepenses2 = loyer2 + nourriture2 + transport2 + autresDepenses2 + loisirs2;
let reste2 = nouveauSalaire - totalDepenses2;

console.log("Nouvelles dépenses totales : " + totalDepenses2);
console.log("Nouveau reste : " + reste2);

// Pourcentages après augmentation

console.log("Pourcentage du loyer : " + ((loyer2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage de la nourriture : " + ((nourriture2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage du transport : " + ((transport2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage des autres dépenses : " + ((autresDepenses2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage des loisirs : " + ((loisirs2 / nouveauSalaire) * 100).toFixed(2) + "%");

// Vérification si les dépenses dépassent 90% du nouveau salaire

if (totalDepenses2 > 0.9 * nouveauSalaire) {
    console.log("Dépenses trop élevées, réduisez vos charges");
} else {
    console.log("Budget sous contrôle après augmentation");
}

// Export des variables pour les tests

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  loisirs,
  totalDepenses,
  totalDepensesAvecLoisirs,
  reste,
  nouveauSalaire,
  loyer2,
  nourriture2,
  transport2,
  autresDepenses2,
  loisirs2,
  totalDepenses2,
  reste2
};
