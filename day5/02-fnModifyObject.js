function fnModifyObject(){
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true
  }
  console.log(data);
  /* Object { name: "Ramprabu", age: 13, flag: true } */

  // modify field value
  data.name = "Ram";
  console.log(data);
 	/* Object { name: "Ram", age: 13, flag: true } */
  
  delete data.flag;
  console.log(data);
  /* Object { name: "Ram", age: 13 } */
  
  // add new field
  data.place = "Manapparai"
  console.log(data);  
  /* Object { name: "Ram", age: 13, place: "Manapparai" } */
  
}

fnModifyObject();