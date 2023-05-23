let user = {
name: "Cosimo",
age: 30,
};

let newUser = copy(user); //{...user};

function copy(obj){
    let copy = {};
    for (let k in obj){
        copy[k] = obj[k];
    }
    return copy;
}

newUser.name = "Kamar";

console.log(user);
console.log(newUser);
