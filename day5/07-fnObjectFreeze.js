function fnObjectFreeze() {
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true
  }
  Object.freeze(data);
  // can not change values 
  data.age = 15;
  // can not delete property
  delete data.flag;
  // can not add property
  data.school = "GHSS";

  console.log(data);
  /* { name: 'Ramprabu', age: 13, flag: true } */
}

fnObjectFreeze();