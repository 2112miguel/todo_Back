import { urlApi } from "./Global.js";

export const tareasApi = () => {
  try {
    console.log(`${urlApi}/todo`);
    fetch(`${urlApi}/todo`, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
