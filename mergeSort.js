/* 
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
        - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }

    // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
    while (indexLeft < left.length) {
        result.push(left[indexLeft]);
        indexLeft++;
    }

    while (indexRight < right.length) {
        result.push(right[indexRight]);
        indexRight++;
    }

    return result;

    // one liner version of adding in any left over items
    // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

function merge2(arr1, arr2) {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    while (current < arr1.length + arr2.length) {
        /* 
        In the case of different lengthed arrays and we finish all items in one
        array first, we want the remaining numbers from the other array to always
        be smaller so our condition will always push them. Everything is smaller
        than Infinity.
        */
        const unmerged1 = arr1[index1] === undefined ? Infinity : arr1[index1];
        const unmerged2 = arr2[index2] === undefined ? Infinity : arr2[index2];

        // if next comes from arr1
        if (unmerged1 < unmerged2) {
            merged.push(unmerged1);
            index1++;

            // if next comes from arr2
        } else {
            merged.push(unmerged2);
            index2++;
        }

        current++;
    }

    return merged;
}
// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(merge(sortedA3, sortedB3));
/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) { }