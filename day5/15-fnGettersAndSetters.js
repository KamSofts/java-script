function fnGettersAndSetters() {
    const data = {
        name: "Ram",
        father: "Nagarajan",
        get fullName() {
            console.log(`Hello, ${this.name} ${this.father}`);
        },
        set fullName(s) {
            const [name, father] = s.split(" ");
            this.name = name;
            this.father = father;
        }
    }
    data.fullName; // Hello, Ram Nagarajan
    data.fullName = "Ramprabu Nagarajan";
    data.fullName; // Hello, Ramprabu Nagarajan
}

fnGettersAndSetters();