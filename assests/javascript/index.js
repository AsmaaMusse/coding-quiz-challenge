const renderQuestionSection = function() {
    console.log("renderQuestionSection");

  // Render the current question
  // construct the HTML fort the question section
  // Append the container to the document

};

const removeStartContainer = function() {
    console.log("removeStartContainer");
  // Target start container
  const starterContainer = document.getElementById("start-container");

  // Remove from document
  starterContainer.remove();
};

// Function working when start button is called
const startQuiz = function () {
    
  // Remove Start container
  removeStartContainer();

  // Get question container
  renderQuestionSection();
};


// Target the Start Quiz button
const startBtn = document.getElementById("start-quiz");

// Add an event listener 
startBtn.addEventListener('click',startQuiz);