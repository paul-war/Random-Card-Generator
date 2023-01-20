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

function generateRandomCards() {
  //generando un número aleatorio para seleccionar un suit
  var randomSuit = suits[Math.floor(Math.random() * suits.length)];
  //generando un número aleatorio para seleccionar un number
  var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  // mostrando en consola el resultado
  console.log("La carta generada es: " + randomNumber + " de " + randomSuit);
}
window.onload = generateRandomCards();

/*
function generateCard() {
  // Get a random suit and value
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Create a new `div` element for the card
  const card = document.createElement("div");
  card.classList.add("card");

  // Add the suit and value as text inside the card
  card.innerHTML = `${randomValue} of ${randomSuit}`;

  // Add the card to the card container
  const cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);
}
*/
