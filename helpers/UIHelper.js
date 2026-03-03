export function renderizarTabla(tbodySelector, dataArray, columnas) {
    const tbody = document.querySelector(tbodySelector);
    tbody.innerHTML = "";

    dataArray.forEach(obj => {
        const fila = document.createElement("tr");

        columnas.forEach(col => {
            const td = document.createElement("td");

            if (typeof col === "function") {
                td.textContent = col(obj);
            } else {
                td.textContent = obj[col];
            }

            fila.appendChild(td);
        });

        tbody.appendChild(fila);
    });
}

/**
 * Busca texto dentro de una tabla HTML
 * @param {string} inputSelector - selector del input
 * @param {string} tableSelector - selector de la tabla
 */
export function buscarEnTabla(inputSelector, tableSelector) {
    const input = document.querySelector(inputSelector);
    const tabla = document.querySelector(tableSelector);

    input.addEventListener("keyup", () => {
        const filtro = input.value.toLowerCase();
        const filas = tabla.querySelectorAll("tbody tr");

        filas.forEach(fila => {
            const textoFila = fila.textContent.toLowerCase();
            fila.style.display = textoFila.includes(filtro) ? "" : "none";
        });
    });
}