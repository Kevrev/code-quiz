const questions = [
    {
        question: "Question 0",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer A"
      },
      {
        question: "Question 1",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer C"
      },
      {
        question: "Question 2",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      },
      {
        question: "Question 3",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      },
      {
        question: "Question 4",
        choices: ["Answer A", "Answer B", "Answer C", "Answer D"],
        answer: "Answer D"
      }
];

const questionDiv = $(".visibility");
const questionText = questionDiv.find(".questionText");
const answerButtons = questionDiv.find(".answerButton");
$(".visibility").hide();


$(".startButton").on("click", function() {
    $(".visibility").show();
});

let currentQuestionIndex = 0;

function loadQuestion(index) {
    const currentQuestion = questions[index];
    questionText.text(currentQuestion.question);
    answerButtons.each(function(index) {
      $(this).text(currentQuestion.choices[index]);
    });
}

loadQuestion(currentQuestionIndex);