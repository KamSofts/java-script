const students = [];

function addStudent(name, score) {
    score = Number(score) ?? 0;
    name = name.trim().toUpperCase();
    students.push({ name, score });
}

// get grades
function getGrades() {
    return students.map((student) => {
        let grade = "F";
        if (student.score >= 90) grade = "A";
        else if (student.score >= 75) grade = "B";
        else if (student.score >= 50) grade = "C";
        else if (student.score >= 35) grade = "D";
        return { ...student, grade };
    });
}

// top scores
function getTopScores() {
    return students.filter(student => student.score >= 75);
}

// find student
function findStudent(name) {
    return students.find(student => student.name == name);
}

// check failures
function hasFailures() {
    return students.some(student => student.score < 35);
}

// display data
function displayAll() {
    const grades = getGrades();
    console.log("Student Data");
    console.log("All student with grades");
    console.log("NAME  | SCORE | GRADE");
    grades.forEach((student) => {
        console.log(`${student.name} | ${student.score} | ${student.grade}`);
    });
}

addStudent("John", 91);
addStudent("Ravi", 82);
addStudent("Sneha", 44);
addStudent("Aarti", 29);

displayAll();
console.log("\nTop scores");
console.log(getTopScores());
console.log("\nSearching for Ravi");
console.log(findStudent("RAVI"));
console.log("\nAny failures?");
console.log(hasFailures() ? "YES" : "NO");



