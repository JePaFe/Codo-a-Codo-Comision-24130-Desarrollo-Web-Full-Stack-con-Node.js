// const letras = new Array("a", "b", "c");

// const letras = ["a", "b", "c", "d"];
// console.log(letras);

// console.log(letras[1]);
// // console.log(letras[5]);
// console.log(letras[letras.length - 1])

// for (let i = 0; i < letras.length; i++) {
//   console.log(letras[i]);
// }

// Métodos

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// dias[4] = "Domingo";
// dias[dias.length] = "Domingo";
// dias.push("Domingo");

// let dia;
// dia = dias.pop();

// dias.unshift("Lunes");
// dia = dias.shift();

// console.log(dias, dia);

// const letras = ["a", "b", "c"];
// const otrasLetras = ["d", "e", "f"];
// const masLetras = ["j", "i"];

// const abecedario = letras.concat(otrasLetras, masLetras);
// console.log(abecedario);
// console.log(abecedario.indexOf("f"));

// const numeros = [1, 5, 7, 3, 5, 8, 2];

// console.log(numeros, numeros.indexOf(5, 2), numeros.lastIndexOf(5));

// ---

const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

dias.splice(4, 0, "Domingo"); // push
dias.splice(0, 0, "Lunes"); // unshift

// delete dias[3];
// dias.splice(3, 1); // delete

// ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
dias.splice(3, 1, "Jueves", "Viernes"); // delete y push

// dias.splice(4, 3); // delete
// dias.splice(0); // delete all

// const algunosDias = dias.slice(5, 7);

// console.log(dias, algunosDias);

// console.log(dias.reverse());
// console.log(dias.sort().reverse());

// const numeros = [1, 5, 50, 3, 3, 10, 100, 2, 7, 20];

// function compareFn(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// console.log(numeros.sort((a, b) => a - b));

// Ciclos

const numeros = [1, 5, 50, 3, 3, 10, 2, 7, 20];

// function mostrar(numero) {
//   console.log(numero);
// }

// const mostrar = function (numero) {
//   console.log(numero);
// };

// const mostrar = numero => console.log(numero);

// numeros.forEach((numero) => console.log(numero * 2));

// function multiplicar(numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   } else {
//     return "impar";
//   }
// }

// function multiplicar(numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   }

//   return "impar";
// }

// const multiplicar = function (numero) {
//   if (numero % 2 == 0) {
//     return "par";
//   }

//   return "impar";
// };

// const multiplicar = (numero) => {
//   if (numero % 2 == 0) {
//     return "par";
//   }

//   return "impar";
// };

// const multiplicar = (numero) => {
//   return numero % 2 == 0 ? "par" : "impar";
// };

// const multiplicar = numero => (numero % 2 == 0 ? "par" : "impar");

// const tabla = numeros.map(numero => numero % 2 == 0 ? "par" : "impar");

// console.log(numeros, tabla);

// function filtrar(numero) {
//   if (numero > 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const filtrar = function (numero) {
//   if (numero > 6) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const filtrar = (numero) => {
//   return numero > 6;
// };

// const filtrar = numero => numero > 6;

// const numerosFiltrados = numeros.filter(numero => numero > 6);

// console.log(numeros, numerosFiltrados);

// let index = numeros.findIndex((numero) => numero == 3);
// console.log(numeros, index);

// let numero = numeros.find((numero) => numero == 3);
// console.log(numero);

// fon in

// for (let index in numeros) {
//   if (numeros[index] > 5) {
//     console.log(index, numeros[index]);
//   }
// }

const user = {
  id: 5,
  dni: 98765432,
};

// for (let key in user) {
//   console.log(key, user[key]);
// }

// for of

for (let numero of numeros) {
  console.log(numero);
}
