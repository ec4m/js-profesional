import nombreCompleto, { nombre, apellido } from "./nombre.js";

const btn = document.getElementById('btn');
const saludo = document.getElementById('yourName');
btn.onclick = () => {
    const idea = nombreCompleto(nombre,apellido);
    saludo.innerText = idea;
    console.log(idea);
}




