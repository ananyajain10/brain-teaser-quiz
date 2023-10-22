var fname = JSON.parse(localStorage.getItem("userDetails")).fname;
var lname = JSON.parse(localStorage.getItem("userDetails")).lname;
var score = localStorage.getItem("score");

// console.log(fname+lname+score)

document.querySelector("#user-name").innerHTML= fname + " " + lname;
document.querySelector("#user-score").innerHTML = score;


const playAgain = document.querySelector("#play-again-btn");

playAgain.addEventListener("click", () => {
    localStorage.setItem("score","0");
    location.href = "questions.html";
} );

