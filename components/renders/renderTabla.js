export default function renderTabla(facturas){

    let tabla = document.querySelector("#tbodyFidelidad");
    let puntos = document.querySelector("#puntos")

    tabla.innerHTML = "";

    facturas.forEach((factura) =>{
        let tr = document.createElement("tr");
        tr.setAttribute("id", `${factura.selectCliente}`);
        tr.innerHTML = `
        <td>${factura.id}</td>
        <td>${factura.selectCliente}</td>
        <td id="puntos">${factura.puntos}</td>
        `;

        tabla.appendChild(tr);

    });
}