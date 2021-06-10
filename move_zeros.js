let moveZeros = function (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1); //remove 0 from arr & shift values
            arr.push(0); //add to the end
        }
    }
    return arr;
}

//refactored
let moveZeros2 = function (arr) {
    return [
        ...(arr.filter(n => n !== 0)), //return list with none of the zeros
        ...(arr.filter(n => n === 0)) //return the list with only the zeros
    ];
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))