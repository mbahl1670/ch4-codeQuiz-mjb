var timeLeft = 5;
var timerEl = document.querySelector("#timer");
var quizStartClick = document.querySelector("#quizStart");
var headingEl = document.querySelector("#quiz-heading");
var descriptionEl = document.querySelector("#description");
var quizContentEl = document.querySelector(".quizContent");

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

var startQuiz = function () {
  // start the coundown
  countdown();

  // display the quiz questions and answers on the screen
  quizStartClick.remove();
  descriptionEl.remove();
  headingEl.textContent = quizQA[0].question;
  var answersEl = document.createElement("ol");
  answersEl.className = "answers";
  var answer1El = document.createElement("li");
  answer1El.className = "answerLine";
  var answer2El = document.createElement("li");
  answer2El.className = "answerLine";
  var answer3El = document.createElement("li");
  answer3El.className = "answerLine";
  var answer4El = document.createElement("li");
  answer4El.className = "answerLine";
  answer1El.textContent = "1.     " + quizQA[0].answer1;
  answer2El.textContent = "2.     " + quizQA[0].answer2;
  answer3El.textContent = "3.     " + quizQA[0].answer3;
  answer4El.textContent = "4.     " + quizQA[0].answer4;
  answersEl.appendChild(answer1El);
  answersEl.appendChild(answer2El);
  answersEl.appendChild(answer3El);
  answersEl.appendChild(answer4El);
  headingEl.appendChild(answersEl);
  quizContentEl.appendChild(headingEl);


}

// when the button is clicked, the Quiz & Timer start
quizStartClick.addEventListener("click", startQuiz);











var quizQA = [
  {
    question: "What is the name of the fictional town Buffy the Vampire Slayer takes place in?",
    answer1: "Mystic Falls",
    answer2: "Sunnydale",
    answer3: "Riverdale",
    answer4: "Paradise",
    correctAnswer: "Sunnydale"
  },
  {
    question: "What is the name of Buffy's best friend?",
    answer1: "Betty Cooper",
    answer2: "Elena Gilbert",
    answer3: "Cordelia Chase",
    answer4: "Willow Rosenthal",
    correctAnswer: "Willow Rosenthal"
  },
  {
    question: "What is the name of the actress who played Buffy?",
    answer1: "Sara Michelle Geller",
    answer2: "Eliza Dushku",
    answer3: "Alyson Hannigan",
    answer4: "Nina Dobrev",
    correctAnswer: "Sara Michelle Geller"
  },
  {
    question: "Who sired Angel, the first vampire Buffy fell in love with?",
    answer1: "Stephen",
    answer2: "The Master",
    answer3: "Darla",
    answer4: "Dracula",
    correctAnswer: "Darla"
  },
  {
    question: "What type of monster never appeard on Buffy",
    answer1: "Witch",
    answer2: "Godzilla",
    answer3: "Werewolf",
    answer4: "Demon",
    correctAnswer: "Godzilla"
  },
  {
    question: "According to Xander in the episode 'Prophecy Girl', what kind of music is the music of pain?",
    answer1: "Country",
    answer2: "Death Metal",
    answer3: "Korean Pop",
    answer4: "Classical",
    correctAnswer: "Country"
  }
];