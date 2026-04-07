function fnAdvanced1() {
  fnFlat();
  fnFlatWithDepth();
  fnFlatMap();
}

fnAdvanced1();

function fnFlat() {
  const data = [1, 2, [3, 4]];
  console.log(data.flat());
  /*
  Array(4) [ 1, 2, 3, 4 ]
  */
}

function fnFlatWithDepth() {
  const data = [1, 2, [3, 4, [5, 6]]];
  console.log(data.flat(1)); // paramenter 1 is called depth
  console.log(data.flat(2));
}
/*
OUTPUT FOR DEPTH = 1
~~~~~~~~~~~~~~~~~~~~
Array(5) [ 1, 2, 3, 4, (2) […] ]
0: 1
1: 2
2: 3
3: 4
4: Array [ 5, 6 ]
length: 5
*/

/*
OUTPUT FOR DEPTH = 2
~~~~~~~~~~~~~~~~~~~~
Array(6) [ 1, 2, 3, 4, 5, 6 ]
0: 1
1: 2
2: 3
3: 4
4: 5
5: 6
length: 6
*/

function fnFlatMap() {
  const greet = ["Hello world", "How are you?"];
  const words = greet.flatMap(s => s.split(" "));
  console.log(words);
  if (words.length > 0) {
    const letters = words[0].split("");
    console.log(letters);
  }
}
/*
Array(5) [ "Hello", "world", "How", "are", "you?" ]
Array(5) [ "H", "e", "l", "l", "o" ]
*/