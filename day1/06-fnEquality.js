function fnEquality() {
  console.log("Equality Operator :", 42 == "42");
  console.log("Equality Operator :", 42 == 42);
  console.log("Strict Equality Operator :", 42 === "42");
  console.log("Strict Equality Operator :", 42 === 42);
}

fnEquality();

/*
Equality Operator : true 
Equality Operator : true 
Strict Equality Operator : false 
Strict Equality Operator : true 
*/