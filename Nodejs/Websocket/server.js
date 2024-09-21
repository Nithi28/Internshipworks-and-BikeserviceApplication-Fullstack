const webSocket= require("ws");
const server=new webSocket.Server({port:8050})
server.on("connection",(ws)=>{
    console.log("Connection Established");
    ws.on('messege',(messege)=>{
        console.log(`Recieved Message is ${messege}`);
        if(messege=="hai"){
            ws.send("Hellow");
        }
        else if(message=="Bye"){
            ws.send("GoodBye");
        }
        else{
            ws.send("other Message")
        }
    });
});