'use strict'

//Load Starts
window.addEventListener("load", _ => {

  /*
  L'API Fetch en JavaScript, qu'est ce que c'est ?

  L'API fetch (en anglais, le verb fetch signifie récupérer)
  nous l'utilisons pour récupérer des informations directement
  depuis le navigateur, la méthode la plus simple (et la plus moderne)
  est d'utiliser "fetch". Il est utlisé pour effectuer des requêtes HTTP.
  */

  // fetch (ajax) et les demandes aux services / APIs REST
  var div_usuarios = document.querySelector("#usuarios");
  var div_profesor = document.querySelector("#profesor");
  var div_janet = document.querySelector("#janet");



  // On va faire le chaînage des promesses (en anglais "promise chaining")
  getUsuarios()
    .then(data => data.json()) // Ici est la première partie est appelée "promises" ou promesas en espagnol
    .then(users => {
      listadoUsuarios(users.data);

      return getInfo();
    })
    .then(data => {
      div_profesor.innerHTML = data;
      return getJanet();

    })
    .then(data => data.json())
    .then(user => {
      mostrarJanet(user.data);
    })
    .catch( _ =>{ //Ici on utilise cette ligne pour détecter une erreur
      alert("Error en las peticiones");
    });




  function getUsuarios() {
    return fetch("https://reqres.in/api/users");
  }

  function getJanet() {
    return fetch("https://reqres.in/api/users/2");
  }
  // Avec la fonction ci-bas on va créer une promesse à partir de zéro
  function getInfo() {
    var profesor = {
      nombre: "Gerardo",
      apellidos: "Hernández Bautista",
      url: "https://google.com"
    };
    return new Promise((resolver, reject) => {

      var profesor_string = "";

      setTimeout(function () {
        profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != "string" || profesor_string == "") return reject("error 1");

        return resolver(profesor_string);

      }, 3000);

    });

  }




  // Ci-bas on va montrer plusieurs utilisateurs
  function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
      let nombre = document.createElement("h3");
      let avatar = document.createElement("img");

      nombre.innerHTML = i + "-" + user.first_name + " " + user.last_name;
      avatar.src = user.avatar;
      avatar.width = "50";
      div_usuarios.appendChild(nombre);
      div_usuarios.appendChild(avatar);
      document.querySelector(".Loading").style.display = "none";
    });
  }




  // Ci-bas on va montrer seulement un utilisateur
  function mostrarJanet(user) {
    let nombre = document.createElement("h4");
    let avatar = document.createElement("img");


    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = "100";
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector("#janet .Loading").style.display = "none";
  };


}); //Load Ends