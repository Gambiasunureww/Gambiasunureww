// Array of 200 questions
const questions = [
    { question: "Solve for x: 2x + 3 = 7", answer: "2" },
    { question: "Simplify: 3x + 5x", answer: "8x" },
    { question: "Solve for x: x/2 = 5", answer: "10" },
    { question: "Expand: (x + 2)(x - 2)", answer: "x^2-4" },
    { question: "Simplify: 4x - 3x", answer: "x" },
    { question: "Solve for x: 5x + 2 = 17", answer: "3" },
    { question: "What is x if 7x = 49?", answer: "7" },
    { question: "Factorize: x^2 - 16", answer: "(x+4)(x-4)" },
    { question: "Simplify: 2(3x + 4)", answer: "6x+8" },
    { question: "Solve for x: 2x + 4 = 12", answer: "4" },
    { question: "Solve for x: 5x + 2 = 22", answer: "4" },
{ question: "Simplify: 3x + 5x - 7", answer: "8x - 7" },
{ question: "Factorize: x^2 + 5x - 14", answer: "(x-2)(x+7)" },
{ question: "Expand: (x + 4)(x - 3)", answer: "x^2 + x - 12" },
{ question: "Solve for x: 2x + 9 = 23", answer: "7" },
{ question: "Simplify: 6x - 4x + 5", answer: "2x + 5" },
{ question: "Factorize: x^2 + 9x + 20", answer: "(x+4)(x+5)" },
{ question: "Expand: (x - 1)(x + 5)", answer: "x^2 + 4x - 5" },
{ question: "Solve for x: 3x - 4 = 11", answer: "5" },
{ question: "Simplify: 9x + 2 - 4x", answer: "5x + 2" },
{ question: "Factorize: x^2 - 8x + 16", answer: "(x-4)^2" },
{ question: "Solve for x: 7x + 3 = 38", answer: "5" },
{ question: "Simplify: 5x - 3(2x - 4)", answer: "x + 12" },
{ question: "Factorize: x^2 - 6x + 9", answer: "(x-3)^2" },
{ question: "Expand: (2x + 3)(x - 7)", answer: "2x^2 - 11x - 21" },
{ question: "Solve for x: 4x + 6 = 26", answer: "5" },
{ question: "Simplify: 7x + 2x - 6", answer: "9x - 6" },
{ question: "Factorize: x^2 - 3x - 28", answer: "(x-7)(x+4)" },
{ question: "Solve for x: 9x - 5 = 40", answer: "5" },
{ question: "Simplify: 6x + 4 - 2(3x - 2)", answer: "0x + 10" },
{ question: "Solve for x: 3x + 4 = 19", answer: "5" },
{ question: "Simplify: 6x - 2x + 7", answer: "4x + 7" },
{ question: "Factorize: x^2 + 8x + 16", answer: "(x+4)^2" },
{ question: "Expand: (x + 1)(x - 4)", answer: "x^2 - 3x - 4" },
{ question: "Solve for x: 9x - 5 = 31", answer: "4" },
{ question: "Simplify: 7x - 2(3x + 4)", answer: "x - 8" },
{ question: "Factorize: x^2 - 4x - 45", answer: "(x-9)(x+5)" },
{ question: "Expand: (2x - 5)(x + 3)", answer: "2x^2 + x - 15" },
{ question: "Solve for x: 5x + 10 = 40", answer: "6" },
{ question: "Simplify: 3x + 2(4x - 1)", answer: "11x - 2" },
{ question: "Factorize: x^2 + 7x - 30", answer: "(x+10)(x-3)" },
{ question: "Solve for x: 6x + 5 = 29", answer: "4" },
{ question: "Simplify: 4x - 2x + 3(3x - 4)", answer: "10x - 12" },
{ question: "Factorize: x^2 + 3x - 18", answer: "(x+6)(x-3)" },
{ question: "Expand: (x + 2)(x - 5)", answer: "x^2 - 3x - 10" },
{ question: "Solve for x: 4x - 8 = 16", answer: "6" },
{ question: "Simplify: 8x + 4 - 3(2x - 5)", answer: "2x + 19" },
{ question: "Factorize: x^2 - 5x + 6", answer: "(x-2)(x-3)" },
{ question: "Solve for x: 2x - 7 = 13", answer: "10" },
{ question: "Simplify: 5x - 4 + 3x", answer: "8x - 4" },
{ question: "Solve for x: 4x + 5 = 21", answer: "4" },
{ question: "Simplify: 2x + 3x - 5", answer: "5x - 5" },
{ question: "Factorize: x^2 - 10x + 25", answer: "(x-5)^2" },
{ question: "Expand: (x + 3)(x - 4)", answer: "x^2 - x - 12" },
{ question: "Solve for x: 6x - 8 = 16", answer: "4" },
{ question: "Simplify: 3x + 4 - 5x", answer: "-2x + 4" },
{ question: "Factorize: x^2 - 5x - 24", answer: "(x-8)(x+3)" },
{ question: "Expand: (2x - 3)(x + 5)", answer: "2x^2 + 7x - 15" },
{ question: "Solve for x: 8x - 3 = 13", answer: "2" },
{ question: "Simplify: 4x - 6 + 2x", answer: "6x - 6" },
{ question: "Factorize: x^2 + 6x + 5", answer: "(x+5)(x+1)" },
{ question: "Solve for x: 5x - 3 = 17", answer: "4" },
{ question: "Simplify: 5(2x - 1) - 4x", answer: "6x - 5" },
{ question: "Factorize: x^2 + 3x - 18", answer: "(x+6)(x-3)" },
{ question: "Expand: (x - 1)(x + 7)", answer: "x^2 + 6x - 7" },
{ question: "Solve for x: 2x + 7 = 13", answer: "3" },
{ question: "Simplify: 6x - 2(3x + 4)", answer: "0x - 8" },
{ question: "Factorize: x^2 - 16", answer: "(x+4)(x-4)" },
{ question: "Solve for x: 7x + 3 = 31", answer: "4" },
{ question: "Simplify: 5x + 3(2x - 1)", answer: "11x - 3" },
{ question: "Solve for x: 3x + 7 = 22", answer: "5" },
{ question: "Simplify: 4x - 5 + 3x", answer: "7x - 5" },
{ question: "Factorize: x^2 - 3x - 28", answer: "(x-7)(x+4)" },
{ question: "Expand: (x - 2)(x + 6)", answer: "x^2 + 4x - 12" },
{ question: "Solve for x: 5x - 9 = 21", answer: "6" },
{ question: "Simplify: 7x + 5 - 3x", answer: "4x + 5" },
{ question: "Factorize: x^2 + 7x + 12", answer: "(x+3)(x+4)" },
{ question: "Expand: (3x - 5)(x + 2)", answer: "3x^2 + x - 10" },
{ question: "Solve for x: 3x - 4 = 14", answer: "6" },
{ question: "Simplify: 8x + 4 - 3(2x + 1)", answer: "2x + 1" },
{ question: "Factorize: x^2 - 6x - 9", answer: "(x-3)(x+3)" },
{ question: "Solve for x: 6x + 5 = 29", answer: "4" },
{ question: "Simplify: 5x + 2(3x - 4)", answer: "11x - 8" },
{ question: "Factorize: x^2 + 2x - 15", answer: "(x+5)(x-3)" },
{ question: "Expand: (x + 1)(x - 8)", answer: "x^2 - 7x - 8" },
{ question: "Solve for x: x/4 + 6 = 10", answer: "16" },
{ question: "Simplify: 6(3x - 2) - 4x", answer: "14x - 12" },
{ question: "Factorize: x^2 - 4x - 45", answer: "(x-9)(x+5)" },
{ question: "Solve for x: 2x - 6 = 12", answer: "9" },
{ question: "Simplify: 7x - 3(2x + 1)", answer: "x - 3" },
{ question: "Solve for x: 5x - 4 = 21", answer: "5" },
{ question: "Simplify: 2(3x + 4) - x", answer: "5x + 8" },
{ question: "Factorize: x^2 - 5x - 14", answer: "(x-7)(x+2)" },
{ question: "Expand: (x + 3)(x + 7)", answer: "x^2 + 10x + 21" },
{ question: "Solve for x: 4x/5 = 8", answer: "10" },
{ question: "Simplify: 9x - 2(4x + 1)", answer: "x - 2" },
{ question: "Factorize: x^2 + 6x + 9", answer: "(x+3)^2" },
{ question: "Expand: (2x - 1)(x + 4)", answer: "2x^2 + 7x - 4" },
{ question: "Solve for x: 2x - 3 = 9", answer: "6" },
{ question: "Simplify: 5(2x - 3) + 3x", answer: "13x - 15" },
{ question: "Factorize: x^2 - 12x + 35", answer: "(x-7)(x-5)" },
{ question: "Solve for x: 8x + 6 = 22", answer: "2" },
{ question: "Simplify: 4(3x + 1) - 2(2x - 3)", answer: "8x + 10" },
{ question: "Factorize: 3x^2 + 11x + 6", answer: "(3x+2)(x+3)" },
{ question: "Expand: (x - 6)(x - 2)", answer: "x^2 - 8x + 12" },
{ question: "Solve for x: x/2 - 3 = 7", answer: "20" },
{ question: "Simplify: 6x - 4(2x - 5)", answer: "-2x + 20" },
{ question: "Factorize: x^2 + x - 20", answer: "(x+5)(x-4)" },
{ question: "Solve for x: 7x - 8 = 27", answer: "5" },
{ question: "Simplify: 10(3x - 1) - 5x", answer: "25x - 10" },
{ question: "Solve for x: 2x - 9 = 11", answer: "10" },
{ question: "Simplify: 5(3x + 2) - 4x", answer: "11x + 10" },
{ question: "Factorize: x^2 - 7x + 12", answer: "(x-3)(x-4)" },
{ question: "Expand: (2x + 3)(x - 5)", answer: "2x^2 - 7x - 15" },
{ question: "Solve for x: 4x + 15 = 35", answer: "5" },
{ question: "Simplify: 8x - 3(2x - 5)", answer: "2x + 15" },
{ question: "Factorize: x^2 + 10x + 25", answer: "(x+5)^2" },
{ question: "Expand: (x + 1)(x - 7)", answer: "x^2 - 6x - 7" },
{ question: "Solve for x: 7x/4 = 14", answer: "8" },
{ question: "Simplify: 6(2x + 3) - x", answer: "11x + 18" },
{ question: "Factorize: x^2 - 11x + 30", answer: "(x-5)(x-6)" },
{ question: "Solve for x: 3x - 5 = 16", answer: "7" },
{ question: "Simplify: 4(3x - 2) - 2x", answer: "10x - 8" },
{ question: "Factorize: 2x^2 + 7x + 3", answer: "(2x+1)(x+3)" },
{ question: "Expand: (x - 4)(x + 5)", answer: "x^2 + x - 20" },
{ question: "Solve for x: x/3 + 5 = 8", answer: "9" },
{ question: "Simplify: 3(4x + 2) - 5x", answer: "7x + 6" },
{ question: "Factorize: x^2 - 9x + 14", answer: "(x-7)(x-2)" },
{ question: "Solve for x: 6x + 4 = 28", answer: "4" },
{ question: "Simplify: 7(2x - 3) + 4x", answer: "18x - 21" },
{ question: "Solve for x: 4x - 3 = 13", answer: "4" },
{ question: "Simplify: 3(2x + 5) - 4x", answer: "2x + 15" },
{ question: "Factorize: x^2 + 5x - 24", answer: "(x+8)(x-3)" },
{ question: "Expand: (x + 4)(x - 6)", answer: "x^2 - 2x - 24" },
{ question: "Solve for x: 6x + 9 = 33", answer: "4" },
{ question: "Simplify: 7x - 2(2x + 3)", answer: "3x - 6" },
{ question: "Factorize: x^2 - 6x + 9", answer: "(x-3)^2" },
{ question: "Expand: (3x + 2)(x - 4)", answer: "3x^2 - 10x - 8" },
{ question: "Solve for x: 5x/2 = 15", answer: "6" },
{ question: "Simplify: 4(3x - 1) + 2x", answer: "14x - 4" },
{ question: "Factorize: x^2 - 8x + 12", answer: "(x-6)(x-2)" },
{ question: "Solve for x: 8x + 7 = 31", answer: "3" },
{ question: "Simplify: 10x - 3(2x + 4)", answer: "4x - 12" },
{ question: "Factorize: x^2 + 4x - 5", answer: "(x+5)(x-1)" },
{ question: "Expand: (x + 6)(x - 2)", answer: "x^2 + 4x - 12" },
{ question: "Solve for x: 3x - 7 = 11", answer: "6" },
{ question: "Simplify: 2x + 5(3x - 4)", answer: "17x - 20" },
{ question: "Factorize: x^2 - 2x - 35", answer: "(x-7)(x+5)" },
{ question: "Solve for x: 9x - 15 = 21", answer: "4" },
{ question: "Simplify: 6(2x + 1) - 3(4x - 2)", answer: "6x + 12" },
{ question: "Solve for x: 2x + 7 = 19", answer: "6" },
{ question: "Simplify: 8x - 3x + 4", answer: "5x + 4" },
{ question: "Factorize: x^2 + 6x + 8", answer: "(x+4)(x+2)" },
{ question: "Expand: (x - 2)(x - 5)", answer: "x^2 - 7x + 10" },
{ question: "Solve for x: 3x/5 = 12", answer: "20" },
{ question: "Simplify: 4(3x - 2) + x", answer: "13x - 8" },
{ question: "Factorize: x^2 - 10x + 25", answer: "(x-5)^2" },
{ question: "Expand: (x + 2)^3", answer: "x^3 + 6x^2 + 12x + 8" },
{ question: "Solve for x: 9x - 4 = 23", answer: "3" },
{ question: "Simplify: 2x + 3(4x - 1)", answer: "14x - 3" },
{ question: "Factorize: x^2 - 4x - 12", answer: "(x-6)(x+2)" },
{ question: "Solve for x: 5x + 10 = 35", answer: "5" },
{ question: "Simplify: 7x - 2(3x + 5)", answer: "x - 10" },
{ question: "Factorize: 2x^2 + 8x", answer: "2x(x+4)" },
{ question: "Expand: (x - 3)^2", answer: "x^2 - 6x + 9" },
{ question: "Solve for x: x/2 - 4 = 2", answer: "12" },
{ question: "Simplify: 5(2x + 1) - 3(x - 4)", answer: "7x + 17" },
{ question: "Factorize: x^2 + 9x + 20", answer: "(x+5)(x+4)" },
{ question: "Solve for x: 7x/3 = 14", answer: "6" },
{ question: "Simplify: 6x - 4(2x - 3)", answer: "-2x + 12" },
{ question: "Simplify: 3x + 4 - 2x", answer: "x + 4" },
{ question: "Solve for x: 2(x + 5) = 20", answer: "5" },
{ question: "Factorize: x^2 - 25", answer: "(x+5)(x-5)" },
{ question: "Simplify: 5(2x + 3) - 4x", answer: "6x + 15" },
{ question: "Solve for x: 3x/2 = 9", answer: "6" },
{ question: "Expand: (x + 1)(x + 2)", answer: "x^2 + 3x + 2" },
{ question: "Solve for x: 4x - 7 = 5", answer: "3" },
{ question: "Simplify: 9x - 3(2x + 1)", answer: "3x - 3" },
{ question: "Factorize: x^2 + 7x + 10", answer: "(x+5)(x+2)" },
{ question: "Solve for x: 5x/4 = 10", answer: "8" },
{ question: "Simplify: 3(2x - 1) + x", answer: "7x - 3" },
{ question: "Solve for x: x/4 + 3 = 8", answer: "20" },
{ question: "Factorize: x^2 - 2x - 8", answer: "(x-4)(x+2)" },
{ question: "Expand: (x - 3)(x + 4)", answer: "x^2 + x - 12" },
{ question: "Simplify: 4x + 2(3x - 5)", answer: "10x - 10" },
{ question: "Solve for x: 6x + 2 = 14", answer: "2" },
{ question: "Factorize: x^2 + 4x + 3", answer: "(x+3)(x+1)" },
{ question: "Expand: (2x + 3)(x - 1)", answer: "2x^2 + x - 3" },
{ question: "Simplify: 7(2x + 1) - 3x", answer: "11x + 7" },
{ question: "Solve for x: 2x - 5 = 15", answer: "10" },
{ question: "Solve for x: 3x - 7 = 2", answer: "3" },
{ question: "Simplify: 5x + 2x - 4x", answer: "3x" },
{ question: "Factorize: x^2 + 5x + 6", answer: "(x+2)(x+3)" },
{ question: "Solve for x: x/3 = 9", answer: "27" },
{ question: "Expand: (x + 3)^2", answer: "x^2 + 6x + 9" },
{ question: "Simplify: 6x - 2(3x - 4)", answer: "8" },
{ question: "Solve for x: 4x + 8 = 20", answer: "3" },
{ question: "Factorize: x^2 - 9x + 20", answer: "(x-4)(x-5)" },
{ question: "Simplify: 2(4x + 1) - 3x", answer: "5x + 2" },
{ question: "Solve for x: 7x - 5 = 16", answer: "3" },
];

// Repeat questions to ensure 200 are present
while (questions.length < 200) {
    questions.push(...questions.slice(0, 10)); // Duplicate the first 10
}
questions.length = 200; // Trim to exactly 200 questions

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let interval;
let currentRound = 1;
const questionsPerRound = 5;
const totalRounds = questions.length / questionsPerRound;

// Elements
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit-answer");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const roundInfo = document.getElementById("round-info");
const timeBar = document.getElementById("time-bar");
const startQuizButton = document.getElementById("start-quiz");

function startTimer() {
    timeLeft = 60;
    updateTimer();
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(interval);
            moveToNextQuestion(false);
        }
    }, 1000);
}

function updateTimer() {
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    const percentage = (timeLeft / 60) * 100;
    timeBar.style.width = `${percentage}%`;
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    roundInfo.textContent = `Round ${currentRound} of ${totalRounds}`;
    startTimer();
}

function checkAnswer() {
    const userAnswer = answerElement.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    moveToNextQuestion(true);
}

function moveToNextQuestion(userAnswered) {
    clearInterval(interval);
    if (userAnswered) currentQuestionIndex++;

    // Check if current round is finished
    if (currentQuestionIndex % questionsPerRound === 0 && userAnswered) {
        if (currentRound < totalRounds) {
            currentRound++;
            displayRoundCTA();
        } else {
            endQuiz();
            return;
        }
    }
    loadQuestion();
}

function displayRoundCTA() {
    // Hide submit button and show the Start Round button
    submitButton.disabled = true;
    startQuizButton.classList.remove("hidden");
}

function startNextRound() {
    // Reset input and start the next round
    startQuizButton.classList.add("hidden");
    submitButton.disabled = false;
    loadQuestion();
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    submitButton.disabled = true;
    answerElement.disabled = true;
    timerElement.textContent = "Time's up!";
    timeBar.style.width = "0%";
}

submitButton.addEventListener("click", () => {
    checkAnswer();
    answerElement.value = "";
});

startQuizButton.addEventListener("click", startNextRound);

window.onload = () => {
    loadQuestion();
};
