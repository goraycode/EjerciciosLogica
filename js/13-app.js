//variables
const buttonMagenta = document.querySelector('#Magenta');
const buttonRojo = document.querySelector('#Rojo');
const buttonVerde = document.querySelector('#Verde');
const buttonAmarillo = document.querySelector('#Amarillo');
const buttonCyan = document.querySelector('#Cyan');

const box = document.querySelector('.box');

//eventos
eventListeners();
function eventListeners() {
    buttonMagenta.addEventListener('click', (e) => {
        e.preventDefault();
        const color = 'magenta';
        seleccionFondo(color);
    });

    buttonRojo.addEventListener('click', (e) => {
        e.preventDefault();
        const color = 'red';
        seleccionFondo(color);
    });

    buttonVerde.addEventListener('click', (e) => {
        e.preventDefault();
        const color = 'greenyellow';
        seleccionFondo(color);
    });

    buttonAmarillo.addEventListener('click', (e) => {
        e.preventDefault();
        const color = 'yellow';
        seleccionFondo(color);
    });

    buttonCyan.addEventListener('click', (e) => {
        e.preventDefault();
        const color = 'cyan';
        seleccionFondo(color);
    });

}


//funciones
function seleccionFondo(color) {

    const radio = document.querySelector('input[name="fondo"]:checked').value;

    if (radio !== '') {

        colorearFondo(radio, color);
    } else {
        console.log('estamos mal');
    }
}

function colorearFondo(tipo, color) {
    if (tipo === 'documento') {
        document.body.style.backgroundColor = color;
        box.style.backgroundColor = 'transparent';
    } else {
        document.body.style.backgroundColor = 'transparent';

        box.style.backgroundColor = color;
    }
}