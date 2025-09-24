// Exercice 8
// Écrivez votre code ici

let salaireMensuel = 500;
let loyer = (30 / 100) * 500;
let nourriture = (20 / 100) * 500;
let transport = (10 / 100) * 500;
let autresDepenses = 50;
autresDepenses = autresDepenses + 25;
let totalDepenses = salaireMensuel + loyer + nourriture + transport + autresDepenses;
console.log("Total de depense est :" + totalDepenses);
let reste = salaireMensuel - totalDepenses;
console.log("Reste est :" + reste);

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};

//Vérifier si `reste` est supérieur ou égal à 100.

if(reste<=100){
    console.log("Budget bien géré");
} else{
    console.log("Attention, budget serré");
}

//  Ajouter loisirs déjà fait dans ton code

let loisirs = (15 / 100) * 500;
totalDepenses = totalDepenses + loisirs;
console.log("total depense est de : " + totalDepenses);



// Pourcentages de chaque catégorie

console.log("Pourcentage du loyer : " + ((loyer / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage de la nourriture : " + ((nourriture / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage du transport : " + ((transport / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage des autres dépenses : " + ((autresDepenses / salaireMensuel) * 100).toFixed(2) + "%");
console.log("Pourcentage des loisirs : " + ((loisirs / salaireMensuel) * 100).toFixed(2) + "%");

//  Simuler augmentation de 10% du salaire

let nouveauSalaire = salaireMensuel * 1.1;
console.log("\n--- Après augmentation de 10% ---");
console.log("Nouveau salaire : " + nouveauSalaire);

let loyer2 = (30 / 100) * nouveauSalaire;
let nourriture2 = (20 / 100) * nouveauSalaire;
let transport2 = (10 / 100) * nouveauSalaire;
let autresDepenses2 = 75; // puisque 50 + 25
let loisirs2 = (15 / 100) * nouveauSalaire;

let totalDepenses2 = loyer2 + nourriture2 + transport2 + autresDepenses2 + loisirs2;
let reste2 = nouveauSalaire - totalDepenses2;

console.log("Nouvelles dépenses totales : " + totalDepenses2);
console.log("Nouveau reste : " + reste2);

console.log("Pourcentage du loyer : " + ((loyer2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage de la nourriture : " + ((nourriture2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage du transport : " + ((transport2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage des autres dépenses : " + ((autresDepenses2 / nouveauSalaire) * 100).toFixed(2) + "%");
console.log("Pourcentage des loisirs : " + ((loisirs2 / nouveauSalaire) * 100).toFixed(2) + "%");

// Vérifier si les dépenses dépassent 90% du nouveau salaire

if (totalDepenses2 > (0.9 * nouveauSalaire)) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}
