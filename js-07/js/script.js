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

form.addEventListener("submit", async (event) => {
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
      // id: Date.now(),
      title: title,
      complete: false,
    };

    // fetch("http://localhost:3000/tasks", {
    //   method: "POST",
    //   body: JSON.stringify(task),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const json = await response.json();
      task.id = json.id;
    } catch (error) {
      console.log(error);
    }

    // console.log(task);
    // Agrego la tarea al Array
    tasks.push(task);
    // console.log(tasks);

    // Guardarlo en formato JSON en el local Storage
    // localStorage.setItem("tasks", JSON.stringify(tasks));

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

    // localStorage.setItem("tasks", JSON.stringify(tasks));

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });

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
    console.log(event.target.closest("li").dataset);
    const id = event.target.closest("li").dataset.id;

    // const index = Array.prototype.slice
    //   .call(event.target.parentNode.parentNode.children)
    //   .indexOf(event.target.parentNode);

    const task = tasks.find((task) => task.id == id);
    task.complete = !task.complete;

    // localStorage.setItem("tasks", JSON.stringify(tasks));

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    event.target.closest("li").querySelector("p").classList.toggle("done");
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  // tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   console.log(tasks);

  try {
    const response = await fetch("http://localhost:3000/tasks");
    tasks = await response.json();
  } catch (error) {
    console.log(error);
  }

  renderTasks();
});
