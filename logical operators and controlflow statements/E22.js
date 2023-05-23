// Rewrite the exercise 20, by using a Switch statement.

let password = 'kamar';

switch (password.length >= 4 && password.length <= 6){
    case true:
        console.log('password length is correct');
        break
    default:
        console.log('password not valid')
}