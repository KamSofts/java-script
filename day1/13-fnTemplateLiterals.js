function fnTemplateLiterals() {
  const name = "Ram";
  const age = 25;
  console.log("Old way : My name is " + name
             + ", " + age + " years old.");
  console.log(`New way : My name is ${name}, ${age} years old.`);

  const message = `Next multi line example :-
  My name is ${name}.
  I'm ${age} years old.`
  console.log(message);
}

fnTemplateLiterals();
/*
Old way : My name is Ram, 25 years old. 
New way : My name is Ram, 25 years old.
Next multi line example :-
  My name is Ram.
  I'm 25 years old. 
*/