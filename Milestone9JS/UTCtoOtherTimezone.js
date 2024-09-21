const now = new Date();

// Locale: English (US), Time Zone: Eastern Time
const easternTimeShort = now.toLocaleString("en-US", { timeZone: "America/New_York", timeStyle: "short" });
const easternTimeLong = now.toLocaleString("en-US", { timeZone: "America/New_York", timeStyle: "long" });

// Locale: French, Date and Time Style
const frenchDate = now.toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });

// Custom format: 24-hour time and full date
const customFormat = now.toLocaleString("en-GB", { 
    timeZone: "Europe/London", 
    dateStyle: "full", //short,medium,long
    timeStyle: "medium",//short,medium,long
    hourCycle: "h24" //or"h12" 
});

console.log("Eastern Time (Short):", easternTimeShort);
console.log("Eastern Time (Long):", easternTimeLong);
console.log("French Date:", frenchDate);
console.log("Custom Format:", customFormat);



//Using Now
const time = Date.now();
const time1= new Date().getTime();
console.log(time, time1);
const date = new Date(time);
const currentDate = date.toString();
console.log(currentDate);


//Using toLocalDateStirng
const date1 = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date3 = date1.toLocaleDateString('en-IN', options);
  console.log(date3)

