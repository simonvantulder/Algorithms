
// join the arr, parse the string into binary based numbers
// Time Complexity O(n)
const binaryArrayToNumber = arr => {
    let binaryStr = ""
    arr.map((i) => binaryStr += i);
    return parseInt(binaryStr, 2)
};

//refactored
const binaryArrayToNumber2 = arr => parseInt(arr.join(''), 2);
