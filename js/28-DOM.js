'use strict'

//DOM - Document Object Model

/*
Le DOM (Document Object Model) est une interface pour vos pages web.
C'est une API (Application programming interface) 
*/


function cambiaColor(color){
    caja.style.background = color;
}


//Diferentes maneras de seleccionar un elemento con un ID

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


//Conseguir elementos por sus etiquetas
var todosLosDivs  = document.getElementsByTagName('div');

    
    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    

    var valor;
    for(valor in todosLosDivs){
        if(typeof todosLosDivs[valor].textContent == 'string'){
            var  parrafo = document.createElement ("p");
            var texto = document.createTextNode(todosLosDivs[valor].textContent);
            parrafo.append(texto);
            seccion.append(parrafo);
        }
    }

    seccion.append(hr);
    

//Conseguir elementos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";  
    }   
}

//Query Selector todos los ejemplos para un elemento solamente
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

//Lo siguiente es para seleccionar más de un elemento

var todosLosElementos = document.querySelectorAll(".rojo");
console.log(todosLosElementos);

var todosLosDivs = document.querySelectorAll("div");
console.log(todosLosDivs);




