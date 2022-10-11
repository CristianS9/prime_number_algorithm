This algorithm was tested in creating correctly the first 10.000 prime number. I'm lazy to do more.

# 1 Intro

I was looking for patterns in Prime Number and I found and intersting one wich almost could generate prime numbers in a sequential mode.
But there was a problem, there was a list of generated number that were not primes, so lets call them anti-primes.
Suprisingly this list already existed: [A199593](https://oeis.org/A199593). I named them anti-primes :D since this list generates false primes.
`Conclusion: Generated numbers - anti-primes = Prime Numbers!`

So this expository explains an algorithm that generates prime numbers in a for loop.

# 2 Formulas

## 2.1 My algorithm

Quite simple, it was fun to test:

| $ x = even => p = 3x-1$

| $ x = odd => p = 3x-2$

## 2.2 A199593 List

This [list/sequence](https://oeis.org/A199593) can be defined as all `n` numbers such that: `3n, 3n-1` and `3n-2` are ALL composite numbers

The formula proposed for this list is:
$((1+(-1)^k)((-1)^n)(2n+3)+2k(6n+9+(-1)^n)+((-1)^k)+(12n^2)+36n+29)/4$ and $n,k$ being all natural numbers and 0.

## 2.3 Final algorithm

Basically the algoritm consists of aplying the simple IF/ELSE from section 2.1 but excluding the indexes that are anti-primes => 2.2 section list

<code>

    CANT_PRIMES = 10000 // Calculate the first 10k prime numbers
    gen = [] // Array to store generated prime numbers

    for (i = 0; i < CANT_PRIMES; i++) {
        // If the index is an anti-prime number don't use it
        if (i is anti-prime) {
            continue;
        }

        num = 3 * i - 1; // Asuming it is odd

        // If is even, then we subscarta one more
        if (i % 2 != 0) {
            num--;
        }

        // Add to array
        gen.push(num);
    }

</code>

## 2.4 Extra info on A199593

Since I'm not the one that created that list, I didn't dug on how the formula works,Im laizy, thats a reallity I have assumed :), so the use I do in the code is using brute-force to create the A199593 List.
// But one of the thins I noticed:

-   n and k need to be equal to don't loose any anti-prime number. IF this variables are low, some anti-prime numbers won't be generated,thus some generated numbers will not be primes!
-   Remove all the 0's from N,K and CANT_PRIMES and then. n\*k> CANT_PRIMES must be true so you don't loose any anti-prime numbers.

# Extra Use of the BASIC formula

This algorithm can be changed so it checks if a number is prime. Basically get $x-1$ and $x-2$, if one of them is divisible by 3 and the resulting number is not anti-prime then $x$ is a prime number
