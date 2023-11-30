// Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
function monthlyMortgagePayment(P, r, n) {
    // P is the principal loan amount
    // r is the monthly interest rate
    // n is the number of payments

    // The formula to calculate the monthly payment is (P * r) / (1 - (1 + r) ^ -n)
    // The Math.pow function is used to calculate (1 + r) to the power of -n
    return  (P * r) / (1 - Math.pow(1 + r, -n));
}
// Declare and initialize yearlyInterestTotal and yearlyPrincipalPaid
let yearlyInterestTotal = 0; // Initialize the total yearly interest to 0
let yearlyPrincipalTotal = 0; // Initialize the total yearly principal to 0

// Declare the monthlyAmortizationSchedule function to display all costs in detail
function monthlyAmortizationSchedule(P, r, n, M, i) {
    // P is the principal loan amount
    // r is the monthly interest rate
    // n is the number of payments
    // M is the monthly mortgage payment

    // Declare and initialize tableResult
    let tableResult = document.getElementById("tableResult"); // Get the table element from the HTML document

    // Declare, initialize and add headers to the table
    if (i === 1) { // Check if it's the first iteration
        let headerRow = tableResult.insertRow(0); // Create a new row at the beginning of the table
        let headerCell0 = headerRow.insertCell(0) // Create a new cell in the row
        let headerCell1 = headerRow.insertCell(1) // Create a new cell in the row
        let headerCell2 = headerRow.insertCell(2); // Create a new cell in the row
        let headerCell3 = headerRow.insertCell(3) // Create a new cell in the row
        headerCell0.innerHTML = "<th>Year|</th>"; // Set the content of the cell to the header
        headerCell1.innerHTML = "<th>Yearly Interest Total|</th>"; // Set the content of the cell to the header
        headerCell2.innerHTML = "<th>Yearly Principal Total|</th>"; // Set the content of the cell to the header
        headerCell3.innerHTML = "<th>Remaining Principal|</th>"; // Set the content of the cell to the header

    }
    // Calculate yearlyInterestPayment and yearlyPrincipalTotal in the underlying iteration
    if (P > 0 || n > 0) { // Check if the principal or the number of payments is greater than 0
        let monthlyInterestPayment = P * r; // Calculate the monthly interest payment
        let monthlyPrincipalPaid = M - monthlyInterestPayment; // Calculate the monthly principal paid
        let outstandingPrincipalBalance = P - monthlyPrincipalPaid; // Calculate the outstanding principal balance
        yearlyInterestTotal += monthlyInterestPayment; // Add the monthly interest to the yearly total
        yearlyPrincipalTotal += monthlyPrincipalPaid; // Add the monthly principal to the yearly total

        // Pass the calculated values into the table
        if (i % 12 === 0) { // Check if a year has passed
            let row = tableResult.insertRow(-1); // Create a new row at the end of the table
            let cell0 = row.insertCell(-1)  // Create a new cell in the row
            let cell1 = row.insertCell(-1); // Create a new cell in the row
            let cell2 = row.insertCell(-1); // Create a new cell in the row
            let cell3 = row.insertCell(-1); // Create a new cell in the row
            cell0.textContent =  i / 12 + "."; // Year of the calculation
            cell1.textContent = "$" + yearlyInterestTotal.toFixed(2); // Set the content of the cell to the yearly interest total
            cell2.textContent = "$" + yearlyPrincipalTotal.toFixed(2); // Set the content of the cell to the yearly principal total
            cell3.textContent = "$" + outstandingPrincipalBalance.toFixed(2); // Set the content of the cell to the yearly principal total
            yearlyInterestTotal = 0; // Reset the yearly interest total for the next year
            yearlyPrincipalTotal = 0; // Reset the yearly principal total for the next year

        }
        // Initiate recursion
        if (outstandingPrincipalBalance > 0) { // Check if there is still an outstanding principal balance
            monthlyAmortizationSchedule(outstandingPrincipalBalance, r, n - 1, M, i + 1); // Call monthlyAmortizationSchedule recursively while replacing the principal loan amount with the outstanding principal balance
        }
    }
}

// Declare and Initiate the entrypoint
let calculationButton = document.getElementById("calculateButton"); // Get the button element with id "calculateButton"
calculationButton.addEventListener("click", outputCalResult); // Add a click event listener to the button that calls the outputCalResult function

// Define the outputCalResult function
function outputCalResult (){

    // Declare calculation variables
    let principalLoan; // Declare variable for the principal loan amount
    let yearlyInterestRate; // Declare variable for the yearly interest rate
    let numberOfYearsPayments; // Declare variable for the number of years of payments

    // Initialise calculation variables
    principalLoan = document.getElementById("principalLoan").value; // Get the value of the input field with id "principalLoan"
    yearlyInterestRate = document.getElementById("yearlyInterestRate").value; // Get the value of the input field with id "yearlyInterestRate"
    let monthlyInterestRate = yearlyInterestRate / 100 / 12; // Calculate the monthly interest rate
    numberOfYearsPayments = document.getElementById("numberOfYearsPayments").value; // Get the value of the input field with id "numberOfYearsPayments"
    let totalNumberOfPayments = numberOfYearsPayments * 12; // Calculate the total number of payments

    // Declare, initialize and clear all exclamation marks initially
    let error1 = document.getElementById("error1"); // Get the element with id "error1"
    let error2 = document.getElementById("error2"); // Get the element with id "error2"
    let error3 = document.getElementById("error3"); // Get the element with id "error3"
    let error4 = document.getElementById("error4"); // Get the element with id "error4"
    error1.textContent = ""; // Clear the text content of error1
    error2.textContent = ""; // Clear the text content of error2
    error3.textContent = ""; // Clear the text content of error3
    error4.textContent = ""; // Clear the text content of error4

    // Declare, initialize and clear all fields marks initially
    let resultMonthlyPayment =  document.getElementById("resultMonthly"); // Get the element with id "resultMonthly"
    let resultTotalInterestPayed = document.getElementById("resultTotalInterestPaid"); // Get the element with id "resultTotalInterestPaid"
    let resultTotalPayment = document.getElementById("resultTotalPayment"); // Get the element with id "resultTotalPayment"
    let tableResult = document.getElementById("tableResult"); // Get the element with id "tableResult"
    resultTotalInterestPayed.textContent = ""; // Clear the text content of resultTotalInterestPayed
    resultMonthlyPayment.textContent = ""; // Clear the text content of resultMonthlyPayment
    resultTotalPayment.textContent = ""; // Clear the text content of resultTotalPayment
    tableResult.textContent = ""; // Clear the text content of tableResult

    // Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(principalLoan)) { // Check if the principal loan amount is not a number
        let error1 = document.getElementById("error1"); // Get the element with id "error1"
        error1.textContent = "!"; // Set the text content of error1 to "!"
    }

    // Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(yearlyInterestRate)) { // Check if the yearly interest rate is not a number
        let error2 = document.getElementById("error2"); // Get the element with id "error2"
        error2.textContent = "!"; // Set the text content of error2 to "!"
    }

    // Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(numberOfYearsPayments)) { // Check if the number of years of payments is not a number
        let error3 = document.getElementById("error3"); // Get the element with id "error3"
        error3.textContent = "!"; // Set the text content of error3 to "!"
    }

    // Declare, initialize monthlyPayment and call monthlyMortgagePayment function to store result in a variable
    let monthlyPayment = monthlyMortgagePayment(principalLoan, monthlyInterestRate, totalNumberOfPayments); // Calculate the monthly payment
    let totalPayment = monthlyPayment * totalNumberOfPayments; // Calculate the total payment
    let totalInterestPaid = totalPayment - principalLoan; // Calculate the total interest paid

    // Pass the results into the browser
    if(!isNaN(monthlyPayment)) { // Check if the monthly payment is a number
        // Pass the result of the monthly payments
        resultMonthlyPayment =  document.getElementById("resultMonthly"); // Get the element with id "resultMonthly"
        resultMonthlyPayment.textContent = "$" + monthlyPayment.toFixed(2); // Set the text content of resultMonthlyPayment to the monthly payment

        // Pass the result of the total interest paid
        resultTotalInterestPayed = document.getElementById("resultTotalInterestPaid"); // Get the element with id "resultTotalInterestPaid"
        resultTotalInterestPayed.textContent = "$" + totalInterestPaid.toFixed(2); // Set the text content of resultTotalInterestPayed to the total interest paid

        // Pass the result of the total payment
        resultTotalPayment = document.getElementById("resultTotalPayment"); // Get the element with id "resultTotalPayment"
        resultTotalPayment.textContent = "$" + totalPayment.toFixed(2); // Set the text content of resultTotalPayment to the total payment

    } else {

        // Printout error message in the error tag
        error4 = document.getElementById("error4"); // Get the element with id "error4"
        error4.textContent = "ERROR: Please make sure all fields are filled with plausible values!"; // Set the text content of result to an error message
    }

    // initiate the monthlyAmortizationSchedule function
    monthlyAmortizationSchedule(principalLoan, monthlyInterestRate, totalNumberOfPayments, monthlyPayment, 1); // Call the monthlyAmortizationSchedule function
}




