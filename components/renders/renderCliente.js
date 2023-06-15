export default function renderCliente(data){
    let tbodyClientes = document.querySelector("#tbodyClientes")

    tbodyClientes.innerHTML = "";

    data.forEach((cliente) => {
        let tr = document.createElement("tr");
        tr.setAttribute("id",`${cliente.id}`);
        tr.setAttribute("class","tr");
        tr.innerHTML = `
        <td>${cliente.numIdent}</td>
        <td>${cliente.nombre}</td>
        <td>${cliente.Apellidos}</td>
        <td>${cliente.telefono}</td>
        <td>${cliente.correo}</td>
        <td>${cliente.placa}</td>
        <td>${cliente.tipo}</td>
        <td>
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        </td>
        `;

        tbodyClientes.appendChild(tr);
    });
}
