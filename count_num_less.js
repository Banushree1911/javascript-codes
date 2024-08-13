function countLessThan(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < value) {
            count++;
        }
    }
    return count;
}

let numbers = [1, 5, 3, 7, 2, 8];
let count = countLessThan(numbers, 5);
console.log(count); 
