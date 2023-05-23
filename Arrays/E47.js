/*
Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

Remove the element Giovanni.
Add a new element called Pippo at the end of the array.
Add the element Giovanni to the beginning of the array.
Suggestion

Look at the official documentation to find the right methods*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
names.pop();
console.log(names);
names.push('Pippo');
console.log(names);
names.unshift('Giovanni');
console.log(names);