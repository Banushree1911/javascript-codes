function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Example usage:
const arr = [10, 3, 5, 8, 22, 1];
const evenCount = countEvenNumbers(arr);
console.log("The number of even numbers in the array is:", evenCount);
