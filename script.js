const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {

    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')
    

    const dolarToday = 5.2
    const euroToday = 6.2
    const realToday = 1
    const libraToday = 6.18
    const bitcoinToday = 185.446

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if (currencySelect.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   
    

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')
   
   
    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './img/dolar.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/euro.png'
    }

    if(currencySelect.value == 'libra'){
        currencyName.innerHTML = 'Libra'
        currencyImg.src = './img/libra.png'
    }

    if(currencySelect.value == 'real'){
        currencyName.innerHTML = 'Real'
        currencyImg.src = './img/Real.png'
    }

    if(currencySelect.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/bitcoin.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)

convertButton.addEventListener('click', convertValues)