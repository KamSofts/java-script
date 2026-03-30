function fnFunction(a = 0, b = 0) {
  return a + b;
}

console.log(fnFunction());
console.log(fnFunction(123));
console.log(fnFunction(123, 321));

/*
0
123
444
*/