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
    let honorableArr = []
    for (let i = 0; i < fullNames.length; i++) {
        let name = i.split(", ");
        honorableArr.push(honorific, name[1], name[0])
        // honorableArr.push( honorific )
    }
    return honorableArr
}
console.log(addHonor(honorific1, names1))