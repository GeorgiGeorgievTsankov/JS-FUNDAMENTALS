function demo(input) {

    let wagon = input[0].split(` `).map(Number);
    let wagonCapacity = Number(input[1]);

    for (let index = 2; index < input.length; index++){
        let command = input[index].split(` `);

        if (command[0] === `Add`) {
            wagon.push(Number(command[1]));

        } else {
            let passengers = Number(command[0]);
        }

        let passengers = Number(command[0]);

        for (let j = 0; j < wagon.length; j++) {
            if (wagonCapacity - wagon[j] >= passengers){
                wagon[j]+=passengers;
                break;
            }

        }
    }


    console.log(wagon.join(` `));
}
demo(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])