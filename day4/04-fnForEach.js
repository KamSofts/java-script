function fnForEach() {
  const calcTotal = [10, 20, 30, 40, 50];
  let total = 0;
  calcTotal.forEach(function(n) {
    console.log("Index of", calcTotal.indexOf(n), " = ", n);
    total += n;
  });
  console.log("Total :", total);
}

fnForEach();

/*
Index of 0  =  10 
Index of 1  =  20 
Index of 2  =  30 
Index of 3  =  40 
Index of 4  =  50 
Total : 150
*/