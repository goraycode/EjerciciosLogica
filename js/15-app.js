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
            alternarImagen(img, option);
            break;
        case '2':
            alternarImagen(img, option);
            break;

        case '3':
            alternarImagen(img, option);
            break;
        case '4':
            alternarImagen(img, option);
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



function alternarImagen(imagen, option) {
    const num = Number(option);
    imagen.src = `img/hacer${num}.jpg`;
    setTimeout(() => {
        imagen.src = `img/populares${num}.jpg`;
    }, 1000);
}