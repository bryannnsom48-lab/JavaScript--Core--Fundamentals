document.getElementById('generateBtn').addEventListener('click', function() {
    const inputField = document.getElementById('baseNumber');
    const listContainer = document.getElementById('tableList');
    
    listContainer.innerHTML = ''; 

    if (inputField.value === '') {
        const errorItem = document.createElement('li');
        errorItem.textContent = 'Error: Input cannot be empty.';
        listContainer.appendChild(errorItem);
        return;
    }

    const targetNum = parseFloat(inputField.value);

    for (let i = 1; i <= 12; i++) {
        const item = document.createElement('li');
        const calculatedResult = targetNum * i;
        
        item.textContent = `${targetNum} x ${i} = ${calculatedResult}`;
        listContainer.appendChild(item);
    }
});
