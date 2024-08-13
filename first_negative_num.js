function findFirstNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
    return null; 
}

let numbers = [3, 5, -2, 7, -8];
let firstNegative = findFirstNegative(numbers);
console.log(firstNegative); // Output: -2
