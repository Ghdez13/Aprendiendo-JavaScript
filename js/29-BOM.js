'use stric'

/*Le BOM signifie Browser Object Model, on l'utilise 
si nous voulons travailler avec le Browser directement,
par exemple, modifier la taille de Browser directement
*/

function getBom(){

// Pour connaître la hauteur
console.log(window.innerHeight);
//Pour connaître la largeur
console.log(window.innerWidth);
//Pour connaître le screen width
console.log(screen.width);
//Pour connaître le screen height
console.log(screen.height);
//Pour connaître tous les valeurs de location (href,protocol,port,etc)
console.log(window.location);
}
//On utilse c'est function pour changer l'URL 
function redirect(url){
    window.location.href = url;
}

//On utilise c'est function pour ouvrir un nouvel onglet dans le navigateur
function abrirVentana(url){
    window.open(url,"","width=400, height=300");
}

getBom();




