function fnSortAndReverse() {
  const data = [30, 40, 10, 20, 60, 70];
  console.log(data.sort((a, b) => a - b)); // ASC
  console.log(data.sort((a, b) => b - a)); // DESC

  const names = ["Dhamu", "Divya", "Krish", "Anu", "Ram", "Meena"];
  const ascNames = names.sort();
  const descNames = ascNames.reverse();
  console.log(ascNames);
  console.log(descNames);
}

fnSortAndReverse();

/*
Array(6) [ 10, 20, 30, 40, 60, 70 ]
Array(6) [ 70, 60, 40, 30, 20, 10 ]
Array(6) [ "Anu", "Dhamu", "Divya", "Krish", "Meena", "Ram" ]
Array(6) [ "Ram", "Meena", "Krish", "Divya", "Dhamu", "Anu" ]
*/