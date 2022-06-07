//const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = prompt("Ingrese su edad: ");

console.log('AAA', nombre, apellido, edad);

let nombreDeUsuario = document.getElementsByClassName('nombreUsuario')[0];

nombreDeUsuario.innerHTML = `Nombre: ${nombre}.`;

let apellidoDeUsuario = document.getElementsByClassName('apellidoUsuario')[0];

apellidoDeUsuario.innerHTML = `Apellido: ${apellido}.`;

let edadDeUsuario = document.getElementsByClassName('edadUsuario')[0];

edadDeUsuario.innerHTML = `Edad: ${edad}.`;

