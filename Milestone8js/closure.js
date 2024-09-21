function outer(){
    function changeValue(val){
        return function(){
            return val;
        }
    }
    
    let i=0;
    let arr=[];
    for (i=0;i<4;i++){
         arr[i]=changeValue(i);
    }
    return arr;
}
let arr1=outer();
console.log(arr1[0]);
console.log(arr1[1]());
console.log(arr1[2]());
console.log(arr1[3]());