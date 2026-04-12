function fnOptionalChaining() { // student?
    const emptyData = {};

    console.log(emptyData.student); // undefined
    /*
    console.log(emptyData.student.name);
    TypeError: Cannot read properties of undefined (reading 'name')
    */
    console.log(emptyData.student?.name); // undefined

    const data = {
        student: {
            name: "Ram",
            age: 13,
            school: "GHSS"
        }
    }
    console.log(data.student?.name); // Ram    

}

fnOptionalChaining();

/*
undefined
undefined
Ram
*/