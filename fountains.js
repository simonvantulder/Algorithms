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



