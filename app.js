//Initiate the program
document.getElementById("dataEntrance").addEventListener("click", function () {
//Get input values
    let principalLoan = parseFloat(document.getElementById("principalLoan").value);
    let monthlyInterestRate = parseFloat(document.getElementById("monthlyInterestRate").value);
    let numberOfYearsPayments = parseFloat(document.getElementById("numberOfYearsPayments").value);
    let numberOfMonthlyPayments = numberOfYearsPayments * 12;

    //Calculate the monthly payment
    function monthlyMortgagePayment(P, r, n) {
        let M;
        let x = r / 100 / 12
        M = (P * x) / (1 - Math.pow(1 + x, -n));
        return M.toFixed(2);
    }
    //Store result in a variable
    const monthlyPayment = monthlyMortgagePayment(principalLoan, monthlyInterestRate, numberOfMonthlyPayments);
    //Sass the result into the browser
    document.getElementById("result").textContent = "$" + monthlyPayment;
});




