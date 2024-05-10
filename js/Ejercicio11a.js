/*
Integrantes del equipo
 Hernández Hernández Ramón Everardo
 López Victorino Oscar Abiud
 Reyes Ramírez Giselle Alejandra
*/

let ventana_nueva;

function Analisis() {


  let texto = "Ramon Hernandez";
  const calificaciones = [5, 8, 7];
  const materias = ["Quimica", "Ingles", "Fisica"]
  let longitud_arreglo = materias.length;

  document.getElementById('alumno').innerHTML = texto;

  while (texto.length < 8) {
    document.getElementById('alumno').innerHTML = "El nombre '" + texto + "' debe incluir apellidos!";
  }

  for (let i = 0; i < longitud_arreglo; i++) {
    document.getElementById('materias').innerHTML += materias[i] + " ";
  }

  var promedio = 0;

  for (let calificacion in calificaciones){
    promedio += calificacion;
  }


  promedio /= calificaciones.length;

  let parrafo = "";

  for (var cantidad = 0; cantidad < calificaciones.length; cantidad++) {
    parrafo += "Para la materia: " + cantidad + " se tiene la calificacion: " + calificaciones[cantidad] + "<br>";
    if (calificaciones[cantidad] < 6) {
      if (calificaciones[cantidad] < 6) {
        ventana_nueva = window.open("https://www.google.com/search?q=Cursos de "+materias[cantidad], "_blank" ,"width=500, height=500");
      }
    }
  }


  parrafo += "Dando como promedio: " + promedio + " para las " + cantidad + " materias cursadas <br>";

  document.getElementById('calificaciones').innerHTML = parrafo;

  window.addEventListener("mousemove", funcionVentana_2)

  window.addEventListener("mouseover", function(){
    document.getElementById('log').innerHTML += "<br>" + "El alumno muestra interes por la recomendacion";
  })

  window.addEventListener("click", funcionVentana)
  window.addEventListener("click", function(){funcionVentana_1(4, 5)})


}

function PararAnalisis() {
  window.removeEventListener("mousemove", funcionVentana_2)
  window.removeEventListener("mouseover", function (){})
  window.removeEventListener("click", funcionVentana)
  window.removeEventListener("click", function(){})
  ventana_nueva.close();
}

function funcionVentana() {
  document.getElementById('log').innerHTML += "<br>" + "¡El alumno cambió de ventana!";
}

function funcionVentana_1(a = 1, b = 2) {
  document.getElementById('log').innerHTML += "<br>" +"Clave de registro: " + (a + b);
}


function funcionVentana_2() {
    document.getElementById('curiosidad').innerHTML = "<br>" + Math.random();
}
