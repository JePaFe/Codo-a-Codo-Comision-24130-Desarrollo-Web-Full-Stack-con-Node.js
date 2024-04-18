// let cantidadProductos = 2;

// if (cantidadProductos >= 3) {
//   console.log("Tiene un descuento");
// } else {
//   console.log("No tiene descuento");
// }

// let edad = 15;
// let mensaje;

// // if (edad >= 13) {
// //   mensaje = "Se puede registrar";
// // } else {
// //   mensaje = "No se puede registrar";
// // }

// mensaje = edad >= 13 ? "Se puede registrar" : "No se puede registrar";

// console.log(mensaje);

// let nota = 10;
// let mensaje;

// if (nota < 5) {
//   mensaje = "Desaprobó";
// } else if (nota < 7) {
//   mensaje = "Aprobó";
// } else if (nota < 9) {
//   mensaje = "sobresaliente";
// } else {
//   mensaje = "10";
// }

// console.log(mensaje);

let tono = "Algo";
let color = "Green";

switch (color) {
  case "Red":
    console.log("Rojo");
    break;
  case "Green":
    if (tono == "Claro") {
      console.log("Verde claro");
    } else {
      console.log("Verde oscuro");
    }
    break;
  case "Blue":
    console.log("Azul");
    break;
  default:
    console.log("No conozco el color");
}
