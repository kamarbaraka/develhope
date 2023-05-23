/*-Create two functions: the first one is called sayHelloName and takes is as parameter another
function (the second one) called printName. -The printName function should just execute the
console.log() method and print the name. The sayHelloName that takes in the callback as parameter,
must execute the console.log() of the "Hello" string and after that invoke the function taken in as parameter.*/

let name = 'kamar'

let printName = function (name){console.log(name)}
function sayHelloName(func){
    console.log('Hello');
    console.log(func);
}
