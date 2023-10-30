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
    getSlug: function () {
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

const usethis = function () {
    return this;
}
console.log(usethis());

//---------------------------------------------------------------------

/*
Pour définir explicitement "this" dans une fonction on peut attribuer
manuellement des propriétés et des méthodes à la fonction.
Ci-bas l'exemple:
*/

function doSomething(post) {
    this.id = post.id;
    this.title = post.title;
    console.log(`${this.id} - ${this.title}`);
}
new doSomething({ id: 1, title: "´this´ de manière explicite dans une fonction" });

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

const doSomething1 = function () {
    console.log(`${this.id} - ${this.title}`);
}
doSomething1.call({ id: 2, title: "´this´ en utilisant la méthode call" });

/*
Ci-bas, nous avons un autre exemple avec la méthode "call" car 
elle peut accepter autres paramètre dans la fonction.
*/

const doSomething2 = function (cat) {
    console.log(`${this.id} - ${this.title} - Category: ${cat}`);
}
doSomething2.call({
    id: 2.1,
    title: "´this´ en utilisant la méthode call avec un paramètre"
},
    "Je suis le paramétre");

//------- Méthode "apply"--------------

/*
La méthode "apply" accepte un objet auquel "this" fera référence
et un tableau de paramètres de la fonction. On peut voir dans
le suivant exemple que la reponse est une Array
 */

const doSomething3 = function (cat1, cat2) {
    console.log(`${this.id} - ${this.title} - Categories: ${cat1}, ${cat2}`);
}
doSomething3.apply({
    id: 3,
    title: "´this´ en utilisant la méthode apply avec plus d'un paramétre"
},
    ["Paramétre 1 - élément d'array 1", "Paramétre 2 - élément d'array 2"]);

//------- Méthode "bind"--------------

/*
La méthode "bind" associe un objet à une fonction de sorte qu'à chaque
fois qu'on invoque la fonction, "this" fait référence à l'objet.
*/

const post1 = { id: 4, title: "´this´ en utilisant la méthode bind", category: "chaque chose est une objet avec bind" };
const doSomething4 = function () {
    return `${this.id} - ${this.title} - ${this.category}`;
}
const bindRender = doSomething4.bind(post1);
console.log(bindRender());

/*
Nous avons deux manieres différent d'utiliser la méthode "bind"
voila ci-bas les deux options
*/

//1
function sayHello(greet) {
    console.log(`${greet} ${this.name}`);
}
const obj = { name: "Jerry - Une autre façon d'utiliser la méthode bind" };
const newFunc1 = sayHello.bind(obj, "Hello");
newFunc1();

//2
function sayHello1(greet) {
    console.log(`${greet} ${this.name}`);
}
const obj1 = { name: "Jerry - Encore une autre façon d'utiliser la méthode bind" };
const newFunc2 = sayHello1.bind(obj1);
newFunc2("Hello");


/*
Finalement, 'c'est vraiment important savoir que lorsqu'on utilise
les fonctions fléchées la mot-clé "this" n'est pas la meilleure options
la raison, bien, les fonctions fléchées n'ont pas leur popre "this". 
C'est-à-dire les fonctions fléchées n'ont pas le pouvoir de modifier "this"
car "this" est définie sur l'élément DOM sur l'ecouter est placé.
*/