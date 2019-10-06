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