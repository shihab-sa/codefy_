// Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

// Examples
// boolToString(true) ➞ "true"

// boolToString(false) ➞ "false"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function boolToString(bol) {
  if (typeof bol === "boolean") {
    return `"${bol}"`;
  } else {
    return `Non boolean!`;
  }
}

console.log(boolToString(true));
