//Declare the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
function monthlyMortgagePayment(P, r, n) {
    let M;
    let x = r / 100 / 12;
    M = (P * x) / (1 - Math.pow(1 + x, -n));
    return M.toFixed(2);
}
//Declare the monthlyAmortizationSchedule function to display all costs in detail
/*function monthlyAmortizationSchedule (x) {
    if (x <= 0) {
        let tableResult = document.getElementById("tableResult")
        tableResult.textContent = "0"
    } else {

        let tableResult = document.getElementById("tableResult")
        tableResult.textContent = principalLoan
    }
}*/

//Initiate the program
let calculationButton = document.getElementById("calculateButton");
calculationButton.addEventListener("click", outputCalResult);

//Define the outputCalResult function
function outputCalResult (){

    //Define variables
    let principalLoan;
    let monthlyInterestRate;
    let numberOfYearsPayments;

    //initialise calculation variables
    principalLoan = document.getElementById("principalLoan").value;
    monthlyInterestRate = document.getElementById("monthlyInterestRate").value;
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
    if(isNaN(monthlyInterestRate)) {
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
        resultMonthlyPayment.textContent = "$" + monthlyPayment;
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
}




