'use strict'

/* Tabla de multiplicar de un numéro introducido en pantalla */

var numero1 = parseInt(prompt("¿De qué muméro quieres la tabla?",1));


document.write("<h1> Tabla del " + numero1 + "</h1>");
for(var i = 1; i <= 10; i++){
document.write(i + " x " + numero1 + " = " + (i * numero1) + "<br/>"); 

}

// Todas las tablas de multiplicar usando un for anidado

for(var c = 1; c <= 10; c++){
        document.write("<h1> Tabla del " + c + "</h1>");
    for(var i = 1; i <= 10; i++){
    document.write(i + " x " + c + " = " + (i * c) + "<br/>"); 

    }
}


