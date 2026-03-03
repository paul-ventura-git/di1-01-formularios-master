// dashboard.js
import clientes from '/data/ListaClientes.js';
import prestadores from '/data/ListaPrestadores.js';

document.addEventListener("DOMContentLoaded", () => {
    cargarClientes();
    cargarPrestadores();
    cargarComprobantes();
});

function cargarClientes() {
    const tbody = document.querySelector("#tablaClientes tbody");

    clientes.forEach(cliente => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.getNombreCompleto()}</td>
            <td>${cliente.dni}</td>
            <td>${cliente.correo}</td>
        `;

        tbody.appendChild(fila);
    });
}

function cargarPrestadores() {
    const tbody = document.querySelector("#tablaPrestadores tbody");

    prestadores.forEach(prestador => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${prestador.id}</td>
            <td>${prestador.getNombreCompleto()}</td>
            <td>${prestador.dni}</td>
            <td>${prestador.especialidad}</td>
        `;

        tbody.appendChild(fila);
    });
}

function cargarComprobantes() {
    const tbody = document.querySelector("#tablaComprobantes tbody");
    const comprobantes = JSON.parse(localStorage.getItem("comprobantes")) || [];

    comprobantes.forEach(comp => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${comp.numero_de_boleta}</td>
            <td>${comp.id_cliente}</td>
            <td>${comp.id_prestador}</td>
            <td>${comp.fechaHora}</td>
            <td>${comp.monto}</td>
            <td>${comp.igv}</td>
            <td>${comp.total}</td>
        `;

        tbody.appendChild(fila);
    });
}