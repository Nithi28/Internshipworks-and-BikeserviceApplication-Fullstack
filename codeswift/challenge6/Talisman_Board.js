function getRequired(playerStats, enemyStats) {
    const [playerPower, playerModifier] = playerStats;
    const [enemyPower, enemyModifier] = enemyStats;
    const playerTotal = playerPower + playerModifier;
    const enemyTotal = enemyPower + enemyModifier;
    if (playerTotal - enemyTotal >= 6) {
      return "Auto-win";
    }
    if (enemyTotal - playerTotal >= 6) {
      return "Auto-lose";
    }
    if (playerTotal === enemyTotal) {
      return "Random";
    }
    const rollDifference = enemyTotal - playerTotal;
    if(playerTotal>enemyTotal){
        let res=(enemyTotal+7)-playerTotal;
        return `(${res}..6)`;
    }
    else if(enemyTotal>playerTotal && ((enemyTotal-playerTotal)<5)){
        let res=((playerTotal+6)-enemyTotal)-1;
        return `(1..${res})`;
    
    }
    else if(playerTotal==enemyTotal){
        return "Random"
    }
    else{
        return "Pray for a tie!";
    }
  }
  console.log(getRequired([5, 0], [3, 2])); 
  console.log(getRequired([9, 0], [2, 1])); 
  console.log(getRequired([2, 1], [9, 0])); 
  console.log(getRequired([6, 0], [2, 2])); 
  console.log(getRequired([7, 1], [2, 2])); 
  console.log(getRequired([4, 0], [6, 0])); 
  console.log(getRequired([1, 1], [6, 0])); 
  console.log(getRequired([7, 2], [6, 8])); 
  