// function that calculates the coins you would use to 
// give a customer their change in a shop. 
// function takes one argument, which is the amount of change 
// needed, in pence; should always return an object.

function changeCalculator (num) {
  const coins = {
    '1': 0,
    '2': 0,
    '5': 0,
    '10': 0,
    '20': 0,
    '50': 0,
    '100': 0,
    '200': 0,
};
  const change = {};


if (num === 1) {coins['1'] = 1;}
if (num === 2) {coins['2'] = 1;}

for (let key in coins) {
  if (coins[key] !== 0) {
    change[key] = coins[key]; 
console.log(key);
console.log(coins[key]);
console.log(change);
  }
}
console.log(change);
return change;
  }


module.exports = changeCalculator;
