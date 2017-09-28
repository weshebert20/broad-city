$(document).ready(function() {
    var memory = [];
    var numClicked = 0;
    var cardsPlayed = [];
    // var cards = $('.cards');
    var cards = [
        {
            theme: "bingo",
            images: "img/bingo.jpg",
        },
        {
            theme: "bingo",
            images: "img/bingo.jpg",
        },
        {
            theme: "abbiMakeup",
            images: "img/abbiMake.jpg",
        },
        {
            theme: "abbiMakeup",
            images: "img/abbiMake.jpg",
        },
        {
            theme: "garol",
            images: "img/garol.jpg",
        },
        {
            theme: "garol",
            images: "img/garol.jpg",
        },
        {
            theme: "ilanaDog",
            images: "img/ilanaDog.png",
        },
        {
            theme: "ilanaDog",
            images: "img/ilanaDog.png",
        },
        {
            theme: "ilanaWig",
            images: "img/ilanaWig.jpeg",
        },
        {
            theme: "ilanaWig",
            images: "img/ilanaWig.jpeg",
        },
        {
            theme: "bevers",
            images: "img/bevers.jpg",
        },
        {
            theme: "bevers",
            images: "img/bevers.jpg",
        },
        {
            theme: "amySedaris",
            images: "img/amySedaris.jpg",
        },
        {
            theme: "amySedaris",
            images: "img/amySedaris.jpg",
        },
        {
            theme: "jamie",
            images: "img/jamie.jpg",
        },
        {
            theme: "jamie",
            images: "img/jamie.jpg",
        },
        {
            theme: "val",
            images: "img/val.jpg",
        },
        {
            theme: "val",
            images: "img/val.jpg",
        },
    ];


    // create board for gameplay
    var createBoard = function(){
     for (let i = 0; i < cards.length; i++){
        $('#gameContainer').prepend('<img src="card.jpg" class="cards" theme=' + cards[i].theme + ' />');
     }
    };

    createBoard();

    var cardTheme = $('img.cards').each(function(i){
       var cardTheme =  $(this).attr("theme");
    });


    // flip card 

    var cardId = $('img.cards').each(function(i){
       var cardClicked =  $(this).click().attr('id', i);
    });

    // flipping card and inserting image when clicked
    var cardImg = function(){
        var cardClikedTwo = $(this).attr('src', cards[this.id].images);
        cardsPlayed.push(cards[this.id].theme);
        // console.log(cardClikedTwo);
        if(cardsPlayed.length === 2){
            checkForMatch();
        }
    };
    
    cardId.click(cardImg).show().addClass("clicked");


    // checking for matches
   var checkForMatch = function () {
    console.log(cardsPlayed);
    if (cardsPlayed[0] === cardsPlayed[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}   ;

    // create fadein and out transistions
    $("body").css("display", "none");
 
    $("body").fadeIn(1000);
 
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }

});