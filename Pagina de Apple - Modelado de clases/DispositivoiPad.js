import Dispositivo from "./Dispositivos.js";

class DispositivoiPad extends Dispositivo {
    constructor(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, conectividadD) {
        super(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, "img/iPad.png")
        this.conectividad= conectividadD;
    }
}

export default DispositivoiPad