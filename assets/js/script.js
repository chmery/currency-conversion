const fromCurrencySelect = document.querySelector('#from');
const toCurrencySelect = document.querySelector('#to');
const amount = document.querySelector('#amount');
const currencyExchangeResult = document.querySelector('#currency-exchange-result');

const switchBtn = document.querySelector('.exchange__switch-btn');
const exchangeBtn = document.querySelector('.exchange__btn');

const fromCurrencySelectImg = document.querySelector('#select-img-one');
const toCurrencySelectImg = document.querySelector('#select-img-two');

const arrowUp = "assets/images/up.svg";
const arrowDown = "assets/images/down.svg";

const switchSelectIcon = () => {
    if (document.activeElement === fromCurrencySelect) {
        fromCurrencySelectImg.src = arrowUp;
        toCurrencySelectImg.src = arrowDown;
    } else if (document.activeElement === toCurrencySelect) {
        fromCurrencySelectImg.src = arrowDown;
        toCurrencySelectImg.src = arrowUp;
    } else {
        fromCurrencySelectImg.src = arrowDown;
        toCurrencySelectImg.src = arrowDown;
    }
};

const lostFocus = select => select.blur();

window.addEventListener('click', switchSelectIcon);

const switchCurrencies = () => {
    [fromCurrencySelect.value, toCurrencySelect.value] = [toCurrencySelect.value, fromCurrencySelect.value];
    exchangeCurrencies();
};

const exchangeCurrencies = () => {
    const fromCurrencySelectValue = (fromCurrencySelect.value).toLowerCase();
    const toCurrencySelectValue = (toCurrencySelect.value).toLowerCase();

    const exchangeOperation = data => (data[toCurrencySelectValue] * amount.value).toFixed(2);

    if (amount.value == 0){
        alert("The amount field can't be empty!");
    } else {         
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + fromCurrencySelectValue + '/' + toCurrencySelectValue + '.json')
            .then(response => response.json())
            .then(data => {
                let exchangeValue = exchangeOperation(data);
                currencyExchangeResult.value = exchangeValue;
            });
    }
};

switchBtn.addEventListener('click', switchCurrencies);
exchangeBtn.addEventListener('click', exchangeCurrencies);

    
