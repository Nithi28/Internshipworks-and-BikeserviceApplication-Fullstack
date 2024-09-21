let var1="FirstName";
let var2="LastName";
let prop1="AgeIsLessThan22";
let prop2="AgeIsLessThan22";
let age=21;
const obj={
    [var1]:"Vidhya",
    [var2]:"Nithi",  
    [age > 22 ?prop1 : prop2]: true
}
const obj1={};
const obj2={...obj};
Object.assign(obj1,obj);
Object.preventExtensions(obj1);
obj1.name="rose";
console.log(obj1);
console.log(obj2);
console.log(Object.values(obj1));