function computeStore(input) {

    let index = 0;
    let command = input[index];
    index++
    let amount = 0;
    while (command !== `special` && command !== `regular`) {
        let element = Number(command);

        if (element <= 0) {
            console.log("Invalid price!");
        } else {
            amount += element;
        }

        command = input[index];
        index++
    }


    if (command === "special") {

        if (amount === 0) {
            console.log("Invalid order!");

        } else {
            let total = amount * 1.2;
            let taxes = total - amount;
            let afterDiscount = total * 0.9;
        }

    } else if (command === 'regular') {


        if (amount === 0) {
            console.log("Invalid order!");

        } else {
            let total = amount * 1.2;
            let taxes = total - amount;
        }

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${amount.toFixed(2)}$`);
        console.log(`Taxes: ${Math.abs(taxes.toFixed(2))}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(afterDiscount.toFixed(2))}$`);
    }






}
// computeStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);
computeStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'])
