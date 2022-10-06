const digPow = (num, pow) => {

    let digits = []
    let sum = 0
    const chosen_number = num

    while (num > 0) {
        digits.unshift(num % 10) // Sayilarin duzgun sira ile  aktarilmasi onemli
        num = Math.floor(num / 10)
    }

    digits.forEach(item => {
        sum += item ** pow
        console.log
        pow++
    })

    if (sum % chosen_number === 0) {
        return console.log(sum / chosen_number)
    }
    else {
        return console.log(-1)
    }
}

digPow(46288, 3)