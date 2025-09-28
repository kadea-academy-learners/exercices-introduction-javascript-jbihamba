// Exercice 5
// Écrivez votre code ici
// Définition de la fonction
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Exemple d'utilisation
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + "°C = " + fahrenheit + "°F");

// Export pour le test
module.exports = { celsiusToFahrenheit };


