document.getElementById('convertBtn').addEventListener('click', function() {
    const val = document.getElementById('tempInput').value;
    const type = document.getElementById('conversionType').value;
    const display = document.getElementById('resultDisplay');

    if (val === '') {
        display.textContent = 'Error: Fill in the temperature field.';
        return;
    }

    const temperature = parseFloat(val);
    let convertedValue = 0;
    let unit = '';

    if (type === 'cToF') {
        convertedValue = (temperature * 9 / 5) + 32;
        unit = '°F';
    } else {
        convertedValue = (temperature - 32) * 5 / 9;
        unit = '°C';
    }

    const rounded = Math.round(convertedValue * 100) / 100;
    display.textContent = `Converted: ${rounded}${unit}`;
});
