// calculates coins used to give change in a shop. 
// takes 1 argument = amount of change in pence; always returns an object.


function changeCalculator (num) {

  const coins = {};
  const coinArray = [200, 100, 50, 20, 10, 5, 2, 1];

  while (num > 1) {
    let found = coinArray.find(x => x <= num); 

    let foundDiv = Math.floor(num/found); 2/1
    coins[found] = foundDiv; 
    num = num%found;
    }
    if (num === 1) {coins["1"] = 1;}
    
  return coins;
}

module.exports = changeCalculator;