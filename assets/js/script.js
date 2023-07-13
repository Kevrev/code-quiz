const questions = [
    {
        question: "Answer is A",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer A"
      },
      {
        question: "Answer is C",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer C"
      },
      {
        question: "Answer is D",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      },
      {
        question: "Answer is D",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      },
      {
        question: "Answer is D",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      }
];

const questionDiv = $(".visibility");
const questionNumber = $(".questionNumber");
const questionText = questionDiv.find(".questionText");
const answerButtons = questionDiv.find(".answerButton");

// current question 
let currentQuestionIndex = 0;
// tally of correct answers
let correctAnswers = 0;

// loads the question and answers into the page
function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionText.text(currentQuestion.question);
    // displays the current question number
    questionNumber.text((index +1) + ".");
    answerButtons.each(function(index) {
      $(this).text(currentQuestion.choices[index]);
    });
}

function answerClick() {
    // grabs the text of the answer that was clicked
    const selectedAnswer = $(this).text();
    const currentQuestion = questions[currentQuestionIndex];
    
    // compares secleted answer to actual answer in the questions array
    // if the answer is correct...
    if (selectedAnswer === currentQuestion.answer) {
      $(".informant").text("Previous Answer - Correct");
      $(".informant").addClass("correct").removeClass("wrong");
    //   adds to the tally of correct answers
        correctAnswers++;
    // if the answer is not correct
    } else {
    // TODO: add a timer to subtract time
      $(".informant").text("Previous Answer - Wrong");
      $(".informant").addClass("wrong").removeClass("correct");
    }
    
    // answering a question moves to the next question
    currentQuestionIndex++;

    // if there are more questions, load the next question
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    // if there are no more questions, show the final result
    } else {
        $(".visbility").hide();
        $(".finalresult").show();
        finalresult();
    }
}

function finalresult() {
    $(".finalresult").text("You got " + correctAnswers + " out of " + questions.length + " correct!");
}

// hides question and final result page by default
$(".visibility").hide();
$(".finalresult").hide();

// reveals the first quesiton and hides the start button
$(".startButton").on("click", function() {
    $(".visibility").show();
    $(".startButton").hide();
});
  
answerButtons.on("click", answerClick);

loadQuestion(currentQuestionIndex);