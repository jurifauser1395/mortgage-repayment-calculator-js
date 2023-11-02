let principalLoanAmount;
let monthlyInterestRate;
let numberOfMonthlyPayments;
let numberOfYearsPayments;

principalLoanAmount = 500000;
monthlyInterestRate = 5;
numberOfYearsPayments = 30;
numberOfMonthlyPayments = numberOfYearsPayments * 12;

function monthlyMortgagePayment(P, r, n) {
    let M;
    let x = r/100/12
    M = (P * x) / (1 - Math.pow(1 + x, -n));
    return M.toFixed(2);
}

const monthlyPayment = monthlyMortgagePayment(principalLoanAmount, monthlyInterestRate, numberOfMonthlyPayments);
console.log("$" + monthlyPayment);