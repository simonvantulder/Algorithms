//find the number that doesnt match (even vs odd || odd v even)
function iqTest(numbers) {
    // split string into an array
    numbers = numbers.split(' ')

    let evens = []
    let odds = []
    // push to even if even or odd array if odd
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] & 1) {
            odds.push(i + 1)
        } else {
            evens.push(i + 1)
        }
    }
 //return the number in the array with only one value
    return evens.length === 1 ? evens[0] : odds[0]
}


//functional version
function iqTest2(numbers) {
    numbers = numbers.split(" ");

    let odd = numbers.filter(function (i) { return i % 2 === 1 });
    let even = numbers.filter(function (i) { return i % 2 === 0 });

    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}


console.log(iqTest2("2 4 8 7 10"));
console.log(iqTest2("1 2 2 4 6"));
console.log(iqTest2("1 3 9 71 5 14"));