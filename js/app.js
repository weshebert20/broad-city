$(document).ready(function() {

    // scoreboard placeholder
    var clicksMatchAbbi = [];
    var clicksMatchIlana = [];
    var clicksNoMatch = [];
    
    // store the card images for comparing
    var cardsImages = [];
    // store the cards played for comparing
    var cardsPlayed = [];
    // where all the cards are stored with images
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
 
    // creates scoreboard for abbi and ilana to push into the checkformatch function
    var clickIlana = function(){   
            clicksMatchIlana.push(1);   
            $('#ilanaS').html(clicksMatchIlana.length);
        };

    var clickAbbi = function(){  
            clicksMatchAbbi.push(1);
            $('#abbiS').html(clicksMatchAbbi.length);
        };


    // audio file for when matched
   var audio = document.getElementsByTagName("audio")[0];
   
   // match check and where cards are flipped back
    var checkForMatch = function(){
            // adds clicker for when person gets point
            if(cardsPlayed[0] === cardsPlayed[1]){
                clicksNoMatch.push(1);
                audio.play();
                if(clicksNoMatch.length % 2 === 0){
                clickIlana();
                }   
                else {  
                clickAbbi(); 
                }
            } else {
                setTimeout(function (){
                   $('.intro').attr("src", "img/card.jpg").removeClass('intro');
                }, 700); 
                clicksNoMatch.push(1);
            }

        // clears array
        cardsPlayed = [];
    };


    // adds class that I can add and take off so show card/png
    var add = function(){
            $(this).addClass("intro");
        };


    // function for flipping cards and checking if enough for match
    var flipCard = function(){
        var cardId = $(this).data("id");
        var cardClass = $(this).data("class");
        cardsPlayed.push(cards[cardId].class);
        cardsImages.push(cards[cardId].images);
        var image = $(this).attr('src', cards[cardId].images);    

        if (cardsPlayed.length===2){
            checkForMatch();
        }
        if(cardsImages.length === 3) {
            $('.intro').removeClass("intro");
            cardsImages.splice(0,2);
        }
    };
    

    // the function to create the boards
    var createBoard = function(){
     for (var i = 0; i < cards.length; i++){
        var cardElement = $('<img>');
        $(cardElement).attr("src", "img/card.jpg");
        $(cardElement).attr('data-id', i);
        $(cardElement).attr('class', 'cards');
        $(cardElement).on('click', flipCard);  
        $(cardElement).on('click', add);
        $(cardElement).attr("data-class", cards[i].class);
        var board = $("#gameContainer");
        board.append(cardElement);    
        }
    };


    // sort cards when page loads
    var reset = cards.sort(function() { return 0.5 - Math.random(); });


    // reset board when clicked
    $('.reset').click(function() {
    location.reload();
    });


    // calling the createboard function
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