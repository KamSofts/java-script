function fnObjectEntries() {
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true,
    school: "GHSS",
    place: "Manapparai"
  }
  const ObjectToArray = Object.entries(data);
  console.log(ObjectToArray);
  /*
  [
    [ 'name', 'Ramprabu' ],
    [ 'age', 13 ],
    [ 'flag', true ],
    [ 'school', 'GHSS' ],
    [ 'place', 'Manapparai' ]
  ]
  */
}

fnObjectEntries();