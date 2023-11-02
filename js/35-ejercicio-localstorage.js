'use strict'

//Load Starts

window.addEventListener("load", _ => {

    //On va créer une formulaire de films

    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener("submit", function () {
        var titulo = document.querySelector("#addpelicula").value;
        if(titulo.length >=1){
        localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#peliculalist");
    for(var i in localStorage){
        
        if(typeof localStorage[i] == "string"){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);

        }
        
    }

}); //Load Ends