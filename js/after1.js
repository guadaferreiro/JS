// Escribir un algoritmo que solicite su edad y en funcion de la edad le diga si cuenta o no 

/*
    - Si el usuario es menor de 18 años, debe mostrar el siguiente mensaje: "Eres menor de edad, no podemos darte descuento"

    - Si el usuario es mayor de 18 años y menor que 25, debe mostrar el siguiente mensaje: "Tienes un 10% de descuento".

    - Si el usuario es mayor de 25, debe mostrar el siguiente mensaje: "Lo sentimos no tienes descuento".

    - Si el usuario tiene 18 años 0 25, debe mostrar el siguiente mensaje: "Tienes un descuento especial de 20%"

    - Si el usuario ingresa mal la edad, debe mostrar el siguiente mensaje: "Error, edad invalida"

*/

let age = parseInt (prompt ("Indique la edad"));

if (edad > 18) {
    alert ("Eres menor de edad");

} else if (edad > 18 && edad < 25) {
    alert ("Tienes un descuento de 10%");

} else if (edad > 25) {
    alert ("Lo sentimos, no tienes descuento");

} else if (edad === 18 || edad ===25) {
    alert ("Tienes un descuento de 20%");
} else {
    alert ("Error, edad invalida")
}

// EJEMPLO DE CONTEO HACIA ATRAS (ciclo FOR)
// i = i -1
for (let i = 10; i > 0; i--) {
    console.log (i);
}


//Desarrollar un ciclo y mostrar los numeros pares (entre 0 y 100)

for (let i = 0; i <= 100; i++) {
    if ((i % 2) === 0) {
        console.log (i);
    }
}

//Desarrollar un ciclo y mostrar los numeros IMPARES (entre 0 y 100)

for (let i = 0; i <= 100; i++) {
    if ((i % 2) === 1) {
        console.log (i);
    }
}

//CONTADOR

let contador = 0;

for (let i = 0; i <= 100; i++) {
    if ((i % 2) === 0) {
        
        contador++;
    }
}

console.log (contador);


//ACUMULADOR CON CICLO WHILE (IMITANDO CICLO FOR)

for (let i = 0; i < 10; i++) {
    console.log (i);
}

//ciclo while

let i = 0;

while (i < 10) {
    console.log (i);
    i++;
}

/*  Una ONG tiene punto de reparto de vacunas. Todos los dias comienza con 1000 vacunas.
    Controlar cuando el inventario baje de 200 */

let vacunas = 1000;
let totalUtilizadas = 0;

while ( vacunas >= 200) {

    totalUtilizadas = parseInt (prompt("Cuantas vacunas necesitas?"));

    if (totalUtilizadas > vacunas) {
        alert ("no hay esa cantidad disponible");
    }

    vacunas = vacunas - totalUtilizadas;

    console.log (`Queda un total de ${vacunas}`);
}

alert (`No hay mas vacunas disponibles. Queda un total de ${vacunas} vacunas`);


// DO..while

let numero = 0;

do {

    numero = parseInt (prompt ("Ingrese un numero. Para finalizar ingrese 0"));



}while (numero !== 0);


//SWITCH
let numero = parseInt (prompt ("Ingrese un numero"));

switch (numero % 2)  {
    case 0:
        alert ("El numero ingresado es par");
        break;
    case 1:
        alert ("El numero es impar");
        break;
    default: 
        alert ("El dato ingresado es invalido");
        break;
}


// EJEMPLO

let numeroDeTransacciones = parseInt (prompt ("Ingrese num de transacciones a realizar"));
let saldoEnCuenta = 5000;
let montoTransaccion = 0;
let tipoDeTransaccion = "";

for ( let i = 0; i < numeroDeTransacciones ; i++) {

    tipoDeTransaccion = prompt (`Que tipo de transaccion quiere realizar (Agregar o retirar). tienes disponible ${saldoEnCuenta}`);
    montoTransaccion = parseInt (prompt(`Cuanto desea ${tipoTransaccion.toLowerCase()}  `));

    if (tipoDeTransaccion.toUpperCase() === "AGREGAR") {
        saldoEnCuenta = saldoEnCuenta + montoTransaccion;
    } else if (tipoDeTransaccion.toUpperCase()=== "RETIRAR" && saldoEnCuenta >= montoTransaccion) {
        saldoEnCuenta = saldoEnCuenta - montoTransaccion;
    }else {
        alert ("No hay fondos suficientes");
    }

}

alert (`Las operaciones fueron realizadas con exito. Su saldo actual es de ${saldoEnCuenta} `)
