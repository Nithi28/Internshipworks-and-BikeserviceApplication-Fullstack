function sum1(a,b,c,d,e){
    console.log(e);
    let sum2=a+b+c+d+e;
    return sum2;
}
function sumcurried(a){
    return (b)=>{
        return(c)=>{
            return(d)=>{
                return(e)=>{
                    return sum1(a,b,c,d,e);
                }
            }
        }
    }
}
let s1=sumcurried(1)(2)(3)(4)(5);
console.log(s1);

//Real Example of curried function
function getproperty(username,property){

    const txt="The user name is "+username+" and the property is "+property;
    return txt;
}
function curriedgetproperty(username){
    return (property)=>{
        return getproperty(username,property);
    }
}
const getMikeProperty = curriedgetproperty("mike");
const getHeight=getMikeProperty("tall");
const getWeight=getMikeProperty(50);
console.log(getHeight);
console.log(getWeight);
console.log(getMikeProperty);













