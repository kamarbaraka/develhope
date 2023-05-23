const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 45, hobby: 'gamer'},
{ id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
{ id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
{ id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

function iter(obj){
    let theObject = obj;
    let eachItem;
    let gamerText = 'Life Is a Game, Play to Win!';
    let sportsText = 'Never give up!';
    let photoText = 'A picture is worth a thousand words!';
    let ages = [];
    for (eachItem in theObject){
        if (theObject[eachItem].hobby === 'gamer'){
            console.log(theObject[eachItem].name, gamerText);
        }else if (theObject[eachItem].hobby === 'sportsman'){
            console.log(theObject[eachItem].name, sportsText);
        }else if (theObject[eachItem].hobby === 'photographer'){
            console.log(theObject[eachItem].name, photoText);
        }else {
            console.log('invalid');
        }
    }
    for (let each in theObject){
        let ager = theObject[each].age
        ages.push(ager)
    }
    let oldest = Math.max(...ages);
    for (let old in theObject){
        if (theObject[old].age === oldest){
            console.log(theObject[old].name, 'is the oldest');
        }
    }
    let surn = [];
    for (let sur in theObject){
        surn.push(theObject[sur].surname.length);
    }
    let longsurn = Math.max(...surn);
    for (let sn in theObject){
        if (theObject[sn].surname.length === longsurn){
            console.log(theObject[sn].surname, 'is the longest surname');
        }
    }
}

iter(students);
let ne = { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'};
students.splice(2, 0, ne);
iter(students);
