/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["El cartero", "Mi perro", "Javier", "Mi hermano"];
const action = ["se ha comido", "ha roto", "ha meado", "ha aplastado"];
const what = ["mis deberes", "mi teléfono", "el coche"];
const when = [
  "antes de clase",
  "mientras dormía",
  "mientras comía",
  "mientras programaba"
];
const secondPart = [
  "Además huele peste",
  "Y no puedo más",
  "Pero estoy bien",
  "Aunque no me encuentro bien"
];

const excuseComponents = [who, action, what, when, secondPart];

window.onload = function() {
  //write your code here
  const excuseTag = document.getElementById("excuse");
  excuseTag.innerHTML = generateExcuse();
};

function generateExcuse() {
  let excuse = "";

  // Recorro la lista de componentes de una frase
  for (let i = 0; i < excuseComponents.length; i++) {
    // Añado componentes uno por uno
    let component =
      excuseComponents[i][getRandomNumber(excuseComponents[i].length)];
    excuse += component;

    // Añado espacio o punto
    excuse = AddSpaceOrPoint(excuse, i);
  }

  return excuse;
}

function AddSpaceOrPoint(excuse, componentIndex) {
  if (componentIndex >= excuseComponents.length - 2) {
    excuse += ". ";
  } else {
    excuse += " ";
  }

  return excuse;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
