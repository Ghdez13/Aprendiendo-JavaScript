'use strict'

//Pruebas con las variables var y let


//Prueba con var
var numero = "40";
console.log(numero); //Valor 40

if(true){
    var numero = "50";
    console.log(numero); //Valor 50
}

console.log(numero); // valor 50

//Prueba con let

var texto = "Curso JS";
console.log(texto); // Valor Curso JS

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto); // Valor laravel 5
}

console.log(texto); // Valor JS

/*La diferencia cuando estamos utilizando let
es que asigna el valor a nivel bloque, es decir, 
donde se esta utilizando, y var, en su lugar, modifica toda
la variable, vease los ejemplos anteriores.*/
