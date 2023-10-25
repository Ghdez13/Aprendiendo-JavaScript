'use strict'

/*
Les timers sont 
*/

//Start load
window.addEventListener("load", _=> {

// Timers
//Avec "SetInterval" la condition ou le funtion s'ejecute en bucle
//Avec "setTimeout la condition ou le function s'ejecute seulement une fois"


function intervalo () {

     tiempo =   setInterval( _=> {
        console.log("Set Interval ejecutado");
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        } 
    },600);
    
        return tiempo;
    }

 var tiempo = intervalo();

//On va selectioner le bouton pour arrêter le setInterval
var stop = document.querySelector("#stop");

stop.addEventListener("click", _=> {
    clearInterval(tiempo) 
    & alert("Has parado el Intervalo en bucle"), stop.disabled = true, start.disabled = false
});


//On va selectioner le bouton pour démarrer le setInterval
var start = document.querySelector("#start");

start.addEventListener("click", _=> {
     intervalo() 
     & alert("Has comenzado el Interval en bucle"), start.disabled = true, stop.disabled = false
});

});// End Load

