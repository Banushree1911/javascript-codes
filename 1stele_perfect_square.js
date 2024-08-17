function firstPerfectSquare(arr) {
    for (let element of arr) {
        if (Number.isInteger(Math.sqrt(element))) {
            return element;
        }
    }
    return null; 
}

const array = [2, 3, 5, 16, 7, 9];
const result = firstPerfectSquare(array);
console.log(result); 
