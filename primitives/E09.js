// Try to predict the output of the comparisons before printing them in the console

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

let first = name == lastname //false
let sec = age <= average //true
let third = firstYearCompleted == lastname //false
let fourth = yearsCompleted == firstYearCompleted //true
let fifth = firstYearCompleted === yearsCompleted //false
let sixth = examsCompleted < age //true
let seventh = isGraduated > yearsCompleted //false

console.log(first, sec, third, fourth, fifth, sixth, seventh);
