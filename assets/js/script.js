const questions = [
    {
      question: "At what index is name Josh in the array '[Tyler, Josh, James, Perry]'?",
      choices: ["0", "1", "2", "Josh"],
      answer: "1"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      choices: ["//", "*", "#", "--"],
      answer: "//"
    }, 
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      choices: ["this", "is", "var", "int"],
      answer: "var"
    },
    {
      question: "What does the 'console.log()' function do in JavaScript?",
      choices: ["Prints output to the console", "Prompts the user for input", "Performs mathematical calculations", "Creates an alert dialog"],
      answer: "Prints output to the console"
    },
    {
      question: "What is the result of the expression 'true && false'?",
      choices: ["true", "false", "undefined", "null"],
      answer: "false"
    }
];

const questionDiv = $(".visibility");
const questionNumber = $(".questionNumber");
const questionText = questionDiv.find(".questionText");
const answerButtons = questionDiv.find(".answerButton");

// hides question and final result page by default
$(".timer").hide();
$(".visibility").hide();
$(".finalresult").hide();
$(".clearButton").hide();

// reveals the first quesiton, timer, and hides the start button / instructions
$(".startButton").on("click", function() {
    $(".visibility").show();
    $(".instructionsWrapper").hide();
    timer();
});
  

// 60 second timer
let timeLeft = 60;

// timer function
function timer() {
    // reveals the timer
    $(".timer").show();
    // sets the timer interval
    let timerInterval = setInterval(function() {
    // counts down the timer
      timeLeft--;
        // displays the time left
      $(".timer").text("Time Left: " + timeLeft);
      if (timeLeft === 0) {
        // stops the timer, hides the timer, and shows the final result
        clearInterval(timerInterval);
        $(".timer").text("Time's up!");
        // prevents questions from being answer after timer is up
        $(".visibility").hide();
        finalresult();
      }
    }, 1000);
}

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

loadQuestion(currentQuestionIndex);

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
    } else {
    // if the answer is not correct
      timeLeft -= 10;  
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
        $(".visibility").hide();
        finalresult();
    }
}

answerButtons.on("click", answerClick);

// saves initials and score to local storage
function saveScore() {
    $(".save").on("click", function() {
      const initials = $(".initials").val();
      const score = correctAnswers;
      const scoreObject = {
        initials: initials,
        score: score
      };
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      highScores.push(scoreObject);
      localStorage.setItem("highScores", JSON.stringify(highScores));
    // renders leaderboard
      displayLeaderboard(highScores);
    // renders clear button after saving score
      $(".clearButton").show();
    });
  }

function displayLeaderboard(highScores) {
    const leaderboardList = $("#leaderboardlist");
    leaderboardList.empty();
  
    highScores.forEach(function(score, index) {
        // creates an element for each score
      const listItem = $("<div>").text(`${index + 1}. ${score.initials}: ${score.score}`);
      leaderboardList.append(listItem);
    });
}

function finalresult() {
    $(".finalresult").show();
    $(".finalscore").text("You got " + correctAnswers + " out of " + questions.length + " correct!");
    saveScore();
}

$(".clearButton").on("click", function() {
    localStorage.removeItem("highScores");
    displayLeaderboard(); 
});