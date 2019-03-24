var wins = 0;
var losses = 0;
var targetNumber = 0;
var yourScore = 0;
var crystalVals;
var crystalVal;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

$(document).ready(function () {

    function startGame() {

        reset();

        targetNumber = Math.floor(Math.random() * 120) + 19;

        targetNumber = parseInt(targetNumber);

        $("#target-number").text(targetNumber);

        $("#your-score").text(yourScore);

        for (var i = 1; i < 5; i++) {
            crystalVal = [Math.floor(Math.random() * 12) + 1];

            crystalVals.push(crystalVal);
        }

    }

    $(".crystal1").on("click", function () {

        crystalOne = parseInt(crystalVals[0]);
        yourScore += crystalOne;
        $("#your-score").text(yourScore);
        winLoss();
    });

    $(".crystal2").on("click", function () {

        crystalTwo = parseInt(crystalVals[1]);
        yourScore += crystalTwo;
        $("#your-score").text(yourScore);
        winLoss();
    });

    $(".crystal3").on("click", function () {

        crystalThree = parseInt(crystalVals[2]);
        yourScore += crystalThree;
        $("#your-score").text(yourScore);
        winLoss();
    });

    $(".crystal4").on("click", function () {

        crystalFour = parseInt(crystalVals[3]);
        yourScore += crystalFour;
        $("#your-score").text(yourScore);
        winLoss();
    });

    function reset() {

        yourScore = 0;
        crystalVals = [];
        crystalVal = 0;

    }

    function winLoss() {

        if (yourScore === targetNumber) {
            wins++
            $("#win-ct").text(wins);
            startGame();
        } else if (yourScore > targetNumber) {
            losses++
            $("#loss-ct").text(losses);
            startGame();
        }
    }
    startGame();
});