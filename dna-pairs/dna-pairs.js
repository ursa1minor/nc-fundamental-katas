// takes DNA string and matches each base with its pair, returning a nested array. 
// C pairs with G and T pairs with A.

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
    };
  return dnaArray;
  };
};

module.exports = dnaPairs;
