function fnAdvanced2() {
  // return index
  fnFindIndex(30);
  fnFindIndex(25);
  // return boolean
  fnEvery(50);
  fnEvery(100);
}

fnAdvanced2();

function fnFindIndex(v) {
  const data = [10, 20, 30, 40];
  const findFirstElement = data.findIndex(n => n === v);
  console.log(v, "=", findFirstElement);
}
/*
30 = 2 
25 = -1
*/

function fnEvery(v) {
  const data = [70, 80, 85, 90];
  const isConditionSatisfy = data.every(n => n > v);
  console.log(v, "=", isConditionSatisfy);
}
/*
50 = true 
100 = false
*/