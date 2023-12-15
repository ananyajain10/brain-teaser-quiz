const questions = [
    {

        question: "1. A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on a long bus trip that would last a week. Before he left, he gave Sarah seven apples. Why?",

        a: "A. As a parting gift.",
        b: "B. To remind her of him.",
        c: "C. To keep the doctor away.",
        d: "D. To make apple pie.",

        correctAnswer: "ans3"
    },
    {

        question: "2. A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or a boat. How did the dog do it?",

        a: "A. The dog can fly.",
        b: "B. The dog used a hidden bridge.",
        c: "C. The river was shallow.",
        d: "D. The river was frozen",

        correctAnswer: "ans4"
    },
    {

        question: "3. No matter how little or how much you use me, you change me every month. What am I?",

        a: "A. A light bulb.",
        b: "B. A battery.",
        c: "C. A calendar.",
        d: "D. A clock.",

        correctAnswer: "ans3"
    },
    {

        question: "4. What can be stolen, mistaken, or altered, yet never leaves you your entire life?",

        a: "A. A shadow.",
        b: "B. A dream.",
        c: "C. Your identity.",
        d: "D. A memory.",

        correctAnswer: "ans3"
    },
    {

        question: "5. Until I am measured, I am not known. Yet you miss me, when I have flown. What am I?",

        a: "A. A bird.",
        b: "B. Time.",
        c: "C. A secret.",
        d: "D. A comet.",

        correctAnswer: "ans2"
    },
    {

        question: "6.The cost of making only the maker knows, Valueless if bought, but sometimes traded. A poor man may give one as easily as a king. When one is broken pain and deceit are assured. What is it?",

        a: "A. A diamond.",
        b: "B. A promise.",
        c: "C. A heart.",
        d: "D. A secret.",

        correctAnswer: "ans2"
    },
    {

        question: "7. The number 8,549,176,320 is a unique number. What is so special about it?",

        a: "A. It's a prime number.",
        b: "B. It's a palindrome.",
        c: "C. It's the largest even number.",
        d: "D. This is the only number that includes all the digits arranged in alphabetical order.",

        correctAnswer: "ans4"
    },


];







const questionImage = document.querySelector("#ques-img");
const questionElement = document.querySelector("#quess");
const option1 = document.querySelector("#opt1");
const option2 = document.querySelector("#opt2");
const option3 = document.querySelector("#opt3");
const option4 = document.querySelector("#opt4");
const answers = document.querySelectorAll(".answer");
const seconds = document.querySelector("#seconds");
const nextButton = document.querySelector("#nextButton");
const skipButton = document.querySelector("#skipButton");
const showScore = document.querySelector("#showScore");

let currentQuestionIndex = 0;
let score = 0;

// initial time

let timeLeft = 30;

// updateTimer

const updateTimer = () => {
    seconds.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        seconds.textContent = "Time's up!";
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {

            loadQuestion();
        } else {


            location.href = "endPage.html";


        }
        clearInterval(timer);

        timeLeft = 30;
        updateTimer();

        timer = setInterval(updateTimer, 1000);

    }
};

updateTimer();

let timer = setInterval(updateTimer, 1000);



const loadQuestion = () => {

    const quesData = questions[currentQuestionIndex];
    questionElement.innerText = quesData.question;
    option1.innerText = quesData.a;
    option2.innerText = quesData.b;
    option3.innerText = quesData.c;
    option4.innerText = quesData.d;

    // Reset the timer
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();

    timer = setInterval(updateTimer, 1000);

}

loadQuestion();


const getCheckedAnswer = () => {
    let answer;

    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
            console.log(answer);

        }
    })

    return answer;
};



const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

var correctQuestions = [];
var incorrectQuestions = [];
var unattemptedQuestions = [];
nextButton.addEventListener("click", () => {

    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer){
    if (checkedAnswer === questions[currentQuestionIndex].correctAnswer) {
        score += 5;
        correctQuestions.push(currentQuestionIndex);

    } else {
        score -= 1;
        incorrectQuestions.push(currentQuestionIndex);
    }
}

localStorage.setItem("score", score);
console.log(correctQuestions);
localStorage.setItem("correctAnswers", JSON.stringify(correctQuestions));
localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectQuestions));

console.log(incorrectQuestions);

    deselectAll();

    if (checkedAnswer) {
        currentQuestionIndex++;
    } else {
        alert("Please select any option");
    }

    if (currentQuestionIndex < questions.length) {

        loadQuestion();

    } else {
        location.href = "endPage.html";
    }
});

skipButton.addEventListener("click", () => {
    unattemptedQuestions.push(currentQuestionIndex);
    localStorage.setItem("unattemptedQuestions", JSON.stringify(unattemptedQuestions));
    deselectAll();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

        loadQuestion();
    } else {


        location.href = "endPage.html";


    }
});
