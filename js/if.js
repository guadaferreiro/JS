if (true) {

    console.log ("Se cumple la condicion");
    
}

let unNumero = 9;

if (unNumero == 9) {

    console.log ("unNumero es igual a 9");
}

if(unNumero == 8) {

    console.log ("unNumero es igual a 8");
}

//REASIGNAR UN NUEVO VALOR
// == MISMO VALOR NO IMPORTA EL TIPO DE VARIABLE
if(unNumero == "8") {
    let unNuevoNumero = unNumero + 10;
    console.log ("unNuevoNumero es igual a " + unNuevoNumero); // 8 + 10
}

// === MISMO TIPO DE VARIABLE Y MISMO VALOR
if(unNumero === 8) {
    let unNuevoNumero = unNumero + 10;
        console.log ("unNumero es igual a 8");
    }

//IF...ELSE

if (unNumero == "8") {

    let unNuevoNumero = unNumero + 10;
    console.log ("unNuevoNumero es igual a " + unNuevoNumero);

} else {

    console.log ("NO ES UN 8 EN STRING NI UN 9");
}

//IF... ELSE IF
let tipoUsuario = prompt ("que tipo de usuario sos?");

if (tipoUsuario === "premium") {
    console.log ("Acceso a contenido ilimitado");

} else if (tipoUsuario === "intermedio") {
    console.log ("Acceso a contenido limitado");

} else {
    console.log ("Acceso a poco contenido");
}


let edadUsuario = 20;
let paisUsuario = "ARGENTINA";
let lenguaje;

if (edadUsuario < 18) {
    console.log ("mostramos contendido infantil");
    
} else {
    console.log ("Mostramos contenido adultos");
}




if (paisUsuario != "Argentina" && edadUsuario > 18)  {
    
    lenguaje = "Español";
    console.log (lenguaje);
    console.log ("Usuario autorizado")

    
} else if  (paisUsuario === "Argentina" && edadUsuario > 18)  {

    lenguaje = "Español Arg";
    console.log (lenguaje)
    console.log ("Usuario autorizado");

}else {

    console.log ("el usuario no esta autorizado")
}


let numero = 30;

if (numero != "30") {
    console.log ("Es distinto a 30") //
    
}else {
    console.log ("Es igual a 30")
}

//

let numero = 30;

if (numero !== "30") {
    console.log ("Es distinto a 30") 
    
}else {
    console.log ("Es igual a 30") //
}


//

let paisUsua = "Brasil"

if ((paisUsua === "Argentina" || paisUsua === "Colombia") && edadUsuario > 18 ){
    
    leng = "Español latinoamericano"
    console.log ("Usuario autorizado");

} else if (paisUsua === "Brasil" && edadUsuario > 18) {
    leng = "Portugues"
    console.log ("Usuario autorizado");
    
}else if (paisUsua === "USA" && edadUsuario > 18){
    leng = "Ingles"
    console.log ("Usuario autorizado");

}else {
    console.log ("Usuario no autorizado");
    leng = "chino"
}

console.log (leng);


//

