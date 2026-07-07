const tableBody = document.querySelector("tbody");

let loans = JSON.parse(localStorage.getItem("loans")) || [];

displayLoans();

function displayLoans(){

    tableBody.innerHTML = "";

    loans.forEach((loan, index)=>{

        tableBody.innerHTML += `

        <tr>

            <td>${loan.fullName}</td>
            <td>${loan.email}</td>
            <td>${loan.phone}</td>
            <td>${loan.loanType}</td>
            <td>₹${loan.loanAmount}</td>
            <td>${loan.loanDuration} Months</td>
            <td>₹${loan.annualIncome}</td>
            <td>${loan.purpose}</td>
            <td>${loan.status}</td>
            <td>${loan.status}</td>
            
            <td>
    <button onclick="editLoan(${index})">
        Edit
    </button>

    <button onclick="deleteLoan(${index})">
        Delete
    </button>
</td>

        </tr>

        `;

    });

}

function deleteLoan(index) {

    const confirmDelete = confirm("Are you sure you want to delete this loan?");

    if (!confirmDelete) {
        return;
    }

    loans.splice(index, 1);

    localStorage.setItem("loans", JSON.stringify(loans));

    displayLoans();

}

function editLoan(index) {

    const loan = loans[index];

    const newAmount = prompt("Enter new loan amount:", loan.loanAmount);

    if (newAmount === null || newAmount === "") {
        return;
    }

    loan.loanAmount = newAmount;

    localStorage.setItem("loans", JSON.stringify(loans));

    displayLoans();

}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const searchValue = searchInput.value.toLowerCase();

    const filteredLoans = loans.filter(function(loan){

        return (

            loan.fullName.toLowerCase().includes(searchValue) ||

            loan.loanType.toLowerCase().includes(searchValue)

        );

    });

    displayFilteredLoans(filteredLoans);

});

function displayFilteredLoans(filteredLoans){

    tableBody.innerHTML = "";

    filteredLoans.forEach((loan, index)=>{

        tableBody.innerHTML += `

        <tr>

            <td>${loan.fullName}</td>
            <td>${loan.email}</td>
            <td>${loan.phone}</td>
            <td>${loan.loanType}</td>
            <td>₹${loan.loanAmount}</td>
            <td>${loan.loanDuration} Months</td>
            <td>₹${loan.annualIncome}</td>
            <td>${loan.purpose}</td>
            <td>${loan.status}</td>

            <td>

                <button onclick="editLoan(${index})">Edit</button>

                <button onclick="deleteLoan(${index})">Delete</button>

            </td>

        </tr>

        `;

    });

}