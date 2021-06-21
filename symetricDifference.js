/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];
/* 
    Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array,
    but have duplicates, so only one copy of each is kept.
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(2(n * m)) -> O(n * m), n = setA.length, m = setB.length the two
 *    constant 2 was because we are doing the n * m twice. The constant 2 is
 *    dropped.
 * - Space:  O(n + m) because potentially all items from each are kept.
 * @param  {Array<number>} setA
 * @param  {Array<number>} setB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
function symmetricDifferences(numsA, numsB) {
    const disjunctiveUnion = [];
    //push items in A taht are not in B
    for (const n of numsA) {
        if (!numsB.includes(n) && disjunctiveUnion.includes(n) === false) {
            disjunctiveUnion.push(n);
        }
    }
    // push items in B that are not in A
    for (const n of numsB) {
        if (!numsA.includes(n) && !disjunctiveUnion.includes(n)) {
            disjunctiveUnion.push(n);
        }
    }
    return disjunctiveUnion;
}

/**
 * - Time: O(2(n + m)) -> O(n) linear, n = numsA.length, m = numsB.length.
 *    Each is looped over twice, once from the arr then again over it's seen
 *    hash table.
 * - Space: O(2(n + m)) -> O(n) linear. Each arr is stored twice, once in it's
 *    own seen table and once in the output array.
 */
function symmetricDifferencesHashTable(numsA, numsB) {
    const seenA = {};
    const seenB = {};
    const disjunctiveUnion = [];

    for (const num of numsA) {
        // adding the num as the value avoids having to convert the string key back to int
        seenA[num] = num;
    }

    for (const num of numsB) {
        seenB[num] = num;
    }

        // push items in A that are not in B
    for (const key in seenA) {
        if (!seenB.hasOwnProperty(key)) {
            disjunctiveUnion.push(seenA[key]);
        }
    }

        // push items in B that are not in A
    for (const key in seenB) {
        if (seenA.hasOwnProperty(key) === false) {
            disjunctiveUnion.push(seenB[key]);
        }
    }
    return disjunctiveUnion;
}