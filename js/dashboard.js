const loans = JSON.parse(localStorage.getItem("loans")) || [];

document.getElementById("totalLoans").innerText = loans.length;

const pendingLoans = loans.filter(loan => loan.status === "Pending").length;
document.getElementById("pendingLoans").innerText = pendingLoans;

let totalAmount = 0;

loans.forEach(function(loan) {
    totalAmount += Number(loan.loanAmount);
});

document.getElementById("totalAmount").innerText = "₹" + totalAmount.toLocaleString();

const recentLoans = document.getElementById("recentLoans");

loans.forEach((loan, index) => {

    recentLoans.innerHTML += `
        <tr>
            <td>LN${index + 1}</td>
            <td>₹${Number(loan.loanAmount).toLocaleString()}</td>
            <td>${loan.status}</td>
        </tr>
    `;

});