let parrafos = document.getElementsByTagName("p");

// for (let i = 0; i < parrafos.length; i++) {
//   console.log(parrafos[i]);
// }

parrafos = document.getElementsByClassName("destacado");
// console.log(parrafos);

let input = document.getElementsByName("nombre");
// console.log(input);

input = document.getElementById("nombre");
// console.log(input);

let h2 = document.getElementById("contacto-title");
console.log(h2);

h2.textContent = "Titulo Contacto";

let small = document.getElementsByTagName("small");
console.log(small);

small[0].innerHTML = "<span style=color:red>2025</span>";
