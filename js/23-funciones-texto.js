'use strict'

//Transformacion de textos de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es un muy buen curso";

var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toUpperCase();

//console.log(dato);

//Calcular la longitud

var nombre = "Gerardo Hernández";

//console.log(nombre.length);

//Concatenar - Unir un texto

//var textoTotal = texto1+ "" + texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);
