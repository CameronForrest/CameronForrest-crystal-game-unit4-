//Declaring Variables
var wins= 0;
var losses= 0;
var scoreHolder =[]


//Create random guesses for point you need to guess
var winningScore = [Math.floor(Math.random() *100)];
console.log(winningScore)

function gemValue(min, max) {
    return Math.floor(Math.random() * (max-min +1)) +min;
}
console.log(gemValue(2,12))

$(document).ready(function() {
//Create random guess for gem between 2-12


//On click events for images
$("#blue").on("click",function() {
    gemValue(2,12)
    console.log(gemValue(2,12));
});

$("#grey").on("click",function() {
    gemValue(2,12);
    console.log(gemValue(2,12));
});

$("#orange").on("click",function() {
    gemValue(2,12);
    console.log(gemValue(2,12));
});

$("#purple").on("click",function() {
    gemValue(2,12);
    console.log(gemValue(2,12));
});

var bluePoints = "";
var greyPoints = "";
var orangePoints ="";
var purplePoints ="";

//Write cpu random score
$("#points").text(winningScore);

});