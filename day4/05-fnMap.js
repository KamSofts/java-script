function fnMap() {
  const colors = ["Red", "Green", "Blue"];
  const mapped = colors.map((s) => {
    return s + " *";
  });

  console.log("Original :");
  fnPrint(colors);
  console.log("Mapped :");
  fnPrint(mapped);
}

function fnPrint(arrayObject) {
  arrayObject.forEach(function(ae) {
    console.log("\t", ae);
  });
}

fnMap();

/*
Original : 
	Red 
	Green 
	Blue
Mapped : 
	Red *
	Green *
	Blue *
*/