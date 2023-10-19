'use strict'

/*
1.- Pedir 6 numeros por pantalla y los meta en un array
2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene el array
6.- Hacer una busqueda de un valor introducido por el usuario,
    que nos diga si lo encuentra y su indice
    (Se valorará el uso de funciones)
 */


    /*La primera forma es con variable normal
    var numeros = new Array(6);

    for(var i = 0; i <= 5; i++){
        numeros[i] = parseInt(prompt("Introduce un número:",0));

    }
    */

    function mostrarArray(elementos, textoCustom = ""){
        document.write("<h1>Contenido del Array "+textoCustom+"</h1>");
        document.write("<ul>");
        elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
    }

    // Esta otra forma es usando un "push"   
    // Esta pidiendo los 6 números. 
    var numeros = [];

    for(var i = 0; i <= 5; i++){
        numeros.push(parseInt(prompt("Introduce un número:",0)));

    }

    // Mostrar en el cuerpo de la pagina
    mostrarArray(numeros);


    // Mostrando el array por la consola
    console.log(numeros);

    //order y mostrar
    // con la function se ordena numericamente, sin la funcion es alfabeticamente
    numeros.sort(function(a, b){return a-b});
    mostrarArray(numeros, 'ordenado');


    //invertir y mostrar

    numeros.reverse();
    mostrarArray(numeros, 'Revertido');

    //Mostrar cuantos elementos tiene el Array

    document.write("<h1>El Array tiene: "+numeros.length+" elementos</h1>");

    //Hacer una busqueda
    var busqueda = parseInt(prompt("Busca un número:",0));
    var posicion = numeros.findIndex(numero => numero == busqueda);

    if(posicion && posicion != -1){
        document.write("<hr/><h1>Econtrado</h1>");
        document.write("<h1>Posición de la busqueda: "+posicion+"</h1>");
    } else{
        document.write("<hr/><h1>No encontrado</h1>");
    }
    

