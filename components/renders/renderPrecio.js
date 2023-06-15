export default function renderPrecio(servicios, servicioSeleccionado){

    labelValor.innerHTML = "";
    selectPuntos.innerHTML = "";
    servicios.forEach((servi)=>{

        if(servi.nombre === servicioSeleccionado){

            let aereo = servi.Valor * 0.04
            let iva = servi.Valor * 0.16
            let vTotal = Number(servi.Valor) + aereo + iva

            let optionRut = document.createElement("option");

            optionRut.innerText = `${vTotal}`

            labelValor.appendChild(optionRut)

            let optionValor = document.createElement("option")

            optionValor.innerHTML = `${servi.Puntos}`

            selectPuntos.appendChild(optionValor)
        }
    });
}