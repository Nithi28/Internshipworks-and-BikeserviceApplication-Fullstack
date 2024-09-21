function countTriplets(c) {
    let cCubed = c ** 3; 
    let tripletCount = 0; 
    for (let a = 1; a ** 2 <= cCubed; a++) {
      for (let b = a; b ** 2 <= cCubed; b++) {
        if (a ** 2 + b ** 2 === cCubed) {
          tripletCount++; 
        }
      }
    }
    return tripletCount;
}
function find_abc_sumsqcube(c_Max, num_Sol) {
    const results = []; 
    for (let c = 1; c <= c_Max; c++) {
      const triplets = countTriplets(c); 
      if (triplets === num_Sol) {
        results.push(c); 
      }
    }
    return results; 
}
const c_Max = 10;
const num_Sol = 2;
const final = find_abc_sumsqcube(c_Max, num_Sol);
console.log(final); 
  
  