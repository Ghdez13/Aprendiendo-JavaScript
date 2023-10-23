'use strict'

/* Les événements dans JS sont tous les actions
que l'utilisateur fait dans l'ecran du navigateur
par exemple: clicks, mouvements de le mouse, etc.

*/

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

//Ici-bas, on peut améliorer le code avec l'utilisation de la flèche
boton.addEventListener("click", _ => cambiarColor());


//Mouse Over
boton.addEventListener("mouseover", _=> boton.style.background = "pink");

//Mouseout
boton.addEventListener("mouseout", _=> boton.style.background = "purple");