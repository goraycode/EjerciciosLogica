/* Ejercicio 

Hacer que el ingreso de una palabra solo me traiga la cadena más larga y sin que contenga letras repetidas
ejemplo: aaabccc -> abc | aurora -> auro
*/
function word(input) {
    let mynewWord = [...new Set(input)];
    return mynewWord.join('');
}