// const numeros = [1, 2, 3, 4, 5];

// function mostrar(item) {
//   console.log(item);
// }

// numeros.forEach(mostrar);

// ---

// console.log("Inicio del proceso");

// let suma = 0;
// for (let i = 0; i < 1000000; i++) {
//   suma += i;
// }

// console.log("Suma completa: ", suma);
// console.log("Fin del proceso");

// - setTimeout

// function mensaje() {
//   console.log("Pasaron 2 segundos");
// }
// // console.log(mensaje);

// setTimeout(mensaje, 2000);

// ---

console.log("Primero: Este mensaje se muestra primero.");

setTimeout(() => {
  console.log("Tercero: Este mensaje se muestra después de 2 segundos.");
}, 2000);

console.log(
  "Segundo: Este mensaje se muestra mientras esperamos el temporizador."
);
