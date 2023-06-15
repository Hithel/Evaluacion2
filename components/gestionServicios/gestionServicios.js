import {createServicio,getServicio,DeleteServicios,AcrtualizarServicios} from "../peticiones/peticiones.js";

let form = document.querySelector('#form');
let tbodyServicios = document.querySelector("#tbodyServicios")


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    createServicio(data)
})

getServicio()

tbodyServicios.addEventListener('click', (e)=>{
    e.preventDefault();

    let tr = e.target.closest('tr');
    let id = tr.id

    let accion = e.target.dataset.accion

    if(accion === "Eliminar"){
        DeleteServicios(tr,id);
    }
    else if(accion === "Actualizar"){
        formModificar.addEventListener("submit", async(e)=>{
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));
            AcrtualizarServicios(data,id)
        })
    }
});

getServicio();

