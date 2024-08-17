function countMultiples(arr, num) {
    let count = 0;

    for (let element of arr) {
        if (element % num === 0) {
            count++;
        }
    }

    return count;
}
const array = [10, 15, 20, 25, 30];
const number = 5;
const result = countMultiples(array, number);
console.log(result);
