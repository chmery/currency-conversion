const fromCurrency = document.getElementById('from');
const toCurrency = document.getElementById('to');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

const switchBtn = document.querySelector('.converter__switch-img');

const selectOne = document.querySelector('.converter__select-one');
const selectTwo = document.querySelector('.converter__select-two');
const selectImgOne = document.getElementById('select-img-one');
const selectImgTwo = document.getElementById('select-img-two');


const switchIconOne = () => {
    if(selectImgOne.getAttribute('src') == "assets/images/down.svg") {
        selectImgOne.src = "assets/images/up.svg";
    } else {
        selectImgOne.src = "assets/images/down.svg";
   }
}

const switchIconTwo = () => {
    if(selectImgTwo.getAttribute('src') == "assets/images/down.svg") {
        selectImgTwo.src = "assets/images/up.svg";
    } else {
        selectImgTwo.src = "assets/images/down.svg";
   }
}

selectOne.addEventListener('click', switchIconOne);
selectTwo.addEventListener('click', switchIconTwo);


const switchCurrencies = () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
}

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