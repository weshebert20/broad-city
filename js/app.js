$(document).ready(function() {
    var clicks = 0;
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

    // var match = function(){
    //          if(cardsPlayed.length === 2){
    //              if (cards[theme] === cards[theme]){
    //             alert("match");  
    //             } else {
    //             console.log("lost");
    //             }
            //     }
            // else if (cardsPlayed.length===4){
            //     if (themes===themes){
            //         playerTwo();
            //     } else {
            //     console.log("lost");
            //     }
            //     }   
            // else if (cardsPlayed.length===6){
            //     if (themes===themes){
            //         playerOne();
            //     } else {
            //     console.log("lost");
            //     }
            //     }
    // };

    var checkForMatch = function () {
    if ($(this).data("theme") === $(this).data("theme")) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
};

    var flipCard = function(){
        var cardId = $(this).data("id");
        cardsPlayed.push(cards[cardId].theme);
        var theme = $(this).data("theme");
        $(this).attr('src', cards[cardId].images);
        if(cardsPlayed.length === 2) {
        checkForMatch();
        } if (cardsPlayed.length === 4){
            checkForMatch();
        } if (cardsPlayed.length === 6){
            checkForMatch();
        } if (cardsPlayed.length === 8){
            checkForMatch();
        } if (cardsPlayed.length === 10){
            checkForMatch();
        } if (cardsPlayed.length === 12){
            checkForMatch();
        } if (cardsPlayed.length === 14){
            checkForMatch();
        } if (cardsPlayed.length === 16){
            checkForMatch();
        } if (cardsPlayed.length === 18){
            checkForMatch();
        } if (cardsPlayed.length === 20){
            checkForMatch();
        } if (cardsPlayed.length === 22){
            checkForMatch();
        }
        console.log(theme);
    };
        

    var createBoard = function(){
     for (var i = 0; i < cards.length; i++){
        var cardElement = $('<img>');
        $(cardElement).attr("src", "card.jpg");
        $(cardElement).data('id', i);
        $(cardElement).attr('class', 'cards');
        $(cardElement).on('click', flipCard);
        var board = $("#gameContainer");
        board.append(cardElement);
        
     }
};

    createBoard();




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







    // create board for gameplay
    // var createBoard = function(){
    //  for (let i = 0; i < cards.length; i++){
    //     $('#gameContainer').prepend('<img src="card.jpg" class="cards" data-theme=' + cards[i].theme + ' />');
    //  }
    // };

    // createBoard();
    
    // var playerOne = function(){
    //     $(".abbiScore").html('1');
    // };

    // var playerTwo = function(){
    //     $(".ilanaScore").html('1');
    // };



    // flip card 

    // var cardId = $('img.cards').each(function(i){
    //    var cardClicked =  $(this).click().attr('id', i);
    // });
    // flipping card and inserting image when clicked


    // var cardImg = function(){
    //     var cardClikedTwo = $(this).attr('src', cards[this.id].images);
    //     cardsPlayed.push(cards[this.id].theme);
       
    //     console.log(themes);
    // };

    
    // cardId.click(cardImg).show();