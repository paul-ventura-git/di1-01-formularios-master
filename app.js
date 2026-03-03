import Comprobante from '/entities/Comprobante.js';
import { agregarAlStorage } from '/helpers/storageHelper.js';

const form = document.getElementById("formComprobante");
const montoInput = document.getElementById("monto");
const igvInput = document.getElementById("igv");
const totalInput = document.getElementById("total");

// Calcular IGV automáticamente
montoInput.addEventListener("input", () => {
    const monto = parseFloat(montoInput.value) || 0;
    const igv = monto * 0.18;
    const total = monto + igv;

    igvInput.value = igv.toFixed(2);
    totalInput.value = total.toFixed(2);
});

// Guardar comprobante
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const comprobante = new Comprobante(
        document.getElementById("numero_boleta").value,
        parseInt(document.getElementById("id_cliente").value),
        parseInt(document.getElementById("id_prestador").value),
        document.getElementById("fechaHora").value,
        document.getElementById("monto").value
    );

    // Insertar en array "comprobantes"
    let comprobantes = JSON.parse(localStorage.getItem("comprobantes")) || [];
    comprobantes.push(comprobante);

    // Actualizar el localStorage con el nuevo comprobante
    agregarAlStorage("comprobantes", comprobante);

    alert("Comprobante registrado correctamente");

    form.reset();
    igvInput.value = "";
    totalInput.value = "";
});