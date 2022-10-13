/*
    1- Solicita un nombre, la edad y muestra por consola el mensaje 
    "Hola ___, tienes ___ años y el año que viene tendras ___ años" 
    Realiza el ejercicio con prompt(mensaje) y haz uso de los template string

*/

let nom = prompt("Escribe un nombre: ");
let edat = prompt("Escribe tu edat: ");

console.log("Hola " + nom + ", tienes " + edat +" y el año que viene tendras "+ (++edat) +  " años");

/* Ejercicio 2*/

let opc = prompt("Escribe una opcion:\n1 - Triangulo\n2 - Rectangulo\n3 - Circulo");

switch (parseInt(opc)){
    case 1:
        let bt = prompt("Escirbe la base: ");
        let ht = prompt("Escribe la altura: ");
        let triangulo = bt*ht/2;
        console.log(triangulo);
        break;
    case 2:
        let br = prompt("Escirbe la base: ");
        let hr = prompt("Escribe la altura: ");
        let rectangulo = br*hr;
        console.log(rectangulo);
        break;
    case 3:
        let r = prompt("Escribe el radio: ");
        let circulo = Math.PI * Math.pow(r,2);
        console.log(circulo);
        break;
    default: console.log("La figura geometrica no es valida.")
}


/* Ejercicio 3*/

let i = 1;

while (i != 6) {
    if(i % 2 == 0) {
        console.log("El numero " + i + " es par." );
    }else {
        console.log("El numero " + i + " es inpar." );
    }
    i++;
}

/* Ejercicio 4*/

const primo = numero => {

	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

let num = 7;

console.log("El numero " + num + " es primo ? " + primo(num));

// Ejercicio 5

let result = 1;

for (i=1; i<=num; i++) {
    result = result * i; 
}

console.log(result);

// Ejercicio 6

let total = 0;
let cont = 0;
let nume;

while (total < 50) {
    nume = prompt("Escribe un numero: ");
    total = parseInt(total) + parseInt(nume);
    cont++
}

console.log("Numero: " + total + " Cantidad: " + cont);

// Ejercicio 7

const numbers = [5,43,78,9,16];
let pares = [];
let impares = [];

for (const number of numbers) {
    let random = Math.round(Math.random() * 10 + 1);
    const result = number * random;
    console.log(number +' x '+random+' = '+result);
    if (result % 2 == 0) {
        pares.push(result);
    }else {
        impares.push(result);
    }
}

console.log(pares);
console.log(impares);

// Ejercicio 8

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero = prompt("Escribe tu numero de DNI (sin la letra): ");
if (numero < 0 || numero > 99999999) {
    alert("El numero indicado no es válido");
}else{
    var letraCalculada = letras[numero % 23];
    console.log("La lletra del DNI es: " + letraCalculada);
}


// Ejercicio 9

let palabra = prompt("Introducir palabra: ").toLowerCase()
let vocPerm = ["a","e","i","o","u"];

let cons = 0;
let voc = 0;

for (const letra of palabra) {
    if(vocPerm.indexOf(letra) != -1) {
        voc++
    }else{
        cons++
    }
    
}

console.log("La palabra tiene " + cons + " consonantes y "+ voc +" vocales y tiene un total de " + palabra.length + " letras.")

// Ejercicio 10

let color = ["azul","amarillo","rojo","verde","rosa"];

let nomb = prompt("Escribe un color: ").toLowerCase();

if (color.indexOf(nomb) != -1){
    console.log("El color " + nomb + " esta dentro de l array.");
}else{
    console.log("El color no esta dentor del array.");
}