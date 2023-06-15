export default function renderComprarServicio(clientes, servicio) {
        let selectCliente = document.querySelector("#selectCliente")
        let selectServicios = document.querySelector("#selectServicios");
        let labelValor = document.querySelector("#labelValor");
        let selectPuntos = document.querySelector("#selectPuntos");
    
        selectCliente.innerHTML = "";
    
        let option = document.createElement("option");
        option.innerText = "Selecione un cliente";
        selectCliente.appendChild(option);
    
        clientes.forEach((cliente)=>{
            let option = document.createElement("option");
            option.setAttribute("value",`${cliente.nombre}`);
            
            option.innerHTML = `${cliente.nombre}`;
    
            selectCliente.appendChild(option);
    
        })
    
        selectServicios.innerHTML = "";
    
        let optionRut = document.createElement("option");
        optionRut.innerText = "Seleccione una ruta"
        selectServicios.appendChild(optionRut)
    
        servicio.forEach((servi)=>{
            let optionRut = document.createElement("option");
            optionRut.setAttribute("value",`${servi.nombre}`);
    
            optionRut.innerHTML = `${servi.nombre}`;
    
            selectServicios.appendChild(optionRut)
        });
}