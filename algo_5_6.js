/* 
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
function partitionRecursive(nums, leftIdx = 0, rightIdx = nums.length - 1) { 
    if (nums.length <= 1) {
        return nums;
    }

    middle = Math.floor((nums.length - 1)/2)

    while (nums[leftIdx] < nums[middle]) {
        leftIdx++;
    }
    while (nums[rightIdx] > nums[middle]) {
        rightIdx--;
    }

    if (leftIdx >= rightIdx) {
        return nums;
    }

    [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
    //left and right have been swapped so might as well increment them
    leftIdx++;
    rightIdx++;

    return partitionRecursive(nums, leftIdx, rightIdx);
}

console.log(partitionRecursive(nums2));


function partition(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let left = 0;
    let leftIdx = 0;
    let right = nums.length - 1
    let rightIdx = nums.length - 1
    let middle = Math.floor((right - left) / 2) + left;
    // let pivot = nums[middle];
    while (true) {

        while (nums[leftIdx] < nums[middle]) {
            leftIdx++;
            console.log("leftIdx " + leftIdx);
        }
        while (nums[rightIdx] > nums[middle]) {
            rightIdx--;
            console.log("rightIdx " + rightIdx);
        }

        if (leftIdx >= rightIdx) {
            return nums;
        }

        [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
        leftIdx++;
        rightIdx++;
    }

    // return partition(nums, leftIdx, rightIdx, middle);
    return (nums);
}

module.exports = {
    partition,
    };
    
  // console.log(partition(nums2));