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


// Blackjack

// create a deck of cards... an array with 52 objects
// create shuffle function
// Create a player hand and a dealer hand
// Deal two cards to each player and the dealer
// If either player or dealer get 21 after first deal they win
// Prompt the player to hit or stand
// If the player hits, deal them another card
// If the player stands, calculate their hand total
// If the player's hand total is 21, they win
// If the player's hand total is over 21, they lose
// If the player's hand total is less than 21, the dealer draws cards until their hand total is greater than 17
// If the dealer's hand total is over 21, they lose
// If the dealer's hand total is less than or equal to 21, the dealer wins
// Declare a winner
// Add wager feature - if player wins, they win the wager. If player loses, they lose the wager
// If dealer's hand and player's hand equals each other then it results in a push and player gets their wager back
