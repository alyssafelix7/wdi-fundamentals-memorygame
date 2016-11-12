//Creates
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* if (cardTwo === cardFour) {
  alert ("You found a match!");
}
else {
  alert("Sorry, try again!");
}

if (cardOne === cardTwo) {
  alert ("You found a match!");
}
else {
  alert("Sorry, try again!");
}

if (cardTwo === cardThree) {
  alert ("You found a match!");
}
else {
  alert("Sorry, try again!");
}

if (cardThree === cardFour) {
  alert ("You found a match!");
}
else {
  alert("Sorry, try again!");
}
*/

// Gets element game-board and sets it to var gameBoard
var gameBoard = document.getElementById('game-board');

// Creates var for number of cards
var numOfCards = 4;

// Function that creates card and appends them to game-board
var createCards = function(numOfCards){
  for (var i = 0; i < numOfCards; i++ ) {
    var newCard = document.createElement('div');
    newCard.className = 'card';
    gameBoard.appendChild(newCard);
  }
};

// Calls functions
createCards(numOfCards);
