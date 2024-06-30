
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
let questions =  [
        {  question: "I choose to do what is right, even if it is difficult",
        id: 1,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I base my life on the example of Jesus",
        id: 2,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I take steps to objectively resolve conflict",
        id: 3,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I refuse to let challenges hold me back",
        id: 4,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I keep my word",
        id: 5,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I don't get defensive when people give me feedback",
        id: 6,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I motivate people to reach their potential",
        id: 7,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I publicly affirm the creativity of others",
        id: 8,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I work well as a member of a team",
        id: 9,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I measure success according to Biblical standards",
        id: 10,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I frequently encourage and thank people",
        id: 11,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I keep up to date on local news and events",
        id: 12,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "Who I am privately is consistent with who I am publicly",
        id: 13,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I rely on the Holy Spirit for strength and guidance",
        id: 14,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I stand up for what I believe - even if others don't join me",
        id: 15,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I grab hold of opportunities and don't let go!",
        id: 16,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I meet my deadlines",
        id: 17,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I know that God can do great things through me",
        id: 18,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "People get excited when I share my ideas or plans",
        id: 19,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I effectively think 'outside the box'",
        id: 20,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I delegate tasks based on people's gifts and passions",
        id: 21,
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        choice5: "5",
        choice6: "6",
        choice7: "7",
        choice8: "8",
        choice9: "9",
        choice10: "10"
    },
    {
        question: "I jump in and start new initiatives",
    id: 22,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I respect people that are different than I am",
    id: 23,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I take time to understand global issues",
    id: 24,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I speak honestly with people",
    id: 25,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I practice spiritual disciplines (prayer, worship etc) on a regular basis",
    id: 26,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I don't shy away from asking important questions",
    id: 27,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "After I fail, I bounce back and learn from my mistakes",
    id: 28,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "When the going gets tough, people can count on me",
    id: 29,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I realize that I still have a lot to learn!",
    id: 30,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I communicate with passion and confidence",
    id: 31,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I come up with new approaches and solutions to problems",
    id: 32,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I joyfully serve others",
    id: 33,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I strive to complete tasks with excellence",
    id: 34,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I am responsive to the needs of others",
    id: 35,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
}




,
    {
        question: "I explore possible options before I make decisions",
    id: 36,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I make choices based on my core values and beliefs",
    id: 37,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I allow God's desires to set the course for my life",
    id: 38,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I step up and make decisions as required",
    id: 39,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I stay focused despite distractions",
    id: 40,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "People trust me to keep things confidential",
    id: 41,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I meet regularly with an accountability partner (or group)",
    id: 42,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I move people towards a specific purpose or action",
    id: 43,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I try to improve how things are done",
    id: 44,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I am committed to helping others grow",
    id: 45,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I eat healthy and stay physically active",
    id: 46,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I listen attentively to people without interrupting",
    id: 47,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I am tactful when dealing with people",
    id: 48,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I encourage others to live out their values and beliefs",
    id: 49,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I support and care for the poor, lonely and hurting",
    id: 50,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I am eager to try new things!",
    id: 51,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I don't give up when I am discouraged",
    id: 52,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "When I mess up, I admit it and take responsibility",
    id: 53,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I take time to reflect and journal",
    id: 54,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "People see a hopeful, positive attitude in me",
    id: 55,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I can envision and describe a better future",
    id: 56,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I generously share my resources",
    id: 57,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
    },
    {
     question: "I get enough rest so that I can work to my potential",
    id: 58,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I am committed to deep friendships",
    id: 59,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
},
{
    question: "I ask for feedback in order to evaluate my effectiveness",
    id: 60,
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    choice5: "5",
    choice6: "6",
    choice7: "7",
    choice8: "8",
    choice9: "9",
    choice10: "10"
}
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