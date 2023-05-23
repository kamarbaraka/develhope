/*
Print in the console the price of the room according to the following scheme:
Prince for Basic Room --> 50€
Price for Junior Suite Room --> 80€
Price for Master Suite --> 100€
Use the Switch statement.*/

let room = 'Master';

switch (String(room)){
    case 'Basic Room':
        console.log(room + ' = 50E');
        break
    case 'Junior Suite Room':
        console.log(room + ' = 80E');
        break
    case 'Master Suite':
        console.log(room + ' = 100E');
        break
    default:
        console.log('invalid');
        break
}