let x = "";
let y="78";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
// for (let i in myObj.cars){
//   console.log(myObj.cars[i].name+"\n");
//   for( let k in myObj.cars[i].models){
//     console.log(myObj.cars[i].models[k]+"\n");
//   }

// }
let z=+y;
console.log(typeof(cars));



for ( let i in myObj.cars){
    console.log(myObj.cars[i].name+"\n");
    for (let j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]+"\n");
    }
    
}