const decTohex = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
}

const toHex = (num) => {
    let rem = ""

    if (num == 0 || !num) {
        return "00"
    }

    while (num !== 0) {
        rem += decTohex[num % 16]
        num = Math.floor(num / 16)
    }

    return rem.split("").reverse().join("")
}

function rgb(r, g, b) {
    return console.log(`#${toHex(r)}${toHex(g)}${toHex(b)}`)
}

rgb(255, 145)