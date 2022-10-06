function isPrime(num) {
    if (num < 2) return console.log(`${num} is not a prime number.`);
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
        if (num % i === 0) {
            return console.log(`${num} is not a prime number.`);
        }
    }
    return console.log(`${num} is a prime number.`);
}

isPrime(97)