// let frase = "Una frase con muchas aa";
// let cantidad = 0;

// for (let i = 0; i < frase.length; i++) {
//   //   if (frase.charAt(i) == "a") {
//   //     cantidad++;
//   //   }
//   if (frase[i] == "a") {
//     cantidad++;
//   }
// }

// console.log(cantidad);

// --

const str = "Una frase con muchas aa";

const letters = str.split("");
console.log(letters);

const letrasA = letters.filter((letra) => letra == "a");
console.log(letrasA, letrasA.length);
