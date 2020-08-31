var timerEl = document.querySelector("#countdown");
var timeLeft = 100
var startBtn = document.querySelector("#start");
var containerEl = document.querySelector("#container");
var currentQuestion = 0;
var startPage = document.querySelector(".start-page");
var endQuiz = false;
var nameInput = document.querySelector("#submit1");
var nameBtn = document.querySelector("#submit2");
var scoreEl = document.querySelector("#score");

nameInput.setAttribute("style", "display: none;");
nameBtn.setAttribute("style", "display: none;");

// Timer that counts down from 100
function countdown() {
    var timeLeft = 100;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            // clear div
            timerEl.textContent = "";
        }
        else if (currentQuestion >= 5) {
            clearInterval(timeInterval);
        }
        timerEl.textContent = timeLeft;
    }, 1000);
};

//Start the quiz when button is clicked

//List of questions and answers
var questions = [{
    question: "What color is the sky?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 2
},
{
    question: "What color is the sea?",
    answers: ["Blue", "red", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color is grass?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 3
},
{
    question: "What color is a ruby?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 1
},
{
    question: "What color are grapes?",
    answers: ["Red", "blue", "green", "purple"],
    correctAnswer: 4
}];


function displayfirstQuestion() {
    var question = questions[currentQuestion];
    var answers = document.createElement("ol");

    //Display questions
    var questionHeading = document.createElement("h3");
    questionHeading.textContent = question.question;
    containerEl.appendChild(questionHeading);

    //Display answers
    for (var i = 0; i < question.answers.length; i++) {
        var answerLi = document.createElement("li");

        answerLi.textContent = question.answers[i];
        answerLi.setAttribute("data-answer", question.answers[i]);

        answers.appendChild(answerLi);
        containerEl.appendChild(answers);
    }

    startPage.remove();

    // If gone thru all the questions, end quiz
    if (currentQuestion < 5) {
        currentQuestion++;
    } 
    else {
        clearInterval(timeInterval);
        endQuiz = true;
        console.log(endQuiz);
    }
};

startBtn.addEventListener("click", function () {
    countdown();
    displayfirstQuestion();
});
containerEl.addEventListener("click", function (event) {
    if ((endQuiz == false) && (currentQuestion < 5)) {
        displayfirstQuestion();
    }
    else {
        containerEl.remove();
        nameInput.setAttribute("style", "display: block;");
        nameBtn.setAttribute("style", "display: block;");
        var score = document.createElement("h3");
        score.textContent = "is your score!";
        scoreEl.appendChild(score);
        }
});

