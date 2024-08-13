function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}

let numbers = [2, 4, 5, 7, 8, 11, 13];
let primeCount = countPrimes(numbers);
console.log(primeCount); 
