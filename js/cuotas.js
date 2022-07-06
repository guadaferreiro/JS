let precioTotal;
let intereses = 0.15;

precioTotal = parseInt (prompt ("Ingrese el precio "));

if (precioTotal >= "0") {

    cuotas = precioTotal * intereses;

    console.log ("La cuota es de " + cuotas);

    precioFinal = precioTotal * intereses + precioTotal;

    console.log ("El precio final es de " + precioFinal);

} 
