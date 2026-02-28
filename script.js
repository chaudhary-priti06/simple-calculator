let display = document.getElementById("display");

let currentInput = "0";
let previousInput = "";
let operator = null;
let shouldReset = false;

function appendNumber(num) {
    if (shouldReset) {
        currentInput = num;
        shouldReset = false;
    } else {
        if (currentInput === "0" && num !== ".") {
            currentInput = num;
        } else if (num === "." && currentInput.includes(".")) {
            return;
        } else {
            currentInput += num;
        }
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null && !shouldReset) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    shouldReset = true;
}

function calculate() {
    if (operator === null) return;

    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result;

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = current === 0 ? "Error" : prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    shouldReset = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    shouldReset = false;
    updateDisplay();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
