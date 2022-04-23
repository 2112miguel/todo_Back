import { tareasApi } from "./Todo.component.js";
export const tareas = tareasApi;
const sectionNodo = document.querySelectorAll("section");
export const numeroTareasPendientes =
  document.getElementById("tareasPendientes");
export const numeroTareasCompletadas =
  document.getElementById("tareasCompletas");
export const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`; //http://localhost:8000
export const elementos = {
  divTarea: document.getElementById("divTareas"),
};
