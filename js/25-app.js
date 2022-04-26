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


//contraseña segura
function passwordValidet(password) {
    if (password.length >= 4) {

        //validar todos los demas filtros de seguridad
        let validaciones = [letraMayuscula(password), letraMinuscula(password), cifraDecimal(password), caracterEspecial(password)];

        console.log(validaciones);

        const passwordValidado = validaciones.every(valores => valores === true);

        if (passwordValidado) {
            console.log('contraseña valida');
        } else {
            console.log('no es valido');
        }


    } else {
        console.log('no es válido');
    }
}

function letraMayuscula(password) {
    let mayusculas = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let contieneMayuscula = false, contadorMayuscula = 0;

    for (let i = 0; i < mayusculas.length; i++) {
        if (password.includes(mayusculas[i])) {
            contieneMayuscula = true;
            contadorMayuscula++;
        }
    }

    if (contieneMayuscula && contadorMayuscula == 1) {
        return contieneMayuscula;
    } else {
        return contieneMayuscula;
    }
}

function letraMinuscula(password) {
    let minusculas = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let contieneMinuscula = false;

    for (let i = 0; i < minusculas.length; i++) {
        if (password.includes(minusculas[i])) {
            contieneMinuscula = true;

        }
    }

    return contieneMinuscula;

}

function cifraDecimal(password) {
    let digitos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let contieneDigito = false;

    for (let i = 0; i < digitos.length; i++) {
        if (password.includes(digitos[i])) {
            contieneDigito = true;
        }
    }

    return contieneDigito;

}

function caracterEspecial(password) {
    let especiales = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '=', '?', '@', '[', "\ ", ']', '^', '_', '`', '{', '|', '}', '~'];
    let contieneEspeciales = false;

    for (let i = 0; i < especiales.length; i++) {
        if (password.includes(especiales[i])) {
            contieneEspeciales = true;
        }
    }

    return contieneEspeciales;
}