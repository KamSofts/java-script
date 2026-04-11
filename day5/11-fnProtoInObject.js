function fnProtoInObject(){
    const greetings = {
        greet: function(){
            console.log("data linked greetings using __proto__");
        }
    };

    const data = {
        name: "Ram",
        __proto__: greetings
    }

    data.greet(); // data linked greetings using __proto__
}

fnProtoInObject();