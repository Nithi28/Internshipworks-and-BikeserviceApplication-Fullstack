	
function splitinp(txt){
    return txt.match(/[a-zA-Z]+|\d/g);
}
function swap(splited){
    let count=0;
    let n=splited.length;
    for (let i=1;i<n;i++){
        if(splited[i]=='0'){
            count+=1;
        }
        if(isNaN(splited[i])){
            let n1=i;
        for (let j=n1-1;j>=0;j--){
            if(!isNaN(splited[j])){
                let a=splited[n1];
                splited[n1]=splited[j];
                splited[j]=a;
                n1--;
            }
            else{
                break;
            }
        }
    }
    }
    console.log(count);
    splited=splited.filter(item => item !== '0');
    splited=splited.concat(new Array(count).fill("0"));
    return splited;
}
let txt="false1012013a";
let splited=splitinp(txt);
console.log(splited);
let final=swap(splited);
console.log(final);
let res= !("true"=="false");
console.log(res);
            