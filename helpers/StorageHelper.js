export function guardarEnStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function obtenerDeStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export function agregarAlStorage(key, nuevoElemento) {
    const datos = obtenerDeStorage(key);
    datos.push(nuevoElemento);
    guardarEnStorage(key, datos);
}

export function limpiarStorage(key) {
    localStorage.removeItem(key);
}