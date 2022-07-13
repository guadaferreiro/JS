//CICLO FOR
for (let i = 0; i < 10; i++) {

    console.log (i)
}

//CICLO FOR
const numero = parseInt (prompt ("Ingresar un numero"));

for (let i = 0; i <= 10; i++) {

    console.log ("El valor de i es " + i);
    console.log ("i x el numero ingresado es " + (i * numero));

}


//CICLO FOR - BREAK
const numero = parseInt (prompt ("Ingresar un numero"));

for (let i = 0; i <= 10; i++) {
    if (i=== 5) {
        break;
    }

    console.log ("El valor de i es " + i);
    console.log ("i x el numero ingresado es " + (i * numero));

}


//CICLO FOR - CONTINUE
const numero = parseInt (prompt ("Ingresar un numero"));

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log ("El valor de i es " + i);
    console.log ("i x el numero ingresado es " + (i * numero));
}


//FOR DECREMENTANDO
const numero = parseInt (prompt ("Ingresar un numero"));

for (let i = 0; i <= 10; i--) {
    if (i === 5 || i===3) {
        continue;
    }

    console.log ("El valor de i es " + i);
    console.log ("i x el numero ingresado es " + (i * numero));
}

//FOR INCREMENTANDO
const numero = parseInt (prompt ("Ingresar un numero"));

for (let i = 0; i <= 10; i++) {
    if (i === 5 || i===3) {
        continue;
    }

    console.log ("El valor de i es " + i);
    console.log ("i x el numero ingresado es " + (i * numero));
}


