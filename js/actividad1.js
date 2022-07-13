let nombre = prompt ("Ingresar nombre");
let edad = prompt ("Ingrese la edad");

alert ("El nombre del usuario es ");
alert ("Ingrese la edad");

//FOR EACH - por cada uno hace esto
const edades = [1, 2, 3, 4, 5, 6];

edades.forEach((item) => {
    console.log('//////////////////////');
    console.log(item);
});

//FIND -por cada item busca si hay un item con x nombre
const cursos = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'backend', precio: 100 },
];

const resultado = cursos.find((item) => item.nombre === 'backend');

console.log(resultado);


//FILTER - filtra

const cursoS = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 100 },
    { nombre: 'Desarrollo web', precio: 300}
];

const result = cursos.find((item) => item.nombre.includes ('JS'));

console.log(result);

//SOME


//MAP - recorre cada lugar y lo transforma

const cursos1 = [
    { nombre: 'Javascript', precio: 15000 },
    { nombre: 'ReactJS', precio: 22000 },
    { nombre: 'AngularJS', precio: 100 },
    { nombre: 'Desarrollo web', precio: 300}
];

const result1 = cursos.find((item) => item.nombre);

console.log(result1); // ["Javascript, ReactJS, AngularJS, Desarrollo Web"]


//REDUCE - 

const miCompra = [
    { nombre: 'Javascript', precio: 20000 },
    { nombre: 'ReactJS', precio: 18750 },
    { nombre: 'Desarrollo web', precio: 27500 },
];

const total = miCompra.reduce ((suma, elemento ) => suma + elemento.precio, 0);
console.log(total); //66250

const miCompra1 = [
    { nombre: 'Javascript', precio: 20000 },
    { nombre: 'ReactJS', precio: 18750 },
    { nombre: 'Desarrollo web', precio: 27500 },
];

const total1 = miCompra.reduce ((suma, elemento ) => suma + " " + elemento.nombre, "");
console.log(total);

//SORT

const items = [
    {name: "pickachu", price: 21},
    {name: "charmander", price: 37},
    {name: "pidgey", price: 46},
    {name: "squirtie", price: 60},
];

items.sort (a, b) => {
    if (a.name > b.name){
        return 1;
    }

    if (a.name < b.name){
        return -1
    }

    return 0;
}

//osea serai ((math.random()) * NumAMultiplicar) + Numero Fijo


//date
const hoy = new Date('December 17, 2021');

console.log(hoy);
console.log(hoy.toDateString()); // Fri Dec 17 2021
console.log(hoy.toLocaleString()); // 17/12/2021 00:00:00
console.log(hoy.toLocaleDateString()); // 17/12/2021
console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)






