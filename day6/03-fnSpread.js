function fnSpread() {
    const arr1 = ["Ram", 13];
    const arr2 = [...arr1, "GHSS", "Manapparai"];

    console.log("Array one is", arr1);
    console.log("Array two merge with Array one using ...spread operator");
    console.log("Array two is", arr2);

    const obj1 = {
        name: "Ram",
        age: 13
    }
    const obj2 = {
        ...obj1,
        shcool: "GHSS",
        place: "Manapparai"
    }
    console.log("\nObject one is", obj1);
    console.log("obj2 merge with obj1 using ...spread operator");
    console.log("Object two is", obj2);
}

fnSpread();

/*
Array one is [ 'Ram', 13 ]
Array two merge with Array one using ...spread operator
Array two is [ 'Ram', 13, 'GHSS', 'Manapparai' ]

Object one is { name: 'Ram', age: 13 }
obj2 merge with obj1 using ...spread operator
Object two is { name: 'Ram', age: 13, shcool: 'GHSS', place: 'Manapparai' }
*/