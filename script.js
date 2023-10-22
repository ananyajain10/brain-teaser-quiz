function saveUserDetails(){
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;

    if (fname && lname && age){
        const userDetails = {
            fname: fname,
            lname: lname,
            age: age
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        window.location.href = "quiz-details.html";
    
    } else{
        alert("Please fill all the required data.");
    }
}

document.getElementById("saveBtn").addEventListener("click",saveUserDetails);