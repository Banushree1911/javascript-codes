function sumPositiveNumbers(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            totalSum += arr[i];
        }
    }
    return totalSum;
}

// Example usage:
const arr = [10, -3, 5, 8, -22, 1];
const positiveSum = sumPositiveNumbers(arr);
console.log("The sum of all positive numbers in the array is:", positiveSum);