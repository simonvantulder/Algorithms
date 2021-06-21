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
    //edge case and setup
    if (str.length < 2 || isNaN(str[0]) === false) {
        return str;
    }
    let codedStr = "";
    let currentChar = str[0];
    let charCount = 0;

    //encode string & increment count to test for relative length
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== currentChar) {
            codedStr += currentChar += charCount;
            currentChar = str[i];
            charCount = 0;
        }
        charCount++;

    }
    //return encoded string if shorter
    return codedStr.length < str.length ? codedStr : str;
    // return codedStr;

}
// console.log(stringEncode(str1))


// String Decode
// Turn an encoded string into a decoded string.

// special bonus: how would you solve this to account for numbers larger than 9?
const str10 = "a1b2c1d11";
const expected10 = "aaabbcddddddddddd";

const numDictionary = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    0: true,
};

//one digit capability
function stringDecode1(str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
        let n = parseInt(str[i]);
        if (n) {
            decoded += str[i - 1].repeat(parseInt(str[i])); // The repeat() contructs new str repeated x# of times
        }
    }
    return decoded;
}

//two digit capability
function stringDecode99(str) {
    if (str.length = 0 || isNaN(str[0]) === false) {
        return str;
    }
    decodedStr = "";
    for (let i = 0; i < str.length; i += 2) {
        if (!isNaN(str[i + 2])) {
            let num = parseInt(str[i + 1] + str[i + 2]);
            for (let j = 0; j < num; j++) {
                decodedStr += str[i];
            }
        } else {
            for (let k = 0; k < str[i + 1]; k++) {
                decodedStr += str[i];
            }
        }
    }
    return decodedStr
}


function stringDecode2(str) {
    if (str.length = 0 || isNaN(str[0]) === false) { // if str starts with num or is empty return string
        return str;
    }
    let decodedStr = "";
    let currentChar = str[0]

    for (let i = 0; i < str.length; i ++) {
        let numString = "";
        if(isNaN(str[i])){
            currentChar = str[i]
        }else{
            while (!isNaN(str[i])) { // grab the full num following a char
                numString += str[i];
                i++
            }
            i--;
        }
        for (let j = 0; j < parseInt(numString); j++) {
            decodedStr += currentChar;
        }
    }
    return decodedStr
}


// console.log(stringDecode(str10))