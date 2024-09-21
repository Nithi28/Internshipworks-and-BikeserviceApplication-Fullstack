myNumbers=[-1,2,3,4,-5,-2,-4]
const final=removeNeg(myNumbers,(x)=>x>0);//(x)=>x>0 is a call back function it is passed as an arugument to the removeNeg function
function removeNeg(myNumbers,callback){
    const myArr=[];
    for (const i of myNumbers){
        if(callback(i)){
            myArr.push(i);
        }``
    }
    return myArr;
}
console.log(final);
//catch the error in promises
const readFilePromise=(path)=>{
  new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
readFilePromise("")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));