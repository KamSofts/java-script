function fnRest() {
    const [student, ...details] = ["Ram", 13, "GHSS", "Manapparai"];
    console.log(student);
    console.log(details);
    /*
    Ram
    [ 13, 'GHSS', 'Manapparai' ]
    */

    const { name, ...data } = {
        name: "Ram",
        age: 13,
        school: "GHSS",
        place: "Manapparai"
    }
    console.log(name);
    console.log(data);
    /*
    Ram
    { age: 13, school: 'GHSS', place: 'Manapparai' }
    */    
}

fnRest();