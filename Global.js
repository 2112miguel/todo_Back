import {
  tareasApi,
  ingresarTarea,
  modificaTarea,
  patchCompleteTrue,
  patchCompleteFalse,
  idGet,
  postUser,
  delTask,
  logInUserPost,
} from "./Todo.component.js";
export const logInPost = logInUserPost;
export const borrarTarea = delTask;
export const crearUser = postUser;
export const tareaGetId = idGet;
export const tareas = tareasApi;
export const tareaPost = ingresarTarea;
export const tareaPATCH = modificaTarea;
export const trueTask = patchCompleteTrue;
export const falseTask = patchCompleteFalse;
const sectionNodo = document.querySelectorAll("section");
export const numeroTareasPendientes =
  document.getElementById("tareasPendientes");
export const numeroTareasCompletadas =
  document.getElementById("tareasCompletas");
export const urlApi = `http://localhost:8000`;
export const elementos = {
  divTarea: document.getElementById("divTareas"),
};
