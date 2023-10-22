
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc,  setDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"


const firebaseConfig =  {
    apiKey: "AIzaSyDVooiNtJXZLAxpQxye8HQ9B5BX2_yM7hA",
    authDomain: "brain-traser.firebaseapp.com",
    projectId: "brain-traser",
    storageBucket: "brain-traser.appspot.com",
    messagingSenderId: "17776028712",
    appId: "1:17776028712:web:c1e7096210028f063b991d",
    measurementId: "G-TX8GKZWWLG"
  }

var fname = JSON.parse(localStorage.getItem("userDetails")).fname;
var lname = JSON.parse(localStorage.getItem("userDetails")).lname;
var age = JSON.parse(localStorage.getItem("userDetails")).age;

var score = localStorage.getItem("score");

console.log(fname+lname+score);

document.querySelector("#user-name").innerHTML= fname + " " + lname;
document.querySelector("#user-score").innerHTML = score;


const playAgain = document.querySelector("#play-again-btn");

playAgain.addEventListener("click", () => {
    localStorage.setItem("score","0");
    location.href = "questions.html";
} );


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
 
 
  const db = getFirestore(app);
  console.log(db);
// Get a list of cities from your database
await setDoc(doc(db, "players", "a"),{
    firstName: fname,
    lastName: lname,
    Age: age,
    Score: score
});

