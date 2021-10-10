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

// quiz questions:

// 1. What does CSS stand for?
// A. Creative Style Sheets
// B. Compact Style Sheets
// C. Cascading Style Sheets -->

// 2. Choose the correct HTML tag for the largest heading
// A. <heading>
// B. <h6>
// C. <head>
// D. <h1></h1> -->

// 3. Which is the correct code for a relative hyperlink?
// A. < a href= " ../index.html " > Link < /a > -->
// B. Www.index.com
// C. < a href= " html.index.com " > Link < /a >
// D. < a href= " www.index.com " > Link < /a >

// 4. Where is the correct place to insert a JavaScript?
// A. the <body> section
// B. The <head> section
// C. Both the <head> section and the <body> section are correct -->

// 5. How do you create a function in JavaScript?
// A. function myFunction{} -->
// B. function = myFunction()
// C. function:myFunction()

// 6. How does a WHILE loop start?
// A. while i = 1 to 10
// B. while (i<=10) -->
// C. while (i<=10;i ++)

// Create an array for question

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
