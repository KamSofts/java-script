function fnTryCatch() {
    try {
        const result = add(10, 20);
        console.log(result);
    } catch (error) {
        console.log({ name: error.name, message: error.message });
    }
    console.log("Completed...!");
}

fnTryCatch();

/*
{ name: 'ReferenceError', message: 'add is not defined' }
Completed...!
*/