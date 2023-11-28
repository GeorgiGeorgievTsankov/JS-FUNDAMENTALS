// function theLift(array) {

//     let people = Number(array[0]);
//     let lift = (array[1]).split(" ").map(Number);
//     let fill=lift.length*4;
//     let startPeople=people

//     for (let i = 0; i < lift.length; i++) {
//         let freePlaces = 4 - lift[i];
    
//         for (let j = 1; j <= freePlaces; j++) {
//           if (people > 0 && lift[i] < 4) {
//             people--;
//             lift[i]++;
            
//           } else {
//             break;
//           }
//         }
    
//         if (people === 0) {
//           break;
//         }
//       }

    

//     if (people > 0) {
//             console.log(`There isn't enough space! 10 people in a queue!`);
//             console.log(`${lift.join(" ")}`);

//     }


//     if (people === 0) {

//         if (people === 0 && fill === startPeople) {
//             console.log(`${lift.join(" ")}`);
        
//         }else if (fill-startPeople > 4) {
//             console.log(`The lift has empty spaces!`);
//             console.log(`${lift.join(" ")}`);
//         }
//         else {
//             console.log(`The lift has empty spots!`);
//             console.log(`${lift.join(" ")}`);
//         }

//     }






// }
// theLift([
//     "15",
//     "0 0 0 0"
//    ]);



// function theLift(array) {
//     let people = Number(array[0]);
//     let lift = array[1].split(" ").map(Number);
//     let fill = 0;
//     let startPeople = people;
  
//     for (let i = 0; i < lift.length; i++) {
//       let freePlaces = 4 - lift[i];
  
//       for (let j = 1; j <= freePlaces; j++) {
//         if (people > 0 && lift[i] < 4) {
//           people--;
//           lift[i]++;
//           fill++;
//         } else {
//           break;
//         }
//       }
  
//       if (people === 0) {
//         break;
//       }
//     }
  
//     if (people > 0) {
//       return `There isn't enough space! ${people} people in a queue!\n${lift.join(" ")}`;
//     }
  
//     if (people === 0) {
//       if (fill === startPeople) {
//         return lift.join(" ");
//       } else {
//         return `The lift has empty spots!\n${lift.join(" ")}`;
//       }
//     }
//   }
  
//   const result = theLift(["15", "0 0 0 0 0"]);
//   console.log(result);
  
function theLift(input) {
 
    let ppl = Number(input.shift());
    let wagons = input.shift().split(' ');
    let wagonSpaceCount = 0;
 
    for (let i = 0; i < wagons.length; i++) {
 
        let currWagon = Number(wagons[i]);
        if (currWagon < 4) {
            if (ppl >= 4) {
 
                if (currWagon != 0) {
                    ppl -= (4 - currWagon);
                    currWagon = 4;
                    wagons[i] = currWagon;
                    emptySpots = false;
                } else {
                    currWagon = 4;
                    ppl -= currWagon;
                    wagons[i] = currWagon;
                }
 
            } else {
                currWagon += ppl;
                ppl = 0;
                wagons[i] = currWagon;
                emptySpots = true;
            }
        }
    }
    if (ppl != 0) {
        console.log(`There isn't enough space! ${ppl} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        for (let wagon of wagons) {
            
            if (wagon === 4) {
                wagonSpaceCount++;
            }
        }
        if (wagonSpaceCount != wagons.length) {
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`)
        } else {
            console.log(`${wagons.join(' ')}`)
        }
    }
}
theLift([
    "15",
    "0 0 0 0 0"
   ]);