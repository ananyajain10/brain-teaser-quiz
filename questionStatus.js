const questions = [
    {

        question: "A doctor and a bus driver are both in love with the same woman, an attractive girl named Sarah. The bus driver had to go on a long bus trip that would last a week. Before he left, he gave Sarah seven apples. Why?",


    },
    {

        question: "A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet and without using a bridge or a boat. How did the dog do it?",

    },
    {

        question: "No matter how little or how much you use me, you change me every month. What am I?",


    },
    {

        question: "What can be stolen, mistaken, or altered, yet never leaves you your entire life?",


    },
    {

        question: "Until I am measured, I am not known. Yet you miss me, when I have flown. What am I?",

    },
    {

        question: "The cost of making only the maker knows, Valueless if bought, but sometimes traded. A poor man may give one as easily as a king. When one is broken pain and deceit are assured. What is it?",


    },
    {

        question: "The number 8,549,176,320 is a unique number. What is so special about it?",


    },


];



var correctQues = document.querySelector("#correct");
var incorrectQues = document.querySelector("#incorrect");
var unattemptedQues = document.querySelector("#unattempted");
var corrCount = document.querySelector("#corrCount");
var incorrCount = document.querySelector("#incorrCount");
var unattCount = document.querySelector("#unattCount");
var corrlist = document.querySelector("#corrAnslist");
var incorrlist = document.querySelector("#incorrAnslist");
var unattlist = document.querySelector("#unattemptAnslist");
var correctAnsArr = JSON.parse(localStorage.getItem("correctAnswers"))
var incorrectAnsArr = JSON.parse(localStorage.getItem("incorrectAnswers"))
var unattemptedAnsArr = JSON.parse(localStorage.getItem("unattemptedQuestions"))

console.log(correctAnsArr, incorrectAnsArr, unattemptedAnsArr);

corrCount.innerHTML = correctAnsArr.length;
incorrCount.innerHTML = incorrectAnsArr.length;
unattCount.innerHTML = unattemptedAnsArr.length;



function displayQuestions(questions, questionArr, listElement) {
    for (var i = 0; i < questionArr.length; i++) {
        var questionIndex = questionArr[i];
        var question = questions[questionIndex];
        listElement.innerHTML += `<li>${question.question}</li>`;
    }
}

displayQuestions(questions, correctAnsArr, corrlist);

correctQues.addEventListener("click", function () {
    corrlist.innerHTML = "";
    incorrlist.innerHTML = "";
    unattlist.innerHTML = "";

    correctQues.classList.add('active');
    incorrectQues.classList.remove('active');
    unattemptedQues.classList.remove('active');

    incorrlist.innerHTML = "";
    unattlist.innerHTML = "";
    displayQuestions(questions, correctAnsArr, corrlist);

})

incorrectQues.addEventListener("click", function () {
    corrlist.innerHTML = "";
    incorrlist.innerHTML = "";
    unattlist.innerHTML = "";

    correctQues.classList.remove('active');
    incorrectQues.classList.add('active');
    unattemptedQues.classList.remove('active');

    corrlist.innerHTML = "";
    unattlist.innerHTML = "";

    displayQuestions(questions, incorrectAnsArr, incorrlist);

})

unattemptedQues.addEventListener("click", function () {
    corrlist.innerHTML = "";
    incorrlist.innerHTML = "";
    unattlist.innerHTML = "";

    correctQues.classList.remove('active');
    incorrectQues.classList.remove('active');
    unattemptedQues.classList.add('active');

    corrlist.innerHTML = "";
    incorrlist.innerHTML = "";
    displayQuestions(questions, unattemptedAnsArr, unattlist);

})



