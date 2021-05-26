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
        if (!freq.hasOwnProperty(s[i])) {
            freq[s[i]] = i;
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            i = freq[s[i]];
            freq = {};
            console.log("freq[s[i]]  = ", freq[s[i]] )
            count = 0;
        }
        console.log("s[i] = ", s[i])
        console.log("i = ", i)
    }
    console.log(freq)
    return maxCount
}

console.log(lengthOfLongestSubstr(str4))