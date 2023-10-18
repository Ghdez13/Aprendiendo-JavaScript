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
/*
lenguajes.forEach((elemento,indice,arr)=>{
    document.write("<li>"+indice+"-"+elemento+"</li>");
    
});
*/

// Otra manera de recorrer Arrays o iteraciones
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


//Busquedas en el Array

//Esta es una manera muy sencilla de buscar un elemento
// en el array, nos regresa la palabra

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
 
//Con este otro, nos regresa en que index esta localizado
//el elemento que buscamos

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

//El metodo "some" nos ayuda a comprobar si un valor o elemento cumple la condiciom
//en este caso, si hay elementos mayores a 20
var precios = [10, 20, 50, 12];
var busqueda_numero = precios.some(precio => precio >= 20);

console.log(busqueda_numero);






