// Popup management
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
        setTimeout(() => closePopup(popupId), 10000);
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Show donation popup every 30 seconds
let donationPopupInterval = setInterval(() => {
    showPopup('donation-popup');
}, 30000);

// Initial popup displays
setTimeout(() => showPopup('donation-popup'), 5000);

// Ad popup management
function showAdPopup() {
    let popup = document.getElementById("popupAd");
    let countdown = document.getElementById("countdown");
    if (!popup || !countdown) return;

    let timeLeft = 5;
    popup.style.display = "flex";
    
    let timer = setInterval(() => {
        timeLeft--;
        countdown.innerText = `Closing in ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            popup.style.display = "none";
        }
    }, 1000);
}

function closeAdPopup(event) {
    event.preventDefault();
    event.stopPropagation();
    const popup = document.getElementById("popupAd");
    if (popup) {
        popup.style.display = "none";
    }
}

// Show ad pop-up every 35 seconds
let adPopupInterval = setInterval(showAdPopup, 35000);

// Quiz functionality
const questionBank = [
    {
        question: "What is the primary purpose of fasting during Ramadan?",
        options: [
            "To develop self-discipline and God-consciousness (Taqwa)",
            "To lose weight",
            "To save money on food",
            "To celebrate with family"
        ],
        correct: 0
    },
    {
        question: "What is the meal called that Muslims eat before dawn during Ramadan?",
        options: ["Iftar", "Suhoor", "Lunch", "Dinner"],
        correct: 1
    },
    {
        question: "Which night in Ramadan is considered the 'Night of Power' (Laylat al-Qadr)?",
        options: [
            "The first night",
            "The 15th night",
            "One of the odd nights in the last ten days",
            "The last night"
        ],
        correct: 2
    },
    {
        question: "What breaks the fast?",
        options: [
            "Taking medication",
            "Accidentally eating or drinking",
            "Intentionally eating or drinking",
            "Swimming"
        ],
        correct: 2
    }
];

let questions = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
let isQuizActive = false;

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function startQuiz() {
    if (isQuizActive) return;
    
    isQuizActive = true;
    questions = shuffleArray([...questionBank]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('share-container').style.display = 'none';
    document.getElementById('final-result').style.display = 'none';
    
    loadQuestion();
}

function loadQuestion() {
    if (!isQuizActive || currentQuestion >= questions.length) {
        showShareScreen();
        return;
    }

    const question = questions[currentQuestion];
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    
    if (!questionElement || !optionsContainer) return;

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = shuffleArray([...question.options]);
    const newCorrectIndex = shuffledOptions.indexOf(question.options[question.correct]);
    question.correct = newCorrectIndex;
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    updateProgress();
    startTimer();
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

function startTimer() {
    if (timer) clearInterval(timer);
    timeLeft = 20;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timeDisplay = document.getElementById('time');
    if (timeDisplay) {
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 5) {
            timeDisplay.style.color = '#d9534f';
        } else {
            timeDisplay.style.color = '#2c3e50';
        }
    }
}

function selectOption(index) {
    if (!isQuizActive) return;

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[index].classList.add('selected');
    
    if (index === questions[currentQuestion].correct) {
        score++;
        options[index].style.backgroundColor = '#2ecc71';
    } else {
        options[index].style.backgroundColor = '#e74c3c';
        options[questions[currentQuestion].correct].style.backgroundColor = '#2ecc71';
    }
    
    // Disable all options after selection
    options.forEach(option => option.style.pointerEvents = 'none');
    
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;
    loadQuestion();
}

function showShareScreen() {
    isQuizActive = false;
    clearInterval(timer);
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('share-container').style.display = 'block';
    
    const shareText = encodeURIComponent(
        "🌙✨ This Ramadan, stand a chance to WIN CASH REWARDS, FOOD SUPPLIES, AND MANY MORE! " +
        "🛍️🥘 Take this quick Ramadan knowledge quiz for a chance to win amazing prizes! " +
        "Don't miss out on this special giveaway—your next big reward could be just a quiz away! 🎁🔥\n\n" +
        "👉 [https://knowyourdeen.github.io/knowyourdeenquiz/]"
    );
    
    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.href = `https://api.whatsapp.com/send?text=${shareText}`;
    }

    setupShareProgress();
}

function setupShareProgress() {
    let shares = 0;
    const maxShares = 5;
    const progressBar = document.getElementById("share-progress-bar");
    const progressPercentage = document.getElementById("share-progress-percentage");
    const continueBtn = document.getElementById("continue-btn");
    
    if (!progressBar || !progressPercentage || !continueBtn) return;

    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function() {
            shares++;
            let progress = Math.min((shares / maxShares) * 100, 100);
            progressBar.style.width = `${progress}%`;
            progressPercentage.textContent = `${Math.round(progress)}%`;

            if (shares >= maxShares) {
                continueBtn.classList.add("enabled");
                continueBtn.removeAttribute("disabled");
            }
        });
    }

    continueBtn.addEventListener("click", function() {
        if (shares >= maxShares) {
            showFinalResult();
        }
    });
}

function showFinalResult() {
    document.getElementById('share-container').style.display = 'none';
    document.getElementById('final-result').style.display = 'block';
    
    // Add loading animation
    setTimeout(() => {
        document.getElementById('loading-animation').style.display = 'none';
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.style.display = 'block';
            
            const scoreElement = document.getElementById('score');
            const feedbackElement = document.getElementById('feedback');
            
            if (scoreElement) scoreElement.textContent = score;
            
            if (feedbackElement) {
                if (score >= 8) {
                    feedbackElement.textContent = "Excellent! You have a great understanding of Ramadan! 🌟";
                } else if (score >= 5) {
                    feedbackElement.textContent = "Good effort! Keep learning about Ramadan! 📚";
                } else {
                    feedbackElement.textContent = "Keep studying! There's always more to learn about Ramadan. 💪";
                }
            }
        }
    }, 2000);
}

function restartQuiz() {
    // Clear all intervals
    clearInterval(timer);
    clearInterval(donationPopupInterval);
    clearInterval(adPopupInterval);
    
    // Reset UI
    document.getElementById('score-display').style.display = 'none';
    document.getElementById('loading-animation').style.display = 'block';
    
    // Restart popups
    donationPopupInterval = setInterval(() => showPopup('donation-popup'), 30000);
    adPopupInterval = setInterval(showAdPopup, 35000);
    
    // Start new quiz
    startQuiz();
}

// Initialize event listeners when the document loads
document.addEventListener('DOMContentLoaded', function() {
    // Preload any necessary assets
    document.getElementById('start-screen').style.display = 'block';
    
    // Add error handling for network requests
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
    });
});
