export default class Persona {
    constructor(id, nombre, apellido, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    // Getters y Setters // Encapsulamiento
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getApellido() {
        return this.apellido;
    }

    setDni(dni) {
        this.dni = dni;
    }

    getDni() {
        return this.dni;
    }

    getNombreCompleto() {
        return `${this.getNombre()} ${this.getApellido()}`; //Encapsulamiento
    }
}