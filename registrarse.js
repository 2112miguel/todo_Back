import { crearUser } from "./Global.js";

window.registrarUsuario = async (e) => {
  e.preventDefault();
  const inputDatos = e.target.querySelectorAll("input");
  const inputs = Array.from(inputDatos);
  console.log("entro ", inputs[0].value);
  const crearUsuario = await crearUser(inputs[0].value, inputs[1].value);
};
