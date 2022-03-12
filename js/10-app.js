//variables
const formulario = document.querySelector('#formulario');
const anioFabrica = document.querySelector('#anioFabricacion');
const precioBase = document.querySelector('#precioBase');

//para agregar un campo más de acuerdo al vehículo que se seleccionó
const anioPrecio = document.querySelector('.anioPrecio');


const nombres = document.querySelector('#nombres');
const apellidos = document.querySelector('#apellidos');



//eventos
eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', interfazUsuario)

    formulario.addEventListener('submit', validarDatos);
}


class UI {

    preguntaAdicional(title, tipoVehiculo) {

        Swal.fire({
            title: title,
            input: 'number',
            inputPlaceholder: '500',
        });

        const budgetContainer = document.querySelector('.swal2-container');
        const budgetInput = document.querySelector('.swal2-input');

        budgetContainer.addEventListener('click', (e) => {
            const budgetValue = Number(budgetInput.value);

            if (e.target.classList.contains('swal2-container') || e.target.classList.contains('swal2-confirm')) {
                if (budgetValue === '' || budgetValue <= 0 || isNaN(budgetValue)) {
                    window.location.reload();
                } else {
                    const nuevoPropietario = new Propietario(nombres.value, apellidos.value);
                    switch (tipoVehiculo) {
                        case 'camion':
                            const nuevoCamion = new Camion('Volvo', Number(anioFabrica.value), Number(precioBase.value), Number(budgetValue));
                            imprimirFactura(nuevoCamion, tipoVehiculo, nuevoPropietario);
                            break;

                        case 'bicicleta':
                            const nuevaBici = new Bicicleta('Volvo', Number(anioFabrica.value), Number(precioBase.value), Number(budgetValue), true);
                            imprimirFactura(nuevaBici, tipoVehiculo, nuevoPropietario);
                            break;
                        case 'minibus':
                            const nuevaMinibus = new Minibus('volvo', Number(anioFabrica.value), Number(precioBase.value), Number(budgetValue));
                            imprimirFactura(nuevaMinibus, tipoVehiculo, nuevoPropietario);
                            break;
                        default:
                            break;
                    }

                }
            }
            if (e.target.classList.contains('swal2-popup')) {
                return;
            }
        });

    }

    llenarSelect() {
        let maxAnio = new Date().getFullYear();

        for (let i = maxAnio; i >= 2000; i--) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;

            anioFabrica.appendChild(option);
        }

    }

    impresionFactura(){
        
    }


    mensajeError() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan llenar campos',
        })
    }
}
//instanciamos la clase
const ui = new UI();




//clase padre
class Vehiculo {
    constructor(marca, anioFabrica, precioBase) {
        this.marca = marca;
        this.anioFabrica = anioFabrica;
        this.precioBase = precioBase;
    }
}

//heredamos de la clase padre (vehiculo) para el caso de camion

class Camion extends Vehiculo {

    constructor(marca, anioFabrica, precioBase, pesoTransporte) {
        //llamamos a los atributos de la clase vehiculo
        super(marca, anioFabrica, precioBase,);
        this.pesoTransporte = pesoTransporte;
        this.precio = 0;

    }

    mostrar() {
        return `El precio del camión es de: ${this.calcularPrecio()}`;
    }

    calcularPrecio() {
        //año de fabrica
        if (this.anioFabrica === 2020 || this.anioFabrica === 2021) {
            this.precio += this.precioBase * 1.10;
        } else if (this.anioFabrica >= 2015 && this.anioFabrica <= 2019) {
            this.precio += this.precioBase * 1.05;
        } else {
            this.precio = this.precioBase;
        }

        //kg de transporte
        if (this.pesoTransporte >= 100 && this.pesoTransporte <= 200) {
            this.precio += this.precioBase * 1.20;
        } else if (this.pesoTransporte >= 50 && this.pesoTransporte <= 99) {
            this.precio += this.precioBase * 1.10;
        } else {
            this.precio = this.precio;
        }

        return this.precio;
    }
}

//instancia de la clase camion
/* const camionNuevo = new Camion('Volvo', 2021, 2000, 155);
console.log(camionNuevo.mostrar());
 */

//otra clase hija del padre vehiculo

class Bicicleta extends Vehiculo {
    constructor(marca, anioFabrica, precioBase, aro, caja) {
        super(marca, anioFabrica, precioBase);
        this.aro = aro;
        this.caja = caja;
        this.precio = 0;
    }

    mostrar() {
        return `El precio de la bicicleta es de: ${this.calcularPrecio()}`;
    }

    calcularPrecio() {
        if (this.aro > 20) {
            this.precio = this.precioBase * 1.20;
        } else {
            this.precio = this.precioBase * 1.10;
        }
        return this.precio.toFixed(2);
    }

}

//instanciamos la clase
/* const biciNueva = new Bicicleta('Toshiba', 2020, 115, 10);
console.log(biciNueva.mostrar()); */



//otra clase hija (minibuses) del padre vehiculo
class Minibus extends Vehiculo {
    constructor(marca, anioFabrica, precioBase, cantPasajeros) {

        super(marca, anioFabrica, precioBase);
        this.cantPasajeros = cantPasajeros;
        this.precio = 0;
    }

    mostrar() {
        return `El precio del minibus es de: ${this.calcularPrecio()}`;
    }

    calcularPrecio() {
        if (this.anioFabrica >= 2015 && this.anioFabrica <= 2021) {
            this.precio = this.precioBase * 1.20;
        } else if (this.anioFabrica >= 2010 && this.anioFabrica <= 2014) {
            this.precio = this.precioBase * 1.10;
        } else {
            this.precio = this.precioBase;
        }
        return this.precio.toFixed(2);
    }
}


//instanciamos la clase
/* const minibusNuevo = new Minibus('Hundai', 2005, 3000, 50);
console.log(minibusNuevo.mostrar());
 */


//creamos la clase propietario
class Propietario {

    constructor(nombres, apellidos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
    }

    mostrarDatos() {
        return `${this.nombres} ${this.apellidos}`;
    }
}

//instanciamos la clase propietario
/* const propietarioNuevo = new Propietario('Gerson Jofre', 'Aguedo Yanac');
console.log(propietarioNuevo.mostrarDatos());

 */
//creamos la clase factura
class Factura {
    constructor() {
        this.tipoVehiculo = '';
        this.marca = '';
        this.precioBase = 0;
        this.precioTotal = 0;
        this.anioFabrica = 0;
        this.propietario = '';
        this.pesoTransporte = 0;
        this.cantAros = 0;
        this.cantPasajeros = 0;

    }
    imprimirFactura() {

        return `
            Tipo de vehículo: ${this.tipoVehiculo} \n
            Marca: ${this.marca} \n
            Año de fábrica: ${this.anioFabrica} \n
            Precio Base: ${this.precioBase} \n
            Precio Total: ${this.precioTotal} \n
            Propietario: ${this.propietario}
        `;
    }
}

interfazUsuario();
function interfazUsuario() {
    ui.llenarSelect();
}



function validarDatos(e) {
    e.preventDefault();
    const tipoVehiculo = document.querySelector('input[name="vehiculo"]:checked').value;

    if (anioFabrica.value === '' || precioBase.value === '' || nombres.value === '' || apellidos.value === '') {
        ui.mensajeError();
    } else {
        realizarVenta(tipoVehiculo);
    }


}


function realizarVenta(tipoVehiculo) {
    switch (tipoVehiculo) {
        case 'camion':
            ui.preguntaAdicional('Ingrese el peso de carga', tipoVehiculo);

            break;
        case 'bicicleta':
            ui.preguntaAdicional('Ingrese la cantidad de aros', tipoVehiculo);
            break;
        case 'minibus':
            ui.preguntaAdicional('Ingrese la capacidad de pasajeros', tipoVehiculo);
        default:
            break;
    }
}


function imprimirFactura(vehiculoNuevo, tipoVehiculo, propietarioNuevo) {
    const facturaNueva = new Factura();
    facturaNueva.tipoVehiculo = tipoVehiculo;
    facturaNueva.marca = vehiculoNuevo.marca;
    facturaNueva.precioBase = vehiculoNuevo.precioBase;
    facturaNueva.precioTotal = vehiculoNuevo.calcularPrecio();
    facturaNueva.anioFabrica = vehiculoNuevo.anioFabrica;
    facturaNueva.propietario = propietarioNuevo.mostrarDatos();
    console.log(facturaNueva.imprimirFactura());
}


//creamos una nueva venta
//let comprarVehiculo = prompt('Ingrese el tipo de vehículo a comprar');
//camion
//realizarVenta('camion', 'Gerson Jofre', 'Aguedo Yanac', 'Volvo', 2020, 2000);