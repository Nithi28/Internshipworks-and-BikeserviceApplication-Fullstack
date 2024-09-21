function cakes(needed,available) {
    let max;
    for (var ingredient in needed) {
      if (available[ingredient])
       {
        let  possible= Math.floor( available[ingredient] / needed[ingredient]);
        if (!max||possible < max) 
        {
          max = possible;
        }
      } 
      else 
      {
        return 0;
      }
    }
    return max;
  }
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));