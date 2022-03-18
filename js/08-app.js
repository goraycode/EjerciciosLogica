const carrito = [
    { nombre: 'Mx keys', precio: 789 },
    { nombre: 'Monitor 27" ', precio: 520 },
    { nombre: 'iPhone', precio: 3000 },
    { nombre: 'Play 5', precio: 4500 },
    { nombre: 'Silla Gamer', precio: 220 },
];

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar javascript'];

for (let pendiente in pendientes) {
    console.log(pendiente);
}

const auto = {
    color: "Negro",
    modelo: "BMW",
    peso: "120kg"
}

for (let propiedad in auto) {
    console.log(`${auto[propiedad]}`);
}


for (let [llave, valor] of Object.entries(auto)) {

    console.log(`${llave}: ${valor}`);

}