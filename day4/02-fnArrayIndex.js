function fnArrayIndex(){
  const rgb = ["Red", "Green", "Black"];
 	console.log("Mistaked RGB :", rgb);
  console.log("Index of Red :", rgb.indexOf("Red"));		// 0
  console.log("Index of Green :", rgb.indexOf("Green"));	// 1
  console.log("Index of Black :", rgb.indexOf("Black"));	// 2
  console.log("Index of Unknown :", rgb.indexOf("Unknown"));	// -1
  
  console.log("Element count in RGB:", rgb.length);
  if (rgb.length > 2){
    rgb[2] = "Blue";
  }
  console.log("Corrected RGB:", rgb);
  
}

fnArrayIndex();

/*
Mistaked RGB : Array(3) [ "Red", "Green", "Black" ]
Index of Red : 0 
Index of Green : 1 
Index of Black : 2
Index of Unknown : -1 
Element count in RGB: 3
Corrected RGB: Array(3) [ "Red", "Green", "Blue" ]
*/