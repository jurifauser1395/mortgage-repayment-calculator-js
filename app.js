//Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
function monthlyMortgagePayment(P, r, n) {
    return  (P * r) / (1 - Math.pow(1 + r, -n));
}

//Declare the monthlyAmortizationSchedule function to display all costs in detail
function monthlyAmortizationSchedule(P, r, n, M, i) {
    let tableResult = document.getElementById("tableResult1");
    if (P <= 0 || n <= 0) {
        tableResult.textContent = "0";
    } else {
        let monthlyInterestPayment = P * r;
        tableResult.textContent += i + ". Month: " + "$" + monthlyInterestPayment.toFixed(1) + "," + "\n";

        let outstandingPrincipalBalance = P - (M - monthlyInterestPayment);

        if (outstandingPrincipalBalance > 0) {
            monthlyAmortizationSchedule(outstandingPrincipalBalance, r, n - 1, M, i + 1);
        }
    }
}

//Initiate the program
let calculationButton = document.getElementById("calculateButton");
calculationButton.addEventListener("click", outputCalResult);

//Define the outputCalResult function
function outputCalResult (){

    //Declare variables
    let principalLoan;
    let yearlyInterestRate;
    let numberOfYearsPayments;

    //initialise calculation variables
    principalLoan = document.getElementById("principalLoan").value;
    yearlyInterestRate = document.getElementById("yearlyInterestRate").value;
    let monthlyInterestRate = yearlyInterestRate / 100 / 12;
    numberOfYearsPayments = document.getElementById("numberOfYearsPayments").value;
    let totalNumberOfPayments = numberOfYearsPayments * 12;


    // Clear all exclamation marks initially
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    error1.textContent = "";
    error2.textContent = "";
    error3.textContent = "";

    //Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(principalLoan)) {
        let error1 = document.getElementById("error1");
        error1.textContent = "!";
    }

    //Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(yearlyInterestRate)) {
        let error2 = document.getElementById("error2");
        error2.textContent = "!";
    }

    //Printout exclamation mark right next to the field if entry is missing or wrong
    if(isNaN(numberOfYearsPayments)) {
        let error3 = document.getElementById("error3");
        error3.textContent = "!";
    }

    //Call monthlyMortgagePayment function to store result in a variable
    let monthlyPayment = monthlyMortgagePayment(principalLoan, monthlyInterestRate, totalNumberOfPayments);

    //Calculate total interest paid and total payment
    let totalPayment = monthlyPayment * totalNumberOfPayments;
    let totalInterestPaid = totalPayment - principalLoan;

    //Pass the results into the browser
    if(!isNaN(monthlyPayment)) {
        //Pass the result of the monthly payments
        let resultMonthlyPayment =  document.getElementById("resultMonthly");
        resultMonthlyPayment.textContent = "$" + monthlyPayment.toFixed(2);
        //Pass the result of the total interest paid
        let resultTotalInterestPayed = document.getElementById("resultTotalInterestPaid");
        resultTotalInterestPayed.textContent = "$" + totalInterestPaid.toFixed(2);
        //Pass the result of the total payment
        let resultTotalPayment = document.getElementById("resultTotalPayment");
        resultTotalPayment.textContent = "$" + totalPayment.toFixed(2);

    } else {
        //Printout error message in the result tag
        let result = document.getElementById("resultMonthly");
        result.textContent = "Please make sure all fields are filled with plausible numbers!";
    }

    let tableResult = document.getElementById("tableResult1");
    tableResult.textContent = " ";

    //initiate the monthlyAmortizationSchedule function
    monthlyAmortizationSchedule(principalLoan, monthlyInterestRate, totalNumberOfPayments, monthlyPayment, 1);
}




