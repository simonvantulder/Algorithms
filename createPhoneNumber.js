//plain oneliner soln
function createPhoneNumber(arr){
    return '('+arr[0]+arr[1]+arr[2]+') '+arr[3]+arr[4]+arr[5]+'-'+arr[6]+arr[7]+arr[8]+arr[9];
}

//standard soln:
//loop through arr put first 3 nums in parens, add space and next 3 num
// add dash and last four nums
function createPhoneNumber(arr) {
    if (arr.length !== 10) {
        return arr;
    }
    let phoneStr = "("
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return arr;
        }
        if (i === 3) {
            phoneStr += ") ";
        }
        else if (i === 6) {
            phoneStr += "-";
        }
        phoneStr += arr[i];
    }
    return phoneStr;
}

//refactored
function createPhoneNum(arr) {
    arr = arr.join('');
    return '(' + arr.substring(0, 3) + ') ' + arr.substring(3, 6) + '-' + arr.substring(6);
}

// alt Codewars solution i liked
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}


console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));