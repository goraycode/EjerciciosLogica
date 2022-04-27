function getTemperature(temp) {
    if (temp > 30) {
        return 'Tropical';
    } else if (temp > 21 && temp <= 30) {
        return 'Calor';
    } else if (temp >= 10 && temp <= 20) {
        return 'Nublado';
    } else {
        return 'Frío';
    }
}


function sortNumbers(a, b, c) {
    let numbers = [];
    numbers = [...numbers, a, b, c];
    return `Forma ascendente ${numbers.sort((x, y) => x - y)} y forma descente ${numbers.sort((x, y) => x - y).reverse()}`
}

function getSeason(num) {
    switch (num) {
        case 1:
            console.log('verano');
            break;
        case 2:
            console.log('otoño');
            break;
        case 3:
            console.log('Invierno');
            break;
        case 4:
            console.log('primavera');
            break;
        default:
            console.log('No es un ingreso valido');
            break;
    }
}

function getVocal(letra) {
    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let newLetra = letra.toLowerCase();
    let isvocal = false;

    if (letra.length > 1) {
        return 'Solo debe ingresar una letra';
    }

    for (let i = 0; i < vocals.length; i++) {

        if (newLetra === vocals[i]) {
            isvocal = true;
        }
    }

    if (isvocal) {
        return 'Es una letra vocal';
    } else {
        return 'No es una letra vocal';
    }

}