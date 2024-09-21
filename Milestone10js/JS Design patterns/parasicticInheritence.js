const person={
    name:"name",
    age:0,
    introduce(){
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    },
}
//parasitic function
function Employees(name,age,position){
    const emp= Object.create(person);
    emp.name=name;
    emp.age=age;
    emp.position=position;
    emp.work=function(){
        console.log(`${this.name} is working as a ${this.position}.`);
    }
    return emp;
}
const emp1=Employees("Nithi",23,"Developer");
emp1.introduce();
emp1.work();