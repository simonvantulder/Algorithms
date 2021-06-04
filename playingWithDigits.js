function digPow(n, p) {
    nStr = n.toString()
    sum = 0
    for (let i = 0; i < nStr.length; i++) {
        sum += parseInt(nStr[i]) ** (p + i);
    }
    return sum % n === 0 ? sum / n : -1;
}

//refactored
function digPow2(n, p) {
    // "**" is the exp shorthand in js or use Math.pow()
    var x = String(n).split("").reduce((sum, digit, i) => sum += (digit ** (p + i)), 0) 
    return x % n ? -1 : x / n;
}

console.log(digPow2(46288, 3));