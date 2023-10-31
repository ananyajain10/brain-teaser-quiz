function saveUserDetails(){
    const fname = document.getElementById("firstname").value;
    const lname = document.getElementById("lastname").value;
    // const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    if (fname && lname && email){
        const userDetails = {
            fname: fname,
            lname: lname,
            
            email:email
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        window.location.href = "quiz-details.html";
    
    } else{
        alert("Please fill all the required data.");
    }
}

document.getElementById("saveBtn").addEventListener("click",saveUserDetails);