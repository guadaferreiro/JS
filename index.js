class Bags {
    constructor (id, nombre, precio) {
        this.item = id;
        this.nombre = nombre;
        this.precio = Number(precio);
    }

    //mostrarPrecio () {
        //console.log(`El precio de la cartera ${this.nombre} es de ${this.precio}`); }
}

//console.log(bags.nombre);
//nombre.mostrarPrecio();

let bags = [
    carteraRoja = new Bags (001, "Tokio", 4000),
    carteraVerde = new Bags (002, "Copenhague", 4000),
    carteraAzul = new Bags (003, "Paris", 4000)
];

let nombresBags = ["Tokio", "Copenhague", "Paris"];

let carrito = [];

let compra = "";

while (compra != "salir" && compra != null) {
    let unir = nombresBags.join ('\n\n');
    compra = prompt (`Ingrese la opcion que desee comprar: \n\n${unir} `);

    if (compra == "Tokio") {
        let precio = carteraRoja.precio;
        alert (`Usted ha comprado la cartera "Tokio ${precio}`);
    } else if (compra == "Copenhague") {
        let precio = carteraVerde.precio;
        alert (`Usted ha comprado la cartera "Copenhague ${precio}`);
    } else if (compra == "Paris") {
        let precio = carteraAzul.precio;
        alert (`Usted ha comprado la cartera "Paris ${precio}`);
    }
}