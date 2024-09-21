//Asynchornous using setTimeout
setTimeout(myFunction,3000);
function myFunction(){
    console.log("Hai This is Asynchronous function");
}
//Asynchronous using setIntervals
setInterval(myFunction1,1000);
function myFunction1(){
    let d= new Date;
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    
}