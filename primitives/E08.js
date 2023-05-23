/*
Create a variable and set it to true.
Print the value in the console and the data type.
Convert it to a numeric data type, print the value and the data type.
Convert it to string data type, print the value and the data type.
Finally, convert it to a boolean data type, print the value and the data type.*/

let isOld = true;
console.log(isOld, typeof(isOld));

isOld = Number(isOld);
console.log(isOld, typeof(isOld));

isOld = isOld.toString();
console.log(isOld, typeof(isOld));

isOld = Boolean(isOld);
console.log(isOld, typeof(isOld));