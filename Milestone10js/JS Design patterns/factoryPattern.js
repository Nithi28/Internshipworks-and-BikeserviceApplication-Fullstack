function developer(name){
    this.name=name,
    this.role="Developer"
}
function tester(name){
    this.name=name,
    this.role="Tester"
}
function factoryEmployees(){
    this.create=(name,type)=>{
        switch(type){
            case 1:
                return new developer(name)
                break;
            case 2:
                return new tester(name)
                break;
        }
    }
}
function say(){
    console.log("Hai I am "+this.name+" and I am "+this.role);
}
const emp=new factoryEmployees();
const employees=[];
employees.push(emp.create("Nithi",1));
employees.push(emp.create("Rose",1));
employees.push(emp.create("Sundu",2));
employees.push(emp.create("Gowri",2));
employees.forEach((emp)=>{
    say.call(emp);
})