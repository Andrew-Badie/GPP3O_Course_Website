
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    startGame();
});

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterElement = document.getElementById('question-counter');

let currentQuestion = {};
let acceptingAnswers = true;

let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const responses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let questions = [
    { question: "I choose what is right, even if it's hard", id: 1 },
    { question: "I base my life on Jesus' example", id: 2 },
    { question: "I work to resolve conflicts objectively", id: 3 },
    { question: "I don't let challenges stop me", id: 4 },
    { question: "I keep my word", id: 5 },
    { question: "I stay open to feedback without getting defensive", id: 6 },
    { question: "I motivate others to reach their potential", id: 7 },
    { question: "I publicly recognize others' creativity", id: 8 },
    { question: "I am a good team player", id: 9 },
    { question: "I measure success by Biblical standards", id: 10 },
    { question: "I frequently encourage and thank others", id: 11 },
    { question: "I stay informed about local events", id: 12 },
    { question: "I am the same privately as I am publicly", id: 13 },
    { question: "I rely on the Holy Spirit for guidance", id: 14 },
    { question: "I stand up for my beliefs, even if alone", id: 15 },
    { question: "I seize opportunities and don't let go", id: 16 },
    { question: "I meet my deadlines", id: 17 },
    { question: "I believe God can work through me", id: 18 },
    { question: "People get excited about my ideas", id: 19 },
    { question: "I think creatively and 'outside the box'", id: 20 },
    { question: "I delegate tasks based on others' strengths", id: 21 },
    { question: "I start new initiatives", id: 22 },
    { question: "I respect people who are different from me", id: 23 },
    { question: "I take time to understand global issues", id: 24 },
    { question: "I speak honestly with others", id: 25 },
    { question: "I practice spiritual disciplines regularly", id: 26 },
    { question: "I don't shy away from important questions", id: 27 },
    { question: "I learn from my mistakes", id: 28 },
    { question: "I am reliable in tough times", id: 29 },
    { question: "I acknowledge I have more to learn", id: 30 },
    { question: "I communicate with passion and confidence", id: 31 },
    { question: "I find new solutions to problems", id: 32 },
    { question: "I serve others joyfully", id: 33 },
    { question: "I strive for excellence in my tasks", id: 34 },
    { question: "I am attentive to others' needs", id: 35 },
    { question: "I explore options before deciding", id: 36 },
    { question: "I make choices based on my core values", id: 37 },
    { question: "I allow God's desires to guide my life", id: 38 },
    { question: "I step up and make decisions when needed", id: 39 },
    { question: "I stay focused despite distractions", id: 40 },
    { question: "People trust me to keep things confidential", id: 41 },
    { question: "I meet regularly with an accountability partner", id: 42 },
    { question: "I move people toward action", id: 43 },
    { question: "I strive to improve how things are done", id: 44 },
    { question: "I am committed to helping others grow", id: 45 },
    { question: "I eat healthy and stay active", id: 46 },
    { question: "I listen without interrupting", id: 47 },
    { question: "I am tactful when dealing with people", id: 48 },
    { question: "I encourage others to live out their values", id: 49 },
    { question: "I support those who are poor and hurting", id: 50 },
    { question: "I am eager to try new things", id: 51 },
    { question: "I don't give up when discouraged", id: 52 },
    { question: "I admit mistakes and take responsibility", id: 53 },
    { question: "I take time to reflect and journal", id: 54 },
    { question: "People see my hopeful, positive attitude", id: 55 },
    { question: "I envision and describe a better future", id: 56 },
    { question: "I generously share my resources", id: 57 },
    { question: "I get enough rest to work at my best", id: 58 },
    { question: "I am committed to deep friendships", id: 59 },
    { question: "I seek feedback to improve", id: 60 }
];

let userAnswers = {};

function startGame() {
    questionCounter = 0;
    availableQuestions = [...questions];
    userAnswers = {};
    getNewQuestion();
}

function getNewQuestion() {
    if (questionCounter >= availableQuestions.length) {
        calculateTotal();
        return;
    }
    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion["choice" + number];
    });

    acceptingAnswers = true;
    updateQuestionCounter();
}

function updateQuestionCounter() {
    questionCounterElement.innerText = `Question ${questionCounter + 1} of ${availableQuestions.length}`;
    questionCounter++;
}

choices.forEach((choice) => {
    choice.setAttribute('tabindex', '0'); // Convert 0 to string
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        userAnswers[currentQuestion.id] = parseInt(selectedAnswer, 10); // Ensure selectedAnswer is parsed as an integer
        getNewQuestion();
    });

    choice.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
            userAnswers[currentQuestion.id] = parseInt(selectedAnswer, 10); // Ensure selectedAnswer is parsed as an integer
            getNewQuestion();
        }
    });
});

function calculateTotal() {
    const characterTraits = {
        "Authentic": [1, 13, 25, 37, 49],
        "Christ-Centered": [2, 14, 26, 38, 50],
        "Courageous": [3, 15, 27, 39, 51],
        "Determined": [4, 16, 28, 40, 52],
        "Reliable": [5, 17, 29, 41, 53],
        "Teachable": [6, 18, 30, 42, 54]
    };
    const skills = {
        "Influential": [7, 19, 31, 43, 55],
        "Innovative": [8, 20, 32, 44, 56],
        "Inter-Dependent": [9, 21, 33, 45, 57],
        "Productive": [10, 22, 34, 46, 58],
        "Relational": [11, 23, 35, 47, 59],
        "Strategic": [12, 24, 36, 48, 60]
    };

    const charScores = calculateScores(characterTraits, userAnswers);
    const skillScores = calculateScores(skills, userAnswers);

    localStorage.setItem('characterScores', JSON.stringify(charScores));
    localStorage.setItem('skillScores', JSON.stringify(skillScores));

    window.location.href = 'results.html';

    console.log('Character Scores: ', charScores);
    console.log('Skill Scores:', skillScores);
}

function calculateScores(groups, answers) {
    const scores = {};
    for (let group in groups) {
        scores[group] = groups[group].reduce((total, questionId) => {
            return total + (answers[questionId] || 0);
        }, 0);
    }
    return scores;
}
