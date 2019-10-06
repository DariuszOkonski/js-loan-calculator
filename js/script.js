const dom = {
  errorNode: document.querySelector('.error-js'),
  inputLoanAmount: document.querySelector('.input-loan-amount-js'),
  inputInterest: document.querySelector('.input-interest-js'),
  inputYearsToPay: document.querySelector('.input-years-to-pay-js'),

  btnCalculate: document.querySelector('.btn-calculate-js'),
  btnClear: document.querySelector('.btn-clear-js'),
  form: document.querySelector('.form-js'),

  loadingContainer: document.querySelector('.loading-js'),
  resultsContainer: document.querySelector('.results-js'),

  outputMonthlyPayment: document.querySelector('.output-monthly-payment-js'),
  outputTotalPayment: document.querySelector('.output-total-payment-js'),
  outputTotalInterest: document.querySelector('.output-total-intrest-js'),
}

const createLoan = (amount, interestRate, timePeriod) => {
  const loanCalculator = new LoanCalculator(10000, 3, 1);
  console.log(loanCalculator.monthly().toFixed(2));
  console.log(loanCalculator.monthlyPayment().toFixed(2));
  console.log(loanCalculator.totalPayment().toFixed(2));
  console.log(loanCalculator.totalInterest().toFixed(2));
}

const displayOffAll = () => {
  dom.errorNode.style.display = 'none';
  dom.btnClear.style.display = 'none';
  dom.loadingContainer.style.display = 'none';
  dom.resultsContainer.style.display = 'none';
}

const takeInputData = () => {
  let amount = parseFloat(dom.inputLoanAmount.value);
  let interestRate = parseFloat(dom.inputInterest.value);
  let timePeriod = parseFloat(dom.inputYearsToPay.value);
  let valid = false;

  if (isNaN(amount) || isNaN(interestRate) || isNaN(timePeriod)) {
    valid = false;
  } else if (amount < 1 || amount > 100000 || interestRate < 0 || interestRate > 1000 || timePeriod < 0 || timePeriod > 50) {
    valid = false;
  } else {
    valid = true;
  }

  return {
    amount,
    interestRate,
    timePeriod,
    valid
  }
}

const displayErrorOn = () => {
  dom.errorNode.style.display = 'block';
  dom.inputLoanAmount.setAttribute('disabled', 'on');
  dom.inputLoanAmount.value = '';
  dom.inputInterest.setAttribute('disabled', 'on');
  dom.inputInterest.value = '';
  dom.inputYearsToPay.setAttribute('disabled', 'on');
  dom.inputYearsToPay.value = '';
  dom.btnCalculate.setAttribute('disabled', 'on');
  dom.btnCalculate.style.backgroundColor = '#6C757D';

  setTimeout(() => {
    displayErrorOff();
  }, 2000);
}

const displayErrorOff = () => {
  dom.errorNode.style.display = 'none';
  dom.inputLoanAmount.removeAttribute('disabled');
  dom.inputInterest.removeAttribute('disabled');
  dom.inputYearsToPay.removeAttribute('disabled');
  dom.btnCalculate.removeAttribute('disabled');
  dom.btnCalculate.style.backgroundColor = '#23272B';
}

const calculate = (e) => {
  e.preventDefault();

  const inputData = takeInputData();

  if (!inputData.value) {
    displayErrorOn();
  } else {
    console.log(inputData);
  }


  console.log('calculate');
}



displayOffAll();
dom.form.addEventListener('submit', calculate);