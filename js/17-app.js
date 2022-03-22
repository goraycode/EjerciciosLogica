//Actividad sumativa do-while


/*Determinar en un conjunto n de números naturales
cuantos son menores que 15
cuantos son mayores que 50
cuantos estan en el rango entre 25 y 45
*/
function determinarNumeros(n) {
    let i = 0;
    let menor15 = 0, mayor50 = 0, rango = 0;
    do {
        if (i < 15) {
            menor15++;
        }
        if (i > 50) {
            mayor50++;
        }

        if (i >= 25 && i <= 45) {
            rango++;
        }

        i++;
    } while (i <= n);

    return `Hay ${menor15} menores que 15 \n Hay ${mayor50} mayores que 50 \n Hay ${rango} que estan en el rango entre 25 y 45`;
}



/*Los padres de una niña le prometieron darle 10 pesos cuando cumpliera 
12 años de edad y duplicar el regalo en cada cumpleaños subsiguiente
hasta que el regalo excediera 1000 pesos.
Escriba un programa para determinar que edad tendrá la niña cuando se le dé
la última cantidad y la cantidad total que recibirá al final*/

function calcularEdadyCantidad(edad) {
    let duplicarCantidad = 10;
    if (edad == 12) {

        do {
            console.log(edad, duplicarCantidad);
            edad++;

            duplicarCantidad = duplicarCantidad * 2;
        } while (duplicarCantidad < 1000);
        return `La edad de la niña es ${edad} y la cantidad que recibirá es: ${duplicarCantidad}`;


    } else {
        console.log('Debe tener 12 años para empezar a darle sus 10 pesos iniciales');
    }
}




/*
Realiza un programa que muestre un menú de 3 opciones a un usuario de nuestro programa:
1--- saludo
2---Estamos en una actividad sumatoria
0---adios

y que mientas la opción ingresada no sea cero, el menú se sigue mostrando hasta que la opción ingreasada
sea 0, finalizando el programa
*/


function mostrarMenu() {
    let entrada = 0;
    do {

        console.log('1');
        console.log('2');
        console.log('0');

        entrada = Number(prompt('Ingrese una opción'));

        if (entrada == 1) {
            console.log('saludos...');
        } else if (entrada == 2) {
            console.log('Estamos en una actividad sumatoria');
        }else{
            console.log('Adiós');
        }


    } while (entrada > 0);
}
