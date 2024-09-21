const fspromises=require('fs').promises
const { readFile } = require('fs');
const path=require('path')
console.log(__dirname)
const fops=async function(){
    try{
await fspromises.writeFile(path.join(__dirname,'files','new.txt'),"New File Created");
const data= await fspromises.readFile(path.join(__dirname,'files','new.txt'),"utf-8");
await fspromises.appendFile(path.join(__dirname,'files','new.txt'),"\n additional content added");
console.log(data)
    }
    catch(err){
        console.err(err);
    }
}
fops()
console.log()