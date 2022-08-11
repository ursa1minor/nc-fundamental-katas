// function adds all multiples of three and five **below** a certain number

function calculateDivisors(num) {
  const numDivBy3 = num/3
  const numDivBy5 = num/5

  const threes = [];
  const fives = [];
  let threeSum = 0
  let fiveSum = 0;

  for (i = 1; i <= numDivBy3; i++) {
    threes.push(i * 3);
  }
  //console.log(threes); 
  for (i = 0; i < threes.length; i++) {
    threeSum = threeSum + threes[i];
  }
  //console.log(threeSum);
  for (i = 1; i <= numDivBy5; i++) {
    fives.push(i * 5);
  }
  //console.log(fives)
  for (i = 0; i < fives.length; i++) {
    fiveSum = fiveSum + fives[i];
  }
  return (threeSum + fiveSum);
}

module.exports = calculateDivisors;
