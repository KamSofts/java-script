function fnModifyArray() {
  const colors = ["Red", "Green", "Blue"];
  console.log("Original :", colors);

  colors.push("Yellow"); // add element at last
  console.log("push :", colors);

  colors.unshift("Black"); // add element at first
  console.log("unshift :", colors);

  colors.pop(); // remove last element
  console.log("pop :", colors);

  colors.shift(); // remove first element
  console.log("shift :", colors);
}

fnModifyArray();

/*
Original : Array(3) [ "Red", "Green", "Blue" ]
push : Array(4) [ "Red", "Green", "Blue", "Yellow" ]
unshift : Array(5) [ "Black", "Red", "Green", "Blue", "Yellow" ]
pop : Array(4) [ "Black", "Red", "Green", "Blue" ]
shift : Array(3) [ "Red", "Green", "Blue" ]
*/