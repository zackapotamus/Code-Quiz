var currentQuizObject;
var quizObjects = [];
var answerButtonElements = [document.getElementById("choice-1"), document.getElementById("choice-2"),
    document.getElementById("choice-3"), document.getElementById("choice-4")
];

// Set onClick functions on the buttons
for (var i=0; i < answerButtonElements.length; i++) {
    answerButtonElements[i].addEventListener("click", answerButtonClicked, false);
}
var questionTextElement = document.getElementById("quiz-question");
var inCorrectElement = document.getElementById("answer-in-correct");

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

function correctAnswer() {

}

function incorrectAnswer() {
    
}

function loadQuizObject(quiz_object) {
    currentQuizObject = quiz_object;
    questionTextElement.textContent = quiz_object.question;
    for (var i = 0; i < quiz_object.options.length; i++) {
        answerButtonElements[i].textContent = quiz_object.options[i];
    }
}

function loadNextQuizObject(
    loadQuizObject(quizObjects.shift())
)