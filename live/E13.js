/*
Write a JavaScript function that takes an object as a parameter and returns
the total number of functions present in the object and all its nested objects.*/

let obj = {add: function (){}, sub: function (){}, lst: [], num: 3, str: 'kamar'}
function total(obj){
    let lst = [];
    let item;
    for (item in obj){
        if (typeof (String(obj.item)) === 'function'){
            lst.push(item);
        }
    }
    let func = lst.length
    return func;
}
console.log(total(obj));
// console.log(typeof (obj.add));