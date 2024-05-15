/**
 * 
 */

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar el formulario de añadir/enviar pedido
    const form = document.querySelector("form");

    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener("submit", function (event) {
        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById("usuario").value;
        const producto = document.getElementById("producto").value;
        const ciudad = document.getElementById("ciudad").value;
        const fecha = document.getElementById("fecha").value;

        // Crear una nueva fila de pedido con los valores del formulario
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${usuario}</td>
            <td>${producto}</td>
            <td>${ciudad}</td>
            <td>${fecha}</td>
            <td>
                <button class="btn btn-danger delete-btn">Eliminar</button>
            </td>
        `;

        // Agregar la nueva fila a la tabla de pedidos
        const tbody = document.querySelector("#lista-pedidos tbody"); // Seleccionar el tbody dentro de la tabla lista-pedidos
        tbody.appendChild(newRow);

        // Limpiar los campos del formulario
        form.reset();
    });

    // Agregar un evento de escucha para eliminar pedidos
    const table = document.querySelector("#lista-pedidos"); // Seleccionar la tabla lista-pedidos
    table.addEventListener("click", function (event) {
        // Verificar si se hizo clic en un botón de eliminar pedido
        if (event.target.classList.contains("delete-btn")) {
            // Obtener la fila que contiene el botón de eliminar
            const row = event.target.closest("tr");

            // Eliminar la fila de la tabla de pedidos
            row.remove();
        }
    });
});

