import Persona from './Persona.js';

export default class PrestadorDeServicio extends Persona {
    constructor(id, nombre, apellido, dni, especialidad) {
        super(id, nombre, apellido, dni);
        this.especialidad = especialidad;
    }
}