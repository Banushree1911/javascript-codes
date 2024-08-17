function firstDivisibleBy3And5(arr) {
    for (let element of arr) {
        if (element % 3 === 0 && element % 5 === 0) {
            return element;
        }
    }
    return null;
}

const array = [2, 10, 15, 20, 30];
const result = firstDivisibleBy3And5(array);
console.log(result); 
