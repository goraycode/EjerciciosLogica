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



function realizarVenta(tipoVehiculo, nombres, apellidos, marca, anioFabrica, precioBase) {

    const nuevoPropietario = new Propietario(nombres, apellidos);

    switch (tipoVehiculo) {
        case 'camion':
            let pesoTransporte = Number(prompt('Ingrese peso carga'));
            const nuevoCamion = new Camion(marca, anioFabrica, precioBase, pesoTransporte);

            imprimirFactura(nuevoCamion, tipoVehiculo, nuevoPropietario);

            break;
        case 'bicicleta':
            let cantAros = Number(prompt('Ingrese la cantidad de aros'));
            const nuevaBici = new Bicicleta(marca, anioFabrica, precioBase, cantAros, true);
            imprimirFactura(nuevaBici, tipoVehiculo, nuevoPropietario);
            break;
        case 'minibus':
            let cantPasajeros = Number(prompt('Ingrese la cantidad de pasajeros'));
            const nuevaMinibus = new Minibus(marca, anioFabrica, precioBase, cantPasajeros);
            imprimirFactura(nuevaMinibus, tipoVehiculo, nuevoPropietario);
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
let comprarVehiculo = prompt('Ingrese el tipo de vehículo a comprar');
realizarVenta(comprarVehiculo, 'Gerson Jofre', 'Aguedo Yanac', 'Volvo', 2020, 2000);