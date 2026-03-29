function fnSymbol() {
  const sym1 = Symbol("id");
  const sym2 = Symbol("id");

  console.log(sym1 === sym2);
  console.log('Used for UNIQUE KEY, example as follows')
  const user = {
    name: "Ram",
    age: 13,
    [sym1]: 123
  };
  console.log("user[sym1] :", user[sym1]);
}

fnSymbol(); 
/*
false 
Used for UNIQUE KEY, example as follows 
user[sym1] : 123
*/