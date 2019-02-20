//Declaring Variables
var wins= 0;
var losses= 0;
var scoreHolder = 0;
var winningScore;
var blueValue;
var greyValue;
var orangeValue;
var purpleValue;


//Random number user needs to reach to win
function createWinningScore() {
    winningScore = Math.floor(Math.random() * 82) + 19;
    $("#points").text(winningScore);
    console.log(winningScore);
    
}

//Random Values generated for gems
function creategemValues() {
    oneValue = Math.floor(Math.random() * 12 + 2);
    twoValue = Math.floor(Math.random() * 12 + 2);
    threeValue = Math.floor(Math.random() * 12 + 2);
    fourValue = Math.floor(Math.random() * 12 + 2);
}

//On click events for gems
$("#blue").on("click", function () {
    console.log(oneValue); 
    scoreHolder += oneValue;

    $("#yourScore").text(scoreHolder);
});

$("#grey").on("click", function () {
    console.log(twoValue); 
    scoreHolder += twoValue;

    $("#yourScore").text(scoreHolder);
});

$("#orange").on("click", function () {
    console.log(threeValue); 
    scoreHolder += threeValue;

    $("#yourScore").text(scoreHolder);
});

$("#purple").on("click", function () {
    console.log(fourValue); 
    scoreHolder += fourValue;

    $("#yourScore").text(scoreHolder);
});

//Reset function
function reset() {
    scoreHolder = 0;
    $("yourScore").text(scoreHolder);
    
    createWinningScore();
    creategemValues();

   
}

reset();
