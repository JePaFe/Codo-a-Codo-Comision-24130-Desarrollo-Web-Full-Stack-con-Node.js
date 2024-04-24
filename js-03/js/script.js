// function saludar(nombre, apellido) {
//   console.log(`Hola, ${nombre} ${apellido}`);
// }

// let nom = prompt("Ingrese su nombre: ");

// saludar(nom, "Perez");
// saludar("Maria", "Garcia");

// ---

// function tablaMultiplicar(multiplicador, limite = 10) {
//   for (let i = 1; i <= limite; i++) {
//     console.log(`${i} * ${multiplicador} = ${i * multiplicador}`);
//   }
// }

// tablaMultiplicar(5);
// tablaMultiplicar(3, 5);

// ---

// function sumar(num1, num2) {
//   if (typeof num1 != "number" || typeof num2 != "number") {
//     return NaN;
//   }
//   //   let suma = num1 + num2;
//   //   return suma;

//   return num1 + num2;
// }

// let resultado;

// resultado = sumar(3, "a");
// console.log(resultado);

// resultado = sumar(7, 9);
// console.log(resultado * 2);

// ---

function numeroMinimo(num1, num2) {
  //   if (num1 < num2) {
  //     return num1;
  //   }

  //   return num2;

  return num1 < num2 ? num1 : num2;
}

console.log(numeroMinimo(3, 5));
console.log(numeroMinimo(15, 7));
