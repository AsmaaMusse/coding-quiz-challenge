const renderQuestionSection = function() {
  // Render the current question

  // construct the HTML fort the question section

  // Append the container to the document

};


const removeStartContainer = function() {
  // Target start container

  // Remove from document
};

// Function working when start button is called
const startQuiz = function () {

  // Remove Start container
  removeStartContainer();

  // Get question container
  renderQuestionSection();
};


// Target the Start Quiz button
const startBtn = document.getElementById('start-quiz');

// Add an event listener 
startBtn.addEventListener('click',startQuiz);