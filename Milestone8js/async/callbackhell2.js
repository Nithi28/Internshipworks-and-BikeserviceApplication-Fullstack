// Example asynchronous function
function asynchronousFunc(params, callback) {
    // This function throws an error if no parameters are passed
    if (!params) {
    return callback(new Error('Something went wrong with this request'));
    } else {
      // returning a random number so it may seem like the contrived asynchronous function
    return setTimeout( () => 
        callback(null, {body: params + ' function is executed. ' + Math.floor(Math.random() * 10)}),
        500)
    }
}

// node js callback hell 
// Nesting of the callbacks
function callbackHell() {
  asynchronousFunc('First', function first(error, response) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(response.body);
    asynchronousFunc(null, function third(error, response) {
        if (error) {
          console.log(error);
          return;
        }
        console.log(response.body);
      })
    asynchronousFunc('Second', function second(error, response) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(response.body);
      // passing null parameter so that other nested functions inside this request will not execute
    })
  })
};

// Execute the pyramid of doom
callbackHell();
