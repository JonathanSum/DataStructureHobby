/**
 * Created by JonathanSum on 7/2/2017.
 */
var factorial = function (n) {
    // base case:
    if (n === 0) {
        return 1;
    } else if (n > 0) {
        return n * factorial(n - 1);

    }

    // recursive case:
};

// console.log("The value of 0! is " + factorial(0) + ".");
// console.log("The value of 5! is " + factorial(5) + ".");

// Program.assertEqual(factorial(0), 1);
// Program.assertEqual(factorial(5), 120);
var isEven = function (n) {
    return n % 2 === 0;
};

var isOdd = function (n) {
    return !isEven(n);
};

var power = function(x, n) {
    console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n===0){
        return 1;
    }
    // recursive case: n is negative
    if(n<0){
        var z =(power(x,n*-1));
        return 1/z;
    }
    // recursive case: n is odd
    if(isOdd(n)){
        return x*power(x,n-1);
    }
    // recursive case: n is even
    if(isEven(n)){
    var y = power(x,n/2);
    return y*y;
    }
};

var displayPower = function (x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);

displayPower(3, 3);

displayPower(3, 2);

//displayPower(3, -1);

