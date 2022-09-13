import Dispositivo from "./Dispositivos.js";

class DispositivoiPhone extends Dispositivo {
    constructor(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, cargadorD, cantidadSimD) {
        super(nombreD, capacidadD, caracteristicasD, modeloD, colorD, precioD, "img/iPhone.png")
        this.cargador=cargadorD;
        this.cantidadSim = cantidadSimD;
    }
}

export default DispositivoiPhone