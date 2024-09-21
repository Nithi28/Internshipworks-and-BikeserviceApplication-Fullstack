const {format}=require('date-fns')
const {v4:uuid}=require('uuid')
const fs=require('fs')
const fsPomises=require('fs').promises
const path=require('path')
console.log(__dirname)
const logEvents=async(message)=>{
    const dateTime=`${format(new Date(),'ddMMyyyy\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try{
      
        await fsPomises.appendFile(path.join(__dirname,'eventEmitter.txt'),logItem)
    }
    catch(err){
        console.log(err)
    }

}
module.exports=logEvents