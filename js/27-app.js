import { passwordValidet, letraMayuscula, letraMinuscula, cifraDecimal, caracterEspecial } from "./26-app.js";

class Interfaces {
    mensaje(mensaje, tipo, pos) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.classList.add('mensaje', 'contenedorMensaje');

        const pMensaje = document.createElement('p');
        pMensaje.innerHTML = `
                <b>${mensaje}</b>
            `;


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

    filtroMensaje(valorBool, pos, password) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.style.color = 'red';
        div.classList.add('mensaje', 'contenedorMensaje');

        const pMensajeM = document.createElement('p');
        const pMensajem = document.createElement('p');
        const pMensajecifra = document.createElement('p');
        const pMensajeEspecial = document.createElement('p');




        if (!letraMayuscula(password)) {
            pMensajeM.textContent = 'Falta la mayuscula';
        }

        if (!letraMinuscula(password)) {
            pMensajem.textContent = 'Faltan minusculas';
        }
        if (!cifraDecimal(password)) {
            pMensajecifra.textContent = 'Faltan números del 0-9';
        }

        if (!caracterEspecial(password)) {
            pMensajeEspecial.textContent = 'Faltan caracteres especiales';
        }


        const getDiv = document.querySelector('.contenedorMensaje');
        if (getDiv != null) {
            getDiv.remove();
        }

        div.appendChild(pMensajeM);
        div.appendChild(pMensajem);
        div.appendChild(pMensajecifra);
        div.appendChild(pMensajeEspecial);


        if (valorBool === false) {
            pos.appendChild(div);
        }

    }
}


const formulario = document.querySelector('#formulario');
const nombreUser = document.querySelector('#nombre');
const passwordUser = document.querySelector('#password');

eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', validarIngreso);
}

function validarIngreso(e) {
    e.preventDefault();
    if (nombreUser.value === '' || passwordUser.value === '') {
        const mensajeError = new Interfaces();
        mensajeError.mensaje('Complete ambos campos', 'error', formulario);
        return;
    }


    const mensajePassword = new Interfaces();
    if (passwordValidet(passwordUser.value) === 'error') {
        mensajePassword.mensaje('Longitud muy corta de contraseña', 'error', formulario);
    } else if (passwordValidet(passwordUser.value) === false) {

        const mensajeFiltro = new Interfaces();
        mensajeFiltro.filtroMensaje(false, formulario, passwordUser.value);


    } else {

        mensajePassword.mensaje('Guardado', 'error', formulario);
        setTimeout(() => {
            formulario.reset();
            const getDiv = document.querySelector('.contenedorMensaje');
            getDiv.remove();
        }, 3000);

    }

}

