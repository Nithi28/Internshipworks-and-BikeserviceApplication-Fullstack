let input = { "a": 2, "b": { "x": 4, "y": { "foo": 3, "z": {"bar": 2}}}, "c": {"p": {"h": 2, "r": 5}, "q": 'ball', "r": 5}, "d": 1, "e": {"nn": {"lil": 2}, "mm": 'car'}};
function findNumbers(input) {
    let numbers = [];
    for (let x in input) {
        if (typeof input[x] === 'number') {
            numbers.push(input[x]);
        } else if (typeof input[x] === 'object') {
            console.log(numbers);
            numbers = numbers.concat(findNumbers(input[x]));
        }
    }
    console.log(numbers);
    return numbers;
}
function addEven(numbers){
    let sum1=0;
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
        sum1+=numbers[i];
        }
    }
    return sum1;
}
let numbers = findNumbers(input);
console.log(addEven(numbers));
