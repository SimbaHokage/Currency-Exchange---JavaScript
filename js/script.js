const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

// --header 'apikey: YOUR API KEY'
// 3DOAi22jydTkQHUZN9Eq8U0GF2rU1avS

const calculate = () => {
    const URL = `https://api.apilayer.com/exchangerates_data/convert?to=${currencyTwo.value}&from=${currencyOne.value}&amount=1`;
	fetch(URL, {
		method: 'GET',
		redirect: 'follow',
		headers: {
			apikey: '3DOAi22jydTkQHUZN9Eq8U0GF2rU1avS',
		},
	})
		.then((res) => res.json())
		.then((data) => {

            const resultOfOne = data.result
            const from = data.query.from
            const to = data.query.to

            rateInfo.textContent = `1 ${from} = ${resultOfOne.toFixed(4)} ${to}`

            const totalResult = parseFloat(amountOne.value) * resultOfOne
            amountTwo.value = totalResult.toFixed(2)
        });
};

const swap = () => {
    const tempCurrency = currencyOne.value
    currencyOne.value = currencyTwo.value
    currencyTwo.value = tempCurrency
    calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)