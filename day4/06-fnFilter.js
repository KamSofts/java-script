function fnFilter() {
  const numbers = [1, 3, 6, 8, 11];
  console.log("Number filter :", numbers.filter(n => n > 7));

  const data = [{
      name: "Dhamu",
      age: 21,
      flag: false
    },
    {
      name: "Divya",
      age: 19,
      flag: true
    },
    {
      name: "Krish",
      age: 17,
      flag: false
    },
    {
      name: "Anu",
      age: 15,
      flag: true
    },
    {
      name: "Ram",
      age: 13,
      flag: true
    },
    {
      name: "Meena",
      age: 11,
      flag: true
    }
  ];

  const students = data.filter(s => s.flag);
  console.log("Student list :", students);

  const adults = data.filter((s) => {
    return s.age >= 18;
  });
  console.log("Adult list :", adults);
}

fnFilter();

/*
Number filter : Array [ 8, 11 ]
Student list : Array(4) [ {…}, {…}, {…}, {…} ]
0: Object { name: "Divya", age: 19, flag: true }
1: Object { name: "Anu", age: 15, flag: true }
2: Object { name: "Ram", age: 13, flag: true }
3: Object { name: "Meena", age: 11, flag: true }
length: 4
Adult list : Array [ {…}, {…} ]
0: Object { name: "Dhamu", age: 21, flag: false }
1: Object { name: "Divya", age: 19, flag: true }
length: 2
*/