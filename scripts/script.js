var currentQuizObject;
var quizObjects = [];
var highScores = [];
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

var initialSubmitElement = document.getElementById("submit-initials");
var initialsElement = document.getElementById("initials");

var timeLeft = 75; // 75 seconds to start
var correctAnswers = 0;
var inCorrectTimeout;
var countdownTimerInterval;

function startCountdownTimer() {
    countdownTimerInterval = setInterval(function () {
        if (--timeLeft <= 0) {
            clearInterval(countdownTimerInterval);
            timeLeftElement.textContent = "Time: 0";
            timeLeft = 0;
            endQuiz();
        } else {
            timeLeftElement.textContent = "Time: " + timeLeft;
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


initialSubmitElement.addEventListener("submit", function(event) {
    event.preventDefault();
    var hs = new highScore(initialsElement.value, score);
    highScores.push(hs);
    console.log(highScores);
})

initialSubmitElement.addEventListener("click", function (event) {
    event.preventDefault();
    var hs = new highScore(initialsElement.value, score);
    highScores.push(hs);
    console.log(highScores);
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
    inCorrectElement.setAttribute("style", "visibility: visible;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
    }, 1000);
    correctAnswers++;
}

function incorrectAnswer() {
    clearTimeout(inCorrectTimeout);
    inCorrectTextElement.textContent = "Incorrect";
    inCorrectElement.setAttribute("style", "visibility: visible;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
    }, 1000);
    subtractTimeFromClock();
}

function subtractTimeFromClock() {
    timeLeft -= 15;
    if (timeLeft < 0) {
        timeLeft = 0;
    }
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

function gotoHighScores() {

}

function startQuiz() {
    correctAnswers = 0;
    timeLeft = 75;
    quizObjects = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
    startCountdownTimer()
    loadNextQuizObject();
}

function endQuiz() {
    clearInterval(countdownTimerInterval);
    alert("Quiz Ended");
    console.log("time Left: " + timeLeft);
    console.log("correct answers: " + correctAnswers);
    console.log("score: " + correctAnswers * (timeLeft > 0 ? timeLeft : 1));
    score = correctAnswers * (timeLeft > 0 ? timeLeft : 1);
}