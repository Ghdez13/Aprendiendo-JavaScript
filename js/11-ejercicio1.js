'use strict'

/*Hacer un programa que:
-Pida 2 numero
-Nos diga cual es el mayor, menor y si son iguales
-Si lo introducido no es un numero o son numeros negativos, 
 que nos pida introducir nuevamente un numero valido o positivo*/

var numero1 = parseInt(prompt("Introduce el primer numero positivo", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero positivo", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2 )){
    numero1 = parseInt(prompt("Trata de nuevo, numero 1, solo numeros positivos", 0));
    numero2 = parseInt(prompt("Trata de nuevo, numero 2, solo numeros positivos", 0));
}

if(numero1 == numero2){
    alert("Los numeros son iguales");
} else if (numero1 > numero2){
    alert("El numero mayor es: "+numero1);
    alert("El numero menor es: "+numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es: "+numero2);
    alert("El numero menor es: "+numero1);
}else{
    alert("Introduce numeros correctos");
}