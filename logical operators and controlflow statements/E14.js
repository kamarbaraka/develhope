// Complete the expressions inside the console.log(), by using the correct logical operator.

const question1 = 101 < 67; //false
const question2 = 1 == true; //true
const question3 = true != 1 //false
const question4 = 4 <= 4 //true

console.log(question1 || question2) //the result must be true
console.log(question1 && question2) //the result must be false
console.log(question3 || question2) //the result must be true
console.log(!(question4 && question4)) //the result must be false
console.log(!(question2 && question4)) //the result must be false