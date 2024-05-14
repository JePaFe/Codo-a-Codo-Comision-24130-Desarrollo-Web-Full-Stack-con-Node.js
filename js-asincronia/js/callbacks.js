// const mensajeLog = function (texto) {
//   texto += "!!!";
//   console.log(texto);
// };

// const mensajeAlert = function (texto) {
//   texto += "!!!";
//   alert(texto);
// };

// mensajeLog("Un mensaje");
// mensajeAlert("Un mensaje");

// ---

// const fnLog = (texto) => {
//   document.write(texto);
// };

// const mensaje = (texto, callback) => {
//   texto += "!!!";
//   callback(texto);
// };

// mensaje("Un texto", console.log);
// mensaje("Otro texto", alert);
// mensaje("Otro texto mas", fnLog);

// // mensaje("No funciona", document.write);

// ---

// const segundos = Math.floor(Math.random() * (3000 - 1 + 1) + 1);
// console.log(segundos);

function multiplicar(a, b, callback) {
  setTimeout(() => {
    callback(a, b, a * b);
  }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
}

// multiplicar(1, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// multiplicar(2, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

// multiplicar(3, 2, (num1, num2, result) => {
//   console.log(`${num1} x ${num2} = ${result}`);
// });

multiplicar(1, 2, (num1, num2, result) => {
  console.log(`${num1} x ${num2} = ${result}`);
  multiplicar(2, 2, (num1, num2, result) => {
    console.log(`${num1} x ${num2} = ${result}`);
    multiplicar(3, 2, (num1, num2, result) => {
      console.log(`${num1} x ${num2} = ${result}`);
    });
  });
});
