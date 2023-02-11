// click button to start quiz
var startEl = document.querySelector("#start");
var clickButton = true;

function startQuiz() {
    startEl.addEventListener('click', function(){
        console.log('test');
        console.dir(clickButton);
        if(clickButton === true){
            setTime();
        }
        if(clickButton === true){
            nextQuestion();
        }
    })

};

startQuiz();

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

// // initiate first question upon timer starting
// var switched = element.getAttribute('state');

// function nextQuestion() {
//     if(switched === 'hidden'){
        
//     }
// }

// clicking an answer reveals next question 
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");

// choice1El.addEventListener('click');
// choice2El.addEventListener('click');
// choice3El.addEventListener('click');
// choice4El.addEventListener('click');

// reduce time when answering incorrectly (use boolean values)

// game over when all questions answered OR time === 0

// display final score, enter initials w SUBMIT button

// display highscores w options to play again or clear highscores