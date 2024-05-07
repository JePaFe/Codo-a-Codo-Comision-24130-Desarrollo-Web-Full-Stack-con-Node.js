const h2 = document.querySelector("h2#contacto-title");
// console.log(h2);

// h2.onclick = () => {
//   console.log("Click en h2 version 1");
// };

// h2.onclick = () => {
//   console.log("Click en h2 version 2");
// };

h2.addEventListener("click", () => {
  console.log("Click en h2 version 1");
});

const version2 = () => {
  console.log("Click en h2 version 2");
};

h2.addEventListener("click", version2);
