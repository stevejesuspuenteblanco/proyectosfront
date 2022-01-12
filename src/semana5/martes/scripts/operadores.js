console.log(2+2);//suma
console.log(2-2);//resta
console.log(2*2);//multiplicacion
console.log(10/2);//division
console.log(11%3);//resto
console.log(9**2);//exponenciacion

/*
OPERADORES DE ASIGNACION
*/

let numero = 1000;


/*
OPERADOR DE INCREMENTO Y DECREMENTO
*/
console.log("");
console.log("///////////////////////////");
console.log("OPERADORES DE INCREMENTO Y DECREMENTO"); //
console.log("///////////////////////////");
console.log("");
console.log(numero);

numero++;
console.log(numero);

numero--;
console.log(numero);


/*
OPERADORES DE COMPARACION
*/ 
console.log("");
console.log("///////////////////////////");
console.log("OPERADORES DE COMPARACION");
console.log("///////////////////////////");
console.log("");

let numeroUno=10;
let numeroDos=20;
let numeroTres= "10";

console.log(numeroUno > numeroDos); //false
console.log(numeroUno < numeroDos); //true
console.log(numeroUno >= numeroDos); //false
console.log(numeroUno <= numeroDos); //true
console.log(numeroUno != numeroDos); //true
console.log(numeroUno == numeroTres); //true
console.log(numeroUno === numeroTres); //false
console.log(numeroUno !== numeroTres); //false en tipo y en valor


/*
OPERADORES LOGICOS
*/

console.log("");
console.log("///////////////////////////");
console.log("OPERADORES LOGICOS");
console.log("///////////////////////////");
console.log("");

let numeroUnoLogico = 10;
let numeroDosLogico = 20;
let numeroTresLogico = "10";
let nombreLogico = "Sebastian";
let hija="valentina";

console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian"); //true
console.log(numeroUnoLogico > 5 && nombreLogico == "Sebastian" && hija == "johana"); //false
console.log((numeroUnoLogico > 5 && nombreLogico == "Sebastian") || hija == "johana"); //true
console.log(!(hija == "valentina"));


console.log("KATYA".length > 4 && "KATYA" && "KATYA".charAt(0) == "K");//TRUE



