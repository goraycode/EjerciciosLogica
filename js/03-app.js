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


fibonacci(7);