//Reto Fizz Buzz

/* Todos los multiplos de 3 deben imprimir Fizz
    Todos los multiplos de 5 deben imprimir Buzz
    Todos los multiplos de 3 y 5 deben imprimir Fizz Buzz
 */

for (let i = 0; i < 100; i++) {

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