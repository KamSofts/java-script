function fnLogicalOutput() {
  const name = "Ram";
  const age = 13
  const flag = null;

  console.log(name || age); 	// "Ram"
  console.log(name && age); 	// 13
  
  console.log(name || flag);	// "Ram"
  console.log(name && flag);	// null
  
  console.log(flag || age);		// 13
  console.log(flag && age);		// null
}

fnLogicalOutput();