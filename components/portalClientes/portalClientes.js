import {createClientes,getClientes,ActualizarCliente,DeleteClientes} from "../peticiones/peticiones.js"; 

let form = document.querySelector('#form');
let tablaClientes = document.querySelector("#tablaClientes")

getClientes();

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let accion = e.submitter.dataset.accion
    let data = Object.fromEntries(new FormData(e.target))

    if(accion === "Registrar"){

        createClientes(data);
    }
    else if(accion === "Listar"){
        getClientes(data);
    }
})

tablaClientes.addEventListener('click', (e)=>{
    e.preventDefault();

    let tr = e.target.closest('tr');
    let id = tr.id

    let accion = e.target.dataset.accion

    if(accion === "Eliminar"){
        DeleteClientes(tr,id);
    }
    else if(accion === "Actualizar"){
        formModificar.addEventListener("submit", async(e)=>{
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));
            ActualizarCliente(data,id)
        })
    }
});

getClientes();