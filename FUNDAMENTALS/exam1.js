function demo(input) {
  
      
      let spell = input[0];
    //   console.log(spell);
      for (let i = 1; i < input.length; i++) {

        let command = input[i].split(' ');
        let action = command[0];
        if (action === "Abracadabra") {
            break;
        }
      
        if (action === 'Abjuration') {
          spell = spell.toUpperCase();
          console.log(spell);



        } else if (action === 'Necromancy') {
          spell = spell.toLowerCase();
          console.log(spell);


        } else if (action === 'Illusion') {
          let index = parseInt(command[1]);
          let letter = command[2];

          if (!isNaN(index) && index >= 0 && index < spell.length) {
            spell = spell.substring(0, index) + letter + spell.substring(index + 1);
            console.log('Done!');
          } else {
            console.log('The spell was too weak.');
          }


        } else if (action === 'Divination') {
          let firstSubstring = command[1];
          let secondSubstring = command[2];
          if (spell.includes(firstSubstring)) {
            spell = spell.split(firstSubstring).join(secondSubstring);
          }


        } else if (action === 'Alteration') {
          let substring = command[1];
          if (spell.includes(substring)) {
            spell = spell.replace(new RegExp(substring, 'g'), '');
            console.log(spell);
          }
        } else {
          console.log('The spell did not work!');
        }
      }
      
    //   console.log(spell);
}
  demo(["TR1GG3R",

  "Necromancy",
  
  "Illusion 8 m",
  
  "Illusion 9 n",
  
  "Abracadabra"]); 
  
  