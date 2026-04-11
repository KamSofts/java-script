function fnNewKeyWord() {
    function myFunction(name){
        this.name = name;
    }
    // function using new keyword performs like class
    const result = new myFunction("Ram");
    console.log(result);
}

fnNewKeyWord();

/*
myFunction { name: 'Ram' }
*/