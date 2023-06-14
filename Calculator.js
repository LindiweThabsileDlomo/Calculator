document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operation = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const clickedValue = button.textContent;

            if (clickedValue === 'C') {
                clearDisplay();
            } else if (clickedValue === '=') {
                performOperation();
            } else {
                updateDisplay(clickedValue);
            }
        });
    });

    function updateDisplay(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operation = '';
        display.value = '';
    }

    function performOperation() {
        previousInput = parseFloat(previousInput);
        currentInput = parseFloat(currentInput);

        if (operation === '+') {
            currentInput = previousInput + currentInput;
        } else if (operation === '-') {
            currentInput = previousInput - currentInput;
        } else if (operation === '*') {
            currentInput = previousInput * currentInput;
        } else if (operation === '/') {
            currentInput = previousInput / currentInput;
        }

        display.value = currentInput;
        previousInput = '';
        operation = '';
        currentInput = '';
    }
});
