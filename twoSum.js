// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

const nums2 = [2, 11, 7, 4, 5, 30, 13, 3, 15];
const targetSum2 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum(nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > targetSum) {
            continue
        }
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] == targetSum) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(nums2, targetSum2))


function twoSum3(nums, targetSum) {
    let result = [];
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] = i;
        let diff = targetSum - nums[i];
        if (dict.hasOwnProperty(diff)) {
            result.push(dict[diff], num[i]);
        }
        return result;
    }
}

console.log(twoSum(nums1, targetSum1))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time
*/

const nums5 = [1, 1, 1, 2, 2, 3];
const k5 = 2;
const expected5 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums3 = [0, 0, 0, 2, 2, 3];
const k3 = 1;
const expected3 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums4 = [1, 1, 2, 2, 3, 3, 5, 5, 5, 5];
const k4 = 3;
const expected4 = [1, 2, 3];
/* 
    Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
    a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
    1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
    const mostFreqNums = [];
    const freq = {};
    const inverseFreq = {};
    let maxFreq = 0;

    for (const num of nums) {
        if (freq.hasOwnProperty(num)) {
            freq[num]++;

            if (freq[num] > maxFreq) {
                maxFreq = freq[num];
            }
        } else {
            freq[num] = 1;
        }
    }

    // build a frequency table that is a reverse of the above to avoid O(n^2)
    // since multiple ints can have the same frequency, value must be an array of the ints that have that frequency
    // since keys are strings, convert the numKey back to an int when adding it to the array
    for (const numKey in freq) {
        const frequency = freq[numKey];
        console.log(freq[numKey])
        console.log(numKey)
        console.log("++++++++++++++++++++++")


        if (inverseFreq.hasOwnProperty(frequency)) {
            inverseFreq[frequency].push(+numKey);
        } else {
            // create the array with the first num found that has this frequency
            inverseFreq[frequency] = [+numKey];
        }
    }

    let nextMostFreq = maxFreq;

    while (mostFreqNums.length < k && nextMostFreq > 0) {
        if (
            inverseFreq.hasOwnProperty(nextMostFreq) &&
            inverseFreq[nextMostFreq].length > 0
        ) {
            mostFreqNums.push(inverseFreq[nextMostFreq].pop());
        } else {
            // no nums have this frequency, decr to check for next most freq
            nextMostFreq--;
        }
    }
    return mostFreqNums;
}

console.log(kMostFrequent(nums4, k4));

