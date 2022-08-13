//function takes DNA string and matches 
//each base with its pair, returning a nested array. 
//In DNA, C pairs with G and T pairs with A.

// dnaPair("AG");
// // should return [ ["A", "T"], ["G", "C"] ]

function dnaPairs(dna) {
  
  const dnaArray = [];
  let x;
  let y;

  if (dna.length === 0) {
    return dnaArray;
  } else {
  for (x = 0; x < dna.length; x++) { 
  if (dna[x] === "G") {y = "C"};
  if (dna[x] === "C") {y = "G"};
  if (dna[x] === "A") {y = "T"};
  if (dna[x] === "T") {y = "A";};
    
  dnaArray.push([dna[x], y]);
  }
  return dnaArray;

  //   for (i = 0; i < dna.length; i++) {
  //     if      (dna[i] === "G") {dnaArray.push(["G", "C"]);} 
  //     else if (dna[i] === "C") {dnaArray.push(["C" , "G"]);} 
  //     else if (dna[i] === "A") {dnaArray.push(["A" , "T"]);} 
  //     else if (dna[i] === "T") {dnaArray.push(["T" , "A"]);}
  // }
  // return dnaArray;
}}
module.exports = dnaPairs;
