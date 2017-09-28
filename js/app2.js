$(document).ready(function() {


var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "img/bingo.jpg",
		class: "cards",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "img/abbiMake.jpg",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "img/bingo.jpg",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "img/abbiMake.jpg",
	},
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function(){
	 for (var i = 0; i < cards.length; i++){
	 	var cardElement = document.createElement('img');
	 	cardElement.setAttribute("src", "Card.jpg");
	 	cardElement.setAttribute('data-id', i);
	 	cardElement.addEventListener('click', flipCard);
	 	var board = document.getElementById("gameContainer");
		board.appendChild(cardElement);
	 }
};

createBoard();


// var createBoard = function(){
//      for (let i = 0; i < cards.length; i++){
//         $('#gameContainer').prepend('<img src="card.jpg" class="cards" theme='+ cards[i].theme +' />');
//      }
//     };



});