// // Using the "&&" Operator
// // JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// // Consider a && b:

// // a is checked if it is true or false.
// // If a is false, false is returned.
// // b is checked if it is true or false.
// // If b is false, false is returned.
// // Otherwise, true is returned (as both a and b are therefore true ).
// // The && operator will only return true for true && true.

// // Make a function using the && operator.

// // Examples
// // and(true, false) ➞ false

// // and(true, true) ➞ true

// // and(false, true) ➞ false

// // and(false, false) ➞ false

// ========================   01 : Basic way 🟢  ================================
console.log("Easy Way🟢🟢🟢");

function and(a, b) {
  console.log(a && b);
}

and(true, false); //➞ false
and(true, true); //➞ true
and(false, true); //➞ false
and(false, false); //➞ false

// ========================   01 : Array Type 🌳   ================================

console.log("Array Type 🌳🌳🌳");

/*
How to Solve : 
01. Make Array Type Data
02.using loop
03.Make Simple function
*/

let paires = [
  [true, true],
  [false, false],
  [true, false],
  [false, true],
];

for (let i = 0; i < paires.length; i++) {
  let x = paires[i][0];
  let y = paires[i][1];
  console.log(and2(x, y));
}

function and2(a, b) {
  return a && b;
}
