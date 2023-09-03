'use strict'

/* Mostrar todos los numeros impares
que hay entre dos numeros introducidos por el usuario */

var numero1 = parseInt(prompt("Introduce el primer numéro", 0));
var numero2 = parseInt(prompt("Introduce el segundo numéro", 0));

document.write("<h1>Entre el numéro "+ numero1 + " y el numéro " + numero2 + " los siguientes son los numéros impares </h1>")

while(numero1 < numero2){
    numero1++;
    if(numero1 % 2 != 0){
        
        document.write("<h3>El numéro "+ numero1 + " es impar</h3>")

    }
}


var numero1 = parseInt(prompt("Introduce el primer numéro", 0));
        
        document.write(numero1 % 7)
