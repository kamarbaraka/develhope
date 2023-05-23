// Create an object calculator with properties num1 and num2, and methods add, subtract, multiply, and divide that perform the respective arithmetic operations.

let calculator = {num1: 5, num2: 6};

calculator.add = function (){
    let res = this.num1 + this.num2;
    console.log(res);
}
calculator.multiply = function (){
    let res = this.num1 * this.num2;
    console.log(res);
}
calculator.subtract = function (){
    let res = this.num1 - this.num2;
    console.log(res);
}
calculator.divide = function (){
    let res = this.num1 / this.num2;
    console.log(res);
}

calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();