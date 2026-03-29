function fnBrifeMethod(){
  let brifeMethod = null; // or undefined
  if (brifeMethod == undefined || brifeMethod == null){
    brifeMethod = "Use '??' Nullish Coalescing Operator";
  }
  console.log(brifeMethod);
} 

function fnNullishCoalescingOperator(){
  let result = null; // or undefined
  console.log(result ?? "Now simplified");
} 

fnBrifeMethod(); // Use '??' Nullish Coalescing Operator
fnNullishCoalescingOperator(); // "Now simplified"