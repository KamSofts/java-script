function fnReferenceExample() {
  let a = {
    name: "Ram"
  }

  let b = a;

  b.name = "Ramprabu";

  console.log("a =", a.name, ", b =", b.name);
}

fnReferenceExample(); // a = Ramprabu , b = Ramprabu