function fnProtoInClass() {
    class Greetings {
        constructor(name) {
            this.name = name;
        }

        greet() {
            console.log(`Hello, ${this.name}...!`);
        }
    }

    // extends = proto 
    class Data extends Greetings {
        constructor(name) {
            super(name); // send args to parent
        }
    }

    const ram = new Data("Ram");
    ram.greet(); // Hello, Ram...!
}

fnProtoInClass();