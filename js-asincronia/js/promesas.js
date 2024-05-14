// const promesa = new Promise((resolve, reject) => {
//   //   resolve("OK");
//   reject("Error");
// });

// promesa
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// ---

function multiplicar(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a != "number" || typeof b != "number") {
      reject("Los parámetros deben ser números");
    }
    setTimeout(() => {
      resolve({
        num1: a,
        num2: b,
        result: a * b,
      });
    }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
  });
}

// multiplicar(1, 2).then((res) => {
//   console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// });

// multiplicar(2, 2).then((res) => {
//   console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// });

// multiplicar(3, 2).then((res) => {
//   console.log(`${res.num1} x ${res.num2} = ${res.result}`);
// });

multiplicar(1, 2)
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
    return multiplicar(3, 2);
  })
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
  })
  .catch((error) => console.log(error));
