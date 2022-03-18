const nombre = document.querySelector('#nombre');
const edad = document.querySelector('#edad');

const formulario = document.querySelector('#formEdad');

//eventListeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', validarDatos);
}

function validarDatos(e) {
    e.preventDefault();

    if (nombre.value === '' || edad.value === '') {
        divMensaje('Faltan llenar campos', 'error');
    } else {
        divMensaje(`Ud. ${nombre.value} ha vivido hasta el momento ${calculoDiasVividos(edad.value)} días`, 'success');
    }
}

function calculoDiasVividos(edad) {
    let diasVividos = edad * 365;
    return diasVividos;
}

function divMensaje(mensaje, tipo) {
    const div = document.createElement('div');
    div.classList.add('contenedorMensaje');
    div.style.padding = '0 1rem';

    const p = document.createElement('p');
    p.textContent = mensaje;
    div.appendChild(p);

    if (tipo === 'error') {
        div.style.backgroundColor = 'red';
        setTimeout(() => {
            div.remove();
        }, 3000);
    } else {
        div.style.backgroundColor = 'cyan';
    }

    //para evitar que se repita el mensaje
    const getDiv = document.querySelector('.contenedorMensaje');

    if (getDiv !== null) {
        getDiv.remove();
    }




    formulario.appendChild(div);

}