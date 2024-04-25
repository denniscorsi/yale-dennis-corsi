// Generate an array of 9,000 numbers
const array = Array.from({ length: 9000 }, (_, index) => index);

// Stringify the array using JSON.stringify()
const jsonString = JSON.stringify(array);

console.log(jsonString);