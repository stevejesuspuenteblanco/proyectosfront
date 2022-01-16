function ejemplouno(){
    function suma(a, b){
        console.log(arguments.length)
        if (arguments.length > 2){
            throw console.error("No soporta la suma de mas de 2 argumentos");
        }

        return a + b;
    }

    console.log(suma(2,3));
    console.log(suma(2,3));
    console.log(suma(2,3,4,5,2,5,5,6));
    console.log("continuacion!!");


}

//ejemploUno();
//console.log('haossdd');


/*
Ejemplodos - try catch

*/
function ejemplodos(){
    let message="";
    const nombre=prompt("Ingresa tu nombre"); //pidiendo el dato
    try{
        if(nombre.length < 6){  //evaluo si el dato es menor que 6
            throw "SHORT";
        }

        if(nombre.length > 10){ //evaluo si el nombre es mayor que 10
            throw "LONG";

        }
        message = "El nombre"+nombre+ " es correcto";    
    } catch (error){

        if(error == "SHORT"){
            message = "El nombre "+nombre+" es muy corto";
        }
        if(error == "LONG"){
            message = "El nombre "+nombre+" es muy largo";
        }

    }finally {
        console.log(message);
    }
}

debugger;

ejemplodos();