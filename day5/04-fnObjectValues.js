function fnObjectValues() {
  const data = {
    name: "Ramprabu",
    age: 13,
    flag: true,
    school: "GHSS",
    place: "Manapparai"
  }
  const dataValues = Object.values(data);
  console.log(dataValues); 
  /* [ 'Ramprabu', 13, true, 'GHSS', 'Manapparai' ] */
}

fnObjectValues();