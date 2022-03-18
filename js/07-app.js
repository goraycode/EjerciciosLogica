const carrito = [
    { nombre: 'Mx keys', precio: 789 },
    { nombre: 'Monitor 27" ', precio: 520 },
    { nombre: 'iPhone', precio: 3000 },
    { nombre: 'Play 5', precio: 4500 },
    { nombre: 'Silla Gamer', precio: 220 },
];


//otra forma de recorrer un arreglo con for of
for (let producto of carrito) {
    console.log(producto.nombre);
}