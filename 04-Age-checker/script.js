document.getElementById('checkAgeBtn').addEventListener('click', function() {
    const input = document.getElementById('ageInput').value;
    const outputDiv = document.getElementById('output');

    if (input === '') {
        outputDiv.textContent = 'Please enter an age value.';
        return;
    }

    const age = Number(input);

    if (age < 0 || age > 120 || !Number.isInteger(age)) {
        outputDiv.textContent = 'Please enter a realistic whole number.';
        return;
    }

    let category = '';
    if (age <= 12) {
        category = 'Child';
    } else if (age <= 19) {
        category = 'Teenager';
    } else if (age <= 64) {
        category = 'Adult';
    } else {
        category = 'Senior';
    }

    outputDiv.textContent = `Category: ${category}`;
});
