// Get the logged-in user's email
const loggedInUser = localStorage.getItem("loggedInUser");

// Get the registered user
const user = JSON.parse(localStorage.getItem("user"));

// Display user details
if (user && user.email === loggedInUser) {

    document.getElementById("name").innerText = user.fullName;
    document.getElementById("email").innerText = user.email;
    document.getElementById("phone").innerText = user.phone;

}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

});