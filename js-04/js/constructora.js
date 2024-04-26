function User(id, name, email, password) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.admin = false;

  //   this.info = function () {
  //     console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
  //   };
}

User.prototype.info = function () {
  console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
};

const user1 = new User(1, "User 1", "user1@x.com", "897491hr");

user1.info();

user1.address = { calle: "Falsa", numero: 123 };

delete user1.id;

user1.saludar = function () {
  console.log(`Hola, ${this.name}`);
};

// No se puede
// user1.prototype.saludar = function () {
//   console.log(`Hola, ${this.name}`);
// };

user1.saludar();

console.log(user1);

const user2 = new User(2, "User 2", "user2@x.com", "167826");

// user2.saludar(); // Solo con la instancia user1
user2.info();

console.log(user2);
