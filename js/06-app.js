const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar javascript'];


pendientes.forEach((pendiente, indice) => console.log(`${indice} : ${pendiente}`));


const carrito = [
    { nombre: 'Mx keys', precio: 789 },
    { nombre: 'Monitor 27" ', precio: 520 },
    { nombre: 'iPhone', precio: 3000 },
    { nombre: 'Play 5', precio: 4500 },
    { nombre: 'Silla Gamer', precio: 220 },
];

carrito.forEach((producto) => console.log(producto));

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo2);