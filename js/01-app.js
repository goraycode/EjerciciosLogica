for (let i = 0; i < 10; i++) {
    console.log(`Número ${i + 1}`);

}

//Pares
/* let numPares = [];
let numImpares = [];

for (let i = 0; i < 20; i++) {

    if (i === 0) {
        continue;
    }

    if (i % 2 === 0) {
        console.log(`${i} es par`);
        numPares.push(i);
    } else {
        console.log(`${i} es impar`);
        numImpares.push(i);
    }
}

console.table(numPares);

console.table(numImpares);

let parImpar = { ...numPares, numImpares };

console.log(parImpar); */


const carrito = [
    { nombre: 'Mx keys', precio: 789 },
    { nombre: 'Monitor 27" ', precio: 520 },
    { nombre: 'iPhone', precio: 3000 },
    { nombre: 'Play 5', precio: 4500 },
    { nombre: 'Silla Gamer', precio: 220 },
];


console.log(carrito.length);


for (let i = 0; i < carrito.length; i++) {

    console.log(carrito[i].precio);

}


carrito.forEach((producto) => {
    console.log(producto);
})


















