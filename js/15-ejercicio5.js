'use strict'
/* 
Realizar una ejecución
que muestre todos los numeros divisores 
de un numero introducido en prompt
 */

var numero1 = parseInt(prompt("Introduce el primer numéro",1));
for(var i=1; i <= numero1; i++){

    if(numero1 % i == 0){
        document.write("<h5>Divisor </h5>"+ i)
    }
    
}