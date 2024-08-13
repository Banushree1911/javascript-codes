function countDivisibleBy(arr, divisor) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            count++;
        }
    }
    return count;
}


let numbers = [3, 5, 10, 12, 15];
let count = countDivisibleBy(numbers, 5);
console.log(count); 
