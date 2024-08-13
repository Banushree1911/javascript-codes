function findFirstIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; 
}
let numbers = [3, 5, -2, 7, -8];
let index = findFirstIndex(numbers, 7);
console.log(index); 
