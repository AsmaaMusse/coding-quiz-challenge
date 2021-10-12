const questions = [
  {
    title: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Creative Style Sheets",
      "Compact Style Sheets",
      "Cascading Style Sheets",
    ],
  },
  {
    title: "Choose the correct HTML tag for the largest heading",
    answer: "<h1></h1>",
    options: ["<heading>", "<h6>", "<h1></h1>"],
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    answer: "Both the <head> section and the <body> section are correct",
    options: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body> section are correct",
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction{}",
    options: [
      "function myFunction{}",
      "function myFunction{}",
      "function:myFunction()",
    ],
  },
  {
    title: "How does a WHILE loop start?",
    answer: "while (i<=10)",
    options: ["while i = 1 to 10", "while (i<=10)", "while (i<=10;i ++)"],
  },
];

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "option-list");

  for (let i = 0; i < options.length; i++) {
    // Get the current option from array
    const option = options[i];

    // create button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.textContent = option;

    // append to optionsContainer
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-section");

  //  construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question-text");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  // appending h2 and options div to section div
  questionContainer.append(questionH2, options);

  return questionContainer;
};

const renderQuestionSection = function () {
  // Render the current question
  const currentQuestion = questions[0];

  // construct the HTML fort the question section
  const questionContainer = constructQuestionContainer(currentQuestion);
  // Append the container to the document
  document.getElementById("main-container").appendChild(questionContainer);
};

const removeStartContainer = function () {
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
startBtn.addEventListener("click", startQuiz);
