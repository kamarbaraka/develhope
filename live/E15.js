/*
Create a constructor function called Car that represents a car.
It should have properties like make, model, and year. Add a method start()
to the Car prototype that logs a message "The car is starting" when called.*/

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function (){
        console.log('the car is starting');
    }
}

let car = new Car('bmw', 'x09', 2018);
car.start();