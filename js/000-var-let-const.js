'use strict'
//Start load
window.addEventListener("load",_ =>{


/*
Ici,je vais travailler avec les differents variables,
ainsi que les utilisations et ses particularités: var, let et const
*/

//-------------var------------------------

/*
"var" est une variable que une fois a été creé
on va pouvoir acceder á son valeur n'importe óu dans le code 
*/

if(true){
    var nombre = "Se joindre";
}

console.log(nombre); 
//Ici on a appelé la variable "nombre" et on est en dehors du bloc de code

//----------let-------------------------------

/*
Lorsqu'on utilise "let", l'accèss á l'information est exclusivement
dans le même bloque que la variable a été créée
*/

// voici le premier excercice incorrect
// if(true){
//     let nombre1 = "Se joindre";
// }
// console.log(nombre1); 

/*comme on utilise la console.log en dehors du bloc de code
  le code a retourné une erreur */

//Voici le code correct pour cet exemple
if(true){
    let nombre2 = "Se joindre";
    console.log(nombre2); 
}


//---------const---------------------------------

/*
La variable "const" s'utilise lorsqu'on veut 
déclarer une valeur non modifiable,
c'est-à-dire, en lecture seulement. 
Tout comme la varible précédent "const" s'utilise
seulement dans le bloc de code oú elle a été déclaré
*/

//voici l'exemple incorrect

// const email = "gerardo@outlook.com";
// email = "otro.email";

//Voici l'example correct

if(true){
    const nombre3 = "Se joindre";
    console.log(nombre3); 
}




}); // End load

