class Reniec {

    constructor(edad) {
        this.edad = edad;
    }

    calcularEdadMayor() {
        let resultado = this.edad >= 18 ? 'Eres mayor de edad' : 'Usted es menor de edad';
        return resultado;
    }
}


//instancia de la clase Reniec

const nuevaPersona = new Reniec(21);
console.log(nuevaPersona.calcularEdadMayor());


class calcularNumero {

    constructor(numero) {
        this.numero = numero;
    }

    calcularPrimo() {

        if (this.numero <= 0) {
            return `${this.numero} indeterminado`;
        }

        if (this.numero === 1 || this.numero == 4) {
            return `${this.numero} es compuesto`;
        }

        for (let i = 2; i < this.numero / 2; i++) {
            if (this.numero % i == 0) {
                return `${this.numero} es compuesto`;
            }
        }

        return `${this.numero} es primo`;
    }
}

//isntancia de la clase calcularNumero
const evaluarNumero = new calcularNumero(7);
console.log(evaluarNumero.calcularPrimo());




class sumaImpares {
    constructor(N) {
        this.numero = N;
    }

    calcularSuma() {
        this.mostrarImpares();
        this.numero = Math.pow(this.numero, 2);
        return `La suma de número impares es: ${this.numero}`;

    }

    mostrarImpares() {
        //mostramos todos los impares hasta el número ingresado
        for (let i = 0; i <= 2 * this.numero; i++) {

            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
}

//instanciua de la clase
const sImpares = new sumaImpares(10);
console.log(sImpares.calcularSuma());

