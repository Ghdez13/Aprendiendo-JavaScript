'use strict'

//Load Starts
window.addEventListener("load", _ => {

    //-----LocalStorage---------
    /*
    LocalStorage, comme son nom l'indique est la manière de stocker l'information
    localment sans avoir recours à une base de données. 
    L'information qui a été créée dans l'utilisation de LocalStorage est stockée
    indéfiniment ou jusqu'à qu'on décide de nettoyer les données du navigateur
    */

    //Premieremènt, on va vérifier si LocalStorage est compatible avec le navigateur. 

    if (typeof (storage) !== "undefined") {
        console.log("Localstorage disponible");
    } else {
        console.log("Incompatible con LocalStorage");
    }

    // Comment on peut enregistrer l'information en localstorage

    localStorage.setItem("titulo", "curso");

    // Comment on peut récupérer un élément
    document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

    // Comment en peut enregistrer un objet en localstorage

    var usuario1 = {
        nombre: "Gerardo",
        email: "gerardoa-hdez@gmail.com",
        web: "https://google.com"
    };
    /*
    Pour pouvoir enregistrer un objet, on doit d'abord le modifier.
    C'est-à-dire, nous devons de le transformer en "JSON String".  
    */
    localStorage.setItem("usuario", JSON.stringify(usuario1));

    // Récupérer un objet
    /*
    Contrairement à l'étape précédente, lorsqu'on essaie de récupérer
    l'objet, il faut le transformer à nouveau de "JSON String" à une objet
    de JavaScript utilisable.
    */
   var userjs = JSON.parse(localStorage.getItem("usuario"));
   console.log(userjs);
   document.querySelector("#datos").append(` ${userjs.web}, ${userjs.nombre}`);

   //Pour effacer le localstorage nous avons deux option:

   //Première: ci-bas, on supprimera une objet particulier
   localStorage.removeItem("usuario");

   //Deuxième: ci-bas on supprimera tous les objets.
   localStorage.clear();

}); // Load Ends