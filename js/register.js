const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(
        fullName === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ){
        alert("Please fill all the fields.");
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        return;
    }

    const user = {
        fullName,
        email,
        phone,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

});