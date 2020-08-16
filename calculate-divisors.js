// Please do not change the name of this function
function calculateDivisors(num) {
  // Your code here
}

/*
TESTS

Look through each of the tests for this function and write your code for calculateDivisors so that the console.logs for each test are correct.
Make an active effort to pass them one at a time, starting at the first test and working your way more complex.
*/

// TEST 1 - calculateDivisors returns 0 if passed number that is 3 or lower
let expectedOutput = 0;
let actualOutput = calculateDivisors(0);
console.log(`I expect ${actualOutput} to equal ${expectedOutput}`);

expectedOutput = 0;
actualOutput = calculateDivisors(3);
console.log(`I expect ${actualOutput} to equal ${expectedOutput} \n`);

// TEST 2 - calculateDivisors returns 3 if passed number that is between 3 and 5
expectedOutput = 3;
actualOutput = calculateDivisors(4);
console.log(`I expect ${actualOutput} to equal ${expectedOutput}`);

expectedOutput = 3;
actualOutput = calculateDivisors(5);
console.log(`I expect ${actualOutput} to equal ${expectedOutput} \n`);

// TEST 3 - calculateDivisors returns sum when passed number that is greater than 5
expectedOutput = 8;
actualOutput = calculateDivisors(6);
console.log(`I expect ${actualOutput} to equal ${expectedOutput}`);

expectedOutput = 33;
actualOutput = calculateDivisors(12);
console.log(`I expect ${actualOutput} to equal ${expectedOutput} \n`);

module.exports = calculateDivisors;
