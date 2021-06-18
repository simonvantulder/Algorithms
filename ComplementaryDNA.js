/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(n).
 * - Space: O(n).
 * @param {String} dna
 * @returns {String} complementaryDNA
 */
function DNAStrand(dna) {
    complementaryDNA = "";
    pairs = {
        A : "T",
        T : "A",
        C : "G",
        G : "C"
    }
    // for each char in dna string, if is DNA, concat complementary DNA in new str
    for( let i = 0; i < dna.length; i++){
        if(pairs.hasOwnProperty(dna[i])){
            complementaryDNA += pairs[dna[i]]
        }
    }
    return complementaryDNA
}

//refactored
function DNAStrand_Functional(dna) {
    pairs = {
        A : "T",
        T : "A",
        C : "G",
        G : "C"
    }    
    return dna.replace(/./g, function (c) {
        return pairs[c]
    })
}


console.log(DNAStrand("ATTGCC"))