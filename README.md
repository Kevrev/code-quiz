# Coding Quiz

## Description

This application uses knowledge of javascript to produce a coding quiz that is rendered through multiple elements on a single page. The quiz is timed and a user's score is based on the amount of correct questions they answer. Answer a question incorrectly and the timer is reduced by 10 seconds. When the timer reaches zero or all questions are answered, the scored is tallied and can be saved to a leaderboard.

## Usage

Press the start button to begin taking the quiz. Answer each question by clicking on what is believed to be the correct answer. Once all questions are answered or the timer reaches zero, users can enter their name to save their score to the leaderboard. Afterwards, a list of previous entries will be displayed with their respective scores and can be cleared.

![Screenshot](./assets/images/screenshot.jpg)

Link to the deployed website itself:

https://kevrev.github.io/code-quiz/

One can also view the index.html, script.js, and style.css files independently in the GitHub repository:

https://github.com/Kevrev/code-quiz

## Technology Used

[Bootstrap](https://getbootstrap.com/)

[jQuery](https://jquery.com/)

## Credits

Credit to [ChatGPT](https://chat.openai.com/) for assistance in generating various questions that could be used for the quiz. 

Credit to [Nijraj Gelani](https://stackoverflow.com/questions/56537727/how-setinterval-function-works) on StackOverflow as well as other commentors for their explanations of setInterval() and clearInterval() which helped in understanding how to create a timer.

Credit to [this thread](https://stackoverflow.com/questions/32878481/how-to-use-local-storage-in-javascript-and-output-the-stored-elements-in-a-table) on StackOverflow for explaining how to use localStorage to create a leaderboard.