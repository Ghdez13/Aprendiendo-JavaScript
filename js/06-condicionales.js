'use strict'

//Condicional if

/*Los condicionales se usan para comprobar o comparar algo
podemos decir si es verdad o no, y si se cumple
se realiza una acción*/

/*Operadores relacionales

    Mayor que: >
    Menor que: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Diferente: !=
    */


//Primer ejemplo de condicionales
var edad1 = 30;
var edad2 = 12;

//Si pasa esto
if(edad1 > edad2){
    console.log("edad1 es mayor que edad2");
    //Ejecuta esto
} else{
    console.log("La edad es inferior");
}

//Otro ejemplo de condicionales

var edad = 12;
var nombre = "Gerardo";

if(edad >= 18){
    console.log(nombre + " tiene "+edad+" años");      //El usuarrio es mayor de edad
} else{
    console.log(nombre + " tiene "+edad+" años, es MENOR de edad");
}

//Ejemplo de if anidados

var edad = 71;
var nombre = "Saúl";

if(edad >= 18){
    console.log(nombre + " tiene "+edad+" años");      //El usuarrio es mayor de edad

    if(edad <= 33){
        console.log("No te preocupes aun eres chaviza");
    }else if(edad == 70){
        console.log("Ya no eres chaviza, hueles a viejo");
    }else{
        console.log("Ya sigue la luz hermano!")
    }

} else{
    console.log(nombre + " tiene "+edad+" años, es MENOR de edad");
}

//Operadores lógicos
/* 
    AND (y): &&
    OR (o): ||
    NEGACIÓN: !

*/

var year = 2005;

//Negación

if(year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

//AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post-moderna");
}

// OR

if(year == 2008 || (year >= 2018 && year ==2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado")
}

