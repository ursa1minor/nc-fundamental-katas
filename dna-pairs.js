// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
}

/*
TESTS

Look through each of the tests for this function and write your code for dnaPairs so that the console.logs for each test are correct.
Make an active effort to pass them one at a time, starting at the first test and working your way more complex.

NOTE: the tests below use a function called JSON.stringify - this is just there to 
preserve the output array brackets in the printed string.  You don't have to worry about using this yourself.
*/

// TEST 1 - dnaPairs returns an empty array when passed an empty string
let output = dnaPairs("");
let expected = [];
console.log(
  `I expect ${JSON.stringify(output)} to equal ${JSON.stringify(expected)} \n`
);

// TEST 2 - dnaPairs returns an nested array containing dna pair when passed single dna letter
output = dnaPairs("G");
expected = [["G", "C"]];
console.log(
  `I expect ${JSON.stringify(output)} to equal ${JSON.stringify(expected)} \n`
);
output = dnaPairs("T");
expected = [["T", "A"]];
console.log(
  `I expect ${JSON.stringify(output)} to equal ${JSON.stringify(expected)} \n`
);

// TEST 3 - dnaPairs returns a nested array with multiple pairs when passed an dna string with length > 1
output = dnaPairs("GTAC");
expected = [
  ["G", "C"],
  ["T", "A"],
  ["A", "T"],
  ["C", "G"]
];
console.log(
  `I expect ${JSON.stringify(output)} to equal ${JSON.stringify(expected)} \n`
);

// TEST 4 - dnaPairs ignores any invalid DNA characters
output = dnaPairs("XXGTTP");
expected = [
  ["G", "C"],
  ["T", "A"],
  ["T", "A"]
];
console.log(
  `I expect ${JSON.stringify(output)} to equal ${JSON.stringify(expected)} \n`
);

module.exports = dnaPairs;
