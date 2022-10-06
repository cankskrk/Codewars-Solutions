const uniqueInOrder = (iterable) => {
    let unique_list = []

    for (let i = 0; i < iterable.length; i++) {
        let current = iterable[i]
        let next = iterable[i + 1]

        if (current != next) {
            unique_list.push(current)
        }
    }

    return console.log(unique_list)
}

uniqueInOrder("AAAABBBCCDAABBB")