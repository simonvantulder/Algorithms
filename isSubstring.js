// STRING MATCHING IN AN ARRAY

// Given an array of string words. Return all strings in words which is substring of another i in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Examples:

let words1 = ["mass","as","hero","superhero"]
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.


// Example 2:

let words2 = ["leetcode","et","code"]
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".


// Example 3:

let words3 = ["blue","green","bu"]
// Input: words = ["blue","green","bu"]
// Output: []


// Constraints:
// words[i] contains only lowercase English letters.
// It's guaranteed that words[i] will be unique.


//one liner solution
let isSubString2 = word => word.filter((word1 => word.some(word2 => word2.includes(word1) && word2 !== word1)))

//verbose solution
function isSubString(words) {
    newWordArr = [];
    for(let i = 0 ; i<words.length; i++){
        for(let j = 0; j< words.length; j++){
            if(words[i].length < words[j].length){
                if(words[j].includes(words[i])){
                    newWordArr.push(words[i]);
                }
            }
        }
    }
    return newWordArr
}


console.log(isSubString(words3));