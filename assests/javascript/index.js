const questions = [
  {
    title: "What does CSS stand for?",
    correctOption: "Cascading Style Sheets",
    options: [
      "Creative Style Sheets",
      "Compact Style Sheets",
      "Cascading Style Sheets",
    ],
  },
  {
    title: "Choose the correct HTML tag for the largest heading",
    correctOption: "<h1></h1>",
    options: ["<heading>", "<h6>", "<h1></h1>"],
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    correctOption: "Both the <head> section and the <body> section are correct",
    options: [
      "The <body> section",
      "The <head> section",
      "Both the <head> section and the <body> section are correct",
    ],
  },
  {
    title: "How do you create a function in JavaScript?",
    correctOption: "function myFunction{}",
    options: [
      "function myFunction{}",
      "function myFunction{}",
      "function:myFunction()",
    ],
  },
  {
    title: "How does a WHILE loop start?",
    correctOption: "while (i<=10)",
    options: ["while i = 1 to 10", "while (i<=10)", "while (i<=10;i ++)"],
  },
];

let count = questions.length * 5;
let currentQuestionIndex = 0;

const constructOptions = function (options) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "option-list");

  for (let i = 0; i < options.length; i++) {
    // Get the current option from array
    const option = options[i];

    // create button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "option-item");
    optionButton.setAttribute("name", "option");
    optionButton.setAttribute("data-option", option);
    optionButton.textContent = option;

    // append to optionsContainer
    optionsContainer.appendChild(optionButton);
  }

  return optionsContainer;
};

const verifyAnswer = function (event) {
  const target = event.target;
  const currentTarget = event.currentTarget;

  console.log(target.getAttribute("name"));

  // check if click is from button only
  if (target.getAttribute("name") === "option") {
    // Get the option that was clicked
    const userOption = target.getAttribute("data-option");

    // Get the correct option for the question
    const correctOption = currentTarget.getAttribute("data-correct");

    console.log(userOption, correctOption);

    // verify the 2
    if (userOption !== correctOption) {
      // deduct 5 seconds
      count -= 5;
    } else {
      console.log("CORRECT");
    }
  }

  // Go to next question
  currentQuestionIndex += 1;

  // check if its the last question
  if () {
    // render the next question
  removeQuestionContainer();
  renderQuestionSection();

  };
};

const constructQuestionContainer = function (question) {
  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-section");
  questionContainer.setAttribute("id", "question-section");
  questionContainer.setAttribute("data-correct", question.correctOption);

  //  construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "question-text");
  questionH2.textContent = question.title;

  // construct options div
  const options = constructOptions(question.options);

  // appending h2 and options div to section div
  questionContainer.append(questionH2, options);

  // Add event listener
  questionContainer.addEventListener("click", verifyAnswer);

  return questionContainer;
};

const renderQuestionSection = function () {
  // Render the current question
  const currentQuestion = questions[currentQuestionIndex];

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

const removeQuestionContainer = function () {
  // Target question container
  const questionContainer = document.getElementById("question-section");

  // Remove from document
  questionContainer.remove();
};

const startTimer = function () {
  // Declare the timer
  const timerTick = function () {
    // check if the countdown has reached 0
    if (count >= 0) {
      // render countdown time in document
      document.getElementById("countdown").textContent = count;
      count -= 1;
    } else {
      // render game over container
      console.log("GAME OVER");
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
  // Declare the timer tick function
};

// Function working when start button is called
const startQuiz = function () {
  // Remove Start container
  removeStartContainer();

  // Get question container
  renderQuestionSection();

  // Start timer
  startTimer();
};

// Target the Start Quiz button
const startBtn = document.getElementById("start-quiz");

// Add an event listener
startBtn.addEventListener("click", startQuiz);
