/*
Create an array named "numbers" with five elements: 1, 2, 3, 4, 5.use the "join" method to join the
elements of the "numbers" array into a string separated by a comma then print it*/

let numbers = [1,2,3,4,5];
// console.log(numbers.join(','));

// Use the "slice" method to create a new array "slicedNumbers" containing the elements from index 1 to index 3 of the "numbers" array.

let newarray = numbers.slice(1, 4);
// console.log(newarray);

let doublenumbers = [];

function double(x){return x += x}
let narr = numbers.map(double, ...numbers);
console.log(narr);

console.log(numbers.map(num => num*2));