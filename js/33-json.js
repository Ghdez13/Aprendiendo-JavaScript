'use strict'

/*
JSON (JavaScript Object Notation)
JSON est un formato d'échange de données léger et donc
performant. C'est une syntaxe pour sérialiser (mettre de données en série
après les avoir converti dans un format donné) des objets, tableaux, nombres, chaînes de caractères,
booléens et valeurs null.
*/

//Load Starts
window.addEventListener("load", _=> {
   

    //Ci-bas, on a l'exemple d'un objet JSON
    var pelicula = {
        titulo: "Batman vs Superman",
        year: 2017,
        pais: "Estados Unidos"
    };

    console.log(pelicula);

    //Ci-bas, nous avons un exemple d'un objet array, c'est-à-dire, avec plus d'un objet.
    var peliculas = [
        {titulo: "La verdad duele", year: 2016, pais: "Francia"},
        {titulo: "Amarte duele", year: 2000, pais: "Mexico"}, pelicula
    ];

    console.log(peliculas);

    //Ci-bas, nous avons un exemple, pour mountre les valeurs des objets dans le navigateur
    var caja_peliculas = document.querySelector("#peliculas");
    var index;
    for(index in peliculas){
        var p = document.createElement("p");
        p.append(`Titulo: ${peliculas[index].titulo} - año: ${peliculas[index].year}`);
        caja_peliculas.append(p);
    }


}); //Load ends
