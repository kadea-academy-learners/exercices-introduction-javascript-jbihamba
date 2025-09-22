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
