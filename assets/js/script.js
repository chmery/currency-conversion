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

const switchIcon = (x) => {
    if(x.getAttribute('src') == arrowDown) {
        x.src = arrowUp;
    } else {
        x.src = arrowDown;
    }
}

selectOne.addEventListener('click', function(){switchIcon(selectImgOne)});
selectTwo.addEventListener('click', function(){switchIcon(selectImgTwo)});

window.addEventListener('click', function(e){
    const imgOneSrc = selectImgOne.getAttribute('src');
    const imgTwoSrc = selectImgTwo.getAttribute('src');

    if(e.target != selectOne && e.target == selectTwo && imgTwoSrc == arrowUp) {
        selectImgOne.src = arrowDown;
    } else if(e.target != selectTwo && e.target == selectOne && imgTwoSrc == arrowUp) {
        selectImgTwo.src = arrowDown;
    } else if(e.target != selectOne && e.target != selectTwo) {
        selectImgOne.src = arrowDown;
        selectImgTwo.src = arrowDown;
    }
})

const switchCurrencies = () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
}

switchBtn.addEventListener('click', function(){switchCurrencies()})

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