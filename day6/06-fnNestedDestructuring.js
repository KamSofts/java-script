function fnNestedDestructuring() {
    const data = {
        student: {
            name: "Ram",
            age: 13,
            school: "GHSS"
        }
    }

    const { student: { name, age, school } } = data;
    console.log("Name:", name, "Age:", age, "School:", school);
}

fnNestedDestructuring();

/*
Name: Ram Age: 13 School: GHSS
*/