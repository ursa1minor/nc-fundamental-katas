// function rotates elements of an array x number of positions
// takes 2 args, an array and a number
// always returns an array


function rotateArray (arr, num) {

  let newArr = arr;

    if (arr.length === 0 || num === 0) {
    return newArr;
    } else if (num > 0) {

    for (let i = 0; i < num; i++) {
  
      const last = newArr.pop();
      newArr.unshift(last);
    }
    return newArr;
  
  } else if (num < 0) {

    for (let i = 0; i < -num; i++) {

      const first = newArr.shift();
      newArr.push(first);
    }
    return newArr;
  }
}



module.exports =  rotateArray;
