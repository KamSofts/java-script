function fnDestructuring() {
    // example without destructuring
    function fnWithoutDestructuring() {
        function userInfo(user) {
            if (user) {
                console.log(`Name:${user.name}, Age:${user.age}`);
            }
        }
        userInfo();
        userInfo({ name: "Ram", age: 13 });
        /* Name:Ram, Age:13 */
        userInfo({ age: 13 });
        /* Name:undefined, Age:13 */
    }

    function fnWithDestructuring() {
        function userInfo({ name = "Guest", age = 18 }) {
            console.log(`Name:${name}, Age:${age}`);
        }
        // userInfo(); // error occurs
        userInfo({ name: "Ram", age: 13 });
        /* Name:Ram, Age:13 */
        userInfo({ age: 13 });
        /* Name:Guest, Age:13 */
    }


    fnWithoutDestructuring();
    fnWithDestructuring();
}

fnDestructuring();