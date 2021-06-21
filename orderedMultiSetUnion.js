/* 
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let indexA = 0;
    let indexB = 0;
    let resultArray = [];

    //while inbounds continue
    while (indexA < sortedA.length && indexB < sortedB.length) {
        //push the smaller of the two vals @ index
        if (sortedA[indexA] < sortedB[indexB]) {
            resultArray.push(sortedA[indexA]);
            indexA++;
        //push the smaller of the two vals @ index
        } else if (sortedA[indexA] > sortedB[indexB]) {
            resultArray.push(sortedB[indexB]);
            indexB++;
        //push the one of the two values @ index
        } else if (sortedA[indexA] == sortedB[indexB]) {
            resultArray.push(sortedA[indexA]);
            indexA++;
            indexB++;
        }
    }
    //finish pushing any remaining values
    while (indexA < sortedA.length) {
        resultArray.push(sortedA[indexA]);
        indexA++;
    }
    //finish pushing any remaining values
    while (indexB < sortedB.length) {
        resultArray.push(sortedB[indexB]);
        indexB++;
    }
    return resultArray;
}

/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];

const squareMatrix2 = [[1, 2, 3, 1],
[4, 5, 6, 1],
[9, 8, 9, 1],
[1, 1, 1, 1]];


const expected2 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let counter = 0;
    let sum1 = sum2 = 0;
    let result = 0;
    // traverse the array grid diagonally top left->bottom right
    for (let i = 0; i < sqrMatrix.length; i++) {
        sum1 += sqrMatrix[i][i];
    }
    // traverse the array grid diagonally top right->bottom left
    for (let j = sqrMatrix.length - 1; j >= 0; j--) {
        sum2 += sqrMatrix[j][counter];
        counter++;
    }
    
    // return abs val of sum1 - sum2
    return sum1 - sum2 < 0 ? (sum1 - sum2) * -1 : sum1 - sum2;
}

console.log(diagonalDifference(squareMatrix2));