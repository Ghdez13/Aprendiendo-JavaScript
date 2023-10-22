'use strict'

//DOM - Document Object Model

/*
Le DOM (Document Object Model) est une interface pour vos pages web.
C'est une API (Application programming interface) 
*/


function cambiaColor(color){
    caja.style.background = color;
}


//Diferentes maneras de seleccionar un elemento

//var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja");

//Con este comando podemos cambiar el texto desde JS
caja.innerHTML = "Texto modificado desde JS";

//Con estas lineas podemos cambiar los estilos en HTML
caja.style.background = "blue";
caja.style.color = "white";
caja.style.padding = "20px";
caja.class = "Hola";
caja.className = "Hola Hola2";
console.log(caja);

