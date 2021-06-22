/*
------------------------------------------------------------ ALGO 1 --------------------------------------------------------------
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
const str1 = " Hello there thanks for trying my Kata";
const str2 = "    Hello     World   ";
const str3 = "";
const str4 = "Do We have A Hashtag";

function generateHashtag(str) {
  let resultStr = "#";
  for (let i = 0; i < str.length; i++) {
    // console.log("inside loop");
    if (str[i] !== " ") {
      if (str[i - 1] === " " && i > 0) {
        resultStr += str[i].toUpperCase();
      } else if (i === 0) {
        resultStr += str[i].toUpperCase();
      } else {
        resultStr += str[i];
      }
    }
  }
  if (resultStr.length > 140 || resultStr.length < 2) {
    return false;
  }
  return resultStr;
}

console.log(generateHashtag(str1));
console.log(generateHashtag(str2));
console.log(generateHashtag(str3));
console.log(generateHashtag(str4));
//--------------------------------------------------------- ALGO 2 ---------------------------------------------------------------
/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/
/*
const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };


 * Inverts the given object's key value pairs so that the original values
* become the keys and the original keys become the values.
* - Time: O(n).
* - Space: O(1).
* @param {Object<string, string>} obj An object with string keys and string values.
* @return The given object with key value pairs inverted.
*/

//currently set up for inplace rearranging
// to use a new obj comment out ln 72-73 & 75 -> use ln 71 & 76
function invertObj(obj) {
  let resultObj = {};
  Object.keys(obj).map((key) => {
    //resultObj[obj[key]] = key;
    obj[obj[key]] = key;
    delete obj[key];
  });
  return obj;
  //return resultObj;
}

console.log(invertObj(obj1));

//---------------------------------------------------------------- ALGO 3 ---------------------------------------------------------------------

/* 
  Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
    https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
  The more you deal with objects, especially ones with many nested objects, where you
  are chaining dot notation to access nested values, the more you run into these errors:
    Uncaught TypeError: Cannot read property 'keyName' of undefined
    Uncaught TypeError: Cannot read property 'keyName' of null
  
  These errors mean, somewhere along your chain of dots, one of the keys did not exist
  on the object so it returned undefined, and then the next dot was trying to access
  a key on undefined, or the key did exist but null was it's value.
  One example of how this might happen is getting JSON data back from an API. Sometimes, 
  the record you requested has more data so there are more levels of nesting, which you get used to,
  so you write your code to access the nested data but then you request a different record, and
  less data is available, so your code breaks when trying to access nested data that isn't there.
  There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
  you look through a "lens" to help you see into an object and safely attempt to access a nested value.
  Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
  one at a time, to make sure it is not undefined or null before going to the next dot.
  Input:
    Object,
    Array of strings representing a path of keys in the Object
  Output:
    - Value from traversing the object to the last key
    - null if at any point accessing a key returns undefined
      - this means a key was not found / the Object was not nested as deep as the path of keys goes
    - the given object if array of keys is empty
*/

const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
      name: "Jack",
      address: {
        line1: "westwish st",
        line2: "washmasher",
        city: "wallas",
        state: "WX",
      },
    },
    favorites: {
      number: 0,
    },
  };
  
  const keys1 = ["personalInfo", "address", "city"];
  const expected1 = "wallas";
  
  const keys2 = ["personalInfo", "address", "country"];
  const expected2 = null;
  
  const keys3 = ["personalInfo", "mainHobby", "yearsActive"];
  const expected3 = null;
  
  const keys4 = ["favorites", "number"];
  const expected4 = 0;
  
  const keys5 = [];
  const expected5 = user;
  
  /**
   * Retrieves the value at the end of the path of keys or null.
   * - Time O(n).
   * - Space O(1).
   * @param {Object<string, any>} obj
   * @param {Array<string>} keys
   * @returns {any} The value at end of path of given keys or null.
  */

  function lens(obj, keys) {
    if (keys.length === 0) {
      return obj;
    }
    let temp = obj;
    for (let i = 0; i < keys.length; i++) {
      if (temp.hasOwnProperty(keys[i])) {
        temp = temp[keys[i]];
      } else {
        return null;
      }
    }
    return temp;
  }
  
  console.log(lens(user, keys1));
  console.log(lens(user, keys2));
  console.log(lens(user, keys3));
  console.log(lens(user, keys4));
  console.log(lens(user, keys5));

  
  let test = user?.something;
  let test2 = user?.personalInfo?.address?.line1;
  console.log(test);

  /**
   * Retrieves the value at the end of the path of keys or null.
   * .reduce + optional chaining 
   * - Time O(n).
   * - Space O(1).
   * @param {Object<string, any>} obj
   * @param {Array<string>} keys
   * @returns {any} The value at end of path of given keys or null.
  */
  function lensReduce2(obj, keys) {
/*
 * The reduce() method "reduces" the array to a single value.
 * The reduce() method executes a provided function for each value of the array (from left-to-right).
 * The return value of the function is stored in an accumulator (result/total).
 * Note: reduce() does not execute the function for array elements without values.
 * Note: This method does not change the original array.
*/
    const val = keys.reduce((curr, key) => curr?.[key], obj);
    return val === undefined ? null : val;
  }
  