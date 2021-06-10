function digPow(n, p) {
    nStr = n.toString() // cast int as string to loop through
    sum = 0;

    //loop through each number and raise it to power of p+i
    for (let i = 0; i < nStr.length; i++) {
        sum += parseInt(nStr[i]) ** (p + i);
    }
    return sum % n === 0 ? sum / n : -1; //return solution if sum of powers is divisible by n else -1
}

//refactored
function digPow2(n, p) {
    // "**" is the exp shorthand in js, can also use Math.pow()
    var x = String(n).split("").reduce((sum, digit, i) => sum += (digit ** (p + i)), 0) 
    return x % n ? -1 : x / n;
}

console.log(digPow2(46288, 3));