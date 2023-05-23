/*
Given an object person with properties like name and address,
create a function updateAddress that takes a person object and a new address as parameters.
The function should update the address of the person object, even if the address is nested inside another object.*/

const Person= {name: 'kamar', address: {street: 'uhuru', city: 'nairobi'}}

function updateAddress(obj, addr){
    let theObject = obj;
    let theAddress= addr;
    if ('address' in theObject){
        theObject.address = theAddress;
    }
    console.log(theObject.address);
}

let addr = {street: 'kenyatta', city: 'thika'};
updateAddress(Person, addr);