$(document).ready(function() {
    var clicks = 0;
    var cardsPlayed = [];
    // var cards = $('.cards');
    var cards = [
        {
            class: "bingo",
            images: "img/bingo.jpg",
        },
        {
            class: "bingo",
            images: "img/bingo.jpg",
        },
        {
            class: "abbiMakeup",
            images: "img/abbiMake.jpg",
        },
        {
            class: "abbiMakeup",
            images: "img/abbiMake.jpg",
        },
        {
            class: "garol",
            images: "img/garol.jpg",
        },
        {
            class: "garol",
            images: "img/garol.jpg",
        },
        {
            class: "ilanaDog",
            images: "img/ilanaDog.png",
        },
        {
            class: "ilanaDog",
            images: "img/ilanaDog.png",
        },
        {
            class: "ilanaWig",
            images: "img/ilanaWig.jpeg",
        },
        {
            class: "ilanaWig",
            images: "img/ilanaWig.jpeg",
        },
        {
            class: "bevers",
            images: "img/bevers.jpg",
        },
        {
            class: "bevers",
            images: "img/bevers.jpg",
        },
        {
            class: "amySedaris",
            images: "img/amySedaris.jpg",
        },
        {
            class: "amySedaris",
            images: "img/amySedaris.jpg",
        },
        {
            class: "jamie",
            images: "img/jamie.jpg",
        },
        {
            class: "jamie",
            images: "img/jamie.jpg",
        },
        {
            class: "val",
            images: "img/val.jpg",
        },
        {
            class: "val",
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

//     var checkForMatch = function () {
        
//     if (theme === theme) {
//         alert("You found a match!");
//     } else {
//         alert("Sorry, try again.");
//     }
// };

    var flipCard = function(){
        var cardId = $(this).data("id");
        cardsPlayed.push(cards[cardId].class);
        $(this).attr('src', cards[cardId].images);
        var theme = $(this).data("class");
        if(cardsPlayed.length === 2) {
            if(theme === theme){
                console.log("match");
            } else {
                console.log("nope");
            }
    }
    console.log(theme);
    };
        

    var createBoard = function(){
     for (var i = 0; i < cards.length; i++){
        var cardElement = $('<img>');
        $(cardElement).attr("src", "card.jpg");
        $(cardElement).attr('data-id', i);
        $(cardElement).attr('class', 'cards');
        $(cardElement).on('click', flipCard);
        $(cardElement).attr("data-class", cards[i].class);
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