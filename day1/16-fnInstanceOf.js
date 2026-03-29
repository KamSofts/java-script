function fnInstanceOf() {
  
  console.log([] instanceof Object); 	// true
  console.log({} instanceof Object); 	// true
  
  console.log([] instanceof Array); 	// true
  console.log({} instanceof Array);  	// false

}

fnInstanceOf();