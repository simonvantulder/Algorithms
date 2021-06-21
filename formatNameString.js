    /**
     * @param {Array<Object>}  
     * @returns {String} 
     */

    // time complexity O(n)
//first soln
function list(arr) {
    if(arr.length === 0){
        return "";
    }

    let nameArr = []

    nameArr = arr.map((i) => nameArr.push(i["name"]))
    let lastPerson = nameArr.pop();
    let nameStr = nameArr.join(", ");
    nameStr+=` & ${lastPerson}`;

    return arr.length > 1 ? nameStr : nameArr[0];
}


console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))


//clever regex soln from codewars
// var list2 = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
