export default function renderServicios(servicios) {
    let tbodyServicios = document.querySelector("#tbodyServicios")

    tbodyServicios.innerHTML = "";

    servicios.forEach((servicio) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id",`${servicio.id}`);
        tr.setAttribute("class","tr");
        tr.innerHTML = `
        <td>${servicio.id}</td>
        <td>${servicio.nombre}</td>
        <td>${servicio.Valor}</td>
        <td>${servicio.descripcion}</td>
        <td>${servicio.Puntos}</td>
        <td>
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        </td>
        `;

        tbodyServicios.appendChild(tr);
    });
}