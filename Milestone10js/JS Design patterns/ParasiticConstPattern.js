function person(name,age){
    this.name=name,
    this.age=age
}
//parasitic function
function addAbilities(p){
    p.talk=function(){
        console.log(this.name+" Can Talk")
    }
    p.isAdult=function(){
        if(this.age>18){
            console.log(this.name+" is adult");
        }
        else{
            console.log(this.name+"is not an adult");
        }

    }
    return p
}
const p1=new person("Nithi",22);
p=addAbilities(p1);
p1.talk();
p1.isAdult()