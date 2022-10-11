const fs = require("fs");
const read = fs.readFileSync("./primes10k.txt", "utf8").split("\n");

// Remark: remove the 0's from all numbers, then it seems that if N*K > CANT_PRIMES there is not a single fail, if this multiplication is lower, there are anti-Primes missing
const N = 4000;
const K = 4000;
const CANT_PRIMES = 15000;

// Load primes from file
let primes = [];
for (let i = 0; i < read.length; i++) {
    primes.push(parseInt(read[i]));
}

// function that return the sequence of the formula specified on A199593
// https://oeis.org/A199593
function antiPrime(n, k) {
    const res =
        ((1 + (-1) ** k) * (-1) ** n * (2 * n + 3) +
            2 * k * (6 * n + 9 + (-1) ** n) +
            (-1) ** k +
            12 * n ** 2 +
            36 * n +
            29) /
        4;
    return res;
}

// Generate the antiPrime numbers by for all n,k numbers
let antiP = [];
let num;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
        num = antiPrime(i, j);
        antiP.push(num);
    }
}

console.log("Last calculated anti-prime " + antiP[antiP.length - 1]);

// GENERATE new prime numbers
let gen = [];
for (let i = 0; i < CANT_PRIMES; i++) {
    // If the index is an anti-prime number don't use it
    if (antiP.includes(i)) {
        continue;
    }

    num = 3 * i - 1;
    if (i % 2 != 0) {
        num--;
    }

    gen.push(num);
}

console.log("Last prime number from the file " + primes[primes.length - 1]); // for some reason the code gives NAN if the number is the last one

const lastGeneratedNumber = gen[gen.length - 1];
console.log("Last generated number " + lastGeneratedNumber);

// Check if the generated number is not in the prime numbers from the list
for (let i = 0; i < gen.length; i++) {
    if (!primes.includes(gen[i])) {
        console.log("Generated : " + gen[i] + " is not a prime number!");
    }
}

console.log("--------------------------");
console.log("--------------------------");

// Check if all the primes are in the generated list
let i;
while (primes[i] <= lastGeneratedNumber) {
    if (!gen.includes(primes[i])) {
        console.log("Prime " + primes[i] + " was not generated!");
    }

    i++;
}

console.log("FIN!");
