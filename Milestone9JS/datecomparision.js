

/*let date1 = new Date();
let date2 = new Date("6/01/2022");

if (date1 > date2) {
  console.log("Date 1 is greater than Date 2");
} else if (date1 < date2) {
  console.log("Date 1 is less than Date 2");
} else {
  console.log("Both Dates are same");
}
console.log(date1);
console.log(date2)
/* This will not work on comparion like ===,== >=,<=,!= 
To work on this comaprision operator we have to use date methods like getTime(),getYear(),getDate etc..*/





const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    console.log(date1,date2)
    if (date1 ===date2) {
      console.log(`${d1}, ${d2} Both are equal`);
    } else if (date1 > date2) {
      console.log(`${d1} is greater than ${d2}`);
    } else if(date1 < date2) {
      console.log(`${d1} is lesser than ${d2} `);
    }
    console.log(date1!=date2? "Both are not equal": "Both are equal")
  };
  
  compareDates("06/21/2022", "07/28/2021");
  compareDates("01/01/2001", "01/01/2001");
  compareDates("11/01/2021", "02/01/2022");
  

