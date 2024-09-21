function FindHypo(x,y){
    let result
    try{
    if(typeof(x)=="number" && typeof(y)=="number"){
        result=Math.round(Math.sqrt(x**2+y**2));
    }
    else{
        throw new Error("Invalid Input");
    }
}
    catch(err){
        console.error(err);
    }
    return result.toFixed(3);
}
console.log(FindHypo(3,4))