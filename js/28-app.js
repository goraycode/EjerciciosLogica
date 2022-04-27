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
    numbers = [...numbers, a, b, c]
    return `Ordenado de forma ascendente ${numbers.sort((a, b) => a - b)} y ordernados de forma descendente ${numbers.sort((a, b) => a - b).reverse()}`;
}

