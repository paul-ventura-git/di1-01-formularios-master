import Persona from './Persona.js';

export default class PrestadorDeServicio extends Persona { // Herencia
    constructor(id, nombre, apellido, dni, especialidad) {
        super(id, nombre, apellido, dni);
        this.especialidad = especialidad;
    }
}