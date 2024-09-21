function split(str,n){
    let maxPos=str.length-n;
    let max=0;
    for (let i=0;i<str.length;i++){
        let str1=str.substr(i,maxPos);
        max=max<(+str1)?+str1:max;
    }
    console.log(max)
}
split("129009", 2);
