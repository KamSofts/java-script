function fnCloser() {
  var b = 10;

  function fnInner() {
    var a = 20;
    return a + b;
  }
  return fnInner;
}

let result = fnCloser(); // result = fnInner
console.log(result()); // 30