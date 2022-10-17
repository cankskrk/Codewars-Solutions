const RomanNumerals = {

    rom: {
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
    },


    toRoman: (num) => {
        let output1 = ""
        for (let i in RomanNumerals.rom) {
            while (num >= RomanNumerals.rom[i]) {
                output1 += i
                num -= RomanNumerals.rom[i]
            }
        }

        return console.log(output1)
    },


    fromRoman: (rom_num) => {

        let output2 = 0
        rom_num = rom_num.split("")

        for (let i = 0; i < rom_num.length; i++) {

            let current = RomanNumerals.rom[rom_num[i]]
            let next = RomanNumerals.rom[rom_num[i + 1]]

            if (current < next) {
                output2 += next - current
                i++

            } else {
                output2 += current
            }
        }

        return console.log(output2)
    }
}

RomanNumerals.toRoman(2008)
RomanNumerals.fromRoman("MCMXIII")