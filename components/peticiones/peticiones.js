import renderCliente from "../renders/renderCliente.js";
import renderServicios from "../renders/renderServicios.js";
import renderComprarServicio from "../renders/renderComprarServicio.js"
import renderPrecio from "../renders/renderPrecio.js"
import renderFactura from "../renders/renderFactura.js"
import renderTabla from "../renders/renderTabla.js"

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});

export async function createClientes(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let user = await (await fetch(`${URL}/clientes`,config)).json();
    alert("Cliente Creado")
}
export async function getClientes(){

    let clientes = await (await fetch(`${URL}/clientes`)).json();
    renderCliente(clientes);

}

export async function DeleteClientes(tr,id){

    let data = Object.fromEntries(new FormData(tr.target))

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await (await fetch(`${URL}/clientes/${id}`,config)).json();
}

export async function ActualizarCliente(data,id){
    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let del = await (await fetch(`${URL}/clientes/${id}`,config)).json();
}

export async function createServicio(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let servicio = await (await fetch(`${URL}/servicio`,config)).json();
}

export async function getServicio(){
    
    let servicios = await (await fetch(`${URL}/servicio`)).json();
    renderServicios(servicios);
}

export async function DeleteServicios(tr,id){

    let data = Object.fromEntries(new FormData(tr.target))

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await (await fetch(`${URL}/servicio/${id}`,config)).json();
}

export async function AcrtualizarServicios(data,id){
    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let del = await (await fetch(`${URL}/servicio/${id}`,config)).json();
}

export async function getInfoServicio(){

    let clientes = await (await fetch(`${URL}/clientes`)).json();
    
    let servicio = await (await fetch(`${URL}/servicio`)).json();


    renderComprarServicio(clientes, servicio)
}

export async function getPrecioServicio(servicioSeleccionado){
    let servicios = await (await fetch(`${URL}/servicio`)).json();
    renderPrecio(servicios, servicioSeleccionado)
}

export async function postFactura(e){
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));

    let facturas = await (await fetch(`${URL}/compraServicio`)).json();
    
    if(facturas.length > 0){

        let agrego = false;
        

        facturas.forEach(async(factura)=>{
            let id = factura.id
    
            if (factura.selectCliente === data.selectCliente){
                let vTotalPuntos = Number(factura.puntos)+ Number(data.puntos)
                console.log(vTotalPuntos);
                data.puntos = vTotalPuntos
                ActualizarFactura(data,id)
                agrego = true;
    
            }
        });

        if(agrego === false){

            let config = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            }
            
            let user = await (await fetch(`${URL}/compraServicio`,config)).json();
        }
    
    }
    else{
        let config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
    
        let user = await (await fetch(`${URL}/compraServicio`,config)).json();
    }

}

export async function getFacturas(){
    
    let facturas = await (await fetch(`${URL}/compraServicio`)).json();
    renderFactura(facturas);

}

export async function getInfoTabla(){

    let facturas = await (await fetch(`${URL}/compraServicio`)).json();

    renderTabla(facturas);
}

export async function ActualizarFactura(data,id) {
    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let facturas = await (await fetch(`${URL}/compraServicio/${id}`,config)).json();

}