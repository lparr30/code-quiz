//DEPENDENDIES
var startEl = document.querySelector("#start");
var clickButton = true;
var questionEl = document.querySelector('#question');
var answersEl = document.querySelector('#answer-choices');
var userInputEl = document.querySelector('#userInput');
var currentQuestion = 0
var welcomePageEl = document.querySelector('.welcome-page');
var userInitials;

var questions = [
    {
        Question: 'What is Muay Thai commonly known as?',
        answers: ['boxing','the fighting art','the art of 8 limbs','Judo'],
        correct: 'the art of 8 limbs'
    },
    {
        Question: 'What is not a fun thing to do in D.C.?',
        answers: ['watch the planes at Gravelly Point','Walk along the National Mall', 'Tour the White House', 'sit in 395 traffic'],
        correct: 'sit in 395 traffic'
        },
    {
        Question: 'What is a common name for orca whales?',
        answers: ['killer whales','black and white whales','humpback whales','crustaceans'],
        correct: 'killer whales'
        },
    {
        Question: 'What is the best candy?',
        answers: ['skittles','reeses cups','twix','lollipops'],
        correct: 'twix'
        }
] 

//FUNCTIONS
// click button to start quiz
function startQuiz() {
    startEl.addEventListener('click', function(){
        // console.log('test');
        // console.dir(clickButton);
        // var firstQuest = document.querySelector('#question');
        // firstQuest.textContent = questions.Question;
        if(clickButton === true){
            setTime();
            nextQuestion();
            welcomePageEl.setAttribute('style',"visibility: hidden");
            }
        })
    };
startQuiz();

// start timer
var timeEl = document.querySelector(".time");
var secondsLeft = 61;
var messageEl = document.querySelector('#game-over-message');
var timer;

function setTime() {
    timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left';
        // game over when all questions answered OR time === 0
        if(secondsLeft === 0 || currentQuestion >= questions.length) {
            clearInterval(timer);
            timeEl.setAttribute('style',"visibility: hidden");
            // messageEl.textContent = "Time is up! Game over!";
        }
    }, 1000);
}



// initiate first question upon timer starting
function nextQuestion() {
    questionEl.textContent = questions[currentQuestion].Question
    // for(var i=0; i<questions.length; i++){
    //     questionEl.textContent = questions[i]
    // }
    answersEl.innerHTML = '';
    for(var i=0; i<4; i++){
        var newButton = document.createElement('button');
        newButton.textContent = questions[currentQuestion].answers[i];
        newButton.addEventListener('click',checkAnswer)
        answersEl.append(newButton);
    }
    
}

function checkAnswer(event){
    // console.log(event.target.textContent);
    if(event.target.textContent === questions[currentQuestion].correct){
        console.log('yes! Its true');
    } else{
        console.log('got it wrong');
        // var remainingTime = moment().subtract(10,'seconds');
        // secondsLeft = remainingTime;
        // remainingTime = secondsLeft - 10;
        // timeEl.textContent = secondsLeft - 10;
    }
    currentQuestion++
    if(currentQuestion >= questions.length){
        // messageEl.textContent = "Time is up! Game over!";
        questionEl.setAttribute('style',"visibility: hidden");
        window.alert('Time is up! Game over.')
        stopGame();
        // use highscores var
    } else{
        nextQuestion();
    }
    // console.log(event);
}

function stopGame(){
    questionEl.setAttribute('style',"visibility: hidden");
    answersEl.setAttribute('style',"visibility: hidden");
    // enter initials w SUBMIT button
    window.prompt('Enter your initials to save your highscore.')
    console.dir(window.prompt)
}

saveInitials();

// save highscores 
function saveInitials() {
    userInitials = localStorage.getItem('userInitials');
}

if(userInitials === ''){
    displayMessage('Error','Please enter valid initials');
} else{
    localStorage.setItem('userInitials', userInputEl);
    userInputEl.textContent = userInitials
}



// display final scores

// options to play again or clear high scores




