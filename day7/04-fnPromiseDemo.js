function fnPromiseDemo() {
    function db() {
        return new Promise((resolve, reject) => {
            let db = [];
            setTimeout(() => {
                // reject("Rejected for testing");
                db = [
                    { name: "Ram", age: 13, school: "GHSS" },
                    { name: "Meena", age: 11, school: "GGHSS" }
                ];
                resolve(db);
            }, 1000);
        });
    }

    function findStudent(name) {
        db().then((value) => {
            const student = value.find((s) => s.name == name);
            console.log(student);
        }).catch((reason) => {
            console.log("Error:", reason);
            /* Error: Rejected for testing */
        });

    }

    findStudent("Ram");
    /* { name: 'Ram', age: 13, school: 'GHSS' } */
}

fnPromiseDemo();