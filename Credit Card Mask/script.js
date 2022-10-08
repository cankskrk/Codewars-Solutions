const maskify = (card_number) => {

    let numbers = card_number.split("")

    if (numbers.length > 4) {

        for (let i = 0; i < numbers.length - 4; i++) { // Son 4 hanesi acikta kalacak
            numbers[i] = "#"
        }
    }

    card_number = numbers.join("")

    return console.log(card_number)
}

maskify("4556364607935616")