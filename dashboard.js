import clientes from '/data/ListaClientes.js';
import prestadores from '/data/ListaPrestadores.js';
import { obtenerDeStorage } from '/helpers/storageHelper.js';
import { renderizarTabla } from '/helpers/uiHelper.js';
import { buscarEnTabla } from '/helpers/uiHelper.js';

renderizarTabla("#tablaClientes tbody", clientes, [
    "id",
    obj => obj.getNombreCompleto(),
    "dni",
    "correo"
]);

renderizarTabla("#tablaPrestadores tbody", prestadores, [
    "id",
    obj => obj.getNombreCompleto(),
    "dni",
    "especialidad"
]);

const comprobantes = obtenerDeStorage("comprobantes");

renderizarTabla("#tablaComprobantes tbody", comprobantes, [
    "numero_de_boleta",
    "id_cliente",
    "id_prestador",
    "fechaHora",
    "monto",
    "igv",
    "total"
]);

buscarEnTabla("#buscarClientes", "#tablaClientes");
buscarEnTabla("#buscarPrestadores", "#tablaPrestadores");
buscarEnTabla("#buscarComprobantes", "#tablaComprobantes");