// LONGEST NONREPEATING SUBSTRING

// Given a string, find the length of the longest substring without repeating characters.
// bonus: O(n)

let str1 = "abc"
// => 3

let str2 = "bbb"
// => 1

let str3 = "cabc"
// => 3

let str4 = "aabbc"
// => 2

let str5 = "dvadf"
// => 4

const lengthOfLongestSubstr = (s) => {
    let freq = {};
    let maxCount = count = startIdx = 0;

    for (let i = 0; i < s.length; i++) {
        //enter into dict, skip duplicates
        if (!freq.hasOwnProperty(s[i])) {
            freq[s[i]] = i;
            count++;

            // reset maxCount when eclipsed
            if (count > maxCount) {
                maxCount = count;
            }
            // reset count & freq when duplicate found
        } else {
            i = freq[s[i]];
            freq = {};
            count = 0;
        }
    }
    return maxCount
}

console.log(lengthOfLongestSubstr(str4))