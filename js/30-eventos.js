'use strict'

/* Les événements dans JS sont tous les actions
que l'utilisateur fait dans l'ecran du navigateur
par exemple: clicks, mouvements de le mouse, etc.

*/

//Start load
window.addEventListener("load", _ =>{
    //Les événements du mouse
function cambiarColor(){
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
        
    }else{
        boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.bord = "1px solid #ccc";

   return true;
}

var boton = document.querySelector("#boton");

/*boton.addEventListener("click",function(){
    cambiarColor();
});*/

//Ci-bas, on peut améliorer le code avec l'utilisation de la flèche
//boton.addEventListener("click", _ =>{ 
    boton.addEventListener("click",function(){
    cambiarColor();
    /*C'est quoi le "this"? on peut l'appeler le propriétaire de la fonction */
    /*Ci-bas, c'est la maniere d'invoquer "this" comme objet */
    console.log(this);
    this.style.border = "10px solid black";
});


//Mouse Over
boton.addEventListener("mouseover", _=> boton.style.background = "pink");

//Mouseout
boton.addEventListener("mouseout", _=> boton.style.background = "purple");

//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener("focus", _=> console.log("[Focus] Estas haciendo focus dentro del input"));

//Blur
var input = document.querySelector("#campo_nombre");
input.addEventListener("blur", _=> console.log("[Blur] Saliste del input"));

//Keydown
var input = document.querySelector("#campo_nombre");
input.addEventListener("keydown",(event)=> console.log("[Keydown] Estas pulsando una tecla", String.fromCharCode(event.keyCode)));

//keypress
var input = document.querySelector("#campo_nombre");
input.addEventListener("keypress",(event)=> console.log("[Keypress] Pulsaste esta tecla", String.fromCharCode(event.keyCode)));

//Keyup
var input = document.querySelector("#campo_nombre");
input.addEventListener("keyup",(event)=> console.log("[Keyup] soltaste esta tecla", String.fromCharCode(event.keyCode)));

}); //End load

