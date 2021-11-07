# Coding Quiz - Challenge #4 in the U of MN Bootcamp

## Built With
* Web API/DOM
* JavaScript
* CSS

## Acceptance Criteria
* Quiz starts when you click the start button
* When the quiz is initiated a timer starts and a question is presented
* After answering a question, a new question appears
* If a question is answered incorrectly, time is subracted from the clock
* Quiz ends if all questions are answered or the timer reaches 0
* When the quiz ends you are prompted to enter your initials
* Initials and score are saved in local storage

## Screenshot of the Application

![Screenshot (16)](https://user-images.githubusercontent.com/90292697/140652778-045d839c-2179-4513-9fde-35accab47748.png)

![Screenshot (17)](https://user-images.githubusercontent.com/90292697/140652788-3766298d-3d9e-44a1-8a16-f3e71882fb59.png)

![Screenshot (18)](https://user-images.githubusercontent.com/90292697/140652793-4d068d9b-8abf-48b9-96a7-1b23176c966e.png)

![Screenshot (19)](https://user-images.githubusercontent.com/90292697/140652805-5f867053-8ce4-4d4c-adda-4009c8d0a0a1.png)


## Git Repository![Uploading Screenshot (17).png…]()

https://github.com/mbahl1670/ch4-codeQuiz-mjb

## Website
https://mbahl1670.github.io/ch4-codeQuiz-mjb/


## How this was accomplished
* Created GitHub issues for each step of creating the quiz
* Wrote initial HTML & CSS pages for landing site
* Created array of questions and answers
* Set up an event listener for the start button
* Start button initiates a countdown function using setInterval function and displayes the first question
* Set up event listenrs to the main page, clicking on an answer advances the quiz to the next question
* Incorrect answers will subtract time from the countdown timer
* Created and endQuiz function, when timer reaches 0 or all questions are answered the function is called
* Multple event listeners created for the buttons useded in the endQuiz area, (initials, submit initials, go back to restart quiz, clear the high scores)
* When initials are submitted they are stored to local storage

## Known issues
* Multiple places in the code that could use refractoring, ran out of time however
