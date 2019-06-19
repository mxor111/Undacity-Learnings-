uiz
Using the given object:

add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function SummaryAccountPrinting() {
            return "Welcome!\nYour balance is currently $1000 and your interest rate is 1%.";
};

console.log(savingsAccount.printAccountSummary());


Your code should have a variable savingsAccount
The variable savingsAccount should be an object
Your savingsAccount object should have a balance property
Your savingsAccount object should have a interestRatePercent property
Your savingsAccount object should have a printAccountSummary() method
Your printAccountSummary() method should return the correct account message

NEW CODE:


printAccountSummary: function SummaryAccountPrinting() {

        return "Welcome!\nYour balance is currently $1000 and your interest rate is 1%.";
