import Cliente from '/entities/Cliente.js';

const clientes = [
    // Instanciar objetos de la clase Cliente con datos de ejemplo
    new Cliente(1, "Juan", "Pérez", "12345678", "juan@gmail.com"),
    new Cliente(2, "María", "López", "87654321", "maria@gmail.com"),
    new Cliente(3, "Carlos", "Ramírez", "11223344", "carlos@gmail.com"),
    new Cliente(4, "Ana", "Torres", "55667788", "ana@gmail.com"),
    new Cliente(5, "Luis", "Gómez", "99887766", "luis@gmail.com")
];

export default clientes;