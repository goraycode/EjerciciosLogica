//Reto Fizz Buzz

/* Todos los multiplos de 3 deben imprimir Fizz
    Todos los multiplos de 5 deben imprimir Buzz
    Todos los multiplos de 3 y 5 deben imprimir Fizz Buzz
 */

/* for (let i = 0; i < 100; i++) {

    if (i === 0) {
        continue;
    }

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }


}
 */

//Fibonnacci

/* 
function fibonacci(numLim) {

    let a = 0, b = 0, c = 0;
    for (let i = 1; i <= numLim; i++) {

        if (i == 1) {
            console.log('1');
        }

        if (i == 2) {
            a = 1;
            b = 1;
            console.log(`${a}`);
        }

        if (i >= 3) {
            c = a + b;
            a = b;
            b = c;
            console.log(`${c}`);
        }
    }
}


fibonacci(7); */



//Factorial de un número
//Con arrow function


/* let factNum = ((num) => {
    let x = 1;
    for (let i = 1; i <= num; i++) {
        x = x * i;
    }
    console.log(`El factorial del ${num} es ${x}`);
});


factNum(4); */



/* Práctica del DOM
    Cerrar y mostrar más cards
*/

const btnMostrarOcultar = document.querySelector('.btnMostrarOcultar');

const cards = document.querySelector('section.hacer .contenedor-cards');

//Evento cuando da click
btnMostrarOcultar.addEventListener('click', mostrarOcultarCards);



for (let i = 0; i < cards.children.length; i++) {

    if (i > 2) {
        cards.children[i].classList.add('oculto');
    }
}

function mostrarOcultarCards() {

    let oculto;
    for (let i = 0; i < cards.children.length; i++) {

        if (i > 2) {
            oculto = cards.children[i].classList.toggle('oculto');
        }
    }


    btnMostrarOcultar.textContent = oculto ? "Ver más" : "Ver menos";
}

/*Generar el código de un cliente en función a los datos que éste ingrese a través de un formulario: 
Nombres, Apellido Paterno, Apellido Materno, DNI, edad, ubicación geográfica (País) y fecha de nacimiento, 
el código debe mostrarse en pantalla  */

const formulario = document.querySelector('.form');

const nameU = document.querySelector('#name');
const ApPaterno = document.querySelector('#ApPaterno');
const ApMaterno = document.querySelector('#ApMaterno');
const DNI = document.querySelector('#DNI');
const edad = document.querySelector('#edad');
const ubication = document.querySelector('#ubication');
const fechaNacimiento = document.querySelector('#fechaNacimiento');

const button = document.querySelector('.button');
const buttonReset = document.querySelector('.button-reset');



//codigo
const codigo = document.createElement('p');
codigo.style.backgroundColor = 'blue';
codigo.style.color = 'white';
codigo.style.fontSize = '1.4rem';
codigo.style.padding = '1rem 0';


//errores
const errores = document.createElement('p');
errores.style.backgroundColor = 'red';
errores.style.color = 'white';
errores.style.fontSize = '1.6rem';
errores.style.padding = '0.5rem 0';



eventListeners();
function eventListeners() {
    //cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);


    //campos del formulario
    nameU.addEventListener('blur', validarFormulario); //blur se ejecuta cuando sale de ese campo
    ApPaterno.addEventListener('blur', validarFormulario);
    ApMaterno.addEventListener('blur', validarFormulario);
    DNI.addEventListener('blur', validarFormulario);
    edad.addEventListener('blur', validarFormulario);
    ubication.addEventListener('blur', validarFormulario);
    fechaNacimiento.addEventListener('blur', validarFormulario);

    buttonReset.addEventListener('click', resetFormulario);


    //generarCodigo
    formulario.addEventListener('submit', generarCodigo);
}


function iniciarApp() {
    button.disabled = true;
    button.classList.add('button-in');
}



function validarFormulario(e) {
    if (e.target.value.length > 0) {


        errores.remove();

    } else {
        errores.textContent = 'Faltan campos por llenar';
        formulario.appendChild(errores);
    }

    if (nameU.value !== '' && ApPaterno.value !== '' && ApMaterno.value !== '' && DNI.value !== '' && edad.value !== '' && ubication.value !== '' && fechaNacimiento.value !== '') {
        button.disabled = false;
        button.classList.remove('button-in');
    } else {
        button.disabled = true;
        button.classList.add('button-in');
    }
}

function generarCodigo(e) {
    e.preventDefault();

    console.log(fechaNacimiento.value);

    codigo.textContent = `${nameU.value.slice(0, 3)}${ApPaterno.value.slice(0, 3)}${ApMaterno.value.slice(0, 3)}${DNI.value.slice(0, 5)}${edad.value}${ubication.value.slice(0, 5)}${fechaNacimiento.value.slice(0, 4)}`;

    console.log(codigo.textContent);
    formulario.appendChild(codigo);


}


function resetFormulario(e) {
    e.preventDefault();
    formulario.reset();
    iniciarApp();
    errores.remove();
    codigo.remove();

}