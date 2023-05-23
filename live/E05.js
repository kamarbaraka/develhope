
let res = [];
function countUp(num){
    for(let i = 1; i <= num; i++){
        res.push(i);
    }
    console.log(res.join(' ').concat(' done'));
}
countUp(4);