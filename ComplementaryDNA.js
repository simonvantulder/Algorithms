
function DNAStrand(dna) {
    complementaryDNA = "";
    pairs = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    }
    for( let i = 0; i < dna.length; i++){
        if(pairs.hasOwnProperty(dna[i])){
            complementaryDNA += pairs[dna[i]]
        }
    }
    return complementaryDNA
}

//refactored
function DNAStrand_Functional(dna) {
    let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
    
    return dna.replace(/./g, function (c) {
        return pairs[c]
    })
}


console.log(DNAStrand("ATTGCC"))