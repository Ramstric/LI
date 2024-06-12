/*
Integrantes del equipo
 Hernández Hernández Ramón Everardo
 López Victorino Oscar Abiud
 Reyes Ramírez Giselle Alejandra
*/

function dia(){
  let texto = "";
  switch (new Date().getDay()) {
    case 6:
      texto = "Hoy es sábado";
      break;
    case 0:
      texto = "Hoy es domingo"
      break;
    default:
      texto = "Deseando que sea fin de semana";
      break;
  }
  document.getElementById("di").innerHTML = texto;
}

function num_det(){
  let texto = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }
    texto += "El número es: " + i + "<br>";

  }
  document.getElementById("numero_break").innerHTML = texto;
}

function num_cont(){
  let texto = "";
  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      continue;
    }
    texto += "El número es: " + i + "<br>";

  }
  document.getElementById("numero_continue").innerHTML = texto;
}

function lista(){

  const numeros = ["uno","dos","tres","cuatro","cinco"];
  let texto = "";

  lista:{
    texto += numeros[0] + "<br>";
    texto += numeros[1] + "<br>";
    texto += numeros[2] + "<br>";
    texto += numeros[3] + "<br>";
    break lista;
    texto += numeros[4] + "<br>";
  }
  document.getElementById("list").innerHTML = texto;
}

function forof(){
  const escuela = "ESIME";

  let texto = "";
  for (const x of escuela) {
    texto += x + "<br>";
  }
  document.getElementById("escuela").innerHTML = texto;
}

function forof2(){
  const numeros = ["uno", "dos", "tres"];

  let texto = "";
  for (const x of numeros) {
    texto += x + "<br>";
  }
  document.getElementById("num_for").innerHTML = texto;
}




function iteNum(){
  Numeros = {};

  Numeros[Symbol.iterator] = function(){
    let n = 0;
    done = false;
    return{
      next(){
        n += 10;
        if(n == 110){
          done = true;
        }
        return{value:n, done:done};
      }
    };
  }
  let texto = ""
  for(const num of Numeros){
    texto += num + "<br>"
  }

  document.getElementById("demo").innerHTML = texto;
}

function iteNum2(){
  Numeros = {};

  Numeros[Symbol.iterator] = function(){
    let n = 0;
    done = false;
    return{
      next(){
        n += 10;
        if(n == 110){
          done = true;
        }
        return{value:n, done:done};
      }
    };
  }
  let iterator = Numeros[Symbol.iterator]();

  let texto = ""
  while(true){
    const result = iterator.next();
    if(result.done) break;
    texto += result.value + "<br>";
  }

  document.getElementById("w").innerHTML = texto;
}

function iteLet(){
  const letras = new Set(["a","b","c","d","a"]);

  let texto = "";
  for(const x of letras){
    texto += x + "<br>";
  }
  document.getElementById("D").innerHTML = texto;
}

function map(){
  const octavoSemestre = new Map([
    ["DESARROLLO PROSPECTIVO DE PROYECTOS", 8],
    ["HUMANIDADES IV: DESARROLLO PERSONAL Y PROFESIONAL", 9],
    ["CALIDAD EN LA INGENIERIA", 10]
  ]);

  let texto = "";
  for(const x of octavoSemestre){
    texto += x + "<br>"
  }
  document.getElementById("T").innerHTML = texto;
}



function setUno(){
  const letras = new Set(["a","b","c","d"]);
  document.getElementById("C").innerHTML = String(letras.size);
}

function setDos(){
  const letras = new Set();

  const a = "a";
  const b = "b";
  const c = "c";
  const d = "d";

  letras.add("a");
  letras.add("b");
  letras.add("c");
  letras.add("d");

  document.getElementById("Z").innerHTML = letras.size;
}






const letras = new Set(["a", "b", "c", "d", "e"])
function setFuncion_1() {
  let letra_aleatoria = String.fromCharCode(97+Math.floor(Math.random() * 26))
  letras.add(letra_aleatoria)
  document.getElementById('sets_1_1').innerHTML = "Dado el set <b>" + Array.from(letras) + "</b>";
  document.getElementById('sets_1_2').innerHTML = "Se agrego la letra <b>" + letra_aleatoria + "</b>";
}
function setFuncion_2() {
  let texto = "Se tienen las letras: <b>";
  letras.forEach(function(dato) {
    texto += dato + " ";

  })
  document.getElementById('sets_2_1').innerHTML = "Dado el set <b>" + Array.from(letras) + "</b>";
  document.getElementById('sets_2_2').innerHTML = texto + "</b>"
}

function setFuncion_3() {

  document.getElementById('sets_3_1').innerHTML = "Se tiene el iterador <b>" + letras.values() + "</b> y el set con los valores <b>" + Array.from(letras.values()) + "</b>";

  let texto = "Se tienen las letras: <b>";
  for (const x of letras.values()) {
    texto += x + " ";
  }
  document.getElementById('sets_3_2').innerHTML = texto + "</b>";
}

function setFuncion_4() {
  document.getElementById('sets_4_1').innerHTML = "Se tiene el iterador <b>" + letras.keys() + "</b> y el set con los valores <b>" + Array.from(letras.keys()) + "</b>";
}

function setFuncion_5() {
  document.getElementById('sets_5_1').innerHTML = "Dado el set con los valores <b>" + Array.from(letras.entries()) + "</b>";

  let texto = "Se tienen los pares de letras: <br> <b>";
  for (const valor of letras.entries()) {
    texto += valor + "<br>";
  }
  document.getElementById('sets_5_2').innerHTML = texto + "</b>";
}

function setFuncion_6() {
  document.getElementById('sets_6_1').innerHTML = "El set con los valores <b>" + Array.from(letras) + "</b>";
  document.getElementById('sets_6_2').innerHTML = "Es de tipo: <b>" + typeof letras + "</b> y es una instancia de Set: <b>" + String(letras instanceof Set) + "</b>";
}
