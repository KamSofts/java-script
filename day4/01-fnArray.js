function fnArray() {
  const rgbColors = new Array('Red', 'Green', 'Blue');
  console.log(rgbColors);

  const randomColors = ["Yellow", "White", "Black", "Pink"];
  console.log(randomColors);

  const mixedArray = ['string:', "Ramprabu", 'number', 1, 2, 3, 'boolean', true, false, 'object', {
    firstname: "Ram"
  }];
  console.log(mixedArray);
}

fnArray();

/*
Array(3) [ "Red", "Green", "Blue" ]
Array(4) [ "Yellow", "White", "Black", "Pink" ]
Array(11) [ "string:", "Ramprabu", "number", 1, 2, 3, "boolean", true, false, "object", … ]
*/