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
};
