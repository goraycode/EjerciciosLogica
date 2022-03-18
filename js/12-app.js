//variables
const buttonMagenta = document.querySelector('#Magenta');
const buttonRojo = document.querySelector('#Rojo');
const buttonVerde = document.querySelector('#Verde');
const buttonAmarillo = document.querySelector('#Amarillo');
const buttonCyan = document.querySelector('#Cyan');


//eventos
buttonMagenta.addEventListener('click', () => {
    document.body.style.backgroundColor = 'magenta';
});

buttonRojo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

buttonVerde.addEventListener('click', () => {
    document.body.style.backgroundColor = 'greenyellow';
});


buttonAmarillo.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});

buttonCyan.addEventListener('click', () => {
    document.body.style.backgroundColor = 'cyan';
});

