function fnTruthyValues() {
  console.log("true =", Boolean(true));
  console.log("Text =", Boolean("Text"));
  console.log("42 =", Boolean(42));
  console.log("-1 =", Boolean(-1));
  console.log("3.14 =", Boolean(3.14));
  console.log("{} Object =", Boolean({}));
  console.log("[] Array=", Boolean([]));
  console.log("Function() {} =", Boolean(function() {
    console.log("")
  }));
  console.log("Symbol() =", Boolean(Symbol("id")));
  console.log("new Date() =", Boolean(new Date()));
  console.log("'0' =", Boolean('0'));
  console.log("'false' =", Boolean('false'));
}

fnTruthyValues();
/*
true = true 
Text = true 
42 = true 
-1 = true 
3.14 = true 
{} Object = true 
[] Array= true 
Function() {} = true 
Symbol() = true 
new Date() = true 
'0' = true 
'false' = true
*/