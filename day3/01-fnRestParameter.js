function fnRestParameter(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(fnRestParameter()); // 0
console.log(fnRestParameter(1, 2, 3, 4, 5)); // 15