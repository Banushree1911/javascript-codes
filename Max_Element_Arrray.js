function findMaximum(arr) {
    if (arr.length === 0) {
        return null; // Handle the case of an empty array
    }
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

// Example usage:
const arr = [10, 3, 5, 8, 22, 1];
const maxElement = findMaximum(arr);
console.log("The maximum element in the array is:", maxElement);