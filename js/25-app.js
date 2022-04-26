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
}

const formulario = document.querySelector('#formulario');
const cedula = document.querySelector('#cedula');
const nombre = document.querySelector('#nombre');
const sueldo = document.querySelector('#sueldo');

eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', validaIngreso);
}


function validaIngreso(e) {
    e.preventDefault();

    //validamos que los campos no esten vacios
    let entradas = [cedula, nombre, sueldo];
    const camposValue = entradas.some(campos => campos.value === '');

    if (camposValue) {

        const mensajeError = new Interfaces();
        mensajeError.mensaje('Complete todos los campos', 'error', formulario);
        return;
    }

    const impresionInfo = new Interfaces();
    impresionInfo.mensaje(`Salario bruto ${sueldo.value} <br> 
                            8 % de CCSS ${calcularCCSS(sueldo.value)}
                            <br> 1 % del Banco popular ${bancoPopular(sueldo.value)}
                            <br> Total de deducciones ${totalDeducciones(sueldo.value)}
                            <br> Salario neto: ${sueldoNeto(sueldo.value)}`
        , 'success', formulario);

}

function calcularCCSS(sueldo) {
    return (Number(sueldo) % 8).toFixed(2);
}

function bancoPopular(sueldo) {
    return (Number(sueldo) % 1).toFixed(2);
}
function totalDeducciones(sueldo) {
    return Number(calcularCCSS(sueldo)) + Number(bancoPopular(sueldo));
}

function sueldoNeto(sueldo) {
    return Number(totalDeducciones(sueldo)) + Number(sueldo);
}

