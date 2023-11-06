'use strict'

//Load Starts
window.addEventListener("load", _=>{

/*
Avec l'instruction "try...catch" regroupe des instructions à exécuter
et définit une réponse si l0une de ces instructions provoque une exception.
*/

    try{
        var year = 2019;
        alert(year);
        var vector = new Array(99999999999999);
        console.log(decodeURIComponent("https://google.com"));
    }catch(error){
        console.log(error);
        alert("A ocurrido un error en el codigo");
    }


}); //Load Ends