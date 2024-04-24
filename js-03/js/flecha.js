// function saludar() {
//   console.log("Hola");
// }

// const saludar = function () {
//   console.log("Hola");
// }

// const saludar = () => console.log("Hola");

// saludar();

// ---

// function saludar(nombre) {
//   console.log("Hola " + nombre);
// }

// const saludar = function (nombre) {
//   console.log("Hola " + nombre);
// };

// const saludar = nombre => console.log("Hola " + nombre);

// saludar("Juan");

// ---

// function saludar(nombre) {
//   let mensaje = `Hola, ${nombre}`;
//   return mensaje;
// }

// const saludar = function (nombre) {
//   let mensaje = `Hola, ${nombre}`;
//   return mensaje;
// };

// const saludar = nombre => {
//   let mensaje = `Hola, ${nombre}`;
//   return mensaje;
// };

// const saludar = nombre => `Hola, ${nombre}`;

// let texto = saludar("Pedro");
// console.log(texto);

// texto = saludar("Maria");
// console.log(texto);

// ---

// const sumar = (num1, num2) => {
//   //   if (typeof num1 != "number" || typeof num2 != "number") {
//   //     return NaN;
//   //   }

//   //   return num1 + num2;

//   return typeof num1 != "number" || typeof num2 != "number" ? NaN : num1 + num2;
// };

const sumar = (num1, num2) =>
  typeof num1 != "number" || typeof num2 != "number" ? NaN : num1 + num2;

let resultado;

resultado = sumar(3, 5);
console.log(resultado);

// ---

// const tablaMultiplicar = (multiplicador, limite = 10) => {
//   for (let i = 1; i <= limite; i++) {
//     console.log(`${i} * ${multiplicador} = ${i * multiplicador}`);
//   }
// };
