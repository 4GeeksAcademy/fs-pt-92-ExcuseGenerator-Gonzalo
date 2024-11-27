/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["El cartero", "Mi perro", "Javier", "Mi hermano"];
const action = ["se ha comido", "ha roto", "se ha meado", "ha aplastado"];
const what = ["mis deberes", "mi teléfono", "el coche"];
const when = [
  "antes de clase",
  "mientras dormía",
  "mientras comía",
  "mientras programaba"
];

window.onload = function() {
  //write your code here
  const excuseTag = document.getElementById("excuse");
  excuseTag.innerHTML = generateExcuse();
};

function generateExcuse() {
  let excuse =
    who[getRandomNumber(who.length)] +
    " " +
    action[getRandomNumber(action.length)] +
    " " +
    what[getRandomNumber(what.length)] +
    " " +
    when[getRandomNumber(when.length)];

  return excuse;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
