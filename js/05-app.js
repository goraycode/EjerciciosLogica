/* let i = 0;

do {

    console.log(`Número: ${i}`);

    i++;
} while (i < 10);
 */


//Pequeño juego

/* 
    Usuario debe adivinar el número random [0-10] que se genera, para esto
    el usuario consta de 3 vidas
 */
let vida = 3;
let numElegido = 0;
let numRandom = Math.floor(Math.random() * 10);


do {

    numElegido = Number(prompt("Ingrese un número"));

    if (numElegido === numRandom) {
        alert(`Felicitaciones el número random fue ${numRandom}`);
        break;
    } else {
        --vida;
        alert(`vida: ${vida}`);

        if (vida === 0) {

            alert(`Lo sentimos, perdió`);
            alert(`El número random fue ${numRandom}`);
        } else {

            alert(`Vuelve a intentarlo`);
        }

    }

} while (vida > 0);

