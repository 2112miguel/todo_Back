import { logInPost } from "./Global.js";

window.entraUsuario = async (e) => {
  e.preventDefault();
  const inputDatos = e.target.querySelectorAll("input");
  const input = Array.from(inputDatos);
  const logInUser = await logInPost(input[0].value, input[0].value);
  console.log(logInUser.json());
};
