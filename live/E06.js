function calculateFactorial(n){
    n = Math.floor(n);
    if (n <= 1)
        return 1;
    let res;
    res = n * calculateFactorial(n - 1);
    return res;
}

console.log(calculateFactorial(4.2))