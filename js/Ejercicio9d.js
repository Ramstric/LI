/*
Integrantes del equipo
 Hernández Hernández Ramón Everardo
 López Victorino Oscar Abiud
 Reyes Ramírez Giselle Alejandra
*/

function Mensaje() {
  document.getElementById('demoP1').innerHTML = '¡Hola Mundo!'
}

function CambiarImagen() {
  document.getElementById("myImage").src = 'https://w7.pngwing.com/pngs/972/320/png-transparent-speech-balloon-comics-illustration-cartoon-explosion-effects-border-black-and-yellow-speech-balloon-template-border-cartoon-character-white-thumbnail.png'
}

function ImagenOriginal() {
  document.getElementById("myImage").src = 'https://w7.pngwing.com/pngs/76/687/png-transparent-landscape-buddha-rock-landscape-photography-natural-landscapes-thumbnail.png'
}

function MensajeOcultar() {
  document.getElementById('demoP1').style.display='none'
}

function MensajeMostrar() {
  document.getElementById('demoP1').style.display='block'
}

function ImagenOcultar() {
  document.getElementById('myImage').style.display='none'
}

function ImagenMostrar() {
  document.getElementById('myImage').style.display='block'
}
