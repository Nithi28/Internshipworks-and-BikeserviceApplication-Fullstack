function addEven(txt){
    let sum1=0;
    for (let i=0;i<txt.length;i++){
        if(!isNaN(txt[i])&& (parseInt(txt[i])%2==0)){
        sum1+=parseInt(txt[i]);
        }
    }
    return sum1;
}
let input = { "a": 2, "b": { "x": 4, "y": { "foo": 3, "z": {"bar": 21}}}, "c": {"p": {"h": 2, "r": 5}, "q": 'ball', "r": 5}, "d": 1, "e": {"nn": {"lil": 2}, "mm": 'car'}};
let txt=JSON.stringify(input);
console.log(addEven(txt));