// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = (30 / 100) * 500;
let nouriture = (20 /100) * 500;
let transport =(10/100) * 500;
let autreDepense =50;
autreDepense=autreDepense+25;
let totalDepense = salaireMensuel + loyer + nouriture + transport + autreDepense;
console.log("Total de depense est :" + totalDepense)
let reste = salaireMensuel -totalDepense;
console.log("Reste est :" + reste)