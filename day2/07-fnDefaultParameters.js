function fnDefaultParameters(name = "Guest") {
  console.log("Hello,", name);
}

fnDefaultParameters();
fnDefaultParameters("Ram");

/*
Hello, Guest
Hello, Ram
*/