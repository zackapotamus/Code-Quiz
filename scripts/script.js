var currentQuizObject;
var quizObjects = [];
var answerButtonElements = [document.getElementById("choice-1"), document.getElementById("choice-2"),
    document.getElementById("choice-3"), document.getElementById("choice-4")
];
var questionTextElement = document.getElementById("quiz-question");
var inCorrectElement = document.getElementById("answer-in-correct");
var inCorrectTextElement = document.getElementById("in-correct-text");

var timeLeftElement = document.getElementById("time-left");

var secondsLeft = 75; // 75 seconds to start
var inCorrectTimeout;

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeftElement.textContent = "Time: " + --secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
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

currentQuizObject = questionOne;

function answerButtonClicked(evt) {
    var btnValue = parseInt(evt.target.value);
    if (currentQuizObject.isCorrect(btnValue)) {
        console.log(btnValue + "correct");
        correctAnswer();
    } else {
        incorrectAnswer();
    }

}

function endQuiz() {

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
}

function loadQuizObject(quiz_object) {
    currentQuizObject = quiz_object;
    questionTextElement.textContent = quiz_object.question;
    for (var i = 0; i < quiz_object.options.length; i++) {
        answerButtonElements[i].textContent = quiz_object.options[i];
    }
}

function loadNextQuizObject() {
    loadQuizObject(quizObjects.shift());
}