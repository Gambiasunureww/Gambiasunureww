const questions = {
  algebra: [
    "Solve: 2x + 3 = 7",
    "Factorize: x² + 5x + 6",
    "Simplify: 3(x - 2) + 4"
  ],
  geometry: [
    "What is the area of a circle with radius 3?",
    "Find the perimeter of a square with side 4.",
    "What is the sum of the angles in a triangle?"
  ],
  arithmetic: [
    "What is 25 + 17?",
    "Solve: 45 - 19",
    "What is 12 × 8?"
  ],
  trigonometry: [
    "Find sin(30°).",
    "What is tan(45°)?",
    "Find cos(60°)."
  ],
  calculus: [
    "Differentiate: x²",
    "Integrate: ∫x dx",
    "What is the derivative of sin(x)?"
  ],
  statistics: [
    "What is the mean of 2, 4, 6?",
    "Define median.",
    "Find the mode of 1, 1, 2, 3."
  ],
  probability: [
    "What is the probability of rolling a 6 on a die?",
    "Define a sample space.",
    "What is the probability of flipping heads on a coin?"
  ],
  "linear-algebra": [
    "Find the determinant of a 2x2 matrix.",
    "What is a scalar multiplication?",
    "Solve: Ax = b for x."
  ],
  "discrete-math": [
    "What is a graph in graph theory?",
    "Define a set.",
    "What is a prime number?"
  ],
  "number-theory": [
    "Find the GCD of 8 and 12.",
    "Is 29 a prime number?",
    "What is the LCM of 4 and 5?"
  ],
  "financial-math": [
    "Calculate simple interest for P=1000, r=5%, t=2 years.",
    "What is compound interest?",
    "Define annuity."
  ]
};

let timerInterval;
let timeLeft = 60;
let score = 0;

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("submit-btn").addEventListener("click", checkAnswer);

function startQuiz() {
  const topic = document.getElementById("topic").value;
  if (!questions[topic]) return;

  document.querySelector(".quiz-settings").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");

  loadQuestion(topic);
  startTimer();
}

function loadQuestion(topic) {
  const questionList = questions[topic];
  const randomIndex = Math.floor(Math.random() * questionList.length);
  document.getElementById("question").textContent = questionList[randomIndex];
  document.getElementById("answer").value = "";
}

function startTimer() {
  timeLeft = 60;
  document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function checkAnswer() {
  const answerInput = document.getElementById("answer").value.trim();
  if (answerInput !== "") {
    score++;
    loadQuestion(document.getElementById("topic").value);
  }
}

function endQuiz() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").textContent = `Quiz Over! Your Score: ${score}`;
}