//Ejercicio 1
/* let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']

let arrayBidimensioanl = new Array();
let temperature, mayor = 0, menor = 999;
for (let i = 0; i < 2; i++) {
    arrayBidimensioanl[i] = new Array();

    for (let j = 0; j < 2; j++) {


        //validamos las entradas
        do {
            temperature = Number(prompt(`Ingrese temperatura del Mes ${meses[i]} día ${j + 1}`));
            arrayBidimensioanl[i][j] = temperature;
        } while (temperature > 50);


        console.log(`[${i}][${j}] = ${arrayBidimensioanl[i][j]}`);
    }
}

function getReporteMes(mes) {
    for (let i = 0; i < arrayBidimensioanl.length; i++) {
        for (let j = 0; j < arrayBidimensioanl.length; j++) {


            if (arrayBidimensioanl[mes][j] > mayor) {
                mayor = arrayBidimensioanl[mes][j];
            }
            if (arrayBidimensioanl[mes][j] < menor) {
                menor = arrayBidimensioanl[mes][j];
            }
        }
    }
    console.log(`La mayor temperatura del mes de ${meses[mes]} es: ${mayor} `);
    console.log(`La menor temperatura del mes de ${meses[mes]} es: ${menor} `);
} */



//Ejercicio 2


let numeros = [];
function llenarArray(longitud) {

    numeros = [];
    for (let i = 0; i < longitud; i++) {

        let numRandom = Math.round(Math.random() * 10);
        numeros.push(numRandom);

    }

    console.log(numeros);

}


function getArray() {
    console.log(numeros);
    console.log(numeros.sort());

    let sinRepetir = [...new Set(numeros)];
    console.log(sinRepetir);

}

function sumNumRepeat() {
    let duplicados = [], sumaRepetidos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i + 1] === numeros[i]) {
            sumaRepetidos += numeros[i];
            duplicados = [...duplicados, numeros[i]];
        }

    }
    console.log(duplicados);
    console.log(`La suma de los números repetidos es: ${sumaRepetidos}`);
}



//Ejercicio 3
class Empleado {
    constructor(codigo, nombres, area, servicio, condicion, sueldoBase, nHijos) {
        this.codigo = codigo;
        this.nombres = nombres;
        this.area = area;
        this.servicio = servicio;
        this.condicion = condicion;
        this.sueldoBase = sueldoBase;
        this.nHijos = nHijos;
    }
    asignacionMovilidad() {
        let movilidad = 0;
        if (this.condicion === 'Contratado' && this.area === 'Planificacion') {
            movilidad = this.sueldoBase * 0.07;
        }
        if (this.condicion === 'Contratado' && this.area === 'Ventas') {
            movilidad = this.sueldoBase * 0.08;
        }

        if (this.condicion === 'Estable' && this.area === 'Planificacion') {
            movilidad = this.sueldoBase * 0.09;
        }
        if (this.condicion === 'Estable' && this.area === 'Ventas') {
            movilidad = this.sueldoBase * 0.12;
        }

        return movilidad;
    }

    montoPorHijo() {
        let monto = this.nHijos * 55;
        return monto;
    }
    montoImpuesto() {
        let impuesto = this.sueldoBase * 0.18;
        return impuesto;
    }

    calcularSueldoFinal() {
        let sueldoFinal = Number(this.sueldoBase) + Number(this.asignacionMovilidad()) + Number(this.montoPorHijo()) + Number(this.montoImpuesto());
        return sueldoFinal;
    }

    mostrarResultado() {
        return `Sr(a) ${this.nombres} su sueldo neto es de S/.${this.calcularSueldoFinal()}`
    }
}


class Interfaces {
    mensaje(mensaje, tipo, pos) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.add('mensaje', 'contenedorMensaje');

        const pMensaje = document.createElement('p');
        pMensaje.textContent = mensaje;


        if (tipo === 'error') {
            div.style.color = 'red';
        } else {
            div.style.color = 'black';
        }


        const getDiv = document.querySelector('.contenedorMensaje');
        if (getDiv != null) {
            getDiv.remove();
        }
        div.appendChild(pMensaje);

        pos.appendChild(div);
    }
}


//validamos entradas
//variables
const codigo = document.querySelector('#codigo');
const nombre = document.querySelector('#nombre');
const area = document.querySelector('#area');
const tiempo = document.querySelector('#tiempo');
const condicion = document.querySelector('#condicion');
const sueldo = document.querySelector('#sueldo');
const hijos = document.querySelector('#hijos');
const formulario = document.querySelector('#formulario');

//funciones
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', validarEntrada);
}

function validarEntrada(e) {
    e.preventDefault();
    //vemos si alguno de los campos estan vacios
    let inputs = [codigo, nombre, area, tiempo, condicion, sueldo, hijos];
    const campoVacio = inputs.some(elemento => elemento.value === '');

    if (campoVacio) {
        const mensajeError = new Interfaces();
        mensajeError.mensaje('Complete todos los campos', 'error', formulario);
        return;
    }
    const getDiv = document.querySelector('.contenedorMensaje');
    if (getDiv != null) {
        getDiv.remove();
    }

    console.log(condicion.value, area.value);

    //instanciamos la clase empleado para calcular su sueldo final
    const empleado = new Empleado(codigo.value, nombre.value, area.value, tiempo.value, condicion.value, sueldo.value, hijos.value);
    const mensajeCalculo = new Interfaces();
    mensajeCalculo.mensaje(empleado.mostrarResultado(), 'success', formulario);


}

