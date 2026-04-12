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

    async function findStudent(name) {
        try {
            const students = await db();
            const student = students.find((obj) => obj.name == name);
            console.log(student);
        } catch (error) {
            console.log(error);
            /* Rejected for testing */
        }
    }

    findStudent("Ram");
    /* { name: 'Ram', age: 13, school: 'GHSS' } */
}

fnPromiseDemo();