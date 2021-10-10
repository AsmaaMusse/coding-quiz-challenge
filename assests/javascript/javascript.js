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
  showQuestions(1);
};

// Create a questions array -> other js page

let questionCount = 0;

// Fetching questions from the array
function showQuestions(index) {
  const questionText = document.querySelector("question-text");
  const optionList = document.querySelector(".option-list");
  let questionTag = "<span>" + questions[index].question + "</span>";
  let optionTag =
    '<div class="option">' +
    question[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[0] +
    "<span></span></div>";
  questionText.innerHTML = questionTag;
}
