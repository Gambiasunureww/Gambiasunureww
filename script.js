const questions = {
  algebra: [
    { question: "Solve: 2x + 3 = 7", options: ["x = 2", "x = 3", "x = 1", "x = 0"], answer: "x = 2" },
    { question: "Factorize: x² + 5x + 6", options: ["(x+2)(x+3)", "(x-2)(x+3)", "(x+1)(x+6)", "(x-3)(x-2)"], answer: "(x+2)(x+3)" },
    { question: "Simplify: 3(x - 2) + 4", options: ["3x - 2", "3x - 6", "3x - 2", "3x + 4"], answer: "3x - 2" }
  ],
  geometry: [
    { question: "What is the area of a circle with radius 3?", options: ["28.26", "18.84", "20.12", "31.42"], answer: "28.26" },
    { question: "Find the perimeter of a square with side 4.", options: ["12", "16", "20", "10"], answer: "16" },
    { question: "What is the sum of the angles in a triangle?", options: ["180°", "90°", "270°", "360°"], answer: "180°" }
  ],
  arithmetic: [
    { question: "What is 25 + 17?", options: ["42", "43", "40", "41"], answer: "42" },
    { question: "Solve: 45 - 19", options: ["26", "24", "28", "25"], answer: "26" },
    { question: "What is 12 × 8?", options: ["96", "86", "92", "88"], answer: "96" }
  ],
  trigonometry: [
    { question: "Find sin(30°).", options: ["0.5", "1", "0.707", "0"], answer: "0.5" },
    { question: "What is tan(45°)?", options: ["1", "0", "0.707", "∞"], answer: "1" },
    { question: "Find cos(60°).", options: ["0.5", "0.866", "0", "1"], answer: "0.5" }
  ],
  calculus: [
    { question: "Differentiate: x²", options: ["2x", "x²", "x", "2x²"], answer: "2x" },
    { question: "Integrate: ∫x dx", options: ["x²/2 + C", "x² + C", "x + C", "1/x + C"], answer: "x²/2 + C" },
    { question: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "-cos(x)", "sin(x)"], answer: "cos(x)" }
  ],
  statistics: [
    { question: "What is the mean of 2, 4, 6?", options: ["4", "5", "3", "6"], answer: "4" },
    { question: "Define median.", options: ["Middle value", "Most frequent value", "Average", "Range"], answer: "Middle value" },
    { question: "Find the mode of 1, 1, 2, 3.", options: ["1", "2", "3", "None"], answer: "1" }
  ],
  probability: [
    { question: "What is the probability of rolling a 6 on a die?", options: ["1/6", "1/3", "1/2", "1/4"], answer: "1/6" },
    { question: "Define a sample space.", options: ["Set of all possible outcomes", "Event space", "Probability set", "Experiment"], answer: "Set of all possible outcomes" },
    { question: "What is the probability of flipping heads on a coin?", options: ["1/2", "1/4", "1", "1/3"], answer: "1/2" }
  ],
  "linear-algebra": [
    { question: "Find the determinant of a 2x2 matrix [[2, 3], [1, 4]].", options: ["5", "7", "8", "6"], answer: "5" },
    { question: "What is a scalar multiplication?", options: ["Multiplying a matrix by a constant", "Adding two matrices", "Matrix transpose", "Matrix determinant"], answer: "Multiplying a matrix by a constant" },
    { question: "Solve: Ax = b for x.", options: ["x = A⁻¹b", "x = Ab", "x = bA", "x = A+b"], answer: "x = A⁻¹b" }
  ],
  "discrete-math": [
    { question: "What is a graph in graph theory?", options: ["Set of nodes and edges", "A bar chart", "A pie chart", "A function graph"], answer: "Set of nodes and edges" },
    { question: "Define a set.", options: ["Collection of distinct elements", "A graph", "A list", "An equation"], answer: "Collection of distinct elements" },
    { question: "What is a prime number?", options: ["A number divisible by 1 and itself", "A composite number", "An even number", "A negative number"], answer: "A number divisible by 1 and itself" }
  ],
  "number-theory": [
    { question: "Find the GCD of 8 and 12.", options: ["4", "6", "8", "2"], answer: "4" },
    { question: "Is 29 a prime number?", options: ["Yes", "No"], answer: "Yes" },
    { question: "What is the LCM of 4 and 5?", options: ["20", "10", "15", "25"], answer: "20" }
  ],
  "financial-math": [
    { question: "Calculate simple interest for P=1000, r=5%, t=2 years.", options: ["100", "50", "200", "150"], answer: "100" },
    { question: "What is compound interest?", options: ["Interest on principal and accumulated interest", "Simple interest", "Fixed rate interest", "Negative interest"], answer: "Interest on principal and accumulated interest" },
    { question: "Define annuity.", options: ["Fixed payments over time", "Single lump payment", "Interest rate", "Loan repayment"], answer: "Fixed payments over time" }
  ]
};

let currentTopic = "";
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", loadNextQuestion);

function startQuiz() {
  currentTopic = document.getElementById("topic").value;
  currentQuestionIndex = 0;
  score = 0;

  document.querySelector(".quiz-settings").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");

  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const questionData = questions[currentTopic][currentQuestionIndex];
  document.getElementById("question").textContent = `Question ${currentQuestionIndex + 1}: ${questionData.question}`;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  updateProgress();
}

function checkAnswer(selectedOption) {
  const questionData = questions[currentTopic][currentQuestionIndex];
  if (selectedOption === questionData.answer) {
    score++;
  }

  document.getElementById("next-btn").classList.remove("hidden");
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentTopic].length) {
    loadQuestion();
    document.getElementById("next-btn").classList.add("hidden");
  } else {
    endQuiz();
  }
}

function startTimer() {
  timeLeft = 60;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions[currentTopic].length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz-container").classList.add("hidden");
  const resultContainer = document.getElementById("result");
  resultContainer.classList.remove("hidden");
  resultContainer.textContent = `Quiz Over! Your Score: ${score} / ${questions[currentTopic].length}`;
}