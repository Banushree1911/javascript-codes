function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

// Example usage:
const arr = [10, 3, 5, 8, 3, 1, 3];
const elementToCount = 3;
const occurrences = countOccurrences(arr, elementToCount);
console.log(The element ${elementToCount} occurs ${occurrences} times in the array.);