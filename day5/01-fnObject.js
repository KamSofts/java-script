function fnObject() {
  const data1 = Object.create({
    name: "Ram",
    age: 13,
    isStudent: true
  });
  console.log(data1);
  /*
  Object {  }
  <prototype>: Object { name: "Ram", age: 13, isStudent: true }
  */

  const data2 = {
    name: "Meena",
    age: 11,
    isStudent: true
  };
  console.log(data2);
  /*
  Object { name: "Meena", age: 11, isStudent: true }
  age: 11
  isStudent: true
  name: "Meena"
  */
  
  console.log(data1.name);	// Ram
  console.log(data2["name"]);	// Meena
  console.log(data1.address); // undefined
}

fnObject();