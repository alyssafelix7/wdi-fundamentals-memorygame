
// Gets element game-board and sets it to var gameBoard
var gameBoard = document.getElementById('game-board');

// Declares var cards and sets it to an array or cards
var cards = ['queen', 'queen', 'king', 'king'];

// Declares an empty array named var cardsInPlay
var cardsInPlay = [];

// Function that creates card and appends them to game-board
var createCards = function(cards){
  for (var i = 0; i < cards.length; i++ ) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    gameBoard.appendChild(cardElement);
  }
};

// Function that checks to see if the two cards match
var isMatch = function(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    // setTimeout adds a delay in alert, so card can flip
    setTimeout(function() {
      alert("You found a match!");
    }, 200);
  }
  else {
    setTimeout(function() {
      alert("Sorry, try again!");
      clearCard();
    }, 200);
  }
};

// Function that checks to see if two cards are in play
var isTwoCards = function() {
  var cardElement = this.getAttribute('data-card');
  this.innerHTML = '<img src="' + cardElement + '.png" class="turnCard" alt="' + cardElement + ' of clubs" />';
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
    cardsInPlay = [];
  }
};

// Function that clears the cards innerHTML
var clearCard = function() {
  var cards = document.getElementById('game-board').getElementsByTagName('div');
  for (var i = 0; i < cards.length; i++) {
    cards[i].innerHTML = "";
  }
};

// Calls functions
createCards(cards);
