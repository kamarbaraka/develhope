/*
Create a variable called primitive and assign it a value.
Check if the value is number, string or boolean type and print it in the console.*/

let primitive = 23;
let type = typeof(primitive);

if (String(type) === 'boolean')
    console.log(primitive, + ' ' + type);
else if (String(type) === 'number')
    console.log(primitive, + ' ' + type);
else if (String(type) === "string")
    console.log(primitive, + ' ' + type);