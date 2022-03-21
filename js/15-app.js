//variables
const formSelect = document.querySelector('#formSelect');
const selectImagen = document.querySelector('#imagen');

//eventListeners
eventListeners();
function eventListeners() {
    selectImagen.addEventListener('change', (e) => {
        e.preventDefault();
        contenedorImg(e.target.value);
    });
}


//funciones
function contenedorImg(option) {
    const div = document.createElement('div');
    div.classList.add('campo', 'divImagen');
    const img = document.createElement('img');
    img.alt = 'Imagen seleccionada';

    console.log(option);
    switch (option) {
        case '1':
            img.src = 'img/hacer1.jpg';
            break;
        case '2':
            img.src = 'img/hacer2.jpg';
            break;

        case '3':
            img.src = 'img/hacer3.jpg';
            break;
        case '4':
            img.src = 'img/hacer4.jpg';
            break;

        default:
            console.log('No se pudo cargar imagen');
            break;
    }

    //actualizamos la imagen del documento
    const contenedor = document.querySelector('.divImagen');

    if (contenedor !== null) {
        contenedor.remove();
    }

    div.appendChild(img);

    formSelect.appendChild(div);
}

