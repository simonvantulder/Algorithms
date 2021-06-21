/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.

*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */

function findObjects(criteria, collection) {
    let resultArr = [];
    let keysArr = Object.keys(criteria);
    for (let i = 0; i < collection.length; i++) {
        let j = 0;
        let matchIdx = 0;

        // for each match -> increment; 
        while (
            collection[i].hasOwnProperty(keysArr[j]) &&
            criteria[keysArr[j]] == collection[i][keysArr[j]]
        ) {
            matchIdx++;
            j++;
        }
        //push to returnArr if match 
        if (matchIdx == keysArr.length) {
            resultArr.push(collection[i]);
        }
    }
    //return all items 
    return resultArr;
}
console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));