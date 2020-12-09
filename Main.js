const one = 1;
const two = 2;
const three = 3;

let numbers = [one, two, three];


// if statements will run if their parameters are true, otherwise they skip.
// else if statements run if the statement before it was false and the current parameters are true.
// else statements run if the statement before it was false, but do not have any of their own parameters to check.

// logical operators are <, >, ==, <=, >=
// these are used in expressions that return true or false

// && can be used to check multiple expressions (both must br true)
// || can be used to check multiple expressions (only one has to be true)
function greaterThan(lesser, greater) {
    if ((lesser < greater)) {
        console.log(lesser + " is less than " + greater);
    } else if (greater < lesser) {
        console.log(lesser + " is greater than " + greater);
    } else {
        console.log(lesser + " is equal too " + greater);
    }
}


// ternary case takes three parameters; the condition that will be true or false, 
// the executable code for a true condition, and the executable code for a false condition.
function ternaryTest(input) {
    let variable = (input > 5) ? console.log("Input is greater than five") : console.log("Input is less than five");
}


// switch case takes one input and compares it to multiple expressions, like an if statement (but cleaner).
// the default expression executes when all others are false.
function switchTest(input) {
    switch (input) {
        case 1:
            console.log("Input is one");
            break;
        case 2:
            console.log("Input is two");
            break;
        case 3:
            console.log("Input is three");
            break;
        default:
            console.log("Input is not one, two, or three.");
            break;
    }
}


// for loops run as long as the parameters inside them are true. 
// this is usually an integer that is increased or decreased until it reaches a certain value.
function forLoop(iterations) {
    for (let x = 0; x < iterations; x++) {
        console.log("This is iteration " + (x + 1) + " of the for loop");
    }
}


// forEach will iterate through every index in an array
// number is the value of that index
// index is the index location
// arr is the array the forEach is iterating through
function forEachLoop() {
    numbers.forEach(printer);

    numbers.forEach(console.log);

    numbers.forEach(function(number, index, arr) {
        console.log(number)
        console.log(index)
        console.log(arr)
        return;
    });
}

// prints the three things from forEach
function printer(number, index, arr) {
    console.log(number, index, arr);
}


// while loops run similarly to for loops, but the parameters usually do not have a
// complicated expression in them. Usually it is a simple comparison with math
// that is done inside the loop.
function whileLoop(iterations) {
    let x = 0;
    while (x < iterations) {
        x++;
        console.log("This is iteration " + (x) + " of the while loop");
    }
}

// a while loop with "true" as the parameter will run infinitely.
function infiniteLoop() {
    let x = 0;
    while (true) {
        x++;
        console.log("This is iteration " + (x) + " of the infinite loop")

        if (x == 10) {
            break;
        }
    }
}

// == checks the value of the variables
// === checks the value and the types
function equalsTest(num) {
    console.log("X is equal to: " + num);
    console.log("The value is equal: " + (num == "5"));
    console.log("The value and type are the same: " + (num === "5"));
}

function fizzbuzz() {
    for (let x = 1; x <= 100; x++) {
        switch (x) {
            case (x % 3 == 0):
                console.log("Fizz");
            case (x % 5 == 0):
                console.log("Buzz");
            case !(x % 3 == 0) && !(x % 5 == 0):
                console.log(x);
        }
    }
}