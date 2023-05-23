 // Write a function declaration named addNumbers that takes two numbers as arguments and returns their sum.
function addNumbers(n, i){return n + i;}
console.log(addNumbers(8, 1));

// Write a function expression named multiplyNumbers that takes two numbers as arguments and returns their product.

const multiplyNumbers = (function (x, y){return x * y}(2, 3));
let f= 1 + 1;
console.log(multiplyNumbers);

/*
 Write a higher-order function named operateOnNumbers that takes three arguments: two numbers and a callback function.
 The function should use the callback function to perform an operation on the two
numbers and return the result.*/

function operateOnNumbers(x, y, func){
    let res;
    res = func(x, y);
    return res;
}
function second(a, b){
    let res;
    res = a + b;
    return res;
}

console.log(operateOnNumbers(1, 2, second));

// setTimeout(func, 500)