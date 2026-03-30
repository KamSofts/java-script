function fnLexical() {
  const user = {
    name: "Ram",
    fnNormal: function() {
      setTimeout(function() {
        console.log("Normal function :", this.name);
      }, 1000);
    },
    fnArrow: function() {
      setTimeout(() => {
        console.log("Arrow function :", this.name);
      }, 1000);
    }
  }
  user.fnNormal();
  user.fnArrow();
}

fnLexical();
/*
Normal function : <empty string> 
Arrow function : Ram
*/