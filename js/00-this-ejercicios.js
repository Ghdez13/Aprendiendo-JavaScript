'use strict'

// Load start
window.addEventListener("load", _=>{

/*
1.- Variable vs propriété

Dans l'exemple suivant lorsqu'on l'exécute, 
ce qui va être montré?
*/


    const objet = {
        message: "1.-exemple. Hello, World",

        getMessage(){
            const message = "Hello, Earth";
            return this.message;
        }
    };
    console.log(objet.getMessage());

/*
2.- Le prenom de le chat

*/

function pet(name){
    this.name = name;

    this.getName = () => this.name;
}

const cat = new pet("2. exemple - fluffy");
console.log(cat.getName());

const {getName} = cat; // ici on va déstructurer getName et égaler la variable
console.log(getName());

// 3.- Fonction constructeur exemple

/*
Les fonctions constructeur sont utilisés pour
la creation de nouveaux objets via une base de données
*/

function persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}
//Ci-bas, on appele à l'objet et sa représentation en chaîne de caractères
let sujeto = new persona("Karol", "G", 33, "karolg@gmail.com");
console.log(sujeto);

console.log();

//Ci-bas, on appele à chaque valeur séparément
console.log(sujeto.nombre);
console.log(sujeto.apellido);
console.log(sujeto.edad);
console.log(sujeto.email);

//3.1.- Fonction constructeur

function usuario (nombre, apellidos, edad, telefono, pais_residencia, idiomas){
    this.nombre_completo = {
        "nombre": nombre,
        "apellidos": apellidos
    }
    this.edad = edad;
    this.telefono = telefono;
    this.pais_residencia = pais_residencia;
    this.idiomas = idiomas;
}

let usuario1 = new usuario("Jose", "Perez Perez",33,
"9842558786", "Mexico", ["spanish", "english", "french", "german"]);
console.log(usuario1);


//4.- Salutation retardée
// Que consigne la console avec l'extrait de code suivant?

const objet1 = {
    message: "4.- exemple - Hello, World",
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(objet1.logMessage(),100); //ou
//setTimeout(_=>objet1.logMessage(),100); // ou
//setTimeout(objet1.logMessage.bind(objet1));

/*
L'explication: Si en "setTimeout" on écrit "objet1.logMessage,100" la reponse
de code sera "undefined" car nous sommes en train d'appeler une fonction,
une fonction qui, pendant le processus, fait référence à window (global)
et non une méthode, mais si on appelle la méthode, c'est-à-dire,
"objet1.logMessage(),100" la reponse sera "4.- exemple -Hello, World". 
*/



//5.- La méthode artificielle
//Comment vous pouvez appeller la fonction logMessage pour avoir le log "Hello, World"?

const objet2 = {
    message2: "5.- exemple - Hello, world"
}
function logMessage1(){
    console.log(this.message2);
}

//écris votre réponse ici
logMessage1.apply(objet2); // Ici, on utilise la méthode "apply"


//6.- la salutation et au revoir
// Que consigne la console avec l'extrait de code suivant?

const objet3 ={
    who: "World",
    salutation(){
        return `Hello, ${this.who}!`;
    },
    aurevoir: _=>{
        return `À tout à l'heure, ${this.who}!`;
    }
};
console.log(objet3.salutation()); // Hello, World
console.log(objet3.aurevoir()); // À tout à l'heure, undefined

/*
La réponse: La deuxième console, va être undefined, n'oublie pas que les
fonctions fléchées n'ont pas le pouvoir de modifier la mot-clé "this".  
*/

});// Load end