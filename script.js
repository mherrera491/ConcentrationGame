// GAME CHOICE: CONCENTRATION GAME (MEMORY GAME)
// Create cards (even number amount)
// Shuffle cards
// create game board with cards
// preview the newly created game board for a limited time
// add event listeners to card to flip it
// If second card matches the first card then remove cards from the game board
// If card does not match the previous card then flip cards back over and let player know they are wrong
// Create a timer for the game - if player runs out of time they lose
// If cards are all cleared announce that player has won

// Array of card objects
const cards = [
  { value: "clubs-ace", image: "./assets/images/clubs_ace.svg" },
  { value: "diamonds-ace", image: "./assets/images/diamonds_ace.svg" },
  { value: "hearts-ace", image: "./assets/images/hearts_ace.svg" },
  { value: "clubs-jack", image: "./assets/images/clubs_jack.svg" },
  { value: "diamonds-queen", image: "./assets/images/diamonds_queen.svg" },
  { value: "hearts-king-ace", image: "./assets/images/hearts_king.svg" },
  { value: "clubs-ace", image: "./assets/images/clubs_ace.svg" },
  { value: "diamonds-ace", image: "./assets/images/diamonds_ace.svg" },
  { value: "hearts-ace", image: "./assets/images/hearts_ace.svg" },
  { value: "clubs-jack", image: "./assets/images/clubs_jack.svg" },
  { value: "diamonds-queen", image: "./assets/images/diamonds_queen.svg" },
  { value: "hearts-king-ace", image: "./assets/images/hearts_king.svg" },
];

// Function to shuffle cards
function shuffleCards(cardArray) {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[randomIndex]] = [
      cardArray[randomIndex],
      cardArray[i],
    ];
  }
  return cardArray;
}

// Creating HTML elements for the cards and displaying them on the game board
function createCardElements(cards) {
  const gameBoard = document.querySelector("#game-board");
  gameBoard.innerHTML = "";

  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "flipped");

    const frontFace = document.createElement("img");
    frontFace.classList.add("card-face", "front-face");
    frontFace.src = card.image;

    const backFace = document.createElement("img");
    backFace.classList.add("card-face", "back-face");
    backFace.src = "/assets/images/blue.svg";

    cardElement.appendChild(frontFace);
    cardElement.appendChild(backFace);

    cardElement.dataset.value = card.value;

    cardElement.addEventListener("click", function () {
      cardElement.classList.toggle("un-flipped");
      cardElement.classList.remove("flipped")
    });

    gameBoard.appendChild(cardElement);
  }
}

// Array to store flipped cards
const flippedCards = [];

// function checks for matches; will flip cards back over if no match is made
function flipCard(cardElement) {
  if (flippedCards.length < 2) {
    // Flip the card by toggling the "un-flipped" class
    cardElement.classList.toggle("flipped");
    flippedCards.push(cardElement);

    if (flippedCards.length === 2) {
      // Two cards are flipped, check if they match
      const [card1, card2] = flippedCards;
      if (card1.dataset.value === card2.dataset.value) {
        // Cards match, so keep them face up
        flippedCards.length = 0; // Clear the array
      } else {
        // Cards don't match, flip them back after a delay
        setTimeout(() => {
          card1.classList.toggle("un-flipped");
          card1.classList.remove("flipped");
          card2.classList.toggle("un-flipped");
          card2.classList.remove("flipped");
          flippedCards.length = 0; // Clear the array
        }, 1000); // Adjust this delay as needed
      }
    }
  }
}

let gameDuration = 60;
let timer;
let gameStarted = false;

function startTimer() {
  if (!gameStarted) {
    gameStarted = true;
    timer = setInterval(function () {
      gameDuration --;
      document.querySelector("#timer").textContent = `TIMER: ${gameDuration}`;

      if (gameDuration === 0) {
        clearInterval(timer);
        document.querySelector("#timer").textContent = "Time's up. You lose!";
      }

      checkForWin();
    }, 1000);
  }
}

function checkForWin() {
  const allFlippedCards = document.querySelectorAll(".card.flipped");
  if (allFlippedCards.length === cards.length && gameStarted) {
    clearInterval(timer);
    document.querySelector("#timer").textContent = "You win!"
  }
}

function resetGame() {
  gameDuration = 60;
  gameStarted = false;
  clearInterval(timer);
  document.querySelector("#timer").textContent = `TIMER: ${gameDuration}`;
}

const gameBoard = document.querySelector("#game-board");

gameBoard.addEventListener("click", function (event) {
  startTimer();
  checkForWin();
  const card = event.target.closest(".card");
  if (card) {
    flipCard(card);
  }
});

// Assigns functions to start button: cards shuffle and game board is created
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function () {
  resetGame();
  shuffleCards(cards);
  createCardElements(cards);

  setTimeout(function () {

    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("flipped");
      card.classList.toggle("un-flipped")
    });
  }, 10000);
});

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
  resetGame();
  shuffleCards(cards);
  createCardElements(cards);

  const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("flipped");
      card.classList.toggle("un-flipped")
    });
})