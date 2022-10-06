const addBinary = (a, b) => {
    let result = a + b
    let binary = []
    let sum = "" // Binary gostermek icin string yaptim.

    while (result > 0) {
        binary.unshift(result % 2)
        result = Math.floor(result / 2)
    }

    binary.forEach(item => {
        sum += item
    })

    return console.log(sum)
}

addBinary(90, 2)