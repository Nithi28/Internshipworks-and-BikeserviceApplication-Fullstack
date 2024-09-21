function findMinPurse(x,y){
let str1=x;
let str2=y
let count1=1;
let str3, str4;
const max1 = Math.max(str1.length, str2.length);
const max2 = Math.min(str1.length, str2.length);
if (str1.length > str2.length) { 
  str3 = str1; 
  str4 = str2;
} else {
  str3 = str2; 
  str4 = str1; 
}
for(let i=1;i<max1-1;i++){
    let num=i;
    count=i+1;
    for (let j=0;j<max2;j++){
        if(str4[j]!=str3[num]||(str4[j]=='.'&&str3[num]=='.')){
            if(j==max2-1){
                if(num<max1){
                count+=max1-(num+1);}
                return count
            }
            num+=1; 
            count+=1
        }
        else{
            break;
        }
    }
    if(count>=count1){
        count1=count;
    } }
return count1;}
str1="*..***"
str2="*..*"
const arr=[]
arr.push(findMinPurse(str1,str2));
arr.push(findMinPurse([...str1].reverse().join(''),str2));
arr.push(findMinPurse(str1,[...str2].reverse().join('')));
arr.push(findMinPurse([...str1].reverse().join(''),[...str2].reverse().join('')));
console.log(Math.max(...arr))