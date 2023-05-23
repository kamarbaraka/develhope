let s = 'k';
function comp(n){
    if ((n % 3 === 0) && (n % 5 === 0))
        return 'FizzBuzz';
    else if (n % 5 === 0)
        return 'Buzz';
    else if (n % 3 === 0)
        return 'Fizz'
    else
        return n;
}

console.log(comp(3));

let o = {3: 'Fizz', 5: 'Buzz', both: 'FizzBuzz'};
o.comp = function (n){
    if (!(n%3))
        return this['3'];

}


