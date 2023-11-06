'use strict'

//Load starts
window.addEventListener("load", _ =>{

    /*
    Dans cet exemple on va travailler avec la date, les heures, les jours, etc.
    */

    var fecha = new Date();
    var year = fecha.getFullYear();
    var month = fecha.getMonth();
    var day = fecha.getDay(); // Cette méthode renvoie le jour de la semaine où (0 = dimanche, 1 = lundi et ainsi de suite)
    var days = fecha.getDate();
    var hour = fecha.getHours();
    var minutes = fecha.getMinutes();

    var fechaCompleta = `
        El año es: ${year}
        El mes es: ${month}, donde 0 = enero, 1 = febrero, 2 = marzo ... 11 = diciembre.
        El día de la semana es: ${day}, donde 0 = domingo, 1 = lunes ... 6 = sabado.
        El dia del mes es: ${days}
        La hora es: ${hour}
        Lis minutos son: ${minutes}
        `;

    console.log(fechaCompleta);

    /*
    Les exemples suivants sont pour utiliser des méthodes mathématiques.
    */
    console.log(Math.random()*100); // on multiplie par 100 si nous voulons un nombre à deux chiffres, par 1000 à trois chiffres, etc.
    console.log(Math.ceil(Math.random()*100)); // On utilse (math.ceil) pour obtenir un nombre sans décimal

});// Load Ends