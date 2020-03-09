var currentQuizObject;
var answerButtonElements = [document.getElementById("choice-1"), document.getElementById("choice-2"),
                     document.getElementById("choice-3"), document.getElementById("choice-4")];
var questionTextElement = document.getElementById("quiz-question");
var inCorrectElement = document.getElementById("answer-in-correct");

var quizObject = {
    question: "What kind of function is passed as a parameter to another function?",
    options: ["void", "static", "callback", "banana"],
    correct: 2,
    isCorrect: function (choice) {
        return (choice == this.correct)
    }

}

function loadQuizObject(quiz_object) {
    currentQuizObject = quiz_object;

}