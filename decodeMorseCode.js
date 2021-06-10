morse = {
    '-.-.--': '!',
    '.-..-.': '"',
    '...-..-': '$',
    '.-...': '&',
    '.----.': '\'',
    '-.--.': '(',
    '-.--.-': ')',
    '.-.-.': '+',
    '--..--': ',',
    '-....-': '-',
    '.-.-.-': '.',
    '-..-.': '/',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '..--..': '?',
    '.--.-.': '@',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '..--.-': '_',
    '...---...': 'SOS'
}

decodeMorse = function (morseCode) {

    let returnArr = []
    let isLeadingSpace = true;
    let isTrailingSpace = true;
    
    //separate the morsecode string into words
    let arr = morseCode.split(" "); //set arr = [word in morsecode]

    // remove trailing spaces 
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != "") {
            isTrailingSpace = false;
            break;
        }
        if (arr[i] == "") {
            arr.pop()
        }
    }
    // remove leading spaces 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            isLeadingSpace = false;
        }
        if (isLeadingSpace === true) {
            continue;
        }

        //translate morsecode chars into letters
        if (morse.hasOwnProperty(arr[i])) {
            returnArr.push(morse[arr[i]]);
        } else if (arr[i] == "" && arr[i + 1] == "") {
            returnArr.push(" ");
        }
    }
    return returnArr.join("")
}

console.log(decodeMorse('       .... . -.--   .--- ..- -.. .     '))



//refactored solution
const convertCharacter = character => morse[character];

const convertWord = word => word.split(" ") // split words into chars
    .map(convertCharacter) //translate chars into letters
    .join(''); //rejoin letters into words


const convertSentence = sentence => sentence.trim()
    .split('  ')//split into words
    .map(convertWord) //call to convert individual words
    .join(' ');// join words back into sentence after translation

//call convertSentence to split morse phrase into words

decodeMorse2 = morseCode => convertSentence(morseCode);

console.log(decodeMorse2('       .... . -.--   .--- ..- -.. .     '))
