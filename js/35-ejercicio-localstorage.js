'use strict'

//Load Starts

window.addEventListener("load", _ => {

    //On va créer une formulaire de films

    var formulario = document.querySelector("#FormPeliculas");

    formulario.addEventListener("submit", function () {
        var titulo = document.querySelector("#AddPelicula").value;
        if(titulo.length >=1){
        localStorage.setItem(titulo, titulo);
        }
    });

    var ul = document.querySelector("#PeliculaList");
    for(var i in localStorage){
        
        if(typeof localStorage[i] == "string"){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);

        }
    }

    // On va suprimer les films
    var formulario = document.querySelector("#FormBorrarPeliculas");

    formulario.addEventListener("submit", function () {
        var titulo = document.querySelector("#BorrarPelicula").value;
        if(titulo.length >=1){
        localStorage.removeItem(titulo, titulo);
        }
    });

}); //Load Ends