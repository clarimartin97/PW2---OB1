import DispositivoiPhone from "./DispositivoiPhone.js";
import DispositivoMac from "./DispositivoMac.js";
import DispositivoiPad from "./DispositivoiPad.js";

const identificadorDeDispositivos = ["iPhone", "iPad", "Mac"];
const iPhones = ["iPhone 12", "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"]
const iPads = ["iPad Mini", "iPad Air", "iPad Pro"]
const macs = ["MacBook Air", "MacBook Pro", "iMac", "Mac Mini"]
const color = ["Blanco", "Negro", "Silver", "Space Gray"];
const empleados = ["Nicolas", "Diego", "Lucia", "Gabriela"];
const memoria = ["64GB", "128GB", "256GB"];
const cargador = ["rapido", "normal"];
const cantidadDeSim = ["Uno", "Dos"];
const conectividad = ["LTE", "5G", "4G"];
const caracteristicasDeTipo = ["portable", "de escritorio"];


const iPhone1 = new DispositivoiPhone("Nicolas", "64GB", "Perfectas condiciones", "iPhone 13", "Silver", "1,200USD", "rapido", "Uno");
const iPhone2 = new DispositivoiPhone("Diego", "128GB", "Pantalla rota", "iPhone 12", "Space Gray", "1,080USD", "rapido", "Dos");
const iPhone3 = new DispositivoiPhone("Lucia", "128GB", "Pantalla rota", "iPhone 13", "Space Gray", "1,120USD", "normal", "Dos");
const iPhone4 = new DispositivoiPhone("Lucia", "256GB", "Rayas", "iPhone 13 Pro Max", "Negro", "1,110USD", "normal", "Dos");
const iPhone5 = new DispositivoiPhone("Nicolas", "256GB", "Rayas", "iPhone 13 Pro Max", "Blanco", "1,300USD", "rapido", "Uno");
const iPad1 = new DispositivoiPad("Diego", "128GB", "Perfectas condiciones", "iPad Mini", "Negro", "800USD", "LTE");
const iPad2 = new DispositivoiPad("Diego", "256GB", "Botón anda mal", "iPad Pro", "Blanco", "750USD", "5G");
const iPad3 = new DispositivoiPad("Gabriela", "64GB", "Pantalla funciona mal", "iPad Mini", "810USD", "Silver", "4G");
const mac1 = new DispositivoMac("Lucia", "128GB", "Raya", "MacBook Pro", "Space Gray", "2,200USD", "portable");
const mac2 = new DispositivoMac("Gabriela", "256GB", "Perfectas condiciones", "iMac", "2,350USD", "Silver", "de escritorio");



let txtNombreIngresado = document.querySelector("#txtNombreIngresado");
let selDiferenciarDispositivo = document.querySelector("#diferenciarDispositivo");
let selMemoria = document.querySelector("#memoria");
let txtDescribirDispositivo = document.querySelector("#describirDispositivo");
let selModelo = document.querySelector("#modelo");
let selColor = document.querySelector("#color");
let txtPrecio = document.querySelector("#txtPrecio")
let btnAgregar = document.querySelector("#btnAgregarProducto");
let selCargador = document.querySelector("#cargador")
let selCantidadDeSims = document.querySelector("#cantidadDeSims")
let selConectividad = document.querySelector("#conectividad")
let selTipo = document.querySelector("#tipo")
let divCaracteristicasiPhone = document.querySelector("#caracteristicasiPhone")
let divCaracteristicasiPhone2 = document.querySelector("#caracteristicasiPhone2")
let divCaracteristicasiPad = document.querySelector("#caracteristicasiPad")
let divCaracteristicasMac = document.querySelector("#caracteristicasMac")
let divDatos = document.querySelector("#box")
let nombreVerificado = false
let dispositivoVerificado = false;
let dispositivos = [iPhone1, iPhone2, iPhone3, iPad1, iPhone4, iPad2, mac1, iPad3, mac2, iPhone5];
let selFiltroDispositivo = document.querySelector("#filtroDeDispositivo");
let selFiltroModelo = document.querySelector("#filtroDeModelo");
let selFiltroColor = document.querySelector("#filtroDeColor");

btnAgregar.addEventListener("click", agregarNuevoProducto)
selDiferenciarDispositivo.addEventListener("change", cambioSelDiferenciarDispositivos)
txtNombreIngresado.addEventListener("focusout", validarNombreEmpleados);

selFiltroDispositivo.addEventListener("change", () => {
    divDatos.innerHTML = "";
    let dispositivoElegido = selFiltroDispositivo.value;
    switch (dispositivoElegido) {
        case "Todos":
            mostrarDispositivos(dispositivos);
            break;
        case "iPhone":
            let arrayFiltradoiPhone = dispositivos.filter(e => e instanceof DispositivoiPhone);
            mostrarDispositivos(arrayFiltradoiPhone);
            break;
        case "iPad":
            let arrayFiltradoiPad = dispositivos.filter(e => e instanceof DispositivoiPad);
            mostrarDispositivos(arrayFiltradoiPad);
            break;
        case "Mac":
            let arrayFiltradoMac = dispositivos.filter(e => e instanceof DispositivoMac);
            mostrarDispositivos(arrayFiltradoMac);
            break;
    }

    selFiltroModelo.value = "Todos"
    selColor.value = "Todos"

});
selFiltroModelo.addEventListener("change", () => {
    divDatos.innerHTML = "";
    let modeloElegido = selFiltroModelo.value;
    let arrayFiltrado = dispositivos.filter(e => modeloElegido === "Todos" || e.modelo === modeloElegido);
    mostrarDispositivos(arrayFiltrado)

    selColor.value = "Todos"
    selFiltroDispositivo.value = "Todos"
})


selFiltroColor.addEventListener("change", () => {
    divDatos.innerHTML = "";
    let colorElegido = selFiltroColor.value;
    let arrayFiltrado = dispositivos.filter(e => colorElegido === "Todos" || e.color === colorElegido);
    mostrarDispositivos(arrayFiltrado)

    selFiltroModelo.value = "Todos"
    selFiltroDispositivo.value = "Todos"
})
esconderDivCaracteristicas();
mostrarDispositivos(dispositivos);
cargarDatos()


function agregarNuevoProducto() {
    console.log(nombreVerificado)
    if (nombreVerificado === false) {
        return
    }
    if (dispositivoVerificado === false) {
        document.querySelector("#mensaje").textContent = "Debes seleccionar un dispositivo"
        return
    }
    const nombreIngresado = txtNombreIngresado.value;
    const diferenciarDispositivo = selDiferenciarDispositivo.value;
    const memoria = selMemoria.value;
    const describirDispositivo = txtDescribirDispositivo.value;
    const modelo = selModelo.value;
    const color = selColor.value;
    const precio = txtPrecio.value;

    console.log(diferenciarDispositivo)

    if (diferenciarDispositivo == "iPhone") {
        const cargador = selCargador.value;
        const cantidadDeSim = selCantidadDeSims.value;
        let nuevoiPhone = new DispositivoiPhone(nombreIngresado, memoria, describirDispositivo, modelo, color, precio, cargador, cantidadDeSim)
        dispositivos.push(nuevoiPhone);

        console.log(dispositivos)
    }

    else if (diferenciarDispositivo == "iPad") {
        const conectividad = selConectividad.value;
        let nuevoiPad = new DispositivoiPad(nombreIngresado, memoria, describirDispositivo, modelo, color, precio, conectividad)
        dispositivos.push(nuevoiPad);

        console.log(dispositivos)
    }
    else {
        const tipo = selTipo.value;
        let nuevaMac = new DispositivoMac(nombreIngresado, memoria, describirDispositivo, modelo, color, precio, tipo)
        dispositivos.push(nuevaMac);

        console.log(dispositivos)
    }

    txtNombreIngresado.innerHTML = "";
    txtDescribirDispositivo.innerHTML = "";
    txtPrecio.innerHTML = ""
    selFiltroDispositivo.value = "Todos"
    selFiltroModelo.value = "Todos"
    selFiltroColor.value = "Todos"

    mostrarDispositivos(dispositivos)

}



function cambioSelDiferenciarDispositivos() {
    dispositivoVerificado = true;
    const diferenciarDispositivo = selDiferenciarDispositivo.value;
    selModelo.innerHTML = ""

    esconderDivCaracteristicas()
    if (diferenciarDispositivo == "iPhone") {
        divCaracteristicasiPhone.style.display = "inline-block"
        divCaracteristicasiPhone2.style.display = "inline-block"

        for (const e of iPhones) {
            selModelo.innerHTML += `
            <option value="${e}">${e}</option>`
        }
    }

    else if (diferenciarDispositivo == "iPad") {
        divCaracteristicasiPad.style.display = "inline-block"
        for (const e of iPads) {
            selModelo.innerHTML += `
            <option value="${e}">${e}</option>`
        }
    }

    else {
        divCaracteristicasMac.style.display = "inline-block"

        for (const e of macs) {
            selModelo.innerHTML += `
            <option value="${e}">${e}</option>`
        }
    }
}



function esconderDivCaracteristicas() {
    divCaracteristicasiPhone.style.display = "none"
    divCaracteristicasiPhone2.style.display = "none"
    divCaracteristicasiPad.style.display = "none"
    divCaracteristicasMac.style.display = "none"

}


function cargarDatos() {
    for (const e of identificadorDeDispositivos) {
        selDiferenciarDispositivo.innerHTML += `
        <option value="${e}">${e}</option>`
        selFiltroDispositivo.innerHTML += `
        <option value="${e}">${e}</option>
        `
    }
    for (const e of color) {
        selColor.innerHTML += `
        <option value="${e}">${e}</option>`
        selFiltroColor.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of memoria) {
        selMemoria.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of cargador) {
        selCargador.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of cantidadDeSim) {
        selCantidadDeSims.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of conectividad) {
        selConectividad.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of caracteristicasDeTipo) {
        selTipo.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of iPhones) {
        selFiltroModelo.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of iPads) {
        selFiltroModelo.innerHTML += `
        <option value="${e}">${e}</option>`
    }
    for (const e of macs) {
        selFiltroModelo.innerHTML += `
        <option value="${e}">${e}</option>`
    }
}



function validarNombreEmpleados() {

    nombreVerificado = false;
    let nombreEmpleado = txtNombreIngresado.value;
    for (const empleado of empleados) {

        if (nombreEmpleado === empleado) {
            nombreVerificado = true
            document.querySelector("#mensaje").textContent = ""
        }

    }

    if (nombreVerificado === false) {
        document.querySelector("#mensaje").textContent = "Este empleado no existe"

    }

}


function mostrarDispositivos(dispositivos) {
    divDatos.innerHTML = "";
    for (const d of dispositivos) {
        divDatos.innerHTML += `
            <article class="muestroDispositivo">
            <h1>${d.modelo}</h1>
            <img src= "${d.foto}" >
            <p> USD ${d.precio}</p>
            </article>`;
    }

}