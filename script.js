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


const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function () {
  shuffleCards(cards);
  console.log(shuffleCards(cards))
});
