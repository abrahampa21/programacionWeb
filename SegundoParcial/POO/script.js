/*
Programación orientada a objetos: Paradigma que conecta el mundo real con la programación.

Basado en objetos que representan entidades del mundo real con atributos y métodos.

Carro -> Atributos (color: verde, año: 2000, transmisión: automática).
        Encapsulados (Cauchos, chasis y motor).
        Funciones (encendido, aceleración y apagado).

Abstracción: análisis de datos y funciones.
Clase: estructura básica del objeto (atributos y métodos).
Instanciar: proceso de crear un objeto a partir de la clase.
Encapsulamiento: proteger los datos de una clase restringiendo el acceso directo.
Polimorfismo: Habilidad de un objeto para adoptar diferentes formas o comportamientos.
Herencia: Permitir que una clase hija herede atributos y métodos de una clase padre.

*/


/*
const usuario = {
    nombre : "Pedro",
    edad : 28,
    esAdmin : false,
}

console.log(usuario.nombre);
usuario.nombre = "Abraham";
console.log(usuario.nombre);

usuario.ciudad = "Campeche";
console.log(usuario);
delete usuario.edad;
console.log(usuario);

acabo de ver que tiene el chat gpt en su
*/
/*
const coche = {
    marca : "Nissan",
    velocidad: 0,
    acelerar: function(){
        this.velocidad += 20;
        return `La velocidad actual es ${this.velocidad} km/h`;  
    }
}

console.log(coche.acelerar())
console.log(coche.acelerar())
*/
/*Ejercicio 1
const book = {
    title : "El hombre en busca de sentido",
    author : "Viktor Frankl",
    year: 1946
};

console.log(book.title);
console.log(book["year"]);
*/

/*Ejercicio 2*
const product = {
    name: "Laptop",
    price : 1000,
};

console.log("Original price: " + product.price);

product.hasDiscount = true ? "It has discount" : "It has not discount";
console.log(product["hasDiscount"]);

product.price = 950;
console.log("New price: " + product.price);
*/

/*Ejercicio 3
const calculadora = {
    valor : 0,
    sumar : function(n){
        this.valor += n;
        return "Valor actual: " + this.valor;
    }
};

console.log(calculadora.sumar(10));
console.log(calculadora.sumar(30));
console.log(calculadora.sumar(20));
*/

//Crea un objeto cuenta bancaria con titular y saldo con un método aumentar monto que aumente el saldo;

const cuentaBancaria = {
    titular: "Abraham Pech",
    saldo : 100,
    aumentarMonto : function (monto){
        this.saldo += monto;
        return monto;
    }
}

console.log("Saldo inicial: " + cuentaBancaria.saldo);
console.log("Monto ingresado: " + cuentaBancaria.aumentarMonto(200));
console.log("Saldo actual: " + cuentaBancaria.saldo);

//Crea un objeto alumno con nombre, calificaciones (arreglo) crea un método promedio que calcule el promedio del arreglo
const alumno = {
    nombre: "Abraham Pech",
    calificaciones: {
        calif1: 9.5,
        calif2: 10.0,
        calif3: 8.7
    },
    promedio : function (){
        const promedio = (this.calificaciones.calif1 + this.calificaciones.calif2 + this.calificaciones.calif3)/3;
        return promedio;
    }
}

console.log("El promedio de las calificaciones de " + alumno.nombre + " es " + alumno.promedio());