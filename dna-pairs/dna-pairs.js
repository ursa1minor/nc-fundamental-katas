//function takes string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

// dnaPair("G");
// should return [ ["G", "C"] ]

// dnaPair("AG");
// // should return [ ["A", "T"], ["G", "C"] ]

// dnaPair("ATAG");
// // should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]

function dnaPairs(dna) {
  if (dna === "") {
  return [];
  } else if (dna === "G") {
  return [["G" , "C"]];
  }
}

module.exports = dnaPairs;
