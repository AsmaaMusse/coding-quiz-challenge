const startBtn = document.querySelector(".start-btn button");
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
  questionSection.classList.add("activeQuestion"); // Shows Questions page
};

// Create a questions array -> other js page

// Get the question container
const questionSection = function() {
  // 
}



const currentQuestion = questions[0]