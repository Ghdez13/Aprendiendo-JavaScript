'use strict'

/*Utilizando un bucle
-Mostrar la media y la suma de los resultados
-Para cuando el usuario introdusca un numero negativo
 */

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros. Si quieres parar introduce uno negativo", 0));

    if(isNaN(numero)){
        numero = 0;

    }else if(numero >= 0){
        suma = suma + numero;
        contador ++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));