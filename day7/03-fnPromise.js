/*
Promise states
1. <pending>
2. <fulfilled> (return value)
3. <rejected> (return reason)
*/

function fnPromise(flag) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = { name: "Ram", age: 13 };
            if (flag) {
                resolve("Approved");
            } else {
                reject("Rejected");
            }
        }, 1000);
    });
    console.log(promise);   // <pending>
    promise.then((value) => {
        console.log(promise);   // <fulfilled>
    }).catch((reason) => {
        console.log(promise);   // <rejected>
    })
}

// fnPromise();
/*
Promise { <pending> }
Promise { <rejected> 'Rejected' }
*/

fnPromise(true);
/*
Promise { <pending> }
Promise { 'Approved' }
*/