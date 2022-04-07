/* Ejercicio 

Hacer que el ingreso de una palabra solo me traiga la cadena más larga y sin que contenga letras repetidas
ejemplo: aaabccc -> abc
*/


//forma 1
function word(input) {
    let newWord = '';
    for (let i = 0; i < input.length; i++) {

        if (input[i] !== input[i + 1]) {
            newWord += input[i];
        }
    }

    return `La nueva palabra es: ${newWord}`;
}