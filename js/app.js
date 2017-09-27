$(document).ready(function() {

    var cardsPlayed = [];
    var cards = $('.cards');
    cards = [
        {
            theme: "bingo",
            images: "img/bingo.jpg",
        },
        {
            theme: "bingo",
            images: "img/bingo.jpg",
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
        {
            placement: "upperLeft",
            images: "img/bingo.jpg"
        },
    ];

    // create board for gameplay
    var createBoard = function(){
     for (var i = 0; i < cards.length; i++){
        $('#gameContainer').prepend('<img src="card.jpg" class="cards"/>');
     }
    };

    createBoard();


    var cardId = $('img.cards').each(function(i){
        $(this).attr('id', 'img' + i);
    });

    var cardImg = function(){
        cardId.each(function(i){
        $(this).attr('src', cards[i].images);
        });
    };
    // console.log(cardImg());

    cardId.click(cardImg).show();



    // card flip function
    // $('img#img' + []).each(function(i) {
    //     .attr('id', 'img' + i).click(function(){
    //     $(this).attr('src', cards[i].images).toggle();
    //     });
    //     console.log(this);
    // });












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