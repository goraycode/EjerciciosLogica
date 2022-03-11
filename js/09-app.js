//variables
const formulario = document.querySelector('#formulario');
const largeLote = document.querySelector('#large');
const widhtLote = document.querySelector('#width');
const mineral = document.querySelector('#mineral');

//eventos
eventListeners();
function eventListeners() {

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarDatos();
    });
}


function validarDatos() {
    let dimensionLote;
    let lote = '';
    if (largeLote.value === '' || widhtLote.value === '' || mineral.value === '') {
        mensaje('Fatan llenar campos', 'error');
    } else {

        dimensionLote = Number(largeLote.value) * Number(widhtLote.value);

        if (mineral.value == 'interes') {
            lote = 'especial'
            mensaje(`En el lote de dimensiones de ${dimensionLote}m^2 es ${lote} en la que usted puede sembrar granos de cosecha gruesa y fina`, 'success');
        } else {
            lote = 'común'
            mensaje(`En el lote de dimensiones de ${dimensionLote}m^2 es ${lote} en la que usted puede sembrar granos de cosecha gruesa y fina`, 'success');
        }
    }
}

function mensaje(mensaje, tipo) {
    const div = document.createElement('div');
    div.classList.add('container-div');
    const p = document.createElement('p');
    p.textContent = mensaje;


    if (tipo === 'error') {
        div.style.backgroundColor = 'white';
        div.style.borderColor = 'red';
        p.style.color = 'black';
    } else {
        div.style.backgroundColor = 'green';
        div.style.borderColor = 'white';
        p.style.color = 'black';
    }

    const selectDiv = document.querySelector('.container-div');
    if (selectDiv !== null) {
        selectDiv.remove();
    }

    div.appendChild(p);

    //insertamos en el formulario
    formulario.appendChild(div);
}