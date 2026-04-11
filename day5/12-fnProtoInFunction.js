function fnProtoInFunction() {
    function greetings(name) {
        this.name = name;
        this.greet = function () {
            console.log(`${this.name}'s data linked with greetings`);
        };
    };

    function data(name) {
        this.name = name;
    }

    data.prototype = new greetings();
    const ram = new data("Ram");
    ram.greet(); // Ram's data linked with greetings
}

fnProtoInFunction();