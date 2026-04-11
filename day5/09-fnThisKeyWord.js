function fnThisKeyWord() {
    function fnGreet(name) { // <> this.name 
        return {
            name, // = this.name
            greet: function () {
                console.log(`Hello, ${this.name}...!`);
            }
        };
    };
    const result = fnGreet("Ram");
    result.greet(); // Hello, Ram...!

    const { greet } = fnGreet("Ram");
    greet();    // Hello, undefined...!
}

fnThisKeyWord(); 
