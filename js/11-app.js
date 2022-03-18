let empleados = [
    {

        nombre: 'Luisa',
        puesto: 'Cajera',
        salario: 420
    },

    {
        nombre: 'Jimena',
        puesto: 'Supervisor',
        salario: 1200
    },
    {
        nombre: 'Roger',
        puesto: 'Chofer',
        salario: 480
    }
];


let resultado = empleados.find(empleado => empleado.puesto === 'Chofer');

document.write(`Chofer <br>Nombre: ${resultado.nombre}, Puesto: ${resultado.puesto},  Salario: ${resultado.salario}`);