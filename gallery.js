import prestadores from '/data/ListaPrestadores.js';
import ShoppingCart from '/entities/ShoppingCart.js';

// Crear carrito
const cart = new ShoppingCart();

// Cargar carrito si existe en LocalStorage
const cartGuardado = JSON.parse(localStorage.getItem("shoppingCart"));

if (cartGuardado) {
    cart.items = cartGuardado.items;
}

const grid = document.getElementById("gridPrestadores");

prestadores.forEach(prestador => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${prestador.getNombreCompleto()}</h3>
        <p><strong>ID:</strong> ${prestador.id}</p>
        <p><strong>DNI:</strong> ${prestador.dni}</p>
        <p><strong>Especialidad:</strong> ${prestador.especialidad}</p>
        <button class="btnAgregar">Agregar al carrito</button>
    `;

    const boton = card.querySelector(".btnAgregar");

    boton.addEventListener("click", () => {
        cart.addItem(prestador);

        // Guardar en LocalStorage
        localStorage.setItem("shoppingCart", JSON.stringify(cart));

        alert(`${prestador.getNombreCompleto()} agregado al carrito`);
    });

    grid.appendChild(card);
});