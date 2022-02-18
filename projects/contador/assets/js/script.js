let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

let adicionar = document.getElementById('adicionar')
let subtrair = document.getElementById('subtrair')

let positiveNumber = 15
let negativeNumber = -10

function increment() {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black'
    }

    if (currentNumber === positiveNumber) {
        adicionar.disabled = true
        alert(`O limite de incremento é ${positiveNumber}`)
    }
    
    subtrair.disabled = false
}

function decrement() {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red'
    }

    if (currentNumber === negativeNumber ) {
        subtrair.disabled = true
        alert(`O limite de decremento é ${negativeNumber}`)
    }

    adicionar.disabled = false

}

