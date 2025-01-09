// 8. Write a C program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three

function largestThreeNum(a, b, c) {
  try {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      throw new Error("Even a number");
    } else if (a > b) {
      if (a > c) {
        return a;
      }
    } else if (b > c) {
      return b;
    } else if (b < c) {
      return c;
    }
  } catch (error) {
    console.log(message.error);
  }
}

console.log(largestThreeNum(12999, 250, 52));
