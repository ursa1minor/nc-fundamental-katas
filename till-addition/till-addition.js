// Function cashes up a till at the end of the day - return a string.
// Till can contain the following denominations: 1p 2p 5p 10p 20p 50p £1 £2 £5 £10 £20 £50

function tillAddition (cash) {

  const till = {
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0,
    "20p": 0,
    "50p": 0,
    "£1": 0,
    "£2": 0,
    "£5": 0,
    "£10": 0,
    "£20": 0,
    "£50": 0
    };

for (let money in till) {
  for (let coin in cash) {
    if (coin === money) {
      till[money] = cash[coin]
    }}
  }

let sumArray = [];

for (let money in till) {
  if (money === "1p") {
    sumArray.push(till[money]);
  }
  if (money === "2p") {
    sumArray.push(2 * till[money]);
  }
  if (money === "5p") {
    sumArray.push(till[money] = 5 * till[money]);
  }
  if (money === "10p") {
    sumArray.push(till[money] = 10 * till[money]);
  }
  if (money === "20p") {
    sumArray.push(till[money] = 20 * till[money]);
  }
  if (money === "50p") {
    sumArray.push(till[money] = 50 * till[money]);
  }
  if (money === "£1") {
    sumArray.push(till[money] = 100 * till[money])
  }
  if (money === "£2") {
    sumArray.push(till[money] = 200 * till[money])
  }
  if (money === "£5") {
    sumArray.push(till[money] = 500 * till[money])
  }
  if (money === "£10") {
    sumArray.push(till[money] = 1000 * till[money])
  }
  if (money === "£20") {
    sumArray.push(till[money] = 2000 * till[money])
  }
  if (money === "£50") {
    sumArray.push(till[money] = 5000 * till[money])
  }
}
let sum = 0;
for (i = 0; i < sumArray.length; i++)  {
  sum = sum + sumArray[i];
}

const result = sum.toString();

if (result.length === 1) {
  return `£0.0${result}`;
}
if (result.length === 2) {
  return `£0.${result}`;
}
if (result.length > 2) {
  return `£${result.slice(0, -2)}.${result.slice(-2)}`
}};

module.exports = tillAddition;
