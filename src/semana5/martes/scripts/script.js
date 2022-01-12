/*COMENTARIOS MULTILINEA*/


//COMENTARIO DE UNA LINEA
console.log("HOLA MUNDO!!");



/*VARIABLES*/

let nombreVariable = 10;
/*NO ES NECESARIO DEFINIR EL TIPO DE VARIABLE*/


/*VARIABLE TIPO LET ES UN VALOR QUE SE PUEDE SOBREESCRIBIR*/
let edad=35;
let nombre="sebastian";
let sexo="m";
console.log(typeof nombreVariable)

nombreVariable="cambiar el valor";
console.log("nombreVariable",nombreVariable);


/*VARIABLE TIPO const ES UN TIPO DE VALOR QUE NO SE PUEDE SOBREESCRIBIR*/ 4

nombreVariable="modificado denuevo";
console.log("nombreVariable",nombreVariable);


const PI=3.14;
const URL="http://wwww.google.com"

console.log('PI', PI)


/*TIPOS DE DATOS*/

let nombre2="SEBASTIAN"  //string
let edad2=35;  //number
let bool = true; //boolean
let indefinido; //undefined
let nulo=null; //null
let dataUnico=Symbol("123456")  //symbol
let sebastian = {
   nacionalidad: "peruana",
   sexo: "m",
   edad: 35,
   profesion: "sistemas",
   especialidad: "frontend",
}; // objeto


console.log('////////////////////')
console.log('//////TIPOS DE DATOS')
console.log('////////////////////')
console.log('nombre2',typeof nombre2)
console.log('edad2',typeof edad2)
console.log('bool',typeof bool)
console.log('indefinido',typeof indefinido)
console.log('nulo',typeof nulo)
console.log('dataUnico',typeof dataUnico)
console.log('sebastian',typeof sebastian)


/*  cambiar de tipo de datos*/

console.log("");
console.log("///////////////////////////////");
console.log("////////CAMBIAR TIPO DE DATOS");
console.log("///////////////////////////////");

console.log("numero", typeof 7);
console.log("numero", typeof "7");

/*
DE string a numero pueden usar parseInt o parseFloat o tambien Number
*/

console.log(typeof parseInt("7")); //string -> number
console.log(parseFloat("3.14"));  //string -> number
console.log(typeof Number("10"));  //string -> number


/*
DE numero a string
*/
let numberData = 10;
console.log(typeof String(10)); //number -> string
console.log(typeof numberData.toString());//number -> string


let numero1 = Number(prompt("INGRESA UN NUMERO"));  // RETORNA EL VALOR INGRESADO
let numero2 = Number(prompt("INGRESA OTRO NUMERO"));  // RETORNA EL VALOR INGRESADO

alert(numero1+numero2)