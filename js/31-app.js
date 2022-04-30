let marcas = ['Toyota', 'Peugeot', 'Mazda', 'Ford', 'Mitsubishi'];
let autos = [];
const tbodyAutos = document.querySelector('#autos');

for (let i = 0; i < 5; i++) {
    autos[i] = [];
    for (let j = 0; j < 6; j++) {

        do {

            venta = Number(prompt(`Ingrese venta para el Auto: ${marcas[i]} - vendendor${j + 1}`));
            autos[i][j] = venta;
        } while (venta < 0);

    }
}

llenarTabla(autos);

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

