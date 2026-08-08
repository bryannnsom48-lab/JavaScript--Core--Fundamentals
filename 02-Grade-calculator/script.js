document.getElementById('gradeBtn').addEventListener('click', function() {
    const score = parseFloat(document.getElementById('score').value);
    const resultElement = document.getElementById('result');

    if (isNaN(score) || score < 0 || score > 100) {
        resultElement.textContent = "Error: Enter a score between 0 and 100.";
        return;
    }

    let grade;
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';

    resultElement.textContent = `Grade: ${grade}`;
});
