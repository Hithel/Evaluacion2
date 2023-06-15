import {getInfoServicio,getPrecioServicio,postFactura,getFacturas} from "../peticiones/peticiones.js";


let selectServicios = document.querySelector("#selectServicios");
let form = document.querySelector("#form");
let btnListar = document.querySelector("#btnListar");

getInfoServicio()

selectServicios.addEventListener("change", ()=>{
    
    
    let servicioSeleccionado = selectServicios.value

    getPrecioServicio(servicioSeleccionado)
    
})

form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    
    postFactura(e)

});

btnListar.addEventListener("click", (e)=>{
    e.preventDefault();

    let accion = e.currentTarget.dataset.accion;
    if(accion === "Ver"){
        getFacturas();
    }
});

