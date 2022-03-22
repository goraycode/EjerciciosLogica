class compraHelados {
    constructor(litroHelados) {
        this.litroHelados = litroHelados;
        this.obsequio = 0;
        this.totalLitros = 0;
    }

    calcularObsequio() {
        if (this.litroHelados > 50) {
            this.obsequio = 3 + 0.15 * this.litroHelados;

        } else if (this.litroHelados > 30) {

            this.obsequio = 2 + 0.05 * this.litroHelados;

        } else if (this.litroHelados > 10) {
            this.obsequio = 1;
        } else {
            console.log('menos que 10 helados');
        }

        this.totalLitros = this.litroHelados + this.obsequio;

        return this.mostrarResultado();
    }


    mostrarResultado() {
        return `Litros de helado que se compró: ${this.litroHelados}\n 
                Litros de helado que se obsequió: ${this.obsequio} \n
                Litros de helado que se llevo en total: ${this.totalLitros}`
    }
}


const comprarHelados = new compraHelados(47);
console.log(comprarHelados.calcularObsequio());