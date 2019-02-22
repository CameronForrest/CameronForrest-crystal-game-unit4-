//Declaring Variables
var wins= 0;
var losses= 0;
var scoreHolder = 0;
var winningScore;
 


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
    scoreHolder += oneValue;
    winsLosses();
    $("#yourScore").text(scoreHolder);
    
});

$("#grey").on("click", function () { 
    scoreHolder += twoValue;
    winsLosses();
    $("#yourScore").text(scoreHolder);
    
});

$("#orange").on("click", function () {
    scoreHolder += threeValue;
    winsLosses();
    $("#yourScore").text(scoreHolder);
    
});

$("#purple").on("click", function () { 
    scoreHolder += fourValue;
    winsLosses();
    $("#yourScore").text(scoreHolder);
    
});

//determine win and loss
function winsLosses() {
    if (scoreHolder === winningScore) {
        wins++;
        $("#win").text(wins);
        reset();
        
    }

    else if (scoreHolder > winningScore){
        losses++;
        $("#loss").text(losses);
        reset();
    }

    
}
//Reset function
function reset() {
    scoreHolder = 0;
    $("#yourScore").text(scoreHolder);
    
    createWinningScore();
    creategemValues();

    $("#win").text(wins);
    $("#loss").text(losses);

    wins =0;
    losses=0;

    
}

reset();
