
const s1 = "ab#c"
const t1 = "ad#c"

const s2 = "ab##"
const t2 = "db##"

const s3 = "a##c"
const t3 = "#a#c"

const s4 = "a##ch"
const t4 = "#a#c"


function backspaceStringCompare(str1, str2) {
    //what if strings are diff lengths, one could have extra # chars so dont preemptively return false
    let newStr1 = [];
    let newStr2 = [];
    for (let i = 0; i < str1.length; i++) {
        //if current char is a backspace remove the previous char
        if (str1[i] === "#") {
            newStr1.pop();
        }
        //if current char is a backspace remove the previous char
        if (str2[i] === "#") {
            newStr2.pop();
        //else push to new string
        } else {
            newStr1.push(str1[i]);
            newStr2.push(str2[i]);
        }
    }
    // convert to string for comparison
    // newStr1 = newStr1.toString();
    // newStr2 = newStr2.toString();

    // console.log(newStr1, newStr2);

    return newStr1.toString() === newStr2.toString() ? true : false;
}

console.log(backspaceStringCompare(s4, t4))