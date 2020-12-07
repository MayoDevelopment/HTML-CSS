const one = 1;
const two = 2;
const three = 3;

let numbers = [one, two, three];

// if statements will run if their parameters are true, otherwise they skip.
// else if statements run if the statement before it was false and the current parameters are true.
// else statements run if the statement before it was false, but do not have any of their own parameters to check.

// logical operators are <, >, =, <=, >=
// these are used in expressions that return true or false
function greaterThan(lesser, greater) {
    if (lesser < greater) {
        return true;
    } else {
        return false;
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
    }
}

// logical operators are <, >, =, <=, >=
// these are used in expressions that return true or false