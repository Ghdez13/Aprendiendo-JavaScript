'use strict'

// Funciones
// Una función es una agrupación de un conjunto de instrucciones

function calculadora(numero1, numero2, mostrar=false){

    //conjunto de instrucciones a ejecutar
    if(mostrar == false){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicación: "+ (numero1*numero2));
    console.log("división: "+ (numero1/numero2));
    console.log("***********************");
    }else{
    document.write("Suma: "+ (numero1+numero2) + "<br/>");
    document.write("Resta: "+ (numero1-numero2) + "<br/>");
    document.write("Multiplicación: "+ (numero1*numero2) + "<br/>");
    document.write("división: "+ (numero1/numero2) + "<br/>");
    document.write("***********************" + "<br/>");
    }
    

   // return "Hola soy una calculadora";
}

//Invocar o llamar a la función

calculadora(1,4);
calculadora(1,4, true);

// Función con un bucle FOR

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/


