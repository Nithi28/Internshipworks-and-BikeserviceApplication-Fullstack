class foo{
    overloadingfunction(){
        let function1=function(arg1){
            console.log("This funtion is called with one argument"+arg1);
            return arg1;
        };
        let function2=function(arg1,arg2){
            console.log("This function is called with two arguments "+arg1+" and "+arg2);
            return arg1+arg2;
        };
        let function3=function(arg1){
            let concatedstr="";
            for (let i=0; i<arg1.length;i++){
                concatedstr+=arg1[i]+" ";
            }
            return concatedstr;
        };
        if(arguments.length===1 && Array.isArray(arguments[0])){
            return function3(arguments[0]);
        }
        else if(arguments.length===2){
            return function2(arguments[0],arguments[1]);
        }
        if(arguments.length===1 && !Array.isArray(arguments[0])){
            return function1(arguments[0]);
        }
    }
}
let object=new foo();
console.log(object.overloadingfunction(["Hai","I'm","Nithi"]));