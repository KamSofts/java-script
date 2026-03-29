function fnCoercion(){
  console.log(42 + "");
  console.log(42 + "2");
  console.log(42 - "2");
}

fnCoercion();

/*
"42"
"422"
40
*/