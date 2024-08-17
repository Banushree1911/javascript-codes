function countPowersOfTwo(arr) {
    let count = 0;

    for (let element of arr) {
        if (element > 0 && (element & (element - 1)) === 0) {
            count++;
        }
    }

    return count;
}

const array = [1, 2, 3, 4, 8, 16, 20];
const result = countPowersOfTwo(array);
console.log(result); 
