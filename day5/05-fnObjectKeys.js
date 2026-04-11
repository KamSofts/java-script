function fnObjectKeys() {
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true,
    school: "GHSS",
    place: "Manapparai"
  }
  const dataKeys = Object.keys(data);
  console.log(dataKeys); 
  /*  [ 'name', 'age', 'flag', 'school', 'place' ]  */
}

fnObjectKeys();