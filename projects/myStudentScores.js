fnStudentScore();

function fnStudentScore() {
  const data = [];
  fnAddStudent(data, "John", 91);
  fnAddStudent(data, "Ravi", 82);
  fnAddStudent(data, "Sneha", 44);
  fnAddStudent(data, "Aarti", 29);

  fnGrade(data);
  fnTop(data);
  fnFind(data, "Ravi");
  fnFails(data);
}

function fnFails(d) {
//   console.log(d);
  console.log("Any failures ?",
    (d.some(o => o.m <= 40) ? "YES" : "NO")
  );
}

function fnFind(d, n) {
  console.log(n, d.find(o => o.n === n));
}

function fnTop(d) {
  console.log("TOP SCORERS");
  const t = d.filter(o => o.m >= 75);
  console.log(t);
}

function fnGrade(d) {
  console.log("STUDENT DATA");
  console.log("GRADE LIST");
  d.forEach((o) => {
    let g = "F";
    if (o.m > 40) g = "D";
    if (o.m > 60) g = "C";
    if (o.m > 80) g = "B";
    if (o.m > 90) g = "A";
    console.log(o.n, "|", o.m, "|", g);
  });
}

function fnAddStudent(d, name, mark) {
  d.push({
    n: name,
    m: mark
  });
}
