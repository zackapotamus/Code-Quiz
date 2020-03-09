var currentQuizObject;
var quizObjects = [];
var highScores = [];

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

var secondsLeft = 75; // 75 seconds to start
var inCorrectTimeout;

function setTime() {
    var timerInterval = setInterval(function () {
        if (--secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeLeftElement.textContent = "Time: 0";
            endQuiz();
        } else {
            timeLeftElement.textContent = "Time: " + secondsLeft;
        }
    }, 1000);
}

// Set onClick functions on the buttons
for (var i = 0; i < answerButtonElements.length; i++) {
    answerButtonElements[i].addEventListener("click", answerButtonClicked, false);
}

var questionOne = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionTwo = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct);
    }
}
var questionThree = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
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

quizObjects = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];


// currentQuizObject = questionOne;

function answerButtonClicked(evt) {
    var btnValue = parseInt(evt.target.value);
    if (currentQuizObject.isCorrect(btnValue)) {
        correctAnswer();
    } else {
        incorrectAnswer();
    }

}

function endQuiz() {
    alert("Quiz Ended");
}

function correctAnswer() {
    clearTimeout(inCorrectTimeout);
    inCorrectTextElement.textContent = "Correct";
    inCorrectElement.setAttribute("style", "visibility: visible;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
    }, 1000);
}

function incorrectAnswer() {
    clearTimeout(inCorrectTimeout);
    inCorrectTextElement.textContent = "Incorrect";
    inCorrectElement.setAttribute("style", "visibility: visible;");
    inCorrectTimeout = setTimeout(function () {
        inCorrectElement.setAttribute("style", "visibility: hidden;")
    }, 1000);
    secondsLeft -= 15;
}

function loadQuizObject(quiz_object) {
    currentQuizObject = quiz_object;
    questionTextElement.textContent = quiz_object.question;
    for (var i = 0; i < quiz_object.options.length; i++) {
        answerButtonElements[i].textContent = (i + 1) + ". " + quiz_object.options[i];
    }
}

function loadNextQuizObject() {
    loadQuizObject(quizObjects.shift());
}

function gotoHighScores() {

}

function startQuiz() {
    setTime()
    loadNextQuizObject();
}