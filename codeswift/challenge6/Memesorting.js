function isSubsequence(str, charArray) {
  let pointer = 0; 
  for (let char of str) { 
    if (char === charArray[pointer]) { 
      pointer++; 
    }
    if (pointer === charArray.length) { 
      return true; 
    }
  }
  return false; 
}
function findMemeReceiver(meme) {
    let patterns = {
      "Roma": [['b','u','g'],"IT"], 
      "Maxim": [['b','o','o','m'],"Chemistry"], 
      "Danik": [['e','d','i','t','s'],"Design"] ,     
    };
    const pattern = JSON.parse(JSON.stringify(patterns));
    for(let letter=0;letter<meme.length;letter++){
      for (let key in patterns){
        if(patterns[key][0].includes(meme[letter])){
          const index = patterns[key][0].indexOf(meme[letter]);
          if (index > -1) { 
           patterns[key][0].splice(index, 1); 
          } 
          if(patterns[key][0].length==0 ){
            if(isSubsequence(meme.slice(0,letter+1),pattern[key][0])){
            return {field:patterns[key][1],
              name:key
            };
          }
          else{patterns[key][0] = pattern[key][0];}}}}}
    return {
      field:"other",
      name:""
    }
  }
  let meme1 = "this is programmer  meme because it has bug";
  let meme2="this is also program{bu}r meme {g}ecause it has needed key word"
  let meme3 = "this is {ed}s{i}gner meme cause i{t} ha{s} key word";
  let meme4 = "this could {b}e chemistry meme b{u}t our {g}Gey word 'boom' is too late";
  result=findMemeReceiver(meme1);
  console.log(Object.values(Object.values(result)));
  