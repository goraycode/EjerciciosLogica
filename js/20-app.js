//serie o conjetura de ULAM
/* 
Cualquier número entero positivo  pude ser descompuesto o transformado hasta la unidad realizando el siguiente proceso iterativo

1) Si el número es par se divide entre dos y se obtiene el nuevo numero
2) SI el el numero es impar se multiplica por 3 y se le suma 1 y obtenemos el nuevo numero 
3) Repetir hasta llegar a 1

EJEMPLO
n = 10
-> 5, 16, 8,4,2,1

 */

function serieULAM(n) {
    if (n === 1) {
        console.log('Fin de la serie');
    } else if (n % 2 === 0) {
        n = n / 2;
        console.log(n);
        serieULAM(n);
    } else {
        n = (n * 3) + 1;
        console.log(n);
        serieULAM(n);
    }
}



