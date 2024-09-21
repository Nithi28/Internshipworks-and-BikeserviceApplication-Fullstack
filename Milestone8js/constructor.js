//Create a constructor name person
function Person(fname,lname,age){
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;

}
const person1=new Person("nithi","vidhya",20);
//add property to the constructor using prototype
Person.prototype.nationality="Indian";
//add property to the person1 object using defineProperty method
Object.defineProperty(person1,"school",{
    value:"Sengunthar",
    enumerable:true
})
console.log(person1["nationality"]);
console.log(Object.keys(person1));
//add setter and getter in to the person1 object
Object.defineProperty(person1,"college",
{   
    enumerable:true,
    get clg() {
        return this.college;
    },
    set clg(val){
        this.college=val;
    }
});
//set the value using setter
person1.clg="ESEC";
//change the value using setter
person1.clg="KEC";
//get the value using getter
console.log(person1.clg);
console.log(person1);