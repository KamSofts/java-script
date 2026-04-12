function fnForInLoop() {
    const data = {
        name: "Ram",
        age: 13,
        school: "GHSS",
        place: "Manapparai"
    }

    for (const prop in data) {
        console.log(prop, "=", data[prop]);
    }
}

fnForInLoop();

/*
name = Ram
age = 13
school = GHSS
place = Manapparai
*/