/*
Create a variable called age and assign it a numeric value. Use the Conditional (ternary) operator.
    If the variable is grater or
equal to 18, print You can drive a car. If the variable is less than 18, print You are too young to drive.*/

let age = 23;
if (age >= 18)
    console.log('you can drive a car');
else
    console.log('you are too young to drive');

(age >= 18) ? console.log('you can drive') : console.log('you are too young to drive');