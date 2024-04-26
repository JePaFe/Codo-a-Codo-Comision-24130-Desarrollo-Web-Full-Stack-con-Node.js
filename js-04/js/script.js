// let id = 12;
// let name = "User 1";
// let email = "x@x.com";
// let password = "dhn3987r73ry342";
// let admin = true;

// const user = new Object();

// user.id = 12;
// user.name = "User 1";
// user.email = "x@x.com";
// user.password = "dhn3987r73ry342";
// user.admin = true;

const user1 = {
  id: 12,
  name: "User 1",
  email: "x@x.com",
  password: "dhn3987r73ry342",
  admin: true,
  info() {
    console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
  },
  isAdmin: function () {
    return this.admin;
  },
};

// user.lastName = "Perez";

console.log(user1);
// console.log(user, user.email, typeof user);
// console.log(user.name, user["email"]);

user1.info();
// user["info"]();
// console.log(user.isAdmin());
