// click button to start quiz

// start timer
var timeEl = document.querySelector(".time");
var secondsLeft = 76;

function setTime() {
    var timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left';

        if(secondsLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

setTime();

    // initiate first question upon timer starting

// clicking an answer reveals next question 
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");

choice1El.addEventListener('click');

// reduce time when answering incorrectly (use boolean values)

// game over when all questions answered OR time === 0

// display final score, enter initials w SUBMIT button

// display highscores w options to play again or clear highscores