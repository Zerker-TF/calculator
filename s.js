document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display-string');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let shouldResetDisplay = false;

    // Arithmetic operations
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) return 'Error';
        return a / b;
    }

    function operate(op, a, b) {
        switch (op) {
            case '+': return add(a, b);
            case '−': return subtract(a, b);
            case '×': return multiply(a, b);
            case '÷': return divide(a, b);
            default: return b;
        }
    }

    function updateDisplay(value) {
        display.textContent = value || '0';
    }

    function clearAll() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        shouldResetDisplay = false;
        updateDisplay('0');
    }

    function calculate() {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(currentInput);

        if (isNaN(num1) || isNaN(num2)) return;

        const result = operate(operator, num1, num2);
        currentInput = result.toString();
        updateDisplay(currentInput);
        operator = '';
        firstOperand = '';
        shouldResetDisplay = true;
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                if (shouldResetDisplay) {
                    currentInput = '';
                    shouldResetDisplay = false;
                }

                if (value === '.' && currentInput.includes('.')) return;

                currentInput += value;
                updateDisplay(currentInput);
            } else if (value === 'AC') {
                clearAll();
            } else if (value === '=') {
                calculate();
            } else {
                if (currentInput === '') return;
                if (firstOperand && operator && !shouldResetDisplay) {
                    calculate();
                }
                firstOperand = currentInput;
                operator = value;
                shouldResetDisplay = true;
            }
        });
    });
});
