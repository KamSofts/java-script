function fnCheckFieldExists(){
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true
  }
  console.log("age" in data);	// true
  console.log("place" in data);	// false
}

fnCheckFieldExists();