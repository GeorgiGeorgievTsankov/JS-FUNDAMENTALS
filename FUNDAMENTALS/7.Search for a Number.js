function demo(array, Two) {


    let newLength = Number(Two[0]);
    let removeNum = Number(Two[1]);
    let ourNum = Number(Two[2]);

    let newArr = array.splice(0, newLength);
    newArr.splice(0, removeNum);

    let counter=newArr.filter(el => el=== ourNum).length;
    console.log(`Number ${ourNum} occurs ${counter} times.`);

}
demo([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
