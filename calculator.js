const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const result = document.getElementById('result')

function clearInput() {
    number1.value = ''
    number2.value = ''
}

function add() {
    const resultAdd = +number1.value + +number2.value
    result.innerHTML = resultAdd
    clearInput()
}

function subtract() {
    const resultSubtract = number1.value - number2.value
    result.innerHTML = resultSubtract
    clearInput()
}

function multiply() {
    const resultMultiply = number1.value * number2.value
    result.innerHTML = resultMultiply
    clearInput()
}

function divide() {
    const resultDivide = number1.value / number2.value
    result.innerHTML = resultDivide
    clearInput()
}