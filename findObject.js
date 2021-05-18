/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
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
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */

function findObjects(criteria, collection) {
    let resultArray = [];
    let keysArray = Object.keys(criteria);
    for (let i = 0; i < collection.length; i++) {
        let j = 0;
        let matchCounter = 0;
        while (
            collection[i].hasOwnProperty(keysArray[j]) &&
            criteria[keysArray[j]] == collection[i][keysArray[j]]
        ) {
            matchCounter++;
            j++;
        }
        if (matchCounter == keysArray.length) {
            resultArray.push(collection[i]);
        }
    }
    return resultArray;
}
console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));