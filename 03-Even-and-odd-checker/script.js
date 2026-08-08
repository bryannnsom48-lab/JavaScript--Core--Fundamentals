document.getElementById('checkBtn').addEventListener('click', function() {
    const value = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    if (value === "") {
        resultElement.textContent = "Error: Input space cannot be blank.";
        return;
    }

    const number = parseInt(value, 10);
    if (isNaN(number)) {
        resultElement.textContent = "Error: Please enter a clean integer.";
        return;
    }

    const output = (number % 2 === 0) ? "Even" : "Odd";
    resultElement.textContent = `Result: The number is ${output}.`;
});
