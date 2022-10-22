const order = (words) => {
    const ordered = words.split(" ").sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/)
    }).join(" ")

    return console.log(ordered)
}

order("4of Fo1r pe6ople g3ood th5e the2")
