import { urlApi } from "./Global.js";

export const tareasApi = async () => {
  try {
    //console.log(`${urlApi}/todo`);
    const response = await fetch(`${urlApi}/todo`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("AQUI ERROR ", error);
  }
};

export const ingresarTarea = (tarea) => {
  const url = `${urlApi}/todo`;
  console.log(tarea);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(tarea),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const modificaTarea = (id, Task) => {
  const url = `${urlApi}/todo/${id}`;
  console.log(url);
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      nameTask: Task,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const idGet = async (id) => {
  const url = `${urlApi}/todo/${id}`;
  const idTarea = fetch(url).then((response) => response.json());
  return idTarea;
};

export const patchCompleteTrue = async (id) => {
  const url = `${urlApi}/todo/${id}`;
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      completeTask: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const patchCompleteFalse = async (id) => {
  const url = `${urlApi}/todo/${id}`;
  fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      completeTask: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
