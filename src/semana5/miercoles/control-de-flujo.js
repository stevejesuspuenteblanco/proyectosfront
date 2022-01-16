
/*
Ejemplo uno
*/

function ejemplouno(){
let edad = prompt("Ingresa tu edad");

if (edad > 18){
   alter("Bienvenido al club");
} else {
    alert("No ERES BIENVENIDO!!")
}
}

/*
Ejemplo dos
*/ 

function ejemplodos(){
let saborHelado = prompt("Ingresa tu sabor de helado"); //pido el dato

 if(saborHelado.toUpperCase() == "FRESA"){
     //evalua el dato
    alert("tu sabor es fresa")
 }else if(saborHelado.toUpperCase() == "MANGO"){
     //evalua el dato
     alert("tu sabor es mango")
 }else if(saborHelado.toUpperCase() == "CHOCOLATE"){
          //evalua el dato
    alert("tu sabor es chocolate");
}else{
    //ejecuta el valor por defecto
    alert("No tenemos ese sabor")
}

console.log("se termino!!!")
}

function printTypeVehicle(type){
    return alert("Elegiste un "+type);
}


function printTypeVehicle(type){
    return alert("Elegiste un "+ type);
}

/*EJEMPLO TRES*/

function ejemplotres(){
    let vehiculo = prompt("Por favor elige tu vehiculo(auto, moto bicicleta, scooter)"
    );


switch(vehiculo){
    case "auto": {
        printTypeVehicle("auto");
        break;
    }

    case "moto": {
        printVe("moto");
        break;
    }

    case "bicicleta": {
        printTypeVehicle("bicicleta");
        break;
    }

    case "scooter": {
        printTypeVehicle("scooter");
        break;
    }

    default: {
        printTypeVehicle("");
        break;
    }

    default: {
      ejemplotres();
    }
}
    console.log("Se termino ejemplotres");
}

debugger;

ejemplotres();

/*
Ejemplo Cuatro
*/

function ejemploCuatro(){
    const sexo = prompt("Ingresa tu sexo");
    /*operador ternario*/ 
    sexo == "m"? alert("Eres masculino") : alert("Eres femenino");
}