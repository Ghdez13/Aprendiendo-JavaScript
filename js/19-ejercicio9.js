'use strict'

/* Utilizaremos este ultimo ejercicio para poder aprender
a usar los diferentes operadores
 */

document.write("<h1> Ejemplos de operadores" + "</h1><br/>")



var numero1 = parseInt(prompt("Introduce el primer numéro: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numéro: ",0));

document.write("<h2>En este ejemplo estamos sumando" + "</h2>");
document.write("<p> Al sumar " + numero1 + " + " + numero2 + " obtemos: " + (numero1 + numero2) + "</p>");

document.write("<h2>En este ejemplo estamos resta" + "</h2>");
document.write("<p> Al restar " + numero1 + " - " + numero2 + " obtemos: " + (numero1 - numero2) + "</p>");

document.write("<h2>En este ejemplo estamos multiplicando" + "</h2>");
document.write("<p> Al multiplicar " + numero1 + " * " + numero2 + " obtemos: " + (numero1 * numero2) + "</p>");

document.write("<h2>En este ejemplo estamos dividiendo" + "</h2>");
document.write("<p> Al dividir " + numero1 + " / " + numero2 + " obtemos: " + (numero1 / numero2) + "</p>");

document.write("<h2>En este ejemplo obtenemos el residuo o restante de una división" + "</h2>")
document.write("<p> Al dividir " + numero1 + " / " + numero2 + " el residuo (%) es: " + (numero1 % numero2) + "</p>");


/* Estos de aca abajo son los operadores de asignación., cuando se 
 corre este programa pasa que la variable numero1, toma el valor de la abterior
 por lo que el resultado es otro.

document.write("<h2>En este ejemplo utilizamos '+=' " + "</h2>");
document.write("<p>Si el primer numero es igual al primero más el segundo, entonces " + numero1 + " =  " + (numero1 += numero2) + "</p>");

document.write("<h2>En este ejemplo utilizamos '-=' " + "</h2>");
document.write("<p>Si el primer numero es igual al primero menos el segundo, entonces " + numero1 + " =  " + (numero1 -= numero2) + "</p>");

document.write("<h2>En este ejemplo utilizamos '*=' " + "</h2>");
document.write("<p>Si el primer numero es igual al primero por el segundo, entonces " + numero1 + " =  " + (numero1 *= numero2) + "</p>");

document.write("<h2>En este ejemplo utilizamos '/=' " + "</h2>");
document.write("<p>Si el primer numero es igual al primero entre el segundo, entonces " + numero1 + " =  " + (numero1 /= numero2) + "</p>");

document.write("<h2>En este ejemplo utilizamos '%=' " + "</h2>");
document.write("<p>Si el residuo del primer numero es igual al primero entre el segundo, entonces " + numero1 + " =  " + (numero1 %= numero2) + "</p>");

*/

