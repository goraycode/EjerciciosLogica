/* Ejercicio 

Hacer que el ingreso de una palabra solo me traiga la cadena más larga y sin que contenga letras repetidas
ejemplo: aaabccc -> abc | aurora -> auro
*/


//forma 1
/* De esta forma solo estamos seguros que comparara con el seguro y aparentemente esta bien hasta que realizamos otras comparaciones
*/

function word(input) {
    let newWord = '';
    for (let i = 0; i < input.length; i++) {

        if (input[i] !== input[i + 1]) {
            newWord += input[i];
        }
    }

    return `La nueva palabra es: ${newWord}`;
}


//forma 2
/* esta es la forma correcta debido a que no permite si o si que se repitan los elementos de un array 
    y que por más que sean variadas podremos ingresar
*/

function wordLonger(input) {
    let mynewWord = [...new Set(input)];
    return mynewWord.join('');
}
