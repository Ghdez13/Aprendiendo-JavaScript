'use strict'

//Arrays, arreglos o matrices

var nombre = "Gerardo Hernandez";
var nombres = ["Victor Robles", "Juan Lopez", "Pedro Rivera","Diana Bautista", 52,true];

var lenguajes = new Array("PHP","JS","GO","Java","C#","C", "Pascal");

//console.log(nombres);
//console.log(lenguajes);

//console.log(nombres.length);

/*
var elemento = parseInt(prompt("Que elemento del array quieres?",0));
if(elemento >= nombres.length){
    alert("Introduce un numero correcto, que sea menor a" + nombres.length);
}else{
    
    alert("El usuario seleccionado es: "+nombres[elemento]);

}
*/

document.write("<h1> Lenguajes de programación del 2018</h1>")
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
*/
lenguajes.forEach((elemento,indice,arr)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
});

document.write("</ul>");






