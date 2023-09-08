'use strict'

/* Realizar un programa que nos diga si un numéro
es impar o par.

Tiene que tener un prompt
Si el numéro no es valido que nos lo pida de nuevo
Mostrar el resultado
 */


// Esta fue la opción que realicé sin ayuda
/*
var numero1 = parseInt(prompt("Introduce el numéro:",0));

if(numero1 <= 0){
    numero1 = parseInt(prompt("Introduce un numéro positivo:",0));
    if(numero1 % 2 != 0){
        document.write("<h2> El " + numero1 + " es numéro impar </h2>");
    
    }else{
        document.write("<h2> El numéro "+ numero1 + " es numéro par </h2>")
    }
}*/

/*Mi propuesta es erronea no solamente por que los numéros negativos
tambien pueden ser pares e impares, si no aun más importante
si meto una letra el numero no me dice nada, quiere decir que esta mal */

// La siguiente fue la opción propuesta por el profesor

var numero1 = parseInt(prompt("Introduce el numéro: ",0));

while(isNaN(numero1)){
    numero1 = parseInt(prompt("Introduce un numéro correcto: ",0));
}

if(numero1 % 2 != 0){
    document.write("<h2> El " + numero1 + " es numéro impar </h2>");

}else{
    document.write("<h2> El numéro "+ numero1 + " es numéro par </h2>")
}
