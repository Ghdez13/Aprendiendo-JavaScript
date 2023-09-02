'use strict'

//Bucle While

/*Este bucle nos sirve para que se haga un bucle
infinito, para poder salir le tenemos que poner un tope */

var year = 2018;

while(year != 1991){
    //Ejecutar esto
    console.log("Estamos en el año: "+ year);

    if(year == 2000){
        break;
    }

    year--;
}

// Do while

var years = 30;

do{
    alert("Solo cuando sesa diferente a 20");
    years--;
}while(years > 25)