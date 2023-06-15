import {getInfoTabla} from "../peticiones/peticiones.js";

let btnListar = document.querySelector("#btnListar");

getInfoTabla()

btnListar.addEventListener("click",(e) => {
    e.preventDefault();

    getInfoTabla()
});