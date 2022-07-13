let nombre = prompt ("Ingrese su nombre");
let clave = prompt ("Ingrese su clave");
alert ("Bienvenido/a " + nombre);

let opciones = prompt ("¿Que accion desea realizar? \nRETIRAR DINERO \nCONSULTA DE SALDO \n CAMBIO DE CLAVES ");

let saldo = 90000;
let turno;

function extraerDinero (){
    alert ("Usted dispone en su cuenta " + saldo)
    let dinero = prompt("Ingresar el monto que desea retirar")

    if (dinero <= saldo) {
        saldo += - dinero;
        alert ("Usted esta retirando " + dinero);
        alert ("El saldo de su cuenta es de " + saldo)
    } else {
        alert ("Monto insuficiente")
    }
}

function claves () {
    const turno = prompt ("Cambiar clave de: \nPIL \nPIN");
    if (turno == "PIL") {
        prompt ("Insertar nueva clave");
        alert ("Su clave ha sido cambiada satisfactoriamente");
    } else if (turno == "PIN") { 
        prompt ("Insertar nueva clave");
        alert ("Su clave ha sido cambiada satisfactoriamente");
    }else ("No fue posible cambiar la clave. Vuelva a intentarlo");
}

while (opciones) {
    switch (opciones.toUpperCase()) {
        case "RETIRAR DINERO":
            extraerDinero();
            break;

        case "CONSULTA DE SALDO":
            alert ("Su saldo es de " + saldo);
            break;
        
        case "CAMBIO DE CLAVES":
            claves();
            break;

        default:
            prompt ("¿Que accion desea realizar? \nRETIRAR DINERO \nCONSULTA DE SALDO \nCAMBIO DE CLAVES ");
    }
}

// clase de billetes




class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = Number(anio);
    }

    mostrarAntiguedad() {
        console.log(`El vehículo ${this.marca} ${this.modelo} tiene ${2022 - this.anio} años.`);
    }
}

const vehiculo = new Vehiculo("Fiat", "Palio", 2015);

console.log(vehiculo.marca);
vehiculo.mostrarAntiguedad();