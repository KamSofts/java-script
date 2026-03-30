// Normal function
function add(a = 0, b = 0) {
  return a + b;
}

// Arrow function
const fnAdd = (a = 0, b = 0) => a + b;

console.log(add(10, 20)); // 30
console.log(fnAdd(10, 20)); // 30