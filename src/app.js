/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays con la excusa
  let quien = [
    "Mi perro ",
    "El vecino ",
    "Mi abuela ",
    "Mi gato ",
    "Mis padres "
  ];
  let accion = [
    "se comió ",
    "rompió ",
    "destruyó ",
    "robó ",
    "desaparecio ",
    "tiro "
  ];
  let objeto = [
    "mi tarea ",
    "el auto ",
    "mi celular ",
    "la llave ",
    "mi bolso ",
    "mi scooter "
  ];
  let cuando = [
    "esta mañana ",
    "ayer ",
    "la semana pasada ",
    "hace un momento ",
    "anoche ",
    "saliendo para aca "
  ];

  // organizador aleatorio de la excusa
  let aleatorioquien = Math.floor(Math.random() * quien.length);
  let aletorioaccion = Math.floor(Math.random() * accion.length);
  let aleatorioobjeto = Math.floor(Math.random() * objeto.length);
  let aletoriocuando = Math.floor(Math.random() * cuando.length);

  // Generar la excusa
  document.querySelector("#excusa").innerHTML =
    quien[aleatorioquien] +
    accion[aletorioaccion] +
    objeto[aleatorioobjeto] +
    cuando[aletoriocuando];
};
