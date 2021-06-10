
let a1 = ["a"]
let b1 = ["d", "e"]

let a2 = ["c", "d"]
let b2 = ["c"]

let a3 = ["a", "a", "a", "a", "b", "c"]
let b3 = ["a", "b", "c"]


//in place, O(n^2) time complexity
function arrayDiff1(a, b) {
    let freqA = {};
    
    // create freq table of all chars in a[]
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
            deleted = a.splice(freqA[b[i]][0], freqA[`${b[i]}count`]) //assuming array is sorted (as in examples), remove counted num of appearances
        }
    }
    return a
}

//refactored inplace, time complexity 0(n^2) 
function arrayDiff3(a, b) {
    return a.filter(e => !b.includes(e));
}

//new arr O(n^2) time complexity
function array_diff(a, b) {
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) { //if index of a[i] is not found ie index == -1 push to new array
            arr.push(a[i]);
        }
    }
    return arr;
}

// //new arr O(n) time complexity
function arrayDiff2(a, b) {
    let freqA = {};
    let freqB = {};
    let freqA_NotB = {};
    let freqB_NotA = {};
    let returnArr = []
    
    // create freq table of all chars in a[]
    for (let i = 0; i < a.length; i++) {
        if (!freqA.hasOwnProperty(a[i])) {
            freqA[a[i]] = a[i];
        }
    }
    
    // create freq table of all chars in b[]
    for (let i = 0; i < b.length; i++) {
        if (!freqB.hasOwnProperty(b[i])) {
            freqB[b[i]] = b[i];
        }
    }
    
    //create freq table of all chars in a[] that are not in b[]
    for (let i = 0; i < a.length; i++) {
        if (!freqA_NotB.hasOwnProperty(a[i]) && !freqB.hasOwnProperty(a[i])) {
            freqA_NotB[a[i]] = a[i];
        }
    }
    
    // create freq table of all chars in b[] but not in a[]
    for (let i = 0; i < b.length; i++) {
        if (!freqB_NotA.hasOwnProperty(b[i]) && !freqA.hasOwnProperty(b[i])) {
            freqB_NotA[b[i]] = b[i];
        }
    }
    
    // create arr of differring chars
    for (let key in freqA_NotB) {
        returnArr.push(freqA_NotB[key])
    }
    for (let key in freqB_NotA) {
        returnArr.push(freqB_NotA[key])
    }
    return returnArr
}


console.log(arrayDiff2(a1, b1));