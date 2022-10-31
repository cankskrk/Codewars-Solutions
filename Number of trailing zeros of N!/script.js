function zeros(n) {

    let t = 0

    while (n > 0) {
        n = Math.floor(n / 5)
        t += n
    }

    return console.log(t)
}


zeros(30)