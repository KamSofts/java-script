function fnTypeOf() {
  console.log("'Ram' type is :", typeof "Ram");
  console.log("3.14 type is :", typeof 3.14);
  console.log("13 type is :", typeof 13);
  console.log("-13 type is :", typeof - 13);
  console.log("0 type is :", typeof 0);
  console.log("-0 type is :", typeof - 0);
  console.log("0n type is :", typeof 0n);
  console.log("true type is :", typeof true);
  console.log("undefined type is :", typeof undefined);
  console.log("NaN type is :", typeof NaN);
  console.log("Symbol('id') type is :", typeof Symbol('id'));
  console.log("null type is :", typeof null);
  console.log("{} type is :", typeof {});
  console.log("[] type is :", typeof []);
  console.log("new Date() type is :", typeof new Date());
}

fnTypeOf();
/*
'Ram' type is : string
3.14 type is : number 
13 type is : number 
-13 type is : number 
0 type is : number 
-0 type is : number 
0n type is : bigint 
true type is : boolean 
undefined type is : undefined d
NaN type is : number 
Symbol('id') type is : symbol 
null type is : object
{} type is : object 
[] type is : object 
new Date() type is : object
*/