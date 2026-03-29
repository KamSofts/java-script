function fnFalsyValues() {
	console.log("false =", Boolean(false));
  console.log("0 =", Boolean(0));
  console.log("-0 =", Boolean(-0));
  console.log("BigInt 0 =", Boolean(0n)); // BigInt Zero
  console.log("Empty String =", Boolean(""));	// empty string
  console.log("null =", Boolean(null));
  console.log("undefined =", Boolean(undefined));
  console.log("NaN =", Boolean(NaN));
}

fnFalsyValues(); 
/*
false = false 
0 = false 
-0 = false 
BigInt 0 = false 
Empty String = false 
null = false 
undefined = false 
NaN = false
*/