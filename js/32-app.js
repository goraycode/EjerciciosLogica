function calcular(array, i = 0) {
    if (array.length == i) {
        return 1;
    }

    let mayor = Math.min(...array);

    if (!(array[i] > mayor)) {
        console.log(`El minimo elemento es ${array[i]} esta en la posicion ${i}`);
    }


    i = i + 1;
    calcular(array, i);

}


let array = [321,3,1,345,76,21,3];
calcular(array);
