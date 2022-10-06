const filter = (obj) => {
    if (typeof (obj) === "number") {
        console.log(`${obj} is a number`)
    }
    else if (typeof (obj) === "string") {
        console.log(`${obj} is a string`)
    }
    else if (typeof (obj) === "boolean") {
        console.log(`${obj} is a boolean`)
    }
}

filter(true)