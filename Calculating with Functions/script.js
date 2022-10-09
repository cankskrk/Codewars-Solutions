// General Function

const command = (number, operation) => {
    if (!operation) { // Eger herhangi bir operasyon fonksiyonu yoksa sayiyi dondur
        return number
    }

    return operation(number) // Operasyon fonksiyonlarina referans
}



// Number Functions

const zero = (operation) => {
    return command(0, operation)
}

const one = (operation) => {
    return command(1, operation)
}

const two = (operation) => {
    return command(2, operation)
}

const three = (operation) => {
    return command(3, operation)
}

const four = (operation) => {
    return command(4, operation)
}

const five = (operation) => {
    return command(5, operation)
}

const six = (operation) => {
    return command(6, operation)
}

const seven = (operation) => {
    return command(7, operation)
}

const eight = (operation) => {
    return command(8, operation)
}

const nine = (operation) => {
    return command(9, operation)
}



// Operation Functions

const plus = (a) => { // Ayni ozelligi parametre aldiginda yitirmemesi icin tekrar toplama fonksiyonu dondurduk ki icinde bulundugu fonksiyonda calissin
    return (b) => {
        return console.log(b + a)
    }
}

const minus = (a) => {
    return (b) => {
        return console.log(b - a)
    }
}

const times = (a) => {
    return (b) => {
        return console.log(b * a)
    }
}

const dividedBy = (a) => {
    return (b) => {
        return console.log(b / a)
    }
}


seven(times(five()))
