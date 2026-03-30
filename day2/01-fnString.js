function fnString() {
  let text = "Hello World!";
  console.log(text.length); // 12
  console.log(text.charAt(6)); // W
  console.log(text.substring(0, 5)) // Hello

  text = "Learn Javascript, Javascript is fun";
  console.log(text.indexOf("Javascript")); // 6
  console.log(text.lastIndexOf("Javascript")); // 18

  text = "I love coding with Python!";
  text = text.replace("Python", "Javascript");
  console.log(text); // I love coding with Javascript!

  let textToArray = text.split(" ");
  console.log(textToArray);

  text = "     Hello World !     ";
  console.log(text.trim()); // Hello World !
}

fnString();