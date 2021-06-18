const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]

const addHonor = (honorific, fullNames) => {
    let honorableArr = [];

    // split the name & remove comma, add to newArr in FName, LName format 
    for (let i = 0; i < fullNames.length; i++) {
        let name = fullNames[i].split(", ");
        honorableArr.push(`${honorific} ${name[1]} ${name[0]}` )
    }

    return honorableArr
}
console.log(addHonor(honorific3, names3))