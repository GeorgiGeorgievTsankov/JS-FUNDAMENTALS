function demo(numbers) {

    let newArr=[];

    for (const num of numbers) {
        if (!newArr.includes(num)) {
            newArr.push(num)
        }
    }
    console.log(newArr.join(` `));



    
}
demo([7, 8, 9, 7, 2, 3,
    4, 1, 2]);