// Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

// For Loop
console.log("For Loop");

function printArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr[arr.length] = i;
  }

  return arr;
}

console.log(printArray(1));
//➞ [1]

console.log(printArray(3));
//➞ [1, 2, 3]

console.log(printArray(6));
//➞ [1, 2, 3, 4, 5, 6]

// while Loop

console.log("while Loop");

function printArray2(num) {
  let arr = [];
  let i = 1;
  while (i <= num) {
    arr[arr.length] = i;
    i++;
  }

  return arr;
}

console.log(printArray2(1));
//➞ [1]

console.log(printArray2(3));
//➞ [1, 2, 3]

console.log(printArray2(6));

// do while Loop
console.log("=================  do while Loop ===============");

function printArray3(num) {
  let arr = [];
  let i = 1;
  do {
    arr[arr.length] = i;
    i++;
  } while (i <= num);

  return arr;
}

console.log(printArray3(1));
//➞ [1]

console.log(printArray3(3));
//➞ [1, 2, 3]

console.log(printArray3(6));
//➞ [1, 2, 3, 4, 5, 6]
