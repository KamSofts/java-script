// create a simple employee database (object)
const db = {};

// Employee constructor function
function Employee(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
}

function addEmployee(id, name, department, salary) {
    // method 1
    // const employee = { id, name, department, salary };
    // method 2
    const employee = new Employee(id, name, department, salary);
    db[id] = employee;
    console.log("Employee added, ID is", id);
}

addEmployee(1, "Madhu", "CEO", 500000);
addEmployee(2, "Meena", "Project-Manager", 200000);
addEmployee(3, "Ram", "Marketing", 200000);
addEmployee(4, "Nagarajan", "Accountant", 100000);
// console.log(db);

// list of employees
function listEmployee(label = "") {
    console.log("\nList of all employees", label);

    // method 1
    Object.keys(db).forEach(e => printDetails(e, true));

    // method 2
    // Object.values(db).forEach(e => {
    //     printDetails(e.id, true);
    // });

    // method 3
    // Object.values(db).forEach(e => {
    //     console.log(`${e.name}, ${e.department} - Rs.${e.salary}`);
    // });    
}

// get employee details
function printDetails(id, all) {
    if (db[id]) {
        if (all) {
            console.log(`${db[id].name}, ${db[id].department} - Rs.${db[id].salary}`);
        } else {
            console.log("\nSingle Employee Details :");
            console.log(Object.entries(db[id]));
        }
    } else {
        console.log("\nEmployee ID not found");
    }
}

// update employee details
function updateDetails(id, data) {
    if (db[id]) {
        Object.assign(db[id], data);
    } else {
        console.log("\nEmployee ID not found");
    }
}

listEmployee();
printDetails(1);

db[1].salary = 600000;
updateDetails(4, { salary: 150000 });
listEmployee("after update");