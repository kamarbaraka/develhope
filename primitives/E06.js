/*
Convert the hello variable to a boolean data type.
Convert the age variable to a string data type.
Convert the isGraduated variable to a numeric data type*/
//original variables
let hello = 'Ciao'; //boolean
let age = 18; //string
let isGraduated = false; //number

//converted variables
hello = Boolean(hello);
age = age.toString();
isGraduated = Number(isGraduated);

let type = typeof(hello) + typeof(age) + typeof(isGraduated);

console.log(hello, age, isGraduated);
console.log(type);