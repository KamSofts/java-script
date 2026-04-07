// object.includes check argument if exists
// and return boolean value
function fnIncludes(){
  const data = ["apple", "banna", "grape"];
  console.log(data.includes("grape") ? "Exists" : "Not Exists"); 
  // Exists
  console.log(data.includes("mango") ? "Exists" : "Not Exists"); 
  // Not Exists
  
  const name = "Ramprabu";
  console.log(name.includes("u"));	
  // true
  console.log(name.includes("U"));	
  // false
}

fnIncludes();