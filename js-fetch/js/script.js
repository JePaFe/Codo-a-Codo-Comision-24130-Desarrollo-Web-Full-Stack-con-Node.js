// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const email = "333";

// try {
//   if (!email.includes("@")) {
//     throw new Error("Email no válido");
//   }
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   alerta("Hola");
// } catch (error) {
//   console.log(error);
// }

// ---

const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
