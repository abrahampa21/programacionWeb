//VARIABLES
let nombre = "Ana";
const pi = 3.1416;
var ciudad = "Campeche";

console.log(nombre);
console.log(pi);
console.log(ciudad);

//alert("Hola " + nombre + ", bienvenido a " + ciudad + ". El valor de PI es " + pi);

// let edad = prompt("Introduce tu edad:");
// let edadNumero = Number(edad);
// let año = prompt("Ingresa año de nacimiento");
// let añoNumero = parseInt(año);
// let nom = prompt("Introduce tu nombre:");
// nom = nom.trim().toUpperCase();
// alert(nom);

//SENTENCIAS DE CONTROL
// if (edadNumero >= 18) {
//   console.log("Eres mayor de edad");
// } else if (edadNumero < 18) {
//   console.log("Eres menor de edad");
// } else {
//   console.log("Edad no válida");
// }

// switch (ciudad) {
//   case "Campeche":
//     console.log("Ciudad de Campeche");
//     break;
//   case "Mérida":
//     console.log("Ciudad de Mérida");
//     break;
//   default:
//     console.log("Otra ciudad");
//     break;
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Número: " + i);
// }

// while (edadNumero < 18) {
//   console.log("Eres menor de edad");
//   edadNumero++;
// }

// let frutas = ["Manzana","Banana","Naranja"];
// console.log(frutas[4]);


// //Ejercicio
// let precio = 200;
// let ivaPrecio = precio * .21;
// let precioConIva = precio + ivaPrecio;
// console.log(`Precio sin IVA: ${precio}€`);
// console.log(`Precio con IVA: ${precioConIva}€`);

// const precio = Number(prompt("Introduce el precio"));
// const iva = Number(prompt("Introduce el IVA"));
// let operation = precio * (iva/100);
// let precioConIva = precio + operation;
// console.log(`Precio con IVA: ${precioConIva} €`);

//Operadores e incrementos con variables
/*1.- Operadores de asignación
let x = 10;
x = 15;

Asignaciones compuestas
+=, -=, *=, /=, %=
x += 5;

let total = 100;
total += 20;
total -= 10;
total *= 2;
total = total * 2;

Operadores de incremento y decremento
let contador = 10;

Incremento
contador++; contador = contador + 1

Decremento
contador--; contador = contador - 1


*/

let contador = 10;
contador++;
console.log(contador);
contador--;
console.log(contador);
contador++;
console.log(contador);
//Posfijo
contador++;
console.log(contador);
//Prefijo
++contador;
console.log(++contador);

let x = 10;
let z = 2 + (++x);
console.log(z);