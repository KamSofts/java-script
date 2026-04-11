function fnObjectSeal() {
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true
  }
  Object.seal(data);
  // can change values 
  data.name = "Ram";
  data.age = 15;
  // can not delete property
  delete data.flag;
  // can not add property
  data.school = "GHSS";

  console.log(data);
  /* { name: 'Ram', age: 15, flag: true } */
}

fnObjectSeal();