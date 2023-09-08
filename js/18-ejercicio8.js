'use strict'

/* En este ejercicio realizaremos una calculadora

-que pida los numéros por pantalla
-que si pedimos mal un numéro que lo vuelva a pedir
-que muestre en el cuerpo de la pagina, en una alerta
 y por consola el resultado de, sumar, restar, multiplicar y dividir de los 2 numeros pedidos
 */


 var numero1 = parseInt(prompt("Introduce el primer numéro: ", 0));
 var numero2 = parseInt(prompt("Introduce el segundo numéro: ",0));

 while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numéro: ", 0));
    numero2 = parseInt(prompt("Introduce el segundo numéro: ",0));
 }

 var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" + 
                 "La resta es: " + (numero1 - numero2) + "<br/>" +
                 "La multiplicación es: " + (numero1 * numero2) + "<br/>" + 
                 "La división es: " + (numero1 / numero2) + "<br/>"; 


 var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" + 
                 "La resta es: " + (numero1 - numero2) + "\n" +
                 "La multiplicación es: " + (numero1 * numero2) + "\n" +                  
                 "La división es: " + (numero1 / numero2) + "\n";                                   

document.write(resultado);
console.log(resultadoCMD);
alert(resultadoCMD);

