'use strict'

//Load Starts
window.addEventListener("load",_=>{

        //-----LocalStorage---------
/*
LocalStorage, comme son nom l'indique est la manière de stocker l'information
localment sans avoir recours à une base de données. 
L'information qui a été créée dans l'utilisation de LocalStorage est stockée
indéfiniment ou jusqu'à qu'on décide de nettoyer les données du navigateur
*/

//Premieremènt, on va vérifier si LocalStorage est compatible avec le navigateur. 

if (typeof(storage) !== "undefined"){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

// Comment on peut sauvegarde information en localstorage

localStorage.setItem("titulo", "curso");

}); // Load Ends