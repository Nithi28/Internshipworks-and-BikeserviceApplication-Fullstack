
const oldMobileKeyboard = {  
    '1': ['1'],
    '2': ['2', 'a', 'b', 'c'],
    '3': ['3', 'd', 'e', 'f'],
    '4': ['4', 'g', 'h', 'i'],
    '5': ['5', 'j', 'k', 'l'],
    '6': ['6', 'm', 'n', 'o'],
    '7': ['7', 'p', 'q', 'r', 's'],
    '8': ['8', 't', 'u', 'v'],
    '9': ['9', 'w', 'x', 'y', 'z'],
    '*':'*',
    '0': '0',
    '#':'#'
};
function findValue(txt,obj){
    let sum1=0;
    for (let val of txt){
        for (const key in obj){
            if(obj[key].includes(val)){  
                sum1+=obj[key].indexOf(val)+1;
                break;  
            }
        }
    }
   return sum1;  
}
let txt="codewars";
console.log(findValue(txt,oldMobileKeyboard));