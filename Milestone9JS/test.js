// Epoch timestamp of the upcoming event
const eventTimestamp = 1679433600;  // This represents a future date and time
console.log(eventTimestamp);
// Get the current epoch timestamp
const currentTimestamp = Date.now() / 1000;  // Convert milliseconds to seconds
console.log(currentTimestamp);

// Calculate the time remaining in seconds
const timeRemaining = eventTimestamp - currentTimestamp;

// Convert time remaining into hours, minutes, and seconds
const hours = Math.floor(timeRemaining / 3600);
const minutes = Math.floor((timeRemaining % 3600) / 60);
const seconds = Math.floor(timeRemaining % 60);

// Display the time remaining
console.log(`Time remaining: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
const future=new Date(2024,4,1,12,45,10);
let now=Date.now();
console.log(future.getTime());
console.log(now);