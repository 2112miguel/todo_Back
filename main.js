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
} from "./Global.js";

const initTodo = async () => {
  const pinta = await pintarTarea();
  // window.renderizarTarea(tareas.tarea);
  // contadorTareas();
};

window.guardaTarea = (e) => {
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

window.renderizarTarea = () => {
  const divTareas = document.getElementById("divTareas");
  while (divTareas.firstChild) {
    divTareas.removeChild(divTareas.firstChild);
  }
};

window.pintarTarea = async () => {
  renderizarTarea();
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

window.eliminarTarea = (id) => {
  const data = tareas.tarea.filter((tarea) => {
    return tarea.id != id;
  });
  console.log(data);
  tareas.tarea = data;
  tareas.guardarStorage();
  renderizarTarea(tareas.tarea);
  contadorTareas();
};

window.modificarTarea = async (id) => {
  let nombreTarea = prompt("Modifica tu tarea");
  const moficaTarea = tareaPATCH(id, nombreTarea);
  const pintaTareas = await pintarTarea();
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
