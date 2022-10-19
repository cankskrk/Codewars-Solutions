function romEncooder(number) {
    // convert the number to a roman numeral 
    let rom = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    let output = ""

    for (let i in rom) {
        while (number >= rom[i]) {
            output += i
            number -= rom[i]
        }
    }

    return console.log(output)

}

romEncooder(2048)