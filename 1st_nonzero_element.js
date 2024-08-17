function firstNonZero(arr) {
    for (let element of arr) {
        if (element !== 0) {
            return element;
        }
    }
    return null; 
}

const array = [0, 0, 3, 0, 5];
const result = firstNonZero(array);
console.log(result); 
