function addEven(numbers){
    let sum1=0;
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
        sum1+=numbers[i];
        }
    }
    return sum1;
}
let input = { "a": 2, "b": { "2": 4, "y": { "foo": 3, "z": {"bar": 2}}}, "c": {"p": {"h": 2, "r": 5}, "q": 'ball', "r": 5}, "d": 1, "e": {"nn": {"lil": 2}, "mm": 'car'}};

let txt=JSON.stringify(input);
const numbers =txt.match(/(?<!\w)(\d+)(?!\w)/g).map(Number)
console.log(addEven(numbers));