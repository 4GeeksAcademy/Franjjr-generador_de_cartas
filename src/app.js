let palo = ["♦", "♥", "♠", "♣"];
let paloRandom = palo[Math.floor(Math.random() * palo.length)];
let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let numeroRandom = numero[Math.floor(Math.random() * numero.length)];

let color = "rojo";

if (paloRandom == "♦" || paloRandom == "♥") {
  color = "rojo";
} else {
  color = "negro";
}

function generar() {
  document.querySelector(".icono").innerHTML = paloRandom;
  document.querySelector(".icono2").innerHTML = paloRandom;
  document.querySelector(".carta").innerHTML = numeroRandom;
}
