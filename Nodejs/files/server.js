
const http=require('http')
const fs=require('fs')
const path=require('path')
const greet=require('./greet')
const PORT=3000
console.log(__dirname)
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile(path.join(__dirname,"index.html"),(err,data)=>{
        if(err){
            res.writeHead(404)
            res.write("page not found")
        }
        res.end(data)
    })
})
server.listen(PORT,(error)=>{
    if(error){
        console.error(error)
    }
    else{
        console.log("Server is running");
    }
})
console.log(greet("nithi"))