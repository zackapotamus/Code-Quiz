var currentQuizObject;
var quizObjects = [];
var highScores;
var score = 0;

class highScore {
    constructor(initials, score) {
        this.initials = initials;
        this.highscore = score;
    }
}
var answerButtonElements = [document.getElementById("choice-1"), document.getElementById("choice-2"),
    document.getElementById("choice-3"), document.getElementById("choice-4")
];
var pageHeadingElement = document.getElementById("page-heading");
var questionTextElement = document.getElementById("quiz-question");
var inCorrectElement = document.getElementById("answer-in-correct");
var inCorrectTextElement = document.getElementById("in-correct-text");

var timeLeftElement = document.getElementById("time-left");

var submitInitialsElement = document.getElementById("submit-initials");
var initialsElement = document.getElementById("initials");

var starQuizElement = document.getElementById("start-quiz-button");
starQuizElement.addEventListener("click", function() {startQuiz()});

var titleCardElement = document.getElementById("title-card");
var questionCardElement = document.getElementById("question-card");
var allDoneCard = document.getElementById("all-done-card");
var highScoresCard = document.getElementById("high-scores-card");
var headerBarElement = document.getElementById("header-bar");
var goBackButtonElement = document.getElementById("go-back");
var clearHighScoresButtonElement = document.getElementById("clear-high-scores");
var highScoresListElement = document.getElementById("high-scores");
var viewHighScoresElement = document.getElementById("view-high-scores");
var finalScoreElement = document.getElementById("final-score");

var timeLeft = 75; // 75 seconds to start
var correctAnswers = 0;
var inCorrectTimeout;
var countdownTimerInterval;

function startCountdownTimer() {
    countdownTimerInterval = setInterval(function () {
        if (--timeLeft <= 0) {
            clearInterval(countdownTimerInterval);
            timeLeftElement.textContent = 0;
            timeLeft = 0;
            endQuiz();
        } else {
            timeLeftElement.textContent = timeLeft;
        }
    }, 1000);
}

// Set onClick functions on the buttons
for (var i = 0; i < answerButtonElements.length; i++) {
    answerButtonElements[i].addEventListener("click", answerButtonClicked, false);
}

var questionOne = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "declaration"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionTwo = {
    question: "A function defined without an identifier is a(n) ______ function.",
    options: ["anonymous", "lambda", "shadowed", "static"],
    correct: 0,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionThree = {
    question: "What control structure lets you iterate a set number of times?",
    options: ["for loop", "while loop", "do-while", "banana"],
    correct: 0,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionFour = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionFive = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionSix = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionSeven = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionEight = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionNine = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionTen = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}

function loadHighScores() {
    highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    for (var i=0; i < highScores.length; i++) {
        highScoresListElement.innerHTML = highScoresListElement.innerHTML + "<li>" + highScores[i].initials + " - " + highScores[i].highscore + "</li>";
    }
}

function addHighScore(initials, score) {
    highScores.push(new highScore(initials, score));
    localStorage.setItem("highScores", JSON.stringify(highScores));
    highScoresListElement.innerHTML = highScoresListElement.innerHTML + "<li>" + initials + " - " + score + "</li>"
}

function submitInitials(event) {
    event.preventDefault();
    addHighScore(initialsElement.value, score);
    allDoneCard.setAttribute("style", "display: none;");
    headerBarElement.setAttribute("style", "visibility: hidden;");
    highScoresCard.setAttribute("style", "display: flex;");
}

function goBack(event) {
    event.preventDefault();
    highScoresCard.setAttribute("style", "display: none;");
    headerBarElement.setAttribute("style", "visibility: visible;");
    titleCardElement.setAttribute("style", "display: flex;");
}

goBackButtonElement.addEventListener("click", goBack);

submitInitialsElement.addEventListener("submit", submitInitials);

submitInitialsElement.addEventListener("click", submitInitials);

clearHighScoresButtonElement.addEventListener("click", function() {
    highScores = [];
    localStorage.setItem("highScores", JSON.stringify([]));
    highScoresListElement.innerHTML = "";
})

function answerButtonClicked(evt) {
    var btnValue = parseInt(evt.target.value);
    if (currentQuizObject.isCorrect(btnValue)) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }
    loadNextQuizObject();
}

function correctAnswer() {
    clearTimeout(inCorrectTimeout);
    inCorrectTextElement.textContent = "Correct";
    inCorrectElement.setAttribute("style", "visibility: visible; color: #28a745;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
        inCorrectElement.set
    }, 1000);
    correctAnswers++;
}

function incorrectAnswer() {
    clearTimeout(inCorrectTimeout);
    inCorrectTextElement.textContent = "Incorrect";
    inCorrectElement.setAttribute("style", "visibility: visible; color: #dc3545;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
    }, 1000);
    subtractTimeFromClock();
}

function subtractTimeFromClock() {
    timeLeft = timeLeft >= 15 ? timeLeft - 15 : 0;
    timeLeftElement.textContent = timeLeft;
}

function loadQuizObject(quiz_object) {
    currentQuizObject = quiz_object;
    questionTextElement.textContent = quiz_object.question;
    for (var i = 0; i < quiz_object.options.length; i++) {
        answerButtonElements[i].textContent = (i + 1) + ". " + quiz_object.options[i];
    }
}

function loadNextQuizObject() {
    var nextQuizObject = quizObjects.shift();
    if (nextQuizObject) {
        loadQuizObject(nextQuizObject);
    } else {
        endQuiz();
    }

}

function viewHighScores(event) {
    event.preventDefault();
    clearInterval(countdownTimerInterval);
    headerBarElement.setAttribute("style", "visibility: hidden;")
    titleCardElement.setAttribute("style", "display: none;");
    allDoneCard.setAttribute("style", "display: none;")
    questionCardElement.setAttribute("style", "display: none;");
    highScoresCard.setAttribute("style", "display: flex;");
}

viewHighScoresElement.addEventListener("click", viewHighScores);

function startQuiz() {
    timeLeft = 75;
    score = 0;
    timeLeftElement.textContent = timeLeft;
    titleCardElement.setAttribute("style", "display: none;");
    questionCardElement.setAttribute("style", "display: flex;");
    correctAnswers = 0;
    quizObjects = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
    startCountdownTimer()
    loadNextQuizObject();
}

function endQuiz() {
    timeLeftElement.textContent = timeLeft;
    questionCardElement.setAttribute("style", "display: none;");
    allDoneCard.setAttribute("style", "display: flex;")
    clearInterval(countdownTimerInterval);
    score = correctAnswers * (timeLeft > 0 ? timeLeft : 1);
    finalScoreElement.textContent = score;

}

loadHighScores();