//function takes string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

// dnaPair("G");
// should return [ ["G", "C"] ]

// dnaPair("AG");
// // should return [ ["A", "T"], ["G", "C"] ]

// dnaPair("ATAG");
// // should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]

function dnaPairs(dna) {
  const dnaArray = [];
  if (dna === "") {
  return dnaArray;
  } else {
    for (i = 0; i < dna.length; i++) {
      dnaArray.push([dna[i]]);
    }
  console.log(dnaArray);
  return dnaArray;
  }
  // } else if (dna === "G") {
  // return [["G" , "C"]];
  // } else if (dna === "C") {
  // return [["C" , "G"]];
  // } else if (dna === "A") {
  // return [["A" , "T"]];
  // } else if (dna === "T") {
  // return [["T" , "A"]];
  // }
}

module.exports = dnaPairs;
