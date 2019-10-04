class LoanCalculator {
  constructor(amount, interestRate, timePeriod) {
    this._amount = parseFloat(amount);
    this._interestRate = parseFloat(interestRate) / 100 / 12;
    this._timePeriod = parseFloat(timePeriod) * 12;
  }

  monthly() {
    let x = Math.pow(1 + this._interestRate, this._timePeriod);
    let monthlyVar = (this._amount * x * this._interestRate) / (x - 1);
    return monthlyVar;
  }

  monthlyPayment() {
    return this.monthly();
  }

  totalPayment() {
    return (this.monthly() * this._timePeriod);
  }

  totalInterest() {
    return ((this.monthly() * this._timePeriod) - this._amount);
  }
}

const loanCalculator = new LoanCalculator(10000, 3, 1);

console.log(loanCalculator);
console.log(loanCalculator.monthly().toFixed(2));
console.log(loanCalculator.monthlyPayment().toFixed(2));
console.log(loanCalculator.totalPayment().toFixed(2));
console.log(loanCalculator.totalInterest().toFixed(2));