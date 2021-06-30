
function fountainActivation(locations) {
    // dp[i]: Stores the position of leftmost fountain that can be covered by water of left side of the i-th fountain, updated below on ln64
    let dp = [];


    // Stores index of leftmost fountain
    let idxLeft;
    // Stores index of rightmost fountain
    // in the range of i-th fountain
    let idxRight;

    // Traverse the array
    for (let i = 0; i < locations.length; i++) {
        idxLeft = Math.max(i - locations[i], 0);
        idxRight = Math.min(i + (locations[i] + 1), locations.length);
        dp[idxLeft] = idxRight;
    }

    // Stores count of fountains
    // needed to be activated
    let cntfount = 1;

    // Stores index of next fountain
    // that needed to be activated
    let idxNext = 0;
    idxRight = dp[0];

    // Traverse dp[] array
    for (let i = 0; i < locations.length; i++) {
        idxNext = Math.max(idxNext, dp[i]);

        // If left most fountain
        // cover all its range
        if (i == idxRight) {
            cntfount++;
            idxRight = idxNext;
        }
    }
    return cntfount;
}

let locations = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(minCntFoun(locations));