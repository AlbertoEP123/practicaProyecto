'use strict';
//nos ayuda a no dejar pasar ningun error
//Definir variables globales
var color = 'white';
/*
function eligeColor() {
  color = prompt("Diga que color quiere, rojo, azul, amarillo");

  switch (color) {
    case 'rojo':
        color = 'red';
        break;
    case 'azul':
        color = 'blue';
        break;
    case 'amarillo':
        color='yellow';
        break;
        default:
            color='black'; //lo pongo en negro para sabes que es un color erróneo
        break;
  }
}
*/
//trabajando con arrays

var colorfr = ['goldenrod','pink','rgb(16, 17, 124)','orange','magenta'];
var colorfn = [
    'white',
    'blue',
    'dark',
    'yellow',
    'red'
];
function pinturaInicial(){
    
    for (let i = 0; i < 5; i++) {
        let identificador = "c"+(i+1);
        let elemento = document.getElementById("c"+i).style.backgroundColor=colorfn[i];
        elemento.style.color=colorfr[i];
        
    }
}
function saludar(identificador) {
    let id = "c"+identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color=color;
    cuadro.innerHTML="HOLA";
}
function obtieneColor(identificador) {
    let id = "c"+identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.backgroundColor=color;
    cuadro.innerHTML="HOLA";
}
pinturaInicial();



