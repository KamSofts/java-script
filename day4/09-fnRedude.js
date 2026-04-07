function fnRedude() {
  const data = [10, 20, 30, 40, 50];

  console.log("Total :",
    data.reduce((a, b) => {
      console.log("a is", a, "b is", b);
      return a + b;
    }, 0));  // 0 is a's initial value
}

fnRedude();

/*
a is 0 b is 10 
a is 10 b is 20 
a is 30 b is 30 
a is 60 b is 40 
a is 100 b is 50 
Total : 150
*/