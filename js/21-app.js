class Chofer {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getEdad() {
        return this.edad;
    }

    mostrarDatosChofer() {
        return `Chofer \n Nombre:  ${this.getNombre()} \nApellido: ${this.getApellido()}\n Edad: ${this.getEdad()} `;
    }

}

//instanciamos la clase Chofer
const nuevoChofer = new Chofer('Gerson', 'Aguedo', 21);
console.log(nuevoChofer.mostrarDatosChofer());



class Instructor extends Chofer {
    #instructor
    constructor(nombre, apellido, edad, id) {
        super(nombre, apellido, edad);
        this.#instructor = id;
    }
    setidInstructor(idNuevo) {
        this.id = idNuevo;
    }

    getidInstructor() {
        return this.#instructor;
    }

    mostrarDatosInstructor() {
        return `Instructor con el id: ${this.getidInstructor()} \n Nombre:  ${this.nombre} \nApellido: ${this.apellido}\n Edad: ${this.edad} `;
    }
}

const nuevoInstructor = new Instructor('Mario', 'Lopez', 54, '18.335.153');
console.log(nuevoInstructor.mostrarDatosInstructor());