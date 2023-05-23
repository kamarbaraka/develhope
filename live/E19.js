/**
 * @author kamar*/
function Rectangle (w, h){
    this.width = w;
    this.height = h;
    this.calculateArea = function (){
        return this.height * this.width;
    };
    this.te = () => this.height + this.width;
}

let rect1 = new Rectangle(45, 20);
console.log(rect1.calculateArea());

let rect2 = new Rectangle(14, 16);

console.log(rect2.calculateArea());


console.log(rect2.we());

/*
let p = [1,2,[5,[9,0],6],2,3].flat(2);
// console.log(p);
let v = [1,2,[5,[9,0],6],2,3];
let z = new Set(v);
// console.log(z);
let k = new Array(...z);
// console.log(k);
let arr1 = [1,2,3,5];
let arr2 = [4,5,6];
let st1 = new Set(arr1);
let st2 = new Set(arr2);
let intst = st1 | st2;
console.log(intst);

let c = ['kkk', 'mmm'].map((i) => i.toUpperCase());
console.log(c);

let ad = arr1.reduce((x, y) => x*y);
function comp(list){
    let arr = [];
    for (let each in list){
        arr.push(list[each].length);
    }
    console.log(arr);
    // return list[Math.max(...arr)];
    return list.filter((i) => i.length === Math.max(...arr));
}
let cc = ['kamar', 'baraka', 'murunga', 'kahindi kom'];
let ans = comp(cc);
console.log(ans);*/
