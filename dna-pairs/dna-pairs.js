//function takes DNA string and matches 
//each base with its pair, returning a nested array. 
//In DNA, C pairs with G and T pairs with A.

// dnaPair("AG");
// // should return [ ["A", "T"], ["G", "C"] ]

function dnaPairs(dna) {
  const dnaArray = [];
  if (dna === "") {
  return dnaArray;
  } else {
    for (i = 0; i < dna.length; i++) {
      if      (dna[i] === "G") {dnaArray.push(["G", "C"]);} 
      else if (dna[i] === "C") {dnaArray.push(["C" , "G"]);} else if (dna[i] === "A") {dnaArray.push(["A" , "T"]);} else if (dna[i] === "T") {dnaArray.push(["T" , "A"]);}
  }
  return dnaArray;
}}
module.exports = dnaPairs;
