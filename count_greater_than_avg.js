function countAboveAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    let count = 0;

    for (let element of arr) {
        if (element > average) {
            count++;
        }
    }

    return count;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = countAboveAverage(array);
console.log(result); 
