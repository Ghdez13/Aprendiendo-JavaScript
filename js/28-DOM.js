'use strict'

//DOM - Document Object Model


function cambiaColor(color){
    caja.style.background = color;
}

var caja = document.getElementById("micaja");

//Con este comando podemos cambiar el texto desde JS
caja.innerHTML = "Texto modificado desde JS";

//Con estas lineas podemos cambiar los estilos en HTML
caja.style.background = "blue";
caja.style.color = "white";
caja.style.padding = "20px";
caja.class = "Hola";
caja.className = "Hola Hola2";
console.log(caja);

