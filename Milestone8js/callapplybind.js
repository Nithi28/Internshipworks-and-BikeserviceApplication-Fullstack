//Call()

const person={
    fullname : function(location){
        return this.firstName+" and "+this.lastName+" Location "+location;
    }
}
const person1={
    firstName: "vidhya",
    lastName: "Ntihi"
}
const person2={
    firstName: "Rose",
    lastName: "Ntihi"
}
console.log(person.fullname.call(person2,"Erode"));

//Apply
const person3={
    fullname : function(location1){
        return this.firstName+" and "+this.lastName+" Location "+location1[0]+" and "+location1[1];
    }
}
const person4={
    firstName: "vidhya",
    lastName: "Ntihi"
}
const person5={
    firstName: "Rose",
    lastName: "Ntihi"
}
console.log(person3.fullname.call(person5,["Erode","Madurai"]));

//Bind

const person6= {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person6.fullName.bind(member);
  
 console.log( fullName());