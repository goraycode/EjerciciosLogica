let farenheit, celsius;
let s = "";
const textArea = document.querySelector('#textArea');

for (let i = - 2; i < 12; i++) {
    celsius = 10 * i;
    farenheit = 32 + (celsius * 9 / 5);
    s += `C= ${celsius}  F=${farenheit} \n`;

    if (celsius == 0) {
        s += 'Punto de congelación del agua \n';
    }

    if (celsius == 100) {
        s += 'Punto de ebullición del agua\n';
    }

}

//Rellenamos el textArea con el valor de la variable S
textArea.textContent = s;
console.log(s);