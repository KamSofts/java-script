function fnGreet(name){
  console.log(`Hello, ${name || 'Visitor'}!`);
}

fnGreet(); 			// "Hello, Visitor!"
fnGreet('Ram');	// "Hello, Ram!"