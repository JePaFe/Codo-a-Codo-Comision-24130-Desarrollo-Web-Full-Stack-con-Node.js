let tasks = [];

const form = document.querySelector(".form");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

const renderTasks = () => {
  // borra el contenido del elemento ul
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    // Crea la estructura de cada tarea en HTML
    const html = `
            <li data-id="${task.id}" class="tasks__item">
                <p class="${task.complete && "done"}">${task.title}</p>
                <div>
                    <i class="bx bx-check"></i>
                    <i class="bx bx-trash"></i>
                </div>
            </li>
        `;

    // Agregar el HTML al ul
    taskList.innerHTML += html;
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let erroresValidacion = false;

  const title = taskInput.value.trim(); // limpiar los espacios del input

  // validando la tarea del input
  if (title.length < 3) {
    // alert("La tarea tiene que tener 3 caracteres o mas");

    const error = document.querySelector(".error");
    error.textContent = "La tarea tiene que tener 3 caracteres o mas";

    setTimeout(() => {
      error.textContent = "";
    }, 2000);

    erroresValidacion = true;
  }

  if (!erroresValidacion) {
    // Creo la tarea
    const task = {
      id: Date.now(),
      title: title,
      complete: false,
    };
    // console.log(task);
    // Agrego la tarea al Array
    tasks.push(task);
    // console.log(tasks);

    // Guardarlo en formato JSON en el local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    renderTasks();
  }

  //   console.log(event);
});

taskList.addEventListener("click", (event) => {
  //   console.log(event.target.classList.contains("bx-check"));
  if (event.target.classList.contains("bx-trash")) {
    const id = event.target.closest("li").dataset.id;
    const taskindex = tasks.findIndex((task) => task.id == id);

    tasks.splice(taskindex, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    event.target.closest("li").remove();
  }

  //   const html = `
  //             <li data-id="${task.id}" class="tasks__item">
  //                 <p class="">${task.title}</p>
  //                 <div>
  //                     <i class="bx bx-check"></i>
  //                     <i class="bx bx-trash"></i>
  //                 </div>
  //             </li>
  //         `;

  if (event.target.classList.contains("bx-check")) {
    const id = event.target.closest("li").dataset.id;
    const task = tasks.find((task) => task.id == id);
    task.complete = !task.complete;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    event.target.closest("li").querySelector("p").classList.toggle("done");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   console.log(tasks);

  renderTasks();
});
