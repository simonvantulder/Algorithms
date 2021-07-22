// // _______________________________________ attempt 1 ______________________________________________
// function fountainActivation(locations) {
//     // FountainRanges[i]: Stores the position of leftmost fountain that can be covered by water of left side of the i-th fountain, updated below on ln64
//     let FountainRanges = [];


//     // Stores index of leftmost fountain
//     let idxLeft;
//     // Stores index of rightmost fountain
//     // in the range of i-th fountain
//     let idxRight;

//     // Traverse the array
//     for (let i = 0; i < locations.length; i++) {
//         idxLeft = Math.max(i - locations[i], 0);
//         idxRight = Math.min(i + (locations[i] + 1), locations.length);
//         if(FountainRanges[idxLeft]){
//             if(FountainRanges[idxLeft] < idxRight){
//                 FountainRanges[idxLeft] = idxRight;
//             }
//         } else {
//             FountainRanges[idxLeft] = idxRight;
//         }
//     }

//     // Stores count of fountains
//     // needed to be activated
//     let cntfount = 1;

//     // Stores index of next fountain
//     // that needed to be activated
//     let idxNext = 0;
//     idxRight = FountainRanges[0];

//     // Traverse FountainRanges[] array
//     for (let i = 0; i < locations.length; i++) {
//         idxNext = Math.max(idxNext, FountainRanges[i]);

//         // If left most fountain
//         // cover all its range
//         if (i == idxRight) {
//             cntfount++;
//             idxRight = idxNext;
//         }
//     }
//     return cntfount;
// }

// let locations = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let c = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5]
// console.log(fountainActivation(c));



//-----------------------------Attempt 2--------------------------------------------

// There is a one-dimensional garden of length N. In each position of the N length garden, a fountain has been installed. Given an array a[]such that a[i] describes the coverage limit of ith fountain. A fountain can cover the range from the position max(i – a[i], 1) to min(i + a[i], N). In beginning, all the fountains are switched off. The task is to find the minimum number of fountains needed to be activated such that the whole N-length garden can be covered by water.



// Examples:

// Input: a[] = {1, 1, 2, 1, 1}
// Output: 1
// Explanation:
// For position 1: a[1] = 1, range = 1 to 2
// For position 2: a[2] = 2, range = 1 to 3
// For position 3: a[3] = 1, range = 2 to 3
// Therefore, the fountain at position a[2] covers the whole garden.
// Therefore, the required output is 1.

let a = [2, 1, 1, 2, 1]
Output: 2 

//index       0    1    2    3    4    5    6    7    8     9 
let b =     [ 2,   4,   1,   3,   2,   1,   1,   1,   2,    1]
//range     [1,3][1,6][2,4][1,7][3,7][5,7][6,8][7,9][7,10][9,10]

// rangeObject = [[min1, max1],[min2, max2],[min3, max3]]



function fountains(arr) {
    let count = 0;
    let maxtemp = 0;
    let rangeArray = [];

    for(let i =0; i < arr.length; i++){
        rangeArray.push([Math.max(i+1-arr[i], 1), Math.min(i+1+arr[i], arr.length)])
    }

    while(maxtemp < arr.length){
        let mintemp = maxtemp+1;
        for (let i = maxtemp; i < rangeArray.length; i++) {
            if (rangeArray[i][0] <= mintemp){
                if (rangeArray[i][1] > maxtemp) {
                    maxtemp = rangeArray[i][1];
                }
            }
        }
        count++
    }
    console.log(rangeArray)
    console.log(count)
}
fountains(b);


let c = [2, 1, 1, 2, 2, 1, 1, 1, 1, 5]

// fountains(c)



