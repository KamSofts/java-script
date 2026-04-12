function fnTryCatchFinally() {
    let result = 0;
    try {
        result = add(10, 20);
    } catch (error) {
        console.log({ name: error.name, message: error.message });
    } finally {
        console.log(result);
    }
    console.log("Completed...!");
}

fnTryCatchFinally();

/*
{ name: 'ReferenceError', message: 'add is not defined' }
0
Completed...!
*/

/*
const add = (a, b) => a + b;
30
Completed...!
*/