// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
// print number every time

function FizzBuzz() {
    let print = "";
    for (let x = 1; x <= 100; x++) {
        switch (0) {
            case !(x % 3) && !(x % 5):
                print += x;
            case (x % 3):
                print += "Fizz";
            case (x % 5):
                print += "Buzz";
        }
        console.log(print);
        print = "";
    }

    console.log("test");
}