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