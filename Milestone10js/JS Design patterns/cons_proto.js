//constructor/prototype pattern in ES5 using function
function person(fname,lname){
    this.fname=fname,
    this.lname=lname
}
person.prototype.getFullName=function() {
    console.log("First Name "+this.fname+" Last Name " +this.lname);
}
const p1=new person("Vidhya","Nithi");
p1.getFullName()



//constructor/prototype pattern in ES6 using class
class Person{
    constructor(fname1,lname1){
        this.fname1=fname1,
        this.lname1=lname1
    }
    getFullName1(){
        return "First Name "+this.fname1+" Last Name " +this.lname1;
    }
}
const P1=new Person("Rose","Nithi");
console.log(P1.getFullName1());
