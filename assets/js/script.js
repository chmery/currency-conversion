const fromCurrency = document.querySelector('#from');
const toCurrency = document.querySelector('#to');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

const switchBtn = document.querySelector('.converter__switch-btn');

const selectOne = document.querySelector('.converter__select-one');
const selectTwo = document.querySelector('.converter__select-two');
const selectImgOne = document.querySelector('#select-img-one');
const selectImgTwo = document.querySelector('#select-img-two');

const arrowUp = "assets/images/up.svg";
const arrowDown = "assets/images/down.svg";

const switchIcon = () => {
    if (document.activeElement === selectOne) {
        selectImgOne.src = arrowUp
        selectImgTwo.src = arrowDown
    } else if (document.activeElement === selectTwo) {
        selectImgOne.src = arrowDown
        selectImgTwo.src = arrowUp
    } else {
        selectImgOne.src = arrowDown
        selectImgTwo.src = arrowDown
    }
} 

const lostFocus = (x) => {
    x.blur()
}

window.addEventListener('click', switchIcon)

const switchCurrencies = () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
}

switchBtn.addEventListener('click', switchCurrencies)

const convertCurrencies = () => {
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;

    const requestURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + fromCurrencyValue.toLowerCase() + '/' + toCurrencyValue.toLowerCase() + '.json';
    const request = new XMLHttpRequest();
    request.open ('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const response = request.response;
        value = (response[toCurrencyValue.toLowerCase()] * amount.value).toFixed(2);
        result.value = value;
    }  
}