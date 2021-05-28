// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears.

// The maximum number of consecutive characters in a row is 9

// If final result is not shorter (such as "bb" => "b2" ),
// return the original string.
const str1 = "aaaabbcdddbbb";
const expected1 = "a4b2c1d3b3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function stringEncode(str) {
    if (str.length < 2 || isNaN(str[0]) === false) {
        return str;
    }
    let codedStr = "";
    let currentChar = str[0];
    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== currentChar) {
            codedStr += currentChar += charCount;
            currentChar = str[i];
            charCount = 0;
        }
        charCount++;

    }
    return codedStr.length < str.length ? codedStr : str;
    // return codedStr;

}
// console.log(stringEncode(str1))


// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?
