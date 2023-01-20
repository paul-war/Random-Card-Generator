/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
const numbers = [
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

var suit1 = document.querySelector("#firstsuit");
var suit2 = document.querySelector("#secondsuit");
var number = document.querySelector("h2");
var btn = document.querySelector("#button");

function generateRandomCard() {
  //generando un número aleatorio para seleccionar un suit
  var randomSuit = suits[Math.floor(Math.random() * suits.length)];
  //generando un número aleatorio para seleccionar un number
  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  //Modifico el contenido del h1 por el número generado
  number.innerHTML = randomNumber;

  //modifico el color según el "palo/traje"
  if (randomSuit === "Hearts") {
    suit1.style.color = "red";
    suit2.style.color = "red";
    suit1.innerHTML = "♥";
    suit2.innerHTML = "♥";
  } else if (randomSuit === "Diamonds") {
    suit1.style.color = "red";
    suit2.style.color = "red";
    suit1.innerHTML = "♦";
    suit2.innerHTML = "♦";
  } else if (randomSuit === "Spades") {
    suit1.innerHTML = "♠";
    suit2.innerHTML = "♠ ";
    suit1.style.color = "black";
    suit2.style.color = "black";
  } else if (randomSuit === "Clubs") {
    suit1.innerHTML = "♣";
    suit2.innerHTML = "♣ ";
    suit1.style.color = "black";
    suit2.style.color = "black";
  }
}

window.onload = generateRandomCard();
btn.addEventListener("click", function() {
  generateRandomCard();
});
setInterval(generateRandomCard, 5000);
