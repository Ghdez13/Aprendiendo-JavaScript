'use strict'

//On va apprendre comment utliser les Arrow function

// Start load
window.addEventListener("load", _ => {

//---------- Les function normal VS Arrow functions--------

//Avec la function ci-bas on va ajouter deux nombres
function sumas (a,b){
    return a+b;
}

const resultados = sumas(1,5);
console.log(resultados);


// Maintenant on va changer la function normal avec Arrow function

const suma = (a,b) => a + b;
const resultado = suma (1,6);
console.log(resultado);

//---------------------------------------

//function normal

function saludar (nombre){
    console.log(`Hola ${nombre}`);
}

saludar("Petra");

// en utilisant Arrow Function

const saludars = nombre => console.log(`Hola ${nombre}`);
saludars("Gerardo");

//----------------------------------------

//function normal
const sumar = function (a,b){
    return a+b;
}
console.log(sumar(10,11));

//Arrow function
const sumars = (a,b) => a+b;
console.log(sumar(12,12));

//------------------------------

/* Si on va travailler avec plus d'un argument ou instruction
 on utilise les accolades {} */
const mostrarvariasintrucciones = _ => {
    console.log("Instruccion 1");
    console.log("Instruccion 2");
    console.log("Instruccion 3");
}
mostrarvariasintrucciones();

//------------------------------

//Function normal avec Array
//N'oubliez pas que les guillemets backticks(accent grave) sont utilisés pour concaténer

const numeros = [1,2,3,4];

numeros.forEach(function (el,index){
    console.log(`${el} esta en la posicion ${index}`);

});

// function Arrow
const numeross = [5,6,7,8];

numeross.forEach((els,index) => console.log(`${els} esta en la posicion ${index}`));

//--------------------------------

/*
Lorsque on utilise la fonction normal pour la création d'un objet
cet objet est transformé un objet DOM
*/



}); //End load
