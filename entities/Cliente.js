import Persona from './Persona.js';

export default class Cliente extends Persona { // Herencia
    constructor(id, nombre, apellido, dni, correo) {
        super(id, nombre, apellido, dni);
        this.correo = correo;
    }
}