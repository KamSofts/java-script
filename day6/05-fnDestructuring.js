function fnDestructuring(data) {
    if (data instanceof Array) {
        const [name, age, school, place] = data;
        console.log("Array :- Name:", name, "Age:", age, "School:", school);
    } else {
        const { name, age, school, place } = data;
        console.log("Object:- Name:", name, "Age:", age, "School:", school);
    }
}

const arr = ['Ram', 13, 'GHSS', 'Manapparai'];
const obj = {
    name: "Ram",
    age: 13,
    school: "GHSS",
    place: "Manapparai"
}

fnDestructuring(arr);
fnDestructuring(obj);

/*
Array :- Name: Ram Age: 13 School: GHSS
Object:- Name: Ram Age: 13 School: GHSS
*/