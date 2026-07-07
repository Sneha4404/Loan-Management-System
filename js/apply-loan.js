const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const loan = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        loanType: document.getElementById("loanType").value,
        loanAmount: document.getElementById("loanAmount").value,
        loanDuration: document.getElementById("loanDuration").value,
        annualIncome: document.getElementById("annualIncome").value,
        purpose: document.getElementById("purpose").value,
        status: "Pending"
    };

    if(
        loan.fullName === "" ||
        loan.email === "" ||
        loan.phone === "" ||
        loan.loanAmount === "" ||
        loan.loanDuration === "" ||
        loan.annualIncome === "" ||
        loan.purpose === ""
    ){
        alert("Please fill all the fields.");
        return;
    }

    let loans = JSON.parse(localStorage.getItem("loans")) || [];

    loans.push(loan);

    localStorage.setItem("loans", JSON.stringify(loans));

    alert("Loan Application Submitted Successfully!");

    window.location.href = "my-loans.html";

});