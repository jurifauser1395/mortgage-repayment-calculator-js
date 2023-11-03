//Define variables
let principalLoan;
let monthlyInterestRate;
let numberOfYearsPayments;

//Define the monthlyMortgagePayment function to calculate the monthly payment to the second decimal number
function monthlyMortgagePayment(P, r, n) {
    let M;
    let x = r / 100 / 12
    M = (P * x) / (1 - Math.pow(1 + x, -n));
    return M.toFixed(2);
}

//Initiate the program
let calculationButton = document.getElementById("calculateButton")
calculationButton.addEventListener("click", outputCalResult);

//Define the outputCalResult function
function outputCalResult (){

    //initialise calculation variables
    principalLoan = parseFloat(document.getElementById("principalLoan").value);
    monthlyInterestRate = parseFloat(document.getElementById("monthlyInterestRate").value);
    numberOfYearsPayments = parseFloat(document.getElementById("numberOfYearsPayments").value);
    let totalNumberOfPayments;
    totalNumberOfPayments = numberOfYearsPayments * 12;

    //call monthlyMortgagePayment function to store result in a variable
    const monthlyPayment = monthlyMortgagePayment(principalLoan, monthlyInterestRate, totalNumberOfPayments);

    //check if the calculated value is NaN
    if(isNaN(monthlyPayment)) {

        //Printout error message in the result tag
        let result = document.getElementById("result");
        result.textContent = "Please make sure all fields are filled with plausible numbers";

        //Printout exclamation mark right next to the field
        if(isNaN(principalLoan)) {
            let error1 = document.getElementById("error1");
            error1.textContent = "!"
        }

        //Printout exclamation mark right next to the field
        if(isNaN(monthlyInterestRate)) {
            let error2 = document.getElementById("error2");
            error2.textContent = "!"
        }

        //Printout exclamation mark right next to the field
        if(isNaN(numberOfYearsPayments)) {
            let error3 = document.getElementById("error3");
            error3.textContent = "!"
        }

    }

    //Pass the result into the browser
    else{
        //START PROGRAMMING HERE NEXT TIME
        let result =  document.getElementById("result");
        result.textContent = "$" + monthlyPayment;
    }
}




