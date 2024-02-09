function showSGPACalculator() {
    document.getElementById("calculator").innerHTML = `
        <h2>SGPA Calculator</h2>
        <label for="numCourses">Number of Courses:</label>
        <input type="number" id="numCourses" min="1">
        <button onclick="calculateSGPA()">Calculate SGPA</button>
        <div id="courseInputs" style="display: none;">
            <form id="courseForm"></form>
        </div>
        <div id="result" style="display: none;">
            <h3>SGPA: <span id="sgpaResult"></span></h3>
        </div>
    `;
    document.getElementById("calculator").style.display = "block";
}

function showCGPACalculator() {
    document.getElementById("calculator").innerHTML = `
        <h2>CGPA Calculator</h2>
        <label for="numSemesters">Number of Semesters:</label>
        <input type="number" id="numSemesters" min="1">
        <button onclick="calculateCGPA()">Calculate CGPA</button>
        <div id="semesterInputs" style="display: none;">
            <form id="semesterForm"></form>
        </div>
        <div id="result" style="display: none;">
            <h3>CGPA: <span id="cgpaResult"></span></h3>
        </div>
    `;
    document.getElementById("calculator").style.display = "block";
}

function calculateSGPA() {
    var numCourses = parseInt(document.getElementById("numCourses").value);
    var totalCreditPoints = 0;
    var totalCredits = 0;

    for (var i = 1; i <= numCourses; i++) {
        var credit = parseInt(prompt(`Enter credit for course ${i}:`));
        var grade = prompt(`Enter grade for course ${i} (0/A+/A/B+/B/C/P/F):`).toUpperCase();

        var gradePoints = 0;
        switch (grade) {
            case '0':
                gradePoints = 10.00;
                break;
            case 'A+':
                gradePoints = 9.50;
                break;
            case 'A':
                gradePoints = 9.00;
                break;
            case 'B+':
                gradePoints = 8.00;
                break;
            case 'B':
                gradePoints = 7.00;
                break;
            case 'C':
                gradePoints = 6.00;
                break;
            case 'P':
                gradePoints = 5.00;
                break;
            case 'F':
                gradePoints = 0.00;
                break;
            default:
                alert("Invalid grade entered.");
                return;
        }

        totalCreditPoints += credit * gradePoints;
        totalCredits += credit;
    }

    if (totalCredits === 0) {
        alert("Total credits cannot be zero. Please input valid credit values.");
        return;
    }

    var sgpa = totalCreditPoints / totalCredits;
    document.getElementById("sgpaResult").textContent = sgpa.toFixed(2);
    document.getElementById("result").style.display = "block";
}

function calculateCGPA() {
    var numSemesters = parseInt(document.getElementById("numSemesters").value);
    var totalSemesterCredits = 0;
    var totalSemesterGradePoints = 0;

    for (var i = 1; i <= numSemesters; i++) {
        var semesterCredits = parseInt(prompt(`Enter total credits for semester ${i}:`));
        var semesterGradePoints = parseFloat(prompt(`Enter total grade points for semester ${i}:`));

        totalSemesterCredits += semesterCredits;
        totalSemesterGradePoints += semesterGradePoints;
    }

    if (totalSemesterCredits === 0) {
        alert("Total credits cannot be zero. Please input valid credit values.");
        return;
    }

    var cgpa = totalSemesterGradePoints / totalSemesterCredits;
    document.getElementById("cgpaResult").textContent = cgpa.toFixed(2);
    document.getElementById("result").style.display = "block";
}
