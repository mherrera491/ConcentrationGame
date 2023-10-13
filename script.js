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
    // card.classList.toggle("un-flipped");
    });

    gameBoard.appendChild(cardElement);
  }
}

const gameBoard = document.querySelector("#game-board");

// gameBoard.addEventListener("click", function (event) {
//   const card = event.target.closest(".card");
//   if (card) {
//     card.classList.remove("flipped")
//     card.classList.toggle("un-flipped");
//   }
// });

const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function () {
  shuffleCards(cards);
  // console.log(shuffleCards(cards));
  createCardElements(cards);
  // gameBoard.classList.add("show-front-faces");
  // // cardsFlipped = true;

  setTimeout(function () {

  //   gameBoard.classList.remove("show-front-faces");

    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("flipped");
      card.classList.toggle("un-flipped")
    });
  }, 10000);
});
