var timeLeft = 5;
var qNumber = 0;
var timerEl = document.querySelector("#timer");
var quizStartClickEl = document.querySelector("#quizStart");
var headingEl = document.querySelector("#quiz-heading");
var descriptionEl = document.querySelector("#description");
var quizContentEl = document.querySelector("#quizContent");
var pageContentEl = document.querySelector("#page-content");
var correct = false;
var answersEl = document.createElement("ol");
answersEl.className = "answers";
var answer1El = document.createElement("li");
answer1El.className = "answerLine";
answer1El.setAttribute("data-ansID", 1);
var answer2El = document.createElement("li");
answer2El.className = "answerLine";
answer2El.setAttribute("data-ansID", 2);
var answer3El = document.createElement("li");
answer3El.className = "answerLine";
answer3El.setAttribute("data-ansID", 3);
var answer4El = document.createElement("li");
answer4El.className = "answerLine";
answer4El.setAttribute("data-ansID", 4);


// setting up the timer function  
var countdown = function() {
  timeLeft = 5;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    else {
      timerEl.textContent = "Time: 0";
      clearInterval(timeInterval);
    }
  }, 1000);
} 


// function that will read the QA array and display the selected question and answer from the array
var createQA = function(questionNumber) {
  headingEl.textContent = quizQA[questionNumber].question;
  answer1El.textContent = "1.     " + quizQA[questionNumber].answer1;
  answer2El.textContent = "2.     " + quizQA[questionNumber].answer2;
  answer3El.textContent = "3.     " + quizQA[questionNumber].answer3;
  answer4El.textContent = "4.     " + quizQA[questionNumber].answer4;
}



// FUNCTIONS FOR CHECKING IF AN ANSWER IS CORRECT
var answerClick = function(event) {
  if (event.target.matches(".answerLine")) {
    var ansId = event.target.getAttribute("data-AnsID");
    correct = checkAnswer(ansId);  
  }
  createQA(qNumber);
};



var checkAnswer = function(ansID) {
  if (ansID === quizQA[qNumber].correctAnswer) {
    correct = true;
  }
  else {
    correct = false;
  }
  
  // looking to see if we have already told the user if they are correct or wrong
  var oldIsCorrect = document.querySelector(".correctAnswer"); // if we haven't answered a question yet, i.e. this is the first qustion, oldIsCorrect will be null/false
  if (oldIsCorrect) { // will only try to remove the element if it exists
    oldIsCorrect.remove();
  }
  

  var isCorrectEl = document.createElement("div");
  isCorrectEl.className = "correctAnswer";
  var isCorrectAnswerEl = document.createElement("h2");
  if (correct) {
    isCorrectAnswerEl.textContent = "Correct!";
  }
  else {
    isCorrectAnswerEl.textContent = "Wrong!";
  }
  isCorrectEl.append(isCorrectAnswerEl);
  quizContentEl.appendChild(isCorrectEl);
  qNumber++;
  return correct;
};

//END OF FUNCTIONS THAT WILL TELL IF AN ANSWER IS CORRECT OR NOT










// function to start the quiz
var startQuiz = function () {
  // start the coundown
  qNumber = 0;
  countdown();
  
  // remove the button and descriptopn of the quiz
  quizStartClickEl.remove();
  descriptionEl.remove();
  
  // display the quiz questions and answers on the screen
  answersEl.appendChild(answer1El);
  answersEl.appendChild(answer2El);
  answersEl.appendChild(answer3El);
  answersEl.appendChild(answer4El);
  quizContentEl.appendChild(headingEl);
  quizContentEl.appendChild(answersEl);
  quizContentEl.className = "answerContent";
  createQA(qNumber);
}

// event listner that is looking for the click on an answer
pageContentEl.addEventListener("click", answerClick);
// when the button is clicked, the Quiz & Timer start
quizStartClickEl.addEventListener("click", startQuiz);

var quizQA = [
  {
    question: "What is the name of the fictional town Buffy the Vampire Slayer takes place in?",
    answer1: "Mystic Falls",
    answer2: "Sunnydale",
    answer3: "Riverdale",
    answer4: "Paradise",
    correctAnswer: "2"
  },
  {
    question: "What is the name of Buffy's best friend?",
    answer1: "Betty Cooper",
    answer2: "Elena Gilbert",
    answer3: "Cordelia Chase",
    answer4: "Willow Rosenthal",
    correctAnswer: "4"
  },
  {
    question: "What is the name of the actress who played Buffy?",
    answer1: "Sara Michelle Geller",
    answer2: "Eliza Dushku",
    answer3: "Alyson Hannigan",
    answer4: "Nina Dobrev",
    correctAnswer: "1"
  },
  {
    question: "Who sired Angel, the first vampire Buffy fell in love with?",
    answer1: "Stephen",
    answer2: "The Master",
    answer3: "Darla",
    answer4: "Dracula",
    correctAnswer: "3"
  },
  {
    question: "What type of monster never appeard on Buffy",
    answer1: "Witch",
    answer2: "Godzilla",
    answer3: "Werewolf",
    answer4: "Demon",
    correctAnswer: "2"
  },
  {
    question: "According to Xander in the episode 'Prophecy Girl', what kind of music is the music of pain?",
    answer1: "Country",
    answer2: "Death Metal",
    answer3: "Korean Pop",
    answer4: "Classical",
    correctAnswer: "1"
  }
];