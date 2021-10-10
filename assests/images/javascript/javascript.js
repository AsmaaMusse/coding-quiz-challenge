const startBtn = document.querySelector(".start-btn button");
const nextQuestionBtn = document.querySelector(".next-question");
const restartBtn = document.querySelector(".buttons .restart");
const quitBtn = document.querySelector(".buttons .quit");
const starterContainer = document.querySelector(".starter-container");

// When Start btn is clicked
startBtn.onclick = () => {
  starterContainer.classList.add("activeStarter");
  // shows start container page
};

// When Exit btn is clicked
const exitBtn = starterContainer.querySelector(".buttons .exit");

exitBtn.onclick = () => {
  starterContainer.classList.remove("activeStarter");
  // hides start container page
};

// When Continue btn is clicked
const continueBtn = starterContainer.querySelector(".buttons .continue");

continueBtn.onclick = () => {
  starterContainer.classList.remove("activeStarter");
  // Also hides info box

  const questionSection = document.querySelector(".questions-section");
  questionSection.classList.add("activeQuestion");
  // Shows Questions page
  showQuestion();
};

// Create a questions array -> other js page

let questionCount = 0;

// Fetching questions from the array
function showQuestion() {
  const questionText = document.querySelector("question-text");
  let questionTag = "<span>" + questions[0].question + "</span>";
  questionText.innerHTML = questionTag;
}
