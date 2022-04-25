import {
  tareas,
  tareaPost,
  tareaPATCH,
  tareaGetId,
  trueTask,
  falseTask,
  elementos,
  numeroTareasPendientes,
  numeroTareasCompletadas,
  borrarTarea,
} from "./Global.js";

const initTodo = async () => {
  const pinta = await pintarTarea();
};

window.renderizarTarea = () => {
  const divTareas = document.getElementById("divTareas");
  while (divTareas.firstChild) {
    divTareas.removeChild(divTareas.firstChild);
  }
};

window.pintarTarea = async () => {
  const task = await tareas();
  task.playload.forEach((tarea) => {
    const card = divTarea(tarea);
    elementos.divTarea.insertAdjacentHTML("afterbegin", card);
    const divClase = elementos.divTarea.firstChild;
    if (tarea.completeTask == true) {
      let childDiv = divClase.firstChild;
      let pChildDiv = childDiv.nextElementSibling;
      divClase.classList.add("border-success");
      pChildDiv.classList.add("complete");
    }
  });
};

window.guardaTarea = async (e) => {
  e.preventDefault();
  const tiempoActual = new Date();
  const inputsNode = e.target.querySelector("input");
  const inputs = Array.from(inputsNode);
  let tarea = {};
  tarea.nameTask = inputsNode.value;
  tarea.timeTask = tiempoActual.getTime();
  tarea.completeTask = "false";
  //console.log("Entra ",tarea);
  const tareaCrear = tareaPost(tarea);
  setTimeout(async () => {
    const main = await initTodo();
  }, 200);
};

const divTarea = (tarea) => {
  const div = `<div class="d-flex justify-content-between align-items-center pointer border rounded p-2" ondblclick="dobleClickTarea('${tarea._id}')">
                        <p id=${tarea._id} class="fw-bold">${tarea.nameTask}</p>
                        <div>
                            <button  class="btn btn-primary" onclick="modificarTarea('${tarea._id}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger" onclick="eliminarTarea('${tarea._id}')"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>`;
  return div;
};

window.eliminarTarea = (id) => {
  const deleteTarea = borrarTarea(id);
  setTimeout(async () => {
    const main = await initTodo();
  }, 200);
};

window.modificarTarea = async (id) => {
  let nombreTarea = prompt("Modifica tu tarea");
  const moficaTarea = tareaPATCH(id, nombreTarea);
  setTimeout(async () => {
    const main = await initTodo();
  }, 200);
};

window.dobleClickTarea = async (id) => {
  const idP = document.getElementById(`${id}`);
  let idPChecker = idP.classList.contains("complete");
  idP.classList.toggle("complete");
  const parentDeP = document.getElementById(`${id}`).parentElement;
  parentDeP.classList.toggle("border-success");

  let tareaGet = await tareaGetId(id);
  if (tareaGet.playload.completeTask == false) {
    await trueTask(tareaGet.playload._id);
  } else {
    await falseTask(tareaGet.playload._id);
  }
  //contadorTareas();
  //tareas.guardarStorage();
};

const contadorTareas = () => {
  let contadorTareasPendientes = tareas.tarea.filter(
    (tarea) => tarea.tareaCompletada == false
  );

  let contadorTareasCompletadas = tareas.tarea.filter(
    (tarea) => tarea.tareaCompletada == true
  );

  numeroTareasPendientes.innerText = contadorTareasPendientes.length;
  numeroTareasCompletadas.innerText = contadorTareasCompletadas.length;

  tareas.guardarStorage();
};

setTimeout(async () => {
  const main = await initTodo();
}, 200);

//contadorTareas();
