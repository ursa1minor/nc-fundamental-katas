// function that calculates the coins you would use to 
// give a customer their change in a shop. 
// function takes one argument, which is the amount of change 
// needed, in pence; should always return an object.


function changeCalculator (num) {

  const coins = {};
  const coinArray = [200, 100, 50, 20, 10, 5, 2, 1];

  while (num > 1) {
    let found = coinArray.find(x => x <= num); 
    //console.log(found, "<---");
    let foundDiv = Math.floor(num/found); 2/1
    coins[found] = foundDiv; 
    num = num%found;
    }
    if (num === 1) {coins["1"] = 1;}
    
  //console.log(coins);
  return coins;
}

module.exports = changeCalculator;