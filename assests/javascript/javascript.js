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
  showQuestions(0);
};

// Create a questions array -> other js page

let questionCount = 0;

// When Next Btn is clicked
const nextBtn = document.querySelector(".next-question");

nextBtn.onclick = () => {
  questionCount++;
  showQuestions(questionCount);
};

// Fetching questions from the array
function showQuestions(index) {
  const questionText = document.querySelector("question-text");
  const optionList = document.querySelector(".option-list");

  questionText.innerHTML = questionTag;
  optionList.innerHTML = optionTag;
  let questionTag = "<span>" + questions[index].question + "</span>";
  let optionTag =
    '<div class="option">' +
    question[index].options[0] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[1] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[2] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[3] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[4] +
    "<span></span></div>" +
    '<div class="option">' +
    question[index].options[5] +
    "<span></span></div>";
}
