// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
console.log(getFirstValue([1, 2, 3])); //➞ 1
console.log(getFirstValue([80, 5, 100])); // ➞ 80
console.log(getFirstValue([-500, 0, 50]));
getFirstValue([]);

//Notes
// The first element in an array always has an index of 0.

function getFirstValue(arr) {
  if (arr.length <= 0) {
    console.log("not found");
  }
  return arr[0];
}
