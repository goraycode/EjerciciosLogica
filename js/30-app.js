import { UI, Alumno } from "./29-app.js";

const gestionar = document.querySelector('.gestionar');

const formularioDocente = document.querySelector('#formularioDocente');
const nombreDocente = document.querySelector('#nombreDocente');
const apellidoDocente = document.querySelector('#apellidoDocente');
const curso = document.querySelector('#curso');


const buttons = document.querySelector('.buttons');
const btnMatricular = document.querySelector('#btnMatricular');
const btnBuscar = document.querySelector('#btnBuscar');
const btnVer = document.querySelector('#btnVer');


let matriculados = [];

let alumno = {
    codigoAlu: '',
    nombreAlu: '',
    apellidoAlu: '',
    telefonoAlu: '',
    direccionAlu: ''

}

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', ocultos);

    formularioDocente.addEventListener('submit', validarDocente);
}

function ocultos() {
    buttons.style.display = 'none';
}

function validarDocente(e) {
    e.preventDefault();
    if (nombreDocente.value === '' || apellidoDocente.value === '' || curso.value === '') {
        const mensajeError = new UI();
        mensajeError.mensaje('Todos los campos son obligatorios', 'error', formularioDocente);
        return;
    }

    const mensajeSaludo = new UI();
    mensajeSaludo.mensaje(`Bienvenido profesor(a) ${nombreDocente.value} ${apellidoDocente.value} - Curso: ${curso.value}`, 'success', formularioDocente);

    buttons.style.display = 'block';

    botones();
}


function botones() {
    btnMatricular.addEventListener('click', () => {
        const formularioAlumno = new UI();
        formularioAlumno.campoAlumno(gestionar);

        validarCamposAlumno();
    });
}

function validarCamposAlumno() {
    const formularioAlumno = document.querySelector('#formularioAlumno');
    const nombreAlumno = document.querySelector('#nombreAlumno');
    const apellidoAlumno = document.querySelector('#apellidoAlumno');
    const telefono = document.querySelector('#telefono');
    const direccion = document.querySelector('#direccion');
    const codigoGenerado = document.querySelector('#codigoGenerado');


    nombreAlumno.addEventListener('blur', (e) => {
        campoAlumno(e.target.value, 'Escriba el nombre');
    });
    apellidoAlumno.addEventListener('blur', (e) => {
        campoAlumno(e.target.value, 'Escriba el apellido');
    });
    telefono.addEventListener('blur', (e) => {
        campoAlumno(e.target.value, 'Escriba el telefono');
    });

    direccion.addEventListener('blur', (e) => {
        campoAlumno(e.target.value, 'Escriba la direccion');
    });

}

function campoAlumno(valor, mensajeCampo) {
    const formularioAlumno = document.querySelector('#formularioAlumno');
    const nombreAlumno = document.querySelector('#nombreAlumno');
    const apellidoAlumno = document.querySelector('#apellidoAlumno');
    const telefono = document.querySelector('#telefono');
    const direccion = document.querySelector('#direccion');
    const codigoGenerado = document.querySelector('#codigoGenerado');
    const formularioBtn = document.querySelector('#formularioAlumno .btn');

    if (valor === '') {
        const mensajeError = new UI();
        mensajeError.mensaje(mensajeCampo, 'error', formularioAlumno);
        return;
    }

    //generamos la contraseña del alumno
    const nuevoAlumno = new Alumno(nombreAlumno.value, apellidoAlumno.value, direccion.value, telefono.value);
    //mostramos en el input disabled
    codigoGenerado.value = nuevoAlumno.generarCodigo();

    let campos = [nombreAlumno, apellidoAlumno, telefono, direccion, codigoGenerado];
    const todosValidados = campos.every(campo => campo.value != '');
    if (todosValidados) {
        formularioBtn.style.display = 'block';

        formularioAlumno.addEventListener('submit', matricularAlumno);
    }
}

function matricularAlumno(e) {
    const nombreAlumno = document.querySelector('#nombreAlumno');
    const apellidoAlumno = document.querySelector('#apellidoAlumno');
    const telefono = document.querySelector('#telefono');
    const direccion = document.querySelector('#direccion');
    const codigoGenerado = document.querySelector('#codigoGenerado');
    e.preventDefault();
    alumno = {
        codigoAlu: codigoGenerado.value,
        nombreAlu: nombreAlumno.value,
        apellidoAlu: apellidoAlumno.value,
        telefonoAlu: telefono.value,
        direccionAlu: direccion.value
    }

    //llevamos el objeto al array  y evitamos que se repitan 
    let { codigoAlu } = alumno;

    

    const existe = matriculados.some(matriculado => matriculado.codigoAlu === codigoAlu);
    if (existe) {
        const matriculadosActualizados = matriculados.map(matriculado => {
            if (matriculado.codigoAlu === codigoAlu) {
                errorMatricula();
            }

            return matriculado;
        });

        matriculados = [...matriculadosActualizados];
    } else {
        matriculados = [...matriculados, alumno];
        avisoMatriculado();
    }

    console.log(matriculados.length);



}

function avisoMatriculado() {
    const formularioAlumno = document.querySelector('#formularioAlumno');
    const formularioBtn = document.querySelector('#formularioAlumno .btn');
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Alumno matriculado',
        showConfirmButton: false,
        timer: 1500
    });
    formularioBtn.style.display = 'none';
    formularioAlumno.reset();
}


function errorMatricula() {
   
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Código generado esta ocupado con otro alumno matriculado',
        showConfirmButton: false,
        timer: 3000
    });
   
}