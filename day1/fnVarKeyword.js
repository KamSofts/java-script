var s;
function fnVarKeyword() {
  if (true) {
    s = "Block-True";
  } else {
    s = "Block-False";
  }

  console.log("Functional : ", s);
}

fnVarKeyword();
console.log("Global : ", s);