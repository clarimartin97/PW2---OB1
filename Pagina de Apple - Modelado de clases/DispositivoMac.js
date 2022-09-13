import Dispositivo from "./Dispositivos.js";

class DispositivoMac extends Dispositivo {
    constructor(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, tipoD) {
        super(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, "img/mac.png")
        this.tipo = tipoD;
    }
}

export default DispositivoMac