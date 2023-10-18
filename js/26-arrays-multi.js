'use strict'

// Estos arrays multi, son arrays dentro de otro arrays como anidados

var categorias = ["Acción", "Terror", "Comedia", "Romantica"];
var peliculas = ["La verdad duele","Saw","Amanda","La vida es bella","Rapido y Furioso"];

//Para mostrar los datos del Array en orden A-Z
//peliculas.sort();

//Es para mostrar de atras hacia adelante tu Array, ojo que no es alfabeticamente.
peliculas.reverse();
console.log(peliculas);

// Así se hace un Array multidimensional
var cine = [categorias, peliculas]; 

/* Estamos tomando la primera dimensión y despues la segunda
variable de esa dimensión, en este caso se mostrara
la categoria "Terror"
 */
console.log(cine[0][1]); 
console.log(cine[0][2]);

//Agregar elementos a los Arrays, Eliminarlos y después mostrtarlos
/*
var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);

}while(elemento != "acabar");

//Lo que hace "pop" es eliminar el ultimo elemento del Array
peliculas.pop();
*/

/* Al utilizar el "indexOf" es para buscar en que lugar esta 
el elemento que estamos buscando, en este caso que lugar ocupa
la pelicula "Saw" en el Array.
Después con splice borramos si es que lo ha econtrado*/

var indice = peliculas.indexOf("Saw");
if(indice>-1){
    peliculas.splice(indice,1);
}


//Para convertir un Array a texto se usa lo siguiente:


var peliculas_string = peliculas.join();

//Para convertir de un texto a Array se hace lo siguiente

var cadena = "Texto1, texto2, texto3, texto4";
var cadena_array = cadena.split(", ");

console.log(cadena_array);



