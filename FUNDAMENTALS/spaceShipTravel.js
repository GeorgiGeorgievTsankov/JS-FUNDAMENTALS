function spaceShipTravel(input) {
    let [commands, startingFuel, startingAmmunition] = input;
  
    let travelRoute = commands.split('||');
    let fuel = Number(startingFuel);
    let ammunition = Number(startingAmmunition);
  
    for (let i = 0; i < travelRoute.length; i++) {
      let currentCommand = travelRoute[i].split(' ');
      let command = currentCommand[0];
      let value = Number(currentCommand[1]);
  
      if (command === 'Travel') {
        if (fuel >= value) {
          fuel -= value;
          console.log(`The spaceship travelled ${value} light-years.`);
        } else {
          console.log('Mission failed.');
          return;
        }
      } else if (command === 'Enemy') {
        if (ammunition >= value) {
          ammunition -= value;
          console.log(`An enemy with ${value} armour is defeated.`);
        } else {
          let enemyPoints = value;
          console.log(`An enemy with ${enemyPoints} armour is outmaneuvered.`);
          return;
        }
      } else if (command === 'Repair') {
        ammunition += value * 2;
        fuel += value;
        console.log(`Ammunitions added: ${value * 2}.`);
        console.log(`Fuel added: ${value}.`);
      } else if (command === 'Titan') {
        console.log('You have reached Titan, all passengers are safe.');
        return;
      }
    }
  }
  
  let array = [
    'Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'
  ];
  
  spaceShipTravel(array);
  