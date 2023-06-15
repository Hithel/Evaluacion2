
export default function renderFactura(data){
    
    let divFactura = document.querySelector("#divFactura");

    let factura = data.splice(-1);

    factura.forEach((fact) => {
        let div = document.createElement("div");

        div.innerHTML = `
        <h1 class="mt-3">Factura</h1>
        <h3 class="mt-5">Cliente</h3>
        <h5 class="mt-2">${fact.selectCliente}</h5>
        <h3 class="mt-5">Servicio</h3>
        <h5 class="mt-2">${fact.selectServicios}</h5>
        <h3 class="mt-5">Valor Total</h3>
        <h5 class="mt-2">${fact.valor}</h5>
        <h3 class="mt-5">Puntos</h3>
        <h5 class="mt-2">${fact.puntos}</h5>
        `;

        divFactura.appendChild(div);
    });

}