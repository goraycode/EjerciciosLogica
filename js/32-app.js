function calcular(array, i = 0) {
    if (array.length == i) {
        return 1;
    }

    let menor = Math.max(...array);
    if (!(array[i] < menor)) {
        console.log(`El minimo elemento es ${array[i]} esta en la posicion ${i}`);
    }


    i = i + 1;
    calcular(array, i);

}


let array = [11, 43, 54.3, 23, 34, 12, 3, 43];
calcular(array);
