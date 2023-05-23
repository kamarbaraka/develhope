/*
/ Write a function named isPrime that takes a number as an argument and returns true if
the number is prime, and false otherwise.*/

function isPrime(num){
    if (num%2 !== 0)
        return false;
    return true;
}
console.log(isPrime(2));
