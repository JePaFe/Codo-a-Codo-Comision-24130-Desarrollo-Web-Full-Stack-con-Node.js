let texto1 = new String("El texto 1...");
let texto2 = `   EL TEXTO 2   `;

console.log(texto1, texto1.length, typeof texto1);
console.log(texto2, texto2.length, typeof texto2);

console.log(texto2 + "...");
console.log(texto2.concat("..."));

console.log(texto1.indexOf("t", 5));

// console.log(texto1.repeat(3));

let mensaje = texto2.trim().toLowerCase();
mensaje = mensaje.replaceAll("e", "E");
console.log(mensaje);
// console.log(texto2.trim().toUpperCase());

console.log(texto1.substring(3, 8))