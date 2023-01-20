/* eslint-disable */
import "bootstrap";
import "./style.css";

const palo = ["Hearts", "Spades", "Clubs", "Diamonds"];
const numeros = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "King",
  "Queen",
  "Jack",
  "Ace"
];

var palo1 = document.querySelector("#primerpalo");
var palo2 = document.querySelector("#segundopalo");
var numero = document.querySelector("h2");
var btn = document.querySelector("#button");

function generateRandomCard() {
  //generando un número aleatorio para seleccionar un palo
  var randomPalo = palo[Math.floor(Math.random() * palo.length)];
  //generando un número aleatorio para seleccionar un número
  var randomnumero = numeros[Math.floor(Math.random() * numeros.length)];

  //Modifico el contenido del h1 por el número generado
  numero.innerHTML = randomnumero;

  //modifico el color según el "palo/traje"
  if (randomPalo === "Hearts") {
    palo1.style.color = palo2.style.color = "red";
    palo1.innerHTML = palo2.innerHTML = "♥";
  } else if (randomPalo === "Diamonds") {
    palo1.style.color = palo2.style.color = "red";
    palo1.innerHTML = palo2.innerHTML = "♦";
  } else if (randomPalo === "Spades") {
    palo1.innerHTML = palo2.innerHTML = "♠";
    palo1.style.color = palo2.style.color = "black";
  } else if (randomPalo === "Clubs") {
    palo1.innerHTML = palo2.innerHTML = "♣";
    palo1.style.color = palo2.style.color = "black";
  }
}

window.onload = generateRandomCard();
btn.addEventListener("click", function() {
  generateRandomCard();
});
setInterval(generateRandomCard, 5000);
