document.getElementById('calcBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Error: Please enter valid numbers.";
        return;
    }

    let output;
    switch (operator) {
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '*': output = num1 * num2; break;
        case '/': 
            output = num2 === 0 ? "Cannot divide by zero" : num1 / num2; 
            break;
        default: output = "Invalid operation";
    }

    resultElement.textContent = `Result: ${output}`;
});
