// Print in the console all the even numbers from 0 to 20

let s = []

for (let i = 0; i < 21; i++){
    if (!(i % 2))
        s.push(i);
}
console.log(s.join(' '));