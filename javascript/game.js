var wins = 0;
$("#win-Score").text(wins);
var loss = 0;
$("#loss-Score").text(loss);
$(document).ready(function() {
    $('body').css('background-image', 'url(images/AOE2.png');    
    $('body').css('background-size', '100%');
    $('body').css('background-position', 'center');
});


function runonStart() {
    var userResource = 0;
    var computerGenerated = Math.floor(Math.random() * 102 + 19);
    $("#resource-to-guess").text(computerGenerated);


    var randomChoice = [];
    for (var i = 0; i < 4; i++) {
        var a = Math.floor(Math.random() * 12 + 1);
        randomChoice.push(a);
    }
    console.log(randomChoice);

    var imageLocation = ["images/Gold.PNG", "images/Sheep.PNG", "images/stone.PNG", "images/Wood.PNG"]

    for (var i = 0; i < 4; i++) {

        var imageResource = $("<img>");

        imageResource.addClass("resource-image");

        imageResource.attr("src", imageLocation[i])

        imageResource.attr("data-resourceValue", randomChoice[i]);

        $("#imageContainer").append(imageResource);

    }
    $(".resource-image").on("click", function () {

        var resourceValue = ($(this).attr("data-resourceValue"));
        resourceValue = parseInt(resourceValue);
        console.log("Picture value " + resourceValue);

        userResource = userResource + resourceValue;
        console.log("User Resource " + userResource);
        $("#total-point").text(userResource);

        if (userResource === computerGenerated) {
            wins++;
            $("#win-Score").text(wins);
            console.log(wins);
            $("img").remove();

            //adding some extra background for different win for the fun.
            if(wins == 1)
            {
                $('body').css('background-image', 'url(images/DarkAge.PNG');    
                $('body').css('background-size', '100%');
                $('body').css('background-position', 'center');
            }
            if(wins == 2)
            {
                $('body').css('background-image', 'url(images/FederalAge.PNG');    
                $('body').css('background-size', '100%');
                $('body').css('background-position', 'center');
            }
            if(wins == 3)
            {
                $('body').css('background-image', 'url(images/CastleAge.PNG');    
                $('body').css('background-size', '100%');
                $('body').css('background-position', 'center');
            }
            if(wins == 4)
            {
                $('body').css('background-image', 'url(images/ImperialAge.png');    
                $('body').css('background-size', '100%');
                $('body').css('background-position', 'center');
                alert("Congratuation, You win the game! You can keep going to see what is your hightest score gonna be.")
            }
            runonStart();
        }
        else if (userResource > computerGenerated) {
            loss++;
            $("#loss-Score").text(loss);
            console.log(loss);
            $("img").remove();
            runonStart();
        }
    })
}

