const words = ["AA", "AB", "AD", "AE", "AG", "AH",
    "AI", "AL", "AM", "AN", "AR", "AS", "AT", "AW",
    "AX", "AY", "BA", "BE", "BI", "BO", "BY", "CH",
    "DA", "DE", "DI", "DO", "EA", "ED", "EE", "EF",
    "EH", "EL", "EM", "EN", "ER", "ES", "ET", "EW",
    "EX", "FA", "FE", "FY", "GI", "GO", "GU", "HA",
    "HE", "HI", "HM", "HO", "ID", "IF", "IN", "IO",
    "IS", "IT", "JA", "JO", "KA", "KI", "KO", "KY",
    "LA", "LI", "LO", "MA", "ME", "MI", "MM", "MO",
    "MU", "MY", "NA", "NE", "NI", "NO", "NU", "NY",
    "OB", "OD", "OE", "OF", "OH", "OI", "OK", "OM",
    "ON", "OO", "OP", "OR", "OS", "OU", "OW", "OX",
    "OY", "PA", "PE", "PI", "PO", "QI", "RE", "SH",
    "SI", "SO", "ST", "TA", "TE", "TI", "TO", "UG",
    "UH", "UM", "UN", "UP", "UR", "US", "UT", "WE",
    "WO", "XI", "XU", "YA", "YE", "YO", "YU", "ZA",
    "ZE", "ZO"]


const values = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10,
}

// very ugly brute force O(n^2) solution
function crossword2x2(puzzle) {
    let letter, letterIdx, letterRow;
    let wordsLetterAtIdx, totalPoints = wordOnePoints = 0;
    let returnArr = [];

    // check puzzle to find the letter & placements, dont need the block unless displaying it
    // puzzle.length instead of hardcoding directly into the indeces so the crossword could be expanded more readily to 3x3, 4x4 etc 
    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {
            if (values.hasOwnProperty(puzzle[i][j])) {
                letter = puzzle[i][j]; // validate index is the set letter, save for use
                letterRow = i;
                letterIdx = j;
            }
        }
    }
    // loop through words to find words with the same letter in the same position
    wordsLetterAtIdx = words.filter(w => w[letterIdx] === letter)
    // count point value for each char & push word & points to return arr
    for (let word = 0; word < wordsLetterAtIdx.length; word++) {
        for (let char = 0; char < wordsLetterAtIdx[word].length; char++) {
            if (values.hasOwnProperty(wordsLetterAtIdx[word][char])) {
                wordOnePoints += values[wordsLetterAtIdx[word][char]]; // add point value if it exists
            }
        }
        for (let w = word; w < wordsLetterAtIdx.length; w++) {
            totalPoints = wordOnePoints;
            for (let char = 0; char < wordsLetterAtIdx[w].length; char++) {
                console.log("char = ", char);
                if (values.hasOwnProperty(wordsLetterAtIdx[w][char])) {
                    totalPoints += values[wordsLetterAtIdx[w][char]]; // add point value if it exists
                }
            }
            console.log("hi");
            //push [word1, word2, totalPoints] & [word2, word1, totalPoints] to returnArr
            if (word !== w) {
                returnArr.push([wordsLetterAtIdx[word], wordsLetterAtIdx[w], totalPoints], [wordsLetterAtIdx[w], wordsLetterAtIdx[word], totalPoints]);
            }
        }
    }
    // console.log("returnArr = ", returnArr);
    return returnArr
}


//refactored
const Crossword2x2 = ([[a, b], [c, d]]) => (
    letter = [a, b, c, d].filter(x => x != "_" && x != "#")[0],
    r = [letter === b, letter === a, letter === d, letter === c].some((v, i) => v && [a, b, c, d][i] == "#"),
    console.log(r),
    words
        .filter(x => letter == x[+(a == "_" || letter == d)])
        .flatMap(x => words
            .filter(y => x != y && x[+(a == "#" || d == "_")] == y[+(a == "#" || letter == d)])
            .map(y => [r ? y : x, r ? x : y, [...x, ...y].reduce((a, v) => a + values[v], 0)])
        )
        .sort(([x], [y]) => x < y ? -1 : x > y)
        .sort((x, y) => y[2] - x[2])
);

//oneliner from valtissimo on codewars
const crossword2x2=r=>[r=>[r.join("")],r=>[r,r.search("#"),r.search(/[^_#]/)],(r,a,t)=>[r.charAt(t),a,t],(r,a,t)=>[r,3*a+t-1+(t<a)|0],(r,a)=>[(r,a)=>words.filter(t=>t.charAt(r%2)===a),r,...("'&.%\"*$,+ ()".charCodeAt(a)-32).toString(2).padStart(4,"0").split("").map(r=>parseInt(r))],(r,a,t,e,c,o)=>r(t,a).reduce((a,t)=>a.concat(r(c,t.charAt(e)).filter(r=>r!==t).map(r=>[t,r,(t+r).split("").reduce((r,a)=>r+values[a],0)]).map(r=>o?[r[1],r[0],r[2]]:r)),[]).sort((r,a)=>r[2]===a[2]?(r[0]+r[1]).localeCompare(a[0]+a[1]):a[2]-r[2])].reduce((r,a)=>a(...r),[r]);


console.log(Crossword2x2(['#_', '_G']));