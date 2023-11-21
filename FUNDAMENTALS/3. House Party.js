function demo(arr) {

    let gestList = [];


    for (const person of arr) {
        let personName = person.split(" ");


        if (personName[2] === `not`) {
            if (gestList.includes(personName[0])) {
                let name = gestList.indexOf(personName[0])
                gestList.splice(name, 1);


            } else {
                console.log(`${personName[0]} is not in the list!`);
            }
        } else if (personName[1] === `is`) {

            if (gestList.includes(personName[0])) {
                console.log(`${personName[0]} is already in the list!`);
            } else {
                gestList.push(personName[0])
            }

        }

    }

    // console.log(`${gestList.join(`\n`)}`);
    gestList.forEach(person => console.log(person)); 
}
demo(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);