
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc, setDoc, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"


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

    const userDetails = {
      fname: "",
      lname: "",
      age: ""
  };

  localStorage.setItem("userDetails", JSON.stringify(userDetails));
   
    location.href = "index.html";
} );

const detailedResult = document.querySelector("#detailed-result");

detailedResult.addEventListener("click", () => {
          location.href = "questionStatus.html";
})


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
 
  const db = getFirestore(app);
//   for same id
// Get a list of cities from your database
// await addDoc(doc(db, "players", fname),{
//     firstName: fname,
//     lastName: lname,
//     Age: age,
//     Score: score
// });

// for auto generated id
const newPlayer = doc(collection(db, "players"));
await setDoc(newPlayer, {
    firstName: fname,
    lastName: lname,
    Age: age,
    Score: score
});
