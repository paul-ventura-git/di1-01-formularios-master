export default class Comprobante {
    constructor(numero_de_boleta, id_cliente, id_prestador, fechaHora, monto) {
        this.numero_de_boleta = numero_de_boleta;
        this.id_cliente = id_cliente; // Relación con Cliente
        this.id_prestador = id_prestador; // Relación con PrestadorDeServicio
        this.fechaHora = fechaHora;
        this.monto = parseFloat(monto);
        this.igv = this.monto * 0.18;
        this.total = this.monto + this.igv;
    }
}