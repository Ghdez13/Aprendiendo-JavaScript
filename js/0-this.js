'use strict'

/*
Le mot-clé "this" peut être utilisé dans le portée
globale. Si vous tapez "this" dans la console de votre
navigateur, vous obtenez:

Window {window: Window, self: Window, document: document, name: '', location: Location, ...}

*/

/*
Maintenant, Si on utilise "this" dans un objet, il fait reference 
à l’objet lui-même. Ainsi, on peut faire référence aux valeurs d'un 
objet dans les méthodes d l'objet lui-même.

voila ci-bas l'exemple:
*/

const post = {
    id: 5,
    getSlug: function(){
        return `post-${this.id}`;
    },
    title: "Awesome post",
    category: "JavaScript"
};
console.log(post.getSlug);

//---------------------------------------------------------


/*
On va, maintenant essayer d'utiliser "this" dans une fonction

Si nous ne sommes pas en mode 'use strict' le résultat sera le suivant:
Window {window: Window, self: Window, document: document, name: '', location: Location, ...}

Mais, si nous sommes en mode 'use strict' le résultat sera le suivant:
undefined
le resultat ci-dessus c'est car "this" dans une fonction fait référence 
à sa valeur explicite
*/

const usethis = function(){
    return this;
}
console.log(usethis());

//---------------------------------------------------------------------

/*
Pour définir explicitement "this" dans une fonction on peut attribuer
manuellement des propriétés et des méthodes à la fonction.
Ci-bas l'exemple:
*/

function doSomething(post){
    this.id = post.id;
    this.title = post.title;
    console.log(`${this.id} - ${this.title}`);
}
new doSomething({id:5, title: "Awesome post"});

//-------------------------------------------------------------

/*
Il y a méthodes ("call", "apply" et "bind") qu'on peut utiliser
avec "this", ainsi que les fonctions fléchées
*/

//----- Méthode "call"--------

// cette méthode accepte un objet auquel "this" fait référence.
/* 
la méthode "call" peut être utilisée sur n'importe quelle fonction et fait
exactement ce qu'elle dit: elle appelle la fonction.
*/

const doSomething1 = function() {
    console.log (`${this.id} - ${this.title}`);
} 
doSomething1.call({id: 5, title: "Awesome post"});

/*
Ci-bas, nous avons un autre exemple avec la méthode "call" car 
elle peut accepter autres paramètre dans la fonction.
*/

const doSomething2 = function(cat){
    console.log(`${this.id} - ${this.title} - Category: ${cat}`);
}
doSomething2.call({id: 5, title: "Awesome post" }, "JavaScript");