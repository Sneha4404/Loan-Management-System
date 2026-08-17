const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const loan = {
        name: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        loanType: document.getElementById("loanType").value,
        amount: Number(document.getElementById("loanAmount").value),
        duration: Number(document.getElementById("loanDuration").value),
        annualIncome: Number(document.getElementById("annualIncome").value),
        purpose: document.getElementById("purpose").value,
        status: "Pending"
    };

    if (
        loan.name === "" ||
        loan.email === "" ||
        loan.phone === "" ||
        loan.amount === 0 ||
        loan.duration === 0 ||
        loan.annualIncome === 0 ||
        loan.purpose === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    fetch("http://127.0.0.1:8080/loans", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loan)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to submit loan application");
        }
        return response.json();
    })
    .then(data => {
        alert("Loan Application Submitted Successfully!");
        window.location.href = "my-loans.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong while submitting the loan application.");
    });

});