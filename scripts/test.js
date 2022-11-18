function getFactors(n) {
    if (n === 0) { return "∞"; } // Deal with 0
    if (n % 1 !== 0) { return "The input must be an integer."; } // Deal with non-integers

    // Check only up to the square root of the absolute value of n
    // All factors above that will pair with factors below that
    var absval_of_n = Math.abs(n),
        sqrt_of_n = Math.sqrt(absval_of_n),
        numbers_to_check = [];
    for (var i = 1; i <= sqrt_of_n; i++) {
        numbers_to_check.push(i);
    }

    // Create an array of factor pairs
    var factors = [];
    for (var i = 0; i <= numbers_to_check.length; i++) {
        if (absval_of_n % i === 0) {
            // Include both positive and negative factors
            if (n > 0) {
                factors.push([i, absval_of_n / i]);
                factors.push([-i, -absval_of_n / i]);
            } else {
                factors.push([-i, absval_of_n / i]);
                factors.push([i, -absval_of_n / i]);
            }
        }
    }

    // Test for the console
    console.log("FACTORS OF " + n + ":\n" +
        "There are " + factors.length + " factor pairs.");
    for (var i = 0; i < factors.length; i++) {
        console.log(factors[i]);
    }

    return factors;
}
getFactors(10);

function quadraticSolver(a, b, c) {
    let xP = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a)
    let xN = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a)
    console.log(xP, xN)
}
quadraticSolver(4, -7, -1)
