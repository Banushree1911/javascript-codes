function findFirstMultipleOf7(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 7 === 0) {
            return arr[i];
        }
    }
    return null; 
}

const numbers = [10, 15, 21, 30, 42];
const firstMultipleOf7 = findFirstMultipleOf7(numbers);

console.log(firstMultipleOf7); 
