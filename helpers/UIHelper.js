export function renderizarTabla(tbodySelector, dataArray, columnas) {
    const tbody = document.querySelector(tbodySelector);
    tbody.innerHTML = "";

    dataArray.forEach(attr => {
        const fila = document.createElement("tr");

        columnas.forEach(col => {
            const td = document.createElement("td");

            if (typeof col === "function") {
                td.textContent = col(attr);
            } else {
                td.textContent = attr[col];
            }

            fila.appendChild(td);
        });

        tbody.appendChild(fila);
    });
}

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