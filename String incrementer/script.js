function incrementString(strng) {

    return strng.replace(/\d*$/, match => {

        let word = strng.replace(/\d/g, "")

        if (!match) return console.log(word + "1")

        let strNum = String(Number(match) + 1)
        let diff = match.length - strNum.length

        return console.log(diff > 0 ? word + "0".repeat(diff) + strNum : word + strNum)
    })

}

incrementString("foo")
incrementString("foo099")
incrementString("foo0099")
