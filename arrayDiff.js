
let a1 = []
let b1 = ["d", "e"]

let a2 = ["c", "d"]
let b2 = ["c"]

let a3 = ["a", "a", "a", "a", "b", "c"]
let b3 = ["a", "b", "c"]

//new arr O(n) time complexity
function array_diff(a, b) {
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            arr.push(a[i]);
        }
    }
    return arr;
}

//in place, O(n^2) time complexity
function arrayDiff(a, b) {
    let freqA = {};

    for (let i = 0; i < a.length; i++) {
        if (!freqA.hasOwnProperty(a[i])) {
            freqA[a[i]] = [i, i];
            freqA[`${a[i]}count`] = 1;
        }
        else {
            freqA[a[i]].push(i)
            freqA[`${a[i]}count`]++
        }
    }
    for (let i = b.length - 1; i >= 0; i--) {
        if (freqA.hasOwnProperty(b[i])) {
            deleted = a.splice(freqA[b[i]][0], freqA[`${b[i]}count`]) //assuming array is ordered as in examples, remove counted num of appearances
        }
    }
    return a
}

//inplace time complexity 0(n)?
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}
console.log(arrayDiff(a3, b3))