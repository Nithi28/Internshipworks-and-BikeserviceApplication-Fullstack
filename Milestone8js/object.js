function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];
  
    while (objectToInspect !== null) {
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));
      objectToInspect = Object.getPrototypeOf(objectToInspect);
      console.log(Object.getPrototypeOf(objectToInspect));
    }
  
    return result;
  }
 myObj={
    name:"Nithi",
    lname: "Rode"
 }  
 console.log(listAllProperties(myObj))