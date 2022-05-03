let marcas = ['Toyota', 'Peugeot', 'Mazda', 'Ford', 'Mitsubishi'];
let autos = [];
const tbodyAutos = document.querySelector('#autos');
const resultados = document.querySelector('#resultados');


document.addEventListener('DOMContentLoaded', () => {
    pedirVentas();
});




function pedirVentas() {
    let venta, sumadorVentas = [];
    for (let i = 0; i < 5; i++) {
        autos[i] = [];
        for (let j = 0; j < 6; j++) {

            do {

                venta = Number(prompt(`Ingrese venta para el Auto: ${marcas[i]} - vendendor${j + 1}`));
                autos[i][j] = venta;


            } while (venta < 0 || isNaN(venta));
        }

        sumadorVentas = [...sumadorVentas, autos[i].reduce((acc, venta) => acc + venta, 0)];
    }


    llenarTabla(autos);
    reportes(sumadorVentas);
}


function reportes(ventas) {

    let mayor = 0, position = 0;
    let total = ventas.reduce((acu, venta) => acu + venta, 0);

    ventas.forEach((venta, index) => {
        if (venta > mayor) {
            mayor = venta;
            position = index;
        }
    });



    const p = document.createElement('p');
    p.textContent = `El auto más vendido es ${marcas[position]} con ${mayor} autos vendidos`;

    const pTotal = document.createElement('p');
    pTotal.textContent = `El total de autos vendidos es ${total}`;

    resultados.appendChild(p);
    resultados.appendChild(pTotal);
}






function llenarTabla(autosVendidos) {
    autosVendidos.forEach((venta, index) => {
        const tr = document.createElement('tr');
        tr.classList.add('ventas');
        tr.innerHTML = `
                <td>${marcas[index]}</td>
                `;
        for (let i = 0; i < venta.length; i++) {
            const tdVenta = document.createElement('td');
            tdVenta.innerText = `${venta[i]}`

            tr.appendChild(tdVenta);
        }

        tbodyAutos.appendChild(tr);


    });
}


