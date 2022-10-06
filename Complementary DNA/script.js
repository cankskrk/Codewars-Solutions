const DNAStrand = (DNA) => {

    DNA = DNA.toUpperCase()

    let complement = ""

    for (let char in DNA) {

        if (DNA[char] === "T") {
            complement += "A"
        }
        if (DNA[char] === "A") {
            complement += "T"
        }
        if (DNA[char] === "C") {
            complement += "G"
        }
        if (DNA[char] === "G") {
            complement += "C"
        }
    }

    return console.log(complement)
}

DNAStrand("ATTGC")