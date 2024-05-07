// const section = document.createElement("section");

// const h2 = document.createElement("h2");
// // const text = document.createTextNode("Productos");
// h2.textContent = "Productos";

// // h2.appendChild(text);
// section.appendChild(h2);

// console.log(section);

let main = document.querySelector("main");
// main.appendChild(section);

// main.innerHTML += "<section><h2>Productos</h2></section>";

const title = "Productos";

main.innerHTML += `
    <section>
        <h2>${title}</h2>
    </section>
`;

const small = document.querySelector("small");
small.textContent = "Copyright 2025";
small.className = "footer__small";
small.style.color = "orange";

// small.style.display = "none";

// const otroSmall = small.cloneNode(true);
// otroSmall.textContent = 2025;

// small.appendChild(`<strong>Un texto</strong>`);

console.log(small);

small.remove();
