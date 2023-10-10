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

// Create a new JavaScript file and name it game.js. In this file, you will define the following functions:
// createBoard: This function will create the game board.
// shuffleCards: This function will shuffle the cards on the game board.
// clickCard: This function will be called when the player clicks on a card.
// checkMatch: This function will check if the two cards that were clicked on match.
// winGame: This function will be called when the player wins the game.
// In the createBoard function, you will need to do the following:
// Create a div element with the ID game-board.
// Add the appropriate CSS styles to the game-board element.
// Create a 2D array of cards. Each card should have an image and a unique ID.
// Add the cards to the game-board element.
// In the shuffleCards function, you will need to do the following:
// Randomize the order of the cards.
// In the clickCard function, you will need to do the following:
// Get the ID of the card that was clicked on.
// Reveal the card.
// If two cards are revealed, check if they match.
// If the two cards match, remove them from the game board.
// If there are no more cards on the game board, the player wins.
// In the checkMatch function, you will need to do the following:
// Compare the IDs of the two cards that were clicked on.
// If the IDs are the same, then the cards match.
// In the winGame function, you will need to do the following:
// Display a message to the player that they have won.
// Finally, you will need to call the createBoard function to start the game.

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
  { value: "hearts-king-ace", image: "./assets/images/hearts_king.svg" }
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

const shuffledCards = shuffleCards(cards);

const gameBoard = document.getElementById("game-board");

function createGameBoard() {
    gameBoard.innerHTML = "";
    shuffledCards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.style.backgroundImage = `url(${card.image})`;
        gameBoard.appendChild(cardElement)
    }); 
    }

const startButton = document.querySelector("#start-button")

startButton.addEventListener("click", function() {
    shuffleCards(cards);
    createGameBoard();
})
