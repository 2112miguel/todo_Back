import { tareasApi, ingresarTarea } from "./Todo.component.js";
export const tareas = tareasApi;
export const tareaPost = ingresarTarea;
const sectionNodo = document.querySelectorAll("section");
export const numeroTareasPendientes =
  document.getElementById("tareasPendientes");
export const numeroTareasCompletadas =
  document.getElementById("tareasCompletas");
export const urlApi = `http://localhost:8000`;
export const elementos = {
  divTarea: document.getElementById("divTareas"),
};
