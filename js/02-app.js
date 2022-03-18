/* for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("Cinco");
        continue;
    }
    console.log(i);
} */

const carrito = [
    { nombre: 'Mx keys', precio: 789 },
    { nombre: 'Monitor 27" ', precio: 520, descuento: true },
    { nombre: 'iPhone', precio: 3000 },
    { nombre: 'Play 5', precio: 4500, descuento: true },
    { nombre: 'Silla Gamer', precio: 220 },
];

let prodDescuento = [];
for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].descuento) {

        prodDescuento.push(carrito[i]);
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(`${carrito[i].nombre} agregado al carrito`);
}


console.table(prodDescuento);