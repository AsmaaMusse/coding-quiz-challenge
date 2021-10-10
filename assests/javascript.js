// Set button variables
const startBtn = document.querySelector(".start-btn button");
const nextQuestionBtn = document.querySelector(".next-question");
const restartBtn = document.querySelector(".buttons .restart");
const quitBtn = document.querySelector(".buttons .quit");
const starterContainer = document.querySelector(".starter-container");
const exitBtn = starterContainer.querySelector(".buttons .exit");
const continueBtn = starterContainer.querySelector(".buttons .continue");
const questionsSection = document.querySelector(".questions-section");

// When Start btn is clicked
startBtn.onclick = () => {
  starterContainer.classList.add("activeStarter");
  // show start container page
};

// When Exit btn is clicked
exitBtn.onclick = () => {
  starterContainer.classList.remove("activeStarter");
  // hides start container page
};

// When Continue btn is clicked
continueBtn.onclick = () => {
  starterContainer.classList.remove("activeStarter");
  // hides start container page
  questionsSection.classList.add("activeQuiz");
  // Shows first quiz question
};

// Create a questions array

let questions = [
  {
    Number: 1,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Creative Style Sheets",
      "Compact Style Sheets",
      "Cascading Style Sheets",
    ],
  },

  {
    Number: 2,
    question: "Choose the correct HTML tag for the largest heading",
    answer: "<h1></h1>",
    options: ["<heading>", "<h6>", "<head>", "<h1></h1>"],
  },

  {
    Number: 3,
    question: "Which is the correct code for a relative hyperlink?",
    answer: "< a href= " ../index.html " > Link < /a >",
    options: [
      "< a href= " ../index.html " > Link < /a >",
      "Www.index.com",
      "< a href= " html.index.com " > Link < /a >",
      "< a href= " www.index.com " > Link < /a >"
    ],
  },

  {
    Number: 4,
    question: "Where is the correct place to insert a JavaScript?",
    answer: "Both the <head> section and the <body> section are correct",
    options: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body> section are correct",
    ],
  },

  {
    Number: 5,
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction{}",
    options: [
      "function myFunction{}",
      "function myFunction{}",
      "function:myFunction()",
    ],
  },
  {
    Number: 6,
    question: "How does a WHILE loop start?",
    answer: "while (i<=10)",
    options: [
      "while i = 1 to 10",
      "while (i<=10)",
      "while (i<=10;i ++)",
    ],
  },
];

// Create function to start game

// First question

// validate answer - boolean

// Display correct answer

// CREATE 2 FUNCTION TO DISPLAY
// WRONG!
// CORRECT

// Move to the next question

// End game when time runs out

// Display highScore

// keep memory of game scores

// Display highScore when nav link is clicked
