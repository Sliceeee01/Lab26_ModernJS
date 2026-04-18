const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const resultValue = document.getElementById('resultValue');
const errorDiv = document.getElementById('amountError');

function convert() {
    let amount = amountInput.value;
    
    if (amount === "") {
        errorDiv.classList.add('show');
        resultDiv.classList.remove('show');
        return;
    }
    errorDiv.classList.remove('show');
    
    let kurs = 0;
    let valuta = currencySelect.value;

    if (valuta === "USD") kurs = 96.50;
    if (valuta === "EUR") kurs = 104.20;
    if (valuta === "GBP") kurs = 124.30;
    if (valuta === "CNY") kurs = 13.50;
    if (valuta === "JPY") kurs = 0.64;
    
    let result = amount * kurs;
    
    resultValue.innerHTML = amount + " " + valuta + " = " + result.toFixed(2) + " ₽";
    resultDiv.classList.add('show');
}
convertBtn.onclick = convert;