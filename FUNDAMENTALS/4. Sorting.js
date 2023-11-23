function demo(array) {


    let newArr = array.sort((a, b) => b - a);

    // console.log(newArr);
    let finalArr=[];

    let newArrLength = newArr.length;

    for (let index = 0; index < newArrLength; index++) {
        let biggestElement = array.shift();
        let smallerElement = array.pop()

        finalArr.push(biggestElement);
        finalArr.push(smallerElement);
    }

    console.log(finalArr.join(` `));
    

}
demo([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]);
