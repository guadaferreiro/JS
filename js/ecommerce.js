class Producto {
    constructor (id, nombre, precio, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let productos = [
    new Producto (100, "pelota nike", 100, "deportivo"),
    new Producto (102, "zapatillas adidas", 150, "deportivo"),
    new Producto (103, "vestido elena", 300, "fiesta"),
];

//console.log(productos);

let categorias = ["deportivo", "fiesta"]

let productosCarro = [];

let categoria = "";

while (categoria != "salir" && categoria != null){
    let aux = categoria.join (", ");
    categoria = prompt (
        "Ingrese una categoria para comprar o ingrese salir: \n (" + aux + ") ");
    
    if (categoria != "salir") {
        let productosCategoria = productos.filter(
            item => item.categoria == categoria);

        let cartel = "";

        for (let i = 0; i < productosCategoria.length; i++) {
            cartel+= 
            "id: " + " " +
            productosCategoria[i].id + " nombre"
            productosCategoria[i].nombre + " " +
            productosCategoria[i].precio;
        }
        let id = parseInt (
        prompt (
            "seleccione id del producto pa comprar \n" + cartel
            )
        );

        let carrito = productosCategoria.find (item => item.id == id);
        console.log(carrito);
    };


}