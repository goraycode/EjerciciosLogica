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

    //indicar que auto se vende más
    ventas.forEach((venta, index) => {
        if (venta > mayor) {
            mayor = venta;
            position = index;
        }
    });


    //obtenemos el menor cantidad vendida
    let vendedorMenosVentas = sumadorPorColumna(autos);
    let psM = 0, menor = Math.max(...sumadorPorColumna(autos))
    vendedorMenosVentas.forEach((vendedor, index) => {
        if (vendedor < menor) {
            menor = vendedor;
            psM = index;
        }
    });
    console.log(vendedorMenosVentas);


    const p = document.createElement('p');
    p.textContent = `El auto más vendido es ${marcas[position]} con ${mayor} autos vendidos`;

    const pVendedor = document.createElement('p');
    pVendedor.textContent = `El vendedor que menos vendio es ${psM + 1} con ${menor} autos vendidos`;

    const pTotal = document.createElement('p');
    pTotal.textContent = `El total de autos vendidos es ${total}`;


    resultados.appendChild(p);
    resultados.appendChild(pVendedor);
    resultados.appendChild(pTotal);
}

//encontrar la menor o mayor cantidad vendida de una columna
const sumadorPorColumna = array => {
    return array.reduce((acc, valorActual) => {
        for (let i = 0; i < acc.length; i++) {
            acc[i] += valorActual[i];
        }
        return acc;
    }, new Array(array[0].length).fill(0));

};






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

